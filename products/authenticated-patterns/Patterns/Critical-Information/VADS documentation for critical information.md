# Critical information

Use with caution: Available

The Critical information component is used to highlight important and/or time-sensitive actions a user needs to take online.

## Resources
<table>
  <tr>
   <td>Open Issues
   </td>
   <td>Research [Add link soon]
   </td>
   <td><a href="https://www.figma.com/design/UOx5GSKdZW9GVAjy7078hT/AEDP---Critical-Information?node-id=2-129&t=wkfhJB4eXXQAgeV2-1">Figma</a> [Use our file for now; Design System will adjust it later]
   </td>
  </tr>
</table>

## Contributors

Lynn Stahl (Agile Six)

Adam Whitlock (Ad Hoc)

Belle Poopongpanit (Agile Six)

Christine Rose Steiffer (Agile Six)

Kristen Faiferlick (Ad Hoc)

## On this page

* Examples
* Usage
* Code usage
* Content considerations
* Accessibility considerations 
* Related
* Component checklist


## Examples

(This will eventually transition to Storybook links)

![Service list - desktop](https://github.com/user-attachments/assets/e763c2f6-492f-4717-8b09-0d3dbebb2690)

[Alt text: A list of benefits a Veteran is enrolled in. Several of the benefits in the list have Critical information components, which highlight an action the user needs to take.]

[Caption: In lists of Cards or Service list items, Critical information components can highlight important or time-sensitive actions the user needs to take.]

![My VA](https://github.com/user-attachments/assets/46f768dd-ac0d-424a-bdce-56156c0f92e5)

[Alt text: My VA, with five yellow Critical information components stacked at the top of the page under a header that says “Actions needed.”]

[Caption: On dashboard pages like My VA, Critical information components stack at the top, highlighting for the user the most pressing actions they need to take.]


## Usage

### When to use Critical information

* **When you want to highlight a single task that will otherwise block the user from proceeding.** The Critical information component should be used to draw attention to important and time-sensitive tasks that prevent the user from completing a task or goal. For example, they might need to request a refill in order to continue using a specific prescription; or check into an appointment, complete an Intent to File before the deadline, or pay an overdue or soon-to-be overdue debt.. 

### When not to use Critical information

* **When the action requested of the user is not urgent, time-sensitive, or required.** These types of requests can be shared with the [Alert](https://design.va.gov/components/alert/) component.
* **When the required action cannot be taken online.** The Critical information component always contains a link, so actions that cannot be taken online (such as mailing paperwork or calling an office) cannot use this component. Additionally, actions that require two links (such as phone numbers, which contain a link to the standard phone number as well as the TTY phone number) must use the Alert component, which can accommodate multiple links. 
* **When you need to include lengthy messages.** Text within the Critical information component should be very concise. The Critical information component will link to another page that can contain more information, but the page you link to must be the page where the user can take the action. See the Content section for more guidance.
* **When you need to nest another component inside the component.** If you want to nest other components–such as Action links, Buttons Additional info, or Accordions–inside of a Critical information component, use an Alert, [Card](https://design.va.gov/components/card), or [Summary box](https://design.va.gov/components/summary-box) component instead.
* **When you are displaying a form.** Important messages in forms should use the Alert component. 

### Anatomy or layout details

![Annotations](https://github.com/user-attachments/assets/1f640f8b-0373-4414-bcc5-c659388dbdd6)

[Alt text: An annotated display of the Critical information component, showing a yellow background and black text. The text and chevron link to a page where the user can take action.]

[Caption: Critical information components are always yellow and always link to a page where a user can take more action. The link spans all the way from the text to the right-aligned chevron.]

In most cases, the Critical information component will be displayed within a [Card](https://design.va.gov/components/card) or [Service list item](https://design.va.gov/components/service-list-item) component. In these cases, the Critical information component should be displayed directly below the Status and take up the width of the component it is nested within. Only one Critical information component should be displayed within a Card or Service list item.

[Insert same image as in the Examples section]
![Service list - desktop](https://github.com/user-attachments/assets/742a38d5-dfd3-4339-9db9-49a5ec14ed17)

In My VA, Critical information components may be stacked at the top of the page. In this setting, they should take up 66% of the content width. Eventually, there may be other dashboard UI that will also accommodate the stacked Critical information components. 

[Insert same image as in the Examples section]
![My VA](https://github.com/user-attachments/assets/0a5135e9-a4a2-40a4-99ae-47b6ff57635c)


## Code usage

(Coming soon)

## Content considerations

* When possible, start Critical information content with verbs.
* When relevant, include a date by which the user must take the action.
* Keep the text concise. Work with the Content IA Centralized team (CIAC) to develop clear, short messages that express to the user the required action and deadline (if applicable). 
* In some cases, the Critical information component inside a Card or Service list item will be surfaced on My VA or another dashboard setting. In these cases, the component will be shown without the context of the Card or Service list item. It is important that the content has enough information for the Veteran to understand the action. The examples below show appropriate levels of detail. 

![Annotations 2](https://github.com/user-attachments/assets/10dcd3ef-3957-4a99-a499-1ee1e08ea87b)

[Alt text: Two examples of how much detail to add. For example, don’t say simply “Pay” or “Check in.” Rather, say “Pay your debt of $251.42” or “Check in to your Optometry appointment now.”]

## Accessibility considerations 

The Critical information component is a stylized link. Follow best practices for the [Link](https://design.va.gov/components/link/) and [Link - Action](https://design.va.gov/components/link/action) components. 

## Related

* [Alert](https://design.va.gov/components/alert/)
* [Link - Action](https://design.va.gov/components/link/action)

## Component checklist [format as an accordion; [example](https://design.va.gov/components/additional-info#component-checklist)]

* Maturity
    - [ ] Guidance - Examples, usage, code usage, content considerations, and accessibility considerations are all complete.
    - [ ] Research - VFS team conducted research on this component which is linked from this page.
    - [ ] Stability - Component has been in production for more than 3 months with no significant issues found.
    - [ ]  Adoption - Multiple teams have adopted this component.
* Accessibility
* Code assets
    - [ ] ​​Variations - Storybook includes all variations (style, size, orientation, optional iconography, selection, error state, etc.)
    - [ ] Responsive - Component depicted in all responsive breakpoints.
    - [ ] Interactive states - Includes all interactive states that are applicable (hover, active, focus, keyboard focus, disabled).
    - [ ] Tokens - All design attributes (color, typography, layout, etc.) are available as tokens.
    - [ ] Internationalization - Describes i18n attributes.
* Visual assets
    - [ ] Variations - Figma library includes all variations (style, size, orientation, optional iconography, selection, error state, etc.)
    - [ ] Responsive - Component designed to work in all responsive breakpoints.
    - [ ] Interactive states - Includes all interactive states that are applicable (hover, active, focus, keyboard focus, disabled).
    - [ ] Tokens - All design attributes (color, typography, layout, etc.) are available as tokens.
