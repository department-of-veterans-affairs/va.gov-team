# UX, Content and Functionality Changes

### For all Wizards

**UX:** 

- **User Control-Start Over Wizard:** User function to "start over" the Wizard which manually clears the session data
  - Option resets their current page with the wizard displayed as though they had not completed it yet.  
  - If they had been taken to a different form from the initial wizard, they will stay on their current form introduction page with the wizard reset/display

- **User Control-Skip Wizard:** Should be configurable for display/hide for each wizard - some wizards should not have it, while others should.      - Also need to consider scenarios where the wizard indicates that user is not eligible based on their responses but the skip option is still presented. 
   - Allow customization of skip wizard language/display properties based on its context and importance.  Some wizards only need a small text link, others may need H2. Some may need placement at the top, others at the bottom. 

- **Publishing/Authoring-Customizable Wizard Title:** Allow ability to customize title of wizard.  This will allow the title to match the purpose/context of the wizard - find the right form, determine eligibility, etc. 

**Content:** 

 - **Messaging about recommended Form:** Determine messaging to indicate the form the user will be taken to - this is already being done in some wizards. This will communicate to the user what form they should be completing based on their wizard responses so they can more easily navigate/find a form in future sessions.
   - Need to make messaging display consistent.   
   
- **Wizard Titles:**  Determine unique titles for each Wizard.  This will allow the title to match the purpose/context of the wizard - find the right form, determine eligibility, etc. 

**Functional:**

- **Clear Wizard Flag on Form Restart:** In the Education (526 and HLR) Forms, the second choice of "Start a new application" opens a modal to confirm, then immediately sends the user to the first page of the form, thus bypassing the introduction page, and more importantly the wizard. Form 526, needs the wizard to save a user's separation date and Form 0996 (HLR) will need to save a Veteran's claim type. The HLR value will be essential when submitting the form. This also occurs with the educational benefits forms where the choice of forms is not reset. The "Start a new application" needs to either preserve the stored wizard form data, or restart the form from the introduction page, and reset the wizard "completed" flag so the wizard is again revealed. Ticket- https://github.com/department-of-veterans-affairs/va.gov-team/issues/13814


## Pattern clarifications

- Clarify display pattern for alerts/notifications within the wizard - difference between current wizard pattern and new alert display used in ch 31/36 work

- Clarify how to treat links to content from within the wizard - open in same tab or new tab? (Answer: New Tab)

- Define standard display options for configurable options - i.e. placement and properties of skip option?
