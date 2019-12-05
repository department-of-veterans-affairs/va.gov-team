# PDF rendering options

## Problem statement

Like the current eBenefits app, our benefits app will allow users to print out a partially completed paper form as a PDF. This document is to consolidate considerations of how to implement this feature.

## Resources

- https://www.ruby-toolbox.com/categories/pdf_generation

- https://fraserxu.me/2015/08/20/pdf-generation-on-the-web/

- https://github.com/department-of-veterans-affairs/hacktheforms/issues/1


## Solution considerations

### Name
- **Website**

- **Developer experience with solution?**

- **F/OSS?**

- **Description**

- **Pros**

- **Cons**

### EVSS
- **Website** N/A

- **Developer experience with solution?** At other organization

- **F/OSS?** N

- **Description** Use the existing PDF generation solutions

- **Pros** There is already a working option if we can tap into it.

- **Cons** Requires further synchronization of the two systems.

### Adobe Echo (formerly Echo Sign)
- **Website** https://acrobat.adobe.com/us/en/sign.html

- **Developer experience with solution?** Austin, Greg(?)

- **F/OSS?** No. $30/seat/mo

- **Description** Mostly focused on Enterprise and signing

- **Pros** It's Adobe.

- **Cons** Austin, "I’ve used it with echosign before; I remember it being a pain to work with."


### Prince XML
- **Website**  http://www.princexml.com

- **Developer experience with solution?** Carl

- **F/OSS?** No. $3800/server

- **Description** HTML and DocBook rendering. Aimed at publishers.

- **Pros** Very advanced CSS support, some JS support

- **Cons** Expensive. All of the HTML/CSS solutions will need some sort of "merge" step to integrate with existing PDF document.

- Ruby frontends

    - https://www.ruby-toolbox.com/projects/princely

    - https://www.ruby-toolbox.com/projects/kitabu

### JS PDF
- **Website** https://parall.ax/products/jspdf

- **Developer experience with solution?**

- **F/OSS?** Y

- **Description** 

    > A [sic] HTML5 client-side solution for generating PDFs.

- **Pros** Works client-side

- **Cons** 

    May have difficulty in some browsers
    
    > jsPDF will work in IE6+*, Firefox 3+, Chrome, Safari 3+, Opera. For IE9 and below, we lazily load a Flash shim called Downloadify which enables the files to be downloaded. (Current build does not have IE6-9 shim enabled)


### Phantomjs
- **Website** http://phantomjs.org

- **Developer experience with solution?**

- **F/OSS?** Y

- **Description** 

    > PhantomJS is a headless WebKit scriptable with a JavaScript API. It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.

- **Pros** A general purpose tool. Could also be used for testing, CI, etc.

- **Cons** Not specialized for PDFs.


### wkhtmltopdf
- **Website** http://wkhtmltopdf.org

- **Developer experience with solution?** Austin, Kam, Ben

- **F/OSS?** Y

- **Description** 
    
    > wkhtmltopdf and wkhtmltoimage are open source (LGPLv3) command line tools to render HTML into PDF and various image formats using the Qt WebKit rendering engine. These run entirely "headless" and do not require a display or display service.

- **Pros** Full power of webkit but specialized for PDF production

- **Cons**

- Ruby frontends

    - https://rubygems.org/gems/wicked_pdf

    - https://github.com/pdfkit/PDFKit

    - https://github.com/igor-alexandrov/wisepdf


### prawn
- **Website**

- **Developer experience with solution?** Austin

- **F/OSS?** Y

- **Description**

    > If you are looking for a highly flexible PDF document generation system, Prawn might be the tool for you. It is not a reporting tool or a publishing toolchain, though it could be fairly easily used to build those things.
    >
    > One thing Prawn is not, and will never be, is an HTML to PDF generator. For those needs, consider looking into FlyingSaucer via JRuby, or one of the WebKit based tools, like Wicked or PDFKit. We do have basic support for inline styling but it is limited to a very small subset of functionality and is not suitable for rendering rich HTML documents.


- **Pros** Programmatic

- **Cons** Doesn't use HTML/CSS


### pdfhook
- **Website** https://github.com/codeforamerica/pdfhook

- **Developer experience with solution?**

- **F/OSS?** Y

- **Description**

    > A Python web application for converting PDF forms into PDF-filling APIs

- **Pros**

- **Cons**

    > This app is a prototype. It is less than a month old. Don't use it in production.



### Electron PDF
- **Website** https://github.com/fraserxu/electron-pdf

- **Developer experience with solution?**

- **F/OSS?** Y

- **Description**

    > A command line tool to generate PDF from URL, HTML or Markdown files with electron.


- **Pros**

- **Cons**


### PDFtk
- **Website** https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/

- **Developer experience with solution?**

- **F/OSS?** N

- **Description** 

  > PDFtk Free is our friendly graphical tool for quickly merging and splitting PDF documents and pages. It is free to use for as long as you like.

- **Pros** Form oriented

- **Cons**

- Ruby frontends

  - https://github.com/jkraemer/pdf-forms
  - https://github.com/GSA/pdf-filler

## Recommendation

TBD
