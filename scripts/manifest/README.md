# Product Manifest Tool

This directory contains Ruby scripts for managing the VA.gov product manifest and validating product documentation.

## Scripts

### 1. `generate_product_manifest.rb`

Scans product YAML files across the products directory and generates a consolidated product manifest in the main products README file.

**Features:**

- Scans `products/` directory for `*-details.yml` files
- Extracts product information from YAML files containing required fields
- Groups products by category based on directory structure  
- Updates the `## Current product manifest` section in `products/README.md`
- Includes comprehensive URL information (Production, Staging, Application code, Measurement dashboards)
- Filters out placeholder and invalid URLs
- Provides statistics on total products, active products, and categories

**Usage:**

```bash
# Basic usage
ruby generate_product_manifest.rb

# Preview changes without writing files
ruby generate_product_manifest.rb --dry-run

# Enable detailed output
ruby generate_product_manifest.rb --verbose

# Combine options
ruby generate_product_manifest.rb --dry-run --verbose
```

**Environment Variables:**

- `REPO_ROOT` - Path to repository root (auto-detected if not set)
- `VERBOSE` - Set to enable detailed logging

### 2. `validate_products.rb`

Validates product YAML files for completeness by checking for required fields and placeholder content.

**Features:**

- Discovers all `*-details.yml` files in the products directory
- Validates each product YAML against the template requirements
- Checks for placeholder content and missing required fields
- Generates detailed validation reports with completion status
- Identifies specific fields that need attention
- Supports validation of individual products or all products

**Usage:**

```bash
# Basic usage - validate all products
ruby validate_products.rb

# Validate with verbose output
ruby validate_products.rb --verbose

# Validate a specific product
ruby validate_products.rb --product "design-system"

# Write report to file
ruby validate_products.rb --output=validation_report.md

# Combine options
ruby validate_products.rb --output=product_status.md --verbose
```

**Environment Variables:**

- `REPO_ROOT` - Path to repository root (auto-detected if not set)
- `VERBOSE` - Set to enable detailed logging

## File Structure

```text
scripts/manifest/
├── generate_product_manifest.rb  # Product manifest generator script
├── validate_products.rb          # Product YAML validator
├── lib/
│   └── markdown_utils.rb         # Markdown manipulation helpers
└── README.md                     # This file
```

## Requirements

- Ruby 2.7 or higher
- Must be run from within the va.gov-team repository

## How It Works

### Product Manifest Generation Process

1. **Discovery**: Scans products directory for `*-details.yml` files
2. **Parsing**: Extracts product information from YAML files with valid structure
3. **Categorization**: Groups products by category based on directory structure
4. **URL Validation**: Filters out placeholder URLs and invalid links
5. **Statistics**: Calculates total products, active products, and category counts
6. **Generation**: Creates formatted manifest content with rich metadata
7. **Update**: Replaces the `## Current product manifest` section in `products/README.md`

### Product Validation Process

1. **Discovery**: Finds all `*-details.yml` files in the products directory
2. **Schema Validation**: Checks each YAML file against the expected template structure
3. **Content Analysis**: Scans for placeholder patterns and missing required fields
4. **Progress Calculation**: Counts completed vs remaining fields for each product
5. **Report Generation**: Creates comprehensive validation report with actionable feedback

### Data Extraction

From each qualifying YAML file, the script extracts:

- **Product Name** (from `name` field)
- **Team** (from `team` field)
- **Status** (active, maintenance, sunset)
- **URLs** (production, staging, application code)
- **Measurement URLs** (Datadog, Domo, Google Analytics, Project Board, Research Repository)
- **GitHub Label** (for issue tracking)
- **Category** (inferred from directory structure)

### Product Categories

Products are automatically categorized based on their directory structure:

- **Health Care** - `health-care/` directory
- **Platform & Infrastructure** - `platform/` directory  
- **Disability Benefits** - `disability/` directory
- **Education & Careers** - `education-careers/` directory
- **Identity & Personalization** - `identity-personalization/` directory
- **And more** - Automatically derived from directory names

### Validation Output Format

The validation report follows this structure:

```markdown
# Product Documentation Validation Report

## Health Care

### ✅ 10-7959C CHAMPVA Other Health Insurance Certification form
- **All required fields completed**
- **Status:** Active
- **Team:** ivc-forms

### ❌ Example Product Name
- ❌ **Production URL:** Contains placeholder text
- ❌ **Team:** Missing required field
- ✅ All other fields completed
- ℹ️  **Progress:** 8/10 required fields completed

## Summary
- **Total Products:** 4
- **Fully Completed:** 1
- **Needs Attention:** 3
- **Completion Rate:** 25%
```

### Manifest Output Format

The generated manifest follows this structure:

```markdown
## Current product manifest

This manifest lists all VA.gov products that have product details YAML files.

### Statistics

- Total Products: 4
- Active Products: 4
- Categories: 2

### Health Care (2)

- [Product Name](products/path/to/product-details.yml)
  - Status: 🟢 Active
  - Team: team-name
  - [Production URL](https://...)
  - [Staging URL](https://staging...)
  - [Application code](https://github.com/...)
  - [Project Board](https://github.com/orgs/...)
  - [GitHub Issues](https://github.com/.../issues?q=...)

### Platform & Infrastructure (2)

- [Another Product](products/platform/product-details.yml)
  - Status: 🟢 Active
  - Team: platform-team
  - [Production URL](https://...)

---

*Last updated: YYYY-MM-DD HH:MM:SS*
```

## Error Handling

The scripts include robust error handling:

- Skip files with invalid YAML syntax
- Log warnings for products missing required information
- Gracefully handle malformed product files
- Validate repository structure before processing
- Filter out placeholder and invalid URLs

## URL Validation

The manifest generator includes smart URL filtering:

- **Placeholder Detection**: Filters out URLs like "https://..." or "https://"
- **Empty Value Handling**: Skips empty or null URL fields
- **Valid URL Display**: Only shows legitimate, working URLs as clickable links

## Contributing

When modifying these scripts:

1. Follow Ruby best practices
2. Maintain backward compatibility with existing YAML files
3. Update tests if available
4. Update this documentation
5. Test with both valid and invalid product YAML files

## Support

For questions or issues with these scripts, please create an issue in the va.gov-team repository.
