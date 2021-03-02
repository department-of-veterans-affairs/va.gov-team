# 3. Robotic Process Automation with Oracle IRIS

Date: 2020-12-02

## Status

Postponed/Deprioritized

## Context

The issue motivating this decision, and any context that influences or constrains the decision. For a phased roll out, we want to integrate the new form with the existing IRIS backend and the new one. Oracle tech support team has rejected the idea of exposing an API that we can integrate with, therefore, when the user submits the new form on va.gov, we need either to: 
1. Replicate the network calls made by the existing IRIS form 
2. Use RPA to automatically fill out the existing IRIS form connected to Oracle  
3. Send users directly to existing IRIS form
4. New IRIS form will not be connected to Oracle at all 

For option 1, we inspected the network calls and the form sends certain tokens that we do not have access to. 

For option 2, we played several spikes and were able to have a working demo using Selenium and Watir that took the form data submitted with the new IRIS form and entered the same values in the existing IRIS form and returned a confirmation number. 

- Branch: `iris-78-form-automation` in `vets-api`
- Slack thread: https://dsva.slack.com/archives/CBU0KDSB1/p1607974337261000
- Epic on Zenhub: https://github.com/department-of-veterans-affairs/orchid/issues/103 

## Decision

We have decided to deprioritize RPA work and come back to it if time permits. There is still quite a bit of work that needs to be done, for example, testing performance impact on va.gov, error handling, handling of discrepancies between new and existing IRIS form.

## Consequences

Without further work, we would not be able to have a phased roll out that includes the Oracle system. This is only relevant during the go-live period since this would no longer be needed once the Oracle service is deprecated and we would have to plan carefully to assure the release goes as planned since there isn't an obvious backup. 
