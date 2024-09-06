# Profile UI updates and Personal health care contacts

How does `/profile` UI handle updating contact information? How much of this functionality can we reuse for updating Personal health care contacts?


## `va.gov/profile/contact-information`

Update your mailing, home addresses, phone numbers, email addresses.

> How does `/profile` update data?

A transaction id is created when the `<InitializeVAPServiceID />` component is created by calling `createTransaction()` with a null body/payload, which creates a POST request to `/v0/profile/initialize_vet360_id` (`PersonsController#initialize_vet360_id`)

The `ProfileInfoCard` and `ProfileInformationFieldController` handle rendering
of the UI for changing the above contact information fields. It accepts a `fieldName`
prop

```jsx
// src/applications/personalization/profile/components/contact-information/addresses/AddressesTable.jsx

const generateRows = (showBadAddress, toggleValue) => [
  // ...
  {
    title: formatAddressTitle(FIELD_TITLES[FIELD_NAMES.RESIDENTIAL_ADDRESS]),
    description: FIELD_TITLE_DESCRIPTIONS[FIELD_NAMES.RESIDENTIAL_ADDRESS],
    id: FIELD_IDS[FIELD_NAMES.RESIDENTIAL_ADDRESS],
    value: (
      <ProfileInformationFieldController
        fieldName={FIELD_NAMES.RESIDENTIAL_ADDRESS}
      />
    ),
  },
];

const AddressesTable = ({ className, showBadAddress }) => {
  const { useToggleValue, TOGGLE_NAMES } = useFeatureToggle();
  const toggleValue = useToggleValue(
    TOGGLE_NAMES.toggleVyeAddressDirectDepositFormsInProfile,
  );
  return (
    <>
      <CopyAddressModalController />

      <ProfileInfoCard
        title="Addresses"
        level={2}
        namedAnchor="addresses"
        data={generateRows(showBadAddress, toggleValue)}
        className={className}
      />
    </>
  );
};
```

See [@vap-svc README](src/platform/user/profile/vap-svc/README.md) to understand `<InitializeVAPServiceID />`

A `<ProfileInformationEditView />` component is rendered after clicking "Edit",
which contains a `<SchemaForm />` component.

Read up on FormSchema, `src/platform/forms-system`. Forked from mozilla project in an early state and added to `src/platform`.

`src/platform/user/profile/vap-svc/constants/index.js` defines `API_ROUTES`, the
vets-api paths the front-end uses to post/put/patch data.


## Q&A

> What does @vap-svc provide?

redux + components for handling VA Profile API transactions and updating personal
contact information.

> What does the VA Forms Library provide and how does `src/platform/forms-system` utilize it?

> How do I use the `ProfileInformationFieldController` to update a different API endpoint?

Important funcs:

- src/platform/user/profile/vap-svc/util/getProfileInfoFieldAttributes.js
- convertCleanDataToPayload

> What is the test coverage for `src/platform/user/profile/vap-svc`?

It seems low. Could be an area for improvement.

> Will vap-svc work with a VA Profile/Health Benefit service audit id?

An audit id is returned from `/v0/persons/init_vet360_id` (`va-pro/contact-information/hub/cuf/contact-information/v1`). If we want to reuse `vap-svc` on the front end, we will need an endpoint for POSTing to `va-pro/health-benefit/health-benefit/v1/update`

~The health-benefit service returns a transaction id as a `vaProfileTxAuditId` response header.~ The health-benefit service does not use transactions!

> Is using the `vap-svc` a risk? Will the complexity of asking the `vap-svc` to handle one more use case cause this to become unmanagable?

The amount of code we would need to add to vap-svc to support edit/update for EC/NOK phone numbers and addresses seems small.


## Next steps

Create tickets/add detail to tickets for the following items:

- [ ] create contact/associatedPerson schema in vets-api & vets-website
- [x] create openapi/swagger documentation in vets-api for `POST /v0/profile/contacts` endpoint
- [x] write code for `Profile::ContactsController#{create,update,show,destroy}`, routing, controller specs, add feature toggle.
- [x] write client code for VA Profile Health Benefit Service. read: `GET {endpoint}`, create/update: `POST {endpoint} w/ body`, destroy: `POST {endpoint} w/ {endDate}`, report errors to Sentry/Datadog
- [ ] write ui code: simple skeleton of new experience, enabled with feature toggle.
- [ ] write code for react components, specs in vets-website. stub out calls/responses from vets-api.
- [ ] write code for redux actions, reducers, selectors, specs. incorporate the address validation service
- [ ] final wiring, e2e specs


## Suggested front-end approach

Ticket: Feature toggle between read-only and new edit Personal health care contacts UI

Create folders `src/applications/personalization/profile/components/personal-health-care-contacts/{v0-read,v1-update}`, put existing code into `v0-read`, change import statements.

Add `_Content.jsx` and `_Section.jsx` components to `v1-edit` (following code organization in the `personal-information` folder).

Copy the necessary code from `v0-read` into `v1-edit` to display personal health care contacts.

Feature toggle the `v1-edit` code using the appropriate feature flag.

AC: Can toggle old and "new" EC/NOK UI. Note: New UI won't do much, yet.

---

Ticket: Edit EC/NOK from UI

Using api fixtures obtained from vets-api, write the necessary front end code to allow a user to edit an Emergency Contact or Next of Kin, showing a form when clicking "Edit", and writing changes directly to redux state.

This may or may not require the `<ProfileInformationFieldController />` component from `@vap-svc`, and the `<SchemaForm />` component.

AC: Can demo EC/NOK edit functionality. An e2e test exists for interacting with the form. Note: Updates won't persist, since redux actions & reducers aren't implemented.

---

Ticket: Update EC/NOK from UI

Write redux actions and reducers to update EC/NOKs by POSTing to `/v0/profile/contacts`. Connect the "save" button to the appropriate redux action.

AC: Can demo EC/NOK update functionality. Unit specs for redux code.

---

Ticket: Validate address for NOK when saving

Write redux code and UI to validate an address with the vets-api address validation service. Prompt the user to use the corrected version of the address, or the version they entered.

See `va.gov/profile/contact-information` for an example of how this is done.

AC: Can demo update functionality with address validation. Unit/e2e specs updated.

---

Ticket: Address A11y concerns for EC/NOK edit/update

Update e2e specs covering use of the feature, adding any accessibility concerns.

AC: EC/NOK edit feature is covered by e2e specs and is ready for a11y review.
