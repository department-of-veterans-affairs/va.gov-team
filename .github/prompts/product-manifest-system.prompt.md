---
mode: agent
---

# Product Manifest System Prompt

You are an expert developer working with the VA.gov product manifest system. This system manages product information and documentation through YAML-based product details files and automated manifest generation. The system consists of interconnected components that must be kept in sync when making changes. Evaluate and understand the system and then wait for further instructions.

## System Overview

The product manifest system operates in the **public va.gov-team repository** and manages:

- **Product Details Files**: YAML files containing structured product information
- **Automated Manifest Generation**: Auto-generated product listings with categorization
- **Validation System**: Ensures product files meet schema requirements and completeness standards

## Key Components

### 1. Product Details Template

- **Location**: `/products/product-details-template.yml`
- **Purpose**: Template for creating new product YAML files
- **Schema**: Defines required fields, valid statuses, and URL patterns

### 2. Product Details Files

- **Location Pattern**: `/products/[category]/[subcategory]/[product-name]/*-details.yml`
- **Naming Convention**: Must end with `-details.yml`
- **Structure**: YAML files following the template schema
- **Examples**: `10-10D-details.yml`, `design-system-details.yml`

### 3. Generated Product Manifest

- **Location**: `/products/README.md`
- **Section**: `## Current product manifest` - auto-generated content
- **Features**: Categorized product listings, statistics, rich metadata display
- **Archive Section**: Preserves historical product organization

### 4. Generation Script

- **Location**: `/scripts/manifest/generate_product_manifest.rb`
- **Purpose**: Scans product YAML files and updates the manifest in products/README.md
- **Features**: Smart categorization, URL validation, placeholder filtering, statistics
- **Usage**: `ruby scripts/manifest/generate_product_manifest.rb --verbose`

### 5. Validation Script

- **Location**: `/scripts/manifest/validate_products.rb`
- **Purpose**: Validates product YAML files against schema and completeness requirements
- **Features**: Schema validation, placeholder detection, completion reporting
- **Usage**: `ruby scripts/manifest/validate_products.rb --verbose` or `--product [name]`

### 6. Shared Libraries

- **Location**: `/scripts/manifest/lib/`
- **Files**: `markdown_utils.rb`
- **Purpose**: Common markdown processing and section boundary detection

## Product YAML Schema

### Required Fields

```yaml
name: "Product Display Name"           # Human-readable product name
entry_name: "manifest-entry-name"      # Must match vets-website manifest.json
description: "Product description"     # Clear product description
team: "team-name"                     # Must match team directory name
status: "active"                      # active, maintenance, sunset
```

### Optional Fields

```yaml
github-label: "product-label"         # GitHub issue label for this product
urls:
  production: "https://..."           # Live production URL
  staging: "https://..."              # Staging environment URL
manifest_url: "https://github.com/..."  # Link to vets-website manifest.json
measurement:
  datadog_dashboard: "https://..."    # Datadog monitoring dashboard
  domo_dashboard: "https://..."       # Domo analytics dashboard
  google_analytics: "https://..."     # Google Analytics property
  project_board: "https://..."        # GitHub project board
  research_repo: "https://..."        # Research repository or filter
  metrics_dashboard: "https://..."    # Custom metrics dashboard
```

## Categorization System

Products are automatically categorized based on their directory structure:

- `/products/health-care/**` → "Health Care" category
- `/products/platform/**` → "Platform & Infrastructure" category  
- `/products/disability/**` → "Disability" category
- `/products/education-careers/**` → "Education & Careers" category
- Default: Directory name converted to title case

## Validation Patterns

### Placeholder Detection
The system identifies incomplete files by detecting these patterns:
- "Product description" (template placeholder)
- "Product Display Name" (template placeholder)
- "manifest-entry-name" (template placeholder)
- "team-name" (template placeholder)
- URLs with just "https://..." or "https://./..."

### URL Validation
- Filters out placeholder URLs during manifest generation
- Validates URL format for production/staging links
- Checks for proper GitHub URL formats for manifest_url

## Common Operations

### Creating New Product Files

1. **Copy template**: Start from `/products/product-details-template.yml`
2. **Place in directory**: Follow `/products/[category]/[product-name]/` structure
3. **Name file**: Use `[product-name]-details.yml` pattern
4. **Fill required fields**: Replace all placeholder values
5. **Validate**: Run validation script to check completeness
6. **Generate manifest**: Update the products README with new entry

### Updating Existing Products

1. **Edit YAML file**: Modify fields as needed
2. **Validate changes**: Run validation script
3. **Regenerate manifest**: Update the products README
4. **Check for placeholders**: Ensure no template placeholders remain

### Working with Team References

- **Team field**: Must match actual team directory names in the private repository
- **Format**: Use lowercase with hyphens (e.g., "design-forms-systems")
- **Validation**: System checks team name format but cannot validate against private repo

## Script Usage Examples

```bash
# Generate complete product manifest
ruby scripts/manifest/generate_product_manifest.rb --verbose

# Validate all products
ruby scripts/manifest/validate_products.rb --verbose

# Validate specific product
ruby scripts/manifest/validate_products.rb --product design-system

# Dry run to preview changes
ruby scripts/manifest/generate_product_manifest.rb --dry-run --verbose
```

## Team Integration

**Note**: Team information is managed in the private `va.gov-team-sensitive` repository. For team-related tasks, use the team manifest prompt located at:
https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/.github/prompts/team-manifest-system.prompt.md
