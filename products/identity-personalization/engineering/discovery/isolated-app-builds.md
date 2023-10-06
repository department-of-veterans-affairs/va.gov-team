
We need to isolate the imports and exports that are used in the personalization folder of the vets-website repository.

This folder covers profile, my-va, and also the appointments, common, components, notification-center, rated-disabilities, search-representative, view-dependents, and view-representative folders/applications AFAIK.

APPLICATION Locations that we need to fix:

| application path                                                                 | import path                                                                                  |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| dashboard/components/apply-for-benefits/ApplyForBenefits.jsx                     | src/applications/hca/utils/actions                                                           |
| dashboard/components/apply-for-benefits/SavedApplications.jsx                    | src/applications/hca/utils/actions                                                           |
| personalization/profile/reducers/index.js                                        | src/applications/hca/reducers/enrollment-status                                              |
| personalization/view-dependents/layouts/ViewDependentsLists.jsx | src/applications/static-pages/dependency-verification/components/dependencyVerificationModal |
| personalization/view-dependents/view-dependents-entry.jsx       | src/applications/static-pages/dependency-verification/reducers                               |
| src/applications/vre/28-1900/tests/e2e/chapter31-loa1.cypress.spec.js            | src/applications/personalization/profile/tests/fixtures/users/user-loa1.json               |

PLATFORM Locations to fix (platform imports from personalization):
```
"src/platform/forms/save-in-progress/ApplicationStatus.jsx",

"src/platform/site-wide/mega-menu/tests/megaMenu.cypress.spec.js",

"src/platform/user/profile/vap-svc/actions/transactions.js",

"src/platform/user/profile/vap-svc/components/ContactInformationFieldInfo/ContactInformationUpdateSuccessAlert.jsx",

"src/platform/user/profile/vap-svc/components/ProfileInformationFieldController.jsx",

"src/platform/user/profile/vap-svc/containers/AddressValidationModal.jsx",

"src/platform/user/profile/vap-svc/containers/AddressValidationView.jsx",

"src/platform/user/profile/vap-svc/tests/selectors.unit.spec.js"
```


Probably best to separate this work out to minimize PR LOC. Platform work will probably take the most time and will be the most import section of work.

Start with 3 pt ticket to migrate HCA based imports, then 3pt ticket for view-dependents/vre updates (some of this work could be split up between my-va and profile engineers)

The last one or two tickets (3-5pts each roughly) is to update the platform work, and figure out what needs to be in platform vs what should be in personalization. Some files are going to need to be moved from personalization to platform due to them being more 'core' functionality, this could have some impacts on complexity and code may need to be reworked to make this move appropriately. (this work would probably be best suited for having profile team complete)

To validate that the code has been isolated, you can view this page of the legacy documentation site: https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/cross-app-import-report

The easiest way to check the cross app imports from the code itself, is to run `yarn check-app-imports`  and this script will output a file locally to `tmp/cross-app-imports.json` . This JSON file can then be searched for personalization.

Below is a sample of what the current personalization section of the file looks like:

``` json
"personalization": {

"appsToTest": [

"personalization",

"vre"

],

"appsThatThisAppImportsFrom": {

"hca": {

"filesImported": [

{

"importer": "src/applications/personalization/dashboard/components/apply-for-benefits/ApplyForBenefits.jsx",

"importee": "src/applications/hca/utils/actions"

},

{

"importer": "src/applications/personalization/dashboard/components/apply-for-benefits/SavedApplications.jsx",

"importee": "src/applications/hca/utils/actions"

},

{

"importer": "src/applications/personalization/profile/reducers/index.js",

"importee": "src/applications/hca/reducers/enrollment-status"

}

]

},

"static-pages": {

"filesImported": [

{

"importer": "src/applications/personalization/view-dependents/layouts/ViewDependentsLists.jsx",

"importee": "src/applications/static-pages/dependency-verification/components/dependencyVerificationModal"

},

{

"importer": "src/applications/personalization/view-dependents/view-dependents-entry.jsx",

"importee": "src/applications/static-pages/dependency-verification/reducers"

}

]

}

},

"appsThatImportFromThisApp": {

"vre": {

"filesImported": [

{

"importer": "src/applications/vre/28-1900/tests/e2e/chapter31-loa1.cypress.spec.js",

"importee": "src/applications/personalization/profile/tests/fixtures/users/user-loa1.json"

}

]

}

},

"platformFilesThatImportFromThisApp": [

"src/platform/forms/save-in-progress/ApplicationStatus.jsx",

"src/platform/site-wide/mega-menu/tests/megaMenu.cypress.spec.js",

"src/platform/user/profile/vap-svc/actions/transactions.js",

"src/platform/user/profile/vap-svc/components/ContactInformationFieldInfo/ContactInformationUpdateSuccessAlert.jsx",

"src/platform/user/profile/vap-svc/components/ProfileInformationFieldController.jsx",

"src/platform/user/profile/vap-svc/containers/AddressValidationModal.jsx",

"src/platform/user/profile/vap-svc/containers/AddressValidationView.jsx",

"src/platform/user/profile/vap-svc/tests/selectors.unit.spec.js"

]

},
```

Once all those sections of the JSON no longer show various file paths then we know that the cross app imports have been removed, and that the application can be set up as an isolated app. 

Lastlly, updating the `changed-apps-build.json` located at https://github.com/department-of-veterans-affairs/vets-website/blob/main/config/changed-apps-build.json will result in our app getting picked up as an isolated app and will be the last file that will need to be updated to complete this work.


