# Rollout Monitoring for **Secure Messaging – Start a New Message** on VA.gov
First 30 days of feedback, November 10th - December 8th, 2025

## Resources
- **Release plan:** [Update Start a New Message Flow for Oracle Health](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/Release%20Plan-OHSMFlow-MVP.md)
- **Datadog dashboards:** [MHV Secure Messaging Metrics](https://vagov.ddog-gov.com/dashboard/39q-93p-ftw/mhv-secure-messaging-metrics) | [Additional section](https://vagov.ddog-gov.com/dashboard/39q-93p-ftw/mhv-secure-messaging-metrics?tile_focus=8373464859678247)  
- **CSAT data:** via VSignals / Medallia pulls, filtered to Secure Messaging URLs (DOMO if needed).
- **GA4 Exploration (SM):** [SM_New Message Flow (post launch)](https://analytics.google.com/analytics/web/?authuser=3#/analysis/a50123418p419143770/edit/7n8e1KjwTWi4yp506UC0DQ)  
## URLS

### New Flow
- /my-health/secure-messages/new-message/recent
- /my-health/secure-messages/new-message/select-care-team/
- /my-health/secure-messages/new-message/start-message

### Old Flow
- /my-health/secure-messages/new-message

## Summary of findings (placeholder)

- **Overall completion rate:** TBD% (new flow) vs TBD% (base)  
- **CSAT trend:** TBD (no change / increase / decrease)  
- **Error rates:** TBD% (new flow) vs TBD% (base); types observed: TBD  
- **Messages submitted successfully:** TBD total | TBD% success rate  
- **Engagement metrics:**  
  - Drop-off rates: TBD% at `/select-care-teams`, TBD% at submission step  
  - Unique users reaching `/select-care-teams`: TBD  
  - Back breadcrumb usage: TBD% of new-flow users  
  - Radio button interactions: TBD (captured via GA4, confirm coverage)  
- **Notable qualitative feedback:**  
  - Positive themes: TBD  
  - Pain points: TBD  
  - Charts here (if applicable)
---

## 11/10/25 – **5% of users**
0% error rates

<img width="913" height="454" alt="Screenshot 2025-11-21 at 12 42 40 PM" src="https://github.com/user-attachments/assets/438e1720-6ada-4806-af03-dac385993b99" />

---

## 11/10/25 – **25% of users**

### Datadog
70% of the time users choose a "recent care team" over "a different care team".

Day 1:
| Metric Name | Value |
|---|---|
| “Select different care team” click rate | 621 |
| Select care team option on "recents" page | 1.57K |
| Click on care system radio button | 376 |
| Click on "can't find your care team" | 304 |
| Click on "Update your contact list" | 122 |
<img width="748" height="748" alt="Screenshot 2025-11-21 at 12 43 12 PM" src="https://github.com/user-attachments/assets/03a49782-6b1e-498c-865f-6f03633cf3b6" />


Day 2:
<img width="913" height="736" alt="Screenshot 2025-11-21 at 2 04 32 PM" src="https://github.com/user-attachments/assets/d75b5fab-e306-4ea5-9d51-1c24b63de085" />

### Medallia feedback
- I was trying to respond to [redacted] in Norfolk, NWI/Physical Therapy for resources she asked me to have her order. The secure messenger refuses to let me email her... or anyone other than the Holdrege VA CBOC.”
- “Confused with the new message page, was it a change? Don't trust the change.”

---

## 11/12/25 – **50% of users**

### Datadog
- Messages sent: 5.8K messages sent with the new flow out of 12k total
- Error rates: minimal - "Majority of errors  at ~1% are 403's  coming from expired vets-api token. These requests are automatically retried without any impact on the ultimate result of sending a message."

---

## 11/13/25 – **100% of users**

### Medallia feedback
- Responses: **TBD**  
- CSAT (avg/distribution): **TBD**  
- Task completion: Yes **TBD** / No **TBD** / No response **TBD**  
- Selected quotes:  
  - TBD

User Feedback 11/13 - 11/17:

**Reduced access to providers and past contacts**
- I have two autoimmune diseases… now I cannot find endo and they are hard to get a hold of by phone.
- Most of my doctors and dentist are missing on Send Message.
- I used to get a list of all the Depts at Lake Nona… I cannot communicate with my providers.
- You deleted all of my contact list and gave me just 5 on a list of over twenty I have sent messages to in the past.
  
**Adding or updating contacts not working (single report so far)**
- I selected add contact list… none of the 37 contacts I chose got added.
  
**Search issue (single report so far)**
- I was trying to contact the eye clinic in Columbia MO and it asked to type the first 3 letters of the facility. I typed COL and nothing. I tried every combination I could think of… eye clinic, Harry S Truman, Green Team… NOTHING. There used to be a drop down list.

---

## Final summary (once rollout completes)

| Stage | % Users | Unique Users | Completion Rate | Avg Time | Error Rate | Notes |
|---|---|---|---|---|---|---|
| A | 5% | TBD | TBD | TBD | TBD | TBD |
| B | 25% | TBD | TBD | TBD | TBD | TBD |
| C | 50% | TBD | TBD | TBD | TBD | TBD |
| D | 75% | TBD | TBD | TBD | TBD | TBD |
| E | 100% | TBD | TBD | TBD | TBD | TBD |
