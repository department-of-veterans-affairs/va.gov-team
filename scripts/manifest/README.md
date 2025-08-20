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

*(Coming soon)* Validates team README files for completeness by checking for template placeholders.

## File Structure

```text
scripts/manifest/
├── generate_manifest.rb      # Main manifest generator script
├── validate_teams.rb         # Team documentation validator (coming soon)
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

### Data Extraction

From each qualifying README, the script extracts:

- **Team Name** (from `**Team Name:**` field)
- **Portfolio** (inferred from directory structure)
- **Crew or Pod** (from `**Crew or Pod:**` field)
- **README Link** (relative path to the team's README file)

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
