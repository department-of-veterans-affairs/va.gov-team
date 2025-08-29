# Requirements Management System Improvement Plan

## Executive Summary

This plan addresses key pain points in the current requirements management system while preserving what works well. The solution eliminates manual duplication, improves organization, and adds product-focused reporting capabilities.

**Key Improvements:**

- **Automated sync** between individual requirements and index  
- **Product-focused organization** for better stakeholder communication  
- **On-demand report generation** in multiple formats  
- **PR-based workflow** maintaining team review process

---

## Current State Analysis

### What Works Well

- Consistent requirement formatting and metadata  
- Centralized index for overview  
- PR-based review process  
- Clear requirement IDs and tracking

### Pain Points Identified

- Manual duplication leading to sync issues during updates  
- Mixed organization makes product-focused views difficult  
- Limited export options for stakeholder reporting  
- Table formatting limitations in GitHub markdown

---

## Proposed Solution Architecture

### 1\. Reorganized Folder Structure

**New Structure (Product-First Organization):**

```
requirements/
├── index.md (auto-generated)
├── authentication-general/
│   ├── functional/
│   │   └── ien-login-validation.md
│   └── security/
├── mhv-deprecation-interstitial/
│   ├── functional/
│   │   ├── REQ-0001.md
│   │   └── REQ-0002.md
│   ├── security/
│   │   └── REQ-0003.md
│   └── non-functional/
│       └── REQ-0004.md
├── login-gov-risc-integration/
│   └── functional/
│       └── REQ-0007.md
├── security-general/
│   └── security/
│       └── jwt-icn-integrity.md
└── platform-infrastructure/
    ├── technical/
    └── monitoring/
```

**Benefits:**

- Product managers can easily find all requirements for their initiative  
- Cross-functional requirements clearly categorized  
- Maintains type-based organization within products  
- Supports both product-focused and type-focused navigation

### 2\. Enhanced Requirement Metadata

**Updated Requirement Template:**

```
# REQ-XXXX: [Title]

## Description
[Requirement description]

## Requirement Details
[Detailed requirements]

## Metadata
- **Product**: [product-name]
- **Type**: [Functional/Security/Non-functional/Technical/Monitoring]
- **Status**: [Draft/In Progress/Under Review/Completed/Deprecated]
- **Priority**: [Critical/High/Medium/Low]
- **Created**: [YYYY-MM-DD]
- **Last Updated**: [YYYY-MM-DD]
- **Assignee**: [team/person responsible]

## Related Areas
[Cross-references and dependencies]
```

### 3\. Automated Index Management

**GitHub Actions Workflow:**

- **Trigger**: Any change to `*.md` files in requirements folders  
- **Process**:  
  1. Scans all requirement files  
  2. Extracts metadata from each file  
  3. Generates updated index.md  
  4. Creates PR with changes  
  5. Uses PR template for review checklist

**PR Template Includes:**

- [ ] Index updates reflect actual requirement changes  
- [ ] No requirements were accidentally removed  
- [ ] Status changes are accurate  
- [ ] Product assignments are correct

### 4\. Product Report Generation System

**GitHub Actions Workflow (Manual Trigger):**

- **Location**: Actions tab → "Generate Product Requirements Report"  
- **Input**: Dropdown menu of available products  
- **Output**: Downloadable artifacts containing:  
  - **CSV file**: All requirements with full metadata for analysis  
  - **Markdown file**: Formatted report for documentation  
  - **Summary file**: High-level statistics and status overview

**CSV Output Columns:**

```
ID, Title, Product, Type, Status, Priority, Created, Last_Updated, 
Assignee, Description, File_Path
```

**Markdown Output Sections:**

- Executive Summary  
- Requirements by Status  
- Requirements by Type  
- Detailed Requirement List  
- Dependencies and Cross-references

---

## Implementation Plan

### Phase 1: Content Migration (Week 1\)

1. **Restructure existing requirements**  
   - Create new product-based folder structure  
   - Move existing requirements to new locations  
   - Add product metadata to all requirements

   

2. **Update requirement templates**  
   - Add new metadata fields  
   - Standardize format across all files  
   - Generate initial automated index

3. **Start adding products and requirements**  
- Add all “products”  
- Add requirements currently documented from other sources  
- Initiate process to fill in requirements for products that are not already documented


### Phase 2: Automation Setup (Week 2\)

1. **Create GitHub Actions workflows**  
   - Index auto-update workflow  
   - Product report generation workflow  
   - PR templates

   

2. **Test automation with sample requirements**  
   - Verify index generation works correctly  
   - Test report generation with existing data  
   - Validate PR creation process

### Phase 3: Process Integration (Week 3\)

1. **Team training and documentation**  
   - Document new folder structure  
   - Create workflow guides  
   - Train team on report generation

   

2. **Process refinement**  
   - Gather feedback on automation  
   - Adjust workflows based on usage  
   - Fine-tune report formats

### Phase 4: Enhancement (Week 4\)

1. **Advanced features**  
   - Cross-product dependency tracking  
   - Status change notifications  
   - Integration with project management tools (if needed)

---

## Success Metrics

### Short-term (1 month)

- Zero incidents of index/requirement file sync issues  
- 100% of new requirements include product metadata  
- Successful generation of first product-focused reports

### Medium-term (3 months)

- 50% reduction in time spent on requirement status compilation  
- Positive team feedback on new organization structure  
- Regular use of automated report generation

### Long-term (6 months)

- Improved stakeholder satisfaction with requirement reporting  
- Expanded use of CSV exports for project tracking  
- Potential expansion to other documentation areas

---

## Next Steps

1. **Approve plan and timeline**  
2. **Set up development branch for testing**  
3. **Create initial GitHub Actions workflows**  
4. **Begin Phase 1 implementation**  
5. **Schedule team review and feedback session**
