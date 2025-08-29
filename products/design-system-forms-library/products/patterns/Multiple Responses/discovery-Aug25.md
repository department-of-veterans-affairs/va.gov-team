# List and Loop Discovery - June 2025
List and loop launched May 2024. And as teams have started implementing it over the last year, we've learned of additional use cases, and opportunities to improve the pattern. A meeting was held [date] with several teams to discuss needed improvements and usability issues within the pattern.  Below are the themes that came out of the meeting.

## 🧭 Complex vs Simple list and loops
### List and Loop Variants
Users working through dynamic loops—such as lists of dependents, jobs, or events—encounter a wide range of experiences depending on the number of pages involved. Some loops are short (1–2 pages), while others can span up to 9 pages. However, the editing experience is uniform, rigid, and not tailored to the complexity or length of the loop. This results in frustration, inefficiencies, and a lack of control over their data entry process.
#### Suggestions
- Build in simple/complex variants, allowing flexibility for teams in the complex variant
#### Questions
- What would we make flexible? Or, what would a bare-bones version of the pattern be?
#### Tickets


<br /><br />
## Edit mode

### 💾 Saving / Deleting in edit mode 
- Users lack clarity and control over how edits are saved or discarded—especially across multi-page loops
- Cancel edits for entire loop? current page only?
- When users changes are actually applied is unclear (Currently its on each page/step)
#### Suggestions
- Add a “Cancel All Changes” option for users editing looped content.
- Display a persistent save status or “unsaved changes” indicator during edits.
- Implement a confirmation modal on exit (with options to save, discard, or return).
- Clearly label actions like “Save and Return” vs. “Save and Continue.
#### Questions
- Is the opportunity to create parity between a mid-form edit mode and a full-form edit mode (from the review page)? Should there be parity?
#### Tickets

<br />

### ⤴️ Navigation in edit mode
- Edit mode lacks basic navigation, making it rigid and inconsistent with Add mode. Users want to move freely.

**Current design**

<img width="571" alt="image" src="https://github.com/user-attachments/assets/58ddee20-f040-48fd-94a5-fcd3d39b3d45" />

#### Suggestions
- Introduce Back/Next navigation buttons within multi-page loops.
- Ensure parity between Add and Edit modes for loop navigation.
- Add a “Skip to Summary” or breadcrumb option in Edit mode.
#### Questions
- This seems connected to the editing in edit mode, and may need to be worked on together.
#### Tickets
- Add a back button and customize the cancel action for the edit flow within list and loop, improving navigation and data persistence.  
  [list and loop - add back button and behavior for edit pages](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1981)
  
<br />

### 🎯 Targeted editing in edit mode
- Users expect to jump directly to items for editing. Summary/review pages don’t support this well.
#### Suggestions
- Make summary items clickable/editable, taking the user directly to the specific question.
- Indicate when a summary item belongs to a multi-page loop (e.g., with an icon or label).
- Unify layout and interaction patterns between Summary and Review & Submit pages

#### Relevant research
- [0781 When editing, participants struggled to understand the interaction model.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-02%200781%20Research/Research%20Findings.md#finding-10-when-editing-participants-struggled-to-understand-the-interaction-model)
    - "All participants clicked 'Edit Event' and assumed the event detail page was the only page for editing, forgetting the initial multi-page flow."
       - 6 out of 6 Veterans easily completed other edit tasks that did not require understanding the pattern as multi-paged.
    - The multi-response card format facilitated easy editing from the summary screen.
      - Edit and delete actions from summary work as expected (6 out of 6 participants completed)
      - The task to cancel an edit in progress was straightforward for users (6 out of 6 participants completed; 1 expressed confusion)
    - Hypothesis: The inconsistency between the add and edit behavior will slow or confuse Veterans.
      - Maybe true. Veterans managed a majority of the multi-response pattern add and edit mode with ease. The main issue with it was a misunderstanding of the interaction model. Veterans assumed the pattern had one page rather than multiple– leading to issues with editing deeper pages in the flow.



#### Questions
- What would a summary card look like that allows a user to see all of their answers? Do we add in accordions for more complex List and loops? 
#### Tickets


<br /><br />
## Unsupported features
### ↪️ Conditional logic
- Confusion around system behavior when logic is triggered or data is deleted. Users need clarity and feedback.
#### Suggestions
- Define and communicate data reset behavior clearly when conditional logic changes.
- Provide inline explanations or tooltips about what happens when inputs are removed or deselected.
- Consider a “review changes” modal before deleting or overwriting dependent data.
#### Questions
#### Tickets
- Support conditional logic so different items in the list and loop can have different edit flows based on their type (predefined or user-added).  
  [Consideration: List and Loop Conditional flows in edit path](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/2126)
  
<br />

### 🔂 Progress in a list and loop
- Users need better visual cues to keep track of what’s been filled in across complex flows.
#### Suggestions
- Implement a "progress tracker" or “content cart” for looped sections.
- Use a sidebar or modal to show what has been completed vs. what’s left.
- Consider adding section headers or page indicators within loops for orientation
#### Questions
#### Tickets

<br />

### 🍲 Prefill within a list and loop
- Some teams have data they can pull from to show users that belong in a list and loop and then need to allow users to add more items
#### Suggestions
#### Questions
#### Tickets
- Enable list and loop to start with a predefined list of options (not user-defined), and improve edit flows for such scenarios.  
  [Consideration: List and Loop starts with a predefined list](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/2125)


<br /><br />
## 👤 Considerations for parity in user experience
### Edit mode
- The form review page has a current edit "mode", and you currently edit inline
- L&L edits take you back to the page with the form fields.
- Embedded forms....
### Navigation within a form
- We have segmented progress indicator for form pages
- Do list and loops need a segmented progress indicator?
- Do embedded forms have their own segmented progress indicator?
### Conditional Logic
- Forms currently have conditional logic support. Each team controls what happens when items are changed. Do we need to write guidance, create uniformity for this behavior.
- Should conditional logic behave similarly in an embedded form, list and loop, and the overall form


<br /><br />
## 🐛 Bugs in current implementation
- The card links on list and loop summary pages flicker or re-render unnecessarily when form data changes, affecting user experience.  
  [List and loop card links flicker when choosing between yes/no](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/2033)
- The local state used in array builder doesn't update the actual formData during editing, causing incorrect validation results.  
  [ui:validations + useAllFormData incorrect data during edit for list and loop](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1925)
- https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1497
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/105568
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/105599
- https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/2026


<br /><br />
## 🪶 Lingering feature requests
- Min/Max values https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1656


## Existing research
- [Research repo](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/DSP%3A%20Ask%20users%20for%20multiple%20responses)


## ➰ Forms using List and Loop pattern (17)
1. accreditation/21a
2. dependents/686c-674
3. disability-benefits/all-claims
4. edu-benefits/10215
5. edu-benefits/1919
6. edu-benefits/8794
7. ezr
8. hca
9. income-and-asset-statement
10. ivc-champva/10-10d-extended
11. ivc-champva/10-7959a
12. ivc-champva/10-7959C
13. mhv-supply-reordering
14. pensions
15. pre-need-integration
16. simple-forms/20-10207
17. simple-forms/21-4142

### Mock forms using list and loop pattern
1. _mock-form-ae-design-patterns
2. simple-forms/mock-form-minimal-header
3. simple-forms/mock-simple-forms-patterns
4. simple-forms/mock-simple-forms-patterns-v3
5. simple-forms-form-engine
6. user-testing/disability-benefits-all-claims-conditions-chapter
