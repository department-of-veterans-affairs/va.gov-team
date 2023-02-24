**Vaccines**
|Data field       | Description           | Suggested label | Notes             | Questions           |Related fields |
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|:---------------------|
|Immunization | Name of the vaccine | Vaccine | 
|Date received | Date patient got vaccine dose | Date |
|Location | Name/address/clinic code of facility where they got vaccine dose | Location |
|Reaction | Reactions or side effects to the vaccine recorded by provider | | Vaccine reactions may also be stored in allergies list and self-entered data |How often does a vaccine reaction appear in allergy list instead of this field? |
|Comments | Comments entered by provider | Provider notes | 
|Series | Info about vaccine series, if relevant | Series | May need explanatory text here. <br /> <br /> Vaccines in a series won't be grouped or linked in MVP version. | How does series data display — "COVID booster 1 of 2" or some other format? |

**Allergies**
|Data field       | Description           | Suggested label | Notes             | Questions           |Related fields |
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|:---------------------|
|Allergy name | Thing that caused the allergic reaction, like "penicillin" |Allergy |
|Date entered | Date provider entered the allergy record | Date entered | 
|Severity | Level of reaction, like "moderate" or "severe" | 
|Allergy type | The type of thing that caused the allergy, like "drug" for penicillin | |Need more info to suggest label| Does provider select from a list of types here, or is this field free entry?|
|VA drug class | | | |What does this mean? Is there a list of classes to choose from?| 
|Reaction | Description of signs and symptoms, like "rash" |
|Observed/Historical || |Need more info to suggest label| Does this mean the provider witnessed the reaction (observed) vs entered an allergy record based on patient's account of a previous allergic reaction? |
|Location |Name of facility where provider entered allergy record | Location | 
|Comments |Comments entered by provider | Provider notes | 

**Health conditions**
|Data field       | Description          | Suggested label | Notes             | Questions           |Related fields |
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|:---------------------|
|Issue/problem title |Name of the health condition | Health condition |
|Date/time entered | | | |Why is time important here? Can we display only date?|
|Status | | | |Are the only options active and inactive?|
|Location where the issue was entered |Name of facility |Location |
|Provider's name | |Provider |
|Comments |Comments entered by provider |Provider notes |

**Vitals**
|Data field       | Description           | Suggested label | Notes             | Questions           |Related fields |
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|:---------------------|
|Category name | 
|Latest reading |
|Date of latest reading |
|Location of latest reading |
|Reading |
|Date of entry |
|Location of entry |
|Comments |

**Lab and test results**
|Category       |Data field  | Description           | Suggested label | Notes             | Questions           |Related fields |
|:----------------|:-------------|:----------------------|:----------------|:------------------|:--------------------|:--------------|
|All |Category |Type of test |
|All|Title of lab report (if available)|None (card header in list, H1 in detail) |
|All|Date collected |Date |
|All|Ordering provider |Provider |
|Radiology|Procedure/test name |Test |
|Radiology|Date/time exam performed |Date of test |
|Radiology|Ordering location| Location that ordered test |
|Radiology|Requesting provider| Provider who ordered test |
|Radiology|Reason for study| Reason for test |
|Radiology|Performing location| Location that did test |
|Radiology|Clinical history| | | What does this mean? Is this medical history related to the reason for this test? |
|Radiology|Radiologist| Provider who did test |
|Radiology|Report| | | What does this mean? Is this where results are entered? |
|Chemistry/hematology|Lab test name (if avail)| None (card header in list, H1 in detail) |
|Chemistry/hematology|Date/time collected| Date and time collected |
|Chemistry/hematology|Specimen| Sample tested |
|Chemistry/hematology|Specific test-name| Test |
|Chemistry/hematology|Specific test-results| Results |
|Chemistry/hematology|Specific test-Units| Units | |Can we remove the "Units" field, and add the units to the result and reference range?|
|Chemistry/hematology|Specific test-Reference range| Normal range |
|Chemistry/hematology|Specific test-Status| | | What does this mean? Under what circumstances would "status" be anything other than final? Can we remove this field? |
|Chemistry/hematology|Specific test-Performing location| Location that did test |
|Chemistry/hematology|Specific test-Interpretation| | | What types of information does this include? What guidance do providers see for field? Who inputs this and the comments field? Ordering provider? PC? Lab technician? We don't want the user to think they can add their own comments.|
|Chemistry/hematology|Ordering provider| Provider who ordered test |
|Chemistry/hematology|Ordering location| Location that ordered test |
|Chemistry/hematology|Collected location| Location that collected sample |
|Chemistry/hematology|Comments| | | How is this different from Interpretation field? |
|Chemistry/hematology|Performing Location| Location that did test |
|Microbiology|Lab type | | | What types can you choose from here? |
|Microbiology|Lab test (aka name, not always present)| Test |
|Microbiology|Date collected| Date collected |
|Microbiology|Date completed (not always present)| Date completed |
|Microbiology|Results| Results |
|Microbiology|Site/specimen (not always present)| Sample tested |
|Microbiology|Ordering provider| Provider who ordered test |
|Microbiology|Ordering location| Location that ordered test |
|Microbiology|Collected location| Location that collected sample |
|Pathology|Type of report (surgical pathology/cytology)| Type of pathology test |
|Pathology|Specimen| Sample tested |
|Pathology|Date obtained| Date collected |
|Pathology|Performing location| Location that did test |
|Pathology|Date completed| Date completed |
|Pathology|Report| | | What does this mean? Is this where results are entered? |
|EKG|Procedure/test name| Test | 
|EKG|Date/time performed| Date and time of test |
|EKG|Ordering location| Location that ordered test |


**Category labels for labs and tests**
|Category | Suggested label | Notes             | Questions           |Related fields |
|:----------------------|:----------------|:------------------|:--------------------|:--------------|
|Chemistry/hematology|||Are all tests in this category blood tests? Would "blood tests" or "routine blood tests" be an accurate label here?|
|Pathology |||
|Microbiology | |This is a subtype of pathology. It looks for bacteria, viruses, fungi, and parasites.|Would "Tests for infections" be an accurate PL label?|
|Radiology | X-rays and imaging tests | 
|EKG |EKG (electrocardiogram) |Historical category |Are new EKGs added to medical records? |


**Care summaries and notes**
|Category|Data field       | Description           | Suggested label | Notes             | Questions           |Related fields |
|:----------------------|:-----------------------|:--------------------|:------------------|:------------------|:--------------------|:---------------------|
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














