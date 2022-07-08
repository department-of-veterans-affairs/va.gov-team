# Product Outline: Supplemental Claims

Last Updated: June 9, 2022

### Team Communications

- **Government lead**: Matthew Self (Benefits Crew)
- **Slack channel**: [#benefits-team-1](https://dsva.slack.com/channels/benefits-team-1)
- **Github labels**: benefits-team-1

### Roles  
  
|Name|Role|Email|
|----|----|-----|
|Matthew Self |Product Owner, Gov't Lead| matthew.self2@va.gov |
|Sade Ragsdale |Product Manager| sade@coforma.io|
|Pam Hastings| Research & Design |pamela.hastings@adhocteam.us |
|Robin Garrison |FE Engineer| robin.garrison@adhocteam.us |
|Scott Meyers | FE Engineer| scott.meyers@coforma.io |
|Sam Cormier | BE Engineer | sam.cormier@coforma.io |
|Rocio de Santiago | BE Engineer | rocio@coforma.io |
|Josh Kim | A11y lead | josh.kim@adhocteam.us |

---

## Executive Summary

#### Overview
Since the VA modernized its appeals process via the Appeals Modernization Act (AMA) in 2017, Claimants who disagree with a VA decision dated on or after February 19, 2019 have had 3 decision review options: [Higher-Level Review](https://www.va.gov/decision-reviews/higher-level-review/), [Board Appeal](https://www.va.gov/decision-reviews/board-appeal/), and **Supplemental Claims**.

Supplemental claims allow Claimants to identify or submit new and relevant evidence to the VA so that a reviewer can make a determination whether the new evidence changes the decision. Supplemental claims can be used to:

- Supplement a claim within 1 year - Use this to add supplemental evidence to a claim decision within 1 year of its effective date. 
- Re-open a prior claim closed 1+ years ago - Use this to re-open a prior decision that denied service connection, so that you can continue to prosecute the claim. This action will not re-open the prior effective date. 
- Continuously prosecute a claim - Use this to continue prosecuting a claim and keep your effective date rolling.

Of the three decision review pathways, supplemental claims are the most widely used. More than 32,000 supplemental claims are filed each month (more than double then number of board appeals and higher-level reviews, combined) which indicates that streamlining and enhancing this pathway has an outsized potential to impact the lives of Veterans and their families.

#### Strategic Alignment
**Benefits OKR**: Make the VAs claims experience better than the private sector's

**CTO Priority**: Reduce the time it takes for Veterans to find, use, and receive VA services.

## The Problem Space

The current process lacks education about how to use the process for adjudication, confusing timelines, difficult-to-understand legal language, unclear document and evidence requirements, a lack of transparency, and great potential for human error. As a result, many claimants submit errors that cause delays or result in unfavorable outcomes. To circumvent these challenges, claimants work through services offered by accredited representatives (VSOs, VSRs, attorneys, POAs) or caregivers.

- Usability: The content within the form does not support claimants by educating them through the process. The process requires the claimant to understand dependencies, related systems, and implications underpinning each field. Due to this, claimants rely on someone with prior experience to increase the likelihood of success.

- Timelines: Completing the supplemental claim form can span weeks and involves manually gathering multiple data points, including medical records, decision letters, and authorization forms. Various fields and checkboxes open the potential for actions that can negatively affect the timeline and the decision.

- Language barriers: The language and acronyms used in the form require the user to understand dependencies on other VA systems and processes. Without this background knowledge, claimants may take actions that have unclear consequences for the claim.

- Data population: Claimants spend additional time working to provide personal data already available to the VA, such as basic personal information, effective dates, condition codes, and Veteran file information.

- Evidence requirements: The form does not clearly define what constitutes new and relevant evidence. Further, the current process requires the claimant to either manually cross-reference previous and new evidence, or wait until post-submission to find out if they meet the requirement. 

- Task management: The current available services and processes that support supplemental claims are primarily manual and spread responsibility across the claimant, VA services, accredited representatives, and adjudicators. Claimants have no central location to manage tasks related to completing a supplemental claim unless they work through services offered by accredited representatives.

- Transparency: Claimants do not have visibility into the claim status once it enters the adjudication process. They rely on accredited representatives for status updates. The data that representatives see wasn't intended for this, so representatives must interpret the data.

- Human error: Guidance provided to claimants about submitting contentions is inconsistent. Consequently, adjudicators struggle to match evidence efficiently and accurately. This highly manual process opens the potential for data to be either misinterpreted or edited in a way that results and unfavorable outcomes.

## Problem Statement(s)

- **I am a Claimant who has received an unfavorable decision on my original claim. Since I received a decision on my claim, I've obtained or identified new evidence that I believe is relevant to my case and I'd like the VA to give it another look, but there is no way to do that online. Moreover, the paper forms I have to fill out sometimes don't make sense, and ask me to provide personal information that I believe VA should already have. If I make a mistake on these forms (which is easy to do), it could delay a favorable decision by a significant amount of time (or prevent a favorable decision from being made to begin with).**

- I am a VA software engineer building a web application for submitting a Supplemental Claim appeal request. I need a well-designed and documented, modern, and powerful API to send and receive data from my applications which are collecting the Claimant's data, so the request can be processed by internal VA systems.

- I own a case management software product that enables my customers to help Veterans submit claims and appeals. I need a well-designed and documented, modern and powerful API so my software can submit supplmental claims forms to VA digitally, and so my customers don't have to print, mail, or fax the forms to VA. This process is frustrating and time-consuming.

- I work at a VSO and spend my time helping Veterans through the complex benefit appeal process. I spend a lot of time helping Veterans fill out paper forms, then faxing them to VA. This process is frustrating as it is time consuming and not always easy to know when the documents have been received by VA.

## Measuring Success

How will we know if we were right?

@benefits-team-1

## Opportunities

How might we give Claimants who have received an unfavorable decision and have new evidence a quick, easy intuitive method to file a supplemental claim, that doesn't require  them to enter data the VA should already know, and that generally results in quicker more favorable outcomes?

How might we make submitting supplemental claims take as little input from the user as possible?

How might we give rating officials all of the data they need to make an immediate decision on a supplementatl claim?

How might we ensure Claimants are always in the loop about what's going on with their claim?

@benefits-team-1

## Desired User Outcomes

*Why would a user want to use this? What should users be able to do/achieve that they couldn't before?*

As a Claimant, I want the ability to submit a Supplemental Claim Decision Review of my claim online, without having to solicit professional help, so that I can save time and energy when I disagree with a VA decision on my claim.

As a Claimant, I want the claims I submit to be visible to me as they move through VA systems, and I want proactive communications about their progress.

As a Claimant, I want the VA to be able to easily interact with internal and external medical service providers to grab the medical records I indicate.

As a Claimant, I want the process of choosing and filing a decision review (and by extension supplemental claim) to be easily understandable.

As a VA.gov engineer, I want to be able to create a tool that helps a Claimant understand the benefit appeal process and allows them to easily submit a Supplemental Claim Decision Review. I will need a modern and performant API that interacts with the Benefit Appeal system in order to do so.

As a software vendor creating products to enable VSOs to help Claimants, I want to have a modern API that I can integrate with that will make submitting a Supplemental Claim Decision Review online quick and reliable. This will allow my software to provide more value to my VSO consumers.

As an accredited representative, I want to be able to use software tools to be able to quickly and easily submit a Supplemental Claim Decision Review for the Claimants I serve. I need this interaction to be reliable and to provide visibility into the status of the submission.

As a VA employee in charge of intaking Supplemental Claims, I want to spend less time manually processing 0995 forms. This will allow me to focus more of my time on higher priority tasks.

As a VSR or RVSR processing Supplemental Claims, I want to spend less time validating and clarifying data sent on Supplemental Claim Decision Review forms. Having data that has been previously validated will allow me to spend more time on higher priority tasks.

As a VSR or RVSR processing Supplemental Claims, I want the process of making an accurate rating decision to be as quick and easy as possible, so that Claimants receive decisions as quickly as possible.

@benefits-team-1

## Undesired user outcomes

*What do we want to avoid? What should we be cognizant of or preventing?*

We don't want to create an unforeseen situation where VSRs or RVSRs are incentivized to make incorrecot or inaccurate decisions just to process a supplemental claim quicker.

We want users to choose the right (best) decision review option; that means we don't want users submitting supplemental claims if they don't have new and relevant evidence, but we also want to make sure they choose this options when appropriate :/

@benefits-team-1

## Context and Decisions

*Additional context, background, or useful information*

#### Open questions

@benefits-team-1

#### Stakeholders
- Paul Shute: Director of Benefits Automation
- Alejandro Mendiolaflores: Lead Innovation Strategist
- Andrew Gray: Sr. Automation Strategist
- Marisa Prugsawan: Sr. Program Analyst
- Dustin Williams: Procedures/Maintanence Analyst
- Melissa Milenkovic: ?

## Designs

@benefits-team-1

## How to Access and Test

@benefits-team-1

## Integrations and Error Handling

*What integrations (upsteam & downstream) does the feature make use of? How does the feature surface errors? If necessary, how does one tranlate them so they're actionable?*

@benefits-team-1

## Appendix
#### Discovery Artifacts
[Lighthouse suppl claims API discoveryf](https://community.max.gov/pages/viewpage.action?spaceKey=VAExternal&title=Supplemental+Claim+-+Initiative+Brief)

[Decision review API discovery](https://community.max.gov/display/VAExternal/Decision+Review+API+-+Product+Outline)

[Suppl claims paper form (0995)](https://www.vba.va.gov/pubs/forms/VBA-20-0995-ARE.pdf)

[Suppl claims on VA.gov](https://www.va.gov/decision-reviews/supplemental-claim/)

[Decision review hub on VA.gov](https://www.va.gov/decision-reviews/)

[AMA overview and law](https://benefits.va.gov/benefits/appeals.asp)

@benefits-team-1
