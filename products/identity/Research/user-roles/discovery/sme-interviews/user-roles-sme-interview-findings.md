# Non-Veteran User Roles Research Findings

**Digital Services Veterans Affairs (DSVA), VSA, Authenticated Experience**

Liz Lantz (liz.lantz@adhocteam.us), 11/22/2021

## Research Goals

1. Understand the unique definitions and nuances each administration has for non-Veterans.

2. Define tasks each non-Veteran user type may need to complete for each administration.

## Research Methodology

We conducted 30 minute semi-structured interviews over Zoom.

### Who we talked to

We spoke to subject matter experts (SMEs) at the Veteran's Health Administration (VHA) and Veterans Benefits Administration; a specific list of individuals and areas of expertise is available [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/user-roles/discovery/sme-interviews/README.md).  

We initially planned to learn about NCA user roles as well. Per OCTO leadership, we decided to hold off for the time being since we don't have tools relevant to NCA on VA.gov.

### Research Questions

1. What non-Veteran user roles does each administration serve?
2. What qualifies a person as a dependent or a beneficiary? How are those roles different?
3. What is the difference between POAs, CVSOs, VSOs, and claim agents, according to each administration?
4. What qualifies a person as a caregiver?
5. What are the tasks that each user type may need to do?

## Key Findings

1. A **dependent** is someone who has a legal relationship with the Veteran, and is financially dependent on the Veteran. Dependents may or may not also be beneficiaries.
2. A **beneficiary** can be anyone who is the direct recipient of a benefit or service from VA. In VBA, the term is also used to refer to a person the Veteran has named to receive their benefit in the future.
3. A Veteran's **caregiver** is a person who provides support to the Veteran. Caregivers could be individuals who are officially recognized by the VA, self-identified individuals, or professional caregivers.
4. A **delegate** role exists in VHA to refer to people who have been assigned delegate authority per the request of a Veteran through the VA online health delegation program. VBA does not have a specific delegate role.
5. **VSO representatives, claim agents and attorneys** are accredited individuals who assist Veterans and their families with claims. VBA and VHA definitions of these roles are consistent.
6. A **fiduciary** is a person who manages financial affairs for a Veteran. VBA and VHA definitions of this role are consistent.
7. **Power of Attorney (POA)** refers to a person who the Veteran has given power of attorney to act on their behalf at the VA. 
8. There are also 3rd-party organizations that receive payments from VBA, such as funeral homes, state cemeteries and nursing homes. 
9. A person can have one or more of user roles defined in the previous findings.
10. Beneficiary and caregiver use cases are highest priority for the VA business lines we spoke with.

## Finding Details

1. A **dependent** is someone who has a legal relationship with the Veteran, and is financially dependent on the Veteran. Dependents may or may not also be beneficiaries.

   - VHA and VBA recognize spouses, minor children, and adult children who are unable to live independently as dependents.
   - VBA also recognizes parents as dependents; VHA does not.
   - When a dependent's **only connection** to the VA is their dependent status, they wouldn't have a need to see information related to their Veteran (since the Veteran is the recipient of any benefits where the dependent is claimed), and they wouldn't have any benefits of their own to manage. Therefore, it's unlikely they would need their own login for VA.gov when this is the case.

2. A **beneficiary** is anyone who is the direct recipient of a benefit or service from VA. In VBA, the term is also used to refer to a person the Veteran has named to receive their benefit in the future.

   - A beneficiary could be a Veteran, or a qualifying family member.
   - Each benefit has specific qualifications to determine beneficiary eligibility. 
   - Once a person is actively receiving a benefit, the tasks they would need to do on VA.gov are the same regardless of if they are a Veteran or a non-Veteran. For example, a non-Veteran beneficiary receiving education benefits should be able to update their direct deposit information or view payment history the same way a Veteran would.
   - A beneficiary isn't always a dependent. For example, a caregiver can be a beneficiary but wouldn't necessarily be a dependent of the Veteran.
   - Beneficiary data currently lives in the VA Corporate Database (sometimes called CorpDB), and is correlated to the Veteran file number.  Efforts are currently underway to add a beneficiary `PERSON_TYPE` to MPI.

3. A Veteran's **caregiver** is a person who provides support to the Veteran. Caregivers could be individuals who are officially recognized by the VA, self-identified individuals, or professional caregivers.

   3.1 VHA officially recognizes caregivers through the VA Comprehensive Assistance for Family Caregivers Program (PCAFC) and the Program of General Caregiver support services (PGC). Each program has specific eligibility criteria, which includes the fact that the Veteran must be enrolled in VA healthcare. 

   - There isn't a VBA equivalent for these programs. 
   - Caregivers in the PCAFC program could also be considered VA beneficiaries since they receive benefits and services from the VA. They could have a need to access information about themselves **and their Veteran**, depending on the level of care the Veteran needs. 
   - Participation in these programs doesn't automatically authorize the caregiver to access Veteran information.

   3.2 A Veteran may have a caregiver who doesn't participate in either program. This type of caregiver would be considered a self-identified caregiver. Currently, a self-identified caregiver could act on behalf of a Veteran though existing VA processes:

   - The VA Online Health Delegate program (see finding 4) would give a caregiver access to some Veteran health tasks.
   - A caregiver could apply to be a Veteran's fiduciary to manage financial tasks.

   3.3 Veterans may have professional caregivers who provide a level of service ranging from a weekly home visit to live-in care at a nursing home. When these caregivers are provided by the VA, they can have varying levels of access to the Veteran's information based on the Veteran's need and type of care provided.

   3.4 Depending on the level of care they need, a Veteran could benefit from their caregiver - VA recognized or not - being able to do things on VA.gov on their behalf in the same way the Veteran would they were able to care for themselves. Some Veterans only need physical care for specific tasks (e.g. bathing) while other Veterans need assistance for many tasks in daily living.

   Examples include:

   - Managing financial information.
   - Claims-related tasks, such as checking the status of a claim, or uploading any requested documentation.
   - Health-care related tasks such as communicating with a provider or refilling prescriptions. This can currently be done online through the health delegate program, but it appears this is not widely known among caregivers.

   There aren't any clear rules about whether a caregiver should be allowed access to a Veteran's information; it's generally determined on a case-by-case basis.

   3.5 Secure messaging is currently one of the biggest painpoints for caregivers, since the caregiver can't communicate as themselves (unless they are an official delegate), and can't easily communicate without necessarily including the Veteran. 

4. A **delegate** role exists in VHA to refer to people who have been assigned delegate authority per the request of a Veteran through the VA online health delegation program. VBA does not have a specific delegate role.

   - A delegate does not have to be a dependent or a beneficiary.
   - Delegates are able to directly access some Veteran health information online, such as upcoming appointments and prescription information, in MHV and participating VA Mobile Apps.  They have their own login credential through ID.me. Two access levels and related tasks were defined in [finding 3.4 from the first phase of our research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/user-roles/discovery/non-veteran-user-roles-discovery-phase-1.md#3-learn-what-roles-exist-for-my-healthevet-mhv).  From a data perspective, the VA knows a person is a delegate based on information from the Identity and Access Management (IAM) program office, and the Master Person Index (MPI).

   - A delegate cannot help a Veteran with offline health tasks, such as getting information over the phone.

   4.1 A VA recognized Caregiver and a Delegate would likely need to be two different types of access on VA.gov since a VA recognized Caregiver is also a beneficiary that would need to see information about their own benefits.

   4.2 VBA doesn't use the term "delegate", but [VA Form 21-0845](https://www.va.gov/find-forms/about-form-21-0845/) gives a 3rd party access to information for a Veteran. 

   - There isn't a special term for a person who is approved through this form.
   - This person is noted in the Veteran record in VBMS as a person VA can talk to regarding specific tasks:
     - Status of claim
     - Payment history
     - Debt
     - Disability rating
     - Request benefit payment letter
     - Change of address

5. **VSO representatives, claim agents and attorneys** are accredited individuals who assist Veterans and their families with claims. VBA and VHA definitions of these roles are consistent.

   VSO representatives, claim agents and attorneys are accredited individuals who assist Veterans and their families with claims.

   -  They're vetted through a [VA accreditation process](https://benefits.va.gov/vso/index.asp), managed by the Office of General Counsel (OGC). 
   -  VSO representatives also help Veterans and their families understand and apply for non-claim related benefits.
   -  VA-accredited attorneys and claims agents perform most of their representation after VA has issued an initial decision on a claimant’s claim.
   -  Anyone can be a claim agent on behalf of the Veteran.

   Through the course of our conversations, it became clear that there are already systems in place for these user types to access relevant Veteran data and complete tasks to help the Veteran. For the purposes of this research, we can think of these users as Veteran advocates - people who are doing work on behalf of Veterans. 

   Once we get into task definition, the existing systems (outlined below) can help us better understand tasks for these users and get a sense of how we might meet their needs on VA.gov.

   - **Stakeholder Enterprise Portal (SEP)** is a VA system designed to serve VSOs, claim agents, and attorneys
   - **Digits to Digits (D2D)** is an external electronic claims transmission service between certain partners and VA. VSOs, claim agents, and attorneys can use this to access Veteran data. The SMEs we spoke to have heard they prefer this system to SEP.

6. A **fiduciary** is a person who manages financial affairs for a Veteran. VBA and VHA definitions of this role are consistent.

   - A Veteran can select their own fiduciary, but they need to be approved by the VA.  The fiduciary would manage benefit related payments on behalf of the Veteran. It is possible that a fiduciary would be assigned to a non-Veteran beneficiary who is receiving payments from the VA.
   - VBA has a Fiduciary Program that assigns a Veteran a fiduciary if they have been deemed unable to manage their financial affairs and don't have a family member who can serve as a fiduciary. These fiduciaries are referred to as "Professional fiduciaries" in VBA documentation. 
   - Along with VSO representatives, claim agents and attorneys, this user type can be considered a Veteran advocate - someone who is doing work on behalf of a Veteran. 
   - **VBMS FID** is a VA system that was recently expanded to meet the needs of fiduciaries, and would likely be a good starting point to understand tasks for these users.

7. **Power of Attorney (POA)** refers to a person who the Veteran has given power of attorney to act on their behalf at the VA. 

   - This is separate from a healthcare power of attorney, which gives a person authority to make decisions about a Veteran's medical care. 

   - This could be a private attorney or a VSO representative.
   - Typically private attorneys only get involved during a claims appeal and a Veteran is seeking retroactive pay.
   - POA information lives in the VA Corporate Database.

8. There are also 3rd-party organizations that receive payments from VBA and VHA, such as funeral homes, state cemeteries and nursing homes. 

   Possible use cases for these users would be to see payment history and status, as well as file claims for reimbursement. However, the SMEs we spoke with all stated they couldn't see any need for these users to log into VA.gov. Burial claims can already be submitted electronically through eBenefits, so it would be worthwhile to look into how this is handled as we migrate functionality to VA.gov.

9. **A person can have one or more of user roles defined in the previous findings.** As we start to think about non-Veteran roles, it's important to recognize that there can be overlap between any of the aforementioned roles. We'll need to consider how a person will be able to switch between roles with one login. Some examples are:

   - A Veteran who is a caregiver for their Veteran spouse, and is a fiduciary for their Veteran sibling.
   - A delegate who is also a beneficiary because they're receiving surviving spouse benefits.

   The following diagram provides some examples of how relationships may overlap between dependents, beneficiaries, and caregivers.

   ![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/user-roles/discovery/dependent-beneficary-caregiver-examples.png)

10. Beneficiary and caregiver use cases are highest priority for the VA business lines we spoke with.

    - MHV prioritizes the VA patient needs above all else, whether that patient is a Veteran or non-Veteran. Non-Veteran VA patients are uncommon, but do exist. One example could be a Veteran with PTSD has a spouse who is receiving mental health services at the VA because of a condition brought on by coping with the Veteran's PTSD.
    - VBA Pension and Office of Business Integration stated that providing survivors access to their benefit information was most important to their business lines.
    - VBA Compensation stated the ability to manage VA education benefits for survivors and dependents (also called Chapter 35).
    - From the Caregiver perspective, giving caregivers the ability to complete health tasks is most important:
      - Accessing the Veteran's health records
      - Managing appointments
      - Secure messaging in such a way that it's clear to the provider and caregiver that they're able to communicate *as themselves.*

## Recommendations

### As a starting point, explore three primary non-Veteran user groups for VA.gov:

- Beneficiaries
- Caregivers
- Delegates

We recommend conducting additional research to identify use cases, tasks, and outcomes for each of these non-Veteran user groups. Since there are currently systems in place to meet the needs of VSOs, claims agents, attorneys, and fiduciaries, we don't recommend prioritizing those roles immediately.

#### Beneficiaries

There is a currently a service request in progress to add a Beneficiary user type to MPI. Once that's in place, it's likely that already have enough data about beneficiaries to provide them with an MVP experience on VA.gov. 

- We'll need to further explore the beneficiary <> Veteran relationship as it relates to online interaction. This researched focused on a person who already has benefits, and didn't explore the initial application process or the process of applying for new benefits.
- Since non-Veteran beneficiaries are only eligible for certain benefits, it would be beneficial to provide guardrails to help prevent them from submitting applications for benefits they could never receive. For example, a non-Veteran spouse beneficiary should not be able to submit a claim for disability compensation, but they should be able to file a claim for VA Dependency and Indemnity Compensation.

### Caregivers

There aren't any clear rules about whether a caregiver should be allowed access to a Veteran's information, so there will likely need to be a few different caregiver roles, or a combination of caregiver and access type. Some possibilities could be `Caregiver - Full access` (all benefits and actions), `Caregiver - Health only` (only health tasks), `Caregiver - Other benefits`.

### Delegates

A Veteran can already name an individual to have online access to their MHV health information through the delegation process.  With more research, we can understand what this delegate experience is like today on VA.gov (if a delegate logs in with their MHV credential), and how it may be extended to non-health tasks such as managing compensation claims and appeals. 

The existing delegation process is managed at the higher VA level (not VHA or VBA), and our understanding is that it will require significant effort to expand it. Carnetta Scruggs has significant background information on this and is eager to work with our team on efforts to increase delegation tools. 

### Conduct additional research to understand existing needs and applications for VSO representatives, claim agents, attorneys and fiduciaries. 

From what we've heard so far, there are gaps in the current applications that cause these users to develop workarounds or just not use them at all. Interviews will be critical in understanding the current UX for these user roles and how we might be able to support them on VA.gov.  It'll also be helpful to look into the existing applications to better understand the tasks users are expected to complete versus what they're actually doing.

## Resources

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/user-roles/discovery/sme-interviews/user-roles-sme-research-plan.md)
- [Conversation guides](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/user-roles/discovery/sme-interviews/conversation-guides)
- [Notes from sessions](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/user-roles/discovery/sme-interviews/session-notes)
- [Findings powerpoint deck](https://governmentcio.sharepoint.com/:p:/r/sites/VSATeam/Shared%20Documents/Design%20%26%20Research/Authenticated%20Experience/user-roles-research-findings.pptx?d=wba2461d7c6af4e5d9cd8efd94f94bb5d&csf=1&web=1&e=JiwdFt)

