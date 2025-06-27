# Multi File Input Implementation

## User Stories
As a user,

1. I see a label with a hint with the allowed file types and size
    1. Label: "Upload additional evidence" 
    1. Hint: "You can upload a .pdf, .gif, .jpg, .jpeg, .bmp, or .txt file. Your file should be no larger than 50 MB (non-PDF) or 150 MB (PDF only)."
1. I see the file input with instructions on how to add file
    1. Instructions: "Drag a file here or choose from folder"
1. I can add multiple files to the file input by clicking the link
    1. Link label: "Choose from folder"
    2. Note: Cannot add multiple files at once
1. I can add multiple files to the file input by dragging the files into the file input
1. If I don't add any files and click submit, I will see an error
    1. Error: "Please select a file first"
1. If I add an encrypted file, the component will show a password input
    1. Instructions: "This is an encrypted PDF document. In order for us to be able to view the document, we will need the password to decrypt it."
    1. Label: PDF password (*Required)
1. If I add an encrypted file without inputting a password, I will see an error
    1. Error: "Please provide a password to decrypt this file"
1. If I add another file while I have an existing validation error, the validation error will persist
1. If I add a password after getting a no password error, that error will disappear
1. If I add a file, a select field will be shown requesting the type of document
    1. Label: "What type of document is this? (*Required)"
    1. Example types: Birth Certificate, Death Certificate
1. If I try to submit a file without selecting a type of document, I will see an error
    1. Error: "Please provide a response"   
1. If I select a type of document after getting the validation error, that error will disappear
1. If I add a file in which the file extension does not match the file format, I will see an error
    1. Error: "The file extension doesn’t match the file format. Please choose a different file."
1. If I try to add a file that is not one of the valid file types (.pdf, .gif, etc), I will see an error
    1. Error: "Please choose a file from one of the accepted types."
    1. Accepted types: [.pdf, .gif, .jpg, .jpeg, .bmp, .txt]
1. If I try to add a pdf that is above 99MB or a non-pdf that is above 50MB, I will see an error
    1. Note: Code says 99MB max for PDF while the hint says 150MB
    1. Error: "The file you selected is larger than the [99 or 150]MB maximum file size and could not be added."
1, If I try to add a file that is 0MB, I will see an error
    1. Error: "The file you selected is empty. Files uploaded must be larger than 0B."
1. If I click Remove, I will be shown a confirm remove modal with confirm or cancel buttons
    1. Heading: "Remove this file?"
    1. Description: "We’ll remove [file name]"
    1. Confirm Button Text: "Yes, remove this"
    1. Cancel Button Text: "No, keep this"
1. If I delete a file, the other files will retain their correct data 
1. If I add files that pass all validation errors, I am able to click the submit button
    1. Button Text: "Submit documents for review" 
1. If I submit files, I will be shown an uploading modal with a submission progress bar
    1. Heading: "Uploading files"
    1. Count: "Uploading 1 file..."
    1. Text: "Your files are uploading. Please do not close this window."
    1. Cancel Button Text: "Cancel"
1. If I submit a PDF without a valid password I get an error alert
    1. Heading: "Error uploading [file name]"
    1. Text: "We couldn’t unlock your PDF. Save the PDF without a password and try again."
1. If I successfully submit files a success va-alert will be shown
    1. Heading: "We received your file upload on June 27, 2025"
    2. Text: "If your uploaded file doesn’t appear in the Documents Filed section on this page, please try refreshing the page."
