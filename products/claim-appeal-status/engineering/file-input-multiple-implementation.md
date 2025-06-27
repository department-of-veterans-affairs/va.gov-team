# Multi File Input Implementation

## User Stories
As a user,

1. I see a label "Upload additional evidence" with hint "You can upload a .pdf, .gif, .jpg, .jpeg, .bmp, or .txt file. Your file should be no larger than 50 MB (non-PDF) or 150 MB (PDF only)."
1. I can add multiple files to the file input
1. If I don't add any files and click submit, I will see an error
1. If I add an encrypted file, the component will show a password input
1. If I add an encrypted file without inputting a password, I will see an error
1. If I add a file while I have an existing validation error, the error will persist
1. If I add a password after getting a no password error, that error will disappear
1. If I add a file, a select will be shown that asks "What type of document is this?"
1. If I try to submit a file without selecting a file type, I will see an error
1. If I select a file type after getting a file type validation error, that error will disappear
1. If I add a file in which the file extension does not match the file format, I will see an error
1, If I try to add a file that is not one of the valid file types, I will see an error
1. If I try to add a pdf that is above 99MB, I will see an error (Note: code says 99MB but hint says 150MB)
1. If I try to add a non-pdf allowed file type that is above 50MB, I will see an error
1, If I try to add a file that is 0MB, I will see an error
1. If I click Remove, I will be shown a confirm modal with delete or cancel options
1. If I delete a file, the other files will retain their correct data
1. If I add files that pass all validation errors, I am able to submit them
1. If I submit files the uploading modal will show a progress bar
1. If I successfully submit files a success va-alert will be shown
