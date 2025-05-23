# BTSSS Silent failures

Name(s): John Woolschlager, Philip DeFraties

Date: 2025-05-23

Last modified: 2025-05-23

## Summary

Between May 20–23, 2025, a code deployment intended to improve BTSSS submissions introduced a bug that caused silent failures—veterans were not notified when errors occurred. The issue went undetected initially, leading to veterans not being sent a notification that their travel claim had not been submitted successfully until it was identified, the feature was disabled, and a fix was deployed. Logs were gathered and analyized to produce a list of phone numbers of those veterans who were impacted by the silent failures. Monitoring confirmed the problem was resolved and error rates returned to normal.

## Impact

There were roughly 260 veterans impacted by the silent failure over the three days.

## Incident Timeline: BTSSS Silent Failures

### **Tuesday, May 20th, 2025**
- **3:00 PM ET:**  
  Code deployed to production to improve timeout handling for BTSSS submissions as part of the check-in experience.  
  - A bug prevented notifications from being sent to veterans when the BTSSS API returned an error, resulting in silent failures.  
  - No monitors or logs indicated issues; errors appeared normal.  
  - **Key oversight:** Successes and failures did not match the number of text messages sent.

---

### **Wednesday, May 21st, 2025**
- **10:30 AM ET:**  
  An alert triggered due to higher-than-normal error rates.  
  - The issue recovered quickly, so no further action was taken at the time.

- **12:30 PM ET:**  
  Further review of the recent deployment revealed discrepancies: successes and failures did not align with the text messages.  
  - A call was initiated to debug the issue, and the bug was identified.

- **2:40 PM ET:**  
  The feature was turned off to prevent further silent failures.

---

### **Thursday, May 22nd, 2025**
- **8:10 AM ET:**  
  Believing the fix had been deployed, the feature was turned back on.  
  - This led to another batch of silent failures.

- **11:34 AM ET:**
- **Feature turned off again** until the fix was confirmed as deployed.  

- **3:00 PM ET:**  
  Fix successfully deployed to production and verfied on Atlas.  

- **3:40 PM ET:**  
  Feature turned back on and logs monitored.  
  - Observed a high percentage (20%) of `appointment not found` errors, but the correct number of text messages were sent.  
  - Decision made to leave the feature on while monitoring error levels, expecting them to normalize.

---

### **Friday, May 23rd, 2025**
- Logs monitored throughout the day.  
- Error rates returned to normal.

## Root Cause(s)

A bug in travePaySubmissionJob

## Action Items

- [x] Collect phone numbers of those veterans who were impacted and deliver to PO(Kay)
- [ ] Create a monitor for when text messages sent are not equal to the number of succeses and errors
- [ ] Use [Atlas](https://www.va.gov/atlas/apps/vets-api/deploy_status) to monitor deployments before toggling features(don't make assumptions about deployment timing John)
- [ ] Make imporovements to existing logs(include UUIDs etc.) to help identify impacted veterans more easily without exposing PII
- [ ] Improve code to help with readability(more comments, less nesting)

