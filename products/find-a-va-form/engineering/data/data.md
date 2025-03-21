# Find a Form data README

## Lighthouse VA Forms API documentation
https://developer.va.gov/explore/api/va-forms - Documentation for API that indexes data sourced from VA.gov, Lighthouse


## Date contexts
(Housing here for lack of better location.)
The Forms DB includes 2 dates that are migrated to Drupal: 
1. **Revision date** - date that is on the form itself in the lower left hand corner. Reflects the date when the form was created. 
    * A contractor makes changes/edits to the actual form, and they own updates to this date in the form.
    * Revision date is manually updated in the Forms DB.
    * Veterans submitting a form using an old revision may be required to re-submit using the latest revision.
2. **Issue date** - date that updated form is uploaded to the Form DB.
    * Will increment anytime the Revision Date increments
    * May also increment for background changes that do not change the Revision Date, such as updating Adobe certificates for the PDF. 
    * Issue date is manually entered in Forms DB, so in some cases a PDF may get updated without Issue Date reflecting a change.
    
Because both dates are manually entered in the Forms DB, and Drupal does not validate in any way, future dates may be entered for either date.

**Use of day**
Dates are stored in the Forms DB as month/year, and do not include a day.
In Drupal, day is required and generated by the system during Forms DB migration.

**Front-end display in Find-a-form**
(Sept 2024) The Find a Form product displays the form's revision date in `Month Year` format with the label "Form revision date." ([c-b PR](https://github.com/department-of-veterans-affairs/content-build/pull/2280/files), [v-w PR)](https://github.com/department-of-veterans-affairs/vets-website/pull/32039/files)

Forms are not guaranteed to have a Revision Date. In the case of a missing Revision Date, the Lighthouse Forms API will return an Issue date for that field instead. ([Details from LH](https://dsva.slack.com/archives/CUB5X5MGF/p1740755074593239))

**Example date display**
So for a form where: 
* `Revision date in Forms DB = 05/2022`
* `Issue date in Forms DB = 06/2023`

The Drupal CMS will store: 
* `Revision date = 05/01/2022`
* `Issue date = 06/01/2023`

And the front-end of the Find a Form product will show: 
* `Form revision date: May 2022`
