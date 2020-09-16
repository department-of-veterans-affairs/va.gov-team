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


### Education Wizard

### Rule:
The only time the user does not see the Wizard on the Apply Now page is if they have -- in the same session -- completed the Wizard for one Education form and after completing that form are routed to another Education form.
- Example:  When User completes wizard on form 1990 and is directed to the 1990n, the user does not see wizard.  However, if the user navigates away from 1990n intro page, they have to repeat the wizard when they return to it or to any other edu form.

## Pattern clarifications

- Clarify display pattern for alerts/notifications within the wizard - difference between current wizard pattern and new alert display used in ch 31/36 work

- Clarify how to treat links to content from within the wizard - open in same tab or new tab? (Answer: New Tab)

- Define standard display options for configurable options - i.e. placement and properties of skip option?
