# Product Details Validation Workflow

This repository includes automated validation for product details YAML files to ensure they meet quality standards and contain properly formatted information.

## What Gets Validated

The workflow automatically runs when:

- A pull request modifies any `products/**/*-details.yml` file
- Changes are pushed to the `master` branch affecting product details files

## Validation Checks

### 1. YAML Structure Validation

- ✅ Valid YAML syntax
- ✅ Required fields present: `name`, `entry_name`, `description`, `team`, `status`
- ✅ No template placeholders in critical fields

### 2. URL Format Validation

The validator checks that all URLs are properly formatted and contain valid hostnames:

- **manifest_url**: Must be a GitHub URL pointing to a `manifest.json` file
- **project_board**: Must be a valid HTTP/HTTPS URL
- **research_repo**: Should be a GitHub URL (warning if not)
- **production/staging URLs**: Must be valid HTTP/HTTPS URLs
- **Measurement URLs**: All measurement dashboard URLs are validated for proper format

### 3. GitHub Label Validation

- ✅ Checks if the specified `github-label` exists in the `va.gov-team` repository
- ⚠️ Generates warnings for non-existent labels

### 4. Template Placeholder Detection

Identifies and flags common template placeholders that should be replaced:

- "Product Display Name"
- "manifest-entry-name"
- "Product description"
- "team-name"
- "Product label"
- Placeholder URLs like "https://..."

## Understanding Results

### ✅ Success

No validation errors found - the product details file meets all requirements.

### ❌ Errors

Critical issues that should be fixed:

- Missing required fields
- Invalid URL formats
- Template placeholders in required fields
- YAML syntax errors

### ⚠️ Warnings

Non-critical issues that should be reviewed:

- Non-existent GitHub labels
- URLs that don't follow recommended patterns
- Minor formatting inconsistencies

## Example Validation Output

```bash
🔍 Validating products/platform/design-system/design-system-details.yml...
✅ URL format valid: https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1
✅ URL format valid: https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=is%3Aissue%20state%3Aopen%20DSC
🏷️ Checking GitHub label: design-system
✅ GitHub label 'design-system' exists

📊 Validation Results:
Errors: 0
Warnings: 0
```

## How to Fix Common Issues

### Template Placeholders

Replace placeholder text with actual product information:

```yaml
# ❌ Bad
description: "Product description"

# ✅ Good  
description: "A comprehensive design system for VA.gov applications"
```

### Invalid URLs

Ensure all URLs are complete and properly formatted:

```yaml
# ❌ Bad
manifest_url: "https://..."

# ✅ Good
manifest_url: "https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/my-app/manifest.json"
```

### Missing GitHub Labels

Create the label in the va.gov-team repository or use an existing one:

```yaml
# Make sure this label exists in the repository
github-label: "my-product-label"
```

## Manual Validation

You can also run validation locally using the existing validation script:

```bash
# Validate a specific product
ruby scripts/manifest/validate_products.rb --product my-product-name --verbose

# Validate all products
ruby scripts/manifest/validate_products.rb --verbose
```

## Workflow Configuration

The validation workflow is configured in `.github/workflows/validate-product-details.yml` and runs with:

- **Timeout**: 10 minutes
- **Runner**: ubuntu-latest
- **Sparse checkout**: Only downloads necessary directories for performance
- **Ruby version**: 3.1

The workflow will automatically comment on pull requests with validation results and detailed logs are available in the GitHub Actions tab.
