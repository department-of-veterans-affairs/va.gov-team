# Email Verification Product Outline
**Last updated:** November, 2025 - development in progress

**Communications**  
- **GitHub Label:** vsa-authenticated-exp; my-va-dashboard  
- **Slack channel:** #accountexp-authexp  

---

# Table of Contents
1. [Overview](#overview)
2. [Problem Statement](#problem-statement)
3. [User Flow Logic](#user-flow-logic)
4. [User Outcomes](#user-outcomes)
5. [Business Outcomes](#business-outcomes)
6. [Measuring Success](#measuring-success)
7. [OCTO OKRs](#octo-okrs)
8. [Important Decisions / Notes](#important-decisions--notes)
9. [Open Questions](#open-questions)
10. [Research](#research)
11. [Design](#design)
12. [Frontend](#frontend)
13. [Backend](#backend)
14. [Security](#security)

---

# Overview
This initiative introduces an email verification step for Veterans whose contact email does not match the identity email they use to sign in to VA.gov. When a mismatch is detected, VA.gov asks the user to confirm or update their contact email using a link sent to that address. Veterans with matching emails will not see any prompts. The goal is to ensure the email VA uses for communications is actively monitored. This feature is in support of the zero silent failures initiative.

---

# Problem Statement
There is currently no verification process to confirm that the contact email stored in VA Profile is valid or checked regularly by the user. Some Veterans  may use a different email for sign-in than the one they provide in Profile; however, because we can’t run an upfront cross-system check we cannot get a precise number of how many. While Login.gov and ID.me verify identity emails during account creation, that identity email is not used by VA.gov for ongoing communications. The contact email is what receives important updates from the VA, so the VA needs confidence that it is accurate and monitored. Unverified or outdated emails lead to missed communications, failed outreach, and increased support needs.
Introducing a light-touch verification flow ensures the VA can reliably reach Veterans when it matters.

---

# User Flow Logic
A Veteran must verify their contact email whenever it does not match their Login.gov/ID.me identity email. Verification is triggered in two situations:

When a LOA3 user loads any of these pages:
- My VA  
- Contact information  
- Email and text notifications  

When a user adds or updates their contact email, and the new email does not match their identity email.

If the two emails don’t match, the user enters the verification flow. If they do match, no prompts appear and the user is considered fully verified.

The full-page interstitial appears first and includes a “Skip for now” option. If the user skips, they see a persistent alert for the rest of that session. If they return later without completing verification, the interstitial reappears on trigger pages.

### Scenarios

**Scenario 1:**  
User lands on My VA, Contact information, or Email and text notifications with unmatched emails → system sends a confirmation email and shows the “Check your email” interstitial.

**Scenario 2:**  
User adds or updates their contact email → system sends a confirmation email and shows the “Check your email” modal.

### Edge Cases
See temporary and permanent send failure elements below.

### Interactive Elements

| **Element** | **What Triggers It** | **What the User Can Do** |
|-------------|----------------------|---------------------------|
| Email Sent | Contact email ≠ identity email AND user lands on My VA / Contact information / Email and text notifications OR user updates/adds a contact email | Resend confirmation link, update email, skip for now (interstitial only) |
| Temporary Send Failure | Confirmation email had a temporary delivery issue (inbox full, throttling, etc.) | Resend confirmation, update email, skip for now (interstitial only) |
| Permanent Send Failure | Confirmation email cannot be delivered (invalid address, blocked, etc.) | Update email (restarts flow), skip for now (interstitial only) |
| Email Confirmed | User clicks a valid confirmation link and loads a trigger page | Dismiss and continue to VA.gov |
| Email Confirmation Link Resent | User clicks “Resend confirmation link” | Dismiss modal (disappears on next page load) |
| Check Your Email — Modal | User saves a new/updated contact email that ≠ identity email | Close modal; verification continues through alerts |

---

# User Outcomes

### Desired
- Users understand which email receives important VA communications and can easily update it if it’s outdated.
- The confirmation experience feels simple, familiar, and aligned with common industry patterns.

### Undesired
- Excessive friction or frustration from repeated interstitials or alerts.
- Users who attempt verification but encounter delivery failures and get stuck seeing repeated prompts.

---

# Business Outcomes

### Desired 
- Contact emails in Profile are verified and actively monitored, improving communication reliability.
- Fewer missed notices and fewer downstream failures caused by incorrect email addresses.

### Undesired 
- Increased call-center volume caused by confusion, delivery issues, or difficulty completing verification.

---

# Measuring Success
Because we can’t run an upfront cross-system check to see how many Veterans need verification, we can’t calculate a true conversion rate for the full population. Instead, we focus on the overall increase in verified contact emails over time and use a small set of diagnostic signals to understand whether the flow is working.

### Primary Success Metric
- Total number of verified contact emails

### Diagnostic Metrics
These help us understand usage and flow effectiveness:
- Interstitial render count  
- Skip rate  
- Same-session verification completion (interstitial → success message)

These don’t measure total conversion, but they show whether the experience is understandable, trustworthy, and technically reliable.

---

# OCTO OKRs
1.3: 100% of our transactions received via our digital experiences are either processed correctly or we have notified the user of an error.  
2.2: We have reduced the total error rates in our platform by 50% compared to Q4 2024 towards a goal of less than 1% per endpoint.

---

# Important Decisions / Notes
- Campaign will run for three months. Afterward, users who never logged in will receive a one-time email prompting them to confirm their contact email.  
- It is technically too challenging to run a report ahead of this campaign to determine how many Veterans have contact emails on file that do not match their identity email.  
- In an effort to balance effectiveness with minimal user friction, we are providing a “skip for now” option in all the interstitial prompts. We do not want to disrupt key tasks.

---

# Open Questions
- Is there a way to determine or record whether a contact email was verified automatically or manually by the user?  
- Decision still pending on whether this becomes an annual or recurring effort.

---

# Research
- [Secondary research summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2025-09-email-verification-desk-research/research-findings.md)

---

# Design
- [Figma files](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-13933&t=ixwiHtvFAXdmxYor-1)

---

# Frontend
- TBD

---

# Backend
- Data flow diagram

---

# Security
- TBD
