# AVS Gap Analysis 

## Background

**AVS** is a web-based interface launched from the CPRS Tools menu that provides a summary of the visit. It includes information about diagnoses, vitals, new orders, upcoming appointments, provider comments/instructions, as well as information pertaining to the patient's ongoing care, including the primary care provider, allergies, and the medication list. The AVS supports various clinical worksflows - Providers can run AVS alongside CPRS and interact directly with the AVS to add content, clinic staff can printout the AVS when the patient is checking out, the AVS can be printed and mailed after the encounter. AVS is automatically uploaded as a PDF document to VistA Imaging when the AVS is first printed.

Cerner's version of an AVS document is the **Ambulatory Visit Summary**. Similarly, the Ambulatory Visit Summary includes clinical information about the visit, as well as provider instructions, ongoing care information, and the medication list. Cerner's Ambulatory Visit Summary is native to Powerchart and the document will generate when providers and clinical staff go through the discharge process. Data from the visit, as well as pertinent ongoing care data, will pull into the document. This document is reviewed along with making any additions and modifications. Upon completion, the document is saved as a Clinical Note to the chart and can be printed. 

- Information about CPRS tool AVS: [AVS Sharepoint](https://dvagov.sharepoint.com/sites/vhaavs)
- Example of Cerner's Ambulatory Visit Summary: [VA EHRM Amb Visit summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/cerner-integration/VA%20EHRM%20Ambulatory%20Visit%20Summary%2020221116.pdf)

To support the Patient Check-in Integration project with Cerner, the team would like to have a better understanding of how the AVS compares to Cerner's Ambulatory Visit Summary. The comparison should include specific data points, clinical workflow, Veteran facing impacts, continued development and agility of the tools, and any outstanding issues or concerns from clinical users. 

The goal of this Gap Analysis is to provide the information needed for decision-making efforts. Any additional discoveries should be added here to provide a comprehensive resource.

## Data Points
||Cerner's Ambulatory Visit Summary| CPRS AVS|Comments|
|---|---|---|---|
| *Patient Demographics / Header* ||||
| Name  | X | X | |
| DOB  | X | X | |
| Age  | | X  ||
| MRN   | X   |   |   |
| SSN   | | X - O        | Optional for AVS - taken away by default   |
| Custom Text   |    | X |      |
| Date document generated  |    |  X | |
| Patient Address    |    | X - O        | AVS Optional section   |
|||||
| _Follow up Instructions_                                              |                                   |              |                                                                                          |
| Instructions from provider (free-text or auto-text)                 | X                                 | X            |                                                                                          |
| Scheduled Follow-Up Appointments                                    | X                                 | X            | Existing AVS includes Vista, but working on Cerner appointments (Appts, Allergies, Meds) |
| You Need to Complete the Following (e.g. Imaging)                   | X                                 | X            |                                                                                          |
| Someone Will Contact You Regarding These Appointments (Referrals)   | X                                 | X            | AVS lists referrals under New Orders                                                     |
|||||
| _Ongoing Care_                                                        |                                   |              |                                                                                          |
| Primary Care Provider                                               |                                   | X            |                                                                                          |
| Primary Care Team                                                   |                                   | X            |                                                                                          |
| Smoking Status                                                      |                                   | X - O        |                                                                                          |
| Preferred Language                                                  |                                   | X - O        |                                                                                          |
| Treatment Plan                                                      |                                   |              |                                                                                          |
|                                                                     |                                   |              |                                                                                          |
| _Medications_                                                         |                                   |              |                                                                                          |
| Full Medication List                                                | X                                 | X            | Medication details vary                                                   |
| Lists changes to medications from visit                             |                                   | X            |                                                                                          |
|||||
| _Visit Information_                                                   |                                   |              |                                                                                          |
| Visit Date                                                          | X                                 | X            |                                                                                          |
| Facility Name                                                       |                                   | X            |                                                                                          |
| Providers                                                           |                                   | X            |                                                                                          |
| Diagnosis                                                           | X                                 | X            |                                                                                          |
| Tests Performed (List of Labs, not results)                         | X                                 | X            |                                                                                          |
| Procedures Performed (Procedure History)                            | X                                 | X - O        |                                                                                          |
| Current Medication List (simple meds list)                          | X                                 | X            | AVS is Pocket Med List                                                                   |
| Discharge Vitals                                                    | X                                 | X            |                                                                                          |
| Lab Test Results                                                    | X                                 | X - O        | Optional for AVS - not defaulted                                                         |
| Clinical Charts - line graphs of past year results for Vitals, Labs |                                   | X - O        | Optional for AVS - not defaulted                                                         |
| Medications & Immunizations Administered (during visit)             | X                                 | X            |                                                                                          |
| Immunizations administered over past year                           |                                   | X            |                                                                                          |
| Active Allergies                                                    | X                                 | X            |                                                                                          |
| Allergy Adverse Drug Reactions                                      |                                   | X            |                                                                                          |
| Allergy - Documenting Facility                                      |                                   | X            |                                                                                          |
| Ongoing Active Problems                                             | X                                 | X - O        |                                                                                          |
| Clinical Reminders (due for a flu shot/colonoscopy)                 |                                   | X - O        | Optional                                                                                 |
|||||
| *My VA Supplies*                                                      |                                   |              |                                                                                          |
| List of prescribed supplies (locally and remotely prescribed)       |                                   | X            |                                                                                          |
|||||
| *Education Materials*                                                 |                                   |              |                                                                                          |
| Free-text Patient Instructions                                      | X                                 | X            |                                                                                          |
| Custom Patient Instructions (user saved free-text for re-use)       | X                                 | X            |                                                                                          |
| Free-text Visit Notes                                               |                                   | X            |                                                                                          |
| Education Leaflets - Elsevier                                       | X                                 |              |                                                                                          |
| Education Leaflets - Krames on Demand                               |                                   | X            |                                                                                          |
|||||
| *Included/Standard in all AVS*                                        |                                   |              |                                                                                          |
| Common Emergency Awareness Tips                                     | X                                 |              |                                                                                          |
| Heart Attack Signs                                                  | X                                 |              |                                                                                          |
| VA Beneficiary Needing Help                                         | X                                 |              |                                                                                          |
| Footer text (disclaimer statement)                                  | X                                 | X            |                                                                                          |
| Custom section included in every AVS                                |                                   | X            | In progress                                                                              |
|||||
| _Additional Functionality_                                            |                                   |              |                                                                                          |
| Customize font size                                                 |                                   | X            |                                                                                          |
| Clinical Services Information (Name, Loc, Phone, Hours)             |                                   | X - O        |                                                                                          |

## Outstanding Concerns about Cerner's Ambulatory Visit Summary

### PSR-1828527
Patient safety issue with the data entry of CITC prescriptions in MMR. 

