### Unified Direct Deposit Form Plan

1. New Direct Deposit base route component
	- Use Toggle state within Profile component / getRoutes function to use the new component. Similarly to how the EK / NOK is being done currently.
	- Reasons for not using existing DirectDeposit component
		- tons of logic and code revolves around the existence of 2 forms: showCNPSuccessMessage, cnpFormIsDirty, allFormsAreEmpty, viewingPayments, isSavingCNPBankInfo, cnpSaveError (these all have corresponding EDU versions in the code as well)
		- to make sure that the unified form is isolated from any CNP/EDU based logic, we should maintain state within the new component that doesn't rely on old code/logic. We can use some of this old code that is reusable, but benefit specific form flows can be eliminated completely from the redux store and many selectors can probably be refactored into a smaller footprint
		- Knowing what to deprecate and what needs to remain will be much easier if there isn't a comingling of new and old code, especially since the main route components is housing most of the logic.
2. New state for single form. It can reuse some selectors, but I think we can drastically reduce the redux cruft here
3. Identify and isolate reusable components that can be transferred to the new experience.

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

- **PaymentHistory** - No changes required

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
