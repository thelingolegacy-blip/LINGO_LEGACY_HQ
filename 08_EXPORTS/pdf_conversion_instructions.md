# Converting Markdown to PDF

Recommended: pandoc + wkhtmltopdf or pandoc + LaTeX

Example using pandoc + wkhtmltopdf:
1. Install pandoc and wkhtmltopdf.
2. Run:
   pandoc Game_Design_Bible_Template.md -o Game_Design_Bible_Template.pdf --pdf-engine=wkhtmltopdf

Example using pandoc + LaTeX:
   pandoc Master_Plan.md -o Master_Plan.pdf --pdf-engine=xelatex

For bulk conversions, add a simple script in /tools/convert-md-to-pdf.sh
