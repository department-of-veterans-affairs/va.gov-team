## Brief overview

Direct deposit is moving to a single form, so all the logic for EDU vs CNP needs to be going away, and one from will be resposible for both. This form will essentially be an extension/leverage functionality of the current CNP form as the EDU part is basically getting absorbed into the database that handles CNP currently.

How do we migrate cleanly to a single form?

How do we deal with all the references to CNP vs EDU in the current code?

How do we make the deprecation of the 2 form version as painless as possible?

Where do we refactor and clean up the existing logic to learn from any past mistakes or code smells?


## Changes required for single form version of direct deposit

**MHV/DSLogon users** - see identity verify alert with expanded information about credential retirement - this _should_ be fine to do now and push up without needing to rely on any particular toggle

**Not eligible users** - 
- this would be a check on the 'canUpdateDirectDeposit' control information AND the new flag 'eduClaimInd' if both of those are false (or maybe they will incorporate the eduClaimInd into the boolean that returns in canUpdate???) then we show the not eligible content. 
- Do we still need to check other conditions like we are doing currently? `signInServicesEligibleForDD.has(signInService) && isInMVI && is2faEnabled` these may not really be needed if we determine that the control information is really where we should be looking regardless. If they aren't in MVI or dont have 2FA set up then maybe we should stop the request from even happening?
- The not eligible content needs to be outside of a ProfileInfoCard component and should just be in the page content.
- Should NOT show the fraud summary box

**Eligible users and currently enrolled users** summary of UI changes
- Profile info card will have the title 'Bank account information'
- Edit / placeholder info is the same as prior UI
- Fraud summary box adds a heading and moves below the VA payment history card NO LONGER GOING TO DO THIS
- Form edit state has slightly updated content: 'Please provide your bank’s routing number as well as your current account and type. '
- Account number field now says: Account number (No more than 17 digits)
- Aria label for the form wrapping div is set to `aria-label={`Edit bank account for ${sectionTitle.toLowerCase()}`}` so we need to make sure that is changed to be correct for single form
- Error messages need a title added to the alert. I'm not sure if this was something that was added or was missed in previous UI iterations
- Update saved slim alert doesn't have a border in the figma files, but does in code... check on this.



### Unified Direct Deposit Form Plan

1. New Direct Deposit base route component
	- Use Toggle state within Profile component / getRoutes function to use the new component. Similarly to how the EK / NOK is being done currently.
	- Reasons for not using existing DirectDeposit component
		- tons of logic and code revolves around the existence of 2 forms: showCNPSuccessMessage, cnpFormIsDirty, allFormsAreEmpty, viewingPayments, isSavingCNPBankInfo, cnpSaveError (these all have corresponding EDU versions in the code as well)
		- to make sure that the unified form is isolated from any CNP/EDU based logic, we should maintain state within the new component that doesn't rely on old code/logic. We can use some of this old code that is reusable, but benefit specific form flows can be eliminated completely from the redux store and many selectors can probably be refactored into a smaller footprint
		- Knowing what to deprecate and what needs to remain will be much easier if there isn't a comingling of new and old code, especially since the main route components is housing most of the logic.
2. New state for single form. It can reuse some selectors, but I think we can drastically reduce the redux cruft here
3. Identify and isolate reusable components that can be transferred to the new experience.

#### Expanded plan with further details

1. [x] Create a new Redux state for the direct deposit information:
   - Define a new reducer file at `reducers/directDepositInformation.js`.
   - Create initial state for `directDepositInformation` and `directDepositInformationUiState`.
   - Create actions and action creators for fetching, updating, and handling errors example action name: `DIRECT_DEPOSIT_FETCH_STARTED`
   - Update the root reducer in `reducers/index.js` to include the new `directDepositInformation` reducer so it is available profile wide

2. Create a new set of API calls and actions. New endpoint will be `/profile/direct_deposits` instead of `/profile/direct_deposits/disability_compensations`
   - Create a new file, e.g., `actions/directDepositInformation.js`.
   - Implement API calls and actions for fetching and updating direct deposit information.
   - Ensure that the new actions are dispatched appropriately based on the user's interactions.

3. [x] Create a new `DirectDeposit` component. We already have a base set up for the route entry, but this is the actual implementation details
   - Connect the component to the Redux store using `connect` from `react-redux`.
   - Map the relevant state and dispatch actions to the component's props.
   - Either set up a context provider or pass actions to children via props

4. Implement the form and UI for the new direct deposit experience:
   - Create a single form for capturing the bank account information. This will be based off BankInfoForm in legacy
   - Use the same schema from the legacy form, but update field names to match api data keys 1:1. The old form is manipulating the api response to fit into a field naming schema from the earlier endpoint response data.
   - Handle form submission and dispatch the necessary actions to update the Redux state.
   - Display success/error messages and handle loading states based on the `directDepositInformationUiState`.

5. Update the error handling and validation logic
   - Reuse and adapt the existing error handling and validation logic from the legacy version. The inline validation will not change aside from any new fixes that might be present. Travis mentioned an issue with the 18 max length validation messaging needing some work.
   - Error messages need to be updated with non-benefit specific language
   - Update the error handling actions and reducers to work with the new `directDepositInformation` state.

6. Update the `Profile` component and feature toggle:
   - Map relevant new state and actions into Profile, since this is where the intial api calls get triggered from
   - Update the profile blocking logic for deceased / fiduciary / incompetent to work for legacy and new experience. This will be one area that will be slightly messy as it will need to work with toggle on or off with the same UI.

7. Test the new direct deposit experience
   - Ensure that the new form functions correctly and updates the Redux state as expected.
   - Verify that the error handling and validation work as intended.
   - Test the integration with the existing components and overall application flow.

8. Incrementally role out the new experience and improve code quality as rollout continues
   - maintain downtime alert in legacy version so that users are notified of edu downtime
   - any untested code in the new experience should have unit or e2e tests added to it to make sure featuer parity and coverage parity in the new experience.

10. Clean up and remove the legacy code
   - Once the new direct deposit experience is fully implemented and tested, remove the legacy code completely.
   - Delete the legacy `DirectDeposit` component, its associated files, and any unused actions and reducers. Basically delete the entire legacy directory
   - Remove the feature toggle and any conditional rendering logic related to the legacy experience.


### Current Component Overview and Changes needed
	
- **Alerts Folder**
  - DirectDepositBlocked - no changes
  - DirectDepositConnectionError - refactor to not use benefitType with conditional content
  - EduMigrationAlert - no change needed, will be removed once new form is fully launched
  - EduMigrationDowntimeAlert - no change needed, will also be removed
  - FraudVictimAlert - refactor name, move out of alerts since it isn't actually an alert, add heading from new designs for it, can be reused / copied
  - NotEligible - refactor into single messaging / remove conditional language
  - TemporaryOutageCnp - refactor name remove cnp, update language for general direct deposit outage, maybe remove altogether is the DownTimeOutage component would suffice.
  - **VerifyIdentity** - no changes required
  
- **BankInfo** - needs to be re-created as it is also relying on a ton of CNP/EDU conditional logic. Split into NotSetupContent, EditingBankInfoContent, BankInfoContent, and other smaller react component. There are some pretty bad code smells in here with components being declared inside another component, useMemo not being utilized, and some heavy reliance on nested selectors to determine state. This will be a heavy refactor

- **BankInfoForm** - not a large component and mostly serves as a wrapper for the SchemaForm that renders either the CNP or EDU prefixed forms depending on the `formPrefix` that is passed into the form. This can be refactored into a similar component that is just a single form without conditional construction of schema. Probably still best to recreate this component instead of reuse existing code.

- **Direct Deposit** - this is the entry route component, so this will be rewritten to eliminate all CNP/EDU based code into a single state based form / api call

- **Direct Deposit Wrapper** - this is a pretty lightweight wrapper component, and aside from the check for cnpError, should be able to stay pretty much the same. The cnpError should basically be able to be refactored to use a directDepositError or something similar that represents the same error checking but for the single form state version

- **Eligibility Link** - minor refactor to remove conditional text

- **PaymentHistory** - No changes required, although Travis did bring up a good point that this will need to show regardless of DD enrollment state in the new experience

- **PaymentInformationEditError** - rename to BankInfoErrorAlert or similar, go through each error content and make sure its set up for single form
  
  15 Components in the Direct Deposit page + Profile entry will need changes + Redux Selectors/Actions/Reducers
  
  - Profile

    fetchCNPPaymentInformation

    fetchEDUPaymentInformation

    shouldFetchCNPDirectDepositInformation

    shouldFetchEDUDirectDepositInformation

    there are correlating lifecycle methods that are using this information and will need updates

  - Redux
   still have to fully analyze state impacts
