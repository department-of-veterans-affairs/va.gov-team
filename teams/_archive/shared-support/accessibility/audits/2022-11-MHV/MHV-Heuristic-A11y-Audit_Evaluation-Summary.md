# My Health eVet (MHV) Heuristic Accessibility Evaluation

**Accessibility Specialists:** @TiffanyPender and @AngelaFowler82

## Overview
In preparation of the transition of [My Health eVet (MHV)](https://www.myhealth.va.gov/mhv-portal-web/home) over to [VA.gov](https://www.va.gov/), we will be performing a heuristic evaluation of the product. During this phase we will target user stories revolving around medical records.
> Heuristic evaluation is a process where experts use rules of thumb to measure the usability of user interfaces in independent walkthroughs and report issues. Evaluators use established heuristics (e.g., Nielsen-Molich’s) and reveal insights that can help design teams enhance product usability from early in development. -[Interaction Design Foundation](https://www.interaction-design.org/literature/topics/heuristic-evaluation)

### Heuristics
We will be taking a look at five [accessibility heuristics](https://www.deque.com/blog/supporting-the-design-phase-with-accessibility-heuristics-evaluations/), based on the technical requirements of [WCAG 2.1, Levels A and AA](https://www.w3.org/TR/WCAG21/), and best accessibility and usability practices:
- **Navigation and wayfinding** - Users can easily navigate, find content, and determine where they are at all times within the system.
- **Error prevention and states** - Interactive controls have persistent, meaningful instructions to help prevent mistakes, and provide users with clear error states which indicate what the problems are and how to fix them whenever errors are returned.
- **Predictability and consistency** - The purpose of each element is predictable, and how each element relates to the system as a whole is clear and meaningful, to avoid confusion for the users.
- **Structure and semantics** - Users can make sense of the structure of the content on each page and understand how to operate within the system.
- **Language and readability** - Content on the page can easily be read and understood by users of the system.

### Evaluation Scenarios
There are five identified user stories related to medical records within My Health eVet that will be evaluated.
- **[USER STORY 1]** As a Veteran, I want to access my immunization record, so I can share with my primary care doctor who is outside of the VA. 
- **[USER STORY 2]** As a Veteran, I need to print my medical history, so that I can submit my disability claim with the VA. 
- **[USER STORY 3]** As a Veteran or caregiver, I want to access and understand my latest blood test results, so I can track health outcomes. 
- **[USER STORY 4]** As a Veteran or caregiver, I want to review the notes from my doctor about my (or the doctor my family member who is a Veteran sees) the last visit, including my treatment plan. 
- **[USER STORY 5]** As a Veteran or Caregiver, I want to easily share copies of X-rays with a non-VA provider who I/the Veteran am seeing for follow-up treatment. 

### Evaluation Steps
1. As an authenticated user, logged into MHV, test each screen involved in the user stories identified and evaluate each for the five listed heuristics above. Tools to be used during the evaluation include:
   - [Axe DevTools](https://www.deque.com/axe/devtools/)
   - [headingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)
   - Screenreaders: VoiceOver, JAWS, NVDA
3. Document any issues found under each heuristic with screenshots, recordings, or brief descriptive text.
4. Apply a rank to each issue based on the following scale
   - **Serious** (completely blocks completion of a user story to an individual with a disability, causes harm, or is moderately unusable to many disabled people)
   - **Moderate** (moderately unusable to some disabled people, annoying or distracting to many disabled people)
   - **Minor** (annoying or distracting to some disabled people)
5. Generate an evaluation summary of key findings. Include any supporting issues and opportunities for improvement.
Testing notes can be found within [My HealtheVet (MHV) Heuristic A11y Audit - Testing](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/shared-support/accessibility/audits/2022-11-MHV/MHV-Heuristic-A11y-Audit_Testing.xlsx)

***NOTE***: For the purposes of this evaluation, we will not be auditing the generated PDF, XML, and TXT file medical record downloads.

---
## Evaluation Summary - Key Findings
### Key Finding: Navigation and wayfinding may be challenging to all users, including assistive technology users.

***Example Issues***:
- Duplicate navigation landmarks listed in rotor. Can cause confusion for screen readers. 
- Heading structure is out of order on all pages. Empty heading elements also are included in the code throughout the site.
- Repetitive link text without context for screen reader users. 
- Links or buttons open in new windows and do not warn users.

#### Opportunities for improvement
- Consider renaming landmarks with the same role to distinguishable names.
- Be sure that only one heading level one (H1) exists per page, and that heading level hierarchy only increases by one level.
- Make sure links are unique and users are able to identify their purpose.
- If a link opens a new tab or window, let users know beforehand so that people who are blind or visually impaired and use assistive technology to navigate will realize that a new window or tab has opened.

---
### Key Finding: Language and readability across the medical records features may not provide clear and concise plain language to users.

***Example Issues***:
- It may be difficult for users to find the specific records, lab results, doctor's notes, etc. that they are looking for.
  - On the "Download My Data" pages, each type includes an image that says "Blue Button Download My Data", but it seems that not all are related to Blue Button Medical Reports.
  - It is unclear what types of medical information is available within particular reports and sections of the website. For example: Health records/Download My Data is under “Personal Information”, whereas Labs and Tests is under “Track Health”.
  - Plain language; “Notes from my doctor” - this verbiage is not mentioned anywhere on the website content or navigational areas and may be difficult to find;
    - Unsure if “notes from my doctor” also applies to “Consultation Notes” which can also be found within the VA Health Summary.
    - There is no explanation of the difference between “Encounters” and “Consultation Notes” found in VA Health Summary.
#### Opportunities for improvement
- Consider the categorization and naming of health records, labs, and similar medical history information. General, concise explanations of the types of records available would be helpful.
- Usability research may help uncover users’ familiarity with terminology and identify what specific terms or content may need clarification (Ex: encounters vs. consultation notes, advance directives, functional status, etc.)

---
### Key Finding: The relationship between some components and the appropriate label or state may be lacking in instances and cause confusion for users.

***Example Issues***:
- Important information listed at the bottom of the page or after action buttons, table information or input fields. 
  - For example, text content below action buttons; information about required fields or field character limit not directly associated with the field. 
#### Opportunities for improvement
- Offer help in context, rather than having users memorize and recall information when needed. A helpful video on [Just-in-Time Help: Look Right! (Jakob Nielsen)](https://www.youtube.com/watch?v=6tVMuWObaqU)
- Ensure that help documentation is clear, concise and easy to understand.


