# Claim Status Capabilities & Scope

## Scope Question: 
- All Claim Types/EVSS Types or just Compensation Disability (Straightup/Rating Bundle)
- Rating Bundle is what the "Backlog" is based on
- Average days to complete (125 days or whatnot) is based on these claim types [ https://www.vets.gov/disability-benefits/apply-for-benefits/ ]
- Benefit Claim Types include 3 digit EP and the Claim label, combined they create a code such as ###XXXXX  (ie 010LCOMPP, etc). There are multiple BNFT_CLAIM_TYPEs per actual claim type. 
- Full list of Benefit Claim Types for those on VA Network: http://vbacoda.vba.va.gov/plsql/typ_val.list_val 
- In the drop down, find BNFT_CLAIM_TYPE, and PRODTEST (the page will refresh automatically)

## Capabilities Scope:

### Detail Items:
- Date of Claim  (date the Veteran submitted the claim)
- Contentions/Conditions (what conditions/benefits the Veteran is claiming)
- Estimated Completion Date (estimated timeframe for the claim to be completed)
  - Min and/or Max Dates 
  - Estimated completion date is determined on a 3 month rolling aggregate algorithm updated every month by PA&I. It projects the estimated date of completion based on actual running claims nationwide. 
- Status (what the current status of the claim is in out of the 8 steps)
  - Currently 8 Steps/Phases
- POA (Power of Attorney) (the Veterans representative over their claim)

### Other parts:
- Document Upload / Document Display
- Tracked Items / Received
- 5103 Notice Response (Decide My Claim now) [Can we execute better, or do we remove?]
- Historical Claims
  - Completed Claims moves from Open claims to Historical
- **Are there things we could add here that would make this better?**

## Questionable Scope:
- Notifications and Alerts **(Should, who does this?. Opt-in should be a simple 'Yes' or 'No')**

## Not in Scope 
- Intent to File (Happens prior to application for ....)
- Application Status (Is the process of applying, no application to link to in vets.gov)
- Appeals Status (Different services, different process)
- Historical Appeals (same as above)
- View documents - original application, previously uploaded documents/evidence, decision letter
- Potential to pull decision forward (percentage, service connected/NSC, additional benefits)

## Migration questions:
- How do Veterans go back and forth between eBenefits and vets.gov?

## General Questions
- **Fully Developed Claim Questions - Can we see whether we have them listed as going through the FDC program**
  - (Whether we display the 5103 notice)
- Staying in Sync with Contact Centers
- Will Tier 1 HRC Support be able to answer these questions? How do we figure that out
- What is in the Profile?
  - Focus on just claim status, or a more holistic profile that will expand to include other things a vet can do - apply for health care, prescriptions, etc.
  - Where does it fit into the IA of vets.gov?
- Can we give average times for each *step* in the process?

---

## Compensation and Pension Claim Types
EPs (End Products) - 3 digit identifier

- 010/110/020 Disability Compensation (Straight up)
- 010/110/020 Pre-Discharge
- ~~010/110/020 Pension~~
- ~~130 Dependency~~
- ~~290 Drill Pay~~
- ~~290 Return to Active Duty~~
- ~~290 Automobile Allowance and Adaptive Equipment~~
- ~~290 Specially Adapted Housing / Special Housing Adaptation~~
- ~~689 IDES~~
