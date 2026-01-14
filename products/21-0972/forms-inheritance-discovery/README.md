# 21-0972 Form inheritance discovery

## Now (12/30/2025)

### Table of Contents

- [Design Findings](#design-findings)
- [Technical Findings](#technical-findings-and-recommendations-for-form-21-0972)
- [Level of Effort](#level-of-effort)
- [Next](#next)

## Design Findings

Category: Imposter Components

* Reconsider Preparer qualification checkboxes (#636)→ Open

Category: Content & IA

* Staging and Figma content and steps seem out of sync → Todo

Category: Accessibility

* Focus is lost on the review page when editing items. (#734) → Open

Category: Documentation Debt

* Is story book used for documenting changes outside of the design system? 
What is the source of truth for product teams to follow? → Open Question




## Technical Findings and Recommendations for Form 21-0972

### I. Component and Pattern Modernization

#### Imposter Component Replacement

**Finding:** One instance of an "Imposter Component" (a non-standard/deprecated UI widget) was identified in the new VFS form.

**Location:** `src/applications/simple-forms/21-0972/pages/claimantIdentification.js`

**Recommendation:** Replace the direct import of `VaRadioField` with the standardized `web-component-patterns` for improved maintainability and consistency.

| Aspect | Current Implementation (Deprecated) | Recommended Implementation (Standardized) |
|--------|-------------------------------------|-------------------------------------------|
| **Import** | `import VaRadioField from 'platform/forms-system/src/js/web-component-fields/VaRadioField';` | `import { radioUI, radioSchema } from 'platform/forms-system/src/js/web-component-patterns';` |
| **uiSchema** | `'ui:widget': VaRadioField,`<br>`'ui:options': {`<br>`  labels: {`<br>`    CLAIMANT: 'I am the claimant',`<br>`    THIRD_PARTY_VETERAN: 'I am filling this out for the claimant',`<br>`  },`<br>`}` | `claimantId: radioUI({`<br>`  title: 'Which of these best describes you?',`<br>`  labels: {`<br>`    CLAIMANT: 'I am the claimant',`<br>`    THIRD_PARTY_VETERAN: 'I am filling this out for the claimant',`<br>`  },`<br>`  required: () => true,`<br>`}),` |
| **schema** | (Custom Schema) | `claimantId: radioSchema(['CLAIMANT', 'THIRD_PARTY_VETERAN']),` |

---

### II. Code Quality and Maintenance

#### ESLint and Manual Review

**Finding:** Initial ESLint scan resulted in no errors. A visual and manual audit highlighted several areas for improvement.

#### TypeScript and Environment Imports

**Potential Concern:** TypeScript error regarding the environment utility module.

**Locations:**
- `src/applications/simple-forms/21-0972/config/form.js`
- `src/applications/simple-forms/21-0972/containers/App.jsx`

**Recommendation:** Resolve the missing declaration file for `@department-of-veterans-affairs/platform-utilities/environment` to ensure proper TypeScript support.

#### Unnecessary React Imports

**Finding:** Several files have needless imports of React which can be removed to align with modern React standards.

**Files:**
- `src/applications/simple-forms/21-0972/containers/App.jsx`
- `src/applications/simple-forms/21-0972/config/form.js`
- `src/applications/simple-forms/21-0972/containers/ConfirmationPage.jsx`
- `src/applications/simple-forms/21-0972/containers/IntroductionPage.jsx`
- `src/applications/simple-forms/21-0972/tests/containers/ConfirmationPage.unit.spec.jsx`
- `src/applications/simple-forms/21-0972/tests/containers/IntroductionPage.unit.spec.jsx`

---

### III. Documentation and Readability

#### Comments Review and Update

**Finding:** Existing comments in several pages are not sufficiently useful and need updating to improve readability and Quality of Life (QOL) for future developers.

**Files Requiring Comment Refinement:**
- `src/applications/simple-forms/21-0972/pages/claimantAddress.js`
- `src/applications/simple-forms/21-0972/pages/additionalInformation.js`
- `src/applications/simple-forms/21-0972/pages/claimantContactInformation.js`
- `src/applications/simple-forms/21-0972/pages/claimantIdentification.js`
- `src/applications/simple-forms/21-0972/pages/claimantPersonalInformation.js`
- `src/applications/simple-forms/21-0972/pages/claimantSsn.js`
- `src/applications/simple-forms/21-0972/pages/preparerAddress.js`
- `src/applications/simple-forms/21-0972/pages/preparerContactInformation.js`
- `src/applications/simple-forms/21-0972/pages/preparerPersonalInformation.js`
- `src/applications/simple-forms/21-0972/pages/preparerQualifications1.js`
- `src/applications/simple-forms/21-0972/pages/preparerQualifications2.js`
- `src/applications/simple-forms/21-0972/pages/veteranPersonalInformation.js`

#### Missing Comments in Test Files

**Finding:** Several test files lack general comments necessary for understanding their purpose and structure.

**Files Needing New Comments:**
- `src/applications/simple-forms/21-0972/tests/config/helpers.unit.spec.jsx`
- `src/applications/simple-forms/21-0972/tests/config/submit-transformer.unit.spec.jsx`
- `src/applications/simple-forms/21-0972/tests/containers/ConfirmationPage.unit.spec.jsx`
- `src/applications/simple-forms/21-0972/tests/containers/IntroductionPage.unit.spec.jsx`

---

### IV. Technical Debt and Other Fixes

#### Date Handling Investigation

**Recommendation:** Investigate date handling logic to ensure consistency and correctness relative to Forms 0781 or 526 implementations.

#### Maximal Payload Discrepancy

**Finding:** `formNumber` is missing from `maximal-test.json` but is present in the transformed maximal payload.

**Recommendation:** Align the maximal-test payload to include all necessary fields prior to transformation.

#### CommonJS Module Error in Mocks

**Finding:** TypeScript warning that a mock file is a CommonJS module.

**Recommendation:** Convert the file to an ES module to eliminate the warning:
> `File is a CommonJS module; it may be converted to an ES module.ts(80001)`

#### Cypress Test Disable

**Finding:** There is a random disable flag on a Cypress test file.

**Recommendation:** Investigate and resolve the underlying issue causing the disable in `src/applications/simple-forms/21-0972/tests/e2e/21-0972-alternate-signer.cypress.spec.js` and re-enable the test.

#### Incorrect File Extension

**Finding:** The routes file uses an incorrect extension.

**File:** `src/applications/simple-forms/21-0972/routes.jsx`

**Recommendation:** Fix the file extension to the preferred standard (likely `.js` if no JSX is present).

#### Additional TODOs and Typo Fixes

| Type | Location | Description / Recommendation |
|------|----------|------------------------------|
| **Stale TODO** | `veteranIdentificationInformation1.js:9` | Remove `// TODO: customize labels` as custom labels are already present. |
| **Ambiguous TODO** | `form.js:108` | Resolve `// TODO: figure out what to put in the label` for `messageAriaDescribedby` in `preSubmitInfo.statementOfTruth` |
| **Typo** | Test Filename | Rename `claimantPersonalnformation.unit.spec.jsx` to `claimantPersonalInformation.unit.spec.jsx` |
| **Empty Wrapper** | `submit-transformer.js` | Investigate removing this passthrough wrapper and using the shared transformer directly in the form configuration. |

### IV. Lighthouse and Accessibility run 
**Finding**: The flow had an overall score of 47 out of 100 for performance (though 100/100 for accessibility). The following images display the results, and a copy of the report can be found [here](https://googlechrome.github.io/lighthouse/viewer/?gist=e6093c7527ad4fc95f72151e486d30fc). 

**Recommendation**: Investigate how we can improve the performance of the form. Google Lighthouse showed no WCAG level accessibility issues, as well as a manual walkthrough showed nothing of concern. However, performance issues were noted, so investigating how to best solve these is suggested. 

**Concern**: The concern is that if performance tech debt continues to pile up, and the score reduces further, that a user will get frustrated waiting on a page to load or respond and abandon the process. This will directly affect and negatively impact the outcome of the veterans experience.

<img width="1258" height="617" alt="Image" src="https://github.com/user-attachments/assets/6bce7207-a741-45e3-ac0e-affa0278f4dc" />
<img width="995" height="596" alt="Image" src="https://github.com/user-attachments/assets/65c4fa10-e3c9-4bba-8605-5ddae290a7b3" />
<img width="1169" height="445" alt="Image" src="https://github.com/user-attachments/assets/a244804b-6dd1-4abb-b4b2-5cd19b74eca7" />

**Finding**:  Validation issue potentially with the url of http://localhost:3001/supporting-forms-for-claims/alternate-signer-form-21-0972/veteran-personal-information, specifically, if a user puts in the veterans birthdate or some random date, it doesn't appear to be validating that they're putting in the right date. Is this the desired outcome? 

**Recommendation:** Find out if this is the desired business logic, if not, investigate how to change it so that it properly validates.

<img width="1133" height="753" alt="Image" src="https://github.com/user-attachments/assets/ddf47383-516c-4b3e-83dc-e3852580e5ce" />

**Finding**: A signer can change a veterans Social Security Number inside of the flow. They can also click onto the number and it de-masks the whole thing. We should not be allowing this. We need to figure out if this is accounted for, and if there are controls in place to keep this very sensitive PII out of payloads.

**Recommendation**: Fix the unmasking as well as the ability of someone who is acting as a signer to change a social security number. This should be something that should only be done by very high level of permissions. 

**Concern**: That a user might have their most vital information stolen if someone somehow got access to their account, or if it somehow is unmasked during transport or encoding. Note: image below is on local with test data and no actual real person information.

<img width="841" height="708" alt="Image" src="https://github.com/user-attachments/assets/a7260111-12f2-4d66-afa9-05048d528aaa" />

### Technical Debt Severity Prioritization

This table prioritizes the technical findings and recommendations based on their potential impact on security, user experience, and overall code quality/maintainability.

| Severity | Finding / Concern | Recommendation | Rationale |
|---------|-------------------|----------------|-----------|
| **Critical IF actual editing is allowed** | **PII Security Risk:** A signer can change a veteran's Social Security Number (SSN), and the SSN field is currently unmaskable on click/focus. | Investigate if a signer can change SSN. If they can: Fix the unmasking issue and restrict the ability of a signer to change the veteran's SSN to only high-permissioned users. | Direct PII security risk and data integrity issue. High negative impact. |
| **High** | **Component Modernization (Imposter Component):** One instance of VaRadioField (deprecated “Imposter Component”) was identified. | Replace the direct import of VaRadioField with the standardized web-component-patterns (radioUI, radioSchema). | Using deprecated components leads to higher maintenance burden and will break with platform updates. Affects long-term stability. |
| **High** | **Performance Degradation (Lighthouse Score):** The flow had an overall Lighthouse Performance score of 47/100. | Investigate and implement changes to improve form performance to prevent user abandonment due to load times. | Directly affects user experience (UX) and could lead to form abandonment, impacting veteran outcomes. |
| **Medium** | **Incorrect Date Validation:** Potential validation issue with the veteran's birthdate input (does not validate against correct business logic). | Determine the desired business logic for date validation and update the form logic to properly validate the input. | Data integrity issue; can lead to incorrect data submission if not aligned with business rules. |
| **Medium** | **USWDS Component Use:** Radio buttons on step 7 of 9 are using the USWDS component instead of the platform-aligned web components. | Replace radio buttons with platform-aligned web components (e.g., VADS components). | Inconsistent UX and potential future accessibility/styling conflicts if not using standardized platform components. |
| **Medium** | **CommonJS Module in Mocks:** TypeScript warning that a mock file is a CommonJS module. | Convert the mock file to an ES module to eliminate the TypeScript warning. | Cleans up development environment and aligns with modern module standards. |
| **Low** | **Missing formNumber in Maximal Payload:** formNumber is missing from `maximal-test.json`. | Align the maximal-test payload to include all necessary fields prior to transformation. | Ensures testing environment accurately reflects production payload structure. |
| **Low** | **Unnecessary React Imports:** Several files have needless imports of React. | Remove needless React imports to align with modern React standards. | Code cleanup, slightly reduces bundle size, and aligns with current best practices. |
| **Low** | **Documentation and Readability (Comments):** Existing comments in several pages are not sufficiently useful; test files lack general comments. | Refine existing page comments and add necessary context/purpose comments to test files. | Improves Quality of Life (QOL) for future developers and maintainers. |
| **Low** | **Stale/Ambiguous TODOs and Typo Fixes:** Stale/ambiguous TODOs (e.g., `form.js:108`) and a typo in a test filename (`claimantPersonalnformation.unit.spec.jsx`). | Resolve TODOs, rename the test file, and investigate removing the empty wrapper in `submit-transformer.js`. | General code cleanup and maintainability. |


## Level of Effort

### Tshirt size estimation

_Teams often start with T-shirt sizes during early planning, then refine into story points later._

- 👕 Design = Small
- 👕 Content = Small
- 👕 Engineering = Medium

### Additional notes

N/A

## Next

- Write tickets for epic
- Identify research opportunities
- Plan roadmap
