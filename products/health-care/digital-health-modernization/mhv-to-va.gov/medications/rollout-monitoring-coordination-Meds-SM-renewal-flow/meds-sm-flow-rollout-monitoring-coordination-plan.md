# Med Renewal → Secure Messaging Flow Rollout Monitoring Coordination Plan

This document supplements the **RX Renewal Flow – MVP Release Plan** and outlines shared documentation updates, monitoring responsibilities, required pre-launch tasks, and post-launch coordination for the renewal workflow that routes Veterans from the Medications tool into Secure Messaging. Because monitoring spans both products, this work will require coordinated collaboration across **Meds engineering**, **SM engineering**, and **Data Analytics (Marcello)** to define and build the Datadog dashboards needed for end-to-end visibility.

---

## 1. Overview of the Meds → SM Renewal Flow

The renewal flow guides Veterans through both Medications and Secure Messaging:

1. Veteran views their medication list in Medications Or their medications details page  
2. Renewal-eligible medications display a link: **“Send a renewal request message”**  
3. Veteran selects the link and modal pops up asking them if they want to continue to messaging  
4. Veteran selects a **care team**  
5. Veteran sees a **prefilled renewal message** in the SM editor  
6. Veteran sends the message
7. Veteran returns to the medications page

Because the journey spans two products, **monitoring, URLs, documentation, and rollout responsibilities should be shared across teams**.

---

## 2. Product Guide Updates (Required Early Task)

Product Guides must be updated early so UX can submit VSP/Contact Center intake requests and configure VSignals/Medallia.

### 2.1 Medications Product Guide Updates
- Description of the renewal link  
- Renewal vs refill eligibility logic  
- Screenshots and link placement  
- Expected journey from Meds → SM
- Modal to continue to SM  
- Known limitations (e.g., no available care team)  
- Integration points with SM  

### 2.2 Secure Messaging Product Guide Updates
- Overview of receiving medication renewal requests  
- Care team selection logic  
- Prefill rules (included/excluded data)  
- Expected flow inside SM  
- Error states and known issues  
- Integration notes with Meds  

---

## 3. Monitoring Responsibilities

### 3.1 UX Monitoring (Medallia / VSignals)
Teams: **Meds UX**, **SM UX**

#### Meds UX Responsibilities
Monitor experience *before* the Veteran enters Secure Messaging:
- Renewal link visibility and accuracy  
- Confusion between renewal vs refill  
- Difficulty initiating the renewal flow  
- Interactiong with the continue modal (Transition issues into SM)  
- Veteran comments indicating unclear or missing renewal options  

#### SM UX Responsibilities
Monitor experience *after* the Veteran enters Secure Messaging:
- Care team selection issues  
- Missing or incorrect prefilled content  
- Drop-offs inside SM  
- Message-send confusion or errors  
- Veteran comments specific to SM  

#### UX Escalation
- UX surfaces relevant qualitative feedback to Product and Engineering when patterns or concerning experiences emerge.  
- UX flags whether the feedback appears related to the Meds portion of the flow or the SM portion.  
- Engineering teams review and determine next steps based on their internal processes.

---

### 3.2 Engineering Monitoring (Datadog + Logging)
Teams: **Meds Engineering**, **SM Engineering**

#### Meds Engineering Responsibilities
- Renewal link rendering  
- Eligibility behavior (renewal vs refill)  
- Errors launching the SM flow
- Modal loading errors
- Incorrect routing into SM  

#### SM Engineering Responsibilities
- Care team API failures  
- Prefill load issues  
- Draft creation failures  
- Message send errors  
- SM backend/API errors  

#### Cross-Team Issue Awareness
- Engineering monitors Datadog logs and system errors in their respective areas.  
- UX flags qualitative issues surfaced through VSignals/Medallia that relate to the renewal flow.  
- UX notifies Product and the corresponding engineering team (Meds or SM) when qualitative or logged issues appear connected to this flow.  
- Engineering owns evaluation and determines appropriate next steps per their standard processes.

---

## 4. Pre-Launch Tasks

### 4.1 Collect URLs for VSignals / Medallia Configuration

To enable Medallia feedback collection, UX requires **all new URLs**.  
**Updated Product Guides must be attached** to the VSP/Contact Center intake request.

#### Needed from Meds Engineering
- Renewal link destination URLs  
- Any new/updated Medications pages in the flow  

#### Needed from SM Engineering
- SM interstitial URL  
- Care team selection URL  
- Prefilled message URL  
- Any new SM endpoints  

**Once URLs are provided:**
- [ ] Submit VSignals/Contact Center intake ticket  
- [ ] Request new URLs be added to Medallia routing  
- [ ] Confirm updates are complete  
- [ ] Validate feedback intake post-launch  

---

## 5. Success Criteria
*(To be finalized with Engineering)*

Potential measures:
- Datadog API success/error rates  
- Datadog RUM metrics (TBD)  
- Medallia sentiment trends related to renewals  
- Other?

---

## 6. Rollout Timeline (TBD — Phased Release)

*This rollout will follow a staged exposure approach. Dates and counts will be finalized once engineering confirms readiness.*

---

### Stage A: 5% of users
Test a small subset of users to validate basic stability and ensure no major blockers in the Meds → SM renewal flow.

#### Planning
- **Length of time:** TBD  
- **Percentage of users:** 5%  
- **Estimated number of users:** TBD  

#### Results
- **Number of unique users:** XX  
- **Metrics monitored:** See “Success Criteria”  
- **Downstream service impacts:** No  
- **Types of errors logged:** XX  
- **Changes needed based on logs or qualitative feedback:** TBD  

---

### Stage B: 25% of users
Expand exposure to confirm system behavior under greater load and validate renewal-routing reliability.

#### Planning
- **Length of time:** TBD  
- **Percentage of users:** 25%  
- **Estimated number of users:** TBD  

#### Results
- **Number of unique users:** XX  
- **Metrics monitored:** See “Success Criteria”  
- **Downstream service impacts:** No  
- **Types of errors logged:** XX  
- **Changes needed based on logs or qualitative feedback:** TBD  

---

### Stage C: 50% of users
Scale further to ensure performance, routing accuracy, and prefill behavior remain stable.

#### Planning
- **Length of time:** TBD  
- **Percentage of users:** 50%  
- **Estimated number of users:** TBD  

#### Results
- **Number of unique users:** XX  
- **Metrics monitored:** See “Success Criteria”  
- **Downstream service impacts:** No  
- **Types of errors logged:** XX  
- **Changes needed based on logs or qualitative feedback:** TBD  

---

### Stage D: 75% of users
Wider rollout to validate stability with near-full production traffic.

#### Planning
- **Length of time:** TBD  
- **Percentage of users:** 75%  
- **Estimated number of users:** TBD  

#### Results
- **Number of unique users:** XX  
- **Metrics monitored:** See “Success Criteria”  
- **Downstream service impacts:** No  
- **Types of errors logged:** XX  
- **Changes needed based on logs or qualitative feedback:** TBD  

---

### Stage E: 100% of users
Full release to all users.

#### Planning
- **Length of time:** TBD  
- **Percentage of users:** 100%  

#### Results
- **Number of unique users:** XX  
- **Metrics monitored:** See “Success Criteria”  
- **Downstream service impacts:** No  
- **Types of errors logged:** XX  
- **Changes needed based on logs or qualitative feedback:** TBD  
