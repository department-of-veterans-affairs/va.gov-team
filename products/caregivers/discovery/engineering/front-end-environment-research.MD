To identify possible pitfalls or opportunities with the caregiver project, as well as to properly scope out the project, we
need to answer some questions about the environemnt this project will live in. As it pertains to the front-end this step
is critical in figuring out the level of effort/ time needed to reuse or create new front-end components.

## What will the environment for this form look like?

This form, as all web forms on VA.gov, will be a React application that ties into the existing VA.gov API. These React applicaitons are largely created by a scaffolding generator so that the basic setup is taken care of for the developer and most of what is needed is configuration. The configuration includes defining what fields you will use, UI characteristics of those fields past what comes out of the box, and defining where and how the form submits data.

### defining fields

Our forms use a React library that defines form fields using a JSON schema. This JSON schema must be created using the vets-json-schema repo and is then used as a 'contract' between the front end and the back end systems for data structure. These JSON schemas should in theory be easy to create however in practice they are a bit finicky and require some time and patience.

### UI Characteristics

Once the fields are defined we can also add some UI characteristics specific to our form, such as custom validation, showing and hiding fields based on answers, and field naming. These three customizations are build into the forms currently, anything past this would require extending the current forms and would add scope and time to the project.

### Mutating and submitting data

Our forms come out of the box with a configuration parameter that allows us to define where the form submits to in
as a URL. The form data is simply passed to that URL as a JSON payload. If the JSON payload needs to be mutated in any way
to accomidate the back end or an external API we can define our own custom form submittion function which will be used instead.

We will most likely be defining our own custom submit function since we will not only need to submit data to our back end but
also to the CARMA system.

More info on our architecture is located [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering)
