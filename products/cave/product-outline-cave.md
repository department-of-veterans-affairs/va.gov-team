# Product Outline: Common Attachment Validation Engine (CAVE)
---

## Overview
The Common Attachment Validation Engine (CAVE) is a backend component that uses intelligent OCR to automatically process and extract relevant information from unstructured document attachments, streamlining the benefits application process for Veterans and surviving family members.

## Problem Statement
Currently, the documents that claimants need to support their benefits applications are either:
- mailed to VA to be scanned into the Centralized Mail Portal and reviewed by a processor from there
- attached to a VA.gov web form, which is submitted as a concatenated PDF to the Centralized Mail Portal and reviewed by a processor from there

In either transmission pathway, the attached documents must be reviewed by a human to have any data extracted from them in support of the claim. This increases the Average Days to Complete the claim and introduces the possibility of error from human transcription.

**Pilot test case**: surviving spouses and children of deceased veterans face a cumbersome, paper-based process when applying for Dependency and Indemnity Compensation (DIC) benefits through VA Form 534EZ. The current process requires manual submission of numerous supporting documents (death certificates, marriage certificates, birth certificates, military service records, etc) that VA staff must manually review and process, leading to significant delays in benefit delivery during an already difficult time for grieving families.

How might we streamline the benefits application process by using CAVE to automatically extracting relevant information from supporting documents? Would this reduce processing time and minimize the burden on Veterans and surviving family members?

## Desired User Outcomes

- Pilot test case: Surviving family members can complete the 534EZ application entirely online without needing to mail physical documents
- Automatic document processing reduces the need to manually enter information that already exists in supporting documents
- Faster application processing times due to automated data extraction and validation
- Reduced errors in applications due to automated data validation and pre-population

## Undesired User Outcomes

- Users become frustrated with technology barriers or complex digital processes
- User lacks clarity on what evidence they need/don't need to send to VA
- Automated document processing introduces errors or misinterprets critical information
- Users lose trust in the system due to privacy concerns about document scanning/processing
- Digital divide excludes users who prefer or need paper-based processes
- System downtime or technical issues prevent access to benefits applications


## Desired Business Outcomes

- Reduced manual processing workload for VA staff, allowing focus on more complex cases
- Faster benefit delivery to eligible surviving family members, improving customer satisfaction
- Lower operational costs through automation of routine document processing tasks
- Improved data quality and accuracy through automated validation and extraction
- Enhanced compliance and audit trails through digital documentation
- Scalable processing capability that can handle volume fluctuations without proportional staffing increases
- Better analytics and insights into application patterns and processing bottlenecks

## Undesired Business Outcomes

- Increased technology support burden due to complex AI/ML systems
- Higher upfront development and maintenance costs that don't deliver expected ROI
- Privacy or security breaches related to document processing and storage
- Over-reliance on automated systems leading to reduced human oversight where needed
- System failures that disrupt benefit processing and damage VA reputation
- Regulatory or compliance issues related to automated decision-making in benefits processing


---
## Measuring Success


### Key Performance Indicators (KPIs)
Track quantitative and qualitative data to measure success of CAVE's automated document processing capability.

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      | Average Days to Complete (ADC) | .... | .... | .... |
| KPI      | Average Days Pending (ADP) | .... | .... | .... |

#### Baseline KPI Values
* Current paper-based Form 534EZ processing time: TBD
* Current user satisfaction: Unknown (no digital feedback mechanism)

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Make attached evidence documents immediately actionable with submitted claims
  - **Pilot test case**: Streamline Survivors Benefits applications for surviving family members
  - Key result: Reduced average days pending (ADP) and Average Days to Complete (ADC)
    - current baseline TBD


---

## Assumptions
- Veterans and surviving family members have access to digital devices and internet connectivity to complete online applications
- Required supporting documents (death certificates, marriage certificates, etc.) are available in common digital formats (PDF, JPG, PNG)
- AI/ML document processing can achieve 95%+ accuracy on unstructured documents with varying formats and quality
- Current VA.gov infrastructure can handle the additional processing load from document analysis
- Veterans' families prefer digital processes over paper-based applications when properly designed

## Solution Approach

We will create a CAVE backend component in which a multi-modal AI will extract data from supported document types. The CAVE backend will then return the extracted data to the web form UI for the user to either validate or edit the extracted data before submission. The user-validated data will be provided to downstream benefits intake systems.

This component will be hosted in the ARCHES environment until a long-term home is determined by VBA leadership.

Pilot test case: The CAVE backend will be utilized with the 534EZ. The first set of evidence documents to be processed are Death Certificates and DD-214s. In the next phase of development, an additional set of documents will be added to CAVE's capabilities, including Birth Certificates, Adoption Decrees, Marriage Licenses, and Divorce Decrees.

- **Why this approach**: A phased approach reduces risk by allowing us to validate user adoption of the digital form before investing heavily in AI/ML processing. 

- **Explicitly excluded from initial release**:
  - Advanced document types beyond the core requirements
  - Integration with external data sources (Social Security, DoD records)
  - Mobile application functionality (web-first approach)

- **Future evolution**: After validating core functionality, we will expand document types, add more complex data cross-validation logic, and explore integration swith external systems for additional data validation.

### Supporting research

- This work is **currently supported by an ongoing user research effort** specific to Form 534EZ digitization. [LINK TO THAT TICKET]

### Initiatives
- N/A

---

## Launch Strategy
- TBD
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *MVP: 11/11/2025*
- *Enhanced Form Submission: 3/30/2026*

---

## Solution Narrative

### Current Status
- **Development**: ...

### Key Decisions
- **Decision**:  ...
- **Rationale**: ...

---

## Screenshots

### Before

N/A - this is net-new functionality in the VA.gov web form space

### After

[Figma Hi-Fi designs - Step 7 "Not MVP" screens of the 534EZ](https://www.figma.com/design/V3cbNeCKbQG4rlovLsZC8U/VA-Form-21P-534EZ?node-id=24-24818)

---

#### Communications

<details>

- Team Name: Benefits Intake Optimization (BIO) - Huntridge Labs
- GitHub Label: vfs-bio-huntridge
- Slack channel: #bio-huntridge
- Product POCs: Eric Henne, Daniel Gifford, Amanda Reck, Laura Kruschke
- Stakeholders: VA Pension Management Center, VBA Regional Offices, Office of Information and Technology

</details>

#### Team Members

<details>

 - DEPO Lead: Matthew Dingee
 - PM: Meaghan Sullivan
 - Engineering: Jee Vang
 - Research/Design: Jordan Wood

</details>


#### Stakeholders

<details>

**Critical offices/departments for initiative success:**
- VA Pension Management Center (PMC) - Primary processing center for DIC benefits
- VBA Regional Offices - Field offices that handle initial application review
- Office of Information and Technology (OIT) - Technical infrastructure and security
- Veterans Experience Office (VEO) - User experience and accessibility standards
- Office of General Counsel - Legal compliance and automated processing approval
- Veterans Service Organizations - Outreach and user advocacy

</details>
