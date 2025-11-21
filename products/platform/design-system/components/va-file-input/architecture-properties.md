## The Web Components

File uploads on [va.gov](http://va.gov) can be handled by using either the `va-file-input` component (for single file uploads) or the `va-file-input-multiple` component (for multiple file uploads).

I. `va-file-input`  

| property                | Component              | Pattern                                                          | default                                          | required | common property                                                                                                                                                                                               | Single only                                                                                                                                                                                                                                                                                                                                     |
| ----------------------- | ---------------------- | ---------------------------------------------------------------- | ------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title                   |                        |                                                                  | The property key for the field (not recommended) | no       | The title that appears above the component                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                 |
| required                |                        |                                                                  | –                                                | yes      | Boolean specifying if the component is required                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                 |
| fileUploadUrl           |                        |                                                                  | –                                                | yes      | The url to which the component will upload the file                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                 |
| accept                  |                        |                                                                  | .pdf,.jpeg,.pdf. heic                            | no       | A string or an array of extensions (file-types) that the component will upload                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                 |
| hint                    |                        |                                                                  | –                                                | no       | A hint string that will display above the component                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                 |
| headerSize              |                        |                                                                  | —                                                | no       | The heading level to render the title; if omitted title will be in a span                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                 |
| formNumber              |                        |                                                                  | –                                                | yes      | The number of the form which the component is part                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                 |
| disallowEncryptedPdfs   |                        |                                                                  | –                                                | no       | If set to true, encrypted pdfs will not be uploaded                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                 |
| skipUpload              |                        |                                                                  | –                                                | no       | If set to true, the component will not enter into an error state if the upload fails - this is useful during development if you do not have a backend to process the file                                     |                                                                                                                                                                                                                                                                                                                                                 |
| maxFileSize             | Same                   | Same                                                             | –                                                | no       | The maximum size of a single file in bytes that can be uploaded                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                 |
| minFileSize             | Same                   | Passing the values through                                       | –                                                | no       | The minimum size a single file must have in bytes to be uploaded                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                 |
| errorMessages           | Displays error message | Client side part of the library - mime, ….<br>File size          | –                                                | no       | An object that contains one property, additionalInput, which holds as a string the error that will be displayed if a required additionalInput is missing.                                                     |                                                                                                                                                                                                                                                                                                                                                 |
| additionalInputRequired |                        |                                                                  | –                                                | no       | Boolean specifying if the component requires the user to select additional information                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                 |
| additionalInput         |                        | Ties the uploaded document to what was selected in the drop down | –                                                | no       | –                                                                                                                                                                                                             | A function that returns JSX for the additional input. The function accepts arguments error and data.<br><br>error is either null or a string. data is the data associated with the additional input field in the Redux store for the component.<br>.<br>The function should use error and data to update the additional input that is rendered. |
| handleAdditionalInput   |                        | Ties the uploaded document to what was selected in the drop down | –                                                | no       | The JSX that renders the additional input should fire an event when that information changes. handleAdditionalInput is a function that accepts the event and returns the data to be added to the Redux store. |                                                                                                                                                                                                                                                                                                                                                 |
| additionalInputUpdate   |                        | Ties the uploaded document to what was selected in the drop down |                                                  |          | –                                                                                                                                                                                                             |                                                                                                                                                                                                                                                       ## All Error States

VaFileInput components have **9 primary error states**:

| # | Error Constant | Error Message | Trigger Condition | Components |
|---|----------------|---------------|-------------------|------------|
| 1 | `FILE_TYPE_MISMATCH_ERROR` | "The file extension doesn't match the file format. Please choose a different file." | File type/extension mismatch | Both |
| 2 | `UNSUPPORTED_ENCRYPTED_FILE_ERROR` | "We weren't able to upload your file. Make sure the file is not encrypted and an accepted format." | Encrypted file when not allowed | Both |
| 3 | `UTF8_ENCODING_ERROR` | "The file's encoding is not valid" | Invalid UTF-8 encoding | Both |
| 4 | `MISSING_PASSWORD_ERROR` | "Encrypted file requires a password." | Encrypted PDF needs password | Both |
| 5 | `MISSING_FILE` | "File is required." | Required field empty | Multiple only |
| 6 | `MISSING_ADDITIONAL_INFO` | "This information is required." | Additional input empty | Multiple only |
| 7 | Network/Upload errors | (Various from API) | Upload failure | Both |
| 8 | Internal component errors | (Various from component) | Component validation failures | Both |
| 9 | `FILE_ALREADY_UPLOADED`  | You already uploaded this file. Select a different file. | If they upload the same file twice, on second attempt| Both |
                                                                                          |

Events:

* `va-change`: fires after adding the file. The payload of this event is an object: `{ files: [ { <file details> } ] }`  
* `va-password-change:` fires on every keystroke entering the password. The payload of this event is an object`: { password: <password_entered> }`  
* `va-file-input-error:` fires when an error is set internally. The payload of this event is an object`: { error: <error> }.` Mainly used by forms-system for validation.

II. `va-file-input-multiple`  
The UI states and associated props for the multiple component map to those of the single component 1:1. The key difference is that va-file-input-multiple often requires its props to be an array. The following props are arrays, where the first entry in the array will be passed to the first va-file-input instance, and so on.

* `errors`  
* `Encrypted`  
* `Percent-uploaded`  
* `Reset-visual-state`  
* `Password-errors`  
* `Uploaded-files`

`Other props are applied to every underlying va-file-input instance:`

* `Accept`  
* `Required`  
* `Max-file-size`  
* `Min-file-size`  
* `status-text`

| initial  | <img width="922" height="276" alt="image" src="https://github.com/user-attachments/assets/581b72ea-d215-45fa-b5fa-f865f9ff6aa3" />
 |
| :---- | :---- |
|  | ![][image15] |

## The Forms System

A page in a form should import and instantiate instances of the matching schema and uiSchema:

**Single**:  
<img width="1178" height="248" alt="image" src="https://github.com/user-attachments/assets/714b2513-ab4d-493b-8f32-fcc0e0998c35" />

See an example of `fileInputUI` and `fileInputSchema` [here](https://github.com/department-of-veterans-affairs/vets-website/blob/1b31ebb67e27f0f8389de1a79b41965350970fa0/src/applications/simple-forms/mock-simple-forms-patterns/pages/mockFileInput.js#L11).

**Multiple**:  
<img width="1162" height="252" alt="image" src="https://github.com/user-attachments/assets/0dca673e-4d87-42e0-b63d-071060ac9429" />

See an example of `fileInputMultipleUI` and `fileInputMultipleSchema` [here](https://github.com/department-of-veterans-affairs/vets-website/blob/1b31ebb67e27f0f8389de1a79b41965350970fa0/src/applications/simple-forms/mock-simple-forms-patterns/pages/mockFileInputMultiple.js#L12).

### Properties for configuring fileInputSchema and fileInputMultipleSchema

`fileInputSchema` and `fileInputMultipleSchema` take an object of properties that configure the file upload field. 

| property | Component | Pattern | default | required | common property | Single only | Multiple only |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| `title` |  |  | The property key for the field (not recommended) | no | The title that appears above the component |  |  |
| `required` |  |  | – | yes | Boolean specifying if the component is required |  |  |
| `fileUploadUrl` |  |  | – | yes | The url to which the component will upload the file |  |  |
| `accept` |  |  | `.pdf,.jpeg,.pdf` | no | A string or an array of extensions (file-types) that the component will upload |  |  |
| `hint` |  |  | `–` | no | A hint string that will display above the component |  |  |
| `headerSize` |  |  | `—` | no | The heading level to render the title; if omitted title will be in a `span` |  |  |
| `formNumber` |  |  | `–` | yes | The number of the form which the component is part |  |  |
| `disallowEncryptedPdfs` |  |  | `–` | no | If set to `true`, encrypted pdfs will not be uploaded |  |  |
| `skipUpload` |  |  | `–` | no | If set to true, the component will not enter into an error state if the upload fails \- this is useful during development if you do not have a backend to process the file |  |  |
| `maxFileSize` | `Same` | `Same` | `–` | no | The maximum size of a single file in bytes that can be uploaded |  |  |
| `minFileSize` | `Same` | `Passing the values through` | `–` | no | The minimum size a single file must have in bytes to be uploaded |  |  |
| `errorMessages` | `Displays error message` | `Client side part of the library - mime, …. File size` | `–` | no | An object that contains one property, `additionalInput`, which holds as a string the error that will be displayed if a required `additionalInput` is missing. |  |  |
| `additionalInputRequired` |  |  | `–` | no | Boolean specifying if the component requires the user to select additional information |  |  |
| `additionalInput` |  | `Ties the uploaded document to what was selected in the drop down` | `–` | no | – | A function that returns JSX for the additional input. The function accepts arguments `error` and `data`. `error` is either null or a string. `data` is the data associated with the additional input field in the Redux store for the component. .The function should use `error` and `data` to update the additional input that is rendered. | A function that renders the JSX for the additional input. Takes no arguments. Whatever is entered here will be rendered in the slot for each underlying va-file-input instance. |
| `handleAdditionalInput` |  | `Ties the uploaded document to what was selected in the drop down` | `–` | no | The JSX that renders the `additional input` should fire an event when that information changes. `handleAdditionalInput` is a function that accepts the event and returns the data to be added to the Redux store. |  |  |
| `additionalInputUpdate` |  | `Ties the uploaded document to what was selected in the drop down` |  |  | – |  | A function used to update a single underlying additional input instance.The function takes three arguments:  `instance`, the additional input instance; `error`, the error for the instance; and `data`, the new value of the instance.The function should update the attributes of the additional input instance. |

### File validation:

The forms-system performs validates every file before upload for:

* Mime-type / file-type match (e.g. my-pdf.png)  
* UTF encoding  
* PDF encryption  
  * THe forms library sends the password to the backend the backend would have to decrypt the file before submission. 

If a file fails any of these validations, an error is set on the component.

Handles the actual submission to the endpoint and response back, error messages  
