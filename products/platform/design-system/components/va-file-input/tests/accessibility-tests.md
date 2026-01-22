# va-file-input — Accessibility Tests

## 🎯 Purpose

This document defines **expected accessibility behavior** for the `va-file-input` component and records **known assistive technology (AT) differences** observed during testing.

It is intended to:
- Guide component development and review
- Support consistent accessibility testing
- Distinguish **product defects** from **AT/browser quirks**
- Document “good enough” decisions to avoid regressions and rework

This is a **living document** and should be updated as behavior, browsers, or ATs change.


## 🧭 Component Overview

### Description:
The `va-file-input` component allows users to upload a single file through a browser interface.
After upload, the UI updates to display:
- File name and size
- Status or error messages
- **Change** and **Delete** actions

Future iterations may include:
- Optional password input
chrom- Additional related inputs

### Primary user tasks:   
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

## 📦 Supported Testing Environments

### Screen readers  
- JAWS + Chrome
- JAWS + Edge  
- NVDA + Chrome
- NVDA + Edge
- VoiceOver + Safari 
- VoiceOver + Chrome
- Talkback + Chrome

#### Version numbers for these tests
- Mac OS: Sequioa 15.6.1
- Safari: Version 18.6 (20621.3.11.11.3)
- Mac iOS: 18.6.2, iPhone 13
- JAWS: 2025.2505.43
- NVDA: 2025.1.1.36849
- Chrome - Mac: Version 142.0.7444.176
- Firefox - Mac: 145.0.2 (aarch64)
- Firefox - Windows: 145.0.2 (64-bit)
- Edge: 142.0.3595.94
- Android: v12, Galaxy S10e
- Talkback

### Keyboard only  
- Chrome  
- Safari
- Edge

### Zoom / Magnification  
- 200%  
- 400%  
- Text-only zoom  

### Mobile AT  
- VoiceOver (iOS Safari)  
- TalkBack (Android Chrome)

---
## ✅ Accessibility Requirements (Summary)

Across all supported environments, the following outcomes must be true:

- Users can complete file upload, replacement, and deletion using a keyboard
- Focus remains logical and recoverable after state changes
- Errors are announced when they occur and describe how to fix the issue
- Status changes (upload success, deletion) are announced
- Users can determine the current state of the component (empty, success, error)

Differences in **announcement order**, **verbosity**, or **browser chrome announcements** do not constitute failures if these outcomes are met.

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
- [Error states](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/design-system/components/va-file-input/error-states.md  )
- [Design decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/design-system/components/va-file-input/design-decisions-log.md)
- [Architecture & properties](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/design-system/components/va-file-input/architecture-properties.md)

---

## 🧪 Test Scenarios - Last Test 12/19/25

The following scenarios validate expected accessibility behavior.  
Each follows the **When / Then** pattern.

**Key:**
- ✅ Meets expectations and criteria
- 🟡 This is good enough. Does not block the user, but due to browser and AT quirks may not work repeatedly every time.
- ❌ Does not work as expected, blocks user.
- 
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
1. When the user activates the **Chose from folder** "input" or drags a file to the **Drag a file here or choose from folder** input
2. And selects a valid file.  

**Expected Result:**  
- Then focus moves to the component.
- The Focus ring is visible
- And the post-upload UI is announced by screen readers "Selected files" and File name.  
- And no unexpected page-level focus shifts occur.


#### Acceptance criteria
- 🟢 After selecting a valid file, the UI updates to the success state and the selected file name is announced at some point (immediately or when the user tabs into the component).
- 🟡 The browser/AT may announce browser chrome or page title first, may include “closing dialog,” or may announce “no file selected” briefly, as long as the selected file is eventually conveyed and the user can proceed.
- 🔴 Focus is lost with no reasonable recovery path (user cannot tab back into the component), or the selected file is never announced/available to confirm, making the outcome ambiguous.

#### Actual behavior

**Screen readers**

**1. Chrome + VO**   
  - 🟢 **When using the link:** VO Announces: "Closing dialog. You have selected the file: VBA-21P-601-ARE.pdf.: VBA-21P-601-ARE.pdf button" **Note:** Closing dialog is referring to the dialog of the file picker.    
  - 🟡 🟢 **When dragging the file:** Mixed results
      - 🟡 Sometimes it announces "Chrome uswds-va-file-input--default - Google Chrome - Jeana (Ad Hoc) window uswds-va-file-input--default web content." It is not announcing anything about selected file but the next tab takes you into the component and announces the selected file on the change file button.
      - 🟢 Sometimes it announces "Chrome uswds-va-file-input--default - Google Chrome - Jeana (Ad Hoc) window You have selected the file: safari-file-input-121725.mp4. Select a file to upload. Drag a file here or choose from folder: No file chosen You can upload a .pdf, .gif, .jpg, .bmp, or .txt file. button has keyboard focus"

**2. Safari + VO:**   
  - 🟡 **When using the link - with keyboard:**, "Closing dialog no action available file upload button" But the next tab takes you into the component, and announces the selected file on the change file button
  - 🟢 **When using the link - with mouse:**, VO Announces, "You have selected the file: mid-form.png. You are currently on a file upload button, inside of web content. To click this button, press Control-Option-Space. To exit this web area, press Control-Option-Shift-Up Arrow".
  - 🟢 **When dragging the file:** Focus does not immediately move back to the browser after dragging a file, even though the UI is updating and the file seems to be uploading. This is expected. When the user changes focus back to the browser the `<title>` is announced, followed by "You have selected the file: mid-form.png. You are currently on a file upload button, inside of web content. To click this button, press Control-Option-Space. To exit this web area, press Control-Option-Shift-Up Arrow."


**3. Safari + iOS + VO:**   
  - 🟡 **When using the link:** Virtual cursor lands on the "Select a file to upload" file input label with the virtual cursor on the same place. It does not announce the selected file name. But, once I move focus into the component, it does announce "You have selected filename.ext. Select a file to upload. Drag a file here or choose from folder. Description. You can upload a .pdf, .gif, .jpg, .bmp, or .txt file. No file selected. Button"
  - **When dragging the file:** Not applicable in this test case

**4. Chrome + iOS + VO:**
  - 🟡 **When using the link:**  The Virtual Cursor ends up in the URL bar of the browser, and begins announcing the URL of the page. But after the announcemnt of the url, it does announce "You have selected a file filename.extension".
  - **When dragging the file:** Not applicable in this test case

**5. Firefox + JAWS:**
  - 🟢 **When using the link:** Announces "You have selected a file filename.extesion. Select a file to upload. Drag a file here or choose from folder browse. No file selected. Button. You can upload a pdf, gif, jpb. bmp or txt file."   (The announcement of "No file selected" is expected)
  - **When dragging the file:** Announces: "You have selected the file: jaws2409-radio-relationship.mp4. Select a file to upload. Drag a file here or choose from folder Browse… No file selected. Button. You can upload a .pdf, .gif, .jpg, .bmp, or .txt file. To activate press Enter."   
      - Sometimes it will announce the page `<title>` first.

**6. Firefox + NVDA:**
  - 🟢 **When using the link:** NVDA Announces "You have selected the file: fileename.extension." (This is sometimes duplicated)
  - 🟢 **When dragging the file:** NVDA Announces "You have selected the file: fileename.extension." (This is sometimes duplicated)  
    
**7. Edge + JAWS:**
  - 🟢 **When using the link:** After the UI indicates a change, JAWS begins announcing the `<title>` of the page, and eventually announces "You have selected files filename.extension" Button. To activate press enter." The next tab does go to the change file button. 
  - 🟢 **When dragging the file:** When dragging a file over, focus shifts to the browser. The page `<title>` is announced (several times). Eventually it does announce "Selected files: filename.extenstion". When I press tab the next item to receive focus is the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.

**8. Edge + NVDA:**
- 🟡 **When using the link:** Announces, "Select a file to upload: Drag a file here or choose from folder: No file chosen. You have selected the file: Filename ext."
  - It's not ideal for it to announce that no file is chosen.  But the next tab takes the user to the change file button and the selected file is announced
- 🟡 **When dragging the file:** Announces, "You have selected the file: filename.extension. No file chosen Button"
  - It's not ideal for it to announce that no file is chosen.  But the next tab takes the user to the change file button and the selected file is announced 

**9. Chrome + JAWS:**
- 🟢 **When using the link:** Announces, "You have selected the file: filename.extension. Button"
- 🟢 **When dragging the file:** Announces, "You have selected the file: filename.extension. Button"
  - In both Chrome + JAWS cases, it may read the browser `<title>` first before announcing the selection 

**10. Chrome + NVDA:**
- 🟡 **When using the link:** Announces, "Select a file to upload: Drag a file here or choose from folder: No file chosen. You have selected the file: Filename ext."
  - It's not ideal for it to announce that no file is chosen.  But the next tab takes the user to the change file button and the selected file is announced
- 🟡 **When dragging the file:** Announces, "You have selected the file: filename.extension. No file chosen Button"
  - It's not ideal for it to announce that no file is chosen.  But the next tab takes the user to the change file button and the selected file is announced 

**11. Chrome + Talkback (Android)**
- 🟢 **When using the link:** Announces "You have **selected** the file.extension."
- 🟢 **When dragging the file:**  N/A can't drag on android


**Magnifcation & Zoom**
No identified issues across Safari, Chrome, Edge, Firefox

**Voice control**
1. Chrome - Mac Voice Control -  can use voice control to activate initial file upload. However, voice control cannot access the "change file" or "delete" buttons without using the grid
2. Safari - Mac Voice Control - to activate any part of the component, I have to use the grid.

**Additional testing needed**


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

#### Acceptance criteria
- 🟢 When an invalid file type is provided (usually via drag/drop), an error message appears and is announced, and the user is able to reach the Change file action to correct the issue.
- 🟡 Announcement phrasing/order may vary; it’s acceptable if the user must return focus to the browser window before the error is announced, as long as the error is announced once focus returns and the correction path is clear.
- 🔴 The invalid file error is not announced at all, or the user cannot locate a clear corrective action (e.g., Change file), resulting in a blocked or confusing dead end.

#### Actual behavior:

**Screen readers**

**1. Chrome + VO:**   
  - **When using the link:** N/A
  - 🟢 **When dragging the file:** The error state of the Uploaded file UI appears. An error message appears below the file name. Focus is on the Change file button. The screen reader announces "Error. We do not accept .extension files. Choose a new file."

**2. Safari + VO:**    
  - **When using the link:** N/A
  - 🟢  **When dragging the file:**  The error state of the Uploaded file UI appears. An error message appears below the file name. Until the user returns focus to the browser, the virtual cursor is on the viewport window of the browser, once the user returns focus to the browser, focus goes to the Change file button. The screen reader announces "change file. Error. We do not accept .mp4 files. Choose a new file. button"

**3. Safari + iOS + VO:**      
  - **When using the link:** N/A
  - **When dragging the file:** Not testable as you cannot drag files in iOS

**4. Chrome + iOS + VO:**
  - **When using the link:** N/A
  - **When dragging the file:** Not testable as you cannot drag files in iOS

**5. Firefox + JAWS:**
  - **When using the link:** N/A
  - 🟢 **When dragging the file:** When dragging a file over, initially nothing happens until I focus the browser again. Visible focus is on the change file button Once it reads the page `<title>` (and more info about the browser) eventually it goes down to and announces "Error we do not accept extension files. Choose a new file" The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.

**6. Firefox + NVDA:**
  - **When using the link:** N/A
  - 🟢  **When dragging the file:** when dragging a file over, initially nothing happens until I focus the browser again. Visible focus is on the change file button. The page `<title>` is announced, followed by "Selected files. **Error** we do not accept mp4 files. Choose a new file. File deleted. No file selected" The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window. Note: No other browser is announcing that the file has been deleted. This may feel like a mistake. But I believe it is not.

**7. Edge + JAWS:**
  - **When using the link:** N/A
  - 🟢 **When dragging the file:** When dragging a file over, focus goes to the browser, and the visual focus is on the change file button. However, it announces `<title>` first. And then eventually it will announce "Change file error we do not accept dot extension files. Choose a new file." The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.


**8. Edge + NVDA:**
  - **When using the link:** N/A
  - 🟢 **When dragging the file:** When dragging a file over, focus goes to the browser, and once the UI is updated, the file upload Input is announced first along with the hint text (Input accepts only specific file types". Then it announces "Clickable Change file. Error We do not accept .mp4 files. Choose a new file" The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.

**9. Chrome + JAWS:**
  - **When using the link:** N/A
  - 🟢 **When dragging the file:** When dragging a file over, focus goes to the browser, and once the UI is updated, the page `<title>` is announced. Then it announces "Change file. Error We do not accept .mp4 files. Choose a new file" The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.

**10. Chrome + NVDA:**
  - **When using the link:** N/A
  - 🟢 **When dragging the file:** When dragging a file over, focus goes to the browser, and once the UI is updated, the file upload Input is announced first along with the hint text (Input accepts only specific file types". Then it announces "Clickable Change file. Error We do not accept .mp4 files. Choose a new file" The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.

**11. Chrome + Talkback (Android):**
  - **When using the link:** N/A
  - **When dragging the file:** Not testable as you cannot drag files on Android

**Magnifcation & Zoom**
No identified issues across Safari, Chrome, Edge, Firefox

**Voice control**
1. Chrome - Mac Voice Control -  can use voice control to activate initial file upload. However, voice control cannot access the "change file" or "delete" buttons without using the grid
2. Safari - Mac Voice Control - to activate any part of the component, I have to use the grid.

**Additional testing needed**


---

### Test ID: upload-invalid-size
**Purpose:**  
Verify error behavior for oversized files.

**WCAG:**  
- 3.3.1 Error Identification  
- 3.3.3 Error Suggestion  
- 4.1.3 Status Messages  

**Setup:**  
Component configured with a max file size (e.g., 25 MB). Using this [storybook story for testing](https://file-input-focus-and-sr--65a6e2ed2314f7b8f98609d8.chromatic.com/iframe.html?globals=&args=&id=uswds-va-file-input--with-max-file-size). Max file size is 1KB.

**Steps:**  
1. When the user selects a file larger than the allowed maximum.  

**Expected Result:**  
- Then the file is not uploaded.  
- And the error message appears (e.g., “We can't upload your file because it's too big.”).  
- And the instructions suggest correct use (“Files must be less than 1 KB.”).
- On display, the error message is announced to screen readers.

#### Acceptance criteria
- 🟢 For an oversized/undersized file, the component displays an error state and announces an error that includes what went wrong and what constraint to meet (e.g., “must be less than…”).
- 🟡 AT may announce page title/browser context first, may be verbose, or may include additional unrelated announcements, as long as the error + next step are ultimately announced and actionable.
- 🔴 The user receives no announced error (or cannot understand the constraint), or the component does not present a usable path to correct the file.

#### Actual behavior:

**Screen readers**

**1. Chrome + VO:**
   - 🟢 **When using the link:** After the file uploads, the screen displays the error and focus goes to the Change file button and says "Change file error. We can't upload your file because it's too big. FIles must be less than 1 KB."
   - 🟢 **When dragging the file:** After the file uploads, the screen displays the error and focus goes to the Change file button and says "Change file error. We can't upload your file because it's too big. FIles must be less than 1 KB."   

**2. Safari + VO:**
   - 🟢 **When using the link:** Screen displays error state and announces "change file. Error. We can't upload your file because it's too big. Files must be less than 1 KB. button"
   - 🟢 **When dragging the file:** The error state of the Uploaded file UI appears. An error message appears below the file name. Until the user returns focus to the browser, the virtual cursor is on the viewport window of the browser, once the user returns focus to the browser, focus goes to the Change file button. The screen reader announces "Change file Error. We can't upload your file because it's too big. FIles must be less than 1 KB."  

**3. Safari + iOS + VO:**
   - 🟢 **When using the link:** After the file uploads, the screen displays the error but focus goes to the change file button and it announces, " Change file error. We can't upload your file because it's too big. Files must be less than 1 KB"
   - **When dragging the file:**  N/A    

**4. Chrome + iOS + VO:**
   - 🟢 **When using the link:** Screen displays error state and announces "Change file error. We can't upload your file because it's too big. FIles must be less than 1 KB."
   - **When dragging the file:**  N/A   

**5. Firefox + JAWS:**
   - 🟢 **When using the link:** The announcement is very verbose. It announces the browser, number of tabs, then the window `<title>` Visual focus is on the change file button. It announces `<title>` first.  And then announces "Change file error We can't upload your file because it's too big. Files must be less than 1 kb." The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window. It just takes a long time to get there. When a user does land on the "Change file" button, the error is announced plainly and quickly   
   - 🟢 **When dragging the file k:** The announcement is very verbose. It announces the browser, number of tabs, then the window <title> Visual focus is on the change file button. It announces `<title>` first.  And then announces "Change file error We can't upload your file because it's too big. Files must be less than 1 kb." The next tab takes me to the change file button. File deleted. No file selected" This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window. It just takes a long time to get there. When a user does land on the "Change file" button, the error is announced plainly and quickly   

**6. Edge + JAWS:**
  - 🟢 **When using the link:** Focus goes to the browser, and the visual focus is on the change file button. It announces `<title>` first.  And then announces "Change file error We can't upload your file because it's too big. Files must be less than 1 kb." The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.    
  - 🟢 **When dragging the file:** When dragging the file, focus goes to the browser, and the visual focus is on the change file button. It announces `<title>` first.  And then announces "Change file error We can't upload your file because it's too big. Files must be less than 1 kb." The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the  browser window.    

**7. Firefox + NVDA:**   
  - 🟢 **When using the link:** It announces the browser `<title>` then page `<title>` then announces, "Clickable Change file. Error. We can't upload your file because it's too big. Files must be less than 1 kb. Button."    
  - 🟢 **When dragging the file:** It announces the browser `<title>` then page `<title>` then announces, "Clickable Change file. Error. We can't upload your file because it's too big. Files must be less than 1 kb. Button."    

**8. Edge + NVDA:**   
  - 🟢 **When using the link:** It announces the browser `<title>` then page `<title>` then announces, "Selected files. Selected Files. jaws-segmented-filename.mp4. Clickable Change file. Error. We can't upload your file because it's too big. Files must be less than 1 kb. Button."    
  - 🟢 **When dragging the file:** It announces the browser `<title>` then page `<title>` then announces, "Input has a maximum file size restruction specified in bytes. Drag a file here or choose from folder. Clickable Change file. Error. We can't upload your file because it's too big. Files must be less than 1 kb. Button." 

**9. Chrome + JAWS:** 
  - 🟢 **When using the link:** It immediately announces "Error: We can't upload your file because it's too big. Files must be less than 1 KB." Focus is on the change file button
  - 🟢 **When dragging the file:** It immediately announces "Error: We can't upload your file because it's too big. Files must be less than 1 KB." Focus is on the change file button

**10. Chrome + NVDA:**
  - 🟢 **When using the link:** Announces `<title>` and then it announces the label, then the error message, "We can't upload your file.." Focus is on the change button
  - 🟢 **When dragging the file:** Announces `<title>` and then it announces the label, then the error message, "No file selected. We can't upload your file.." Focus is on the change button
    
**11. Chrome + Talkback (Android):**
  - 🟢 **When using the link:** It announces the browser `<title>` then, "Change file, Error. We can't upload your file because it's too big. Files must be less than 1 kb. Double tap to activate."
  - 🟢 **When dragging the file:** N/A. Can't drag on Android device

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
1. User navigates to the **Delete** button and activates it 

**Expected Result:**  
- The accessible name of the button includes the name of the file being deleted.
- Then the UI displays a modal confirming the deletion.
- And focus is on the close button of the modal.
- The modal announces "Close delete this file modal button"
- And the user tabs to the delete button to confirm the deletion
- And the user is returned to the empty/upload state.  
- And screen readers announce the change “File deleted, no file selected”  
- And focus moves to the next logical interactive element

#### Acceptance criteria
- 🟢 Deleting a file results in the component returning to the empty/upload state and a status message is announced (e.g., “File deleted” / “No file selected”), and the user can continue by tabbing to the next logical control (often the upload control).
- 🟡 Focus may land on the browser window or the next focusable element, and announcement order may vary, as long as deletion is announced and the user can reliably re-enter the component via normal tabbing.
- 🔴 After confirming deletion, focus is lost such that the user cannot re-enter the component, or deletion is not communicated, leaving the user unsure whether the action succeeded.

#### Actual behavior:

**Screen readers**      

**1. 🟢 Chrome + VO:**  It announces "File deleted. No file selected. Select a file to upload..."

**2. 🟢 Safari + VO:** Announces as expected "File deleted. No file selected. Select a file to upload. Drag a file here or choose from folder You are currently on a file upload button, inside of web content. To click this button, press Control-Option-Space. Press Control-Option-Command-Slash to bring up the more content menu. To exit this web area, press Control-Option-Shift-Up Arrow.

**3. 🟢 Safari + iOS + VO:** In iOS, all of the contents of the modal are announced when opened. But when I activate the delete button, iOS announces "File deleted. No file selected." when it returns to the file input. There is no focus ring visible.   

**4. 🟢 Chrome + iOS + VO:** When activating the modal for the first time, sometimes, all I hear are the button labels within the modal. On subsequent loads (without reloading the component page) I hear the modal as expected. In all cases after choosing to delete the file I hear, "Choose from folder. File deleted. No file selected." The virtual cursor is on the text "Choose from folder"   

**5. 🟢  Firefox + JAWS:** The modal works as expected, after selecting "Yes, delete file," focus returns to browser window and I hear "File deleted. No file selected."   

**6. 🟢 Firefox + NVDA:** The modal works as expected, after selecting "Yes, delete file," focus returns to browser window and I hear "Drag a file here or choose from folder. File deleted. No file selected."    

**7. 🟢 Edge + JAWS:**  The modal works as expected, after selecting "Yes, delete file," focus returns to browser window and I hear "File deleted. No file selected."      

**8. 🟢 Edge + NVDA:** The modal works as expected, after selecting "Yes, delete file," focus returns to browser window and I hear " Choose from folder. no file chosen. file deleted. No file selected."   

**9. Chrome + JAWS:** The modal works as expected, after selecting "Yes, delete file," focus returns to browser window and I hear "File deleted. No file selected."      

**10. Chrome + NVDA:** The modal works as expected, after selecting "Yes, delete file," focus returns to browser window and I hear "File deleted. No file selected."      

**11. 🟢 Chrome + Talkback (Android):** The modal works as expected, after selecting "Yes, delete file," focus returns to browser window and I hear "File deleted. No file selected." And then it starts reading the component label again.. "Input has a maximum file-size restriction.."

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
- Then the UI shows an error message (“Upload a file”).
  - The error message should be descriptive, perhaps explaing again the file expected.   
- And the error is linked to the field using `aria-describedby`.  
- And screen readers announce the message.  
- And focus is placed on the file input.  

#### Acceptance criteria
- 🟢 Attempting to continue without uploading (when required) presents an error message that is announced, clearly indicates the missing requirement, and is programmatically associated with the file input (so the user can perceive and resolve it).
- 🟡 Focus placement may vary (file input, page error summary, or first error), as long as the user is clearly informed what to do and can navigate to the file input without hunting.
- 🔴 The user is blocked from progressing but receives no announced explanation of what’s wrong or how to fix it, or focus moves somewhere that makes the error hard to discover.

#### Actual behavior:

> [!NOTE]
> This cannot be tested in storybook at this time. For anyone implementing this pattern the expected results should drive your testing.

**Screen readers**
1. Chrome + VO: 
2. Safari + VO: 
3. Safari + iOS + VO: 
4. Chrome + iOS + VO: 
5. Edge + JAWS:
6. Edge + NVDA
7. Chrome + JAWS:
8. Chrome + NVDA:
9. Chrome + Talkback + Android

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

#### Acceptance criteria
- 🟢 Replacing a file updates the UI to the new file and the new file name is announced at some point, and the Change/Delete actions reflect the new file.
- 🟡 AT may announce additional context first (title, browser chrome), may duplicate announcements, or may require tabbing back into the component for the updated file to be spoken, as long as the new file is ultimately conveyed and the UI is consistent.
- 🔴 The replacement occurs visually but is not conveyed to AT, or the old file remains announced/represented, creating uncertainty about which file is currently selected.

#### Actual behavior:

**Screen readers**

**1. 🟢 Chrome + VO:** Behavior is consistent with initial upload. When focus returns to the browser window, VO announces. "Change file. You have selected the file filename.ext"

**2. 🟢 Safari + VO:** Behavior is consistent with initial upload. When focus returns to the browser window, VO announces. "Change file. Selected file filename.ext"

**3. 🟢 Safari + iOS + VO:** First announces the labe, "Input accepts only specific file types. then announces "You have selected filename.ext" Focus indicator is on the change file button but it is not announced.

**4. 🟢 Chrome + iOS + VO:** First announces page `<url>` then "You have selected a file filename.ext"

**5. 🟢 Firefox + JAWS:** Announces firefox tabs, then page `<title>, then "Change file filename.ext You have selected filename.ext." In some cases parts of the announcement are duplicated.   

**6. 🟢 Firefox + NVDA:** Announces firefox tabs, then page `<title>, then "Button change file filename.ext. You have selected the file filename.ext." In some cases parts of the announcement are duplicated.

**7. 🟢 Edge + JAWS:** Announces edge tabs, then page `<title>, then "Change file filename.ext You have selected filename.ext." In some cases parts of the announcement are duplicated.

**8. 🟢 Edge + NVDA:** Announces edge tabs, then page `<title>, then "Button change file filename.ext You have selected the file filename.ext." In some cases parts of the announcement are duplicated.

**9. 🟢 Chrome + JAWS:** Announces "You have selected the file filename." Then announces the page <title> and other browser information. 

**10. 🟢 Chrome + NVDA:** Announces `<title>` then announces the input label, then announces the selected file and file name.

**11. 🟢 Chrome + Talkback (Android):** Announces "You have selected the file filename.jpg." then it announces the <title>. Focus remains around the perimeter of the file input component.

---
## 🔐 Encrypted File / Password Tests

[Testing on this storybook URL](https://4915-2-file-input-pw-button--65a6e2ed2314f7b8f98609d8.chromatic.com/iframe.html?globals=&args=&id=uswds-va-file-input--accepts-file-password&viewMode=story)

### Test ID: encrypted-label-announcement
**Purpose:**  
Verify the password field for encrypted files is labeled correctly and announced clearly by assistive technology.

**WCAG:**  
- 1.3.1 Info and Relationships  
- 2.4.6 Headings and Labels  
- 4.1.2 Name, Role, Value  

**Setup:**  
Upload an encrypted file that requires a password to continue.

**Steps:**  
1. When the user navigates to the password field using keyboard or screen reader navigation.

**Expected Result:**  
- Then the screen reader announces the label “Password for this file”.  
- And the input is identified as a protected/password field.

#### Acceptance criteria
- 🟢 The password field has a clear, descriptive label and is announced as a password input.
- 🟡 Announcement verbosity may vary by screen reader, as long as the purpose is clear.
- 🔴 The field lacks a discernible label or is announced as a generic text input.

#### Actual behavior:

**Screen readers**

**1. 🟢 Chrome + VO:** After successful file upload, focus lands on the password input and VO announces, "Password for this file (* Required)"....This is a secure text field. Text typed into this field will not be displayed and will not be spoken by VoiceOver."

**2. 🟢 Safari + VO:** After successful file upload, focus lands on the password input and VO announces, "Password for this file (* Required)"....This is a secure text field. Text typed into this field will not be displayed and will not be spoken by VoiceOver."

**3. 🟡 Safari + iOS + VO:** After uploading, focus is set to the top of the page (Not the file input). After navigating to the password field it announces as expected. "Password for this file (* Required)"....Secure text field Double tap to edit."

**4. 🟡 Chrome + iOS + VO:** After uploading, focus is set to the URL bar (Not the file input). After navigating to the password field it announces as expected. "Password for this file ( * Required)"....Secure text field Double tap to edit."

**5. 🟢 Edge + JAWS:** After announcing the page <title>, then announcing the uploaded file name, it eventuall announces "Password for this file star required password edit required type in text" The second password edit mention is JAWS indication for secure fields.

**6. 🟢 Edge + NVDA:** Focus goes to the password field, and talkback announces, "Password for this file (* Required) Password protected required blank"

**7. 🟢 Chrome + JAWS:** After announcing the page <title>, then announcing the uploaded file name, it eventuall announces "Password for this file star required password edit required type in text" The second password edit mention is JAWS indication for secure fields.

**8. 🟢 Chrome + NVDA:** After file uploads, focus is put on the password field, announces, "Password for this file Required edit protected required blank has auto complete"

**9. 🟢 Chrome + Talkback + Android** Focus goes to the password field, and talkback announces, "Password edit box. Password for this file (* Required)"

---

### Test ID: encrypted-keyboard-accessibility
**Purpose:**  
Ensure the password field is fully operable using keyboard-only interaction.

**WCAG:**  
- 2.1.1 Keyboard  
- 2.4.7 Focus Visible  

**Setup:**  
Upload an encrypted file that displays a password field.

**Steps:**  
1. When the user tabs to the password field.  
2. And enters a password value using the keyboard.  
3. And submits the password.

**Expected Result:**  
- Then the field receives visible focus.  
- And typing and submission work without requiring a mouse.

#### Acceptance criteria
- 🟢 The password field and submit action are fully usable with keyboard only.
- 🟡 Focus styling or announcement timing may vary, as long as focus is visible.
- 🔴 Keyboard users cannot enter or submit a password.

#### Actual behavior:

**Screen readers**

**1. 🟢 Chrome + VO:** field is keyboard accessible

**2. 🟢 Safari + VO:** field is keyboard accessible

**3. 🟢 Safari + iOS + VO:** field is touch/tap accessible

**4. 🟢 Chrome + iOS + VO:** field is touch/tap accessible

**5. 🟢 Edge + JAWS:** field is keyboard accessible

**6. 🟢 Edge + NVDA:** field is keyboard accessible

**7. 🟢 Chrome + JAWS:** field is keyboard accessible

**8. 🟢 Chrome + NVDA:** field is keyboard accessible

**9. 🟢 Chrome + Talkback + Android** field is touch/tap accessible

---

### Test ID: encrypted-masked-input
**Purpose:**  
Verify password characters are masked and not spoken aloud.

**WCAG:**  
- 1.3.1 Info and Relationships  
- 4.1.2 Name, Role, Value  

**Setup:**  
Upload an encrypted file and navigate to the password field.

**Steps:**  
1. When the user types characters into the password field.

**Expected Result:**  
- Characters are visually masked.  
- Assistive technology does not announce typed characters.

#### Acceptance criteria
- 🟢 Characters are visually masked in the password field (no plain-text password shown on screen).   
- 🟢 Assistive technology does not provide a re-readable plaintext password (e.g., it should not expose the full value via accessible name/description or let the user review the entered password as normal text).   
- 🟢 Mobile AT may echo individual characters during entry (iOS VoiceOver / Android TalkBack), as long as the value remains visually masked and is not exposed as a readable string after entry.   
- 🟡 AT may announce “contents hidden” or similar.   
- 🔴 The password value is visually visible (unmasked) by default, or the full password is exposed programmatically (e.g., announced/reviewable as plain text in a way that defeats secure entry).
- 
#### Actual behavior:

**Screen readers**

**1. 🟢 Chrome + VO:** Characters are visually masked and VO Announces a *typerwriter sound* as a user types, expected.

**2. 🟢 Safari + VO:** Characters are visually masked and VO Announces a *typerwriter sound* as a user types, expected.

**3. 🟢 Safari + iOS + VO:** Characters are visually masked and VO announces the letter that is being typed and a click

**4. 🟢 Chrome + iOS + VO:** Characters are visually masked and VO announces the letter that is being typed and a click

**5. 🟢 Edge + JAWS:** Characters are visually masked and JAWS Announces *star* as a user types, expected.

**6. 🟢 Edge + NVDA:** Characters are visually masked and NVDA Announces *star* as a user types, expected.

**7. 🟢 Chrome + JAWS:** Characters are visually masked and JAWS Announces *star* as a user types, expected.

**8. 🟢 Chrome + NVDA:** Characters are visually masked and NVDA Announces *star* as a user types, expected.

**9. 🟢 Chrome + Talkback + Android** Characters are visually masked and Talkback announces *bullet* as a user types, expected

**Note:** Desktop screen readers typically do not echo characters in password fields. Mobile screen readers may echo characters during touch entry. Both behaviors are acceptable if the password remains masked and not reviewable as plain text.

---

### Test ID: encrypted-successful-unlock
**Purpose:**  
Verify accessible behavior when encrypted file is unlocked.

**WCAG:**  
- 3.2.2 On Input  
- 4.1.3 Status Messages  

**Setup:**  
Upload an encrypted file and enter the correct password.

**Steps:**  
1. When the user submits a valid password.

**Expected Result:**  
- Success message announced.
- Focus reflects new state.

#### Acceptance criteria
- 🟢 After successful password entry, screen readers announce a clear indication of success (e.g., file selected / file name available / unlocked state).   
- 🟡 A non-interactive visual success alert may not be announced, as long as success is conveyed through another reliable status message.   
- 🔴 No success indication is announced, leaving the user unsure whether the password was accepted.   

#### Actual behavior:

**Screen readers**

**1. 🟢 Chrome + VO:** Focus goes to the component and it announces file selected, file name. A green success message appears, but it is not announced.

**2. 🟢 Safari + VO:** Focus goes to the component and it announces file selected, file name. A green success message appears, but it is not announced.

**3. 🟢 Safari + iOS + VO:** Focus goes to the component and it announces file selected, file name. A green success message appears, but it is not announced.

**4. 🟢 Chrome + iOS + VO:** Focus goes to the component and it announces file selected, file name. A green success message appears, but it is not announced.

**5. 🟢 Edge + JAWS:** Focus goes to the component and it announces file selected, file name. A green success message appears, but it is not announced.

**6. 🟢 Edge + NVDA:** Focus goes to the component and it announces file selected, file name. A green success message appears, but it is not announced.

**7. 🟢 Chrome + JAWS:** Focus goes to the component and it announces file selected, file name. A green success message appears, but it is not announced.

**8. 🟢 Chrome + NVDA:** Focus goes to the component and it announces file selected, file name. A green success message appears, but it is not announced.

**9. 🟢 Chrome + Talkback + Android** Focus goes to the component and it announces file selected, file name. A green success message appears, but it is not announced.

**Note** Although the visual success alert isn’t announced, screen readers announce the successful file selection and filename, which clearly conveys the unlock state; we’re treating this as acceptable and documenting it as such.

---
### Test ID: encrypted-unsuccessful-unlock

**Purpose:**
Verify accessible behavior when an encrypted file cannot be unlocked due to an incorrect password.

**WCAG:**
- 3.3.1 Error Identification
- 3.3.2 Labels or Instructions
- 3.3.3 Error Suggestion
- 4.1.3 Status Messages

**Setup:**
Upload an encrypted file that requires a password to continue.

**Steps:**
- When the user enters an incorrect password into the password field.
- And submits the password.

**Expected Result:**
- Then the file remains locked.
- And an error message appears indicating the password is incorrect (e.g., “Incorrect password. Try again or delete file.”).
- And the error message is announced by screen readers when it appears.
- And the message is programmatically associated with the password field (e.g., via aria-describedby).
- And focus remains on or returns to the password field, allowing the user to retry without losing context.

#### Acceptance criteria
- 🟢 The user is clearly informed that the password was incorrect and can immediately retry or choose an alternate action (such as deleting the file).   
- 🟡 Announcement timing or phrasing may vary by AT/browser, as long as the error is discoverable without searching and the recovery path is clear.   
- 🔴 The user receives no announced error, or focus moves away from the password field in a way that makes recovery unclear or difficult.   

#### Actual behavior:

**Screen readers:** 
**1. 🟢 Chrome + VO:** Focus goes back to the password field, and it announces "5 characters Insertion at end of text. Password for this file (*Required) Error Incorrect password. Try again or delete file. required invalid data secure edit text"

**2. 🔴 Safari + VO:** Focus goes back to the password field, and it announces "5 characters Insertion at end of text. Password for this file (*Required) required invalid data secure edit text with autofill menu" it never announces an error or the error message. It never announces "Incorrect password. Try again or delete file."

**3. 🟢 Safari + iOS + VO:**  Focus goes to the password field, and it immediately announces "Error incorrect password. Try again or delete file."

**4. 🟢 Chrome + iOS + VO:** Focus goes to the password field, and it immediately announces "Error incorrect password. Try again or delete file."

**5. 🟢 Edge + JAWS:** Focus goes to the password field, and it immediately announces "Error incorrect password. Try again or delete file."

**6. 🟢 Edge + NVDA:** It starts to announce Error incorrect password but quickly gets interrupted then announces the label, "Password for this file star required edit protected required invalid entry. Error Incorrect passwod. try again or delete file. Five bullets"

**7. 🟢 Chrome + JAWS:** Focus goes to the password field, and it immediately announces "Error incorrect password. Try again or delete file."

**8. 🟢 Chrome + NVDA:** It starts to announce Error incorrect password but quickly gets interrupted then announces the label, "Password for this file star required edit protected required invalid entry. Error Incorrect passwod. try again or delete file."

**9. 🟢 Chrome + Talkback + Android** Focus goes back to the password field, and it announces "3 characters edit error Invaid password. Try again or delet"

---

## 🟡 Known AT Differences & “Good Enough” Decisions

The following behaviors differ across AT/browser combinations but are considered acceptable
because users can still complete the task and understand the component state.

- Safari + VoiceOver may announce “No file selected” even after a successful upload
- Some screen readers announce the page `<title>` after file selection
- Mouse vs keyboard interaction may produce different announcement timing
- Firefox + JAWS may announce browser chrome before component updates

These behaviors are documented to prevent false positives and regressions.

---

### 🔎 Findings & Regression Tracking

<details>
  <summary>Past testing</summary>
  
#### December 14 Testing summary
Error states worked out well, but we needed to check for regressions on the success state.

| Date found | Issue | Regression or Existing | Status |
| ---------- | ----- | ---------------------- | ------ |
| 12/9/25    | **PR:** Mac, Chrome, VO: After deleting a file, the virtual cursor highlights the viewport. and the page `<title>` is announced. The next tab takes the user to the component (Not sure if that's because that's where focus should be, or because that is the very next focusable thing in the viewport). <br /><br /> **Current:** Mac, Chrome, VO: After deleting a file, focus goes to the "input" and  this is announced "Select a file to upload Drag a file here or choose from folder. No file selected." |   |  |
| 12/9/25    | **PR:** iOS, Chrome, VO: when file is successfully uploaded, the Virtual Cursor ends up in the URL bar of the browser, and begins announcing the URL of the page. And then, "You have selected a file filename.ext" is announced. <br /><br /> **Current:** iOS, Chrome, VO: when file is successfully uploaded, the Virtual Cursor ends up in the URL bar of the browser, and begins announcing the URL of the page. And then, "You have selected a file filename.ext" is announced."  | Pre-exsiting | | 
| 12/9/25    | **PR:** Mac, Safari, VO: After uploading, the page `<title>` is announced. The next tab takes the user to the component; (Not sure if that's because that's where focus should be, or because that is the very next focusable thing in the viewport).  This worked once, but no longer. <br /><br />**Current:** After uploading, the page `<title>` is announced. The next tab takes the user to the component; (Not sure if that's because that's where focus should be, or because that is the very next focusable thing in the viewport).   | Pre-existing |  | 


## Dec 17 Afternoon Testing "Good Enough" Success state

After fixing success regressions we identified some additional differences.

| AT | Keyboard Announces selected file| Keyboard Announced No file selected | Mouse Announces selected file | Mouse Announced No file selected | Keyboard Change file & Delete file Announce file name | FileInput Component After upload announces selected file |
| -- | ----- | ---- | ---- | ---- | ---- | --- |
| Safari + VO | ❌ | Yes | ✅ | Yes | ✅  | ❌ Announces no file selected | 
| Chrome + VO | ✅  | Yes | ✅  | Yes | ✅ | ✅ | 
| Edge + JAWS | ✅ announces hint text too | Yes | ✅ announces hint text too | Yes | ✅ | ✅ |
| Firefox + JAWS | ✅ announces instructional &  hint text too | Yes | ✅ announces instructional &  hint text too | Yes | ✅  | ✅ |
| Chrome + JAWS | ✅ announces instructional &  hint text too | Yes | ✅ announces instructional &  hint text too | Yes | ✅  | ✅ |  
| Edge + NVDA | ✅ announces instructional &  hint text too | Yes | ✅ announces instructional &  hint text too | Yes | ✅  |  ✅ |
| Firefox + NVDA | ✅ announces instructional & hint text too (announced 2x) | Yes | ✅ announces instructional & hint text too | Yes | ✅  | ✅ |
| Chrome + NVDA |  ✅ announces instructional & hint text too | Yes | ✅ announces instructional & hint text too | Yes | ✅  | ✅ |
| ios + Safari + VO | ❌ | No | N/A | N/A | ✅ | ✅ |
| ios + Chrome + VO | ❌ | No | N/A | N/A | ✅ | ✅ |

## Dec 17 Evening Testing "Good Enough" Success state

We established our "Good Enough" criteria

1. When tabbing through the component in the success and error state, we can hear the file name on the change and delete button
2. In the success state at some point we do hear “File selected - file name”

| AT | Keyboard Announces selected file| Keyboard Announced No file selected | Mouse Announces selected file | Mouse Announced No file selected | Keyboard Change file & Delete file Announce file name | FileInput Component After upload announces selected file |
| -- | ----- | ---- | ---- | ---- | ---- | --- |
| Safari + VO | 🟡 | No | ✅ | No | ✅  | ✅  | 
| Chrome + VO | ✅  | No | ✅  | No | ✅ | ✅ | 
| Edge + JAWS | ✅  | No | ✅  | No | ✅ | ✅ |
| Firefox + JAWS | ✅  | No | ✅ | No | ✅  | ✅ |
| Chrome + JAWS | ✅  | No | ✅ | No | ✅  | ✅ |  
| Edge + NVDA | 🟡 announces instructional &  hint text too | Yes | 🟡 announces instructional &  hint text too | Yes | ✅  |  ✅ |
| Firefox + NVDA | ✅ | No | ✅ | No | ✅  | ✅ |
| Chrome + NVDA |  🟡 announces instructional & hint text too | Yes | 🟡 announces instructional & hint text too | Yes | ✅  | ✅ |
| ios + Safari + VO | 🟡 | No | N/A | N/A | ✅ | ✅ |
| ios + Chrome + VO | 🟡 | No | N/A | N/A | ✅ | ✅ |
| Android + Chrome + Talkback | ✅ | No | N/A | N/A | ✅ | ✅ |

</details>

---

## 📄 Version History
| Date | Author | Change |
|------|--------|--------|
| 2026-01-22 | Jeana | Started tests for updated password input for encrypted files |
| 2026-01-13 | Jeana  | Completed talkback testing, and re-ran the tests here and identified no regressions |
| 2025-12-25 | Jeana  | Added Android Talkback testing results + Chrome on Windows |
| 2025-12-17 | Jeana  | Testing updated PR Changes |
| 2025-12-09 | Jeana  | Initial accessibility tests completed |
| 2025-11-24 | Jeana  | Initial accessibility test plan |
