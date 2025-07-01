# Fraud Mitigation & Response – Product Brief

## What’s the problem?

We currently lack visibility into how much digital access fraud is occurring within our identity ecosystem. There are no consistent mechanisms to track identity-related fraud or defined processes to detect, mitigate, or respond to account takeovers and unauthorized access.

Our identity verification system was built to reduce fraud risk, but we’ve historically prioritized access and onboarding over ongoing account protection. Veterans are disproportionately targeted for phishing, scams, and identity fraud, yet we are not fully equipped to monitor or respond when these threats succeed.

## Why now / how does it align?

Fraud prevention was a driving force behind VA’s identity verification efforts. Now that we’ve modernized our sign-in experience and credential ecosystem, it’s time to shift focus toward protecting verified accounts.

This work is also scoped in our current contract and aligns with OCTO’s mandate to safeguard Veteran data and access. Addressing this now helps ensure that modernization efforts don’t inadvertently open new vulnerabilities.

## What happens if we solve it? What if we don’t?

**If we solve it:**
- We build a clearer understanding of fraud patterns and vulnerabilities.
- We define protections that detect and mitigate risk without creating undue friction.
- We improve Veteran trust in digital access and service integrity.

**If we don’t:**
- Veterans may remain exposed to account misuse, direct deposit fraud, and unauthorized access with no consistent means of detection or response.
- Trust in VA’s digital systems could erode, especially among already vulnerable users.

## How will we know it worked?

### Short-term (Discovery Phase) Success Signals:
- A shared understanding of identity-related fraud risk is established.
- Key fraud categories and vulnerable flows are identified.
- Detection signals and instrumentation gaps are surfaced.
- Stakeholders are aligned on ownership, responsibilities, and response approaches.
- Small bets are scoped or validated for next-phase work.

### Long-term (Implementation Phase) Success Signals:
- Baseline metrics are established for confirmed or suspected fraud.
- A shared framework exists for Prevention, Detection, Response, and Operational coordination.
- High-impact fraud vectors are monitored or mitigated.
- False positives are reduced while meaningful patterns surface.
- BDPR and related teams adopt or coordinate around a unified fraud response model.

## What’s the minimum needed? What’s out of scope?

### Minimum (Post-Discovery Priorities):
- Define key fraud types and detection signals within the identity layer.
- Identify and instrument high-risk flows.
- Draft a cross-team fraud response playbook.
- Establish baseline metrics and partner-aligned thresholds.

> _Note: Small bets may emerge during discovery that offer low-lift opportunities to explore value or unlock future capabilities._

### Out of Scope (for now):
- Full cross-agency fraud-sharing pipelines
- Real-time behavioral biometrics or advanced ML systems
- Investigations beyond digital identity-related fraud

## What are we trying to understand?

To guide this work, we’re focusing on three key questions:

- **What is the fraud landscape at VA today, and where does our team fit into it?**  
  _We may be the connective tissue between upstream verification and downstream benefit fraud._

- **How can we block fraud while protecting legitimate users from unnecessary friction?**

- **What is our organizational appetite for fraud risk, and do stakeholders agree on what’s “enough” protection?**

## Discovery in Progress

This initiative is structured under the **Identity Fraud Discovery & Strategy Baseline** super epic. Discovery spans several thematic workstreams:

- `Landscape & Metrics`
- `Stakeholder Roles & Process Mapping`
- `Signals & Data Review`
- `Risk Appetite & Usability Tradeoffs`

**Track work in GitHub**: _[link]_ _to be added_ 

**Point of contact**: Joelle Wells or Joe Niquette
