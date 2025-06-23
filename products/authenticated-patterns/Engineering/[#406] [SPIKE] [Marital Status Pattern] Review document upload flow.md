# Discovery doc for Marital Status Pattern - Review document upload flow
[Ticket](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/406)

## Findings

- Most forms provide users with only one opportunity to upload supporting documents—typically at the point in the form where the document is specifically requested.  These forms are also accompanied by a blurb that tells users they can submit the documents later through alternative methods, such as mail, fax, or other tools (ex., the Claim Status Tool for 686c). These forms do not have an additional dedicated, catch-all document upload page at the end of the form.

- Forms that have only **ONE** dedicated page for **ALL** supporting document uploads at the end
  - Pre-Need Eligibility - 40-10007
  - COE - 26-1880
  - 21-527EZ – When a specific page requires a supporting document, an alert is displayed indicating that the document will need to be uploaded later in the form

- Forms that have **TWO** opportunities to upload documents
  - Ivc-champva 10-10D → has a similar functionality and pattern that we are looking for
    - Each document upload page has a blurb that says “you can upload now, or you’ll get a chance later”
    - Identifies missing uploads and displays the list to the user
    - Has an additional document upload page at the end
  - ivc-champva 10-7959C
 
## Options for handling document uplods

### 🔵 Option 1: Dual Upload Opportunities
Users are given two chances to upload required documents:
- First opportunity: Directly on the form page that requests the specific document.
- Second opportunity: A catch-all document upload page at the end of the form that lists any missing or outstanding documents.

**Engineering considerations**
- The app would be able to track which documents have already been uploaded and identify any that are still missing.
- For cases where files have not yet been uploaded, we can display a list of the outstanding documents to the user.
- While we can retrieve the names of previously uploaded files, we **CANNOT** currently access their thumbnail image URLs. In order to do this, thumbnails would require updates and refactoring the code in the `VaFileInputField` widget within the platform’s forms-system to allow the rendering of this data.

#### Engineering LOE:
- **Moderate** → If the final catch-all page simply displays the names of missing documents (no preview/thumbnails).
- **High** → If the final page includes file previews/thumbnails. This would require refactoring the existing file input web component in the forms-system to support rendering uploaded files outside their original context.

---

### 🔵 Option 2: Single Upload at Point of Request
Users are prompted to upload each document only at the point in the form where the document is specifically required.

#### Engineering LOE:
**Low** → Minimal implementation effort, as this follows existing patterns used in many forms.

---

### 🔵 Option 3: Single Upload at End of Form
Users are presented with one consolidated upload page at the end of the form, allowing them to submit all required documents in one place.

#### Engineering LOE:
**Lowest** -> Simplest from a development standpoint as it involves only one page for all document uploads.

---

## Additional notes
I noticed that many of these forms, like the 10-10D, use a different file upload UI compared to the standard VADS file input [component](https://design.va.gov/components/form/file-input). Instead of the default file input, it displays a customizable “Upload” button. The button text can be changed, and it supports multiple files. After you upload one file, the button updates to say “Upload another.” 
The current file input component also supports multiple file uploads. Most likely, this file upload design could've been decided before the VADS file upload [pattern](https://design.va.gov/patterns/ask-users-for/files) was introduced, which uses the standard file input component.

<img src="https://github.com/user-attachments/assets/9f0c8002-08b0-4da1-8c8f-bdc05b5878cb" alt="Screenshot 2025-05-15 at 3 28 57 PM" width="400">

<img src="https://github.com/user-attachments/assets/cb8a7328-5a8e-46e2-bd10-57fc1b1d176c" alt="Screenshot 2025-05-15 at 3 28 57 PM" width="400">

<img src="https://github.com/user-attachments/assets/8c478af7-6795-447e-a0da-25cb0494b32f" alt="Screenshot 2025-05-15 at 3 28 57 PM" width="400">

<img src="https://github.com/user-attachments/assets/db590dfc-3c4b-4734-a2dd-45f2fc8776f1" alt="Screenshot 2025-05-15 at 3 28 57 PM" width="400">

