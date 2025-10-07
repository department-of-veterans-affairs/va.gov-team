# VA Claims Processing EP Codes to Claim Titles Reference

## Overview
This document serves as a reference for VA claims processing End Product (EP) codes, their associated claim labels, their updated plain language titles, and the logic behind those titles. This work directly supports the **Claim Status Tool Claim Titles Epic** by providing the foundational mapping between internal VA codes and veteran-facing language.

*This document directly supports the implementation of improved claim title generation logic in the `generateClaimTitle` function and related claim processing workflows.*

## Background
As part of our ongoing effort to improve how claim titles are generated and displayed in the Claim Status Tool, we identified the need to systematically document and analyze all EP codes that flow through our system. Many of these codes result in `null` claim types (resulting in incorrect claim titles) or use internal VA terminology that is confusing to Veterans.

This reference was created through collaborative analysis of VA claims data, working closely with our partners at the Office of Benefits Automation (OBA), particularly Andrew Gray, to understand the business logic behind each EP code and determine appropriate Veteran-facing language.

## Purpose
This documentation helps engineers, content designers, and product managers:
- Understand which EP codes should be filtered out from veteran-facing interfaces
- Map internal VA terminology to plain-language claim titles
- Identify the reasoning behind filtering and titling decisions
- Maintain consistency across claim status displays

**Important Note:** This is not a comprehensive list of every EP code and claim title in the VA system. Instead, this reference focuses on the most problematic codes we identified through data analysis - either because they represent the most frequently used claim titles in our system or because they displayed particularly confusing or incorrect information to Veterans.

## Team Contributors
This work represents a collaborative effort across multiple team members:
- **@cinlackey** - Content design and analysis
- **@williamphelps13** - Front-end engineer, analysis, technical implementation
- **@aurora-a-k-a-lightning** - Engineering and technical implementation
- **@jstrothman** - VA enablement team, design and content review  
- **@amylai-va** - VA enablement team, product lead and content review
- **@AndrewGrayVBA** (OBA Partner) - VA business and EP code expertise

## Status: Living Document
This is an **ongoing reference** that will be updated as we:
- Discover new EP codes in need of plain language content revisions
- Refine claim title language based on user research
- Receive updated guidance from VA partners

Last updated: [September 15, 2025]

---

# VA Claims Processing Reference

#### Quick Content Rule Reference
- **Claim:** Veteran seeks benefits | must show eligibility
- **Request:** Veteran asks for action/info | eligibility assumed
- **Review:** VA initiates verification/checking process

#### Abbreviations & Terms
- **DROC** - Decision Review Operations Center
- **FID** - VA Fiduciary (Department of Veterans Affairs program that appoints individuals to manage VA benefits for veterans and beneficiaries unable to manage their own finances)
- **LGY** - Loan Guaranty (VA Home Loan program that helps Veterans buy, build, or refinance homes with favorable terms)
- **OGC** - Office of General Counsel
- **PMC** - Pension Management Center
- **VBA** - Veterans Benefits Administration
- **VBMS** - Veterans Benefits Management System

---

## EP 010 - Initial disability compensation claims - Eight issues or more
- Initial disability compensation claims with 8 or more issues.

| EP Code | Claim Label | Logic + Background | Last updated | Plain Language Title |
|---------|-------------|-----------|------------------|---------------------|
| 010INITMORE8 | eBenefits 526EZ-Initial Live Comp 8 + Issues (010) | Previously: Claim for compensation | Oct 6, 2025 | Claim for disability compensation |
| 010LCOMP | Initial Compensation 8+ Issues | Previously: Claim for compensation | Oct 6, 2025 | Claim for disability compensation |
| 010LCOMPBDD | BDD-Initial 8+ issues | Previously: Claim for compensation | Oct 6, 2025 | Claim for disability compensation |

## EP 020 - Compensation Claims Received After the Initial Eligibility Decision
- Disability compensation or service-connected death claims received after an initial eligibility decision has been made.

| EP Code | Claim Label | Logic + Background | Last updated | Plain Language Title |
|---------|-------------|-----------|------------------|---------------------|
| 020CLMINC | Claim for Increase | Previously: Claim for compensation | Oct 6, 2025 | Claim for disability compensation |
| 020IRSCFID | FID – Incompetency Review – S/C | VA process or correction; Should never show to Veterans or other claimants; Examiner submits a Supervised Direct Pay review for service-connected beneficiary | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 020NEW | New | Previously: Claim for compensation | Oct 6, 2025 | Claim for disability compensation |
| 020NI | New/Increase | Previously: Claim for compensation | Oct 6, 2025 | Claim for disability compensation |
| 020SUPP | eBenefits 526EZ-Supplemental (020) | Previously: Claim for compensation | Oct 6, 2025 | Claim for disability compensation |

## EP 040 - Initial disability compensation claims - Eight issues or more
- A supplemental claim is filed when a Veteran disagrees with a VA decision and files again with new evidence.

| EP Code | Claim Label | Logic + Background | Last updated | Plain Language Title |
|---------|-------------|-----------|------------------|---------------------|
| 040BDER | Board DTA Error Rating |  |  |  |

## EP 110 - Initial Disability Compensation Claims - Seven Issues or Less
- Initial disability compensation claims containing seven issues or fewer.

| EP Code | Claim Label | Logic + Background | Last updated | Plain Language Title |
|---------|-------------|-----------|------------------|---------------------|
| 110INITLESS8 | eBenefits 526EZ-Initial Live Comp | Previously: Claim for compensation | Oct 6, 2025 | Claim for disability compensation |
| 110LCOMP7 | Initial Live Comp < 8 issues | Previously: Claim for compensation | Oct 6, 2025 | Claim for disability compensation |

## EP 120 - Pension Claims Received After the Initial Eligibility Decision
- Pension claims when a rating decision is needed to confirm or establish eligibility. 
- Includes situations where pension entitlement depends on factors like character of discharge or misconduct.

| EP Code | Claim Label | Logic + Background | Last updated | Plain Language Title |
|---------|-------------|-----------|------------------|---------------------|
| 120IRPFID | FID – Incompetency Review - Pension | Examiner submits a Supervised Direct Pay review for pension beneficiary | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |

## EP 130 - Disability and Death Dependency
- Claims and actions involving dependency determinations—when benefits depend on a Veteran's, dependent's, or survivor's relationship or status

| EP Code | Claim Label | Logic + Background | Last updated | Plain Language Title |
|---------|-------------|-----------|------------------|---------------------|
| 130DCY674 | Dependency 674 | Currently: Request to add or remove a dependent | Oct 6, 2025 | *Reviewed and verified as appropriate. No change needed.* |
| 130DPEBNAJRE | eBenefits Dependency Adjustment Reject | Currently: Request to add or remove a dependent | Oct 6, 2025 | *Reviewed and verified as appropriate. No change needed.* |
| 130DPNDCY | Dependency | Currently: Request to add or remove a dependent | Oct 6, 2025 | *Reviewed and verified as appropriate. No change needed.* |
| 130DPNEBNADJ | eBenefits Dependency Adjustment | Currently: Request to add or remove a dependent | Oct 6, 2025 | *Reviewed and verified as appropriate. No change needed.* |
| 130DV0537PMC | PMC - Dependency Verification - 0537 | VBA-initiated marital relationship status check (8-year check) | Sept 12, 2025 | Automatic marital status verification review |
| 130ISDDI | In Service Death Dependency Issue | Survivor and dependant compensation. A Veteran filed a disability claim, died, and the VA learned of the death before finishing the claim. "concurrent in-service death claim" | Sept 12, 2025 | Claim for compensation to a surviving dependent |
| 130YR100PMC | PMC - 100 - Year Review | VA initiated: Eligibility verification for beneficiaries age 100 or older | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |

## EP 290 - Eligibility Determinations - Other
- Adjudicative decisions involving non-standard VA benefits, elections, waivers, fiduciary issues, and other payment-related matters that don't fit standard claim categories

| EP Code | Claim Label | Logic + Background | Last updated | Plain Language Title |
|---------|-------------|-----------|------------------|---------------------|
| 290AFED | Attorney Fee Eligibility Determination | VA process or correction | Oct 6, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 290DRASED | DRAS Eligibility Determination | VA process or correction | Oct 6, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 290DV | Debt Validation | Veteran disputes debt amount, responsibility or hardship impact | Sept 12, 2025 | Request for debt review |
| 290DVPMC | PMC - Debt Validation | Veteran disputes debt amount, responsibility or hardship impact | Sept 12, 2025 | Request for debt review |
| 290EER | EDU Eligibility Rating | Claimant applies to benefits using VA Form 22-5490; provides qualifying information to show eligibility and select type of benefit (DEA or Fry Scholarship) | Oct 6, 2025 | Claim for education benefits |
| 290ELIG | Eligibility Determination | VA process or correction | Oct 6, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 290ELIGPMC | PMC-Eligibility Determination | VA process or correction | Oct 6, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 290HE7131R | Healthcare Eligibility - 731 Review | VA process or correction; Should never show to Veterans or other claimants; Identify and clarify health records from VHA to specialty | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 290INCROB | Incarceration - Resumption of Benefits | Veteran request to reinstate VA benefits after incarceration | Sept 12, 2025 | Request to restart benefits after incarceration |
| 290LGYBDD | LGY Determination - BDD | VA process or correction; Should never show to Veterans or other claimants; Filtered: work done outside VBMS | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 290LGYIDES | Pre-Discharge LGY Determination - IDES | VA process or correction; Should never show to Veterans or other claimants; Filtered: work done outside VBMS | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 290SCNR | Substitution of Claimant - Non-Rating | Substitution of a claimant request with and without a disability rating because a survivor is filling out the form to request this action | Sept 12, 2025 | Request for substitution of claimant on record |
| 290SCPMC | PMC - Substitution of Claimant (290) | Substitution request for deceased claimant because a survivor is filling out the form to request this action | Sept 12, 2025 | Request for substitution of claimant on record |
| 290SCR | Substitution of Claimant - Rating | Substitution of claimant request with and without a disability rating because a survivor is filling out the form to request this action | Sept 12, 2025 | Request for substitution of claimant on record |

## EP 330 - Reviews - Regulatory and Procedural
- Used when a claims folder is being reviewed under VA regulations, instructions, or procedures. 
- Applies to screening hospitalization reports, receipt of certain nursing home reports, and receipt of dependency verification forms.

| EP Code | Claim Label | Logic + Background | Last updated | Plain Language Title |
|---------|-------------|-----------|------------------|---------------------|
| 330DVRPMC | PMC - Dependency Verification Review | VBA-initiated dependent status check (8-year check) | Sept 12, 2025 | Automatic dependency verification review |

## EP 400 - Correspondence and Information Actions
- Disability, fiduciary, or death cases that only require a response to correspondence—such as letters, emails, forms, notices, or inquiries. 
- These cases can usually be resolved using existing records and decisions, without needing a new rating or authorization determination.

| EP Code | Claim Label | Logic + Background | Last updated | Plain Language Title |
|---------|-------------|-----------|------------------|---------------------|
| 400AFM | Attorney Fee Memo | VA process or correction; Should never show to Veterans or other claimants; Office of General Counsel (OGC) review of attorney or agent fee reasonableness | Oct 6, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 400ORR | OGC Reasonableness Review | VA process or correction; Should never show to Veterans or other claimants; Office of General Counsel (OGC) review of attorney or agent fee reasonableness | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |


## EP 510 - FOIA and Privacy Act Requests
- Either a Privacy Act (PA) request or a Freedom of Information Act (FOIA) request. 
- A PA request for records is made by the Veteran or approved representative. 
- A FOIA request can be made by anyone other than the Veteran or approved representative. 
- Additional information on the receipt of this workload can be found in the M21-1, II.i.2.D.6

| EP Code | Claim Label | Logic + Background | Last updated | Plain Language Title |
|---------|-------------|-----------|------------------|---------------------|
| 510PAR | Privacy Act Request | Freedom of Information Act or Privacy Act Request | Oct 6, 2025 | Freedom of Information act or Privacy Act request |

## EP 930 - Review, Referrals, Other
- Various corrective actions and quality assurance processes
- A catch-all code for reviews or corrections when no other EP applies and credit for the original action has already been taken.

| EP Code | Claim Label | Logic + Background | Last updated | Plain Language Title |
|---------|-------------|-----------|------------------|---------------------|
| 930CLQENR | Correction of Local Quality Error - Non-Rating | VA process or correction; Should never show to Veterans or other claimants; Correction of VA error | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |

## EP 960 - Administrative Error, Codesheet, and Master Record Corrections
- Administrative corrections and adjustments to existing records and decisions
- All filtered out for both mobile and VA.gov
- Denotes a correction VA needs to make. If there is a decision that affects the Veteran, they will be notified through the process of the EP and adjudication

| EP Code | Claim Label | Logic + Background | Last updated | Plain Language Title |
|---------|-------------|-----------|------------------|---------------------|
| 960AENR | Administrative Error Non-Rating | VA process or correction; Should never show to Veterans or other claimants; Correction VA needs to make; If there is a decision that affects the Veteran, they will be notified through the process of the EP and adjudication | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 960AENRPMC | PMC - Administrative Error Non-Rating | VA process or correction; Should never show to Veterans or other claimants; Correction VA needs to make; If there is a decision that affects the Veteran, they will be notified through the process of the EP and adjudication | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 960AER | Administrative Error Rating | VA process or correction; Should never show to Veterans or other claimants; Correction VA needs to make; If there is a decision that affects the Veteran, they will be notified through the process of the EP and adjudication | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 960AERPMC | PMC - Administrative Error Rating | VA process or correction; Should never show to Veterans or other claimants; Correction VA needs to make; If there is a decision that affects the Veteran, they will be notified through the process of the EP and adjudication | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 960CRRC | Corporate Record Rating Correction | VA process or correction; Should never show to Veterans or other claimants; Correction VA needs to make; If there is a decision that affects the Veteran, they will be notified through the process of the EP and adjudication | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 960CRRCDROC | DROC - Corporate Record Rating Correction | VA process or correction; Should never show to Veterans or other claimants; Correction VA needs to make; If there is a decision that affects the Veteran, they will be notified through the process of the EP and adjudication | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
| 960CRRCPMC | PMC - Corporate Record Rating Correction | VA process or correction; Should never show to Veterans or other claimants; Correction VA needs to make; If there is a decision that affects the Veteran, they will be notified through the process of the EP and adjudication | Sept 12, 2025 | NONE<br>*Filtered out for both mobile and VA.gov* |
---

## Organizational rules for adding EP codes to this list:

1. **Group by EP Number Family** (020s, 130s, 290s, etc.)
2. **Within each group, sort alphabetically** by EP code
3. **Preserve context** - keep relevant notes with each section
4. **Add new families** as needed when you discover new EP number ranges. Include plain language explanation of EP code derived from **Appendix B. End Product (EP) Codes:** https://vaww.vrm.km.va.gov/system/templates/selfservice/va_kanew/help/agent/locale/en-[…]034/content/554400000011474/Appendix-B-End-Product-EP-Codes
