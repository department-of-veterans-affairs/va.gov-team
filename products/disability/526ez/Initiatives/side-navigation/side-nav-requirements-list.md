# Side Navigation Component V1 - Requirements List
_The following documentation lists out the user, functional, technical, and data requirements that we are uncovering for this initiative._ 

- [Side Nav Super Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116289)
- [Side Nav Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/collab-cycle/side-nav/side-nav%20initiative%20brief.md)
- Authors: Irene Vailikit, Julius Ahenkora 
- Last Edited: 2025-9-29 

## Jump To
- [Initiative Summary](#initiative-summary)
- [Future Iterations](#future-iterations)
- [User Reqirements](#user-requirements)
- [Functional Requirements](#functional-requirements)
- [Technical Requirements and Considerations](#technical-requirements-and-considerations)
- [Data Requirements and Considerations](#data-requirements-and-considerations)
- [Open Questions](#open-questions)
- [Engineering Resources](#engineering-resources)

## Initiative Summary
We are implementing the [side navigation component](https://design.va.gov/components/sidenav) into the 526ez form. <br> 

The **side navigation V1** will contain the 6 main steps of the form: (1) Veteran details (2) Conditions (3) Mental health (4) Suppporting evidence (5) Additional information (6) Review and submit. By implementing the `side navigation` we intend on giving Veterans the ability to skip sections and navigate back to sections without having to hit the `back` or `continue` button multiple times. Providing a navigation feature will also provide Veterans with an overview of all form section and help them have a stronger sense of progress across sections. By implementing the `side navigation` we will reduce the number of clicks it takes for a Veteran to complete the form, consequently making the act of filling out the form quicker and more efficient.

### Initial lo-fi image of proposed initiative:

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/collab-cycle/side-nav/screenshots/SideNavMVP.png" alt="Screenshot" style="max-width: 600px; width: 40%;">

### Future Iterations
Future iterations of this implementing the side navigation component will include providing users the ability to jump to sub sections of the form and will list sub sections as nested within the major 6 form steps. The following requirements are exclusively for version 1 implementation. 

## User Requirements 
- As a user, I want to move to any section of the form at any time, so that I don’t waste clicks or have to backtrack unnecessarily.
- As a user, I want to review or edit previous answers easily without losing my place or progress, so that I can correct mistakes without frustration.
- ~As a user, I want to be able to preview form pages of different sections to be able to understand the form’s structure before engaging with the content, so that I can understand what is expected approach filling it out with confidence.~ (Edit 9/29/25 - for V1, because of the conditional logic and data architecture of the form, we will not be able to allow users to skip ahead or view sections prior to filling out a previous section.)
- As a user, I want to trust the form’s built-in navigation controls (such as the back button) rather than relying on the browser’s back button, so that I know my progress and data will be preserved.

## Functional Requirements 
- ~System supports navigation to the landing page of one of the 6 major sections/steps of the form at any time without unnecessary clicks or backtracking.~ (Edit 9/29/25 - for V1, the navigation component will allow users to revisit sections that they have already completed but not to skip ahead to other sections.)
- System allows users to review and edit previous answers without losing their place or progress.
- The system must preserve user progress and data when navigation controls (such as a built-in back button) are used.
- The system's navigation must be accessible, all users (e.g., sighted, blind, visually impaired) to efficiently move between pages and understand form structure.
- Show clear progress indicators depending on current state. [@Julius - can you say more about this one?]
- Allow for saving and returning to form.
- Handle error states in navigation. For example, failing to enter a required field should not return the user back to the main form section page but instead route back to failed page.

## Technical Requirements and Considerations
- **6 Major Steps**: Included within the side navigation: (1) Veteran Details, (2) Conditions, (3) Mental Health, (4) Supporting Evidence, (5) Additional Information, (6) Review and Submit
- **Forms Metadata**: Create a curated Metadata file that either statically routes to "major steps" (MVP) or dynamically (V2).
- **Accessibility Considerations**:
  - Using <ol> conveys ordered sequence.
  - aria-current="step" (or "page") on the active link signals current location to assistive tech.
  - Ensure heading level inside nav fits overall page hierarchy (adjust h2 to h3 if the page already has an h1 and a h2 above).
- **Save State**: Regarding entering data on a page, does the form save data on each major section?
- **Component should use mapping** to generate ordered links and determine the next active step from the current pathname. Logic should exist for next path to route to from that current section.
  - For Example: Veteran Details -> Conditions -> Mental Health, etc.
- **Focus Management**: After route transitions, ensure focus goes to the top-level page heading (forms platform usually handles this; if not, add a focus() to main heading or rely on existing ScrollToTop pattern).
- **State Management**: 
  - (1) Track form completion status 
  - (2) Highlight current Step 
  - (3) Handle disabled/enabled states for navigation items
- **Testing**: 
  - (1) Implement Cypress tests for front-end tests
- **Example Implementation**:
  - (1) Can be found here: [Prototype Implementation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/118561#issuecomment-3285628211)
  

## Data Requirements and Considerations
- The current form schema is inconsistent—some chunks are grouped under a single object, others spread out. This may affect how Side Nav maps sections and impacts stability. There is a risk that Side Nav can’t align cleanly with existing schema structure.
- Link to [Form Flow js](https://github.com/department-of-veterans-affairs/vets-website/blob/34a5337ad8098d143eea4ca68a0aec3bb9d1a4d8/src/applications/disability-benefits/all-claims/config/form.js#L708)
- Only two major steps Conditions and Mental Health have dependencies. First page of the former determined by rated/increase/new conditions, and the entirety of the latter only being rendered if certain criteria are met.
- Risk: Does clicking on side nav impact how data that has already been entered on a page is saved?
  - Recommendation: Force a save-in-progress before a user navigates away from the page.
- Harden the data validation and ensure the user cannot nav to a page they should not logically be able to get to.

## Open Questions 
_(Collaboration between Design + Eng Needed)_
- Determine which page within a section will each Side Nav option route. Is there a clear landing page of each of the 6 sections?
- Research rendering of sidenav in mobile version. Consider collapsible navigation for smaller screens and its effect on usability.
- What content shows up on the "Review and Submit" page if the user is able to navigate to it via the side nav before finishing the form? Are accordions present, but empty? How does it impact the "edit" on page fuctionality on the "Review and Submit" page?
- What is the relationship between the Navigation component and Progress Bar component? What do each uniquely offer?
- For future versions, what would be required to allow a user to skip ahead to future sections without fill out out all sections before it?

## UAT Scenarios [WIP]
**Navigating to previously filled out sections and checking if info has been saved.**
- User fills out a few pages of "Mental Health" (Step 3). Clicks navigation to "Veteran Details" (Step 2). Clicks navigation back to "Mental Health". Was information on Mental Health section saved?

**Clicking "Finish this application later" and understanding how this might impact saving.**

**Logging out and logging back in**

**Review and Submit page: User clicks "Edit" button to edit info on that page. Does the info get edited on the actual original page? What if they use navigation compoenent to navigate back to a section?**


---
## Engineering Resources
- [side nav design system page](https://design.va.gov/components/sidenav#code-usage)
- [va-sidenav component library](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components/va-sidenav)
- [Form Flow js](https://github.com/department-of-veterans-affairs/vets-website/blob/34a5337ad8098d143eea4ca68a0aec3bb9d1a4d8/src/applications/disability-benefits/all-claims/config/form.js#L708)
- [Routed Savable App](https://github.com/department-of-veterans-affairs/vets-website/blob/8b0faa523ed4045407b8a319929adf8b344f51a6/src/platform/forms/save-in-progress/RoutedSavableApp.jsx#L34): Look into this re: ensuring progress is saved.
- [Side-nav Usage Example - ProfileSubNav](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/components/ProfileSubNav.jsx)

