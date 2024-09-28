# [Pilot Review a11y findings]: MHV Cartography Team - Secondary Navigation
- **Prototypes:**
    - Auth Exp/Menu - https://cdpn.io/pen/debug/JjzNWbR
    - **Type**: Desktop
    - **Testing AT**: VoiceOver
- **Team Slack Channel:**[#accountexp-authexp](add link here)
- **CAIA A11y Ticket:** [#74259](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74259)
- **Date of PIlot:** January 26, 2024


## Product team
- Team name: Authenticated Experience
- OCTO-DE product owner: Samara Strauss
- Product manager: Travis Chaill
- Designer: Liz Lantz
- FE engineer: Adam Whitlock

## Pilot Session Auditor(s)
- Evan
- Eli

## Testing Coverage: 
 
A CAIA a11y will participate as a user in a pilot of the [Authenticated Experience, Authenticated Menu's research study](https://github.com/department-of-veterans-affairs/va.gov-team/issues/73875).

- Researcher: The VFS team researcher will test their prototype and conversation guide by conducting the pilot session with a CAIA A11Y.
- User: The CAIA A11Y team member will act as a real user in the pilot session.
- Assistive Tech: The CAIA A11Y team member will follow the prompts given by the VFS Researcher, while using and demonstrating how the behavior of a screen reader on - desktop would behave. 

## Prototype 

### Participant Details

- **Skill level of user**: Intermediate
- **Operating System**: MacOS
- **Assistive Technology being used**: VoiceOver
- **Internet Browser**: Firefox
- **Device Type**: Desktop
 
### Intro / Get to know the user

- Eli posed as a veteran who has education and housing benefits, and pursuing disability benefits
 
### Assistive technology setup / issues
- **Possible scenario**: Screen reader may be configured to start announcing content upon page load which can extend the session longer than usual due to waiting for screen reader and response from user 

### Task 1: Navigate to view disability rating
- Navigated to profile
- Types in credentials to sign in
- Screen reader automatically begins navigating through the page
- User goes to profile navigation menu and expands the menu
- Finds disability rating within menu - issue occurs with the nav menu remaining expanded during a new page reload, which could be disorienting. Unable to replicate this issue so could be a singular event but may need to be investigated further
- User mentions that navigating to disability rating was easy and intuitive

### Task 2: Navigate to letters
- Navigates to profile nav menu
- Selects Letters in nav menu
- Selects View letters button - Doesnt work in the prototype yet
- In a previous session when an actual veteran tried to find this option, was unable to find it - could improve on making this option more obvious to all users
- Screen reader announces CodePen as the title since it is contained in the title tag of the page

### Task 3: Navigate to profile
- Navigates to profile nav menu
- Selects Profile in nav menu
- Selects contact information - could be some confusion due to contact information being similar to another option on the same screen. May want to consider making a better distinction between both options.
- Page not set up yet - Feels like an unfinished page to the screen reader user, though still announces everything on the page


### Task 4: What would you change about the navigation
- Likes that the menu opens/closes based on user action
- The options feel distinct
- Likes that disability rating was obvious

### Additional discussion / takeaways
- Some screen reader users will not use a display - this can change the experience into a mobile experience even though they’re using a desktop
- **Mobile view**: Found an issue with the profile name in nav, as it doesn't display the name of the user
- **Mobile view**: Does not mention that the menu expands/collapses on certain buttons
- Overall, the mobile experience can be improved and is not as easy to understand compared to the desktop experience
