# Background
From time to time Veterans need to make updates to the dependents they get benefits for. These updates can be when a divorce happens, or a death, or a new child is born, etc. The 686c form is how these changes to dependents are made.

## How the form works for the user

Since the Veteran may be making any one of various changes to dependents, there are multiple path, or workflows, they can take through the form. When the veteran starts the form they are shown an introduction page with some information about what is in the form. Then they are taken to a "wizard" page where they can choose what workflow they want to take though the form. The paths the Veteran can take through the form can be any of the following -

- `Add your spouse`
- `Add a spouse`
- `Remove a divorced spouse`
- `Remove a spouse, child or dependent parent who has died`
- `Remove a stepchild who has left your household`
- `Remove a child 18 to 23 years old who has stopped attending school`
- `Add a child 18 to 23 years old</strong> who'll be attending school` (VA Form 21-674)

> You will notice that the last workflow is technically speaking a totally separate form (the form 21-674). The stakeholders wanted this form added as a workflow to this form since it deals with making changes to a dependent. That workflow actually submits to a separate data source.

### Choosing workflows

The Veteran can choose as many or as few of these workflows at a time. This means the Veteran could potentially come into the form and select multiple workflows and we show them only the parts they need to see. For instance, if you choose to `Add your spouse` AND choose `Remove a divorced spouse` we would show you the pages dealing with those two workflows but ONLY those two workflows. This is done using `depends` in the code and is detailed below.

Once the user chooses the workflows they want, they move through the form filling out the fields and are then shown a review page of what they are about to submit. They can then submit and see a confirmation screen that they submitted the form.


## The Front End code
Since the 686c is a rather large form we decided to split the form chapters up into smaller files instead of putting them all in one huge file. We broke these files up into individual folders for each respective chapter. You can find each individual chapter folder inside `/config`. You will also see a few files inside the `/config` folder that are not inside the chapter folders, these files are -

- `address-schema.js` - Holds a reusable address schema we use throughout the chapters
- `constants.js`- Holds a few constants specific to our form
- `form.js` - Uses all of the individual chapters to build a form schema which is then used to build the form
- `helpers.js` - Holds a few helpers used for the UI and one used in loops where the Veteran can add multiple items, like adding multiple past spouses for example
- `location-schema.js` - Holds a more basic location schema we use througout the chapters but is not as comprehensive as the full address schema noted above
- `utilities.js` - Holds a few utility functions we use like validations as well as holding all of the imports of the individual chapters for use inside form.js

The form system uses Redux and thus we also use Redux in our form so we have a `/actions` and a `/reducers` folder to hold the respective Redux code.

> It is worth noting that we make an API call when the user lands on the introduction page of the form to check that they have a valid VA file number. We check for this VA file number because we submit this form to BGS and we cannot submit the form without that VA file number. The code to check if the user has a valid VA  file number is inside the `/actions/index.js` and `/reducers/index.js` files respectively.
