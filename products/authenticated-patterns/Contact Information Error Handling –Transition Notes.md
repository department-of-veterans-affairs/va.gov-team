# Contact Information Error Handling –Transition Notes  
  
## Overview  
[Original ticket for this work](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/307)

As part of our team's work on the "Help users to...Update Prefilled Information" pattern, we introduced a new feature on the Edit Mailing Address page that adds a radio button question asking users to: 
- Save changes to both the form and their profile OR
- Save changes to the form only

We also implemented a fallback mechanism to handle server or network failures during profile API updates. In the event of a failure, the user would still be allowed to continue completing the form. Their updated contact information would be saved to the form only, and an error alert would inform them that the profile update did not succeed. The updated data would also correctly render in the contact information review cards.  
  
**Context**:  
Our user research sessions revealed that users were frustrated when updating an address for a specific form—such as a temporary summer address—also changed in their profile. This feature was designed to address that pain point.
  
Currently, the radio button question is only incorporated in the mock-form-ae-design-patterns app - Pattern 2, Task Blue. To view locally, navigate to `http://localhost:3001/mock-form-ae-design-patterns/2/task-blue/veteran-information/edit-mailing-address` 
  
#### Expected user flow with server error  
1) User edits their mailing address, phone number, or email either on a form page or within their profile. 
2) **Mailing addresss**: 
a) If the user selects **“Yes, also save to my profile”**, and a server error occurs, the updated address still renders in the review card, and an error alert is shown. 
b) If the user selects **“No, only save to this form”**, and a server error occurs, a success alert appears since no profile update was attempted.
3) **Phone numbers and emails**: 
a) Since no radio button question is presented, updates are attempted directly. If a server error occurs, the updated data still renders in the review card with an error alert. 
  
## Code structure  
Please view the following PRs for reference:  
- [Updates to ContactInfo base for prefill pattern and mailing address changes](https://github.com/department-of-veterans-affairs/vets-website/pull/35414)
- [Error handling for saving to profile failure in editing contact info](https://github.com/department-of-veterans-affairs/vets-website/pull/35825) 
  
**Key files**  
1) [ProfileInformationEditViewFc.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/2d6222a1c5c3e781960ea5b045aca219e0088a7f/src/platform/user/profile/vap-svc/components/ProfileInformationEditViewFc.jsx)  
- Functional component version of ProfileInformationEditView that handles logic for mailing address updates  
- Contains the UI for the radio button question.  
2) [ProfileInformationEditView.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/user/profile/vap-svc/components/ProfileInformationEditView.jsx)  
- Handles phone number, email, and address updates when the special form flow with the radio button question is not required.  
3) [ProfileInformationFieldController.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/user/profile/vap-svc/components/ProfileInformationFieldController.jsx)
- Contains logic that decides which component, ProfileInformationEditView or ProfileInformationEditViewFc, to use based on if ` prefillPatternEnabled &&  
fieldName === FIELD_NAMES.MAILING_ADDRESS`  
4) [ContactInfoFormAppConfigContext.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/user/profile/vap-svc/components/ContactInfoFormAppConfigContext.jsx)
- Provides update function for form-only data and handles Redux + backend autosave  
5) [actions/transactions.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/user/profile/vap-svc/actions/transactions.js)  
- Inside the `createTranscation` function, handles logic for when the API fails with a server error AND the user is in a form context: Dispatches a special action (`VAP_SERVICE_TRANSACTION_FORM_ONLY_UPDATE`) to indicate the UI should switch to a form-only update.  
  
**Files in mock form ae design patterns app**  
6) [ContactInfo.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/_mock-form-ae-design-patterns/shared/components/ContactInfo/ContactInfo.jsx)  
- Contains logic about how to correctly render the data in the cards.  
- `syncProfileData()`function checks to see what fields are updated. Then, compares the `updatedAt` timestamp between profile data and form data and selects which one is more recent. The more recent timestamp will be displayed in the card.  
7) [EditContactInfo.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/_mock-form-ae-design-patterns/shared/components/ContactInfo/EditContactInfo.jsx)  
- Uses `ContactInfoFormAppConfigProvider` to wrap its children  
  
## Challenges  
After shipping this feature, a significant issue came up:  
1) Account exp/auth exp teams reported on staging (profile/contact-information).

- When a user updates their home address—specifically with a value in street address line 3, 
- then selects "Use address you entered" in the address validation modal 
- then selects "yes" to copy this new home address to their mailing address" 
- the transaction fails and an error alert is displayed
  
The expected flow --> when user selects "yes", the new home address should also copy to the mailing adddress.

**Overarching issue**

The `validationKey` from the home address when the user selects "Use address you entered", is not getting copied over to the mailing address.
  
### Reported Bugs
- [Bug: Fix Repeat Requests for Transaction Status When Modifying Contact Information via VAProfile](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109750#issue-3063600656)  
- [Allow users to update mailing address after successfully updating home address (VAProfile V2 validation_key requirement)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109619)  
- [Bug | Address Validation Fix/Troubleshooting](https://github.com/department-of-veterans-affairs/va.gov-team/issues/111984)  
  
### Timeline of Fixes & Workarounds

The below fixes consist of reverting back some of our changes from our PRs.
1) May 1 - [[HOT FIX] Updated Profile Information Edit View to fix updated contact info not rendering](https://github.com/department-of-veterans-affairs/vets-website/pull/36222)
2) May 15 - [Bug fix for AddressValidationView for missing validation key](https://github.com/department-of-veterans-affairs/vets-website/pull/36519)
3) May 28 - [Increase timeout between polling api](https://github.com/department-of-veterans-affairs/vets-website/pull/36745)
3) June 16 - [[TEST] Validation key fix when updating mailing address](https://github.com/department-of-veterans-affairs/vets-website/pull/37110)
**Note**: this PR was not merged since we couldn't test locally and was unable to push to staging

### Aftermath 
Due to the reversion of changes from our initial PRs, the error handling functionality no longer behaved as intended. Our team initiated a refactor to restore the original functionality; however, we were unable to complete this work prior to the end of our contract.

**Related tickets**

The following tickets were in progress or queued at the time of handoff 
- [[Prefill Pattern] Bug fix for contact info error handling](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/389)
 - [Bug fix for address validation when updating contact info in profile](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/408) **related to above ticket, can be addressed concurrently
 - [Move ContactInfo folder and related code into the platform forms-system shared location](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/383)
 - [Update Developer docs for the new ContactInfo integration](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/384)
 
## Recommendations for Next Steps
- Resume work on the error handling fallback logic, ensuring compatibility with current VAProfile validation requirements.
- Investigate and resolve the `validationKey` propagation issue between home and mailing addresses.
