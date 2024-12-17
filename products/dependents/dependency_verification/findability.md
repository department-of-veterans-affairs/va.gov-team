# Dependent verification findability

Designers: Fiorella Geedi, Ajia Wallace, Ruben Sun

## Background

The Dependents Experience team is working on an initiative to reduce the over $250 million that the VA overpays in dependents payments annually, burdening Veterans with debt. This initiative consists of two parts: 

- An annual notification email that would encourage Veterans to review and verify or update the dependents on their VA benefits on VA.gov
- A partial digitization of Mandatory Verification of Dependents [VA Form 21-0538](https://www.va.gov/find-forms/about-form-21-0538/) that will allow Veterans to verify that their dependents are correct on VA.gov

[Learn more about the verification initiative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/dependency_verification)

## Findability discovery

As a part of our initiative, our team did some discovery work to understand how Veterans might find information about the "verification of dependents."  We mapped out all the existing entry points in Mural, and through this exercise, we identified several content and information architecture issues. 

[Go to map of existing extry points in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689863079145/5b97ba9ea11077f983f3413167f6324f11aa04a8?wid=0-1733935267441)

## Problem

Through our discovery, we identified the following issues:

### Search results

Using the following phrases did not render the "About form" page for Verification of dependents:
- Verification
- Dependent verification
- Verification of dependent 

Only when using exact phrasing from the title of the form, "Verification of dependents," did we see the "About form" page for Verification of dependents in the search results.

#### Questions
- _HMW surface Verification information in the search results?_
- _What phrases should surface verification information?_
  
### Information and structure issues with the current parent page

A review of the parent "static page" for dependent pages revealed a few potential improvements.

[Go to View or change dependents](https://www.va.gov/view-change-dependents/)

- The paper form for VA Form 21-686c was not mentioned or linked on the parent page.
- The link to the online tool to add or remove dependents, 686c/674, was hidden behind a sign-in alert
  - Mikki Northuis has pointed out previously that having sign-in alerts on both the parent page and the introduction page for 686c/674 is not compliant with guidance
- The content is structured differently than other parent pages for VA.gov forms
  -  _Does it make sense to align with other forms' structures, such as showing the different options to apply?_
- We'll need to add information about verification of dependents to this page for the initiative launch
  - _Where does it make sense for this information to live?_
  - _HMW allow both authenticated and unauthenticated Veterans to find this information?_
- Improving navigation into dependents' information pages
  - Unauthenticated Veterans have to find the "View or change dependents on your VA disability benefits" page using the search functionality or under Disability in the main VA.gov menu
  - Only authenticated Veterans can find their dependents in the profile menu
  - _HMW make the Dependents information more discoverable on VA.gov?_
  - _HMW make the Dependents Verification information discoverable on VA.gov?_

## Goals for MVP

## Unknowns

## Suggested timeline

[description] [link to Mural?]
