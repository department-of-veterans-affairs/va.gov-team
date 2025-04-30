### ADR: 001- Country code field and phone field will not interact

Status: Proposed
Date Raised: 2025-04-21
Decision Date: [To be filled when finalized]
#### Context
- During a Slack channel discussion, a design and development question was raised about how the country code selector should behave in relation to the phone number input field:
Should selecting a country code automatically insert it into the phone number field?


If a user manually enters a country code into the phone number field, should the country code combo box update to reflect it?


The Auth Exp team raised these as feature requests stating that this is what the users expect.
These questions surfaced usability and accessibility concerns, especially regarding user expectations and assistive technology compatibility. Introducing context changes without notifying the user is a violation of WCAG 3.2.2 A
#### Decision
- The country code selector and the phone number input field will remain independent (i.e., they will not automatically interact or modify each other). This decision avoids introducing complexity that could negatively impact accessibility, particularly for screen reader users and keyboard navigation.
- To maintain appropriate validation and user feedback:
- A validation library—potentially the one used by Login.gov—may be leveraged.
- This library would validate phone numbers in the context of the selected country code, enabling custom validation messages and enforcing correct formatting.

### Consequences
- Without the validation library, phone number inputs would fall back to a generic validation pattern (e.g., allowing up to 10 or 15 characters). This could result in users submitting phone numbers with invalid formats for the selected country, reducing data quality.
- With the validation library, user inputs can be matched against country-specific patterns, improving form accuracy and the user experience while maintaining accessibility standards.


### ADR: 002 - Geolocation on country code

Date: 2025-04-21
 Status: Accepted
#### Context
The initial idea was to automatically detect and update the user's country code based on their geolocation to streamline the user experience.
#### Decision
For the MVP (Minimum Viable Product), we will not implement geolocation-based detection of the user's country code.
#### Consequences
Users will need to manually select their country code during the relevant process.


#### Open Questions
Does this go into the component or into the forms library implementation??  
Build in a prop for the country code, some of the other libraries were built into a component, it would need to hit another service
Other teams can use the country code prop and do this outside of the component. 


### ADR: 003 - Usage of flag icon in the country code

Date:

Status [Proposed/Accepted/Deprecated/Superseded]

#### Context
Other platforms, such as Login.gov and ID.me, display a country flag alongside the country code within the combo box dropdown. We are exploring the option to use a similar approach to enhance the user experience.
#### Decision
The decision is still under consideration pending resolution of the open questions.
#### Open Questions
- Should the flag be treated as an icon or a separate asset?
- Where will the flag images be stored (e.g., in Figma, in the codebase, or retrieved via an external asset library)?
- What are the performance and accessibility implications?

#### Consequences
- If flags are used, additional work will be required to manage and optimize assets for both design and development environments.
- Care must be taken to ensure accessibility compliance (e.g., providing alt text or labels for screen readers).
- Potential impact on page load performance if not handled efficiently.


### ADR: 004 - Country order (options to favor certain countries at the top of the list) & initial country selection

Date proposed: 4/29/2025
Decision Date: 

Status  [Proposed/Accepted/Deprecated/Superseded]

#### Context
- A library is available that supports configuration through props to prioritize certain country codes at the top of the dropdown or to default to a specific country.
#### Open Question
- Should we make a global decision for all implementations (e.g., always default to a specific country like the United States)?
- Or should we allow individual teams to customize which countries appear first based on their needs?

#### Decision
- A final decision is still pending, but the current preference is to default to the United States at the top of the country code dropdown.

#### Consequences
- If a global decision is made, it simplifies implementation and ensures a consistent user experience across applications.
- Allowing customization could offer flexibility but may increase complexity in managing variations and support.

