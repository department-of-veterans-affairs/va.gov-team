# Known Deficiencies - 526EZ Form and Related Flows

## Overview
This document outlines known deficiencies and issues discovered during the Copy of Submissions Bug Bash review. These issues affect the 526EZ form and related flows.

## Current Deficiencies

### Missing Form Sections
1. **Separation Pay**
   - Description: Separation Pay section is missing from the form
   - Issue Reference: [#122799](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122799)

2. **Retirement Pay**
   - Description: Retirement Pay section is missing from the form
   - Issue Reference: [#122800](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122800)

3. **Military Service History**
   - Description: Military separation location not showing for Reserve and National Guard
   - Issue Reference: [#122801](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122801)

4. **Housing Situation**
   - Description: Housing situation information is missing
   - Issue Reference: [#122803](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122803)
  
### Page Rendering Issues
1. **Upload Widget**
   - Description: pages with upload widget can break submissions confirmation page 
   - Issue Reference: [#120150](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120159)
   - PR in review

### UI/UX Issues
1. **Toxic Exposure Conditions Page**
   - Description: Page shows even when unanswered
   - Issue Reference: [#122810](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122810)

2. **Accessibility Issue**
   - Description: Bug in Copy of Submission accordion list structure
   - Issue Reference: [#122820](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122820)

### Data Display Issues
1. **Private Medical Facility Information**
   - Description: Condition treated at the private medical facility isn't listed under the facility information
   - Issue Reference: [#122840](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122840) (Marked as duplicate)

### E2E Testing
1. **Cypress Test**
  - Description: Create Cypress test for 526ez submission confirmation page
  - Issue Reference: [#119907](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119907)
  - Test has been created and work is in progress

### Investigation Required
1. **General Questions**
   - Description: Discovery of raised questions requiring investigation
   - Issue Reference: [#122798](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122798)
   - Type: Spike/Investigation needed

## Notes
- All issues are tracked in the parent epic [#122791](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122791)
- Related to parent issue [#119075](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119075) (Copy of submissions Bug bash)
- These deficiencies are actively being tracked and prioritized for resolution
- Some issues may require additional refinement before implementation

## Status
- Current State: Under Review
- Last Updated: October 27, 2025
