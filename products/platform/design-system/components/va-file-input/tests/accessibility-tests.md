# WIP CONCEPT

# va-file-input — Accessibility Test Plan

## 🧭 Component Overview
**Description:**  
The `va-file-input` component allows users to upload one or more files through a browser interface. After upload, the UI updates to display:  
- The file name  
- The file size  
- Any applicable error messages  
- A **Change** button  
- A **Delete** button  

The component may be marked as *required* or *optional*, depending on the form context.

**Primary user tasks:**  
- Upload a file  
- Replace a file  
- Delete a file  
- Proceed with or without uploading (depending on requirement state)

**Key accessibility risks:**  
- Focus not returning to the correct location after an upload or deletion  
- Status messages not announced correctly (upload complete, file errors)  
- Inconsistent behavior across screen readers for dynamic changes  
- Inaccessible error messaging for invalid file types or sizes  
- Unexpected focus movement when required fields block submission  
- Incorrect name/role/value exposure for underlying `<input type="file">`

---
**Primary user tasks:**  
- Upload a file  
- Replace a file  
- Delete a file  
- Proceed with or without uploading (depending on requirement state)

**Key accessibility risks:**  
- Focus not returning to the correct location after an upload or deletion  
- Status messages not announced correctly (upload complete, file errors)  
- Inconsistent behavior across screen readers for dynamic changes  
- Inaccessible error messaging for invalid file types or sizes  
- Unexpected focus movement when required fields block submission  
- Incorrect name/role/value exposure for underlying `<input type="file">`

---

## 📚 Related Standards & References

### WCAG 2.2 Success Criteria
- **1.3.1 Info and Relationships**  
- **1.3.5 Identify Input Purpose**  
- **2.1.1 Keyboard**  
- **2.1.2 No Keyboard Trap**  
- **2.4.3 Focus Order**  
- **2.4.7 Focus Visible**  
- **3.2.2 On Input**  
- **3.3.1 Error Identification**  
- **3.3.3 Error Suggestion**  
- **4.1.2 Name, Role, Value**  
- **4.1.3 Status Messages**

### Additional references
- Error states: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/design-system/components/va-file-input/error-states.md  
- Design decisions: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/design-system/components/va-file-input/design-decisions-log.md  
- Architecture & properties: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/design-system/components/va-file-input/architecture-properties.md  

---

## 📦 Assistive Technology + Browser Matrix

### Screen readers  
- **JAWS + Chrome**
- **JAWS + Edge**  
- **NVDA + Chrome**
- **NVDA + Edge** 
- **VoiceOver + Safari**
- **VoiceOver + Chrome**

### Keyboard only  
- Chrome  
- Safari
- Edge

### Zoom / Magnification  
- 200%  
- 400%  
- Text-only zoom  

### Mobile AT (if applicable)  
- VoiceOver (iOS Safari)  
- TalkBack (Android Chrome)

---

## 🧪 Test Scenarios

The following scenarios validate expected accessibility behavior.  
Each follows the **When / Then** pattern.

---

### Test ID: upload-focus-success
**Purpose:**  
Verify that after a successful upload, focus moves to the success state or remains stable without unexpected shifts.

**WCAG:**  
- 2.4.3 Focus Order  
- 4.1.3 Status Messages  

**Setup:**  
Navigate to a form page containing a single `va-file-input`.

**Steps:**  
1. When the user activates the **Choose file** button.  
2. And selects a valid file.  

**Expected Result:**  
- Then focus remains on the **Change** button or returns to a consistent post-upload anchor (per component spec).  
- And the success or post-upload UI is announced by screen readers (file name, size).  
- And no unexpected page-level focus shifts occur.  

**Notes:**  
Future improvement: Explicit `role="status"` annotation for dynamic success messages.

---

### Test ID: upload-invalid-filetype
**Purpose:**  
Verify accessible error messaging when uploading an invalid file type.

**WCAG:**  
- 3.3.1 Error Identification  
- 3.3.3 Error Suggestion  
- 4.1.3 Status Messages  

**Setup:**  
Navigate to a `va-file-input` configured with a file-type whitelist (e.g., PDF only).

**Steps:**  
1. When the user selects a file type not permitted.  

**Expected Result:**  
- Then the file is rejected.  
- And an error message appears adjacent to the field.  
- And screen readers announce the error message when it appears.  
- And focus does not jump unexpectedly.  

---

### Test ID: upload-invalid-size
**Purpose:**  
Verify error behavior for oversized files.

**WCAG:**  
- 3.3.1 Error Identification  
- 3.3.3 Error Suggestion  
- 4.1.3 Status Messages  

**Setup:**  
Component configured with a max file size (e.g., 25 MB).

**Steps:**  
1. When the user selects a file larger than the allowed maximum.  

**Expected Result:**  
- Then the error message appears (e.g., “File is too large”).  
- And the error is exposed via the live region (if used) or focus remains stable.  
- And the instructions suggest correct use (“Choose a file under X MB”).  

---

### Test ID: delete-file
**Purpose:**  
Ensure deleting a file updates the interface correctly and annunciation is accessible.

**WCAG:**  
- 2.4.3 Focus Order  
- 4.1.3 Status Messages  

**Setup:**  
A file has already been uploaded.

**Steps:**  
1. When the user activates the **Delete** button.  

**Expected Result:**  
- Then the UI returns to the empty/upload state.  
- And screen readers announce the change (e.g., “File removed”).  
- And focus moves to the next logical interactive element (e.g., **Choose file**).  

---

### Test ID: required-blocks-progress
**Purpose:**  
Validate required field behavior when the user attempts to proceed without uploading.

**WCAG:**  
- 3.3.1 Error Identification  
- 3.3.2 Labels or Instructions  
- 3.3.3 Error Suggestion  

**Setup:**  
The file-upload field is marked as required.

**Steps:**  
1. When the user activates **Continue** without uploading a file.  

**Expected Result:**  
- Then the UI shows an error message (“Please upload a file”).  
- And the error is linked to the field using `aria-describedby` or error associations.  
- And screen readers announce the message.  
- And focus moves to the error summary (if present) or is placed on the file input.  

---

### Test ID: replace-file
**Purpose:**  
Validate accessible behavior when replacing an existing file.

**WCAG:**  
- 2.4.3 Focus Order  
- 4.1.3 Status Messages  

**Setup:**  
A valid file is already uploaded.

**Steps:**  
1. When the user activates **Change**.  
2. And selects a new valid file.  

**Expected Result:**  
- Then the new file replaces the old file in the UI.  
- And screen readers announce the new file name.  
- And focus behavior is consistent with initial upload.

---

## 🧩 Edge Cases
- Uploading multiple files where only one is invalid  
- Very fast uploads not announcing changes properly  
- Very slow uploads requiring status messaging (“Uploading…”)  
- File name truncation not announced meaningfully  
- Errors disappearing without AT notification  
- Browser differences in file input focus handling  

---

## 🔁 Regression Tests
- Historically, VoiceOver sometimes fails to announce file-upload changes.  
- Some Windows AT versions mis-handle dynamic error messages.  
- Past issues around incorrect file-type instructions (bytes vs. megabytes).  

---

## 📄 Version History
| Date | Author | Change |
|------|--------|--------|
| 2025-11-24 | Jeana  | Initial accessibility test plan |
