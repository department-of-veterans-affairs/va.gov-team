# Design/UX Planning for Education Benefits Form

## Useful things
* This process will hopefully set a baseline for producing a fairly straightforward form.
* Current VONAPP application process allows for save/return, this mvp version will not allow for that to avoid dealing with accounts/login which is still under development

## Chunks of Work

### 1. Discovery and Assessment of Current Systems & Processes
_Understand any deviations between the current experience on eBenefits and the actual 526EZ form and figure out what's working well and what's in need of further excellence._

- [X] Review frog research --> Alex, Caitlin
- [X] [Diagram of current education benefits form in VONAPP](https://github.com/department-of-veterans-affairs/edu-benefits-team/design-documents/flows/edu-benefits-form-diagram-vonapp.pdf) --> Caitlin
- [X] Text-based [inventory of fields](https://github.com/department-of-veterans-affairs/edu-benefits-team/blob/master/Discovery/1990%20questions.xlsx) --> Anne
- [X] Reach out to VCEs to find out where improvements can be made from their perspective and how the information will be used/the criticality of it --> Caitlin, Laura
- [X] Interview veterans to get a more nuanced understanding of the current application experience process from veterans --> Caitlin, Laura
- [x] [SPL output and constraints to frontend experience](https://github.com/department-of-veterans-affairs/edu-benefits-team/blob/master/design-documents/spl-technical-constraints.md) --> Caitlin (Living doc...)

### 3. UX / Form Design

#### 3a. prep & discovery
- [X] Determine how we might group form fields, reframe them, order them [Proposed flow] (https://github.com/department-of-veterans-affairs/edu-benefits-team/design-documents/flows/edu-benefits-form-diagram-proposed.pdf) --> Caitlin
- [X] Use Proposed flow to help identify incongruencies between paper and VONAPP --> Anne, Caitlin
- [X] Synthesize the discovery phase:
  - [x] Key research findings: takeaways from research, interviews, & current processes --> Caitlin
  - [X] [Functional requirements/Form outline](https://github.com/department-of-veterans-affairs/edu-benefits-team/design-documents/form-outline.md): what does the user need to do to complete the task at hand? --> Caitlin
  - [X] Design requirements: best practices & ideas for building the user experience --> Caitlin
- [X] [High level user stories](https://github.com/department-of-veterans-affairs/edu-benefits-team/blob/master/design-documents/high-level-user-stories.md) --> Caitlin


#### 3b. wireframes & developing new flow/logic of questions on form
- [X] Crude (mobile) wireframes that address form elements but not language/instruction
- [X] [Outline of all fields in proposed order](https://github.com/department-of-veterans-affairs/edu-benefits-team/blob/master/design-documents/Proposed%20question%20flow.xlsx) --> Caitlin
- [X] High fidelity (mobile) wireframes (No visual design assets. All we need should be able to be pulled from HCA design patterns and U.S. Web design standards.)
- [X] Desktop wireframes
- [X] _Stakeholder feedback (and signoff?)_

#### 3c. visual design
- [X] Design patterns: review existing vets.gov patterns, [U.S. Web Design Standards](https://standards.usa.gov/form-controls/); determine if new patterns are needed and how these will impact other vets.gov forms; collaborate -early and often- with other teams developing new forms ("done" but also ongoing)
- [X] Consider/discuss: step tracking on mobile
- [ ] Look for opportunity to improve field validation (alarming error states on focus)
- [ ] _Stakeholder feedback (and signoff?)_

#### 3d. usability testing & feedback
_(although listed last, testing ideally done throughout, as needed)_

- [ ] Review with internal stakeholders
- [ ] Usability testing of static or interactive prototypes

### 4. Vets.gov Integration 
_How education benefits form will integrate with existing education section._

- [ ] Coordinate related content, controlled vocabulary, plain language, contextual help to make sure we're consistent. 
