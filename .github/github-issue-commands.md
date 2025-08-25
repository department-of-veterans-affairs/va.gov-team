# GitHub Issues Commands & Workflows

This guide provides Copilot with context on handling GitHub issues for the va.gov-team repository.

## Repository Context

The `va.gov-team` repository is the central hub for the Department of Veterans Affairs digital services team. It contains:

- **Product documentation** for all VA.gov products and services
- **Team processes** and workflows for 50+ teams
- **Platform documentation** for shared tools and infrastructure  
- **Research artifacts** and user experience documentation
- **Engineering standards** and best practices
- **Design system** documentation and accessibility standards

This repository primarily tracks **coordination, planning, documentation, and process work** rather than code implementation.

## Key GitHub CLI Commands

### Viewing Issues

```bash
# List all open issues
gh issue list

# List issues with specific labels (common VA.gov labels)
gh issue list --label "analytics-insights"
gh issue list --label "platform-feature-request"
gh issue list --label "disability-benefits"
gh issue list --label "health-care"
gh issue list --label "HCE-Checkin"

# View specific issue
gh issue view <issue-number>

# Search issues by content
gh issue list --search "accessibility audit"
gh issue list --search "collaboration cycle"
gh issue list --assignee "@me"
```

### Creating Issues

```bash
# Create issue interactively
gh issue create

# Create issue with specific VA.gov templates
gh issue create --template "standard-issue.md"
gh issue create --template "epic-issue.md"
gh issue create --template "platform-feature-request.yml"
gh issue create --template "analytics-feature-request-bug-report.md"

# Create issue with VA.gov-specific details
gh issue create --title "Research: User testing for disability benefits" --body "Description..." --label "research,disability-benefits,user-research"
```

### Managing Issues

```bash
# Assign issue to team member
gh issue edit <issue-number> --add-assignee "username"

# Add VA.gov team and practice area labels
gh issue edit <issue-number> --add-label "benefits-portfolio"
gh issue edit <issue-number> --add-label "frontend,accessibility"

# Remove triage labels after processing
gh issue edit <issue-number> --remove-label "needs-refinement"

# Close issue with context
gh issue close <issue-number> --comment "Completed in collaboration cycle review"

# Reopen issue if needed
gh issue reopen <issue-number>
```

## Issue Templates & When to Use

### 1. Standard Issue (`standard-issue.md`)

**Use for**: General user stories, features, improvements
**Required Configuration**:

- Team label (e.g., `analytics-insights`, `benefits-portfolio`)
- Practice area label (e.g., `frontend`, `backend`, `design`, `research`)
- Type label (e.g., `bug`, `enhancement`, `discovery`)
- Epic and milestone assignment

### 2. Epic Issue (`epic-issue.md`)

**Use for**: Large bodies of work spanning multiple sprints
**Required Info**:

- Product outline link
- High-level user stories
- Hypothesis/bet statement
- OKR alignment
- Definition of done

### 3. Platform Feature Request (`platform-feature-request.yml`)

**Use for**: Requests for platform-level features and services
**Auto-assigned**: Platform team members
**Required Info**: Problem description, beneficiaries, proposed solution, evidence

### 4. Team-Specific Templates

**Disability Benefits Team**:

- `1 Disability-BaseTeam-Bug-Template.yml` - Bug reports
- `1 Disability-BaseTeam-Spike-Template.yml` - Research spikes
- `1 Disability-Benefits-Issue-Template.yml` - General issues

**Check-in Experience Team** (prefix: `check-in-experience-*`):

- Design, development, research, testing, and release templates

**Analytics Team** (prefix: `analytics-*`):

- Feature requests, bug reports, dashboard requests

### 5. Platform Support Templates

**Access Requests**:

- `vetsapi-flipper-ui-access.yaml` - Feature flag access
- `aws-access-request.yml` - AWS infrastructure access
- `figma-access-request.yml` - Design tool access

**Process Templates**:

- `collaboration-cycle-request.yml` - Platform review process
- `onboarding-team.yml` - New team setup
- `offboarding-request.md` - Team member departure

## VA.gov Team Structure & Labels

### Team Labels (select appropriate team)

- `analytics-insights` - Analytics and data team
- `benefits-portfolio` - Benefits-related products
- `health-care` - Healthcare applications
- `platform-team` - Platform infrastructure and tools
- `content-ia` - Content and information architecture
- `identity` - Authentication and user accounts
- `operations` - DevOps and site reliability
- `service-design` - Service design and research
- `accessibility` - 508 compliance and accessibility

### Practice Area Labels (select applicable areas)

- `frontend` - Client-side development
- `backend` - Server-side development  
- `devops` - Infrastructure and deployment
- `design` - User experience and visual design
- `research` - User research and testing
- `product` - Product management
- `qa` - Quality assurance testing
- `analytics` - Data analysis and measurement
- `content` - Content strategy and writing
- `accessibility` - 508 compliance work

### Product Area Labels

- `disability-benefits` - Disability compensation and appeals
- `health-care` - Medical services and appointments
- `education-benefits` - GI Bill and education assistance
- `housing` - Home loans and housing assistance
- `burials-memorials` - Cemetery and memorial services
- `my-va` - Personalized dashboard

### Status/Workflow Labels

- `needs-refinement` - Requires more details or clarification
- `ready-for-dev` - Ready for development work
- `blocked` - Cannot proceed due to dependencies
- `research-needed` - Requires user research
- `collab-cycle` - Requires platform collaboration cycle review

## Issue Triage Process

1. **Initial Labeling**: Issues get team-specific labels based on template used
2. **Practice Area Assignment**: Add relevant practice area labels
3. **Epic Linking**: Connect to appropriate epic for tracking
4. **Milestone Assignment**: Link to sprint or release milestone
5. **Team Assignment**: Assign to appropriate team members

## Common Issue Management Workflows

### Bug Report Workflow

**Template Selection Process for Bugs:**

1. **Ask the user**: "Do you know which team or product area this bug affects?"
2. **If they know**: Guide them to the appropriate team-specific bug template
3. **If they don't know**: Provide link to browse all templates: [Browse all issue templates](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/.github/ISSUE_TEMPLATE)
4. **If still unsure or want to file immediately**: Use the Blank issue template

```bash
# For team-specific bugs (when team is known)
gh issue create --template "<template name>"

# For general bugs or when team is unknown
gh issue create  # This opens the template selector, choose "Blank issue"

# Add severity and component labels after creation
gh issue edit <issue-number> --add-label "severity-high,frontend"

# Assign to appropriate team (once identified)
gh issue edit <issue-number> --add-assignee "team-lead"
```

### Research Request Workflow

```bash
# Create research epic
gh issue create --template "epic-issue.md" --title "Epic: User research for benefits application"

# Create specific research tasks
gh issue create --title "Research Plan: Benefits application usability" --label "research,benefits-portfolio"
gh issue create --title "Conversation Guide: Benefits application interviews" --label "research,benefits-portfolio"
```

### Platform Support Workflow

```bash
# Request platform feature
gh issue create --template "platform-feature-request.yml"

# Request collaboration cycle review
gh issue create --template "collaboration-cycle-request.yml"

# Request access to tools
gh issue create --template "aws-access-request.yml"
```

## Integration with External Repositories

### Code Implementation Repos

Issues in `va.gov-team` often reference implementation work in:

- `department-of-veterans-affairs/vets-website` (frontend)
- `department-of-veterans-affairs/vets-api` (backend)
- `department-of-veterans-affairs/content-build` (content)
- `department-of-veterans-affairs/component-library` (design system)

### Cross-repo Issue Management

```bash
# Reference implementation work
gh issue comment <issue-number> --body "Frontend implementation: department-of-veterans-affairs/vets-website#12345"

# Search issues across VA organization
gh search issues --owner department-of-veterans-affairs "collaboration cycle"
```

## Automation & Integration

- **Project Boards**: Issues automatically added to team project boards
- **Slack Integration**: Updates posted to relevant team channels
- **Label-based Routing**: Different labels trigger different team notifications
- **Epic Tracking**: Issues linked to epics for portfolio management

## Best Practices for Copilot

1. **For bugs: Always ask about team/product area first** - Guide users through template selection process before creating bug issues
2. **Use appropriate templates** based on work type and team
3. **Provide template browser link** when users are unsure: [Browse all issue templates](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/.github/ISSUE_TEMPLATE)
4. **Fall back to Blank issue template** when team/product area is unknown
5. **Include all required labels** (team, practice area, product area)
6. **Reference related documentation** in the va.gov-team repo
7. **Link to external implementation** when applicable
8. **Follow VA.gov naming conventions** (lowercase, hyphens)
9. **Consider collaboration cycle** requirements for user-facing changes
10. **Include accessibility considerations** where relevant
11. **Reference existing epics** for tracking and context
12. **Use proper VA.gov terminology** (Veterans, OCTO-DE, VFS teams)
13. **Check for existing similar issues** before creating new ones
