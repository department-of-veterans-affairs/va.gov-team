Accessibility Defect Rubric
This document will help users gauge the severity of accessibility issues. It will also serve as a guide for including accessibility issues in sprint planning. These severity levels have been built by combining impact ratings from the aXe analysis tool and Ad Hoc's manual testing experience.
Defect severity
Potential users impacted by the defect
Time frame in which the defect should be fixed
Severity: Priority 0 - Stop Launch (tag TBD)
Level 0 issues should be considered the highest priority. These issues have the potential to cause serious, potentially life-threatening, problems. Level 0 issues are not seen often, but they do happen and should be remediated before launching a product.
Issues that meet Level 0 threshold
High flicker rates that could trigger epileptic seizures
WebAIM: Seizure Disorder Overview
WCAG 2.3.1: 3 Flashes or Below
No more than 3 general flashes in any 1-second period, AND/OR
No more than 3 red flashes in any 1-second period
The following two links could be dangerous if you have sensitivity to photoepileptic seizures. Do not click on them if rapid flashes or optical illusions might trigger a seizure.
SEIZURE WARNING: Flashing strobe example
SEIZURE WARNING: Optical illusion image example
Motion or movement that covers a high percentage of the screen (possible vestibular issues)
Vestibular Issues in Parallax Design
Nike Better World Parallax Example
Content, UI, form controls are unreachable without a pointer device like a mouse. All focusable elements must be reachable by TAB or SHIFT + TAB.
WCAG 2.0: No Keyboard Traps
Potential users impacted
Those who have photosensitivity
Those who have vestibular issues like motion sickness
Screen reader, assistive device users
Keyboard users
Time to fix
Issue must be fixed before launch. All Level 0 issues will be considered launch blockers by the web accessibility team.
Severity: Priority 1 - Critical (tag TBD)
Level 1 defects have a high potential to cause usability issues, but are not considered serious enough to stop a product launch. Level 1 issues should be given high priority and fixed as soon as possible post-launch. Ideally this would be within one 1-2 week sprint.
Issues that meet Level 1 threshold
Critical errors in automated testers like aXe plugin, SortSite, AATT
Errors are flagged with a severity level in most automated test applications. aXe (Ad Hoc’s preferred scanner) labels errors to five levels:
Critical
Serious
Moderate
Minor
Best Practices (Severity level can be added, but these are guidelines)
Video without captioning
Video without text transcript
Audio without text transcript
Color contrast issues
Missing form labels, explanations
Dynamic content being added or removed from the page without announcing a change to assistive devices
Content without a clear, visually unique :focus halo
Potential users impacted
Keyboard
Screen reader, assistive devices
Low vision users
Users who are deaf or hard of hearing
Time to fix
Issue should be prioritized for upcoming sprint fix if possible
Severity: Priority 2 - Serious (tag TBD)
Level 2 issues have a medium potential for causing issues. Practically, this means users will be able to navigate and interact with the product, but would have a less-than-optimal experience doing so. These issues should be fixed if there are no open Level 1 issues.
Issues that meet Level 2 threshold
Serious errors in automated testers like aXe plugin, SortSite, AATT
Zoomed layouts do not support use without horizontal scrolling, difficult to read text
Color blindness issues (color the only distinguishing element, for instance)
Labels or calls to action that are not descriptive enough for assistive devices ("Edit...what?")
Unusual source order or click path
Content that is too far removed from an explanation, or with no explanation at all
Incomplete calls to action or interfaces that rely on surrounding text to explain what they are going to do:
Bad example: 
<button type=”button”>Edit</button>. 
Edit what?
Better example: 
<button aria-label=”Edit username” type=”button>Edit</button>
Missing landmark HTML. This includes banner, navigation, main, aside, footer elements, or divs with role attributes.
Improper ARIA attributes, missing IDs
<button aria-controls=”<UNIQUE ID>” type=”button”> 
must have a corresponding ID on the page 
<div id=”<UNIQUE ID>...</div>
aXe will generally throw an error on these issues, but it’s good to be on the lookout during daily work.
Not managing focus for single-page applications
Potential users impacted
Screen reader, assistive devices
Low vision users
Users with an identified with color-blindness
Keyboard users
Users with identified short-term memory, other cognitive issues
Time to fix
Issue should be prioritized for next 1-3 sprint fix
Severity: Priority 3 - Minor (tag TBD)
Level 3 issues have a lower potential for causing issues. Practically, this means users will be able to navigate and interact with the product, but may not navigate pages as quickly as they would like. These issues should be fixed if there are no open Level 1 or Level 2 issues.
Issues that meet Level 3 threshold
Minor errors in automated testers like aXe plugin, SortSite, AATT
Improper headings, nesting
Improperly formatted or non-semantic HTML
Potential users impacted
Screen reader, assistive devices
Low vision users
Keyboard users
Time to fix
Issue should be prioritized for upcoming increment
These issues are often good items when engineers have a few extra hours at the end of a sprint
Severity: Priority 4 - Trivial (tag TBD)
Level 4 issues are considered best practices. This means they will not appear on error-reporting only automated scans. Fixing Level 4 issues has the potential to take a product from a "good" user experience to a "great" one for assistive device and a11y users. Level 4 issues should be fixed when there are no open Level 1, Level 2, or Level 3 issues.
Issues that meet Level 4 threshold
Trivial, best practices errors in automated testers like aXe plugin, SortSite, AATT
Less semantic HTML (using <ul> instead of <ol> for sequential instructions, for instance)
Potential users impacted
Screen reader, assistive devices
Low vision users
Keyboard users
Users with identified short-term memory, other cognitive issues
Time to fix
Issue should be prioritized for upcoming increments, and as ongoing work allows
These issues are often good items when engineers have a few extra hours in a work cycle
