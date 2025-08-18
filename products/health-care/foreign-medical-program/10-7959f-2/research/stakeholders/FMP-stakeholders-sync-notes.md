## FMP stakeholder sync
Every other Wednesday at 2:35pm ET

**8/13/25**
--------------------------------

Attendees: Andrea, Mike, Angela, Jennifer, Andrew, Premal, Nicole, Stephanie Slater

## **Agenda**

-   Status of FMP Claims
-   Discuss possibility of adding the FMP eligibility letter to VA.gov to save time for the enrollment team and veterans

## **Notes**
### FMP Claims Status & Fraud Prevention
- Update from Andy: Ongoing investigation into fraudulent FMP claims from international providers. Evidence shows providers are submitting reimbursement requests for more visits than the veteran actually attended.
- Discussion:
  - Short-term process: Users submit an application, and they receive an email confirmation of receipt.
- Long-term goal: Develop a health status tool to allow users to check enrollment and claims status, and view previously submitted claims.
  - First phase: ChampVA applications → then ChampVA claims.
  - FMP forms will follow later due to infrastructure limitations (e.g., VES integration not ready).

### FMP Claims Status & Fraud Prevention
- Premal’s input: Shared that the FMP team has a strong interest in making the FMP claims form available online, even if the direct deposit experience is not yet ideal. He has communicated this interest to OCTO leadership so they understand the urgency from the FMP perspective.
- Team decision: Keep release on pause until OCTO decides the best path forward, given previous efforts to improve the direct deposit user experience.
- Security decision: Lock down FMP claims to LOA 3 to ensure users are verified veterans.

### FMP Eligibility Letter on VA.gov
- Premal’s possible proposal: Generate the enrollment letter from IBA data.
- Andy’s update: The team has requested adding the FMP eligibility letter to VA.gov’s benefits letters and documents repository.
  - Process: Users select the letter, verify their address, and generate it with the most up-to-date data.
  - Benefit: Reduces workload for the enrollment team.
- Action: Andy will send a current copy of the letter to Premal for his discussions.
- Data request: Premal requested the FMP team start collecting impact data — e.g., average time to input a claim, application time, and other metrics to measure the current experience for both veterans and processing staff.

### Action Items
- Andy to send a current copy of the FMP eligibility letter to Premal.
- FMP Team to start collecting impact data on current claim and application processes.
- Premal to continue representing the FMP team’s interest in online claims form release to OCTO leadership.

### Decisions
- Keep FMP claims form release on pause until OCTO decides the path forward.
- Lock down FMP claims to LOA 3 for veteran verification.


**04/9/25**
--------------------------------

Attendees: Andrea, Rachel, Jamie, Mike\
Leticia, Richard, Angela, Jennifer, Andrew

## **Agenda**

-   FMP Claims launch update
-   Demo of the single document submission
-   Direct deposit touch base
-   Future opportunities – claims resubmissions, notice of enrollment/rejection via email

## **Notes**
### FMP Claims launch update
* Touched based on the launch Stages release. Tentative Launch date 4/20. Will adjust depending on the volume.
* From FMP: Can we share that we are launching with the VSOs? We suggested we announce it to them after 100%. Probably let them know it’s a mid may launch. 


### Demo of the single document submission
  * FMP was concerned about the file naming convention with PEGA. IVC will use the same naming convention that we used for all forms. IVC came up with the convention. 
  * Good feedback from FMP on the single file format \

### Direct deposit touch base
  * Go live will be with a small test batch on April 15th
  * May 18/19th will be the larger release
  * Mid June will be 100% released for EFT to Veterans with domestic Banks accounts. Foreign accounts will follow that but there is no set timeline as of now.
  * FMP will track how many payment EFT will going out to Veterans
  * We don’t have to update the content to match the staged release. We can keep the EFT info on it through the launch.
  * VBA vs VHA
            * VBA is what is on VA.gov
            * VHA is FSC (Financial Services Center)
            * IVC needs to confirm where they are pulling the banking info from
            *  On a Monthly basis FSC (VHA) will extract the database from VBA 
            * VBA is the Source of truth for back account


## Future opportunities – claims resubmissions, notice of enrollment/rejection via email
* Presented a high-level ideas for
    * Building UI and backend to handle Claims resubmissions: FMP will demo what the process looks like from their end and what is on the Sendback letter when we are ready to pursue that. 
    * Combining Reg and Claim in one form experience: No push back on that. FMP current process is built for it but we can enhance the UI for the users to send both at the same time. This is possible a lower impact one. 
    * Communicating Claims/Reg decisions via email: This would be very high impact and FMP is very interested. We will need to talk to Premal about coordinating with the other contractors that are working on their systems. 
  
**03/26/25**
--------------------------------

Attendees: Andrea, Rachel, Renata, Jamie, Mike\
Leticia, Richard, Angela, Jennifer, Andrew

**Agenda**

-   Share content updates to inform users about direct deposit
-   Discuss updates made from service blueprint workshop

**Direct deposit**
  - Updates: application is ready, no changes required. We need input on the FMP claims form so it's ready to launch in mid-May.
  -   FMP claims feedback: sec. 5 of 7 "Payment selection":

      -   For launch, update the content to let Veterans know direct deposit will happen if they have an account in their VA Profile.
      -   Post-launch, we'd like to populate the bank account information in the form itself, providing Veterans the ability to confirm their information is correct and/or update that information

-   FMP question: is this just for stateside bank accounts? (A: yes, this is to nest with phase 1, just domestic bank accounts)
-   FMP: Are there ways to put caveats on this screen? (A: yes)
-   IVC: if an individual doesn't have any bank account in VA Profile/nothing is established, will the Veteran still receive a paper check? (A: If a Veteran makes a request for reimbursement for themselves, it's 99.9% of the time they have a domestic or foreign bank account. Most Veterans in this program have SCD rating 10% or above so they'd already be receiving payments. In majority of cases, bank account is already in VA Profile via VBA payments and that's the information FMP will be using for direct deposit.

-   Direct deposit action items:
    -   Tighten up any language to be clear this really will not work with foreign bank accounts
    -   Add more context in content (consider possible error messages?). Make it clear paper checks are continuing for foreign bank accounts.
    -   FMP will send an invite to discuss parity between paper form and the new online experience (want the paper form to reflect any language on VA.gov)
    -   IVC team will sent screenshots of the final version before we go live

**Service blueprint updates**

-   Walkthrough of all updates to the blueprint

-   AI: update blueprint to note that the vast majority of Veterans have that bank account on file because they're 10% SCD or higher and already receive payments from VBA (see question above from direct deposit discussion).

-   Next steps: IVC will be examining the blueprint to determine any things we can do for post-launch improvements, will bring that to the next meeting
