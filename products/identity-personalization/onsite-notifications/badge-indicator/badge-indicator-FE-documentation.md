# Badge indicator FE documentation - My VA Health Care inbox link implementation 

**Last updated:** September 19, 2024 - first published

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

Use _________ for icon

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


**Positioning**
- The "Go to your inbox" link should always appear first in the stack of health care links. The stack of links appears on the lefthand side on desktop if the user does not upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Go to your inbox](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging)

## Technical Implementation
_For engineer to complete: how does this feature actually work - i.e. what endpoints are being called, who owns those endpoints, what team(s) should be consulted if changes are needed or something breaks, etc._

TK TK
