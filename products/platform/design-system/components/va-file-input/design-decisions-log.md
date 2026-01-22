# va-file-input Design Decisions
Last updated: 11/20/2025

- [ADR 001 - Limiting the built-in functionality for encrypted and password-protected files](#ADR-001---Limiting-the-built-in-functionality-for-encrypted-and-password-protected-files)
- [ADR 002 - Display static thumbnail for PDF files](#ADR-002---Display-static-thumbnail-for-PDF-files)


## ADR 001 - Limiting the built-in functionality for encrypted and password protected files

### Status: Proposed

- Date issue raised: 07/17/2025
- Decision date: 07/17/2025

### Context
Teams wanting to implement the `va-file-input` web component often need support for encrypted and password protected files. However, the current implementation of `va-file-input` does not determine if a file is encrypted nor does it decrypt the file. This has been a surprise for some teams who expected an all-in-one solution.

### Decision
The `va-file-input` web component will support setting the `encrypted` property to `true` when the user needs to supply a password. This will display a password field. This password can be retrieved through the `vaPasswordChange` event. All additional functionality related to decrypting the file or using the provided password will need to be handled by the individual team.

This decision has been made because of the development principle to build components that decouple business requirements from the standardized UI and to keep the web component as "DRY" as possible which will allow for a more flexible and maintainable component. Each integration could potentially have a different approach or use case for how they need to handle encrypted and password protected files and the web component should not try to create a single solution for all of those situations. The VA Design System Team [performed research](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3601) that revealed there are unique ways to handle encryption. This principle also promotes modularity and allows different parts of an application to be developed, tested, and updated independently. 

Other considerations include the fact that the majority of file related logic should live server side vs client side, which is where the file will likely be stored and processed.

Additionally, the VA Design System component-library is used in a number of different products and services, and we want to ensure that the component can accommodate the needs of all.

For this reason, VA.gov Platform will provide standardized and centralized utility functions that live in `vets-website`, primarily for usage in forms, that will give a basic implementation of how to handle encryption and password protected files.

### Consequences
Teams will need to leverage centralized platform utilities for handling the detection and submissions of encrypted and password protected files. If they require further customization, they will need to implement their own solution and potentially offer that solution back to the platform or forms library for other VFS teams to use.

A step-by-step guide for checking encryption on vets-website is available here: https://depo-platform-documentation.scrollhelp.site/developer-docs/checking-if-an-uploaded-pdf-is-encrypted

### Open Questions


## ADR 002 - Display static thumbnail for PDF files

### Status: Accepted

- Date issue raised: 11/14/2025
- Decision date: 11/20/2025

### Context
While doing accessibility testing on the file input components, it was observed that sometimes when loading a multi-paged PDF, the PDF file preview would allow you to scroll through the pages of the PDF, and if you clicked on the thumbnail some screen readers would announce more details about the PDF. This behavior is inconsistent, and not all PDFs show a preview like this.

### Decision
The preview image size for the uploaded file is only 40px x 40px. It is impossible to distinguish the content of the file. There was no documentation left about why the previous decision was to show this as a feature. But we have decided to just show a static, generic svg file in its place.

### Consequences
If there was any chance that users were hoping to verify they uploaded the right file via the preview, at such a small size, that functionality is now removed.

### Open Questions


### Related issues
- https://github.com/department-of-veterans-affairs/component-library/pull/1874
- https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4704
- https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5196

