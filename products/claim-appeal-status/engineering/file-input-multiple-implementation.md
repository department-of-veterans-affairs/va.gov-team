# VA File Input Multiple User Stories

## Links
1. [Storybook](https://design.va.gov/storybook/?path=/docs/uswds-va-file-input-multiple--docs)
2. [File Input Multiple Web component Implementation](https://github.com/department-of-veterans-affairs/component-library/blob/main/packages/web-components/src/components/va-file-input-multiple/va-file-input-multiple.tsx)
3. [File Input Single Web component Implementation](https://github.com/department-of-veterans-affairs/component-library/blob/main/packages/web-components/src/components/va-file-input/va-file-input.tsx)

## User Stories
As a user,

### Display and Adding Files
1. I see a label with a hint with the allowed file types and size
    - Label: "Upload additional evidence"
    - Hint: "You can upload a .pdf, .gif, .jpg, .jpeg, .bmp, or .txt file. Your file should be no larger than 50 MB (non-PDF) or 99 MB (PDF only)."
1. I see the file input with instructions on how to add a file
    - Instructions: "Drag a file here or choose from folder"
1. I can add multiple files to the file input by clicking the link
    - Link label: "Choose from folder"
    - Note: Cannot add multiple files at once
1. I can add multiple files to the file input by dragging the files into the file input
    - Note: Cannot add multiple files at once. If drag multiple will just accept 1.

### File Validation and Error Handling
1. If I don't add any files and click submit, I will see an error
    - Error: "Please select a file first"
1. If I add a file after getting the "no files" error, that error will disappear
1. I am not able to choose from folder an invalid file type
    - Accepted types: .pdf, .gif, .jpg, .jpeg, .bmp, .txt
    - A file with no file extension yields the same error
1. If I try to add a file by dragging that is not one of the valid file types, I will see an error
    - Error: "This is not a valid file type"
1. If I try to add a file that is 0B, I will see an error and not be able to submit
    - Error: "The file you selected is empty. Files must be larger than 0B."
1. If I try to add a non-pdf that is above 50MB or a pdf that is above 99MB, I will see an error and not be able to submit
    - Error PDF: "The file you selected is larger than the 99MB maximum file size and could not be added."
    - Error non-PDF: "The file you selected is larger than the 50MB maximum file size and could not be added."
1. If I add a file in which the file extension does not match the file format, I will see an error and not be able to submit
    - Error: "The file extension doesn't match the file format. Please choose a different file."
1. If I have a file extension mismatch error and I replace the file with a valid one using 'Change File', the error should be cleared
    - Note: If I happen to change to a file that also triggers an extension mismatch error, the error should be repopulated

### Encrypted PDF Password Handling
1. If I add an encrypted PDF file, the component will show a password input
    - Label: File password (*Required)
1. If I add a non-encrypted PDF file, no password input should appear
1. If I add an encrypted file without inputting a password and submit, I will see an error
    - Error: "Please provide a password to decrypt this file"
1. If I add another file while I have an existing validation error, the validation error will persist
1. If I add a password after getting a no password error, that error will disappear
1. If I have a password error on an encrypted PDF and I replace it with a non-encrypted file, the password error should be cleared
1. If I submit a PDF with an invalid password I get an error alert
    - Heading: "Error uploading [file name]"
    - Text: "We couldn't unlock your PDF. Save the PDF without a password and try again."

### Document Type Selection and Validation
1. If I add a file, a select field will be shown requesting the type of document
    - Label: "What type of document is this? (*Required)"
    - Example types: Birth Certificate, Death Certificate, Copy of a DD214, Medical records
1. If I try to submit a file without selecting a type of document, I will see an error
    - Error: "Please provide a document type"
1. If I select a type of document after getting the validation error, that error will disappear
1. If I have a document type error and I replace the file with a new file, the error should be cleared

### File Removal and Data Retention
1. If I click Delete, I will be shown a confirm remove modal with confirm or cancel buttons
    - Heading: "Delete this file?"
    - Description: "We'll delete the uploaded file [file name]"
    - Confirm Button Text: "Yes, remove this"
    - Cancel Button Text: "No, keep this"
1. If I confirm file removal in the modal, the file will be removed
1. If I cancel file removal in the modal, the file will be kept
1. If I delete a file, the other files will retain their correct data (document types, passwords)
1. If I have multiple files with different validation errors and I delete one file, the remaining files should retain their specific error states correctly mapped to their new positions

### Submit Button Functionality and Upload Modal
1. If I add files that pass all validation errors, I am able to click the submit button
    - Button Text: "Submit documents for review"
1. If I submit files, I will be shown an uploading modal with a submission progress bar
    - Heading: "Uploading files"
    - Count: "Uploading [N] file(s)..."
    - Text: "Your files are uploading. Please do not close this window."
    - Cancel Button Text: "Cancel"
1. If I click the "Cancel" button, the modal will close and I will not see a success or failure alert
1. If I click the "X" button, the modal will close and the upload will continue, showing success alert when complete
1. If I successfully submit files a success va-alert will be shown
    - Heading: "We received your file upload on [date]"
    - Text: "If your uploaded file doesn't appear in the Documents Filed section on this page, please try refreshing the page."
1. If I submit a file that has already been successfully submitted, I get an error saying that it has been submitted already
    - Heading:
    - Text:
    - Note: Cannot replicate on localhost

### Data Submission
1. If I add files with password and doc type in the "Additional evidence" flow all 3 pieces of data should be submitted for each file (each file has its own request)
1. If I add files with password and doc type in the "Request for evidence" flow all 3 pieces of data along with the tracked item id (which is found in the url) should be submitted for each file (each file has its own request)
1. If I change an encrypted PDF file to a non-encrypted file, the password from the encrypted file should not be submitted with the non-encrypted file

## User Stories Not Yet Covered (Add Github issue)
1. If I submit the same file 2 times in the same Multiple File Input, I get an error message before being able to submit. - [CST] [BUG] Inconsistent duplicate file name validation between simultaneous and sequential uploads [#115523](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115523)
2. If I submit files A and B and A has already been successfully submitted previously, I get an error message for A saying that it has already been successfully submitted and I get a success message for B. Both are removed from the files listed in the multiple file input. Documents with wrong PDF passwords should remain. - [CST] [BUG] Duplicate Error Alert is Suppressing Success Alert [#115934](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115934)
