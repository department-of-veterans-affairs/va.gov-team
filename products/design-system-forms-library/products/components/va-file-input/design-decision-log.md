 **va-file-input Design Decisions**

# **ADR 003 \- Password Encryption**

**Status**: Accepted

Date: 09/2025

**Context**

Users occasionally need to upload password-protected files, particularly encrypted PDFs, as part of their applications. The `va-file-input` web component needed a mechanism to collect passwords for encrypted files without handling the actual decryption logic.

**Key requirements include:**

* Providing a user interface for password entry when encrypted files are uploaded  
* Maintaining separation of concerns between the web component (presentation) and business logic (decryption/processing)  
* Securely transmitting passwords to the backend for file decryption  
* Supporting the forms library's file processing workflow

The challenge was determining where password collection, transmission, and file decryption responsibilities should reside within the platform architecture.

## **Decision**

We have decided to implement a distributed approach to handling password-protected files:

### **Web Component (va-file-input)**

The `va-file-input` web component will support an `encrypted` property. When set to `true`:

* A password input field will be displayed to the user  
* The password is masked  
* Password changes will be emitted through the `vaPasswordChange` event  
* The component will NOT handle any decryption or password validation logic

### **Forms Library**

The forms library will be responsible for:

* Capturing the password from the `vaPasswordChange` event  
* Validating the password decrypts the PDF  
* Transmitting the password securely to the backend along with the file

**Open Item:**

- Currently adding a password times out, which could prevent a user from entering the wrong password.  There is an [initiative](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4914#top) to update the designs to prevent a timeout issue on password.

### **Backend**

The backend will handle:

* Receiving the encrypted file and associated password  
* Decrypting the file using the provided password  
* Validating the decryption was successful  
* Processing the decrypted file for submission

### **PDF Encryption Specifically**

For PDF files with encryption:

* The forms library sends both the file and password to the backend  
* The backend decrypts the PDF before final submission  
* If decryption fails, the backend returns an appropriate error

## **Consequences**

* **Clear separation of concerns** \- Each layer (component, forms library, backend) has distinct responsibilities  
* **Security** \- Password decryption happens server-side, keeping sensitive operations out of the client  
* **Backend dependency** \- The backend must implement decryption logic for supported file types  
* **Error handling complexity** \- Failed decryption errors must be communicated back through the forms library to the user  
* **No client-side validation** \- Cannot verify password correctness before submission  
* The forms library serves as a pass-through for password data rather than processing it

## **Implementation Notes**

* Applications using the `encrypted` property must handle the `vaPasswordChange` event  
* The backend API must accept both file data and password parameters

# 

# **ADR 002 \- File Type Validation**

**Status**: Accepted

Date: 09/2025

**Context**

The `va-file-input` component is designed as a presentation component and does not handle business logic such as file type validation. As applications using this component need to validate uploaded files for security and data integrity, a decision was needed on where to implement file type validation logic.

Key validation requirements include:

* Detecting mismatches between file extensions and actual MIME types (e.g., a PDF file renamed with a `.png` extension)  
* Validating UTF encoding for text-based files  
* Supporting both single and multi-file upload patterns

Without centralized validation logic, each application would need to implement its own validation, leading to inconsistent error handling and duplicate code across the platform.

**Decision**

We have decided to implement file type validation logic in the forms library rather than in the `va-file-input` web component itself.

The forms library will provide validation for:

1. MIME type and file extension matching \- Ensures the file's actual format matches its declared extension  
2. UTF encoding validation \- Verifies proper character encoding for text files

This validation will be available for both:

* [Single file input pattern](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/fileInputPattern.jsx)  
* [Multi-file input pattern](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/fileInputMultiplePattern.jsx)

**Standard Error Messages**

The following standardized error messages will be displayed:

* UTF encoding error: "The file's encoding is not valid"  
* MIME type/extension mismatch: "The file extension doesn't match the file format. Please choose a different file."

**Custom Error Handling outside of forms library**

Applications requiring custom error handling outside the forms library can refer to the [implementation example in the DS v3 playground](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/ds-v3-playground/pages/VaFileInputMultiple.jsx).

**Consequences**

* Centralized validation logic \- Single source of truth for file validation rules across the platform  
* Consistent user experience \- Standardized error messages provide uniform feedback  
* Reduced duplication \- Applications don't need to implement their own validation  
* Maintainability \- Changes to validation logic only need to be made in one location  
* Forms library dependency \- Applications using `va-file-input` outside the forms library will need to implement their own validation or extract the validation logic  
* Applications requiring custom validation behavior can still implement their own logic, as demonstrated in the [DS v3 playground example](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/ds-v3-playground/pages/VaFileInputMultiple.jsx)

## **ADR 001 \- Limiting the built-in functionality for encrypted and password protected files**

### **Status: Proposed**

* Date issue raised: 07/17/2025  
* Decision date: 07/17/2025

### **Context**

Teams wanting to implement the va-file-input web component often need support for encrypted and password protected files. However, the current implementation of va-file-input does not determine if a file is encrypted nor does it decrypt the file. This has been a surprise for some teams who expected an all-in-one solution.

### **Decision**

The va-file-input web component will support setting the encrypted property to true when the user needs to supply a password. This will display a password field. This password can be retrieved through the vaPasswordChange event. All additional functionality related to decrypting the file or using the provided password will need to be handled by the individual team.

This decision has been made because of the development principle to build components that decouple business requirements from the standardized UI and to keep the web component as "DRY" as possible which will allow for a more flexible and maintainable component. Each integration could potentially have a different approach or use case for how they need to handle encrypted and password protected files and the web component should not try to create a single solution for all of those situations. The VA Design System Team [performed research](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3601) that revealed there are unique ways to handle encryption. This principle also promotes modularity and allows different parts of an application to be developed, tested, and updated independently.

Other considerations include the fact that the majority of file related logic should live server side vs client side, which is where the file will likely be stored and processed.

Additionally, the VA Design System component-library is used in a number of different products and services, and we want to ensure that the component can accommodate the needs of all.

For this reason, VA.gov Platform will provide standardized and centralized utility functions that live in vets-website, primarily for usage in forms, that will give a basic implementation of how to handle encryption and password protected files.

### **Consequences**

Teams will need to leverage centralized platform utilities for handling the detection and submissions of encrypted and password protected files. If they require further customization, they will need to implement their own solution and potentially offer that solution back to the platform or forms library for other VFS teams to use.

A step-by-step guide for checking encryption on vets-website is available here: [https://depo-platform-documentation.scrollhelp.site/developer-docs/checking-if-an-uploaded-pdf-is-encrypted](https://depo-platform-documentation.scrollhelp.site/developer-docs/checking-if-an-uploaded-pdf-is-encrypted)

### **Open Questions**
