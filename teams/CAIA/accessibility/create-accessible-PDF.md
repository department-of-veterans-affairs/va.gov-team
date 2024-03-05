# How to create an accessible PDF (WIP)
Sarah Koomson and Jamie Klenetsky Fay, CAIA 
`last updated 1/12/24`

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

## Table of contents
- [Default to HTML](#default-to-html)
- [When to consider using non-HTML documents](#when-to-consider-using-non-html-documents)
- [Make accessible source documents to convert to PDF](#make-accessible-source-documents-to-convert-to-pdf)
- [Use CommonLook PDF Validator, a testing tool that follows accessibility standards](#use-commonlook-pdf-validator-a-testing-tool-that-follows-accessibility-standards)
   * [Test your PDF](#test-your-pdf)
   * [Remediate your PDF](#remediate-your-pdf)
- [Other PDF remediation tools you can use](#other-pdf-remediation-tools-you-can-use)

<!-- TOC end -->

## Default to HTML
We recommend that HTML should be the default for all digital content. Don't upload a PDF unless it's absolutely necessary.

**Rationale:**
- HTML is easier for assistive technology to understand. 
- It's harder to make a PDF accessible than an HTML page. 
- According to OMB memo M-24-08, [Strengthening Digital Accessibility and the Management of Section 508](https://www.whitehouse.gov/omb/management/ofcio/m-24-08-strengthening-digital-accessibility-and-the-management-of-section-508-of-the-rehabilitation-act/):
> Agencies should use HyperText Markup Language (HTML) as the default when creating and publishing content online in lieu of publishing content in other electronic document formats that are designed for printing or preserving and protecting the content and layout of the document (e.g., PDF and DOCX formats), as provided by OMB M-23-22.This practice makes web content easier to find, use, and maintain, and makes it work more reliably with assistive technology.

**Default to HTML** whenever possible.

### Write semantic HTML
- Use the correct HTML elements for their intended purposes - `<ol>` for ordered lists, `<p>` for paragraphs, `<h2>` for heading level 2, etc.
- It's important that your HTML is semantic and accessible so that you don't introduce any issues for users of assistive technology.
- If you're unfamiliar with semantic HTML, read [HTML: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML) (MDN Web Docs). You can also reach out to your team's front-end developer.

Your markup doesn't need to be perfect, but it does need to be accessible.

## When to consider using non-HTML documents
___This section adapted from PopeTech's [PDFs, non-HTML documents, and accessibility](https://blog.pope.tech/2022/05/03/pdfs-non-html-documents-and-accessibility/)___

Non-HTML documents include files created in: 
- Microsoft Excel, PowerPoint, and Word
- Adobe Acrobat Pro/DC and InDesign
- Google Docs, Google Slides, and Sheets 

These documents limited use cases on the web, including:

- When the format needs to be exact, like a floor plan.
- Content that needs to be saved offline.
- Documents that are meant for printing.

In these cases, consider using Word documents. According to the [2021 WebAIM Screen Reader Survey](https://webaim.org/projects/screenreadersurvey9/#docaccessibility), 68.9% of respondants found Word documents to be the most accessible; only 12.9% chose the same for PDFs.

## Make accessible source documents to convert to PDF

If, after considering alternatives, you still need to publish a PDF, you will need to ensure that the source document - the Word, Powerpoint, InDesign, or Excel file you're exporting to PDF - is as accessible as possible.

### How to create a semantically sound document

To do this, you'll need to create a document where the structure is understandable by all users, not just sighted users. Similar to creating an HTML web page, you need to create a semantically sound document:

- Use [heading styles](https://www.w3.org/WAI/WCAG22/quickref/#section-headings) - don't indicate headings by text size increase alone
- Use [true ordered / unordered lists](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF21.html) - don't manually indent and add bullets
- Add [alt text](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html) to images
- Write [descriptive links](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context)
- Consider [focus order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html) (where applicable)
- Add [appropriate metadata](https://commonlook.com/the-relevance-of-metadata-in-accessible-pdfs/)

Use the following resources to create accessible source documents:

<details><summary>InDesign</summary>

### Set up an InDesign file to output an accessible PDF

If you’re a designer, check how to make sure your InDesign documents output accessible creative content that we can use on our website.

[Reference this document](https://www.doi.gov/sites/doi.gov/files/uploads/may_2019_section_508_compliance_event_-_indesign_accessibility.pdf) to check for the following:

| Criteria                     | Check                                                                                                                                                      |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logical reading order        | Check the exported document with Adobe Acrobat and at least one screen reader. Ensure navigation works with mouse and keyboard as a minimum.               |
| Color contrast               | All text elements meet at least a color contrast ratio of 4.5:1.                                                                                           |
| Alt-text for images          | All images have alt-text, or have been removed from the flow of the document.                                                                              |
| Element Styles               | These have been set up using a style sheet. These are then linked to Export tags for PDFs.                                                                 |
| Tables                       | Tables are actually tables, not embedded images. All tables have denoted headers.                                                                          |
| Accessible graphs and charts | Colors used must be accessible. Check with color contrast checker and a color blindness checker. Do not rely on color to convey meaning. Include alt-text. |
| Hyperlinks                   | All links are descriptive so a screen reader user can understand them.                                                                                     |
| Spell-check                  | Check the document with a spell-checker.                                                                                                                   |
</details>

<details><summary>Word</summary>

### Word accessibility

Use the following resources as a guide, as you create accessible **Word documents**:
- [Create Accessible Documents](https://www.section508.gov/create/documents/), from Section508.gov
- [Microsoft Word - Creating Accessible Documents](https://webaim.org/techniques/word/), from WebAIM
- [Make your Word documents accessible to people with disabilities](https://support.microsoft.com/en-us/office/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d), from Microsoft
</details>


<details><summary>PowerPoint</summary>

### PowerPoint accessibility

Use the following resources as a guide, as you create accessible **PowerPoint presentations**:
- [Create Accessible Presentations](https://www.section508.gov/create/presentations/), from Section508.gov
- [PowerPoint Accessibility](https://webaim.org/techniques/powerpoint/), from WebAIM
- [Make your PowerPoint documents accessible to people with disabilities](https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25#PickTab=Windows), from Microsoft

</details>


<details><summary>Excel</summary>

### Excel accessibility

Use the following resources to guide you through the creation of accessible **Excel spreadsheets**:
- [Create Accessible Spreadsheets](https://www.section508.gov/create/spreadsheets/), from Section508.gov
- [Optimizing Spreadsheet Accessibility](https://webaim.org/techniques/excel/), from WebAIM
- [Make your Excel documents accessible to people with disabilities](https://support.microsoft.com/en-us/office/make-your-excel-documents-accessible-to-people-with-disabilities-6cc05fc5-1314-48b5-8eb3-683e49b3e593), from Microsoft
</details>

## Use CommonLook PDF Validator, a testing tool that follows accessibility standards

To ensure that your PDF is accessible, you need a special tool that tests your PDF document for various accessibility standards, such as Section 508 and WCAG 2.0 AA. 

**CommonLook PDF Validator**, also known as **Allyant**, is the CAIA team's testing tool of choice. It's a free plugin for Adobe Acrobat Pro or DC that tests and verifies PDF documents.

<details><summary>Benefits of using CommonLook PDF Validator</summary>

### Benefits of using CommonLook PDF Validator

- Provides validation against Section 508, WCAG 2.0, WCAG 2.1, HHS and PDF/UA standards, and ISO 32000-1:2008.
- Validation includes those checkpoints that require manual verification, ensuring 100% accuracy.
- Time-saving tools for working with the Tag tree.
- Automatically tag tables, lists and Table of Contents from selection.
- The table editor tool makes complex tables easy to tag correctly.
- Easily assign the ListNumbering attribute for lists.
- Supports difficult to tag content such as multi-page structures and structures that move between pages.
- Automatically detects and repairs a variety of common PDF problems.
- Much faster than Adobe Acrobat Pro DC.
- Generates a checkpoint-by-checkpoint report that many organizations accept as proof of accessibility compliance.
</details>


### Test your PDF

Follow these instructions to begin testing:

1. [Download and install CommonLook PDF Validator.](https://commonlook.com/accessibility-software/pdf-validator/)
2. Open the PDF you wish to test in Adobe Acrobat. 
3. If the PDF is untagged, you'll need to tag it. Tags tell assistive technology what type of content is on the page - think images, lists, paragraphs, and headings. [Learn how to tag a PDF.](https://accessible-pdf.info/en/basics/acrobat/create-and-modify-pdf-tags-in-acrobat/)
4. In the toolbar at the top of the Acrobat window, choose `Plug-Ins`, then `CommonLook`, and then `CommonLook PDF Validator`. This will open the PDF file in CommonLook PDF Validator. 
5. In CommonLook, use the `Standards` panel to test a document for accessibility standards.

### Remediate your PDF

You should now have a list of errors to correct in your document. You can follow this remediation workflow to systematically remove those errors from the PDF:

- Open the Tag Tree.
- Artifact images as needed (images that do not convey relevant information).
- Verify reading order.
- Verify correct tag usage.
- Look for color issues.
- Fix tagging errors including tables, forms, links, artifact headers/footers using the tools and wizards provided.
- Set the tabbing order to follow the document structure.
- Add the Document Tag.
- Add Bookmarks.
- Clean up empty tags (using the included wizard).
- Add Metadata information (adding the checkbox for 508, WCAG, PDF/UA or HHS).
- Run CommonLook Verification on both structural and accessibility compliance.
   - **Structural** – a “structural” check will test the file for issues like (but not limited to) proper structure of lists, tables and table of contents. It also verifies that hyperlinks are not broken and tags are not empty.
    - **Accessibility** – running an “Accessibility” verification will test the document against one (or more) specific accessibility standards like Section 508 from 2001, WCAG 2.0, PDF/UA, HHS (the original standard), HHS 2018 and WCAG 2.1.
- Generate and save the CommonLook Accessibility Report according to the chosen standard (WCAG2.1AA, PDF/UA/HHS/508).

This process is thorough and designed to check that all aspects of document accessibility and confirm compliance with a matching accessibility report.

## Other PDF remediation tools you can use


There are other tools available for remediation, but they don't address all compliance requirements as well as CommonLook. If you use these tools, additional work will be required to complete the tagging, remediation, and verification process.



### Adobe Acrobat DC
There are remediation tools built into Acrobat itself, but they aren't as fully-fledged as CommonLook. Still, Acrobat is a great place to start if you don't have CommonLook installed.
<details><summary>Pros</summary>

#### Acrobat Pro DC Pros

- Working in the Tag tree helps achieve a fully accessible document because manual checks are necessary, like verifying appropriate alt text.
- Allows for the creation of tags, even from an untagged document.
- Correct reading order.
- Create and/or convert tags.
- Add alternative text to tags.
- Set the tab order.
- Can correct (some) color and/or contrast issues.
- Add/Edit Metadata including Title and Language (required by standards).
</details>

<details><summary>Cons</summary>

#### Acrobat Pro DC Cons

- Passing Acrobat’s Accessibility Check does not guarantee compliance with any accessibility standards (WCAG 2.0/2.1 or PDF/UA), and there are often many remaining accessibility issues to be fixed.
- Accessibility Check only tests checkpoints that can be verified with automation. There are a couple of prompts for the tester to check things that require manual validation.
- You will need a third-party testing tool like CommonLook’s PDF Validator or PAC3 to verify standards compliance.
- Many tasks in Acrobat in working with the Tag tree are complex and time-consuming.
- Without an “undo” feature, you may be forced to start over if you make a mistake.
- Remediating data tables is a lengthy, inefficient and time-consuming process.
- Assigning ListNumbering to lists is challenging.
</details>


### axesPDF

axesPDF is a touch-up and test tool that provides limited functionality in remediating some accessibility issues.

While it has some useful features, you still need to use several other tools to ensure the tags are correct and verify full 100% compliance with the accessibility standards.

<details><summary>Pros</summary>

#### axesPDF pros

- Standalone application
- Tests against PDF/UA
- Fixes font and Unicode issues
- Screenreader preview
- Displays the Tags tree (Logical Structure Tree)
- Multiple PDFs can be open while working
</details>

<details><summary>Cons</summary>

#### axesPDF Cons

- Limited remediation functionality - relies on mostly-correct tagging structure to then address PDF/UA-specific requirements
- Tagging functionality is limited to touch up and fixing limited issues.
- No Undo
- The software is not fully keyboard-accessible.
- The user interface does not feel “intuitive.”
- It only tests checkpoints that can be tested with automation. So, for example, while the checker will detect Figure tags without Alternative text and show that “Failure,” any Figure tag with Alternative text will automatically pass even if the alt text is inaccurate.
- Does not test against either of the WCAG standards or others.
- `Delete empty tags` removes \*all\* empty tags, possibly affecting table tagging
</details>

### AccessibilityNow® Remediate

Crawford Technologies describes its tool as an “ad hoc tagging tool” designed to tag documents or do the final steps in an already tagged PDF document. The tool will function standalone without needing Adobe Acrobat and can either add tags or be used to do tag finishing.

The visual interface automatically senses tagging elements and assigns tags to the content. The graphical interface allows the user to verify that the tags are correct, including reading order, paragraphs, heading levels, lists, tables and URLs. 

However, they do not claim that the resulting files meet 100% compliance with the common standards. And there is a similar feature within Adobe Acrobat at no cost.

<details><summary>Pros</summary>

#### AccessibilityNow® Remediate Pros

- Requires less knowledge of accessibility or the Tag tree since you rely on the tool to identify the proper tags.
</details>

<details><summary>Cons</summary>

#### AccessibilityNow® Remediate Cons

- The product promises to deliver accessible PDF documents but does not provide compliance reports for any of the common accessibility standards (508, WCAG 2.0, 2.1, HHS or PDF/UA), which could result in a non-compliant and inaccessible document.
- Without the ability to test and validate the documents against the standards, you will need additional tools to confirm compliance with the standards.
- PC only.
- While it identifies tags, you are trusting the tool to get it right, so there is a greater chance of error using this method of document tagging. Acrobat autotagging generally does a better job in most cases.
</details>

