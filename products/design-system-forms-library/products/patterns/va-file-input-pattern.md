# VaFileInput Error States - vets-website

**Components:** VaFileInputField & VaFileInputMultipleField
**Location:** `/platform/forms-system/src/js/web-component-fields/`
**Analysis Date:** 2025-10-14

---

## Table of Contents
1. [Overview](#overview)
2. [All Error States](#all-error-states)
3. [Error State Details](#error-state-details)
4. [Error Handling Flow](#error-handling-flow)
5. [Comparison: VaFileInputField vs VaFileInputMultipleField](#comparison-vafileinputfield-vs-vafileinputmultiplefield)
6. [Password Error Management](#password-error-management)
7. [Additional Input Validation](#additional-input-validation)

---

## Overview

The vets-website forms library includes two web component-based file upload fields:

1. **VaFileInputField** - Single file upload
2. **VaFileInputMultipleField** - Multiple file upload

Both components use the `@department-of-veterans-affairs/component-library` web components and share common error handling logic.

---

## All Error States

VaFileInput components have **8 primary error states**:

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
| 8 | FILE ALREADY ULPLOADED |" You already uploaded this file. Select a differnt file" | If the user uploads the same file using multi file input| Both |


---

## Error State Details

### 1. File Type Mismatch Error
**Constant:** `FILE_TYPE_MISMATCH_ERROR`

**Location:** `/platform/forms-system/src/js/utilities/file/checkTypeAndExtensionMatches.js:3-4`

```javascript
export const FILE_TYPE_MISMATCH_ERROR =
  'The file extension doesn't match the file format. Please choose a different file.';
```

**When it occurs:**
- File extension doesn't match actual file content
- File signature validation fails during `standardFileChecks()`
- Checked via `checkTypeAndExtensionMatches()` utility

**Implementation in VaFileInputFieldHelpers:**
```javascript
export async function getFileError(file, uiOptions) {
  const checks = await standardFileChecks(file);
  let fileError = null;
  if (!checks.checkTypeAndExtensionMatches) {
    fileError = FILE_TYPE_MISMATCH_ERROR;
  }
  // ...
  return { fileError, encryptedCheck: !!checks.checkIsEncryptedPdf };
}
```

**Applies to:** Both VaFileInputField and VaFileInputMultipleField

---

### 2. Unsupported Encrypted File Error
**Constant:** `UNSUPPORTED_ENCRYPTED_FILE_ERROR`

**Location:** `/platform/forms-system/src/js/validation.js:588-589`

```javascript
export const UNSUPPORTED_ENCRYPTED_FILE_ERROR =
  "We weren't able to upload your file. Make sure the file is not encrypted and an accepted format.";
```

**When it occurs:**
- PDF file is detected as encrypted
- `uiOptions.disallowEncryptedPdfs` is set to `true`
- Encryption is not supported for this field

**Implementation:**
```javascript
if (!!checks.checkIsEncryptedPdf && uiOptions.disallowEncryptedPdfs) {
  fileError = UNSUPPORTED_ENCRYPTED_FILE_ERROR;
}
```

**Configuration:**
```javascript
// In uiSchema
{
  'ui:options': {
    disallowEncryptedPdfs: true  // Rejects all encrypted PDFs
  }
}
```

**Applies to:** Both VaFileInputField and VaFileInputMultipleField

---

### 3. UTF-8 Encoding Error
**Constant:** `UTF8_ENCODING_ERROR`

**Location:** `/platform/forms-system/src/js/validation.js:592`

```javascript
export const UTF8_ENCODING_ERROR = "The file's encoding is not valid";
```

**When it occurs:**
- Text file has invalid UTF-8 encoding
- File contains invalid byte sequences
- Checked via `checkUTF8Encoding()` during `standardFileChecks()`

**Implementation:**
```javascript
if (!checks.checkUTF8Encoding) {
  fileError = UTF8_ENCODING_ERROR;
}
```

**Applies to:** Both VaFileInputField and VaFileInputMultipleField

---

### 4. Missing Password Error
**Constant:** `MISSING_PASSWORD_ERROR`

**Location:** `/platform/forms-system/src/js/validation.js:587`

```javascript
export const MISSING_PASSWORD_ERROR = 'Encrypted file requires a password.';
```

**When it occurs:**
- User uploads encrypted PDF
- Password has not been entered yet
- `uiOptions.encrypted` is `true` (allows encrypted files with password)

**Special behavior:**
- File upload is **paused** until password is entered
- Password input is displayed in the component
- Error is managed by `passwordErrorState` manager

**VaFileInputField implementation:**
```javascript
const handleVaChange = async e => {
  const { fileError, encryptedCheck } = await getFileError(
    fileFromEvent,
    uiOptions,
  );

  if (encryptedCheck) {
    setFileWithPassword(fileFromEvent);
    setEncrypted(encryptedCheck);
    passwordErrorManager.setNeedsPassword(encryptedCheck);
    // Upload delayed until password provided
  }
};
```

**VaFileInputMultipleField implementation:**
```javascript
// Track password errors for all instances
const passwordErrors = errorManager.getPasswordInstances().map(instance => {
  return instance && instance.hasPasswordError()
    ? MISSING_PASSWORD_ERROR
    : null;
});
```

**Applies to:** Both VaFileInputField and VaFileInputMultipleField

---

### 5. Missing File Error
**Constant:** `MISSING_FILE`

**Location:** `/platform/forms-system/src/js/validation.js:590`

```javascript
export const MISSING_FILE = 'File is required.';
```

**When it occurs:**
- Field is marked as required
- User attempts to continue without uploading
- Form validation runs

**Implementation in VaFileInputMultipleField:**
```javascript
useEffect(
  () => {
    if (mappedProps.error === MISSING_FILE) {
      const _errors = [...errors];
      _errors[0] = MISSING_FILE;
      setErrors(_errors);
    }
  },
  [mappedProps.error],
);
```

**Applies to:** VaFileInputMultipleField only (handled by form validation)

---

### 6. Missing Additional Info Error
**Constant:** `MISSING_ADDITIONAL_INFO`

**Location:** `/platform/forms-system/src/js/validation.js:591`

```javascript
export const MISSING_ADDITIONAL_INFO = 'This information is required.';
```

**When it occurs:**
- File upload has additional input field (e.g., document type selector)
- Additional input is required but empty
- User has touched the field or attempted navigation

**Implementation in VaFileInputMultipleField:**
```javascript
const _isEmpty = !file || (file && isEmpty(file.additionalData));
const additionalInputError =
  _isEmpty &&
  index < errorManager.getLastTouched() &&
  !instance.getAttribute('error')
    ? childrenProps?.uiSchema?.['ui:errorMessages']
        ?.additionalInput || MISSING_ADDITIONAL_INFO
    : '';
```

**Custom error message:**
```javascript
// In uiSchema
{
  'ui:errorMessages': {
    additionalInput: 'Please select a document type'
  }
}
```

**Applies to:** VaFileInputMultipleField only (requires `additionalInput` config)

---

### 7. Network/Upload Errors
**Source:** API response errors

**When it occurs:**
- Network connection fails during upload
- Server returns error response
- Upload API endpoint is unreachable
- Server-side validation fails

**Implementation:**
```javascript
const handleFileProcessing = uploadedFile => {
  if (!uploadedFile || !uploadedFile.file) return;

  // Skip network errors in mock/test environments
  if (!uiOptions.skipUpload) {
    setError(uploadedFile.errorMessage);
  }

  assignFileUploadToStore(uploadedFile);
};
```

**Common network error messages:**
- "We're sorry. We had a connection problem. Please try again."
- "File upload failed"
- "Server error"
- Custom API error messages

**Applies to:** Both VaFileInputField and VaFileInputMultipleField

---

### 8. Internal Component Errors
**Source:** Web component internal validation

**When it occurs:**
- Component detects file size exceeded
- Component detects invalid file type
- Component-level validation fails
- Browser file API errors

**Implementation in VaFileInputField:**
```javascript
const handleInternalError = e => {
  const { error: _error } = e.detail;
  if (_error) {
    setError(_error);
  }
};

<VaFileInput
  onVaFileInputError={handleInternalError}
  // ...
/>
```

**Implementation in VaFileInputMultipleField:**
```javascript
const handleInternalFileInputError = e => {
  const index = getFileInputInstanceIndex(e);
  errorManager.setInternalFileInputErrors(index, true);
  const _errors = [...errors];
  _errors[index] = e.detail.error;
  setErrors(_errors);
};
```

**Common internal errors:**
- File size exceeds maximum
- File type not in accept list
- Browser compatibility issues

**Applies to:** Both VaFileInputField and VaFileInputMultipleField

---

## Error Handling Flow

### VaFileInputField Error Flow

```
1. User selects file (onVaChange event)
   ↓
2. Client-side validation (getFileError)
   ├─ Check type/extension → FILE_TYPE_MISMATCH_ERROR
   ├─ Check if encrypted + disallowed → UNSUPPORTED_ENCRYPTED_FILE_ERROR
   └─ Check UTF-8 encoding → UTF8_ENCODING_ERROR
   ↓
3. If encrypted and allowed
   ├─ Set encrypted state
   ├─ Show password input
   ├─ Wait for password (debounced)
   └─ On password → Upload with password
   ↓
4. If not encrypted
   └─ Upload immediately
   ↓
5. Upload processing
   ├─ Track progress (percentUploaded)
   ├─ Set error if upload fails
   └─ Store file data on success
   ↓
6. Display result
   ├─ Success → Show uploaded file
   └─ Error → Show error message + reset
```

### VaFileInputMultipleField Error Flow

```
1. User selects file (onVaMultipleChange event)
   ↓
2. Determine action type
   ├─ FILE_ADDED → New file
   ├─ FILE_UPDATED → Replace file
   ├─ PASSWORD_UPDATE → Password entered
   └─ FILE_REMOVED → Delete file
   ↓
3. For FILE_ADDED/FILE_UPDATED
   ├─ Client-side validation (getFileError)
   ├─ Update errors array at index
   ├─ Manage password error instance
   ├─ If encrypted → Wait for password
   └─ If not encrypted → Upload immediately
   ↓
4. For PASSWORD_UPDATE
   ├─ Debounce password input
   ├─ Reset password error instance
   └─ Upload with password
   ↓
5. For FILE_REMOVED
   ├─ Remove from errors array
   ├─ Remove password instance
   ├─ Remove from formData array
   └─ Update UI
   ↓
6. Additional input validation (if configured)
   ├─ Check for missing additionalData
   ├─ Set error if empty and touched
   └─ Update via slot polling
```

---

## Comparison: VaFileInputField vs VaFileInputMultipleField

### Feature Comparison

| Feature | VaFileInputField | VaFileInputMultipleField |
|---------|------------------|-------------------------|
| **File limit** | 1 file | Multiple files |
| **Error tracking** | Single error state | Array of errors (one per file) |
| **Password handling** | Single password manager | Multiple password instances |
| **Upload progress** | Single percentage | Array of percentages |
| **Additional input** | Single instance | Per-file instances |
| **Error constants** | 7 error types | 8 error types (includes MISSING_FILE) |
| **Prefill support** | Basic | Advanced (initializes arrays) |
| **Slot content** | Simple | Polling mechanism for shadow DOM |

### Error State Management

#### VaFileInputField
```javascript
// Single error state
const [error, setError] = useState(mappedProps.error);

// Set error
setError(uploadedFile.errorMessage);

// Pass to component
<VaFileInput error={error} />
```

#### VaFileInputMultipleField
```javascript
// Array of errors (one per file)
const [errors, setErrors] = useState([]);

// Set error at specific index
const _errors = [...errors];
_errors[index] = uploadedFile.errorMessage;
setErrors(_errors);

// Pass array to component
<VaFileInputMultiple errors={errors} />
```

---

## Password Error Management

Both components use a centralized `passwordErrorState` manager to track encrypted file password requirements.

### Password Error State Manager

**Location:** `/platform/forms-system/src/js/utilities/file/passwordErrorState.js`

**Purpose:**
- Track which files need passwords
- Manage password error state per file instance
- Prevent form submission until passwords provided
- Track touched state for validation

### VaFileInputField Password Management

```javascript
const [passwordErrorManager, setPasswordErrorManager] = useState(null);

useEffect(() => {
  const instance = passwordErrorState.getInstance(_id);
  setPasswordErrorManager(instance);
  return () => {
    instance.reset();
  };
}, []);

// When encrypted file detected
passwordErrorManager.setNeedsPassword(encryptedCheck);

// When password entered
const handleVaPasswordChange = e => {
  const { password } = e.detail;
  debouncePassword(password);
};

// Debounced password handler
const debouncePassword = useMemo(
  () =>
    debounce(DEBOUNCE_WAIT, password => {
      if (fileWithPassword) {
        passwordErrorManager.setHasPassword(password.length > 0);
        handleUpload(fileWithPassword, handleFileProcessing, password);
      }
    }),
  [handleUpload],
);
```

### VaFileInputMultipleField Password Management

```javascript
// Track password instances for all files
errorManager.addPasswordInstance(index, encryptedCheck);

// When password entered
const debouncePassword = useMemo(
  () =>
    debounce(DEBOUNCE_WAIT, ({ file, password }, index) => {
      if (password && password.length > 0) {
        errorManager.resetInstance(index);
        handleUpload(file, handleFileProcessing, password, index);
      }
    }),
  [handleUpload],
);

// Get password errors for all instances
const passwordErrors = errorManager.getPasswordInstances().map(instance => {
  return instance && instance.hasPasswordError()
    ? MISSING_PASSWORD_ERROR
    : null;
});

// Pass to component
<VaFileInputMultiple passwordErrors={passwordErrors} />
```

### Password Error Manager Methods

| Method | Purpose | Used By |
|--------|---------|---------|
| `getInstance(id)` | Get/create instance for field | VaFileInputField |
| `addPasswordInstance(index, needsPassword)` | Add instance for file at index | VaFileInputMultipleField |
| `removeInstance(index)` | Remove instance when file deleted | VaFileInputMultipleField |
| `resetInstance(index)` | Clear error for instance | VaFileInputMultipleField |
| `setNeedsPassword(needs)` | Mark as needing password | VaFileInputField |
| `setHasPassword(has)` | Mark password as provided | VaFileInputField |
| `hasPasswordError()` | Check if error exists | Both |
| `getPasswordInstances()` | Get all instances | VaFileInputMultipleField |
| `setLastTouched(index)` | Track touched state | VaFileInputMultipleField |
| `getLastTouched()` | Get last touched index | VaFileInputMultipleField |

---

## Additional Input Validation

VaFileInputMultipleField supports additional input fields per uploaded file (e.g., document type selector, description field).

### Additional Input Configuration

```javascript
// In uiSchema
{
  'ui:options': {
    additionalInput: () => (
      <va-select
        label="Document type"
        name="documentType"
      >
        <option value="">- Select -</option>
        <option value="proof">Proof of service</option>
        <option value="medical">Medical records</option>
      </va-select>
    ),

    additionalInputUpdate: (element, errorMessage, data) => {
      // Update additional input with data and error
      if (errorMessage) {
        element.setAttribute('error', errorMessage);
      } else {
        element.removeAttribute('error');
      }
      if (data) {
        element.setAttribute('value', data.documentType);
      }
    },

    handleAdditionalInput: (e) => {
      // Extract data from event
      return {
        documentType: e.target.value
      };
    }
  },

  'ui:errorMessages': {
    additionalInput: 'Please select a document type'
  }
}
```

### Additional Input Error Detection

```javascript
const _isEmpty = !file || (file && isEmpty(file.additionalData));

// Show error if:
// 1. Additional data is empty
// 2. File index is less than last touched index
// 3. Instance doesn't already have error
const additionalInputError =
  _isEmpty &&
  index < errorManager.getLastTouched() &&
  !instance.getAttribute('error')
    ? childrenProps?.uiSchema?.['ui:errorMessages']
        ?.additionalInput || MISSING_ADDITIONAL_INFO
    : '';
```

### Additional Input Update Flow

```javascript
1. File uploaded
   ↓
2. Additional input slot rendered
   ↓
3. Poll shadow DOM for slot content (up to 2 seconds)
   ↓
4. Update input with prefill data (if any)
   ↓
5. Set error if required and empty
   ↓
6. User interacts with input
   ↓
7. handleAdditionalInput() extracts data
   ↓
8. Store in formData[index].additionalData
   ↓
9. Re-validate on navigation attempt
```

---

## Configuration Options

### VaFileInputField Configuration

```javascript
{
  'ui:webComponentField': VaFileInputField,
  'ui:title': 'Upload document',
  'ui:hint': 'Upload PDF, JPG, or PNG',
  'ui:errorMessages': {
    required: 'Please upload a document'
  },
  'ui:options': {
    accept: '.pdf,.jpeg,.jpg,.png',
    maxFileSize: 25000000,  // 25MB in bytes
    minFileSize: 1000,       // 1KB in bytes
    encrypted: true,         // Allow encrypted PDFs with password
    disallowEncryptedPdfs: false,  // Reject all encrypted PDFs
    skipUpload: false,       // Skip actual upload (testing)
    enableAnalytics: true,   // Track file upload events
    formNumber: '21-526EZ',  // Form identifier
    fileUploadUrl: 'https://api.va.gov/v0/upload',

    // Additional input (single file only)
    additionalInput: (error, data) => (
      <va-text-input
        label="Document description"
        error={error}
        value={data?.description}
      />
    ),

    handleAdditionalInput: (e) => ({
      description: e.target.value
    })
  }
}
```

### VaFileInputMultipleField Configuration

```javascript
{
  'ui:webComponentField': VaFileInputMultipleField,
  'ui:title': 'Upload supporting documents',
  'ui:hint': 'You can upload multiple files',
  'ui:errorMessages': {
    required: 'Please upload at least one document',
    additionalInput: 'Please select document type'
  },
  'ui:options': {
    accept: '.pdf,.jpeg,.jpg,.png',
    maxFileSize: 50000000,  // 50MB
    minFileSize: 1000,
    encrypted: true,
    disallowEncryptedPdfs: false,
    skipUpload: false,
    enableAnalytics: true,
    formNumber: '21-526EZ',
    fileUploadUrl: 'https://api.va.gov/v0/upload',

    // Additional input per file
    additionalInput: () => (
      <va-select label="Document type">
        <option value="">- Select -</option>
        <option value="medical">Medical records</option>
        <option value="service">Service records</option>
      </va-select>
    ),

    additionalInputUpdate: (element, error, data) => {
      if (error) element.setAttribute('error', error);
      else element.removeAttribute('error');
      if (data) element.setAttribute('value', data.documentType);
    },

    handleAdditionalInput: (e) => ({
      documentType: e.target.value
    })
  }
}
```

---

## Error Display in Component

### Web Component Integration

Both fields use the official VA Design System web components:

```javascript
import { VaFileInput } from '@department-of-veterans-affairs/component-library/dist/react-bindings';
import { VaFileInputMultiple } from '@department-of-veterans-affairs/component-library/dist/react-bindings';
```

### Error Props Passed to Component

#### VaFileInputField
```javascript
<VaFileInput
  error={error}                    // Error message string
  passwordError={passwordError}    // Password field error
  encrypted={encrypted}            // Show password input
  resetVisualState={!!error}       // Reset on error
  percentUploaded={percentUploaded}
  uploadedFile={uploadedFile}
  onVaFileInputError={handleInternalError}
  onVaChange={handleVaChange}
  onVaPasswordChange={handleVaPasswordChange}
/>
```

#### VaFileInputMultipleField
```javascript
<VaFileInputMultiple
  error={error}                    // Form-level error
  errors={errors}                  // Array of per-file errors
  passwordErrors={passwordErrors}  // Array of password errors
  encrypted={encrypted}            // Array of encrypted states
  resetVisualState={resetVisualState}  // Array of reset flags
  percentUploaded={percentsUploaded}   // Array of progress
  uploadedFiles={uploadedFiles}
  onVaFileInputError={handleInternalFileInputError}
  onVaMultipleChange={handleChange}
/>
```

---

## Summary

### Error State Comparison

| Error Type | VaFileInputField | VaFileInputMultipleField | Detection Point |
|------------|------------------|-------------------------|-----------------|
| File type mismatch | ✅ | ✅ | Client-side |
| Unsupported encrypted | ✅ | ✅ | Client-side |
| UTF-8 encoding | ✅ | ✅ | Client-side |
| Missing password | ✅ | ✅ | Client-side |
| Missing file | ❌ | ✅ | Form validation |
| Missing additional info | ❌ | ✅ | Client-side |
| Network/upload errors | ✅ | ✅ | Server response |
| Internal errors | ✅ | ✅ | Component |

### Key Differences from FileField

| Feature | FileField (Legacy) | VaFileInput (New) |
|---------|-------------------|-------------------|
| **Component library** | Custom React | VA Design System web components |
| **Multiple files** | Manual array management | Built-in support |
| **Password handling** | Inline password input | Component-managed password UI |
| **Error mapping** | Manual remapping | Component handles display |
| **Additional inputs** | Schema-based | Slot-based with shadow DOM |
| **Progress tracking** | Single state | Per-file tracking |
| **File validation** | Manual checks | Shared utilities |
| **Browser compatibility** | React-based | Web component-based |

### Developer Notes

- ✅ **Shared validation logic** via `getFileError()` and `standardFileChecks()`
- ✅ **Centralized password management** via `passwordErrorState` manager
- ✅ **Debounced password input** (500ms) to prevent excessive uploads
- ✅ **Shadow DOM polling** for additional inputs (VaFileInputMultiple)
- ✅ **Test environment detection** via `environment.isTest()`
- ✅ **Skip upload mode** for mock forms and testing
- ✅ **Analytics integration** via `enableAnalytics` option
- ⚠️ **Component ref required** for VaFileInputMultiple to access shadow DOM
- ⚠️ **Additional input updates** require polling mechanism due to shadow DOM
