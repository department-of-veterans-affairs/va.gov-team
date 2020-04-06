# Overview

Currently we have all of the JSON we are using to validate the 686-674 form inside one "generic" schema file, this was done to make our JSON schema as reusable as possible within the 686-674. This fundametally different than using the `vets-json-schema` as a central contract between the front end and back end and we need to start moving towards having that central contract. The process for this should be pretty straightforward - 

1. **Check to make sure that the current JSON schema is the best shape it can be for submission of the form** - Since we used onc central file for all of our JSON schema our form's data structure is completely flat. This may need to be modified so that our form's data has some shape to in before submitting. This will require logging our form data to the console and testing different naming conventions and JSON shapes until the form's data has the shape we want.

2. **Create a schema file in the `vets-json-schema` repo** - Once we have the data in the shape we want we can move that into a new file inside the `vets-json-schema` repo and update the imports in the 686-674 form's `form.js` file in the `/config` folder.

3. **Create a submission transform function for any further adjustments that need to be made to data** - Once we have our form's data in a good shape there may still be some adjustments we want to make before submission to the back end, such as removing undefined or empty properties. This can be done using the form's built in `transformForSubmit` hook where we can make changes to the data before it goes to the back end.


## Notes

### Check to make sure that the current JSON schema is the best shape it can be for submission of the form

Changing the shape of the data being submitted should be as simple as wrapping parts of the existing schema in container objects. These container objects will map to the objects that the back end is expecting so that the submission to the back end will be valid. We need to test how changes to the schema and uiSchema affect the front end of the form to make sure that we do not change how the front end looks or behaves by changing the shape of the schema.

Once we change the shape of the schema we will need to ensure that all unit tests still pass and update and that break.

### Create a schema file in the `vets-json-schema` repo

Creating a file in the `vets-json-schema` repo requires a few steps, **first** - within the `vets-json-schema` repo inside `/src/schemas` we need to create a folder named the same as our form folder in `vets-website`. Inside this folder we will create a `schema.js` file and within this file we can paste our generic schemas inside `generic-schema.js` from our `/config` folder within our form folder. Once we have our generic schemas inside our file in `vets-json-schema` we can use them to create our exported schema object. The exported schema object should match the overall schema structure from our form.


