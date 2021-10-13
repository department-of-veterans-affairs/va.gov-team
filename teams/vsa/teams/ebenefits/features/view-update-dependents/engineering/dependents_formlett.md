## Feature Summary
The 686 form is complex. Comprised of up to 8 distinct workflows, the amount of time a user may spend completing a single application can be considerable. 
In thinking about future iterations of the 686, one of the questions we needed to answer was: "How can we reduce cognitive and temporal burden on our users?".
A solution we settled on was providing a formlett on the view dependents page that allows uesrs to remove dependents from their accounts without entering the 686 form itself. 

## Technical implementation
- Formletts are housed in the [ManageDependentsApp](https://github.com/department-of-veterans-affairs/vets-website/blob/c6d3a434f04c83cd5048f2b5f75282abb3726867/src/applications/personalization/view-dependents/manage-dependents/containers/ManageDependentsApp.jsx#L1) and are embedded in [ViewDependentsListItem](https://github.com/department-of-veterans-affairs/vets-website/blob/805f2dbd5816d992130dbd62baef2833335ab6f7/src/applications/personalization/view-dependents/components/ViewDependentsList/ViewDependentsListItem.jsx#L106) components for each person on award.
- 
