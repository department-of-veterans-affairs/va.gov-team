# Auth Experience + VA Notify Notifications MVP Requirements

Last updated November 2, 2021

## Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Anastasia Jakabcin (AJ)|Product Manager| ana@adhocteam.us |
|Healther Justice|Product Manager| heather.justice@adhocteam.us |
|Liz Lantz |Designer| liz.lantz@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Taylor Mitchell| FE Engineer| tmitchell@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |

## Links

- [Product Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/vagov-notifications/README.md)
- [Data Points for MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/vagov-notifications/frontend/documentation/data-points-in-mvp.md)
- [Notifications Designs](https://app.mural.co/t/vsa8243/m/vsa8243/1634064448225/f9f3bb98da6eadf4a648fb30d17d15560950ceab?sender=tressafurner7646)
- [Meeting notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/vagov-notifications/design/design-documentation/va-notify-meeting-notes.md)

## Goals for MVP

### Requirements for VA Notify CMS

**Bare minimum for MVP:**
- We need some sort of raw variable data dump and code on our end will parse through it.
- We need to be able to see what notifications have onsite alerts in their CMS and which ones do not.
- A way to recieve data from VA Notify (needs to be figured out)

**Ideal for MVP:** 
- The actual content for a given notification will live in VA Notify CMS.

### Requirements from a code perspective
- We need VA Notify to be able to send our API JSON versions of notifications.

## Questions for VA Notify

- How can we recieve data from VA Notify? Where will the templates/data be stored?
  - Do the templates need to be in HTML? Or can we get raw JSON data?
- How is the information that VA Notify is sending generated?
- How much of the VA.gov Notifications frontend information is managed in the VA Notify backend?
- For any piece of information we want to show, we need to check with VA Notify to see if they are already getting that information. (Example: prescription information may be masked, or may not exist)
- How many notifications are people getting for each specific notification? (Example: Are they getting a notification for an appointment 1 month + 3 weeks + 1 week out, or is it just one notification?)
  - For a given appt is there a stable ID for that particular appointment? If there were 3 different reminders for the same appt would there be an easy way to know they were all for the same appt?
- Are there other notifications that can be shown that aren't represented in our [Data Points for MVP doc?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/vagov-notifications/frontend/documentation/data-points-in-mvp.md)
- How many notifications would be sent to our API? 

## Action items




