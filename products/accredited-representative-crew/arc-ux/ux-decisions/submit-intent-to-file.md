### Intent to File (ITF) or Form 21-0966
* [VA.gov form location](https://www.va.gov/find-forms/about-form-21-0966/)
* [Form Questions](https://github.com/department-of-veterans-affairs/accredited-representative-crew/wiki/ARC-VA-Forms#itf-form)
* [ITF Figma](https://www.figma.com/design/bquNwm5cr9zHA6CARDuTXm/ARP-ITF-Form-21-0966?m=auto&t=hew9ncAQVGxWbiuz-6)

### Form Purpose and Background
The Intent to File is a crucial first step for veterans seeking to access benefits, as it helps establish a timeline for their claims process while they gather the necessary documentation for their full application.

1. **Purpose**\
The Intent to File form allows veterans to officially express their intention to apply for VA benefits, which can help preserve the effective date of the claim.

1. **Key Points**\
Preservation of Effective Date: Submitting an ITF can help ensure that the veteran's claim is considered from the date the ITF is filed, even if the full application is submitted later. This can be important for benefits like disability compensation.

1. **Timeframe**\
After submitting the ITF, veterans typically have up to one year to submit their complete application for benefits.

1. **How to Submit**\
Filing Options: Veterans can submit the ITF online through the VA's website, by mail, or in person at a VA regional office.

1. **Benefits of Filing**\
Protection Against Delays: Filing an ITF can help mitigate the risk of losing out on potential benefits due to delays in submitting the full application.

1. **Guidance**\
Once the ITF is filed, veterans can receive assistance from VA representatives in completing their application.

***

### Design Rationale - September 2025
**Problem** \
Representatives do not consistently file an ITF as early as they can in the benefits process, which prevents claimants from being paid benefits that they are owed. 

**Solution** 
To emphasize the ability to file an ITF as soon as POA is accepted. 

**What we initially tried (2024-2025 Contract Team)**\
We attempted to design for being able to file an ITF at the same time as POA acceptance. However, making those calls to accept POA and call LH API on ITF at the same time would increase latency and prevent a decent experience. Also, the individual who accepts POA may be different from the one who would file an ITF. 

**Current design decisions**
1. **Removing zip code:** The LH API does not need this to establish ITF or retrieve information on ITF. The reason for having this field on Simple Forms was to route to an RO, but that does not apply to ITF. So removing this increased efficiencies for reps. 

1. **From checkboxes → Radio buttons:** The question “What benefits are you applying for” was first a checkbox that allowed multiple selections, to mirror the form 0966. After discussing with Emily Theis, we decided to move to a a radio button because there would be none (or nearly no) case of selecting both compensation and pension at the same time. If a Veteran needed both, they would reenter this flow and submit another ITF. This also simplified the “post submit” states, which were using stacked alerts to address each ITF type. 

1. **Pre-fill representative email:** This reduces time for many reps while also giving them the ability to edit and enter an email that better suits their workflow

1. **Language around “We can’t confirm...”** This blue info alert is based off of the current (as of February 2025) disability team’s treatment of what could also be interpreted as an error. From the latest guidance on ITF across the platform, teams should include this phone number as a way to address the error. For pension especially, the maintenance windows will prevent users from retrieving information on whether or not a current ITF exists. That is why this is a blue info alert, as opposed to a red error message. The disability team noted that there was a red error state previously, but that is not used anymore. 

1. **Language around “This ITF will expire on March 6, 2026.** Submit the claim by this date to receive payments starting from your effective date.” Effective date is intentionally vague in this statement, because the effective date is not always the start date of the claim (that is our understanding). In many messages for ITF across platform, the term “effective date” was not used in the alert. 

1. **Pausing on non-Veteran claimant designs.** For non-Veteran claimants, the API still needs the claimant’s SSN and the 21-22 does not ask for a non-Veteran claimant’s SSN. Alex was going to look into seeing how this could be passed from the ARM team potentially, to prevent someone from entering the information and also keeping the information more secure

***

### Design Team Notes

**Key points regarding ITF:** 
* ITF was deprioritized due to higher priority forms (526 and 686).
* It's considered a simpler process than other forms, but still presents complexities in implementation.
* There are feasibility questions around pre-filling data for ITF, especially regarding claimant type (veteran or dependent) and what benefit they intend to file for.
* The team explored placing an ITF link on an accepted representation request page, but there's concern that representatives might not revisit that page.
* Alternative options for initiating ITF include the submissions page, with or without pre-fill capabilities.
* Ideally, a "Claimant Details Page" would be released before ITF, as it offers a better user experience by showing existing ITFs and facilitating pre-fill. However, releasing ITF first using the submissions page is being considered due to its high desirability.
* There are questions about API call error handling for ITF.

**Key points regarding Fuzzy Search:** 
* Fuzzy search has been enabled, but the UI for its functionality (e.g., how it corrects spelling or finds nearest options) isn't clearly shown.
* There's a discussion about whether fewer fields could be used for claimant search if fuzzy search is effective, as the current number of fields feels like "too much for people to enter."
* Examples show that fuzzy search can work even with incorrect first names or partially incorrect dates of birth.
* The team is unsure about the exact algorithm or documented rules behind fuzzy search.

**Research Ideas:** 
* Interviewing pilot participants.
* Understanding the workflow of claims agents and attorneys, especially in appeals.
* Broadening research on veterans' overall experience with representatives beyond selection.
* Shadowing representatives to observe their workflow and how they use competitor tools (e.g., Vetrospect, VetPro).
* Understanding what information representatives find valuable in the portal versus what they still need to access in VBMS, and what triggers them to use VBMS.
* Investigating why some representatives may not have access to VBMS or why access to printing/downloading documents has changed for newer representatives.

--------------------------------

### Claims Submission
* Defining scenarios for Non-Veteran and Veteran Claimant. (Slack thread)
* In order to make sure the Representative has POA with the Claimant, we will need:
    * First name
    * Last name
    * SSN
    * DOB
* Submitting meta-data about the Veteran as required by the Benefits intake API
    * List from product manager for Simple Forms:
    * veteranFirstName “Sidney”
    * veteranLastName “Gibson”
    * fileNumber “796127094”
    * zipCode “19801"
    * source “VA Platform Digital Forms”
    * docType “21P-0516-1"
    * businessLine “CMP”

**Non-Veteran claimant:**
* Non-Veteran claimant scenario
  * Claimant fields
    * First name (required)
    * Last name (required)
    * SSN (required)
    * DOB (required)
  * Veteran fields
    * First name (required)
    * Last name (required)
    * SSN (required)
    * Postal code (required)
    * VA file no. (not required)
    * Requirements (from PDF Upload Exploration)


***


### ITF Requirements (General)
Defining scenarios for Non-Veteran and Veteran Claimants to establish ITF
_(I (Laura P.) am not sure what data is required for the ICN, but I do know the POA information collected allows us to retrieve it) _

**Veteran claimant**
* Required information
* Veteran’s ICN
* Benefit type - Either compensation and/or pension

**Non-Veteran claimant**
* Required information
* Veteran’s ICN
* Benefit type - only Survivor’s Pension and Dependency and Indemnity Compensation (DIC) 
* Non-Veteran’s claimant’s SSN


**References**
* [Slack thread on 0966 pre-fill](https://dsva.slack.com/archives/C044AGZFG2W/p1730397899417049)
* [Slack thread on ITF dashboard errors](https://dsva.slack.com/archives/C04KW0B46N5/p1740685163284489?thread_ts=1740502699.458419&cid=C04KW0B46N5)
* [LH Benefits API](https://developer.va.gov/explore/api/benefits-claims/docs?version=current)


***


**ITF Requirements** (going from POA acceptance page -> Form, assume we can pass data through) \
**Veteran claimant**
  * Required information
    * Benefit type - Either compensation and/or pension

**Non-Veteran claimant**
  * Required information
    * Non-Veteran’s claimant’s SSN
    * This would assume that the Non-Veteran claimant would want to submit a Survivors Pension or Dependency Indemnity Compensation (DIC)


***


### ITF Requirements
(going from Submit forms page -> Form)

1. **Veteran claimant**\ 
**Required information**
    * First name
    * Last name
    * SSN
    * DOB
    * Zip code 
    * Benefit type - Either compensation and/or pension

2. **Non-Veteran claimant**\ 
**Required information**

   **Claimant fields**
    * First name (required)
    * Last name (required)
    * SSN (required)
    * DOB (required)

   **Veteran fields**
    * First name (required)
    * Last name (required)
    * SSN (required)
    * Postal code (required)
    * VA file no. (not required)

This would assume that the Non-Veteran claimant would want to submit a Survivors Pension or Dependency or Indemnity Compensation (DIC)

***


### Open Questions
Open questions from previous contract team --
* What can be prefilled for each flow presented?
* Would the information be populated from MPI or information that the Veteran completed from the form? 
* We made assumptions about what information could be pre-filled for each of these flows. We also learned that even pre-filling information from a claimant page would be challenging. The level of effort should be verified with engineers for either of these scenarios. 
* What goes into the representation request is what the Veteran completed from the 21-22, which may not be the same as what is in MPI.
* We are using the Benefits Claims API for the ITF; the other forms in ARP use the Benefits Intake API. 
* If there is an ITF flow that starts from the representation request page, can it carry over “relationship to Veteran” information? 
  * We learned later on that “relationship to Veteran” information was stored in a different database, and LH did not surface this. The level of effort should be verified with the engineers. 
* Does showing this feature on the request details, or on the claimant page, give it enough visibility to prove its value? 
  * The original Epic asks for representatives to submit an ITF as soon as they accept a representation request. While we learned we could not establish an ITF at the same time as accepting a representation request due to feasibility, we are also not sure that this design meets the request of the Epic. 
* If representatives should check first whether or not a Veteran has an ITF before establishing another, should our design focus solely on the solution from the claimant page? 
* If reps do and/or should check first (e.g., we want to reduce the number of ITFs placed on top of one another), we may want to rewrite this Epic so that this feature is shown only when a rep can see whether or not an ITF exists already. 
* What will the submission card for ITF look like? How will engineering track and show this data alongside the other submissions? 
  * Because the ITF is immediately established and does not have a confirmation number, the ITF card content on the “Recent submissions” page will look slightly different. 
  * Confirm with engineering feasibility and LOE
* What would the end state error message be for representatives?
* Currently it is based off Disability compensation team messaging. But it will need to be adapted for Representatives. 
  * What would we show on the Claimant page if no ITF is found?
  * We would need to update the language here to mirror the error messaging shown earlier

***

Questions/Concerns derived from UX Session - Oct 15, 2025

We call the API and do a GET to see if an ITF exists
We need an ICN to make the call, so the user would need to enter some claimant information to make this GET and understand if an ITF exists
  1. If one exists, what do we do?
    1. We inform the user ... do we allow them to continue to create another?
    1. If another is created, it’s a duplicate and we are not overwriting existing ITFs
    1. If they choose not to proceed and abandon the process because an ITF has already been created, no risks?
  2. If one does not exist, we do a PUT to create the ITF
    1. What happens if the GET fails and we don’t know if an ITF already exists?
      - On the Pensions side, they let folks keep going
      - We could possibly be transparent about the failure, to users
    2. Do we need to think about retries if the GET or PUT fail?
    3. Is this at risk for “Silent Failure”?
  3. In the past, the team decided not to retry because they’ll need to head down the path of notifying upon failures.
    1. Worth revisiting though with a fresh mind.
    2. Ideally, we establish ITF right away. But we need to be mindful of where the process can break.
    3. Current state of early backend implementation
        1. Create one (PUT)
        2. Check to see if one’s existing (GET)
        3. Very basic and was built early before even authorization was in place, more to build out
            1. Takes the ICN
            2. Doesn’t account for POA or claimant search



***

### ITF Research
* [Previous Team Workshop with Enablement](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1737572987013/2a2bc6e04b6228d29fdc2493ce4c48f26a580a01)
* [Mural ITF Audit - Veteran Experience](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1713384778236/cb7811f7fc7d62be8ebfcf962519f055c9df98e6)

* [ITF Baseline Audit - Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/f9b201fee7c20295509fdf8dc1e4a8f4932879af/products/pension/research/2024-05%20Intent%20to%20File%20Audit.md)

* [Intent to File Comprehension](https://github.com/department-of-veterans-affairs/va.gov-team/blob/f9b201fee7c20295509fdf8dc1e4a8f4932879af/products/pension/research/2024-10%20Intent%20to%20File%20Comprehension/research-findings.md)

***

(end of ITF rationale)

***
