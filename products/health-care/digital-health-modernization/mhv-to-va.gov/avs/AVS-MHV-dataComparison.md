# Comparison of Data Fields Displayed on MHV on VA.gov, Mobile App, and AVS (Printed PDF)

Comparison of section labels are found on a different [GitHub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/data-fields.md) page.

## [Allergies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/allergies/allergies-brief.md)

| Data Field | MHV on VA.gov | AVS | Vista Field |
|:-----------|:---------|:---------|:----|
| Allergy name | Yes | Yes | [PATIENT ALLERGIES](https://vivian.worldvista.org/dox/Global_XkdNUigxMjAuOA==.html) -> REACTANT |
| Date entered | Yes | No ||
| Severity | Yes | No | [PATIENT ALLERGIES](https://vivian.worldvista.org/dox/Global_XkdNUigxMjAuOA==.html) -> HISTORICAL SEVERITY |
| Allergy type | Yes | No ||
| VA drug class | Yes | No ||
| Reaction | Yes | Yes ||
| Observed/Historical | Yes | Yes (Verified with date) ||
| Location | Yes | No ||
| Comments | Yes | No ||

### References

* AVS source: https://github.com/department-of-veterans-affairs/avs/blob/d5648f5a11e25691014e6ff4b5fd65aeee6ecde5/ll-avs-web/src/main/java/gov/va/med/lom/avs/client/action/SheetAction.java#L3113
* Vista broker source: https://github.com/department-of-veterans-affairs/octo-vista-broker/blob/4fc09ffa5fd97d0bdeac403be346e1e8f6c67fd9/ll-vistabroker-ejb3/src/main/java/gov/va/med/lom/vistabroker/dao/impl/AllergiesReactantsDaoImpl.java#L20
* https://vivian.worldvista.org/dox/Remote_Procedure_ORQQAL_LIST.html

## Appointments (WIP)
| Data Field | MHV on VA.gov | Mobile App | AVS |
|:-----------|:---------|:----------|:----------|
| Scheduled upcoming in-person appointments |  |  | Yes |
| Scheduled upcoming remote appointments |  |  | Yes |
| Recall appointments |  |  | Yes |
| Recall instructions |  |  | Yes |
| Date |  |  | Yes |
| Time |  | Yes | No |
| Type of care | Yes | No | No |
| Modality | Yes | Yes | Yes (Remote vs. In-person) |
| Clinic name |  |  | Yes |
| Physical location |  |  | Yes |

## [Immunizations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/immunizations/immunizations-brief.md)

| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Immunization | Yes | Yes |
| Date received | Yes | Yes (Each date listed separately) |
| Location | Yes | No |
| Reaction | Yes | ? No, in the immunization section. Do these show up in the allergy section of AVS? |
| Comments | Yes | No |
| Series | Yes | Yes? |

## [Health Issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/health-issues/health-issues-brief.md)

| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Issue/problem title | Yes | Yes |
| Date/time entered | Yes | Yes |
| Status | Yes | No |
| Location where the issue was entered | Yes | No |
| Provider's name | Yes | Yes |
| Comments | Yes | No |

## [Lab/test results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/labs-and-tests-brief.md)

| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Category (e.g. Pathology, Microbiology, etc) | Yes | No |
| Title of the lab result | Yes | Yes |
| Date collected | Yes | Yes | 
| Ordering provider | Yes | No |

### Radiology reports
| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Procedure/test name | Yes | ? |
| Date/time exam performed | Yes | ? |
| Ordering location | Yes | ? |
| Requesting provider | Yes | ? |
| Reason for study | Yes | ? |
| Performing location | Yes |? |
| Clinical history | Yes | ? |
| Radiologist | Yes | ? |
| Report | Yes | ? |

### Chemistry, Hematology
| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Lab type (chemistry/hematology) | Yes | No |
| Lab test (aka name, not always present | Yes | Yes |
| Date/time collected | Yes | Yes |
| Specimen | Yes | Yes |
| Ordering provider | Yes | No |
| Ordering location | Yes | No |
| Collected location | Yes | No |
| Comments | Yes | No |
| Performing location | Yes | No |

#### Tests
| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Test name | Yes | Yes |
| Results | Yes | Yes |
| Units | Yes | Yes |
| Reference range | Yes | Yes |
| Status | Yes | ? |
| Performing location | Yes | No |
| Interpretation | Yes | ? Is this the abnormal flag?|

### Pathology report
| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Type of report (surgical pathology/cytology | Yes | Yes |
| Specimen | Yes | Yes |
| Date obtained | Yes | Yes |
| Performing location | Yes | ? |
| Date completed | Yes | ? |
| Report | Yes | ? |

### EKG
| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Procedure/test name | Yes | Yes |
| Date/time performed | Yes | Yes |
| Ordering location | Yes | ? |

## Medications
| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Name |  | Yes |
| Dose |  | Yes |
| Unit |  | Yes |
| Directions/instructions |  | Yes |
| Description |  | Yes |
| Rx # |  | Yes |
| Notes |  | Yes |
| Facility name |  | Yes |
| Facility phone # |  | Yes |
| Ordering provider |  | Yes |
| Prescription status |  | Yes |
| Quantity |  | Yes |
| Refills remaining |  | Yes |
| Expires |  | Yes |
| Last filled |  | Yes |

### Supplies
| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Name |  | Yes |
| Directions/instructions |  | Yes |
| Description |  | Yes |
| Rx # |  | Yes |
| Notes |  | Yes |
| Facility name |  | Yes |
| Facility phone # |  | Yes |
| Ordering provider |  | Yes |
| Prescription status |  | Yes |
| Quantity |  | Yes |
| Refills remaining |  | Yes |
| Expires |  | Yes |
| Last filled |  | Yes |

## Orders
| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Consultation Department (Rheumatology, etc) |  |  |
| Consultation Instructions |  | Yes |
| Imaging Test Name |  | Yes |
| Imaging instructions |  | Yes |
| Lab name |  | Yes |
| Lab date |  | Yes |
| Lab instructions |  | Yes |
| Medications Name with Dose/Unit |  | Yes |
| Other order name |  | Yes |
| Other order date |  | Yes |

## Vitals
| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Category name | Yes | Yes |
| Latest reading | Yes | Yes |
| Date of latest reading | Yes | Yes |
| Location of latest reading | Yes | No |
| Method of taking reading | No | Yes |


### Historical Vital readings
| Data Field | MHV on VA.gov | AVS |
|:-----------|:---------|:----------|
| Reading | Yes | Yes |
| Date of entry | Yes | Yes |
| Location of entry | Yes | No |
| Comments | Yes | No |
