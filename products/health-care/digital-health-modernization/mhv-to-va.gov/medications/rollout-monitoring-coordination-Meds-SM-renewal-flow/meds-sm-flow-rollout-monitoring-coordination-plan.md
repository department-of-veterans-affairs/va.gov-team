# Med Renewal → Secure Messaging Flow Rollout Monitoring Coordination Plan

This document supplements the **RX Renewal Flow – MVP Release Plan** and outlines shared documentation updates, monitoring responsibilities, required pre-launch tasks, and post-launch coordination for the renewal workflow that routes Veterans from the Medications tool into Secure Messaging.

---

## 1. Overview of the Meds → SM Renewal Flow
The renewal flow guides Veterans through both Medications and Secure Messaging:

1. Veteran views their medication list in Medications  
2. Renewal-eligible medications display a link: **“Send a renewal request message”**  
3. Veteran selects the link and is taken to the **SM interstitial**  
4. Veteran selects a **care team**  
5. Veteran sees a **prefilled renewal message** in the SM editor  
6. Veteran sends the message  

Because the journey spans two products, **monitoring, URLs, documentation, and rollout responsibilities should be shared across teams**.

---

## **2. Product Guide Updates (Required Early Task)**

Product Guides must be updated early so UX can submit VSP/Contact Center intake requests and configure VSignals/Medallia.

### **2.1 Medications Product Guide Updates**
- Description of the renewal link  
- Renewal vs refill eligibility logic  
- Screenshots and link placement  
- Expected journey from Meds → SM  
- Known limitations (e.g., no available care team)  
- Integration points with SM  

### **2.2 Secure Messaging Product Guide Updates**
- Overview of receiving medication renewal requests  
- SM interstitial behavior  
- Care team selection logic  
- Prefill rules (included/excluded data)  
- Expected flow inside SM  
- Error states and known issues  
- Integration notes with Meds  

### **2.3 Shared Documentation Requirements**
Both Product Guides should include:
- Outline of the cross-tool workflow  
- Shared monitoring responsibilities  
- All URLs required for Medallia/VSignals  
- Links to dashboards (GA4, Datadog, Medallia/VSignals)  
- Staged rollout details and escalation steps  

---

## **3. Monitoring Responsibilities**

### **3.1 UX Monitoring (Medallia / VSignals)**  
Teams: **Meds UX**, **SM UX**

#### **Meds UX Responsibilities**
Monitor experience *before* the Veteran enters Secure Messaging:
- Renewal link visibility and accuracy  
- Confusion between renewal vs refill  
- Difficulty initiating the renewal flow  
- Transition issues into SM  
- Veteran comments indicating unclear or missing renewal options  

#### **SM UX Responsibilities**
Monitor experience *after* the Veteran enters Secure Messaging:
- Interstitial behavior  
- Care team selection issues  
- Missing or incorrect prefilled content  
- Drop-offs inside SM  
- Message-send confusion or errors  
- Veteran comments specific to SM  

#### **UX Escalation**
1. Identify whether issue occurred in **Meds** or **SM**  
2. Notify the appropriate engineering team  
3. Engineering validates through logs/Datadog  
4. PM + Eng Lead determine severity and action steps  

---

### **3.2 Engineering Monitoring (Datadog + Logging)**  
Teams: **Meds Engineering**, **SM Engineering**

#### **Meds Engineering Responsibilities**
- Renewal link rendering  
- Eligibility behavior (renewal vs refill)  
- Errors launching the SM flow  
- Incorrect routing into SM  

#### **SM Engineering Responsibilities**
- Interstitial load errors  
- Care team API failures  
- Prefill load issues  
- Draft creation failures  
- Message send errors  
- SM backend/API errors  

#### **Engineering Escalation**
1. Validate issues in logs  
2. Identify whether issue is in **Meds** or **SM**  
3. Follow severity-based rollback steps  
4. Coordinate with UX + PM  

---

## **4. Pre-Launch Tasks**

### **4.1 Collect URLs for VSignals / Medallia Configuration**

To enable Medallia feedback collection, UX requires **all new URLs**.  
**Updated Product Guides must be attached** to the VSP/Contact Center intake request.

#### **Needed from Meds Engineering**
- Renewal link destination URLs  
- Any new/updated Medications pages in the flow  

#### **Needed from SM Engineering**
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

## **5. Success Criteria**  
*(To be finalized with Engineering)*

Potential measures:
- Datadog API success/error rates  
- Datadog RUM metrics for each step of the flow  
- Clear attribution of issues to Meds vs SM  
- Medallia sentiment trends related to renewals  

---
