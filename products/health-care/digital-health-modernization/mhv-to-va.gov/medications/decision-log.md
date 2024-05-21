# Medications Decision Log
Please log key decisions related to the below practice areas, including date, who made the decision, and a description of the decision and any specific rationale behind it.

## Product
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

## Functional (How it works)
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|5/21/24|Eric, Kaitlin, Kay with agreement from NAPMIS|If the allergy API fails when a user goes to print/download we give them an error and prevent the user from downloading/printing.  If they use their browser to print we provide that error on the print/download page.|From a patient safety perspective and to meet VHA 1164 policy any printed list of medications needs to include allergies.  We cannot provide a medications list without allergies.|
|3/8/24| Kaitlin, Tanner, Lexi, Tony, Vitalii, Gerard|All means of printing (Control P, File Print or the Print button) will produce the same printed document.  It will include all meds + extra details and the allergy list.|Users should get the same printed view independent of what means they use to print.|
|~~3/8/24~~|~~Kaitlin, Tanner, Lexi, Tony, Vitalii, Gerard~~|~~If the allergy API fails we will provide the user with an alert on the page giving them the option to cancel print or continue without allergies. If a user prints using Control P or File Print we will not be able to display this error. The printed page will have messaging around allergies not being shown due to an error and to check back later or contact your provider. If the medication API fails we will not allow the user to continue to print and will generate an error.~~|~~Allergies is critical information to a medication list.  A user needs to understand that their allergy information is missing before they continue with their print but we should not prevent them from being able to print what they already see.  If medications fail the printed page is no longer useful to the user so we should prevent them from continuing.~~|


## Design (How it looks)
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|      |                         |           |
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
|2024/05/21|Lauren Alexanderson, Mikki Northuis, Kay Lawyer, Kaitlin Fink |We will keep VAHB labeled Prescriptions for now.|Current functionality between the two is different and VAHB is only displaying prescriptions, not broader medications. Until the team determines long term requirements for VAHB and how that integrates with the web experiences we will not make changes. |
|2024/05/21|Lauren Alexanderson, Mikki Northuis, Kay Lawyer, Kaitlin Fink |Pharmacy will be renamed Medications will be the name on VA.gov.|Decision was previously made an approved by OCC.  Documenting for reference of future conversations. Modern patient portals call them medications. This section is a full list of your medications not just a list of things VA prescribed you. Pharmacy is limiting and the name of a place vs. a thing. Medications works with the current implementation as of May 2024. If/when we decide to include more than medications ie. supplies and devices, etc. we will come back to discuss options with CAIA. As we launch we will montior feedback to determine if changes should be made. We have tested Medications with users and received no negative feedback so far. [Pros and cons naming list](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/_layouts/15/Doc.aspx?sourcedoc=%7BF0746B00-6C30-4255-99EE-5FE53BECE2EF%7D&file=Naming%20options%20pros%20and%20cons%20-%20Copy.docx&action=default&mobileredirect=true)|


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


