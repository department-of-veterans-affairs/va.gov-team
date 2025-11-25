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
- A **Password** input (optional)
- An additional field input (optional) 

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
Verify that after a successful upload, focus remains stable without unexpected shifts.

**WCAG:**  
- 2.4.3 Focus Order  
- 4.1.3 Status Messages  

**Setup:**  
Navigate to a form page containing a single `va-file-input`. [Using storybook for this testing on a branch](https://file-input-focus-and-sr--65a6e2ed2314f7b8f98609d8.chromatic.com/iframe.html?globals=&args=&id=uswds-va-file-input--default&viewMode=story)

**Steps:**  
1. When the user activates the **Choose file** button.  
2. And selects a valid file.  

**Expected Result:**  
- Then focus moves to the component wrapper text "Selected files".
- And the post-upload UI is announced by screen readers "Selected files" and File name.  
- And no unexpected page-level focus shifts occur.

#### Actual behavior:

**Screen readers**
1. ✅ Chrome + VO: VO Virtual cursor lands on "Selected files" and announces "Selected files: Filename.extension" The next tab is the "Change file" button.
2. ✅ Safari + VO: VO virtual cursor lands on the viewport, and announces "Selected files: filename.extension". The next tab is the "Change file" button.
3. ✅ Safari + iOS + VO: Virtual cursor lands on the "Select a file to upload" file input label (not in the uploaded UI). And announces "Selected files filename.extension". The next swipe takes the user to the Change file button
4. ❌ Chrome + iOS + VO: It appears focus is lost. The Virtual Cursor ends up in the URL bar of the browser, and begins announcing the URL of the page
5. ❌ Firefox + JAWS: It appears focus is lost. After the UI indicates a change, JAWS begins announcing the `<title>` of the page, and eventually announces "You have selected files filename.extension" (And it announces this twice). The next tab does go to the change file button
6. ❌ Edge + JAWS: It appears focus is lost. After the UI indicates a change, JAWS begins announcing the `<title>` of the page, and eventually announces "You have selected files filename.extension". The next tab does go to the change file button.

**Magnifcation & Zoom**
No identified issues across Safari, Chrome, Edge, Firefox

**Voice control**
1. Chrome - Mac Voice Control -  can use voice control to activate initial file upload. However, voice control cannot access the "change file" or "delete" buttons without using the grid
2. Safari - Mac Voice Control - to activate any part of the component, I have to use the grid.

**Additional testing needed**
1. Android - talkback

---

### Test ID: upload-invalid-filetype
**Purpose:**  
Verify accessible error messaging when uploading an invalid file type.

**WCAG:**  
- 3.3.1 Error Identification  
- 3.3.3 Error Suggestion  
- 4.1.3 Status Messages  

**Setup:**  
Navigate to a `va-file-input` configured with a file-type whitelist (e.g., PDF only). [Storybook story](https://file-input-focus-and-sr--65a6e2ed2314f7b8f98609d8.chromatic.com/iframe.html?globals=&id=uswds-va-file-input--accepts-only-specific-file-types&viewMode=story)

**Steps:**  
1. When the user drags a file type onto the UI that is not permitted.

**Note:** The only way to activate this state is to drag a file type that is not permitted onto it. When using the link in the component, most browsers do not allow you to select files that are not permitted.

**Expected Result:**  
- Then the file is not uploaded.  
- And an error message appears in the UI.  
- And screen readers announce the error message when it appears.  
- And focus is on the "Change file" button.

#### Actual behavior:

**Screen readers**
1. ✅ Chrome + VO: The error state of the Uploaded file UI appears. An error message appears below the file name. Focus is on the Change file button. The screen reader announces "Error. We do not accept .exstension files. Choose a new file."
2. ✅ Safari + VO: The error state of the Uploaded file UI appears. An error message appears below the file name. Until the user returns focus to the browser, the virtual cursor is on the viewport window of the browser, once the user returns focus to the browser, focus goes to the Change file button. The screen reader announces "We do not accept .exstension files. Choose a new file."
3. Safari + iOS + VO: Not testable as you cannot drag files in iOS
4. Chrome + iOS + VO: Not testable as you cannot drag files in iOS
5. ⁇ Firefox + JAWS: When dragging a file over, initially nothing happens until I focus the browser again. Visible focus is on the change file button. It seems like something starts to announce, but then something interrupts it and it starts reading the `<title>`. Once it reads the title (and more info about the browser) eventually it goes down to and announces "Error we do not accept extension files. Choose a new file"
6. ⁇ Firefox + NVDA: when dragging a file over, initially nothing happens until I focus the browser again. Visible focus is on the change file button. The page `<title>` is announced, followed by "Selected files. Error we do not accept mp4 files. Choose a new file."
7. ⁇ Edge + JAWS: When dragging a file over, focus goes to the browser, and the visual focus is on the change file button. However, it announces `<title>` first. And then eventually it will announce "Error we do not accept extension files. Choose a new file."
8. ⁇ Edge + NVDA: When dragging a file over, focus goes to the browser, and once the UI is updated, the file upload Input is announced first along with the hint text (Input accepts only specific file types". Then it announces "Clickable Change file. Error We do not accept .mp4 files. Choose a new file"

**Magnifcation & Zoom**
No identified issues across Safari, Chrome, Edge, Firefox

**Voice control**
1. Chrome - Mac Voice Control -  can use voice control to activate initial file upload. However, voice control cannot access the "change file" or "delete" buttons without using the grid
2. Safari - Mac Voice Control - to activate any part of the component, I have to use the grid.

**Additional testing needed**
1. Android - talkback

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

#### Actual behavior:

**Screen readers**
1. Chrome + VO: 
2. Safari + VO: 
3. Safari + iOS + VO: 
4. Chrome + iOS + VO: 
5. Firefox + JAWS: 
6. Edge + JAWS: 

**Magnifcation & Zoom**

**Voice control**

**Additional testing needed**

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

#### Actual behavior:

**Screen readers**
1. Chrome + VO: 
2. Safari + VO: 
3. Safari + iOS + VO: 
4. Chrome + iOS + VO: 
5. Firefox + JAWS: 
6. Edge + JAWS: 

**Magnifcation & Zoom**

**Voice control**

**Additional testing needed**


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

#### Actual behavior:

**Screen readers**
1. Chrome + VO: 
2. Safari + VO: 
3. Safari + iOS + VO: 
4. Chrome + iOS + VO: 
5. Firefox + JAWS: 
6. Edge + JAWS: 

**Magnifcation & Zoom**

**Voice control**

**Additional testing needed**

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

#### Actual behavior:

**Screen readers**
1. Chrome + VO: 
2. Safari + VO: 
3. Safari + iOS + VO: 
4. Chrome + iOS + VO: 
5. Firefox + JAWS: 
6. Edge + JAWS: 

**Magnifcation & Zoom**

**Voice control**

**Additional testing needed**


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
