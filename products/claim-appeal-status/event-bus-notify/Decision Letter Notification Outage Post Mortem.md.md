# **Post-Mortem: Decision Letter Email Notification Outage**

## **Incident Summary**

**Date:** August 13-14, 2025  
**Duration:** \~24 hours (August 13, 1:00 PM ET \- August 14, 1:00 PM ET)  
**Impact:** Approximately 10,000 decision letter email notifications failed to send  
**Detection:** Discovered around 8 AM ET on August 14 when an engineer noticed the dashboard showed no emails sent

## **What Happened**

A breaking change to the contract between Event Bus Gateway and vets-api caused all decision letter email notifications to fail. Vets-api began requiring a new `ep_code` field that the production Event Bus Gateway wasn't yet sending because the Event Bus Gateway requires a manual deployment to production, which was not realized until after the incident occurred. The introduction of the ep\_code field was intended to be able to feature flag new ep\_codes in vets-api so that pension claims and additional letter types in the future could be gradually rolled out and tested before being fully enabled for all users.

## **Root Cause**

**Primary Cause:** Deployment timing mismatch between two dependent services:

* There was an assumption that the Event Bus Gateway repository had the same deployment setup as vets-api. Both were successfully merged and tested in staging, but vets-api deployed to production the following day automatically, while eventbus-gateway did not because it requires a manual deployment.   
* VETS API began rejecting requests missing the new required `ep_code` field

**Contributing Factors:**

1. **Oversight:** The Event Bus Gateway manual deployment requirement was overlooked  
2. **No backward compatibility:** The VETS API change didn't support both old and new payload formats  
3. **Tight coupling:** Feature flags in VETS API created deployment dependencies between services  
4. **No alerting:** While there was a datadog dashboard, but no automated alerting to detect the failure 

## **Resolution**

* **August 14, 8:13 AM ET:** Issue discovered  
* **August 14, 11:58 AM ET:** Revert PR merged to VETS API  
* **August 14, 1:16 PM ET:** Service restored after revert deployed to production

## **Key Mitigations Going Forward**

1. **Monitoring & Alerting:** Implement Datadog monitors with Slack alerts for email sending failures  
2. **Redesign Feature Flagging:** Move feature flag logic from VETS API to Event Bus Gateway to:  
   * Eliminate cross-service deployment dependencies  
   * Leverage Gateway's manual deployment for safer staging tests  
   * Keep decision logic in one place  
3. Better coordination moving forward to validate assumptions around deployments and releases 

