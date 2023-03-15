
## Table of Contents
- [Domains](#domains)
- [Lab and test results](#lab-and-test-results)
- [Lab types](#lab-types)
- [Care notes and summaries](#care-notes-and-summaries)
- [Vaccines](#vaccines)
- [Allergies](#allergies)
- [Health conditions](#health-conditions)
- [Vitals](#vitals)
- [Vital sign types](#vital-sign-types)


## Domains
|Blue Button label | After Visit Summary label | Suggested label|
|:------|:-------|:-------|
|VA Immunizations  |Immunizations | Vaccines|
|VA Allergies |Allergies and adverse drug reactions (signs / symptoms) <br/> My VA Allergies |Allergies|
|VA Problem List |You were diagnosed with |Health conditions|
|VA Vitals and Readings| Vitals as of this visit | Vitals|
|VA Laboratory Results <br> VA Pathology Reports <br> VA Radiology Reports <br> VA Electrocardiogram (EKG) Reports |Lab tests <br/> Recent lab results |Lab and test results|
|VA Admissions and Discharges <br> VA Notes| Visit Notes <br/> My treatment plan <br/> Other instructions | Care notes and summaries|

## Lab and test results

USCDI v1 Mapping: [Laboratory](https://www.healthit.gov/isa/uscdi-data-class/laboratory#uscdi-v1), [Clinical notes](https://www.healthit.gov/isa/uscdi-data-class/clinical-notes), [Clinical tests](https://www.healthit.gov/isa/uscdi-data-class/clinical-tests#uscdi-v1), [Diagnostic imaging](https://www.healthit.gov/isa/uscdi-data-class/diagnostic-imaging#uscdi-v1) <br>
USCDI mapping concerns: Fewer data elements than we have in our lists. Does Procedures category also apply here? See [commentary about confusion around this term in v1](https://www.healthit.gov/isa/uscdi-data-class/procedures#uscdi-v1) <br>

|Category | Data field | Suggested label | USCDI v1 data element mapping|Notes | Questions |
|:----------------|:-------------|:----------------|:--------|:------------------|:--------------------|
|**All** |Lab type |Type of test | _None_||Do patients need the type in addition to the specific test name in the list view? Or could we remove this?|
|All|Title of lab report|Test|[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|Suggest using this as the card header in list view, H1 in detail view. If there's no title/test name available, we could pull in the type of test as the card header in list, H1 in detail. |
|All|Date collected |Date |_None_|Hard to find single date label for all types — "collected" doesn't work for Radiology or EKG| Can we map date fields from different types into a single "Date" field for list view, but use different "Date" labels in detail views? Or do we need all labels to stay consistent between list and detail views?|
|All|Ordering provider |Provider|_None_||Is there a need to specify "provider who ordered test"? Or is it clear that this is what "provider" means in this context?|
|**Chemistry/hematology**|Lab test|Test |[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|Some Chem/Hem tests include subtests in a panel — like lipid panel with LDL, HDL, etc. Suggest using this panel-level "Test" field as card header in list, H1 in detail)|Does USCDI include a panel-level element? Or do we map both the panel and the subtests to "Tests" in USCDI?|
|Chemistry/hematology|Date/time collected| Date and time we took sample |_None_|
|Chemistry/hematology|Specimen| Sample tested |_None_|
|Chemistry/hematology|Test name [for specific test]| Test |[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|
|Chemistry/hematology|Results [for specific test]| Results |[Values/Results](https://www.healthit.gov/isa/taxonomy/term/681/uscdi-v1)|
|Chemistry/hematology|Units [for specific test]| | _None_|| Can we remove the "Units" field, and add the units to the result and reference range?|
|Chemistry/hematology|Reference range [for specific test]| Standard range |_None_||Does the reference range adjust based on patient demographics or conditions?|
|Chemistry/hematology|Status [for specific test]| |_None_ || Under what circumstances would "status" be anything other than final? Can we remove this field?|
|Chemistry/hematology|Performing location [for specific test]| _None_||Is this suggested label correct — does "performing location" mean the lab that analyzed the sample? |
|Chemistry/hematology|Interpretation [for specific test]| |_None_ || What types of information does this include? What guidance do providers see for field? <br> Who inputs this and the comments field? Ordering provider? PC? Lab technician? We don't want the user to think they can add their own comments.<br> Is interpretation of lab results included in the Values/Results USCDI field?|
|Chemistry/hematology|Ordering provider| Provider |_None_|
|Chemistry/hematology|Ordering location|  |_None_|
|Chemistry/hematology|Collected location|  |_None_|
|Chemistry/hematology|Comments| | _None_||How is this different from Interpretation field? |
|Chemistry/hematology|Performing Location| |_None_ || It seems that this field is referring to the overall lab results, and not related to individual tests. If all of the tests were performed in other locations, what is this field referring to?|
|**Microbiology**|Lab type | |_None_ || What types can you choose from here? A: The value will always be "Microbiology" |
|Microbiology|Lab test (aka name, not always present)| Test |[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|
|Microbiology|Date collected| |_None_|
|Microbiology|Date completed (not always present)| |_None_|
|Microbiology|Results| Results |[Values/Results](https://www.healthit.gov/isa/taxonomy/term/681/uscdi-v1)|
|Microbiology|Site/specimen (not always present)| Sample tested |_None_|
|Microbiology|Ordering provider| Provider |_None_|
|Microbiology|Ordering location| |_None_|
|Microbiology|Collected location|  |_None_|
|**Pathology**|Type of report (surgical pathology/cytology)| Test |[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|
|Pathology|Specimen| Sample tested |_None_|
|Pathology|Date obtained| | _None_||Does "gave" work in this context? This may happen in the context of surgery, etc, as opposed to going to a lab to give blood|
|Pathology|Performing location||_None_|
|Pathology|Date completed| Date completed |_None_|
|Pathology|Report| |[Values/Results](https://www.healthit.gov/isa/taxonomy/term/681/uscdi-v1)|| Does pathology report map to Values/Results in the USCDI Laboratory category? Or is "Pathology Report Narrative" the correct mapping?|
|Pathology | | |[Pathology Report Narrative](https://www.healthit.gov/isa/taxonomy/term/2886/uscdi-v1)|USCDI groups this in Clinical Notes|
|**Radiology**|Procedure/test name |Test |[Diagnostic imaging test](https://www.healthit.gov/isa/taxonomy/term/2466/uscdi-v2)||Is this the same as "Title of lab report" in the All category above?|
|Radiology|Date/time exam performed |Date and time |_None_|
|Radiology|Ordering location| |_None_|
|Radiology|Requesting provider| Provider | _None_| | In Chem/Hem and Microbio, the field is labeled “Ordering Provider”. Should this change? A from content: Let's pick a consistent order/request label, if needed. But "Provider" may be enough here.|
|Radiology|Reason for study| Reason for test |_None_|
|Radiology|Performing location| |_None_|
|Radiology|Clinical history| |_None_| | What does this mean? Is this medical history related to the reason for this test? |
|Radiology|Radiologist||_None_|
|Radiology|Report| |[Diagnostic imaging report](https://www.healthit.gov/isa/taxonomy/term/2471/uscdi-v2)| || |Is "Report" equivalent to "Results" for other categories?|
|Radiology| | |[Imaging Narrative](https://www.healthit.gov/isa/taxonomy/term/2876/uscdi-v1) |USCDI groups this under Clinical Notes|Is this an additional field we need to add in Radiology, in addition to "Report"? Or is the narrative included in the report?|
|**EKG**|Procedure/test name| Test |[Clinical test](https://www.healthit.gov/isa/taxonomy/term/2456/uscdi-v2) |For this category, this field will always read "Electrocardiogram (EKG)"|
|EKG| | |[Clinical test result/report](https://www.healthit.gov/isa/taxonomy/term/3166/uscdi-v2)||Do our EKG records include results/reports as in USCDI? Are there any other types of "clinical tests" besides EKGs we need to account for that are **not** lab or imaging tests?|
|EKG|Date/time performed| Date and time |_None_|
|EKG|Ordering location| |_None_|

## Lab types
**Overall note:** Could we use "Lab" as the type for chem/hem, pathology, and microbiology?

|Lab type | Suggested label | Notes             | Questions           |
|:----------------------|:----------------|:------------------|:--------------------|
|Chemistry/hematology||||
|Pathology |||
|Microbiology | ||
|Radiology | X-rays and imaging tests | 
|EKG |EKG (electrocardiogram) |Historical category |Are new EKGs added to medical records? |

## Care notes and summaries

USCDI v1 Mapping: 
USCDI mapping concerns:

|Category|Data field       | Description           | Suggested label | Notes             | Questions           |
|:----------------------|:-----------------------|:--------------------|:------------------|:------------------|:--------------------|
|VA Note|Title|
|VA Note|Date and time|
|VA Note|Location|
|VA Note|Signed by|
|VA Note|Co-signed by|
|VA Note|Date and time signed|
|VA Note|Last updated|
|VA Note|Note|This is the actual content of the note|
|Admission & Dishcarge Summary|Title|
|Admission & Dishcarge Summary|Admission date|
|Admission & Dishcarge Summary|Location|
|Admission & Dishcarge Summary|Admitting physician|
|Admission & Dishcarge Summary|Discharge date|
|Admission & Dishcarge Summary|Discharge physician|
|Admission & Dishcarge Summary|Last updated|
|Admission & Dishcarge Summary|Discharge summary|

## Vaccines

USCDI v1 Data Class: [Immunizations](https://www.healthit.gov/isa/uscdi-data-class/immunizations#uscdi-v1) <br>
USCDI mapping concerns: v1 has only 1 data element: Immunizations

|Data field       | Description           | Suggested label |USCDI v1 data element mapping| Notes             | Questions           
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|-------|
|Immunization | Name of the vaccine | Vaccine |[Immunization](https://www.healthit.gov/isa/taxonomy/term/666/uscdi-v1)|
|Date received | Date patient got vaccine dose | Date | _None_ |
|Location | Name/address/clinic code of facility where they got vaccine dose | Location | _None_ |
|Reaction | Reactions or side effects to the vaccine recorded by provider | Reaction | _None_ | Vaccine reactions may also be stored in allergies list and self-entered data |How often does a vaccine reaction appear in allergy list instead of this field? Do we need any type of note here about reviewing your allergy list?|
|Comments | Comments entered by provider | Provider notes |  _None_ |
|Series | Info about vaccine series, if relevant | Series | _None_ | May need explanatory text here. <br /> <br /> Vaccines in a series won't be grouped or linked in phase 0. | How does series data display — "COVID booster 1 of 2" or some other format? |_None_ |

## Allergies

USCDI v1 Data Class: [Allergies and intolerances](https://www.healthit.gov/isa/uscdi-data-class/allergies-and-intolerances#uscdi-v1) <br>
USCDI mapping concerns: v1 has only 3 data elements: Substance (Medication), Substance (Drug Class), Reaction. It does not include non-medication based allergies.

|Data field       | Description           | Suggested label | USCDI v1 data element mapping| Notes    | Questions|           
|:------------------------|:-----------------------|:-----------------------|:-----------------|:---------------------|:---------------------|
|Allergy name | Thing that caused the allergic reaction, like "penicillin" |Allergy | [Substance (Medication)](https://www.healthit.gov/isa/taxonomy/term/896/uscdi-v1)|
|Date entered |  | Date entered |_None_|
|Severity | Level of reaction, like "moderate" or "severe" | | _None_||Are there set options to choose from in this field, or is it free entry?|
|Allergy type | The type of thing that caused the allergy, like "drug" for penicillin | | _None_||Are there set options to choose from in this field, or is it free entry?|
|VA drug class | ||[Substance (Drug Class)](https://www.healthit.gov/isa/taxonomy/term/901/uscdi-v1) | |Does this field appear on non-medication allergies (like latex)?| 
|Reaction | Description of signs and symptoms, like "rash" | |[Reaction](https://www.healthit.gov/isa/taxonomy/term/906/uscdi-v1) |
|Observed/Historical || | _None_|Does this mean the provider witnessed the reaction (observed) vs entered an allergy record based on patient's account of a previous allergic reaction? |
|Location |Facility where provider entered allergy record | Location | _None_|
|Comments |Comments entered by provider | Provider notes | _None_|

## Health conditions

USCDI v1 Mapping: [Problem](https://www.healthit.gov/isa/uscdi-data-class/problems#uscdi-v1) <br>
USCDI mapping concerns: v1 has only 1 data element: Problems

|Data field       | Description          | Suggested label | USCDI v1 data element mapping | Notes             | Questions           |
|:------------------------|:-----------------------|:-----------------------|:-----------|:-------------------|:---------------------|
|Issue/problem title |Name of the health condition | Health condition | [Problems](https://www.healthit.gov/isa/uscdi-data-class/problems#uscdi-v1) |
|Date/time entered | | |_None_| |Why is time important here? Can we display only date?|
|Status | | |_None_| |Are the only options active and inactive?|
|Location where the issue was entered |Name of facility |Location |_None_| |Is this field only necessary for the user to associate it with a specific appointment they had? What if it were a telehealth appt?|
|Provider's name | |Provider |_None_|
|Comments |Comments entered by provider |Provider notes |_None_|

## Vitals

USCDI v1 Mapping: [Vital signs](https://www.healthit.gov/isa/uscdi-data-class/vital-signs#uscdi-v1) <br>
USCDI mapping concerns: v1 maps the actual vital signs, not the data elements for each vital sign — adding table below to capture this

|Data field       | Description           | Suggested label | Notes             | Questions           |
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|
|Vital sign | 
|Latest reading |
|Date of latest reading |
|Location of latest reading |
|Reading |
|Date of entry |
|Location of entry |
|Comments |

## Vital sign types

Note: USCDI also includes 3 vitals for babies and children: BMI (2-20 years), weight-for-length percentile (birth to 36 months), and head circumference (birth to 36 months)

|Vital sign       | Suggested label           | USCDI v1 data element mapping | Notes             | Questions           |
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|
| | |[Systolic blood pressure](https://www.healthit.gov/isa/taxonomy/term/836/uscdi-v1)|||
| | |[Diastolic blood pressure](https://www.healthit.gov/isa/taxonomy/term/831/uscdi-v1)| | |
| | |[Respiratory rate](https://www.healthit.gov/isa/taxonomy/term/856/uscdi-v1)| | |
| | |[Body temperature](https://www.healthit.gov/isa/taxonomy/term/861/uscdi-v1)| | |
| | |[Body height](https://www.healthit.gov/isa/taxonomy/term/841/uscdi-v1)| | |
| | |[Body weight](https://www.healthit.gov/isa/taxonomy/term/846/uscdi-v1)| | |
| | |[Pulse oximetry](https://www.healthit.gov/isa/taxonomy/term/866/uscdi-v1)| | |
| | |[Inhaled oxygen concentration](https://www.healthit.gov/isa/taxonomy/term/871/uscdi-v1)| | |


