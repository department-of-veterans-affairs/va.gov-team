# Segmented Button Design Decisions
Last updated: May 13, 2025

- [ADR: 001 - Segmented Button Design](#ADR-001---Segmented-Button-Design)
- [ADR: 002 - Accessibility](#ADR-002---Accessibility)


## ADR 001 - Segmented Button Design

### Status: Accepted

- Date issue raised: 2025-05-07
- Decision date: 2025-05-07

### Context

As part of our initiative to align VADS components with our existing Mobile Design System counterparts, we reviewed the Segmented Control component ([Storybook](https://design.va.gov/storybook/?path=/docs/va-mobile_segmented-control--docs)) that the VA Mobile DS team has successfully implemented.

VADS currently lacks a component providing this specific functionality. We also considered the [USWDS segmented button group](https://designsystem.digital.gov/components/button-group/), which shares visual similarities.

### Decision

Based on our review and the successful implementation of the Mobile component in production, we've decided on the following:

* We will largely adopt the visual design and functionality of the existing Mobile Segmented Control component.
* The VADS visual design will be modified to allow the component to resize responsively. (Whereas the current mobile design is fixed at 320px.) 
* We will not be incorporating additional semantic color variations, such as those found in USWDS, at this time.
* The component will be addressed as "Button - Segmented" within guidance and Figma.
* The web component will be named "va-button-segmented".

### Consequences

* There is a potential risk that product teams may require alternate view configurations not included in the initial implementation.
* The current visual design of the Mobile component does not fully align with current VADS primary button styling, which may require additional design.
* The difference in component names ("Segmented Control" in Mobile vs. "Segmented Button" in VADS) is an inconsistency that should be addressed.

### Open Questions

* The Mobile component includes a "dark mode" variation. How should VADS handle this, given that VADS does not currently have a comprehensive "dark mode" strategy?
* Should we propose creating an issue to discuss renaming the Mobile "Segmented Control" component for better alignment?


## ADR: 002 - Accessibility

### Status: Accepted

- Decision Date: 2025-06-10



### Context

Because of WCAG 2.2 and Section 508 criteria, the Segmented Button component for VADS has a different semantic structure than the Mobile Segmented Control component.



#### HTML Structure

The containing structure is a `UL` element

Each `button` element is within the `LI` element



```
<ul>
    <li><button>Label</button></li>
    <li><button>Label</button></li>
    <li><button>Label</button></li>
</ul>
```

#### ARIA references

##### Roles and labels

The `UL` element will contain the `role="group"` and `aria-label=" "` attributes

- While `role="group"` reads like a "toggle button" segmented buttons behave like mutually exclusive choices—only one can be selected at a time (e.g., Upcoming, Past, All). This behavior is similar to radio buttons (using the `label` and `input` elements) within a form.
- The `grup` role acts like a fieldset holding radio buttons.
- The `group` role tells assistive tech: “This is a group of related options.”
- Since there is no visible heading or label that explains what the group of buttons does, the `aria-label` provides meaningful context for the group as a whole.

The `button` will contain the `type="button"` attribute

- It does not require a `role` attribute No than one radio button can be checked at a time.

```
<ul role="group" aria-label="View selection">
    <li><button type="button">Label</button></li>
    <li><button type="button">Label</button></li>
    <li><button type="button">Label</button></li>
</ul>
```

##### Use of aria-checked


The `aria-selected` attribute indicates the current "selected" state.

- Used with roles of `group`

### Keyboard interaction

- Using the Tab key for foward navigation
  - Using the Tab+Shift to move backwards
- Using the `return` and/or the `space` bar to make a selection.

### Consequences

- The use of `role="group"` attribute may cause users to assume the segmented button selection (return and space keys) would behave similarly to toggle buttons (e.g., Play/Pause or Hide/Show)
