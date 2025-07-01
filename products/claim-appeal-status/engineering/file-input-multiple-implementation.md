# VA File Input Multiple Implementation

## Links
1. [Storybook](https://design.va.gov/storybook/?path=/docs/uswds-va-file-input-multiple--docs)
2. [File Input Multiple Web component Implementation](https://github.com/department-of-veterans-affairs/component-library/blob/e276b24d9292c2a5f8b2cde3cc2073c9b92a8404/packages/web-components/src/components/va-file-input-multiple/va-file-input-multiple.tsx)
3. [File Input Single Web component Implementation](https://github.com/department-of-veterans-affairs/component-library/blob/e276b24d9292c2a5f8b2cde3cc2073c9b92a8404/packages/web-components/src/components/va-file-input/va-file-input.tsx)

## User Stories
See screenshots at the end of this file.

As a user,

1. I see a label with a hint with the allowed file types and size
    - Label: "Upload additional evidence" 
    - Hint: "You can upload a .pdf, .gif, .jpg, .jpeg, .bmp, or .txt file. Your file should be no larger than 50 MB (non-PDF) or 150 MB (PDF only)."
1. I see the file input with instructions on how to add a file
    - Instructions: "Drag a file here or choose from folder"
1. I can add multiple files to the file input by clicking the link
    - Link label: "Choose from folder"
    - Note: Cannot add multiple files at once
1. I can add multiple files to the file input by dragging the files into the file input
1. If I don't add any files and click submit, I will see an error
    - Error: "Please select a file first"
1. If I add an encrypted file, the component will show a password input
    - Instructions: "This is an encrypted PDF document. In order for us to be able to view the document, we will need the password to decrypt it."
    - Label: PDF password (*Required)
1. If I add an encrypted file without inputting a password, I will see an error
    - Error: "Please provide a password to decrypt this file"
1. If I add another file while I have an existing validation error, the validation error will persist
1. If I add a password after getting a no password error, that error will disappear
1. If I add a file, a select field will be shown requesting the type of document
    - Label: "What type of document is this? (*Required)"
    - Example types: Birth Certificate, Death Certificate
1. If I try to submit a file without selecting a type of document, I will see an error
    - Error: "Please provide a response"   
1. If I select a type of document after getting the validation error, that error will disappear
1. If I add a file in which the file extension does not match the file format, I will see an error
    - Error: "The file extension doesn’t match the file format. Please choose a different file."
1. If I try to add a file that is not one of the valid file types (.pdf, .gif, etc), I will see an error
    - Error: "Please choose a file from one of the accepted types."
    - Accepted types: [.pdf, .gif, .jpg, .jpeg, .bmp, .txt]
1. If I try to add a pdf that is above 99MB or a non-pdf that is above 50MB, I will see an error
    - Note: Code says 99MB max for PDF while the hint says 150MB
    - Error: "The file you selected is larger than the [99 or 150]MB maximum file size and could not be added."
1. If I try to add a file that is 0MB, I will see an error
    - Error: "The file you selected is empty. Files uploaded must be larger than 0B."
1. If I click Remove, I will be shown a confirm remove modal with confirm or cancel buttons
    - Heading: "Remove this file?"
    - Description: "We’ll remove [file name]"
    - Confirm Button Text: "Yes, remove this"
    - Cancel Button Text: "No, keep this"
1. If I delete a file, the other files will retain their correct data 
1. If I add files that pass all validation errors, I am able to click the submit button
    - Button Text: "Submit documents for review" 
1. If I submit files, I will be shown an uploading modal with a submission progress bar
    - Heading: "Uploading files"
    - Count: "Uploading 1 file..."
    - Text: "Your files are uploading. Please do not close this window."
    - Cancel Button Text: "Cancel"
1. If I submit a PDF without a valid password I get an error alert
    - Heading: "Error uploading [file name]"
    - Text: "We couldn’t unlock your PDF. Save the PDF without a password and try again."
1. If I successfully submit files a success va-alert will be shown
    - Heading: "We received your file upload on June 27, 2025"
    - Text: "If your uploaded file doesn’t appear in the Documents Filed section on this page, please try refreshing the page."

## User Stories Handled by VaFileInputMultiple component
- I see a label with a hint with the allowed file types and size  
  - `VaFileInputMultiple.renderLabelOrHeader()` + `label` / `hint` props (forwarded to each child `<va-file-input>`)
- I see the file input with instructions on how to add a file  
  - `<va-file-input>` built-in UI (`uploadMessage` default) and `additionalFileUploadMessage` for rows ≥ 2
- I can add multiple files to the file input by clicking the link  
  - `handleChange()` → when `FILE_ADDED` pushes a new empty row
- I can add multiple files to the file input by dragging the files into the file input  
  - Child `<va-file-input>` `handleDrop()` drag-and-drop support
- If I try to add a file that is not one of the valid file types (.pdf, .gif, etc), I will see an error  
  - Child `<va-file-input>` `accept` prop → `isAcceptedFileType()` sets `internalError`
- If I click Remove, I will be shown a confirm remove modal with confirm or cancel buttons  
  - Child `<va-file-input>` `va-modal` opened by `openModal()`
- If I delete a file, the other files will retain their correct data  
  - `VaFileInputMultiple.handleChange()` with `FILE_REMOVED` splices only the targeted row

## User Stories that will need to be handled by logic outside VaFileInputMultiple component
- If I don't add any files and click submit, I will see an error  
  - Form-level “required” validation before submit
- If I add an encrypted file, the component will show a password input  
  - Your wrapper must detect encryption and set `encrypted[index] = true`
- If I add an encrypted file without inputting a password, I will see an error  
  - Validate the per-row password field in your form handler
- If I add another file while I have an existing validation error, the validation error will persist  
  - Keep `errors[]` in external form state; do not overwrite unchanged entries
- If I add a password after getting a no-password error, that error will disappear  
  - Clear the corresponding `errors[index]` when password becomes non-empty
- If I add a file, a select field will be shown requesting the type of document  
  - Render `<va-select>` in the slot and manage its state externally
- If I try to submit a file without selecting a type of document, I will see an error  
  - Validate the `<va-select>` value on submit
- If I select a type of document after getting the validation error, that error will disappear  
  - Remove the error from `errors[index]` when a valid option is chosen
- If I add a file in which the file extension does not match the file format, I will see an error  
  - Perform magic-number vs. extension check in wrapper logic
- If I try to add a pdf that is above 99 MB or a non-pdf that is above 50 MB, I will see an error  
  - Enforce size thresholds before accepting the file (`maxFileSize` only supports one value)
- If I try to add a file that is 0 MB, I will see an error  
  - Check `file.size === 0` in wrapper validation
- If I add files that pass all validation errors, I am able to click the submit button  
  - Enable/disable submit in page logic based on `errors[]` and `files[]`
- If I submit files, I will be shown an uploading modal with a submission progress bar  
  - Page-level upload workflow & modal component
- If I submit a PDF without a valid password I get an error alert  
  - Server response handling + alert display
- If I successfully submit files a success va-alert will be shown  
  - Show success `<va-alert>` after server confirms upload
