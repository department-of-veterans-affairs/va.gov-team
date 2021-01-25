# Communications permissions (notification preferences): Product outline

Last Updated January 25, 2021

## POCs

- GitHub Label: va-profile; profile
- Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp)
- Keywords
     - Communication permissions
     - Communication preferences
     - Notification preferences
   

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Matt Shea|Product Manager| matt.shea@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Cassandra Allen |Designer| callen@governmentcio.com |
|Sandra Hallie | FE Engineer | shallie@governmentcio.com |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Mike Richard | VA Profile PM | Michael.Richard2@va.gov |
|Terry Bazemore | VA Profile Engineer |Terry.Bazemore@va.gov |

## Overview

The VA is ramping up their digital communications efforts, specifically through email and text. As a result, veterans need to be able to opt in or out of communications and customize through which channels they prefer to be contacted. To meet these organizational and user needs, the VA Profile team is building a communications permissions engine that will integrate with the VA.gov profile frontend and allow veteran-managed settings to be saved and shared across systems at the VA.  

### User Goals

- As a veteran, I want to be able to see what types of communications I am eligible to receive.
- As a veteran, I want to be able to select where and how I receive those communication (eg. receive emails for claim updates; receive texts for appointment reminders).
- As a veteran, I only want to have to keep this information updated in one place.

### Business Goals

- Allow veterans to set and manage communication preferences from their VA.gov profile.
- Allow any updates veterans make to their permissions to be saved/accessed across the VA (through VA Profile backend).
- Set up an infrastructure for this functionality that is sustainable and allows us to scale easily over time.

## Assumptions

- Veterans expect to set notification preferences from the VA.gov profile.
- It will be fast and easy for us to add in new preferences after the initial infrastructure is in place.

## Questions

- Where do veterans expect to set and manage notification preferences?
- After the initial infrastructure set up, what notification preferences will we need to accomodate?

## Requirements

### In Scope

**Phase 1: Infrastructure set-up**

Please see [communications preferences MVP documentation]()

### Out of Scope

**Phase 1: Infrastructure set-up**

- For the initial set up, I don't *think* we are setting up any actual preferences, but I'm not 100% sure on this. This may evolve over time.

## Solution Approach

- VA Profile's 12/14/20 launch: They are establishing infrastructure for communication partners.
- VA Profile's January 2021 release: They are still establishing infrastructure for grouping.
- In January 2021, the VA.gov authenticated experience team will start working with VA Profile on the backend integration. Design/FE will also meet with them to discuss frontend architecture. While there aren't any preferences for us to set up initially, having this established will allow us to easily scale and support the design/fronted as we start to support actual prefrences.

## Value Propositions

- Veterans will be able to update how they want to receive different types of communications from the VA.
- Since this is integrated through VA Profile, those preferences will be consumable across the VA. So, that means that veterans should only have to update these preferences in one place — either the VA.gov profile, through a call center, etc — and that info should get updated everywhere.

## KPIs

We'll need to set up baseline metrics on

- How many preferences are updated
- How many people opt-out of any digital communication

It would be nice to have metrics on how this affects paper correspondence, but it has historically been extraordinarily difficult to get this kind of data at the VA.

# Implementation Info

## Status

- **November 2020**: Initial meeting with VA Profile.
- **December 2020**: Clarifying technical details and timelines with VA Profile.

## Product Decisions

## Technical Details

### How to Access and Test
### Error Handling
## Screenshots
### Before

### After

