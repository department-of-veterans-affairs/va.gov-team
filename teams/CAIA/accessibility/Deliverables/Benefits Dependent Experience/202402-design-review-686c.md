# [Design Review a11y findings] Review of 686c/674 Form Updates
## Benefits - Dependent Experience Team
- **Figma Prototype(s):**  [AUTHENTICATED AND UNAUTHENTICATED VIEWS](https://www.figma.com/file/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?type=design&node-id=319-47346&mode=design&t=B1YUTqeRaQ7McZnF-0)
- **Team Slack Channel:** #benefits-dependents-management
- **CAIA A11y Ticket:** [#76841](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76841)
- **Date of Audit:** 2/22/2024


## Product team
- Team name: Benefits - Dependent Experience
- OCTO product owner: Emily Theis
- Product name: 21-868c and 21-674 online form flow
- Product manager: Laura Steele
- Slack channel: #benefits-dependents-management
- Dedicated content writer on your team (if you have one): none
- Dedicated a11y specialist on your team (if you have one): none

## Auditor(s)
- Evan B.

## Feedback 
 
Review version(s) of a new form updates, in Figma.  Governance has already reviewed for design intent, and midpoint review will be 2/23. CAIA can assist with a pre-Midpoint review and/or help with the staging artifact ticket. 

### CAIA A11Y Review

<details><summary>Toggle to View Details of Design Review</summary>

#### Presentation of content

1. **From past AT user sessions**, multiple users raised concerns about reading a “wall of text” compared to interacting with accordion styled content. Explore ways to condense the information for users who may be cognitively overwhelmed from the large amount of text.
2. **Consideration**: Use the “one thing per page” concept. Each step can be contained with its own screen, allowing users to process each step individually. This should help certain users be able to focus on one step at a time, decreasing the risk of mental fatique.
3. **Consideration**: Convert the list of instructions to an interactive checklist, as this formatting could help with identifying call to actions. A user may glance through the directions in a condensed list format, while a checklist with more spacing between each item can create more direct interaction. It can also help users keep track of the information they gathered as they move through the directions.

#### More than one CTA

For the "authenticated in progress" screen, the "Continue your application" CTA should be repeated at the end of the directions so users wouldn't have to scroll back to the top to continue their application.

The same concept applies for the "start a new application" CTA, as a user would need to scroll back up to activate that function.
This will also provide consistency throughout related screens, as the unauthenticated and authenticated screens have the repeated CTA at the end of the instructions.

#### Clear callout

For the “in progress saved” screen, users could benefit from a text alert that says “progress has been saved” above the blue information box, or positioned somewhere obvious. While the current screen provides information for when the progress was last saved, it seems less present than saying “your progress has been saved.” After this text, the current text in the screen can be read to the user.

</details>


