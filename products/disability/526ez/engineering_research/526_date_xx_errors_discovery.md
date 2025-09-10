# Discovery: [Frontend Date Handling Improvements for 526EZ Form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110024)

## Overview

The 526EZ frontend currently permits malformed or partial dates (e.g., `XXXX-XX-XX`) to reach the backend.
This discovery investigates the issue, validates the hot spot (toxic-exposure fields), and proposes a standardized approach to date handling that can be extended across the form.

- Owner: Justin Linn <@LinnJS>
- Date: 08/19/2025
- Related Docs: [526 'XX' Data Issue - Discovery (Frontend)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/108295), [Date XX Error Architecture Document](./526_date_xx_architecture.md)

## Goals

- Block submission of invalid toxic-exposure dates and purge data on opt-out
- Standardize parsing, formatting, and validation for all date fields via a shared utility
- Establish test coverage and documentation to prevent regressions and ease migration to modern JS date APIs

## Problem Statement

The 526EZ form allows inconsistent and malformed date values to pass through due to:

- Missing validation in newer (V3) components
- Fragmented and inconsistent use of date utilities
- Partial dates not being cleaned or formatted correctly before submission

This has resulted in backend rejections, broken submissions, and additional support/debugging cycles.

## Discovery Questions

- Which date fields exist in the 526EZ form and how are they currently validated?
- Where are partial or malformed dates entering the submission payload?
- What utilities or libraries are currently handling dates across the frontend?
- What test coverage exists today around date handling and what are the gaps?

## Constraints

- MomentJS is fully featured but deprecated
- Temporal API is the official successor but only stable in Node 20+
- Luxon would add a new dependency not currently in the repo
- date-fns exists in the repo but lacks comprehensive calendar features

## Ideas / Approaches

- Option 1: **Continue using MomentJS** with a standardized utility layer to ensure consistent parsing/validation
- Option 2: **Adopt `date-fns` and refactor existing usage** (lighter, tree-shakeable, already in repo) - **SELECTED**
- Option 3: Add `Luxon`, but would increase complexity with limited additional value
- Future Option: Migrate to `Temporal API` once Node 20+ and modern browsers are baseline

## Research / Benchmarks

- `MomentJS`: Already used in this form, feature-complete, but deprecated
- `Intl.DateTimeFormat`: Native JS, useful for formatting only
- `Temporal`: Successor to MomentJS, but requires Node 20+ (future consideration)
- `Luxon`: Modern, but new dependency and complexity
- `date-fns`: Present in repo, but limited for complex calendar logic

## Test Gap Analysis

- Gaps:
  - Incomplete/partial dates (e.g., missing month/day) are not blocked
  - Toxic-exposure opt-out retains invalid data in payload
  - Inconsistent validation rules across V3 components

- Proposed Fixes:
  - Add regression tests for all date fields
  - Ensure opt-out scenarios fully clear data before submission
  - Add schema-level rules for V3 components

## Technical Analysis of What Went Wrong

- **Change that introduced the bug:** Newer (V3) components bypassed schema-based validation, allowing malformed data through
- **Symptom:** Backend rejections due to `XX`-style malformed dates in toxic-exposure fields
- **Concrete fix needed:**
  - Add validation hooks and form cleanup logic for toxic exposure
  - Centralize date handling in `dateUtils.ts` (MomentJS for now)
  - Refactor existing fields to use this shared utility

## Recommendations

- Standardize on **date-fns** in a centralized utility layer (`dateUtils.ts`)
- Add unit and integration tests for all date paths, including partial/invalid inputs
- Refactor V3 components to enforce schema-level rules
- Add logging/monitoring to track malformed date attempts
- Consider migration path to **Temporal API** once Node 20+ is baseline (long-term)

## Open Questions / Risks

- Open Question: Should partial dates be auto-corrected (cleaned) or hard-blocked?
- Open Question: Are there any backend constraints that must align with frontend validation (e.g., earliest service dates)?
- Risk: Continuing to rely on MomentJS may prolong dependency on deprecated library
- Risk: Node upgrade timeline may delay adoption of Temporal API

## Next Steps

- Audit all 526EZ date fields and build validation matrix
- Implement Phase 1: toxic-exposure validation and opt-out cleanup
- Implement Phase 2: centralized date utility using date-fns and form-wide standardization
- Add test coverage for partial and invalid dates across all form sections
- Document ADR and migration plan for date-fns implementation
