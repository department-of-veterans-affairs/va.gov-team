# Preferred medical facilities in the VA.gov profile: Product Outline

Last Updated September 3, 2021
_As of July 2021, further development of this feature was put on hold due to research findings in partnership with VAOS that showed this feature would not be valuable to Veterans in its current state. The full research report can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/may-2021-facilities-personalization-research/research-findings.md.)_

## POCs

- GitHub Label: preferred-facility; profile; vaos
- Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp)
- Keywords
     - Preferred facility
     - Preferred medical facility
     - Profile
     - VAOS

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Anastasia Jakabcin (AJ) |Product Manager| ana@adhocteam.us |
|Lauren Ernest|VAOS Product Manager| lauren.ernest@adhocteam.us |
|Peter Russo | VAOS Designer | peter.russo@adhocteam.us |
|Liz Lantz | Designer | liz.lantz@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Taylor Mitchell | FE Engineer| tmitchell@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Carnetta Scruggs| MHV lead | Carnetta.Scruggs@va.gov |

## The Problem

The VAOS (online scheduling) tool allows veterans to make an appointment at all of the facilities at which they're registered, but veterans are frustrated because being registered at a facility does not mean they are currently receiving care there. Veterans are still considered registered at facilities where they used to receive — but no longer receive — care, and at some facilities for reasons other than having ever been a patient. This is info is tracked in/pulled from MVI, which does not distinguish between current/previous facilities. Therefore, veterans see facilities in VAOS that they don't go to, and they do not understand why they are being asked to make appointments at facilities they don't go to. This has resulted in a considerable amount of complaints. 

While we can't change the historical list of facilities that is kept in MVI, we can allow veterans to indicate their current facilities so that we don't show them old facilities in the VAOS tool. This information *is* currently available on MHV, but it does not currently exist on VA.gov.

### User Goals

- As a veteran scheduling a medical appointment with VAOS, I only want to see the current facility(ies) at which I receive medical care when I am trying to schedule an appointment.
- As a veteran scheduling a medical appointment with VAOS, I want to be able to update my list of current facilities at which I receive medical care in the event that my information has changed and the list I am seeing is not accurate.

### Business Goals

- Be able to show a list of current facilities only for veternas using VAOS tool so they are not seeing old facilities at which they do not receive care.
- Allow veterans making appointments through VAOS to easily be able to update their list of current facilities in the event information has changed or the VA does not have correct information.
- Reduce the volume of complaints coming in from veterans about seeing old/out-of-date facilities in the VAOS tool.

## Assumptions

- Veterans only want to see their current facility(ies) on the VAOS tool. (Note: this is well-confirmed through veteran feedback)
- We can support preferred facilities in the VA.gov profile while the feature also exists in MHV.
- Allowing veterans to update their list of preferred facilities will reduce complaints.

## Questions

- How do we support this feature on VA.gov while it also exists on MHV? How would that technical integration work?
  - **Answer**: There is no integration with MHV. The two features will function separately, though Carnetta mentioned that they may consider pointing people to our profile for this functionality once the feature is live.
- Who is a technical POC we can work with for this project?
  - **Answer**: Carnetta Scruggs
- When we say something is "saved in MHV", what does that mean? Does MHV have its own database?
  - **Answer**: Yes, MHV has its own backend, but we are not integrating with it.
- Are there examples of other features or settings that exist both on MHV and another website?
  - **Answer**: No.

## Requirements

### In Scope

- Pull in all registered medical facilities from MVI to the VA.gov profile.
- Allow veterans to edit and update at which facilty(ies) they currently receive medical care.
- Only show this feature to veterans who receive medical care and are registered at a VA facility.
- The list of current facilities needs to be easily consumable by the VAOS tool.

### Out of Scope

- Any integration with MHV itself.
- Retirement of this feature on MHV.
- Writing back any information to MVI.

## Solution Approach

- As of October 2020, we are gathering information from MHV to learn about how this feature currently exists on their website. 
- Pending what we learned, we will have Lihan conduct technical discovery so we can determine whether we can meet the requirement of being able to keep VA.gov and MHV in sync.
  - **Update**: Nov 2020 – [Technical and product details from our chat with Carnetta](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/meeting-notes/chat-with-carnetta-11.2.20.md)

## Value Propositions

- Veterans will be able to update their list of preferred facilities on VA.gov.
- After updating this information, Veterans should only see their current facilities in the VAOS tool.
- This should reduce veteran-reported pain points.
- This is a good, albeit small, step in rolling MHV functionality into VA.gov.

## Measuring success

These are OKRs and KPIs for the initial MVP launch of the communications permissions (notification preferences) feature:

**Objective #1: Improve overall experience with appointment scheduling.**

- **Key result #1**: - Reduce dropoff from the facility selection page in the VAOS tool by 15% by allowing people to save the facilities at which they current;y receive care. ([Per Lenae](https://dsva.slack.com/archives/C909ZG2BB/p1601989754166700?thread_ts=1601576792.114600&cid=C909ZG2BB))

|KPI/metric|Baseline: Q1 Jan - Mar 2021|Post-launch: Q4 Oct - Dec 2021| Post-launch: Q1 Jan - Mar 2022|
|----------|-------------|---------------|-------------------|
|Drop-off rate from the facilities page| TBD|TBD|TBD|

- **Key result #2**: Establish baseline metric for how many people save a facility as part of their scheduling experience.

|KPI/metric| Baseline at the end of Q4 2021 (Oct - Dec) |# of people by end of Q1 2022 (Jan - Mar)|
|----------|-------------|---------------|
|# of users who save a facility as part of their scheduling experience|TBD|TBD|

**Objective #2: Present Veterans with a consolidated display of their preferred medical facilities and allow them to easily update their facilities via the VA.gov profile.**

- **Key result #1**: Launch preferred medical facilities MVP in the VA.gov profile in Q3 2021 (July – September).
- **Key result #2**: Establish a baseline metric for how many users have updated their facility preferences from the profile by end of Q4 (assumes late Q3 or early Q4 launch).
  - **Note**: This metric will need to consider users who have health care vs. users who do not. 

|KPI/metric| Baseline at the end of Q4 2021 (Oct - Dec) |# of people by end of Q1 2022 (Jan - Mar)|
|----------|-------------|---------------|
|# of users who have updated their facility preferences|TBD|TBD|

- **Key result #3**: Maintain at least a 95% success rate for retrievals of facility preferences.
- **Key result #4**: Maintain at least a 95% success rate for successful saves of facility preferences.

|KPI/metric|Success rates 1 month after launch| Success rates at the end of Q4 2021 (Oct - Dec) |Success rates at the end of Q1 2022 (Jan - Mar)|
|----------|-------------|---------------|-------------------|
|% of successful retreivals|TBD|TBD|TBD|
|% of successful saves|TBD|TBD|TBD|


# Implementation Info

## Status

- **September 2020**: Lenae/Lauren proposed this update; DEPO team reviewed and rated this feature on the DEPO product board.
- **October 2020**: Initial discovery.
- **November 2020**: Begin backend integration.
- **December 2020**: Finish backend integration.
- **March 2020**: Design begins.
- **April 2021**: Initial designs completed. Beginning collaborative research effort with VAOS team.
- **June 2021**: Usability testing; FE build begins.

## Product Decisions

- This feature will live in the VA.gov profile.
- This feature needs to co-exist/sync with the MHV version of the same feature until there's a future in which the MHV profile is retired.
- _As of July 2021, further development of this feature was put on hold due to research findings in partnership with VAOS._

## Technical Details

### How the feature works on MHV

As of the beginning of this project (October 2020), this is how the preferred medical facility feature works on MHV:

- MHV pulls in all facilities a person is registered at into their MHV profile. Someone can be registered at a facility for a number of reasons, not all of which involve receiving medical care there.
- People can then check a box to indicate at which facilities they currently receive care. This is only saved in MHV and used by MHV administrators. This information is not sent back to MVI.

### How to Access and Test
### Error Handling
## Screenshots
### Before

This feature does not currently exist on VA.gov. Here is the feature in MHV for a staging user that only is registered at one facility. 

![Preferred facility feature on MHV with one facility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/MHV%20preferred%20facilities%20screenshot.png)

Real people can be registered at more than one facility. Here is a screenshot of what that would look like:

![Preferred facility feature on MHV with two facilities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/MHV%20preferred%20facilities%20screenshot%20with%20two%20facilities.png)

### After

