#!/usr/bin/env python3
"""GitHub repository URL validator.

Validates GitHub repo URLs found in files or supplied on stdin, resolves repository
metadata through the GitHub REST API, and reports actionable diagnostics.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path
from urllib.parse import urlparse

REPO_URL = re.compile(r"https://github\.com/([^/\s]+)/([^/\s?#]+?)(?:\.git)?/?(?:[?#].*)?$")


def diagnose(raw: str) -> dict:
    raw = raw.strip()
    result = {"input": raw, "format_valid": False, "exists": None, "private": None, "diagnosis": None, "canonical_url": None}
    if not raw:
        result["diagnosis"] = "empty URL"
        return result
    parsed = urlparse(raw)
    if parsed.scheme != "https" or parsed.netloc.lower() != "github.com":
        result["diagnosis"] = "URL must use https://github.com/<owner>/<repo>"
        return result
    match = REPO_URL.match(raw)
    if not match:
        result["diagnosis"] = "invalid GitHub repository URL format"
        return result
    owner, repo = match.group(1), match.group(2)
    result["format_valid"] = True
    api_url = f"https://api.github.com/repos/{owner}/{repo}"
    request = urllib.request.Request(api_url, headers={"Accept": "application/vnd.github+json", "User-Agent": "LingoLegacy-GitHub-URL-Validator"})
    token = os.getenv("GITHUB_TOKEN")
    if token:
        request.add_header("Authorization", f"Bearer {token}")
    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            data = json.load(response)
        result["exists"] = True
        result["private"] = bool(data.get("private"))
        result["canonical_url"] = data.get("html_url")
        result["default_branch"] = data.get("default_branch")
        result["diagnosis"] = "valid and accessible"
    except urllib.error.HTTPError as exc:
        if exc.code == 404:
            result["exists"] = False
            result["diagnosis"] = "repository not found or inaccessible; with an authenticated token this commonly means the repo was deleted, renamed, or the token lacks access"
        elif exc.code in (401, 403):
            result["diagnosis"] = "GitHub authentication or permission failure"
        else:
            result["diagnosis"] = f"GitHub API returned HTTP {exc.code}"
    except urllib.error.URLError as exc:
        result["diagnosis"] = f"GitHub API network error: {exc.reason}"
    return result


def collect_urls(root: Path) -> list[str]:
    urls: set[str] = set()
    for path in root.rglob("*"):
        if not path.is_file() or ".git" in path.parts or path.stat().st_size > 2_000_000:
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        for match in re.findall(r"https://github\.com/[^\s)>'\"]+", text):
            urls.add(match.rstrip(".,;"))
    return sorted(urls)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("urls", nargs="*", help="GitHub repository URLs")
    parser.add_argument("--scan", type=Path, help="scan a directory for GitHub URLs")
    args = parser.parse_args()
    urls = list(args.urls)
    if args.scan:
        urls.extend(collect_urls(args.scan))
    if not urls and not sys.stdin.isatty():
        urls.extend(line.strip() for line in sys.stdin if line.strip())
    if not urls:
        parser.error("provide URLs or --scan PATH")
    results = [diagnose(url) for url in sorted(set(urls))]
    print(json.dumps(results, indent=2))
    return 0 if all(r["diagnosis"] == "valid and accessible" for r in results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
