# GitHub Copilot Instructions for va.gov-team Repository

## Repository Overview

This is the va.gov-team repository, which contains documentation, workflows, and assets for the VA.gov website development and the Veteran-facing Services Platform (VSP). **This is a very large repository (~35GB)** due to extensive documentation, media files, and historical assets across 99+ products and multiple teams.

The repository serves as a central hub for:
- **Non-code documentation** for VA.gov products and platform
- **Team collaboration** across portfolios (Benefits, Health, Digital Experience, BAM)
- **Issue tracking** for platform and product development
- **Knowledge management** for Veterans Affairs digital services

## Critical Setup Requirements

⚠️ **IMPORTANT: This repository requires special checkout configuration to prevent "No space left on device" errors.**

### Required Checkout Configuration

When working on tasks in this repository, **you must use the following optimized checkout settings**:

```yaml
jobs:
  your-job-name:
    runs-on: ubuntu-latest           # RECOMMENDED: Standard runner works with sparse checkout
    timeout-minutes: 45-60           # CRITICAL: Extend timeout for large operations
    
    steps:
      - name: Optimized checkout for large repository
        uses: actions/checkout@v4
        with:
          # Use shallow clone to reduce download size
          fetch-depth: 1
          # CRITICAL: Use sparse checkout to only get necessary directories
          sparse-checkout: |
            .github/workflows/
            scripts/
            teams/
            products/
            platform/
            docs/
            templates/
            assets/
          sparse-checkout-cone-mode: false
          token: ${{ secrets.GITHUB_TOKEN }}
```

### Post-Checkout Setup

After checkout, if working with large files:
```bash
git lfs install
git lfs pull
```

For additional environment verification and setup steps, see: [`copilot-setup-steps.yml`](copilot-setup-steps.yml)

### Environment Requirements

- **Standard runners work well** with sparse checkout - `ubuntu-latest` is sufficient for most tasks
- **Use larger runners only when necessary** - `ubuntu-4-cores-latest` or `ubuntu-8-cores-latest` for full repository operations
- **Always use sparse checkout** - avoids "No space left on device" errors
- **Extend timeouts** to 45-60 minutes for large operations
- **Monitor disk space** with `df -h` to ensure sufficient space

## Repository Structure

### Primary Directories

#### `/products/` - Product Documentation (99+ products)
- **Purpose**: Documentation for all VA.gov user-facing products and VA Health Benefits mobile app features
- **Content**: Product outlines, design comps, content decks, discovery docs, user research files
- **Organization**: One folder per product (e.g., `health-care/`, `disability/`, `education-careers/`)
- **Key Files**: Each product should contain a `product-details-template.yml` file
- **Contributors**: Veteran-facing Service (VFS) teams and Platform teams.

#### `/teams/` - Team Organization and Documentation
- **Purpose**: Internal resources for teams building on or supporting VA.gov
- **Organization by Portfolios**:
  - `teams/benefits-portfolio/` - Benefits-focused teams
  - `teams/health-portfolio/` - Health products teams
  - `teams/digital-experience/` - Digital experience teams  
  - `teams/bam-portfolio/` - BAM (Benefits and Memorial) teams
- **Content**: Team charters, org charts, workflow documents, team-specific processes
- **Key Files**: Each team has a `README.md` following the template structure
- **Important**: Store team information ONLY - product information goes in `/products/`

#### `/platform/` - Platform Support Documentation
- **Purpose**: Resources, templates, guides, and processes supporting VFS development
- **Key Subdirectories**:
  - `accessibility/` - 508 compliance and accessibility guidelines
  - `analytics/` - Analytics implementation and reporting
  - `design/` - Design system, patterns, and guidelines
  - `engineering/` - Development standards and technical documentation
  - `research/` - Research processes, planning, and synthesis
  - `content/` - Content strategy and writing guidelines
  - `quality-assurance/` - Testing protocols and standards
  - `security/` - Security practices and ATO documentation

#### `/scripts/` - Automation and Validation Tools
- **Purpose**: Ruby scripts for repository maintenance and validation
- **Key Scripts**:
  - `scripts/manifest/validate_teams.rb` - Validates team README completeness
  - `scripts/manifest/generate_manifest.rb` - Generates team manifests
  - `scripts/cleanup.rb` - Repository maintenance
  - `scripts/migrate.rb` - Data migration utilities

#### `/.github/` - Repository Configuration
- **Purpose**: GitHub Actions workflows, templates, and repository configuration
- **Key Files**:
  - `workflows/` - Automation workflows for the repository
  - `CODEOWNERS` - Code review assignments
  - Various issue and PR templates

#### `/docs/` - General Documentation
- **Purpose**: Cross-cutting documentation and ADRs (Architecture Decision Records)
- **Content**: Issue templates, architectural decisions, general guidance

### Secondary Directories

- `/assets/` - Media files, images, and documents (managed via Git LFS)
- `/templates/` - Reusable templates for documentation and processes
- `/strategy/` - Strategic planning and high-level documentation
- `/impact-reviews/` - Impact assessment documentation
- `/octo/` - OCTO (Office of the CTO) specific documentation

## File Management Standards

### File and Folder Naming Conventions
- **Use lowercase** with dashes as separators (e.g., `repo-guidelines.md`)
- **No spaces or special characters** (&, :, %, etc.)
- **Omit unnecessary words** (the, a, and) when possible
- **Include versioning** at the end for multiple versions (e.g., `v1`, dates)
- **Use YYYYMMDD format** for dates to enable chronological sorting
- **Exception**: `README.md` files should be all capitals for visibility

### Large File Management
- **Git LFS Required** for: `.pdf`, `.mp4`, `.sketch`, `.pptx`, `.docx`, `.zip`, `.mov`, `.avi`
- **Do not upload these file types via web interface** - use Git LFS only
- **File organization**: Consider creating `files/` folders for extensive external files
- **Link from Markdown** files for discoverability

### Folder Structure Guidelines
- **Keep structures flat** - avoid deep nested hierarchies
- **Create child folders** only when you have multiple related files
- **Use clear definitions** for folder purposes
- **Don't repeat parent folder names** in child folder names

## Development Standards

### For GitHub Actions Workflows
- **Must include optimized checkout** configuration shown above
- **Test on branches** before merging to master
- **Include proper permissions** blocks
- **Use sparse checkout** to minimize repository size
- **Consider background processes** for long-running tasks
- **Monitor disk space** during execution

### For Team Documentation
- **Location**: `teams/{portfolio}/{team-name}/README.md`
- **Template**: Follow `teams/team-readme-template.md`
- **Validation**: Use `ruby scripts/manifest/validate_teams.rb`
- **Structure**: Must include `## Team Information` section
- **Manifest**: Teams auto-included in manifest if properly structured

### For Product Documentation
- **Location**: `products/{product-name}/`
- **Requirements**: Include `product-details-template.yml`
- **Content**: Product-specific information only (not team-specific)
- **History**: Preserve project documents for historical tracking
- **Cross-reference**: Link to related team documentation appropriately

### For Platform Documentation
- **Audience**: Platform teams and VFS teams building on platform
- **Standards**: Follow established patterns in existing platform docs
- **Technical depth**: Provide implementation details and examples
- **Maintenance**: Keep documentation current with platform changes

## Common Development Tasks

### Team README Management
```bash
# Validate specific team documentation
ruby scripts/manifest/validate_teams.rb --team="Team Name" --verbose

# Validate all teams across portfolios
ruby scripts/manifest/validate_teams.rb

# Generate team manifest
ruby scripts/manifest/generate_manifest.rb --verbose

# Preview changes without writing
ruby scripts/manifest/generate_manifest.rb --dry-run
```

### Repository Maintenance
```bash
# Clean up deprecated content
ruby scripts/cleanup.rb
```

### Content Validation
- **Before committing**: Validate team documentation completeness
- **For workflows**: Test in branches with representative data
- **For large files**: Verify Git LFS handling before push
- **Cross-references**: Check that internal links remain valid

## Security and Compliance

### Public vs Private Content
- **This repository is PUBLIC** - no sensitive information allowed
- **Sensitive content** goes to `va.gov-team-sensitive` private repository
- **Prohibited content**: PII, credentials, security vulnerabilities, postmortems
- **Review carefully** before committing any content

### Workflow Permissions
- **Use least privilege** principle for workflow permissions
- **Standard token**: `${{ secrets.GITHUB_TOKEN }}` for repository access
- **Permissions blocks**: Always include explicit permissions in workflows
- **Security scanning**: Workflows should not expose sensitive data

### Performance Optimization

### Repository Size Management
1. **Always use sparse checkout** - prevents full repository download (35GB+)
2. **Enable Git LFS when needed** - only for workflows handling large files  
3. **Use shallow clones** - significantly reduces checkout time (`fetch-depth: 1`)
4. **Monitor disk space** - verify availability during operations (`df -h`)
5. **Standard runners are sufficient** - `ubuntu-latest` works with proper sparse checkout

### Build Optimization
- **Parallel workflows** when possible for independent tasks
- **Caching strategies** for repeated operations
- **Targeted operations** - avoid full repository scans
- **Efficient filtering** - use specific file patterns for searches

## Troubleshooting Common Issues

### "No space left on device" errors
1. Ensure sparse checkout is properly configured to limit directories  
2. Use shallow clone (`fetch-depth: 1`)
3. Switch to larger GitHub Actions runners only if needed (`ubuntu-4-cores-latest`)
4. Monitor disk usage with `df -h`
5. Remove unnecessary files during workflow execution

### Large file handling issues
1. Verify Git LFS is properly configured
2. Check file types are listed in `.gitattributes`
3. Run `git lfs pull` after checkout
4. Confirm file size limits for your use case

### Team validation failures
1. Check README follows template structure
2. Verify `## Team Information` section exists
3. Remove placeholder text like `[Full Name]`
4. Ensure portfolio directory structure is correct

### Workflow failures
1. Verify checkout configuration includes all needed directories
2. Check permissions blocks are properly configured
3. Ensure runner size is appropriate for task
4. Monitor timeout settings for long operations

## Knowledge Hub and Resources

- **Primary documentation**: https://depo-platform-documentation.scrollhelp.site/
- **Repository guidelines**: `repo-guidelines.md`
- **Team templates**: `teams/team-readme-template.md`
- **Platform orientation**: Required for VFS team members
- **Support channels**: #vfs-platform-support (Slack)

---

**Remember**: This repository serves the entire VA.gov ecosystem with complex organizational needs. Always use optimized checkout configuration, follow established patterns, and validate your work before committing. The size and scope require careful consideration of performance impact and organizational standards.
