# Check-in: identity verification and multiple appointments usability findings
- Updated: October 5, 2021
- Lead Researcher: Kristen McConnell, kristen.mcconnell@adhocteam.us
- [Downloadable PDF](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/phase2-usability/research-findings.pdf)

## How this research maps to the Veteran journey
- Taking care of myself
  - Checking in for a VA medical appointment

## OCTO-DE goals that this research supports
- Veterans can manage their health services online
- Logged-in users have a personalized experience, with relevant and time-saving features
- Measures to increase
  - Completion rate of online transactions
  - Usage of digital, self-service tools
- Measures to decrease
  - Time to successfully complete and submit online transactions

## Background and goals
### Background
This product is reimagining the ecosystem that allows a Veteran to check-in for a medical appointment. The healthcare experience team in particular will be creating the portion of the ecosystem that enables a Veteran to utilize their mobile device to check-in (letting the VA know that they have arrived for their appointment) via va.gov.
With this round of research, we are looking to test the usability and design of our proposed phase 2 features:
- the addition of last name and last 4 of SSN as identity verification data points.
- the ability for Veterans to check-in if they have multiple appointments in one day.
- showing a check-in status for each appointment.

In prior research, half of the Veterans were concerned that check-in only utilized their phone number to verify they were the right person checking in. We also found out that last name and last 4 digits of SSN were commonly asked to verify identity within current check-in workflows.

We analyzed appointment data (particularly looking at our proposed pilot site...Martinsburg WV) and found over half of Veterans have more than one appointment on any given day. With our MVP scope, those Veterans would not be able to complete check-in. We want to rectify that in Phase 2.

### Research questions
- Does the addition of last name and last 4 of SSN help the Veterans feel more secure about utilizing this check-in solution?
- Do Veterans understand how to check-in for 1 appointment via their mobile device when they have multiple appointments in one day?
- Do Veterans find value in seeing an itinerary of all their appointments for the day?
- Is the information provided in said itinerary sufficient, too much, or too little?
  - Particularly, are Veterans interested in seeing appointments that are past the time where they can check-in?
- Do the actions on the itinerary page align with Veteran expectations? Are there things that Veterans expect to be able to do from an itinerary page that they aren't able to do?
- Are the check-in appointment statuses helpful to Veterans?
- Would Veterans find repeating this process multiple times per day (for each appointment if they had multiple appts) burdensome or easy?

### Hypotheses to be tested
- The additional identity verification data points help alleviate some of the earlier security concerns that we heard from Veterans.
- Adding the capability to check in for multiple appointments throughout the day will not impact a Veterans ability to complete check-in for an individual appointment.
- The combination of a daily itinerary and statuses for each appointment will help provide clarity to the Veteran throughout their day at the medical facility.
- The Veteran might have additional expectations on what they could see or do on the itinerary, such as check-in for all their appointments for the day at once.
- Veterans might not initially understand why they have to repeat this process multiple times per day.

## Methodology
### Method and detailed research questions
We conducted 9 remote moderated tests via Zoom using the Perigean contract. The Veterans provided feedback using a poster, Twilio, and interactive UXPin prototype. They employed the laptop hugging method to enable easier transition and observations from the poster to text portion of the workflow. The complete conversation guide can be found on the [VA’s GitHUB](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/phase2-usability/conversation-guide.md).

<img width="1343" alt="Screen Shot 2021-10-05 at 4 20 50 PM" src="https://user-images.githubusercontent.com/66287082/136096842-78e6e9d1-70da-45f3-a347-555166ac0355.png">

### Participant Demographics
We spoke to 9 Veterans, who
- have a smartphone (4 iOS and 5 Android).
- currently use VA health care.
- had an in-person medical appointment at a VA facility within the last 2 years.
- had a variety of current check-in preferences:
 - 3 preferred the kiosk
 - 2 preferred to talk to staff members.
 - 4 had no preference between kiosk and staff.

<img width="637" alt="Screen Shot 2021-10-05 at 4 20 59 PM" src="https://user-images.githubusercontent.com/66287082/136096881-9a6d67c7-b43c-4c4a-bc1c-eae488f87ded.png">

## Research findings

### Key findings
- For most Veterans with smartphones, this implementation of online check-in was usable and well received.
- Seven out of nine participants had trouble creating the text message after reviewing the poster. 
- Making sure the wording and link looked like it came from VA helped Veterans to trust it and be more prone to click on it.
- Adding last name and last four digits of Social Security alleviated Veteran security concerns.
- Veterans want to be able to update their contact information with this check-in workflow; however, they accept the current workflow with the question “Do you need to update any information?” and directions to talk to staff to complete updates.
- Seeing a list of all the day’s appointments is valuable to Veterans.
- Seeing check-in statuses for each appointment is valuable to Veterans.
- More research is needed to determine if telemedicine appointments should be included or connected to the online check-in experience.
- Most Veterans would go to a staff member at the clinic if they had any questions while completing check-in.
- MyHealtheVet and VA mobile app users understood why this check-in appointment list existed and was different from their other appointment lists.
- Most Veterans understand why they can only check-in for one appointment at a time, but their expected starting point varied from the appointment list to the poster.

### For most Veterans with smartphones, this implementation of online check-in was usable and well received.
"[I'm] really in favor of this."

"It worked fast. I was surprised with what it did. I was a little impressed. It’s not bad at all; I thought it would be cumbersome...It would work for the majority. But in cases with handicap people or individuals that aren’t computer savvy, it would freak them out. I have seen people get frustrated."

### Seven out of nine participants had trouble creating the text message after reviewing the poster. 
What method did the participants try first to craft the text message:
- Five participants attempted to scan the QR code.
  - Four participants had trouble scanning. Three were iOS users and one was an Android user. The different scanners led to different workflows; some led to user confusion.
- One participant successfully started by creating a new text message.
- Three participants tried to call the phone number.
  - Our new hypothesis is that this may be due to using a full phone number for the test and not a short code like will exist in production.
<img width="451" alt="Screen Shot 2021-10-05 at 4 24 12 PM" src="https://user-images.githubusercontent.com/66287082/136097246-396efd1e-4b69-42ef-99a1-47df3c3b703c.png">

### Making sure the wording and link looked like it came from VA helped Veterans to trust it and be more prone to click on it. 
"It says check in for the VA appointment. This wouldn’t be an issue for me, because I know where I got the text from. There’s a lot of awareness that you shouldn’t click on anything on your phone."

- Three participants had similar comments to the one above. The other participants had no comments or complaints about this step in the workflow at all.
- This confirms that the changes made after the last usability study were correct and built Veterans’ trust in the link.
<img width="319" alt="Screen Shot 2021-10-05 at 4 24 53 PM" src="https://user-images.githubusercontent.com/66287082/136097346-63327537-e029-4c36-8e95-36cc55c7cb60.png">
_Caption: Link URL due to prototype. Actual URL is go.usa.gov link._

### Adding last name and last four digits of Social Security alleviated Veteran security concerns.
"It is basically the same information that you give someone when you are checking in with an individual. It is nothing different than doing that."
- Unlike previous studies, no participant expressed concern on how we were identifying them. 
  - All participants commented that last name and last four were expected and appropriate when checking in. 
    - Last four was preferred by all participants over entering their date of birth.
      - However, most participants felt similar to this participant, "Adding date of birth would be ok.” 
<img width="322" alt="Screen Shot 2021-10-05 at 4 26 17 PM" src="https://user-images.githubusercontent.com/66287082/136097536-9c77b941-a4ea-4bb6-976c-4550319d6bb7.png">

### Veterans want to be able to update their contact information within this check-in workflow; however, they accept the current workflow with the question “Do you need to update any information?” and directions to talk to staff to complete updates. 
These two quotes summarize the feedback received from all participants:
- "Well I would think it would be online like it is with everything else."
- "That seems reasonable." - in response to the current workflow.
<img width="258" alt="Screen Shot 2021-10-05 at 4 27 04 PM" src="https://user-images.githubusercontent.com/66287082/136097627-da6750dd-b9d6-436f-b994-ecd2ccccf58d.png">

### Seeing a list of all the day’s appointments is valuable to Veterans.
- All participants commented that they liked seeing a list of all their appointments for the day.
- Other suggestions made by Veterans when reviewing this page were:
  - The ability to refer to this list of appointments throughout the day.
  - The addition of room and floor numbers for each appointment.
<img width="289" alt="Screen Shot 2021-10-05 at 4 28 04 PM" src="https://user-images.githubusercontent.com/66287082/136097739-5db7dd58-ad56-4f61-ac3b-76a7f6d5d2bd.png">

### Seeing check-in statuses for each appointment is valuable to Veterans.
“The little instructions that are under the appointment are super valuable, because you can plan the time better."
- All but one Veteran found all of the following statuses helpful:
  - This appointment is past the time period for online check-in.
  - You already checked in for this appointment.
  - You can check in now for this appointment.
  - It is too early to check in for this appointment. Try again later.
  - Online check-in isn’t available for this appointment.
    - Multiple Veterans were concerned that we used the term “ineligible” to describe this status.
- The one Veteran didn’t want to see any appointment that they were too late to use mobile check-in.
<img width="298" alt="Screen Shot 2021-10-05 at 4 29 09 PM" src="https://user-images.githubusercontent.com/66287082/136097900-275892f8-2c7b-498b-91ea-50f3de0b948b.png">

### More research is needed to determine if telemedicine appointments should be included or connected to the online check-in experience.
- When eliciting initial interest in displaying telemedicine appointments within the online check-in experience, there was no consensus among the participants.
  - Participants ranged from “Yes, absolutely” and “I don’t see why not” to “Not sure” and “I don’t think so.”

### Most Veterans would go to a staff member at the clinic if they had any questions while completing check-in.
- All of the participants stated that they would go to a staff member with questions, because the staff members are “right there.”
  - Two participants were concerned that staff members wouldn’t be able to answer questions specifically about the online experience, but staff would be able to check them in using the normal in-person process.

### MyHealtheVet and VA mobile app users understood why this check-in appointment list existed and was different from their other appointment lists.
- Seven out of nine participants were MyHealtheVet (MHV) users.
- One participant utilized the VA mobile app.
- Multiple participants stated they used the MHV and mobile app appointment lists to prepare for future appointments and this appointment list was for day of activities.
- One participant suggested adding facility name to the appointment cards similar to MHV. It would help if they had appointments at multiple facilities that day.

### Most Veterans understand why they can only check-in for one appointment at a time, but their expected starting point varied from the appointment list to the poster.
- All Veterans, except one, expected or understood checking in for one appointment at a time.
  - "I like it, that way it does not confuse you by having to check in all at once."
  - One Veteran wanted to be able to check-in for all of their appointments for the day at once.
- What Veterans tried first, in order to check in for a second appointment:
  - Five would start at the poster again.
  - Three would go back to the appointment list web page.

### Additional findings
- One Veteran saw the links available in the mobile header and footer as confusing in this workflow.
  - About the header...“I am a little confused on the search menu and sign in, where will it take you to. I am not really sure what I would be signing into. What menu would come up; I have no idea what it would show me. I don’t think it needs to be there. When you are in this box to check in, you aren’t trying to log into ebenefits.”
  - About the footer…“It says here if you need help ask a staff member ,but you have the contact us here. If someone is new to it, then they may think of hitting contact us and that it would be someone in the office.”

## Recommendations
- Explore ways to improve the first step in our workflow.   
  - Look into ways to help Veterans understand how to scan QR codes, such as a list of recommended scanners with instructions.
  - Change the first step completely.
    - If we do, look into more accessible options than a poster.
- Don’t change the wording or link address sent via SMS.
- Keep the addition of last name and last four of Social Security as the way to verify identity.
  - If the removal of Social Security numbers is mandated, replace it with date of birth.
- Keep the current “Do you need to update any information?” page, because the functionality to review and update their contact information is coming soon.
  - This also helps staff capture information updates, which is an important metric for staff performance.
- Keep the daily itinerary of all appointments, but complete future research into 
  - how to provide a reference appointment list to Veterans (connection to VAOS),
  - and wayfinding (room and floor numbers).
- Implement all check-in statuses on the appointment list, but remove the term “ineligible” from the wording within the one status.
- Conduct more research to understand all the telemedicine use cases and how they connect to online check-in.
- Remove the phone numbers from the “Need help” section, since most Veterans would go to a staff member with questions anyway and clinic phones are transitioning to the call center.
- Add the facility name to the appointment list to address the scenario of appointments at different facilities within one day.
- Work with engineering on behaviors when a Veteran attempts to check-in for their second appointment of the day.

