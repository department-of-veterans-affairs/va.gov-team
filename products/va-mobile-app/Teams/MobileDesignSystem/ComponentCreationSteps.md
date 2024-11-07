The Mobile Design System team has established a set of standard steps for creating a new component.  Each step is made into it's own Story and worked by the members of the team.

Resources:
- [Component Master List](https://docs.google.com/spreadsheets/d/1_EAH2LWSzwF8Om7o4LAYJf6gT9UWENANYpF7SZy3j8w/edit?usp=sharing)
- [Mobile DS Documentation](https://department-of-veterans-affairs.github.io/va-mobile-app/design/Intro)


Component creation Steps:

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

## Acceptance Criteria
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


#### Step 2:
Practice: **UX**<br>
Story Estimate: **3**<br>
Story Title: **[Component Name] - Prep for Eng Handoff** <br>
Story Details:<br>
Before implementation, UX needs to review the original design work and update the component as needed.

## Acceptance Criteria
- [ ] Compare component to VADS component
- [ ] Compare component to related components (Checkbox)
- [ ] Ensure correct design tokens are used in Figma
- [ ] Create handoff documentation
- [ ] Create any follow-on tickets


#### Step 3:
Practice: **front-end**<br>
Story Estimate: **5**<br>
Story Title: **[Component Name] - Tech Discovery** <br>
Story Details:<br>
## Description 
This story is to look at the [Component Name] Component to determine any technical complexity we will need to account for during development. 


## Important links
- [Current documentation]()
- [Current primary code location]()
- [Current primary test location]()
- [npm package]()
- [Component List](https://docs.google.com/spreadsheets/d/1_EAH2LWSzwF8Om7o4LAYJf6gT9UWENANYpF7SZy3j8w/edit#gid=106854297)

## Design updates
- [Master component]() in Figma 
- [Examples]() of how the component may appear 
- [Handoff notes]()

## Acceptance Criteria
<!-- Add a checkbox for each item required to fulfill the user story/issue. -->  

-  [ ] Determine the variants needed for the component 
     - [ ] Update implementation ticket based on findings
-  [ ] Identify any areas that need discussion with the team for MVP scope
-  [ ] Create stub stories for any 1-off things needed for the component
-  [ ] create POC to confirm our plans (if needed)


#### Step 4:
Practice: **front-end**<br>
Story Estimate: **8**<br>
Story Title: **[Component Name] - Component Implementation** <br>
Story Details:<br>
## Description

This is a ticket to extract the [Component Name] component from the mobile app and install it into the component library.

## Important links
- [Current documentation]()
- [Technical Discovery]()
- [Component List](https://docs.google.com/spreadsheets/d/1_EAH2LWSzwF8Om7o4LAYJf6gT9UWENANYpF7SZy3j8w/edit#gid=106854297)

## Design updates
- [Master component]() in Figma 
- [Examples]() of how the component may appear 
- [Handoff notes]()

## Acceptance Criteria
- [ ] Component has been updated based on the design updates
- [ ] Component has been added and merged into `main`
- [ ] Component has been manually tested inside the app in at least one place


#### Step 5:
Practice: **front-end**<br>
Story Estimate: **5**<br>
Story Title: **[Component Name] - Component Storybook** <br>
Story Details:<br>
