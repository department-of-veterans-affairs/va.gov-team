# BTSSS Silent failures

Name(s): John Woolschlager, Philip DeFraties

Date: 2025-05-23

Last modified: 2025-05-23

## Summary

On Tuesday May 20th at around 3:00PM ET code was deployed to prod to improve upon how we handle timeouts for the BTSSS submission as part of the check in experience. There was a bug that prevented notifcations from going to to veterans who submitted a travel claim and BTSSS api returned an error, resulting in a silent failures. There were no monitors that went off and the logs looked good no uptick in errors or monitors going off for silent failures. **We didn't notice that the Successes and failures didn't add up to the text messages that were sent out.**

On Wednesday the 21st at 10:30am ET an alert went off for higher than normal error rates. It recovered quickly so we didn't look into it further until I thought to check up on the recent deployment again at around 12:30PM ET that day. It was then that we noticed that the successes and failures didn't add up to the text messages we got on a call and started to debug and found the error pretty quickly. I shut the feature off at 2:40PM ET and we worked on getting a fix deployed.

The next day Thursday the 22nd, thinking that the fix was deployed, I turned the feature back on and this resulted in another batch of silent failures. I shut the feature off and waited for the code to be deployed. It was deployed at around 3:00PM ET and I turned the feature back on at 3:40PM ET and monitored the logs. There was a high percentage(20%) `appointment not found` errors but the correct number of text messages were showing up so we left the feature on hoping the the level of appointment not found errors would go back to normal.

Friday May 23rd we monitored the logs and everything looked good. Error rates are normal.

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

- [ ] Collect phone numbers of those veterans who were impacted and deliver to PO(Kay)
- [ ] Create a monitor for when text messages sent are not equal to the number of succeses and errors
- [ ] Use [Atlas](https://www.va.gov/atlas/apps/vets-api/deploy_status) to monitor deployments before toggling features(don't make assumptions about deployment timing John)


## Appendix
