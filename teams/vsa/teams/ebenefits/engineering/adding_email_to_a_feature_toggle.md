# Background
When we set up feature toggles for UAT we generally start out by adding email addresses one by one to the feature toggle for each participant. This document tell you how to add an email to a feature toggle for a participant.


## Make sure you have the ability to add emails

In order to add email addresses to a feature toggle you need to be added to [this file](https://github.com/department-of-veterans-affairs/vets-api/blob/c6d10bc0a914936c8c179517a79b74ef016dff9e/config/settings.yml#L689) in the `vets-api` repo. If you are not currently on the list in this file you can be added to the list by either a front end or back end engineer.

## Adding an email

To add an email to a feature toggle you need to know the name of the feature toggle. This is usually not hard to guess as engineers that add the feature toggles usually name them according to what they are used for so if you do not know the name of the feature toggle you might be able to simple search for it in the list indicated below.

To add an email follow these steps - 

1. Log into VA.gov in environment you want to add the email on. For instance if you want to add an email to a feature toggle on production you will simply log into VA.gov. If you alternatively wanted to add an email to a feature toggle on staging you would log into staging.va.gov.
2. Once you are logged in you need to go to a specific URL to view the available featuer toggles in that environment. Those URLs are-
   
|environment| feature toggle URL |
|-----------|--------------------|
| production | https://api.va.gov/flipper/features |
