# API to Display notes

This documents describes how the screen at [va.gov/profile/notifications](https://va.gov/profile/notifications) is built from the API calls to VA Profile.

This page has a lot of items in flight. Many teams have requested additional notifications and additioanl features. It isn't possible for this to be comprehensive but does cover important features. 

<!-- TOC -->

- [API to Display notes](#api-to-display-notes)
  - [TL;DR](#tldr)
  - [UI Notes](#ui-notes)
    - [Key](#key)
    - [c. Options creation note](#c-options-creation-note)
  - [Points of interests](#points-of-interests)
  - [API Call](#api-call)

<!-- /TOC -->

## TL;DR

- `1`, `2`, and `3` we control
- `4a` and `4b`, we don't control
- `4c` we partially control

## UI With Markup 

Below is a screenshot of the notification settings UI. [For the most up to date designs see our figma files](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?node-id=1-12888&node-type=CANVAS&t=OcxVvp5AEXhSbF73-0). 

![Notification Settings Aug 2024](https://github.com/user-attachments/assets/92ca4358-c755-4bdb-9125-df2e9b5799dd)


### Key

1. `Notification Settings` heading is controlled by the team
2. The copy at the start of the page is controlled by the team
3. Contact information on File, the text is controlled by the team and the information is populated from the profile's contact information page. This is dynamic based on:
     1. If notification preferences with email as a channel are enabled
     2. If the user has an email or mobile phone on file - if they do not the language there varies 
4. This section is completely dynamic and NOT controlled by the team. The data and text is from the API call.
     1. The `4` corresponds to what VA Profile calls a `Communication Group`. For each commincation group there is a separate heading. The header of the group (`4a`) is the `name` of the `Communication Group`. Each `Communication Group` has a list of `Communication Items`.
          1. `4b` is an example of a `Communication Item` with the `name`: _Health appointment reminders_. `4d` is an example of a `Communication Item` with the `name`: _Prescription shipping notifications_. We iterate over the list of `Communication Items` and display how ever many come from the API. There are no transformations of the item names. 
               1. Each `Communication Item` has associated `Communication Channels` of either `Text` or `Email`. Each communication item can have multiple channels associated with it. `4c`, the label paired with each respective channel, is controlled by our team, but we are expecting a value for text (0) or email (1) to come back from the API. Other channels in the future we would expect to have different values.



## Points of interests

- Edit the options list [here](<https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/profile/components/notification-settings/NotificationChannel.jsx#L80jk>. Once we expand to email, this will be where the dev work will start.
- RX tracking notification is controlled by facility id. The allow-list is located at <https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/profile/constants.js#L65>
- Healthcare Notifications only show if the user has *any* facilities. The filter logic is located at <https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/profile/ducks/communicationPreferences.js#L353>


## Default Send 


## Contact Information - Editing as a Subtask 


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

## Appendix 

<details><summary>Details</summary>
<p>

## TL;DR

- `1`, `2`, and `3c` we control
- `3a` and `3b`, we don't control

## UI Notes

![UI as of April 2022](./assets/notifications-page.png)


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

</p>
</details> 
