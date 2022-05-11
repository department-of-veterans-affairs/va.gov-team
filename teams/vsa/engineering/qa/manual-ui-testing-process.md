# PTEMS-QA Manual-UI Testing Process (for Platform Staging Reviews)

PTEMS-QA currently supports manual-ui testing to VA.gov Applications Teams to satisfy [Platform Staging Review][platform-stg-rvw] requirements.  Capacity per team has increased since the previous VSA contract, and PTEMS-QA should soon start providing more support beyond preparing for Staging Reviews, so stay tuned!

## Who should read this?

- PTEMS-QA Engineers/Testers
- ALL PTEMS VA.gov Applications team-members [especially Product Managers]

## Manual-UI testing on Staging

Both Application-Team & QA will collaborate & coordinate test planning and use-/test-cases development.

Ideally, once QA Test Plan/Cases are mature and Product/Feature is stable/testable on Staging,  PTEMS-QA will handle actual Test Runs.

### Important timings

- **At least 2 Sprints (4 weeks) before opening Platform Staging Review request-ticket**: Product Manager (PM) opens [PTEMS-QA Test Plan ticket][ptems-qa-test-plan-tic].
- **At least 1 Sprint (2 weeks) before scheduling VSP Staging Review meeting**: PM notifies PTEMS-QA to schedule QA test-runs -- Platform requires all artifacts to be ready for review at least 4 workdays before the meeting.

### Important Application-Team artifacts

These artifacts should be ready before opening PTEMS-QA Test Plan ticket:

- **Use Cases**: Product Team should document Use Cases and share with QA, so that Test Cases can be properly developed.
- **Form-flow diagrams**: For form-based products/features, Product Team should supplement above Use Cases with flow-diagrams.
- **Design/Copy references**: Product Team should document designs and/or copy and share with QA, so that visual-testing steps can be included in Test Cases.
- **Staging test-accounts**: For authenticated Use Cases, Staging test-usernames must be provided.  NOTE: Accompanying API-mockdata should be in-place on Staging to support each Use Case.


### Process flow

#### Matrix flowchart
![PTEMS-QA Manual-UI Testing matrix-flowchart](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/qa/images/manual-ui-testing-process-flow.png)


#### Flow steps

The required steps of the Process are as follows:

1. At beginning of Build phase, **minimum 2 sprints (4 weeks) before requesting [Platform Staging Review][platform-stg-rvw]**, **Application-Team PM opens a [PTEMS-QA Test Plan ticket][ptems-qa-test-plan-tic]** to signal/start of test-planning:
    - Add self (PM) to Assignees
    - Add links[^1] to relevant Product/feature docs/tickets:
        - Product/feature Outline
        - Epic(s)
        - Copy decks \[unless incorporated into Design mockups\]
        - Design mockups[^2]

1. **QA acquires Product/feature knowledge** based on above info provided in Test Plan ticket:
    - Product Team should be available for questions/clarifications on provided info.

1. **Product Team documents Use Cases** to ensure coverage of the targeted changes.
    - **PM & Designer(s)** document all relevant Use Cases.  Link Test Plan ticket to a Use-Cases doc in va.gov-team repository's Product/Feature/Project folder \[[use this template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/product-use-cases-template.md)].
    - **Engineers** finalize Use Cases by mapping them to Staging test-accounts.  Each account-/data-specific Use Case should be supported on Staging with appropriate API (mock-)data to ensure testability.
    
1. **QA creates Test Plan & Cases**, based on Use Cases developed above in Test Plan ticket.
    - Test Cases may outnumber Use Cases. A given account-specific Use Case may branch off into different "flows" -- e.g., a form may behave differently based on selection of a form-option.
    
1. At beginning of Validate phase, **minimum 1 sprint (2 weeks) before Staging Review meeting**, **PM schedules test-runs with QA**.  Test-runs must be completed, and relevant QA artifacts generated, at least 4 workdays before Staging Review meeting.
    
1. **QA creates & executes QA Test Runs**\*:
    1. QA creates Test Runs in [TestRail](https://dsvavsp.testrail.io/) for the finalized Test Cases.  
    2. QA executes Test Runs, logs any defects discovered, and generates QA artifacts for Platform-QA reviewer.
    
1. **PM requests Staging Review**:
    - Open a Staging Review ticket, requesting the meeting to be scheduled appropriately[^3] for completion of PTEMS-QA test-runs.  Platform-QA requires PTEMS-QA artifacts to be provided at least **4 workdays** before the meeting, in order to have proper QA-feedback prepared.

1. **QA reports test-results**:
    - Once test runs are completed, QA generates TestRail reports.
    - QA adds QA-artifact links to Test-Plan and Staging-Review tickets.

[^1]: Links to living documentation are preferred, so that references won't have to be manually updated.
[^2]: If you have to provide screenshot instead of link, be sure NOT to take one from Staging, which would constitute a "circular" requirement -- validating Staging against Staging -- which would never fail testing.
[^3]: Basically, the meeting should be 2 weeks from the time you schedule test-runs with PTEMS-QA.  PTEMS-QA needs 3-5 days' lead-time to schedule test-runs, then 1-2 days to execute the test-runs and provide QA-artifacts, then Platform-QA requires 4 days to schedule & conduct its review of the artifacts in prep for the meeting.

-----

### See also

- [Manual-UI Testing: Tips & Tricks][manual-tips-tricks]

[platform-stg-rvw]: https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Staging-review.1810137181.html
[ptems-qa-test-plan-tic]: https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=tlei123&labels=ptems-qa,ptems-qa-test-plan&template=ptems-qa-test-plan.md&title=%5BProduct%2FFeature%5D+PTEMS-QA+Test+Plan
[manual-tips-tricks]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/qa/manual-testing-tips-tricks.md
