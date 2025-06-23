## CHAMPVA biweekly stakeholder sync
Every other Tuesday at 10:35am ET

## **04/29/25s**

**Attendees:** Angela C., Angela P., Arleen, Ballard, Joie, Premal, Misty, Amanda, Jamie, Rachel P., Andrea, Renata

**Agenda**

* Discuss 180 day claims backdate rule
* Review Medicare Part C data collection


**Updates from Premal**

* We’ve paused CHAMPVA Claims because of the send back rate
* Confirm with Joie that send back rate with paper forms is around 50%
* Currently the UX team is looking at ways to improve the process, will discuss more during tomorrow’s claims call


**180-day claims backdate rule**

* Jamie shares the Figma mocks for the CHAMPVA Claims for, explains the screener questions for reducing duplicate submissions and claims resubmissions, as well as claims for individuals who are enrolled but waiting for their packet. 
* What is the effective date? From the service blueprint, we understand that step is late in the application process. 
    * **Eligibility date** the date VBA determines a Veteran is TNP and eligible to enroll in CHAMPVA (note that there is often a gap between this eligibility date and when a user is enrolled)
    * If married or had children, the **qualifying event date (QED)** is whenever the bene became eligible (AFTER sponsor's eligibility date)
    * The **date on the A card** is the date CHAMPVA confirmed eligibility when reviewing the 10-10d
    * Users have 180 days from the date on the card to submit any claims for service from the eligibility or qualifying event when they were technically eligible but not enrolled in CHAMPVA
* For claims after enrollment date on the A card, users have 1 year from the date of service in which to file a claim
* What goes out to new enrollees?
    * Authorization card
    * Pamphlet with guidance around Medicare B
    * VA letter
    * A guidebook can be requested, but they do not mail that out automatically
        * Guidebook is online and the letter contains the link to access it
        * Currently in the process of updating the guidebook
* Angela to provide a dummy A card for reference


**Medicare Part C**

* Right now, we only ask them to provide their Part C insurance carrier and effective date, and upload both original Medicare and Part C cards. 
* Does the user need to provide separate information for each plan?
    * Yes, sometimes Part A and B can have split effective dates. We need that information for each Part.



## **04/15/25**

**Attendees:** Andrea, Angela C., Angela P., Jamie, Gina, Elizabeth L., Ballard, Rachel P., Arleen, Renata, Amanda K.

**Agenda**

-   Review supporting docs inventory
-   Supporting docs questions


**Review supporting docs inventory**

-   Walkthrough of the spreadsheet and why we’re asking for this clarification
-   Updates to the inventory (captured below)
    -   High level: OHI Cert and Medicare are the most essential documents to provide, but other docs are potentially searchable in other VA programs like DEERS, Share and VBMS. There is always a chance the docs are missing, so we need to direct Veterans to go to their regional office to add dependents to their file to reduce erroneous denials.
-   Elizabeth notes most Veterans want to add their dependents when their benefits/ratings go up. We may want to add verbiage around adding dependents and spouse **before** applying for CHAMPVA.
-   Once a Veteran is in the system, their file never goes away — even a denial is established and retained, and updated as eligibility or beneficiaries are added/removed.
    -   The model is that the Veteran makes the dependent eligible.
    -   Most of the time it’s written on the paperwork if a dependent is natural-born or adopted.


**Supporting docs questions**

-   **School cert:** Required at the time of application.
    -   Q: Is that form/letter being updated?
        -   A: Angela P. is working on that but it hasn’t been sent in for updates. The verbiage for the school cert is the only thing being updated. It’s not really a substantial update.
    -   On the fact sheet/form: incorrect that the school has to submit the letter, the applicant can (and should) submit it, as long as the school cert is on letterhead and signed/dated by a school official.
-   **OHI Cert:** _every single_ beneficiary needs the OHI cert, it’s not one for the whole family
-   **Medicare:** Jamie explains the work we’re doing around the new L&L for the integrated 10-10d/OHI form
    -   Q: How often does someone 65+ eligible for Medicare without it (or only has Part A) who apply?
        -   A: It’s uncommon - most folks have both, or upload Part A only. They receive a denial if they do not provide evidence of both Parts A+B or the disallowance letter
    -   NB: At a recent event there’s confusion about not being able to have CHAMPVA if they have Medicare, period (repeat of what was discussed last week, but a good reminder that this is why we’re reviewing the Medicare L&L logic)
-   **Remarriages:** Remarriage cert required for a new sponsor -
    -   Q: If an applicant remarries a Veteran who is an eligible sponsor, do they need to send in a new marriage certificate?
        -   A: It’s very helpful, otherwise it has to be looked up in VBMS to confirm they’re eligible under the program
    -   Q: What happens if they don’t send it in?
        -   A: We go look in Share and VBMS, but if there’s no proof in those systems, the applicant isn’t eligible for CHAMPVA and they’re sent a denial. It still has to be verified.
    -   Q: What happens if an applicant doesn’t file divorce and remarriage papers but just reapplies?
        -   If those documents are in Share/VBMS and are updated in the system, it’s easy. This does happen all the time.
        -   Notes this isn’t a brand new app but technically is updating and adding to the existing file.
-   **Legal separation/divorce:** Form 684 could be in VBMS, but not necessarily.
-   **Birth cert for step children:** Required. The step-childrens’ address must be the same as the Veteran’s to be eligible. The birth date may or may not be available in VBMS.
-   **Adopted dependents:** Required. Adoption papers/birth cert (if available) must be verified. If the adoption papers aren’t available VBMS or Share, the dependent is not considered eligible.
-   **Natural born dependents:** Not needed if the dependent is listed in Share.
-   **Original marriage cert (if sponsor passed):** Not required, in VBMS
-   **VBA rating decision letter:** Not required, 99% of the time it’s available in VBMS

**Action items**

-   Finalize Medicare L&L based on updated eligibility information
-   Update and finalize supporting docs inventory (to live in team GH repo)
-   Consider content changes to the CHAMPVA application pages to address Medicare confusion (and how to add a dependent via VRO)
-   Scope/backlog exploration of a single OHI Cert per family rather than one form per person (Note: mocks of a potential solution were already completed [in Figma](https://www.figma.com/design/sSPoS7R9HE6ZlxRESRy2ms/Other-Health-Insurance-Certification--10-7959c--Form?node-id=710-22638&p=f&t=tbU5tkCrfvZwcw4P-0))

**For next meeting:** We'll need to talk about the open field text option for applicant relationship to sponsor. We are hoping to get paper/digital form on same page with VES. VES right now does not allow for free form text, but both paper and digital form do allow for it.


## **04/01/25**
Attendees: Andrea, Angela C, Jamie, Amanda, Elizabeth, Angela P, Rachel, Jina, Arleen, Premal, Renata, Mike, Erick, Ballard, Arleen, Alexandria

**Agenda**

-   10-10d/OHI merge
-   Supporting docs

  
**10-10d/OHI merge**

-   We heard when we worked on the claims form, that each applicant can have only up to two types of private health insurance. Do you know of any instances where people have submitted more than two, and what has happened?
    -   Applicants can have as many insurances as they want. 3 or 4 plans, or supplementary plans, are accepted. There's no hard and fast rules. Is it common to have more than dual coverage (2 plans)? No. But it does happen
    -   Re: when we heard this during earlier CHAMPVA claims calls: There's no limit; the most they've seen is 2 health insurances, that's the standard. Only seen 4 health insurances happen once in 18+ years
-   Medicare card uploads: the back of the red, white and blue Medicare cards contain the same information as the front. Do you really need both?
    -   Yes, that's standard in the health care industry. We need front and back for all Medicare cards
-   If applicants have Part C, do you need both the original Medicare card and the part C?
    -   Yes. This is to reduce confusion when processing applications/claims and reduce accidental denials.

 
**Request from CHAMPVA partners around the CHAMPVA application and OHI cert**

-   Just came from an event and a lot of beneficiaries were confused about needing to have Parts A+B in addition to everything else (required to be CHAMPVA eligible for ages 65 and older). But we want to make sure those 64 and under are not confused that this eligibility applies to them.
-   If you're under 65, you can have Medicare Part A, but it's not required to have it to be eligible.
    -   AI: Review content on [VA.gov](http://VA.gov) an ensure we're being super clear about this eligibility.
    -   AI: For ongoing 10-10d/OHI merge L&L discovery, review logic based on birthdate to add Medicare A+B so applicants under 65 are not being asked that question.


**Supporting docs**

-   Currently in the CHAMPVA application, there are some supporting docs that are optional that it may speed up processing to include. Should we make them required, or eliminate? (Rating decision, proof of remarriage, birth certificate for a child of the sponsor).
    -   Rating decision - not needed, remove
    -   DD-214 - not needed, remove (if still on the form)
    -   Birth certificate - optional, and keep optional
        -   Reasons for keeping optional:
            -   we'll check VBA if they've added that dependent to the VRO. If they haven't they're sent a letter to add that child as a dependent.
            -   Only needed for blended families (step-child or adopted). If they're already listed in Share as a dependent, there's just no need for that birth cert, only if they're not.
            -   **After discussion**: CHAMPVA partners are OK to remove the optional verbiage, BUT, if removing optional verbiage becomes a problem, we'll have a discussion to add back in.
    -   Proof of remarriage - required
-   AI: make a note of what happens for any document that is required and isn't submitted, to better understand how to separate "nice to haves" vs. "required" supporting documentation. To understand when something that's a nice to have is actually going to stop processing on an application.
    -   IVC team to send that list over (Angela C requesting to look at the list) and update the service blueprint to reflect these details


## **03/18/25**

### **Agenda**

* Review how contact information and addresses are used for the signer, sponsor and applicants  
* Review questions about supporting documents  
* Review how duplication ChampVA applications will affect the backlog

### **Contact information**

* Background: there are 3 user types who can fill out the 10-10d \-- the sponsor (Veteran), the beneficiary, and the signer (possibly a parent/caregiver who is not the Veteran, or a third party like an accredited representative/VSO)

|  | Signer | Sponsor (Veteran) |
| :---- | :---- | :---- |
| **Mailing address** | We want basic information on the Signer to verify who they are, will not be sending them anything through the mail, especially if they're a third party representative\* | Traditionally that would be if there was information that was for the Veteran-only. With the digital experience that doesn't really apply anymore. We aren't going to contact them, but we build a sponsor profile and that information is needed to verify the sponsor (sponsor profile is built first and then a beneficiary file underneath). |
| **Email** | Only reason we might contact the signer is if the application is incomplete or the applicants are incapacitated but that gets into POA stuff. | "-" |
| **Phone number** | “-” | "-" |

**\*Signer**

* Are we going to ask signers for proof of POA or similar? POA might be on file in VBMS, but these are brand new applicants whose POA isn't established in VBMS we're not able to take action on the application until receipt of POA.  
  * Unclear if ChampVA would reach out to the signer to request proof of POA if that wasn't found in VBMS.  
  * Current process is just to review to make sure there's a signature on the 10-10d at all (no current process to confirm POA).  
* What happens if an application isn't signed? Do you contact the Signer to complete?  
  * If an application isn't signed, there's part of a VistA flow where you mark "not signed" and a CCL letter is generated to send back. But the application is otherwise processed.  
  * "It needs to be input like you normally would and then instead of updating them (P\&T/PR) then you will send a CCL letter (CCL-B59-if an OHI cert isn't signed we need a CCL-A55)"

**Action Items**

* Determine if proof of POA is a showstopper and whether we need to revisit adding proof of power of attorney/power of representation and make that a gate on the digital form so signers can't proceed without proof.  
  * ChampVA doesn't have numbers on how big of an issue this is (can we request this post-meeting)  
  * Mocks were already made previously  
* Update service blueprint around unsigned application  
* Content updates  
  * Update content on Signer mailing address screen  
  * On signer email/phone number screen: "we use this information to contact you if we have more questions." this copy is wrong. ChampVA does not call, email or contact the Signer about the application, they contact the Beneficiary via letters.  
    * In instances where the address/contact information is not the same between the signer and Veteran/beneficiary, the mail goes to the beneficiary's address  
    * It sounds like there's an end goal on the ChampVA side to use email/contact info as a reachout process, but that's not going to happen until the backlog is moved through and ChampVA is transitioned off VistA to their new system.
