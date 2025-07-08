# Design Pitch: Display Intent to File (ITF) Status in CST
(Updated: 7/8/25)

## Links
* [Github Epic: Display Intent to File (ITF) Status in CST](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110236)
* [Figma: ITF (Intent to File) in CST](https://www.figma.com/design/ZLDFINlvw5skb6ckTT9skw/Intent-to-File-in-CST-%C2%B7-BMT?node-id=201-192&t=z4CI7BMkcO58QHPb-1)
* Mural: Intent to File - CST


## Background
An Intent to File (ITF) is a notice to the VA that a Veteran plans to file a benefits claim. Submitting an ITF protects the claim’s effective date for up to one year, meaning if the formal claim is filed within that year, any benefits awarded can be backdated to the ITF date.
However, if no claim is submitted in time, the ITF expires, and the Veteran may lose out on retroactive compensation. Given this significance, clear visibility into ITF status (whether an ITF is on file and when it expires) is crucial for Veterans. Veterans frequently report confusion around whether they have an active Intent to File (ITF) on record and when it expires. This initiative proposes surfacing ITF status information directly in the Claims Status Tool (CST) to help Veterans track their filing window and build trust in VA systems.

## Problem statement
On VA.gov, Veterans have no clear or consistent way to verify whether they have an active Intent to File (ITF) or when it expires. Existing methods—such as calling VA, checking ITF letters, or starting a 526/0995 form online—are inefficient and disjointed. This lack of transparency could lead to confusion, missed benefits due to expired ITFs, or duplicate ITF filings.

## Why this is important

ITF plays a critical role in preserving the effective date for benefit claims. When Veterans are unsure about their ITF status, they risk unnecessarily losing out on retroactive compensation or filing duplicate ITFs. Improving visibility into this information empowers Veterans to take timely action, reduces dependency on support channels, and builds greater trust in VA.gov systems.

## Proposed solution
Display ITF status information directly within the Claims Status Tool (CST) for logged-in Veterans
* Show if an active ITF is on file
* Display the associated benefit type--Compensation or Pension
* Include the ITF expiration date
* Display a helpful empty state if no ITF is on file

## Impact
Increase the rate of claims filed within the ITF window to maintain Veterans’ eligibility for backdated benefits.

Driving questions for improving the rate of claims

- How many ITFs currently expire without a claim submitted?
- How many of those Veterans eventually submit a claim later?
- How much money are Veterans missing out on?
- What percentage of that amount can we help Veterans recover by providing more information about ITFs?

## User stories

#### Story 1: Check my ITF status
As a Veteran who may have already submitted an Intent to File (ITF),
I want to check whether I have an active ITF and when it expires,
So that I can confirm my past actions without searching through paperwork or contacting VA.

##### Painpoint

> Ever since the Claim Status Tool replaced the legacy eBenefits dashboard, Veterans report difficulty learning whether an ITF is on file and spend a lot of time searching VA.gov without finding their ITF information. Source: [Reddit](https://www.reddit.com/r/VeteransBenefits/comments/10h23zd/where_can_i_see_my_intent_to_file_date_claim_in/#:~:text=Reddit%20www,Downvote%20Reply)

> The pension team recommended reinforcing understanding of ITF by making it accessible in other places, such as the confirmation page after submission, the Veteran's profile, or the Claim Status Tool.
Source: [526ez Shadowing Veteran Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-11-Shadowing-Research/research-findings.md)

#### Story 2: Know my deadline
As a Veteran with an active ITF, I want to know the expiration date so I can submit my claim before the deadline and preserve my retroactive benefits.

##### Painpoint

> The Proactive Benefits team found many misunderstandings about the timeline of ITF. Many saw it as a one-year deadline to filing a claim; some participants took this to mean that they had to rush to file before their claim was seen as invalid, while others said they would wait to file an ITF until they knew what to expect or had all of their documents in order so as not to run out the one-year clock prematurely. There was also common confusion about how to know what date your ITF is associated with and how the VA would notify you of that information.  Source: [Research Findings for Proactive Benefits, November 2023](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/proactive-benefits/research/2023-11-Outreach%20Exploration/research-findings.md)

#### Story 3: Understand next steps after expiration
As a Veteran whose ITF has expired, I want to get clear information about my options, so I know how to move forward—even if I missed the deadline for backdated benefits.

##### Painpoint

> Veterans were concerned about completing their applications by the ITF expiration date. They expressed this with phrases such as, “My intent to file expires today,” “It has to be in by today,” and after expiration: “My application is now due next year.” These Veterans were primarily returning to an in-progress claim, and several mentioned that they were returning to finish uploading documentation or ancillary forms such as 21-0781a. Source: 526 Medallia Research

#### Story 4: Track multiple ITFs
As a Veteran with ITFs for different benefit types (like compensation and pension),
I want each ITF listed separately with its own expiration date, so I can manage them without losing my place in line for any one benefit.

#### Story 5: Learn about ITF if I haven’t started (empty state)
As a Veteran who hasn’t submitted a claim yet, I want to learn how ITF works when I check the Claims Status Tool, to understand how it can help me get the most from my benefits.

##### Painpoint
> Evidence suggests a potential information gap regarding the ITF process, where many Veterans are unaware of ITF benefits, possibly resulting in missed opportunities to maximize their benefits. Source: [Submit your intent to file ~Reddit](https://www.reddit.com/r/Veterans/comments/hsvm0i/submit_your_intent_to_file/)

#### Story 6: Get info as a dependent
As a dependent of a Veteran, I want to check if there’s an active ITF related to my potential benefits (like DIC or survivors' pension), to understand where things stand and what deadlines I need to know.

## High-level user flow
This user flow aims to illustrate the various ITF statuses, starting from the login process to the status check. It also begins to outline the actions and information related to these statuses and how they connect with the user stories we want to prioritize.

![Intent to File - CST_2025-06-09_05-00-55](https://github.com/user-attachments/assets/e57c957c-f2c2-4177-8fe3-81bf751a4b20)

## Initial sketches 

### ITF card on MyVA
This is where we began. The claim card pattern is currently used in the Benefit Applications and Forms section at the bottom of MyVA to display incomplete ITFs. While there are a few elements that may need updating, it was encouraging to see that we already have a foundation to build upon. 
![CleanShot 2025-06-08 at 22 59 36@2x](https://github.com/user-attachments/assets/c649033e-97d2-4704-8a1e-ee5fdd01fca3)

### ITF card layout and content (Where we are now)
We are currently exploring the empty state and the single active ITF because we felt that these represented the two most foundational experiences—the educational introduction for new users and the core functionality for Veterans with an existing ITF. These two scenarios likely cover most Veterans and do a great job establishing the fundamental design patterns and content framework we will extend to the other scenarios. [View in Figma](https://www.figma.com/design/ZLDFINlvw5skb6ckTT9skw/Intent-to-File-in-CST-%C2%B7-BMT?node-id=201-192&t=z4CI7BMkcO58QHPb-1)
<img width="1980" alt="ITF sketches V1" src="https://github.com/user-attachments/assets/d4748957-9331-42a6-b56b-654c17d55de1" />

## Next steps
Continue with card content and UI designs during Sprint 21 so we have covered the following scenarios:

* Veteran with an active ITF
* Veteran with multiple active ITFs
* Dependent with active ITF
* Expired ITF
* No claims or active ITF

## Relevant background Information

### ITF submission flow
![ITF submission flow](https://github.com/user-attachments/assets/e7a7f4ba-6e4d-4cac-bc57-efbc5fb45ce0)


[ITF submission flow.pdf](https://github.com/user-attachments/files/20657590/ITF.submission.flow.pdf)



### Printing out a confirmation
Pain point: No visibility after submission. After successfully submitting the ITF online, you are taken to a confirmation screen where you can print a PDF. However, this opportunity is lost once you leave the page.
![CleanShot 2025-06-08 at 23 27 36@2x](https://github.com/user-attachments/assets/8a076aee-9580-417b-8df4-6422a9d2ad1c)

### Types of ITFs*
* Pension benefits
* Compensation benefits
* *DIC (Maybe a third benefit that you can request an ITF for?)

### Ways to request/create an ITF
* Submit the standalone Intent to File form (0966) to request an ITF for Pension and/or Compensation benefits
* Start a Disability claim (526ez) or Supplemental claim (0995) to create an ITF for Compensation benefits, if one is not already on file
* Start a Veteran's Pension claim (527ez) to create an ITF for Pension benefits, if one is not already on file

### Previous projects and research
* [Midpoint Review - Design Feedback - Lifestage Pension and Burial, Intent to File V1 #107932](https://github.com/department-of-veterans-affairs/va.gov-team/issues/107932)
* [Review intent to file language and check for consistency across forms and pages #73412](https://github.com/department-of-veterans-affairs/va.gov-team/issues/73412)
* [ITF Baseline Audit - Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-05%20Intent%20to%20File%20Audit.md)
* [Intent to File Research Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/6ee00a8be01e7dfcc406238da57eb704ff1b6374/products/disability/526ez/research/2024-02-ITF-Research/ITF-Research-Summary.md)
* [526ez Shadowing Veteran Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-11-Shadowing-Research/research-findings.md)
* [Intent to File Comprehension: Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-10%20Intent%20to%20File%20Comprehension/research-findings.md)
* [User experience issue: Intent to File in CST #49151](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49151)



