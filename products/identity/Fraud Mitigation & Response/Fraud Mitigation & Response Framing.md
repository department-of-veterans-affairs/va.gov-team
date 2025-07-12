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

These discovery buckets cut across all three fraud pillars, though our initial focus will be on the Detection track.


## Phase 0: Foundation for Discovery  

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

These tracks will run in parallel to ensure we’re not waiting for a perfect landscape map before testing detection opportunities. This lets us move iteratively and adaptively as we learn.  

## Fraud Landscape Mapping (Discovery Track 1)  

To understand the broader fraud ecosystem and clarify our team’s role, we’ll approach landscape mapping in iterative phases:  

**Phase 1: Ecosystem Mapping**  
Conduct interviews and workshops with internal stakeholders (BDPR, CSPs, security, identity teams) to map roles, responsibilities, and data flows.  
**Phase 2: Gaps & Opportunities Identification**  
Analyze the landscape map to surface gaps, overlaps, and potential partnership opportunities. Begin drafting a shared fraud playbook outline for VA’s identity ecosystem.  
**Phase 3: Validation & Partnership**  
Validate findings with stakeholders and refine the playbook draft. Align on ownership boundaries and potential areas where our team can support existing fraud prevention/response efforts.

_Outcome:_
A clear, shared understanding of the VA fraud landscape: who the players are, where gaps and overlaps exist, and the “rules of engagement” for detection, prevention, and response.
This will enable alignment on ownership boundaries and set the stage for a shared playbook to guide cross-team collaboration.

_Milestones:_
- Fraud Ecosystem Map Drafted – initial view of players, workflows, and data flows across VA systems.
- Gap & Opportunity Analysis – documented areas where fraud falls through the cracks or coordination could improve.
- Shared Playbook Outline – high-level recommendations for detection, prevention, and response ownership.
- Stakeholder Alignment Checkpoint – validation of findings with BDPR, CSPs, security, and leadership.

## Fraud Detection Signals & Feasibility (Discovery Track 2)

We’re starting with the fraud detection pillar because it offers the clearest path to immediate learning. While prevention and response are also critical parts of a complete identity fraud strategy, we don’t know yet how (or if) identity misuse is surfacing in our systems (it’s not just VA.gov… likely upstream.) Exploring detection helps us uncover what patterns we’re already capturing, where gaps exist, and how we might support other teams, like BDPR. It’s also the most natural starting point for partnership. It’ll allow us to validate whether fraud is detectable at scale before jumping into broader solutions.

_Hypothesis: We believe that confirmed fraud cases contain detectable patterns in VA system logs that could be surfaced through modeling. By exploring this assumption, we aim to identify repeatable signals, distinguish fraudulent activity from legitimate but unusual behaviors, and figure out what data we already have, what additional data we’d need, and whether our systems are set up to test fraud detection in a way that could actually work for the whole VA ecosystem._

* **Phase 1: Rules-Based Baseline**  
  * Document BDPR’s current manual approach to establish a baseline for future comparison or enhancement support.  
* **Phase 2: ML Prototype**  
  * Explore known fraud cases to prototype detection logic and signal clustering. Focus on distinguishing true fraud from friction or false positives. 
* **Phase 3: Evaluation**  
  * Evaluate performance of detection approaches. Colaborate with stakeholders to review results and co-develop response thresholds, if non exist today.
* **Phase 4: Strategic Scaling**  
  * Identify next bets (alerting logic, any potential UI, more partner signals). Explore expansion beyond BDPR (to VHA, CSPs, others?)
 
_Outcome:_
Validated (or invalidated) hypothesis about whether fraud is detectable in VA system logs using existing data points and signals. This will determine if earlier detection is feasible without introducing significant friction for legitimate users.

_Milestones:_
- Rules-Based Baseline Established – documentation of BDPR’s current fraud detection efforts.
- Signal Inventory Completed – catalog of existing data points and signals related to fraud cases.
- Prototype Modeling Tested – exploratory models run on known fraud cases to identify repeatable patterns.
- Detection Feasibility Assessment – evaluation of whether detection is possible and worth pursuing at scale.

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

- Double down on detection: develop scalable detection capabilities (alerting logic, dashboards, partner workflows).
- Expand to prevention and response: explore adjacent opportunities where we can add value.
- Operationalize findings: formalize partnerships and governance for cross-team fraud mitigation.

_What tells us we’re ready to move forward?_
Track 1: A validated playbook framework and stakeholder alignment on roles & responsibilities.
Track 2: A clear determination on detection feasibility (and tradeoffs for false positives).

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
