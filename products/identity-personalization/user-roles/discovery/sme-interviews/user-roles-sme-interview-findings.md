# Non-Veteran User Roles Research Findings

`DRAFT`

**Digital Services Veterans Affairs (DSVA), VSA, Authenticated Experience**

Liz Lantz (liz.lantz@adhocteam.us), 11/12/2021

View the [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/user-roles/discovery/sme-interviews/user-roles-sme-research-plan.md).

## Research Goals

1. Understand the unique definitions and nuances each administration has for non-Veterans.

2. Define tasks each non-Veteran user type may need to complete for each administration.

## Research Methodology

We conducted 30 minute semi-structured interviews over Zoom.

### Who we talked to

We spoke to SMEs in VHA and VBA; a specific list of individuals we spoke to is available [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/user-roles/discovery/sme-interviews/README.md).  We initially planned to learn about NCA user roles as well, but decided to hold off for now since NCA does not have digital products that intersect with VA.gov.

### Research Questions

1. What non-Veteran user roles does each administration serve?
2. What qualifies a person as a dependent or a beneficiary? How are those roles different?
3. What is the difference between POAs, CVSOs, VSOs, and claim agents, according to each administration?
4. What qualifies a person as a caregiver?
5. What are the tasks that each user type may need to do?

## Findings

1. Dependents are a spouse, child (minor or helpless adult), or parent who is financially dependent on the Veteran. 

   - Dependents can also be the direct recipient of a benefit or service, such as an education benefit, and/or they could be a Veteran's caregiver. 
   - For VHA, MPI knows whether or not someone is a dependent via the `person type` attribute.
   - When a dependent's **only connection** to the VA is their dependent status, they wouldn't have a need to see information related to their Veteran (since the Veteran is the recipient of any benefits where the dependent is claimed), and they wouldn't have any benefits of their own to manage. Therefore, they wouldn't need to have their own login to VA.gov.

   **Outstanding questions**

   - Confirm this is true for VHA
   - Confirm VBA dependents will be known in MPI
   - Confirm dependent info is stored in MPI under the `person type` attribute.

2. Beneficiaries

   - Anyone who is the direct recipient of a benefit or service from VA. This could be a Veteran, or a qualifying family member.
   - Each benefit has specific qualifications to determine beneficiary eligibility. 
   - MPI knows whether or not someone is a VHA beneficiary **need to verify VBA**
   - Beneficiary tasks are the same regardless of if they are a Veteran or a non-Veteran.
     - This needs to be better defined. Saying ^ could be confusing because someone who is not a Veteran can't apply for compensation
     - Be clear what we mean by tasks

3. Caregivers

   - May be officially recognized through the VA Caregiver Assistance Program. 
     - Veteran has to have a service connected illness or disability to qualify for a VA recognized caregiver.
     - There is specific criteria for this program clearly defined on VA.gov.
   - Can also be self-identified Caregiver. This would be for a Veteran who needs help for non-service connected illness or disability.
     - This type of caregiver could be given access to health information through the VA delegate program. **Need to verify that a delegate can also see VBA information**
   - Caregiver tasks would be the same as a Veteran's if they were able to care for themselves.
     - More definition around this, don't need to define every use case for a caregiver. In broader categories spell out - are they applying for benefits for veterans, managing financial information, is the Veteran in this case ever managing stuff for themselves 
   - **How about nursing homes and other professional caregivers?**

4. Delegates

   - This language is used in VHA to refer to people who have been assigned delegate authority per the request of a Veteran
   - This person has been vetted by VA
   - Delegates have access to their own account, and act on behalf of the Veteran, in MHV and some VA Mobile Apps
   - Delegates are added to IAM and MPI
   - What is a difference between a caregiver and a delegate? Where are the areas of overlap and where are the areas of difference? Trying to suss out do they need to be different permissions or not. Does it matter if there is a distinction?
   - Delegate could be a beneficiary (Veteran or non-Veteran)

5. Veteran Advocates

   - VSOs, Claim agents, Attorneys
     - Would need to see Veteran data related to claims **look more into this**
     - SEP and D2D would be worth looking to to better understand tasks for these users and get a sense of how their needs are being met today.
   - Fiduciaries
     - Would need to see Veteran data related to financial information
     - There's a system called VBMS FID that was recently expanded; this would be worth looking to to better understand fiduciary tasks and get a sense of how their needs are being met today.

6. 3rd-party organizations that receive payments from VA

   - Funeral homes (one-time payments)
   - Nursing homes (recurring, could be for multiple veterans)
   - State cemeteries (one-time payments)
   - Possible use cases for these users would be to see payment history and status, as well as file claims for reimbursement.
   - Burial claims can already be submitted electronically through eBenefits.
   - **We didn't talk about what system these payments are happening through - find out from Camille**

7. High priority use cases by business line

8. Provide high level recommendations for categories 

   - More research

