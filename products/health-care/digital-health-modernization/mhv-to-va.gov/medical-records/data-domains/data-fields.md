# Data fields for medical records

**Status: Draft**

## Table of Contents
- [Domains](#domains)
- [Lab and test results](#lab-and-test-results)
- [Health history](#health-history)
  - [Care notes and summaries](#care-notes-and-summaries)
  - [Vaccines](#vaccines)
  - [Allergies](#allergies)
  - [Health conditions](#health-conditions)
  - [Vitals](#vitals)

## Domains
Medical records includes different types of information. You will hear these referred to as medical record "domains."

|Domain/Blue Button label | After Visit Summary label | Suggested label|
|:------|:-------|:-------|
|VA Laboratory Results <br> VA Pathology Reports <br> VA Radiology Reports <br> VA Electrocardiogram (EKG) Reports |Lab tests <br/> Recent lab results |Lab and test results|
|VA Immunizations  |Immunizations | Vaccines|
|VA Allergies |Allergies and adverse drug reactions (signs / symptoms) <br/> My VA Allergies |Allergies|
|VA Problem List |You were diagnosed with |Health conditions|
|VA Vitals and Readings| Vitals as of this visit | Vitals|
|VA Admissions and Discharges <br> VA Notes| Visit Notes <br/> My treatment plan <br/> Other instructions | Care notes and summaries|

## Lab and test results

### Included lab and test types
The lab and test result section includes the following types of labs and tests. 

**Overall question:** Can we use "Labs" as the type for chem/hem, pathology, and microbiology? Is there a reason these must be different on the front end?

**Note:** We figured out that "Pathology" is parallel to "Labs & tests" in Blue Button. So we replaced it in this table with the types grouped under pathology in BB.

|Lab type | Suggested label | Notes             | Questions           |
|:----------------------|:----------------|:------------------|:--------------------|
|Chemistry/hematology|Lab| |Are these types helpful? These terms are not plain language and difficult to replace or explain in this context. Can we change all non-radiology non-EKG tests to "labs"?|
|Surgical pathology |Lab||
|Cytology|Lab||
|Electronic microscopy|Lab||
|Microbiology |Lab||
|Radiology |Imaging | 
|EKG |Clinical |Historical category. May want to find more PL label than "clinical" |Are new EKGs added to medical records? |


### Results
Lab and test results include the following information  


* USCDI v1 Mapping: [Laboratory](https://www.healthit.gov/isa/uscdi-data-class/laboratory#uscdi-v1), [Clinical notes](https://www.healthit.gov/isa/uscdi-data-class/clinical-notes), [Clinical tests](https://www.healthit.gov/isa/uscdi-data-class/clinical-tests#uscdi-v1), [Diagnostic imaging](https://www.healthit.gov/isa/uscdi-data-class/diagnostic-imaging#uscdi-v1) <br>
* USCDI mapping concerns: Fewer data elements than we have in our lists. Does Procedures category also apply here? See [commentary about confusion around this term in v1](https://www.healthit.gov/isa/uscdi-data-class/procedures#uscdi-v1) <br>


|Category | Data field | Suggested label | USCDI v1 data element mapping|Notes | Questions |
|:----------------|:-------------|:----------------|:--------|:------------------|:--------------------|
|:test_tube: **ALL CATEGORIES**|
|All|Lab type |Type of test | _None_||Do patients need the type in addition to the specific test name in the list view? Or could we remove this?|
|All|Title of lab report|Test|[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|Suggest using this as the card header in list view, H1 in detail view. If there's no title/test name available, we could pull in the type of test as the card header in list, H1 in detail. |
|All|Date collected |Date |[Author time stamp](https://www.healthit.gov/isa/taxonomy/term/796/uscdi-v1)|Hard to find single date label for all types — "collected" doesn't work for Radiology or EKG| Can we map date fields from different types into a single "Date" field for list view, but use different "Date" labels in detail views? Or do we need all labels to stay consistent between list and detail views?|
|All|Ordering provider |Ordered by|_None_|||
|:test_tube: **CHEMISTRY / HEMATOLOGY**|
|Chemistry/hematology|Lab test| _None, header without label_|[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|Some Chem/Hem tests include subtests in a panel — like lipid panel with LDL, HDL, etc. If there's a panel-level test name, suggest using this as card header in list, H1 in detail. Not all tests will have this panel-level name|Does USCDI include a panel-level element? Or do we map both the panel and the subtests to "Tests" in USCDI?|
|Chemistry/hematology > Specific test |Test name | _None, header without label_ |[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|
|Chemistry/hematology > Specific test|Results| Results |[Values/Results](https://www.healthit.gov/isa/taxonomy/term/681/uscdi-v1)|
|Chemistry/hematology > Specific test|Units |_Confirm if field needed_| _None_|| Can we remove the "Units" field, and add the units to the result and reference range?|
|Chemistry/hematology > Specific test|Reference range | Standard range |_None_||Does the reference range adjust based on patient demographics or conditions?|
|Chemistry/hematology > Specific test|Status |_Confirm if field needed_|_None_ || Under what circumstances would "status" be anything other than final? Can we remove this field?|
|Chemistry/hematology > Specific test|Performing location |Lab location |_None_||Is this suggested label correct — does "performing location" mean the lab that analyzed the sample? |
|Chemistry/hematology > Specific test |Interpretation |_Need more info <br> Depending on answers to questions, this could be "Provider explanation" or something similar_  |_None_ || What types of information does this include? What guidance do providers see for field? <br> Who inputs this and the comments field? Ordering provider? PC? Lab technician? We don't want the user to think they can add their own comments.<br> Is interpretation of lab results included in the Values/Results USCDI field?|
|Chemistry/hematology|Date/time collected| Date and time collected |[Author time stamp](https://www.healthit.gov/isa/taxonomy/term/796/uscdi-v1)|
|Chemistry/hematology|Specimen| Sample tested |_None_|
|Chemistry/hematology|Ordering provider| Ordered by |_None_|
|Chemistry/hematology|Ordering location| Ordering location |_None_|
|Chemistry/hematology|Collected location| Collecting location |_None_|
|Chemistry/hematology|Comments|Provider notes | _None_||How is this different from Interpretation field? |
|Chemistry/hematology|Performing Location|Lab location |_None_ || It seems that this field is referring to the overall lab results, and not related to individual tests. If all of the tests were performed in other locations, what is this field referring to?|
|Chemistry/hematology | | _Confirm if field exists in tool_|[Laboratory Report Narrative](https://www.healthit.gov/isa/taxonomy/term/2881/uscdi-v1)|USCDI v1 includes this as a type under Clinical Notes. In USCDI v2+, this clinical note type was removed.|Does this field exist in tool?|
|:test_tube: **MICROBIOLOGY**|
|Microbiology|Lab type |Type of test |_None_ || What types can you choose from here? A: The value will always be "Microbiology" |
|Microbiology|Lab test (aka name, not always present)| Test |[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|
|Microbiology|Date collected|Date collected |_None_|
|Microbiology|Date completed|Date completed |[Author time stamp](https://www.healthit.gov/isa/taxonomy/term/796/uscdi-v1)|
|Microbiology|Results| Results |[Values/Results](https://www.healthit.gov/isa/taxonomy/term/681/uscdi-v1)|
|Microbiology|Site/specimen| Sample from|_None_|May reference a structure; e.g., FOOT or a substance; e.g., BLOOD VENOUS|
|Microbiology|Collection sample| Sample tested |_None_|Examples: URINE or SWAB|
|Microbiology|Ordering provider|Ordered by |_None_|
|Microbiology|Ordering location|Ordering location|_None_|
|Microbiology|Collected location|Collecting location |_None_|
|Microbiology| | _Confirm if field exists in tool_|[Laboratory Report Narrative](https://www.healthit.gov/isa/taxonomy/term/2881/uscdi-v1)|USCDI v1 includes this as a type under Clinical Notes. In USCDI v2+, this clinical note type was removed.|Does this field exist in tool?|
|:test_tube: **PATHOLOGY**|
|Pathology|Type of report (surgical pathology/cytology)| Test |[Tests](https://www.healthit.gov/isa/taxonomy/term/676/uscdi-v1)|
|Pathology|Specimen| Sample tested |_None_|
|Pathology|Date obtained|Date collected| _None_||Does "gave" work in this context? This may happen in the context of surgery, etc, as opposed to going to a lab to give blood|
|Pathology|Performing location|Lab location|_None_|
|Pathology|Date completed| Date completed |[Author time stamp](https://www.healthit.gov/isa/taxonomy/term/796/uscdi-v1)|
|Pathology|Report|Results|[Values/Results](https://www.healthit.gov/isa/taxonomy/term/681/uscdi-v1)|| Does pathology report map to Values/Results in the USCDI Laboratory category? Or is "Pathology Report Narrative" the correct mapping?|
|Pathology | | _Confirm if field exists in tool_|[Pathology Report Narrative](https://www.healthit.gov/isa/taxonomy/term/2886/uscdi-v1)|USCDI v1 includes this as a type under Clinical Notes. In USCDI v2+, this clinical note type was removed.|Does this field exist in tool?|
|:test_tube: **RADIOLOGY**|
|Radiology|Procedure/test name |Test |[Diagnostic imaging test](https://www.healthit.gov/isa/taxonomy/term/2466/uscdi-v2)|From USCDI v2|Is this the same as "Title of lab report" in the All category above?|
|Radiology|Date/time exam performed |Date and time |[Author time stamp](https://www.healthit.gov/isa/taxonomy/term/796/uscdi-v1)|
|Radiology|Ordering location|Ordering location |_None_|
|Radiology|Requesting provider| Ordered by | _None_| | In Chem/Hem and Microbio, the field is labeled “Ordering Provider”. Should this change? A from content: Let's pick a consistent order/request label.|
|Radiology|Reason for study| Reason for test |_None_|
|Radiology|Performing location|Imaging location |_None_|
|Radiology|Clinical history|_Need more info <br> Depending on answer to questions, could be "Related health history"_ |_None_| | What does this mean? Is this medical history related to the reason for this test? |
|Radiology|Radiologist|Imaging provider|_None_||Is this needed in Veteran-facing record?|
|Radiology|Report|Results|[Diagnostic imaging report](https://www.healthit.gov/isa/taxonomy/term/2471/uscdi-v2)| From USCDI v2 |Is "Report" equivalent to "Results" for other categories?|
|Radiology| | _Confirm if field exists in tool_|[Imaging Narrative](https://www.healthit.gov/isa/taxonomy/term/2876/uscdi-v1) |USCDI v1 includes this as a type under Clinical Notes. In USCDI v2+, this clinical note type has been removed, and a new overarching category called [Diagnostic Imaging](https://www.healthit.gov/isa/uscdi-data-class/diagnostic-imaging) was added. |Is this an additional field we need to add in Radiology, in addition to "Report"? Or is the narrative included in the report which is included as a data element under [USCDI v2 Diagnostic Imaging](https://www.healthit.gov/isa/taxonomy/term/2471/uscdi-v2)?|
|:test_tube: **ELECTROCARDIOGRAM (EKG)**|
|EKG|Procedure/test name| Test |[Clinical test](https://www.healthit.gov/isa/taxonomy/term/2456/uscdi-v2) |From USCDI v2. For this category, this field will always read "Electrocardiogram (EKG)"|
|EKG| | _Confirm if field exists in tool_|[Clinical test result/report](https://www.healthit.gov/isa/taxonomy/term/3166/uscdi-v2)|From USCDI v2|Do our EKG records include results/reports as in USCDI? Are there any other types of "clinical tests" besides EKGs we need to account for that are **not** lab or imaging tests?|
|EKG|Date/time performed| Date and time |[Author time stamp](https://www.healthit.gov/isa/taxonomy/term/796/uscdi-v1)|
|EKG|Ordering location|Ordering location |_None_|

## Health history
### Care notes and summaries

* USCDI v1 Mapping: 
* USCDI mapping concerns:

|Category|Data field       |  Suggested label | Notes             | Questions           |
|:----------------------|:--------------------|:------------------|:------------------|:--------------------|
|VA Note|Title|_None, header without label_|
|VA Note|Date and time|_Need more info_|This field doesn't appear in designs|If "Date and time signed" is a different field, what is this date and time?|
|VA Note|Location|Location|
|VA Note|Signed by|Signed by|
|VA Note|Co-signed by|Co-signed by|
|VA Note|Date and time signed|Date and time signed|
|VA Note|Last updated|Last updated|
|VA Note|Note|Provider notes|
|Admission & Discharge Summary|Admission and discharge summary|
|Admission & Discharge Summary|Admission date|Admission date (date you entered the hospital)|Added parenthetical definitions for admission date and discharge date — these can either go in the field label itself or just beneath it|
|Admission & Discharge Summary|Location|Location|
|Admission & Discharge Summary|Admitting physician|Admitted by |
|Admission & Discharge Summary|Discharge date|Discharge date (date you left the hospital)|
|Admission & Discharge Summary|Discharge physician|Discharged by |
|Admission & Discharge Summary|Last updated|Last updated|
|Admission & Discharge Summary|Discharge summary||If the whole thing is called "Admission and discharge summary," why is this field only "Discharge summary"?|

### Vaccines

* USCDI v1 Data Class: [Immunizations](https://www.healthit.gov/isa/uscdi-data-class/immunizations#uscdi-v1) <br>
* USCDI mapping concerns: v1 has only 1 data element: Immunizations

|Data field       | Description           | Suggested label |USCDI v1 data element mapping| Notes             | Questions           
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|-------|
|Immunization | Name of the vaccine | Vaccine |[Immunization](https://www.healthit.gov/isa/taxonomy/term/666/uscdi-v1)|
|Date received | Date patient got vaccine dose | Date |[Author time stamp](https://www.healthit.gov/isa/taxonomy/term/796/uscdi-v1) |
|Location | Name/address/clinic code of facility where they got vaccine dose | Location | _None_ |
|Reaction | Reactions or side effects to the vaccine recorded by provider | Reaction | _None_ | Vaccine reactions may also be stored in allergies list and self-entered data |How often does a vaccine reaction appear in allergy list instead of this field? Do we need any type of note here about reviewing your allergy list?|
|Comments | Comments entered by provider | Provider notes |  _None_ |
|Series | Info about vaccine series, if relevant | Series | _None_ | May need explanatory text here. <br /> <br /> Vaccines in a series won't be grouped or linked in phase 0. | How does series data display — "COVID booster 1 of 2" or some other format? |_None_ |

### Allergies

* USCDI v1 Data Class: [Allergies and intolerances](https://www.healthit.gov/isa/uscdi-data-class/allergies-and-intolerances#uscdi-v1) <br>
* USCDI mapping concerns: v1 has only 3 data elements: Substance (Medication), Substance (Drug Class), Reaction. It does not include non-medication based allergies.

|Data field       | Suggested label | USCDI v1 data element mapping| Notes    | Questions|           
|:------------------------|:-----------------------|:-----------------|:---------------------|:---------------------|
|Allergy name | Allergy | [Substance (Medication)](https://www.healthit.gov/isa/taxonomy/term/896/uscdi-v1)|Thing that caused the allergic reaction, like "penicillin" |
|Date entered | Date entered |[Author time stamp](https://www.healthit.gov/isa/taxonomy/term/796/uscdi-v1)|
|Severity  |Severity | _None_|Level of reaction, like "moderate" or "severe"|Are there set options to choose from in this field, or is it free entry?|
|Allergy type |Type of allergy | _None_|The type of thing that caused the allergy, like "drug" for penicillin | |Are there set options to choose from in this field, or is it free entry?|
|VA drug class | |[Substance (Drug Class)](https://www.healthit.gov/isa/taxonomy/term/901/uscdi-v1) | |Does this field appear on non-medication allergies (like latex)?| 
|Reaction  |Reaction |[Reaction](https://www.healthit.gov/isa/taxonomy/term/906/uscdi-v1) | Description of signs and symptoms, like "rash"|
|Observed/Historical |Observed or reported| _None_|We'll need to either add explanatory text here or adjust the data to read "Provider observed the reaction" or "You reported the reaction to your provider"||
|Location |Location | _None_|
|Comments |Provider notes | _None_|

### Health conditions

* USCDI v1 Mapping: [Problem](https://www.healthit.gov/isa/uscdi-data-class/problems#uscdi-v1) <br>
* USCDI mapping concerns: v1 has only 1 data element: Problems

|Data field       | Suggested label | USCDI v1 data element mapping | Notes             | Questions           |
|:------------------------|:-----------------------|:-----------|:-------------------|:---------------------|
|Issue/problem title | Health condition | [Problems](https://www.healthit.gov/isa/uscdi-data-class/problems#uscdi-v1) |
|Date/time entered |Date and time entered |[Author time stamp](https://www.healthit.gov/isa/taxonomy/term/796/uscdi-v1)| |Why is time important here? Can we display only date?|
|Status | |_None_| |Are the only options active and inactive?|
|Location where the issue was entered |Location |_None_| |Is this field only necessary for the user to associate it with a specific appointment they had? What if it were a telehealth appt?|
|Provider's name |Provider |_None_|
|Comments |Provider notes |_None_|

### Vitals

#### Vital sign types

Note: USCDI also includes 3 vitals for babies and children: BMI (2-20 years), weight-for-length percentile (birth to 36 months), and head circumference (birth to 36 months)

|Vital sign       | Suggested label           | USCDI v1 data element mapping | Notes             | Questions           |
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|
|Blood pressure |Blood pressure |[Systolic blood pressure](https://www.healthit.gov/isa/taxonomy/term/836/uscdi-v1)<br>[Diastolic blood pressure](https://www.healthit.gov/isa/taxonomy/term/831/uscdi-v1)|Noting we're suggesting no units on BP — 2 numbers separated by a slash is the most familiar way to present this data|USCDI has separate elements for systolic and diastolic. Do we receive BP data as 1 field or 2?|
|Respiration|Breathing rate|[Respiratory rate](https://www.healthit.gov/isa/taxonomy/term/856/uscdi-v1)|Suggested units label "breaths per minute"| |
|Pulse rate|Heart rate|[Heart rate](https://www.healthit.gov/isa/taxonomy/term/851/uscdi-v1)|Suggested units label "beats per minute"|
|Temperature |Temperature |[Body temperature](https://www.healthit.gov/isa/taxonomy/term/861/uscdi-v1)| | |
|Height|Height|[Body height](https://www.healthit.gov/isa/taxonomy/term/841/uscdi-v1)|Suggested units label "X feet, X inches" | |
|Weight |Weight |[Body weight](https://www.healthit.gov/isa/taxonomy/term/846/uscdi-v1)|Suggested units label "pounds" | |
|Pain|Pain level|_None_||Is pain always on a scale of 1 to 10? <br> Can we offer more detail about what the pain level refers to? Is it the patient's overall perceived level of pain at the moment?|
| ||[Pulse oximetry](https://www.healthit.gov/isa/taxonomy/term/866/uscdi-v1)|Not currently included in MHV | |
| | |[Inhaled oxygen concentration](https://www.healthit.gov/isa/taxonomy/term/871/uscdi-v1)|Not currently included in MHV | |
| | |BMI Percentile (2-20 years)|Not currently included in MHV | |
|||Weight-for-length Percentile (Birth - 36 Months)|Not currently included in MHV | |
|||Head Occipital-frontal Circumference Percentile (Birth - 36 Months)|Not currently included in MHV | |



#### Vital signs data

* USCDI v1 Mapping: [Vital signs](https://www.healthit.gov/isa/uscdi-data-class/vital-signs#uscdi-v1) <br>
* USCDI mapping concerns: v1 maps the actual vital signs, not the data elements for each vital sign — adding table below to capture this

|Data field       | Suggested label | USCDI v1 data element mapping | Notes             | Questions           |
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|
|Measurement |Result|[List of vital signs](https://www.healthit.gov/isa/uscdi-data-class/vital-signs#uscdi-v1) |Each vital sign listed includes both the vital sign and specification for measurement|
|Date/time collected|Date|[Author time stamp](https://www.healthit.gov/isa/taxonomy/term/796/uscdi-v1)|
|Location||Location|
|Comments |Provider notes||


