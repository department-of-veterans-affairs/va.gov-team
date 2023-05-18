# MHV Medications on VA.gov Discovery Research Analysis 

**Office of the CTO - Digital Experience (OCTO-DE), Health Apartment, Medications**

May 18, 2023 

## Team 

Jenny Wang [yizhen.wang@va.gov], Coulton Bunney [coulton.bunney@va.gov], Katherine Lawyer [katherine.lawyer@va.gov] 

## Table of contents 
- [Research overview and goals](#research-overview-and-goals)
- [Research key questions](#research-key-questions)
- [Key findings](#key-findings)
- [Additional findings ](#additional-findings)
- [Recommendations](#recommendations)
- [Appendix](#appendix)
- [List of interviewees](#list-of-interviewees)

## Research overview and goals 

Pharmacy is one of the four primary pieces of functionality within My HealtheVet (MHV) Liferay. As the va.gov Health portal team builds the Medications section of MHV of VA.gov, we wanted to understand what we can learn from the existing tools and what gap we need to fill. Today, Veterans and caregivers can digitally access and manage their medications from the Rx Refill app, MHV Liferay Pharmacy, VA Health and Benefits app, My VA Health Portal (Cerner only), Blue Button report, and Veteran pre-visit summary and after-visit summary. We seek to learn from these tools and understand the usability, medication functionality, and data requirements that will help our team improve the medication management experience and create a unified and Veteran-centric experience on VA.gov.  

The purpose of this research was to:  

- Understand the requirements for displaying medication data.  
- Understand the importance of displaying medications and allergy information together. 
- Understand medication functionality in MHV- Liferay, VA Health and Benefits app, and Rx Refill app. 
- Understand the role of AVS and PVS play in Veterans’ medication management journey. 
- Understand the dates associated with prescription and refill statuses. 
- Understand how prescriptions are refilled, tracked, and renewed. 
- Understand how VA defines a medication treatment plan, how they are used in patient care, and why they are important to Veterans and providers, specifically for medication management. 

## Research key questions  

**Usability**  

- How do Veterans manage their medications? 
- How do Veterans interpret VA pharmacy terms on prescription dates and statuses?  
- What actions Veterans do to refill and renew medications?  

**Clinical** 

- What are the different statuses and dates?  
- What are the use cases for showing allergies with medications list?  
- What is the process for medication renewal? 

**Data** 

What are the limitations of medication data from VistA? 

**Functionality**  

- What is the process for a Veteran to refill medications?  
- What is the process for a Veteran to renew medications? 
- What roles do treatment plan, PVS, and AVS play in Veterans’ medication management journey? 
- VA medications vs. Other types of medications 

## Key findings 

#### Finding 1: It’s challenging and stressful to manage medications because patients need to pay attention to a lot of statuses and dates. These statuses and dates can sometimes be difficult to understand. 

On the medication management journey map, there are many touch points and tasks patients need to track to successfully manage their medications.  

There are three main actions patients take regarding their prescriptions, which are request refill/fill, request renewal, and track prescriptions. If patients manage multiple prescriptions, it can get stressful and challenging because they need to keep an eye on the statuses and dates for each prescription in order to know when they should request refill and renewal and track their prescriptions. Some statuses and dates are clinical terms, which are not helpful for patients. Based on past user research, patients find statuses and dates confusing and prefer statuses and dates that tell them what to do next. Through the action flow that is associated with statuses and dates (mural board link in supporting information), we could see what statuses and dates mean and what actions are associated with each.  

Supporting information:  
- <https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1679693697878/18b84555c4770cadad988ada9c0b8a34a9ad785a?sender=ueeece9e244394145c84e5173>

 

#### Finding 2: Medication management experience is inconsistent across applications. 

There are four applications (MHV Pharmacy, My VA, VA Health and Benefits app, and Rx Refill app) that patients use to manage their medications today. There are differences and similarities in the content, information architecture, functionality and designs, which we analyzed in detail on the mural board (linked in supporting information). We learned that Rx Refill app will be retired soon, and VA Health and Benefits app will take over the mobile experience. Bottle scanning was a feature patients love. My VA Health is only for prescriptions that have transferred to the Cerner system, so not all patients use this platform. We need to dive deeper into how and when patients use these tools and how each tool compliments the other. 

Supporting information:  
- <https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1679595074027/67617e4a4e3c56301fbc74d6c9ad7dba8cf86b2b?sender=ueeece9e244394145c84e5173>


### Requesting a new fill or a refill 

#### Finding 3.1: Once patients request refill/fill, status and date changes indicate a medication’s movement through the refill journey. 

After talking with the Pharmacy Benefits Management team, we realize that prescriptions statuses and dates do not stand alone, and they are associated with patients’ actions. 

![Screenshot 2023-05-18 121533](https://github.com/department-of-veterans-affairs/va.gov-team/assets/65574620/a7f31f58-11c1-4b44-9e7e-16857b4aa548)

Active and Active: Parked statuses mean there are still refills remaining and prescriptions are not expired or discontinued. Therefore, when prescriptions are Active or Active: Parked, patients can request refill. If the prescriptions are new and have never been filled before, patients would request fill, but the logic of fill is same as refill.  

Once refill or fill requests have been submitted, patients will see refill submit date, which indicates they have submitted request on that day.  

When requests are processed by CMOP or local pharmacies, patients will see Active: Refill in process as status and fill date. Active: Refill in process is straightforward and means the refills are being processed. Fill date is estimated date that tells patients what their medications will likely be shipped.  

When the refills are dispensed, patients will see the dispensed date. Prescription status will become active and refillable again (if refills remain).  

Medications can be picked at VA pharmacies or local pharmacies. If patients choose medications to be delivered to their addresses, CMOP shipped date will be available once medications have been shipped by the carriers.  

Patients receive their medications, then the process repeats.  

#### Finding 3.2: In some edge cases, possible errors in prescription statuses can arise due to issues that arise in VistA. 

A refill decrements when the request is being processed from 3 to 2. A possible error here is that refills still decrement when CMOP actually doesn’t fill the prescriptions. For prescriptions that are marked for CMOP, when the refill/fill requests get close to the fill date, the requests are transferred to CMOP. The requests are not in a transmitted state, which means data has been transmitted to CMOP for dispensing, but that doesn’t guarantee CMOP will fill them. At this point, the status of medication has already been changed from Active: Refill in process to Active, and patients can request refill when CMOP hasn’t even filled the first request. If that happens, the prescription status can get stuck, which presents patients inaccurate status.  

There are some prescriptions with unknown statuses that can only be refilled on site at the pharmacies. Pharmacists don’t all follow up with patients on why some prescriptions can’t be filled, and sometimes they delete the requests without communicating. The deletion reflects in VistA, but VistA doesn’t update it on MHV. So, unknown status can last for a long time. There is no clear reason why VistA doesn’t update deletions for prescriptions that can’t be refilled.  
#### Finding 3.3: Automatic refill is not allowed.   

Due to congressional pushback, the VA is not allowed to provide patients with the ability to auto-refill prescriptions. Auto-refill is seen as a way of charging patients automatically without their taking an action. 

Supporting quotes: 

- “We don't do automatic refills because we charge copays. For historic and political reasons, congress was against auto refills. So, all we are trying to do is just to automate a reminder.” 

Supporting information: 

- <https://app.mural.co/invitation/mural/departmentofveteransaffairs9999/1679693697878[…]ce9e244394145c84e5173&key=3296fad9-122c-45ac-99ae-a7f3d3d66a7e> 


### Requesting a renewal 

#### Finding 4.1: Prescriptions that are expired, discontinued, or active with no refills need to be renewed. 

![Screenshot 2023-05-18 121559](https://github.com/department-of-veterans-affairs/va.gov-team/assets/65574620/4603bb21-9f4a-4c5f-bb23-5a99ec490806)

#### Finding 4.2: There are multiple pathways to renew prescriptions. 
 
Depends on the type of drugs and system and prescription status, patients can request renewal by calling AudioCARE, calling clinicians contact center, calling pharmacies, messaging their doctors on MHV, and sending requests on My VA Health.  

- **AudioCARE** 
AudioCARE handles communications between a healthcare provider organization and its patients. It provides automated services for prescription renewals, refills, notifications for pick-up, 24/7 patient access, and usable reporting and more. Patients can call and text the system 24/7.  

- **Clinical contact center** 
This is where patients can talk directly with clinical staff that support their facility. They can ask questions about the prescriptions they want to renew and ask what they can do to renew them, including making an appointment to speak with their doctors about that. 

- **Pharmacies** 
Patients can call the pharmacy number labeled on their medication bottle to ask questions and renew. If prescriptions can’t be renewed at pharmacy level, pharmacists will then contact their doctors on patient's behalf.  

- **MHV secure message** 
Patients can log in to MHV and send a message to their healthcare team with questions or requests about renewing their prescriptions.  

- **My VA Health (Cerner)** 
My VA has a refill button for any prescriptions that are refillable and renewable, so patients can send renew requests online. For example, when a prescription runs out of refills, patients can click on the refill button, which takes them to a renewal form with medication name, dosage, date started on and ordered by pre-filled in.  

#### Finding 4.3: AudioCARE is the only tool that communicates with both VistA and Cerner to renew medications.  

AudioCare provides patients a way to request a medication renewal through an automated phone system, regardless of the EHR their facility uses (VistA and Cerner). AudioCARE allows renewal requests if prescriptions are active with 0 refills, or if prescriptions are expired within the last 120 days. So, if the 120 days mark is today, you cannot request a renewal. It does not allow renewal requests on expired prescriptions.  

It was noted that we may not want to follow that logic because there are patients who still want to request renewals of discontinued prescriptions. For example, formulary drugs are only supposed to be active for a certain amount of time, so the doctors need to get permission to continue them after the prescription is expired. There’s also the situation that the medication renewal request is not permitted, but VistA is able to redirect patients to message their healthcare team for renewal. 

Supporting quotes: 
- “AudioCare can send renewal to Cerner or to VistA.” 
- “Renewal is not only about the patient facing experience, but also about the EHR process to change.” 

Supporting information: 
- <https://audiocare.com/about/>
- https://www.oit.va.gov/Services/TRM/ToolPage.aspx?tid=10148 

 
### Tracking prescription status 

#### Finding 5: Currently, patients only receive email notifications when Consolidated Mail Outpatient Pharmacy (CMOP) orders are shipped.  

Patients can track their prescriptions after they are dispensed by logging in to their preferred platforms and checking the dates. CMOP shipped date is available when their prescriptions are shipped. CMOP API Service can send notification emails for only CMOP mail orders, which is 94% of all mail prescriptions. There’s no service to notify MHV when a local prescription has been shipped. Patients need to log in and track local shipments’ arrival date on the carrier’s website with the tracking number. 

![Screenshot 2023-05-18 121619](https://github.com/department-of-veterans-affairs/va.gov-team/assets/65574620/d81efb1d-0bca-464a-b114-eb605590fe58)

Supporting quotes: 
- “Local shipments are more important to track because CMOP only takes 60 hours to turn the orders around. Local mails do overnight, so we really need to notify them as soon as it ships.” 
- “There's only one service that allows us to send emails, and that's the CMOP API service, which send MHV emails.” 

 
## Additional findings 

#### Finding 6: Allergies and adverse reactions help patients take the correct medications and inform their providers what medications not to prescribe. 

Allergies and adverse reactions are displayed below medications list today on MHV. Allergies and adverse reactions are documented together because they are different and don’t play into each other. It’s very important to show allergies and adverse reactions with the medications list. Patients not only read allergies and adverse reactions to make sure they take the right medications, but also inform their VA and non-VA providers about their allergies and reactions so they are prescribed with the right medications.  

Supporting quotes: 
- “Not all allergies are adverse drug reactions, and vice versa.”  
- “It's very important to show allergies and adverse reactions with medications and allow users to print them together.” 

#### Finding 7: By VHA Directive 1164, there are requirements that define the essential elements necessary to review, manage and communicate medication information.  

**All medication entries must include the following:**  
- Name of drug 
- Strength/dosage of drug 
- Instructions/Directions for use 
- Notes- if patent self-entered (section/white space to allow patients to write any information they need to help them manage their medications, such as indication, description of medication, etc.)  

**Source of medication information:**  
- VA: Prescribed and dispensed by local VA Pharmacy 
- Non-VA: Non-VA medications are medications obtained outside of VA, except of DoD medications. 
- Remote: Remote medications are medications ordered and dispensed from any other VA facility and/or DoD facility (if applicable).  

**For the purpose of reviewing medications:**
We should always show medications that are recently discontinued (90-180 days), recently expired (90-180 days), and pending where relevant. When patients go to multiple appointments and see multiple providers in the same day, changes to their medications and doses may not be reflected. So, reviewing progress note and after visit summary is also important.  

**For the purpose of managing medications:**  
Patients must actively request refills using MHV, mail, and phone at least 10 days before they run out of medications. Prescriptions patients cannot refill using MHV, mail or phone, include non-VA prescriptions, some controlled substances and short-term antibiotics.  

Supporting information:  
- <https://dvagov.sharepoint.com/:b:/r/sites/VHAMedRecon/Essential%20Medication%20Information%20Standards%20Directi/VHA%20Directive%201164/Program%20Guides/GUIDANCE%20FOR%20ESSENTIAL%20MEDICATION%20INFORMATION%20w-examples.pdf?csf=1&web=1&e=52rgkz>
- <https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/features/rx-refill/discovery>

#### Finding 8: VistA and MHV do not communicate changes to data when they happen. They communicate most often when a patient logs into MHV. 

For refill requests, MHV sends the requests through HL7 to VistA. It’s not real time data exchange. Even patients submit it and see submitted status, they won’t see the requests being processed until the next calendar day.  

Data on MHV pharmacy is not updated in real time, it is updated every night in VistA or when a patient logs in. Originally, VistA was trying to update data for every user in one night, but the load was too big. So, now VistA updates in three batch jobs that updates users’ data based on whether they have any records in certain statuses. When users log in, it triggers the system to ask an update. Otherwise, it will not update until the batch job that night. 

Supporting quotes: 
- “How refill request works is MHV sends it through HL 7 to Vista. It's not real time data exchange.” 
- “When you request a refill and it's a submitted status, you won't see that change to refill in process till the next calendar day. Users have to log in the next day to see when it will be filled.” 

#### Finding 9: Pre-visit summary (PVS) is given to patients before an appointment, which provides a way for patients to communicate changes to their medication list to their provider. 

Pre-visit summary (PVS) includes allergies and adverse reactions and medications list. It is a fillable PDF document that patients receive in their mail or through MHV secure message. Patients should review their medications and updates any changes to their medications on the PVS document, and then send it back to their providers or health care team via mail or attachments with secure message on MHV prior to their appointments.  

#### Finding 10: After-visit summary (AVS) is given to patients during and/or after an appointment, which provides what Dr. Spahn and Dr. Layden consider the closest document to a medication treatment plan the VA offers today. 

After-visit summary (AVS) is a PDF file that documents the changes to patients’ medications during their appointment and newly prescribed medications. AVS currently has multiple sections in it with medication information: 
- Only lists the changes to their medications 
- Lists all their medications in three subsections 
- Medications 
- Supplies 
- Medications you are not taking 

Within “My Ongoing Care” section on AVS, the medication list includes all the medications patients currently take. When AVS is generated, the “My Ongoing Care” section pulls the most up-to-date medication list from VistA.  

The data of PVS and AVS comes from the same backend system that connects to VistA. AVS can be created during and after an appointment. Some providers review it with their patients during the appointment. Otherwise, it’s generated so the patients can receive a hard copy of AVS at the end of their appointments. Patients can also access it themselves on MHV. AVS would be the closest thing to treatment plan, but it gets out of date fast.  

Supporting Quotes: 
- “The closest documentation to medications treatment plan is AVS.” 

Supporting information: 
- <https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products[…]h-modernization/mhv-to-va.gov/avs/engineering/data_available.md>

#### Finding 11: A medication treatment plan is considered the gold standard for communicating what a patient should be taking. However, we do not currently have access to data that would support us providing a comprehensive medication treatment plan today. 

Medications treatment plan documents the changes to patients’ medications, so it could be a lot of different things, such as progress note and AVS. For example, if Veterans see multiple providers on the same day, there could be changes to their medications that are documented in different places, which could be hard to pull out. We don’t have the data that supports true medications treatment plan today.  

Supporting Quotes: 
- “There is no true medications treatment plan today.” 

#### Finding 12: We don’t proactively remind patients to renew and refill their prescriptions and notify them about their medications’ movement after they refill and renew.  

Managing medications is similar to online shopping experience. After patients request a renewal and/or refill, it is important to inform them about when to order frequently taken medications again and where their medications are at are important to ease their experience.  

In the Rx Refill app, there is an in-app notification that pops up 15 days before a prescription expires and tells patients this prescription is about to expire, and here’s what they can do. Clinicians can run reports for the Veteran in CPRS that tell them which prescription are about to expire, so we should have the same for patients and prepare them ahead of time.  

15 days is the standard lead time for informing the patient about renewing or requesting to allow enough time to work through the process. For example, if a doctor gets a renewal request and signs it, it will still look at the previous fill history and based on the last bill, determine when the renewal prescription action needs to go out. That gives time, including weekends and holidays for clinician approvals and pharmacy processing the order once it comes through. It was expanded from 10 to 15 days when COVID started. There were so many requests, so that give the mail system time to process. 

Besides renewal reminders, when refills are running out or discontinued for any reason, we could also notify patients and inform them of the actions they could take. Once the prescriptions are shipped, letting patients know the tracking information is available for CMOP orders and local shipment can make sure they receive their medications on time.  

Supporting Quotes: 
- “Another thing is with renewals; it’s being proactive and tell them they’s going to need to do this before it happens.” 
- “We do not have the same service to notify MHV when a local prescription has been shipped.” 
- “We don't have refill alerts to notify them yet.” 
- “So, when your meds arrive, that's your reminder to request the next one.” 


## Recommendations 

#### Recommendation 1: Medication statuses and dates should be in plain language and action oriented, and simply shows how a prescription changes over time.  

Because there are many statuses and dates patients need to track manually, there should be a way to present that information intuitively so that patients know how their prescriptions change over time.  

Here’s an example how that can be presented for prescription refills:  

![Screenshot 2023-05-18 at 12 20 19 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/65574620/e5d1ecd2-abbb-4871-8c62-84f8dec413ba)

Next steps:  
- Complete designs for this recommendation. 
- Work with content team to standardize the content for prescription statuses and dates. 

_Associated finding: 1_

#### Recommendation 2: Collaborate with the designers and researchers on the flagship mobile team to ensure a unified medication management experience.  

As we are building medications on VA.gov, it’s important to check in with the flagship mobile team regularly to ensure a streamlined experience, and we should discuss:  

- What are the mobile only features? 
- Where do we onboard and off board patients to go from VA.gov to the app, and vice versa?  

_Associated finding: 2_ 

#### Recommendation 3: Create reminders and notifications that proactively help patients manage their prescriptions.  

From analyzing the medication management journey from pre-appointment to receiving medications, we can see that there are not many automatic features that assist patients on this journey. Auto-refill is not allowed and building renewal in VistA logic is on the roadmap. However, creating reminders and notifications might be something we do to fill that gap. They can inform patients the statuses of their medications without logging into the platforms or asking their doctors or pharmacist. It will make managing medications better and easier for them.  

Next step:  
- Work with VA Notify and VEText team to understand how feasible this recommendation is.  
- Set up a meeting with Beverly Nelson and Shane Elliott 

_Associated findings: 1, 3.1, 4.1, 12_ 

#### Recommendation 4: Work across technical teams to build a digital prescription renewal API that can be used by MHV on VA.gov, AudioCARE, and mobile apps.  

Patients want to renew their prescriptions, and they don’t need to know how the medications are renewed. It would be the best to create an action button for renewal on VA.gov, and we figure out the technical pathways to get the prescriptions renewed. If the prescriptions can’t be renewed with click a button, we let patients know why and what the next steps are.  

From talking with Dr. Spahn, we learned that they are currently building out logic in the Rx VistA API for requesting renewal. This will make the renewal process easier by having an action button like refill. AudioCARE currently has the system that allows patients to renew prescriptions with a phone call regardless of Cerner or VistA. Understanding both systems and collaborating with both teams will help us develop the renewal feature, and we don’t have to reinvent the wheel.  

Next step: 
- Connect the Rx VistA API team to engineers on VA.gov. 
- Conduct technical discovery on how Rx VistA API can be incorporated with VA.gov. 
- Facilitate and manage multi-tool Digital Medications Management working group to understand other products and planned work. 

_Associated finding: 4.1, 4.2_

#### Recommendation 5: Build prescriptions tracking feature for CMOP mail orders and local pharmacy orders. 

Prescription orders come from CMOP and local pharmacy, and CMOP mail orders make up about 95% of the prescriptions. We need to integrate both systems for prescription tracking on VA.gov. 

Next step: 
- Connect with MHV Pharmacy ByLight engineers and understand their approach on this. 
- Technical discovery on where we can pull data for local pharmacy tracking. 

_Associated finding: 5_ 

#### Recommendation 6: Patients should be able to print, download, and view allergies and adverse reactions along with their medications list. 

We learned that allergies and adverse reactions are important for patients and their providers. Patients need to have the ability to view, download and print them with the medications list to access them whenever they need. This will increase medication safety by helping patients be confident with the medications they are taking. Currently, allergies and adverse reactions can be viewed with medications list because it’s not clear how they are related to the medications patients take. We also need to design a better viewing experience.  

Next step: 
- Complete designs for this recommendation. 

_Associated finding: 6_

#### Recommendation 7: Create content and designs that follow VHA Directive 1164. 

There are required information about medications we need to follow based on VHA Directive 1164. This will ensure w to display essential medications information that patients need. The flagship mobile app team recently finished the usability testing on their updated Rx section of the app. It’s important that we learn from their findings and implement what designs already works.  

There’s a “notes” section for medication entry, which considers as Patient Generated Health Data (PGHD). We won’t be adding it as MVP for this quarter.  

Next step: 
- Complete designs for this recommendation. 

_Associated finding: 7_

#### Recommendation 8: Conduct technical discovery on how VistA and MHV pharmacy exchange data. 

VistA and MHV don’t exchange data in real time. This could lead to challenges in displaying accurate medications information, which is crucial for patients to manage their medications.  

Next step: 
- Complete the technical discovery. 

_Associated finding: 8_ 

#### Recommendation 9: Consolidate all medications in one place, including active, inactive, VA, non-VA, and remote, and display medications in a way that is easy to find. 

Refillable prescriptions are separate from other prescriptions on MHV. VA Health and Benefits app doesn’t include inactive medications. For prescriptions pass 180 days, patients have to navigate to medical records to access them. There are many different places to go to access a complete list of medications, which is time consuming. We should consolidate all medications in one place and categorize them in different groups so that patients can easily find their medications and take actions. 

Next steps:  
- Complete designs for this recommendation. 

_Associated finding: 3.1, 4.1_ 

 
*Note:  
There are no recommendations for Finding 9, 10, and 11 because they are already being worked on by the After Summary Visit Team at OCTO.  


## Appendix  

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/Discovery/2023-03_Informational%20Interviews/Research%20Plan.md)
- [Conversation guides](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/Discovery/2023-03_Informational%20Interviews/Conversation%20Guide%20-%20Clinical%20Focus.md)
- [Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/pharmacy/2023-03-Informational-interviews)
- [Medication management journey map](https://app.mural.co/invitation/mural/departmentofveteransaffairs9999/1679693697878?sender=ueeece9e244394145c84e5173&key=3296fad9-122c-45ac-99ae-a7f3d3d66a7e)  
- [Prescription progress flow with statuses and dates](https://app.mural.co/invitation/mural/departmentofveteransaffairs9999/1679693697878?sender=ueeece9e244394145c84e5173&key=3296fad9-122c-45ac-99ae-a7f3d3d66a7e)
- [MHV Pharmacy, VA Health and Benefits App, and Rx Refill App Comparison Analysis](https://app.mural.co/invitation/mural/departmentofveteransaffairs9999/1679595074027?sender=ueeece9e244394145c84e5173&key=d72ee471-eb94-466a-b8cb-6936e3f55e63) 
- [VHA Directive 1164](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/Discovery/VHA%20Directive%201164.md) 

## List of interviewees 

- Rob Durkin - AVS & PVS Engineer 
- Nancy Wilck, Hugo Padilla from Rx Refill App team 
- Arienne Walters and Harrison Amelang, MHV pharmacy designers from ByLight 
- Raquel and Tanner, ByLight product owners 
- Maureen Layden, Physician - Director, VA Medication Reconciliation Initiative 
- Eric Spahn, Clinical analyst - Pharmacy Benefits Management, OCC business line owner 
- Margo Kabel, VHA Health informatics, program analyst, HCD 
- Lauren Russell, Liz Straghalis from the VA flagship mobile app 
 
