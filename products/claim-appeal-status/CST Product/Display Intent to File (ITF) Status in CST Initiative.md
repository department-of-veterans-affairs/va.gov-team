# Design Pitch: Display Intent to File (ITF) Status in CST

## Links
* [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110236)
* [Mural]
* [Figma](https://www.figma.com/design/EZ5o3pGj3hdXZCsjiKwZn5/Intent-to-File--in-CST-?node-id=0-1&t=tpKoQ6D3W5lYQMpR-1)

## Background
An Intent to File (ITF) is a notice to the VA that a Veteran plans to file a benefits claim. Submitting an ITF protects the claim’s effective date for up to one year, meaning if the formal claim is filed within that year, any benefits awarded can be backdated to the ITF date.
However, if no claim is submitted in time, the ITF expires, and the Veteran may lose out on retroactive compensation. Given this significance, clear visibility into ITF status (whether an ITF is on file and when it expires) is crucial for Veterans. Veterans frequently report confusion around whether they have an active Intent to File (ITF) on record and when it expires. This initiative proposes surfacing ITF status information directly in the Claims Status Tool (CST) to help Veterans track their filing window and build trust in VA systems.

## Problem statement
On VA.gov, Veterans have no clear or consistent way to verify whether they have an active Intent to File (ITF) or when it expires. Existing methods—such as calling VA, checking ITF letters, or starting a 526/0995 form online—are inefficient and disjointed. This lack of transparency could lead to confusion, missed benefits due to expired ITFs, or duplicate ITF filings.

## Why is this an important problem to solve

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

## High-level user flow
This user flow aims to illustrate the various ITF statuses, starting from the login process to the status check. It also begins to outline the actions and information related to these statuses and how they connect with the user stories we want to prioritize.

![Intent to File - CST_2025-06-09_05-00-55](https://github.com/user-attachments/assets/e57c957c-f2c2-4177-8fe3-81bf751a4b20)

## Initial sketches 

### ITF card on MyVA
This is where we began. The claim card pattern is currently used in the Benefit Applications and Forms section at the bottom of MyVA to display incomplete ITFs. While there are a few elements that may need updating, it was encouraging to see that we already have a foundation to build upon. 
![CleanShot 2025-06-08 at 22 59 36@2x](https://github.com/user-attachments/assets/c649033e-97d2-4704-8a1e-ee5fdd01fca3)

### ITF card layout and content
We started exploring the empty state and the single active ITF because we felt that these represented the two most foundational experiences—the educational introduction for new users and the core functionality for Veterans with an existing ITF. These two scenarios likely cover most Veterans and do a great job establishing the fundamental design patterns and content framework we will extend to the other scenarios. [View in Figma](https://www.figma.com/design/EZ5o3pGj3hdXZCsjiKwZn5/Intent-to-File--in-CST-?node-id=97-1059&t=eqIhw8bstclAAPpO-1)
<img width="1980" alt="ITF sketches V1" src="https://github.com/user-attachments/assets/d4748957-9331-42a6-b56b-654c17d55de1" />


### Relevant background Information

#### Functionality


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

