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
