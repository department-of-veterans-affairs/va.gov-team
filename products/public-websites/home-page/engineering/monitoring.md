# VA.gov homepage monitoring

## [Synthetics] [PLATFORM] VA.gov Homepage Load
https://vagov.ddog-gov.com/monitors/153110
https://vagov.ddog-gov.com/synthetics/details/4p6-pqi-azx?from_ts=1698262600630&to_ts=1698277000630&live=true

What is: 
* Synthetic test that verifies VA.gov homepage loads. Errors if not.

## VA.gov homepage load is failing
https://vagov.ddog-gov.com/monitors/169094

**What is:** 
* Synthetic test that is driven by the [homepage synthetic monitor](https://vagov.ddog-gov.com/synthetics/details/xgc-4uh-q26?from_ts=1699281571211&to_ts=1699285171211&live=true). This monitor loads the homepage, and does some clicking around on various page elements to ensure that the Homepage is entirely loaded and functional.

**What it means when it fails:**
At least one component on the homepage has not fully loaded.

**How to triage**
* Click the failure case link
* In the Monitor result that loads, the "Message" will say "The VA.gov [homepage synthetic monitor] (link) is experiencing failures over the threshold." Click that link.
* The VA.gov multi-functional browser test synthetic test page will load.
* Check the "History" color bar. If it's all green, it is probably showing activity from the last hour and if the monitor has recovered, it will be all green.
  * In that case, update the Time picker in the top toolbar to look at a larger time frame (last 4 hours or last 24 hours).
  * The updated color bar should show a red alert area. Hover in the color bar, and use the + cursor to click/drag and select the red area. This will narrow the time frame to the actual alert fail time frame.
* Once the alert fail timeframe is selected, scroll down to the Sample Runs area, and select "Failed Run".
* In the Event list, Datadog will show each case the Synthetic monitor is testing, and which one failed. For the failure case, there will be a description and a screenshot (if available) to explain what happened.

**How to mitigate**
If the failure is due to a single homepage element failing to load, that's the area to investigate. (This is the typical failure case as of 11/16/23.) 
If the failure is multiple items failing to load, this may be a more systemic issue that needs to raise awareness to Public Websites PM / DM / PO, and potentially to Platform depending on what's failing.
