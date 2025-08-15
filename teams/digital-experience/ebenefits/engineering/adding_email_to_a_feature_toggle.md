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
| staging | https://staging-api.va.gov/flipper/features |
| localhost | http://localhost:3000/flipper/features |

Once you go to the URL you need you should see a list of the available feature toggles for that environment. Search for the feature toggle you need to add an email address for. Once you find it you should see that the name of the feature toggle is a link, this link will take you to the settings for that feature toggle on that anvironment. ** If the name of the feature toggle is not a link that means you are not logged into that environment with an approved account. Reference the section above on "Make sure you have the ability to add emails" **

3. Once you go to the settings for the feature toggle you need to add an email on you will see a few areas where you can enable the feature toggle based on different criteria; namely enable it for everyone, enable it for a percentage of people, or enable it for specific "logged in users". The area for enabling the feature for specific "logged in users" is what you want, this is where you will add the email address for your participant.
4. Type the email address for the participant into the text box for "logged in users" and click "enable user". That should be all you need to do, the user should now be added.




