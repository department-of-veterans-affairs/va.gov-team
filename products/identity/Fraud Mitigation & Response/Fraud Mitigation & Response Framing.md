# Core Framing & Strategy

Digital access fraud (where someone gains unauthorized entry into a system)  appears to be falling through the cracks between CSP-level authentication and verification, benefit-level financial fraud (BDPR), and potential health privacy misuse. **Authentication is often the gateway for broader fraud**, which puts our team in a position to detect and surface risks earlier.

Recent findings (add link) from BDPR suggest coordinated fraud using CSPs, leading to suspicious patterns. BDPR has limited visibility into what happens before accounts hit the benefit space and we may be positioned to help fill that gap. As the identity broker for VA.gov, we’re in a position to spot early patterns, help define detection & response strategies, and prevent escalation without creating new barriers for legitimate users. We believe our team's unique value may lie in early detection of digital access fraud, which helps prevent escalation into financial or privacy-related harm.

### About this strategy

This initiative focuses on improving protections against digital access fraud across 3 core pillars:

1. **Prevention** – How do we stop fraud before it starts?  
2. **Detection** – How do we spot identity misuse or suspicious activity in time?  
3. **Response** – What happens after fraud is detected? How do we recover, notify, and coordinate?

Our initial focus is on detection, but discovery efforts across ***all three areas*** are in scope as we move forward.

***So what’s the goal?***... We want to clarify the problem space and understand the gaps. We’ll need to surface identity-level gaps in fraud detection, prevention, and response. Some guiding questions:

1. What is the fraud landscape at VA today?  
   1. Where does OUR team fit into this?  
      1. Connective tissue between the layers  
2. How can we block fraud while protecting legitimate users?  
   1. What is our appetite for fraud risk?

To focus our work, we’ve outlined four discovery buckets:

* *Landscape & metrics* – What is the fraud picture across VA systems today, when it comes to identity?  
* *Stakeholder roles & ownership* – Who detects fraud? Who responds to it? What workflows already exist?  
* *Signals & data review* – What system behaviors, identity flows, or … might indicate fraud, misuse, or user confusion?  
* *Risk tolerance and user impact* – Are protections blocking real users? Where is friction happening? What level of risk is acceptable? Do teams agree on what’s “enough” protection and what counts as overkill? How do we balance access with security?  

## Core Discovery Questions:

1. Where in the identity flow does digital access fraud most often occur and what does it typically lead to?
2. Who detects or responds to digital access fraud, how does that work, and where are the gaps? 
3. What kinds of fraud are specific to Veterans or VA systems?   
4. How do we protect legit users from being blocked?  
5. How much fraud is acceptable? And do all stakeholders agree on the risk tradeoffs?  
6. Do users feel protected? Do they trust our systems?  
   1. *How do we help the Veteran regain access or feel safe?*  
7. Are our protections harming access more than helping in some cases? When?  
8. Do we have the right data to detect and respond to identity misuse?  
9. *What fraud signals do we already surface but haven’t analyzed at scale?*  
10. *What detection or response capabilities exist today and where are the limits?*  
11. *What would a shared playbook for identity compromise look like?*  
12. *What happens after an account is compromised? What does recovery look like?*  
13. *How do we prevent bad actors from creating new verified accounts after compromise?*  
    1. *Where is the vulnerability? Are there multiple?*  
    2. *How do we reduce the risk of compromised identities being used to access external apps or services that rely on VA.gov sign-in?*

## Discovery Success Criteria

We’ll know discovery is successful if we:

* Build a clear understanding of whther digital access fraud is a meaningful problem space within our scope -- including where, how, amd if it's already being addressed.
* Identify the role our team is best positioned to play in the fraud ecosystem based on capabilities, gaps, and existing partner efforts
* Surface highly vulnerable identity flows or access patterns worth deeper exploration or determine that current coverage is sufficient
* Clarify what fraud-related signals we currently log, how useful they are, and what additional data or context may be needed
* Align with key stakeholders on fraud ownership boundaries, response expectations, and coordination needs
* Define a set of recommended next steps based on what discovery reveals

## Fraud Detection

We’re starting with detection because it offers the clearest path to immediate learning. While prevention and response are also critical parts of a complete identity fraud strategy, we don’t know yet how (or if) identity misuse is surfacing in our systems (it’s not just VA.gov… likely upstream.) Exploring detection helps us uncover what patterns we’re already capturing, where gaps exist, and how we might support other teams, like BDPR. It’s also the most natural starting point for partnership. It’ll allow us to validate whether fraud is detectable at scale before jumping into broader solutions.

### Phases (Fraud Detection Workstream)

We’ll approach fraud detection work in iterative phases to support learning and alignment across team(s):

* ***Phase 0: Framing and Alignment?***  
  * *Define problem space, map internal landscape, align partnership (including BDPR), surface questions and unknowns*  
* **Phase 1: Rules-Based Baseline**  
  * Document BDPR’s current manual approach to establish a baseline for future comparison or enhancement support.  
* **Phase 2: ML Prototype**  
  * Explore known fraud cases to prototype detection logic and signal clustering. Focus on distinguishing true fraud from friction or false positives. 
* **Phase 3: Evaluation**  
  * Evaluate performance of detection approaches. Colaborate with stakeholders to review results and co-develop response thresholds, if non exist today.
* **Phase 4: Strategic Scaling**  
  * Identify next bets (alerting logic, any potential UI, more partner signals). Explore expansion beyond BDPR (to VHA, CSPs, others?)

## Small Bets for Consideration *(WIP)*

* If we use BDPR-flagged accounts to train a model we’ll find repeatable signal patterns we could scale.  
* If we surface anomalies, we’ll find both fraud indicators *and* user friction.  
* If we document “false fraud” cases and similar, we can avoid over-mitigation.
* If we explore fraud controls, we may find that some protections are creating execessive friction or blocking legitimate users, especially in cases like caregives or less tech-savvy Veterans.

## Key Terms & Acronyms
* Digital Access Fraud: Unauthorized access to VA systems using another person’s identity or information. May result in benefit theft, data exposure, or misuse.
* CSP (Credential Service Provider): Third-party identity verification providers (Login.gov, ID.me). Handle authentication and initial identity proofing.
* BDPR (Benefits Delivery Protection & Remediation?): The VA team responsible for detecting and responding to benefit-level financial fraud after the fact.
* Detection / Prevention / Response:
  * Detection: Identifying potential fraud based on signals or patterns.
  * Prevention: Stopping bad actors before they gain access.
  * Response: What happens after fraud is detected—alerts, recovery, remediation.
* False Positive: A legitimate user mistakenly flagged as suspicious or fraudulent.
* False Negative: A fraudulent user is mistakenly allowed through because the system fails to flag them. Opposite of a false positive.
* Friction: Additional steps or barriers in the login or verification process, sometimes necessary for security but potentially harmful to usability.
* Small Bet: A low-risk, exploratory experiment used to validate assumptions or uncover insights without committing to a full solution.
