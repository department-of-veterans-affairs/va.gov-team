<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.277 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β33
* Tue Mar 22 2022 13:24:18 GMT-0700 (PDT)
* Source doc: 1095 Tech Onboarding
----->



## Front End Architecture

Last Updated: March 22, 2022

**Overview**

The front end is built up of two parts, a React widget which lives in vets-website repo (see links below) that was built by the CEDAR 1095B  team, and the landing page in Drupal CMS where the React widget will be embedded, which is developed by Sitewide Content team. We chose to build a widget rather than a react application because most of the page is static content, and it is easier for the drupal team to update static content when it lives in their CMS. The only dynamic part of the page lives in the widget. 

The widget code lives in the [src/applications/static-pages/download-1095b/](https://github.com/department-of-veterans-affairs/vets-website/pull/20619/files#diff-93df7cae92f639041a13a8138f84badc559bd6333d930bef5c987cf0ff174b2f)  directory on the feature branch. Currently it is awaiting code review (see relevant links) 

**Relevant links **

The front end feature branch lives here: [https://github.com/department-of-veterans-affairs/vets-website/tree/feature/37015-poc-1095b-page](https://github.com/department-of-veterans-affairs/vets-website/tree/feature/37015-poc-1095b-page)

PR open pending review from the VA here

[https://github.com/department-of-veterans-affairs/vets-website/pull/20619/](https://github.com/department-of-veterans-affairs/vets-website/pull/20619/)

Sitewide content issue here

[https://github.com/department-of-veterans-affairs/va.gov-team/issues/38448](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38448)

Design mockups for landing page (sort by date to get most recent ones) 

[https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/1095b-tax-form/design/wireframes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/1095b-tax-form/design/wireframes)

VA React widget documentation 

[https://depo-platform-documentation.scrollhelp.site/developer-docs/Creating-a-new-React-widget.1849425948.html](https://depo-platform-documentation.scrollhelp.site/developer-docs/Creating-a-new-React-widget.1849425948.html)

**Unfinished Elements /Issues /Considerations **



1. There is a flashing which occurs during testing between the unauth and auth state of the widget. There is a chance that this will be fixed when the widget is embedded into the Drupal page. However, in the code the **loggedIn** variable returns false which could mean the data has not been received yet OR that the user is in fact not logged in. This is why the flashing occurs.
2. There are **two endpoints** on the backend that the widget will need to call. Currently it only calls the one which grabs the data and generates the PDF. However it will be updated shortly to also display the “last updated on” date for that veterans form. It will also include the available tax years. **Currently we are only fetching the current tax year** so the front end code will simply grab the most recent year available from that endpoint and then use it to make the API call for downloading the form.
3.  There are** two error states** which can occur - data for that veteran for that year does not exist, or  a technical glitch that causes a failure to download the form. The first error state can be distinguished using the new endpoint mentioned in #2 even before an attempt to download the form occurs. The second error will display if a non 200 status is returned from the server. **Design has created mockups for displaying these errors which are in review process.**
4. **Testing has been performed manually with test users that have necessary permissions.** Cypress tests need to be added to test download ability of form and correct display for auth/unauth. In order to conduct your own manual test, please use [vets.gov.user+10](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/test_users.csv) and make sure to visit the user profile page and click “verify user” or else you will get a 403 forbidden error from the server when attempting to download. You will also need to add data with an ICN number that matches the user in the rails console. More information in the backend architecture section (pending).
