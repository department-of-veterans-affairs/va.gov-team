# Rollout Plan & Timeline for Account Creation API
*This is for backend changes ONLY.

### Pre-Launch Preparation (Turn on flipper = 50% on staging)
**Objective:** Finalize all preparations and ensure readiness for a phased rollout.

- **API Readiness & Testing:**
  - Conduct final reviews of the API documentation, integration, and performance tests.
  - Ensure successful completion of load and stress testing.

- **Infrastructure & Monitoring Setup:**
  - Confirm the setup for the staging and production environments.
  - Set up monitoring tools to track API performance, error rates, and user traffic.

- **Stakeholder Review:**
  - Confirm the phased rollout percentages and schedule.

- **Communication:**
  - Notify internal teams and stakeholders of the rollout plan.
  - Prepare external communications in case of disruptions or updates for users.

---

### Pre-Launch Preparation (Turn on flipper = 100% on staging)
**Objective:** Finalize all preparations and ensure readiness for a phased rollout.

- **API Readiness & Testing:** Conduct final reviews, including load and stress testing.
- **Infrastructure & Monitoring Setup:** Confirm production environments and monitoring tools.
- **Stakeholder Review:** Confirm rollout schedule.
- **Communication:** Notify stakeholders and prepare external communications.

---

### Phase 1 (5% then 50% on PROD - 1 hour each)  
**Date:** November 5, 2024 at 2pm eastern time
**Objective:** Release the API to 10% of the user base for initial testing in a live environment.

- **Rollout to 5% of Users for 1 hour**
  - Enable the Account Creation API for 5% of users.
  - Track performance metrics: response time, account creation rate, error rates.

- **Rollout to 50% of users for 1 hour; turn off after 1 hour**
  - Enable for 50% and monitor key metrics.

- **Monitoring & Logging:** Real-time tracking with alerts for critical issues.
- *Before moving to Phase 2 - Revisit requirements, confirm whether we want to call for all applications or solely VA.gov
- **User Feedback Collection:** Gather initial user feedback, record bugs or usability issues.
- **Fixes & Adjustments:** Analyze data and user feedback for immediate bug fixes.

---

### Phase 2 (20% User Rollout in PROD)
**Objective:** Expand API access to 20% of users based on Phase 1 performance.

- **Rollout to 20% of Users:**
  - Gradually increase access, focusing on scalability and error rates.

- **Monitor Key Performance Metrics:**
  - Continue to track response times, success rates, and error rates.

- **User Support:** Prepare support team for increased queries.
- **Bug Fixing & Optimization:** Address issues and optimize for stability.

---

### Phase 3 (50% User Rollout in PROD)
**Objective:** Increase the API availability to 50% of the user base after monitoring Phase 2 results.

- **Rollout to 50% of Users**
  - Expand access and closely monitor stability.

- **User Feedback Collection:** Continue gathering feedback and prioritize critical bug fixes.
- **Customer Support Engagement:** Prepare for a potential increase in user issues.

---

### Full Rollout (100% of Users)
**Objective:** Complete the final rollout to the entire user base.

- **Rollout to the Remaining Users:** Release the API to the full user base.
- **Post-Rollout Monitoring:** Track overall system health, engagement, and error reports.
- **User Feedback & Continuous Improvements:** Gather and assess final feedback for optimizations.
- **Final Review & Retrospective:** Conduct a post-launch review to finalize any pending fixes.

---

### Key Success Metrics
- **API Uptime:** > 99.9% during rollout.
- **Average Response Time:** < 200ms.
- **Successful Account Creation Rate:** > 95%.
- **Error Rates:** < 1%.
- **User Satisfaction:** Positive feedback from at least 90% of users.

---

### Incident Response Procedures
- **High Latency**
  - **During Business Hours:** Contact Craig Ledbetter or Ryan Mosey via Slack or VA emails.
  - **After Hours:** Contact David (Boomer) Rawlins via cell 

- **Errors**
  - Haritha monitors error logs, but contact Boomer and Haritha if the operations team does not alert on high errors.

- **Off Hours:** Reach out to Boomer 

- **System Status**
  - Michael Borne manages planned outages. **Action:** Contact Michael to be added to the outage notification list.

---

### Contacts
**MHV Account Creation API Team:**
- Michael Borne - MHV Maintenance Contact
- David (Boomer) Rawlins - MHV Delivery Manager
- Craig Ledbetter, Ryan Mosey - MHV SRE
- Haritha Cheruvu, Swathi Alikatti - MHV Engineers

**Identity Team:**
- Joe Niquette - Lead Engineer
- Trevor Bosaw - Lead Backend Engineer
- Lainey Trahan - Product Manager
- OCTO - Tom Black and Samara Strauss


---
---
**NOTES FROM MEETING ON 11.22.2024**
Identity, Sara, Wes, Mark, Allan, Daniel, Robyn (VA)
Account Creation API is currently at 100% in PROD as of 11.22.24

Cartography 
- Owns the landing page on MHV
- Responsible for consistency of user experience
- Need to communicate changes with the other tool teams so they can get onboard with how they change their apps to be responsive to the updates (to maintain consistency)
- Lots of responsibility with downstream impacts

Joe
- Time to start checking your applications and the errors the apps are getting

Questions from Cartogrpahy
- Sara: Cache buster = redis cache that stores user attributes, we are breaking the value (originally from MPI) of that cache with the newly updated value. Next time the user logs in, they will have the updated UUID from the busted cache.
- Sara: Caching error responses from the API for 24 hours. Will the error response be stored for 24 hours? We do no fulfill the MHV response if there was an error - you would have to call the account creation API again
- There are 4 codes that require calling the help desk to get a manual resolution
**- Sara: needs a list of errors that require the user to call the help desk** --- Robyn recommends syncing with Patti and Carnetta
- Daniel - is there documentation that's completed about the endpoint and cache busting calls. Joe -- you should have the documentation needed from what Riley wrote up.

- Next steps:
1. list of errors that require the user to call the help desk --- Robyn recommends syncing with Patti and Carnetta
2. Wes - can we collaborate on a sequence diagram? How might we know when a call is successful v the different error states and what to do for each of these cases.
3. Joe recommends drafting backwards from their apps to MHV account creation api... then Identity can help fill in what identity does
4. Joe will determine how errors are cached or not? When they make a call, will it change the cache?
