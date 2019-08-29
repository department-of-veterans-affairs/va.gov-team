To identify possible pitfalls or opportunities with the caregiver project, as well as to properly scope out the project, we
need to answer some questions about the environemnt this project will live in. As it pertains to the front-end this step
is critical in figuring out the level of effort/ time needed to reuse or create new front-end components.

## What will the environment for this form look like?

This form, as all web forms on VA.gov, will be a React application that ties into the existing VA.gov API. These React applicaitons are largely created by a scaffolding generator so that the basic setup is taken care of for the developer and most of what is needed is configuration. This form will also need to send its form data to the CARMA system, a Salesforce module that houses all of the current and past caregiver applications.

## Submitting the form

It seems that an initial requirement of this form is that it not only submit to the VA.gov API, so that it can be associated with a caregiver's account, but also to the CARMA system. *This could present complications as defining a custom submission that goes to two URLs will be an extension of the standard form functionality.* The submission to the CARMA system may be able to be handled by the back end, TBD.

Most of the needed info is located [here](https://github.com/department-of-veterans-affairs/va.gov-vfs-teams/blob/master/DeveloperDocs/vets-website/architecture.md)
