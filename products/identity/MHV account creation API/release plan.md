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
