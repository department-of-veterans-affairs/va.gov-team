# `va-file-input` Properties / Architecture Template _(Work In Progress)_
_Last updated: 2025-12-04_

## Properties

| Name | Required | Type | Default value | Description |
|------|----------|------|---------------|-------------|
| `accept` | false | `string` | `undefined` | A comma-separated list of unique file type specifiers. |
| `enableAnalytics` | false | `boolean` | `false` | Emit component-library-analytics events on the file input change event. |
| `encrypted` | false | `boolean` | `false` | When true, displays a password field. Note: This component does not check if a file is encrypted. For encryption checks, see: [Checking if an uploaded PDF is encrypted](https://depo-platform-documentation.scrollhelp.site/developer-docs/checking-if-an-uploaded-pdf-is-encrypted) |
| `error` | false | `string` | `undefined` | The error message to render. |
| `headless` | false | `boolean` | `false` | DST only prop - removes extraneous display for multiple file input |
| `headerSize` | false | `number` | `undefined` | Optionally specifies the size of the header element to use instead of the base label. Accepts a number from 1 to 6, corresponding to HTML header elements h1 through h6. If not provided, defaults to standard label styling. |
| `hint` | false | `string` | `undefined` | Optional hint text. |
| `label` | false | `string` | `undefined` | The label for the file input. |
| `maxFileSize` | false | `number` | `Infinity` | Maximum allowed file size in bytes. |
| `minFileSize` | false | `number` | `0` | Minimum allowed file size in bytes. |
| `name` | false | `string` | `undefined` | The name for the input element. |
| `passwordError` | false | `string` | `undefined` | Error message for the encrypted password input **This prop will be removed when password submit button is live** |
| `passwordSubmissionSuccess` | false | `boolean` | `null` | Denotes if user submission of encrypted file password was successful. **This prop is WIP and will not be supported until password submit button is live** |
| `percentUploaded` | false | `number` | `null` | Percent upload completed. For use with va-progress-bar component |
| `readOnly` | false | `boolean` | `false` | Optionally displays the read-only view |
| `required` | false | `boolean` | `false` | Sets the input to required and renders the (*Required) text. |
| `statusText` | false | `string` | `undefined` | Optional file status, ex: "Uploading...", "Uploaded". |
| `uploadedFile` | false | `UploadedFile` | `undefined` | Object representing a previously uploaded file. Example: `{ name: string, type: string, size: number}` |
| `uploadMessage` | false | `HTMLElement` | `null` | Custom instructional message in the file input. |
| `value` | false | `File` | `undefined` | The value attribute for the file view element. |

## Architecture Overview

The `va-file-input` component's `render()` function produces highly dynamic markup that adapts based on component state and prop values.

The component's most fundamental branching occurs based on whether a file has been selected. When no file is present, it renders an initial upload interface with drag-and-drop instructions. Once a file is selected, it switches to a file preview state showing the file's details within a card layout.

The default state (when no file is uploaded) for the "default" variant of the component renders the following markup:

```html
<Host>
  <span>
    <div class="label-header">
      <label for="fileInputField" part="label" class="usa-label">Select a file to upload</label>
    </div>
  </span>
  <div class="usa-hint" id="input-hint-message">You can upload a .pdf, .gif, .jpg, .bmp, or .txt file.</div>
  <span id="input-status-message" class="usa-sr-only" aria-live="polite" aria-atomic="true"></span>
  <div class="file-input-wrapper">
    <input
      id="fileInputField"
      class="file-input"
      aria-label="Select a file to upload. Drag a file here or choose from folder"
      style="visibility: unset;"
      type="file"
      name="my-file-input"
      aria-describedby="input-hint-message"
    >
    <div>
      <span id="file-input-error-alert">
        <span id="input-error-message" class="usa-error-message"></span>
      </span>
      <div class="file-input-target">
        <div class="file-input-box"></div>
        <div class="file-input-instructions">
          <span>Drag a file here or <span class="file-input-choose-text">choose from folder</span></span>
        </div>
      </div>
    </div>
  </div>
</Host>
```

## Custom Events
- `vaChange` - The event emitted when the file input value changes.
- `vaPasswordChange` - The event emitted when the file input password value changes.
  - **This event will be removed when password submit button is live**
- `vaPasswordSubmit` - The event emitted when the file input password is submitted via click of "Submit password" button.
  -  **This event and will not be supported until password submit button is live**
- `vaFileInputError` - The event emitted when adding a file results in an error, e.g. exceeding max file size.

## Password functionality for encrypted files (WIP)
The password submit button appears when the `encrypted` prop is set to `true` on the file input component. This feature enables users to submit a password for encrypted files (such as password-protected PDFs).

Key Features:

### User Interaction Flow:

1. When an encrypted file is selected, a password text input field and submit button are displayed.
2. The user enters their password in the password field.
3. When the "Submit password" button is clicked, the component validates the input.

### Validation:

- If the password field is empty, the component displays an error message: "Password cannot be blank".
- The `passwordError` prop updates to show this validation error.

### Loading State:

- Upon submission with a valid password entry, the button enters a loading state.
- The button text changes from "Submit password" to "Verifying password...".
- The `loading` attribute is set on the button element.

### Event Emission:

- When a password is entered and submitted, the component emits a `vaPasswordSubmit` event
- This event contains the password value: `{ password: this.passwordValue }`.
- The parent component/application is responsible for handling this event and verifying the password against the encrypted file.

### Submission Result Handling:

- The `passwordSubmissionSuccess` prop tracks whether password verification succeeded or failed.
- If successful `(passwordSubmissionSuccess = true)`: Any existing password errors are cleared.
- If failed `(passwordSubmissionSuccess = false)`: The button resets to its original state ("Submit password") and removes the loading indicator.

**Important Note:** The component itself does not verify file encryption or validate passwords. It provides the UI interface and event mechanism for the parent application to implement password verification logic. Developers must implement their own encryption checking as documented in the [platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/checking-if-an-uploaded-pdf-is-encrypted).

## Accessibility considerations

The `va-file-input` component implements sophisticated focus management to ensure optimal screen reader compatibility and keyboard navigation, with particular attention to error handling across different browser behaviors.

### Focus Management
The component implements intelligent focus management that adapts to different file upload workflows and user interactions. After a file is selected or an error occurs, focus is automatically directed to the most relevant interactive element based on the component's current state and rendered elements. This focus management strategy follows a priority hierarchy to ensure users are guided to the appropriate next action:

1. **Error state**: When file validation fails (wrong file type, size too large/small, empty file), focus moves to the "Change File" button, allowing users to immediately select a different file to resolve the error.

2. **Encrypted file workflow**: When the `encrypted` prop is true and a file is successfully uploaded, focus moves to the password input field (the `<input>` element nested within the `<va-text-input>` component), prompting users to enter the file's password as the next required step.

3. **Slotted content workflow**: When a file is successfully uploaded and the component contains slotted child elements — specifically `<va-select>` or `<va-text-input>` components — focus moves to the first interactive element found in the slotted content (either the nested `<select>` or `<input>` element). This supports form patterns where additional information is required after file selection, such as document type classification or metadata entry.

An important consideration for this component's focus management is that calls to `.focus()` via helper functions are timed conditionally based on whether the browser `window` object currently has focus. By its nature, use of this component frequently causes the browser window to lose focus to the user's native file system dialog, whether through click/keyboard interaction or drag-and-drop. To ensure screen readers properly announce the `aria-label` of the target element, we must defer setting focus on the appropriate interactive element until after the browser window regains focus.

The solution implemented for this functionality can be illustrated with pseudo-code. We'll use an invalid file (a 0 kilobyte `.txt` file) to trigger an internal error for this example:

1. The 0 KB file is uploaded via user interaction.
2. Local component state updates to display the internal error UI.
   - The `aria-label` for the "Change File" button is updated to include the error message.
3. Does the browser window have focus?
   - **Yes**: Immediately focus on the "Change File" button
   - **No**: Set an internal flag property so that when focus returns to the window, focus will be set on the "Change File" button.

## Tests (e2e & unit)

Unit tests were written to confirm that the component does the following:

- Renders.
- Renders hint text.
- Renders an `aria-label`.
- Renders a required `span`.
- The `accept` attribute exists if set.
- The `accept` attribute does not apply if omitted.
- The `uploadMessage` attribute changes the text in file input.
- The component shows default text when `uploadMessage` is not set.
- Renders a "Change File" button if there is a file.
- Does not render a "Change File" button if read-only.
- Renders status text.
- Emits the `vaChange` event only once.
- Passes an aXe check.
- Renders file summary when `uploadedFile` prop is set.
- Opens a modal when delete button clicked and lets user remove or keep file. (skipped)
- Opens a modal when delete button clicked and lets user remove the file. (skipped)
- Displays an error if the file size exceeds max allowed file size.
- Displays an error if file size is zero bytes.
- Displays an error if file size is too small.
- Renders a progress bar if `percent-uploaded` prop is set.
- Resets the component if the cancel button is clicked during upload.
- Renders a slim warning alert, a file password input, and a password submit button if encrypted is `true`.
- Updates password submit button loading state when clicked.
- Removes password input and submit button and shows success alert when `passwordSubmissionSuccess` is true.
- Renders error on password input if password-error is set.
- Does not render file password field if `encrypted` is unset.
- Handles placeholder file upload and shows default file icon.
- Shows progress bar and cancel button when uploading.
- Shows password input when `encrypted` and not uploading.
- Renders additional info slot when not uploading.
- Shows change and delete buttons when file is present and not uploading.
- Correctly displays error message for MIME type failure.
- Correctly displays error message for MIME type failure when file has no extension.
- Shows change and delete buttons when in error state.
- Renders a screen-reader-only message with uploaded file's name when a file is uploaded successfully.
- Renders a screen-reader-only message when an uploaded file is deleted.
- Renders a error message when there is a file input error.
- Accepts an `.heic` file and displays a generic image icon.

## Storybook Examples

- [Default](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--default)
- [Required](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--required)
- [Accepts File Password](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--accepts-file-password)
- [With File Password Error](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--with-file-password-error)
- [With Minimum Password Requirement](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--with-minimum-password-requirement)
- [Accepts Only Specific File Types](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--accepts-only-specific-file-types)
- [Accepts Any Kind Of Image](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--accepts-any-kind-of-image)
- [Error Message](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--error-message)
- [With Max File Size](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--with-max-file-size)
- [With Min File Size](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--with-min-file-size)
- [Header Label](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--header-label)
- [Additional Form Inputs](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--additional-form-inputs)
- [Custom Validation](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--custom-validation)
- [With Analytics](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--with-analytics)
- [Uploaded File](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--uploaded-file)
- [Upload Status](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--upload-status)
- [File Uploaded](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--file-uploaded)
- [Read Only](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--read-only)
- [Read Only With Additional Inputs](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--read-only-with-additional-inputs)
- [With Percent Uploaded](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--with-percent-uploaded)

## Backend description

This upload flow uses the Simple Forms API in vets-api to stage, validate, convert, and submit documents to Lighthouse Benefits Intake. It is designed to normalize user-provided files into a standards-compliant PDF, apply minimal stamping, and provide clear, structured errors when issues are detected. The primary entry points live in SimpleFormsApi::V1::ScannedFormUploadsController and associated services.

### Responsibilities and scope
- Accept files from the client and stage them server-side (persistent attachments)
- Optionally decrypt password-protected PDFs (when the user provides a password)
- Convert non-PDF inputs into a normalized PDF
- Validate the resulting PDF against platform and Intake limits
- Stamp the PDF minimally (form number, LOA, timestamp)
- Submit the final PDF (and supporting documents when enabled) to Lighthouse Benefits Intake
- Record submission attempts and correlate with the Intake UUID for traceability

Key code references:
- Controller (staging/submit flows): [modules/simple_forms_api/app/controllers/simple_forms_api/v1/scanned_form_uploads_controller.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/f78fd1f5009aed3827c0ccf882c479908a583032/modules/simple_forms_api/app/controllers/simple_forms_api/v1/scanned_form_uploads_controller.rb#L10-L169)
- Processor (decrypt/convert/validate/persist): [modules/simple_forms_api/app/services/simple_forms_api/scanned_form_processor.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/e62253a7ef694a43711edfb04f453d074653cfff/modules/simple_forms_api/app/services/simple_forms_api/scanned_form_processor.rb#L41-L150)
- Intake client and validation options: [lib/lighthouse/benefits_intake/service.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/e62253a7ef694a43711edfb04f453d074653cfff/lib/lighthouse/benefits_intake/service.rb#L66-L156)

### Endpoints and flow
- POST /simple_forms_api/v1/scanned_form_upload
  - Stages a file in PersistentAttachments and returns a serialized record (includes a GUID).
  - If a password is provided for an encrypted PDF, the backend attempts decryption during processing.
- POST /simple_forms_api/v1/submit_scanned_form
  - Uses the staged GUID (confirmation_code) to locate the file, validates metadata, stamps the PDF, and submits to Lighthouse Benefits Intake. Returns status and the Intake UUID.
- POST /simple_forms_api/v1/supporting_documents_upload
  - Feature-flagged path for supporting documents; delegates to a service that coordinates multi-file uploads with Lighthouse.

### Processing pipeline
1. Stage
   - Store the raw upload via PersistentAttachments.
   - If a password is provided and the file is an encrypted PDF, attempt to decrypt before validation.
2. Convert
   - Convert non-PDF formats to PDF; keep PDFs intact for validation/stamping.
3. Validate
   - Enforce size, page dimensions, encryption, and basic PDF integrity checks locally (before hitting Intake).
4. Stamp
   - Apply minimal stamps (form number, LOA, timestamp) to the final PDF.
5. Submit
   - Request an Intake upload location and UUID, upload the stamped PDF, and persist submission attempt metadata.

### Data and observability
- FormSubmission and FormSubmissionAttempt records capture metadata and the Intake UUID.
- Structured logging and Datadog tags (e.g., form_id, uuid) aid diagnostics while avoiding PII leakage.

### Errors and responses
- Validation and conversion failures return HTTP 422 with a standard error array: `{ errors: [{ title, detail }] }`.
- Upstream or persistence issues return appropriate 4xx/5xx codes and messages.
- Common error cases: zero-byte file, invalid MIME type, oversized pages, file too large, corrupted PDF, incorrect/missing password.

### Feature flags
- simple_forms_upload_supporting_documents
  - Controls whether uploads follow the legacy single-doc flow or the service-backed flow that supports supporting documents.

---

## Common tools and utilities (shared behavior)

These utilities underpin the PDF validation and decryption behavior across file-upload flows.

### PDFUtilities::PDFValidator::Validator
- Purpose: Local validation of PDFs before contacting external services; returns structured, human-readable errors.
- Checks:
  - File size limit
  - Page dimensions
  - Encryption status (distinguishes user vs. owner protection)
  - Basic PDF readability
- Defaults:
  - size_limit_in_bytes: 100 MB
  - check_page_dimensions: true
  - check_encryption: true
  - width_limit_in_inches: 21, height_limit_in_inches: 21
- Intake-specific overrides commonly used:
  - width_limit_in_inches: 78, height_limit_in_inches: 101
- Reference: [lib/pdf_utilities/pdf_validator.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/e62253a7ef694a43711edfb04f453d074653cfff/lib/pdf_utilities/pdf_validator.rb)

Example:
```ruby
opts = {
  size_limit_in_bytes: 100_000_000,
  check_page_dimensions: true,
  check_encryption: true,
  width_limit_in_inches: 78,
  height_limit_in_inches: 101
}
result = PDFUtilities::PDFValidator::Validator.new(path_to_pdf, opts).validate
if result.valid_pdf?
  # proceed
else
  # return 422 with result.errors
end
```

### Common::PdfHelpers.unlock_pdf
- Purpose: Decrypt password-protected PDFs using a user-provided password, writing a temporary decrypted file.
- Behavior:
  - Signature: `Common::PdfHelpers.unlock_pdf(input_path, password, output_path)`
  - On success, the decrypted PDF is written to `output_path`.
  - On failure (e.g., wrong password), raises `Common::Exceptions::UnprocessableEntity`.
- Typical usage:
  - Attempt decryption if a password is provided, then validate the decrypted PDF.
  - Always clean up decrypted temporary files after processing (even on failure).
- Reference (usage in processor): [scanned_form_processor.rb (decrypt and validate)](https://github.com/department-of-veterans-affairs/vets-api/blob/e62253a7ef694a43711edfb04f453d074653cfff/modules/simple_forms_api/app/services/simple_forms_api/scanned_form_processor.rb#L83-L109)

Example:
```ruby
output_path = Tempfile.new(['decrypted', '.pdf']).path
begin
  Common::PdfHelpers.unlock_pdf(encrypted_pdf_path, password, output_path)
  result = PDFUtilities::PDFValidator::Validator.new(output_path, PDF_VALIDATOR_OPTIONS).validate
  raise "Invalid PDF: #{result.errors}" unless result.valid_pdf?
ensure
  File.delete(output_path) if File.exist?(output_path)
end
```


## Future Considerations
- Accessibility consideration (focus management): Handle the case when a user attempts to submit a form containing a `required` instance of the component without actually uploading a file.
