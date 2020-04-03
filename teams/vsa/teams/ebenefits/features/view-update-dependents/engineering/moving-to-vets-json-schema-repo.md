# Overview

Currently we have all of the JSON we are using to validate the 686-674 form inside one "generic" schema file, this was done to make our JSON schema as reusable as possible within the 686-674. This fundametally different than using the `vets-json-schema` as a central contract between the front end and back end and we need to start moving towards having that central contract. The process for this should be pretty straightforward - 

1. **Check to make sure that the current JSON schema is the best shape it can be for submission of the form** - Since we used onc central file for all of our JSON schema our form's data structure is completely flat. This may need to be modified so that our form's data has some shape to in before submitting. This will require logging our form data to the console and testing different naming conventions and JSON shapes until the form's data has the shape we want.

2. **Create a schema file in the `vets-json-schema` repo** - Once we have the data in the shape we want we can move that into a new file inside the `vets-json-schema` repo and update the imports in the 686-674 form's `form.js` file in the `/config` folder.

3. **Create a submission transform function for any further adjustments that need to be made to data** - Once we have our form's data in a good shape there may still be some adjustments we want to make before submission to the back end, such as removing undefined or empty properties. This can be done using the form's built in `transformForSubmit` hook where we can make changes to the data before it goes to the back end.


## Notes
