# CKEditor

The CKeditor is a What You See Is What You Get (WYSIWYG) HTML editor that can be customized to fit various use cases.  The VA Drupal CMS instance uses CKEditor 4 and has two versions of the CKEditor configured - a Limited rich text editor and a Full rich text editor. The specific options of each configuration are below:
- Limited:
  - Bold
  - Italics
  - Link/Unlink
  - Bullets
  - Numbers
  - View source
  - Blockquote
- Full:
  - Bold
  - Italics
  - Link/Unlink
  - Bullets
  - Numbers
  - Horizontal line
  - View source
  - Blockquote
  - Formatting (Normal text, Headings 2-6)
  - Styles (Address Block)

## Change Management

**Planned changes - Effective with the upgrade to Drupal 10 (exact date will be added post-launch)**

### Remove italics button from toolbar
[Related issue](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13959)

Within the CMS, we are removing the italics button from the rich text editor toolbar. The results of this change are:

1. Editors will no longer be able to style their text using italics.
2. Any text in a rich text editor that had previously been italicized will be reverted back to the standard text format.

This change is being done because italics should not be used for text styling as this is not in accordance with the VA Design guidelines. Italic text also often creates a more inaccessible experience for users and should be avoided whenever possible.

### Stripping IDs from the editor
[Related issue](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14115)

IDs will no longer be allowed in rich text editors. This means that:

1. If editors copy and paste content from other sources (i.e. emails, word documents, other sections, etc.) into a rich text editor, any ID that may accidently be pasted in will be stripped from the source code and will not be saved in the content.
2. IDs will no longer be allowed to be purposefully, manually added to the source code of the rich text editors.

The front end process of the site build already automatically adds IDs to header elements based on the text of the header.  The process has guardrails in place to ensure all these IDs are unique.  However, when IDs are manually added into rich text editors these are not part of the automatic ID process and it causes duplicate IDs, which is an accessibility error. By stripping IDs from rich text editors and only allowing these to be added automatically, we can avoid duplicate IDs and allow editors to create better, more accessible content within the CMS.

### Adding support for Abbreviations
[Related issue](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14114)

On the toolbar on the rich text editors in the CMS, we are adding an abbreviation function. When used, this will allow editors to add abbreviations to their content with proper semantic HTML markup.

This change is being done to allow editors the ability to make more accessible abbreviations and acronyms. By providing this option within the text editor and adding instructions on how and when to use it within relevant Knowledge Base articles, we are providing a way for editors to make more accessible content.

## Contacts
- Product Owner: Erika Washburn (OCTO-DE)
- Delivery Manager: Berni Xiong (Agile 6)
- Engineering: Edmund Dunn (Agile 6), Tony Taylor (CivicActions)
- Accessibility: Laura Flannery (CivicActions)



