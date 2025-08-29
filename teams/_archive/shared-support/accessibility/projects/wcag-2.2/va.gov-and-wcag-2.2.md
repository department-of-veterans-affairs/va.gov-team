# WCAG 2.2 and VA.gov
We will be taking an early look at the World Wide Web Consortium (W3C)  [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) recommendation in order to prepare for how it may affect accessibility testing and preparedness of VA.gov in the future.

WCAG 2.2 is currently a candidate recommendation from the [Accessibility Guidelines Working Group](https://www.w3.org/WAI/GL/).  WCAG 2.2 will extend WCAG 2.1, and will also use the same conformance levels - A, AA (double A), and AAA (triple A). 

*Resources*
- [W3C - WCAG 2.2 -Candidate Recommendation Snapshot](https://www.w3.org/TR/WCAG22/) 
- [Deque - Article on WCAG 2.2](https://www.deque.com/blog/wcag-2-2-is-at-the-candidate-recommendation-stage/)

## What is coming with WCAG 2.2
Currently, there are nine new proposed WCAG 2.2 success criteria, listed below. Two are Level A success criteria, four are Level AA, and two are Level AAA.

1. [2.4.11 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html) (**Level AA**)
2. [2.4.12 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) (**Level AA**)
3. [2.4.13 Focus Not Obscured (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html) (**Level AAA**)
4. [2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) (**Level AA**)
5. [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) (**Level AA**)
6. [3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html) (**Level A**)
7. [3.3.7 Accessible Authentication](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication.html) (**Level AA**)
8. [3.3.8 Accessible Authentication (no exception)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-no-exception.html) (**Level AAA**)
9. [3.3.9 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html) (**Level A**)

### 2.4.11 Focus Appearance - Level AA [*at risk*]
This criterion weighs in on the focus indicator minimum contrast and size. There is also a note that the entire focus indicator “encloses the user interface component or sub-component that is focused.” [The term “encloses”](https://www.w3.org/TR/WCAG22/#dfn-enclose) is noted as an [“at risk” term](https://www.w3.org/TR/WCAG22/#items-at-risk), and is defined as “solidly bounds or surrounds.”

### 2.4.12 Focus Not Obscured (Minimum) - Level AA
Ensures that the item receiving focus is not entirely hidden by other content created by the author. The minimum version of this requirement requires only that where other content overlaps an item receiving focus, it does not do so entirely.

### 2.4.13 Focus Not Obscured (Enhanced) - Level AAA
This success criterion is similar to criterion 2.4.12 above, but states that “no part of the focus indicator is hidden by author-created content.” It requires that the whole of the component is visible.

### 2.5.7 Dragging Movements - Level AA
Ensures that functionality that uses a dragging movement (e.g., sliders, drag-and-drop interfaces) has another single pointer mode of operation without the need for the dexterity required to drag elements. As it can be difficult for some users with motor disabilities to perform actions that require precise movements, this criterion will help ensure that drag and drop is not the only way to complete a task.

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

### 3.3.7 Accessible Authentication - Level AA
Cognitive function tests are not required for any step in an authentication process unless that step provides at least one of the following:
- **Alternative**: Another authentication method that does not rely on a cognitive function test.
- **Mechanism**: A mechanism is available to assist the user in completing the cognitive function test.
- **Object Recognition**: The cognitive function test is to recognize objects.
- **Personal Content**: The cognitive function test is to identify non-text content the user provided to the website.
This criterion helps remove high or impossible burdens on people with certain cognitive and motor disabilities and issues including those who have trouble memorizing, dyslexia, dyscalculia, completing pattern gestures, and more.

### 3.3.8 Accessible Authentication - Level AAA
This criterion is the same as 3.3.7 Accessible Authentication but without the exceptions for objects and user-provided content.

Cognitive function tests are not required for any step in an authentication process unless that step provides at least one of the following:
- **Alternative**: Another authentication method that does not rely on a cognitive function test.
- **Mechanism**: A mechanism is available to assist the user in completing the cognitive function test.

### 3.3.9 Redundant Entry - Level A
This criterion requires forms or other similar information gathering methods to avoid redundant entry or make it easy to reuse data already entered. The intent of this Success Criterion is to ensure that users can successfully navigate multi-step processes. It reduces cognitive effort where information is asked for more than once during steps in a process. It also reduces the need to recall information provided in a previous step.

## Takeaways and VA.gov Considerations
1. Current project work that is taking a look at focus styles of links, tabs, form elements, etc. across VA.gov and possibly proposing updated styling should also take into consideration the success criteria that relate to focus styles.
    - [2.4.11 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html) (**Level AA**)
    - [2.4.12 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) (**Level AA**)
    - [2.4.13 Focus Not Obscured (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html) (**Level AAA**) - consider what, if any, scenarios that may not fit this standard; it’s possible that we may already meet this higher standard in the majority of cases.
2. VA.gov may not have instances of components that require dragging movements. We may need to search the design system to see if elements such as sliders exist.
    - [2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) (**Level AA**)
3. Our current design system standards for interactive element size will probably meet the criterion related to target size. There may be differences in the results of mobile testing versus desktop testing.
    - [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) (**Level AA**)
4. The consistent navigation of VA.gov may meet the criterion related to consistent help. Consideration should be given to the location of the proposed new chat help feature. There may also need to be additional research on the effectiveness of the current location of the FEEDBACK button.
    - [3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html) (**Level A**)
5. There is likely a need to look at how or if the multiple login options for VA.gov meet the accessible authentication criteria. As a variety of VA.gov research studies have received direct feedback from Veterans regarding the login process, there is also an opportunity to incorporate that feedback into meeting this success criteria.
    - [3.3.7 Accessible Authentication](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication.html) (**Level AA**)
    - [3.3.8 Accessible Authentication (no exception)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-no-exception.html) (**Level AAA**) - it may be possible to meet this higher standard 
6. The variety of forms available on VA.gov would need auditing to take a look at whether they meet the redundant entry criterion.
    - [3.3.9 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html) (**Level A**)

