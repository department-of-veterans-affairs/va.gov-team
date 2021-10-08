---
name: VSP Initiative
about: Top-level epic to track a VSP Initiative
title: ''
labels: VSP-Initiative
assignees: ''

---
## Problem Statement 
*In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address.*

*Follow your problem description up with a "How might we... _______" statement re-framing that challenge as an opportunity. Don't hint too much at what the solution might be, you should have enough of a focal point here to guide your ideas, but plenty of freedom to think laterally and innovatively as you experiment and prototype later.*

## Hypothesis or Bet
*How will this initiative impact the quality of VFS or VSP teams' work?*
*How will this initiative be easy for VFS or VSP teams? Or how will it be easier than what they did before?*

## We will know we're done when... ("Definition of Done")
*What requirements does this project need to meet for you to finish this initiative?*

## Known Blockers/Dependencies 
*List any blockers or dependencies for this work to be completed*

## Projected Launch Date
* When do you expect to be completed rolling out this initiative*

## Launch Checklist

### Guidance (delete before posting)

_This checklist is intended to be used to help answer, "is my VSP initiative ready for launch?". All of the items in this checklist should be completed, with artifacts linked---or have a brief explanation of why they've been skipped---before launching a given VSP initiative. All links or explanations can be provided in **Required Artifacts** sections. The items that can be skipped are marked as such._

_Keep in mind the distinction between **Product** and **Initiative** --- each Product needs specific supporting documentation, but Initiatives to improve existing Products should reuse existing documentation for that Product.  [VSP Product Terminology](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/product-management/product-terminology.md) for details._

### Is this service / tool / feature...

### ... tested?

- [ ] Usability test (_TODO: link_) has been performed, to validate that new changes enable users to do what was intended and that these changes don't worsen quality elsewhere. If usability test isn't relevant for this change, document the reason for skipping it.
    - [ ] ... and issues discovered in usability testing have been addressed.
    * _Note on skipping: metrics that show the impact of before/after can be a substitute for usability testing._
- [ ] End-to-end [manual QA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/README.md) or [UAT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md) is complete, to validate there are no high-severity issues before launching
- [ ] _(if applicable)_ New functionality has thorough, automated tests running in CI/CD

### ... documented?

- [ ] New documentation is written pursuant to our [documentation style guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/documentation/style-guide)
- [ ] Product is included in the [List of VSP Products](https://docs.google.com/spreadsheets/d/1Fn2lD419WE3sTZJtN2Ensrjqaz0jH3WvLaBtn812Wjo/edit#gid=0)
    * _List the existing product that this initiative fits within, or add a new product to this list._
- [ ] Internal-facing: there's a [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/product-management/product-outline-template.md) checked into [`products/platform/PRODUCT_NAME/`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/)
    * _Note: the Product Directory Name should match 1:1 with the List of VSP Products_
- [ ] External-facing: a [VFS-facing README](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/product-management/product-readme-template.md) exists for this product/feature tool
    - [ ] ... and should be located at `platform/PRODUCT_NAME/README.md`
- [ ] External-facing: a [User Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/product-management/writing-user-guides.md) exists for this product/feature/tool, and is updated for changes from this initiative
    - [ ] ... and should be linked from the VFS-facing README for your product
    - [ ] ... and should be located within `platform/PRODUCT_NAME/`, unless you already have another location for it
    - [ ] _(if applicable)_... and post to [#vsp-content-ia](https://dsva.slack.com/channels/vsp-content-ia) about whether this should be added to the [Documentation homepage](https://department-of-veterans-affairs.github.io/va.gov-team/)
- [ ] _(if applicable)_ Post to [#vsp-service-design](https://dsva.slack.com/channels/vsp-service-design) for external communication about this change (e.g. VSP Newsletter, customer-facing meetings)

### ... measurable

- [ ] _(if applicable)_ This change has clearly-defined success metrics, with instrumentation of those analytics where possible, or a reason documented for skipping it.
    * For help, see: [Analytics team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/analytics)
- [ ] This change has an accompanying [VSP Initiative Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose).

### When you're ready to launch...
- [ ] Conduct a [go/no-go] (https://vfs.atlassian.net/wiki/spaces/AP/pages/1670938648/Platform+Crew+Office+Hours#Go%2FNo-Go) when you're almost ready to launch. 

## Required Artifacts

### Documentation
* **`PRODUCT_NAME`**: _directory name used for your product documentation_
* **Product Outline**: _link to Product Outline_
* **README**: _link to VFS-facing README for your product_
* **User Guide**: _link to User Guide_

### Testing

* **Usability test**: _link to GitHub issue, or provide reason for skipping_
* **Manual QA**: _link to GitHub issue or documented results_
* **Automated tests**: _link to tests, or "N/A"_

### Measurement

* **Success metrics**: _link to where success metrics are measured, or where they're defined (Product Outline is OK), or provide reason for skipping_
* **Release plan**: _link to Release Plan ticket_


## TODOs
- [ ] Convert this issue to an epic
- [ ] Add your team's label to this epic

