# Medical Records Decision Log
Please log key decisions related to the below practice areas, including date, who made the decision, and a description of the decision and any specific rationale behind it.


# Medical records design decisions

## Feb 27, 2024
### State of product
* Phase 0
* Domains included: Allergies, Vaccines, [NEW] Care summaries and notes

### General product design decisions
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------| 
|Veterans will *not* have the ability to enter new data into their medical record as they are able to in MHV today.| OCC is working on new ways for Veterans to enter data (web + mobile). Where/how this data will be viewed is TBD. If they are able to print/download historically entered data in that view is still TBD.|
| MHV on va.gov will continue to have the "Blue Button" concept, which will combine all historcial information, including prior self-entered data. |This will not include newly entered data via OCC web + mobile pathways.|
| MHV on va.gov will point to the OCC web + mobile self-entry paths that are being built. |This will not include newly entered data via OCC web + mobile pathways that are being built.|

Decisions made on OCC/OCTO Leadership meeting with Dr. Josephs, Theresa Hancock, Shawn Hardenbrook (OCC), Lauren Alexanderson, Marci Mcguire and Kaitlin Fink.

## Feb 24, 2024

### State of product
* Phase 0
* Domains included: Allergies, Vaccines, [NEW] Care summaries and notes

### General product design decisions
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------| 
| The product left navigation and landing page ordering will be in order of frequency of use. |  The order of domains was determined by frequency of use from data and research.  We will monitor this during Phase 0 roll out and adjust as necessary. |
| Domains within medical records have updated names from MHV today and we will need to consider this when rolling out to larger groups of veterans. |  Content is being updated on va.gov to make it plain language and more accessible. With these changes we will need to educate veterans around the new naming structure and any shortcuts they are used to in MHV today.|

### Care summaries and notes specific design decisions
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------| 
| Care summaries and notes will include progress notes, consultation notes and admission and discharge summaries.| These are all included in MHV today.  If there are other notes we should include here in the future we will consider and add as necessary. 

## Nov 22, 2023

### State of product
* Phase 0
* Domains included: Allergies, [NEW] Vaccines
* Final designs for Phase 0, Vaccines launch

### General product design decisions
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------| 
| The product will have a left navigation bar |  The introduction of a second domain necessitates secondary navigation  |
| A user can download either a PDF or a Text file |  Due to avaialble eng time, donwloading a text file was completed earlier than expected. A11y advised that text files are more easily used by folks who read Braille.  |

### Vaccines specific design decisions
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------| 
| The field for reactions will not be displayed as part of the vaccine data in production.                                  | After significant research and review of data, it was determined that CPRS 32b, which removed the reaction field from vaccines, was released Sep 29, 2022 and all sites (except those on Cerner) should have installed it by Dec 16, 2022.  This change made recording reactions as part of the vaccines record obsolete, and as a result, Dr. Josephs recommended that we not display it.  
| The domain name was will be Vaccines, not Immunizations| This was approved by SMEs. Vaccines is more recongizable and plain language than immunizations. |
| The list view page for vaccines will be at the URL …/my-health/medical-records/vaccines/ |   |
| A details page for vaccines will be at the URL …/my-health/medical-records/vaccines/vaccine_ID |     |
| The vaccines list view will incldue a link to allergies. | Based on SME input, reactions and allergies to vaccines are typically documented in the allergies list.|
| A user can print from the list view. When they do, they receive a print out of all of their vaccines |     |
| A user can print from the details view. When they do, they receive a print out of the details for just that vaccine |     |
| A user can download from the list view. When they do, they receive either a PDF or text file that includes a list of all of their vaccines |   |
| A user can download from the details view. When they do, they receive either a PDF or text file that includes just the details of that vaccine |      |
| A user will be presented information on the consequences of downloading on a public computer | |
| The list view will present each vaccine in a card format. That card will include both the vaccine logged and the date it was received as entered into the EHR by a provider. | A user may get the same vaccine yearly, and therefore we need a second identifier to differenitate. Given a user cannot receive the same vaccine on the same day, date received fits the bill. |
| The H1 of the details view will be the vaccine name. Directly underneath the H1 will be date received information | | 
| In the details view for a vaccine, a user will be shown vaccine name, date received, location received, and provider notes | |
| The field reaction for vaccines will not be shown at launch. | This was based on feedback from SMEs. There are still many qustions about how the field is used in the field. We want to track down these reasons to properly explain this field to users. This must be resolved before moving MR to Phase 1 |
| The following data can be shown to users once verified by KBS and if they are available. They do not need to be included at launch into phase 0: Vaccine series information, Manufacturer, Site (such as left arm), Vaccine status (such as completed) and Lot number. | These are important pieces of data for patients, but ahve not been shown in MHV in the past. Therefore, we must first verify their accuracy with KBS.|
| The following field should not be shown to users: CPT code, who administered the code | After discussion, the SMEs determined they were not needed for patient view and may cause confusion. A user would still be able to get this information by asking their provider directly or submitting a full records request.|



## Oct 4, 2023

### State of product
* Phase 0
* Domains included: Allergies
* [Final designs for Phase 0, Allergy launch](https://www.sketch.com/s/a7c188da-3716-494d-a11b-8b570ce78e8a)

### General product design decisions
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------| 
| There will be three primary pages: A landing page, a list of entries, details about each entry |       |
| We will initially launch the product with only one domain, allergies. |     |
| The product will not have a left navigation bar |  No need for left nav with only one domain available  |
| The landing page will be at the URL …/my-health/medical-records/ | | 
| The landing page will list all available domains, give a short descriptive blurb about each, and provide a link to the list view for each |   |
| Any printed or downloaded page will include two patient identifiers - name and date of birth |    |
| For Phase 0, we will only make downloads available as PDF. Downloading a TXT version will be a fast follow once all domains are in Phase 0. | Given the web version is fully 508 compliant, it will be the view that we recommend for all users to primarily access, including those who would need a TXT download rather than a PDF download  |


### Allergies specific design decisions
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------| 
| The Allergies domain name was updated to Allergies and reactions. | This was a recommendation based on SME feedback. Allergies and reactions captures the full breadth of the data entered into this section of information. Reactions refers to information such as an adverse drug reaction. |
| The list view page for allergies will be at the URL …/my-health/medical-records/allergies/ |   |
| A details page for allergies will be at the URL …/my-health/medical-records/allergies/allergy_ID/ |     |
| A user can print from the list view. When they do, they receive a print out of all of their allergies |     |
| A user can print from the details view. When they do, they receive a print out of the details for just that allergy |     |
| A user can download from the list view. When they do, they receive a PDF that includes a list of all of their allergies |   |
| A user can download from the details view. When they do, they receive a PDF that includes just the details of that allergy |      |
| A user will be presented information on the consequences of downloading a PDF on a public computer | |
| The list view will present each allergy in a card format. That card will include both the allergy logged and the date it was entered into the EHR by a provider. | Allergies may not be deduplicated across VistA sites. In order to make sure each card in the list view is unique and therefore accessible, we must include a second identifier. We chose date entered as that second identifier.    |
| The H1 of the details view will be the allergy name. Directly underneath the H1 will be date entered information | | 
| In the details view for an allergy, a user will be shown Allergy name, date entered, location entered, reaction, allergy type, whether it was observed or is historical, and any comments entered by the provider | |
| The field formerly called reaction was updated to be called Signs and symptoms. | This was based on feedback from SMEs. Signs and symptoms is the terminology for this field used in the After Visit Summary. It also differentiates this field from the title of this entire section - Allergies and reactions |



## Product
 | Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
| 09/09/2022 | Lauren Alexanderson, Marci McGuire, Coulton Bunney                   |  We will bring engineering and design in earlier than we did with secure messaging                       |  rapid technical feedback will be more important in this application. |
| 09/22/2022 | Lauren Alexanderson, Marci McGuire, Coulton Bunney      | We will likely start with immunizations first in the Medical Records app.| Should be straightforward compared to other sections        |


## Functional (How it works)
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|    1/12/23  |         Patty Henry          |             Update: We will NOT be moving forward with directly sharing medical records via MHV or VA.gov per the conversation with Patty Henry in today's Jira Backlog Grooming meeting for the following reasons:| Because users own this information, they are free to download/print their records to send to anyone they choose, using their own delivery methods. The Legacy feature, "Send My VA Health Summary" was a pilot feature that has been decommissioned. This feature is owned by Veterans Health Information Exchange (VHIE) program, not MHV.|
|   2/1/23   |    Coulton Bunney               |         Per the 2/1 Design and Research critique, we’ve decided that, for Phase 0, the list of vaccines will not have any search, sort, filter, or grouping capabilities. The grouping of vaccines will be included in later iterations, pending research.                |    Simplify the MVP, and justify the additional features through future research.        |


## Consider designing an experience that allows users to view,  print/download, and share immunizations.

**Other approaches considered:**  We also considered having a print functionality (leaving the sharing and downloading to the proposed “Medcial Records” section of the IA/expereince). Sharing an individual immunization may be more of an edge case. However, we wanted to surface and explore the possibility of electronically sharing individual records as it may be more of use case for “labs and tests.” 

**Pro:** In generative research: Viewing, sharing, downloading/printing functionality was desired. 

**Pro:** Provides autonomy and ownership of the records to the user. 

**Con:** The workflow to electronically share may be confusing to users. It may be overcomplicating the experience by over engineering/designing the workflow. Keeping in mind, there will always be a place to download and electronically share your medical records in this expereince.  

**Con:** There may be policy issues with sharing indivdual records. 



## Design (How it looks)
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|    12/21/22  |      Jonathan Nelson  |   H1: VA Vaccines  | Follows VA Flagship app - "VA" helps add context for the user (not DoD or self-entered)  |   
|   12/21/22   |      Jonathan Nelson     |    Print functionality from the vaccine list view - Setting off a workflow to print one, some, or all of vaccines   |    It is important for users to download/print records for their own records (please see bellow for print and download discussion)|
|    12/21/22  |       Jonathan Nelson            |        Surface Vaccine name and date of vaccine on list view with a link to "view details" -   |  Surfacing the most relevant information will make the list scannable and help Veterans find information quickly and efficiently. Additionally,  this is similar to the Secure Messaging designs  and the Flagship mobile app|
|   12/21/22   |       Jonathan Nelson            |           The hierarchy and content of the immunization detail page follows the Flagship Mobile App for consistency.   |     Users should have a similar experience (when possible) across the mobile app and website ("dosage" is coming from Lighthouse API - Unknown if we get from doage from PHR API)  |
|    2/3/22  |     Alexia Wunder, Matt Dingee, Peter Russo, Martha Wilkes, Ryan Thurlwell              |   [Per this Slack conversation](https://dsva.slack.com/archives/C0NGDDXME/p1675212625976139), we will move forward with the print and download action triggers as links with icons instead of buttons.                       |  This decision was approved with the understanding that other teams will test this style going forward to come up with a more permanent structure for this type of trigger, and that we will be sure to test with screen reader users.          |



## Does the immunizations experience need both a print and download feature? 

Note: The legacy MHV is a download first experience and there will always be a place to download your medical records in the reiamigined expereince.  

**Considerations** 
- What is the best UX/Accesbility considerations? 
  - Will users know they can download from "Print"?
  - From Brian DeConick (accesability expect):
    - I mentioned this in the meeting, but I've confirmed that the Print > Save as PDF browser workflow does not result in an accessible PDF, even if the source material is fully accessible. I don't have a strong opinion on including both Download and Print or just Download, but I don't think Print alone is going to be a viable option if the intention is to allow users to download a PDF copy for their own records.

Please see Accessibility design intent feedback [https://github.com/department-of-veterans-affairs/va.gov-team/issues/51727]

- Why have a download and print button for similar results? 

**Recomendation**

-  Because we are not having a “share” functionality wihin this flow - And based on accessbility feedback - we should strongly consider a download and print button/functionality  

## Consider flagging “due” vaccines and make it easy to the user to schedule an appointment for a vaccine. 

Further exploration is needed for the technical feesability of this as well as how we might make it easier to schedule vaccine appaointment. 

However, surfacing action items for users is one of the main takeaways from generative research. 

## The hierarchy of the immunization detail page and data displayed follows the Flagship Mobile App for consistency. 

**Work with engineers to align on where the data is coming from and how that maps to the data displayed on the page**

**VA Mobile app** 
- Date
- Type and Dosage ("dosage" is coming from Lighthouse API - Can we get from doage from PHR API?) 
- Series Status
- Provider
- Reactions
- Notes   
  
**Blue Button**
- Date Received
- Location
- Reaction
- Comments

- Ensure the details page is clear and easy to scan during future usability study. 



## Content & IA
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|  12/21/22    |    Danielle Thierry (OCTO content and translation lead)   |   VA have any stance on the terms Vaccines or Immunizations                       |      we've decided on "vaccines" on modernized pages mainly for simplicity (see bellow for more info) |
|  12/21/22  |      Jonathan Nelson           |       H1: VA Vaccines  | Follows VA Flagship app - "VA" helps add context for the user (not DoD or self-entered) |


## Does the VA have any stance on the terms Vaccines or Immunizations? 

**Danielle Thierry (OCTO content and translation lead) stated in Slack:**

To date, we've decided on "vaccines" on modernized pages mainly for simplicity. The Veterans Health Library and public health site both go with   "Vaccines and immunization," as do the WHO and others. Both terms have high search volume so there's definitely an element of recognition for both and we've discussed that in the past as a potential option. Our current IA tree test for the health apartment has "vaccines" so we should get some data around that and we can continue to test further. 

**Pro:** “VA Vaccine” is consistent with the with VA Flagship Mobile app 

**Recommendation:** Continue working with the content and IA team to determine the best approach 

Please also see Design intent IA ticket[https://github.com/department-of-veterans-affairs/va.gov-team/issues/51712]

## Engineering
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|      |                   | MHV will FHIR-ize their existing PHR APIS                         | The logic and connections to source data is already there; just needs to be converted to FHIR          |
|      |                   | We will access Cerner data via DAS SPOE                        | Single point of entry already exists; will prevent us from having to do a brand new ATC          |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |

