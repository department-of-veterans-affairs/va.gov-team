## Outcome Summary
Promote consistency and ease in personalized form flows by developing design patterns for smart forms. This includes personalized recommendations, dynamic form flows, and user personas. These patterns aim to reduce cognitive load and streamline form completion for Veterans on VA.gov.

### Related Products
Digitized forms on va.gov

## Problem
Veterans experience friction when completing lengthy forms, especially when data could be prefilled or hidden based on personal information. The lack of standardized patterns causes inconsistency in form completion, leading to confusion and extra effort.

### Desired User Outcomes
- Reduce cognitive load and effort for Veterans by presenting only relevant form fields.
- Create personalized, dynamic form flows that make the process faster and clearer.
- Improve overall user satisfaction by reducing time spent on repetitive tasks.

### Undesired User Outcomes
- Veterans are unsure why certain fields are shown or hidden, leading to confusion.
- Incorrectly prefilled or missing fields could cause frustration or require Veterans to restart the form.

### Desired Business Outcomes
- Increase completion rates for forms on VA.gov by minimizing abandonment due to lengthy or complex forms.
- Promote design consistency across all digitized VA forms.

### Undesired Business Outcomes
- Inconsistent implementation of smart form flows could lead to a fragmented user experience.

## Discovery

### Assumptions/Risks
**Value Risks:** Veterans may feel confused by dynamic forms, particularly when fields automatically appear or disappear.
**Usability Risks:** Veterans might not trust prefilled data or worry about missing important details.
**Feasibility Risks:** Ensuring that back-end systems consistently provide accurate data for prefilled fields and can handle complex conditional form flows.
**Viability Risks:** Limited adoption of smart forms across VA products might diminish the impact. 

### What're you building

**In-Scope**
- Develop patterns for dynamic form flows, personalized recommendations, and user personas.
- Provide resources, such as design guidelines, code examples and documentation for teams implementing smart forms.

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

