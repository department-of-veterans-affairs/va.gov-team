
	# Research Plan for [CDSC, Medical Calculators, 09/15/2025]
> [!NOTE]
> *Questions about how to set up your research study? Reach out first in the [#cds-hcd-cop](https://dsva.slack.com/archives/C06043YBWTC) Slack channel. If you have more questions or support needs, reach out in the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel.* 

## Background 🏗️
<details><summary>In prior research, we learned that clinicians find value in graphs and viewing trend data. However, when testing this concept on our 'Patient Summary' page, the utility of the graphs was lower at that point in the workflow compared with other stages. There are several calculator input fields, however, that are too subjective to autopopulate, but that rely on the clinician reviewing lab data which requires them to context switch to find this data in CPRS before coming back to the Medical Calculator application to answer the question. </summary>

	
`What problem is your product trying to solve?`

**The proposed design is intented to reduce cognitive burden created by context switching between the CDS Medical Calculator application and the EHR by bringing relevant data to support clinicians within their workflow of the calculator**
  
</details>

## Research Goals 🥅	


### Goals

`1.` Understand how helpful line charts are within the context of a calculator detail page to assist with answering questions we cannot auto-populate. 

`2.` Identify other calculators or fields where clinicians think this pattern might be helpful.

`3.` Get feedback on the experience of opening and viewing the graph within the calculator detail page.  
  
### Outcome


**This research will help us learn the value of bringing in select patient health data to support clinical workflows. It will help guide product priorities and if we should continue moving forward with implementing this feature** 

---

### Research questions

**`1.`How intuitive is it to see a call to action (CTA) to access lab history below the calculator input field?** (Do clinicians notice this option? What do clinicians expect to have happen when they click the link? Do they click the link to open graphs?)

**`2.`What are clinicians reactions to seeing graphs in this context?** (Do they anticipate it improving their workflow? Will they use this feature over going to CPRS or JLV?)

**`3.`How intuitive is it to interact with the line chart and get the data they need?**


### Hypotheses

---
**`1.`Clinicians will find that having the lab history data with a specific field will improve their workflow**
       
**`2.`Clinicians will not immediately recognize the "View Labile INR lab history" link and will first plan on getting the data from CPRS**
      
**`3.`Clinicians will intuitively find the tool tips on the data points**


---
  
## Methodology  🛠️


</details>

**Usability Testing**

`1.`Participants will be asked some interview questions about their role at the VA and their current or past use of the CDS Medical Calculator application. Then we will give the clinician a scenario to prompt them to completing the HAS-BLED calculator and reviewing lab history data.

`2.`Usability testing with a Figma prototype

`3.`We'll share the link with the participant to interact directly with the prototype unless of technical difficulty in which case the facilitator will screen share and have the participant direct the facilitator where to click.

`4.`We'll ask participants for their impressions each step of the way.

`5.`We'll ask participants to share their thoughts aloud as they complete the steps.

`6.`We will ask follow-up questions to clarify.

`7.`We may make slight adjustments to the prototype during the study based on our learnings throughout the study.

<details><summary>Additional resources</summary> 
	
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project.  
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-Researchingwithmobileusers)
- If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).

</details>

### Location

- [x] **Remote (MS Teams)**
- [ ] **In-person**
      

## Research materials 📔


**For moderated usability tests:** 
- [Link to conversation guide](url goes here)
- [[Link to prototype](https://www.figma.com/proto/uRUcFMxuFOoNMJeMXJsI5w/Dashboard---Calculators-and-Patient-Summary-Tabs?node-id=19531-2916&t=Ra44YiX7kcE0GF5S-0&scaling=min-zoom&content-scaling=fixed&page-id=19531%3A2915&starting-point-node-id=19531%3A3104)]


	
## Recruitment 🎯	
*For staff and clinician facing research, the researcher is responsible for recruitment. The researcher may ask other CDSC HCD peers for assistance for connections if needed*


### Recruitment approach
- Leverage the CDSC research participant database which is available to all of CDSC HCD practitioners. If you are not an HCD practitioner within CDSC, request recruitment help through the OCTO VA HCD Lead (currently Amanda Klausmeir) or the CDS App Team Research Lead (Rosemary Rogers).
- Beyond the CDSC research participant database, reach out to prior participants to see if they can help connect you with potential participants (snowball recruitment)
- Join SSS external office hours to connect with clinicians who come with questions to see if they are interested in participating in an upcoming study (or ask SSS to share this message)
- Leverage recent support or feature requests and email clinicians who reported feedback to see if they are interested
- Leverage recently deployed features or enhancements by emailing clinicians who you think will be interested in learning about the request and then ask them if they are also interested in participating in user research sessions.
- Send outraech emails in batches of 3-5 emails. This avoids over contacting from our smaller participant pool. Wait 24-48 hours to send out more emails. 

### Recruitment criteria
A minimum of 5 clinicians

### List the ideal completed sessions and total number and type (primary care, oracle health users, etc.) of participants for this study:
> [!NOTE]
> Aim to email **2x** your ideal completed sessions number *(e.g. for 5 ideal completed sessions, identify 10 total participants to email)*


- `Clinician:` **5**
- `Administrative Role:` **0**
- `Total:` **5**
- `Ideal completed sessions:` **5**

### Primary criteria (must-haves)

- `2 clinicians have experience with HAS-BLED calculator`


#### Secondary criteria (nice-to-haves)

- `1-2 nurse practitioners`
- `1-2 physicians`
- `1-2 clinical pharmacy specialists`
- `1 clinician familiar with Oracle health (end user or transition team)`

### Outreach Email Templates
**General template, adjustments made for individual emails based on context or prior connection with participant. The outreach email must contain the line about voluntary participation and anonymity**

Hello (Name),
My name is Rosemary Rogers, and we previously connected via your support request to (enter request or issue). 

I am reaching out now to see if you would be interested in participating in a design feedback session. We are currently evaluating some new designs for the Medical Calculator application on the CDS Console. I’d love to get your perspective and feedback on these new concepts. It would involve participating in a 60-minute remote session on MS Teams. The session would include a general introduction and current experience with Medical Calculators, then I would share a design prototype with you along with a few probes to get your reactions, followed by closing questions. The prototype we will use for aiding our discussion will be using the HAS-BLED calculator. 

Your choice to participate is completely voluntary. We will share our learnings within the CDS Collaborative in the form of aggregated information or anonymized quotes. Your responses will remain confidential, and your anonymity protected.

If you are interested in participating, the following days and times are available. Please respond to this email with a few 60-minute options that work for you, and I will send an invitation. If you are interested in participating, but not available for this session, please keep an eye out for future opportunities. 

All times are in **Eastern** time:

Week of September 15:
- Friday, September 19: 9:30 – 11am
  
Week of September 22
- Monday, September 22: 10 - 11:30am
- Tuesday, September 23: 10-11am, 1-2pm
- Wednesday, September 24: 12 - 1pm, 2 - 5pm
- Thursday, September 25: 10 - 11am
- Friday, September 26: 10 - 12pm, 2 - 4pm

I hope we can connect soon. If you are not interested in participating in these types of sessions, that’s fine too! Please let me know so I can make note!

Cheers,
Rosemary

## Timeline 🗓️
Approximately September 17 - October 2, 2025, based on clinician availability
60-minute sessions with at least 15-minute breaks in between

### Research sessions
- `Planned dates of research:` **[09/17-10/01]**

### Length of sessions
- `Session length:` **60 minutes**
  
- `Buffer time between sessions: ` **15 minutes**
  
- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` **3**

### Prepare
*Don't forget to share your plan, stimuli, probes, or prototypes with the HCD team for feedback as you are working. Aim to have a CDS HCD peer review or review by the VA CDS HCD Lead at least 3 days before the first test to have time for changes*

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[Enter name]**
- `Date and time of pilot session:` **[Enter time]** 

 
## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **Rosemary**	
- `Research guide writing and task development (usually but not always same as moderator):` **Rosemary**		
- `Participant recruiting & screening:`	**Rosemary**	
- `Project point of contact:` **Rosemary**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **N/A**	
- `Note-takers / Observers:` **Dependent on Session**
- `There should be no more than **3** total attendees (moderator, notetaker(s), observer(s)) per session to not overwhelm the research participant.

### Notetaker and Silent Obeserver Guide
- Be a silent observer. If you have a question for the participant, ask the facilitator via a Slack DM and they'll accommodate it if appropriate.
- If you can notetake, please do! It helps researchers a lot to see what you captured. There’s a note taking template in this Mural with screenshots. If you find it easier to write your notes or use a word doc, that's fine too! If you take running notes, please be sure to make a clear reference to the screen in question or the scenario being mentioned.
- Write what you hear and see as much as possible. For some it can be easier to write in first person, as it is said, so that you don't need to paraphrase anything. Try to capture what they said without adding your own interpretation of what they meant. E.g. "I'm not sure about this checkbox" does not equal "Doesn't understand checkbox."
- Share your notes back with the facilitator via Slack if taken outside of the mural. Do not include ANY PII in this chat.
- For design testing, try to write down things that aren't said—for instance, when someone misunderstood some copy or clicked the wrong element. It helps us figure out what needs to be revisited.
- Share a few raw impressions with the facilitator via Slack or in the notetaking document after the interview is done, if possible. It helps with synthesis!

**Protecting PII**
- It's important to protect the privacy of our VHA staff participants AND any Veterans. 
- Do not include the participants name or other identifiers -- such as a very specific title that can be easy to identify them with in your notes. Instead, use a general role description, such as "primary care provider" and "also works in informatics"
- In the event a participant needs to share their screen or a tool with an actual patient (since test patients don't always work to show how the tool functions), stop the recording before they share. DO NOT RECORD THE PARTICIPANT'S SCREEN IF THEY ARE SHOWING A REAL PATIENT.

## Reviews ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO CDS HCD Peer on [MM-DD-YYYY]`
