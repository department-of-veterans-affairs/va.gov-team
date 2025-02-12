The Mobile Design System team has established a set of standard steps for creating a new component.  Each step is made into it's own Story and worked by the members of the team.

Resources:
- [Component Master List](https://docs.google.com/spreadsheets/d/1_EAH2LWSzwF8Om7o4LAYJf6gT9UWENANYpF7SZy3j8w/edit?usp=sharing)
- [Mobile DS Documentation](https://department-of-veterans-affairs.github.io/va-mobile-app/design/Intro)


## Component creation Steps:

#### Step 1:
Practice: **UX**<br>
Story Estimate: **5**<br>
Story Title: **[Component Name] - Align with VADS and Publish Documentation** <br>
Story Details:<br>
**Description**<br>
Before implementation, we need to align this component with VADS and write documentation.

**Steps**

**UX refinements**
- [ ] Audit component with VADS to determine if we need to update it to be more aligned
- [ ] Update component in Figma based on alignment decisions

**Acceptance Criteria**
- [ ] Write documentation 
- [ ] Update Figma design library
     - [ ] Implement [plan](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/5457) to simplify the Assets panel by removing frames/groups and nesting/hiding lower level components
     - [ ] Implement [component template](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/5457)
     - [ ] Update metadata with description, link and alternative names
- [ ] Review with UX team
     - [ ] Review accessibility with Brea
     - [ ] Review content with Misty
- [ ] Publish documentation to doc site
     - [ ] Add link to component in Figma design library - #195
- [ ] Update [component documentation spreadsheet](https://docs.google.com/spreadsheets/d/1_EAH2LWSzwF8Om7o4LAYJf6gT9UWENANYpF7SZy3j8w/edit#gid=0) 

____________________________________________________________________________________
#### Step 2:
Practice: **UX**<br>
Story Estimate: **3**<br>
Story Title: **[Component Name] - Prep for Eng Handoff** <br>
Story Details:<br>
Before implementation, UX needs to review the original design work and update the component as needed.

**Acceptance Criteria**
- [ ] Compare component to VADS component
- [ ] Compare component to related components (Checkbox)
- [ ] Ensure correct design tokens are used in Figma
- [ ] Create handoff documentation
- [ ] Create any follow-on tickets

____________________________________________________________________________________
#### Step 3:
Practice: **front-end**<br>
Story Estimate: **5**<br>
Story Title: **[Component Name] - Tech Discovery** <br>
Story Details:<br>
**Description**
This story is to look at the [Component Name] Component to determine any technical complexity we will need to account for during development. 

**Important links**
- [Current documentation]()
- [Current primary code location]()
- [Current primary test location]()
- [npm package]()
- [Component List](https://docs.google.com/spreadsheets/d/1_EAH2LWSzwF8Om7o4LAYJf6gT9UWENANYpF7SZy3j8w/edit#gid=106854297)

**Design updates**
- [Master component]() in Figma 
- [Examples]() of how the component may appear 
- [Handoff notes]()

**Acceptance Criteria**

-  [ ] Determine the variants needed for the component 
     - [ ] Update implementation ticket based on findings
-  [ ] Identify any areas that need discussion with the team for MVP scope
-  [ ] Create stub stories for any 1-off things needed for the component
-  [ ] create POC to confirm our plans (if needed)

____________________________________________________________________________________
#### Step 4:
Practice: **front-end**<br>
Story Estimate: **8**<br>
Story Title: **[Component Name] - Component Implementation** <br>
Story Details:<br>
**Description**

This is a ticket to extract the [Component Name] component from the mobile app and install it into the component library.

**Important links**
- [Current documentation]()
- [Technical Discovery]()
- [Component List](https://docs.google.com/spreadsheets/d/1_EAH2LWSzwF8Om7o4LAYJf6gT9UWENANYpF7SZy3j8w/edit#gid=106854297)

**Design updates**
- [Master component]() in Figma 
- [Examples]() of how the component may appear 
- [Handoff notes]()

**Acceptance Criteria**
- [ ] Component has been updated based on the design updates
- [ ] Component has been added and merged into `main`
- [ ] Component has been manually tested inside the app in at least one place

____________________________________________________________________________________
#### Step 5:
Practice: **front-end**<br>
Story Estimate: **5**<br>
Story Title: **[Component Name] - Component Storybook** <br>
Story Details:<br>
**Description**
Create Storybook for the new component.  

**Acceptance Criteria**
- [ ]  New Storybook stories published and working as expected
- [ ]  Give Jessica links for doc site
- [ ]  Add link to documentation site

____________________________________________________________________________________
#### Step 6:
Practice: **UX**<br>
Dependent on Step 5
Story Estimate: **2**<br>
Story Title: **[Component Name] - Visual QA** <br>
Story Details:<br>
**Description**
Once the Checkbox group component is available in Storybook, Jessica will complete visual QA and create tickets for any additional work.

**Acceptance Criteria**
- [ ] Review component against Figma component
     - [ ] Typography
     - [ ] Colors
          - [ ] Light mode
          - [ ] Dark mode
     - [ ] Padding
          - [ ] Check that strokes are included in Autolayout. Otherwise, the padding will not match between design and code.
     - [ ] Alignment
     - [ ] States

     - [ ] Icons
     - [ ] Behavior
- [ ] Make any updates to documentation based on findings
- [ ] Create follow-on tickets


____________________________________________________________________________________
#### Step 7:
Practice: **Accessibility**<br>
Dependent on Step 6
Story Estimate: **2**<br>
Story Title: **[Component Name] - Accessibility Review** <br>
Story Details:<br>
**Description**
As part of this story we want to: <!-- List the desired outcome(s) for this ticket -->  

- Once the Checkbox Group component is available in Storybook, Brea will complete an accessibility review and create tickets for any additional work.

**Acceptance Criteria**
-  [ ] Review [Component Name] component for and accessibility issues
-  [ ] Create Bug tickets for any changes needed

**Accessibility Audit Checklist**
- [ ] Verify that the component scales with increased font sizes and with display zoom enabled.
- [ ] Verify that the component passes color contrast minimums.
- [ ] Verify that no screenreader issues exist.
- [ ] Verify that the component works with a keyboard and that there are no keyboard traps.
- [ ] Verify that the component works with Voice Access / Switch Control.
- [ ] Verify that the overall structure is accessible (headings are properly labeled, etc.).
- [ ] Verify that any error messaging displays properly / as expected.
- [ ] Verify that any tappable areas (links, buttons, etc.) meet target size minimums.


____________________________________________________________________________________
#### Step 8:
Practice: **front-end**<br>
Story Estimate: **3**<br>
Story Title: **[Component Name] - Analytics Support** <br>
Story Details:<br>
**Description**
As an owner of the app, I want to have access to the interaction analytics of the RadioButton component, so that I can make data-based decisions.

As part of this story we want to allow the [Component Name] to pass analytics data to the app

**Acceptance Criteria**
- [ ] Determine if analytics are needed
- [ ] Add function passthroughs for apps to be able to log analytics based on interactions handled by the [Component Name] component


____________________________________________________________________________________
#### Step 9:
Practice: **UX**<br>
Story Estimate: **2**<br>
Story Title: **[Component Name] - Publish Component to Figma and Doc Site** <br>
Story Details:<br>
**Description**
After the component is built in Storybook and reviewed by UX and Accessibility, we need to update the component documentation.

**Acceptance Criteria**
- [ ] Update Figma
   - [ ] Update documentation link
   - [ ] Publish component
- [ ] Update doc site
   - [ ] Update Storybook and Figma links in [Component Name] documentation in Design System section
   - [ ] Remove [Component Name] documentation from [Flagship section](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Flagship%20design%20library/Components/Overview)
     

____________________________________________________________________________________
#### Step 10:
Practice: **front-end**<br>
Story Estimate: **5**<br>
Story Title: **[Component Name] - Unit Tests** <br>
Story Details:<br>
**Description**
As an eng, I want to know if my changes break the RadioButton component, so that I don't break things.

**Acceptance Criteria**
-  [ ] create unit tests for the [Component Name] component

Use Cases:


____________________________________________________________________________________
#### Step 11:
Practice: **front-end**<br>
Story Estimate: **1**<br>
Story Title: **[Component Name] - Add to linting pkg** <br>
Story Details:<br>
**Description**
Update the linting package to issue deprecation notices for [Old Component Name].

Note: This ticket should be completed after all other essential tickets for creation of the component.

**Acceptance Criteria**
- [ ] Update linting package to throw deprecation warnings for the following flagship component(s):
  - [ ] [Old Component Name]
- [ ] Create an alpha build to test in flagship it'll behave correctly
- [ ] Update linting package version locally to be one minor version lower than the components package version that released the component (so on publish in main it'll align versions correctly)


____________________________________________________________________________________
#### Step 12:
Practice: **Product**<br>
Story Estimate: **1**<br>
Story Title: **[Component Name] - Flagship Work Setup** <br>
Story Details:<br>
**Description**
This is a ticket for Product to create an epic and work with the Flagship team to plan the work.


**Notes**
- [added by Front-End and UX - any things specific to implementing this new component such as design considerations or technical guidance]

**Acceptance Criteria**
-  [ ]   An Epic has been created for the app teams to install the new component
-  [ ]   Dev adds implementation details to ticket
-  [ ]   UX adds design implementation details to ticket


