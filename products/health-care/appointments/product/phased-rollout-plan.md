# VAOS Phased Rollout

## Goals
1. Transition veterans to new VAOS tool on VA.gov in order to improve online scheduling uptake and veteran satisfaction with online scheduling
2. Minimize risk that new tool won't be accepted by veterans; conversely, maximize chances of veteran acceptance & good press, which should result in higher usage numbers
3. Generate positive perception & goodwill in the veteran community

## How do we get there?
- Leverage a phased rollout strategy to test veteran acceptance of the tool in production
- Introduce the new tool in the context of 'opt-in' to ensure that only veterans who are wiling to accept the risks associated with using a brand-new tool are using it initially
- Monitor core experience metrics very closely at each phase to ensure that we're only introducing the tool to more veterans once we are sure that performance is acceptable compared to the old experience & veteran expectations
- Have a 'No Go' plan in case the tool doesn't perform as expected in production; identifying No-Go issues on a smaller scale will allow us to minimize confusing changes for veterans
- Delay veteran comms until we've successfully launched VAOS on VA.gov fully, so that comms can contain the great feedback from earlier rounds

- Lets us push marketing until we've gotten some good feedback to include
- Minimizes risk that a large number of veterans hit show-stopping problems at once, which could induce them to not trust the tool
  - So basically allows us time to build trust

-----

## Phase 0: Pre-launch & launch prep [Due Pre-Launch]
The goal of this stage is to ensure the tool is holistically ready for production launch
- [VSP pre-launch checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/onboarding/Product%20Development%20Checklist.md) complete
- New feature development stops; focus on integration testing, manual QA testing and bug squashing
- Go / No Go decision for continuing to Phase 1:
  - [ ] All pre-launch checks completed without issue
  - [ ] No show-stopping bugs found in testing
  - [ ] Acceptance Criteria for MVP met (see [MVP Acceptance Criteria](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/README.md#acceptance-criteria) in PO)

## Phase 1: MVP live in UAT on production VA.gov site [Weeks 1 & 2]
The goal of this phase is to understand how the tool works in the production environment and to perform targeted acceptance testing on the tool.
- VAOS available on VA.gov via direct link and possibly behind basic http authentication
- Targeting ~10-25 select veterans to try the various flows (schedule, request, view, cancel) in the new tool
- Any manual SQA production testing can also happen at this phase
- Go / No Go decision for continuing to phase 2:
  - [ ] Minimum number of veterans reached & all flows tested in production with oversight from product & dev teams
  - [ ] SQA checks performed and passed
  - [ ] No critical severity bugs or errors (as prioritized by dev & product) identified

## Phase 2: Increased Tool Reach [Weeks 3 & 4]
The goald of this phase is to gather a statistically relevant usage sample to both compare performance against the legacy tool and also get enough veterans using the tool to surface edge-case bugs, service issues, etc. before a broader roll-out
- Targeting 375 appointment attempts (~2.5% of legacy tool) to get statistically valid data set for comparison
- VAOS available on VA.gov via standard 'new' banner on `/health-care/schedule-view-va-appointments/` page to small percentage of traffic (~10%)
- Go / No Go decision for continuing to Phase 3:
  - [ ] Target sample of ~375 scheduling attempts reached
  - [ ] The tool is performing acceptably compared to legacy VAOS
    - [ ] Conversion rates (requested + direct-scheduled appointments / new appointment starts) are at least in-line with legacy tool (20%+)
    - [ ] No major issues reported by Call Center / IRIS & other feedback mechanisms (e.g., 'feedback' feature on VA.gov)
  - [ ] No major issues reported by Sentry or Grafana for both vets-api and vets-website
  - [ ] Error reports debugged & resolved; any Sentry errors triaged and resolved

## Phase 3: Silent launch on VA.gov [Week 5]
The goal of this phase is to fully launch the tool on VA.gov while paving the way for sunsetting legacy VAOS
- VAOS banner removed from VA.gov; users no longer need to sign up for the tool
- Links to the legacy tool are removed from VA.gov and replaced with links to the new tool & corresponding content is updated
- Banner in MHV / legacy tool replaced with banner indicating sunsetting of the old experience will take place in the future
- Legacy VAOS sunsetting banner to include / link to content explaining what's changing and why
- Veterans can continue to use legacy VAOS to schedule appointments
- Go / No Go decision for continuing to Phase 5:
  - [ ] The tool continues to perform acceptably compared to legacy VAOS
    - [ ] Conversion rates (requested + direct-scheduled appointments / new appointment starts) are at least in-line with legacy tool (20%+)
    - [ ] No major issues reported by Call Center / IRIS & other feedback mechanisms (e.g., 'feedback' feature on VA.gov)
  - [ ] No major issues reported by Sentry or Grafana for both vets-api and vets-website
  - [ ] Error reports debugged & resolved; any Sentry errors triaged and resolved
  - [ ] At least 10,000 scheduling attempts have been made

## Phase 4: Comms & Sunset Legacy VAOS [Week 6+]
The goal of this phase is to complete the scheduling transition from legacy VAOS to VA.gov and let the veteran community know about the new tool
- Comms sent to VSOs, partner organizations, veterans, and any other interested parties
  - Waiting on comms allows us to 1. gradually ramp up volume to the tool and 2. incorporate  good feedback we've gotten into the actual comms
- MHV updated to point to VA.gov for all scheduling functionality
- `veteran.mobile.va.gov/var/v4/` redirects to `va.gov/some-path/vaos`
- There is no rush to this step - we should feel extremely confident in performance of the new experience before sunsetting the old tool
  - Ideally, we would see traffic to MHV scheduling wind down somewhat on its own as veterans choose the new experience
  - Could even add a step that allows veterans to request to use legacy VAOS, e.g. 'Online scheduling is now on VA.gov. [Continue] [Use the old scheduler]'
  - Legacy & new tools can coexist for a time


## OLD_Phase 3: Slow Intro to MHV Users [Week 4]
The goal of this phase is to ramp up usage of the new tool by starting to expose the tool to users of legacy VAOS
- VAOS tool banner shown to an increasingly larger percent of traffic to  `/health-care/schedule-view-va-appointments/` daily, ultimately showing to 100% of traffic
- New banner in legacy MHV appointments content page (myhealth.va.gov/mhv-portal-web/schedule-or-cancel-a-va-appointment-online) to notify veterans to the new tool on VA.gov
- Veterans can continue to use legacy VAOS to schedule appointments
- Go / No Go decision for continuing to Phase 4:
  - [ ] The tool continues to perform acceptably compared to legacy VAOS
    - [ ] Conversion rates (requested + direct-scheduled appointments / new appointment starts) are at least in-line with legacy tool (20%+)
    - [ ] No major issues reported by Call Center / IRIS & other feedback mechanisms (e.g., 'feedback' feature on VA.gov)
  - [ ] No major issues reported by Sentry or Grafana for both vets-api and vets-website
  - [ ] Error reports debugged & resolved; any Sentry errors triaged and resolved
  - [ ] At least 1,500 total scheduling attempts have been made
  - [ ] At least 500 scheduling attempts made by veterans coming into the app via the MHV banner
-----

## Rollback
If a no-go decision is reached in any phase, further rollout should be postponed until issues resolved. It may be necessary to take the tool out of production for a period of time if the issue is severe. Below is some general guidance.

### Problem: Volume does not meet minimum thresholds set forth in the phase criteria
If tool in limited beta, allow more veterans to join the beta. Delay advancement to next phase until minimum thresholds met.

### Problem: Tool conversion performance does not meet minimum criteria
If conversion performance is significantly lower than existing tool's, delay advancement to next phase until issue resolved.
- Request added tracking or add feedback question that would allow us to capture veterans' contact information for follow-up
- Identify the flows that are causing issues and work to design through them

### Problem: Tool error rates high (>5% total error rate for any given component or service)
Depending on severity of the problem, either delay advancement or scale back veteran participation until issues resolved.
- Work through logged metrics to triage & solve the problem
- Delay advancement to next phase until error metrics resolved
- If issue severe (>50% error rate), roll back veteran participation by removing opt-in banner on VA.gov and notification banner on MHV until issue(s) identified and resolved. Direct links to the tool on VA.gov should be redirected to the healthcare appointments static content page instead.
