## Outcome Summary
Promote consistency in personalized form flows by creating design patterns for smart forms, including personalized recommendations, dynamic form flows, and user personas. These patterns will reduce cognitive load and friction for veterans completing forms on VA.gov.

### Related Products
Digitized forms on va.gov

## Problem
Veterans face friction when completing lengthy forms, especially when information that could be prefilled or hidden based on personal data is required. Without standardized patterns, forms lack consistency in how data is prefilled and how Veterans interact with them, causing confusion and unnecessary effort.

### Desired User Outcomes
- Reduce cognitive load and effort for Veterans by presenting only relevant form fields.
- Make forms easier to complete through personalized, dynamic flows.
- Improve overall user satisfaction by reducing time spent on repetitive tasks.

### Undesired User Outcomes
- Veterans are unsure why certain fields are shown or hidden, leading to confusion.
- Fields are incorrectly prefilled or omitted, causing Veterans to restart the process.

### Desired Business Outcomes
- Increase completion rates for forms on VA.gov by reducing form abandonment.
- Promote design consistency across all VA forms.

### Undesired Business Outcomes
- Inconsistent implementation of smart form flows across products.

## Discovery

### Assumptions/Risks
**Value Risks:** Veterans may struggle with dynamic forms, leading to confusion when fields are automatically filled or hidden.
**Usability Risks:** Veterans may not trust prefilled data or may miss important information.
**Feasibility Risks:** Ensuring that back-end systems consistently provide accurate, real-time data for prefilled fields.
**Viability Risks:** Inconsistent adoption of smart forms patterns across VA products may limit their effectiveness. 

### What're you building

**In-Scope**
- Develop patterns for personalized recommendations, dynamic form flows, and user personas.
- Provide design guidelines, example code, and resources for implementing smart forms.

**Out of Scope**
- Redesign of all existing forms not using dynamic or personalized flows.
- Complex edge cases where form logic is determined by multiple systems or non-standard data.

We'd like to first focus on the [dynamic form flow pattern](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/25), which may be partially in use by the 1010 team in the 1010EZ form. This may include alerting the user that a shorter form is available, prefilling all known information and skipping those steps, alerting the user they are using a shorter form and other improved form flows.


---

#### Communications
<details>

- Team Name: Authenticated Experience Design Patterns
- GitHub Label(s): 
- Slack channel: tmf-auth-exp-design-patterns
- Product POCs: Becky Phung (VA Product Owner), Lynn Stahl (Agile6 Product Manager)

</details>


#### Stakeholders
<details>
  
- Office/Department: OCTO/VA Design System, USDS/USWDS
- Contact(s): Matt Dingee (VADS), Kevin Hoffman (VADS), 
 
</details>

