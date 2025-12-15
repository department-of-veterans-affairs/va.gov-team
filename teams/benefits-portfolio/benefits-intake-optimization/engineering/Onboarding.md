# VA Forms Engineering Onboarding

**Benefits Intake Optimization (BIOHEART) Team**  
*Based on Forms 21P-0537 & 21P-0601*

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites & Access](#prerequisites--access)
3. [Codebase Structure](#codebase-structure)
4. [Development Workflow](#development-workflow)
5. [Staging Review Process](#staging-review-process)
6. [QA Standards](#qa-standards)
7. [Accessibility Testing](#accessibility-testing)
8. [Team Contacts & Resources](#team-contacts--resources)

---

## Project Overview

This onboarding guide covers engineering practices established during the digitization of VA Forms 21P-0537 (Marital Status Questionnaire) and 21P-0601 (Application for Accrued Amounts Due a Deceased Beneficiary). These forms follow the SimpleForms architecture pattern and provide a template for future form digitization projects.

### What We're Building

We digitize paper VA forms into accessible, validated web applications that submit through the VA.gov platform. The solution leverages existing config- and schema-driven architecture to reduce the disability claims backlog by transitioning from paper to electronic intake, improving data fidelity, and enabling automated validation.

### Architecture Overview

Forms are rendered using React JSON Schema Form (RJSF) with Redux state management, submitted through vets-api, converted to PDFs, and forwarded to Lighthouse Benefits Intake for routing to VBMS through the Central Mail Portal (CMP).

| Layer | Technology |
|-------|------------|
| **Frontend** | React, RJSF, Redux, VA Design System (VADS) |
| **Backend** | vets-api (Rails), SimpleForms API module |
| **PDF Generation** | PDF filler using form templates |
| **Submission** | Lighthouse Benefits Intake API → Central Mail Portal → VBMS |

---

## Prerequisites & Access

### Required Access

Before starting development, ensure you have:

1. **SOCKS Proxy access** for VA internal resources
2. **GitHub access** to department-of-veterans-affairs repositories
3. **Staging environment credentials** (test user accounts like vets.gov.user+228@gmail.com)
4. **Datadog access** for monitoring and debugging
1. **GitHub access** to department-of-veterans-affairs repositories
2. **Staging environment credentials** (test user accounts like vets.gov.user+228@gmail.com)
3. **Datadog access** for monitoring and debugging
4. **Slack access** to #benefits-intake-optimization and platform channels

### Key Skills & Knowledge

- React and Redux state management
- JSON Schema and React JSON Schema Form (RJSF)
- VA Design System (VADS) web components
- Cypress for E2E testing
- Understanding of WCAG 2.1 AA accessibility requirements

---

## Codebase Structure

### Repository Locations

- **Frontend:** `vets-website/src/applications/simple-forms/<formId>/`
- **Backend:** `vets-api/modules/simple_forms_api/`
- **Documentation: ** `https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/benefits-portfolio/benefits-intake-optimization`

### Frontend Directory Structure

Each form follows this standard structure under `src/applications/simple-forms/<formId>/`:

| Path | Purpose |
|------|---------|
| `config/form.js` | Main form configuration (chapters, pages, schemas) |
| `config/helpers.js` | Conditional logic, depends functions, transforms |
| `config/submit-transformer.js` | Data transformation before API submission |
| `containers/` | IntroductionPage.jsx, ConfirmationPage.jsx |
| `pages/` | Individual page components and definitions |
| `tests/e2e/` | Cypress E2E tests and fixtures |
| `tests/unit/` | Unit tests for transforms, helpers, components |

---

## Development Workflow

### Local Setup

1. Clone vets-website and vets-api repositories
2. Run `yarn safe-install` (post shai-hulud) in vets-website
3. Start local development server with `yarn watch`
4. Configure mock API or connect to staging backend
5. Access form at `localhost:3001/<form-url-path>`

### Form Configuration Pattern

The formConfig object is the heart of each form. Key properties include:

- **rootUrl:** The URL path where the form lives
- **urlPrefix:** Prefix for all form pages
- **title:** Form title displayed in browser and breadcrumbs
- **chapters:** Contains all form chapters, each with pages
- **transformForSubmit:** Function to transform data before API call
- **saveInProgress:** Configuration for Save in Progress (SiP) feature

### Conditional Logic (depends)

Use `depends` functions to show/hide pages or fields based on form data. Example: showing spouse veteran ID fields only when user indicates their spouse is a veteran.

```javascript
// Example depends function
depends: (formData) => formData.isSpouseVeteran === true
```
---

## QA Standards

### Unit Test Coverage Requirements

**ALL four categories must be ≥80%:**

| Category | Minimum | What It Measures |
|----------|---------|------------------|
| Statements | 80% | Lines of code executed |
| Branches | 80% | If/else paths tested |
| Functions | 80% | Functions invoked |
| Lines | 80% | Source lines executed |

**Run coverage report:**

```bash
yarn test:coverage --app-folder simple-forms/<formId>
```

### E2E Testing with Cypress

Required test scenarios:

1. **Happy path:** Complete form submission with valid data
2. **Conditional routing:** All branching logic paths
3. **Validation errors:** Required fields, format validation
4. **Save in Progress:** Save and resume functionality
5. **Authentication flows:** Logged in vs logged out behavior

**Run E2E tests:**

```bash
yarn cy:run --spec 'src/applications/simple-forms/<formId>/tests/e2e/**/*'
```

---

## Accessibility Testing

VA.gov must meet WCAG 2.1 Level AA standards. Accessibility issues are launch-blocking.

### Required Testing

#### Automated Testing (axe DevTools)

- Scan every page of the form
- Screenshot results showing 0 violations
- Document any resolved or waived issues

#### Manual Testing

| Test Type | Verification Points |
|-----------|---------------------|
| Keyboard Navigation | Tab order logical, no traps, visible focus, all elements reachable |
| Screen Reader (NVDA) | Labels announced, errors read, required fields indicated |
| Screen Reader (JAWS) | Same verification as NVDA |
| Zoom/Reflow (400%) | Content reflows, no horizontal scroll, text remains readable |
| Color Contrast | 4.5:1 for normal text, 3:1 for large text |

---

## Team Contacts & Resources

### About the Project

**Official VFS Team Name:** Benefits Intake Optimization - Agile Six

**Mission:** To advance VA's goal to digitize 11 forms by 11/11/2025 by streamlining benefits intake through the digital transformation of Forms 601 and 537, improving efficiency and the Veteran experience.

**Products:**
- Form 21P-0537 (Marital Status Questionnaire)
- Form 21P-601 (Application for Accrued Amounts Due a Deceased Beneficiary)

### BIO-HEART Team Roster

*Benefits Intake Optimization - Helping Ensure Accrued & Relationship Transitions*

| Role | Name | GitHub |
|------|------|--------|
| Program Manager | Berni Bernardini Xiong | @bernixionga6 |
| Product Manager | Mike Collier | @MikeC-A6 |
| Frontend Engineer | Aaron Ponce | @amponce |
| Full Stack Engineer | Michael Clement | @michaelclement |
| Backend Engineer | Nader (Nate) Kutub | @nkutub |
| UX Designer | Melissa Schaff | @melissajschaff |
| UX Researcher | Andrea Chappelear | @a-chappelear |

### VA Stakeholders and Partners

| Role | Name | Organization | Contact |
|------|------|--------------|---------|
| VA Project Lead | Dennis Peterson | Office of Information Technology (OIT) | dennis.peterson3@va.gov |
| OCTO Rep | Matt Dingee | Office of CTO (OCTO) | matthew.dingee@va.gov |
| Contracting Officer's Rep (COR) | Jacqueline E. Meadows-Stokes | Office of Information and Technology (OIT) | jacqueline.meadows-stokes@va.gov |
| Contracting Officer (CO) | Troy Loveland | Office of Acquisition, Logistics, and Construction (OALC) | troy.loveland@va.gov |
| Contract Specialist (CS) | John Adamitis | Office of Acquisition, Logistics, and Construction (OALC) | john.adamitis1@va.gov |

### Product Information

- **21P-0537 Product Outline:** [GitHub - 21P-537 Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/simple-forms/21P-537/21P-537_product_outline.md)
- **21P-601 Product Outline:** [GitHub - 21P-601 Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/simple-forms/21P-601/21P-601_product_outline.md)

### Key Resources

- **VA Platform Docs:** [depo-platform-documentation.scrollhelp.site](https://depo-platform-documentation.scrollhelp.site)
- **VA Design System:** [design.va.gov](https://design.va.gov)
- **Experience Standards:** [design.va.gov/about/experience-standards](https://design.va.gov/about/experience-standards)
- **Collaboration Cycle:** [Staging Review Process](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/)
- **QA Standards:** [Platform QA Standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards)

### Slack Channels

- **#benefits-intake-optimization** - Team channel
- **#vfs-platform-support** - Platform questions
- **#accessibility** - Accessibility guidance
- **#design-system** - VADS component questions

---

## Appendix: Example Form URLs

| Form | Staging URL |
|------|-------------|
| 21P-0537 | https://staging.va.gov/family-and-caregiver-benefits/survivor-compensation/dependency-indemnity-compensation/verify-marital-status-21p-0537 |
| 21P-0601 | https://staging.va.gov/family-and-caregiver-benefits/survivor-compensation/apply-for-accrued-benefits-form-21p-601 |

---

*Document generated from BIOHEART team learnings on Forms 21P-0537 and 21P-0601*
