
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
|All |Category |Type of test | ||Is this information useful for patients? Could we remove this from the list view?|
|All|Title of lab report (if available)|Test (suggest using this without a label as the card header in list, H1 in detail) |[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|If there's no title/test name available, we could conditionally display the type of test as the card header in list, H1 in detail. Hopefully this is rare. |
|All|Date collected |Date ||Challenging to find a single date label that works for all categories. "Date collected" or "Date you gave the sample" doesn't make sense for radiology or EKG. "Date you got the test" doesn't quite make sense for pathology. A shorter field label is also better for the card format in list view.| Would we want to map several fields from different categories into a single "Date" field for the list view, but label them differently in the detail views where we have additional date fields? So all "Date collected" "Date obtained" "Date performed" fields would map to "Date" in list view. Or would we want the labels to stay consistent between list and detail views, even if this means several longer "Date" labels on cards in the list?|
|All|Ordering provider |Provider||Similar to previous line about dates — for space on the cards, "Provider" works better in list view. But we need to differentiate provider type in detail view.| Is this different mapping for list and detail view acceptable?|
|Radiology|Procedure/test name |Test |[Diagnostic imaging test](https://www.healthit.gov/isa/taxonomy/term/2466/uscdi-v2)||Is this the same as "Title of lab report" in the All category above?|
|Radiology|Date/time exam performed |Date you got the test ||
|Radiology|Ordering location| Where the test order started ||
|Radiology|Requesting provider| Provider who ordered the test | || | In Chem/Hem and Microbio, the field is labeled “Ordering Provider”. Should this change?|
|Radiology|Reason for study| Reason for the test ||
|Radiology|Performing location| Where you got the test ||
|Radiology|Clinical history| || | | What does this mean? Is this medical history related to the reason for this test? |
|Radiology|Radiologist|
|Radiology|Report| [Diagnostic imaging report](https://www.healthit.gov/isa/taxonomy/term/2471/uscdi-v2)| || |What does this mean? Is this equivalent to "Results" for other categories?|
| | | |[Imaging Narrative](https://www.healthit.gov/isa/taxonomy/term/2876/uscdi-v1) |USCDI groups this under Clinical Notes|Is this an additional field we need to add in Radiology, in addition to "Report"? Or is the narrative included in the report?|
|Chemistry/hematology|Lab test name (if avail)| Test (suggest using without label as card header in list, H1 in detail) |[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|
|Chemistry/hematology|Date/time collected| Date and time you gave the sample |
|Chemistry/hematology|Specimen| Sample tested |
|Chemistry/hematology|Test-name| Test |[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|
|Chemistry/hematology|Test-results| Results |[Values/Results](https://www.healthit.gov/isa/taxonomy/term/681/uscdi-v1)|
|Chemistry/hematology|Test-Units| Units | || Can we remove the "Units" field, and add the units to the result and reference range?|
|Chemistry/hematology|Test-Reference range| Standard range |||Does the reference range adjust based on patient demographics or conditions?|
|Chemistry/hematology|Test-Status| | || Under what circumstances would "status" be anything other than final? Can we remove this field?|
|Chemistry/hematology|Test-Performing location| Lab that analyzed the sample|||Is this suggested label correct — does "performing location" mean the lab that analyzed the sample? |
|Chemistry/hematology|Test-Interpretation| | || What types of information does this include? What guidance do providers see for field? <br> Who inputs this and the comments field? Ordering provider? PC? Lab technician? We don't want the user to think they can add their own comments.|
|Chemistry/hematology|Ordering provider| Provider who ordered the test |
|Chemistry/hematology|Ordering location| Where the test order started |
|Chemistry/hematology|Collected location| Where you gave the sample |
|Chemistry/hematology|Comments| | ||How is this different from Interpretation field? |
|Chemistry/hematology|Performing Location| Lab that analyzed the sample | || It seems that this field is referring to the overall lab results, and not related to individual tests. If all of the tests were performed in other locations, what is this field referring to?|
|Microbiology|Lab type | | || What types can you choose from here? A: The value will always be "Microbiology" |
|Microbiology|Lab test (aka name, not always present)| Test |[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|
|Microbiology|Date collected| Date you gave the sample |
|Microbiology|Date completed (not always present)| Date completed |
|Microbiology|Results| Results |
|Microbiology|Site/specimen (not always present)| Sample tested |
|Microbiology|Ordering provider| Provider who ordered the test |
|Microbiology|Ordering location| Where the test order started|
|Microbiology|Collected location| Where you gave the sample |
|Pathology|Type of report (surgical pathology/cytology)| Type of pathology test |
|Pathology|Specimen| Sample tested ||
|Pathology|Date obtained| Date you gave the sample | ||Does "gave" work in this context? This may happen in the context of surgery, etc, as opposed to going to a lab to give blood|
|Pathology|Performing location| Lab that analyzed the sample |
|Pathology|Date completed| Date completed |
|Pathology|Report| | || What does this mean? Is this where results are entered? |
| | | |[Pathology Report Narrative](https://www.healthit.gov/isa/taxonomy/term/2886/uscdi-v1)|USCDI groups this in Clinical Notes|
|EKG|Procedure/test name| Test |[Clinical test](https://www.healthit.gov/isa/taxonomy/term/2456/uscdi-v2) |For this category, this field will always read "Electrocardiogram (EKG)". This USCDI data element applies to "non-imaging and non-laboratory tests." USCDI also includes [Clinical test result/report](https://www.healthit.gov/isa/taxonomy/term/3166/uscdi-v2). This seems to be missing from our EKG fields.|
|EKG|Date/time performed| Date and time of the test |
|EKG|Ordering location| Where the test order started |

## Lab types
|Lab type | Suggested label | Notes             | Questions           |
|:----------------------|:----------------|:------------------|:--------------------|
|Chemistry/hematology|||Are all tests in this category blood tests? Would "blood tests" or "routine blood tests" be an accurate label here?|
|Pathology |||
|Microbiology | |This is a subtype of pathology. It seems to include tests for bacteria, viruses, fungi, and parasites.|Would "Tests for infections" be an accurate PL label?|
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
|Date entered | Date provider entered the allergy record | Date entered |_None_|
|Severity | Level of reaction, like "moderate" or "severe" | | _None_||Are there set options to choose from in this field, or is it free entry?|
|Allergy type | The type of thing that caused the allergy, like "drug" for penicillin | | _None_||Are there set options to choose from in this field, or is it free entry?|
|VA drug class | ||[Substance (Drug Class)](https://www.healthit.gov/isa/taxonomy/term/901/uscdi-v1) | |What does this mean? Is there a list of classes to choose from?| 
|Reaction | Description of signs and symptoms, like "rash" | |[Reaction](https://www.healthit.gov/isa/taxonomy/term/906/uscdi-v1) |
|Observed/Historical || | _None_|Does this mean the provider witnessed the reaction (observed) vs entered an allergy record based on patient's account of a previous allergic reaction? |
|Location |Name of facility where provider entered allergy record | Location | _None_|
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


