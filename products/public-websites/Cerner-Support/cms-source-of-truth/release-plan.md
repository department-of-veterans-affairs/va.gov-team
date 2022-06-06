# Cerner CMS Source of Truth Release Plan - DRAFT

## Scope of release
Initiative brief: [Initiative: Cerner react widgets consume facility/system data from CMS instead of hard-coded array](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/Cerner-Support/cms-source-of-truth/initiative-brief.md)

This is a backend data change that should remain invisible to site users. 

Cerner cutover support epic [#7158](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/7158) includes a subset of tickets that describe this launch: 
* [Add static data build step to content-build #8199](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8199)
* [Add Electronic Health Care Record data query/endpoint #8201](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8201)
* [Create async JS API (within FE code) to make JSON facility data available to products #9306](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9306)
* [Cerner, React: consume new CMS-driven Cerner facility API (with toggle for fallback) #8687](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8687)
* [Create feature toggle to enable switching data source for Cerner widgets ONLY (hardcoded vs. Drupal) #9076](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9076)
* [Document new Cerner API for other product teams to consume #9248](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9248)
* [Remove Cerner data source feature toggle and hard coded mechanism #9078](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9078)


### Cerner cutover schedule
During the testing / launch period for this change, additional Systems will cutover to Cerner. Timing for each phase is planned with respect to the following launches: 
* June 13 - White City, Roseburg
* June 25 - Boise
* July 16 - Anchorage
* August 27 - Puget Sound


## Phase I: PW validation in Staging
The Public Websites (PW) team will deliver an API ([#9306](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9306)) that makes Cerner/VistA facility data available to FE components. The API will be independent of the current hard-coded/synchronous approach, so product teams can decide when to integrate and switch from previous hard coded data source to the new API.

PW will integrate against the new API for Cerner React widgets, e.g. Schedule and manage health appointments. 

PW will place the API behind a feature toggle that controls the Cerner data source:
* Off = Hard coded data
* On = Drupal CMS data

In Staging, we will verify the API, the front-end integration, and the feature toggle. 

Code changes required: 
- `content-build` - Creates JSON factory static data build step. Merged/deployed to Staging > Prod, May 2022.
- `vets-api` - Creates new feature flag, and can merge/deploy with no user impact when complete.
- `vets-website` - Integrates with the API and feature flag. All changes controlled by feature flag, once merged/deployed.


### Planning
- **Desired date range or test duration**: 
    - Deploy and enable Staging feature flag: PW Sprint 61, June 20-July 1
    - Staging integration testing: PW Sprint 61, June 20-July 1
- **How you'll conduct the testing:**
    - We will verify a [truth table](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9076#issuecomment-1130592462) of combinations for:
      - Hard coded data
      - EHR System: VistA, Converting to Cerner, Cerner
      - Feature flag: Off (hard coded data), On (Drupal SSOT)

### Results 
- Number of bugs identified / fixed: x/x
- Types of errors logged: 
- Any changes necessary based on tests? yes/no 
- If yes, what: 


## Phase II: Validate in Production

This is not a Staged Rollout. Following Staging validation, we will enable the feature toggle in production. Code that has integrated the new API will use Drupal SSOT. **_<TO CONFIRM: with @ryguyk, how will toggle/data work for products that have not adopted the API?>_**

### Planning

- **Desired date**: PW Sprint 61 (June 20-July 1), or Sprint 62 (July 5), pending Staging testing results
- **Go / No Go**: (ready/not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]
- **How will you make the product available in production while limiting the number of users who can find/access it:** 
    - We will not limit the number of users exposed to the change. In Production, we will enable the feature toggle, which will **_[VERIFY what happens]_**. This was deemed an acceptable risk, as this is a backend data change, and the goal of the project is a seamless/invisible change from a user perspective. 
- **What metrics-based criteria will you look at ("success criteria")?**: 
    - Helpdesk tickets related to Cerner EHR access.
    - TBD analytics deviation from baseline
- **Response plan**:
    - If metrics or users are negatively impacted, we will disable the feature toggle and return to hard coded data.    

### 2-week results:
- Number of helpdesk issues / bugs filed: x
- Any issues with VA handling/processing?: yes/no
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: 
- Any analytics affected? yes/no
- If yes, what: 

### 1-month results:
- Number of helpdesk issues / bugs filed: x
- Any issues with VA handling/processing?: yes/no
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: 
- Any analytics affected? yes/no
- If yes, what: 




## Phase III: API adoption

Integration testers for this release are downstream stakeholder teams whose apps rely on the existing hard coded `isCerner` value. 
* VAOS
* MyVA
* Health apartment

[#9248](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9248) will capture final documentation for integration testing.

### Planning:
- **Desired date range or test duration**: 
    - Staging integration testing: July 18 - August 1
- **How you'll conduct the testing:**
    - PW will enable the Staging feature toggle. 
    - Testers will update application code as needed to fetch the new Drupal CMS data, and test applications to confirm that the user experience does not change from current behavior in prod. 

### Results:
- Teams with confirmed testing results: 
    - [ ] VAOS
    - [ ] MyVA
    - [ ] Health apartment
- Number of bugs identified / fixed: x/x
- Types of errors logged: 
- Any changes necessary based on tests? yes/no 
- If yes, what: 




## Phase IV: Clean up tech debt

### Planning:
- **Desired date**: Mon Aug 29, 2022
- If metrics from 2-week and 1-month results are acceptable, and feature flag has been enabled in production successfully for that period of time, we will remove the hard coded data path and the feature flag. Drupal CMS data will become the new baseline in production.

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
1. Which of the assumptions you listed in your product outline were/were not validated? 
1. How might your product evolve now or in the future based on these results?

