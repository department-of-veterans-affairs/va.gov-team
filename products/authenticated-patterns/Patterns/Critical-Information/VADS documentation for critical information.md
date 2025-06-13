> [!WARNING]
> Content from this page has been moved to the VA Design System [Critical Action](https://design.va.gov/components/critical-action) component. This page is no longer being updated.

------
# Alert - Critical

Use with caution: Available

The Alert - Critical component is used to highlight important and/or time-sensitive actions a user needs to take online.

## Resources
<table>
  <tr>
   <td>Open Issues
   </td>
   <td><a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/Critical-Information/Desk%20research%20report.md">Research</a>  
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

![My VA](https://github.com/user-attachments/assets/46f768dd-ac0d-424a-bdce-56156c0f92e5)

[Alt text: My VA, with five yellow Alert - Critical components stacked at the top of the page under a header that says “Actions needed.”]

[Caption: On dashboard pages like My VA, Alert - Critical components stack at the top, highlighting the most pressing actions users need to take.]

![Service list - desktop](https://github.com/user-attachments/assets/e763c2f6-492f-4717-8b09-0d3dbebb2690)

[Alt text: A list of benefits a Veteran is enrolled in. Several of the benefits in the list have Alert - Critical components, which highlight an action the user needs to take.]

[Caption: In lists of Cards or Service list items, Alert - Critical can highlight important or time-sensitive actions the user needs to take. This page is not currently in production.]

## Usage

### When to use Alert - Critical

* **When you want to highlight a single task that will otherwise block the user from proceeding.** Use the Alert - Critical component for important and time-sensitive tasks that prevent the user from accessing their VA benefits or VA services. For example, they might need to request a refill to continue using a specific prescription, check into an appointment, or pay an overdue debt to prevent VA from offsetting VA benefit payments. 

### When not to use Alert - Critical

* **When an action is not urgent, time-sensitive, or required.** Use the [Alert](https://design.va.gov/components/alert/) component instead.
* **When you need to alert the user about a system error.** Use Alerts to express system errors.
* **When you're designing a form.** Use the Alert component to display important messages in forms. 

### Anatomy or layout details

![Annotations](https://github.com/user-attachments/assets/1f640f8b-0373-4414-bcc5-c659388dbdd6)

[Alt text: An annotated display of the Alert - Critical component, showing a yellow background and black text. The text and chevron link to a page where the user can take action.]

[Caption: Alert - Critical components are always yellow and link to a page where the user can take the action. The link spans all the way from the text to the right-aligned chevron.]

#### General guidance
* The Alert - Critical component links to a detail page from which the user can complete the call to action. 
* The Alert - Critical compent is not dismissable. It should be removed when the user completes the call to action.

#### Placement details

In most cases, display the Alert - Critical component in a [Card](https://design.va.gov/components/card) or [Service list item](https://design.va.gov/components/service-list-item) component. 
* Place the component directly below the Status tag.
* Include only one Alert - Critical component in a Card or Service list item.
* Alert - Critical should span the width of the Card or Service list item.

[Insert same image as in the Examples section]
![Service list - desktop](https://github.com/user-attachments/assets/742a38d5-dfd3-4339-9db9-49a5ec14ed17)

On the My VA page, follow the [guidance for Alert placement](https://design.va.gov/components/alert/#web-4). The component should take up 66% of the content width. Eventually, there may be other dashboard UI that will also accommodate the stacked Alert - Critical components. 

[Insert same image as in the Examples section]
![My VA](https://github.com/user-attachments/assets/0a5135e9-a4a2-40a4-99ae-47b6ff57635c)


## Code usage

(Coming soon)

## Content considerations

* When possible, start Alert - Critical content with verbs.
* When relevant, include a date by which the user must take the action.
* Keep the text concise. Work with the Content IA Centralized team (CIAC) to develop clear, short messages that tell the user the required action and deadline (if applicable). 
* You may display the Alert - Critical component inside a Card or Service list item on My VA or other page that show multiple VA benefits. In these cases, the component is shown outside the context of a Card or Service list item. It's important that the content clearly communicates the action to the user. The examples below show appropriate levels of detail. 

![Annotations 2](https://github.com/user-attachments/assets/10dcd3ef-3957-4a99-a499-1ee1e08ea87b)

[Alt text: Two examples of how much detail to add. For example, don’t say simply “Pay” or “Check in.” Rather, say “Pay your debt of $251.42” or “Check in to your Optometry appointment now.”]

## Accessibility considerations 

- Alert - Critical always contains a link. Follow best practices for the [Link](https://design.va.gov/components/link/) and [Link - Action](https://design.va.gov/components/link/action) components. 
- WCAG [indicates](https://www.w3.org/TR/WCAG22/#use-of-color) that we should not use color alone to convey information or distinguish a visual element. Although Alert - Critical has a yellow background, its critical nature is also signaled by:
  - Its action-oriented wording and date or deadline
  - Its position near the top of the card, service list item, or page
  - Its shaded background (regardless of what color the shading is perceived as) and dark chevron

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
