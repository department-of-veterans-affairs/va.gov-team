# 527EZ Application for Pension Benefits

[Staging Link]([https://staging.va.gov/burials-and-memorials/application/530/introduction](https://staging.va.gov/pension/application/527EZ/introduction))

## All Login Information
| Email                         | Password | 
| ----------------------------- | ---------- |
| vets.gov.user+228@gmail.com   | 200SsNrLgPv5 | 
| vets.gov.user+80@gmail.com    |	447SsNrLgPv5 | 

## Staging Users 228 & 80

### Test Case
The pension 527EZ digital form is outdated and cannot be processed by downstream systems. The digital form will be temporarily deactivated, and a new form summary page will be released that allows users with in-progress claims to review their claim information after the form is deactivated.

### Steps to Reproduce
1. User should receive an alert, "You don’t have any saved online pension forms." on landing on the [introduction page](https://staging.va.gov/pension/application/527EZ/introduction) when not authenticated.
2. User should receive an alert, "You don’t have any saved online pension forms." on landing on the [introduction page](https://staging.va.gov/pension/application/527EZ/introduction) when authenticated but has no saved data (User 80).
3. User should receive an alert, "This online form isn’t working right now" on landing on the [introduction page](https://staging.va.gov/pension/application/527EZ/introduction) when authenticated and does has saved data. They will also see any of the captured data displayed accordingly. Sections will not display data that hasn't been captured.

### Intended Outcomes (if applicable)
1. Provide a reference to a Veterans saved data (if any) and guidance to submit a claim by mail
