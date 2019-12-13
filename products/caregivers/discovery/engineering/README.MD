## Overview [WIP]

During the research phase of the caregiver project we need to answer a few key questions from a front-end standpoint -

1. How do we currently collect signatures on forms for va.gov and what will that mean for our form?
2. What is involved in interfacing with the CARMA system?
3. What is the scope involved with creating a form on va.gov?
4. How does the 'save in progress' feature for forms on va.gov work from a technical standpoint?
5. What would be the scope of going past a form in functionality into a full "dashboard" experience for caregivers?

In our research we have found the answers to these questions to be as follows -

### How do we currently collect signatures on forms for va.gov and what will that mean for our form?

We looked at several forms that currently exist on va.gov as well as met with folks that had worked on previous form projects for the site and found a few critical insignts -

* The current forms on va.gov use a simple checkbox to serve as a "signature" by proxy, this is not a physical signature per se but serves the same purpose of a signature style confirmation from the user
* The form 10-10CG that we are modernizing comes with a 90 review process where the caregiver(s) must be interviewed, background checked, and verified. This means that the collection of a physical signature is not nearly as important if this review process was not in place.

With these two insights in mind we will need to check in with our legal team to make sure that a checkbox is sufficient but barring any unforseen legal pitfall a checkbox or series of checkboxes should suffice for our form.

### What is involved in interfacing with the CARMA system?

The CARMA system is very new at this point and thus interacting with it is still very much ill-defined. Part of the scope of our project is that we will be determining how we would like to interact with the CARMA system and then leaning on the CARMA team to impliment that. Currently we have discussed the high level of what we want to achieve and the CARMA team is working on an estimate for how long that will take to impliment on their side.

Ideally we would like to interface with the CARMA system using REST API endpoints, this allows us to use the current reusable form components detailed [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/discovery/engineering/front-end-environment-research.MD). These endpoints would ideally have authentication set up so that we can get a session token from CARMA, though much of that will be determined by what currently exists on the CARMA side. These REST endpoints should accept a JSON payload and also return a similar JSON payload (this payload structure will be defined at the outset of development).

### What is the scope involved with creating a form on va.gov?

Creating a form on va.gov is a relatively straight forward process, the existing forms on the site all use pre-built React components on the front-end that submit to an API endpoint set up on the back-end. The back-end API endpoints are required for allowing the user to sign in and use the 'save in progress' functionality so if we want to take advantage of that we will need API endpoints set up on the back-end. Depending on the functionality reccomended by design and UX we should be able to use the pre-built React components since they are 100% compliant with our pattern library and have already been UX tested for the most part for other projects.

* A few remaining questions revolve around the fact that our form, the 10-10CG form, needs to be filled out by up to 4 seperate people. Defining that workflow is largely a responsibility of the design and UX team members however engineering is prepared to make reccomendations on technical direction based on what design and UX come up with. This technical direction can include both a "quick" solution using existing components as well as a "max state" that would require engineering to either extend current components or build completely new components.

### How does the 'save in progress' feature for forms on va.gov work from a technical standpoint?

The 'save in progress' (SIP) feature is a React component that interfaces with the existing back-end API infrastructure. It requires the user to create an account and then saves the user's form progress to that account. The SIP component is then wrapped around the form component and allows the user to save their progress. This is largely going to be existing functionality with a few caveats related to what design and UX come up with -

* We need to allow multiple people to fill out the form, do each of those people need to be able to also save their progress independent from each other?
* The current back end system includes a base user type that is created when the user logs in, do we need a new user type to be created when the user logs in so that a caregiver can, for example, see where the other users on a form are in their progress?


### What would be the scope of going past a form in functionality into a full "dashboard" experience for caregivers?

The answer to this question will largely be based on what the reccomended functionality is from design and UX. Engineering is prepared to call out specific pitfalls for what is the least difficult vs most difficult vs impossible within the current constraints of the va.gov and other systems that may need to be involved.
