# Cerner CMS Source of Truth Release Plan Template

## Scope of release
[Initiative: Cerner react widgets consume facility/system data from CMS instead of hard-coded array](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/Cerner-Support/cms-source-of-truth/initiative-brief.md)

This is a backend data change that should remain invisible to site users. Thus, this release plan is not a standard plan in regard to exposing the feature to a % of prod users. 

Cerner cutover support epic [#7158](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/7158) includes a subset of tickets that describe this launch: 
* [Add static data build step to content-build #8199](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8199)
* [Add Electronic Health Care Record data query/endpoint #8201](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8201)
* [Cerner, React: read EMHR indicator from JSON/CMS instead of hard-code #8687](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8687)
* [Add feature toggle to switching data source for Cerner (hardcoded vs. Drupal) #9076](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9076)
* [Document new state of Cerner source of truth #9248](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9248)
* [Remove Cerner data source feature toggle and hard coded mechanism #9078](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9078)



## Phase I: Staging User Acceptance Testing, or UAT

Users for this launch are downstream stakeholder teams whose apps rely on the existing hard coded `isCerner` value. We will deploy all code to both Staging & Prod, using a feature toggle that controls whether the Cerner data source is hard coded (Off) or Drupal CMS (On). 

[Documentation in #9248](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9248)

### Stakeholder Testers
VAOS
* Jeff Roof - PM, front end, Point of contact
* Simi Adebowale - Lead Engineer, Point of contact
* Leah de la Costa - Associate PM

MyVA
* Samara Strauss - PO, OCTO auth experience
* Anastasia Jakabcin - VSA auth experience, Sr PM, Point of contact
* Erica Sauve - PM
* Taylor Mitchell - Engineer
* Angela Agosto - Designer

Health apartment
* Tracey Mulrooney - Product lead
* Christopher Froehlich - Engineer lead
* Patrick Vinograd - Engineer lead, Point of contact

### Planning:
- Desired date range or test duration: TBD, tentatively PW Sprint 61, June 20-July 1
- How you'll conduct the testing: In Staging, we will enable the feature toggle. Testers will update application code as needed to fetch the new Drupal CMS data, and test applications to confirm that the user experience does not change from current behavior in prod. 

### Results:
- Teams with confirmed testing results: 
    - [ ] VAOS
    - [ ] MyVA
    - [ ] Health apartment
- Number of bugs identified / fixed: x/x
- Types of errors logged: 
- Any changes necessary based on tests? yes/no 
- If yes, what: 
- If no, results of go / no go meeting: 

## Phase II: Go live / unmoderated production testing

This is not a Staged Rollout. The feature toggle will allow us to seamlessly return to current prod behavior with little to no user impact.

### Planning

- Desired date: Wed July 6, TBD Phase 1 testing results
- How will you make the product available in production while limiting the number of users who can find/access it: In Production, we will enable the feature toggle. All users will be exposed to the change. This was deemed an acceptable risk, as the goal of the project is a seamless/invisible change from a user perspective. 
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: Helpdesk tickets related to Cerner EHR access. If users report issues within any app that has adopted the Drupal CMS source of truth, we can disable the feature toggle and return to hard coded data.

### 2-week results:
- Number of helpdesk issues / bugs filed: x
- Any issues with VA handling/processing?: yes/no
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: 

### 1-month results:
- Number of helpdesk issues / bugs filed: x
- Any issues with VA handling/processing?: yes/no
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: 


## Phase III: Clean up tech debt

### Planning:
- Desired date: July 20, 2022 - Go / no go
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]


## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
1. Which of the assumptions you listed in your product outline were/were not validated? 
1. How might your product evolve now or in the future based on these results?

