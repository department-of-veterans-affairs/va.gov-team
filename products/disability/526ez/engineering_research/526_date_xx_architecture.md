# Architecture Decision Record: Frontend Date Handling Implementation for 526EZ Form

## Overview

The 526EZ frontend was permitting malformed or partial dates (e.g., `XXXX-XX-XX`) to reach the backend.
This ADR documents the implemented solution: a centralized date handling module that standardizes parsing, formatting, and validation across the entire form.

- Owner: Frontend Team
- Date: 2025-08-19
- Related Docs:
  - [Discovery Document #110024](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110024)
  - [Original Issue #108295](https://github.com/department-of-veterans-affairs/va.gov-team/issues/108295)
  - [Implementation PR #38080](https://github.com/department-of-veterans-affairs/vets-website/pull/38080)

## Goals Achieved

- [ ] Blocked submission of invalid toxic-exposure dates with data purge on opt-out
- [ ] Standardized date operations via centralized utility module
- [ ] Established comprehensive test coverage for all date scenarios
- [ ] Created clear migration path to modern JS date APIs

## Problem Statement Addressed

The 526EZ form allowed inconsistent and malformed date values due to:

- Missing validation in newer (V3) components
- Fragmented and inconsistent use of date utilities
- Partial dates not being cleaned or formatted correctly before submission

This resulted in backend rejections, broken submissions, and additional support/debugging cycles.

## Technical Solution

### Decision: Centralized Date Module with MomentJS

Created a comprehensive date handling module at `src/applications/disability-benefits/all-claims/utils/dates/` that:

- **Continues using MomentJS** while planning for Temporal API migration
- **Centralizes all date operations** in a single, well-organized module
- **Handles partial dates** with explicit support for `YYYY-XX-XX`, `XXXX-MM-XX`, and `YYYY-MM-XX` formats
- **Integrates with platform utilities** to avoid duplication
- **Provides product-specific operations** for unique business requirements

### Module Structure

```text
dates/
├── index.js              # Public API exports
├── formatting.js         # Date formatting and core utilities
├── comparisons.js        # Date comparison functions
├── validations.js        # Date validation functions
├── product-specific.js   # Product-specific date operations
├── form-integration.js   # VA forms system integration
└── README.md            # Module documentation
```

## Implementation Details

### Core Capabilities Delivered

- **Formatting Functions**: `formatDate()`, `formatDateRange()`, `formatMonthYearDate()`, `formatDateShort()`, `formatDateLong()`
- **Validation Functions**: `isValidFullDate()`, `validateAge()`, `validateSeparationDate()`, `validateServicePeriod()`
- **Comparison Functions**: `isDateBefore()`, `isDateAfter()`, `isDateSame()`, `isDateBetween()`, `compareDates()`
- **Partial Date Handlers**: `isMonthOnly()`, `isYearOnly()`, `isYearMonth()`
- **Form Integration**: `dateFieldToISO()`, `isoToDateField()`, `validateFormDateField()`, `validateFormDateRange()`
- **Product-Specific**: PTSD, toxic exposure, unemployability, hospitalization, and evidence date operations

### Key Validations Implemented

#### Separation Date Validation

- BDD claims: Must be 90-180 days from today
- Non-BDD: Must be in past or within allowed future window
- Reserve/Guard: Specific rules based on service type

#### Service Period Validation

- All dates must fall within service periods
- Treatment dates validated against earliest service date
- Title 10 activation dates for reserves validated

#### Toxic Exposure Validation

- Gulf War 1990 period: Aug 2, 1990 - Jul 31, 1991
- Gulf War 2001 period: On or after Sep 11, 2001
- Proper data cleanup on opt-out scenarios

#### Age and Temporal Validation

- 13th birthday requirement for certain fields
- Future date restrictions where appropriate
- 180-day future limit for separation dates

## Technical Analysis

### What Was Fixed

- **Root Cause**: V3 components bypassed schema validation, allowing `XX` formatted dates through
- **Solution**: Added validation hooks at multiple levels with centralized validation logic
- **Testing**: Comprehensive unit tests for all date paths including edge cases

### Frontend-Backend Validation Mismatch Challenge

#### The Architectural Problem

The platform is undergoing a significant architectural shift that creates validation synchronization challenges:

1. **Moving Away from vets-json-schema**: The platform team is migrating from the centralized vets-json-schema approach that previously ensured frontend and backend validation consistency
2. **Component Library Divergence**: The new V3 component library no longer uses the same validation rules as the backend Rails API (vets-api)
3. **Loss of Validation Federation**: The previous model where React frontend (vets-website) and Rails backend (vets-api) shared validation definitions is being deprecated

#### Specific Date Validation Mismatches Found

During implementation, we discovered several validation mismatches between frontend and backend:

- **Partial Date Acceptance**: Frontend allowed `XXXX-XX-XX` formats that backend rejected
- **Date Range Logic**: Frontend validated date ranges differently than backend expectations
- **Service Period Boundaries**: Frontend allowed dates outside service periods that backend would reject
- **Future Date Limits**: Different thresholds for "too far in future" between FE (180 days) and BE (varies by field)

#### Implications for 526EZ Form

This architectural shift means:

1. **Manual Synchronization Required**: Teams must manually ensure frontend and backend validations match
2. **Increased Testing Burden**: Need comprehensive integration tests to catch mismatches
3. **Higher Risk of Production Issues**: Validation differences only discovered when forms reach backend
4. **Documentation Critical**: Must document expected validations for both frontend and backend teams

#### Our Mitigation Strategy

To address these challenges in the date module:

1. **Defensive Validation**: Implemented stricter frontend validation to prevent any questionable data from reaching backend
2. **Explicit Format Handling**: Clear handling of partial date formats with explicit validation rules
3. **Backend Alignment Testing**: Added integration tests that verify backend acceptance of all date formats
4. **Documentation of Rules**: Comprehensive documentation of all validation rules in module README

### Why MomentJS (Not date-fns or Luxon)

- **Already in use**: Extensive existing code uses MomentJS
- **Feature complete**: Has all calendar operations needed
- **Risk mitigation**: Switching libraries mid-fix would introduce risk
- **Clear migration path**: Centralized module makes future Temporal API migration straightforward

## Test Coverage

### Comprehensive Testing Implemented

- [ ] All date formats including partial dates
- [ ] Edge cases (leap years, dates before 1900, non-existent dates)
- [ ] Product-specific validations (PTSD, toxic exposure, etc.)
- [ ] Form integration scenarios
- [ ] Validation error messages
- [ ] Opt-out data cleanup scenarios

### Test Files Created/Updated

- Multiple unit test specs for form pages
- Date utility function tests
- Integration tests for form submission
- Validation rule tests for each date field type

## Technical Debt & Future Work

### Current Technical Debt

```javascript
/**
 * TODO: tech-debt(you-dont-need-momentjs): Waiting for Node upgrade to support Temporal API
 * @see https://github.com/department-of-veterans-affairs/va.gov-team/issues/110024
 */
/* eslint-disable you-dont-need-momentjs/no-import-moment */
```

- MomentJS deprecation warnings throughout module
- ESLint rules disabled with documented reasons
- Waiting for Node.js v20+ for Temporal API support

### Migration Plan to Temporal API

When Node.js is upgraded to v20+ and Temporal API is stable:

1. Replace internal `safeMoment()` utility with Temporal equivalents
2. Update each function to use Temporal API
3. Maintain same public API to minimize breaking changes
4. Update tests to verify compatibility
5. Remove MomentJS dependency and ESLint disables

## Outcomes & Impact

### Positive Outcomes

- **Prevented malformed dates** from reaching backend
- **Standardized approach** across entire 526EZ form
- **Improved maintainability** with centralized logic
- **Better test coverage** with focused test files
- **Clear migration path** to Temporal API
- **Reduced support burden** from date-related issues

### Trade-offs Accepted

- Continued MomentJS dependency despite deprecation
- ESLint warnings that must be disabled
- Technical debt until Temporal API migration

### Performance Impact

- No negative performance impact observed
- MomentJS performance remains acceptable
- Existing code continues to work (backward compatible)

## Architectural Considerations

### Platform Evolution and Its Impact

The VA platform is undergoing fundamental architectural changes that significantly impact form validation:

#### The vets-json-schema Deprecation

Historically, vets-json-schema provided a single source of truth for validation rules shared between:

- Frontend form validation (vets-website)
- Backend API validation (vets-api)
- Form configuration and schema definitions

This ensured that validation rules were automatically synchronized. However, this approach is being deprecated in favor of:

- Component-based validation in the frontend
- Service-specific validation in the backend
- Looser coupling between frontend and backend systems

#### Component Library V3 Migration

The new V3 component library introduces:

- Web components that don't integrate with traditional React validation
- Component-level validation that bypasses schema definitions
- Different validation timing and error handling patterns

This creates gaps where:

- Components may accept input that backends reject
- Error messages differ between frontend and backend
- Validation rules drift over time without detection

### Strategic Recommendations for Platform Team

Based on our experience with date validation challenges, we recommend:

- **Validation Contract Testing**: Establish contract tests between frontend and backend to catch validation mismatches early
- **Shared Validation Library**: Consider a new shared validation library that both frontend and backend can consume
- **Validation Documentation Standard**: Require explicit documentation of all validation rules with examples
- **Integration Test Suite**: Maintain a comprehensive suite testing form submissions end-to-end
- **Validation Audit Process**: Regular audits to identify and fix validation drift between systems

## Lessons Learned

- **Centralization is key**: Having dates scattered across the codebase made bugs harder to track
- **Partial dates need explicit handling**: `XX` formats must be considered valid in certain contexts
- **Platform utilities should be leveraged**: Avoid reinventing existing functionality
- **Test coverage prevents regressions**: Comprehensive tests caught issues early
- **Documentation prevents confusion**: Clear module structure and README essential
- **Validation federation loss is costly**: Moving away from shared schemas increases maintenance burden significantly
- **Component library migrations need validation strategy**: V3 components introduced validation gaps that weren't anticipated
- **Frontend must be defensive**: With backend validation no longer guaranteed to match, frontend must over-validate
- **Integration testing is critical**: Unit tests alone won't catch frontend-backend mismatches
- **Architectural changes need migration guides**: Teams need clear guidance when fundamental patterns change

## Broader Implications and Risks

### System-Wide Impact of Validation Divergence

The date validation issues discovered are symptomatic of a larger architectural challenge:

- **Forms Beyond 526EZ at Risk**: Other forms using V3 components face similar validation mismatch risks
- **Increased Support Burden**: More failed submissions reaching backend means more support tickets
- **Veteran Experience Degradation**: Users may fill out forms correctly only to have submissions rejected
- **Technical Debt Accumulation**: Each form team implementing their own validation increases overall complexity

### Risk Mitigation Recommendations

#### Short Term Priority

- Audit all V3 component usage for validation gaps
- Document all known validation mismatches
- Implement frontend over-validation as defensive measure
- Add monitoring for backend rejection patterns

#### Medium Term Priority

- Develop validation contract testing framework
- Create shared validation rule repository
- Establish validation synchronization process
- Build automated validation drift detection

#### Long Term Priority

- Re-evaluate architectural decision to deprecate vets-json-schema
- Consider new validation federation approach
- Implement platform-wide validation standards
- Create validation governance process

## Next Steps

- [x] Phase 1: Toxic-exposure validation and opt-out cleanup
- [x] Phase 2: Centralized date utility implementation
- [x] Phase 3: Test coverage for all date fields
- [ ] Phase 3.5: Migrate to `date-fns`
- [ ] Phase 4: Monitor for edge cases in production
- [ ] Platform: Address validation federation gap between frontend and backend
- [ ] Documentation: Create validation rules matrix for all form fields
- [ ] Audit: Review other forms for similar validation mismatches

## References

- [MomentJS Documentation](https://momentjs.com/)
- [date-fns Documentation](https://date-fns.org/)
- [VA Platform Date Utilities](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/utilities/date)
- [VA Forms System Documentation](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system)
