In order to stick with best practices we need to be sure that we are not duplicating work that can already been done
elsewhere in the codebase. If there are reusable front-end components then we want to use those if possible. Likewise if
this project requires a component that truely does not fit with what has been built already then we need to scope out
that new component.

## Current Form Landscape

The forms on the VA.gov website are reusable React components, these components work largely out of the box using a configuration file that gets filled out with details about the form such as -

- What fields the form has
- What data the fields accept
- Any custom validation rules for the fields

The existing React form components are very flexible and are built to work with any of the form fields that are used on the VA.giv website out of the box. These common fields are all defined in a common config file which can be used by any form. 

Even with this flexible form implimentation there are still a couple questions that linger for the Caregiver project -

1. Will the current signature capture workflow work for the caregiver project?
    Are the legal requirements for the caregiver's and veteran's signatures on the form such that we need to capture the     signatures a different way?
2. 

### Saving form progress

In addition to the forms themselves the ability to save form progress to an account is also a reusable component that works largely out of the box with some basic configuration. The user must set up an account to save progress however the entire process of saving progress once the account is set up can be reused from what is already working on the site.

There are still a few unanswered questions with the Save In Progress component - 

1. Does the Caregiver user type already exist in the database? If not can this affect the save in progress component?

