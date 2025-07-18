# va-file-input Design Decisions
Last updated: 07/17/2025

- [ADR 001 - Limiting the built-in functionality for encrypted and password-protected files](#ADR-001---Limiting-the-built-in-functionality-for-encrypted-and-password-protected-files)


## ADR 001 - Limiting the built-in functionality for encrypted and password protected files

### Status: Proposed

- Date issue raised: 07/17/2025
- Decision date: 07/17/2025

### Context
Teams wanting to implement the `va-file-input` web component often need support for encrypted and password protected files. However, the current implementation of `va-file-input` does not determine if a file is encrypted nor does it decrypt the file. This has been a surprise for some teams who expected an all-in-one solution.

### Decision
The `va-file-input` web component will support setting the `encrypted` property to `true` when the user needs to supply a password. This will display a password field. This password can be retrieved through the `vaPasswordChange` event. All additional functionality related to decrypting the file or using the provided password will need to be handled by the individual team.

This decision has been made because of the development principle to build components that decouple business requirements from the standardized UI and to keep the web component as "DRY" as possible which will allow for a more flexible and maintainable component. Each integration could potentially have a different approach or use case for how they need to handle encrypted and password protected files and the web component should not try to create a single solution for all of those situations. Our team performed research that revealed there are many unique ways to handle encryption. This principle also promotes modularity and allows different parts of an application to be developed, tested, and updated independently. 

Other considerations include the fact that the majority of file related logic should live server side vs client side, which is where the file will likely be stored and processed.

Additionally, the VA Design System component-library is used in a number of different products and services, and we want to ensure that the component can accomodate the needs of all.

For this reason, VA.gov Platform will provide standardized and centralized utility functions that live in `vets-website`, primarily for usage in forms, that will give a basic implementation of how to handle encryption and password protected files.

### Consequences
Teams will need to leverage centralized platform utilities for handling the detection and submissions of encrypted and password protected files. If they require further customization, they will need to implement their own solution and potentially offer that solution back to the platform or forms library for other VFS teams to use.

### Open Questions
