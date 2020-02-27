# VAOS Phased Rollout

## Goals
1. Transition veterans to new VAOS tool on VA.gov in order to improve online scheduling uptake and veteran satisfaction with online scheduling
2. Minimize risk that new tool won't be accepted by veterans; conversely, maximize chances of veteran acceptance & good press, which should result in higher usage numbers
3. Generate positive perception & goodwill in the veteran community

## How do we get there?
- Leverage a phased rollout strategy to test veteran acceptance of the tool in production
- Introduce the new tool with individual ability to revert to old scheduling experience in order to ensure that only veterans who are wiling to accept the risks associated with using a brand-new tool are using it initially
- Monitor core experience metrics very closely at each phase to ensure that we're only introducing the tool to more veterans once we are sure that performance is acceptable compared to the old experience & veteran expectations
- Have a 'No Go' plan in case the tool doesn't perform as expected in production; identifying No-Go issues on a smaller scale will allow us to minimize confusing changes for veterans
- Delay veteran comms until we've successfully launched VAOS on VA.gov fully, so that comms can contain the great feedback from earlier rounds
    - Lets us push marketing until we've gotten some good feedback to include
    - Minimizes risk that a large number of veterans hit show-stopping problems at once, which could build distrust

## Latest Status of Phased Rollout (2.26.2020)
![Status as of 2/26/2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/product/phased_rollout_as_of_2.26.png)


-----

## Phase 0: Pre-launch & launch prep [Due Pre-Launch]
The goal of this stage is to ensure the tool is holistically ready for production launch
- [VSP pre-launch checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/product/Product%20Dev%20Checklist%20-%20VAOS%20MVP.md) complete
- New feature development stops; focus on integration testing, manual QA testing and bug squashing
- Go / No Go decision for continuing to Phase 1:
  - [ ] All pre-launch checks completed without issue
  - [ ] No critical functionality or accessibility bugs found in manual or automated testing
  - [ ] No critical bugs found in production UAT sessions in any of the core flows (view, cancel, request, schedule)
  - [ ] Acceptance Criteria for MVP met (see [MVP Acceptance Criteria](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/README.md#acceptance-criteria) in PO)

## Phase 1: Initial Public Rollout [Week 1]
The goal of this phase is to gather a statistically relevant usage sample to both compare performance against the legacy tool and also get enough veterans using the tool to surface edge-case bugs, service issues, etc. before a broader roll-out
- Targeting 375 appointment attempts (~5% of legacy tool volume) to get statistically valid data set for comparison
- ~5% of logged-in users on VA.gov automatically opted in (but have pathway for returning to legacy experience)

- Go / No Go decision for continuing to Phase 2:
  - [ ] Target sample of ~375 scheduling attempts reached
  - [ ] The tool is performing acceptably compared to legacy VAOS
    - [ ] Conversion rates (requested + direct-scheduled appointments / new appointment starts) are at least in-line with legacy tool (35%+)
    - [ ] Flows have >=5% error rates (both in scheduling as well as cancelling)
    - [ ] No major issues reported by Call Center / IRIS & other feedback mechanisms (e.g., 'feedback' feature on VA.gov)
  - [ ] No major issues reported by Sentry or Grafana for both vets-api and vets-website
  - [ ] Error reports debugged & resolved; any Sentry errors triaged and resolved
  
 ## Phase 2: Rollout ramp-up [Weeks 2 - 3]
The goal of this phase is to repeat the results from Phase 1 with an ever-increasing audience. Opt-in percentages should be turned up once or twice weekly, preceded by miniature go/no-go meetings to assess performance for the period along the lines of the framework outlined in Phase 1.
- Go / No Go decision for continuing to Phase 3:
    - [ ] All perforamnce criteria in Phase 1 met
    - [ ] At least 90% of logged-in veterans automatically opted in

## Phase 3: Silent launch on VA.gov [Week 4]
The goal of this phase is to fully launch the tool on VA.gov while paving the way for sunsetting legacy VAOS
- VAOS auto-opt-in infrastructure removed; users directed to new VAOS as the default experience
- Links from VA.gov and other unauthenticated pages (e.g., VA Mobile App Store) replaced with links to the new tool & corresponding content is updated
- [TBD] Banner in MHV / legacy tool indicating sunsetting of the old experience will take place in the future
- Veterans can continue to use legacy VAOS to schedule appointments
- Go / No Go decision for continuing to Phase 4:
  - [ ] The tool continues to perform acceptably compared to legacy VAOS as described in Phase 1
  - [ ] At least 8,000 scheduling attempts have been made

## Phase 4: Comms & Sunset Legacy VAOS [Week 5+]
The goal of this phase is to complete the scheduling transition from legacy VAOS to VA.gov and let the veteran community know about the new tool
- Comms sent to VSOs, partner organizations, veterans, and any other interested parties
  - Waiting on comms allows us to 1. gradually ramp up volume to the tool and 2. incorporate  good feedback we've gotten into the actual comms
- MHV updated to point to VA.gov for all scheduling functionality (note: pending bidirectional SSOe integration on VA.gov)
- `veteran.mobile.va.gov/var/v4/` (legacy link) redirects to `va.gov/some-path/vaos`
- There is no rush to this step - we should feel extremely confident in performance of the new experience before sunsetting the old tool
  - Ideally, we would see traffic to MHV scheduling wind down somewhat on its own as veterans choose the new experience
  - Could even add a step that allows veterans to request to use legacy VAOS, e.g. 'Online scheduling is now on VA.gov. [Continue] [Use the old scheduler]'
  - Legacy & new tools can coexist for a time
  
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
