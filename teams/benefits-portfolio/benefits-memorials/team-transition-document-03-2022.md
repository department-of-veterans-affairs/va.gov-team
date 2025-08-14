# VSA Claims & Appeals product transition doc

<br>

>**Team transition document | March 2022**
>
> The purpose of this transition document is to outline the current state of Claims & Appeals product development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.

<br>

## Table of Contents
[Product context (PM)](#product-context)
[Product portfolio (PM)](#product-portfolio)
[Product approach (Team)](#product-approach)
[VA relationships (Team)](#va-relationships)

## Product context
As a Veteran, I want to easily discover, apply for, track, and manage my disability compensation claims on va.gov so that I can have a personalized, guided experiences that provides me access to vital information about VA benefits and services I deserve.

## Product portfolio

### Disability compensation (Form 526)

This product allows Veterans to file:
- Original disability claims (phase 1)
- Claims increase (worsened conditions; phase 2)
- Intent to file (Form 21-0966), automatically filed upon starting the form
- Posttraumatic stress disorder benefits or services (Form 781 & 781a) subform
- Disclose information to the VA (Form 4142), for providers outside the VA network
- Benefits deliever at Discharge (BDD) for active service members between 90 and 180 days from dischange (phase 3; in production)
- Unemployability benefits (Form 8940) subform - **Not yet in production**
- Request employment information (Form 4192) instructions only - **Not yet in production**

#### Details

- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/21-526ez.md)
- [Product flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/526-overall-flow.md)
- Analytics dashboards:
  - [Domo](https://va-gov.domo.com/page/447193050)
  - [Google Analytics](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20210201&_u.date01=20210228&explorer-table.filter=www.va.gov~2Fdisability~2Ffile-disability-claim-form-21-526ez&explorer-table.plotKeys=%5B%5D/)
  - [Sentry error logging](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&query=is%3Aunresolved+source%3A526EZ-all-claims&sort=priority&statsPeriod=14d) - socks proxy required
- [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-claims.md)

#### Now/Next/Later Roadmap
- [ ] [Original Claims - Form 526EZ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez)

- Update to new web component ([#36943](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36943))
- Item index ([#13642](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13642))
- Failed submission PDF generation - after EVSS implementation ([#33314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33314))
- Incorporate additional flashes ([#30920](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30920))
- Date of birth error messaging ([#27909](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27909))
- Page reorder ([#36028](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36028))

- [ ] [Benefits Delivery at Discharge](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/disability-compensation-claim/bdd) (sub-form of 526, [Meeting Minutes)](https://salientcrgt.sharepoint.com/:w:/r/sites/VSATeam/_layouts/15/Doc.aspx?sourcedoc=%7B730BEEE0-79BC-4550-8805-22EFD1EA8253%7D&file=BDD%20Bi-Weekly%20Check-in.docx&action=default&mobileredirect=true&cid=b3b77ed6-6e74-48f4-a45a-ffde8410d8df)

Additionally, there are a lot of [tier 3 support tickets](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+is%3Aopen+label%3Avsa-claims-appeals+Tier+3) that need followup
- Most will require the Veteran's `account_uuid` to access their data

### Decision appeals

Our Higher-Level Review & Notice of Disagreement forms include mock contestable issues, but because we have a strict 1 year timelimit on showing them on the contestable issues page, this mock data needs to be updated around once a year. [See this pull request for exactly what needs to be changed](https://github.com/department-of-veterans-affairs/vets-api-mockdata/pull/194).

### Artifacts
- [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials/README.md)
- [Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials/product-roadmap.md)
- [Weekly Meeting Minutes](https://salientcrgt-my.sharepoint.com/:w:/r/personal/ronnie_henry_gcio_com/_layouts/15/Doc.aspx?sourcedoc=%7B244AA365-EE2F-31D9-CF65-E9176D42F70F%7D&file=Claims%20%26%20Appeals%20Weekly%20Product%20Sync.docx&action=default&mobileredirect=true&cid=fdd2aa58-c8f4-4a63-8908-d8152ded4e80)


### Research and design
- [**Research and design hub page**]()
- [Individual feature/initiative hub page]()
- [Individual feature/initiative hub page]()
- [Individual feature/initiative hub page]()

### Engineering
- [Frontend](./transition/transition-03-2022-frontend-engineering.md)
- [Documentation]()
- [Documentation]()

<br>

## VA relationships
> You can reference specific product outlines or the team charter if contact or meeting information exists there already
### Contacts

- Matt Self | email.address@va.gov -- Product owner
- Paul Shute | email.address@va.gov -- Stakeholder: 526, BDD, CST
- Alejandro  | email.address@va.gov -- Stakeholder (Paul Shute backup)
- Nina Tann | email.address@va.gov -- Stakeholder: Notice of Disagreement
- Lauren Sylvia | email.address@va.gov -- Stakeholder: Higher Level Review

### Meetings

- Daily Stand-up / Slackup
   - Daily checkin
   - Zoom M & F, Slack T-TH
- BDD Checkin
   - Discuss issues relating to Benefits Delivery at Discharge
   - bi-weekly
- Lighthouse Check in
   - Discuss backend & endpoint issues
   - bi-weekly

### Open questions

- Open question lorem ipsum dolor sit amet?
- Open question lorem ipsum dolor sit amet?
- Open question lorem ipsum dolor sit amet?


### Claims Status
- [ ] [Claim Status Tool](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/README.md)
- Full product redesign was planned
- Implementation & Review of all in this ticket ([#36383](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36383))


### Decision Reviews
- [ ] [Notice of Disagreement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/readme.md) - Stakeholder: Board of Appeals,
- Awaiting go-no go decision for launch

- [ ] [Higher Level Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/README.md) - Stakeholder: Lauren Sylvia
- Phased launch complete at 100% 2-24-22
- Usability testing for v2 ([#36572](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36572)
- VSO question implementation ([#36135](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36135))
- [ ] Supplemental Claims (Not Developed)
- Plan was to begin research and development during Quarter 2


### Others (Not under active development)
- [ ] [Letters](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/benefit-letters)
- Technical Discovery ([#28846](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28846))
- [ ] [Pre-Need Burial](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials/pre-need)
- Privacy modal ([#27577](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27577))

<br>

---
