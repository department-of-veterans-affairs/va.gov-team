**Medical records domains**
|Blue Button label | AVS label | Suggested label|
|:------|:-------|:-------|
|VA Immunizations  |Immunizations | Vaccines|
|VA Allergies |Allergies and adverse drug reactions (signs / symptoms) <br/> My VA Allergies |Allergies|
|VA Problem List |You were diagnosed with |Health conditions|
|VA Vitals and Readings| Vitals as of this visit | Vitals|
|VA Laboratory Results <br> VA Pathology Reports <br> VA Radiology Reports <br> VA Electrocardiogram (EKG) Reports |Lab tests <br/> Recent lab results |Lab and test results|
|VA Admissions and Discharges <br> VA Notes| Visit Notes <br/> My treatment plan <br/> Other instructions | Care notes and summaries|

**Vaccines**

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

**Allergies**

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

**Health conditions**

USCDI v1 Mapping: [Problem](https://www.healthit.gov/isa/uscdi-data-class/problems#uscdi-v1) <br>
USCDI mapping concerns: v1 has only 1 data element: Problems

|Data field       | Description          | Suggested label | Notes             | Questions           |
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|
|Issue/problem title |Name of the health condition | Health condition |
|Date/time entered | | | |Why is time important here? Can we display only date?|
|Status | | | |Are the only options active and inactive?|
|Location where the issue was entered |Name of facility |Location | |Is this field only necessary for the user to associate it with a specific appointment they had? What if it were a telehealth appt?|
|Provider's name | |Provider |
|Comments |Comments entered by provider |Provider notes |

**Vitals**

USCDI v1 Mapping: [Vital signs](https://www.healthit.gov/isa/uscdi-data-class/vital-signs#uscdi-v1) <br>
USCDI mapping concerns: v1 maps the actual vital signs, not the data elements for each vital sign — adding table below to capture this

|Data field       | Description           | Suggested label | Notes             | Questions           |
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|
|Category name | 
|Latest reading |
|Date of latest reading |
|Location of latest reading |
|Reading |
|Date of entry |
|Location of entry |
|Comments |

**Lab and test results**

USCDI v1 Mapping: [Laboratory](https://www.healthit.gov/isa/uscdi-data-class/laboratory#uscdi-v1), [Pathology report narrative](https://www.healthit.gov/isa/taxonomy/term/2886/uscdi-v1), [Clinical tests](https://www.healthit.gov/isa/uscdi-data-class/clinical-tests#uscdi-v1), [Diagnostic imaging](https://www.healthit.gov/isa/uscdi-data-class/diagnostic-imaging#uscdi-v1) <br>
USCDI mapping concerns: Does Procedures also apply here? See commentary about confusion around this term in v1: https://www.healthit.gov/isa/uscdi-data-class/procedures#uscdi-v1 <br>
Similar to other domains, all relevant categories have far fewer data elements than we have in our list

|Category | Data field | Suggested label | Notes | Questions |
|:----------------|:-------------|:----------------|:------------------|:--------------------|
|All |Category |Type of test | |Is this information useful for patients? Could we remove this from the list view?|
|All|Title of lab report (if available)|Test (suggest using this without a label as the card header in list, H1 in detail) |If there's no title/test name available, we could conditionally display the type of test as the card header in list, H1 in detail. Hopefully this is rare. |
|All|Date collected |Date |Challenging to find a single date label that works for all categories. "Date collected" or "Date you gave the sample" doesn't make sense for radiology or EKG. "Date you got the test" doesn't quite make sense for pathology. A shorter field label is also better for the card format in list view.| Would we want to map several fields from different categories into a single "Date" field for the list view, but label them differently in the detail views where we have additional date fields? So all "Date collected" "Date obtained" "Date performed" fields would map to "Date" in list view. Or would we want the labels to stay consistent between list and detail views, even if this means several longer "Date" labels on cards in the list?|
|All|Ordering provider |Provider|Similar to previous line about dates — for space on the cards, "Provider" works better in list view. But we need to differentiate provider type in detail view.| Is this different mapping for list and detail view acceptable?|
|Radiology|Procedure/test name |Test ||Is this the same as "Title of lab report" in the All category above?|
|Radiology|Date/time exam performed |Date you got the test |
|Radiology|Ordering location| Where the test order started |
|Radiology|Requesting provider| Provider who ordered the test | | | In Chem/Hem and Microbio, the field is labeled “Ordering Provider”. Should this change?|
|Radiology|Reason for study| Reason for the test |
|Radiology|Performing location| Where you got the test |
|Radiology|Clinical history| | | | What does this mean? Is this medical history related to the reason for this test? |
|Radiology|Radiologist|
|Radiology|Report| | | |What does this mean? Is this equivalent to "Results" for other categories?|
|Chemistry/hematology|Lab test name (if avail)| Test (suggest using without label as card header in list, H1 in detail) |
|Chemistry/hematology|Date/time collected| Date and time you gave the sample |
|Chemistry/hematology|Specimen| Sample tested |
|Chemistry/hematology|Specific test-name| Test |
|Chemistry/hematology|Specific test-results| Results |
|Chemistry/hematology|Specific test-Units| Units | | Can we remove the "Units" field, and add the units to the result and reference range?|
|Chemistry/hematology|Specific test-Reference range| Standard range ||Does the reference range adjust based on patient demographics or conditions?|
|Chemistry/hematology|Specific test-Status| | | Under what circumstances would "status" be anything other than final? Can we remove this field?|
|Chemistry/hematology|Specific test-Performing location| Lab that analyzed the sample||Is this suggested label correct — does "performing location" mean the lab that analyzed the sample? |
|Chemistry/hematology|Specific test-Interpretation| | | What types of information does this include? What guidance do providers see for field? <br> Who inputs this and the comments field? Ordering provider? PC? Lab technician? We don't want the user to think they can add their own comments.|
|Chemistry/hematology|Ordering provider| Provider who ordered the test |
|Chemistry/hematology|Ordering location| Where the test order started |
|Chemistry/hematology|Collected location| Where you gave the sample |
|Chemistry/hematology|Comments| | |How is this different from Interpretation field? |
|Chemistry/hematology|Performing Location| Lab that analyzed the sample | | It seems that this field is referring to the overall lab results, and not related to individual tests. If all of the tests were performed in other locations, what is this field referring to?|
|Microbiology|Lab type | | | What types can you choose from here? A: The value will always be "Microbiology" |
|Microbiology|Lab test (aka name, not always present)| Test |
|Microbiology|Date collected| Date you gave the sample |
|Microbiology|Date completed (not always present)| Date completed |
|Microbiology|Results| Results |
|Microbiology|Site/specimen (not always present)| Sample tested |
|Microbiology|Ordering provider| Provider who ordered the test |
|Microbiology|Ordering location| Where the test order started|
|Microbiology|Collected location| Where you gave the sample |
|Pathology|Type of report (surgical pathology/cytology)| Type of pathology test |
|Pathology|Specimen| Sample tested ||
|Pathology|Date obtained| Date you gave the sample | |Does "gave" work in this context? This may happen in the context of surgery, etc, as opposed to going to a lab to give blood|
|Pathology|Performing location| Lab that analyzed the sample |
|Pathology|Date completed| Date completed |
|Pathology|Report| | | What does this mean? Is this where results are entered? |
|EKG|Procedure/test name| Test | For this category, this field will always read "Electrocardiogram (EKG)"|
|EKG|Date/time performed| Date and time of the test |
|EKG|Ordering location| Where the test order started |


**Category labels for labs and tests**
|Category | Suggested label | Notes             | Questions           |
|:----------------------|:----------------|:------------------|:--------------------|
|Chemistry/hematology|||Are all tests in this category blood tests? Would "blood tests" or "routine blood tests" be an accurate label here?|
|Pathology |||
|Microbiology | |This is a subtype of pathology. It looks for bacteria, viruses, fungi, and parasites.|Would "Tests for infections" be an accurate PL label?|
|Radiology | X-rays and imaging tests | 
|EKG |EKG (electrocardiogram) |Historical category |Are new EKGs added to medical records? |


**Care summaries and notes**

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
