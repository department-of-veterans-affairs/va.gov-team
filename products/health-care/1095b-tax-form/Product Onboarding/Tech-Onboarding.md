
## Front End Architecture

Last Updated: March 22, 2022

**Overview**

The front end is built up of two parts, a React widget which lives in vets-website repo (see links below) that was built by the CEDAR 1095B  team, and the landing page in Drupal CMS where the React widget will be embedded, which is developed by Sitewide Content team. We chose to build a widget rather than a react application because most of the page is static content, and it is easier for the drupal team to update static content when it lives in their CMS. The only dynamic part of the page lives in the widget. 

The widget code lives in the **src/applications/static-pages/download-1095b/**  directory on the feature branch. Currently it is awaiting code review (see relevant links) 

**Relevant Links**

[The front end feature branch](https://github.com/department-of-veterans-affairs/vets-website/tree/feature/37015-poc-1095b-page)


[PR open pending review from the VA](https://github.com/department-of-veterans-affairs/vets-website/pull/20619/)


[Sitewide content issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38448)


[Design mockups for landing page (sort by date to get most recent ones) ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/1095b-tax-form/design/wireframes)


[VA React widget documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/Creating-a-new-React-widget.1849425948.html)

**Unfinished Elements /Issues /Considerations**



1. There is a flashing which occurs during testing between the unauth and auth state of the widget. There is a chance that this will be fixed when the widget is embedded into the Drupal page. However, in the code the **loggedIn** variable only returns true or false. When it returns false, it could mean the data has not been received yet OR that the user is in fact not logged in. This is why the flashing occurs.
2. There are **two endpoints** on the backend that the widget will need to call. Currently it only calls the one which grabs the data and generates the PDF. However it will be updated shortly to also display the “last updated on” date for that veterans form. It will also return the available tax years for the veteran. **Currently we are only fetching the current tax year** so the front end code will simply grab the most recent year available from the new endpoint and then use it to make the API call for downloading the form.
3.  There are **two error states** which can occur - data for that veteran for that year does not exist, or  a technical glitch that causes a failure to download the form. The first error state can be distinguished using the new endpoint mentioned in #2 even before an attempt to download the form occurs. The second error will display if a non 200 status is returned from the server. **Design has created mockups for displaying these errors which are in review process.**
4. **Testing has been performed manually with test users that have necessary permissions.** Cypress tests need to be added to test download ability of form and correct display for auth/unauth. In order to conduct your own manual test, please use [vets.gov.user+10](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/test_users.csv) and make sure to visit the user profile page and click “verify user” or else you will get a 403 forbidden error from the server when attempting to download. You will also need to add data with an ICN number that matches the user in the rails console. More information in the backend architecture section (pending).



# Backend Architecture

Last updated on March 22, 2022


## Overview

The original plan for the backend architecture is detailed in relevant links, as is still pretty accurate with the exception of using the existing rails infrastructure to add a table to the database in **vets-api** rather than using an AWS database. Essentially the goal is to receive data from the enrollment system where veteran IRS health information is saved. The data is passed to an S3 bucket every time there is a transfer to the print vendor (i.e. when the form would get mailed to veterans). A sidekiq worker/listener detects when a new batch of data is in the S3 bucket and kicks off a job to populate/update the database table with the new data. Finally, the **generate_pdf** function in the **form1095_b** model ruby script actually takes the data and populates the template pdf (from the pdf_fill library).

Currently there are two PRs under code review (see relevant links). 


## Relevant Links

[Architecture Diagram plus notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/tech/architecture-plan.md)

[PR for S3 script  currently under review](https://github.com/department-of-veterans-affairs/vets-api/pull/9430)

[PR for rest of backend work currently under review](https://github.com/department-of-veterans-affairs/vets-api/pull/9423#pullrequestreview-917442570)

[Original data discovery notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/tech/Data-Discovery.docx)

[VA backend documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/Backend-developer-documentation.1886289964.html)

[PDF Fill library](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/pdf_fill)


## Ongoing Issues/Considerations 


1. How do we account for changes in the IRS form in the future? It seems someone would have to manually update the code or any fields that might change. 
2. Issues with PDF accessibility. It is possible we will have to change the fields inside **generate_pdf** function if the PDF form has to be rebuilt from scratch for accessibility reasons. 
