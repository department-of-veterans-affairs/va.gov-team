## Claimant Details
* [Claimant Details Figma](https://www.figma.com/design/APOPs9bzbrIcbKXjV8Xnu8/ARP-Claimant-Details?m=auto&t=n2YEACKkk3r6OCjd-6)
* [Super Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115187)

### Purpose and Background
This page is intended to provide representatives with a centralized view of essential information about a claimant, provided representation is on file (with the representative or one of the representative’s organizations).  We opted for a vertical tab navigation style, similar to the profile page on VA.gov. 

**Problem**\
In order to successfully manage the full cycle of the claims submission process, accredited representatives needs to be able to search for Veterans and other claims they represent and view basic details about the Veteran's representation and claims submission status.

**Why this is important**\
What's the significance and impact of solving this problem?
In FY 2023 78% of Veteran benefits claims were filed with an accredited representative on file.​ The VA is required to provide these accredited representatives and organizations with access to necessary claimant information, facilitate their representation efforts, and ensure proper notification regarding claims. This regulatory framework aims to support veterans in obtaining the benefits and services they are entitled to by ensuring they have knowledgeable and authorized representation.

***

### Design Rationale - September 2025

In our latest design, it includes: 
* Claimant contact information (from MPI)
* Current representation (available information from the API)
* Type of POA
* Representative
* VBMS e-Folder access, and Change of address authorization information
* Any recent representation requests (submitted via ARP)
* Current Intent to File (ITF) information, covering the following for the latest ITF: 
* Type 
* Creation date
* Expiration date
* Status
* ARP submission history for the claimant, modeled after the representative submissions table.

Launch options to submit these forms: 
1. Form 686
1. Form 526
1. ITF

The following features are intentionally excluded from the scope of this page:
Detailed claim status information

**Key decisions**
* We opted to use alerts sparingly, reserving the warning alert for situations when action is required, e.g, there is a pending representation request.
* We opted to include some content to explain “limited representation” since our research indicated that not all reps understand what this is in a VA context. 
* We opted to keep form download on the same tab as submit form links for now. We can envision a future state, especially if pre-fill is a possibility, where download forms is on a separate tab/page altogether. 

***

### User Requirements
1. Representatives need to view basic details about a Veteran's representation and claims submission status.
1. The portal should act more like a "one-stop shop" for Veteran information, including pending ITFs, pending claims, previously service-connected contentions, and denied contentions.
1. Representatives would benefit from knowing a Veteran's service-connected disability percentage or non-service connected pension status.
1. Flags for homelessness and financial hardship are important for prioritizing claims.
1. Representatives need access to necessary claimant information to facilitate their representation efforts and ensure proper notification regarding claims.

***

### Claimant Details User Testing Findings

**Improving the claimant page further**\
3/5 participants noted that more context about the Veteran would improve the usefulness of this page further. The portal could act more like a "one-stop shop" (P1) rather than having to go to VBMS.
\
“If it's kind of a one stop shop then you would want to know do they have an ITF pending? Do they have a claim pending? What information has previously been service connected? What contentions I should say have been previously service connected? And what have they been denied for?” (P1)\
“You know if the veteran has like a service connected disability, I don't even don't even need to know what it is... but it would be nice to have 20% service connected disability or veteran non-service connected pension since [insert date]...Flags for like homelessness, financial hardship, I think that would be very, very beneficial... it changes my priority of their claim.” (P2)
\
Recommendation
\
**Post first release:**\
Identify if we could add other Veteran characteristics to the claimant page that representatives continuously refer to, such as the Veteran’s disability rating or flags for expedited handling. 

Page | Recommendation
-- | --
Claimant page | Content recommendations include: * Change "General POA information" to "Current representation" and remove the note on general POA. Conduct some desk research on what we want reps to understand when it comes to the definition of limited POAs. Rephrase it in terms they will understand. * Change copy from "Recent representation requests" to "Your organizations' requests." Though we recommend this content change, we realize this change will likely not increase representatives’ understanding of what they are allowed to see.
-- | --
Claimant page | Add some information in Recent representation requests to identify that these requests only include requests submitted digitally through va.gov from the past 60 days.

[Source](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/research/2025-06%20User%20testing%20(Navigation%2C%20Find%20Claimant%2C%20Claimant%20Page%20to%20Submission)/research-report.md#Enable-multiple-options-for-submission-when-available)


***

### Open Questions

1. Is the current info architecture set up for future expansion? Does the navigation have room to grow?

***

### Research Resources
Meeting notes for historical context of design decisions/directions:
* [Slack thread on informing Reps about limited POAs. Limited vs. “unlimited” representation terminology.](https://dsva.slack.com/archives/C05SUUM4GAW/p1750863083283729)
* [Design notes from OCTO Sync on 9/2/25](https://dsva.slack.com/docs/T03FECE8V/F080T7389LG?focus_section_id=temp:C:DVD3d06009842f2422e89f82f732)
* [Design notes from OCTO Sync on 5/27/25](https://dsva.slack.com/docs/T03FECE8V/F080T7389LG?focus_section_id=temp:C:DVD665949c14d494916b075c0c49)
* [Design notes from UX Sync on 5/16/25](https://dsva.slack.com/docs/T03FECE8V/F080T7389LG?focus_section_id=temp:C:DVDd75586d989b64e67819fb2164)
* [Design notes from OCTO Sync on 5/13/25](https://dsva.slack.com/docs/T03FECE8V/F080T7389LG?focus_section_id=temp:C:DVDc77444e3a2c843c1a1d84a313)
* [Design notes from “Claims submission next steps” meeting on 5/5/25](https://dsva.slack.com/docs/T03FECE8V/F080T7389LG?focus_section_id=temp:C:DVD0a8547bd2fe243f0b1f0bfd8d)
* [Design notes from OCTO Sync on 5/1/25](https://dsva.slack.com/docs/T03FECE8V/F080T7389LG?focus_section_id=temp:C:DVD39d73ea1b03a48afbb83b5c7f)
* [Design notes from UX “Claimant page design sharing” 4/22/25](https://dsva.slack.com/docs/T03FECE8V/F080T7389LG?focus_section_id=temp:C:DVDaa00f40ba97049c7b8a7954fc)
* [Review of Northstar prototype 3/10/25](https://dsva.slack.com/docs/T03FECE8V/F080T7389LG?focus_section_id=temp:C:DVD69e28fa3f3c24ecc9ed3acbb1)

***
(End of Claimant Details rationale)
***
