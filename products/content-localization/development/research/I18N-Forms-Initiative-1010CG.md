# I18N of form 1010CG

## Global components for forms system (blocking dependency)
- Language switcher
- Initialization hook / namespace loading
- Form inputs
	- Text input
	- Number input
	- Required attribute on all inputs
	- Validation helpers
- Navigation buttons
- Form titles and other global display components
- Submission logic (sending submission language)
- Feature Toggle to support I18N on forms and specific forms only

## Caregivers Form
Form Title: Application for Comprehensive Assistance for Family Caregivers Program (10-10CG)

- form definitions include address, date, email, phone, gender, vetRelationship, ssn, fullName, uuid, signature.

- 3 chapters present in the UI
	- Vet/Service Member (required)
	- Primary Family Caregiver
	- Secondary / secondaryTwo Family Caregiver

One caregiver is always required, at least one primary, or one secondary - minimal

### Technical summary

API endpoint: `${environment.API_URL}/v0/caregivers_assistance_claims`
Data is transformed for submission via `submitTransform` from `applications/caregivers/helpers`

#### Structure

`/components` - 4 custom components: `AdditionalInfo`, `NeedHelpFooter`, `PreSubmitInfo`, `SubmitError`

`/config` - form config and chapter configs for `primary`, `secondaryOne`, `secondaryTwo`, `signAsRepresentative`, and `veteran` chapters

`/containers` - `App`, `IntroductionPage`, and `ConfirmationPage` UI containers

- `App` contains event listener for radio analytics events (yes/no checkboxes)

- `ConfirmationPage` shows successful submission messaging
	
- `IntroductionPage` Initializes the form with router, and displays the form instructions
	
`/definitions` - UIDefinitions, constants, and content

`/reducers` -  uses ` createSaveInProgressFormReducer`

`/sass` and `/test` - styles and e2e / unit tests

`10-10CG-schema.json` - holds json schema definitions for addresses used in this form

`app-entry.jsx` - entry for form

`helpers.js` - helpers

`manifest.json` - manifest

`README.md` - docs

`routes.jsx` - React Router definitions


### Concerns for Translating 1010CG - app specific challenges

**Components**

- AdditionalInfo
	- Document uploading
	- Selecting a VA medical center or clinic where the Veteran receives care
- NeedHelpFooter
	- Online Caregiver Support Coordinator search tool (links to english based caregiver.va.gov subdomain)
- PreSubmitInfo - SignatureCheckbox, SignatureInput, SubmitLoadingIndicator
- SubmitError - DownloadLink (downloads english form with filled out fields?)

**Config**
- Complex config is coming from definitions folder
- signAsRepresentative
	- legal representative document upload / POA
- veteran
	- vetMedicalCenter (previous treatment fac, preferred facility view

**Definitions**
- UiDefinitions: sharedUI, veteranUI, caregiverUI
- constants
- content: links to english content, arrays of text for multiline static content

**Helpers**
- ValidateSSNIsUnique, facilityNameMaxLength
- arrayToSentenceString uses conjunctions to combine array of strings
	- example: https://github.com/department-of-veterans-affairs/vets-website/blob/c84a8ccee9fa2260b14d51fd1e1f665d97c8e258/src/applications/caregivers/components/AdditionalInfo/index.jsx#L290
