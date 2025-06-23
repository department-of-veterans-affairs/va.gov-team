# va-file-input-multiple Conditional Slots Bug

**Bug Report**: https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3785  
**Related Implementation**: https://github.com/department-of-veterans-affairs/va.gov-team/issues/87835

## Executive Summary

CST cannot upgrade to `va-file-input-multiple` due to **bug #3785** - conditional slots don't work. This blocks CST from updating to the v3 component.

## The Bug: What's Broken

### Current Problem
- **Slots render in HTML** but don't display in the component UI
- **Cannot conditionally show different slots per file** 
- **`slotFieldIndexes` prop doesn't work** for per-file conditional rendering

### What "Slots" Are
**Slots** = customizable content areas where developers insert additional form fields for each uploaded file.

```jsx
<va-file-input-multiple>
  <div slot="additionalFormInputs">
    <va-select label="Document Type" />        // Always needed
    <va-text-input label="Password" />         // Only if encrypted
  </div>
</va-file-input-multiple>
```

## Current Working Implementation

**CST's AddFilesForm.jsx already works correctly:**

```jsx
{this.props.files.map(({ file, docType, isEncrypted, password }, index) => (
  <div key={index}>
    {/* CONDITIONAL PASSWORD - only for encrypted files */}
    {isEncrypted && (
      <VaTextInput label="PDF password" required />
    )}
    
    {/* DOCUMENT TYPE - always required */}
    <VaSelect label="What type of document is this?" required />
  </div>
))}
```

**Key Point**: CST has a working solution but cannot migrate to the new component because slots are broken.

## User Journey & Conditional Requirements

### Real User Scenarios

**Typical veteran upload session:**
```
File 1: medical-record.pdf (encrypted) → Needs: Document Type + Password
File 2: photo-id.jpg (not encrypted)  → Needs: Document Type only  
File 3: statement.pdf (encrypted)     → Needs: Document Type + Password
```

**Without conditional slots**: Veterans see password fields for ALL files (confusing)
**With conditional slots**: Veterans see password fields only where needed (clear)

## Technical Requirements for Fix

### What CST Needs
**Per-file conditional slot configuration:**

```javascript
// Each file can have different slot visibility
files.forEach((file, index) => {
  showSlot(index, 'documentType', true);           // Always
  showSlot(index, 'password', file.isEncrypted);   // Conditional
});
```

### Success Criteria
When fixed, this should work:
```jsx
<va-file-input-multiple>
  <div slot="additionalFormInputs">
    <va-select label="Document type" />
    {isEncrypted && <va-text-input label="PDF password" />}
  </div>
</va-file-input-multiple>
```

## Visual Flow Diagrams

### File Upload Flow & Conditional Logic

```mermaid
flowchart TD
    A[Veteran uploads multiple files] --> B{For each file}
    B --> C[File analysis]
    C --> D{Is file encrypted?}
    
    D -->|Yes| E[Show: Document Type + Password]
    D -->|No| F[Show: Document Type only]
    
    E --> G[Veteran fills both fields]
    F --> H[Veteran fills document type]
    
    G --> I{All files configured?}
    H --> I
    
    I -->|No| J[Highlight missing fields]
    I -->|Yes| K[Enable submit button]
    
    J --> L[Veteran completes missing fields]
    L --> I
    
    K --> M[Submit successful]
    
    style E fill:#ffcccc
    style F fill:#ccffcc
    style D fill:#ffffcc
```

### Current vs New Component Comparison

```mermaid
graph LR
    subgraph "✅ Current Working (AddFilesForm)"
        A1[VaFileInput] --> A2[Manual file mapping]
        A2 --> A3{Check isEncrypted per file}
        A3 -->|Yes| A4[Render VaTextInput password]
        A3 -->|No| A5[Skip password field]
        A4 --> A6[Always render VaSelect docType]
        A5 --> A6
    end
    
    subgraph "❌ Broken (va-file-input-multiple)"
        B1[va-file-input-multiple] --> B2[Slots render in HTML]
        B2 --> B3[❌ Slots don't display in UI]
        B3 --> B4[❌ Cannot conditionally show per file]
    end
    
    A6 -.->|"CST wants to migrate to"| B1
    B4 -.->|"Blocks migration until fixed"| A1
    
    style A1 fill:#ccffcc
    style B1 fill:#ffcccc
    style B3 fill:#ff9999
    style B4 fill:#ff9999
```

---

*Core issue: Veterans need different upload fields for different files, but the component currently shows the same fields for all files or none.* 
