# **Landscape Analysis of the VA's Dependent Management Process for Disability Compensation**

*AI disclosure: Gemini used to summarize the high-level findings from the [mural workshop](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755642960566/2825754c5b58bb972a5a7f5a594b46d982e2ad58). Accuracy checked and verified (any any inaccuracies fixed) by Kristin Ouellette on 9/9/25.* 

**Note**: not yet included in these findings is “what happens when a veteran dies” re: dependents on their disability award. We will update this doc when we learn more about that part of the process.

## **1\. Process Overview**

Dependent management on disability compensation can be divided into two interconnected operational tracks: the initial claim, and ongoing management throughout the life of the benefit. 

1. The **initial claim** process occurs when a veteran files for disability compensation (form 526\) and simultaneously adds dependents (form 686c), or adds them within one year of the benefit award.   
2. The second track encompasses all **subsequent changes**, including adding, removing, or editing dependent information after the initial award has been granted.  

## **2\. VSR-focused User Journey**

### **2.1 [The Initial Disability Claim with Dependents](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755642960566/2825754c5b58bb972a5a7f5a594b46d982e2ad58?wid=139-1755642988275)**

<img width="1901" height="799" alt="Screenshot 2025-09-09 at 4 03 09 PM" src="https://github.com/user-attachments/assets/f28ca878-26d6-4838-b5db-c3102a5ae1a1" />


The process for a veteran receiving disability compensation with dependents begins when they submit the 21-526EZ application for disability. The veteran may use the 21-686c or 21-509 forms to request dependents at this stage, or they can wait until they receive a disability rating of \>30% to add dependents. ![][image1]

Because all dependency claims for first-time disability applicants can only be processed manually after a ratings decision of \>30% is granted, most users will get a change in payments several months after their first payments start, once the dependents are added. 

**Key Findings that our team CAN impact:**

| Finding | Recommendation |
| :---- | :---- |
| It benefits veterans to submit their initial 686c/509 soon AFTER they receive their ratings decision, because RBPS can only automate the form if the user has a rating of \>30%.  If a user submits their 686 before or at the same time as 526, it will go into manual processing after the 526 is decided, which will result in a delay in payments.  | Add this detail to content on [VA.gov](http://VA.gov), so that users understand when they should submit the 686c/509 for the quickest result And/Or Add automation in VBMS to resubmit the 686c to RBPS if it is on-hold, but the 526 has been processed and the rating is \>30%.  |
| If a veteran spouse has a serious illness/disability that requires nursing or home health care, they can get extra $$ per week on their payments (called ‘aid and attendance’).  None of our dependents forms or content mention this, which could result in veterans missing out on money they are eligible for. | Add Aid+Attendance info to [va.gov](http://va.gov) static content.  Add Aid+attendance info to our digital form experiences where appropriate, so that we can route users to the forms required to activate this part of their benefit |

**Key Findings that our team CANNOT impact:**

| Finding | Recommendation |
| :---- | :---- |
| An initial 686c claim in the Claim Status Tool doesn’t have much helpful information (ex: which dependents were included, what evidence was provided,etc).  | CST team should consider how the dependency claim could best be represented in the CST.  The dependency claim should probably be linked to the disability claim in CST |
| The initial decision letter and dependent award letters are written with long paragraphs of legalese, and poorly designed/confusing tables | Whoever owns the letters should take a HCD approach to them, communicating key info about dependents, managing dependents over time, and the impacts of the dependents on the payment |
| VBMS, [VA.gov](http://VA.gov), and UD-O all model dependent objects differently in their systems, which can lead to confusion when communicating about problems | Align the dependent objects in VBMS, [VA.gov](http://VA.gov), and UD-O to use similar terminology, structure, and hierarchy to ease communication (except when we need to show meaningful differences in info across the platforms) |

### **2.2 [Ongoing Dependent Management](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755642960566/2825754c5b58bb972a5a7f5a594b46d982e2ad58?wid=35-1755642988275)**

Throughout the life of a veteran's disability award, changes to their dependent status can occur and must be managed. The process for managing these changes is a hybrid of manual and automated procedures. 

The primary categories of change include: 

- veteran-driven manual entries  
- VA-automated changes when a child turns 18 or 24  
- automated changes when a dependent dies, which the VA is notified of via a Social Security Administration (SSA) Death Match (for dependents who have a SSN, or a SSN on file, which has only been required on digital forms more recently)

<img width="787" height="930" alt="Screenshot 2025-09-09 at 4 03 42 PM" src="https://github.com/user-attachments/assets/9fc4ca52-14c5-44e7-9f37-e1cba1783e82" />

**Key Findings that our team can impact:**

| Finding | Recommendation |
| :---- | :---- |
| Our digitized 686c/674 form cannot be processed by RBPS, which means they are all going to manual, which takes 4ish months | Do needed backend work to allow combined 686c/674 to be processed by RBPS according to current rules |
| The VA has an automation to check the SSA (social security administration) database for dependent deaths This only applies to dependents who have a SSN on file with us (SSN requirement for dependents is more recent, and some dependents may not be US citizens) | Look at our data to understand how many users are submitting relevant forms (686c, 0538\) for deaths, to determine how to prioritize the death option in our flows and forms. |

**Key Findings that our team CANNOT impact:**

| Finding | Recommendation |
| :---- | :---- |
| Beneficiaries don’t reliably know which life events trigger dependent changes, don’t make the necessary updates, and go into overpayment. | Send targeted, personalized communications to beneficiaries educating them on life changes that could impact their specific dependents Not sure which team would own this – email comms in particular |
| The process for validating dependent deaths requires manual work, increasing processing time and leading to even more overpayment due to delay | Policy – in the case of a dependent death, allow a grace period of payments to continue for 2 months after the date of death. This would allow for more support for grieving families, and would allow the SSA database check to  And/Or Make the SSA database check and dependent removal fully automated and daily/instant, rather than relying on VSR input, which causes delay |

### **2.3 [The 8-Year Annual Verification Requirement](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755642960566/2825754c5b58bb972a5a7f5a594b46d982e2ad58?wid=146-1755642988275)**
This procedural step can be seen as a necessary but burdensome band-aid for a lack of user awareness about which life changes should result in changes to dependents on the disability benefit. 

<img width="1689" height="784" alt="Screenshot 2025-09-09 at 4 04 21 PM" src="https://github.com/user-attachments/assets/60082f5c-4ca3-4128-96dd-aba6724744b7" />


**Key Findings that our team can impact:**

| Finding | Recommendation |
| :---- | :---- |
| Verification for the disability benefit is more flexible than just submitting the 0538\. What the VA technically needs to verify is user assurance that each dependent is correct or not.  | We could reduce the burden of understanding the VAs form complexity but consolidating the 686/674/and 0538 into one front-end experience. Any time a user makes an update to a dependent, they would also be verifying the others.  To avoid overpayments due to manual delays in processing 0538s, we could also automate the Diary24 reset for each dependent directly, rather than generating an 0538\.  |
| Putting verification on [VA.gov](http://VA.gov) could make it easier for users to report changes, but we currently have no mechanism to drive users to verification on [va.gov](http://va.gov) – they just have to stumble upon it | Create a periodic email campaign to raise awareness about life changes that impact dependent eligibility, and how to avoid the Debt Disaster Scenario (not sure if this is our team or not) AND/OR Put some info about dependents on the disability/pension/survivor payment on MyVA so that users see who is on their benefits more frequently.  |
| Users receive no communications if verification is successful | Ask users whether they would prefer to understand the results of a successful verification and what it means for their benefit |
| David reported that, anecdotally, hundreds of users are put into 8 years of debt EACH DAY for not responding to the 0538\. But, he said this is difficult to measure today. | Given the catastrophic nature of this outcome for veterans, what analytic tools can we set up to be able to better measure the size and frequency of this problem? |

**Key Findings that our team CANNOT impact:**

| Finding | Recommendation |
| :---- | :---- |
| There is no one consistent procedure for VSRs to reach out to veterans that did not respond to verification within 90 days. This leads to different veterans getting more or less support in navigating this. | Codify a minimum number of outreach attempts/types for each debt disaster scenario. |

## **3\. Appendix**

**3.1 Dependent changes that could result in removal, a decrease in payments, and overpayments (if not reported)**

- The parenthetical includes the form or process a veteran can use to remove/edit them

| Spouse | Child | Parent |
| :---- | :---- | :---- |
| Death (686c, 0538, SSA automation) | Death (686c, 0538, SSA automation) | Death (686c, SSA automation)  |
| Divorce (686c, 0538\) | Divorce (stepchildren only)(686c, 0538\) | Increase in net income (509) |
| Change in Aid and Attendance (they got healthier and dont need it anymore, or need it less) (2660, 0779\) | Left school (if 18-23 and was previously enrolled in school)(674) |  |
|  | Turned 18 (VBMS  automation) |  |
|  | Got married (686c, 0538\) |  |
|  | Adopted out of family (686c, 0538\) |  |
|  | Stepchild left household for reason other than divorce (like went to live with other bio parent) (686c, 0538\) |  |

**3.2 Dependent changes that could result in need to add dependent (and an increase in monthly payment amounts)**

- The parenthetical includes the form or process a veteran can use to add/edit them

| Spouse | Child | Parent |
| :---- | :---- | :---- |
| New marriage (686c) | Birth or adoption (686c) | Moves in with claimant or claimant is now paying a lot of their expenses (509)  |
| New aid and attendance needs (they got sick or sicker and need nursing care/home health aide) (2660, 0779\) | Student 18-23 starting or re-attending school (674) | Decrease in net income (509) |
|  | Turned 18, and  is permanently disabled (686c) |  |

**3.3 Other evidence required for adding dependents**

**If you live outside the US**: birth/marriage certificates

**If you adopted a child or married someone with an adopted child**: adoption stuff

**If your child is permanently disabled before they turn 18**: medical records, doctor statement

**If your child is 18-23 in school**: 674

**If your marriage is common-law**: 2x form 4170s, 2x form 41712

**If you have a tribal ceremony**: Various signed statements, no specific form

**If you have a proxy marriage**: whatever documentation you have

**If your spouse requires aid and attendance** (nursing home or home health aide): 2680, 0779

**3.4 Sources**

- [VBMS claims flow mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745620624724/70ee36c200a3b66b426c33aa189dcdcc5a4a0192?wid=0-1754267332020), created and maintained by the Disability team (must be on network to access)  
- [Old user journeys re: disability](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745620624724/70ee36c200a3b66b426c33aa189dcdcc5a4a0192?wid=0-1754088736626)  
- [VA.gov](http://VA.gov) veteran-facing information on disability and dependents  
- [Examples of decision letters](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755642960566/2825754c5b58bb972a5a7f5a594b46d982e2ad58?wid=204-1755642988275) from youtube and internal SMEs (with dummy data, not real veteran data)  
- Screenshots from staging of dependency claims within the [Claim Status Tool](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755642960566/2825754c5b58bb972a5a7f5a594b46d982e2ad58?wid=207-1755642988275)  
- [Example letters sent to the veteran about dependency](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755642960566/2825754c5b58bb972a5a7f5a594b46d982e2ad58?wid=0-1755727003767), from SME David Reis  
- [A validation conversation with our SME](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755642960566/2825754c5b58bb972a5a7f5a594b46d982e2ad58?wid=0-1755643176571), David Reis, on 8/21/25  
  - [Recording](https://teams.microsoft.com/l/meetingrecap?driveId=b%21rLzg_8VWBUSz9ftm5cK3USu6MF2KjMJDhsFYZt7C6uyyOwNduaSESqj52mMduDps&driveItemId=01NKMQ7SXOFXQPCCDYOJG3AS2445EHLY55&sitePath=https%3A%2F%2Fdvagov-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fjacob_worrell_va_gov%2FEe4t4PEIeHJNsEtc50h1470BDGT1xIugPX8JeVgSTqDidA&fileUrl=https%3A%2F%2Fdvagov-my.sharepoint.com%2Fpersonal%2Fjacob_worrell_va_gov%2FDocuments%2FRecordings%2FDMT%2520and%2520OBA%2520Weekly%2520Check-in%2520w%2520David%2520Reis-20250821_131512-Meeting%2520Recording.mp4%3Fweb%3D1&iCalUid=040000008200E00074C5B7101A82E00807E90819E0A1371A1ADADB010000000000000000100000001609427D219122409149F69226C32BD9&masterICalUid=040000008200E00074C5B7101A82E00800000000E0A1371A1ADADB010000000000000000100000001609427D219122409149F69226C32BD9&threadId=19%3Ameeting_MDQ3YzljNTctYWM1OS00ZjI2LWE0Y2QtYzc1NzYxNzY2ZGU0%40thread.v2&organizerId=663fae63-fa6a-4281-adaf-e181c7528282&tenantId=e95f1b23-abaf-45ee-821d-b7ab251ab3bf&callId=93a85b29-689e-48cb-8d4e-e8d7873c8490&threadType=meeting&meetingType=Recurring&subType=RecapSharingLink_RecapCore) (must be on VA network)

Details of the front and back-end process as our team ended up understanding it can be found in this [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755642960566/2825754c5b58bb972a5a7f5a594b46d982e2ad58?wid=139-1755642988275), which we will maintain as our source of truth for understanding how dependents are managed over time by the veteran and the VA.

**3.5 Definitions**

**VSR**: Veteran Service Representative – the VA-employees that work different claims

**EP**: [End Product](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000011474/Appendix-B-End-Product-EP-Codes). This is the system-oriented word for a specific type of claim. For example, an EP 130 is attached to a claim for adding a dependent.

**RBPS**: Rules-based processing system that automates the processing of simple dependency claims.

**BEP**: Benefits enterprise platform. Enterprise architecture system that delivers web-based services for various business systems at VA.

**“Debt disaster scenario”**: When a veteran doesn’t respond to the VA’s request to verify their dependents (currently via paper 0538 form mailed to veteran, but our team is working on a digital version), the veteran owes the VA up to 8 years worth of payments for those dependents – typically $10k-20k.
