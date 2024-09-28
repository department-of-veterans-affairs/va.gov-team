# Findings on Claim Denial Reasons 

An overview of observations and findings about the reasons claims are denied and how those denials are currently communicated to Veterans.  See discovery process documented in this [ZenHub epic](https://app.zenhub.com/workspaces/beneficiary-travel-btsss-65147e21930cd900223d8e64/issues/gh/department-of-veterans-affairs/va.gov-team/90701) 

### Reasons for Denial/Rejection

#### Categories (broadly)

1. Veteran is ineligible - don’t meet income/disability rating thresholds (earn too much, not a high enough disability rating)
2. Too long has passed - it’s been 30+ days since the qualifying event
3. Distance is too far - “Distance between claim address and facility is greater than the Max Distance global or facility setting.” (DE001)  What this means according to the description: there was a closer location the Veteran could have gone to.  Assume that means that the max distance is the distance from residence to closest service provider facility.    
4. Went to a facility the Veteran isn't eligible for 
    1. Rejection reason DE003: There is a closer facility with the same parent facility as the home facility, or the appointment is at a facility not related to the home facility.
5. Missing information about the Veteran submitting (ie, banking info, SSN)
6. Missing claim evidence (eg receipts)
7. Missing verification (in Vista)
8. Filed for an appointment type which is not eligible (only Environmental Health is specifically called out)
9. Duplicate claim 
10. Technical error of some sort (eg., bing maps issue, also potentially missing verification)

#### Frequency

1. Using data from the ‘Last Failed Code’ sections, the most frequently used final denial reasons are rejection codes are 
    1. RE001 (‘Greater than 30 calendar days’) and
        1. RE001 comprised 20% of denied claims that were submitted in June 2024 and 20% of denied claims submitted in 9/3 - 9/11/24
    2. AE002 (‘Appointment for claim is marked not completed and appointment date > 2 days in past.’)
        2. AE002 comprised 18% of denied claims that were submitted in June 2024 and 32% of denied claims submitted in 9/3 - 9/11/24.

<img width="1350" alt="Screenshot 2024-09-19 at 3 58 07 PM" src="https://github.com/user-attachments/assets/ce473449-2f0e-4b42-99bf-9e3fc68bb3dc">
Denied claim codes for claims submitted in June 2024

See all the Travel Claim Rejection Codes along with counts from June 2024 claims and a week in September 2024 claims:
[Travel Claim Denial reasons.xlsx](https://github.com/user-attachments/files/17066632/Travel.Claim.Denial.reasons.xlsx)

### How reasons for denial/rejection are communicated to the Veteran in BTSSS 

BTSSS on-screen experience: In the Portal, the Veteran (or any other claimant like a Caregiver or Donor) can navigate to the Claim Details page for one of his/her specific claims (in this case, one of Nolle Barakat’s denied claim) and then expand it to see the claim information, including (1) the rejection reason and description and (2) below that a link to download a copy of the denial letter or a copy of the right to appeal VA form (they’re separate links).

<img width="673" alt="Screenshot 2024-09-19 at 4 09 17 PM" src="https://github.com/user-attachments/assets/10793676-276c-4cdb-8417-364fc14012b7">

Once a denial code is attached to a claim, it is always attached to it.  The Travel Clerk “translates” all of these codes for the Veteran in the “Description” section - for the Clerk this is the “Last Failed Rule Description” section but the Veteran sees this as the “Rejection Reason - Description” section

Example of a filled out Rejection Letter that would be sent to a user (made in BTSSS QA) 

[Rejection Letter_test account QA_82024 (2).docx](https://github.com/user-attachments/files/17066710/Rejection.Letter_test.account.QA_82024.2.docx)

