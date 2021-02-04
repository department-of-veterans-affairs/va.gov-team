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
- Given that all data will be pulled in dynamically from VA Profile (notification types, groupings, and "channels", ie email or text), how do we maintain content and usability integrity?

## Value Propositions

- Veterans will be able to update how they want to receive different types of communications from the VA.
- Since this is integrated through VA Profile, those preferences will be consumable across the VA. So, that means that veterans should only have to update these preferences in one place — either the VA.gov profile, through a call center, etc — and that info should get updated everywhere.

## KPIs

We'll need to set up baseline metrics on:

- How many preferences are updated
- Successful loading of people's preferences in the profile
- Successful saves
- Errors

It would be nice to have metrics on how this affects paper correspondence, but this has historically not been possible to get. 

# Implementation Info

## MVP approach

Please see the [communications preferences MVP doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md) for detailed documentation on the MVP requirements.

## Status

- **November 2020**: Initial meeting with VA Profile.
- **December 2020**: Clarifying technical details and timelines with VA Profile.
- **January 2021**: Backend integration begins; full definition of MVP outlined.

## Product Decisions

## Technical Details

### How to Access and Test
### Error Handling
## Screenshots
### Before

### After

