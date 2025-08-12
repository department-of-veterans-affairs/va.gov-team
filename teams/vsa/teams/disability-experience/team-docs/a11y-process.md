# Accessibility Workflow Overview

_This document outlines the three major pillars of accessibility work and the respective role breakdown between Etan `@etanb` and OCTO (including the ADE team). It is designed to provide a clear, visual, and textual guide for stakeholders and collaborators. This information applies to the Disability Benefits 1, Disability Benefits 2, Disability Conditions, and Employee Experience teams._

---

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1PWpK8MD7UNJwZ06foiyQbBHbS4YMz7iz" width="75%" alt="Accessibility Pillars">
</p>

---

### 🐛 1. **Accessibility Bugs**

**Description:**
- Bug intake and triage
- Root cause analysis of reported accessibility issues

**Intake Instructions:**
1. File a bug using the [Accessibility Bug Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=Disability-BaseTeam-A11y-Bug-Template.md)
2. If a ticket was created without the proper template: 
    1. Tag `@etanb` that you're actively looking to convert a bug to the accessibility template.
    2. Put the original bug into a "blocked" status.
    3. Create the new ticket using the accessibility bug template **OR** make sure all the elements required for an accessibility issue are present in the original ticket, **especially the following labels applied**:
        - `disability-benefits`
        - `accessibility`
        - `bug`
        - `needs-refinement`

**Deliverables:**
- Reproducibility verification of the issue
- Root cause analysis, including engineering guidance
- Accessibility severity rating using [this rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric)
- [Example output](https://github.com/department-of-veterans-affairs/va.gov-team/issues/108393#issuecomment-2971896786)

**Resources Utilized:**
- Internal testing tools (e.g., screen readers, keyboard navigation)
- Local developer version of the VA 526 Forms application
- OCTO accessibility contacts if additional expertise is needed

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1o5BSNM9rOs71njF3ZjH6_5e8olMCHuxx" width="60%" alt="Accessibility Bugs">
</p>

---

### 🎨 2. **Feature Work: Design Review**

**Description:**
- Accessibility involvement during the design phase
- Review of UX flows, wireframes, and visual comps (Figma, Mural)
- Collaboration with product, content, and design teams

**Intake Instructions:**
1. Once content is done, and there are at least high-fidelity mockups available, fill out the [Design Accessibility Intake Form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=Disability-BaseTeam-A11y-Design-Intake-Template.yml) **OR** tag `@etanb` in a previously made ticket making sure the aforementioned details are present, **especially the following labels applied**:
      1. `disability-benefits`
      2. `accessibility`
      3. `design`
      4. `needs-refinement`
2. Invite `@etanb` to design review meetings as needed
3. Tag `@etanb` for comments in Figma/Mural as needed

**Deliverables:**
- Annotated design or feedback in Figma/Mural
- Recommendations for accessible UX patterns
- Early identification of potential barriers before development

**Resources Utilized:**
- [Accessibility Office Hours](https://calendly.com/platform-office-hours/accessibility-office-hours?month=2025-07&date=2025-07-30) (Wednesdays 3–4pm ET)
- Slack channels: `#accessibility-help`, `#accessibility-specialists`
- [ADE team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/readme.md#review-wireframes-and-figma-prototypes) for deeper design audits

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1vbw36LCwHCv5kQP5Z1QQIBHtWYyDBChd" width="60%" alt="Feature Work: Design Review">
</p>

---

### 🛠️ 3. **Feature Work: Engineering Review**

**Description:**
- Early accessibility checks during engineering implementation
- Identification of common a11y issues before full QA
- Includes automated scan support and ADE collaboration

**Intake Instructions:**
1. Once Engineering work is ready for review and has an available staging link, fill out the [Engineering Accessibility Intake Form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=Disability-BaseTeam-A11y-Engineering-Intake-Template.yml) **OR** make sure all the elements required for an accessibility issue are present in the original ticket **especially the following labels applied**:
      1. `disability-benefits`
      2. `accessibility`
      3. `engineering`
      4. `needs-refinement`
2. `@etanb` will then take all that inputted data and fill out the official [ADE team intake process](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=a11y-testing.yaml)
3. `@etanb` will then be a "steward" between the ADE team and the original product team

**Deliverables:**
- Preliminary scan results using Lighthouse and axe DevTools
- Notes on technical implementation risks or issues
- ADE team findings and suggested code-level fixes

**Resources Utilized:**
- [ADE team intake process](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=a11y-testing.yaml)
- Lighthouse and axe DevTools
- Support from accessibility PM coordinating review efforts

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1j1ghNQW_h9yhfjSs6jVERWDxiffjrhbr" width="60%" alt="Feature Work: Engineering Review">
</p>
