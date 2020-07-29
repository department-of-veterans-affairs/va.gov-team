# [PDF]: Table is missing headers

## Table of contents

- [[PDF]: Table is missing headers](#pdf-table-is-missing-headers)
  - [Table of contents](#table-of-contents)
  - [Statement of the issue](#statement-of-the-issue)
  - [Definition of done](#definition-of-done)
  - [Fix the issue](#fix-the-issue)
    - [Define table headers in Microsoft Word](#define-table-headers-in-microsoft-word)
    - [Define table headers in Acrobat Pro](#define-table-headers-in-acrobat-pro)
  - [Test for compliance](#test-for-compliance)
    - [Microsoft Word accessibility panel](#microsoft-word-accessibility-panel)
    - [Acrobat Pro accessibility tools](#acrobat-pro-accessibility-tools)
  - [Learn more](#learn-more)

## Statement of the issue

- Synopsis: Make tables accessible in PDF documents by using table elements. The applicable standard from Section508.22.h dictates to "associate data and header cells for multi-dimensional data tables."
- Severity: Critical
- Deque University help link: https://dequeuniversity.com/rules/comply-pdf/1.0/table-miss-header
- WCAG Success Criteria: [1.3.1 Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Definition of done

- There SHOULD be **0 table header violations** in the Word [Check Accessibility panel](https://support.microsoft.com/en-us/office/improve-accessibility-with-the-accessibility-checker-a16f6de0-2f39-4a2b-8bd8-5ad801426c7f)
- There MUST be  in the Acrobat [Accessibility Checker](https://www.adobe.com/accessibility/products/acrobat/using-acrobat-pro-accessibility-checker.html)
- Consider exporting an accessibility report from Acrobat while running the Accessibility Checker

## Fix the issue

Tables that are missing table headers can be remediated in Word or Acrobat. The preferred method illustrated here is to fix the issue in a Word document whenever possible. Instructions to fix a table header in Acrobat are included in the second documentation link.

### Define table headers in Microsoft Word

Table header rows can be defined in a few steps:

1. Click the `Table Design` tab
2. Click on the table you want to add a header row
3. Check the `Header Row` checkbox

![Header row checkbox is checked under MS Word Table Design tab](https://user-images.githubusercontent.com/934879/88830927-3ef79780-d194-11ea-815b-9a82dd3a045e.jpg)

---

### Define table headers in Acrobat Pro

1. Open the `Tags` navigation pane. This can be accessed by clicking View > Show/Hide > Navigation Panes > Tags or clicking the Tag icon on the left tray of the Acrobat window.
2. Click `Tags` to expand your document tag tree
3. Click `<Table>` to expand the tree for the table you want to update
4. Click the first TD icon to highlight the first cell in your table
5. Click `<TD>` in the Tags inspector to edit the tag. Change it to a `<TH>` and press `ENTER`
6. The tag icon will change slightly to a red cell inside a table. This confirms your cell has been updated to a table header.
7. Repeat steps 4 through 6 to update all cells on the first row to be table headers.

![Use the Tags inspector to edit the first row of TD cells and change them to TH cells](https://user-images.githubusercontent.com/934879/88831055-66e6fb00-d194-11ea-8d97-b538257073bc.jpg)

## Test for compliance

### Microsoft Word accessibility panel

We recommend you check your Word document for accessibility while working. Click the `Review` tab, then click the `Check Accessibility` button to open the Accessibility Checker panel.

![Click the Review tab in Word, then click the Check Accessibility button](https://user-images.githubusercontent.com/934879/88831092-7a926180-d194-11ea-8b71-dce1300deb2d.jpg)

---

### Acrobat Pro accessibility tools

Run the Acrobat Accessibility Checker by clicking the purple `Accessibility` button on the top right of your application window. Click `Accessibility Check` in the accessibility panel, then click the `Start Checking` button. This will run the accessibility checker, and report any issues in a panel on the left of your document.

![Table checks are included in the Acrobat accessibility checker](https://user-images.githubusercontent.com/934879/88831143-8b42d780-d194-11ea-9b4f-3aab13deb3c1.jpg)

## Learn more

- [Create accessible tables in Word](https://support.microsoft.com/en-us/office/video-create-accessible-tables-in-word-cb464015-59dc-46a0-ac01-6217c62210e5)
- [Correct table tags with the Tags panel in Acrobat Pro](https://helpx.adobe.com/acrobat/using/editing-document-structure-content-tags.html#correct_table_tags_with_the_tags_panel)

