# Display Intent to File (ITF) Status in CST Initiative

## Links
* [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110236)
* [Mural]
* [Figma](https://www.figma.com/design/EZ5o3pGj3hdXZCsjiKwZn5/Intent-to-File--in-CST-?node-id=0-1&t=tpKoQ6D3W5lYQMpR-1)

## Background
An Intent to File (ITF) is a notice to the VA that a Veteran plans to file a benefits claim. Submitting an ITF protects the claim’s effective date for up to one year, meaning if the formal claim is filed within that year, any benefits awarded can be backdated to the ITF date.
However, if no claim is submitted in time, the ITF expires, and the Veteran may lose out on retroactive compensation. Given this significance, clear visibility into ITF status (whether an ITF is on file and when it expires) is crucial for Veterans. Veterans frequently report confusion around whether they have an active Intent to File (ITF) on record and when it expires. This initiative proposes surfacing ITF status information directly in the Claims Status Tool (CST) to help Veterans track their filing window and build trust in VA systems.

## Problem statement
On VA.gov, Veterans have no clear or consistent way to verify whether they have an active Intent to File (ITF) or when it expires. Existing methods—such as calling VA, checking ITF letters, or starting a 526/0995 form online—are inefficient and disjointed. This lack of transparency could lead to confusion, missed benefits due to expired ITFs, or duplicate ITF filings.

## Why is this important

ITF plays a critical role in preserving the effective date for benefit claims. When Veterans are unsure about their ITF status, they risk unnecessarily losing out on retroactive compensation or filing duplicate ITFs. Improving visibility into this information empowers Veterans to take timely action, reduces dependency on support channels, and builds greater trust in VA.gov systems.

## Proposed solution
Display ITF status information directly within the Claims Status Tool (CST) for logged-in Veterans
* Show if an active ITF is on file
* Display the associated benefit type--Compensation or Pension
* Include the ITF expiration date
* Display a helpful empty state if no ITF is on file

## Impact
* Increased visibility into ITF status, reducing confusion and reliance on manual or indirect methods
* Fewer ITF-related support calls and inquiries
* Higher rate of claims filed within the ITF window, preserving Veterans’ eligibility for backdated benefits

## User stories

### In scope

#### Story 1: Check my ITF status
As a Veteran who may have already submitted an Intent to File (ITF),
I want to check whether I have an active ITF and when it expires,
So that I can confirm my past actions without searching through paperwork or contacting VA.

#### Story 2: Know my deadline
As a Veteran with an active ITF, I want to know the expiration date so I can submit my claim before the deadline and preserve my retroactive benefits.

#### Story 3: Understand next steps after expiration
As a Veteran whose ITF has expired, I want to get clear information about my options, so I know how to move forward—even if I missed the deadline for backdated benefits.

#### Story 4: Track multiple ITFs
As a Veteran with ITFs for different benefit types (like compensation and pension),
I want each ITF listed separately with its own expiration date, so I can manage them without losing my place in line for any one benefit.

#### Story 5: Learn about ITF if I haven’t started (empty state)
As a Veteran who hasn’t submitted a claim yet, I want to learn how ITF works when I check the Claims Status Tool, to understand how it can help me get the most from my benefits.

#### Story 6: Get info as a dependent
As a dependent of a Veteran, I want to check if there’s an active ITF related to my potential benefits (like DIC or survivors' pension), to understand where things stand and what deadlines I need to know.

### Out of scope (future opportunities)

#### Story 7: See one accurate status
As a Veteran who may have submitted ITFs through different methods (online, phone, or VSO),
I want one accurate and up-to-date status in the Claims Status Tool,
So that I don’t get confused or try to submit extra ITFs by mistake.

#### Story 8: Understand if my claim is connected to an ITF
As a Veteran with a claim in progress,
I want to know if it’s linked to an ITF and which one,
So that I understand how the start date for payments will be determined.

#### Story 9: Know my ITF went through
As a Veteran who just submitted an ITF,
I want to get a confirmation when it’s been received,
So that I know it was recorded and my effective date is protected.

#### Story 10: Get a reminder before ITF expires
As a Veteran with an active ITF,
I want a reminder before it expires,
So that I can act in time and avoid losing retroactive benefits.

#### Story 11: See submission history
As a Veteran who’s filed ITFs in the past,
I want to view a list of my past ITF submissions and claim activity,
So that I can keep track of my benefits journey over time.

#### Story 12: Get help understanding ITF
As a Veteran unfamiliar with ITFs,
I want short, clear explanations or examples in the Claims Status Tool,
So that I understand what an ITF is and why it matters.

#### Story 13: Know if VA auto-submitted an ITF
As a Veteran with an active ITF,
I want a reminder before it expires,
So that I can act in time and avoid losing retroactive benefits.

#### Story 14: Understand what happens after claim submission
As a Veteran who submitted a claim after filing an ITF,
I want to know what happens to my ITF once my claim is submitted,
So that I understand the full process and what to expect next.






### Metrics
### Open Questions
### Relevant background Information
#### Types of ITFs
* Standalone Intent to file (0966)
* Disability compensation (526ez)
* Veteran’s pension (527ez)
* Dependency and Indemnity Compensation
(DIC)

#### Previous projects and research
* [ITF Baseline Audit - Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-05%20Intent%20to%20File%20Audit.md)
* [Intent to File Research Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/6ee00a8be01e7dfcc406238da57eb704ff1b6374/products/disability/526ez/research/2024-02-ITF-Research/ITF-Research-Summary.md)

### Team roles
* OCTO product owners: Amy Lai | amy.lai2@va.gov & Julie Strothman |  julie.strothman@va.gov
* UX/UI design: Shawn Collins | shawn.collins@oddball.io
* Content designer & UX writer: Rick Allen | rick.allen@coforma.io
* Accessibility specialist: Trevor Pierce | trevor.pierce@oddball.io
* Front-end engineer: Jane Cho | jane.cho@coforma.io
* Product management: Saliha Ghaffar | saliha.ghaffar@coforma.io

