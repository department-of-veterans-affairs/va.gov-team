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
The `va-file-input` web component will support setting the `encypted` parameter to `true` when the user needs to supply a password. This will display a password field. This password can be retrieved through the `vaPasswordChange` event. All additional functionality related to decrypting the file or using the provided password will need to be handled by the individual team.

This decision has been made because of a philisophical approach to building web components that strives to keep the web component as "dry" as possible and to decouple business requirements from the standardized UI. Each team will have a different approach and use case for how they need to handle encrypted and password protected files and the web component should not try to create a single solution for all of those situations. Our team has performed research that revealed there are many unique ways to handle encryption, which reinforces the previous notion. Additionally, the majority of the file related logic should live server side, which is where the file will likely be stored and processed.

We will provide some standardized functions that live in `vets-website`, primarily for usage in forms, that give a basic implementation of how to handle encryption and password protected files.


### Consequences
Teams will most likely need to create their own solutions for handling encrypted and password protected files beyond the UI. However, as previously mentioned, we will provide some functionality in `vets-website`.


### Open Questions
