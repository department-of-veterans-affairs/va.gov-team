# Core Framing & Strategy

Identity-related fraud appears to be falling through the cracks between CSP-level authentication and verification, benefit-level financial fraud (BDPR), and possibly health privacy-related misuse. **Authentication is often the gateway for broader fraud**, which puts our team in a position to detect and surface risks earlier.

Recent findings (link to the doc from Login.gov) from BDPR suggest coordinated fraud using CSPs (especially Login.gov), leading to suspicious account creation patterns. BDPR has limited visibility into what happens before accounts hit the benefit space, and we may be positioned to help fill that gap. As the identity broker for [VA.gov](http://VA.gov), we’re in a unique position to spot early patterns, help define detection & response strategies, and prevent escalation without creating new barriers for legitimate users.

### About this strategy

This initiative focuses on improving protections against identity-related fraud across 3 core pillars:

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

* *Landscape & metrics* – What is the identity fraud picture across VA systems today?  
* *Stakeholder roles & ownership* – Who detects fraud? Who responds to it? What workflows already exist?  
* *Signals & data review* – What system behaviors, identity flows, or … might indicate fraud, misuse, or user confusion?  
* *Risk tolerance and user impact* – Are protections blocking real users? Where is friction happening? What level of risk is acceptable? Do teams agree on what’s “enough” protection and what counts as overkill? How do we balance access with security?  

## Core Discovery Questions:

1. What types of identity-related fraud are most prevalent?  
2. What kinds of fraud are specific to Veterans or VA systems?  
3. How is identity fraud detected today? Who responds? How?  
   1. And how does it exist at the cross-agency level?  
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
    2. *How do we reduce the risk of compromised identities being used to access external apps or services that rely on [VA.gov](http://VA.gov) sign-in?*

## Discovery Success Criteria

We’ll know discovery is successful if we:

* Determine whether identity-related fraud exists at meaningful scale and if it’s falling through the cracks  
* Identify at least one high-risk flow and associated detection or response gap (or confirm coverage\!)  
* Surface what signals we log today and what’s still missing  
* Align with our internal and external partners on roles, response thresholds, & ownership boundaries  
* Define a few small bets (and / or an MVP) and clarify what “acceptable fraud risk” looks like across teams.

## Fraud Detection

We’re starting with detection because it offers the clearest path to immediate learning. While prevention and response are also critical parts of a complete identity fraud strategy, we don’t know yet how (or if) identity misuse is surfacing in our systems (it’s not just [VA.gov](http://VA.gov)… likely upstream.) Exploring detection helps us uncover what patterns we’re already capturing, where gaps exist, and how we might support other teams, like BDPR. It’s also the most natural starting point for partnership. It’ll allow us to validate whether fraud is detectable at scale before jumping into broader solutions.

### Phases (Fraud Detection Workstream)

We’ll approach fraud detection work in iterative phases to support learning and alignment across team(s):

* ***Phase 0: Framing and Alignment?***  
  * *Define problem space, align partnership (including BDPR), surface questions and unknowns*  
* **Phase 1: Rules-Based Baseline**  
  * Document and automate BDPR’s current manual approach to create a baseline for future comparison  
* **Phase 2: ML Prototype**  
  * Use known fraud cases to prototype detection logic and explore signal clustering. We’ll learn what behaviours stand out and what be friction, not fraud  
* **Phase 3: Evaluation**  
  * Compare rule-based logic and ML performance. Review flagged results with BDPR to help refine thresholds\*  
    * *\*Not sure there are current thresholds but we also might need to help create/validate response plans if BDPR has nothing concrete*  
* **Phase 4: Strategic Scaling**  
  * Identify next bets (alerting logic, any potential UI, more partner signals). Explore expansion beyond BDPR (to VHA, CSPs, others?)

## Small Bets for Consideration *(WIP)*

* If we use BDPR-flagged accounts to train a model we’ll find repeatable signal patterns we could scale.  
* If we surface anomalies, we’ll find both fraud indicators *and* user friction.  
* If we document “false fraud” cases and similar, we can avoid over-mitigation.

## Next steps:

1. Use discovery buckets to guide research, partner alignment, and work across the team.  
2. Collaborate with BDPR (AND other relevant fraud stakeholders, when time comes)  
3. Proposal for some exploration through starter moves:  
   1. Could we look at ONE high-risk identity flow and see what signals are logged today that might help us detect fraud?  
   2. Are there any detection gaps that are exposed with CSP flows?  
   3. A workshop… We should be asking ourselves and VA: What’s worse…letting a fraudster in or blocking a legit user? And how do we balance it?
