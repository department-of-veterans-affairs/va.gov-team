# va-button Design Decisions
Last updated: 06-05-2025

- [ADR: 001 - Destructive button](#adr-001---destructive-button)


## ADR 001 - Destructive button

### Status: Accepted

- Date issue raised: 2024-02-07
- Decision date: 2024-02-09

### Context
In reviewing the buttons between the VADS and our Mobile components, no Destructive Button variant was found within VADS. Research into Design System best practices finds that utilizing a Destructive Button is common in mature Design Systems. A "destructive button" clearly indicates to users that the action it initiates has significant or irreversible consequences, such as deletion, cancellation, or removal of data.


### Decision

Don’t rely on color alone, indicate what will happen when used, and provide a level of error prevention.

#### Color with text

- The use of color should use what is currently in the [VA Design system color palette](https://design.va.gov/foundation/color-palette).
  - Red is culturally and psychologically associated with caution, danger, and urgency, making it immediately clear that the action carries significant consequences.
  - While color alone should not convey critical meaning (as per WCAG 1.4.1, Use of Color), a red button paired with textual labels clearly indicates the button’s destructive nature without relying exclusively on color.
    - Include descriptive text (e.g., "Delete," "Remove permanently").
    - Provide confirmation prompts or secondary verifications to further emphasize the action's irreversible nature.

#### Design: Button on white/light background

- Default: `vads-color-secondary` `#d83933` (AA 4.61:1 contrast)
- Hover: `vads-color-secondary-dark` `#b50909` (AA 6.98:1 contrast)
- Active: `vads-color-secondary-darkest` `#8b0a03` (AAA 9.8:1 contrast)


#### Friction
- The Destructive button should be used with friction before completing the action.
  - Users should always see a [warning confirmation modal](https://design.va.gov/components/modal/#warning) to make sure they want to complete the action. 
  - Example shown on VA Design System's pattern when [deleting a file](https://design.va.gov/patterns/ask-users-for/files#delete).
  - **WCAG Criterion:** 3.3.4 Error Prevention (Legal, Financial, Data)
 

### Consequences

- A destructive button can be used anytime the action being taken cannot be undone, such as canceling an appointment.

### Order considerations in a group

In usability and accessibility best practices, the destructive action button (e.g., "Delete") should typically be second, placed after the neutral action ("Cancel").

```
[ Cancel ]   [ Delete ]
```

#### Why this Order is Preferred:
1. **Follows User Expectation:**
Users commonly expect neutral actions to appear first, with actions having more severe consequences placed later.

2. **Error Prevention:**
Positioning the neutral action first helps prevent accidental selection of a destructive option due to habit or quick navigation.

3. **Accessibility and Consistency:**
Aligns with common patterns used in major design systems (e.g., Apple Human Interface Guidelines, Material Design, and Microsoft Fluent UI), providing predictability and reducing user error.

4. **Logical Flow:**
Users typically read left-to-right (in languages such as English), encountering the safer or neutral action first allows thoughtful consideration before selecting a more severe, destructive action.


### Open Questions

- The Mobile component includes a "dark mode" variation. How should VADS handle this, given that VADS does not currently have a comprehensive "dark mode" strategy?
- Should we propose creating an issue to discuss renaming the Mobile "Segmented Control" component for better alignment?

#### Design: Button on black/dark background

- Default: `vads-color-secondary` `#d83933` (AA 4.61:1 contrast)
- Hover: `vads-color-secondary-light` `#F2938C` (AAA 9.33:1 contrast)
- Active: `vads-color-secondary-lightest` `#F8DFE2` (AAA 16.64:1 contrast)
- 

### How to meet accessibility standards
To ensure a destructive button conforms to accessibility requirements defined by WCAG (Web Content Accessibility Guidelines) and Section 508, several considerations are necessary:

#### 1. **Clear Visual Distinction and Contrast**

- **WCAG Criterion:** 1.4.3 Contrast (AA) or 1.4.6 Contrast (AAA)
- **Implementation:**
  - The button must have sufficient contrast against its background (minimum 4.5:1 contrast ratio for normal text, ideally greater for clarity).
  - Red is commonly used, but verify contrast explicitly, as certain reds might lack sufficient contrast, especially against darker backgrounds.

#### 2. **Explicit Labeling**

- **WCAG Criterion:** 2.4.6 Headings and Labels; 3.3.2 Labels or Instructions
- **Implementation:**
  - Clearly label buttons explicitly indicating the destructive action (e.g., “Delete account” instead of “Submit” or ambiguous phrases).
  - Provide accessible labels (ARIA attributes) when necessary.

#### 3. **Accessible Role and ARIA Attributes**

- **WCAG Criterion:** 4.1.2 Name, Role, Value

- **Implementation:**

  - Use semantic HTML (`<button>` element) rather than generic `<div>` or `<span>` elements.

  - Optionally, utilize ARIA attributes to clarify destructive actions for screen reader users, e.g.:

    ```html
    <button aria-label="Delete your account permanently">
      Delete Account
    </button>
    ```

#### 4. **Clear Warnings and Confirmations**

- **WCAG Criterion:** 3.3.4 Error Prevention (Legal, Financial, Data)
- **Implementation:**
  - Provide confirmation dialogs or a two-step verification process, ensuring users deliberately confirm before action execution.

#### 5. **Keyboard Navigation and Focus**

- **WCAG Criterion:** 2.1.1 Keyboard, 2.4.7 Focus Visible
- **Implementation:**
  - Ensure the button is accessible and operable via keyboard-only navigation.
  - Provide distinct visual focus indicators clearly visible when the button receives keyboard focus.

#### 6. **Error Handling and Reversibility (when applicable)**

- **WCAG Criterion:** 3.3.1 Error Identification, 3.3.3 Error Suggestion
- **Implementation:**
  - When possible, provide an undo capability for critical destructive actions or communicate clearly if actions are irreversible.

### Example of Accessible Destructive Button Implementation:

```html
<button class="usa-button usa-button--destructive" aria-label="Cancel appointment on 'July 2, 2025'">
  Cancel appointment
</button>
```

**CSS (contrast example):**

```css
.usa-button--destructive {
  color: #ffffff; /* white text */
  background-color: #D83933; /* contrast checked red */
}
```

#### Conclusion:

An accessible destructive button ensures clarity, user awareness, and supports careful decision-making through clearly indicated consequences, well-defined semantic elements, sufficient contrast, and confirmation of potentially irreversible actions, adhering closely to WCAG and Section 508 compliance.
