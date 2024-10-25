# Badge indicator FE documentation - My VA Health Care inbox link implementation 

**Last updated:** October 23, 2024 - Updated details for error handling.

This document outlines specs for implementing the badge indicator on the "Go to your inbox" link in the Health Care section on My VA. The link provides access the health care secure messaging inbox. For full documentation on the Health Care section of My VA, see [My VA: Health Care Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/health-care-use-cases). 

## Go to your inbox link

### With unread messages:

<img width="460" alt="Badge 1" src="https://github.com/user-attachments/assets/18fb8819-ada6-4d5b-82aa-972fe8116aa0">

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2291-30877&t=A6qFKMrzSt4ukLYn-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1758-69586&t=A6qFKMrzSt4ukLYn-1)

### Without unread messages:

<img width="460" alt="No messages" src="https://github.com/user-attachments/assets/da79657a-80e4-4a1f-83f9-08d5c43278df">

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-370&t=A6qFKMrzSt4ukLYn-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-853&t=A6qFKMrzSt4ukLYn-1)

## Error state - API-related failure(s):

A [warning 'alert' component](https://design.va.gov/components/alert/#warning-alert) will display at the top of the Health care section of My VA if there is an API/systems related error that prevents the count of unread messages from being displayed. It is expected that this would prevent the reading of messages in a user's inbox as well, but there may be edge case scenarios which mean we must tell users that they _might_ be able to still read messages on MHV. 

_(For uses outside of Health care and My VA, error messaging using alerts may make sense as well but could require a different pattern/component)._

_Note that this content may need additional CAIA review._

### Inbox may be accessible still on MHV (400s error code)

With some error scenarios, it's possible secure messaging access may still be possible, even if a count cannot be given.

<img width="400" alt="Screenshot 2024-10-22 at 11 40 47 AM" src="https://github.com/user-attachments/assets/223ef4ec-4a30-444c-8cb5-3b4410d0d45e">


[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2621-31035&t=h6U22HGIiGoYMot8-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2622-33921&t=h6U22HGIiGoYMot8-1)


### Inbox is not accessible on MHV (500s error code)

With some other error scenarios, it's guaranteed that messaging would not be available. 

<img width="400" alt="Screenshot 2024-10-23 at 9 43 35 AM" src="https://github.com/user-attachments/assets/a73cf17c-0009-4387-bf61-28c2ee582ba7">

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2677-4869&t=JEjUCa3eWvva0IQU-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2681-12300&t=JEjUCa3eWvva0IQU-1)

---

### Use cases

**Show link**
- For users who have VA health care.

**Show badge indicator**
- For users who have unread messages in their secure messaging inbox.

**Flow chart**

<img width="4206" alt="Flow Chart" src="https://github.com/user-attachments/assets/68314736-d111-471b-a9d4-3cc8fc66f28b">

### Visual specifications

<img width="210" alt="badge specifications" src="https://github.com/user-attachments/assets/1ff0d15a-2381-45f1-a3ae-dd08067a63f8">

display: inline-flex;

height: 24px;

padding: 0px 8px 0px 8px;

justify-content: center;

align-items: center;

Radius: 2px;

Color:$color-secondary-vads-color-secondary-dark

font: vads-font-family-sans-serif, vads-font-size-base,vads-font-weight-bold 

color: $color-vads-color-base-lightest

**Accessibility specs** 

The component is implemented with aria text for screen reader usage. 

The aria text has variations depending on the number of unread messages/other unseen content:

- 1 item: "Go to your inbox. You have 1 new message."
- 2-99 items: "Go to your inbox. You have # new messages."
- More than 99 items: "Go to your inbox. You have more than 99 new messages."
- If no count can be displayed: N/A (warning alert appears in Health care without a badge indicator)

**Positioning**
- The "Go to your inbox" link should always appear first in the stack of health care links. The stack of links appears on the lefthand side on desktop if the user does not upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Go to your inbox](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging)

## Technical Implementation
We are already using the `/my_health/v1/messaging/folders` endpoint to display the "dot" indicator.  We can use this to read the count for the new badge indicator.  Fetched response data is already being stored via redux.  There will be fairly minor changes in FE code to enable this behavior.

Eventually we will replace our custom implementation with a common DS component for the badge UI.
