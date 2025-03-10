`Draft`   This work was completed by the IIR team and not the profile team, hence the draft state of this document 

[See Collab cycle ticket from the IIR team](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82257)

# Project Outline: User Profile Completion

**Last Update:** 3/7/2025 - This work Launched in February of 2025 by the IIR team

## Communications
- **Github labels**: authenticated-experience; profile-completion
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)
- **Teams**: Account Experience - Profile, IIR 

## Overview

We want to enhance the veteran user profile completion process to collect essential contact information ensuring efficient communication and accurate benefits delivery. This includes gathering a mailing address, phone numbers, and email address, while allowing users to dismiss the prompt if they choose. 

The updated profile completion process should help us set the foundation for a tutorial or website introduction to guide users through VA.gov. This should be thought of the first piece in what would be a larger structure that we could allow other teams to introduce new website features or updates.  


## Problem Statement
New users to VA.gov are sometimes at risk of missing out on updates due to incomplete contact information. For longtime users, they may have outdated information. 

How might we encourage veterans to complete their profile information to ensure they receive timely benefits and updates while respecting their preference to opt-out? 


## Desired User Outcomes
- Users receive all necessary communication, including letters and prescriptions, without delays.
- Users have an easy and non-intrusive way to update their contact information.
- Users can opt-out of the profile completion prompt if they choose.
## Undesired User Outcomes
- Privacy Concerns: Users may feel pressured to provide information they prefer to keep private.
- Dismissal Overuse: Users may frequently dismiss prompts, leading to incomplete profiles.
## Desired Business Outcomes
- Operational Efficiency: Streamlined communication processes with accurate contact details.
- Increased Engagement: More veterans interact with the VA portal, leading to better service delivery.
- Data Accuracy: Up-to-date information enhances the overall quality of the VA's database.
## Undesired Business Outcomes
- User Frustration: If the feature is perceived as intrusive, it may negatively impact user satisfaction.
- Asking too many details leads folks to give up on filling out the profiles (or the applications) entirely

## Measuring Success

## Key Performance Indicators (KPIs)
| | Category	|Description|
|---|---|---|
|KPI|	Ease of use| User profile completion rate|	Task completion rate post-update|	
|KPI| Ease of use|	Dismissal rate of prompts	|Time taken to complete profile |
|KPI|Service completion|% of updated contact details |
|KPI|Service completion|Time taken to complete profile|
|KPI|Trust/Satisfaction |User feedback ratings/satisfaction score	|
|KPI|Trust/Satisfaction |	User Retention/falloff rate|

### Baseline Target KPI Values
Profile completion rate: 
Task completion rate post-update:


## Objectives and Key Results (OKRs)
`Draft objectives, needs convo w PO/OCTO`
### Objective: 
Increase user profile completeness.
#### Key result 1: 
Achieve a [insert %] profile completion rate within six months.
#### Key result 2: 
Reduce misdirected communication by [insert %] within the first year.

## Solution Approach
### Assumptions
- Risky Assumption: Users will be willing to provide their contact information.
- Validation Plan: Monitor user engagement and feedback to assess willingness and address privacy concerns.

## Scope
- **Initial Build:** Develop profile prompts for mailing address, mobile phone number, and email address with an option to dismiss.
- **Justification:** Ensures critical contact information is gathered without forcing user compliance, respecting user autonomy.
- **Exclusions:** Advanced features like direct deposit prompts will be postponed to post-MVP to focus on initial profile completion.
- **Evolution:** Post-MVP will include prompts for direct deposit setup and annual data refresh reminders based on user feedback and engagement metrics. Should be an expandable framework that could be triggered if a user opens MyVA and we want to point out a new feature. 

## Launch Strategy
- Phased launch with initial round of UAT testing. 
- C&S Page???: Provide FAQs to help users understand the benefits of completing their profile.

### Launch Dates
- Target Launch Date: TBD
- Actual Launch Date: TBD
- Impact Evaluation Date: TBD

## Key Decisions
- Profile completion prompts will include an option to dismiss.
- Focus on critical contact information first; additional features will follow post-MVP.

## Important Artifacts 
- [Profile Completion Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83258)
### IIR artifacts 
- [collab cycle for the IIR onboarding page](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82257)
- [IIR onboarding analysis mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1712608107388/80dc1be20f9ee63ac894c536ccd20d5b1cc172e1?sender=uaa72d11015d3f7c704a64191)
- [user flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715019181472/206d1983971576ee7696c1984666185a2fbff545?sender=uaa72d11015d3f7c704a64191)
- [figma for midpoint](https://www.figma.com/design/CertVj7cu66kFv9TnseR30/Veteran-Onboarding?node-id=300-11104&t=Ow7esQ4gUlPtOyqr-0)

## Screenshots
### Before
No profile completion flow

### After
Profile completion prompts for mailing address, mobile phone number, and email address, with a dismiss option.

