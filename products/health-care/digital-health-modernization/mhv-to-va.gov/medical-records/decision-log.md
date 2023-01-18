# Medical Records Decision Log
Please log key decisions related to the below practice areas, including date, who made the decision, and a description of the decision and any specific rationale behind it.

## Product
 | Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
| 09/09/2022 | Lauren Alexanderson, Marci McGuire, Coulton Bunney                   |  We will bring engineering and design in earlier than we did with secure messaging                       |  rapid technical feedback will be more important in this application. |
| 09/22/2022 | Lauren Alexanderson, Marci McGuire, Coulton Bunney      | We will likely start with immunizations first in the Medical Records app.| Should be straightforward compared to other sections        |
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
|      |                   |                         |           |

## Functional (How it works)
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|    1/12/23  |         Patty Henry          |             Update: We will NOT be moving forward with directly sharing medical records via MHV or VA.gov per the conversation with Patty Henry in today's Jira Backlog Grooming meeting for the following reasons:| Because users own this information, they are free to download/print their records to send to anyone they choose, using their own delivery methods. The Legacy feature, "Send My VA Health Summary" was a pilot feature that has been decommissioned. This feature is owned by Veterans Health Information Exchange (VHIE) program, not MHV.|
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
|      |                   |                         |           |

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
|    12/21/22  |       Jonathan Nelson            |        Surface Vaccine name and date of vaccine on list view with a link to "view details" - additionally,  this is similar to the Secure Messaging designs  and the Flagship mobile app  |  Surfacing the most relevant information will make the list scannable and  help Veterans find information quickly and efficiently.|
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


## Does the immunizations experience need both a print and download feature? 

Note: The legacy MHV is a download first experience and there will always be a place to download your medical records in the reiamigined expereince.  

**Considerations** 
- What is the best UX/Accesbility considerations? 
  - Will users know they can download from "Print"?
  - From Brian DeConick (accesability expect):
    - I mentioned this in the meeting, but I've confirmed that the Print > Save as PDF browser workflow does not result in an accessible PDF, even if the source material is fully accessible. I don't have a strong opinion on including both Download and Print or just Download, but I don't think Print alone is going to be a viable option if the intention is to allow users to download a PDF copy for their own records.

Please see Accessibility design intent feedback [https://github.com/department-of-veterans-affairs/va.gov-team/issues/51727]

- Why have a download and print button for similar results? 

## Consider flagging “due” vaccines and make it easy to the user to schedule an appointment for a vaccine. 

Further exploration is needed for the technical feesability of this as well as how we might make it easier to schedule vaccine appaointment. 

However, surfacing action items for users is one of the main takeaways from generative research. 

## The hierarchy of the immunization detail page follows the Flagship Mobile App for consistency. 

- Work with engineers to align on where the data is coming from and how that maps to the hierarchy on the page. 
- To ensure the details page is clear and easy to scan during future usability study. 



## Research (How it tests)
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
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
|      |                   |                         |           |
|      |                   |                         |           |

## Content & IA
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|  12/21/22    |    Danielle Thierry (OCTO content and translation lead)   |   VA have any stance on the terms Vaccines or Immunizations                       |      we've decided on "vaccines" on modernized pages mainly for simplicity (see bellow for more info) |
|  12/21/22  |      Jonathan Nelson           |       H1: VA Vaccines  | Follows VA Flagship app - "VA" helps add context for the user (not DoD or self-entered) |
|      |                 |                         |           |
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

## Does the VA have any stance on the terms Vaccines or Immunizations? 

**Danielle Thierry (OCTO content and translation lead) stated in Slack:**

To date, we've decided on "vaccines" on modernized pages mainly for simplicity. The Veterans Health Library and public health site both go with   "Vaccines and immunization," as do the WHO and others. Both terms have high search volume so there's definitely an element of recognition for both and we've discussed that in the past as a potential option. Our current IA tree test for the health apartment has "vaccines" so we should get some data around that and we can continue to test further. 

**Pro:** “VA Vaccine” is consistent with the with VA Flagship Mobile app 

**Recommendation:** Continue working with the content and IA team to determine the best approach 

Please also see Design intent IA ticket[https://github.com/department-of-veterans-affairs/va.gov-team/issues/51712]



## Engineering
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
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
|      |                   |                         |           |
|      |                   |                         |           |

