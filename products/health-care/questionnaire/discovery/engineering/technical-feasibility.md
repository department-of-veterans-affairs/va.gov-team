[example from discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/discovery/engineering)

## Overview [WIP]

_This is depricated, see the [README](./README.md)_

During the research phase of the questionnaires product we need to answer a few key questions from a engineering tech feasibility perspective -

1. How do we get health data from multiple EHR source systems?
2. How do we authenticate the Veteran so we can show personalized health data?
3. What is the scope involved with creating a form on va.gov?
4. What is our Mobile and va.gov platform development strategy
5. How do we show va.gov profile information by pre-populating a form or leverage a re-usable component?

What is the scope involved with creating a form on va.gov?

Creating a form on va.gov is a relatively straight forward process, the existing forms on the site all use pre-built React components on the front-end that submit to an API endpoint set up on the back-end. The back-end API endpoints are required for allowing the user to sign in and use the 'save in progress' functionality so if we want to take advantage of that we will need API endpoints set up on the back-end. Depending on the functionality recommended by design and UX we should be able to use the pre-built React components since they are 100% compliant with our pattern library and have already been UX tested for the most part for other projects.

A few remaining questions revolve around the fact that our form, the 10-10CG form, needs to be filled out by up to 4 separate people. Defining that workflow is largely a responsibility of the design and UX team members however engineering is prepared to make recommendations on technical direction based on what design and UX come up with. This technical direction can include both a "quick" solution using existing components as well as a "max state" that would require engineering to either extend current components or build completely new components.

![captured (1)](https://user-images.githubusercontent.com/1793923/86625609-57103880-bf93-11ea-830a-477e91c1ac8f.gif)

How does the 'save in progress' feature for forms on va.gov work from a technical standpoint?

The 'save in progress' (SIP) feature is a React component that interfaces with the existing back-end API infrastructure. It requires the user to create an account and then saves the user's form progress to that account. The SIP component is then wrapped around the form component and allows the user to save their progress. This is largely going to be existing functionality with a few caveats related to what design and UX come up with -

We need to allow multiple people to fill out the form, do each of those people need to be able to also save their progress independent from each other?
The current back end system includes a base user type that is created when the user logs in, do we need a new user type to be created when the user logs in so that a caregiver can, for example, see where the other users on a form are in their progress?

What does our tech stack look like (or should look like)?
Data Flows

- Make sure you start early when investigating data flows.
- Where will your data be coming from?
- Where will it be going?

APIs

- Read up on and understand all APIs and associated data models. Think about and capture in your discovery tickets:

  - Performance considerations of the APIs
    - The data fields that are available and what “real data” we are actually getting

Sample tickets?

- Security considerations
- Make sure you understand if any of your data needs special security measures

CMS

- How will the potential solution integrate with the CMS/Drupal?

Comparative Analysis

- What approaches to similar problems have we seen elsewhere?

Scale

- How do we ensure our solution scales?
  - New users vs. existing users (related to API performance)
  - New scenarios, cases

Debt

- What debt would we potentially incur with our approach?
- What debt should we consider resolving first?

Analytics

- Related to debt, what analytics gaps do we have in our current implementation?
