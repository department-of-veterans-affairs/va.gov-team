# WCAG 2.2 and VA.gov

This is an [updated version of a previous document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/shared-support/accessibility/projects/wcag-2.2/va.gov-and-wcag-2.2.md), initially written when WCAG 2.2 was a draft candidate. The document has been expanded to include facets that VFS delivery teams, Collaboration Cycle, and the Design System Team should consider moving forward.

***

Here we review the World Wide Web Consortium (W3C)'s [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) to prepare for any impacts adopting these standards will have on OCTO and VA.gov. 

WCAG 2.2 is an active recommendation from the [Accessibility Guidelines Working Group](https://www.w3.org/WAI/GL/).  WCAG 2.2 extends WCAG 2.1, using the same conformance levels - A, AA (double A), and AAA (triple A).

## Resources:
- [W3C, What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)

## What is new in WCAG 2.2
There are nine new WCAG 2.2 success criteria. Two are Level A success criteria, four are Level AA, and two are Level AAA.

1. [2.4.13 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html) (**Level AAA**)
2. [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) (**Level AA**)
3. [2.4.12 Focus Not Obscured (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html) (**Level AAA**)
4. [2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) (**Level AA**)
5. [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) (**Level AA**)
6. [3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html) (**Level A**)
7. [3.3.8 Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication.html) (**Level AA**)
9. [3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html) (**Level A**)

### 2.4.13 Focus Appearance - Level AAA
This criterion weighs in on the focus indicator minimum contrast and size. There is also a note that the entire focus indicator "encloses the user interface component or sub-component that is focused."

### 2.4.11 Focus Not Obscured (Minimum) - Level AA
Ensures that the item receiving focus is not entirely hidden by other content created by the author. The minimum version of this requirement requires only that where other content overlaps an item receiving focus, it does not do so entirely.

### 2.4.12 Focus Not Obscured (Enhanced) - Level AAA
This success criterion is similar to criterion 2.4.11 above, but states that "no part of the focus indicator is hidden by author-created content." It requires that the whole of the component is visible.

### 2.5.7 Dragging Movements - Level AA
Ensures that functionality that uses a dragging movement (e.g., sliders, drag-and-drop interfaces) has another single pointer mode of operation without the need for the dexterity required to drag elements. This criterion will help ensure that drag and drop is not the only way to complete a task.

### 2.5.8 Target Size (Minimum) - Level AA
The size of interactive components for pointer inputs is at least 24 by 24 CSS pixels, except in certain instances where:
- **Spacing**: The target offset is at least 24 CSS pixels to every adjacent target;
- **Equivalent**: The function can be achieved through a different control on the same page that meets this criterion.
- **Inline**: The target is in a sentence or block of text;
- **User agent control**: The size of the target and target offset is determined by the user agent and is not modified by the author;
- **Essential**: A particular presentation of the target is essential or is legally required for the information being conveyed;
The intent of this criterion is to help ensure targets can be easily activated without accidentally activating an adjacent target.

### 3.2.6 Consistent Help - Level A
Websites that contain help mechanisms (such as contact information, a chat help feature, or an FAQ) that are repeated on multiple web pages, occur in the same relative order to other page content. This criterion ensures users can find help for completing tasks on a website, when it’s available.

### 3.3.8 Accessible Authentication - Level AA
Cognitive function tests are not required for any step in an authentication process unless that step provides at least one of the following:
- **Alternative**: Another authentication method that does not rely on a cognitive function test.
- **Mechanism**: A mechanism is available to assist the user in completing the cognitive function test.
- **Object Recognition**: The cognitive function test is to recognize objects.
- **Personal Content**: The cognitive function test is to identify non-text content the user provided to the website.

This criterion helps remove high or impossible burdens on people with certain cognitive and motor disabilities and issues including those who have trouble memorizing, dyslexia, dyscalculia, completing pattern gestures, and more.

Cognitive function tests are not required for any step in an authentication process unless that step provides at least one of the following:
- **Alternative**: Another authentication method that does not rely on a cognitive function test.
- **Mechanism**: A mechanism is available to assist the user in completing the cognitive function test.

### 3.3.7 Redundant Entry - Level A
This criterion requires forms or other similar information gathering methods to avoid redundant entry or make it easy to reuse data already entered. The intent of this Success Criterion is to ensure that users can successfully navigate multi-step processes. It reduces cognitive effort where information is asked for more than once during steps in a process. It also reduces the need to recall information provided in a previous step.

## Takeaways and VA.gov Considerations

For the purposes of this document we won't be considering **3.3.8 Accessible Authentication** since the authentication flow is outside of the purview of the intended audience of this document. That said, the most significant accessibility issues likely to be found under WCAG 2.2 are most likely in the authentication flow. 

### Considerations for VFS delivery teams

- Generally teams using the design system should be unaffected by a move to WCAG 2.2 
- The item most relevant to delivery teams will most likely be **3.3.7 Redundant Entry**, and will likely require back end teams to also consider the accessibility of the data being collected, and when
    - There is also a reading of this that would suggest redundant entry across forms -- this may require coordination from VA POs or even contracts to find ways to reduce the number of times a specific question is asked.

### Considerations for the Design System Team

- It is believed that the current focus state is in compliance with WCAG 2.2, but the Design System Team should confirm
- It is believed that the design system doesn't currently include any drag-able elements, but the Design System Team should confirm
- It is believed that the minimum target sizes are appropriate to WCAG 2.2, but there is uncertainty about this on mobile web. We suggest that this is validated when/if mobile testing becomes more prevalent within OCTO 

### Considerations for Governance and CAIA supporting the Collaboration Cycle

- Key elements to look out for will be **3.3.7 Redundant Entry**, and **2.5.8 Target Size**
- All other items will hopefully be well addressed by the Design System and the consistent use of static templates for the placement of header and footer elements
