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
|All |Category |
|All|Title of lab report (if available)|
|All|Date collected |
|All|Ordering provider |
|Radiology|Procedure/test name |
|Radiology|Date/time exam performed |
|Radiology|Ordering location|
|Radiology|Requesting provider|
|Radiology|Reason for study|
|Radiology|Performing location|
|Radiology|Clinical history|
|Radiology|Radiologist|
|Radiology|Report|
|Chemistry/hematology|Lab test name | (if avail)|
|Chemistry/hematology|Date/time collected|
|Chemistry/hematology|Specific test-name|
|Chemistry/hematology|Specific test-results|
|Chemistry/hematology|Specific test-Units|
|Chemistry/hematology|Specific test-Reference range|
|Chemistry/hematology|Specific test-Status|
|Chemistry/hematology|Specific test-Performing location|
|Chemistry/hematology|Specific test-Interpretation|
|Chemistry/hematology|Specimen|
|Chemistry/hematology|Ordering provider|
|Chemistry/hematology|Ordering location|
|Chemistry/hematology|Collected location|
|Chemistry/hematology|Comments|
|Chemistry/hematology|Performing Location|
|Microbiology|Lab type |
|Microbiology|Lab test (aka name, not always present)|
|Microbiology|Date collected|
|Microbiology|Date completed (not always present)|
|Microbiology|Results|
|Microbiology|Site/specimen (not always present)|
|Microbiology|Ordering provider|
|Microbiology|Ordering location|
|Microbiology|Collected location|
|Pathology|Type of report (surgical pathology/cytology)|
|Pathology|Specimen|
|Pathology|Date obtained|
|Pathology|Performing location|
|Pathology|Date completed|
|Pathology|Report|
|EKG|Procedure/test name|
|EKG|Date/time performed|
|EKG|Ordering location|


**Category labels for labs and tests**
|Category | Suggested label | Notes             | Questions           |Related fields |
|:----------------------|:----------------|:------------------|:--------------------|:--------------|
|Chemistry/hematology|||Are all tests in this category blood tests?|
|Pathology |
|Microbiology | |This is a subtype of pathology. It looks for bacteria, viruses, fungi, and parasites.|Would "Tests for infections" be an accurate PL label?|
|Radiology | 
|EKG |EKG (electrocardiogram) |Historical category |Are new EKGs added to medical records? |


**Care notes**
|Data field       | Description           | Suggested label | Notes             | Questions           |Related fields |
|:------------------------|:-----------------------|:-----------------------|:-------------------|:---------------------|:---------------------|
