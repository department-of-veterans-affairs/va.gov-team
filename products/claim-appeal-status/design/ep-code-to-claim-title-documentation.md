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

## EP 960 - Filtered Out
*Filtered out for both mobile and VA.gov*
- Should never show to Veterans or other claimants
- Correction VA needs to make
- If there is a decision that affects the Veteran, they will be notified through the process of the EP and adjudication

_**NOTE:** Pension Management Center (PMC), Decision Review Operations Center (DROC)_

| EP Code | Claim Label | Logic + Background | Plain Language Title |
|---------|-------------|-----------|---------------------|
| 960CRRC | Corporate Record Rating Correction | Correction VA needs to make | NONE |
| 960CRRCPMC | PMC - Corporate Record Rating Correction | Correction VA needs to make | NONE |
| 960CRRCDROC | DROC - Corporate Record Rating Correction | Correction VA needs to make | NONE |
| 960AER | Administrative Error Rating | Correction VA needs to make | NONE |
| 960AERPMC | PMC - Administrative Error Rating | Correction VA needs to make | NONE |
| 960AENR | Administrative Error Non-Rating | Correction VA needs to make | NONE |
| 960AENRPMC | PMC - Administrative Error Non-Rating | Correction VA needs to make | NONE |

## EP 290 - Filtered Out (Some)
*Filtered out for both mobile and VA.gov*
- Should never show to Veterans or other claimants
- VA process: adjudicative decisions
- Cleared upon a favorable or unfavorable substitution determination

_**NOTE:** LGY is Loan Guaranty the VA Home Loan program, which helps Veterans buy, build, or refinance a home with favorable terms_

| EP Code | Claim Label | Logic + Background | Plain Language Title |
|---------|-------------|-----------|---------------------|
| 290HEF73R | Healthcare Eligibility - 731 Review | Identify and clarify health records from VHA to specialty | NONE |
| 290LGYDES | Pre-Discharge LGY Determination - IDES | Filtered: work done outside VBMS | NONE |
| 290LGYEDD | LGY Determination - BDD | Filtered: work done outside VBMS | NONE |

## General Filtered Out
*Filtered out for both mobile and VA.gov*
- Should never show to Veterans or other claimants
- VA process or corrections

_**NOTE:** FID is the VA Fiduciary, the Department of Veterans Affairs program that appoints individuals to manage the VA benefits of veterans and other beneficiaries who are deemed unable to manage their own finances; OGC is Office of General Counsel_

| EP Code | Claim Label | Logic + Background | Plain Language Title |
|---------|-------------|-----------|---------------------|
| 020BSCFID | FID - Incompetency Review - S/C | Examiner submits a Supervised Direct Pay review for service-connected beneficiary | NONE |
| 020BPFID | FID - Incompetency Review - Pension | Examiner submits a Supervised Direct Pay review for pension beneficiary | NONE |
| 130YR100PMC | PMC - 100 - Year Review | VA initiated: Eligibility verification for beneficiaries age 100 or older | NONE |
| 400ORR | OGC Reasonableness Review | Office of General Counsel (OGC) review of attorney or agent fee reasonableness | NONE |
| 930CLQENR | Correction of Local Quality Error - Non-Rating | Correction of VA error | NONE |

## EP 290 - Eligibility Determinations (Other)
*Used for adjudicative decisions involving non-standard VA benefits, elections, waivers, fiduciary issues, and other payment-related matters*

| EP Code | Claim Label | Logic + Background | Plain Language Title |
|---------|-------------|-----------|---------------------|
| 290SCPMC | PMC - Substitution of Claimant (290) | Substitution request for deceased claimant because a survivor is filling out the form to request this action | Request for substitution of claimant on record |
| 290SCR | Substitution of Claimant - Rating | Substitution of claimant request with and without a disability rating because a survivor is filling out the form to request this action | Request for substitution of claimant on record |
| 290SCNR | Substitution of Claimant - Non-Rating | Substitution of a claimant request with and without a disability rating because a survivor is filling out the form to request this action | Request for substitution of claimant on record |

## Other 'null'
*Other previously 'null' states not in the above categories*

| EP Code | Claim Label | Logic + Background | Plain Language Title |
|---------|-------------|-----------|---------------------|
| 130ISDDI | In Service Death Dependency Issue | Survivor and dependant compensation. A Veteran filed a disability claim, died, and the VA learned of the death before finishing the claim. "concurrent in-service death claim" | Claim for compensation to a surviving dependent |
| 330DVRPMC | PMC - Dependency Verification Review | VBA-initiated dependent status check (8-year check) | Automatic dependency verification review |
| 130DV0537PMC | PMC - Dependency Verification - 0537 | VBA-initiated marital relationship status check (8-year check) | Automatic marital status verification review |
| 290DVPMC | PMC - Debt Validation | Veteran disputes debt amount, responsibility or hardship impact | Request for debt review |
| 290DV | Debt Validation | Veteran disputes debt amount, responsibility or hardship impact | Request for debt review |
| 290INCROB | Incarceration - Resumption of Benefits | Veteran request to reinstate VA benefits after incarceration | Request to restart benefits after incarceration |
