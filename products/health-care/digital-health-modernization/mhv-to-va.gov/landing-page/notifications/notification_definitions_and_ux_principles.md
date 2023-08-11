# Notification "dot" design intent prep
### Agenda
- Cover some context: (2 min)
  - Notification component recently added to design system (Angela/Auth Exp team and Matt Dingey identified need, collaborated on design)
  - Why this component is not ideal for the new health landing page (show mock-up)
- Health landing page use case: (5 min)
  - Functional description of what is needed and why
  - Introduce dot and other examples on the site (secure messaging and check claims)
  - Walk through user flow
  - (assuming we won't have time to go into testing plan)
- My VA landing page use case (3 min)


# Notification Definitions and UX Principles
Created in preparation for Design intent: Secure message notification

## Defining traits of notifications:
- Notifications can be simply informational or guiding a user to take action in some way
- The timing of notifications is specific to the individual user
- Notifications tell the user about events that happen to the user (as opposed to events that the user completes), for example: a notification is generated when a user has a new secure message, but not when a user successfully sends a secure message
- A notification indicates the presence of specific to the user content/information that the user has not yet seen/read

## Defining traits of alerts:
- Alerts communicate system-wide issues / problems, for example: claims api is not working at the moment
- Alerts are viewed by many (all?) users
- Alerts can be specific to a user when they are confirming that a user action has been successfully completed, for example: Your message was sent  ui in which the alert appears

## Why not the notification component?
- Any notification that gets added to the VA health experience is in **addition** to the various notifications that Veterans already receive including texts, phone calls, emails, and mailed letters
  - Given this information, the current card component in the design system plays too prominent a role on the My Health landing page; it would move the actionable content on the page down the screen and out of sight (essentially becoming an obstacle between the user and the goal they came to the landing page to complete)
 
- So why add notifications to the health experience at all?
  - Products with good UX help users take advantage of their authenticated session to view/read everything that is new and specific to that user within the product
  - If a user is on the site and logged in, we think they shouldn't need to be concurrently referring to emails, texts, and letters to ensure they've seen everything new during a session

## What's next?

### Collaborate with MHV product teams 

We plan to recommend:
- New/unread changes should be obvious to the user from the moment they enter a product
- For products where it makes sense, include a "mark as read" functionality to allow users to clear the notification

### Prepare for learning through quant: site analytics
- This notification will not be launched until we are confident we can track it using site analytics
- Plan to compare current statistics on percentage of sessions in which the user enters the secure messaging tool to the percentage of sessions in which a notification dot is present next to the inbox link and in which the user enters the secure messaging tool
- This will be followed by qual research (including research focused on the needs of low vision users) later in the process (undetermined exactly when)
