# README Reorganization Proposal - Notes

## Overview

This document explains the reorganization approach for the Decision Reviews README based on the Slack feedback.

## Key Changes Addressing Slack Feedback

### 1. **Clear Information Hierarchy** (Grace's main concern)

**Problem:** Current README mixes product, design, and engineering content without clear organization.

**Solution:** 
- Created distinct sections organized by **audience** rather than content type
- Clear visual hierarchy with emojis and consistent formatting
- Separated concerns into:
  - Product Overview (high-level, accessible to all)
  - Getting Started (onboarding focused)
  - Team Resources by Discipline (deep dives)
  - Operations (day-to-day work)

### 2. **Engineering Utility** (Grace: "basically provides zero utility for a engineer new to the project")

**Problem:** Current engineering section mostly links out to other docs.

**Solution:**
- Added concrete, actionable engineering onboarding section
- Included actual code snippets for getting started
- Provided local file paths instead of only external links
- Created clear "Week 1" and "Week 2" onboarding paths

### 3. **Target Audience Clarity** (xian's question)

**Problem:** Unclear who the main users are.

**Solution:**
- Added explicit "Purpose & Audience" section at the very top
- Identified primary audience: **New team members**
- Secondary audiences: Cross-functional teams, stakeholders
- Content prioritized for primary audience

### 4. **Reduced External Dependencies**

**Problem:** Too many links to external docs that may move or become outdated.

**Solution:**
- Moved critical information into local `/docs` subdirectories
- External links reserved for truly external resources (Mural, TestRail, etc.)
- Created placeholder structure for local documentation

## Proposed Information Architecture

```
README.md (this proposal)
├── 🎯 Product Overview (accessible to all)
├── 🚀 Getting Started (new team members)
├── 👥 Team Resources by Discipline
│   ├── Product Management
│   ├── Engineering
│   ├── Design
│   └── Research
└── 📋 Operations (day-to-day work)

/docs/
├── /product/
│   ├── strategy.md
│   ├── analytics.md
│   └── playbook.md
├── /engineering/
│   ├── setup.md
│   ├── architecture.md
│   ├── apis.md
│   └── error-codes.md
├── /design/
│   ├── patterns.md
│   └── accessibility.md
├── /research/
│   ├── research-plan-template.md
│   └── synthesis-guide.md
└── /operations/
    └── triage-process.md
```

## Benefits of This Approach

1. **Faster Onboarding**: New team members have a clear path from day 1
2. **Discipline-Specific Paths**: Each role can quickly find their relevant information
3. **Reduced Cognitive Load**: Information is chunked and organized logically
4. **Maintainable**: Local docs can be updated with the codebase
5. **Scannable**: Visual hierarchy makes it easy to find information quickly

## Next Steps for Implementation

1. **Get Team Feedback**: Share with Grace, Lauren, and team for input
2. **Create Doc Structure**: Set up the `/docs` subdirectories
3. **Migrate Content**: Move detailed content from external links to local docs
4. **Update Links**: Ensure all links point to correct locations
5. **Add Real Data**: Replace placeholder links with actual resources

## Questions for the Team

1. Are these the right primary sections for organization?
2. What's missing from each discipline's section?
3. Should we include more inline content vs. links?
4. What are the most critical pieces of information for Week 1 onboarding?
5. Should we version this README or maintain a single source of truth?

## Migration Strategy

To avoid disruption:
1. Keep the current README in place
2. Build out the new structure in parallel
3. Get team review and buy-in
4. Switch over during a planned sprint
5. Archive the old README for reference
