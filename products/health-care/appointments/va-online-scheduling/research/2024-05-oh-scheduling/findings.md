# Appointments Oracle Health Integration and Scheduling Improvements Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Product Name, Team Name**

Date: 08/12/2024

Melissa Lefevre melissa.lefevre@va.gov, Peter Russo Peter.russo@adhocteam.us

_Once you've presented your research readout to your team, if you have a deck, insert a link to it here_ [Research readout](link here)

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

• Mobile
• Desktop

**Location:** Zoom

## Hypotheses and Conclusions

**Hypothesis 1:** As a Veteran, I can choose my provider when scheduling at an OH facility.
- Veterans will want to choose a specific provider for most types of care.
  - TRUE: Several veterans expressed they would prefer to see who they are familiar with, otherwise would like specific information about the providers to make an informed decision. (Furthermore, 5 Participants expressed a desire to know if they have seen a provider before, as they do not always remember names but recognize the importance of continuity in care.)
- Veterans' privider preferences change between primary care and specialty care?
  - Mixed: This was very situaltion depedent. Veterans expressed the desire for a "no preference" option for speciality care or in an immediate health care need in order to see the first available. 
- Veterans' privider preferences change between established care and new care?
  - TRUE: Veterans mentioned the desire for choosing a privider based on the following: (5 participants indicated a clear need for more detailed information about each provider, including credentials, specialties, and experience.)
- Veterans will want to choose a provider based on who has the soonest availability.
  - TRUE: 3 participants prioritize booking the first available appointment over specific provider preferences.

**Hypothesis 2:** As a Veteran, I can easily schedule at locations I've recently attended.
- Choosing from locations where they've recently scheduled an appointment will make it faster and easier to schedule.
    - INCONCLUSIVE: Without using the Veterans' real data, it is difficult to test this hypothesis. 
- Veterans will appreciate and find value in the default "Sort by Recent Locations."
  - FALSE: There was a stronger preference to see what is colsest to them.  

**Hypothesis 3:** As a Veteran, I can quickly schedule from previous appointments.

- Veterans will want a shortcut to schedule appointments similar to those they've had in the past.
  - TRUE: Veterans appreciated how this feature streamlined the appointment making process and provided details on who they saw.
- Veterans will have a distinct preference for scheduling using the past provider or clinic flow compared to the "type of care" route.
  - TRUE: When asked to schedule an appointment, they would first check to see if they could schedule from a past appointent listed. 
- Scheduling appointments similar to those they've had in the past will help Veterans schedule more quickly.
  - TRUE: See above


**Hypothesis 4:** As a Veteran, I need helpful reminders that the scheduling tool is not for emergencies in appropriate places in the process so that it is not an annoyance.

- Veterans will find these warnings necessary.
  - TRUE Several participants mentioned the importance of the alert for stopping to consider if they needed immediate care. 
- Veterans will find these warnings helpful.
  - TRUE Participants generally found the warnings helpful. 
- Veterans will find that the alert is timely and appropriate.
  - MIXED: While several participants found the alert timely and necessary, some expressed irritation or found it redundant. 

**Hypothesis 5:** As a Veteran, I want to be alerted when appointment events happen so I know exactly what I need to do next.
- Veterans will be able to find their notifications without prompting.
    - FALSE: Veterans needed heavy prompting
- Veterans will understand how to review their notifications.
    - TRUE: Veterans general response to the red bell was to click on it. 
- Veterans will find their notifications helpful.
  - TRUE: Some veterans mentioned the reminders for the actionable items being helpful.

## Key Findings

### OH Provider selection - Key Findings

1. Participants indicated a need to know if the providers listed were ones they have seen before and said it would be nice to see provider experience, provider availability, and the option to view provider details when selecting a provider.
2. It wasn't clear to 8 participants that they had a previous relationship with providers in the list.
3. Only 1 participant seemed to understand that request meant they were not going to direct-schedule but rather go through a different process. 

### Details of Findings and Recommendations

#### 1. Participants would like detailed information to make an informed provider selection

5 participants wanted to know if they have seen a provider before, as they do not always remember names but recognize the importance of continuity in care. One participant mentioned, “I don't typically remember who I've seen in the past” [P5]. Another supported this; “Yes, that would be helpful because I don't always remember the names of the doctors I've seen” [P10]. Additionally, another Veteran said, “Now what would really be handy is if it showed me which provider I had in the past” [P5].

3 participants would like to have a "no preference" option, so that they can prioritize availability over provider familiarity. One participant expressed, “I don't know who has the soonest availability. I just wanna get in. So I have no preference” [P10]. Another Veteran mentioned, “If I clicked both I’d get both their schedules. Say if I’m looking for the first available” [P2]. 

5 participants emphasized the importance of seeing details about the provider they are choosing such as the experience level of their providers and having the letters after their name spelled out. One participant stated, “I personally, would like to see years of experience. You know, when I go to a surgeon I want to know that I'm not their 1st operation” [P8]. “(Referring to the RD after the provider’s name) I'd love to see these codes spelled out. It's not necessarily gonna change how I do things. But it might” [P5].

#### 2. It was not clear that these are providers they have seen before

One participant said, "I would think it'd be easier if it indicated that these were people that I've seen in the past" [P4], highlighting the importance of clear indicators for past interactions. Another participant echoed this sentiment, stating, "These might be people, doctors, nutritionists who I've seen before - or maybe I've never seen them before" [P12], emphasizing the confusion caused by the current lack of clarity in the content.

#### 3. The ambiguity of the "request" option was a recurring concern. 

Participants expressed a variety of expectations and concerns regarding the option to request an appointment with a different provider. Several participants anticipated that the "request" option would expand their choices beyond the initially presented options. For example, one participant thought the request option would "let you choose from more providers" [P1]. Another was hoping for the ability to "get an appointment for tomorrow at 2 o'clock" with a different provider [P12].

Recommendations:

* Clarify in the sub text that these are providers they have seen in the past.
* Provide an option that focuses on provider availability. For example, allow for participants to select multiple or an option that says no preference, show me all available times.
* Consider displaying details like full credentials, years of experience, and other valuable provider or clinic data. It’s particularly relevant when choosing a new provider but also useful for adding context to providers they have a relationship with. Review past studies on preferred provider information.
* Indicate that these are providers they have seen in the past.
* Consider including the date they last saw the provider.
* Look into ways to clarify what requesting an appointment means and how it is a different process entirely.

### Immediate care - Key findings

1. In life-threatening situations, participants would not use appointments on VA.gov.
2. In a non-emergency scenario where they need immediate medical care, 4 participants would try to direct-schedule a same-day appointment, indicating that it is not clear the scheduling tool is not meant for immediate care. 
3. 10 participants reacted positively to the resource for "how to choose between urgent and emergency medical care." 
4. 4 participants appreciated the urgent medical needs alerts, finding them useful and timely, while 4 others perceived them as frustrating or unnecessary.
5. Overall the "I need immediate care" option as a type of care in the scheduling tool was ineffective. 

### Details of Findings

#### 1. When it comes to life-threatening emergencies, all participants made it clear they would not use the scheduling tool. 

One participant stated, "I know if I have an emergency I'm probably not clicking around here" [P7]. Another echoed this sentiment, saying, "if I'm in an emergency I'm not gonna hop on my laptop" [P11]. A third participant reinforced this view by explaining, "if it's a severe emergency, I would certainly have to ignore that, you know. I just call 911. Obviously" [P8].

#### 2. Some participants were unclear that the scheduling tool should not be used for same-day medical care needs.

When asked how they would handle a high fever that wasn't improving, 4 out of 10 participants indicated they would use VA.gov to schedule an appointment and 2 of 10 said they would message their doctor. For example, this participant said, “I would go to start scheduling to see if I could get a fairly soon appointment.” [P4].

A couple of participants said they would call their Primary Care Provider and we heard mention of a nurse hotline a couple of times. “I would try to call First to the primary care person, so I’d look at the details of the Primary care and see if there's a phone number or something like that. It's not on here, but I know that there's a 24 hr VA, nurse Hotline.” [P12].

Only 2 participants mentioned going to urgent care. This misunderstanding is critical because the VA.gov appointments tool and secure messaging are not meant for immediate care. They are designed for scheduling future appointments, not same-day needs. Additionally, secure messages might not be read for up to three days.

#### 3. There was an overwhelmingly positive reaction to the resource for "how to choose between urgent and emergency medical care." 

Overall, participants appreciated the link and found it useful. One participant noted, "That's a good one. I would expect that to give me a quick explanation, a little decision tree kind of information, maybe even a little box" [P5]. This finding is also supported by the finding that suggests participants faced uncertainty around what is considered an urgent medical need and whether the scheduling tool can be used for scheduling immediate care or not. 

Participants expressed a strong desire for the information on "how to choose between urgent and emergency care" to be more prominently placed within the scheduling tool interface. 

As this participant stated, having it accessible before the "start scheduling" button would reduce the number of clicks. "I would like to see this, 'how to choose between urgent emergency care' before clicking on the scheduling button. Because that might cut down on the amount of clicks I need to go through trying to find stuff" [P4]. Another participant stated "Urgent care and emergency, I think that's important, because I might forget about it. So I would like to see that almost every time in this appointment area" [P3].

#### 4. Mixed reactions to the urgent medical need alerts

Some participants found the alerts beneficial, prompting them to stop and think about their medical needs. P5 noted, "I like that 'cause it makes me think about whether I need an emergency call or not."

While understanding the necessity, participants like P4 found the reminders somewhat redundant: "It's telling me, don't make emergency appointments, which is a little redundant... but that's fine. I understand why you want to make that available for urgent and emergency issues."

A few participants expressed irritation with the constant reminders. P8 shared, "I get a little... irritated just a little bit by the constant bombardment of crisis."

#### 5. Having the "I need immediate care" option as a type of care was misleading

Participants expressed that having "I need immediate care" listed as a type of care was misleading. 7 participants expected to be able to schedule an immediate appointment "But it doesn't let me schedule an appointment here, and that's what I would expect." P3.

Recommendations:

* When making the emergency alerts, take into consideration that the participants we talked to know that in the case of an emergency, they are not likely the scheduling tool on VA.gov.
* The first time a Veteran uses the appointments scheduling tool provide them with an educational message that the Appointments tool is not meant for same-day or urgent care appointments. However, consider dropping the call 911 if this is an emergency as app participants know that that was the case.
* Consider making the nurse hotline available on the appointments scheduling tool.
* Consider where the link to the resource “how to choose between urgent and emergency care" might live within the appointments tool so that Veterans can go to it when they need it.
* We don’t recommend having an all-encompassing emergency alert at the beginning of the flow because it is a lot to read through and often ignored.
* We do recommend intercepting the Veteran with a personalized alert according to the signs and symptoms they type in the “details about your appointment” text field.

### Express Scheduling (Quickly schedule based on previous appointments) - Key findings

1. 10 participants found scheduling from previous appointments adds value and is faster and easier to schedule. 
2. 5 participants had a difficult time finding and clicking the "I need a different appointment" option.  
3. 2 participants noted

 the existing messaging didn’t explain that the times were based on previous appointments.
4. 3 participants expected to be able to schedule appointments for different clinics.

### Details of Findings and Recommendations

#### 1. Participants found value in being able to schedule based on previous appointments. 

Most participants found value in Express Scheduling and the time it saves them to book an appointment. This was best expressed by P3, who stated, "Well, yeah, it's easier. I mean, you're giving me options... That's how I've set up past appointments with the VA. That's all good." Participants also emphasized the simplicity of this option. P5 shared, "I like this. You're making it as simple as you can, which is great. So I would stick with that, knowing that I could change it, but you've eliminated the effort on my part, so this is good." 

The convenience of Express Scheduling was further appreciated by P11, who mentioned, "I don't have to retype all the information. That makes it so much faster."

Despite these positive reactions, there were some concerns raised by the participants, primarily centered around the absence of an option to schedule different types of appointments and a lack of clarity regarding the purpose of the "I need a different appointment" option.

#### 2. Some Participants found it difficult to find and click the “I need a different appointment” option.

The primary issue with the “I need a different appointment” option was its placement and accessibility. Some participants found it difficult to locate this option, leading to confusion. As P7 mentioned, "I think that 'I need a different appointment' option isn't very visible, to be honest." Another participant, P4, shared, "It took me a while to figure out where it was. I was clicking around."

This issue suggests that the "I need a different appointment" option needs to be more prominent or placed in a more accessible location to improve the user experience.

#### 3. Existing messaging did not clearly convey that the times presented were based on previous appointments.

The existing messaging in the Express Scheduling flow failed to clearly communicate that the times presented to the participants were based on their previous appointments. P6 noted, "I didn’t understand that the time was because of previous appointments." Another participant, P9, mentioned, "It’s not clear why these times are being suggested."

#### 4. Participants expected to be able to schedule appointments for different clinics or new types of appointments. 

A few participants were disappointed by the limitations of Express Scheduling. P3 stated, "I would like to see an option to schedule appointments for different clinics," while P2 expressed, "I thought I could book new types of appointments, not just the same one." 

This finding indicates that while participants appreciated the convenience of Express Scheduling, they also wanted more flexibility to book appointments for different types of care or different clinics.

Recommendations:

* Consider highlighting the “I need a different appointment” option so that it is more noticeable and easy to find.
* Review messaging to ensure it clearly conveys that the suggested appointment times are based on the times of previous appointments, and that this is why they are being offered.
* Look into the possibility of allowing participants to schedule different types of appointments or appointments at different clinics within the Express Scheduling flow. This would provide more flexibility and value for participants who may have multiple care needs.




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


