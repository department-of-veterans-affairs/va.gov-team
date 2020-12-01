# Missing text equivalent

## Table of contents

- [Missing text equivalent](#missing-text-equivalent)
  - [Table of contents](#table-of-contents)
  - [Statement of the issue](#statement-of-the-issue)
  - [Definition of done](#definition-of-done)
  - [Add alt text to your images](#add-alt-text-to-your-images)
    - [Write meaningful alt text](#write-meaningful-alt-text)
  - [Test for compliance in Microsoft Word](#test-for-compliance-in-microsoft-word)
  - [Export an accessible PDF from Microsoft Word](#export-an-accessible-pdf-from-microsoft-word)
  - [Verify compliance using Adobe Acrobat Pro accessibility tools](#verify-compliance-using-adobe-acrobat-pro-accessibility-tools)
  - [Learn more](#learn-more)

## Statement of the issue

- **Synopsis:** PDFs (portable document files) MUST have text equivalent (alt text) to explain descriptive or important images for assistive technology.
- **Severity:** Critical
- **Deque University help link:** https://dequeuniversity.com/rules/comply-pdf/1.0/image-no-alt
- **WCAG Success Criteria:** [1.1.1 Non-text Content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Definition of done

- There SHOULD be **0 missing alternative text violations** in the Word [Check Accessibility panel](https://support.microsoft.com/en-us/office/improve-accessibility-with-the-accessibility-checker-a16f6de0-2f39-4a2b-8bd8-5ad801426c7f)
- There MUST be **0 figures alternative text - failed violations** in the Adobe Acrobat [Accessibility Checker](https://www.adobe.com/accessibility/products/acrobat/using-acrobat-pro-accessibility-checker.html)
- Consider exporting an accessibility report from Adobe Acrobat while running the Accessibility Checker

## Add alt text to your images

Alt text should be added to your images as you are editing a document in Microsoft Word. Any image that provides meaningful information or adds context to your document MUST have alt text. Images that are used for visual flourish or interest are considered decorative and do not require alt text.

Older version of Microsoft Word do not allow users to mark an image as decorative, so it is recommended to remove all images that are decorative or for visual interest. If you are using a current version of Microsoft Word 365, you can [check a box to mark images as decorative](https://ccconlineed.instructure.com/courses/3303/pages/decorative-images-word-365-tutorial).

### Write meaningful alt text

Alt text should be meaningful, and explain the core concept being illustrated with an image. Try to keep alt text to 150 characters or less. Consider reaching out to a content specialist for help writing your alt text.

1. Verify there is an image that needs alt text
2. Right-click the image you want to add alt text to
3. Select the **Layout & Properties** tab from the Format Picture inspector
4. Select the **Alt Text** expand/collapse section
5. Write your descriptive alt text in the **Description** field

![Instructional screen shot of a web form with accessibility inspector open, showing one error](https://user-images.githubusercontent.com/934879/91468530-beda5580-e857-11ea-9f46-ad21c167ab6d.jpg)

---

![Right-clicking on an image opens the format menu](https://user-images.githubusercontent.com/934879/91468692-f517d500-e857-11ea-9f3d-c6d2c457adad.jpg)

---

![Click the Layout and Properties icon, third from the left in the Format Picture panel, to add alt text](https://user-images.githubusercontent.com/934879/91468846-301a0880-e858-11ea-8fd7-563da3ea9fef.jpg)

## Test for compliance in Microsoft Word

We recommend you check your Word document for accessibility while working. At a minimum, you should check your document for compliance before exporting to PDF. This will help avoid accessibility violations in the last step.

1. Select the **Review** tab
2. Select the **Check Accessibility** button to open the Accessibility panel
3. Verify there are **0 accessibility violations** in your document

![Click the Review tab in Word, then click the Check Accessibility button](https://user-images.githubusercontent.com/934879/91469521-1c22d680-e859-11ea-9813-03f99ea61444.jpg)

## Export an accessible PDF from Microsoft Word

1. Select the **Acrobat** tab
2. Select the **Preferences** button
3. Verify the **Enable Accessibility and Reflow with tagged Adobe PDF** checkbox is checked
4. Ensure the "Best for electronic distribution and accessibility" radio button is checked
5. Select the **OK** button from the Acrobat PDFMaker modal dialog
6. Select the **Create PDF** button
7. Save your document with a memorable, easy-to-understand name

![Enable Accessibility and Reflow with tagged Acrobat PDF checkbox should be checked before exporting your PDF](https://user-images.githubusercontent.com/934879/91469015-71aab380-e858-11ea-9397-428b31539f97.jpg)

---

![Save your document as the title so it is easier for users to find and remember](https://user-images.githubusercontent.com/934879/91469341-e251d000-e858-11ea-81ea-ae23a52f3634.jpg)

## Verify compliance using Adobe Acrobat Pro accessibility tools

1. Run the Acrobat Accessibility Checker by clicking the purple **Accessibility** button on the top right of your application window
2. Select **Accessibility Check** in the accessibility panel
3. Ensure the **Document is tagged PDF** checkbox is checked, then select the **Start Checking** button. This will run the accessibility checker, and report any issues in a panel on the left of your document.
4. Select the **Alternate Text** accordion and verify that all alt text requirements have green checkmarks and say **Passed**
5. If your image(s) include text, select the **Document** accordion and verify the **Image-only PDF** requirement has a green checkmark and says **Passed**
6. When you are finished with steps 4 and 5, your document has proper alt text for meaningful images, and [decorative images have been marked appropriately](https://ccconlineed.instructure.com/courses/3303/pages/decorative-images-word-365-tutorial) or removed.

![All five alternate text checks have a green checkmark and Passed text](https://user-images.githubusercontent.com/934879/91470008-c4389f80-e859-11ea-8fa5-9bc2d7b8a495.jpg)

---

![Image-only PDF check with a green checkmark and Passed text](https://user-images.githubusercontent.com/934879/91470096-e3cfc800-e859-11ea-98ed-4e8ec85ba659.jpg)

## Learn more

- [Microsoft Support - Everything you need to know to write effective alt text](https://support.microsoft.com/en-us/office/everything-you-need-to-know-to-write-effective-alt-text-df98f884-ca3d-456c-807b-1a1fa82f5dc2)
- [Adobe Acrobat - Alternate text](https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html#Alternatetext)
- [Adobe Acrobat - Image-only PDFs](https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html#ImageOnlyPDF)
