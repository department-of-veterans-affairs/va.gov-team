# Preferred medical facility(ies) in the VA.gov profile: Product Outline

Last Updated October 1, 2020

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
|Matt Shea|Product Manager| matt.shea@adhocteam.us |
|Lenae Storey|Product Manager| lenae.storey@adhocteam.us |
|??? | Designer | ??? |
|Sandra Hallie | FE Engineer | shallie@governmentcio.com |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Carnetta Scruggs| MHV lead | Carnetta.Scruggs@va.gov |

## The Problem

The VAOS (online scheduling) tool shows people all of the facilities that they're registered at, but registration does not mean someone is a current patient. People can be registered at facilities for reasons other than being a patient there, and they can still be registered at facilities they haven't been to in a number of years. This is because the facility list is pulled in via MVI, and MVI does not make a distinction between the facilities someone currently goes to and old facilities. This is causing veterans to see facilities in their facility list that they don't go to, which has resulted in a considerable amount of complaints. They do not understand why they are being asked to make appointments at facilities they don't go to.

While we can't change the historical list of facilities that is kept in MVI, we can allow veterans to indicate which facilities they are currently patients at and which they are not so that we don't show them old facilities in the VAOS tool. This information *is* currently available on MHV, but it does not currently exist on VA.gov.

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



## Requirements

### In Scope

### Out of Scope

## Solution Approach


## Value Propositions


## KPIs

- Check in with Lenae about this (how much do we want to reduce VAOS drop offs and complaints?)

# Implementation Info

## Status

- **September 2020**: Lenae/Lauren proposed this update; DEPO team reviewed and rated this feature on the DEPO product board.
- **October 2020**: Initial discovery.

## Product Decisions
## Technical Details
### How to Access and Test
### Error Handling
## Screenshots
### Before

This feature does not currently exist on VA.gov. Here is the feature in MHV.

[Get screenshot of feature on MHV]

### After

