
# Front End Architecture

Last Updated: March 31, 2022

## Overview

The front end is built up of two parts, a React widget which lives in vets-website repo (see links below) that was built by the CEDAR 1095B  team, and the landing page in Drupal CMS where the React widget will be embedded, which is developed by Sitewide Content team. We chose to build a widget rather than a react application because most of the page is static content, and it is easier for the drupal team to update static content when it lives in their CMS. The only dynamic part of the page lives in the widget. 

The widget code lives in the **src/applications/static-pages/download-1095b/**  directory on the feature branch. 

## Relevant Links


[error states PR (merged)](https://github.com/department-of-veterans-affairs/vets-website/pull/20693/)

[POC PR (merged)](https://github.com/department-of-veterans-affairs/vets-website/pull/20619/)

[POC front end feature branch](https://github.com/department-of-veterans-affairs/vets-website/tree/feature/37015-poc-1095b-page)

[Sitewide content issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38448)

[Error states issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/39111)

[Design mockups for landing page (sort by date to get most recent ones) ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/1095b-tax-form/design/wireframes)


[VA React widget documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/Creating-a-new-React-widget.1849425948.html)

## Updates

For logged in users, widget now calls */available_forms* endpoint first in order to retrieve the last updated date of the veterans form as well as the most recent available tax year. If no tax year is returned, the widget displays the **notFoundComponent**. If the tax year is returned then the widget displays the last updated date and the PDF download button. If the user clicks the button and the */form1095_bs/download/${year}* endpoint fails to return a PDF, the **errorComponent** will display. This is handled with if statements as well as useState to track whether and error occurred and what type of error it is ("not found", "download error").  


## Testing

**Testing has been performed manually with test users that have necessary permissions.**  In order to conduct your own manual test, please use [vets.gov.user+10](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/test_users.csv) and make sure to visit the user profile page and click “verify user” or else you will get a 403 forbidden error from the server when attempting to download. You will also need to add data with an ICN number that matches the user in the rails console. Url to see widget in vets-website is **/health-care/download-1095b/**. 

Final testing for accessibility will be conducted in Drupal by sitewide-content. 

## Potential Issues

1. There is a flashing which occurs during testing between the unauth and auth state of the widget. There is a chance that this will be fixed when the widget is embedded into the Drupal page. However, in the code the **loggedIn** variable only returns true or false. When it returns false, it could mean the data has not been received yet OR that the user is in fact not logged in. This is why the flashing occurs.
2. The PDF is technically not immediately downloaded by the user because it opens a preview of the PDF in a new tab. However it is relatively easy to change, because the */form1095_bs/download/${year}* endpoint will download the PDF by default, so it basically just requires removal of some code. 



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
