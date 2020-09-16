## UX and Content Changes

- Include messaging to indicate the form the user will be taken to - this is already being done in some wizards.  Need to make messaging display consistent.   This will communicate to the user what form they should be completing based on their  wizard responses so they can more easily navigate/find a form in future sessions.  

- 'Skip wizard' capability should be configurable for display/hide for each wizard - some wizards should not have it, while others should.  Also need to consider scenarios where the wizard indicates that user is not eliglbe basedon their responses but the skip option is still presented. 

- Add content/link to "start over" and repeat wizard on introduction page. Option resets their current page with the wizard displayed as though they had not completed it yet.  If they had been taken to a different form from the initial wizard, they will stay on their current form introduction page with the wizard reset/displayed. 

- Wizard is only bypassed when the user is sent to a new form immediately after completing it to another form.  Once the user navigates away from the application, or navigates to a new application, the user will need to repeat the wizard.  This really only applies to Education at this time, so make it configurable - all other wizards that send you to a new form should require user to do the wizard on that form.

- Allow ability to customize title of wizard.  This will allow the title to match the purpose/context of the wizard - find the right form, determine eligibility, etc. 

 - Allow customization of skip wizard language/display properties on its context and importance.  Some wizards only need a small text link, others may need H2. Some may need placement at the top, others at the bottom. 


## Pattern clarifications

- Clarify display pattern for alerts/notifications within the wizard - difference between current wizard pattern and new alert display used in ch 31/36 work

- Clarify how to treat links to content from within the wizard - open in same tab or new tab? (Answer: New Tab)

- Define standard display options for configurable options - i.e. placement and properties of skip option?


## Use Cases/Business Logic for Wizards

## For all Wizards

**Functional/UX:** 

- **Start Over Wizard:** User function to "start over" the Wizard which manually clears the session data
  - Option resets their current page with the wizard displayed as though they had not completed it yet.  
  - If they had been taken to a different form from the initial wizard, they will stay on their current form introduction page with the wizard reset/display

- **Skip Wizard:** Should be configurable for display/hide for each wizard - some wizards should not have it, while others should.  Also need to consider scenarios where the wizard indicates that user is not eligible based on their responses but the skip option is still presented. 

- **
**Content:** 

 - **Messaging about recommended Form:** Include messaging to indicate the form the user will be taken to - this is already being done in some wizards. This will communicate to the user what form they should be completing based on their wizard responses so they can more easily navigate/find a form in future sessions.
   - Need to make messaging display consistent.   
   
- **

## Education Wizard

### Rule:
The only time a user doesn't need to repeat the wizard is if they complete the wizard and it immediately sends them to a different form in that Education form "family".  
- Example:  User completes wizard on form 1990 and is directed to the 1990n, the user does not see wizard.  If the user navigates away from 1990n intro page, they have to repeat the wizard when they return to it or to any other edu form.
