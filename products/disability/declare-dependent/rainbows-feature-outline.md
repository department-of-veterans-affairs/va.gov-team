## Declaration of Status of Dependents 21-686c Form

- GitHub Label: 686 Dependent
- Slack channel: 686_Dependent
- Va.gov link: https://staging.va.gov/disability-benefits/apply/dependents/introduction
- API Calls: [686 Backend Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/api-calls.md)
- Misc Keyword: 686, 686c, Add a dependent

---

### Table of Contents

# Executive Summary 
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
- [Team](#team)
- [Screenshots](#screenshots)

---

# Executive Summary

## User Problem Statement
Veterans have difficulty applying to Declare a Dependent through the 686c form. Currently users can file an application through mail, with a VSO or on eBenefits, however, a significant percent of applications are incomplete when submitted causing a significant amount of manual processing to extract additional information from the Veteran.

#### Current State
- RBPS has a 63% success rate. Receives 143,000 claims anually - of those 90,000 are automatically processed
- It currently takes $12-$13 to process a 686 form manually **vs.** $1 to process automatically through RBPS
- It currently takes 10-20 days to process a 686 form manually **vs.** 1-2 days to process automatically through RBPS
- 75% of dependency claims go through RBPS - of those 50% come from eBenefits

## Solution Goals
### User Goals
- Increaser the number of self-serve forms that are submitted electronically
- Decrease the number of form submissions with incomplete information

### Business Goals
- Increase the % of forms that are routed through RBPS
- Increase the % of forms that are automatically processed by RBPS (currently 63% success rate)
- Decrease the form processing time by achieving a higher % of successful automation through RBPS

## Assumptions
- Users will be able to more easily navigate the 686 submission experience on Vets.gov in comparison to eBenefits

## Requirements and Constraints
- The 686 form must be routed through RBPS for automated processing

## Discovery Takeaways
- Veterans have expectations about why information is being collected--particularly about previous spouses--and the need to collect additional documentation validating or verifying the information given. These expectations mostly relate to the VA's ability to verify the information that the Veteran gives, and to making sure people are not "double-dipping" on benefits to which they are no longer entitled. 
  - It would be helpful to explore possibilities for additional explanations of why and what is being collected, or not, and to check with stakeholders about whether additional documentation is requested.
  - It would be further beneficial to have these documents (if any) listed on the intro page for the form.
 - The sections of the form relating to marital status and history are long and complex, and accordingly cause some anxiety about whether parents or children can be added using this form.
  - Consider providing additional information about where claimants are within the form flow: more than "2 of 5," having the ability to look ahead to what sections are coming next might be helpful.
- As has been seen with other forms, there is confusion as to why the VA does not already have some of the requested information in their system. 
  - Some of this confusion will be cleared up with the ability to sign in and prefill the form, but it is also worth discussing with the personalization team how much of a Veteran's existing record relating to dependents can be accessed.
  - While this MVP only has one flow (adding everyone as though from scratch), in future iterations consider modular elements for adding or removing one person at a time.
- Participants were confused as to why all of a current spouse's previous spouses have to be listed on the form.
- Participants called out a content element flagged by the internal team: the need to ask about where a marriage ended in the case of a spouse's death feels needlessly callous.
- In a similar copy question, the consistent use of "unmarried children" on the "add children" section is out of place when asking about children under 18.
  - For both of these content instances, we might consider using logical and kind conditional flows: if a child's birthdate makes them under 18, there is no need to ask about marital information, or if a marriage ended in death, there is no need to ask for a location of its ending.
- With additional forms such as 674 required in certain circumstances, not all participants successfully clicked on the correct button to start the form, and instead looked at the link to download and fill out form 674 as the place to start form 686.
  - Solution 1: Follow standard button patterns for calls to action (as on [this page](https://www.vets.gov/health-care/apply/application/introduction)), including the >> pattern to indicate clicking to start.
  - Solution 2: Consider having a document upload section at the end of the form for only those forms or questions relevant to the claimant's situation.
  - Solution 3: Continue discussing adding portions of 674 as modular additions to 686 experience. Participants seemed open to filling out additional questions within the 686 flow, and did not consider the form complete unless they had filled out those questions as well.
- In research, only the flow in which the Veteran fills out the form was tested; however, it is known that more often Veterans or their dependents fill out the form with the aid of another party. 
  - Look very closely at the language around "your" or "the Veteran's" spouse or children and how those will change depending on who is filling out the form.
- Finally, a number of smaller concerns will be cleared up by following pre-existing patterns on the pensions form:
  - Whether spouse information should be filled out chronologically or in reverse chronological order
  - Selecting the total number of marriages up front and allowing that number to dictate the number of fields presented
  - How to indicate a number of different statuses relevant to one child
 

## Solution Approach
- A frontend experience on Vets.gov that will submit 686c structured data through _(BGS & RBPS)_ and follow very similar UX interations to the vets.gov pension applications.

## KPIs
- Increased proccessing automation
- Decreased processing time
- Decreased processing costs

---

# Implementation Info
## Narrative
- The 686 was deemed a valuable next step to follow the development of the 526. We started discovery of the 686 form in early 2018 and iteratively built the form to live on Vets.gov (now Va.gov)
- **4/18/19** - as of this date the form is live in staging [here](https://staging.va.gov/disability-benefits/apply/dependents/introduction). The frontend was built, the backend submission process through EVSS was also built, but the two were not connected. The work was deprioritized in favor of focusing on the VA.gov relaunch in Nov 2018.

## Status
As of April 2019, form lives on VA.gov. The front end and back end are not currently connected. The backend is connected to BGS via an EVSS endpoint.

#### To date:
 - form flow/UI is complete (for adding dependents)
 - form is log-in gated
 - usability tested
 
#### Backlog:
Some remaining items to call out:
 - Migration to VA.gov
 - Integrating FE & BE
 - Confirm and test connection to EVSS endpoint
 - UAT  & Launch Prep
 
#### How to Access
1. Link - https://staging.va.gov/disability-benefits/apply/dependents/introduction
2. Sign in with a [test user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/mvi-staging-users.csv) below (must have a 30% diasbility rating or higher)


## Team

- **VA POC**: N/A
- **DSVA POC** `*`: Andrea Schneider 
- **Product Manager** `*`: Ryan Luu 
- **Design Lead**: Emily Waggoner 
- **Content Writer(s)**: Peggy Gannon 
- **Front-end Engineer(s)**: 
  - Erik Hansen 
- **Back-end Engineer(s)**:
  - Lihan Li 
  - Johnny Holton 

`*` = approval required for launch

### Screenshots
#### Before
_686 Paper Form_
![](Design/Screenshots/original_686_form.png)

<br>

_686 eBen Application_
![](Design/Screenshots/original_686_eBen.png)
