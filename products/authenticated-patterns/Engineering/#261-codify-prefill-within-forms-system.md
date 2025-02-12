## Codifying prefill pattern pattern into forms-system

After talking to John on IIR team, he mentioned the staging review items for their team:
https://github.com/department-of-veterans-affairs/va-iir/issues/1175

An interesting consideration that came up while I talked through their app, is that they don't have an introduction page, so the prefill intro alert will not be shown on that application. This is a one off app (as far as I know so far) but that does throw a wrench into the idea that we wouldn't show a prefill alert on form pages.

While the IIR team will need to make sure their form is working as expected, the changes to the code will be more of a platform wide change, and so the rest of this document will explain what will need to happen there.

---

## Ongoing platform forms-system work around contact information and profile integrations

Robin Garrision has proposed platform documentation changes here:
https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2262

There is also a staging ticket: [Staging Review finding: Review and align with the new prefilled pattern](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95168) that involves updating the forms-system code


## Technical notes on implementation variants

Robin has been the main engineer that has built the 'profileContactInfo' integration into the forms-system, but they are not a member of the forms-system team, so bandwidth and ownership of the code is a concern.

In contrast to the `profileContactInfo` work, other applications have followed a more straightforward path of prefilling the data into their form fields, and not providing a way to update profile when changes to this data are present in a form. Since there are different implementations present throughout all the apps, there should be decisions made around how this info is gathered, updated, and shown accross the platform, so that a singular approach can be adopted and enforced when creating applications.



### File overview of `profileContactInfo` feature work

`src/platform/forms-system/src/js/definitions/profileContactInfo.js`
factory function that creates a series of pages for the contact info display and editing
- majority of legwork is done here to manipulate the formConfig to support the profile data fields and the configuration that is passed into this factory
- builds a custom page for the ContactInfo (viewing the profile fields info all on one page) and a custom review page
	- the other pages that represent the editing as a subtask for each field are not included in the form config because they are extra 'in between routes'

`src/platform/forms-system/src/js/components/ContactInfo.jsx
One of the more complex parts of the current implementation in that it deals with the outer state of updating a profile field, along with building a read-only section for the needed fields. 
- CustomPage that renders the users contact info with the edit buttons
- shows several conditional alerts or content
	- missing info alerts
	- error alerts and save success alerts
	- validation errors
- includes conditional content that can be displayed if a user isn't logged in
- also looks to be shown on the review & submit page as well

`src/platform/forms-system/src/js/components/EditContactInfo.jsx
- EditHomePhone, EditMobilePhone, EditEmail, and EditAddress components 
- use the `src/platform/user/profile/vap-svc/components/ProfileInformationFieldController.jsx` to render the form fields and connect to the Profile async api transaction lifecycle

_Semi-related files_:

`src/platform/forms-system/src/js/definitions/profileAddress.js`
this appears to be what is used to show address fields that are usually prefilled with the profile data, but does not persist edits back to profile. This is a page that shows the form immediately with the fields all filled whenever possible

`src/platform/forms-system/src/js/definitions/fullName.js`
ui schema for fullName as a series of form fields
- static and would not tie into profile, but would be related to what our prefilled patterns considers the 'prefilled data that is uneditable', however using this definition file would result in fully editable form fields that would be submitted with the form.

## Next steps:
Meet with Robin to discuss how we can help update the Contact Info Loop pages to align with our pattern.

- talk about anything that could impact our pattern from a technical standpoint, and if there are technical limitations when it comes to implementing
- discuss the required fields approach and how users are prompted to enter missing data
- discuss introduction page changes and the read only / ContactInfo.jsx page changes
- document next steps, how we can standardize within the form system applications, and document what other applications should / can benefit from the changes in the immediate future
- ownership of this code, updates, and what we can do to help support engineering efforts between teams
