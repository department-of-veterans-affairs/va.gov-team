# va-input-telephone Design Decisions
Last updated: 2025-06-03

- [ADR: 001 - Country code field and phone field will not interact](#ADR-001---Country-code-field-and-phone-field-will-not-interact)
- [ADR: 002 - Geolocation on country code](#adr-002---geolocation-on-country-code)
- [ADR: 003 - Usage of flag icon in the country code](#ADR-003---usage-of-flag-icon-in-the-country-code)
- [ADR: 004 - Country order and initial country selection](#ADR-004---Country-order-and-initial-country-selection)
- [ADR: 005 - Props allowed for International Phone](#ADR-005---Props-allowed-for-International-Phone)
- [ADR: 006 -  One field for both international and domestic phone number](#ADR-006---One-field-for-both-international-and-domestic-phone-number)
- [ADR: 007 -  On screens smaller than 360px we will stack the country code and phone number](#ADR-007---On-screens-smaller-than-360px-we-will-stack-the-country-code-and-phone-number)
- [ADR: 008 -  When the combo box is smaller than 216px, country names may be truncated](#ADR-008---When-the-combo-box-is-smaller-than-216px-country-names-may-be-truncated)~~



## ADR: 001 - Country code field and phone field will not interact

### Status: Accepted
- Date Raised: 2025-04-21
- Decision Date: 2025-04-29

### Context
- During a Slack channel discussion, a design and development question was raised about how the country code selector should behave in relation to the phone number input field: Should selecting a country code automatically insert it into the phone number field?
  - If a user manually enters a country code into the phone number field, should the country code combo box update to reflect it?
  - The Auth Exp team raised these as feature requests stating that this is what the users expect.
  - These questions surfaced usability and accessibility concerns, especially regarding user expectations and assistive technology compatibility. Introducing context changes without notifying the user is a violation of WCAG 3.2.2 A

### Decision
- The country code selector and the phone number input field will remain visually independent (i.e., they will not automatically insert text or modify each other). This decision avoids introducing complexity that could negatively impact accessibility, particularly for screen reader users and keyboard navigation.
- To maintain appropriate validation and user feedback:
  - A [validation library](https://www.npmjs.com/package/libphonenumber-js) will be leveraged.
  - This library would validate phone numbers in the context of the selected country code, enabling custom validation messages and enforcing correct formatting.

### Consequences
- Without the validation library, phone number inputs would fall back to a generic validation pattern (e.g., allowing up to 10 or 15 characters). This could result in users submitting phone numbers with invalid formats for the selected country, reducing data quality.
- With the validation library, user inputs can be matched against country-specific patterns, improving form accuracy and the user experience while maintaining accessibility standards.

---

## ADR: 002 - Geolocation on country code

### Status:  NOT FOR MVP
- Decision Date: 2025-04-21

### Context
- The initial idea was to automatically detect and update the user's country code based on their geolocation to streamline the user experience.
### Decision
- For the MVP (Minimum Viable Product), we will not implement geolocation-based detection of the user's country code.
### Consequences
- Users will need to manually select their country code during the relevant process.

### Open Questions
- Does this go into the component or into the forms library implementation??  
- Build in a prop for the country code, some of the other libraries were built into a component, it would need to hit another service
- Other teams can use the country code prop and do this outside of the component. 

---

## ADR: 003 - Usage of flag icon in the country code

### Status: Accepted
- Decision Date: 2025-04-30
  
### Context
Other platforms, such as Login.gov and ID.me, display a country flag alongside the country code within the combo box dropdown. We are exploring the option to use a similar approach to enhance the user experience.

### Decision
The decision was made to use the country flag

### Consequences
- If flags are used, additional work will be required to manage and optimize assets for both design and development environments.
- Care must be taken to ensure accessibility compliance (e.g., providing alt text or labels for screen readers).
- Potential impact on page load performance if not handled efficiently.

### Open Questions
- Should the flag be treated as an icon or a separate asset?
- Where will the flag images be stored (e.g., in Figma, in the codebase, or retrieved via an external asset library)?
- What are the performance and accessibility implications?


---

## ADR: 004 - Country order and initial country selection

### Status: Accepted
- Date proposed: 2025-04-29
- Decision Date: 2025-04-30

### Context
- [A library](https://www.npmjs.com/package/libphonenumber-js) is available that supports configuration through props to prioritize certain country codes at the top of the dropdown or to default to a specific country.

### Decision
- A final decision is still pending, but the current preference is to default to the United States at the top of the country code dropdown. The majority of mailing addresses are US addresses.

| Country             | Addresses | Percentage of Addresses |
|---------------------|-----------|-------------------------|
| USA	United States   |  46536849 |	99.86% |
| PHL	Philippines     |  16830    |	0.04%  |
| DEU	Germany         |  11686    |	0.03%  |
| CAN	Canada          |  5366     |	0.01%  |
| JPN	Japan           |  3929     |	0.01%  |
| GBR	United Kingdom  |  3912     |	0.01%  |


### Consequences
- If a global decision is made, it simplifies implementation and ensures a consistent user experience across applications.
- Allowing customization could offer flexibility but may increase complexity in managing variations and support.


### Open Question
- Should we make a global decision for all implementations (e.g., always default to a specific country like the United States)?
- Or should we allow individual teams to customize which countries appear first based on their needs?

---

## ADR: 005 - Props allowed for International Phone

### Status: Proposed
- Decision Date: 2025-04-30

### Context
Exploring [another library](https://intl-tel-input.com/storybook/?path=/docs/intltelinput--vanilla) we considered multiple prop possibilities.

#### allow dropdown - works the same but without a dropdown, forces users to type country code
- No
#### Country order 
- No - default order with US at top, alpha order the others
#### disabled 
- No
#### exclude countries
- No. Not until we have a use case
#### fixDropDownWidth 
- No
#### i18n
- Maybe - but not for mVP
#### initialCountry
- No - because we’re making US the initial country
- If we were to add this as a prop in the future, we would need to add validation so that “select country” is not an allowed response
#### initialValue 
- Yes would need this for prefill
#### onlyCountries 
- No. Not until we have a use case
#### placeholderNubmerType - 
- No We don't use placeholders in our fields)
#### separateDialCode - 
- No
#### showFlags 
- We will show flags in all instances
#### strictMode
- No - We will allow any character, and throw error messages on validation
#### useFullscreenProp - 
- No

### Decision 
We will use these props for MVP
- Initial Value (country code + Phone number)

### Consequences
- Teams will be limited on how they can modify the component, but any future modifications will be made available universally through the component.

### Props to consider later
- I18n
- Show/Hide flags

--- 

## ADR: 006 - One field for both international and domestic phone number

### Status: Accepted
- Decision Date: 2025-04-17

### Context
- There were discussions about storing international phone numbers in a separate field within the profile. However, due to the current structure of prefill and profile handling, phone numbers are managed as a single field in the API.
 
### Decision
- We will create a single phone field in the profile that accepts both domestic and international phone numbers for Home, Mobile, and Work contact types.

### Consequences
- If a form is prefilled with an international phone number but does not support international formats, users may encounter an error upon submission indicating that the phone number must be 10 characters long.
- This is a temporary solution for the initial release of the component.
- In the future, when a new pattern is established, there may be an opportunity to provide user-facing messaging that clarifies when international phone numbers are not accepted.

---

## ADR: 007 - On screens smaller than 360px we will stack the country code and phone number

### Status: Accepted
- Decision Date: 2025-04-29

### Context
On smaller screens it will be difficult to read the full country name in a side-by-side design of the combo box + phone number. 

### Decision
We will stack the components using responsive web design on smaller screens

### Consequences
Mobile and desktop users will be able to easily interact with each field 

---

## ADR: 008 - When the combo box is smaller than 216px, country names may be truncated

### Status: Accepted
- Decision Date: 2025-04-29
- Update: 2025-06-03 to clarify CSS truncation

### Context
The longest country name in our list is 33 characters long, average length is 17 characters. If we design for the outliers, this could be a quite annoying design.  We will need to truncate country names in certain cases

### Decision
We will truncate country names in the combo box selector. In the drop down that shows the country names, country names will not be truncated as we will be able to wrap and display country names on two lines.

### Consequences
- The design of the component will work for a majority of country names. But outliers may be truncated in the collapsed combo box display. 
- Users will be able to see the full country name when activating the combo box drop down
- By using CSS for truncation, full country names will be announced for screen reader users. Javascript truncation does not read the fully country name.




