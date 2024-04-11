### Last updated: 4/11/2024
----
# Table of Contents

Click the link to navigate to a section.👇
- [Executive Summary](#executive-summary)
- [Stakeholders](#stakeholders)
- [Vision](#vision)
- [Mission Critical Challenges](#mission-critical-challenges)
- [Product Strategy](#product-strategy)
- [Potential Initiatives](#potential-initiatives)
- [Outcome-Based Roadmap](#outcome-based-roadmap)
- [Planning Boards](#planning-boards)
- [Decision Reviews Service Diagrams](#decision-reviews-service-diagrams)
- [Access and Testing](#access-and-testing)
- [User Logins](#user-logins)
- [Test Rail](#test-rail)
- [Defect Triage Process](#defect-triage-process)
- [Status Codes and Error Messages](#status-codes-and-error-messages)
- [Analysis Steps](#analysis-steps)

# Executive Summary

In 2023, VA.gov achieved the major milestone of releasing of all decision review forms on VA.gov, enabling Veterans to file for reviews and appeals to decisions about their claims via self-service. With the MVP product line now in place, the product strategy will prioritize stability, transaction growth, and a holistic, personalized experience. Decisions that inform roadmap priorities, experiment scope, and KPIs are made based on their potential to help Veterans accomplish their top Decision Review tasks, increase VA.gov transactions resulting in favorable outcomes, and improve transaction integrity. 

## Stakeholders
| Team / Business Line    | Contact(s)               | Role                                 | This Person Helps With....                                                                                             |
|-------------------------|--------------------------|--------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Lighthouse              | Michael Hobson           | Decision Reviews API Product Manager | Questions about API requirements, prioritization for initiatives requiring an endpoint.                                |
| VBA                     | Alejandro Mendelioflores | Business Analyst                     | SME for policy and legal requirements pertaining to Supplemental Claim and Request for Board Appeal forms.             |
| VBA                     | Tim Wagner               | Business Analyst                     | End-to-end testing in lower environments, contact for Doma and Data Dimensions teams, general CMP/EMMS API questions.  |
| VBA                     | Jacob Shepard            | Business Analyst                     | End-to-end testing in lower environments, contact for Doma and Data Dimensions teams, general CMP/EMMS API questions.  |
| BVA                     | John Gosnell             | POC for the Board                    | Primary stakeholder / decision maker for the Board.                                                                    |
| BVA                     | William Rollins          | BVA Intake team member               | SME for Board Appeal intake processes and legal constraints.                                                           |
| Centralized Mail Portal | Melissa Feidler          | Team Contact                         | Contact for Doma and Data Dimensions teams, CMP/EMMS API questions pertaining to requirements.                         |
| Caseflow                | Anita Lutonsky           | Team Contact                         | Questions about Caseflow capabilities, APIs, and requirements.                                                         |

## Vision
Our vision for the next stage of the product line's journey is to transform Decision Reviews from individual forms with sporadic content,into a personalized experience rivaling the value Veterans get from VSOs and accredited representatives. On VA.gov, we will offer Veterans the benefits they often seek VSOs for without introducing risks into their filing process by adding them to the in-line form experience while also making it clear that we are building these forms and submitting them on their behalf so the value is not hidden in the design.The Decision Review product line will transform into an easy-to-explore, trustworthy hub that provides the most sought-after resources for understanding the differences between each pathway, determining appeal eligibility and filing readiness to reduce undesired outcomes, and filing personalized claims confidently. No hacks or “gotchas”.

## Mission Critical Challenges
*"This new process is so harsh. Things have changed so much I need to check what options are available now. You can’t always work with someone with these things." - Veteran Research Participant*

Veterans struggle to connect their use case to the Decision Reviews experience on VA.gov. Below are problem themes related to the current experience:

- Confusing login experience 
- Page load issues make navigation difficult
- Forms are not easy to find
- No singular entry point into the decision review experience
- User experience blends pathways for learners and doers
- Lots of content with no connection to why it matters to the Veteran
- Deadlines and actions are hidden or lost in correspondence letters
- Service downtime
- Confusing / missing actionable error messages

## Product Strategy
Our latest research into the challenges faced by Veterans on VA.gov indicates that many visit static content and forms seeking answers to nuanced questions appeals, or to have a desire to file a decision review with the most compelling narrative and evidence possible. Many are unsatisfied with the website's performance, unyielding search tools, complex static content, and confusing navigation experience, leading to form and search abandonment, low content engagement, high page exits, site bounces, and low CSAT scores.

To address these, we aim to incrementally build distinct flows to accommodate cohorts of users based on the tasks they set out to complete while visiting Decision Review static content and forms. 
- File a decision review with a compelling narrative
- Understand the differences between decision reviews
- Determine if a decision is eligible for a decision review
- Speak to someone about a decision review that is in progress

These task categories may be interpreted as sets of "jobs to be done", iterated through design experiments to refine our understanding of the problems and symptoms contributing to each and design solutions that are accessible to the broadest audience possible. To execute our strategy, we propose working "outwards" from the individual forms to balance quick wins and independent work against strategic initiatives that require collaboration across teams. 

## Potential Initiatives

### Phase 1: File a decision review with a compelling narrative

#### Veterans frequently seek alternative filing methods that take the guesswork out of ancillary forms, allow them to share compelling narratives in support of their claim, and help them get their claims prioritized.

<details closed>
<summary>In-line Statement in Support of a Claim (VA Form 21-4138)</summary>
<br>

**Proposed Value**: A significant portion of qualitative Medallia feedback shows that Veterans are frustrated by their inability to explain why they are submitting a decision review. Many mistakenly believe that the survey can be used for this purpose and add their narrative and claim details, and personal information to the survey's text field in hopes that someone will contact them about their decision review. Form 4138 is one of the most common forms Veterans and VSOs use to explain service connection and evidence submitted with a claim or appeal, and is amongst the top three forms submitted with a decision review, including supplemental claims that receive a favorable decision. 

**Core Bet**: We believe if Veterans know this form is built into the current filing experience, they will be more likely to submit a decision review on VA.gov. 	

**Solution Approach Nuggets**
- Integrate the 4138 form text field into each DR form
- Remove small text fields on forms that contribute to form abandonment
- Use content to inform Veterans that we are submitting this form on their behalf
- Generate and submit the PDF as an ancillary form 

**Feasibility and Risk**: We have previously built in-line ancillary forms for other decision reviews, for example 20-0995 includes 0966 and 21-4142 as automated and seamless steps within the form, and have tested the usability of this approach. Much of the code can be borrowed from existing features. Code for this feature will be added to our existing suite of tests and transaction observability tools quickly. Combined, this reduces the overall cost of shipping the feature.

**Desired Outcome(s)**
- Increase in VA.gov form submission
- Increase CSAT scores 

**Performance Indicators**
- Conversion rates for users who visit this URL in the form funnel
- Reduction in form exits on form URLs with small text boxes
- Reduction in low quantitative CSAT scores on form URLs
- Reduction in qualitative CSAT feedback on form URLs from Veterans leaving claim narratives in the survey 

</details>

<details closed>
<summary>Veteran Service History and Eligibility: PACT Flashes</summary>
<br>

**Proposed Value**: Veterans who were previously denied PACT benefits due to an inability to connect their disability to their time in service may feel more confident about filing a supplemental claim if they know VA has reviewed their military history for eligibility. Relatedly, feedback in VA.gov surveys from static content pages in the "Decision Review" and "Resources" sections show that Veterans are still confused about their eligibility for PACT benefits, and they're not finding the answers they seek on these pages, resulting in site bounces, form exits, and low CSAT scores. 

**Core Bet**: We believe if Veterans see their eligibility when they view the online Supplemental Claim form, they will be more likely to submit a decision review on VA.gov. 	

**Solution Approach Nuggets**
Use flash data available in the Veteran Service History and Eligibility API
Insert an alert at on the form’s /introduction URL
Add content explaining how the data was gathered and encourage Veterans to submit a Supplemental Claim

**Feasibility and Risk**: Data used to create the API “flashes” may not account for Veterans who have already submitted a PACT Supplemental Claim. Content needs to be tested for usability.

**Desired Outcome(s)**
- Increase in VA.gov PACT submissions resulting in a favorable outcome
- Increase CSAT scores 

**Performance Indicators**
- Conversion rates for users with PACT flashes who visit this URL in the form funnel
- Reduction in form exits on /introduction URL
- Reduction in low quantitative CSAT scores on form’s URLs
- Increased percentage of PACT supplemental claims filed on VA.gov vs. paper submissions

</details>

<details closed>
<summary>Backup Process and Transaction Observability</summary>
<br>
**Proposed Value**: Due to the various integrated services that steward our data, VA.gov submissions are always at risk of experiencing transient errors or code changes that can cause silent failures. An ideal backup process will provide a clear path to diagnosis and recovery, and reduce costs incurred by: lengthy technical discovery, time spent waiting for diagnostic data, custom code solutions, manual processes, administrative overhead, and human error.

**Use Cases**
A Veteran believes they submitted a decision review with evidence and/or ancillary forms. Unbeknownst to them: 
- Scenario 1: The decision review PDF succeeded, but evidence and/or ancillary forms failed. Their claim is at risk of unfavorable outcomes. Business lines are at risk of legal action against them.
- Scenario 2: Both the decision review PDF AND evidence and/or ancillary forms failed. Their claim has not been recieved by VA and is not being processed, causing confusion, frustration, low trust, and duplicate submissions. 

**Solution Approach**: A comprehensive backup process should accomplish the following:

_Diagnosis_
- Transactions are fully observable through storage in VBMS.
- We're alerted as soon as possible when data fails at any stage in the transaction.
- Logs tell us exactly when and where data failed, including all downstream systems.
- Logs don't have false signals that misdirect our time and attention (examples: errors that are triaged by a downstream team or statuses that aren't reliable). 
- Logs can be revisited indefinitely, no re-hydration needed, no time restrictions.
- All original submission data is secure and retrieveable with no time restrictions.

_Communication_
- Veterans are made aware as soon as possible using the email they provided, including: what happened, what data was impacted, and any actions they can take.
- Claim processors and busines lines are made aware of the error and any data affected.

_Automatic Remediation_
- Data is enqueued and scheduled to retry in the order that it was recieved.
- The original submission date is preserved so as not to affect the date of award.
- Claims can be mapped to evidence and/or ancillary forms through a reliable common identifier (not timestamps).
- Retries don't silently stop or endlessly continue.
- Retry exhaustion is logged and triggers both a Watchtower and team notification.

_Manual Remediation_
- There is an established and time bound process, approved by OCTO and the business line.
- Owners are assigned to each step.
- The process is documented for future use, including the Definition of Done for remediation. 

**Desired Outcome(s)**
- Remediation is operationalized, fault tolerant, and scalable with as little manual invervention and custom code needed as possible.
- No transactions accepted by our products have a fatal error.

**Performance Indicators**
- Reduction in recovery time and cost.
- Reduction in new custom code changes needed to manage the functionality.
- Less VA.gov claim delays and unfavorable outcomes compared to paper submissions.
- Increase in number of form and evidence submissions for appeals forms.
- Decrease in transaction time for VA.gov submissions compared to paper.

</details>

---

### Phase 2: Personalized decision review experience

#### Moving outward from the forms, we'd address challenges with static content that confuses and frustrates Veterans, leading to reduced trust and site abandonment. These challenges relate to broader navigation issues on the website and require close collaboration with the teams that own content, architecture, and search features. 

<details closed>
<summary>Compare Decision Review Options: Part 1 (Content Consolidation)</summary>
<br>

**Proposed Value**: A significant portion of qualitative feedback in surveys from static content pages shows that Veterans feel the content is confusing at best and deliberately misleading at worst, leading to a reduction in trust and a low-quality experience on VA.gov.

**Core Bet**: We believe that by reducing the number of content pages Veterans have to find and read to guess their eligibility to a single-page layout with simple comparative content, they will be more likely to submit a decision review on VA.gov. 		

**Solution Approach Nuggets**
- IA and tech spike to identify all navigation entry points to each forms /introduction URLs
- Iterative design experimentation to validate the design and content approach. The test page will display a comparison view of the scope of each decision review, evidence requirement, current wait times, deadline restrictions, benefit types, and implications for future actions.
- Implement feature flags for static content in the “Decision Reviews” and “Resources” sections
- Lower environment testing with CAIA
- A/B test that routes a percentage of Va.gov users to a single-page layout while hiding static pages in the "decision review" and "resource" sections of the website.

**Feasibility and Risk**: A/B testing for changes to site navigation, static content feature flags, and single-page design will require phased testing in lower environments with the CAIA team. 

**Desired Outcome(s)**
- Increase in online DR submissions
- Reduction in claims for increase mistakenly filed as a supplemental claim
- Decrease in time to submit a DR 

**Performance Indicators**
- Reduction in overall SC end products switched to 526 end products (and vice versa) compared to baseline
- Conversion rate compared to baseline
- Percentage of form exits compared to baseline
- Conversion rate for searches resulting in a DR submission 
- Click through rate between static content and submission compared to baseline
- Reduction in low quantitative CSAT scores on static content URLs	

</details>

<details closed>
<summary>Compare Decision Review Options: Part 2 (Personalization)</summary>
<br>

**Proposed Value**: This initiative aims to iteratively build on the previous “Compare Decision Review Options Initiative” by tailoring it to an individual Veteran’s use cases. In our research, Veterans often share their approach to building their filing strategy and frequently cite their reliance on hard copies of correspondence letters to recall details about the decisions they're appealing. Additionally, many don't know when to file a claim for an increase vs. a supplemental claim, resulting in delays and unfavorable outcomes. Having this context in line when assessing options may further reduce the cognitive burden caused by task-switching when a Veteran creates a filing strategy. 
Duplicate submissions were previously one of the biggest sources of delays for Board appeals. Caseflow is working to reduce this problem by catching duplicates after Veterans have submitted them. We can extend the value of that work by pulling this data into the VA.gov experience to prevent actions that cause delays.

**Core Bet**: If Veterans can assess their eligibility for decision reviews based on existing data about decisions, we'll significantly reduce the guesswork in choosing an option, making them more likely to submit a decision review that is aligned with their filing goals and doesn't result in claim delays caused by suboptimal filing actions. 		

**Solution Approach Nuggets**
Use disability rating data available in the Veteran Service History and Eligibility API, Appeals API, and Caseflow's Eligibility API to:
- Help Veterans understand if an issue qualifies for an appeal or a rating increase
- Compare decision review options to issues with decisions they want to have reviewed or appealed
- Work with Lighthouse and Caseflow to surface data in Caseflow's Eligibility API to reduce duplicate submissions and in-eligible submissions.
- To validate this, we would layer existing decision data over the design from phase one, testing with Veterans who plan to file a Decision Review to ensure it provides data relevant to their decision-making process.

**Feasibility and Risk**: Caseflow may have limited capacity to expose Eligibility API data to Lighthouse.  

**Desired Outcome(s)**
- Increase in online DR submissions
- Decrease in time to submit a DR

**Performance Indicators**
- Conversion rate compared to baseline
- Percentage of form exits compared to baseline
- Conversion rate for searches resulting in a DR submission 
- Click through rate between static content and submission compared to baseline

</details>

--- 

### Phase 3: Connect the decision review experience to the broader VA.gov context

#### Veterans frequently seek to accomplish tasks related to their decision review beyond filing, like speaking to someone about their submission, returning to a save-in-progress submission, or finding trustworthy resources that aid them in creating their strategy. 

</details>

<details closed>
<summary>Integrate AskVA into the DR Experience</summary>
<br>

**Proposed Value**:  One of the biggest frustrations Veterans expressed while completing the CSAT survey is that they often seek someone to help them understand what's happening with their claim. Many left requests for someone to contact them, expecting VA support staff to respond to the survey feedback. This frustration is reflected in user sessions recorded in Datadog, showing form exits by clicking on help links and navigation breadcrumbs.

**Core Bet**: Veterans sometimes want 1:1 support and the ability to ask nuanced questions about their claims and appeals. We think offering links to AskVA will reduce the number of low CSAT responses from users requesting a call and leaving contact information in survey feedback. 	 		

**Solution Approach Nuggets**
- We think offering links to AskVA will reduce the number of low CSAT responses from users requesting a call and leaving contact information in survey feedback

**Feasibility and Risk**: Caseflow may have limited capacity to expose Eligibility API data to Lighthouse.  

**Desired Outcome(s)**
- Increase in Veteran satisfaction

**Performance Indicators**
- Reduction in low CSAT scores from Veterans seeking help from a person
- Increase in AskVA submissions

</details>

<details closed>
<summary>Improve SIP Experience for Decision Reviews</summary>
<br>

**Proposed Value**: Roughly 99% of SIP Decision Review forms are abandoned. Those that return to the /resume URL, between 30-40% submit their decision reviews, suggesting there may be an opportunity to improve the number of submissions by making SIP forms easier to revisit

**Core Bet**: If we re-locate the widget for SIP forms to the claim status tool, which recieves much more daily traffic, Veterans will be more likely to return to their form and submit it. 

**Solution Approach Nuggets**
Scope of this includes:
- Assess options to enhance searchs and/or search tools on VA.gov “Find Forms” page and the website’s main search tool.
- Work with CAIA to A/B test IA enhancements that improve navigation. 

**Feasibility and Risk**: The impact of this initiative affects sitewide behavior and depends on MyVA team availability.

**Desired Outcome(s)**
- Increase in submissions from users who require more than one session to complete their decision review form

**Performance Indicators**
- Increase in conversions from users who return to the /resume URL

</details>

<details closed>
<summary>Improve Discoverability of Decision Reviews</summary>
<br>

**Proposed Value**: Veterans often don't know what is available on VA.gov and qualitative Medallia feedback on search pages points to a confusing navigation experience. The various search features on VA.gov are not designed to help Veterans refine their search, causing many to visit the wrong page when they're looking for their claim status or help from a VA support person. The "find forms" search page has the highest search abandonment rate of VA.gov search tools, averaging above 90%. Improved search experience can help increase submission rates for all forms on VA.gov.

**Core Bet**: If we improve the search experience, Veterans will be more likely to find Decision Reviews content and forms that help them complete “jobs to be done” on VA.gov like:
- Determine eligibility for a Decision Review
- Compare differences between Decision Reviews
- File a Decision Review 	 		

**Solution Approach Nuggets**
Scope of this includes:
- Assess options to enhance searchs and/or search tools on VA.gov “Find Forms” page and the website’s main search tool.
- Work with CAIA to A/B test IA enhancements that improve navigation. 

**Feasibility and Risk**: The impact of this initiative affects sitewide behavior and depends on CAIA capacity.

**Desired Outcome(s)**
- Increase in submissions from users who execute searches on the “Find Forms” search page
- Increase in submissions from users who execute searches on the main search page

**Performance Indicators**
- Reduction in search abandonment
- Reduction in DR page bounces and form exits from users who entered from search page URLs

</details>

---

## Outcome-Based Roadmap
- (Add a link)

## Planning Boards
- [Sprint Planning and Prioritization Board](https://github.com/orgs/department-of-veterans-affairs/projects/1026/views/1?filterQuery=)
- [Defect Triage Board](https://github.com/orgs/department-of-veterans-affairs/projects/876/views/1?visibleFields=%5B%22Title%22%2C%22Assignees%22%2C46447480%2C46447511%2C46447563%2C%22Labels%22%5D)

# Decision Reviews Service Diagrams
- [Request A Board Appeal](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686860506968/58cf67b56dfb12c9337cdd7b110dbf6182a55516?invited=true&sender=02d71842-45b3-44df-b5bd-b1399d0ba73e)
- [Supplemental Claims](https://app.mural.co/t/departmentofveteransaffairs9999/m/adhoccorporateworkspace2583/1654096034291/25f4086b638b48828941c4d6aa330f1df1c9527a?sender=66cfcd80-684f-490f-a034-1540c801ca34)
- [Higher-Level Review](https://app.mural.co/t/departmentofveteransaffairs9999/m/lighthouseapiplatform7991/1631736307705/31e23e9b9754a0ffceecdc2f037dc86976553b08?sender=u0d70ac6e87daa7c066838517)

# Access and Testing
### Test User Dashboard (TUD) requires SOCKS access
- [TUD User Logins](https://tud.vfs.va.gov/?page=1)

### Test Rail access is provided by the VFS Platform team
- [Test Rail](https://dsvavsp.testrail.io/index.php?/suites/view/6&group_by=cases:section_id&group_order=asc&display_deleted_cases=0)

# Defect Triage Process

## Severity Criteria
Below are factors to consider when labeling severity for Decision Review bugs.

| Severity | Description |
|----------|-------------|
| **Critical** | - All users impacted<br>- Inability to complete the expected action<br>- Data integrity at risk, no backup pathway (appeals missing parts of the payload, effective date at risk, appeals not submitting/establishing)<br>- Data security at risk<br>- Special case: congressional inquiry<br>- Requires pickup in the current sprint |
| **Moderate** | - Some users impacted<br>- Ability to complete the expected action, but with gross flaws<br>- Data integrity has a backup pathway (ex: off-ramped to regional office or CMP)<br>- Data security not at risk<br>- Requires pickup in the next sprint |
| **Minor** | - Spelling errors<br>- Design blemishes<br>- Requires pickup in the next 1-3 sprints |

--- 

## Analysis Steps
### Start with a time boxed spike, if needed

- Create a spike ticket
- Review the error in sentry and choose a severity label
- Check if there is SIP data, or UUID
- Attempt to reproduce: 1-2 hr time box
- If re-produceable, make a user story and attach it to the spike
- Include supporting details to determine the severity of the issue (number of users impacted, submission failures, device types impacted, monitoring/log details).

### Create a bug user story for verified issues
- Document tasks needed to fix the issue.
- Determine if the issue can be resolved internally or depends on another team. 
- Assign the engineers, product managers, or other stakeholders involved.
- Assign and label the issue to either `squad-1` or `squad-2`.
- Refine the issue with the parties assigned to it. 
- Assign the issue to a sprint.
- Update stakeholders on progress.

### Prioritize the bugs
- Add the issue to the [Decision Reviews Defect Board](https://github.com/orgs/department-of-veterans-affairs/projects/876/views/1?visibleFields=%5B%22Title%22%2C%22Assignees%22%2C46447480%2C46447511%2C46447563%2C%22Labels%22%5D)
- If multiple issues have the same severity, add the number of users effected and occurrences
- Assign the issue to a sprint
- Confirm priority with the PO as needed for congressional inquiries and special cases


-------

<details open>
<summary>Depreciated Product Guide</summary>
<br>
# Decision Review Requests and Appeals Digital Experience Outline
- GitHub Label: [benefits team 1, squad 2]
- Slack channel: [#benefits-ce-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK)

### Table of Contents

# Executive Summary
- [Abstract](#abstract)
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#okrs-and-kpis)
- [Results and Recommendations](#Results-and-Recommendations)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Resources and Documentation](#resources-and-documentation)
- [Team](#team)
- [Screenshots](#screenshots)

---

# Executive Summary

## Abstract

The Veterans Appeals Improvement and Modernization Act (abbreviated _AMA_, pdf [here](https://www.congress.gov/115/plaws/publ55/PLAW-115publ55.pdf)) establishes new methods for Veterans and related claimants to appeal decisions made about their VA benefits. However, there is no way to make these appeals online, resulting in tens of thousands of paper forms being filled out, mailed, and processed by hand into VA intake systems. This incurs substantial costs relating to mail cycles, intake staffing needs, and maintaining business processes centered around correcting data errors. The VA should improve this process by building a self-service, personalized, guided digital experience on VA.gov – an experience which uses existing systems to pre-fill, validate, and recirculate critical veteran data across the enterprise.

- Fact Sheet: https://benefits.va.gov/BENEFITS/factsheets/appeals/Appeals-FactSheet.pdf
- va.gov landing page: https://www.va.gov/decision-reviews/
- Benefits landing page: https://benefits.va.gov/benefits/appeals.asp

## Terminology

The term **decision review** encompasses all three AMA lanes, including **appeals** made directly to the Board. Therefore an appeal is a type of **decision review request**. Decision review requests are made up primarily of a Veteran identifier and the **issues** to be reviewed.

## User Problem Statement

- I am a Veteran or dependent who has received an unfavorable decision on my original claim. I would like to file a decision review request myself, but there is no way to do that online. The paper forms I have to fill out don't make a lot of sense, ask me for information that the VA already knows, and don't fully explain my various options. If I make a mistake on these forms it could set my case back years!

## Solution Goals

### User Goals

- **Veterans:** Submit an AMA-valid decision review request (as opposed to a legacy-system decision review request) from start to finish online at va.gov, as represented by one of three AMA forms:
  - VA Form 20-0996 Request for Higher Level Review (HLR)
  - VA Form 20-0995 Supplemental Claim Application (SC)
  - VA Form 10182 Notice of Disagreement ("Board Appeal")

- **Intake Admin Professionals:** Review and approve or further develop the decision review request within the Caseflow Intake workflow

### Business Goals

- Increase efficiency of decision review request processing
- Increase accuracy and integrity of stored data by reducing translation/ transposition cycles
- Reduce mail costs by establishing all-online feedback cycles
- Reduce staffing costs by reducing the number of employees needed to process paper forms

## Assumptions

- Market validation: There is an express and present need for a self-service decision review request facility
- Veterans will submit decision review requests online with or without representation
- Digital submissions will not create an undue burden on VBA/ Compensation/ other LOB case workers
- Product will use existing Vet360 integration to pre-populate known information
- Product will use existing claims API to pre-populate known claims and appeals information
- Notifications about application state are out of scope

### Product Assumptions: Veteran User Group

-	I can log in to va.gov
-	I can review the status of my current or past claim or appeal
-	I can research my decision review options under the Appeals Modernization Act
-	I can begin a new decision review request (Board Appeal, Supplemental Claim, or Higher Level Review)
-	I can review and update my in-progress decision review request
-	I can select or enter the issues and decision dates that I would like reviewed
-	I can make all the selections online that I can make on the paper forms
-	I can complete and submit a decision review
-	I can understand whether the submission was successful, and what I need to do to correct it if not
-	I can easily resubmit a decision review request if it was unsuccessful the first time

### Product Assumptions: Claims Assistant User Group

- I can log into Caseflow
- I can see that there is a new digitally-submitted decision review request
- I can open the decision review request and check it for validity
- As with my other decision review requests, I can use Caseflow Intake to further develop the request as necessary

## Requirements and Constraints

- This product consists of three overlapping projects:
  - The Veteran-facing submission experience on va.gov (vets-api and vets-website stacks)
  - The Caseflow-facing administration/ review experience in Caseflow (caseflow stack)
  - The API that facilitates communication between vets-api and caseflow (caseflow stack)
- The teams building each of these parts must be staffed, must have access to shared resources, and must be able to work independently of one another.
- As of early July the dev teams for the Veteran-facing and Claims-facing parts have not been resourced. They may receive resourcing via the pending Apps Contract, June/ July 2019.
- The Veteran-facing and Claims-facing components could be built by the same dev teams, though the different stacks involved may slow progress. It may be best to slot development of the Claims-facing work into the regular Caseflow engineering backlog.
- While this product touches every LOB that processes decision review requests, the "decision review request review" (i.e. Caseflow UI) solution will not be tailored to the individuated requirements of the individual LOBs.
- VBA and BVA are both on board and will allow the development effort to proceed in the fashion typical to DSVA projects.

## Discovery Takeaways

WIP: Currently in pre-discovery.

## Solution Approach

Overall approach: Start with HLR Compensation (since it's relatively simple and represents the broadest use case) or NOD (since it generalizes LOBs), build a simple prototype, and iterate from there.

1. Research and build a general service API on Caseflow Intake (patterned after Claims and Appeals Status API) which will evaluate a submitted dataset for validity against Intake's hardcoded business rules. Prepare to iterate as related projects develop.
2. In parallel, formulate and conduct a research plan which validates the market and sets the parameters of a Veteran-facing solution. Research should include quantitative analysis of historical (pre-AMA) and contemporary submission trends, as well as qualitative assessment of the needs of Veterans, dependents, VSOs, and VA business stakeholders.
3. Prototype (first paper, then digital) experiments which explore the parameters set above. Validate the experiments with the key user groups. Make sure that the Claims information provided by existing VBMS APIs provide intelligible and actionable information, and formulate mitigation strategies as necessary.
4. Prototype the Claims-facing screen(s) and validate them with Claims Assistants and other groups as needed.
5. Lead the dev team(s) in iteratively building the Vereran-facing and Claims-facing products.
6. Coordinate dry runs and workload-tests with Claims Assistants to understand how their day-to-day will be impacted, and adjust as necessary.
7. Follow standard launch procedures.

## Value Propositions

### User Value

"You don't have to deal with paper forms, potentially making mistakes that will cost you and your family years of cycling with the VA. If you feel like you have a handle on the appeals process, you can file one yourself, all online, in the time it takes to brew coffee."

### Business Value

"You can reduce the burden on Intake staff significantly by providing them fact-checked information directly from VA partner systems." WIP: this will be further developed when the existing metrics are better understood (see KPIs, below).

## OKRs and KPIs

### KPIs
- Higher digital conversion rates and lower paper form submissions
- Veterans are more satisfied with their claims process
- Lower processing costs
- Less time to complete forms
- Less time to get adjudication/completion from VA for appeals
- Fewer PDF downloads vs. completion rates

WIP: Needs research into existing costs (in time, money, and quality-of-life) of decision review request processing. 

Note that BVA has expressed that they are getting "hammered" with mail.

#### Baseline Backend KPIs
- [Supplemental Claims](products/decision-reviews/Supplemental-Claims/engineering/backend_KPIs.md)
- [Higher Level Review](products/decision-reviews/higher-level-review/engineering/backend_KPIs.md)
- [Notice of Disagreement](products/decision-reviews/Notice-of-Disagreement/engineering/backend_KPIs.md)

#### Baseline KPIs
to be added

### Key Results (KRs)
to be added

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*

## Launch Dates
- *What is your target launch date of your MVP/iteration?*
  - June 2020
- *What is your date for when you'll evaluate impact after launch?*

---

## Results and Recommendations
### Results
TBD after launch
### Recommendations
TBD after launch


---

# Implementation Info

## Status

**Aug 1 2019**
- API: Baseline iteration complete
- va.gov UX: Research complete, first design round complete, dev work beginning assignment
- Caseflow Intake UX: Currently in planning

**Sept 20 2019**
- API: API team is working on resolving their issues that are preventing @SMLuthi from completing this task. Working on issues endpoint; UAT.
- Design: Handoff from Carola to Benefits and Memorials designers occurred on 9/18. Additional research and design work in progress.
- Development: FE identified work items to build out skeleton and individual form steps to work on during the next sprint or two.

**April 2022**
- Request for Board Appeal (Notice of Disagreement) form launch

**March 2023**
- Supplemental Claim form launch


## Solution Narrative
- Late April: Product appears on CTO list of high value targets
- Early May: Kicked off API discovery, scaffolded project
- Early June: VBA approval in email, BVA approval in email and over phone
- Early June: Questions about PRA raised; looking into what compliance measures are necessary
- Early June: Conceptual version of app workflow sketched

## How to Access and Test
- Link:
- Password protection info:
- User authentication info:

## Error Handling

## Service Level Objective

## API Calls and Dependent Systems

## Resources and Documentation

- Discovery
- Technical Documentation
- Product Specs
- [Research and Design](Research%20and%20Design/README.md)
- Roadmap
- ATO documentation

## Team

|Name|Role|Email|
|----|----|-----|
|Matt Self|DSVA Lead| matt.self@va.gov |
|Julie Strothman|DSVA Design Lead| julie.strothman@va.gov |
|Sade Ragsdale |Product Manager| sade@coforma.io |
|Eileen Chi |Designer| eileen.chi@coforma.io |
|Eugene Lynch | Engineer| eugene.lynch@coforma.io |
|Rocio de Santiago | FE Engineer| rocio@coforma.io |
|Robin Garrison | FE Engineer| robin.garrison@adhocteam.us |
|Kyle Soskin | BE Engineer| kyle.soskin@adhocteam.us |

</details>
