# 21-10210 Form inheritance discovery

## Now (12/15/2025)

### Table of Contents

- [Design Findings](#design-findings)
- [Technical Findings](#technical-findings)
- [Level of Effort](#level-of-effort)
- [Next](#next)

## Design Findings

Category: Imposter Components

- Back/Continue buttons not DST components → Open tech Debt
- Text inputs not va-text-input [#94347](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94347#issue-2566774275) → Open Debt
- Text areas not va-textarea [#94349](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94349#issue-2566774375) → Open Debt
- Date inputs not va-date [#94348](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94348#issue-2566774326) → Open Debt
- Radios not va-radio [#94346](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94346#issue-2566774219) → Open Debt
- Colab Cycle feedback: Design components and patterns in code are outdated. [#60737](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60737) → Open Debt

Category: Content

- Missing punctuation in questions [#94360](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94360) → Open Debt
- Extraneous comma in submission [#94358](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94358) → Open Debt
- Misplaced punctuation in intro (#94357) → Open Debt Figma

Category: Outdated Patterns

- DOB should use memorable date (#60737) → Open Debt
- Minimal header implementation → Done
- Upgrade to v3 components → Done

Category: Documentation Debt

- Figma intro text not using standard styles → Open Debt
- Design and Engineering content is in sync in staging → Open Debt

Category: Monitoring

- Colab Cycle feedback: 3 Audit current security controls [#495](https://github.com/department-of-veterans-affairs/va.gov-team/issues/495)

## Technical Findings

Detailed technical analysis of VA Form 21-10210 codebase.

### Pre-Discovery Issues

Issues identified before this discovery and already tracked.

### Imposter Components (7 HIGH)

| Component | Location | Design Status | Issue |
|-----------|----------|---------------|-------|
| Start your application link | Intro | Done | - |
| Back/Continue buttons | Global | Done | [Slack](https://dsva.slack.com) |
| Statement of truth | Review and submit | Not needed | [#94350](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94350) |
| Text area component | Multiple | Not needed | [#94349](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94349) |
| VA date component | Multiple | Not needed | [#94348](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94348) |
| Text input component | Several | Not needed | [#94347](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94347) |
| VA radio component | Several | Not needed | [#94346](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94346) |

### Content Edits (4 MEDIUM)

| Item | Location | Issue |
|------|----------|-------|
| Missing punctuation | Several form labels | [#94360](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94360) |
| Extraneous comma | Submission screen | [#94358](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94358) |
| Misplaced punctuation | Intro paragraph | [#94357](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94357) |
| Em dash usage | Intro paragraph | [#94356](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94356) |

### Design Pattern Updates (3 MEDIUM)

| Item | Location | Issue |
|------|----------|-------|
| Memorable date | DOB fields | [#60737](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60737) |
| Minimal header | Global | Done |
| v3 components | Global | Done |

### Documentation (1 LOW)

| Item | Location |
|------|----------|
| Figma text styling + va-introtext CSS | Intro |

## Discovery Findings

### 1. Code Quality & Legacy Patterns

#### 1.1 Deprecated UI Patterns (CRITICAL)

**Files:**

- `pages/claimantPersInfo.js:5`
- `pages/vetPersInfo.js:4`
- `pages/witnessPersInfo.js:1`

**Issue:** Uses `fullNameDeprecatedUI` from `../../shared/definitions/rjsfPatterns`.

**Impact:** Deprecated pattern that should be migrated to modern web-component-patterns.

#### 1.2 Mixed Redux Patterns (HIGH)

**File:** `containers/ConfirmationPage.jsx:3-4, 14-15, 59-65`

**Issue:** Uses both `connect(mapStateToProps)` HOC and `useSelector` hook in same component.

```javascript
import { connect, useSelector } from 'react-redux';
const form = useSelector(state => state.form || {});
// ...
function mapStateToProps(state) {
  return { form: state.form };
}
export default connect(mapStateToProps)(ConfirmationPage);
```

**Impact:** Redundant code; `mapStateToProps` is unnecessary.

#### 1.3 Mock Data in Production Config (HIGH)

**File:** `config/form.js:35-41`

```javascript
import testData from '../tests/e2e/fixtures/data/noStmtInfo.json';
const mockData = testData.data;
// ...
initialData: !!mockData && (environment.isLocalhost() || environment.isDev()) && !environment.isTest() ? mockData : undefined,
```

**Impact:** Test fixtures in production bundle.

#### 1.4 Dynamic Schema Mutation (HIGH)

**File:** `pages/claimantType.js:34-35`

```javascript
// eslint-disable-next-line no-param-reassign
uiSchema['ui:options'].labels = labels;
```

**Impact:** Mutates parameter directly.

#### 1.5 Phone Validation Duplication (MEDIUM)

**Files:** `definitions/form-definitions.js`, `*ContInfo.js` (3 files)

**Issue:** Phone pattern defined once but validation messages repeated.

#### 1.6 Inconsistent Error Messages (MEDIUM)

**Issue:** Identical error messages duplicated across contact info pages.

### 2. Imposter Components (Discovery)

#### 2.1 SSN Input (HIGH)

**Files:** `pages/vetIdInfo.js:8-10`, `pages/claimantIdInfo.js:7`

**Current:** Legacy `ssnUI` from `platform/forms-system/src/js/definitions/ssn`

**Should be:** `ssnUI()` from `platform/forms-system/src/js/web-component-patterns`

#### 2.2 Email Input (HIGH)

**Files:** `pages/witnessContInfo.js:24-30`, `pages/vetContInfo.js:10, 30-32`, `pages/claimantContInfo.js:10, 30-32`

**Current:** Uses `lodash/omit` to customize email UI from platform.

**Should be:** `emailUI()` from web-component-patterns with factory parameters.

#### 2.3 Alert Box (HIGH)

**File:** `containers/IntroductionPage.jsx:15-20`

**Current:**

```jsx
<div className="usa-alert usa-alert-info schemaform-sip-alert">
  <div className="usa-alert-body">...</div>
</div>
```

**Should be:**

```jsx
<va-alert status="info" visible>
  <p>...</p>
</va-alert>
```

#### 2.4 Checkbox Group (HIGH)

**File:** `pages/witnessPersInfo.js:7,15`

**Current:** `GroupCheckboxWidget` custom widget wrapper.

**Should be:** `checkboxGroupUI()` from web-component-patterns.

### 3. Accessibility

#### 3.1 Heading Hierarchy (HIGH)

**File:** `components/VetPersInfoUiTitle.jsx:13, 20, 25`

**Issue:** Using `<legend>` with `vads-u-font-size--h5` for semantic headings.

**Impact:** May confuse assistive technology.

#### 3.2 Autocomplete Attributes (HIGH)

**Files:** `pages/statement.js:13`, `pages/witnessOtherRelationship.js:9`

**Issue:** `'ui:autocomplete': 'off'` prevents browser auto-fill.

#### 3.3 Shadow DOM Testing (MEDIUM)

**File:** `tests/pages/witnessPersInfo.unit.spec.jsx:27-29`

**Note:** GroupCheckboxWidget fields in shadow DOM are unselectable by tests.

### 4. Testing Coverage

#### 4.1 Limited E2E Coverage (HIGH)

**File:** `tests/e2e/10210-lay-witness-statement.cypress.spec.js`

**Issue:** Only 1 E2E test for 4 complex flows.

**Stats:**

- Production code: 1,525 lines
- Unit tests: 21 files, 37 test cases

#### 4.2 Page Test Complexity (HIGH)

**Files:** `tests/pages/*.unit.spec.jsx`

**Issue:** Most tests only check field count and error count.

**Missing:** Conditional logic tests, dynamic schema tests.

#### 4.3 Submit Transformer Tests (MEDIUM)

**File:** `tests/config/submit-transformer.unit.spec.jsx:7-11`

**Issue:** Only tests Flow 2.

#### 4.4 Integration Test Gap (MEDIUM)

**Issue:** No integration tests for save-in-progress functionality.

### 5. Code Organization

#### 5.1 Commented-Out Code (MEDIUM)

**File:** `pages/witnessOtherRelationship.js:36-44`

**Issue:** Large block of commented `uiSchemaB` in production.

#### 5.2 Component Location (MEDIUM)

**Files:** `components/VetPersInfoUiTitle.jsx`, `ClaimantPersInfoUiTitle.jsx`, `StatementUiTitle.jsx`

**Issue:** Simple conditional renders should be in `definitions/uiTitles.js`.

#### 5.3 Small Definition File (MEDIUM)

**File:** `definitions/form-definitions.js` (13 lines)

**Issue:** Consider consolidation.

#### 5.4 Third ESLint Disable (LOW)

**File:** `pages/witnessOtherRelationship.js:20`

```javascript
// eslint-disable-next-line no-param-reassign
formData.witnessOtherRelationshipToClaimant = undefined;
```

### 6. Platform Integration

#### 6.1 Direct DOM Manipulation (HIGH)

**File:** `config/form.js:43-52`

```javascript
const pageScrollAndFocus = () => {
  return () => {
    const { pathname } = document.location;
    const focusSelector = getFocusSelectorFromPath(pathname);
    if (!window.Cypress) {
      scrollAndFocus(document.querySelector(focusSelector));
    }
  };
};
```

**Impact:** Hard to test, tightly coupled to DOM.

#### 6.2 Hardcoded Selectors (HIGH)

**File:** `utils.js:42`

```javascript
focusSelector = '#main .schemaform-first-field legend';
```

**Impact:** Brittle; layout changes break focus management.

#### 6.3 Missing Error Boundary (HIGH)

**Issue:** No error boundary implementation.

**Impact:** JavaScript errors crash entire form.

#### 6.4 Missing Feature Toggle Runtime (MEDIUM)

**Issue:** No runtime feature toggle check in App.jsx.

### 7. Content & Hardcoding

#### 7.1 Hardcoded Intro Content (MEDIUM)

**File:** `containers/IntroductionPage.jsx:6-59`

**Issue:** 54 lines of hardcoded content.

#### 7.2 Hardcoded Error Messages (MEDIUM)

**Files:** `pages/witnessContInfo.js:12-18`, `pages/claimantIdInfo.js:10-13`, `pages/vetIdInfo.js`

#### 7.3 DOB Error Messages (MEDIUM)

**Files:** `pages/claimantPersInfo.js:16-19`, `pages/vetPersInfo.js:16-19`

### 8. Environment Configuration

#### 8.1 Conditional Mock Loading (MEDIUM)

**File:** `containers/ConfirmationPage.jsx:8-12`

```javascript
let mockData;
if (!environment.isProduction() && !environment.isStaging()) {
  mockData = require('../tests/e2e/fixtures/data/flow1.json');
}
```

## Positive Findings

- Proper use of `validateDateOfBirth` from platform
- Correct use of `vets-json-schema/dist/definitions.json`
- Platform SSN utilities including `maskSSN` used correctly
- Most pages use web-component-patterns appropriately
- Good form structure following RJSF best practices

## Platform Pattern Gaps

| Aspect | Current | Recommended |
|--------|---------|-------------|
| Config Structure | Flat (2 files) | Modular subdirs with barrel exports |
| Barrel Exports | None | Comprehensive index.js files |
| Page Export Style | Default export | Named exports + index.js barrel |
| JSDoc Coverage | ~5% | ~90% |
| Transformer Helpers | Inline (0 functions) | Modular (7+ helper functions) |
| Test Fixtures | Flow-based (4 scenarios) | Minimal/Maximal (2 datasets) |
| Prefill Transformer | None (disabled) | Full implementation |
| Error Handling | None | Error constants + boundary |
| README | None | Comprehensive documentation |

## Non-Issues (Platform-Level)

The following were initially flagged but confirmed as platform-level concerns:

| Item | Reason |
|------|--------|
| DataDog RUM Integration | Handled at platform level |
| `devOnly` props | Standard pattern across VA forms |

## Level of Effort

### Issue Summary

| Category | Critical | High | Medium | Low |
|----------|----------|------|--------|-----|
| Pre-Discovery (Tracked) | 0 | 7 | 7 | 1 |
| This Discovery | 1 | 17 | 14 | 2 |
| **Total** | **1** | **24** | **21** | **3** |

### Tshirt size estimation

_Teams often start with T-shirt sizes during early planning, then refine into story points later._

- 👕 Small = Design
- 👕 Medium = Content
- 👕 Small = Monitoring
- 👕 Extra Large = Engineering

### Additional notes

Design flow and Figma components largely comply with expected VADS standards, but several imposter components and outdated patterns still require replacement with DST v3 elements to ensure consistency. Content patterns and punctuation remain out of sync, with Figma text differing from staging and production; labels and body text need edits to correct punctuation, misplaced commas, and em dash usage so that design and content align across all environments.

## Next

- Write tickets for epic
- Architectural decision record (ADR) decouple APIs from simple-forms engine
- Identify research opportunities
- Review user stories and writing KPI's
- Plan roadmap
