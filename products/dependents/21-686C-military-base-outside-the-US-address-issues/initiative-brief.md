
# Initiative Brief for Benefits and Claims - Dependent Experience Team, Dependency Claims, VA Form 21-686C Military Base Outside the U.S. Address Issues

## Outcome Summary

- Claims are getting rejected due to incorrect entries for mailing addresses on military bases outside the U.S. 
  - Veterans are not notified that their claims have been rejected. 
  - Until recent updates, the VA was not notified of these rejections, either. 
  - Part of a code-yellow project; triggering null claims.
  - [Related Zenhub ticket](https://app.zenhub.com/workspaces/benefits-dependents-experience-6459139e7d64bf0015f6af13/issues/gh/department-of-veterans-affairs/va.gov-team/63545)
 
## Related/Associated product(s)

- https://github.com/department-of-veterans-affairs/va.gov-team/tree/60b84206484de1ab4604eb8ae5428317b448da87/products/view-and-update-dependents

## Problem

Describe the challenge / pain point you seek to address.:

- Veterans whose mailing address is on a military base outside of the U.S. are unclear about how to enter their info successfully.
- On-screen error messaging isn’t triggered when incorrect information is entered
- Aligns with OCTO-DE goals by reducing errors and improving Veteran success with task completion.

## Measuring Success

Key Performance Indicators (KPIs)
Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

- Reduced rejections due to this error | https://vagov.ddog-gov.com/dashboard/vad-969-xqc/benefits---dependents-686674?refresh_mode=sliding&from_ts=1695138210855&to_ts=1697730210855&live=true 

## Discovery

### Assumptions/Risks

Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints2. Indicate how you'll validate/test against these risks. Inspired by SVPG's Four Big Risks.

**Value Risks (will people use it):**
- Yes - address is a required field in the form

**Usability Risks (can people figure out how to use it):**
- Our goal is to write error messages that provide clear directions on how to enter correct information for military base addresses outside the U.S.

**[Technical] Feasibility Risks (can we build it with available tech/data):**

- Yes; minor content changes and additional postal code validation
- No expected impact to site performance

**Organizational Viability Risks/Constraints (will there be a positive organizational impact):**
- Improved Veteran experience; reduced rejections due to this error
  
### What're you building
*What's in scope for you to build with this initiative? Describe key features/flows. What have you explicitly decided to not include and why?* 
*How does this solution address your Assumptions & Risks?*

- Error correction including minor content changes (header info and error messages) and added postal code validation.

#### Go-to-market
*What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
- No go-to-market needed

## Launch Planning
### Collaboration Cycle
💡 Use for any Collab Cycle tracking, questions.
- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68019)

### Timeline
*Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
- Link to Release Plan for this Initiative
  - N/A

#### Initiative Launch Dates
Target Launch Date
- asap
Actual Launch Date
- tbd

## Screenshots
### Before
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/21-686C-military-base-outside-the-US-address-issues/686c%20address%20issues%20before.png

### After
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/21-686C-military-base-outside-the-US-address-issues/after-screenshots

#### Communications
Where will you discuss this initiative?
- Public Slack channel: #benefits-dependents-management
#### Stakeholders
What offices/departments are critical to make this initiative successful?
- Emily Theis
- Julie Strothman

