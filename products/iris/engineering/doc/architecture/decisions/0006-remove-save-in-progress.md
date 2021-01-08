# 6. Remove Save in Progress

Date: 2021-01-08

## Status

Accepted

## Context

From the documentation(https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/save-in-progress), Forms on VA.gov support the ability to save them while in progress to a user's account and resume them later. Enabling Save in Progress requires

- Configuring naming and messaging options in the form config.
- Making the Save In Progress form retrievable on the user profile page.
- Adding links to the Save In Progress on static pages.

By default, we had enabled the Save in Progress feature initially, and here is the decision to disable it. 

For a Contact Us form with a user burden of 10m or less, we do not anticipate users needing to save their work in progress and return to the form at a later point in time. Given the Contact Us form is different in nature to the other benefits eligibility forms, we would like to disable 'Save In progress' feature for the Contact Us form.


## Decision

Initially, we had implemented and enabled the Save in Progress feature. This decision overrides and disable the feature.

## Consequences

1. User will lose all of the Contact Us form draft when their logged in session expires. 
2. As user makes changes, they do not see "your progress has been saved message" on the bottom of the page, and in-progress form does not get saved in database.
3. A signed in user will lose all data if they navigate away from the form even if very briefly.
4. A non signed in user will not see 'Sign in to save your progress' on the introduction page of the application

Relevant links:
- [Spike](https://github.com/department-of-veterans-affairs/orchid/issues/255)
- [Story](https://github.com/department-of-veterans-affairs/orchid/issues/277)
- [Form library documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/save-in-progress)
