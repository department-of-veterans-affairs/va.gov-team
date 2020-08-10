# VSA-QA Process

VSA QA Engineer: Tze-chiu Lei \[call me "Zay"] (GitHub @tlei123)(Slack @Tze-chiu Lei)

This VSA-QA Process is currently a **subset** of [Platform's template process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/process.md), and should expand as QA staffing increases.

VSA-QA's **current capacity** can only accommodate **manual-UI testing on Staging environment** to satisfy Platform's [Staging Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review) requirements.

## Regression testing

\[TBD] Once VSA-QA capacity increases, process documentation will be developed here.

For now, we're relying on the Product/Feature's **existing, automated unit- and e2e-tests** developed & maintained by Product-Team Engineers.

## Manual-UI testing on Staging \[for VSP Staging Review]

Both Product Team & QA will collaborate & coordinate test planning and test-case development.

Ideally, once Test Plan and Test Cases are mature, VSA-QA will handle actual Test Runs.  In the event that QA capacity/scheduling cannot acoommodate Test Runs in time for any Product/Feature's Staging Review, Product-Team members may need to conduct Test Runs themselves.

### Process Flow

![Flowchart](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/images/VSA-QA-Process-Flow.png)

The required steps of the VSA-QA Process are as follows:

1. Indeally, 2 sprints before a product/feature's expected [Platform Staging Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review), **VSA Product-Team opens a [VSA-QA Test Plan ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=tlei123&labels=vsa-qa&template=vsa-qa-test-plan.md&title=%5BProduct%2FFeature%5D+VSA-QA+Test+Plan)**:
    - Add link to Epic ticket
    - Add link to Pre-Launch Checklist \(or ensure Epic ticket has this link) \[See [Product Development Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Product%20Development%20Checklist.md) for checklist guidelines]
    - Ensure that Test Plan includes documentation of (or links to):
        - UX Design comps
        - User scenarios/stories.  Either:
            - Create list directly in the Test Plan ticket; or
            - Link to separate Use-Cases doc \[[use this template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/product-use-cases-template.md)].

1. **Product Team & QA collaborate to create a Test Plan** that ensures coverage of the targeted changes.
    - QA \[or Product Team if/when QA Engineer is not available for for urgent reviews] creates a Test Plan and Test Cases in [TestRail online test-case management system](https://dsvavsp.testrail.io/) (TCMS), based on info provided in Test Plan ticket.  \[Product-Managers should have a Product-Team TestRail account -- request one from Peter Hill if necessary.]. See [VSP's TestRail docs/guideliness](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/testrail/getting-started.md) as needed.

1. **QA creates Test Cases**.  Product-Team Designers/Developers & QA should start collaboration early, so as to ensure all testable scenarios have matching test cases. 
    - We recommend that you create and execute manual test cases for core user journeys in your product.
    - A single user story may require several test cases in order to provide full coverage.
    
1. **Product Team reviews & approves Test Plan & Test Cases**.
    - Review plan & cases in [TestRail](https://dsvavsp.testrail.io/)
    - Request changes in Test Plan ticket, or just make edits directly in TestRail if desired.
    - After requested changes are made and accepted, signify approval in Test Plan ticket -- check off appropriate items under ticket's **Definition of Done**.

1. **QA \[and Product-Team members if necessary] create(s) & execute(s) QA Test Runs**:
    1. QA creates Test Runs in [TestRail](https://dsvavsp.testrail.io/) for the approved Test Cases.  
    2. QA (and Product-Team members if necessary) execute Test Runs, and logs any defects discovered.

1. **QA reports test-results**:
    - Once test runs are completed, QA generates [TestRail reports](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#artifact-inputs-7)
    - QA adds report links to VSA-QA Test Plan ticket.
    - Product Team copies report links into any Platform Staging Review request ticket that may already be Opened.
