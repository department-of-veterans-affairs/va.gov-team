# Save in Progress

### Communication Channels
- Github Label: Save in progress
- Keywords: prefill, sip, save in progress

### Points of Contact
- DSVA Product Owner: Leah Bannon, Patrick Bateman
- Ad Hoc Product Manager: Ryan Luu, Brian Gryth
- Engineering POCs:
  - Frontend: Jeff Balboni
  - Backend: Alastair Dawson

### Narrative

Veterans have a difficult time filling out forms in one session and as a result will lose the information they've entered if they navigate to another page or can't fill out the form in one setting. In addition,

- Veterans have to spend time filling out form fields that Vets/VA already has the information for; as a result users are dropping out of forms before submitting them because of the unnecessary cognitive burden.
- All VA Forms have an OMB respondent burden associated with them. This respondent burden is really an estimated timeframe of how long it takes to fill the form out itself. It does not take into account reading about eligibility, entitlement, nor allow for leaving the form to gather more information and coming back. It is simply how long it takes to fill it out on paper. 
- The data required for a form can vary greatly, from basic information about yourself to specific financial information like expenses you've had over the past year. There are times where you are fully prepared to fill the form out but often it may require some further research or looking for that receipt you got from your Doctor 3 months ago. 
- Currently we only allow for users to pass through the form, collect their information, and have them submit. If they wanted to leave and come back, they would have to leave the screen open on that page (not be logged out) and then come back with their newly found information. This is something that cannot be expected to happen for the average person especially those that use libraries or other public computers. 
- Electronic forms often break out data collection over a number of pages. While a better flow and better experience for filling out forms it can also increase the time it takes to complete as well as include other tasks such as finding extra documentation to include with your submission. 

In order to ensure users are able to start a form, leave and come back if they need to, it is important (importance increases as the form length also increases) that we allow for our users to save their form in progress and come back later to finish. 

#### Current Status

All forms built on VA.gov make use of save in progress functionality. It's built into the VA Forms System library that's used across VA.gov. The core functionality is in maintenance, without any major new features planned.

##### Current features

- Forms are automatically saved for logged users after every data change
- Users can click a link to save and finish the form later at any time
- In progress forms are visible for the user dashboard, as well as certain content pages that have a saved application widget
- Devs have the ability to write migrations when questions or validations change in order to update currently in progress forms
- Forms are deleted from the list of in progress forms after submission
- Attachments for in progress forms are saved to S3 and guid is included in the actual saved form data

### How to Access / Test

Any LOA1 user can save their form in progress, however, the way to access and test this feature is dependent on the form it is being used in. See documentation for specific forms for testing prefill on that form.

### List of error codes and messages

There are a few potential error cases:

- Server error when saving a form
- Connection error when saving a form
- Saving or requesting a form with expired/missing credentials

Depending on where those errors happen, they may have different messages.

See the [error messages doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/sip-prefill/error-messages.md) for screenshots of the different errors.

### Monitoring/SLO information

Requests form data have the default error alerting on our system, which triggers at an error rate of over 5%.

You can view current metrics from the [Vets-api Grafana dasbhoard](http://grafana.vetsgov-internal/dashboard/db/vets-api?orgId=1). Save in progress requests are at the `/v0/in_progress_forms` endpoints displayed in Grafana.

### Internal VA system API calls/dependencies

Save in progress does not depend on any internal VA systems. Prefill is connected to many internal systems, see README for details.
