# Fraud Mitigation & Response – Product Brief

### **What’s the problem?**

We currently lack visibility into how much fraud is occurring within our identity ecosystem. We don’t track digital identity-related fraud consistently and we don’t have defined processes to detect, mitigate, or respond to account takeovers or unauthorized access (BDPR\*\*).

Our identity verification system was built to reduce fraud risk, but we’ve focused more on getting users in than safeguarding accounts post-verification. Veterans are disproportionately targeted for phishing, scams, and fraud and we are not fully equipped to monitor or respond.

### **Why now / how does it align?**

Fraud prevention is a key reason VA implemented identity verification in the first place. Now that we’ve made progress on sign-in and credential modernization, it’s time to shift focus back to protecting verified accounts.

This work is also scoped in our contract and aligns with OCTO’s mandate to safeguard Veteran data and digital access.

### **What happens if we solve it? What if we don’t?**

**If we solve it:**  
We build a clear understanding of fraud patterns, establish appropriate levels of protection, and develop a human-centered detection and response strategy.

**If we don’t:**  
We risk exposing Veterans to account misuse, benefit manipulation (especially via direct deposit changes), and credential-based fraud – with no real way to detect or act quickly. It also undermines trust in digital VA services.

### **How will we know it worked?**

**Short-term (Discovery-Phase) Signals:**

* We’ve established a baseline understanding of identity-related fraud  
* We’ve defined key fraud categories and surfaced vulnerable flows  
* We’ve identified useful signals and instrumentation gaps  
* We’ve aligned stakeholders on ownership, response, and legal responsibilities  
* Small bets are scoped or validated for further work

**Long-term (Implementation-Phase) Signals:**

* Baseline metrics are tracked for confirmed and suspected fraud incidents  
* A tiered framework is adopted: Prevention, Detection, Response, and Ops playbook  
* High-impact fraud vectors are reduced or monitored  
* False positives decrease while meaningful patterns surface  
* BDPR and related teams use a shared fraud response model\*\*  
  * We at least need to have shared understanding here

### **What’s the minimum needed? What’s out of scope?**

**Minimum (post-discovery priorities):**

* Define fraud types and detection signals in our system  
* Identify and instrument fraud-prone flows  
* Draft a fraud response playbook aligned with BDPR and IAM (and any other relevant groups)  
* Set and track baseline metrics

*Note:* Some small bets may emerge during discovery that help us assess user value or unlock larger capabilities without committing to full builds.

**Out of Scope (for now):**

* Full cross-agency fraud sharing (unless…?)  
* Real-time behavioral biometrics or advanced ML detection  
* Investigations outside the digital identity domain

### **What we’re exploring now (Discovery Questions)**

* What types of fraud are happening today and where?  
* How is fraud currently detected, escalated, and resolved?  
* What are our legal responsibilities when fraud occurs?  
* What patterns are emerging?  
* What’s our organizational appetite for fraud and false positives?  
* What fraud response roles or gaps exist between IAM, BDPR, and other teams?

### **Discovery in Progress**

This work is being structured under the [**Identity** **Fraud Discovery & Strategy Baseline**](https://github.com/department-of-veterans-affairs/identity-documentation/issues/204) milestone / super epic.  
It includes the following thematic epics:

* **Landscape & Metrics**  
* **Process Mapping & Stakeholder Roles**  
* **Signals & Data Review**  
* **Usability & Risk Tradeoffs**  
* **Risk Appetite Framing**

**Track in GitHub:** Under the **6 Q2 2025 Fraud Mitigation and Response**  
**Point of contact:** Joelle Wells or Joe Niquette

