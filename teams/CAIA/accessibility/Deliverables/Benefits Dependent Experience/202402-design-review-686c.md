> [!CAUTION]
> - **This is a WIP.**
> - **Goal:** Provide _before_ Midpoint Review Friday 2/23/2024

# [Design Review a11y findings] Review of 686c/674 Form Updates
## Benefits - Dependent Experience Team
- **Figma Prototype(s):**  [AUTHENTICATED AND UNAUTHENTICATED VIEWS](https://www.figma.com/file/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?type=design&node-id=319-47346&mode=design&t=B1YUTqeRaQ7McZnF-0)
- **Team Slack Channel:** #benefits-dependents-management
- **CAIA A11y Ticket:** [#xxx](https://github.com/department-of-veterans-affairs/va.gov-team/issues/xxx)
- **Date of Audit:** `PRIOR TO MIDPOINT 2/23`


## Product team
- Team name: Benefits - Dependent Experience
- OCTO product owner: Emily Theis
- Product name: 21-868c and 21-674 online form flow
- Product manager: Laura Steele
- Slack channel: #benefits-dependents-management
- Dedicated content writer on your team (if you have one): none
- Dedicated a11y specialist on your team (if you have one): none

## Auditor(s)
- `EVAN`

## Testing Coverage: 
 
Review version(s) of a new form updates, in Figma.  Governance has already reviewed for design intent, and midpoint review will be 2/23. CAIA can assist with a pre-Midpoint review and/or help with the staging artifact ticket. 

 <details><summary>Toggle to view copy of Governance A11y Feedback</summary>

### Design Intent - Accessibility Feedback - Benefits Dependent Experience, 21-686c/674, Critical Form Updates
**Source**: [#75078](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75078)
#### Must
- Guidance was recently added to the design system on when [conditionally-revealing new inputs](https://design.va.gov/patterns/ask-users-for/relationship#conditionally-revealed-fields-can-be-used-if-the-following-conditions-are-met) is appropriate. Some instances in your form where it probably makes more sense to split things onto another page:
    - All of the conditionals in the [Add spouse flow](https://www.figma.com/file/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?type=design&node-id=38-148&mode=design&t=A67jXw9nxl43pTd9-0) except "Type of marriage > Other" and "Reason marriage ended > Annulment or other."
    - All of the conditionals in the [Add child <18 flow](https://www.figma.com/file/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?type=design&node-id=38-149&mode=design&t=A67jXw9nxl43pTd9-0)
    - All of the conditionals in the [Add child 18-23 flow](https://www.figma.com/file/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?type=design&node-id=38-150&mode=design&t=A67jXw9nxl43pTd9-0)
#### Should
- In [Step 1](https://www.figma.com/file/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?type=design&node-id=6-2&mode=design&t=A67jXw9nxl43pTd9-0), the block of text after the checkboxes is likely to be skipped by screen reader users, which means they may miss out on some important information. It's also a bit higher cognitive load to follow and parse out what I should or shouldn't be choosing. Two possible things to explore:
    - Try breaking this text out into simple yes/no questions that can then map to the right selections on the back end. This takes some of the cognitive load off of the user to parse through everything.
    - Include help text in context with the relevant checkboxes themselves using [the tile variant of the checkbox component](https://design.va.gov/storybook/?path=/docs/uswds-va-checkbox-group--tile#tile). That helper text will be announced by screen readers when announcing the checkbox label, which ensures it doesn't get skipped and gives the information to users in the moment when they're deciding what to check.

 </details>


## Unauthenticated Version
 
- [ ] Run axe checks on every page or unique state (required)
- [ ] Color contrast checks
- [ ] Color blindness checks
- [ ] Tab order
- [ ] Zoom layouts to 400% and inspect them for readability. If layouts break at 400%, I will start reducing them until they become stable, and log the zoom ratio when things started breaking.
- [ ] Keyboard navigation
- [ ] Windows, Chrome, JAWS
- [ ] MacOS, Safari, VoiceOver
- [ ] iPhone, iOS Safari, VoiceOver
- [ ] Samsung Galaxy Android

### Results and recommendations

<details><summary>Name of Result Toggle to View Detail</summary>

- **Device Impact:** `Desktop`, `Mobile`, `Tablet` or `All Devices`
- **AT Impact:** `Screen Readers`, `Zoom`, etc.
- **Description**:`Description of the finding with examples and images, if available`
- **Recommendation:** `Suggestions/recommendations to remediate`

</details>
 
## Authenticated Version
 
- [ ] Run axe checks on every page or unique state (required)
- [ ] Color contrast checks
- [ ] Color blindness checks
- [ ] Tab order
- [ ] Zoom layouts to 400% and inspect them for readability. If layouts break at 400%, I will start reducing them until they become stable, and log the zoom ratio when things started breaking.
- [ ] Keyboard navigation
- [ ] Windows, Chrome, JAWS
- [ ] MacOS, Safari, VoiceOver
- [ ] iPhone, iOS Safari, VoiceOver
- [ ] Samsung Galaxy Android

### Results and recommendations

<details><summary>Name of Result Toggle to View Detail</summary>

- **Device Impact:** `Desktop`, `Mobile`, `Tablet` or `All Devices`
- **AT Impact:** `Screen Readers`, `Zoom`, etc.
- **Description**:`Description of the finding with examples and images, if available`
- **Recommendation:** `Suggestions/recommendations to remediate`

</details>



