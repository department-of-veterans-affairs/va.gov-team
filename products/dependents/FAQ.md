# FAQ for Dependent Management on VA.gov

## General FAQ
<details>
<summary>What benefits do the 21-686c, 21-674, and 0538 impact?</summary>

- 21-686c: Disability, pension, and DIC benefits
- 21-674: Disability, pension, and DIC benefits
- 21-0538: Disability benefits only (David Reis on 6/23/25)

What is the difference between DIC and Survivor's pension:
- DIC can be thought of as closely aligning with disability.
   - The veteran must have died while on active-duty or from a service-related issue.
   - It is tax free the same way as disability
   - Benefits received does not appear to be based on income/need
   - Remarried spouses may still receive DIC
- Survivor's pension aligns more with veteran's pension
   - It is an need-based program based on income/assets for unremarried spouses or unmarried children
   - The veteran does not have to have died of a service-related injury but they must have served during specified war times
   - Benefits may or may not be taxed based on recipients income
   - So they are separate and active programs. Still not clear why they share the same application form but the survivor's pension may require additional forms
   - Dependents affect the rates for both
- Summary from SME (Jennifer Feuer)
   - DIC is a service-connected benefits where a survivor gets a flat monthly rate if a Veteran died from a service-connected disability. It's actually a comp benefit that P&F manages. It's paid out of the Comp Service funds. Pension and Suvivors Pension are for Veterans or survivors of Veterans who served in war time periods (and a few other caveats) and who have an income and net worth below a certain amount
   - There is also Parents DIC, but that's an income-based benefit that always requires a manaul review bc it's so wonky and rare 

Source: [Amy Grace Wells, July 2025](https://dsva.slack.com/archives/C07RB9N9M6J/p1752781387946729)
</details>

<details>
<summary>Are there instances where VA.gov should prevent a Veteran from submitting a 686c or 674?</summary>
 
  - The VA never wants to prohibit submission because there is no ITF for dependents. It is important that we accept anything and then develop the claim to determine eligibility.
  
  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH79a07999e16d498498308b685)
</details>

<details>
<summary>How common is fraud?</summary>

  - The VA tries to avoid referencing "fraud" because it implies intent. Typically, over- and under-payments are caused by a simple oversight by the Veteran. Divorce is the largest cause of benefit over-payment. There are some cases of actual fraud, but it's extrememly rare.

[Source: David Reis 6/5/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHfed5ed6709ab4141a0fa089ae)
</details>

<details>
<summary>Why are there questions about pension income in the VA.gov 686c form that are not on the pdf?</summary>

  - The pension line of business requested that VA.gov add two pension-related income questions to the online form flow, so that RBPS can auto-process some 686c claims that impact pension. A complete outline of the questions and functionality can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/pension_income_questions.md). Note that the net income limit changes every year and is typically finalized in October and needs to be updated on VA.gov by the end of November each year. Source: Jennifer Feuer
  - In cases where RBPS requires info not currently on the form, VA.gov should put the data in the JSON for RBPS and leave the data off the pdf bc not all forms have a remarks section we can use for this type of info. Source: David Reis (July 2025)
</details>

<details>
<summary>What is the EP code for dependency claims?</summary>

  - All dependency claims that come into the VBA are assigned an [end product](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000036570/Appendix-C-Index-of-Claim-Labels) (EP) of 130 (EP130).

  Source: Brandi Traylor (email) 8/11/23
</details>

<details>
<summary>Why are dependent names in ALL CAPS in our app? Can't we change it?</summary>

  - We get the names passed to us from whatever data source they're stored in all caps. And we can't transform them on our end because that's too hard to do with names. For example, names like DeShaun, A'ja, Mo'Nique would be improperly transformed.

</details>

## Claim Processing
<details>
<summary>How long does it take to process a 686c claim?</summary>

  - It's hard to give an estimate because every claim is different.
     - If a claim is manually processed through a field station, it might not be distributed right away if there is a queue of claims.
     - If a claim is missing evidence, it can take up to 30 days if the VA needs to send a development letter to the Veteran. A processor may also call the Veteran.
     - Worst case scenario: A claim needs to go through an administrative decision where a full write-up takes place.
     - If a claim is automatically processed through RBPS, it could be processed in as little as 30 minutes

[Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH401b216fab3946bf86d22a9d5)
</details>

<details>
<summary>Where are 686/674 claims with foreign addresses processed?</summary>

  - Mail Automation Service (MAS) with the Office of Business Integration (OBI) confirmed that any form received with an address of APO/FPO received by Mail Automation will receive the foreign address flash that routes it to the Pittsburgh Regional Office if additional actions are required (process claim for compensation, dependency, pension, etc.).

  Source: Mindy Hope (via email) 8/4/23
</details>

<details>
<summary>Why does VA.gov off-ramp some 686/674 claims before they go to RBPS?</summary>

  - RBPS processing volume is limited, so the original implementation of the online 686/674 form on VA.gov off-ramped some specific claim types that RBPS cannot process automatically. This prevents the claim from going through RBPS only to be off-ramped. Instead, VA.gov adds a manual "flag" to the claim that is read by BGS/BEP, and BGS/BEP then sends the claim to the manual processing queue. For a complete list and more information see [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/RBPS-offramp-scenarios.md).

  Source: Elizabeth Reeher (Team chat with Kevin Schneider) 5/15/25
</details>

<details>
<summary>What is RBPS' processing volume?</summary>

  - RBPS production processes every 30 mins at the top/bottom of the hour. 4 servers, 50 claims per server = 200 claims every 30 mins. Even if those 200 claims take 15 minutes to run RBPS cannot then run more claims in the remaining 45 minutes. VA.gov sends 60-ish 686 or 674 claims to RBPS per hour, but it's unknown how many paper claims RBPS may process.

  Source: Linda Ciston, 2024
</details>

<details>
<summary>Should ssn and file numbers be the same?</summary>

  - In most cases, they will match, however, there are a few exceptions:
     - There are four or five variations of what a file number might be, and only one variation would match SSN. Depends on the age of the Veteran and when they served. This is less and less relevant, it was mostly before the Vietnam era that the numbers deviated.
     - MPI includes file number, SSN, EDIPI, PID...tries to associate all of these to the Veteran. For older Veterans, the numbers may be different. There’s an effort to clean up the MPI, millions of records aren’t associated with the correct file number or SSN and it's common to run into problems with mismatches.

  Source: [Discussion with SMEs and Julie Strothman on 9/5/23](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64138#issuecomment-1707241515)
</details>

<details>
<summary>What happens if a dependent claim is submitted with missing evidence?</summary>

  - The claim would be established and go through manual processing.

  Source: [Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH79a07999e16d498498308b685)
</details>

<details>
<summary>Is the Veteran notified once their 686/674 or 0538 claim is processed?</summary>

  - The Veteran receives a letter when their 686/674 claim has been decided.
  - The Veteran does not receive any notification once their 0538 has been processed.

[Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHc8a55731c6534fa78706b8024)
</details>

## Removing a Dependent (686c)
<details>
<summary>Are there scenarios where a dependent removal would be denied?</summary>

- If the Veteran tries to remove a dependent for a non-legal reason, the removal will almost always be denied.
   - Some Veterans try to remove a spouse before the divorce is finalized. Some just don't want to take money from the government. Some don't want a service-connected benefit bc they are looking for a certain type of employment.
   - Legal reasons include divorce, when a child leaves the household, when a child gets married, when a dependent dies, etc.
- By regulation, the Veteran cannot renounce part of their benefit -- they must receive the full benefit they are entitled too

[Source: David Reis 7/21/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHed35c71c3a524d11b3bdf3548)
</details>

## Marriages
<details>
<summary>If a Veteran already has a spouse listed as a dependent and they try to add a new spouse, what happens?</summary>

- The Veteran is required to tell the VA if the status of their current spouse changes (e.g., death, divorce, etc.).
- When adding the new spouse, the Veteran will be asked about prior marriages and the date those marriages ended.
- If the Veteran got divorced in November, they'll see a change to their benefits starting December 1.
- When a Veteran reports a dependent change matters. If a Veteran waits more than a year to notify the VA of a new dependent, the VA will not backdate benefits to the date of marriage (or birth). Instead, the VA will backdate benefits to the date the 686c was submitted to add that dependent.

[Source: David Reis 6/5/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH96b7ecef31cb4669b0377b506)
</details>

<details>
  <summary>Why does the 686c ask for the Veteran's and current spouse's previous marriage history?</summary>

  - VETERAN/CLAIMANT'S PREVIOUS MARITAL INFORMATION – All previous marriage information is required by regulation ([38 CFR 3.205](https://www.ecfr.gov/current/title-38/chapter-I/part-3/subpart-A/subject-group-ECFRdc46cfd3b31f77a/section-3.205))
  - CURRENT SPOUSE'S PREVIOUS MARITAL INFORMATION - All previous marriage information is required by regulation ([38 CFR 3.205](https://www.ecfr.gov/current/title-38/chapter-I/part-3/subpart-A/subject-group-ECFRdc46cfd3b31f77a/section-3.205))

 Source: David Reis (email) 8/20/24
</details>

<details>
  <summary>Is a marriage license or a church record of marriage required for a ceremonial or civil marriage if the Veteran indicates they live on a U.S. military base?</summary>

  - No. The marriage would be considered as happening within U.S. jurisdiction. It should not be required, but it could be helpful to submit, so it should be optional.

 [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHde8d68f8e4f3443e8c57feb56)
</details>

<details>
<summary>Can two married Veterans, each with their own disability, claim the same child on their benefit?</summary>

- Yes. They can also claim each other as a spouse.

[Source: David Reis 7/21/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHafe15985a8094ad1a8faca2c8)
</details>

## Parents
<details>
<summary>Does a dependent parent need to live with the Veteran to be eligible to claim as a dependent?</summary>
 
  - No --> The relationship to the Veteran and financial need are the only consideraions.
 
  [Source: Kevin Schneider 5/25/25](https://dsva.slack.com/archives/C0547Q0K0LF/p1748010216569389?thread_ts=1747326863.342889&cid=C0547Q0K0LF)
</details>

<details>
<summary>Can more than one child claim a parent on their disability or pension benefits??</summary>
 
  - Yes --> The relationship to the Veteran and financial need are the only consideraions.
 
  [Source: Kevin Schneider 5/25/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHe5c254e9532c42d1a52cdf84d)
</details>

<details>
<summary>How are dependent parents managed?</summary>
 
  - 18,869 Veterans have dependent parents on their awards, which is 0.30% of the roughly 6.4 million Veteran awards. [Source: David Reis 7/8/25](https://dsva.slack.com/archives/C0547Q0K0LF/p1751922850588639)
  - Adding a parent: The [21-509 form](https://www.va.gov/find-forms/about-form-21p-509/) is used to add a dependent parent to a Veteran's disability or pension benefit. [Source: David Reis 7/8/25](https://dsva.slack.com/archives/C0547Q0K0LF/p1751922850588639)
  - Removing a parentt: The 21-686c allows Veterans to remove a parent due to death, but there is not a form-based way to remove a parent for another reason. Veterans need to call the VA. [Source: David Reis 7/8/25](https://dsva.slack.com/archives/C0547Q0K0LF/p1751922850588639)
  - Verification: There is not a form-based way to verify a dependent parent on a Veteran's pension or disability benefit. Removal is usually due to death. The probability of another type of removal was so low, it was not included in the 21-0538. [Source: Kevin Schneider 5/25/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHc46b51e2bca243209f09b5fc8)
</details>

## Children
<details>
<summary>How far ahead of time should VA.gov warn Veterans that their soon-to-be 18 year old or 23 year old will be removed from their disability/pension benefits (if they're not attending school or permanently disabled)?</summary>

  - The VA's practice is to accept school aged child 90 days prior to 18th birthday
  - The VA currently mails letters 60 days prior the child’s 18th birthday
  - A child is removed from the Veteran's benefits the day the child turns 18 or 23
 
  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHd9f38027b424457b993e86682)
</details>

<details>
<summary>What children can be added via a 686c to a Veteran's pension or disability benenfits?</summary>
  
  - Bilogical children, step-children, and adopted children
     - The step-child's relationship to the Veteran is tied to the current spouse. If there is no current spouse then there is no step-child relationship that exists any longer. 
  - Foster children cannot be added (not recognized under [38 CFR 3.57](https://www.ecfr.gov/current/title-38/chapter-I/part-3/subpart-A/subject-group-ECFR2f2f66751230c72/section-3.57))
  - [Rules and definitions](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000176624/M21-1-Part-VII-Subpart-i-Chapter-3-Section-B-Biological-Children-Adopted-Children-and-Stepchildren?query=stepchildren#6) associated with biological children, adopted children, and stepchildren

  [Source: Kevin Schneider (Slack message) 4/28/25](https://dsva.slack.com/archives/C0547Q0K0LF/p1745847761380209)
</details>

<details>
<summary>What is the process for adding a child with a permanent disability?</summary>
  
  - A user cannot add a child as a helpless child until until the child has turned 18 (or 90 days before they turn 18)
  - The child must have become disabled prior to the age of 18
  - If a user submits a permanent disability claim too early,  we tell the veteran we can't work the claim. But, we set a diary to expire 90 days before 18th bday to work the claim, and reach out to the veteran at that time to get the ball rolling.  

  [Source: David Reis (Slack message) 8/18/25](https://dsva.slack.com/archives/C0547Q0K0LF/p1755526968940779)
</details>

<details>
<summary>Are stepchildren automatically removed when the spouse dies/divorces?</summary>
  
  - Yes
  - But, they are removed from the date the user stopped providing 50% of the child's support OR the divorce/death date of parent, whatever is earlier. 
    
  [Source: David Reis (Slack message) 8/18/25](https://dsva.slack.com/archives/C0547Q0K0LF/p1755526968940779)
</details>


## Students
<details>
<summary>What happens if  dependent child graduates school before they turn 23?</summary>
  
  - The Veteran needs to inform the VA that the child graduated before age 23 and they will be removed from the Veterans benefits.

  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH5e53b7be997648c5b62f716c3)
</details>

<details>
<summary>Does the Veteran have to wait until their child is 18 to submit a 674?</summary>
  
  - No. The VA's practice is to accept school aged child 90 days prior to 18th birthday.

  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHd9f38027b424457b993e86682)
</details>

<details>
<summary>Does a student need to be in school full time to qualify as a dependent?</summary>
  
  - No. There is no longer a time requirement to qualify as a school child. Any schooling hours qualify.

  Source: David Reis (Teams message) 6/30/25
</details>

<details>
<summary>Is attending an accredited school required to receive 674-related benefits?</summary>
  
  - The student needs to be in an accredited school, but the name of the school is no longer required on the 674 pdf (as of the Oct 2021 pdf). The VA takes the Veteran's word that the school is accredited.
  - Home schooling is allowed up to 12th grade but not allowed past the 12th grade.

  Source: David Reis (Teams message) 6/30/25
</details>

<details>
<summary>When should we warn Veterans that their soon-to-be 18 year old or 23 year old will be removed from their disability/pension benefits (if they're not attending school or permanently disabled)?</summary>
 
 - The VBA accepts school aged child 90 days prior to 18th birthday.
 - The VBA currently mails letters 60 days prior the child’s 18th birthday.
 - Is a child removed the day they turn 18 or 23?
    - Yes, the child’s date of birth

  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHd9f38027b424457b993e86682)
</details>

<details>
<summary>What are all the dates around school attendance used for?</summary>
 
 - Dependent benefits for students are only paid if the student is attending school continuously. For example, if you attend a spring term, the student has to also attend the fall term if they want to be paid for the summer "term".
 - The VA needs to establish date continuity, so it knows when to add the student to the benefit and when to take them off
 - School term information is typically not verified, so the VA relies on Veterans to be honest (e.g., the name of the school is no longer captured on the 674 form).

  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHd9f38027b424457b993e86682)
</details>

<details>
<summary>Can a Veteran add a student who hasn't started school yet?</summary>
 
 - Yes. The Veteran can indicate a future school start date and a VSR can add that child to the award.
 - The VA would send the Veteran a 21-674b form to confirm that the child started school on the date indicated.

  [Source: David Reis 7/21/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHf44cd0aab08a4e6e859573352)
</details>

<details>
<summary>Verification of school attendance...</summary>

 - From the VBA manual:
    - At least once each year, VA requires each beneficiary who receives additional benefits for a school child to certify the child is attending school and intends to continue doing so through the date school attendance is scheduled to end. VA does this by requiring the beneficiary to
       - complete and return VA Form 21-8960-1, Certification of School Attendance or Termination, or
       - provide the information the form requests to one of VA’s NCCs.
   - Important: If VA does not receive certification of school attendance, it may discontinue benefits payable to or for the child.

  [Source: David Reis 7/21/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH38c304d744c24d12a075f4eda)
</details>

## Survivors
<details>
<summary>What is the difference between DIC, Survivor's Pension, and Accrued Benefits?</summary>
  
  - DIC: Pension benefit. The Veteran has a service-connected disability. Death of the Veteran is service-connected. The beneficiary is only paid for DIC or Survivor's Pension (not both).
  - Survivor's Pension: The Veteran has a service-connected disability. Death of the Veteran is not service-connected. The beneficiary is only paid for DIC or Survivor's Pension (not both).
  - Accrued Benefits: If the Veteran dies before thier (disability or pension?) claim can be processed, their survivor can receive a one-time lump-sum payment of the benefit the Veteran was owed (once the claim has been processed).

  [Source: David Reis 7/21/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHb3af77c2332d4af2b4e2a325c)
</details>

## Verification
<details>
<summary>Why is the verification of parents not included in the 21-0538 form?</summary>
  
  - The probablilty is so low, the VBA decided not to include them.

  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHc46b51e2bca243209f09b5fc8)
</details>

<details>
<summary>How often should VA.gov alert Veterans to verify their dependents?</summary>
  
  - Kevin indicated that opinions may differ, but he suggested once per year. For Veterans that do not log into VA.gov often, he suggested emailing them a notification after 2 years of inactivity.

  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH2e3686d5b0684854ba5feaea3)
</details>

<details>
<summary>How often do Veterans have to verify the dependents on their disability benefits?</summary>
  
  - The VA requires Veterans to officially verify all the dependents on their disabilty benefits every 8 years, however, the VA would prefer that Veterans review their dependents at least once a year to ensure the dependents listed on their benefits are still accurate. The VA currently mails out [a letter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/Batch%20Dependency%20Verification%20Letter_Redacted.pdf) to Veterans every 8 years that lists all the dependents currently on their disability benefits. The letter asks the Veteran to confirm the dependents listed are correct and a copy of the 21-0538 form is included with the letter.

  Source: Kevin Schneider 2024
</details>

<details>
<summary>How are dependents on DIC verified?</summary>
  
  - Surviving spouses verify their marriage status through the 21p-0537 form.

  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHe0c03e899c7241669051be289)
</details>

<details>
<summary>What dependency changes most often lead to overpayments?</summary>
  
  - Divorce/death of spouse and removal of step children. Essentially any change to dependent status. More complicated cases involve other claim adjustments during the time period: retired pay, drill pay, increase or reduction in rate, multiple school children (adds multiple adjustments), pension adjustment related to income, removal of child receiving Dependents Education Assistance (DEA).
  - According to OIT’s Benefits Integration Services (BIS) Team, who run the Rules-Based Processing System (RBPS), the three most common dependency changes leading to overpayments are:
     - Veteran not removing spouse after divorce/death. This happens a lot, when they come in to add the new spouse, they realize they never removed old spouse
     - Removal of child or child stopped attending school
     - Veteran not removing spouse after divorce/death. This happens a lot, when they come in to add the new spouse, they realize they never removed old spouse
     - Also for removal of child or child stopped attending school. (VA.gov currently sets to manual because awaiting VA.gov changes for form changes that RBPS is ready for)

  Source: Brandi Traylor (email) 10/10/23
</details>

<details>
<summary>How are 0538 forms processed?</summary>
  
  - Mail Automation will open the 21-0538, “Status of Dependents Questionnaire” and confirm completeness of the form by verifying that the Veteran’s name, social security number, and file number are present. If any of those fields are missing, the form is considered incomplete, and an Incomplete Letter will be generated. If the Veteran’s signature is missing, the form will continue processing.If the Veteran indicates a change in the status of their dependents, Automation will check for a pending EP 330. If an EP 330 exists, Automation will cancel it (PCAN). Automation will proceed to check for a pending EP 130. If an EP 130 does not exist, Automation would establish the EP 130.If the Veteran indicates no change in the status of their dependents, Automation will check for a pending EP 330. If an EP 330 exists, Automation will clear it (PCLR). If an EP 330 does not exist, Automation will establish and clear it.If the Veteran listed any dependents on the form, Automation will search the Veteran’s VBMS profile to confirm that the dependents on the award matches the dependents listed on the form. If the dependents match, Automation will add and then clear an EP 692.If the dependents on the form do not match, then Automation will add the appropriate contentions, establish the appropriate EPs, and add any special issues required.

  Source: Kevin Schneider 2025 and again by David Reis in July 21, 2025
</details>

<details>
<summary>Could the 0538 result in a development letter?</summary>
  
  - Yes. The paper form cannot force answers, so the VA may need more info from the Veteran if they fail to fill out parts of the 0538.
  - It's often up to the VSR whether the Veteran receives a development letter or a due process letter. A due process letter informs the Veteran that their dependents will be removed from their benefit if they don't respond.
  - Typically, the Veteran has 30 days to respond to a development letter and 65 days to respond to a due process letter.

  Source: [David Reis 7/21/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH858fe365bc6e4ebebb90736d7)
</details>

<details>
<summary>Does an address change in 0538 push to VA Profile?</summary>

  - No. The address is only used to process the 0538 (to locate the veteran record) and any changes do NOT propogate to VA Profile. As a FYI, any changes that do propogate to VA Profile should happen within seconds.

  Source: Mindy Hope (via email) 8/4/23
</details>

## APIs
<details>
<summary>What is the API that pulls in list of active and inactive dependents on the "View My Dependents" Page?</summary>

  - [API Documentation](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/dependents_applications/getDependents)
  - [Mock data](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/dependents/dependents-verification/tests/e2e/fixtures/mocks/mock-dependents.jsonc)
</details>
