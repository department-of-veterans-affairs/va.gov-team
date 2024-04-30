# Integrated Health: Veteran and Family Member Modernization Project
*Formerly known as ```IVC Portal```, ```Community Care Portal```*

## Background
The Office of Integrated Veteran Care (IVC) is responsible for implementing a broad range of programs, including:
- Community Care (Mission Act)
- Veteran Foreign Medical Program
- Veteran Family Member Benefits (such as Camp Lejeune, CHAMP VA)
- Spina Bifida
- VA & Community care Appointments
- and more

## Vision for this effort 
This is truly a digital modernization project that spans the digital experience, health, and benefits portfolios. We have a real opportunity here to break down the silos of the organization, and deliver consistent experiences for Veterans and their family members. There are aspects of this work, such as decision reviews or financial management, that may be more health care focused, but we already have a near identical experience built under the benefits space. Instead of building a siloed health care experience, our vision is to weave the health care use cases into the existing products. Anyone working on this project should be asking themselves: Does this experience already exist on VA.gov? Can I augment what already exists? 

### History
This effort began several years ago when the Mission Act came out, which spelled out that Veterans were required to have a patient portal for community care. Dr. Kameron Matthews (former VHA CMIO) decided that it was foolish to create a NEW patient portal outside of VA.gov, and indicated that it should be built on VA.gov instead. 

A team outside of OCTO was hired to research and design the features for this community care patient portal. [Artifacts for that effort can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/community-care/community-care-portal). The team conducted some research, focused on solutions Veterans WANT, versus the problems Veterans needed help solving, and created designs for a community care patient portal on VA.gov with features that were not based in technical reality, and were independent of VA.gov's design system, information architecture, or content standards. This research was presented to IVC, and the features of the design were turned into a long list of requirements. 

Separately, the IDEA Act came out, which required VA to digitize all user-facing forms. A team under OCTO started the process of digitizing these forms. Congress is particularly interested in a suite of forms that would enable Veterans in the foreign medical program, as well as Veterans' family members to be able to apply for and manage certain benefits online. 

All of the requirements for the community care portal and the VFMP focus were batched into [one giant requiements document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/integrated-health/big-picture/RTM%20Report%2001062023.xlsx), which became, eventually, the **Integrated Health Veteran & Family Member Modernization Project**. 

OCTO reviewed the list of requirements and determined that:
- some % of the features requested already existed on VA.gov (i.e. the 1010ez)
- some % were net new features (such as the CHAMP VA form)
- some should be integrated into existing VA.gov products (decision reviews, debt management, facility locator)
- some are not technically feasible or advisable.
[See OCTO's original document breaking down the work](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/integrated-health/big-picture/Community%20Care%20Portal%20Write-up%20updated%2032723.docx)

OCTO proposed an organization of IVC's requirements that [breaks the work into chunks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/integrated-health/big-picture/IVC%20Patient%20Portal%20Intake%20and%20work%20to%20be%20done.docx):
- Digitizing forms
- Letters
- Community care appointments and scheduling
- Community care patient portal features
- Decision reviews
- Finances (money in, money out)
- VA Profile
- Contact Center/Help/Chat/Feedback 
- Content

## Digitizing Forms
In Fall 2023, a CEDAR team was hired to [digitize 15 forms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/integrated-health/big-picture/IVC%20Portal%20Forms%20Work.docx) 
1.	CHAMPVA Application Form – VA Form 1010D
  - Latest PDF: [About VA Form 10-10d](https://www.va.gov/find-forms/about-form-10-10d/)
  - Expiration: 10/31/2024
  - [Dedicated Github Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/champva) 
2.	CHAMPVA Beneficiary Claims Submission – VA Form 10-7959A
    - Latest PDF: [About VA Form 10-7959A](https://www.va.gov/find-forms/about-form-10-7959a/), download: vha-10-7959a-fill.pdf (va.gov)
    - Expiration: 10/31/2024
    - [Dedicated Github Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/champva) 
3.	CHAMP VA OHI Form – VA Form 10-7959C
  - Latest PDF: [About VA Form 10-7959C](https://www.va.gov/find-forms/about-form-10-7959c/), download: VA-10-7959c-fill.pdf
  - Expiration: 10/31/2024
  - [Dedicated Github Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/champva) 
4.	FMP Registration Form – VA Form 10-7959-1
  - Latest PDF: [Download VA Form 10-7959f-1](https://www.va.gov/vaforms/medical/pdf/vha-10-7959f-1%20(1).pdf) (PDF)
  - Expiration: 01/31/2024
  - [Dedicated Github Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/foreign-medical-program)
5.	Foreign Medical Program Claim Cover Sheet – VA Form 10-7959f-2
  - Latest PDF:  [Download VA Form 10-7959f-2](https://www.va.gov/vaforms/medical/pdf/vha-10-7959f-2.pdf) (PDF)
  - Expiration: 01/31/2024
  - [Dedicated Github Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/foreign-medical-program)
6.	~*Power of Attorney form – VA Form 10-0137*~ [descoped 4/30/24](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/advance-directive/descoping-decision.md)
  - Latest PDF: [Download VA Form 10-0137](https://www.va.gov/vaforms/medical/pdf/VA_Form_10-0137_FILL.pdf) (PDF)
  - Expiration: 04/30/2024
  - *This one requires special handling because it is a legal document that requires witnesses and notarization, and must be formally filed at a VA Medical Center. Need to work with stakeholder to understand what part we want to have digitized, and how we handle the subsequent steps - likely offline?*
  - [Dedicated Github folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/advance-directive)
7.	Release of Information (ROI) form – VA Form 10-5345
  - Latest PDF:  [About form 10-5345](https://www.va.gov/find-forms/about-form-10-5345/)
  - Expiration: Not shown
  - *this one also requires special handling because we need to understand where it needs to be routed.*
  - [Dedicated Github folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/medical-records/release-of-health-information-form)
8.	Spina Bifida Claim Form for Miscellaneous Expense – VA Form 10-7959E
  - Spina Bifida Claims page: [https://www.va.gov/COMMUNITYCARE/programs/dependents/spinabifida/spina_claim.asp](https://www.va.gov/COMMUNITYCARE/programs/dependents/spinabifida/spina_claim.asp) 
  - Latest PDF:  [Download VA Form 10-7959E](https://www.va.gov/vaforms/medical/pdf/vha-10-7959e-fill.pdf) (PDF)
  - Expiration: Not shown
  - *Curious if there are other Spina Bifida appliations we need to digitize*
  - Dedicated Github folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/spina-bifida)
9.	*Decision Review Request Board Appeal (Notice of Disagreement)  - VA Form 10182*
  - [Notice of disagreement on VA.gov](https://www.va.gov/find-forms/about-form-10182/) (benefits only, so far)
  - Expiration: 03/31/2025
  - THis form exists today on va.gov, but only has a pathway for benefits NODs to be filed. We would propose to update this flow and how/where we submit the data to allow for health care NODs to be filed as well. Deeper discovery needed on this.
  - [Existing github folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews) 
10.	*Decision Review [Request Higher-Level review](https://www.va.gov/decision-reviews/higher-level-review/) - VA Form 20-0996*
  - Latest PDF: [VA Form 20-0996 on VA.gov](https://www.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996/start)
  - Expiration: 04/30/2024
  - THis form exists today on va.gov, but only has a pathway for benefits HLR to be filed. We would propose to update this flow and how/where we submit the data to allow for health care HLR to be filed as well. Deeper discovery needed on this.
  - [Existing github folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews) 
11.	*Decision Review [Request Supplemental Claim](https://www.va.gov/decision-reviews/supplemental-claim/) VA Form 20-0995*
  - Supplemental claim on va.gov:  [[Request Supplemental Claim form on VA.gov today](https://www.va.gov/decision-reviews/supplemental-claim/](https://www.va.gov/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995/start))
  - Expiration: 04/30/2024
  -  THis form exists today on va.gov, but only has a pathway for benefits HLR to be filed. We would propose to update this flow and how/where we submit the data to allow for health care HLR to be filed as well. Deeper discovery needed on this.
  -  [Existing github folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews) 

12.	[Camp Lejeune](https://www.va.gov/disability/eligibility/hazardous-materials-exposure/camp-lejeune-water-contamination/) Application Form – VA Form 10-10068
  - Latest PDF: [VA Form_10-10068-fill.pdf](https://www.va.gov/VA_Form_10-10068.pdf)
  - Expiration: 8/31/2025
  - [Dedicated Github folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/camp-lejeune)
13.	Camp Lejeune Treating Physician Report – VA Form 10-10068b
  - Latest PDF: [VA Form_10-10068b-fill.pdf](https://www.va.gov/VA_Form_10-10068b.pdf)
  - Expiration: 8/31/2025
  - *This needs to be completed by a physician. Not sure how to handle this use case.*
  - [Dedicated Github folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/camp-lejeune)
14.	Camp Lejeune Family Member Program information Update Form – VA Form 10-10068c
  - Latest PDF: [VA_Form_10-10068c-fill.pdf](https://www.va.gov/vaforms/medical/pdf/VA_Form_10-10068c-fill.pdf)
  - Expiration: 8/31/2025
  - [Dedicated Github folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/camp-lejeune)

15.	Camp Lejeune Family Member Program Claim Form – VA Form 10-10068a
  - Latest PDF: [VA Form_10-10068a-fill.pdf](https://www.va.gov/vaforms/medical/pdf/VA%20Form_10-10068a-fill.pdf)
  - Expiration: 08/31/2025
 - [Dedicated Github folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/camp-lejeune)

## Who are the users and what do we know about them? 
The users for this work include:
- Veterans who use community care services: We know a fair bit about Veterans who are users of community care. These are Veterans who either live very far from a VA Medical Center,  require specialty services that their VA Medical Center may not offer (not every VAMC offers all services), or would have to wait too long to get their appointment at the VA. Veterans who use community care also still get care from the VA, and VA is intended to serve as a care coordinator. 

- Veterans eligible for SpinaBifida or Camp Lejeune services: These are Veterans who are eligible for specialty benefits and health programs as a result of where they served. 

- Veterans who live abroad but are eligible for VA Health Care services through the Foreign Medical Program: These are Veterans who may be eligible for VA Health Care but live overseas. VA clinicians are  not legally allowed to provide health care to these Veterans while they are overseas, so VA needs to reimburse Veterans for health care costs incurred.
  
- Spouses, dependents, and Family members who are eligible for CHAMPVA, Camp LeJeune, and other services [see more in the family member hub](https://www.va.gov/health-care/family-caregiver-benefits/)

## What is the problem they are having and why are they having it?
General problems include:
- Being able to take an action online that I previously had to do via mail
- Access to my data and information online, in one common place
- A clear way to get help

- See this file for more detail: [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/integrated-health/big-picture/IVC%20Patient%20Portal%20Intake%20and%20work%20to%20be%20done.docx](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/integrated-health/big-picture/IVC%20Patient%20Portal%20Intake%20and%20work%20to%20be%20done.docx)

## What business outcomes are trying to be achieved by solving for that problem?
- Business wants to be able to show Congress that they have digitized the manual processes (thus speeding up access to the benefit)
- Business wants to be able to show Congress that they have satisfied the requirements of a law.
- Business wants to stop having to answer Congressionals or other Veteran and family / caregiver complaints. 

## With whom do we expect the team will need to collaborate with but inside and out of OCTO to solve the problem?

### OCTO POCs
  - Premal Shah - Product Owner 
  - Chris Johnston - Digital Experience Portfolio Lead
  - Lauren Alexanderson - Health Portfolio Lead, main POC for anything to do with patient portal/medical records 
  - Matt Dingee - Forms System & Design System
  - Danielle Thierry - CAIA Lead (for all things content, community care, decision review and family member hubs, etc.) 
  - Mikki Northuis -Information architecture
  - Kay Lawyer - Product lead for Unified Appointment Experience (including consults, authorizations, etc.) & Medications
  - Denise Coveyduc - Product lead for debt mgmt product 
  - Beverly Nelson - Product lead for VA Notify
  - Chante Lantos-Swett - Contact Centers, Helpdesks, etc.
  - Michelle Middaugh - Facility websites, Facility Locator
  - Patrick Bateman - Medical equipment ordering 
  - Zach Goldfine/Emily Theis - Decision Reviews
  - Samara Strauss - VA Profile
  - Dave Conlon/Danielle Theirry - Sitewide search
  - Rachel Han - Mobile app
  - Luciana Morais - Chatbot 
    
### VHA - IVC:
  - Rich Holmes has been designated as the lead for this project in IVC. 
  - Additional names include:
    - Hillary Peabody (senior POC in IVC)
    - Dave Fennell
    - Doug Katason
    - Paul Abamonte
    - Mia Powers-Higgins
    - Jakki May (SP?)
### VHA - Decision Reviews see **Chris Johnston for POC**
### VHA - Office of Connected Care - Dr. Meredith JOsephs & Theresa Hancock for medical record / patient portal part 
### OIT - BIOS: Responsible for coordination on OIT side
  - Howard Green & Malek Crawford are main POCs
  - Alan Greilsamer is the lead of BIOS
### OIT-VES:
  - Thani Boskailo - will be leading the charge to update the E&E system to be able to receive these forms
  - Kim Pugh would be POC for any SaaS integrations needed 
### OIT-SPM-Scheduling
  - Emily Qiu - leads the product line
  - Grace Palino - Project lead for scheduling
  - BJ Thompson - Eng lead for scheduling
### OIT-SPM-Community Care
  - Robert Miller leads the product line
  - George Brittingham works on community care, would be POC for PEGA/Box (if used)
### VEO
  - Trish Deng
  - Melissa Rebstock 

## What unique factors exist like legislative pressures or constraints?
- Mission Act requires a community care patient portal, by yesterday
- Congress is requiring the VFMP forms and processes be digitized within 2024. 
- IDEA Act requires forms be digitized
- MHV on VA.gov is underway now; teams cannot take on any of the medical records / SM / meds integrations before 2025.
- E&E system is updating - will be in progress from FY 24-26 - this is the backend of several forms 
- SPM Scheduling is in the process of several high profile efforts to modernize, including integrating community care data
- VHA has separately started a process for decision reviews / appeals / claims - need to tap into that
- We do not currently have a way for multiple users to complete the same form on VA.gov 

## What commitments have already been made, to whom, and at what level of fidelity?
- We have a contract in place to digitize 15 forms this year.
- E&E has a contract in place to update the E&E system to be able to accept many of those forms.
  
## What are the biggest known risks?
- Even though this is an IVC project, this has so many different groups involved, and it will be difficult to keep on top of all of it.
- Trying to think holistically, from the lens of the users, versus from the perspective of the office that wants all this work done.
- Not everything on that list of things to do are feasible. keep the focus on what can be delivered incrementally.
- Keep the priority on reuse wherever possible, minor augmentations to existing flows, wherever possible. 

In Fall 2023, a team was hired to start on the [Digitizing forms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/integrated-health/big-picture/IVC%20Portal%20Forms%20Work.docx) part of the work. There are 15 forms.

## Related content and IA work for reference

The content/accessibility/information architecture (CAIA) team has 2 ongoing initiatives that will impact where the digitized forms live on VA.gov and content related to those forms:

- Content migration of content re: CHAMPVA, the Foreign Medical Program, and the Spina Bifida Health Care Program from the legacy TeamSite environment (community care website) to the modernized VA.gov environment
- Expansion of the VA.gov family member benefits hub to build a more cohesive experience for family members

[Read more in this document on related content information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/integrated-health/big-picture/related-content-information.md)
