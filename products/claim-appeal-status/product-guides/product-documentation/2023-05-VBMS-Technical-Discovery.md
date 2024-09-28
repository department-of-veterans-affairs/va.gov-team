> **Note** Open Questions 
> 
> **Other Claim Type Handling** \
> Do other types of claims get processed in VBMS besides disability compensation?  
> How do you create those claims in VBMS? (Dependency claims and Claims for Regulatory or Procedural Review?


**Last Updated** May 3, 2023

# Overview
VBMS Contains 3 Separate Applications with 3 different UIs forcused on different phases of the claims processing flow: **VBMS Core**, **VBMS-R**, and **VBMS-A**.

## System History
VBMS was developed in 2013/2014, consolidating 3 separate legacy systems. The systems had separate logins and didn't talk to each other.

- CORE used to be MATB(?)
- VBMS-R used to be RBA
- Awards used to be generated under manual letters through PCGL (VetsNET)

## Scope
#### Disability Claims
VBMS is used to process Disability Claims (526ez) and Supplemental
Claims.

#### Freedom of Information Act
Freedom of Information Act Claims are managed in VBMS, not worked by
VSRs. These claims show up if the veteran requests their claim file
(c-file). Along with the evidence, veteran records and medical records,
veterans will also gain access to notes in the claim.

#### Appeals
Appeals are not handled through VBMS, but are rather handled through Caseflow / BVA.

## Future Development
There's a future effort to incorporate the initial claims process for
HLR into VBMS Core (Upcoming development effort) - the goal is to be
able to establish and work the claim - it's unclear if workload
management will be included as a part of this effort.

## Documentation
A help manual exists for VBMS Core **(vbms_user_guide.pdf)**

---

# Claims Processing Workflow

## Conceptual / Logic Model
- VBMS File (one per veteran)
- Claim (Exists as multiple EP, with only one unique initial claim)
- Contention (Multiple contentions to each claim)
- Tracked Item (Multiple to each contention)

---

## Claim Development
performed by VSRs in VBMS Core. The claim stays with the VSR until the claim is fully ready for decision (RFD.

### Intake / Claim Establishment
VSRs receive claim the assignment from the NWQ or Create New Claim
<details>
<summary>More Details</summary>
   
>  ##### Claim Cancellation
>  Erroneous EPs get canceled for claims that won't be rated or decided.
>  EP930 is used when there's an admin error leading to closing a claim.
>  Duplicate claims are coded as DUP.
>
>  ##### Claim Creation
>  Most claims are come established in the and are picked up from the
>  national work queue. VSRs can also create a new claim via the actions
>  menu in the Veteran File. In the claim, some pre-populated based on
>  information in the profile. Multiple payees can be created.
</details>


### Pre-Development / Claim contention identification and classification
- Review the claim to ensure there's enough clarity to **classify each contention** listed in the claim
- **Request clarification** from the veteran as needed

<details>
<summary>More Details</summary>
   
>  Once the Claim (EP) is established, VSRs review 526 for what the veteran 
>  is claiming and create contentions relating to the issues mentioned. 
>  New contentions are dated from the time of receipt of the 526ez. 
>  Classification allows for the VBA to evaluate the validity and rate each
>  claim contention. The rating of the contentions determines how the claim 
>  is awarded. Tools and training are available to help VSRs classify contentions.
>
>  Contentions aren't static. They can change in the process of claim processing.
>  In the system, this is described as "alternate contention". For example, a 
>  veteran might submit a claim listing "heartburn." However, following medical 
>  evaluation, this may be relabeled as "GERD." The updated contention label is
>  qualified in a notification letter as "GERD" - claimed as "heartburn."
>  Work is happening to try to reduce the number of classifications VSRs select from.
</details>

### Development
1. **Gather and review veteran service and medical records**
2. **Create tracked items/requests**
   Order exams and request evidence based on the contentions listed in the claim.
   Frequently, as the claim goes through the adjudication process additional
   evidence is requested. This is why discreet progress during "Evidence gathering,
   review and decision" is not provided - to avoid veterans seeing their claim go
   from "decision" back to "evidence gathering."
   
   <details>
   <summary>More Details</summary>
   
   >  Once a contention is classified, DBQ's (Public Disability Benefits
   >  Questionnaires) are attached to the claim, and exams are requested to
   >  gather the medical information required to continue processing the
   >  claim. Classification allows informs how the contention is rated.
   >  Contentions can be evaluated through a physical exam, a virtual exam or
   >  a review of medical records (ACE Exam, Acceptable Clinical Evidence
   >  review). Exams are managed through EMS (built into the VBMS)
   >
   >  **Time to respond / Suspense Date** \
   >  Once the tracked item is created, a **suspense date** is applied to the tracked item and is automatically set to 30 days from the tracked item creation date. The suspense date is defined as when a response is needed by. The updated suspense date is also applied to the claim set to the longest suspense date in the c-file (claims file). Certain items have longer suspense dates. 
   >
   >  **Duty to Assist** \
   >  When requests are made to third parties, the VA has a "duty to assist" in gathering evidence.
   >
   >  **Create Tracked Item** \
   >  1. Identify what tracked item is needed \
   >  Classification establishes the diagnostics that the veteran will need to complete (these items are related to body systems)
   >  2. Select development action \
   >     Select a **letter with a tracked item type** from the development actions menu (e.g., "Subsequent development letter" for a buddy statement)
   >  3. Add request description \
   >     Select "What we need" and add a **request description** (e.g., "Please provide a statement from your friend Joe about the accident you were in.") 
   >  4. Append tracked time to contention
   
   </details>  
   
3. **Monitor / process tracked items, Review claim for completion**
   Follow the tracked items in the claim to ensure all exams have been completed and evidence has been received

   <details>
   <summary>More Details</summary>

   >  **VBMS Items** \
   >  If evidence is received VBMS e-folder, tied to a tracked item, the item in VBMS will be moved from NEEDED to SUBMITTED_AWAITING_REVIEW
   >
   >  **Submission of multiple documents of the same type** \
   >  Veterans can have more than one buddy statement as long as they were sent on different dates/individuals
   >
   >  **Tracked Items with exemptions** \
   >  If there are tracked items with exemptions get flagged to get picked up in the national work queue. After getting assigned to and admin, an admin will run a report and process the tracked item.
   >
   >  **Additional Tracked Items (Uploaded Items)** \
   >  If a veteran submits evidence not associated with a request for them VSRs don't receive alerts for the item. These are considered "additional tracked items". The VSRs will review the claim when the suspense reason is past due for the claim. Once reviewed, the VSR will update the tracked items and take the next appropriate action
   >   
   >    **Additional Evidence Provided against Satisfied Requirements** \
   >     Veterans can submit evidence throughout the claim lifecycle up to the date the claim is up for decision, even if the request has already been met.
   >      - VSR will review evidence, and sends follow-up if needed
   >      - RVSRs are responsible for reviewing all evidence of record
   </details>
   
4. **Mark Claim as RFD** 
   Once all requests are ("closed," "received," or "in error"), mark the claim as RFD. In many cases, this will be triggered automatically. Items labeled as "exempted tracked items" require manual review and can keep the claim from moving forward

## RVSR Review (Claim Rating)
Performed by RVSRs in VBMS-R (Rating)
- **Review claims for completion** and **rate contentions**

## Claim Promulgation and Authorization
Performed by Post-VSRs in VBMS-A (Awards)
- **Administers the monetary award for the claim** and **release the decision letter** to the Veteran

---

# Additional Claims Processing Procedures / Actions

**Veteran File Creation** \
Veterans filing a 526 with no profile in VBMS need to create a veteran
file under their SSN.

**Claim Consolidation** \
RSVR can review and consolidate contentions across EPs

**Multi-Contention Claim Processing** \
It's possible for claims to be open, with certain contentions decided and others in review (as is the case with [this ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/56112))
Contentions are adjudicated in the order in which they are entered. Those entered last are adjudicated last. If there are remaining contentions in review, the EP (claim) remains open.

> **Decided Contentions** \
>  Contentions that are decided have a rating attached.
>  TheClaims status might show as "rating compelte."
>
> **Deferred Contentions** \
>  Contentions in progress are flagged as deferred.
>  The claim status might show as "secondary rating needed - one contention still outstanding" one condition still outstanding).
>  An RSVR will keep a contention open if the ***duty to assist*** hasn't been fulfilled for one or more of the tracked items in the claim.
