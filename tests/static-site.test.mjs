import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const htmlPath = path.join(root, 'index.html');
const readmePath = path.join(root, 'README.md');
const schemasPath = path.join(root, 'schemas');

test('HQ static entry point and operating README exist', () => {
  assert.equal(fs.existsSync(htmlPath), true, 'index.html must exist');
  assert.equal(fs.existsSync(readmePath), true, 'README.md must exist');
});

test('HQ entry point identifies the Lingo Legacy canonical site', () => {
  const html = fs.readFileSync(htmlPath, 'utf8');
  assert.match(html, /^<!doctype html>/i, 'entry point must be an HTML5 document');
  assert.ok(html.includes('<html lang="en"'), 'document language must be declared');
  assert.ok(html.includes('<title>Lingo Legacy Studio'), 'page title must identify Lingo Legacy');
  assert.ok(html.includes('<link rel="canonical" href="https://thelingolegacy.com"'),
    'canonical URL must point to the official Lingo Legacy domain');
});

test('every committed JSON schema parses as valid JSON', () => {
  assert.equal(fs.existsSync(schemasPath), true, 'schemas directory must exist');
  const files = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(fullPath);
      else if (entry.isFile() && entry.name.endsWith('.json')) files.push(fullPath);
    }
  };
  walk(schemasPath);
  assert.ok(files.length > 0, 'at least one JSON schema must be present');
  for (const file of files) {
    assert.doesNotThrow(() => JSON.parse(fs.readFileSync(file, 'utf8')), `invalid JSON: ${path.relative(root, file)}`);
  }
});
