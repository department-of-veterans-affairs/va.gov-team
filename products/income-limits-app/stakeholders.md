# Stakeholder map for Income Limits web app

Primary stakeholders are in VHA Member Services

## Relevant VA org structure

Veteran Health Administration (VHA) > [Undersecretary for Health] > Operations > Member Services

Under Member Services are:
  - Healthcare Eligibility Center (HEC)
    - EED (Enrollment and Eligibility) – _believe this is a child office to HEC_
  - Veterans Transportation Program (VTP) – manages beneficiary travel reimbursement program

## Individuals

### In HEC: 
**Business SME:**
- Lindsey Peace – our main stakeholder and SME. She works in the Income Verification Division at HEC, so she has expertise in assessing which priority group Veterans are placed (only for Veterans whose priority group is affected by income, typically groups 5-8)

**Technical SME in HEC:**
- Joshua Faulkner (tech) – tech SME regarding the Veteran Enrollment System (VES), which keeps a well-governed database of income limits/thresholds going back years
  - Josh is our key to accessing the VES database, if we use that as (part of) our database

### In EED:
**Business SMEs:**
- Simone Gully (actully Enrollment Standardization Office (ESO)) - SME on how Veterans get enrolled, and how the enrollment systems work
- Antonio Presley – SME on how Veterans get enrolled, and how the enrollment systems work

### Technical SMEs in Member Services:
- Steve Ward - Requirements Office within Member Services, reports to Eric Swain. SME in limits themselves, builds a spreadsheet with new numbers for each year and distributes to owners of various systems within VHA that need to update their limits/thresholds annually (eg VistA)
  - Steve would be a key player if we need to maintain our own database of income limits, as he is a trusted source of annual updates

### Other SMEs in Member Services
- Stacy Rine – Executive Assistant in Member Services - she and Eric Swain were our original points of contact. However, we later learned that she was associated with the old wizard for reasons of history; she passed us to HEC (Lindsey) and is no longer involved.
- Eric Swain - Systems Management at VHA - one of our original points of contact. We spoke once, but he's not hands-on with the data. May have been the project manager for the old income limits wizard. No longer involved.

## Approvals

For copy and information provided to Veterans in the app:
- Lindsey Peace has identified herself as our primary reviewer and fact checker
- She has looked to other SMEs (above) for help understanding benefits and how eligibility is determined for Veterans in certain circumstances - specifically those who receive a VA pension, aid-and-attendance, or housebound benefits.

For calcluations of the actual thresholds:
- Lindsey Peace currently has approval responsibility for the new numbers every year. However, she expressed discomfort with that and would prefer the responsibility go to a more technical stakeholder who can independently validate thresholds (e.g., against the raw HUD tables on which GMT numbers are based).
- We anticipate engaging with Steve Ward or Josh Faulkner to confirm that our app is returning the correct threshold amounts for Veterans in specific circumstances.
  - Josh's VES database has a table of GMT (geographic means test, i.e. zip code driven) thresholds which the new Income Limits app will either 1) use directly via database connection or 2) check our results against.

For annual updates of thresholds:
- TBD – We hope to leverage an external database that will be updated annually. For numbers that we have to import manually every year, we expect to have to re-certify with Josh or Lindsey

