# No structural tags

## Table of contents

- [Table of contents](#table-of-contents)
 - [Statement of the issue](#statement-of-the-issue)
 - [Definition of done](#definition-of-done)
 - [Tag your document](#tag-your-document)
    - [Define headings in Microsoft Word](#define-headings-in-microsoft-word)
    - [Define lists in Microsoft Word](#define-lists-in-microsoft-word)
    - [Export a tagged PDF](#export-a-tagged-pdf)
 - [Test for compliance](#test-for-compliance)
    - [Microsoft Word accessibility panel](#microsoft-word-accessibility-panel)
    - [Adobe Acrobat Pro accessibility tools](#adobe-acrobat-pro-accessibility-tools)
  - [Learn more](#learn-more)

## Statement of the issue

- **Synopsis:** PDFs (portable document files) must have tagged headers, tables, lists, and paragraphs. Assistive technology can navigate to sections of a document using these tags. PDFs without tags require users to read the document instead of skimming for what they want.
- **Severity:** [508-defect-2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-2) for new documents. Documents previously published should be remediated as soon as possible.
- **Deque University help link:** https://dequeuniversity.com/rules/comply-pdf/1.0/pdf-not-marked
- **WCAG Success Criteria:** 
  - [1.3.1 Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
  - [2.4.1 Bypass Blocks](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

## Definition of done

- Ensure **Document is tagged PDF** is checked in the Adobe Acrobat accessibility checker options
- There MUST be **0 untagged document violations** in the Adobe Acrobat [Accessibility Checker](https://www.adobe.com/accessibility/products/acrobat/using-acrobat-pro-accessibility-checker.html)
- Consider exporting an accessibility report from Adobe Acrobat while running the Accessibility Checker

## Tag your document

Documents can be tagged in Microsoft Word as you create them. Use the built in tools to create headings, lists, and tables, then export your document as a tagged PDF.

### Define headings in Microsoft Word

Documents should have one **Title** and one **Heading 1**. **Heading 1** should be the main idea or message. Documents can have mutiple **Heading 2s** to communicate the most important supporting ideas. **Heading 3s** can be used for nested details.

1. Select the **Home** tab
2. Select or click and drag to highlight the text you want to convert to a heading
3. Select the heading level you want
4. Repeat steps 1-3 for additional headings
5. Confirm no accessibility violations using the [Microsoft Word accessibility panel](#microsoft-word-accessibility-panel)

![Clicking the Heading 1 button will convert a line of normal text to a heading level one](https://user-images.githubusercontent.com/934879/90903853-25f99500-e394-11ea-8146-161b90e31ff3.jpg)

---

### Define lists in Microsoft Word

1. Select the **Home** tab
2. Select or click and drag to highlight the text you want to convert to a list
3. Select the Unordered List or Ordered List button to choose the type of list you want
4. Repeat steps 1-3 for additional lists
5. Confirm no accessibility violations using the [Microsoft Word accessibility panel](#microsoft-word-accessibility-panel)

![Clicking the ordered list or unordered list button will convert normal text to a list](https://user-images.githubusercontent.com/934879/90903746-006c8b80-e394-11ea-84c7-2f45c1e1d6de.jpg)

---

### Export a tagged PDF

1. Select the **Acrobat** tab
2. Select **Create PDF**
3. In the **Save As** field, enter a file name for your document
4. Ensure the "Best for electronic distribution and accessibility" radio button is checked
5. Select the **Export** button

![Always select the radio button Best for electronic distribution and accessibility to export a tagged PDF](https://user-images.githubusercontent.com/934879/90903698-ea5ecb00-e393-11ea-8816-aa087b07602c.jpg)

## Test for compliance

### Microsoft Word accessibility panel

To open the Accessibility Checker panel:

1. Select the **Review** tab
1. Select **Check Accessibility**

![Click the Review tab in Word, then click the Check Accessibility button](https://user-images.githubusercontent.com/934879/88831092-7a926180-d194-11ea-8b71-dce1300deb2d.jpg)

---

### Adobe Acrobat Pro accessibility tools

1. Go to **Accessibility > Accessibility Check**
1. Check the **Document is tagged PDF** checkbox
1. Select **Start Checking**

This will run the accessibility checker, and report any issues in a panel on the left of your document.

![Ensure the Document is tagged PDF checkbox is checked before running the Adobe Acrobat accessibility checker](https://user-images.githubusercontent.com/934879/90903648-dc10af00-e393-11ea-82a5-69565c297ab6.jpg)

---

Your document is properly tagged when **Tagged PDF - Passed** appears with a green checkmark under the Document section of the accessibility checker.



![The accessibility checker must say Tagged PDF - Passed in the Document section](https://user-images.githubusercontent.com/934879/90903784-11b59800-e394-11ea-9911-ad6f10ee9ae1.jpg)

## Learn more

- [Microsoft Support - Add a heading](https://support.microsoft.com/en-us/office/add-a-heading-3eb8b917-56dc-4a17-891a-a026b2c790f2)
- [Microsoft Support - Create a bulleted or numbered list](https://support.microsoft.com/en-us/office/create-a-bulleted-or-numbered-list-9ff81241-58a8-4d88-8d8c-acab3006a23e)
