# Bug Audit Checklist
When testing a section of the 526EZ form (or any structured form page), your goal is to ensure that every input, interaction, and system response works exactly as expected under all reasonable conditions. Follow the steps below:

## 1. Understand the Form Step / Section's Purpose
- Read any available documentation or helper text on the page.
- Identify what this section is trying to capture or allow the user to do (e.g., enter personal info, upload documents, answer eligibility questions).

## 2. Test Every Input Type
For each field or interactive element in the section, test its default state, valid use, invalid use, and edge case.

| **Test Scenario** | **What It Is**                                                                 | **Example**                                              | **Why It Matters**                                                                 |
|-------------------|----------------------------------------------------------------------------------|----------------------------------------------------------|-------------------------------------------------------------------------------------|
| **Default State**| How the element appears and behaves before any user interaction.                | A text field is empty with a placeholder like “First name” | Ensures the element is initialized correctly and doesn’t contain unintended values.|
| **Valid Use**    | A correct, expected input or interaction that follows system requirements.       | Typing “Jane Doe” into a name field                      | Confirms the system accepts valid inputs and allows task progression.              |
| **Invalid Use**  | Incorrect input that violates field or system rules.                            | Typing “@!#” into a name field or leaving a required field blank | Verifies error handling and validation messaging works correctly.                 |
| **Edge Case**    | A less common, unusual, or extreme input that still may be valid or attempted.  | Typing a 50-character name, pasting text, using emojis   | Tests system limits and robustness against unexpected but possible behaviors.      |


### Text fields (e.g., name, address)
* [ ] Type valid inputs.
* [ ] Type invalid characters (e.g., !@#$% in name fields).
* [ ] Leave the field blank and attempt to proceed.
* [ ] Copy/paste into the field (from another source).

### Radio buttons & checkboxes
* [ ] Select each option individually.
* [ ] Try selecting multiple (if applicable).
* [ ] Deselect and reselect to test consistency.
* [ ] Test keyboard navigation (Tab, Space, Enter).

### Dropdown menus
* [ ] Open and select each option.
* [ ] Try proceeding without selecting any option.
* [ ] Try using keyboard navigation to select an option.

### Date Input 
* [ ] Type a date manually (valid and invalid formats).
* [ ] Leave the field blank and continue.

### File uploads
* [ ] Upload valid file types (e.g., PDF, JPG, DOCX).
* [ ] Attempt to upload an unsupported file type.
* [ ] Try uploading a file that exceeds the size limit.
* [ ] Cancel a file upload and retry.

### Buttons and links
* [ ] Click each button and observe system behavior.
* [ ] Check for error messages, navigation, or success messages.
* [ ] Test keyboard activation (Tab + Enter or Space).

### Conditional logic
* [ ] Change answers to see if the correct follow-up fields appear or disappear.
* [ ] Confirm hidden fields become required only when applicable.

### Error messages
* [ ] Intentionally trigger errors (e.g., leave required fields blank, enter invalid input).
* [ ] Confirm error messages appear in the right location and make sense.
* [ ] Confirm the user is blocked from continuing until the error is resolved.

## 3. Test Page Behavior in Different Scenarios
* [ ] Refresh and return
* [ ] Refresh the page. Does data persist (if it’s supposed to)?
* [ ] Leave the page and return. Is the expected state preserved?

### Responsive layout
* [ ] Resize the window or test on mobile emulator.
* [ ] Confirm layout and elements adjust properly.

### Browser testing
* [ ] Test in all required browsers (Chrome, Firefox, Safari, Edge).

## 4. Test Accessibility Basics (if part of your responsibility)
* [ ] Use only a keyboard to navigate (Tab, Enter, Esc, Space).
* [ ] Make sure focus order is logical and visible.

## 5. Document Any Bugs Found
Use the **Bug Ticket Template** for each issue:
- Write a clear title and short description.
- Include steps to reproduce, actual behavior, and expected behavior.
- Note the browser, OS, and environment.
- Add screenshots or video when helpful.

6. Mark Completion
In the **Testing Tracker**, check off:
- All inputs tested
- All error states triggered
- All conditional logic verified
- All browser and layout checks completed
