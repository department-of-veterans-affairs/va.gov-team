# IVC ChampVA Form Version Update Guide

This guide provides instructions for updating expired forms with backwards compatibility using the form versioning system.

More information can be found in the [IVC Champva README](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/ivc_champva/README.md#updating-expired-forms).

## Overview

The form versioning system allows you to deploy new form versions while maintaining backwards compatibility with existing forms. This prevents breaking changes when UI/data model updates are required but haven't been synchronized with the frontend yet.

## Key Components

1. **FormVersionManager** - Central service for managing form versions
2. **Feature flags** - Control which form version is used
3. **Legacy mapping** - Ensures S3/metadata compatibility with existing systems
4. **Versioned form models** - New form classes for updated PDFs

## Step-by-Step Process for Updating Forms

### 1. Prepare the New PDF

```bash
# Copy the new PDF to a simple filename for processing
cp '/path/to/new/VA.Form.XX-XXX.pdf' '/path/to/workspace/form_name_YYYY.pdf'
```

### 2. Generate Form Mapping

```bash
# Create temporary mapping for comparison (if needed)
cp modules/ivc_champva/app/form_mappings/original_form.json.erb modules/ivc_champva/app/form_mappings/new_form_name.json.erb

# Generate the new mapping
rails 'ivc_champva:generate_mapping[/path/to/workspace/form_name_YYYY.pdf]'

# Clean up temporary files
rm modules/ivc_champva/app/form_mappings/new_form_name.json.erb
rm modules/ivc_champva/app/form_mappings/new_form_name_latest.json.erb
```

### 3. Create Versioned Form Mapping

Manually create the properly mapped form file at:
`modules/ivc_champva/app/form_mappings/form_name_YYYY.json.erb`

Example mapping structure:
```erb
{
  "form1[0].#subform[0].FIELDNAME[0]": "<%= form.data.dig('data_path', 'field') %>",
  // ... map all fields from new PDF to existing data structure
}
```

### 4. Copy PDF Template

```bash
# Copy the new PDF to templates directory
cp '/path/to/workspace/form_name_YYYY.pdf' 'modules/ivc_champva/templates/form_name_YYYY.pdf'
```

### 5. Create Versioned Form Model

Create new model file: `modules/ivc_champva/app/models/ivc_champva/form_name_yyyy.rb`

```ruby
module IvcChampva
  class FormNameYYYY
    ADDITIONAL_PDF_KEY = 'applicants'  # if applicable
    ADDITIONAL_PDF_COUNT = 3          # if applicable
    STATS_KEY = 'api.ivc_champva_form.form_name_yyyy'

    include Virtus.model(nullify_blank: true)
    include Attachments

    attribute :data
    attr_reader :form_id

    def initialize(data)
      @data = data
      @uuid = SecureRandom.uuid
      @form_id = 'form_name_yyyy'
    end

    def metadata
      {
        # Copy metadata from original form and update as needed
        'formExpiration' => 'MM/DD/YYYY'
      }.merge(additional_metadata_if_needed)
    end

    # Copy other methods from original form model
    # Update STATS_KEY references and logging messages
  end
end
```

### 6. Update FormVersionManager

Add the new form version configuration:

```ruby
# In modules/ivc_champva/app/services/ivc_champva/form_version_manager.rb

# Add to FORM_VERSIONS
FORM_VERSIONS = {
  'original_form_id' => {
    current: 'original_form_id',
    'YYYY' => 'form_name_yyyy'
  }
}.freeze

# Add feature flag mapping
FORM_VERSION_FLAGS = {
  'form_name_yyyy' => 'form_name_yyyy_enabled'
}.freeze

# Add legacy mapping
LEGACY_MAPPING = {
  'form_name_yyyy' => 'original_form_id'
}.freeze

# Update get_form_class method
def get_form_class(form_id)
  case form_id
  # ... existing cases ...
  when 'form_name_yyyy'
    IvcChampva::FormNameYYYY
  else
    raise ArgumentError, "Unknown form ID: #{form_id}"
  end
end
```

### 7. Add Feature Flag

Add to `config/features.yml`:

```yaml
form_name_yyyy_enabled:
  actor_type: user
  description: If enabled uses the YYYY version of form XX-XXX with expiration MM/DD/YYYY
```

### 8. Clean Up Temporary Files

```bash
# Remove any temporary files created during the process
rm /path/to/workspace/form_name_YYYY.pdf
```

## How It Works

1. **Feature Flag Disabled (Default)**:
   - Form submissions use the original form ID and PDF
   - No breaking changes to existing functionality

2. **Feature Flag Enabled**:
   - New submissions automatically use the new form version
   - PDF generation uses the new template and mapping
   - S3 uploads and metadata still use the original form ID for compatibility
   - Backend processes continue to work without changes

## Benefits

- **Zero Downtime**: New forms can be deployed without affecting existing functionality
- **Gradual Rollout**: Feature flags allow controlled testing and rollout
- **Backwards Compatibility**: S3 and metadata systems continue to work unchanged
- **Reusable Pattern**: Same approach can be used for any form update

## Example: 10-10D Form Update

The 2027 version of form 10-10D demonstrates this pattern:

- Original: `vha_10_10d` (expires 12/31/2024)
- New version: `vha_10_10d_2027` (expires 12/31/2027)
- Feature flag: `form_10_10d_2027_enabled`
- S3/metadata still uses `vha_10_10d` for compatibility

When the feature flag is enabled, new submissions use the 2027 PDF with updated field mappings, but all backend systems continue to process them as regular 10-10D forms.
