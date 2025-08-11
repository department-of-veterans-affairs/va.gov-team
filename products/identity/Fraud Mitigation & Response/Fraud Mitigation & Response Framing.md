# Core Framing & Strategy

Digital access fraud (where someone gains unauthorized entry into a system)  appears to be falling through the cracks between CSP-level authentication and verification, benefit-level financial fraud (BDPR), and potential health privacy misuse. **Authentication is often the gateway for broader fraud**, which puts our team in a position to detect and surface risks earlier.

Recent findings from BDPR suggest coordinated fraud using CSPs, leading to suspicious patterns. BDPR has limited visibility into what happens before accounts hit the benefit space and we may be positioned to help fill that gap. As the identity broker for VA.gov, we’re in a position to spot early patterns, help define detection & response strategies, and prevent escalation without creating new barriers for legitimate users. We believe our team's unique value may lie in early detection of digital access fraud (_if feasibility is confirmed_), which helps prevent escalation into financial or privacy-related harm.

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
* *Signals & data review* – What system behaviors or identity flows could indicate fraud or misuse? Do our existing logs contain enough usable data to test this in a small, feasibility-focused way? 
* *Risk tolerance and user impact* – Are protections blocking real users? Where is friction happening? What level of risk is acceptable? Do teams agree on what’s “enough” protection and what counts as overkill? How do we balance access with security?

These discovery buckets cut across all three fraud pillars, though our initial focus will be on the Detection track.


## Foundation for Discovery  

We began by setting the foundation for discovery: defining the problem space, aligning on priorities, and identifying how our team could add unique value to VA’s fraud ecosystem. This work establishes the strategic pillars (Prevention, Detection, Response) and clarifies where we're focusing first.  

Key tasks:
- Defined core vision, scope, and fraud strategy pillars (Prevention, Detection, Response). [DONE] 
- Identified two key discovery tracks to run in parallel [DONE]:  
  - **Track 1: Fraud Landscape Mapping**  
  - **Track 2: Fraud Detection Hypothesis Validation**  
- Outlined high-level success criteria and guiding questions. [DONE]  
- Created initial tickets to scope and sequence discovery efforts.  [DONE]
- Identified key stakeholders for collaboration. [_mostly_ DONE]

## Iterative Discovery Tracks  

Then, we'll focus on two parallel tracks for discovery that will guide learning and shape future work:  

1. **Fraud Landscape Mapping (Discovery Track 1)**  
   *Goal: Understand what fraud is happening today, who is involved, and where ownership boundaries and gaps exist.*  

2. **Fraud Detection Hypothesis Validation (Discovery Track 2)**  
   *Goal: Explore existing data and signals to validate whether digital access fraud is detectable earlier in the identity flow.*  

These tracks will run in parallel where possible to ensure we’re not waiting for a perfect landscape map before testing detection opportunities. This lets us move iteratively and adaptively as we learn.  

## Fraud Landscape Mapping (Discovery Track 1)  

To understand the broader fraud ecosystem and clarify our team’s role, we’ll approach landscape mapping in iterative phases:  

**Phase 1: Ecosystem Mapping**
* _Milestone_: Initial high-level fraud ecosystem map dratfed (roles, workflows, data flows)
**Phase 2: Gaps & Opportunities Identification**  
* _Milestone_: Summary of key gaps, overlaps, and coordination opportunities documented  
**Phase 3: Validation & Partnership**  
* _Milestone_: Stakeholder alignment & playbook framework for fraud mitigation

_Outcome:_
A clear, shared understanding of the VA fraud landscape: who the players are, where gaps and overlaps exist, and the “rules of engagement” for detection, prevention, and response.
This will enable alignment on ownership boundaries and set the stage for a shared playbook to guide cross-team collaboration.

## Fraud Detection Signals & Feasibility (Discovery Track 2)

We’re starting with the fraud detection pillar because it offers the clearest path to immediate learning. While prevention and response are both essential parts of a comprehensive identity fraud strategy, we don’t yet know how (or if) identity misuse is surfacing in our systems. We believe some of that activity may happen upstream of fraud events, particularly in authentication and recovery flows.

By focusing first on detection feasibility, we can uncover:

- What identity-layer patterns exist before fraud occurs
- Where signal gaps may limit our visibility
- Whether our existing data infrastructure supports earlier detection at all

This is also the most natural starting point for cross-team partnership, especially with BDPR -- since it grounds us in confirmed cases and builds toward shared understanding of risk and detection potential.

**Initial Use Case**
We are focusing specifically on **confirmed cases of direct deposit fraud** (like benefits payments redirected or stolen) where the fraud has originated through a VA.gov sign-in flow.

This is a high-impact, high-priority fraud type that represents clerical user and financial harm, involves systems and logs we already have access to, and is currently managed reactively through manual reviews and account locks. This use case gives us bounded and realistic starting point to test feasibility before considering other fraud types.

_Hypothesis: We believe that confirmed fraud cases contain **detectable identity-layer signals** in our existing logs. By tracing a small number of known cases, we aim to determine whether earlier detection is technically feasible for this use case (confirmed direct deposit fraud) using the data we already collect. We are not building models or systems yet. Our goal is to validate whether detection is even possible, reliable, and scalable before moving into solutioning._

* **Phase 1: Understand the Baseline**  
  * _Milestone_: BDPR's confirmed fraud definition and available metadata is documented
* **Phase 2: Timeline Reconstruction & Signal Feasibility**  
  * _Milestone_: 1–2 clean confirmed direct deposit fraud cases traced end-to-end in logs (3 months prior + 2–4 weeks after event)
  * _Milestone_: Case-to-log linkage process refined and repeatable
* **Phase 3: Exploratory Analysis** 
  * _Milestone_: Additional 4–10 cases traced using refined process
  * _Milestone_: Common identity-layer signals cataloged, with notes on gaps and noise
* **Phase 4: Feasibility Assessment**  
  * _Milestone_: Final determination on whether earlier detection is possible with current data
  * _Milestone_: Recommendation on whether to proceed to alerting/modeling or pivot
 
_Outcome:_
Validated (or invalidated) hypothesis about whether earlier fraud is possible using identity-layer signals and logs we already collect. This will help us determine whether it's worth investing further in detection efforts without introducting unnecessary friction for legitimate users.

As part of this effort, we may also need to explore Veteran perspectives to uncover non-data signals of fraud (e.g., account behaviors or anomalies noticed by users before compromise). These insights could complement system-level analysis and inform usability considerations if earlier detection or interventions are introduced.

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

## Where We Might Go Next

Once discovery is complete, we’ll determine the best path forward based on what we learn in the landscape and detection tracks:

- If feasibility is confirmed, we may double down on detection: develop scalable detection capabilities (alerting logic, dashboards, partner workflows).
- Expand to prevention and response: explore adjacent opportunities where we can add value.
- Operationalize findings: formalize partnerships and governance for cross-team fraud mitigation.

_What tells us we’re ready to move forward?_
Track 1: A validated playbook framework and stakeholder alignment on roles & responsibilities.
Track 2: A clear determination on detection feasibility

## Key Terms & Acronyms
* Digital Access Fraud: Unauthorized access to VA systems using another person’s identity or information. May result in benefit theft, data exposure, or misuse.
* CSP (Credential Service Provider): Third-party identity verification providers (Login.gov, ID.me). Handle authentication and initial identity proofing.
* BDPR (Benefits Delivery Protection & Remediation?): The VA team responsible for detecting and responding to benefit-level financial fraud after the fact.
* Detection / Prevention / Response:
  * Detection: Identifying potential fraud based on signals or patterns.
  * Prevention: Stopping bad actors before they gain access.
  * Response: What happens immediately after fraud is detected, including alerts, recovery, remediation.
* Remediation: Follow-up steps to repair harm caused by fraud and restore normal operations
* False Positive: A legitimate user mistakenly flagged as suspicious or fraudulent.
* False Negative: A fraudulent user is mistakenly allowed through because the system fails to flag them. Opposite of a false positive.
* Friction: Additional steps or barriers in the login or verification process, sometimes necessary for security but potentially harmful to usability.
* Small Bet: A low-risk, exploratory experiment used to validate assumptions or uncover insights without committing to a full solution.
* Fraud signal: data point or behaviour in the system that may indicate suspicious activity.

