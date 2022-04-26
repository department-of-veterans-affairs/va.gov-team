# API to Display notes

This documents describes how the screen at [va.gov/profile/notifications](https://va.gov/profile/notifications) is built from the API calls to VA Notify.

<!-- TOC -->

- [API to Display notes](#api-to-display-notes)
  - [TL;DR](#tldr)
  - [UI Notes](#ui-notes)
    - [Key](#key)
    - [c. Options creation note](#c-options-creation-note)
  - [To Expand to new Channels](#to-expand-to-new-channels)
  - [API Call](#api-call)

<!-- /TOC -->

## TL;DR

- `1`, `2`, and `3c` we control
- `3a` and `3b`, we don't control

## UI Notes

![UI as of April 2022](./assets/notifications-page.png)

### Key

1. `Notification` is controlled by the team
2. Contact information on File, the text is controlled by the team and the information is populated from the VAP contact information.
3. This section is completely dynamic. The data and text is from the API call. Each `3` is a `Communication Group`.  The header of the group (`3a`) is the `name` of the `Communication Group`. Each `Communication Group` has a list of `Communication Items`. `3b`are the `name` of a `Communication Item`. We iterate over the list of `Communication Items` and display how ever many come from the API, with no filtering. Each `Communication Item` has a `Communication Channel`. Current this is a list of 1 item, `text`. The label being display, `3c` is controlled by our team, but we are expecting a value for text to come back from the API.

### 3c. Options creation note

We create the radio button lists based on the following code.

```jsx
 options={[
          {
            label: `Notify me by ${channelTypes[channelType]}`,
            value: 'true',
            ariaLabel: `Notify me of ${itemName} by ${
              channelTypes[channelType]
            }`,
          },
          {
            label: `Don’t notify me`,
            value: 'false',
            ariaLabel: `Do not notify me of ${itemName} by ${
              channelTypes[channelType]
            }`,
          },
        ]}
```

## To Expand to new Channels

- Edit the options list [here](<https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/profile/components/notification-settings/NotificationChannel.jsx#L80jk>

## API Call

> Sample call

``` API
GET /v0/profile/communication_preferences
```

```json
{
 "data": {
  "id": "",
  "type": "hashes",
  "attributes": {
   "communicationGroups": [{
    "id": 1,
    "name": "Applications, claims, decision reviews, and appeals",
    "description": null,
    "communicationItems": [{
     "id": 1,
     "name": "Board of Veterans' Appeals hearing reminder",
     "communicationChannels": [{
      "id": 1,
      "name": "Text",
      "description": "SMS Notification"
     }]
    }]
   }, {
    "id": 3,
    "name": "Your health care",
    "description": null,
    "communicationItems": [{
     "id": 3,
     "name": "Appointment reminders",
     "communicationChannels": [{
      "id": 1,
      "name": "Text",
      "description": "SMS Notification",
      "communicationPermission": {
       "id": 8596,
       "allowed": true
      }
     }]
    }, {
     "id": 4,
     "name": "Prescription shipment and tracking updates",
     "communicationChannels": [{
      "id": 1,
      "name": "Text",
      "description": "SMS Notification",
      "communicationPermission": {
       "id": 8361,
       "allowed": false
      }
     }]
    }]
   }]
  }
 }
}
```
