# VA.gov homepage monitoring

## [Synthetics] [PLATFORM] VA.gov Homepage Load
Monitor: https://vagov.ddog-gov.com/monitors/153110 <br/>
Synthetic test: https://vagov.ddog-gov.com/synthetics/details/4p6-pqi-azx

**What is:** 
* Synthetic test that verifies VA.gov homepage loads, driven by the [[PLATFORM] VA.gov Homepage Load synthetic test](https://vagov.ddog-gov.com/synthetics/details/4p6-pqi-azx), which tests https://www.va.gov from 3 locations on 9 devices every 30 minutes.

**What it means when it fails**

**How to triage**
* Click the failure case link
* Check the "History" color bar. It is probably showing activity from the last hour and if the monitor has recovered, it will be all green.
  * In that case, update the Time picker in the top toolbar to look at a larger time frame (last 4 hours or last 24 hours, etc).
  * The updated color bar should show a red alert area. Hover in the color bar, and use the + cursor to click/drag and select the red area. This will narrow the time frame to the actual alert fail time frame.
* Once the alert fail timeframe is selected, scroll down to the Events section, and check if the Alerts are displayed that relate to failures. e.g. 
![Screenshot 2023-11-16 at 10 00 07 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/85581471/17b8b8b9-db5a-4ee8-bdba-e1f4d80b266c)
* Click the Red bar alerts, and in the panel that opens
  * Click [Related logs]
  * In logs window that opens, left sidebar, Status: only select Error and Warn (and Emergency, Debug as needed) to see the failure logs
* Review the failure logs, and report any issues to the Platform team as needed.

If no Events ALerts:
* In the Monitor result that loads, Properties area will show a link: SYNTHETIC TEST: Name: [[PLATFORM] VA.gov Homepage Load] (link). Click that link.
* The [PLATFORM] VA.gov Homepage Load synthetic test page will load.
* Sample Runs area, and select "Failed Run".
* In the Event list, see if any failed Events are reported.



## VA.gov homepage load is failing
https://vagov.ddog-gov.com/monitors/169094

**What is:** 
* Synthetic test that is driven by the [VA.gov homepage functional browser test](https://vagov.ddog-gov.com/synthetics/details/gsg-zui-hg8). This monitor loads the homepage, and does some clicking around on various page elements to ensure that the Homepage is entirely loaded and functional.

**What it means when it fails:**
At least one component on the homepage has not fully loaded.

**How to triage**
* Click the failure case link
* In the Monitor result that loads, the "Message" will say "The [VA.gov homepage functional browser test] (link) is experiencing failures over the threshold." Click that link.
* The synthetic test page will load.
* Check the "History" color bar. It is probably showing activity from the last hour and if the monitor has recovered, it will be all green.
  * In that case, update the Time picker in the top toolbar to look at a larger time frame (last 4 hours or last 24 hours).
  * The updated color bar should show a red alert area. Hover in the color bar, and use the + cursor to click/drag and select the red area. This will narrow the time frame to the actual alert fail time frame.
* Once the alert fail timeframe is selected, scroll down to the Sample Runs area, and select "Failed Run".
* In the Event list, Datadog will show each case the Synthetic monitor is testing, and which one failed. For the failure case, there will be a description and a screenshot (if available) to explain what happened.

Example screenshot: 
![Screenshot 2023-11-16 at 9 46 43 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/85581471/2d066429-06c9-4bc7-accc-2193a80b8ede)


**How to mitigate**
If the failure is due to a single homepage element failing to load, that's the area to investigate. (This is the typical failure case as of 11/16/23.) 

If the failure is multiple items failing to load, this may be a more systemic issue that needs to raise awareness to Public Websites PM / DM / PO, and potentially to Platform depending on what's failing.

## Homepage email signup GovDelivery call is failing
https://vagov.ddog-gov.com/synthetics/details/w3q-ekr-wkg

**What this is:**
A synthetic HTTP test (POST) against the GovDelivery endpoint used for the email signup at the bottom of the homepage.

Currently, the source code for the form lives in content-build: https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/includes/email-update-signup.drupal.liquid#L6-L38

**What it means when it fails:**
The email signup form should send the user to the [GovDelivery page](https://public.govdelivery.com/accounts/USVACHOOSE/subscribers/qualify) with the user-provided email prefilled. If the POST call fails, the user might remain on the VA homepage, or they might be directed to a dead GovDelivery page.

This synthetic does not test the form in the browser; it calls the GovDelivery URL directly. It is crucial to check the behavior in the browser to determine the Veteran experience caused by the failure.

- Go to VA.gov -> "Sign up to get the latest VA updates")
- Enter an email address, then select "Sign up"
- Note: does the page successfully redirect to GovDelivery with the email address prefilled, or does it stay on the homepage and show an error?

If the email signup form in the browser is working as expected but the monitor continues to fail, the monitor may need adjustment.

**How to triage**
* In the Monitor result that posts in Slack, the "Message" will say "The [Homepage Email Signup GovDelivery POST] (link) is experiencing failures over the threshold." Click that link.
* The synthetic test page will load.
* Check the "History" color bar. It is probably showing activity from the last hour and if the monitor has recovered, it will be all green.
  * In that case, update the Time picker in the top toolbar to look at a larger time frame (last 4 hours or last 24 hours).
  * The updated color bar should show a red alert area. Hover in the color bar, and use the + cursor to click/drag and select the red area. This will narrow the time frame to the actual alert fail time frame.
* Once the alert fail timeframe is selected, scroll down to the Sample Runs area, and select "Failed Run".
* In the Event list, Datadog will show each case the Synthetic monitor is testing, and which one failed. For the failure case, there will be a description and a screenshot (if available) to explain what happened.

**How to mitigate**
The email form's GovDelivery call does not go through vets-api and thus should not hit the gateway or be subject to VA downtime or other infrastructure issues.

[The synthetic](https://vagov.ddog-gov.com/synthetics/details/w3q-ekr-wkg) hits the URL directly via HTTP request and does not interact with the form in the browser. Failure of the synthetic is caused most likely by misconfiguration in the monitor or an issue with GovDelivery.

If the monitor appears to be setup correctly, search Slack to see if other GovDelivery issues have been reported. There are other applications within the VA ecosystem that interact with GovDelivery through vets-api and may also be experiencing issues.

If a root cause still cannot be determined, open a Platform support ticket (#vfs-platform-support in Slack) for assistance in contacting GovDelivery and further investigation.
