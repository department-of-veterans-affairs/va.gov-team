# Collaboration Cycle Team Dropdown Sync

This directory contains the script for synchronizing the team dropdown in the Collaboration Cycle request template.

## Overview

The `sync-collab-cycle-teams.rb` script reads team data from `team-lookup.json` (sourced from va.gov-team-sensitive) and updates the VFS team name field in `.github/ISSUE_TEMPLATE/collaboration-cycle-request.yml` to be a dropdown with all current teams.

## How It Works

1. **Reads** team-lookup.json containing canonical team data (team IDs, names, portfolios)
2. **Generates** sorted dropdown options in format: "Team Name (12345)"
3. **Updates** collaboration-cycle-request.yml template with dropdown options
4. **Preserves** all other template fields and structure

## Usage

### Manual Execution

```bash
# Basic usage (assumes team-lookup.json in current directory)
ruby scripts/manifest/sync-collab-cycle-teams.rb

# With custom paths
ruby scripts/manifest/sync-collab-cycle-teams.rb path/to/team-lookup.json \
  --template path/to/template.yml \
  --verbose
```

### Automated Workflow

This script runs automatically via GitHub Actions:

1. **Private repo** (va.gov-team-sensitive) pushes team-lookup.json to this repo via PR
2. **PR is labeled** with "team-data-sync"
3. **Workflow triggers** (`.github/workflows/update-templates-on-team-data-sync.yml`)
4. **Script runs** to regenerate template from team-lookup.json
5. **Template committed** to same PR for atomic review

## Testing

The script has comprehensive test coverage using RSpec.

### Running Tests

```bash
cd scripts/manifest

# Install dependencies
bundle install

# Run all tests
bundle exec rspec

# Run with documentation format
bundle exec rspec --format documentation

# Run specific test file
bundle exec rspec spec/sync_collab_cycle_teams_spec.rb
```

### Test Coverage

- ✅ Basic functionality (reads JSON, updates template)
- ✅ Alphabetical sorting of teams
- ✅ Team ID format in options (e.g., "Team Name (12345)")
- ✅ Required field validation
- ✅ Error handling (missing files, invalid JSON, missing fields)
- ✅ Large dataset handling (100+ teams)
- ✅ Template preservation (doesn't modify other fields)

## Architecture

### Two-Step Sync Pattern

```
va.gov-team-sensitive (private)          va.gov-team (public)
───────────────────────────             ────────────────────
Team manifest changes
       ↓
sync-team-metadata.yml
       ↓
Pushes team-lookup.json ─────────────→  PR with "team-data-sync" label
                                                ↓
                                        Workflow triggers
                                                ↓
                                        sync-collab-cycle-teams.rb
                                                ↓
                                        Updates template
                                                ↓
                                        Commits to same PR
```

### Security Model

- **Token stored in private repo only** (write to public, not read from private)
- **Public repo workflow** uses default GITHUB_TOKEN (no additional secrets)
- **If public compromised** → cannot access private team data
- **If private compromised** → only visible changes to public (reversible)

### 45GB Repo Handling

The workflow uses sparse checkout to avoid cloning the entire 45GB repository:

```yaml
sparse-checkout: |
  .github/ISSUE_TEMPLATE
  scripts/manifest
  team-lookup.json
sparse-checkout-cone-mode: false
```

This downloads only ~7MB instead of 45GB.

## Files

- `sync-collab-cycle-teams.rb` - Main script
- `Gemfile` - RSpec dependency
- `spec/sync_collab_cycle_teams_spec.rb` - Test suite
- `spec/spec_helper.rb` - RSpec configuration
- `.rspec` - RSpec output formatting

## Troubleshooting

### Script fails with "Team lookup file not found"

**Cause:** team-lookup.json not in expected location

**Solution:**

- Ensure team-lookup.json exists
- Use `--template` flag to specify custom path
- Check workflow sparse checkout includes team-lookup.json

### Template not updating in PR

**Cause:** Workflow may have failed or label not applied

**Solution:**

1. Check GitHub Actions logs for errors
2. Verify PR has "team-data-sync" label
3. Re-run workflow if needed

### Tests failing

**Cause:** Dependencies not installed or script changes

**Solution:**

```bash
cd scripts/manifest
bundle install
bundle exec rspec --format documentation
```

## Related Documentation

- [VFS Team Automation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/scripts/manifest/VFS_TEAM_AUTOMATION.md) (private repo)
- [Implementation Plan](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/scripts/manifest/docs/plans/2025-12-15-collab-cycle-team-dropdown-sync.md) (private repo)
