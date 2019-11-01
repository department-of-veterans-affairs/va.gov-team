# 526 Original Claims on va.gov 
- GitHub Label: [526](https://github.com/department-of-veterans-affairs/va.gov-team/labels/526)
- Slack channel: n/a
- Product POCs: Andrea Schneider
- va.gov link: https://www.va.gov/disability/how-to-file-claim/



## WIP

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
- [KPIs](#kpis)

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
Currently, a gating mechanism exists on va.gov asking a user if they have previously filed for a disability claim. When the user udentifies it is their first time filing for a disability claim, they are directed to start the process on eBenefits.  

- I am a Veteran who is in need of filing a Disability Claim, but since I have never filed on before I am not able to do so on va.gov and am forced to have to complete it on the eBenefits website instead, which is an upfavorable user experience. 

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

## KPIs

WIP: Needs research into existing costs (in time, money, and quality-of-life) of decision review request processing. 

Note that BVA has expressed that they are getting "hammered" with mail.

**Metrics**
- Higher digital conversion rates and lower paper form submissions
- Veterans are more satisfied with their claims process
- Lower processing costs
- Less time to complete forms
- Less time to get adjudication/completion from VA for appeals
- Fewer PDF downloads vs. completion rates

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

## The Problem


### User Goals


### Business Goals


## Assumptions

## Questions

## Requirements
#### In Scope 

#### Out of Scope

## Solution Approach

## Value Propositions

## KPIs

---

# Implementation Info

## Status

## Technical Decisions

## Product Decisions

## Team

|Name|Role|Email|
|----|----|-----|
|Andrea Schneider|DSVA Lead| andrea.schneider@va.gov |
|Yana Roy |Product Manager| yroy@governmentcio.com |
|Kevin Stachura |Designer| kstachura@governmentcio.com |
|Carolyn Williams |Designer| carolyn@adhocteam.us |
|Nick Sprinkle | FE Engineer| nick.sprinkle@oddball.io |
|Robin Garrison | FE Engineer| robin.garrison@adhocteam.us |
|Silvio Luthi | BE Engineer | silvio@adhocteam.us |
|Cameron Testerman | BE Engineer | cameron@oddball.io |
|Tze-chiu Lei | QA Analyst | tze@adhocteam.us |
   
## Screenshots

