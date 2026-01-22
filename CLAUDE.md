# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

The VA.gov Team Repository is a documentation and project management repository for the Veterans Affairs digital platform. It contains non-code documents, files, and issue tracking across platform and teams building VA.gov products. This repository serves Veterans, their families, and caregivers by supporting the development of VA.gov services.

**CRITICAL SECURITY NOTE**: This is a public, open-source repository. Never store sensitive information (credentials, PII, secrets) here.

## Repository Structure

### Key Directories

- **`/products/`** - All Veteran Facing Services (VFS) documentation, including features and products on VA.gov
- **`/platform/`** - Resources, templates, guides, and processes that support VFS development
- **`/teams/`** - Internal resources for teams building on or supporting VA.gov
- **`/docs/`** - General documentation

### Decision Reviews Focus Area

The repository has extensive documentation for the Decision Reviews product line, located in `/products/decision-reviews/`:
- Higher-Level Review (HLR)
- Notice of Disagreement (NOD) 
- Supplemental Claims (SC)

Each contains:
- Engineering documentation with architecture diagrams and sequence flows
- Research findings and user testing results
- Product guides and release plans
- Frontend/backend interaction documentation

## Prerequisites and Setup

### Git LFS Requirement
**MANDATORY**: Install [git-lfs](https://git-lfs.github.com/) locally before cloning this repository. The repo contains large files (PDFs, images, videos) that require Git LFS.

```bash
# Install git-lfs first
brew install git-lfs  # macOS
# or visit https://git-lfs.github.com/ for other platforms

# Then clone the repository
git clone <repository-url>
```

## Common Development Tasks

### Documentation Navigation
- **Knowledge Hub**: Primary entry point at https://depo-platform-documentation.scrollhelp.site/
- Use the platform documentation for comprehensive guides and processes

### Project Management
- Issues are tracked in GitHub with specific templates for different types of work
- Teams use Agile ceremonies with sprint objectives aligned to OKRs
- VSP Collaboration Cycle is required for all initiatives

### Research and Design Workflow
- Initiative Briefs are created for new projects requiring discovery
- Product Outlines serve as steady-state product descriptions  
- User research findings are documented with conversation guides and research plans
- All work follows accessibility-first principles (WCAG 2.1 AA standards)

## Architecture Patterns

### Decision Reviews Applications
The Decision Reviews forms follow a consistent pattern:
- **Frontend**: React-based forms integrated with VA.gov platform
- **Backend**: vets-api communicating with Lighthouse APIs
- **Architecture**: Documented with sequence diagrams and data flow diagrams for each form type
- **Monitoring**: DataDog dashboards and alerts for each application

### Documentation Standards
- Engineering READMEs contain overview, details, and interaction documentation
- Research includes conversation guides, research plans, and findings
- Product documentation includes guides, release plans, and metrics
- All major initiatives have corresponding initiative briefs

## Key Files and Templates

### Templates Available
- Initiative Brief Template for new projects
- Product Outline Template for product descriptions  
- Epic and User Story templates in GitHub issues
- Research templates (conversation guides, research plans)
- VSA Product Management templates and examples

### Critical Documentation
- Repository guidelines at `/platform/working-with-vsp/orientation/repo-guidelines.md`
- VSP Collaboration Cycle documentation 
- Product Management Handbook at `/teams/vsa/product/README.md`

## Development Principles

### VA-Specific Requirements
- **Accessibility First**: All work must meet WCAG 2.1 AA standards
- **Security**: Never commit credentials or PII; use environment variables
- **Performance**: Consider Veterans on slow connections and mobile devices
- **Plain Language**: Use clear, understandable language for all user-facing content

### Quality Standards
- Documentation should be self-explanatory with examples
- Research findings must include actionable insights
- All initiatives require proper discovery and validation
- Changes follow established review processes

## Working with Teams

### Team Structure
- VSA (Veteran Services Administration) teams work on specific product areas
- Teams collaborate through Slack channels (e.g., #vsa-product)
- Cross-functional teams include Product, Design, Engineering, and Research

### Communication
- Team of Teams (ToT) meetings for cross-team coordination
- Sprint objectives aligned with quarterly OKRs
- Impact reviews conducted after major initiatives

## Repository Access

### New Contributors
- VA.gov Platform team members: Contact your Program Manager
- VFS team members: Complete Platform Orientation first
- All contributors must complete Platform Orientation tickets in GitHub

This repository serves as the central hub for VA.gov product development documentation, ensuring all teams can effectively build services that serve Veterans and their families.