# Appointments Oracle Health Integration and Scheduling Improvements Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Product Name, Team Name**

Date: 08/12/2024

Melissa Lefevre melissa.lefevre@va.gov, Peter Russo Peter.russo@adhocteam.us

[Slide deck](https://github.com/user-attachments/files/16802437/Oracle.Health.integration.and.Scheduling.improvements.research.pdf)


**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)

## Research Goals

Evaluate a scheduling flow for booking an appointment at an Oracle Health facility, including selecting a provider during scheduling.

Test concepts for improving the scheduling flow, including:
- Providing an option to quickly schedule from previous appointments.
- Showing locations where the Veteran has scheduled recently first in the "choose a location" list.
- Better timing for displaying a message that the tool is not intended for urgent care.
- Test a concept for sharing important messages and tasks with Veterans.

Outcome:
This research will provide insights into whether the new features — such as scheduling from recent appointments, sorting by recent locations, and helpful alerts and reminders — make the process faster, easier, and more valuable for Veterans.

After this research is complete, we will:
- Improve the user experience for Oracle Health scheduling based on feedback.
- Choose which scheduling improvements are most valuable for the dev team to implement.
- Provide teams working on appointment notifications with the results of the study that show how Veterans responded to the notification workflow.

## Research Questions

**Oracle Health scheduling:**
1. What information do Veterans want when deciding between providers?
2. Is it clear that these are providers they've seen before?
3. What are their expectations around requesting an appointment with a different provider?

**Immediate care alerts:**
1. Is it clear to Veterans that the tool is not for urgent medical needs?
2. Do Veterans find the warnings about urgent medical needs necessary, helpful, and timely, or frustrating and unnecessary?
3. Is having the "I need immediate care" option helpful?

**Quickly schedule based on previous appointments:**
1. Does scheduling from previous appointments make the scheduling process faster and easier for Veterans?
2. Does scheduling from previous appointments add other value for Veterans?

**Recent locations:**
1. Is it clear that the list is sorted by locations they've visited recently?
2. Does the "Sort by recent locations" feature make scheduling easier for Veterans?
3. Does the "Sort by recent locations" add value?

**Notifications:**
1. Do Veterans notice the notification bell when it becomes active?
2. Are Veterans able to easily navigate to their notifications?
3. For each type of notification, is the content clear or confusing?
4. For each type of notification, is the CTA clear or confusing?
5. What do they expect the next step to be after clicking the CTA?
6. Do they distinguish between tasks that need their attention vs. their activity?

## Methodology 

For this usability study, we used the moderated usability testing method. This approach involved live, one-on-one sessions through Zoom where a facilitator guided participants through a series of tasks using a prototype of the scheduling flow. The facilitator observed participants' interactions, collected their feedback, and probed for deeper insights into their experiences.

This test included 2 versions of the appointments list:

• Mobile (4 Participants)
• Desktop (9 Participants)

**Location:** Zoom

## Hypotheses and Conclusions

**Hypothesis 1:** As a Veteran, I can choose my provider when scheduling at an OH facility.
- Veterans will want to choose a specific provider for most types of care.
  - TRUE: Several participants expressed they would prefer to see who they are familiar with, otherwise would like specific information about the providers to make an informed decision. (Furthermore, 5 participants expressed a desire to know if they have seen a provider before, as they do not always remember names but recognize the importance of continuity in care.)
- Veterans' provider preferences change between primary care and specialty care.
  - MIXED: This was highly situation-dependent. Participants expressed an expectation for a "no preference" option, especially for specialty care (Nutrition and food) or in cases of needing care for an urgent matter, to prioritize seeing the first available provider.
- Veterans' provider preferences change between established care and new care.
  - INCONCLUSIVE: While 5 participants mentioned detailed provider information is important for choosing a provider, we did not specifically test new versus established providers. Further research is needed to determine if preferences differ between established and new care.
- Veterans will want to choose a provider based on who has the soonest availability.
  - Likely TRUE: While not universally observed, 3 out of 10 participants prioritized booking the first available appointment over specific provider preferences. 

**Hypothesis 2:** As a Veteran, I can easily schedule at locations I've recently attended.
- Choosing from locations where they've recently scheduled an appointment will make it faster and easier to schedule.
    - INCONCLUSIVE: Without using the Veterans' real data, it is difficult to test this hypothesis. 
- Veterans will appreciate and find value in the default "Sort by Recent Locations."
  - Likely FALSE: There was a stronger preference among participants for sorting by proximity, indicating that the "Sort by Recent Locations" option may not be as valuable to them without user data to confirm otherwise.


 

**Hypothesis 3:** As a Veteran, I can quickly schedule from previous appointments.

- Veterans will want a shortcut to schedule appointments similar to those they've had in the past.
  - TRUE: Participants appreciated how this feature streamlined the appointment making process and provided details on who they saw.
- Veterans will have a distinct preference for scheduling using the past provider or clinic flow compared to the "type of care" route.
  - TRUE: When asked to schedule an appointment, they would first check to see if they could schedule from a past appointment listed. 
- Scheduling appointments similar to those they've had in the past will help Veterans schedule more quickly.
  - TRUE: See above


**Hypothesis 4:** As a Veteran, I need helpful reminders that the scheduling tool is not for emergencies in appropriate places in the process so that it is not an annoyance.

- Veterans will find these warnings necessary.
  - TRUE: Several participants mentioned the importance of the alert for stopping to consider if they needed immediate care. 
- Veterans will find these warnings helpful.
  - TRUE: Participants generally found the warnings helpful. 
- Veterans will find that the alert is timely and appropriate.
  - MIXED: While several participants found the alert timely and necessary, some expressed irritation or found it redundant. 

**Hypothesis 5:** As a Veteran, I want to be alerted when appointment events happen so I know exactly what I need to do next.
- Veterans will be able to find their notifications without prompting.
    - FALSE: Participants needed heavy prompting
- Veterans will understand how to review their notifications.
    - TRUE: Participants' general response to the red bell was to click on it. 
- Veterans will find their notifications helpful.
  - TRUE: Some Veterans mentioned the reminders for the actionable items being helpful.

## Key Findings

### Oracle Health Provider selection - Key Findings


1. Participants indicated a need to know if the providers listed were ones they have seen before, and said it would be nice to see provider experience, provider availability, and the option to view provider details when selecting a provider.
2. It wasn't clear to 8 participants that they had a previous relationship with providers in the list.
3. Only 1 participant seemed to understand that request meant they were not going to direct-schedule but rather go through a different process.
   
![Screenshot 2024-08-29 at 10 03 25 AM](https://github.com/user-attachments/assets/5a0e1d25-66eb-4df7-afd3-b746db039bb6)


### Details of Findings and Recommendations


#### 1. Participants would like detailed information to make an informed provider selection

  
5 participants wanted  to know if they have seen a provider before, as they do not always remember names but recognize the importance of continuity in care. One participant mentioned, “I don't typically remember who I've seen in the past” [P5]. Another supported this; “Yes, that would be helpful because I don't always remember the names of the doctors I've seen” [P10]. Additionally, another Veteran said, “Now what would really be handy is if it showed me which provider I had in the past” [P5].

3 participants would like to have a "no preference" option, so that they can prioritize availability over provider familiarity. One participant expressed, “I don't know who has the soonest availability. I just wanna get in. So I have no preference” [P10]. Another Veteran mentioned, “If I clicked both I’d get both their schedules. Say if I’m looking for the first available” [P2]. 

5 participants emphasized the importance of seeing details about the provider they are choosing such as the experience level of their providers and having the letters after their name spelled out. One participant stated, “I personally, would like to see years of experience. You know, when I go to a surgeon I want to know that I'm not their 1st operation” [P8]. “(Referring to the RD after the provider’s name) I'd love to see these codes spelled out. It's not necessarily gonna change how I do things. But it might” [P5].


#### 2. It was not clear that these are providers they have seen before

One participant said, "I would think it'd be easier if it indicated that these were people that I've seen in the past" [P4], highlighting the importance of clear indicators for past interactions. Another participant echoed this sentiment, stating, "These might be people, doctors, nutritionists who I've seen before - or maybe I've never seen them before" [P12], emphasizing the confusion caused by the current lack of clarity in the content.


#### 3. The ambiguity of the "request" option was a recurring concern. 

Participants expressed a variety of expectations and concerns regarding the option to request an appointment with a different provider. Several participants anticipated that the "request" option would expand their choices beyond the initially presented options. For example, one participant thought the request option would "let you choose from more providers" [P1]. Another was hoping for the ability to "get an appointment for tomorrow at 2 o'clock" with a different provider [P12].

  
Recommendations:



* Clarify that these are providers they have seen in the past.
* Allow for participants to select multiple or an option that says no preference, show me all available times.
* Consider displaying details like full credentials, years of experience, and other valuable provider or clinic data.  It’s particularly relevant when choosing a new provider but also useful for adding context to providers they have a relationship with. Review past studies on preferred provider information.
* Consider including the date they last saw the provider.
* Clarify what requesting an appointment means and how it is a different process entirely.


### Immediate care - Key findings



1. In life-threatening situations, participants would not use appointments on VA.gov.
2. In a non-emergency scenario where they need immediate medical care, 4 participants would try to direct-schedule a same day appointment, indicating that it is not clear the scheduling tool is not meant for immediate care. 
3. 10 participants reacted positively to the resource for "how to choose between urgent and emergency medical care." 
4. 4 participants appreciated the urgent medical needs alerts, finding them useful and timely, while 4 others perceived them as frustrating or unnecessary.
5. Overall the "I need immediate care" option as a type of care in the scheduling tool was ineffective.

![Screenshot of an immediate care alert letting the user know this tool os not meant for emergencies](https://github.com/user-attachments/assets/a00cf069-299e-4c47-b88e-0046c8830ee6)



### Details of Findings 



#### 1. When it comes to life-threatening emergencies, all participants made it clear they would not use the scheduling tool. 


One participant stated, "I know if I have an emergency I'm probably not clicking around here" [P7]. Another echoed this sentiment, saying, "if I'm in an emergency I'm not gonna hop on my laptop" [P11]. A third participant reinforced this view by explaining, "if it's a severe emergency, I would certainly have to ignore that, you know. I just call 911. Obviously" [P8].



#### 2. Some participants were unclear that the scheduling tool should not be used for same day medical care needs.

When asked how they would handle a high fever that wasn't improving, 4 out of 10 participants indicated they would use VA.gov to schedule an appointment and 2 of 10 said they would message their doctor. For example this participant said, “I would go to start scheduling to see if I could get a fairly soon appointment.” [P4]  


A couple of participants said they would call their Primary Care Provider and we heard mention of a nurse hotline a couple of times. “I would try to call First to the primary care person, so I’d look at the details of the Primary care and see if there's a phone number or something like that. It's not on here, but I know that there's a 24 hr VA, nurse Hotline.” [P12]   


Only 2 participants mentioned going to urgent care. This misunderstanding is critical because the VA.gov appointments tool and secure messaging are not meant for immediate care. They are designed for scheduling future appointments, not same-day needs. Additionally, secure messages might not be read for up to three days.



#### 3. There was an overwhelmingly positive reaction to the resource for "how to choose between urgent and emergency medical care." 

Overall, participants appreciated the link and found it useful. One participant noted "That's a good one. I would expect that to give me a quick explanation, a little decision tree kind of information, maybe even a little box" [P5]. This finding is also supported by the finding that suggests participants faced uncertainty around what is considered an urgent medical need, and whether the scheduling tool can be used for scheduling immediate care or not. 

Participants expressed a strong desire for the information on "how to choose between urgent and emergency care" to be more prominently placed within the scheduling tool interface.   
  
As this participant stated, having it accessible before the "start scheduling" button would reduce the number of clicks. "I would like to see this, 'how to choose between urgent emergency care' before clicking on the scheduling button. Because that might cut down on the amount of clicks I need to go through trying to find stuff" [P4]. Another participant stated "Urgent care and emergency", I think that's important, because I might forget about it. So I would like to see that almost every time in this appointment area" [P3].



#### 4. Mixed reactions to the urgent medical need alerts

Some participants found the alerts beneficial, prompting them to stop and think about their medical needs.  P5 noted, "I like that 'cause it makes me think about whether I need an emergency call or not."

While understanding the necessity, participants like P4 found the reminders somewhat redundant: "It's telling me, don't make emergency appointments, which is a little redundant... but that's fine. I understand why you want to make that available for urgent and emergency issues."

A few participants expressed irritation with the constant reminders. P8 shared, "I get a little... irritated just a little bit by the constant bombardment of crisis."



#### 5. Having the "I need immediate care" option as a type of care was misleading

Participants expressed that having "I need immediate care" listed as a type of care was misleading. 7 participants expected to be able to schedule an immediate appointment "But it doesn't let me schedule an appointment here, and that's what I would expect." [P3] 

  
Recommendations:

![Screenshot of the immmediate care alert that is triggered when the user types in alarming signs and symptoms](https://github.com/user-attachments/assets/4e1aa8a2-37a8-4052-b3a1-54b6463d8e81)

* Consider where the link to the resource “how to choose between urgent and emergency care" might live within the appointments tool so that Veterans can go to it when they need it.
* When making the emergency alerts, take into consideration that the participants we talked to know that in the case of an emergency, they are not likely the scheduling tool on VA.gov.  Consider reducing the amount of content around “call 911 if this is an emergency” as participants seem to be aware of this and might just skip over that information.
* Since participants showed uncertainty as to whether or not they should schedule same day appointments, consider providing them with an educational message that the Appointments tool is not meant for same day or urgent care appointments the first time they go to schedule.
* Consider making the nurse hotline available on the appointments scheduling tool.
* Implement a system that provides personalized alerts based on the signs and symptoms entered in the "details about your appointment" field. Tailoring information to the Veteran’s input helps to ensure relevant and timely guidance at the moment they need it.


### Express Scheduling (Quickly schedule based on previous appointments) - Key findings



1. 10 participants found scheduling from previous appointments adds value and is faster and easier to schedule. 
2. 5 participants had a difficult time finding and clicking the "I need a different appointment" option.  
3. 2 participants noted the wording at the top of the list "choose an appointment you've had in the past" was slightly confusing.  
4. 5 participants found the wording  "review available appointments" misleading. 
5. The organization of providers listed was validated as  4 participants prefer primary care appointments listed first and 5 participants noted liking the list organized by recent visits.
![Screenshot of a list of providers the Veteran has seen in the past to schedule from](https://github.com/user-attachments/assets/e651bc81-b1ae-4518-8598-55d8396268c2)


### Details of findings


#### 1. Participants find scheduling from previous appointments faster and easier

  
Participants indicated that scheduling from previous appointments makes the process faster and easier. Many participants appreciated the streamlined process, as it allowed them to quickly choose from past appointments without navigating multiple screens or re-entering information. One participant noted, "If I'm just doing routine work, it's really nice to bring up my past appointments and just continue from there" [P7]. 

Participants also found it particularly helpful for frequent visits, such as physical therapy, with one stating that it "streamlines it, and it makes it a little quicker" [P2]. Having a list of previously visited clinics and providers made it easier to schedule follow-up appointments.


#### 2. Some participants struggled to find and understand the "I need a different appointment" option.

5 participants had a difficult time finding and clicking the "I need a different appointment" option. Either they saw it but did not think that is what they needed or it was difficult to find due to not being apparent visually. One participant suggested "Move 'I need a different appointment' higher. Some of us old people don't always scroll all the way to the bottom." Another participant said the wording was confusing "What care do you need" Because that "I need a different appointment". It's like you already have an appointment, but I gotta reschedule it, or something like that. That's a little confusing to me."


#### 3. "Choose an appointment you've had in the past" caused confusion

One participant mentioned, "It sounds like they're all connected like, if I was to click on my primary care and review available appointments, that would also show potential appointments in the future and the appointments I've had in the past" [P1]. Another participant expressed that the phrase led them to expect a different functionality, stating, "When I first saw that I almost expected these to show me ‘do you want another appointment for this condition?’  which is not what this is? So I look at that and I think it should be ‘make an appointment with a provider you've seen in the past’" [P5]. 


#### 4. The wording "Review available appointments" was misleading to some. 

5 participants were surprised that the next step had them selecting a patient-indicated date. They expected to go directly to the availability calendar. As noted by one participant, "If I clicked this I'd expect it to take me to the calendar I saw before that shows availability with some dates grayed out" [P10]


#### 5. How we had the list organized was validated with 4 participants preferring primary care first, and 5 preferred to see most recently visited. 

Some thought that primary care should always be easily accessible due to its general importance and frequent use. As P3 noted, "Primary care should always show up here... specialty appointments sort of at the bottom." Reflecting this sentiment, P11 simply stated, "Primary care would be at the top of the list." And another said "You're probably going to log on here and go to primary care most of the time." [P7]  


Participants also expected them to be organized by recency. This participant stated, "I would expect it to be currency so most recent to oldest." [P5] We heard this several times including by P4 "Based on where the clinics that I've seen most recently by date."  
  
One participant brought up a question around seeing multiple providers at the same office, "Sometimes when I go to the VA I see someone different. So if I've seen two dermatologists, will both pop up here, or just the most recent?” they added by suggesting “ A date would help me remember who I saw so I could schedule with them."

 

Overall, the common theme was the importance of organizing appointments with primary care at the top, and then by recency. 

Recommendations: 



* Consider adding this feature to the appointments tool with some adjustments to content and layout - see other recommendations below.
* Improve the content and placement of the option to choose a type of care that is not listed from their past appointments.
* Consider iterating on this content. One participant suggested “make an appointment with a provider you've seen in the past.” However, since it will not always be choosing a provider, sometimes it will be a clinic, choosing a provider you’ve seen in the past might not make sense. Clearly communicate what the next step is to align expectations.
* Consider changing the verbiage to accurately communicate what the next step is to align expectations as “"review available appointments" misleading.
* Continue with organizing appointments with primary care at the top, and then by recency. 


### Recent locations - Key findings



1. The feature "Sort by Recent Locations" is clearly understood by participants as listing places they have visited recently.
2. The "Sort by Recent Locations" feature adds value for some participants, but the effectiveness is inconclusive without real user data.  



### Details of findings


#### 1. The feature "Sort by Recent Locations" is clearly understood by participants as listing places they have visited recently.

When asked what sort by recent location means to them, all participants's responses indicated that it means the list is of places they have been to recently. For example, P5 said "okay, sort facilities by recent locations. Oh, I like that default. It means. Where have I been recently."


#### 2. The "Sort by Recent Locations" feature adds value for some participants, but  its effectiveness is inconclusive without real user data. 

Without having the participants' real data, the sort by recent locations part of the study might not be representative of how they would interact with this part of the scheduling process. One participant had a difficult time relating to the fake data "I only have one location, so I can't relate to all of these" [P11].

Recommendation:  
Test in GA4 and DataDog RUM to see if users are changing the default from recent to something else. 


### Notifications - Key findings



1. With the exception of one person, participants did not notice when the bell became active and lit up red. 
2. 12 participants understood that the bell was clickable and there was something for them to do or read if they clicked on it.  
3. Overall participants understood each notification, however there were a few areas of content that caused confusion among some. 
4. A couple of participants called out that the red background for the notifications CTA was alarming.

![Screenshot of the top navigation bar on VA.gov with an active and inactive bell icon](https://github.com/user-attachments/assets/9b0e40b6-82fd-47b2-b35b-97a6589fce10)

![Screenshot of a list of notifications about upcoming and past appointments and travel claims](https://github.com/user-attachments/assets/460b58f6-a09e-4a05-8a96-b9b6086c7aa0)



### Details of findings


#### 1. Participants did not notice when the bell became active and lit up red. 

The majority of patients did not notice the bell change to red. As explained by one participant, "If you had not asked me, I would not have seen it."[P10]  



#### 2. Participants recognize the Bell icon as an actionable item.

Participants understood that the bell was clickable and there was something for them to do or read if they clicked on it.  While there were a variety of expectations on what the bell meant, participants knew it was meant to notify them of something. As one participant explained "I have some sort of notification, because it's you know, it's highlighted, or it's lit up." [P2]


#### 3. Participants understood notifications, but some content areas caused confusion



1. A couple of participants expressed confusion around the age of the notification, for example "Is it going to be only good for an hour and then it disappears?" P8
2. A couple of participants were unaware of what an after visit summary was. While one person understood the concept but just had never heard of it another was confused because they thought it was for an upcoming appointment, not past "(After visit summary) that to me is really confusing. What do you mean? Your after-visit summary is ready for your appointment? That's like before-visit summary?"
3. Overall, participants understood the expiration on the referral with the exception of a couple of people who were confused about what exactly expires means. " I will guess that the referral is not valid after December first. Okay, that's a guess. or is it that the message expires on December first?" [P5]
4. A couple participants expressed uncertainty as to whether the date stated was the date that the staff did something in the system such as the staff canceled your appointment on this date or if it meant that the staff canceled the appointment you had scheduled for a specific date. This came up for the after visit summary too.
5. Participants expressed an expectation for the travel claim feature to directly take them to the relevant claim site for filing travel claims. "start a travel claim would take me to the travel claim site to start and to file the claim, which I've always done on a different site. so because I'm already logged in, it would hopefully just automatically, you know, transfer my login to the other site. " [P2]


#### 4. The red bell icon was perceived as being linked to the VCL or something alarming.

A couple of participants gave us feedback that the red was too alarming. “It's more alarming. The bell with the red is like alarming, alarming, alarming. Versus being like, Hey, you have a notification” [P10] Another participant made thoughts it could be connected to the Veteran Crisis Line "With the box above it (VCL CTA), it might be tied to that Veteran crisis line. I don't know. It's obviously some type of emergency thing, I think." [P11]

Recommendations:



* Conduct further research with a focus on usability and content that explores the impact of notifications in a broader context, beyond just appointment scheduling.
* Determine if the age of the notification adds value and how we might be able to clarify what it is. 
* Look into how we inform the Veteran about what their AVS is and how to use it.
* Consider how we might be able to clarify what “expires” means in this context.
* Consider ways to clarify that the date stated is the date of the appointment they had.
* Consider other colors in the VA design system to use to communicate a new notification.


### Secondary Findings and recommendations

#### 1. Misinterpretation of Date Availability:

5 participants were confused about the dates displayed on the PID page, thinking they  were available, leading to confusion when dates became unavailable by the time they reached the calendar. There was a consistent expectation that selected dates should directly reflect availability.


#### 2. Difficulty Navigating Back:

3 participants had difficulty identifying where to go next or how to return to the main appointments list when they were done with the task of scheduling an appointment. 

#### 3. Would like to know the duration of the the appointment:

One participant wanted to be able to see how long the appointment will be. "It would be helpful for me if I had a day like yesterday where I had 5 appointments. And if you have one that's 10 minutes (like I did)  and one that's over an hour, that's good to know so you can schedule them properly. They should require that a patient knows how long an appointment is, or default it to an hour"

Recommendations



1. Consider styling the dates displayed on the PID page to have a neutral look to avoid implying they are available. Avoid using gray chips for this purpose, as they are specifically used to indicate availability elsewhere.
2.  Consider how we might be able to increase the affordance on the “back to appointments option”  for users to return to the main appointments page. 
3. Consider adding the duration of an appointment time slot so the Veteran can plan accordingly. 

## Who We Talked To
<img width="783" alt="Screenshot 2024-07-29 at 10 42 27 AM" src="https://github.com/user-attachments/assets/2de8311e-f63e-4ec1-bb7e-bbdc2c228c52">

**Recruitment criteria**
We talked to **13 participants.**

**Audience segment:**
- Veterans: 12 
- Caregivers: 1 
- Family members of a Veteran: 0  

**Gender:**
- Male: 10 
- Female: 3 

**LGBTQ+:**
- Transgender: 0 
- Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
- Gay, lesbian, or bisexual: 0

**Devices used during study:** 
- Desktop: 9 
- Tablet: 0 
- Smart phone: 4 
- Assistive Technology: 0

**Age:**
- 25-34: 0
- 35-44: 2
- 45-54: 1
- 55-64: 2
- 65+: 8
- Unknown: 0

**Education:**
- High school degree or equivalent: 0
- Some college (no degree): 1
- Associate's degree, occupational: 1
- Associate's degree, academic: 1
- Bachelor's degree: 6
- Master's degree: 1
- Doctorate degree: 1
- Professional degree: 1
- Unknown: 0

**Geographic location:**
- Urban: 11
- Rural: 2
- Unknown: 0

**Race:**
- White: 13
- Black: 0
- Hispanic: 0
- Biracial: 0
- Asian: 0
- Native: 0

**Disability and Assistive Technology (AT):**
- Cognitive: 4
- AT beginner: 0
- AT advanced user: 0
- Desktop screen reader: 0
- Mobile screen reader: 0
- Magnification/Zoom: 0
- [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
- Hearing aids: 0
- Sighted keyboard: 0
- Captions: 0

## Underserved Groups We Haven’t Talked To 

This research does not include the perspectives of the following marginalized Veteran groups:

* Black, Hispanic, Biracial, Asian, Native
* LGBTQ+


