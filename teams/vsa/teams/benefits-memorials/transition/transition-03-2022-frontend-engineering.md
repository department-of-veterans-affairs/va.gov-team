# Frontend Engineering transition document


## Table of contents

- [Disability compensation (526)](#disability-compensation-form-21-526ez)
- [Claim Status Tool (CST)](#claim-status-tool-app-cst)
- [Higher-Level Review (HLR 0996)](#higher-level-review-hlr-form-20-0996)
- [Board Appeal (NOD 10182)](#board-appeal-nod-form-10182)
- [Benefits Letters app](#letters-app)
- [Pre-need (10007)](#pre-need-form-40-10007)
- [Burials (530)](#burial-form-21-530ez)
- [Supplemental claim (0995)](#supplemental-claim-form-20-0995)

## Disability compensation (Form 21-526EZ)

Form 526 is in production. A Veteran can file for:
- Original claim
- Claim increase
- Benefits Delivery at Discharge (BDD)

There are numerous sub-forms:
- Intent to file (Form 20-0966) - automatically filed when 526 is started
- PTSD support (Form 781/781a) - for new PTSD submissions
- Disclose information to the VA (Form 4142)
- Unemployability benefits (Form 8940) - **Not yet in production**
- Employment information (Form 4192) - **Not yet in production**

### Monitoring

- [Google Analytics successful submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.dateOption=last30days&explorer-segmentExplorer.segmentId=analytics.eventLabel&_r.drilldown=analytics.eventLabel:disability-526EZ--submission-successful/)
- [Sentry error logs](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&query=is%3Aunresolved+source%3A526EZ-all-claims&sort=priority&statsPeriod=14d) (socks proxy required) - look in the "additional data" body for a list of errors
- [Graphana](https://grafana.vfs.va.gov/d/000000066/form-526-disability-compensation?orgId=1) (socks proxy required)
- [DOMO dashboard](https://va-gov.domo.com/auth/index?redirectUrl=%2Fpage%2F447193050)

### Submission errors

Form 526 has around a 97% successful submission rate. The unsuccessful submissions fall into these areas:

- Most errors are "PIF in use".
  - These issues can only be resolved upstream of EVSS.
  - Our backend recently starting sending out emails to Veterans encountering this problem
  - Coordination with Lighthouse to allow creating a PDF that the Veteran can print and mail is in the works.
- [EVSS validation rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/support/Form526%20Validation%20Rules.docx) have not been fully implemented on the frontend, but may not need to be because of schema restrictions. There is also a [EVSS validation rules Google doc with comments](https://docs.google.com/document/d/141qH9dh5M6C_JxRxkSdS8hygxzi46LlqZh9scOgS5sA/edit) which may be helpful is tracking down any new issues that show up.
- JavaScript errors that pop up occasionally.
  - These are logged in [Sentry error logs](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&query=is%3Aunresolved+source%3A526EZ-all-claims&sort=priority&statsPeriod=14d) (socks proxy required)
  - Some of these issues may be external to Form 526, e.g. using an outdated operating system or browser
  - Sentry events may include an `account_uuid` (not considered PII since it is internal) which can be used to obtain the Veteran's save-in-progress data for testing (this form data is PII, so handle appropriately)
- Incomplete or invalid form data preventing submission:
    - A Veteran may not be able to submit if changes were made on the review & submit page, but required followup questions were not filled in. This is discussed in the "Add PTSD to review & submit" ticket ([#14014](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14014)), but form 526 is unique, right now, in that is has the `showReviewErrors` set to `true` and values set in the `reviewErrors` object within the form config. This adds validation error links to the alert shown when the Veteran attempts to submit - see [pull request #16431](https://github.com/department-of-veterans-affairs/vets-website/pull/16431) for instructions and lots of screenshots.
    - The Design System team is discussing changing the review & submit page. One proposal was to add links that returned the Veteran to the page within the flow instead of allowing inline changes on the review & submit page. This would also require active validation on the entire form that would only allow returning to the review & submit page once there are no longer any validation errors.

### Outstanding tickets

- Pending
  - [ ] Fix typo in schema ([#29394](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29394)) - minor change, but needs coordination
- Needs review/stakeholder review
  - [ ] Page reorder ([#36028](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36028))
  - [ ] New contention ([#1638](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1638)) - no idea on status
  - [ ] 526 errors unsubmittable claims epic ([#33441](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33441))

- Work dependent on another team
  - [ ] Update form routers ([#36088](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36088)) - Design system team need to update Forms system
  - [ ] New disability autocomplete work ([#6006](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6006) & [#30061](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30061)) - Design system team
  - [ ] Add PTSD to review & submit ([#14014](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14014)) - the Form library team is discussing plans to change the review & submit page.
  - [ ] Evaluate analytics `va-additional-info` ([#35050](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35050)) - waiting on Design system team
  - [ ] Add EP code for BDD ([#29527](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29527)) - waiting on EVSS
- Fixed bug ticket followup (to ensure they are fixed)
  - [ ] Federal orders date bug ([#28424](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28424))
  - [ ] Service history start before 13th birthday ([#28417](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28417))
  - [ ] Sentry error followup ([#27926](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27926))
  - [ ] Disability checkbox ([#18378](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18378))
  - [ ] Data remnant ([#1537](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1537))

- Discovery/discussion
   - [ ] Show item count ([#13642](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13642))
   - [ ] Allow copy/paste list into new disabilities ([#13636](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13636))
   - [ ] Skipping sections ([#32236](https://github.com/department-of-veterans-affairs/va.gov-team/issues/32236)) - implementing this will likely require changes to the form system

- Later work
  - [ ] Transition from EVSS to Lighthouse API
  - [ ] Lighthouse may add [disability list](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/disability-benefits/all-claims/content/disabilityLabels.js) as an API endpoint
  - [ ] Facilities endpoint for search (disabled as the API was shutdown). Maybe use the facilities search API?
  - [ ] Release 8940/4192 into production. Feature flag `subform_8940_4192`
  - [ ] Remove feature flags & associated code:
    - [ ] `show526_wizard` (for when the wizard was moved from intro page to `/start`)
    - [ ] `evss_upload_limit_150mb` (code in the CST as well)
    - [ ] `request_locked_pdf_password`
  - There is a plan to either change the wizard to have one question per page, or completely remove it and incorporate wizard questions into the form flow.
  - Discussion & discovery around providing the Veteran a PDF filled in with all of the data they entered if the submission should fail. Maybe provide this on the confirmation page so the Veteran has a record?
  - Consider splitting off subforms into separate forms, or at least make the subforms into separate chapters


## Claim Status Tool App (CST)

Not much has been done to this app, other than updating to use web components and accessibility fixes; but, a bunch of research was done and a redesign was in process.

Some backend preliminary investigation has been done to see if decision letters can be made available in the app. I don't think this would require any, or maybe minimal, work for the frontend.

### Monitoring

- [Graphana](https://grafana.vfs.va.gov/d/WxQ9lkUGz/claims-and-appeals-alerts?orgId=1&from=now-7d&to=now) (`v0/evss_claims_async` charts)

### Outstanding tickets

- Pending
  - [ ] Reexamine eBenefits links ([#21207](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21207)) - awaiting IA review
  - [ ] Label change from "submission date" to "discharge (RAD) date" ([#29078](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29078))
  - [ ] Improve unavailable status message ([#30030](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30030))
  - [ ] Upload issue ([#34034](https://github.com/department-of-veterans-affairs/va.gov-team/issues/34034))
  - [ ] Fix linting issues ([#36054](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36054)) - remaining linting issues require design/UX review since they are links that should be buttons; but we can't view all those pages without an appropriate test user, nor can we add a link style to a button (no longer allowed)
  - [ ] Add older issues ([#38778](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38778)) - pattern needs review by Design system team & a11y review
- Later work
  - [ ] Remove feature flags & associated code - `evss_upload_limit_150mb` (code in 526 as well)
  - [ ] Check if `omni_channel_link` feature flag is still needed?
  - [ ] Time estimates are disabled because of COVID delays (see [#12480](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12480)), find out when this gets added back
  - [ ] CST complete redesign planned
  - [ ] Code cleanup (lots of eslint warnings to be addressed)

## Higher-Level Review (HLR, Form 20-0996)

Higher-Level Review (HLR) version 2 is set to 100% available in production as of February 24, 2022.
Phase 1 involved allowing selection of compensation-only claims, same office selection & choosing an informal conference. Phase 2 (v2) included write-in issues with legacy (SOC/SSOC) statement, a new homeless question, removal of same office and different informal conference time selections. There are a lot of similarities between HLR and the Notice of Disagreement (NOD) form.

The next phase will involve removing the `hlr_v2` feature flag, all the v1 code, removing the wizard, and moving the benefit type question inside the form ([#37470](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37470), Lighthouse API is ready for this change).

### Monitoring

- Google Analytics:
  - [successful submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.dateOption=last7days&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.eventLabel:decision-reviews-va20-0996--submission-successful/)
  - [Visible alerts](https://analytics.google.com/analytics/web/#/savedreport/PAbulmOaT1e5XmlQPZJCdA/a50123418w177519031p176188361/_r.dsa=1&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.eventAction&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22RE%22,%22www.va.gov~2Fdecision-reviews~2Fhigher-level-review~2Frequest-higher-level-review-form-20-0996%22,0%5D,%5B0,%22analytics.eventAction%22,%22PT%22,%22error%22,0%5D%5D&_.advseg=&_.useg=&_.sectionId=/) (can't load issues)
- [Sentry error logs](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&query=is%3Aunresolved+source%3A0996-higher-level-review&sort=priority&statsPeriod=14d) (socks proxy required) - look in the "additional data" body for a list of errors
- [Graphana](https://grafana.vfs.va.gov/d/qCRjZjDMk/hlr-higher-level-review?orgId=1) (socks proxy required)
- [Lighthouse API calls](https://vpc-dvp-prod-kong-logs-lxxvek5z56mgfqmvkwzjeqiadi.us-gov-west-1.es.amazonaws.com/_plugin/kibana/app/visualize#/edit/052d79e0-3e34-11eb-b8d1-a1cd19a6562c?_g=h@d01ba18&_a=h@d5bb17f)
- [DOMO dashboard](https://va-gov.domo.com/auth/index?redirectUrl=%2Fpage%2F447193050)

### Outstanding tickets

- Pending
  - [ ] Update benefit selection ([#37470](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37470))
  - [ ] Add VSO question ([#36135](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36135))
- Work dependent on another team
  - [ ] Update form routers ([#36088](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36088)) - Forms system needs to be updated
  - [ ] HLR tier 3 support ([#37913](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37913)) - awaiting Luke Majewski to provide Veteran's `account_uuid` for further investigation
  - [ ] Content recommendations for verify your identity alert ([#38849](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38849)) - this ticket is for HLR, but will also apply to NOD
- Fixed bug ticket followup (to ensure they are fixed)
  - [ ] Sentry error followup ([#27926](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27926))
- Later work
  - [ ] HLR - move entire app to `src/applications/appeals` folder, since it's an appeal and doesn't belong in `disability-benefits`
  - [ ] Add claimant ([Lighthouse schema v2](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/appeals_api/config/schemas/v2/200996.json#L109))
  - [ ] Lighthouse may be combining HLR & NOD get contestable issues endpoint. Check with backend to see if this will change the API the frontend is calling
  - [ ] Remove `hlr_v2` feature flag & associated code
  - [ ] Remove `list_loop` feature flag & associated code - this includes the previous contact info modal code
  - [ ] Create `minimal-test-v2.json` for e2e testing
  - [ ] Update `hlr-contact-loop.cypress.spec.js` so contact "update" test works (coordinate with authenticated experience team) - see [tech docs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/engineering/NOD_frontend_details.md#contact-loop-testing)
  - [ ] Update area of disagreement page to be a custom page and use the checkbox group component - see [tech docs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/engineering/NOD_frontend_details.md#area-of-disagreement-grouped-checkboxes)
  - [ ] Add `reviewErrors` to form config for review & submit page errors

## Board Appeal (NOD, Form 10182)

The Notice of Disagreement form has not yet been released into production. It was ready, and presented to the Board in June 2021. It has since been updated to use the v2 schema, and been through many iterations awaiting the Board's final approval to be published in production.

Lighthouse reported that version 2 of the schema is ready to be implemented, changes outlined in "larter work" entry under "outstanding tickets". But note, that a `representativesName` (v1) and `representative.name` (v2) are included in Lighthouse's schema, but the [Board asked us not to include this entry in the form](https://dsva.slack.com/archives/CSKKUL36K/p1623876169114300).

### Monitoring

- Google Analytics successful submissions - pending
- [Sentry error logs](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&query=is%3Aunresolved+source%3A10182-board-appeal&sort=priority&statsPeriod=14d) (socks proxy required)
- [Graphana](https://grafana.vfs.va.gov/d/Zvfdzf_Gz/nod-notice-of-disagreement?orgId=1) (socks proxy required)
- [DOMO dashboard](https://va-gov.domo.com/auth/index?redirectUrl=%2Fpage%2F447193050)

### Outstanding tickets (not launch blocking)

- Needs review/stakeholder review
  - [ ] Release NOD into production - `form10182_nod` feature flag
  - [ ] Need help phone number? ([#24984](https://github.com/department-of-veterans-affairs/va.gov-team/issues/24984)) - no phone number in the PDF, which number to use?
- Work dependent on another team
  - [ ] Update form routers ([#36088](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36088)) - Forms system needs to be updated
  - [ ] QA review ([#21046](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21046))
  - [x] Content recommendations for verify your identity alert ([#38849](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38849)) - this ticket is for HLR, but will also apply to NOD
- Fixed bug ticket followup (to ensure they are fixed)
  - [ ] Sentry error followup ([#27926](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27926))
- Later work
  - [ ] Update `10182-contact-loop.cypress.spec.js` so contact "update" test works (coordinate with authenticated experience team) - see [tech docs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/engineering/NOD_frontend_details.md#contact-loop-testing)
  - [ ] Update area of disagreement page to be a custom page and use the checkbox group component - see [tech docs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/engineering/NOD_frontend_details.md#area-of-disagreement-grouped-checkboxes)
  - [ ] Lighthouse may be combining HLR & NOD contestable issues endpoint. Check with backend to see if this will change the API the frontend is calling

  - [ ] Update to use [Lighthouse API v2](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/appeals_api/config/schemas/v2/10182.json)):
    - [ ] Submit `countryCodeISO2` instead of `countryName`
    - [ ] Add extension reason. `extensionRequest` (boolean) & `extensionReason` (string)
    - [ ] Add appeal of VHA denial - `appealingVhaDenial` (boolean)
  - [ ] Add `reviewErrors` to form config for review & submit page errors - see [#25114](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25114)

## Letters App

This app has needed some maintenance since this team was started, mostly around the verify address step. There is some mobile app work being done to duplicate this app. Some accessibility updates have been completed recently, but it still needs work.

### Outstanding tickets

- Pending
  - [ ] Missing info ([#21066](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21066))
  - [ ] Support request ([#36869](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36869))
  - [ ] Replace e-benefits links ([#39899](https://github.com/department-of-veterans-affairs/va.gov-team/issues/39899)) - awaiting IA & content review

- Later work
  - [ ] Code cleanup (lots of eslint warnings to be addressed)

## Pre-need (Form 40-10007)

- Miscellaneous fixes have been done:
  - Update expiration date
  - Accessibility fixes
  - Content updates
  - Switch React to use web components
  - Another team updated the `race` options
- I don't know if anyone is actively monitoring this form.

This form still needs a lot of work; see later work in outstanding tickets section.

### Outstanding tickets

- Pending
  - [ ] Improvements epic ([#27578](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27578))
  - [ ] Follow up support ([#36030](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36030)) - not sure if this is for Burial or Pre-need.
- Needs review/stakeholder review
  - [ ] Update privacy modal ([#27577](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27577)) - need content feedback
  - [ ] Use OMB info on intro page (related [#27577](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27577))
  - [ ] Update respondent burden text ([#27430](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27430))
- Work dependent on another team
  - [ ] Allow Veterans to enter full address ([#34987](https://github.com/department-of-veterans-affairs/va.gov-team/issues/34987))
  - [ ] Update form routers ([#36088](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36088)) - Forms system needs to be updated
- Later work
  - [ ] Make cemetary autocomplete work locally & in staging
  - [ ] Prefill telephone & email
  - [ ] Fix review & submit accordion style
  - [ ] Usability testing ([#28873](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28873), placeholder?)
  - [ ] Code cleanup (lots of eslint warnings to be addressed)

## Burial (Form 21-530EZ)

The app hasn't been touched, as far as I know, since release. I think the problem is that it's lumped together with pre-need, but it's a completely separate form.

### Outstanding tickets

- Pending
  - [ ] Update form ([#10180](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10180)) - [21P-530EZ PDF online](https://www.vba.va.gov/pubs/forms/VBA-21P-530EZ-ARE.pdf)
  - [ ] Follow up support ([#36030](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36030)) - not sure if this is for Burial or Pre-need.
- Work dependent on another team
  - [ ] Update form routers ([#36088](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36088)) - Forms system needs to be updated

## Supplemental claim (Form 20-0995)

Research & discovery work in progress. [Lighthouse endpoints](https://dev-developer.va.gov/explore/appeals/docs/decision_reviews?version=current) in place, but no schema.


## Overall work (all apps)

### Improvements

- We're trying to change all the unit tests to use [React testing library](https://testing-library.com/docs/), and the code base is still littered with unit test that use [skin-deep](https://github.com/glenjamin/skin-deep) and [enzyme](https://enzymejs.github.io/enzyme/). The current recommendation is to write all new tests using testing library, but eventually we'll need to convert all the old tests over
- Review and restore skipped (flaky) unit & e2e tests.
- There may be many feature flags that are no longer being used, or have been enabled for a long time, we need to remove the feature flag code, and the flag itself.
- There is a plan to remove all wizards, so we need to incorporate wizard into the form so that there is only one question per page (Form 526 & HLR needs this).
