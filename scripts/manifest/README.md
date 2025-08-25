# Team Manifest Tool

This directory contains Ruby scripts for managing the VA.gov team manifest and validating team documentation.

## Scripts

### 1. `generate_manifest.rb`

Scans team README files across portfolio directories and generates a consolidated team manifest in the main teams README file.

**Features:**

- Scans `teams/digital-experience/`, `teams/benefits-portfolio/`, `teams/health-portfolio/`, and `teams/bam-portfolio/` directories
- Extracts team information from README files containing `## Team Information` section
- Groups teams by portfolio and crew/pod
- Updates the `## Current team manifest` section in `teams/README.md`

**Usage:**

```bash
# Basic usage
ruby generate_manifest.rb

# Preview changes without writing files
ruby generate_manifest.rb --dry-run

# Enable detailed output
ruby generate_manifest.rb --verbose

# Process only a specific portfolio
ruby generate_manifest.rb --portfolio=bam-portfolio

# Combine options
ruby generate_manifest.rb --dry-run --verbose --portfolio=benefits-portfolio
```

**Environment Variables:**

- `REPO_ROOT` - Path to repository root (auto-detected if not set)
- `DRY_RUN` - Set to preview changes without writing files
- `VERBOSE` - Set to enable detailed logging

### 2. `validate_teams.rb`

Validates team README files for completeness by checking for template placeholders.

**Features:**

- Depends on `generate_manifest.rb` output - uses the generated manifest to identify teams
- Parses the `## Current team manifest` section in `teams/README.md`
- Validates each team's README for placeholder content in the `## Team Information` section
- Generates detailed validation reports with completion status
- Identifies specific fields that need attention

**Usage:**

```bash
# Basic usage - output to console
ruby validate_teams.rb

# Generate report with verbose output
ruby validate_teams.rb --verbose

# Write report to file
ruby validate_teams.rb --output=validation_report.md

# Combine options
ruby validate_teams.rb --output=team_status.md --verbose
```

**Environment Variables:**

- `REPO_ROOT` - Path to repository root (auto-detected if not set)
- `VERBOSE` - Set to enable detailed logging

## File Structure

```text
scripts/manifest/
├── generate_manifest.rb      # Main manifest generator script
├── validate_teams.rb         # Team documentation validator
├── lib/
│   ├── team_parser.rb        # Team README parsing utilities
│   └── markdown_utils.rb     # Markdown manipulation helpers
└── README.md                 # This file
```

## Requirements

- Ruby 2.7 or higher
- Must be run from within the va.gov-team repository

## How It Works

### Manifest Generation Process

1. **Discovery**: Scans portfolio directories for team subdirectories containing README.md files
2. **Parsing**: Extracts team information from README files that contain the `## Team Information` section
3. **Validation**: Filters out teams missing required information (team name, portfolio)
4. **Grouping**: Organizes teams by portfolio and crew/pod
5. **Generation**: Creates formatted manifest content
6. **Update**: Replaces the `## Current team manifest` section in `teams/README.md`

### Validation Process

1. **Manifest Parsing**: Reads the `## Current team manifest` section from `teams/README.md`
2. **Team Discovery**: Identifies all teams listed in the manifest with their README paths
3. **README Analysis**: For each team README, extracts the `## Team Information` section
4. **Placeholder Detection**: Scans for template placeholder patterns (e.g., `[Full Name]`, `[github-username]`)
5. **Progress Calculation**: Counts completed vs remaining fields for each team
6. **Report Generation**: Creates comprehensive validation report with actionable feedback

### Data Extraction

From each qualifying README, the script extracts:

- **Team Name** (from `**Team Name:**` field)
- **Portfolio** (inferred from directory structure)
- **Crew or Pod** (from `**Crew or Pod:**` field)
- **README Link** (relative path to the team's README file)

### Validation Output Format

The validation report follows this structure:

```markdown
# Team Documentation Validation Report

## Digital Experience

### [Crew Name]

#### [Team Name]
- ❌ **GitHub Team Name:** Contains placeholder text
- ❌ **Email:** Contains placeholder text
- ✅ All other fields completed
- ℹ️  **Progress:** 13/15 fields completed

#### [Team Name]
- ✅ **All fields completed**

## Summary
- **Total Teams:** 41
- **Fully Completed:** 1
- **Needs Attention:** 40
- **Completion Rate:** 2.4%
```

### Output Format

The generated manifest follows this structure:

```markdown
## Current team manifest

### Digital Experience
#### [Crew Name]
- [Team Name](teams/digital-experience/team-slug/README.md)
- [Team Name](teams/digital-experience/team-slug/README.md)

#### [Crew Name]
- [Team Name](teams/digital-experience/team-slug/README.md)

### Benefits Portfolio
#### [Crew Name]
- [Team Name](teams/benefits-portfolio/team-slug/README.md)

### Health Portfolio
#### [Pod Name]
- [Team Name](teams/health-portfolio/team-slug/README.md)

### BAM Portfolio
#### [Crew Name]
- [Team Name](teams/bam-portfolio/team-slug/README.md)
```

## Error Handling

The scripts include robust error handling:

- Skip files that don't contain required headers
- Log warnings for teams missing portfolio or crew/pod information
- Gracefully handle malformed README files
- Validate repository structure before processing

## Contributing

When modifying these scripts:

1. Follow Ruby best practices
2. Maintain backward compatibility
3. Update tests if available
4. Update this documentation

## Support

For questions or issues with these scripts, please create an issue in the va.gov-team repository.
