# Appointment Details Page Redesign Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Appointments**

Date: 02/2024

Ciera Maddox ciera.maddox@adhocteam.us

<br>

**Jump to:**

[Hypotheses and conclusions](#hypotheses-and-conclusions)

[Key findings](#key-findings)

[Details of Findings and Recommendations](#details-of-findings-and-recommendations)

[Who we talked to](#who-we-talked-to)

[Further research needed](#further-research-needed)

<br>

# Research Goals

Veterans schedule and manage their appointments in various ways, that include in person, by phone, or online through the appointments tool. A veteran can log onto VA.gov and enter the appointments tool to schedule, request or cancel an appointment as well as view upcoming, past or pending appointments. The focus of this research was to validate the design change decisions, to improve Veterans overall experience with VAOS appointment management.
[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

The purpose of this research is to: 
1. Evaluate the pertinence of details page information.
2. Test hierarchy of details page information.
3. Evaluate how understandable the empty states are.
4. Evaluate the use of buttons and links.
5. Test the findability of the After Visit Summary.
6. Test navigation to and from the Next of Kin/Emergency Contact
7. Test changes to the cancelation flow.
8. Evaluate the print page.

# Research Questions

1. Cancelation:
   - Do Veterans know how to cancel their appointment?
   - How would Veterans expect to cancel an appointment?
2. Details page:
   - Do Veterans know where to go for their appointment?
   - Do Veterans know how to prepare for their appointment?
   - What do Veterans expect to do on the details page?
   - Do Veterans know how to join their telehealth appointments?
   - What is the first action veterans take on an appointment details page?
3. CTA's:
   - What is the first action veterans take on an appointment details page?
   - Can Veterans distinguish between the different tasks on the details page?
4. After Visit Summary
   - How easily can the veteran find their after visit summary?
5. Pre Check-in
   - Do Veterans understand what pre check-in is?
   - Can Veterans easily navigate to the profile page for pre check-in?
   - Can Veterans easily get back to their appointments?


# Methodology 

We ran a moderated usability test on the appointments details redesign.

# Location

Remote, over Zoom

# Research Materials

For moderated _desktop_ usability test

- [Conversation guide](conversation-guide.md)
- [Desktop prototype](https://www.figma.com/proto/RcDljBwThbwVDkNrDH2xiA/Appointment-Details-Redesign-%7C-Appointments-FE?page-id=&type=design&node-id=3706-84910&viewport=-1534%2C476%2C0.16&t=BeRNl3a5N7GfhYSb-1&scaling=min-zoom&starting-point-node-id=3706%3A84910&mode=design)

For moderated _mobile_ usability test

- [Conversation guide](conversation-guide.md)
- [Mobile prototype](https://www.figma.com/proto/RcDljBwThbwVDkNrDH2xiA/Appointment-Details-Redesign-%7C-Appointments-FE?page-id=2236%3A60173&type=design&node-id=2447-132766&viewport=457%2C427%2C0.16&t=77eZwwjIykTZ6rPe-1&scaling=min-zoom&starting-point-node-id=2447%3A132766&mode=design)


# Hypotheses and Conclusions

## Outcomes
We will use the findings to:
- Finalize designs and update the appointments list. 
- Decide on next steps for redesigning the details pages.
- Evaluate usability and value of the appointment list redesign.

## Hypotheses and Conclusions
- The new appointment list will be easy for Veterans with diverse technical abilities, ages, and disabilities to navigate and scan.
  - TRUE: All participants were able to easily scan the new appointment list. 
- The new appointment list will provide clear, valuable information to the veteran
  - TRUE: All participants found the information provided in the new appointment list to be useful and pertinent. 
- The new modality language and iconography will clearly indicate to Veterans where they will need to attend their appointments.
  - FALSE: Several Veterans found the modality icon and language confusing.
- The new details pages will provide clear, valuable information to the veteran
  - TRUE: All participants found that the new details pages provided useful information. 
- The new details pages will be easy for Veterans to navigate and scan.
  - TRUE: All participants were able to navigate the new details pages with ease.
- The back button (in place of the breadcrumb) will be easy for Veterans to locate and use.
  - TRUE: Veterans found the back button easily and were able to navigate using it. 


# Key Findings
1. **The appointment details pages were easy to scan and provided the information veterans were looking for.**  

2. **Several participants found the pre check-in task confusing.**

3. **Missing “Join appointment” link on video appointments was frustrating**

4. **ATLAS appointments were confusing.**

5. **Phone numbers might be blocked.**

6. **Cancelation flow was simple and straightforward.**

7. **Participants want to be able to reschedule their appointments.**

8. **After Visit Summary was easy to find and navigate to and from.**

9. **The empty states were recognized as intended.**

10. **Text beneath the main header describing the appointment is not being read/noticed.**


# Details of Findings and Recommendations

## 1. The appointment details pages were easy to scan and provided the information veterans were looking for.

All participants (13 of 13) were able to scan through the appointment details with ease. They were able to identify the information they needed for their appointment. 

   _“I like how clean this all looks. So there’s no confusion for me. It’s pretty much everything I need; the date, time, clinic that it’s with. It’s really clean, I like that.”
-Participant 2  

## 2. Participants found pre check-in task confusing. 
Several participants found that "Prepare for your visit" was a misleading header. They had expected things such as appointment instructions and reminders or forms that needed to be filled out.





















   
**Recommendation: Simplify the usage of modality language.**

Revisit the language and iconography, indicating where a person should attend their appointment. There was confusion around the appointment modality. Simplifying this will help mitigate confusion and give Veterans a more clear understanding of where they need to physically be for their appointments. 

<img width="863" alt="Screen Shot 2022-10-14 at 10 03 20 AM" src="https://user-images.githubusercontent.com/92750161/195902380-4357586a-fbdb-4302-95b6-2b6ac8758bac.png">  

## 3. The majority of participants would not print their appointment list. 

Most of the participants (8 of 10) reported that they would not want to print an individual appointment or list. When asked what they would do alternatively, all participants (10 of 10) reported using these digital methods to reference their appointments:

- Three (3 of 10) participants said they use email to reference their upcoming appointments. 
- Six (6 of 10) participants reported that they use their digital calendar to reference their appointments. 
- One participant said they take a photo of their appointment and keep it in their phone to reference their appointment. 
 
   “I get emails and I save those rather than print it.”  
   -Participant 5  

   “No, I don't [print] cause when I go they usually give me print out, and when I get home I just put it in my [digital] calendar.”  
   -Participant 15  

**Recommendation: Do not include "print all" link on appointment list**

Because the majority of participants reported that they do not print their appointments, consider leaving the print link out of the appointment list.

**Recommendation: Include an "add all to calendar" link to the appointment list**

With the majority of participants reporting that they used their digital calendar as a way of managing their appointments, Adding a link to "add all to calendar" on the appointment list would save Veterans time and minimize the number of clicks to add multiple appointments to their calendar. 

## 4. The order of past appointment list is confusing. 

Participants were asked to find their most recent appointment and most participants (8 of 10) clicked on the first appointment at the top of the list. This suggests that participants would expect to see their most recent appointments displayed at the top of the list and their older appointments to follow. 

<img width="277" alt="Screen Shot 2022-10-11 at 1 33 26 PM" src="https://user-images.githubusercontent.com/92750161/195192806-6811986d-a6d1-4ab0-9206-587b9ede8dfa.png">

The above image shows the current order for past visits - oldest to newest.

**Recommendation: Change past appointment list order**

We suggesat reordering the past appointments list, showing the most recent appointments at the top and oldest appointments last. This change would make it easier for Veterans to navigate their past appointments.

## 5. Details pages were easy to navigate. 

All participants (10 of 10) successfully navigated to the details pages. They reported that they were easy to read and the information was pertinent. When asked what could be improved on, there were a variety of answers:

- Phone number extension - There was concern that calling the facility number would put them into the VA phone system and that a direct extension to the clinic was important.

- Provider name -  The list view showed the provider name, but was not listed in the details pages. 

- A help number - There is a VA-wide help number, however participants were concerned that if something specific to the appointment were to happen (ie: video connect issues, phone number discrepancies) a direct help number would be helpful. 

Two participants struggled to exit the details pages, noting that the only two options were to cancel or reschedule the appointment. It is speculated that they either did not see the back button, believed the appointment to be a modal that they would need to close or exit out of, or were under the impression they needed to select one of the two options at the bottom.

For canceled appointment details pages, (4 of 10) participants wanted to know why their appointment was canceled. 

**Recommendation: Change Details page CTA's** 

Reconsider the CTA buttons at the bottom of details pages.

## 6. The back link was easy to find and use

100% of participants using a desktop computer (5 of 5) used the back link on the page to navigate back to the previous page. 80% of participants using a mobile device (4 of 5) used the back link on the page to navigate back to the previous page. One participant navigated back to the previous screen using the back button on their device.

**Recommendation: Replace breadcrumb with back button upon entry to VAOS.**

There are several page sequences within VAOS that require users to move through specific steps. The breadcrumb does not include any navigation point within those sequences within VAOS, only the entry point.
We suggest adding a back link in place of the breadcrumb on the past and pending appointment list pages as well as all of the details pages. Doing so will provide Veterans with a more consistent and simple way to navigate online scheduling. This is also recommended throughout the scheduling flow in VAOS. 


# Additional Insights

### 1. The term pending was confusing for some participants.
Some participants (4 of 10) were unable to locate “pending” appointments without intervention/assistance from the facilitator. After further explanation, they were all able to find the pending appointment, suggesting a discrepancy in naming. When asked how they interpreted the word “pending”, some (2 of 10) participants thought they were upcoming appointments, while one believed a pending appointment would mean an error in scheduling. 

**Note**: In previous studies, the term “requests” caused confusion for participants. Bother “pending” and “request” are potentially problematic. [Link to github](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2021-01-appts-list-test/research-findings.md#appointment-requests-continue-to-create-confusion)

### 2. Need a way to search or sort through past appointments. 
participants were successful (9 of 10) in finding and clicking on the past appointments link. When asked to locate a specific appointment on the past appointments list, several participants wanted a way to filter or search through those appointments, by various data points. 

**Note**: The date filter was not included in the test and will need to be added. 

### 3. Access to secure messaging
Participants want a way to message their provider at various times throughout the scheduling process, including while managing appointments. . 

### 4. Small text
At least one participant with low visibility expressed difficulty seeing the links in the details pages.

# Next Steps

The next steps in this process are as follows:
1. Engineers to build a proof of concept for appointment list designs. 
2. Update appointment list designs based on findings and recommendations from this study. 
3. Create a screen-reader usability test using a low-code prototype
4. Make changes to details page designs based on findings and recommendations from this study.
5. Further testing on details page usability. 

# Further research needed

All requested demographics were met and no further testing will be needed for this study. Design changes and further testing will be conducted for design change recommendations for details page. 

# Appendix

[Research plan](research-plan.md)

[Conversation guide](conversation-guide.md)

## Tools used for Synthesis

[Mural board](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1663787968917/0350c48a113a036c09499090ae54f1da3e709626?sender=ua4cf5b25fa1f501e76ba9960)

[Spreadsheet](https://docs.google.com/spreadsheets/d/1BMn0Jwdeg-vjbtBlxKPrVwJrv7VIiA7ddJj1Cp4Gemk/edit#gid=0)

## Pages and applications used

[Desktop Prototype](https://www.figma.com/proto/JpGM8LGBCqAlL8qh3DmFk8/Home-Page-Redesign?page-id=1160%3A65447&node-id=1169%3A59522&viewport=-5700%2C-6043%2C0.24&scaling=min-zoom&starting-point-node-id=1169%3A59522&show-proto-sidebar=1)

[Mobile Prototype](https://www.figma.com/proto/JpGM8LGBCqAlL8qh3DmFk8/Home-Page-Redesign?page-id=1160%3A65447&node-id=1172%3A81535&viewport=-5700%2C-6043%2C0.24&scaling=min-zoom&starting-point-node-id=1172%3A81535&show-proto-sidebar=1)

## Who we talked to 

**Recruitment criteria**

The primary recruitment criteria was include at least 8 desktop users and at least 8 mobile users. For each of these groups, we asked that at least 1 had a cognitive disability, at least 1 was LGBTQ+ and at least 1 was Native.

We talked to **10 participants.**

Audience segment:
* Veterans: 10 
* Caregivers: 0
* Family members of a Veteran: 0  

Gender:
* Male: 4 
* Female: 6 

LGBTQ+:
* Transgender: 1 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 1
* Gay, lesbian, or bisexual: 1

Devices used during study: 
* Desktop: 5 
* Tablet: x 
* Smart phone: 5 
* Assistive Technology: 0

Age:
* 25-34: 0
* 35-44: 3
* 45-54: 1
* 55-64: 2
* 65+: 4
* Unknown: 0

Education:
* High school degree or equivalent: 0
* Some college (no degree): 1
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 6
* Master's degree: 2
* Doctorate degree: 0
* Unknown: 0

Geographic location:
* Urban: 0
* Rural: 0
* Unknown: 0


Race:
* White: 0
* Black: 2
* Hispanic: 1
* Biracial: 0
* Asian: 0
* Native: 0


Disability and Assistive Technology (AT):
* Cognitive: 0
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 5
* Mobile screen reader: 5
* Magnification/Zoom: 1
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


## Underserved groups we haven’t talked to 

[Recruitment Tracker](https://docs.google.com/spreadsheets/d/1Jy6zH_0JVRhNRxTJfvdjOgpZPgKFoS8RIeASEhpamB4/edit#gid=1116550612)

<img width="926" alt="Screen Shot 2022-10-13 at 1 19 49 PM" src="https://user-images.githubusercontent.com/92750161/195702178-6526d295-4d2a-44d5-9a4e-c6b4d5340772.png">

This research does not include the perspectives of the following marginalized Veteran groups:

* Cognitive Disability
* Native

