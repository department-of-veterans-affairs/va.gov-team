# Benefits Delivery at Discharge on VA.gov 
- GitHub Label: [BDD](https://github.com/department-of-veterans-affairs/va.gov-team/labels/BDD)
- Slack channel: N/A (regular #vsa-benefits-memorials channel)
- Product POCs: Andrea Schneider
- va.gov link: https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/

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

The BDD program allows Service members to apply for their disability benefits before separation. This provides time for VA to schedule exams, review treatment records and evaluate the claim before separation, with most claimants receiving their decision the day after leaving active duty.

The U.S. Department of Veterans Affairs’ Benefits Delivery at Discharge (BDD) program has made significant improvements in disability claim processing over the past year, with most service members who submitted claims through the program receiving decisions within 30 days of discharge.

BDD allows service members to file a claim for disability between 90 and 180 days prior to discharge from active duty, which provides time for paperwork review and medical exams prior to leaving. 

“This is an important program for our service members as they transition to Veteran status,” said VA Secretary Robert Wilkie. “The faster we can connect our Veterans with the benefits they deserve, the smoother their transition.”

In fiscal year (FY) 2018, the first full year of the revamped program, more than 36,000 service members submitted claims through BDD and about 53 percent of completed claims received a decision on their claim within 30 days. In the first month of FY 2019, 3,437 claims were completed with 57.7 percent completed within 30 days.

Throughout FY 2018, the program made continuous improvements, which include:

- Expanding BDD claim review from two locations, to processing at any regional office 
- Enhanced software partnerships with the Department of Defense to improve record transfers
- Additional claim training and performance standards for military service coordinators.

- Fact Sheet: https://benefits.va.gov/BENEFITS/factsheets/general/BDDFactSheet.pdf
- va.gov landing page: https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/
- Benefits landing page: N/A

## Terminology/Glossary

- BDD: Benefits Delivery at Discharge
- Separation/Discharge Date: Date when service member becomes a veteran
- Form DD-214: From wikipedia: The DD Form 214, Certificate of Release or Discharge from Active Duty, generally referred to as a "DD 214", is a document of the United States Department of Defense, issued upon a military service member's retirement, separation, or discharge from active duty in the Armed Forces of the United States, e.g., U.S. Air Force, U.S. Army, U.S. Coast Guard, U.S. Marine Corps, or U.S. Navy.

## User Problem Statement
Currently the service member needs to go through eBenefits to access the BDD process.  When navigating to eBenefits and searching for "BDD" and/or "discharge" the search results do not provide a link to how to apply for this benefit.  Therefore, we want to move this capability to the VA.gov website and make it easy to fine and apply for the benefit.

_I am a Service Member who is in need of filing a Disability Claim, but since I have not yet been discharged I and have never filed one before I am not able to do so on VA.gov and am forced to have to complete it on the eBenefits website instead, which is an upfavorable user experience._

## Solution Goals

### User Goals

- **Veterans:** Submit a Benefits Delivery at Discharge claim on VA.gov

- **Intake Admin Professionals:** Review and approve or further develop the BDD claim

### Business Goals

- Make it easier for the Veteran to find the BDD claims process
- Reduce cost by reducing paper form (526) submissions
- Reduce turn around time over paper forms
- Ensure our new veterans have little or no lag between their separation and receiving their benefit

## Assumptions

- Market validation: There is an express and present need for a self-service disabilty claims capabilty for service members with their separation date in the next 90-180 days.
- Veterans will submit disabilty claims online with or without representation
- Digital submissions will not create an undue burden on VBA/ Compensation/ other LOB case workers
- Product will use existing Vet360 integration to pre-populate known information
- Product will use existing claims API to pre-populate known claims and appeals information
- Notifications about application state are out of scope
- The BDD fact sheet will be updated to show the VA.gov experience for BDD claims

### Product Assumptions: Veteran User Group

-	I can log in to va.gov
-	I am separating in the next 90-180 days
- I file the claim between 180 and 90 days prior to separation
- I can provide a copy of their service treatment record
- I can be available for 45 days from the date the claim is submitted to attend VA exams
-	I can find out about additional limitations of this claims process under the BDD Fact Sheet
-	I can select or enter the contention I would like submitted for consideration of a benefit
-	I can make all the selections online that I can make on the paper forms
-	I can complete and submit a BDD claim
-	I can understand whether the submission was successful, and what I need to do to correct it if not
-	I can easily resubmit a BDD claim request if it was unsuccessful the first time


# NOT UPDATED BEYOND THIS SECTION

### Product Assumptions: Claims Assistant User Group

- I can log into SOMETHING
- I can see that there is a new digitally-submitted BDD claim
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
