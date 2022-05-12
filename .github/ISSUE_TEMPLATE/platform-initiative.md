---
name: Platform Initiative
about: Top-level epic to track a VSP Initiative
title: ''
labels: platform-initiative
assignees: ''

---

## Problem Statement 
*In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address.*

*Follow your problem description up with a "How might we... _______" statement re-framing that challenge as an opportunity. Don't hint too much at what the solution might be, you should have enough of a focal point here to guide your ideas, but plenty of freedom to think laterally and innovatively as you experiment and prototype later.*

## Hypothesis or Bet
*How will this initiative impact the quality of VFS or Platform teams' work?*
*How will this initiative be easy for VFS or Platform teams? Or how will it be easier than what they did before?*

## We will know we're done when... ("Definition of Done")
*What requirements does this project need to meet for you to finish this initiative?*

## Known Blockers/Dependencies 
*List any blockers or dependencies for this work to be completed*

## Projected Launch Date
* When do you expect to be completed rolling out this initiative*

## Launch Checklist

### Guidance (delete before posting)

_This checklist is intended to be used to help answer, "is my Platform initiative ready for launch?". All of the items in this checklist should be completed, with artifacts linked---or have a brief explanation of why they've been skipped---before launching a given Platforminitiative. All links or explanations can be provided in **Required Artifacts** sections. The items that can be skipped are marked as such._

_Keep in mind the distinction between **Product** and **Initiative** --- each Product needs specific supporting documentation, but Initiatives to improve existing Products should reuse existing documentation for that Product.  [VSP Product Terminology](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/product-management/product-terminology.md) for details._

### Is this service / tool / feature...

### ... tested?

- [ ] Usability test (_TODO: link_) has been performed, to validate that new changes enable users to do what was intended and that these changes don't worsen quality elsewhere. If usability test isn't relevant for this change, document the reason for skipping it.
    - [ ] ... and issues discovered in usability testing have been addressed.
    * _Note on skipping: metrics that show the impact of before/after can be a substitute for usability testing._
- [ ] End-to-end [manual QA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/README.md) or [UAT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md) is complete, to validate there are no high-severity issues before launching
- [ ] _(if applicable)_ New functionality has thorough, automated tests running in CI/CD

### ... documented?

- [ ] New documentation is written pursuant to our [documentation style guide](https://vfs.atlassian.net/wiki/spaces/AP/pages/622264362/Style+guide)
- [ ] Product is included in the [List of VSP Products](https://docs.google.com/spreadsheets/d/1Fn2lD419WE3sTZJtN2Ensrjqaz0jH3WvLaBtn812Wjo/edit#gid=0)
    * _List the existing product that this initiative fits within, or add a new product to this list._
- [ ] Internal-facing: there's a [Product Outline](https://vfs.atlassian.net/wiki/spaces/PMCP/pages/1924628490/Product+Outline+Template)
- [ ] External-facing: a [User Guide on Platform Website](https://vfs.atlassian.net/wiki/spaces/AP/pages/1477017691/Platform+website+guidelines) exists for this product/feature tool
- [ ] _(if applicable)_ Post to [#vsp-service-design](https://dsva.slack.com/channels/vsp-service-design) for external communication about this change (e.g. customer-facing meetings)

### ... measurable

- [ ] _(if applicable)_ This change has clearly-defined success metrics, with instrumentation of those analytics where possible, or a reason documented for skipping it.
    * For help, see: [Analytics team](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/Analytics-customer-support-guide.1586823275.html)
- [ ] This change has an accompanying [VSP Initiative Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose).

### When you're ready to launch...
- [ ] Conduct a [go/no-go] (https://vfs.atlassian.net/wiki/spaces/AP/pages/1670938648/Platform+Crew+Office+Hours#Go%2FNo-Go) when you're almost ready to launch. 

## Required Artifacts

### Documentation
* **`PRODUCT_NAME`**: _directory name used for your product documentation_
* **Product Outline**: _link to Product Outline_
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
- [ ] Add this initiative to the [Digital Experience Product Board](https://github.com/orgs/department-of-veterans-affairs/projects/306?card_filter_query=label%3Acrew-platform) using [these instructions](https://vfs.atlassian.net/wiki/spaces/AP/pages/2120974387/Platform+Initiative+Guidelines+for+Digital+Experience+Product+Board)
