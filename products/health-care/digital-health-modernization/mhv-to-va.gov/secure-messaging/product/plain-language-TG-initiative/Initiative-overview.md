# Initiative Overview: Creating Plain language triage group names 
There are several artifacts that have been part of this effort.  This is an attempt to capture the current approach after several pivots due to learnings and decisions.  The goal here is to have a reference that reflects the current thinking and intention.

### Earlier reference documents:

- Initiative [brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product/plain-language-TG-initiative/initiative-brief.md) (original)
- Pivot to [updated brief (phase 2)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product/plain-language-TG-initiative/initiative-brief-phase-2.md). 

## Goal of this work

*  Increase satisfaction in the Secure Messaging experience and trust in the VA generally through more plain language, patient-friendly, and accessible triage groups names. 
    * Result: Veterans more quickly and confidently identify who to send the message a message tool. 
    * Result: Veterans report higher satisfaction with the messaging tool overall.
    * Result (beyond scope of VA.gov analytics): SM Administrators (i.e. MHV Coordinators) spend less time re-routing messages because more patients are selecting the current triage group initially. 

## Problem
* Today, the Secure Messaging (SM) tool does not render care team names, referred to as “triage groups”, in a format that is easily understood or consistent.  Given that this tool is of central importance to patients and clinical staff, this is an experiential and functional gap that we want to address. 
* Example issues:
  * These care team names use a host of internal abbreviations, acronyms, and symbols that are indecipherable to patients, creating significant cognitive load when attempting to parse and decide who to send a message to. For example, a patient will see REN PAC 03 WH with no further explanation or support in translating meaning. 
  * Example of current state:
![image](https://github.com/user-attachments/assets/759906a4-fd7b-4d12-8451-d0cf67cbfa6e)
* This reality undermines the patient experience by creating frustration/confusion and leads to greater admin burden for SM Administrators (MHV Coordinators) who spend more time re-routing messages to the correct group. 
* On their face, the existing names violate basic plain language and accessibility principles, as outlined in the 21st Century IDEA Act and supporting [2023 policy guidance from the OMB M-23-22 memo](https://www.whitehouse.gov/omb/management/ofcio/delivering-a-digital-first-public-experience/) as well as internal VA [guidelines on capitalization](https://design.va.gov/content-style-guide/capitalization) and abbreviations.
* Qualitative research by the SM team has validated that the current state negatively impacts Veteran satisfaction, creates confusion and frustration, and leads to a loss of trust in the VA.  Researchers also heard from Veterans about task abandonments instances where Veterans are so frustrated they want to give up or rely on the MHV coordinator by phone or caregivers. This is also one of the biggest recurring themes we hear in user feedback while Secure Messaging exists in a “Try Me” beta state (Phase 1) on [VA.gov](http://va.gov/). See below for sample feedback:
     * The name should be English, not some coding.” 
     * Sometimes, it is confusing because they use these really long codes and names; it’s hard to figure out which one [I need].” 
     * “If it was simpler, I would use [the tool] more.” 
     * I have no idea where to send my message to. It would really be beneficial if somehow a name could be associated or made available within this system as I know my doctors but, to repeat myself, I have no idea which group each belongs to.” 

### An overview of previous research informing this initiative is below:

Date | Description | Links
-- | -- | --
November 2022 | Discovery research with MHV Coordinators and VA SMEs | [Readout on Github](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research/2022-11-triage-group-naming-discovery) 
April 2023 | Solution discovery and initial proposals | [Solutions readout with stakeholders](https://dvagov.sharepoint.com/sites/HealthApartment/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FHealthApartment%2FShared%20Documents%2FSecure%20Messaging%2FTriage%20Group%20Naming%2FPrior%20Research%20pre%202024%2FTriage%5FSolutions%5FAprilDiscussion%20%281%29%202023%2Epdf&viewid=9384f3a8%2De3e8%2D4abb%2Db2ab%2D24cf305ccdac&parent=%2Fsites%2FHealthApartment%2FShared%20Documents%2FSecure%20Messaging%2FTriage%20Group%20Naming%2FPrior%20Research%20pre%202024) 
August - October 2023 | Triage group naming generation research to understand Veterans behaviors and expectations when figuring out who to message | [Readout on Github (October 2023)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research/2023-08-triage-group-generative-study)  
March - May 2024 | Site visits to facilities to observe MHV Coordinator workflows | link coming
August 2024 | Comparative study for new care team names | [Study plan on Github](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research/2024-07-Care-Names-Comparative-Study/2024-07-Care-Names-Comparative-Study-research-plan.md)

## Root cause: poor data standardization and quality at point of triage group creation
* The root of this issue traces back to how triage groups are created and the specific data entered. 
* To create a new group, MHV Coordinators and/or SM Admins will use the internal SM Admin Portal to establish a triage group for a given facility within a VISN. 
* Admin users are instructed to manually type in the name of the triage group name free form. There is no programmatic validation on what is entered in this field. The entry in this field is shown directly to the patient, as entered, and these names render the same way across all modalities (MHV Classic, MHV on VA.gov, native VAHB mobile). 
* The current names entered into this field incorporate varying degrees of acronyms, specialized terminology, abbreviations, symbols, and inconsistent capitalization patterns. 
    * In particular, the use of symbols (such as “**” to denote primary care or “%” to denote mental health) is due to an internal need at the VA to run analytics on groups.  
    * By design/mandate, admin users enter these symbols based on a naming convention guidance sheet, albeit inconsistently. The symbols are included to use as tags for the analytics tool to parse on the backend for classifying groups.

### Note: VA.gov improvements are dependent on changes from SM Admin portal
* We will update the MHV SM admin portal so that Coordinators create all new triage groups with more prescriptive data requirements (structured fields, enumerated data options for better standardization). Coordinators at pilot sites will also retroactively edit existing triage groups to convert to this standard.
* With this improved data quality, we can support more scannable, organized, plain-language presentation of names to patients using Secure Messaging on VA.gov and VAHB. 

## Desired User Outcomes
- Veterans take less time to select the provider when composing messages. 
- Veterans report increased confidence in the correct selection. 
- Veterans have a higher success rate in actually selecting the correct triage group for their use case.
- Veterans use SM at a higher rater instead of turning to phone calls due to frustration.

## Undesired User Outcomes
- The new ordering of information in triage group names is not intuitive for Veterans.
- Adding new information to make selection options becomes overwhelmingly long.
- List of names is extremely long leading to attention fatigue the lessens rate of user success in locating correct contacts.

## Desired Business outcomes
- Clinicians and SM administrators (MHV Coordinators) spend less time re-routing messages. Staff are able to spend more time on higher value tasks, like their direct interactions with patients. Staff are less burdened by activities that lead to burnout.
- The number of messages that are re-routed is reduced. 

## Undesired Business Outcomes
- We make changes to the names that break the connections with names rendering in SM Clinician tool or with internal data analytics tools that rely on these names (e.g. VSSC Reports).

---
## Measuring Success

### Key Performance Indicators (KPIs)
- Ease of use: time on task to select use; drop-off rate from Compose page; sentiment analysis from Medallia feedback
- Trust/Satisfaction: satisfaction ratings of pilot experience; sentiment analysis from Medallia feedback
- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it):  
   - Nearly 1.8 million patients use secure messaging each month to send a message to their care teams across modalities (MHV Classic, VA.gov web, and VAHB native mobile app). People are using SM, but encountering a sub-par experience today with the state of triage group names.
   
- **Usability Risks** (can people figure out how to use it):
  - We are currently testing the proposed improvements with Veterans in the August 2024 [Comparative study for new care team names](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research/2024-07-Care-Names-Comparative-Study/2024-07-Care-Names-Comparative-Study-research-plan.md)
  
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - The needed tech/data is dependent on changes in the Secure Messaging API to accept and expose new fields based on what the SM Administrator enters using the improved SM Admin Portal flow for creating and editing a new triage group. 
  - Without this backend change in place to the database and API, these new names will not be possible on the VA.gov or VAHB frontend.
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - We are conducting internal VA stakeholder testing with MHV Coordinators on monthly calls where 50-100 Coordinators regularly attend.
  - We are starting with small pilot with facilities in VISN 1 (Boston, Connecticut, and Providence) and will scale up from here to convert the backend data into the format we need for the front-end improvements.

--- 
## Approach

### What we're going to build to solve this

- Introduce a tool with selectable options that allows MHV Coordinators to build a Care Teams name that adheres to a standardized plain language format (i.e. location, provider/team name, and care type).
- Utilize the OH format (need link) to better prepare for eventual migration, and minimize the need to update this tool multiple times.
- Introduce [combo box component from USWDS](https://designsystem.digital.gov/components/combo-box/) to combine select with typehead to make improved names even quicker to find. Note: this is a new component that needs to be introduced with VADS team to jumpstart that process  (need more info on this)

#### Guidlines we'll use
- OH Guidelines [document](https://login.microsoftonline.com/e95f1b23-abaf-45ee-821d-b7ab251ab3bf/oauth2/authorize?client%5Fid=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&response%5Fmode=form%5Fpost&response%5Ftype=code%20id%5Ftoken&resource=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&scope=openid&nonce=507F343853675BE13D895065839D73B7931C164FC2DF9D73%2D9B767031BDF59473D3AAC509A9BD89C4AD3F2824377E9CBF13C213F47404E526&redirect%5Furi=https%3A%2F%2Fdvagov%2Esharepoint%2Ecom%2F%5Fforms%2Fdefault%2Easpx&state=OD0w&claims=%7B%22id%5Ftoken%22%3A%7B%22xms%5Fcc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083%2D87e0%2D41b5%2Dbb78%2D0bc43c8a8e8a&client%2Drequest%2Did=0f39e6a1%2D00dd%2Da000%2Ded6c%2D75873af19e99&sso_reload=true) that we're basing this new format on.

* What the format should look like as an output from the tool:
  **VHA XXX Group [Sub-Group] Team Name Location**


---
### User stories

#### Admin user
- As an SM admin user, I need to efficiently *create* triage groups with the structured data fields that enable a plain language, standardized patient experience.
- The following will be new fields:
    -   Location (also sometimes known as division name). This will associate a Medical Center or Clinic (CBOC). [Location will come from the same source](https://www.va.gov/data/cms/vamc-system.json) that the VA.gov public site uses for unauthenticated experience. For example, [see the Boston VA locations listed on VA.gov](https://www.va.gov/boston-health-care/locations/).
    -   Note: sometimes a location will need to operate as a *systemwide* location (e.g. VA Boston) vs. at a certain location (e.g. Jamaica Plain Medical Center). A user will select "healthcare system wide" option from the dropdown under Location to designate this.
    -   Group type (i.e. primary care) and when relevant subgroup types that will cascade upon selection of group type. [See proposed group type/subgroup times documented here on VA Sharepoint](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Secure%20Messaging/Triage%20Group%20Naming/2024.07.29%20-%20MVP%20triage%20group%20types%20and%20subgroups.xlsx?d=w9b8985d58e0b482cb370bb8240060d65&csf=1&web=1&e=1DraJN).
    -   If applicable, the team name (e.g. PACT Team, Blue Team). Free text.
    -   If applicable, the lead provider name (ex. Allen Smith). Enumerated options from MHV data source.
      - For the admin user, we will need to include the DUZ number in the DXP Admin lead provider dropdown. This will not be included in the patient-facing requiredDisplay but it is only to assist the admin user in selecting the right provider.
    -   Note: only Location and Group type will be mandatory; team name & provider name will remain optional
- As an SM admin user, I need to efficiently *edit* triage groups with structured data fields, aligned to the new fields added above.
- Update 9/17: A note on technical implementation in the above- there will be a computed attribute "requiredDisplay" returned to front-end clients for all human facing instances of the new triage group name (e.g. patient users on VAHB, patient users on VA.gov, clincian users on SM Clincian, admin users on SM Admin). These clients should use the "requiredDisplay" which will be concatenated from the individual need data fields. The legacy "name" attribute will contain the triage group names and will be used to ensure backwards compatability with the VSSC tool in the short term.

#### Patient user
- As a patient, when selecting a triage group to message, I want to see plain language identifiers (i.e. location, doctor name, and care type) so that I can quickly and confidently identify the right team to message.
   - (validated 9/16 based on research) The *order* of the information displayed should be: Location, Care Type, Team Name, Doctor name. For example: "Glen Burnie VA Clinic | Primary care | Blue team - Thierer, Chris"
   - When optional information is not entered, it will not render. For example: "VA Pittsburgh | Admin | Record amendment"
   - There should be no acronyms (aside from VA), specialized terminology, abbreviations, and symbols.
   - Capitalization follows standard style guide for VA content (no all caps) and should be sentence case.[ Please see Sharepoint document with specific capitalization rules](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Secure%20Messaging/2024.09.17%20Plain%20language%20triage%20groups%20rules%20for%20patient-facing%20requir.docx?d=w6d2468e423a64d7cba1172f01e2e364f&csf=1&web=1&e=jTjuQZ). 
   - *Order rules*: The Select list with the new triage group names will be presented with the following rules:
  - 1) triage groups grouped by healthcare system (facility) and in alphabetized order within a system grouping;
  - 2) groups with a healthcare system with be in alphabetized order;
  - 3) Exception: any group identified as primary Care should be moved to the top of the list within a health care system (facility) grouping
 - [decoupled in scope; can proceed independent from this initiative or as a rider] As a patient, I want to be able to identify groups grouped by healthcare system (facility) so that I can more quickly find what I'm looking for.
   - The groups will be clustered by the optgroup tag (noted above).
- [descoped from MVP; fast follow] As a patient, I want to be able to use typeahead so that I can filter down options presented.
  - We will be using a combo box to achieve this based on USWDS (noted above). 

---
   
## Screenshots for VA.gov 

### Before on VA.gov
![image](https://github.com/user-attachments/assets/402a0e13-1e21-41c9-a46d-c754240b0815)


### After on VA.gov
Mockup in Figma:
<img width="440" height="710" alt="image" src="https://github.com/user-attachments/assets/4dfb07f1-4ec8-4a3a-b74c-93d1d80aeccd" />

