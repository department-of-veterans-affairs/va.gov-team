# Initiative Brief: Plain language triage group names with improved Select list
 

## Outcome Summary

*  Increase satisfaction in the Secure Messaging experience and trust in the VA generally through more plain language, patient-friendly, and accessible triage groups names. 
    * Result: Veterans more quickly and confidently identify who to send the message a message tool. 
    * Result: Veterans report higher satisfaction with the messaging tool overall.
    * Result (beyond scope of VA.gov analytics): SM Administrators (i.e. MHV Coordinators) spend less time re-routing messages because more patients are selecting the current triage group initially. 




**Associated product**
- Secure messaging, or Messages, on VA.gov |[ Link to product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product)

## Problem
* Today, the Secure Messaging (SM) tool does not render care team names, referred to as “triage groups”, in plain language for patients despite their central importance in using the tool. 
* These care team names use a host of internal abbreviations, acronyms, and symbols that are indecipherable to patients, creating significant cognitive load when attempting to parse and decide who to send a message to. For example, a patient will see REN PAC 03 WH with no further explanation or support in translating meaning. 
* Example of current state:
![image](https://github.com/user-attachments/assets/759906a4-fd7b-4d12-8451-d0cf67cbfa6e)
* This reality undermines the patient experience by creating frustration/confusion and leads to greater admin burden for SM Administrators (MHV Coordinators) who spend more time re-routing messages to the correct group. 
* On their face, the existing names violate basic plain language and accessibility principles, as outlined in the 21st Century IDEA Act and supporting [2023 policy guidance from the OMB M-23-22 memo](https://www.whitehouse.gov/omb/management/ofcio/delivering-a-digital-first-public-experience/) as well as internal VA [guidelines on capitalization](https://design.va.gov/content-style-guide/capitalization) and abbreviations.
* Qualitative research by the SM team has validated that the current state negatively impacts Veteran satisfaction, creates confusion and frustration, and leads to a loss of trust in the VA.  Researchers also heard from Veterans about task abandonments instances where Veterans are so frustrated they want to give up or rely on the MHV coordinator by phone or caregivers. This is also one of the biggest, recurring themes we hear in user feedback while Secure Messaging exists in a “Try Me” beta state (Phase 1) on [VA.gov](http://va.gov/). See below for sample feedback:
     * The name should be English, not some coding.” 
     * Sometimes, it is confusing because they use these really long codes and names; it’s hard to figure out which one [I need].” 
     * “If it was simpler, I would use [the tool] more.” 
     * I have no idea where to send my message to. It would really be beneficial if somehow a name could be associated or made available within this system as I know my doctors but, to repeat myself, I have no idea which group each belongs to.” 
* An overview of previous research informing this initiative is below:

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

## Undesired User Outcomes
- The new ordering of information in triage group names is not intuitive for Veterans.
- Adding new information to make selection options becomes overwhelmingly long.

## Desired Business outcomes
- Clinicians and SM administrators (MHV Coordinators) spend less time re-routing messages. Staff are able to spend more time on higher value tasks, like their direct interactions with patients. Staff are less burdened by activities that lead to burnout.
- The number of messages that re-routed is reduced. 

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


### What're you building

-  (Outside of VA.gov) Backend API updates and enhancements to SM Administrative Portal tool to standardize data
- On VA.gov/VAHB, introduce standardized plain language identifiers (i.e. location, provider/team name, and care type) from Select list options so users can quickly and confidently identify the right team to message. 
- On VA.gov/VAHB, introduce [opt groups tag ](https://www.w3schools.com/TAgs/tag_optgroup.asp#:~:text=The%20%3Coptgroup%3E%20tag%20is%20used%20to%20group%20related,options%20are%20easier%20to%20handle%20for%20a%20user)<optground> to create category labels and group related triage groups by healthcare system in the Select list.
- On VA.gov/VAHB, introduce [combo box component from USWDS](https://designsystem.digital.gov/components/combo-box/) to combine select with typehead to make improved names even quicker to find. Note: this is a new component that needs to be introduced with VADS team to jumpstart that process

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
  - We will be using a combobox to achieve this based on USWDS (noted above). 

---
   
## Screenshots for VA.gov 

### Before on VA.gov
![image](https://github.com/user-attachments/assets/402a0e13-1e21-41c9-a46d-c754240b0815)


### After on VA.gov
Note: In the mock up below, the Maryland and DC healthcare systems are using the new method. Providence is still operating as status quo. This is shown for illustration that for the pilot, it is an accepted state that some (most all) systems will be status quo while the 3 pilot sites will not. Users may see a mix like this when registered across systems.

Updated: 9/26/2024

![image](https://github.com/user-attachments/assets/d61efdc4-c270-4c63-9fe8-7a37daa80a80)



### Updated 9/5/25 as "Nice to have" (not "must have" for pilot launch)
Typeahead combobox - pending a11y discussions and decisions decisions on how combobox functionality should work

![image](https://github.com/user-attachments/assets/31eb440a-3505-4708-bd47-8e57bb6d39f9)


---

## For context: screenshots on Admin Portal

In order to enable these changes on front-end, the MHV Administrative Portal will also be updated. This goes beyond the scope of this ticket for VA.gov, but sharing here for awareness.

###  Before on SM Administrative Portal
![image](https://github.com/user-attachments/assets/92363f0e-e806-4b99-b74a-736a8867af99)

###  After on SM Administrative Portal
updated 9/17
![image](https://github.com/user-attachments/assets/d5e0391b-af97-4708-a93b-ba3709167693)


---


## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket (forthcoming)

### Timeline 
 * August 2024
    * OCTO builds out the prototype in DXP. Ro plugs in to help with starting the initial requirements as placeholders.
    * OCTO leading research study comparing current state to 2 options for ordering of the new language for Veterans (i.e., location first or provider first)
*  September-October 2024
    * Based on learnings from the prototype, Ro + team finalize formal requirements, and tech vetting process is started with SM team.
* Mid September: 
    * target Midpoint Review with demo of prototype and handoff to ByLight team to shepherd from here
* October-November 2024: 
    * With start of PI17 on October 16th, SM admin portal development starts for limited production pilot and any additional FE changes.
    * Updated 9/17: Thie pilot should have patient-facing changes coordinated across VAHB, SM on VA.gov, and SM Classic for a consistent patient experience.
* Mid November: target Staging Review to demo solution in VA.gov and VAHB
* November-December 2024: development is completed, and we launch limited production pilot for VISN 1 users. 
 
![image](https://github.com/user-attachments/assets/1b2804c4-f8a2-4bfe-b07c-452e699946ec)

#### Initiative Launch Dates
- *Target Launch Date for pilot*
  - December 2024
- *Actual Launch Date* 
  - tbd
    
### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
- Due to backend data limitations/constraints, we will be starting with a pilot for SM users in VISN 1 at the 3 healthcare systems (Boston, Connecticut, and Providence). Users with care teams in these systems would see the new improved experience on the front end.
- We will need to conduct outreach with MHV Coordinators (staff) at these facilities to ensure they understand expectations for creating and editing new triage groups using the new standard.
- After the initial pilot, we will identify additional user-facing marketing, and outreach activities as we scale.

---

#### Communications
*Where will you discuss this initiative?*

- Team Name: Secure Messaging 
- GitHub Label(s):  vfs-mhv-secure-messaging 
- Slack channel: #mhv-secure-messaging, #mhv-sm-redesign-devs
- Product POCs: Janie Tankard Carnock (OCTO) - January 2024-Oct 2024; Patrick Bateman, Oct 2024 and beyond

#### Stakeholders
*What offices/departments are critical to make this initiative successful?*
 
- Office/Department: VHA/Office of Connected Care
- Contact(s): Patty Henry 
 

---
## Other key artifacts or links
- [2024.07.26_Plain language triage group names_SM admin tool updates slides on Sharepoint](https://dvagov.sharepoint.com/:p:/r/sites/HealthApartment/Shared%20Documents/Secure%20Messaging/2024.07.26_Plain%20language%20triage%20group%20names_SM%20admin%20tool%20updates.pptx?d=we8e65da3fdc64149b7b9e7362bb73fe5&csf=1&web=1&e=zi1x9c)

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
