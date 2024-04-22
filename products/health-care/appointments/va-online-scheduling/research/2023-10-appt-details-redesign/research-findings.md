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

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-10-appt-details-redesign/conversation-guide.md)

[Desktop Prototype](https://www.figma.com/proto/RcDljBwThbwVDkNrDH2xiA/Appointment-Details-Redesign-%7C-Appointments-FE?page-id=&type=design&node-id=3706-84910&viewport=-1534%2C476%2C0.16&t=BeRNl3a5N7GfhYSb-1&scaling=min-zoom&starting-point-node-id=3706%3A84910&mode=design)

[Mobile Prototype](https://www.figma.com/proto/RcDljBwThbwVDkNrDH2xiA/Appointment-Details-Redesign-%7C-Appointments-FE?page-id=2236%3A60173&type=design&node-id=2447-132766&viewport=457%2C427%2C0.16&t=77eZwwjIykTZ6rPe-1&scaling=min-zoom&starting-point-node-id=2447%3A132766&mode=design)

# Hypotheses and Conclusions

## Outcomes
We will use the findings to:

1. Make any necessary changes to finalize the appointment details designs.
2. Make any necessary changes to finalize the new cancellation flow.
3. Make any necessary changes to finalize the after visit summary entry point.
   - Relay findings to the after visit summary team
4. Make any necessary changes to finalize the pre check-in entry point.
- Relay findings to the Check-in and Profile teams.
 

## Hypotheses and Conclusions

1. Cancelation:
   - Participants will be able to cancel their appointments easily.
      - TRUE: All participants could easiliy cancel their appointments. 
2. Details Pages:
   - Participants will be able to find and understand their appointment information easily.
      - TRUE: Participants found appointment details information easily. 
3. CTAs:
   - On an upcoming appointment details page, participants will find the secondary buttons before finding the join appointment CTA.
      - FALSE: Participants were able to identify the "join appointment" CTA on open video appointments. 
4. After Visit Summary
   - Participants will be able to easily find their after visit summary
   - TRUE: Participants were able to find their after visit summary easily. 
5. Pre Check-in
   - Participants will understand the pre check-in task.
      - FALSE: Participants found pre check in confusing. 
   - Participants will be able to easily navigate to health care contacts page.
      - TRUE: Participant could navigate to health care contacts page
   - Participants will be able to navigate back to the appointments page.
      - FALSE: Participants struggled to navigate back to appointments.  


# Key Findings
1. **The appointment details pages were easy to scan and provided the information veterans were looking for.**  

2. **Participants found the pre check-in task confusing.**

3. **The majority of participants wanted access to the "join appointment" link for video appointments.**

4. **ATLAS appointments were confusing.**

5. **Phone numbers might be blocked.**

6. **Cancelation flow was simple and straightforward.**

7. **After Visit Summary was easy to find and navigate to and from.**

8. **The empty states were recognized as intended.**

10. **Text beneath the main header describing the appointment is not being read/noticed.**


# Details of Findings and Recommendations

## 1. The appointment details pages were easy to scan and provided the information veterans were looking for.

All participants (13 of 13) were able to scan through the appointment details with ease. They were able to identify the information they needed for their appointment. 

   _“I like how clean this all looks. So there’s no confusion for me. It’s pretty much everything I need; the date, time, clinic that it’s with. It’s really clean, I like that.”_
-Participant 2  

## 2. Participants found the pre check-in task confusing. 

**"Prepare for your visit" was misleading**

Several participants were misled by the "Prepare for your visit" header, expecting things like appointment instructions, reminders or questionaires to be in that section.

_“It's got nothing specifically to do with the appointment or the link that led to this”_ 
-Participant 1

**Note:** The intention moving forward is to add additional appoitment tasks under the "prepare for your visit" header, which might have an impact on how veterans perceive it. 

**Recommendation:** Rework this language

**"Review your personal healthcare contacts" was confusing**

All participants (13 of 13) reported that the link "review your personal healthcare contacts" did not match their expectations and caused significant confusion. Some participants expected to find information regarding their provider or medical team. Some participants _did_ expect to find their personal demographic information, however upon navigating to the page, they were confused only to have found emergency contact and next of kin.

_"I was just like personal health care contact? But I see it's for emergency.  I would rather see "review your emergency healthcare contacts". I didn't understand what that meant."_
-Partcipant 4

**Recommendation:** Reconsider language and placement of link.

**Inability to edit was frustrating.**

Many participants were frustrated that once they navigated to the personal healthcare contacts page, they were unable to make any changes if they needed to.

_"There should be an edit button. This is really just letting me look at what’s on file. It’s not letting me do anything."_
-Participant 8

**Recommendation:** Consider an edit function.

**Diffiuculty navigating back**

Many participants (7 of 13) struggled to navigate back to the appointments page from personal healthcare contacts. Participants were anxious about using the browser back button for fear of losing their progress, or being logged out of va.gov. 

_“I don’t see a way to go back to my appointment. How would I do that from here? So I'll hit the back button on my phone rather than on the screen. I’m not sure if it’s going to exit me or take me back to my appointment.”_
-Participant 8
   
**Recommendation:** Consider a path back to the appoitments page.

## 3. The majority of participants wanted access to the "join appointment" link for video appointments. 

Participants looked at a closed upcoming video appointment for the next month. 9 of 12 participants were distraught over the missing "join appointment" link, bypassing the description at the top of the page that explained when the link would be available. When participants were shown the details for an open video appointment, they were relived to have the link. 

Many participants expressed their desire for the link well in advance to better prepare themselves for their appointment. They also said they would like to have the link so they may save it in another place, such as a digital calendar. 

_"Tell me the harm to giving me the link… A year before the appointment. The link won't go live until it's ready to go live, But I'll know that I've got it. I know that I don't have to take an extra step. I don't have to call you up 30 min before my appointment. I can go 30 seconds before my appointment and I'll know that the link is there”_
-Participant 9

**Recommendation:** Consider the feasability of adding the "join appointment" link to closed video appointments. 

We suggest exploring the possibility of adding the link to all video appointment details pages. We believe this would allow for Veterans to better plan for their visits, build their confidence in the reliability of the appointments feature and ease their anxiety over attending virtual appointments altogether. 

**Recommendation:** Reconsider "join appointment" button. 

There is a possibility that the "join appointment" link would not be generated until well after the appointment itself was made, making it unpredictable to know when the link will be available. If that is the case, perhaps using a button in place of the "join appointment" link would provide more security to Veterans in the event that the link is unavailable. When the link is unavailable, the "join apopointment" button would be disabled, but still present. 

**Recommendation:** Consider adding "join appointment" link to "add to calendar" function. 

If we have access to the link ahead of time, when Veterans click on "add to calendar" we suggest adding the "join appointment" link along with all of the other appointment details. 

## 4. ATLAS appointments were confusing.

Most participants (9 of 11) were usure what an ATLAS appointments was, didnt understand what they were supposed to do and wanted more information about them.

_"That doesn’t make sense. It’s a video appointment, why should I go to an address? It should have a  link for the atlas location, not a building location."_
-Participant 8

**Recommendation:** Fully reevaluate the ATLAS appointment details.

We suggest a deeper dive into ATLAS appointments to uncover the instructions that are given to Veterans when their appointments are made. We suggest providing more instructions on where to go once you arrive at the facility, what to expect at the appointment, and how to use the provided appointment code. 

## 5. Blocked phone numbers. 

When going over phone appointments, several participants expressed concern over not knowing the number that their provider would be calling from. Some participants reported having a feature on their phones that blocks unknown numbers from coming through. 

_“My phone has a blocker on it, and oftentimes if you get a govt or restricted number, it’s blocked.”_
-Participant 1

**Recommendation:** Consider including the phone number that will be calling on the details pages.  

## 6. Cancelation flow was simple and straightforward. 

All participants (13 of 13) reported a positive experience canceling their appointment. 

_“Good, it’s idiot proof. I like this. If i say yes cancel it’s gonna have one of those yes i’m sure. But if i accidentally did it no would take me to that previous page.”_
-Participant 7

## 7. After Visit Summary was easy to identify and navigation to and from was simple. 

Most participants (12 of 13) were able to find the "Go to after visit summary" link. 

_"I like that. theres times i want to go back and see what went on in an appointmnet instead of going through my whole medical record to find what im looknug for."_
-Participant 6

**Note:** 2 participants had a difficult time finding the "past" appointment link in the subnavigation. This could negatively impact Veterans ability to find AVS altogether. 

**Recommendation:** Reconsider sub-navigation size and placement. 

## 8. Empty states were recognized as intended. 

Participants were confused and frustrated by the missing data, but still expressed having the necessary information to attend their appointments. 

_“And I don't know about “provider not available”, why that’d be blank. I'm curious why it doesn’t say what it’s for. Maybe it’s a clinic where they have several providers and whoever’s available they just take the next person.”_
-Participant 2

## 9. Text beneath the main header describing the appointment is not being read/noticed.

Facilitators noticed that participants were scrolling past the subtext that briefly described the appointment. When participants were directed to the text they reported having not seen it and that the information was useful. 

**Recommendation:** Consider increasing the size of subtext font. 

# Additional Insights

### 1. Veterans want the ability to reschedule their appointments. 

When canceling appointments, several particpants wanted the ability to reschedule the appointment they were canceling without having to go through the entire scheduling process. 

_“Should one of the options be yes, reschedule? That would be valuable because I’m going to forget to schedule another appointment.”_
-Participant 8

### 2. The word "Pending" remains confusing.

Most participants werent sure what "pending" meant.

# Next Steps

The next steps in this process are as follows:
1. Remove "personal Healthcare Contacts" from upcoming appointments.
2. Determine what items are ready to be built and what needs iteration. 
3. Hand off items that are ready for developers to begin work
4. Iterate on remaining designs and content
5. Share finished designs with other teams. 

# Further research needed

All requested demographics were met and no further testing will be needed for this study. 

# Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-10-appt-details-redesign/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-10-appt-details-redesign/conversation-guide.md)

## Tools used for Synthesis

[FigJam Board](https://www.figma.com/file/ohUcUPpdS2x0Q6uZTb7F9D/Appt.-Details-Synthesis?type=whiteboard&node-id=0%3A1&t=wPGZRaiDNbKqB0tv-1)

[Spreadsheet](https://docs.google.com/spreadsheets/d/1EbfxSgLJFV9GnHBjf8uuPkGHGy4A8e5yec6fKqapK3Q/edit#gid=0)

## Pages and applications used

[Desktop Prototype](https://www.figma.com/proto/RcDljBwThbwVDkNrDH2xiA/Appointment-Details-Redesign-%7C-Appointments-FE?page-id=&type=design&node-id=3706-84910&viewport=-1534%2C476%2C0.16&t=BeRNl3a5N7GfhYSb-1&scaling=min-zoom&starting-point-node-id=3706%3A84910&mode=design)

[Mobile Prototype](https://www.figma.com/proto/RcDljBwThbwVDkNrDH2xiA/Appointment-Details-Redesign-%7C-Appointments-FE?page-id=2236%3A60173&type=design&node-id=2447-132766&viewport=457%2C427%2C0.16&t=77eZwwjIykTZ6rPe-1&scaling=min-zoom&starting-point-node-id=2447%3A132766&mode=design)

## Who we talked to 

**Recruitment criteria**

The primary recruitment criteria was to include at least 1 Veteran with a cognitive disability, at least 1 LGBTQ+ Veteran and at least 1 Native Veteran.

| Category              | %       | Target | Study |
|-----------------------|---------|--------|-------|
| Veterans              |         |        |       |
| Age 55-64+           | 50.00%  | 5      | 10    |
| Cognitive Disability | 50.00%  | 5      | 4     |
| Mobile user          | 50.00%  | 5      | 3     |
| Rural                 | 25.00%  | 3      | 2     |
| No degree            | 25.00%  | 3      | 2     |
| Other than honorable | 21.00%  | 2      | 0     |
| Immigrant origin     | 17.00%  | 2      | 0     |
| Women                | 10.00%  | 1      | 8     |
| Expat (living abroad)| 0.40%   | 0      | 0     |



 

[Recruitment Tracker](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing)

<img width="751" alt="Screenshot 2024-03-08 at 12 11 13 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/79866060/3c7563d6-6b1d-477a-9d3a-2ff7ece7aa29">

## Underserved groups we haven’t talked to
- Immigrant origin
- Assistive technology users

