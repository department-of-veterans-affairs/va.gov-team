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

We spoke to subject matter experts (SMEs) at the Veteran's Health Administration (VHA) and VeteranBA; a specific list of individuals we spoke to is available [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/user-roles/discovery/sme-interviews/README.md).  We initially planned to learn about NCA user roles as well, but decided to hold off for now since NCA does not have digital products that intersect with VA.gov.

### Research Questions

1. What non-Veteran user roles does each administration serve?
2. What qualifies a person as a dependent or a beneficiary? How are those roles different?
3. What is the difference between POAs, CVSOs, VSOs, and claim agents, according to each administration?
4. What qualifies a person as a caregiver?
5. What are the tasks that each user type may need to do?

## Key Findings

*Will fill this out once details are complete.*

## Finding Details

1. **Dependents** are a spouse, child (minor or helpless adult), or parent who is financially dependent on the Veteran. 

   - Dependents can also be the direct recipient of a benefit or service, such as an education benefit, and/or they could be a Veteran's caregiver. 
   - For VHA, MPI knows whether or not someone is a dependent via the `person type` attribute.
   - When a dependent's **only connection** to the VA is their dependent status, they wouldn't have a need to see information related to their Veteran (since the Veteran is the recipient of any benefits where the dependent is claimed), and they wouldn't have any benefits of their own to manage. Therefore, they wouldn't need to have their own login to VA.gov.

   **Outstanding questions**

   - Confirm this is true for VHA
   - Confirm VBA dependents will be known in MPI
   - Confirm dependent info is stored in MPI under the `person type` attribute.

2. According to VHA and VBA, **beneficiaries** are anyone who is the direct recipient of a benefit or service from VA.

   - This could be a Veteran, or a qualifying family member.
   - Each benefit has specific qualifications to determine beneficiary eligibility. 
   - Once a person is actively receiving a benefit, the tasks they would need to do on VA.gov are the same regardless of if they are a Veteran or a non-Veteran. For example, a non-Veteran beneficiary receiving education benefits should be able to update their direct deposit information or view payment history the same way a Veteran would.

   **Outstanding questions**

   - Confirm this is true for VHA
   - Confirm VBA beneficiaries will be known in MPI
   - Confirm beneficiary info is stored in MPI under the `person type` attribute.

3. The **caregiver** role has different definitions between VHA and VBA; in both cases, the caregiver's goal is to reduce the burden on the Veteran and help them receive and manage the benefits they've earned from VA.

   VHA officially recognizes caregivers through the VA Comprehensive Assistance for Family Caregivers Program. There is [specific criteria for this program clearly defined on VA.gov](https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregivers/), which includes the fact that the Veteran must be enrolled in VA healthcare, and have a service-connected illness, injury, or disability. There isn't a VBA equivalent for this program. Caregivers in this program would also be considered VA beneficiaries since they receive benefits and services from the VA, so they would have a need to access information about themselves **and their Veteran**. 

   A Veteran may need a caregiver even if they don't have a service-connected illness, injury, or disability. For example, a Veteran living with Alzheimer's disease needs full-time care. This type of caregiver would be a self-identified caregiver. Currently, a self-identified caregiver could act on behalf of a Veteran though existing VA processes:

   - The VA Online Health Delegate program (see finding 4) would give a caregiver access to some Veteran health tasks.
   - A caregiver could apply to be a Veteran's fiduciary to manage financial tasks.

   A Veteran would likely benefit from their caregiver - VA recognized or not - being able to do things on VA.gov on their behalf in the same way the Veteran would they were able to care for themselves. Examples include:

   - Managing financial information
   - Claims-related tasks, such as checking the status of a claim, or uploading any requested documentation.
   - Health-care related tasks such as communicating with a provider or refilling prescriptions. This can currently be done  through the health delegate program)

   **Outstanding questions**

   - How about nursing homes and other professional caregivers?
   - How would a self-identified caregiver help a Veteran with non-Health care tasks (filing an appeal) 
   - Is a Veteran ever managing things for themselves when they have a caregiver?
   - What is a difference between a caregiver and a delegate? Where are the areas of overlap and where are the areas of difference?
     - Does a caregiver automatically have delegate access? Why not?

4. A **delegate** role exists in VHA to refer to people who have been assigned delegate authority per the request of a Veteran through a VA health delegation program.

   Delegates are able to directly access some health information, such as upcoming appointments and prescription information,  about in MHV and some VA Mobile Apps.  They have their own login credential through ID.me and have been vetted by the VA. Two access levels and related tasks were defined in [finding 3.4 from the first phase of our research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/user-roles/discovery/non-veteran-user-roles-discovery-phase-1.md#3-learn-what-roles-exist-for-my-healthevet-mhv).  From a data perspective, the VA knows a person is a delegate based on information from the Identity and Access Management (IAM) program office, and the Master Person Index (MPI).

   A VA recognized Caregiver and a Delegate would likely need to be two separate roles on VA.gov since a VA recognized Caregiver is also a beneficiary and would need to see information about their own benefits.

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

7. **A person can have multiple relationships with the VA.** As we start to think about non-Veteran user roles, it's important to recognize that there can be overlap between one or many relationships with the VA. Some examples are:
   - A Veteran, who is also the caregiver for a friend who is a Veteran, and is a fiduciary for another Veteran.
   - A delegate who is also a beneficiary because they're receiving surviving spouse benefits.

8. We learned about high priority use cases by business line.



## Recommendations

Provide high level recommendations for categories - was our hypothesis correct?

- More research

Since non-Veteran beneficiaries are only eligible for certain benefits, we should provide guardrails to help prevent them from submitting applications for benefits they could never receive. For example, a non-Veteran spouse beneficiary should not be able to submit a claim for disability compensation, but they should be able to file a claim for VA Dependency and Indemnity Compensation.

