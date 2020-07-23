---
name: VSP Initiative Development Checklist
about: Checklist to ensure launch checks and tasks are complete for VSP Initiatives
title: "[Initiative-Name]: Initiative Checklist"
---

## Guidance (delete before posting)

_This checklist is intended to be used to help answer, "is my VSP initiative ready for launch?". All of the items in this checklist should be completed, with artifacts linked---or have a brief explanation of why they've been skipped---before launching a given VSP initiative. The items that can be skipped are marked as such._

_Keep in mind the distinction between **Product** and **Initiative** --- each Product needs specific supporting documentation, but Initiatives to improve existing Products should reuse existing documentation for that Product. See (VSP Product Terminology)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/product-management/product-terminology.md] for details._

---

## Is this service / tool / feature...

## ... tested?

- [ ] Usability test (_TODO: link_) has been performed, to validate that new changes enable users to do what was intended and that these changes don't worsen quality elsewhere. If usability test isn't relevant for this change, document the reason for skipping it.
    - [ ] ... and issues discovered in usability testing have been addressed.
    * _Note on skipping: metrics that show the impact of before/after can be a substitute for usability testing._
- [ ] End-to-end [manual QA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/README.md) or [UAT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md) is complete, to validate there are no high-severity issues before launching
- [ ] _(if applicable)_ New functionality has thorough, automated tests running in CI/CD

### Required Artifacts

* **Usability test**: \<link to GitHub issue, or provide reason for skipping>
* **Manual QA**: \<link to GitHub issue or documented results>
* **Automated tests**: \<link to tests, or "N/A">

## ... documented?

- [ ] New documentation is written pursuant to our [documentation style guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/documentation/style-guide)
- [ ] Product is included in the [List of VSP Products](https://docs.google.com/spreadsheets/d/1Fn2lD419WE3sTZJtN2Ensrjqaz0jH3WvLaBtn812Wjo/edit#gid=0)
    * _List the existing product that this initiative fits within, or add a new product to this list._
- [ ] Internal-facing: there's a [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md) checked into [`products/platform/PRODUCT_NAME/`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/)
    - [ ] ... including happy paths, and how you'll react to unhappy paths
    * _Note: this Product name should match 1:1 with the List of VSP Products_
- [ ] External-facing: a [Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/product-management/product-brief-template.md) exists for this product/feature tool
    - [ ] ... and should be located at `platform/PRODUCT_NAME/README.md`
- [ ] External-facing: a User Guide (_TODO: link_) exists for this product/feature/tool, and is updated for changes from this initiative
    - [ ] ... and should be linked from the Product Brief
    - [ ] ... and should be located within `platform/PRODUCT_NAME/`, unless you already have another location for it
    - [ ] _(if applicable)_... and post to [#vsp-content-ia](https://dsva.slack.com/channels/vsp-content-ia) about whether this should be added to the [Documentation homepage](https://department-of-veterans-affairs.github.io/va.gov-team/)
- [ ] _(if applicable)_ Post to [#vsp-service-design](https://dsva.slack.com/channels/vsp-service-design) for external communication about this change (e.g. VSP Newsletter, customer-facing meetings)

### Required Artifacts

* **Product Name**: `PRODUCT_NAME`
* **Product Outline**: \<link to Product Outline>
* **Product Brief**: \<link to Product Brief>
* **User Guide**: \<link to User Guide>

## ... measurable

- [ ] _(if applicable)_ This change has clearly-defined success metrics, with instrumentation of those analytics where possible, or a reason documented for skipping it.
    * For help, see: [Analytics team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/analytics)
- [ ] Phased, data-informed [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) (_TODO: plan template still WIP_) is complete

### Required Artifacts

* **Success metrics**: \<link to where success metrics are measured, or where they're defined, or provide reason for skipping>
* **Release plan**: \<link to Release Plan>
