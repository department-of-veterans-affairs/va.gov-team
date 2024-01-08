# Non-Veteran User Roles Discovery, Phase 1

November 2, 2021

Liz Lantz, VSA, Authenticated Experience

## Background

As My HealtheVet and eBenefits move towards the VA.gov ecosystem, VA.gov will need to transition from serving exclusively Veterans, to serving a wider audience, such as caregivers, spouses, partners, POAs, VSOs, etc.

Currently, what defines a “non-Veteran” and their use cases are not well understood across the VA. Each administration—VHA, VBA, and NCA—has their own unique definitions and nuances, which significantly increase the complexity of solving for the “non-Veteran” use case. Delegates, beneficiaries, caregivers, and dependents are a few terms used interchangeably that encompass many different user types relying on many different products and services across VA.

## Phase 1 Goals

1. Track down existing user roles research and personas.
2. Learn what roles exist for eBenefits
3. Learn what roles exist for My HealtheVet (MHV)
4. Scope the list of user roles to a manageable list we would actually build on VA.gov
5. Start identifying SMEs at each administration to talk to.

## Activities

### 1. Review of previous research

#### Goal

Track down any existing research and personas about non-Veterans that can inform our research moving forward.

#### Findings

1.1 The high-level understanding of non-Veteran user roles we discussed in planning is generally correct. These are the roles identified in the documents we found:

- Dependents
  - can include children, parents, parent in-law, siblings, etc.
  - It appears to intersect with dependents for tax purposes
  - Cemetery benefits specifically call out "adult children, in some cases", which may be different than a dependent.
- Spouses, current and former
- Surviving family members
  - Spouses
  - Children
  - Parents
  - Designated family members (NCA)
- Caregivers
- People who do work on behalf of Veterans
  - VSOs
  - Fiduciaries
  - Clinicians and health professionals (it is unlikely they'd need to login to VA.gov)
  - Executors (NCA)

We learned the supplemental claim form asks for the person's relationship to the Veteran. "Other" is an option; one example of this is where "other" is a non-Veteran sibling of a Veteran who is a dependent of the sibling (Veteran can't claim himself as an individual tax purposes).

It appears that [the definitions and eligibility criteria for surviving spouses, children, and parents on va.gov](https://www.va.gov/disability/dependency-indemnity-compensation/) are clear.

1.2  There are some existing persona documents that include non-Veteran roles, primarily for Caregivers and Survivors (see resources below).

The [Veteran Customer Personas](https://drive.google.com/file/d/1nsrA8pC0Q0AxNoxXB3SvtFz8B1Nvz6pG/view?usp=sharing) document identified "Knowledgable Buddy" and "Family Member" as personas, and specifically called out that a Family Member needs "role based access to data and records that may need to be shared."

1.3 The [people who worked on the persona documents](https://app.mural.co/t/vsa8243/m/vsa8243/1633525573365/eeb43d10e07a7754128e175176c43bc00b43a883?wid=1-1634084927441) could be SMEs that can help us understand how roles are defined within each administration

1.4 The Digital Health Modernization team [conducted research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/research-findings.md#insight-3-veterans-and-caregivers-dont-go-to-vagov-to-do-health-tasks) that identified the need to make user delegation simple. Their research shows that caregivers currently have challenges completing health tasks on VA.gov, and experience friction trying to complete them on MHV.

- Participants were familiar with MHV and know it, so they start there instead of VA.gov.

- They didn't understand the multiple sign-in options, and prefer MHV above others because they understand what it is.

- The inability to delineate actions between users of a single MHV account causes friction and confusion.

  - Doctors won't talk to caregivers via Secure Messaging

  - >“If there is a way to create a separate login with the same permissions without making you feel like you’re the parent logging into the kid’s computer. That’s sometimes how I feel.” – Caregiver (P1-C)

1.5 The eBenefits migration team has recently done [discovery work related to Stakeholder Enterprise System (SEP)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ebenefits/view-update-POA/SEP), which could be valuable in understanding existing tasks and painpoints for VSOs, private attorneys, and VA accredited agents.

### 2. Learn what roles exist for eBenefits

#### Goals

1. Understand the non-Veteran user roles that exist on eBenefits
2. Understand the functionality that accompanies those roles

#### Findings

2.1 Spouses and dependents can have a basic eBenefits account as long as they are registered in the Defense Enrollment Eligibility Reporting System (DEERS) that also has a DS Logon account.

- The DS Logon credential embeds information to tell eBenefits if the user is a dependent, and if so, which Veteran they are linked to.
- Caregiver is not a supported role in eBenefits.
- eBenefits does not differentiate between different types of dependents such as child, spouse, etc. It only differentiates between Veterans and Dependents.

2.2 Dependents have read-only access to most features in eBenefits, except the ability to file a disability claim, dependent claim, or the documents feature.

-  eBenefits loads information for dependents **if** it exists in the VA databases connected to eBenefits.

2.3 The functionality available to dependents provides access to two letters in eBenefits:

1. Benefit Summary - Spouse or Dependent Benefits
2. Disabled Veteran Civilian Service Preference

2.4 There is a VSO/Claim Agent/Private Attorney facing side of eBenefits called Stakeholder Enterprise Portal (SEP).

- Work is underway to determine the best way to move SEP functionality to VA.gov.

### 3. Learn what roles exist for My HealtheVet (MHV)

#### Goals

1. Understand the non-Veteran user roles that exist on MHV
2. Understand the functionality that accompanies those roles

#### Findings

3.1 MHV asks  `What is your relationship to VA?` in the registration process, and has the same options available in the user profile:

- VA Patient (selected by default, can't be unselected)
- Health Care Provider
  - Could be VA health care provider, or contractor
- Veteran Advocate/Family Member/Friend
- VA Employee
  - This could also be a contractor
- CHAMPVA Beneficiary
- Caregiver
  - Could be a self-identified caregiver, or someone who is recognized by VA through the Caregiver Program
- Other
  - No further explanation required

3.2 Once the MHV registration form is submitted, the self-selected roles are checked against two databases: Identity and Access Management (IAM), and Master Person Index (MPI).

- IAM returns known roles back to MHV and automatically selects any roles the user did not select for themselves. For example, if health records are returned and the user didn't select VA Patient, that box will be checked for them.
- If MPI has a record of this person, this will link the MHV account to MPI.
  - MPI added a `person type` data point around 2019. MPI does not have all the `person types` that MHV has, so it's not a 1:1 relationship.

3.3 MHV functionality changes depending on the profile user roles in the following ways:

- Non-Veteran roles have access to all the self-reporting tools, such as journals and health assessments.
- If a non-Veteran user is enrolled with a medical center (MPI returns this data), the user will be prompted for health care functionality. An example of a non-Veteran user who is enrolled with a medical center could be a VA employee who had a physical exam completed at a VA Medical Center (VAMC).
- CHAMPVA beneficiaries will have access only to prescription related health functionality.

3.4 MHV also supports a `delegate` user role, which is independent of the user roles in the MHV profile. A delegate role is assigned to a user once they've completed a process initiated by the Veteran. The process can be completed in-person at a VAMC, or online via the Veteran Online Delegate Tool (VAODT).   A delegate does not need to be a dependent, an official VA Caregiver, or have any other relationship with the VA other than they've been identified by their Veteran to serve as a delegate.

One a person is designated as a delegate, that role is stored in MPI.

A delegate has a premium level MHV account, and one of two levels of access to MHV functionality on behalf of the Veteran.  If the delegate is also a Veteran, they're able to switch between their delegate and Veteran role with a single login.

With View/Print access, a delegate can view/print:

- Pharmacy section information
- Appointment and wellness reminders
- Secure messages
- Allergies and Chemistry/Hematology
- Blue Button Medical reports

With Full access, a delegate can do all of the above, as well as:

- Refill prescriptions online
- Manage self-reported Veteran information regarding medication, supplements, and health journals
- Write and respond to Secure Messages

3.5 Coordinators and help desk staff use the role values in the MHV user profile to better understand the person they're trying to help.

### 4. Scope the list of user roles to a manageable list we would actually build on VA.gov

#### Goals

Establish a list of user roles that is manageable and feasible to build on VA.gov

#### Findings

4.1 A high level list of user roles could be:

- Beneficiaries
  - anyone who is not a Veteran that is eligible to receive benefits from VA
  - Includes children, spouses, and parents
- Caregivers
  - VA recognized caregivers, participating in the Caregiver program
  - Self-identified caregivers
  - Professionals who care for Veterans, such has nursing homes
- Veteran advocate
  - Anyone doing work on behalf of a Veteran
  - Includes VSOs, Fiduciaries, Claim Agents
  - Would likely need to be further defined to give appropriate access to the features they need to use on VA.gov

### 5. Start identifying SMEs at each administration that can help us understand how these roles are defined at the administration level

#### Goals

- Identify SMEs at VBA, VHA, and NCA who can help us understand user roles according to their administration
- Connect with SMEs to start the conversation

#### Findings

Identified SMEs for VBA and VHA and scheduled interviews ([documented here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/user-roles/discovery/sme-interviews/README.md)); still waiting for an NCA contact as of 11/1/2021

## Next Steps

- Align on list of user roles with team
- Define research questions to answer with SMEs
- Conduct discovery with SMEs

## Resources

### User roles / types

**Note:** I found a few useful persona documents on the VA Sharepoint instance, am not linking to them since they're on behind the network firewall. Screenshots are included on the [mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1633525573365/eeb43d10e07a7754128e175176c43bc00b43a883?sender=lizlantz1528).

#### VHA

- [This Slack thread](https://dsva.slack.com/archives/C022AC2STBM/p1627661741003800?thread_ts=1627600046.432100&cid=C022AC2STBM) about the differences between NOK, ECON1, ECON2, and Desginees in the check-in process
- [Digital Health modernization: Generative Research Study 1 Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/research-findings.md)

#### VBA

- [Lighthouse VSO appeals research](https://github.com/department-of-veterans-affairs/lighthouse-ux/tree/master/Benefits%20and%20Appeals%20Research/2019-10-VSOs-Appeals-Higher-Level-Review-Discovery-Research-with-VSOs)
- [eBenefits Adding or Removing Dependents associated with Disability Compensation Basic Product Evaluation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/disability/declare-dependent/discovery/basic-product-evaluation.md)
- [eBenefits current UI dependent types](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/disability/declare-dependent/discovery/basic-product-evaluation.md)
- [SEP Design Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ebenefits/view-update-POA/SEP), October 2021

#### NCA

- [Eligibility criteria for DIC benefits for children, parents, and spouses](https://www.va.gov/disability/dependency-indemnity-compensation/)
-

#### **Not specific to an administration **

- [Veteran Customer Personas pdf](https://drive.google.com/file/d/1nsrA8pC0Q0AxNoxXB3SvtFz8B1Nvz6pG/view?usp=sharing)
- [Lighthouse user roles research](https://docs.google.com/presentation/d/1umk3xortI1ApN1Fd5VYOP57kY8xqB6lcQsDX2-bkVNE/edit#slide=id.ga4450717c4_1_0)
- [Lighthouse user types](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/(Github%20Instructions)/changelog-instructions.md)
- Resources to learn more about Caregivers
  - [Elizabeth Dole Foundation Caregiver Experience Map](https://caregiverjourney.elizabethdolefoundation.org/)
  - [Hidden Heroes Caregiver Research Study](https://www.rand.org/pubs/research_reports/RR499.html)

### Goals related to Non-Veterans

- [eBenefits view and modify dependents user stores](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/user-stories.md)

### Documentation examples

- [Health systems map](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1606314329344/1d6343c768f02ec0ab12eab999c331b3c64b29eb) (could be that user roles are the "planets", lines are the functions)
