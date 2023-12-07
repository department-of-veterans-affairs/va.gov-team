# CKEditor

The CKeditor is a What You See Is What You Get (WYSIWYG) HTML editor that can be customized to fit various use cases.  The VA Drupal CMS instance uses CKEditor 5 and has two versions of the CKEditor configured - a Limited rich text editor and a Full rich text editor. The specific options of each configuration are below:
- Limited:
  - Bold
  - Link/Unlink
  - Bullets
  - Numbers
  - View source
  - Blockquote
  - Abbreviation
- Full:
  - Bold
  - Link/Unlink
  - Bullets
  - Numbers
  - Horizontal line
  - View source
  - Blockquote
  - Formatting (Normal text, Headings 2-6)
  - Styles (Address Block, Primary action link, Secondary action link)
  - Abbreviation

## Change Management

**Effective with the upgrade to Drupal 10 (11/29/23)**

### Removed italics button from toolbar
[Related issue](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13959)

Within the CMS, we are removed the italics button from the rich text editor toolbar. The results of this change were:

1. Editors no longer were able to style their text using italics.
2. Any text in a rich text editor that had previously been italicized was reverted back to the standard text format.

This change was done because italics should not be used for text styling as this is not in accordance with the VA Design guidelines. Italic text also often creates a more inaccessible experience for users and should be avoided whenever possible.

### Added support for Abbreviations
[Related issue](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14114)

On the toolbar on the rich text editors in the CMS, we added an abbreviation function. When used, this will allow editors to add abbreviations to their content with proper semantic HTML markup.

This change was done to allow editors the ability to make more accessible abbreviations and acronyms. By providing this option within the text editor and adding instructions on how and when to use it within relevant Knowledge Base articles, we are providing a way for editors to make more accessible content.

### Removed button styles from style dropdown on toolbar
[Related issue](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/15154)

Within the CMS, we removed button styles from the styles dropdown in the rich text editor toolbar.

Editors are no longer able to style links to visually look like buttons. However, the time of this update, any existing links that are styled using these buttons styles will continue to use this styling - unless manually and purposefully changed by the editor.

This change was done to help editors make sure the content they create is aligned with the VA Design guidelines and to ensure material honesty within the content. Material honesty means that elements used within content should look like what they are - links should look like links and buttons should look like buttons. These elements have different keyboard interactions and if they look different from what they are, can cause confusion and frustration for some users by not responding to expected keys.

## Contacts
- Product Owner: Erika Washburn (OCTO-DE)
- Delivery Manager: Berni Xiong (Agile 6)
- Product Manager: Marcia Ortiz (Friends from the City)
- Engineering: Edmund Dunn (Agile 6), Tony Taylor (CivicActions)
- Accessibility: Laura Flannery (CivicActions)



