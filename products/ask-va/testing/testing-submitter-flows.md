# Testing Flows

This document serves as a general, step-by-step method for testing the Ask VA on VA.gov application. These same steps should be used for manual testing and for writing our automated tests.

## General Test Steps

For each flow to be tested, use the following steps. Be sure to include testing for authenticated and unauthenticated. Note that there's no Dashboard for unauthenticated users.

1. Fill out questionnaire from VA.gov
2. Ensure inquiry exists in VA.gov Dashboard
3. Ensure inquiry was routed properly
	1. using CRM Agent UI for manual testing
	2. using the CurrentQueue inquiry metadata for automated testing
4. Reply to inquiry from CRM Agent UI
5. Ensure reply exists in VA.gov Dashboard
6. Reply to agent in VA.gov Dashboard
7. Ensure reply exists in CRM Agent UI
8. Resolve inquiry in CRM Agent UI
9. Ensure status is updated in VA.gov Dashboard

### Alternate Flow: Rerouted Inquiry

Before step 4 in the General Test Steps do the following.

1. Reroute inquiry to another queue in CRM Agent UI
2. Ensure Query was routed properly
	1. using CRM Agent UI for manual testing
	2. using the CurrentQueue inquiry metadata for automated testing

### Alternate Flow: Inquiry Originated from CRM

A core project goals is to have the VA.gov and CRM veteran-facing UIs generate inquiries in such a way that the CRM backend need not know from where the inquiry originated.

Instead of step 1 in the General Test Steps, do the following.

1. Fill out questionnaire from CRM Submitter UI

### Alternate Flow: Email Notifications

Whenever a status change or reply occurs, verify that an email was sent (if the user has email notifications enabled). If so configured, an email should be generated for:

* Step 1 - The Inquiry is initially submitted
* Step 4 - A reply to the inquiry is sent by the CRM Agent
* Step 6(?) - A reply to the inquiry is sent by the Submitter
* Step 8 - The inquiry is resolved

## Announcements Test Steps

Ensure that any current announcements are displayed on the following pages.

1. Landing page
2. Form pages
3. Dashboard Page

Ensure that any current announcement is NOT displayed on the printed Inquiry Details view.

## Print Inquiry Details Test Steps

Ensure that the Inquiry Details view prints properly. This excludes the header and footer of the website, but includes the following:

1. Inquiry Details (incl. Status, Date, Inquiry text, ...)
2. Correspondence

## Test Automation Goals

The tests listed in this document should be automated using the Cypress browser testing tools. The following bullet points are the driving goals of our manual and automated testing.

* Try to test each manual flow only once
* Catch regressions with automated tests
* Run full test suite (120-is flows) on a schedule (chron job in GitHub Actions)
* Run subset of tests (likely incl. Education) on every PR

