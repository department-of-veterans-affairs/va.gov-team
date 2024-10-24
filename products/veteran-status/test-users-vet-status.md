# Test Users for Veteran Status
|                                                                                                                                                          |                                                        |                                                                                          |                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Scenario**                                                                                                                                             | **Service History characterOfDischargeCode**           | **Additional Criteria**                                                                  | **Test User**                              |
| Veteran who only has general or above discharge statuses with at least two periods of service, has a DoD ID, and has a disability rating.                | A, B, H, or J                                          | Has 2 periods of service, Has DoD ID number (also called EDIPI), Has a Disability Rating | vets.gov.user+127\@gmail.com; 475SsNrLgPv5 |
| Veteran who only has general or above discharge statuses with at least four periods of service, does not have a DoD ID, and has a disability rating.     | A, B, H, or J                                          | Has 4 periods of service, No DoD ID number (also called EDIPI), Has a Disability Rating  |                                            |
| Veteran who only has general or above discharge statuses with at least one period of service, has a DoD ID, and does not have a disability rating.       | A, B, H, or J                                          | Has 1 period of service, Has DoD ID number (also called EDIPI), Has no Disability Rating |                                            |
| Veteran who does not have any discharge statuses because they have no service history.                                                                   | User with no service history                           | N/A                                                                                      | vets.gov.user+1\@gmail.com; bAxDhMy5L084   |
| Veteran who only has below general discharge statuses.                                                                                                   | D, E, F, or K                                          | N/A                                                                                      |                                            |
| Veteran who has below general discharge status for a period of service but also has a general or above discharge status for another period of service. | D, E, F, or K and also has A, B, H, or J               | Has at least 2 periods of service                                                        |                                            |
| Veteran who does not have any valid discharge status.                                                                                                    | Y, Z, DVN, DVU, CVI, or VNA                            | N/A                                                                                      |                                            |
| Veteran who does not have a valid discharge status for a period of service but also has a general or above discharge status for another period of service. | Y, Z, DVN, DVU, CVI, or VNA and also has A, B, H, or J | Has at least 2 periods of service                                                        |                                            |
| Veteran who does not have a valid discharge status for a period of service but also has below general discharge status for another period of service.    | Y, Z, DVN, DVU, CVI, or VNA and also has D, E, F, or K | Has at least 2 periods of service                                                        |                                            |

----

Group 1: 
- A = Honorable

- B = Under honorable conditions (general)

- H = Honorable (Assumed) - GRAS periods only

- J = Honorable for VA purposes


Group 2:
- D = Bad conduct

- E = Under other than honorable conditions

- F = Dishonorable

- K = Dishonorable for VA purposes

Group 3:
- Y = Uncharacterized

- Z = Unknown

- DVN = DoD provided a NULL or blank value

- CVU = DoD provided a value not in the reference table

- CVI = Value is calculated but created an invalid value

- VNA = Value is not applicable for this record type

