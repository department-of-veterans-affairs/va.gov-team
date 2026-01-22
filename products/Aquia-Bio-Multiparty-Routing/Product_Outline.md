# Multi-Party Routing & Digital Signature — Product Outline

## Overview
*The team will build a reusable multi-party routing and digital signature capability that allows multiple individuals—such as Veterans, caregivers, medical providers, and employers—to complete and sign different sections of a VA form online. The first pilot is Form 21-2680, which requires both the Veteran and a licensed medical provider to complete separate sections and provide independent signatures. The goal is to create a standalone feature that can be implemented quickly across all 3rd-party forms used at VA.*

## Problem Statement
*Processing VA forms that require input and signatures from more than one party (e.g., Veteran + medical provider) is currently paper-based, disjointed, and highly error-prone. Veterans must print or download the form, fill out their part, physically route it or bring it to a provider, wait for the provider to return it, and then either mail or upload the scanned document.*

This results in:

- High error rates due to incomplete, illegible, or incorrectly filled out forms  
- Lost or incomplete documents  
- Provider burden and friction  
- Long claim-processing delays  
- No real-time visibility for the Veteran  

**How might we create a seamless, secure, digital experience that allows multiple parties to complete and sign their respective sections without paper, enabling faster, more accurate benefit delivery for the Veteran?**

## Desired User Outcomes
- Veterans can complete and sign their portion of a form and digitally route required sections to a third party (e.g., medical provider).  
- Providers can securely access only their required form sections and sign digitally—with ID.me account
- Users can track the status of their form (sent, received, completed, submitted).  
- Veterans no longer need to print, mail, hand-carry, or scan multi-party forms.  
- Errors and missing signatures are reduced automatically by guided digital input.

## Undesired User Outcomes
- No user should see another party’s private information beyond what is needed.  
- This approach should not make form completion slower or more complex.

## Desired Business Outcomes
- Reduce burden and error rates for multi-party forms like 21-2680.  
- Reduce claim-processing cycle time and manual follow-up workload for VBA employees.  
- Increase accuracy and completeness of data.  
- Establish a repeatable, scalable capability for multi-party workflows across VA.

## Undesired Business Outcomes
- Creating a system difficult to scale to future forms.  
- Introducing operational or support burdens.
- Increased time to complete forms 

---

## Measuring Success

### Key Performance Indicators (KPIs)
- Number of forms filled out 100% online 
- Time to complete for Veterans/Providers   
- _Include links to Domo or GA dashboards when available._

### Baseline KPI Values
- There are currently 80k forms per year that are all filled out on paper and either maield in or uploaded. It is unknown how Veterans get forms to providers ie bring to appoitment fax, email, mail 

### Objectives & Key Results (OKRs)

**Objective:** Reduce the burden and delay caused by multi-party medical evidence collection for Aid & Attendance.

- **KR:** Reduce incomplete 2680 submissions by 30% within 90 days of launch.  
- **KR:** Achieve 50% provider digital completion rate for routed sections within 6 months of known ID.me penetration which is 20-30% 
- **KR:** Reduce average total completion time from >30 days to <10 days for addressable users (ID.me users) 

---

## Assumptions
- Using ID.me for 3rd party authentication is the riskiest assumption. Current ID.me adoption rate is ~25–30%.  
- Providers will trust VA and the digital workflow once authenticated.  
- Provider identity verification improves business outcomes (fraud reduction, legitimacy).  
- Routing logic can be reused across other forms.

---

## Solution Approach

### What We Will Build Now (Pilot Scope)
- Multi-party routing using Form 2680 as the pilot (Veteran → provider).  
- Provider authentication via ID.me.  
- Provider digital form completion + digital signature workflow.  
- Veteran digital signature workflow.  
- Automated routing, reminders, and status notifications.  
- Consolidated final form package with identity-verified signatures.

### Why This Approach?
- ID.me authentication is desired by business and is the accepted method on VA.gov.

### What We Are *Not* Building for MVP
- EHR/FHIR integration for provider lookups (future exploration).  
- Multi-provider routing (limited to one 3rd party in MVP).  
- Signature delegation or proxy signing.

### How the Solution Evolves After MVP
- Scale routing engine to additional forms.  
- Introduce AI-extracted structured medical evidence.  
- Explore EHR-based medical record extraction.

## Supporting Research
- Strong research basis: Veterans face delays waiting for provider signatures.  
- Provider workflow research planned around:
  - ID.me usability  
  - Time-on-task impacts  
  - Authentication friction and recovery  

## Initiatives
- Initiative | [Link to Initiative Brief](#)

---

## Launch Strategy
- How will Veterans and providers learn about this product?  
- What outreach or communications are required?  
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- **Target Launch Date:** TBD  
- **Actual Launch Date:** TBD  
- **Impact Review Date:** TBD  

---

## Communications
<details>

- Team Name:  Aquia Bo 
- GitHub Label:  benefits-optimization-aquia | benefits-optimization 
- Slack channel: #benefits-intake-optimization
- Product POCs:  Leah Keeler
- Stakeholders:  Dennis Peterson, Michael Young

</details>

## Team Members
<details>

- DEPO Lead:  
- PM:  
- Engineering:  
- Research/Design:  

</details>

## Stakeholders
<details>

_Identify offices/departments critical to success._

</details>

