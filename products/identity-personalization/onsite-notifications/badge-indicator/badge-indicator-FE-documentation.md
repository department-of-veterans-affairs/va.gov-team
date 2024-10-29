# Badge indicator FE documentation - My VA Health Care inbox link implementation 

**Last updated:** October 29, 2024 - Removed note about content.

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

A [slim warning 'alert' component](https://design.va.gov/components/alert/#warning-alert) will display instead of the "Go to your inbox" link of the health care section of My VA if there is an API/systems related error that prevents the count of unread messages from being displayed. It is expected that this would prevent the reading of messages in a user's inbox as well, but there may be edge case scenarios in which users _might_ be able to still read messages on MHV. After consultation with DSC, the decision was made to use a single warning alert that replaces the "go to your inbox" link with a catch-all message regardless of error code. 

_(For uses outside of Health care and My VA, error messaging using alerts may make sense as well but could require a different pattern/component)._

With some error scenarios, it's possible secure messaging access may still be possible, even if a count cannot be given.

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2715-34412&t=3UjLr4lC05r8oBlP-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2622-33921&t=3UjLr4lC05r8oBlP-1)

### Content

We can't access your messages right now. We're sorry. Check back soon.

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
We use the `/my_health/v1/messaging/folders` endpoint to fetch a count of unread inbox messages, which provides this data to the UI.  Fetched response data is stored via redux.  [View the javascript implementation](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/utils/helpers.js#L36) for more details.

Example Request and response:
<img width="1470" alt="Screenshot of chrome devtools network tab with endpoint response" src="https://github.com/user-attachments/assets/5eca5d69-889a-4c6f-8a5c-e22a7ec8f340">

