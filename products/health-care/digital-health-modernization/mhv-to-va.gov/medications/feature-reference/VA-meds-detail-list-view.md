# Detailed view for VA prescriptions

## Overview

Ability to view details of medications that are administered through VA
## User stories

- As a Veteran, I want to be able to view all medications from VA
- As a Veteran, I want to view relevent information about medications as available, including name, images (or a11y equivalent), descriptions.
- As a Veteran, I want to be able to download my medication details.

## Content 
[H1] [Name, strength, form] 

Last filled on [date] OR “Not filled yet” 

Download this page as a PDF [link] 

What to know before you print or download [expand] 

If you print this page, it won’t include your allergies and reactions to medications. 

If you download this page, we’ll include a list of allergies and reactions in your VA medical records. 

If you’re on a public or shared computer, remember that downloading saves a copy of your records to the computer you’re using.  

[H2] About your prescription 

[Status-related content from card in list view] 

Status 

What does this status mean? [Expandable component — see table below for content] 

Refills left 

Request refills by this prescription expiration date 

Prescription number 

Prescribed on 

Prescribed by 

Facility 

Pharmacy phone number 

[H2] About this medication or supply 

Instructions 

Reason for use 

Quantity 

What it looks like 

Your medication may look different when you get a refill. Find the most recent image in your refill history. 

[H2] Refill history 

[H3] Refill [number] or First fill 

Filled by pharmacy on  

Shipped on 

Image of the medication or supply 

Review image [expandable component] 

 
### Functional
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- The user must be able to :
  - Download pdf of medication details and know what will be shown in the pdf
  - See status related information on their prescription card and be able to view what the status means if needed
  - See all of the relevant information about their prescription 

### Non-functional


## Specifications

[Page template](https://www.sketch.com/s/c117249d-4845-4740-a3e2-78ebde262de3/p/21DEC478-8C80-4CE4-8412-DBBCE5F17DEA/canvas)

[Page content](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/_layouts/15/doc2.aspx?sourcedoc=%7BFAD4256E-D901-44B2-A26C-B534F30C8C3A%7D&file=Medications_working%20content%20document.docx&action=default&mobileredirect=true)

## Metrics
<!--Goals for this feature, and how we track them through analytics-->

- Goal 1
- Goal 2

**Events tracked**
<!-- Descriptions of events tracked on this page to meet those goals -->



## Errors and alerts 
[User flow](https://www.sketch.com/s/c117249d-4845-4740-a3e2-78ebde262de3/p/5FC7ADD6-6C9A-4EC3-A47A-9AF8379062CC/canvas)
<!-- Any alerts that could display for this feature and what triggers them. -->

### Alert that user is not registered at a VA facility
<!-- Add a new section for each alert -->

**Alert trigger**


**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

## Technical design
<!-- Endpoints and sample responses -->

**Staging URL:** [https://staging.va.gov/my-health/medications?next=loginModal&oauth=false]

**Staging base URL:** https://staging-api.va.gov/

**Prod base URL:** https://api.va.gov/

**Endpoints**
`



## Development testing


### [Call name] call

  
<details>
  <summary><b>VCR cassette</b></summary>

```
[Add VCR cassette]

```
</details>

<details>
  <summary><b>Example test for "[Call name]" that corresponds to the above VCR cassette.</b></summary>

```
[Add example test]
```
</details>


