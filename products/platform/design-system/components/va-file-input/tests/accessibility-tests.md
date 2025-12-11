# va-file-input — Accessibility Tests

## 🧭 Component Overview
**Description:**  
The `va-file-input` component allows users to upload one or more files through a browser interface. After upload, the UI updates to display:  
- The file name  
- The file size  
- Any applicable error messages  
- A **Change** button  
- A **Delete** button
- Future iterations
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
- [Error states](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/design-system/components/va-file-input/error-states.md  )
- [Design decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/design-system/components/va-file-input/design-decisions-log.md)
- [Architecture & properties](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/design-system/components/va-file-input/architecture-properties.md)

---

## 📦 Assistive Technology + Browser Matrix

### Screen readers  
- JAWS + Chrome
- JAWS + Edge  
- NVDA + Chrome
- NVDA + Edge
- VoiceOver + Safari 
- VoiceOver + Chrome

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
1. When the user activates the **Chose from folder** "input" or drags a file to the **Drag a file here or choose from folder** input
2. And selects a valid file.  

**Expected Result:**  
- Then focus moves to the component.
- The Focus ring is visible
- And the post-upload UI is announced by screen readers "Selected files" and File name.  
- And no unexpected page-level focus shifts occur.

#### Actual behavior:

**Screen readers**

**1. Chrome + VO:**   
  - ✅ **When using the link:** VO Virtual cursor lands on "Selected files" and announces "Selected files: Filename.extension" The next tab is the "Change file" button.
  - ✅ **When dragging the file:** When I drag the file, and the UI changes to show the file name, the virtual cursor seems to be on the entire viewport. It reads the page `<title>` tab name, and then will announces "Selected files: filename.extension". The next tab stop is the "Change file" button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.

**2. Safari + VO:**   
  - ✅ **When using the link:** Focus moves from finder to the browser, and the VO virtual cursor lands on the viewport, and announces "Selected files: filename.extension". The next tab is the "Change file" button.
  - ❌ **Retested behavior on 12/9/25**
      -  **When using the link:** When testing today, Safari is no longer announcing the "Selected files: filename.extension". After selecting a file, it will announce the page `<title>`  and then "You are currently on web content. To enter the web area, press Control-Option-Shift-Down arrow" When doing that, the virtual cursr goes to the label of the component. When pressing tab, focus goes to the change file button, and it announces "Change file filename.ext"
      -  **Decision:** This round of testing has been focused on error messaging. In this "failed" test the user can tab to the change file button and hear the file name announced. We will address this in v2.  It is hard to announce states when there is a non-interactive element that is being put in focus.
  - ✅ **When dragging the file:** Focus does not move to the browser, even though the UI is updating and the file seems to be uploading. When the user changes focus back to the browser the `<title>` is announced, followed by the label of the file input "Select a file to upload" no success message is announced saying the file is selected or uploaded. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.


**3. Safari + iOS + VO:**   
  - ✅ **When using the link:** Virtual cursor lands on the "Select a file to upload" file input label (not in the uploaded UI). And announces "Selected files filename.extension". The next swipe takes the user to the Change file button
  - **When dragging the file:** Not applicable in this test case

**4. Chrome + iOS + VO:**
  - ✅ **When using the link:** It appears focus is lost. The Virtual Cursor ends up in the URL bar of the browser, and begins announcing the URL of the page. But after the announcemnt of the url, it does announce "You have selected a file filename.extension". 
  - **When dragging the file:** Not applicable in this test case

**5. Firefox + JAWS:**
  - ✅ **When using the link:** JAWS begins announcing the `<title>` of the page, and eventually announces "You have selected files filename.extension" (And it announces this twice). The next tab does go to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.
  - **When dragging the file:** When dragging a file over, initially nothing happens until I focus the browser again. There is no visiblefocus. It seems like something starts to announce, but then something interrupts it and it starts reading the `<title>`. It eventually announces "Selected files filename extension". The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.

**6. Firefox + NVDA:**
  - ✅ **When using the link:** NVDA Announces "Va-file-input default modular firefox, va-file-input default document, selected files, you have selected the file filename.extension." 
  - ✅ **When dragging the file:** When dragging a file over, initially nothing happens until I focus the browser again. NVDA virtual cursor seems to be on the entire viewport. It seems like something starts to announce, but then something interrupts it and it starts reading the `<title>`. It eventually announces "Selected files" but never announces the file names. The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.
    
**7. Edge + JAWS:**
  - ✅ **When using the link:** After the UI indicates a change, JAWS begins announcing the `<title>` of the page, and eventually announces "You have selected files filename.extension". The next tab does go to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.
  - ✅ **When dragging the file:** When dragging a file over, focus shifts to the browser, and it appears focus is lost. There's no virtual cursor or outline appearing as to where focus is.  What is being announced is the page `<title>` (several times). Eventually it does announce "Selected files: filename.extenstion". When I press tab the next item to receive focus is the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.

**8. Edge + NVDA:**
  - ✅ **When using the link:** NVDA Announces "Va-file-input default profile 1 microsoft edge window, selected files, selected files, you have selected the file filename.extension." A Dotted border is around part of the UI. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.
  - ✅ **When dragging the file:** When dragging a file over, focus goes to the browser, and the virtual cursor is highlighting the entire viewport. However, it announces `<title>` first. And then eventually it will announce "Selected files filename.extension". The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.


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

**1. Chrome + VO:**   
  - **When using the link:** N/A
  - ✅ **When dragging the file:** The error state of the Uploaded file UI appears. An error message appears below the file name. Focus is on the Change file button. The screen reader announces "Error. We do not accept .exstension files. Choose a new file."

**2. Safari + VO:**    
  - **When using the link:** N/A
  - ✅  **When dragging the file:**  The error state of the Uploaded file UI appears. An error message appears below the file name. Until the user returns focus to the browser, the virtual cursor is on the viewport window of the browser, once the user returns focus to the browser, focus goes to the Change file button. The screen reader announces "We do not accept .extension files. Choose a new file."

**3. Safari + iOS + VO:**      
  - **When using the link:** N/A
  - **When dragging the file:** Not testable as you cannot drag files in iOS

**4. Chrome + iOS + VO:**
  - **When using the link:** N/A
  - **When dragging the file:** Not testable as you cannot drag files in iOS

**5. Firefox + JAWS:**
  - **When using the link:** N/A
  - ✅ **When dragging the file:** When dragging a file over, initially nothing happens until I focus the browser again. Visible focus is on the change file button. It seems like something starts to announce, but then something interrupts it and it starts reading the `<title>`. Once it reads the title (and more info about the browser) eventually it goes down to and announces "Error we do not accept extension files. Choose a new file" The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.

**6. Firefox + NVDA:**
  - **When using the link:** N/A
  - ✅  **When dragging the file:** when dragging a file over, initially nothing happens until I focus the browser again. Visible focus is on the change file button. The page `<title>` is announced, followed by "Selected files. Error we do not accept mp4 files. Choose a new file. File deleted. No file selected" The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window. Note: No other browser is announcing that the file has been deleted. This may feel like a mistake. But I believe it is not.

**7. Edge + JAWS:**
  - **When using the link:** N/A
  - ✅ **When dragging the file:** When dragging a file over, focus goes to the browser, and the visual focus is on the change file button. However, it announces `<title>` first. And then eventually it will announce "Change file error we do not accept dot extension files. Choose a new file." The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.
  - JAWS actual announcement
    > dash va dash file dash input dash dash accepts dash only dash specific dash file dash types dash Microsoft edge <br />
    > dash va dash file dash input dash dash accepts dash only dash specific dash file dash types dash Microsoft edge page<br />
    > dash va dash file dash input dash dash accepts dash only dash specific dash file dash types dash type<br />
    > Change file error.<br />
    > We do not accept dot mp4 files.<br />
    > Choose a new file button to activate press enter. 


https://github.com/user-attachments/assets/bf43aacd-0575-4c36-b8ce-ab29da649c49


**8. Edge + NVDA:**
  - **When using the link:** N/A
  - ✅ **When dragging the file:** When dragging a file over, focus goes to the browser, and once the UI is updated, the file upload Input is announced first along with the hint text (Input accepts only specific file types". Then it announces "Clickable Change file. Error We do not accept .mp4 files. Choose a new file" The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.
  - NVDA Actual announcement
    > VA file input accepts only specific file types.<br />
    > Profile one, Microsoft Edge Window.<br />
    > Use VA file input accepts only specific file types document.<br />
    > Clickable input accepts only specific file types, clickable change file.<br />
    > Error. We do not accept dot mp4 files. Choose a new file.<br />
    > Button<br />
    > Clickable delete file.<br />
    > Error We do not accept dot mp4 files. Choose a new file<br />
    > Button <br />


https://github.com/user-attachments/assets/acb7aba4-7f7e-4178-aca1-04419abb1e23


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
Component configured with a max file size (e.g., 25 MB). Using this [storybook story for testing](https://file-input-focus-and-sr--65a6e2ed2314f7b8f98609d8.chromatic.com/iframe.html?globals=&args=&id=uswds-va-file-input--with-max-file-size). Max file size is 1KB.

**Steps:**  
1. When the user selects a file larger than the allowed maximum.  

**Expected Result:**  
- Then the file is not uploaded.  
- And the error message appears (e.g., “We can't upload your file because it's too big.”).  
- And the instructions suggest correct use (“Files must be less than 1 KB.”).
- On display, the error message is announced to screen readers. 

#### Actual behavior:

**Screen readers**

**1. Chrome + VO:**
   - ✅ **When using the link:** After the file uploads, the screen displays the error and focus goes to the Change file button and says "Change file error. We can't upload your file because it's too big. FIles must be less than 1 KB."   
   - ✅ **When dragging the file:** After the file uploads, the screen displays the error and focus goes to the Change file button and says "Change file error. We can't upload your file because it's too big. FIles must be less than 1 KB."   

**2. Safari + VO:**
   - ✅ **When using the link:** Screen displays error state and announces "Change file error. We can't upload your file because it's too big. FIles must be less than 1 KB."   
   - ✅ **When dragging the file:** The error state of the Uploaded file UI appears. An error message appears below the file name. Until the user returns focus to the browser, the virtual cursor is on the viewport window of the browser, once the user returns focus to the browser, focus goes to the Change file button. The screen reader announces "Change file Error. We can't upload your file because it's too big. FIles must be less than 1 KB."   

**3. Safari + iOS + VO:**
   - ✅ **When using the link:** After the file uploads, the screen displays the error but focus goes to the change file button and it announces, " Change file error. We can't upload your file because it's too big. Files must be less than 1 KB"
   - **When dragging the file:**  N/A    

**4. Chrome + iOS + VO:**
   - ✅ **When using the link:** Screen displays error state and announces "Change file error. We can't upload your file because it's too big. FIles must be less than 1 KB."   
   - **When dragging the file:**  N/A   

**5. Firefox + JAWS:**
   - ✅ **When using the link:** The announcement is very verbose. It announces the browser, number of tabs, then the window <title> Visual focus is on the change file button. It announces `<title>` first.  And then announces "Change file error We can't upload your file because it's too big. Files must be less than 1 kb." The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window. It just takes a long time to get there. When a user does land on the "Change file" button, the error is announced plainly and quickly   
   - ✅ **When dragging the file k:** The announcement is very verbose. It announces the browser, number of tabs, then the window <title> Visual focus is on the change file button. It announces `<title>` first.  And then announces "Change file error We can't upload your file because it's too big. Files must be less than 1 kb." The next tab takes me to the change file button. File deleted. No file selected" This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window. It just takes a long time to get there. When a user does land on the "Change file" button, the error is announced plainly and quickly   

**6. Edge + JAWS:**
  - ✅ **When using the link:** Focus goes to the browser, and the visual focus is on the change file button. It announces `<title>` first.  And then announces "Change file error We can't upload your file because it's too big. Files must be less than 1 kb." The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the browser window.    
  - ✅ **When dragging the file:** When dragging the file, focus goes to the browser, and the visual focus is on the change file button. It announces `<title>` first.  And then announces "Change file error We can't upload your file because it's too big. Files must be less than 1 kb." The next tab takes me to the change file button. This is expected behavior because the screen reader detected a change out of the browser, and announces `<title>` to signal to the user it is back in the  browser window.    

**7. Firefox + NVDA:**   
  - ✅ **When using the link:** It announces the browser <title> then page <title> then announces, "Clickable Change file. Error. We can't upload your file because it's too big. Files must be less than 1 kb. Button."    
  - ✅ **When dragging the file:** It announces the browser <title> then page <title> then announces, "Clickable Change file. Error. We can't upload your file because it's too big. Files must be less than 1 kb. Button."    

**8. Edge + NVDA:**   
  - ✅ **When using the link:** It announces the browser <title> then page <title> then announces, "Selected files. Selected Files. jaws-segmented-filename.mp4. Clickable Change file. Error. We can't upload your file because it's too big. Files must be less than 1 kb. Button."    
  - ✅ **When dragging the file:** It announces the browser <title> then page <title> then announces, "Input has a maximum file size restruction specified in bytes. Drag a file here or choose from folder. Clickable Change file. Error. We can't upload your file because it's too big. Files must be less than 1 kb. Button." 
  
**Additional testing needed**
1. Android - talkback
   
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

#### Actual behavior:

**Screen readers**   
**1. 🛑 Chrome + VO:** Inconsistent results with VO.   
  - One time, after activating the delete button in the modal, focus was completely lost, no other announcement other than the page title   
  - Another time, after activating the delete button in the modal, I heard "File deleted. No file selected."   
  - Another time, after activating the delete button in the modal "Object replacement character , File deleted. N file selected."

**2. ✅ Safari + VO:** Modal announces as expected, delete button activated, user returned to browser window, virtual cursor on the entire window. Screen reader announces "File deleted. No file selected."     

**3. ✅ Safari + iOS + VO:** In iOS, all of the contents of the modal are announced when opened. But when I activate the delete button, iOS announces "File deleted. No file selected." when it returns to the file input. There is no focus ring visible.   

**4. ✅ Chrome + iOS + VO:** When activating the modal for the first time, sometimes, all I hear are the button labels within the modal. On subsequent loads (without reloading the component page) I hear the modal as expected. In all cases after choosing to delete the file I hear, "Choose from folder. File deleted. No file selected." The virtual cursor is on the text "Choose from folder"   

**5. ✅  Firefox + JAWS:** The modal works as expected, after selecting "Yes, delete file," focus returns to browser window and I hear "File deleted. No file selected."   

**6. ✅ Firefox + NVDA:** The modal works as expected, after selecting "Yes, delete file," focus returns to browser window and I hear "Drag a file here or choose from folder. File deleted. No file selected."    

**7. ✅ Edge + JAWS:**  The modal works as expected, after selecting "Yes, delete file," focus returns to browser window and I hear "File deleted. No file selected."      
**8. ✅ Edge + NVDA:** The modal works as expected, after selecting "Yes, delete file," focus returns to browser window and I hear " Choose from folder. no file chosen. file deleted. No file selected."   

**Additional testing needed**
1. Android - talkback

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

#### Actual behavior:

> [!NOTE]
> This cannot be tested in storybook at this time. For anyone implementing this pattern the expected results should drive your testing.

**Screen readers**
1. Chrome + VO: 
2. Safari + VO: 
3. Safari + iOS + VO: 
4. Chrome + iOS + VO: 
5. Firefox + JAWS:
6. Firefox + NVDA:
7. Edge + JAWS:
8. Edge + NVDA

**Additional testing needed**
1. Android - talkback

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

**1. ✅ Chrome + VO:** Behavior is consistent with initial upload. When focus returns to the browser window, VO announces. "Change file. You have selected the file filename.ext"

**2. ✅ Safari + VO:** Behavior is consistent with initial upload. When focus returns to the browser window, VO announces. "Change file. Selected file filename.ext"

**3. ✅ Safari + iOS + VO:** First announces the labe, "Input accepts only specific file types. then announces "You have selected filename.ext" Focus indicator is on the change file button but it is not announced.

**4. ✅ Chrome + iOS + VO:** First announces page `<url>` then "You have selected a file filename.ext"

**5. ✅ Firefox + JAWS:** Announces firefox tabs, then page `<title>, then "Change file filename.ext You have selected filename.ext." In some cases parts of the announcement are duplicated.   

**6. ✅ Firefox + NVDA:** Announces firefox tabs, then page `<title>, then "Button change file filename.ext. You have selected the file filename.ext." In some cases parts of the announcement are duplicated.

**7. ✅ Edge + JAWS:** Announces edge tabs, then page `<title>, then "Change file filename.ext You have selected filename.ext." In some cases parts of the announcement are duplicated.

**8. ✅ Edge + NVDA:** Announces edge tabs, then page `<title>, then "Button change file filename.ext You have selected the file filename.ext." In some cases parts of the announcement are duplicated.

**Additional testing needed**
1. Android - talkback


---

## 🧩 Edge Cases
- Very fast uploads not announcing changes properly  
- Very slow uploads requiring status messaging (“Uploading…”)  

---

### 🔎 Findings

| Date found | Issue | Regression or Existing | Status |
| ---------- | ----- | ---------------------- | ------ |
| 12/9/25    | **PR:** Mac, Chrome, VO: After deleting a file, the virtual cursor highlights the viewport. and the page `<title>` is announced. The next tab takes the user to the component (Not sure if that's because that's where focus should be, or because that is the very next focusable thing in the viewport). <br /><br /> **Current:** Mac, Chrome, VO: After deleting a file, focus goes to the "input" and  this is announced "Select a file to upload Drag a file here or choose from folder. No file selected." |   |  |
| 12/9/25    | **PR:** iOS, Chrome, VO: when file is successfully uploaded, the Virtual Cursor ends up in the URL bar of the browser, and begins announcing the URL of the page. And then, "You have selected a file filename.ext" is announced. <br /><br /> **Current:** iOS, Chrome, VO: when file is successfully uploaded, the Virtual Cursor ends up in the URL bar of the browser, and begins announcing the URL of the page. And then, "You have selected a file filename.ext" is announced."  | Pre-exsiting | | 
| 12/9/25    | **PR:** Mac, Safari, VO: After uploading, the page `<title>` is announced. The next tab takes the user to the component; (Not sure if that's because that's where focus should be, or because that is the very next focusable thing in the viewport).  This worked once, but no longer. <br /><br />**Current:** After uploading, the page `<title>` is announced. The next tab takes the user to the component; (Not sure if that's because that's where focus should be, or because that is the very next focusable thing in the viewport).   | Pre-existing |  | 

---

## 📄 Version History
| Date | Author | Change |
|------|--------|--------|
| 2025-12-09 | Jeana  | Initial accessibility tests completed |
| 2025-11-24 | Jeana  | Initial accessibility test plan |
