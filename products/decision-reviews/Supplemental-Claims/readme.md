# Product Brief: Supplemental Claim Form (20-0995)

### Team Communications

- **Government lead**: Matthew Self
- **Slack channel**: [#benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK)
- **Github labels**: benefits-team-1

### Core Team  
  
|Name|Role|Email|
|----|----|-----|
|Amy Lai|Product Owner, Gov't Lead| amy.lai2@va.gov |
|Julie Strothman|Design Lead, VA| julie.strothman@va.gov|
|Shaun Burdick |Engineering Lead and interim Product Manager| shaun.burdick@coforma.io|
|Eileen Chi| Research & Design |eileen.chi@coforma.io |
|David Kennedy| Accessibility Lead | david.kennedy@adhocteam.us |
|Robin Garrison |FE Engineer| robin.garrison@adhocteam.us |
|Derek Fong | BE Engineer | derek.fong@adhocteam.us |
|Annie Tran|Engineer|annie.tran@coforma.io|
|Silke Dannemann|Delivery Manager|silke.dannemann@va.gov|

|Michael Hobson | Product Manager, Lighthouse | michael.hobson@adhocteam.us |

### VBA Subject Matter Experts  

|Name|Role|Email|
|----|----|-----|
|Andrew Gray |Senior Automation Strategist, VBA OBA| andrew.gray@va.gov|
|Alejandro Mendiolaflores |Senior Analyst, VBA OBA| alejandro.mendiolaflores@va.gov |

---

## Executive Summary

### Overview
The supplemental claim service is the final decision review pathway to be digitized on VA.gov. More than 32,000 supplemental claims are filed each month (more than double the number of board appeals and higher-level reviews, combined) which indicates that streamlining and enhancing this pathway has an outsized potential to impact the lives of Veterans and their families.

A supplemental claim is a claim type filed for a benefit when the claimant disagrees with the decision VA made on an initial or supplemental claim for the same or similar benefit on the same or similar basis. To file a supplemental claim, claimants typically need to provide new and relevant evidence that establishes a theory of service connection. This evidence enables a reviewer to determine if they should change the previous decision. Claimants can use this decision review process in three ways:

- Supplement a claim within one year - This allows the claimant to add new and relevant evidence to a claim decision within one year of its effective date. 
- Re-open a prior claim closed 1+ years ago - This allows the claimant to re-visit a claim decision. Will not re-open the previous effective date. 
- Continuously adjudicate a claim - This allows the claimant to continue prosecuting a claim and keep the effective date "rolling".

### The PACT Act

The Honoring Our Promise To Address Comprehensive Toxics Act Of 2021 is a $208 billion measure that has expanded the list of disabilities that are presumed service-connected based on toxic exposure during military service. As a result, the VA anticipates an increase in supplemental claims of this nature and aims to prioritize presumptive conditions in this category.

## The Problem Space

Research indicates that the supplemental claim process is often misunderstood and misused. A common problem is that claimants don't know when to file a supplemental claim versus a claim for increase (which is filed using the 526ez form). The impact is that the Veteran enters a decision review process that is less likely to result in a favorable decision. 

Generally, claimants find the process unclear and are "put off" and confused by the language used in the form's instructions. As a result, many claimants submit errors that cause delays or result in unfavorable outcomes. This requires the claimant to do their own research or rely on someone with prior experience (like another Veteran or an accredited representative) to help them with the form. If a claimant works with an attorney to file a supplemental claim, the attorney can charge a fee, which introduces a conflict of interest.

- **Legal content**: The legal language and VA systems mentioned in the form are unfamiliar topics to many claimants. Various fields and checkboxes open the potential for actions that can negatively affect the timeline and the decision.  Without this background knowledge, claimants may take actions that have unclear consequences for the claim.

- **Evidence requirements**: The form does not define what constitutes new and relevant evidence in a way that resonates with claimants. Further, the current process requires the claimant to either manually cross-reference previous and new evidence, or wait until post-submission to find out if they meet the requirement. 

- **Task management**: The current available services and processes that support supplemental claims are primarily manual and spread responsibility across the claimant, VA services, accredited representatives, and adjudicators. Claimants have no central location to manage tasks related to completing a supplemental claim unless they work through services offered by accredited representatives.

- **Transparency**: Claimants do not have visibility into the claim status once it enters the adjudication process. They rely on accredited representatives for status updates. The data that representatives see wasn't intended for this, so representatives may interpret the data in ways that may be inaccurate or misleading.

- **Claim processing challenges**: Claim processors rely on updated field guidance to understand how to interpret claims. The field guidance for supplemental claims has changed due to the PACT Act, 

## Problem Statement(s)

- **I am a Claimant who has received an unfavorable decision on my original claim. Since I received a decision on my claim, I've obtained or identified new evidence that I believe is relevant to my case and I'd like the VA to give it another look, but there is no way to do that online. Moreover, the paper forms I have to fill out sometimes don't make sense, and ask me to provide personal information that I believe VA should already have. If I make a mistake on these forms (which is easy to do), it could delay a favorable decision by a significant amount of time (or prevent a favorable decision from being made to begin with).**

- I am a VA software engineer building a web application for submitting a Supplemental Claim appeal request. I need a well-designed and documented, modern, and powerful API to send and receive data from my applications which are collecting the Claimant's data, so the request can be processed by internal VA systems.

- I own a case management software product that enables my customers to help Veterans submit claims and appeals. I need a well-designed and documented, modern and powerful API so my software can submit supplmental claims forms to VA digitally, and so my customers don't have to print, mail, or fax the forms to VA. This process is frustrating and time-consuming.

- I work at a VSO and spend my time helping Veterans through the complex benefit appeal process. I spend a lot of time helping Veterans fill out paper forms, then faxing them to VA. This process is frustrating as it is time consuming and not always easy to know when the documents have been received by VA.

## Measuring Success

How will we know if we were right?

## Opportunities

How might we give Claimants who have received an unfavorable decision and have new evidence a quick, easy intuitive method to file a supplemental claim, that doesn't require  them to enter data the VA should already know, and that generally results in quicker more favorable outcomes?

How might we make submitting supplemental claims take as little input from the user as possible?

How might we give rating officials all of the data they need to make an immediate decision on a supplementatl claim?

How might we ensure Claimants are always in the loop about what's going on with their claim?

## Desired User Outcomes

*Why would a user want to use this? What should users be able to do/achieve that they couldn't before?*

As a Claimant, I want the ability to submit a Supplemental Claim decision review of my claim online, without having to solicit professional help, so that I can save time and energy when I disagree with a VA decision on my claim.

As a Claimant, I want the claims I submit to be visible to me as they move through VA systems, and I want proactive communications about their progress.

As a Claimant, I want the VA to be able to easily interact with internal and external medical service providers to grab the medical records I indicate.

As a Claimant, I want the process of choosing and filing a decision review (and by extension supplemental claim) to be easily understandable.

As a VA.gov engineer, I want to be able to create a tool that helps a Claimant understand the benefit appeal process and allows them to easily submit a Supplemental Claim Decision Review. I will need a modern and performant API that interacts with the Benefit Appeal system in order to do so.

As a software vendor creating products to enable VSOs to help Claimants, I want to have a modern API that I can integrate with that will make submitting a Supplemental Claim Decision Review online quick and reliable. This will allow my software to provide more value to my VSO consumers.

As an accredited representative, I want to be able to use software tools to be able to quickly and easily submit a Supplemental Claim Decision Review for the Claimants I serve. I need this interaction to be reliable and to provide visibility into the status of the submission.

As a VA employee in charge of intaking Supplemental Claims, I want to spend less time manually processing 0995 forms. This will allow me to focus more of my time on higher priority tasks.

As a VSR or RVSR processing Supplemental Claims, I want to spend less time validating and clarifying data sent on Supplemental Claim Decision Review forms. Having data that has been previously validated will allow me to spend more time on higher priority tasks.

As a VSR or RVSR processing Supplemental Claims, I want the process of making an accurate rating decision to be as quick and easy as possible, so that Claimants receive decisions as quickly as possible.

## Undesired user outcomes

*What do we want to avoid? What should we be cognizant of or preventing?*

We don't want to create an unforeseen situation where VSRs or RVSRs are incentivized to make incorrect or inaccurate decisions just to process a supplemental claim quicker.

We want users to choose the right (best) decision review option; that means we don't want users submitting supplemental claims if they don't have new and relevant evidence, but we also want to make sure they choose this option when appropriate.

## Links to the dashboard(s) 

- Google Analytics
- [Domo](https://va-gov.domo.com/page/447193050)
- [Grafana - Claims and Appeals](https://grafana.vfs.va.gov/d/WxQ9lkUGz/claims-and-appeals-alerts?orgId=1&from=now-7d&to=now)
- [Grafana - Supplemental Claims](https://grafana.vfs.va.gov/d/ejdUuxTVk/sc-supplemental-claims-dashboard?orgId=1)
- [Sentry](http://sentry.vfs.va.gov/organizations/vsp/dashboard/10/?project=4&statsPeriod=7d)

<!-- ## Context and Decisions

*Additional context, background, or useful information*

## Designs

@benefits-team-1

## How to Access and Test

@benefits-team-1

## Integrations and Error Handling

*What integrations (upsteam & downstream) does the feature make use of? How does the feature surface errors? If necessary, how does one tranlate them so they're actionable?*

@benefits-team-1

## Appendix -->
#### Discovery Artifacts
[Lighthouse suppl claims API discoveryf](https://community.max.gov/pages/viewpage.action?spaceKey=VAExternal&title=Supplemental+Claim+-+Initiative+Brief)

[Decision review API discovery](https://community.max.gov/display/VAExternal/Decision+Review+API+-+Product+Outline)

[Suppl claims paper form (0995)](https://www.vba.va.gov/pubs/forms/VBA-20-0995-ARE.pdf)

[Suppl claims on VA.gov](https://www.va.gov/decision-reviews/supplemental-claim/)

[Decision review hub on VA.gov](https://www.va.gov/decision-reviews/)

[AMA overview and law](https://benefits.va.gov/benefits/appeals.asp)
