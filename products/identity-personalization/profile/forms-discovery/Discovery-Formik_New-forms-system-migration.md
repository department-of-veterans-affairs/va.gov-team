# Discovery: Profile  Formik / new form system migration

Research:

In looking at the new forms system and the documentation by the Forms Platform Spike team there are some areas that the forms system excels, and areas where it falls short. Specific to the profile use case here are some of those pros and cons.

Pros
- there is a defined structure for multipage forms and longer forms can be created with sections for each set of fields
- Validation is handled in the schema and can be automatic based on patterns or validator functions
- Routing is handled in the form system for navigation and slug creation via React Router
- The review page is baked in and has its own customization that is possible.
- The new forms system can override individual pages and review page sections to provide and 'escape hatch' to use new features and component without being bound to existing rules.

Cons
- for the profile there is no use for multiple pages, and each field in the profile is treated as its own mini form with only a single or small set of fields that are shown at a time.
- no use for review page as well
- since the escape hatch for using the new form system is at the page and review page level, that escape hatch wouldn't really work for our needs either.
- because of the nature of the form system, we are only rendering one instance at a time and updating the instance's form schema and this has introduced some challenging behavior. (the preferred name focus validation warning https://github.com/department-of-veterans-affairs/va.gov-team/issues/41319)

Other notes from research:
[Inventory of Applications Using the Forms Library](https://vfs.atlassian.net/wiki/spaces/FLT/pages/2017493166/Inventory+of+Applications+Using+the+Forms+Library) mentions that we aren't using the "Form Library"

> Using SchemaForm, react component and VA component library.
> Still uses the forked repo for react-jsonschema-form, as the SchemaForm component in platform/forms-system imports the Form component from said repo directly.

This appears to mean that we are using the components directly instead of in their intended way, so that is worth noting.

[Pros and Cons of current forms system in a more detailed list](https://vfs.atlassian.net/wiki/spaces/FLT/pages/2031779841/Current+Forms+Library+Overview+with+Pros+and+Cons)

[Current forms system vs New Form Library](https://vfs.atlassian.net/wiki/spaces/FLT/pages/2015690871/Current+Forms+Library+vs.+New+Forms+Library+fka+Formulate+Strengths+and+Weaknesses)


## Conclusion:

To reduce complexity of using a dynamic schema and injecting a mini form instance into the edit view of each field, I would recommend using Formik directly with the various VA Design System components. Most basic field components have been created and are listed here in the [Forms section](https://design.va.gov/components/form/) of the Design System docs.

There would still be a need to track the open edit views to show the 'currently editing' alert, but I think that overall we could eliminate/simplify the need for things like the schema objects, overly complex [ProfileInformationFieldController](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/user/profile/vap-svc/components/ProfileInformationFieldController.jsx) component, and other technical debt that is difficult to reason through for engineers.

# Potential POC implementation

- Feature Toggle dependent: `profile_next` to denote the 'next' iteration of profile functionality / work. Definitely not tied to this naming, but wondering what feature toggle naming would be more clear.
	- Worth noting we already have similar naming:
		- `profile_schema_forms`: Enables SchemaForm based contact info edit forms in profile. This leads me to believe that at one time in the past we didn't actually use the forms system components for the profile?
		- `profile_enhancements`: Used to show any enhancement for the profile. This flag is used for the new Personal information Fields to show them and split contact information into a different slug/route. This seems overly broad and could be more specific.
		- `profile_show_demographics`: similar to `profile_enhancements` but just used server side to determine whether to show the 'enhanced` personal information data at all from the api call.

- **Move a single field over to the new implementation to try out the functionality and test within staging.**
	- Preferred name probably one of the easier fields to test this with
	- Advanced field validation would especially need to be considered for sections like the addresses, .
		- Address validation and suggested address flow
		- Address change messaging for home / mailing address modals 

- **Adapt the API calls to be used within either the schema based form of the new Formik based form.**
	- Transactional/polling style and single async calls would need to be considered

- **Evaluate effectiveness of migrating a single field and whether this helps of hinders the codebase in general.**
	- Alerts for things like direct deposit could be one area that a Formik based form could provide benefits. (various error alerts appearing inline in the form, or more advance alerts/validation elements being required than what are available now with the schema form)
	- Modularizing the code more into its own parts instead of relying on the ProfileInformationFieldController to do most of the work and being modified extensively would hopefully provide clarity and better code organization.
- **Redux integration**
	- State changes are taking place in various way to update the state of the UI after actions are taken, api calls are made, and api calls are completed. Making sure the two systems work together while migrating will take some consideration.
		- `OPEN_MODAL`: sets modal and modal_data when an 'edit' button is clicked. `modal_data` appears to be null in most instances and `modal` is set to a string denoting what modal is being opened ex: `mailingAddress`
		- `UPDATE_PROFILE_FORM_FIELD`: passes `field` ex: `mailingAddress` and a `newState` object that contains the value for field(s) of the form being opened along with the formSchema and uiSchema for the form to be rendered.
		- State changes for api calls including: 
		  - `VAP_SERVICE_TRANSACTION_REQUESTED`
		  - `VAP_SERVICE_TRANSACTION_REQUEST_SUCCEEDED`
		  - `VAP_SERVICE_TRANSACTION_UPDATE_REQUESTED`
		  - `VAP_SERVICE_TRANSACTION_CLEARED`
		  - These correlate to the lifcycle of a transaction, which is briefly outlined here in this [README](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/README.md)



---

# POC branch
