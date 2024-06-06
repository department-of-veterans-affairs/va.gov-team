# Research Findings for ARF Team, Accredited Representative Portal, Single Accredited VSOfficers, 21-22 Accept/Decline User Testing, 03/2024

**Office of the CTO - Digital Experience (OCTO-DE), Accredited Representative Platform, Benefits Accredited Representative Facing Team**

Date: 05/2024

- Renata Keck, renata.keck@agile6.com (research preparation, session moderation and notetaking, data analysis and report)
- Rebecca Blakiston, rebecca.blakiston@adhocteam.us (research preparation, session moderation and notetaking, and data analysis)
- Kristen Faiferlick, kristen.faiferlick@adhocteam.us (prototype creation, session moderation and notetaking, and ARP mocks)
- Courtney Stubbert, courtney.stubbert@adhocteam.us (session observation, ARP mocks)

[Findings report](https://dvagov.sharepoint.com/:b:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/032024%20VSOR%20User%20Testing/032024_usertesting_report.pdf?csf=1&web=1&e=im1vC5), deck, and recording of share out

Jump to:
- [Research Goals](#research-goals)
- [Research Questions](#research-questions)
- [Methodology](#methodology)
- [Key Findings](#key-findings)
- [Details of Key Findings](#details-of-key-findings)
- [Tasks and Conclusions](#tasks-and-conclusions)
- [Additional Insights](#additional-insights)
- [Recommendations](#recommendations)
- [Next Steps](#next-steps)
- [Further Research Needed](#further-research-needed)
- [Appendix](#appendix)

## Research Goals
The Accredited Representative Facing Team is seeking to re-envision the Accredited Representative experience so that they can more seamlessly and accurately help Veterans with their VA interactions, including helping Veterans apply for, manage, and update their VA benefits.

Our initial focus is on the process of accepting the power of attorney (POA) given in Form 21-22 which appoints a Veterans Service Organization (VSO) as a Veteran’s representative, giving them POA.

### OCTO Priorities
**Objective 1: Our digital experiences are the best way to access VA health care and benefits.**
- **Key Result 2:** Number of transactions processed during our products have increased by 25%.
- **Key Result 3:** All new products have a faster transaction time than those they replaced.
- **Key Result 4:** No transactions accepted by our products have a fatal error.
After years of focusing exclusively on Veterans who want to interact directly with VA, we will build tools for Veterans who want to work with accredited representatives, and the reps who support those Veterans. In doing so, we will redirect to VA.gov traffic currently going through [eBenefits](https://www.ebenefits.va.gov/ebenefits/homepage) and [Stakeholder Enterprise Portal](https://www.sep.va.gov/sep/web/guest/sep) (SEP).
Full list of [OCTO-DE priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md).

### Veteran Journey
Any/all points when a Veteran needs support filing and accessing their benefits.

### Goals
- Understand the usability of the Accredited Representative Portal (ARP) 21-22 flow on desktop with singly accredited Veterans Service Organization Representatives.
- Understand singly accredited Veterans Service Organization Representatives’ current POA processes and caseloads.

### Outcomes
User testing will inform adjustments to the ARP 21-22 flow to improve usability.
Information about current POA process and caseload will help determine improvements to the authenticated landing page and POA views to decrease cognitive load and facilitate smoother decision making.
Feedback about the unauthenticated and authenticated ARP tool will inform content strategy and exploration of additional functionality required for ARP v1.

## Research Questions
1. Is the purpose and audience for the unauthenticated ARP landing page clear? Is the content valuable? Is there any content missing?
1. Does the sign-in experience meet VSO Representatives’ expectations?
1. What information is most valuable to VSO Representatives on the POA Requests page? Is any information missing?
1. Are navigation categories within ARP clear?
1. Are there any challenges with finding and accepting a specific Veteran’s 21-22 request?
1. Is information about the Veteran/claimant sufficient for making a decision about a 21-22 request? Is there any information missing?
1. What functionality is missing from the 21-22 accept/decline flow?

### Hypotheses
- File/claim number and Social Security number will be the most desired Veteran search functions.
- VSO Representatives want confirmation that the system is working, such as confirmation that an accepted 21-22 has been processed and they now have access to the e-Folder.

## Methodology
**Semi-structured interviews** / The interviewer will ask the representative a series of questions to understand users’ current 21-22 process, from filling it out to submission and acceptance, with a focus on understanding current pain points and mental models. 

**Usability testing** / Accredited representatives will be asked to engage with a prototype of the Accredited Representative Portal (ARP) to test usability, understandability of content, and desirability of features.

**Preference testing** / Partway through the study, we noticed a disconnect between the content on the unauthenticated landing page for ARP and users’ understanding of what the tool could do and who was meant to use it. We made 4 mockups of the unauthenticated landing page’s splash and asked 4 of 9 participants for their feedback.

### Usability test prompts
1. Without clicking on anything, take a moment to review this web page. What are your initial impressions?
1. Let’s pretend you already have an account set up using your PIV card and a PIV card reader is attached to your computer. Go ahead and find the sign in and click it. 
1. Let’s imagine you’ve logged into this tool for the day to manage any incoming POA requests. Is there any information missing on this page that you’d like to see?
1. Let’s imagine a scenario where you spoke to a Veteran named Paula Higashi on the phone and she submitted a 21-22 online through VA.gov. This new tool allows you to accept that 21-22 and quickly establish power of attorney. To start, you just want to view Paula’s request. How would you do this? 
1. From this page, go ahead and accept Paula’s request.
1. Imagine you are tasked with approving all POA requests for your office in Wichita, Kansas. How would you find all requests in your city and then approve them? 
1. Please find and select Gordon Diaz, a Veteran from Valley Center, Kansas, to review their request in more detail. I will paste their information in the chat for you to reference. Without accepting or declining, what do you notice?
1. On a scale of 1 to 5, with 1 being “not at all likely” and 5 being “very likely, how likely would you be to recommend this tool to a VSO colleague?

## Key Findings
1. What we know about singly accredited VSO Representatives.
1. Perceived usability for ARP was high, but observed usability and task success were mixed.
1. Bulk accepting POA requests is not a use case for singly accredited VSO Representatives. 
1. Singly accredited VSO Representatives do not associate accreditation (or OGC) with their daily work.
1. Hypothesis confirmed: file/claim number and Social Security number are the most desired Veteran and POA search functions for ARP.
1. Hypothesis confirmed: because of a history of unreliable tools in the VA ecosystem, VSO Representatives need high visibility into the ARP system, such as confirmation that an accepted 21-22 form has been processed and the VSOR now has access to the claimant’s e-Folder.

## Details of Key Findings

### Key finding 1 
**What we know about singly accredited Veterans Service Organization Representatives.**
We asked participants about their current role, work context and case load in an effort to update our persona to reflect nuances within VSOR subgroups (See [updated persona](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709236473099/7a69ce07dbe58af30f1954470bebbe59b7bf1160?sender=u8cf3f08a008c2b61ad621433)). 

Singly accredited VSO Representatives we spoke to:
- Primarily work at the state, regional, or national level; may have assignments at the sub-state level only if they work for state government (See [Appendix](#appendix)).
- Support fewer Veterans than other VSOR sub-types, with caseload ranging from tens to a few hundred active claims at a time.
  - So far, we have observed that Big 6 and VSOR assigned at the state- or county-level carry a higher workload than VSORs who operate at the national-level.
- Quotes about work context 
  - “I interview Veterans daily, either in-person, on [the] phone, and assist them with their VA disability claims process.” -P3
  - “I…do claims for Transitioning Service Members. In fact, I was just finishing up one a little while ago, but it’s not as taxing as if I were [a National Service Officer]. [...] We have defined Transitioning Service Members as anyone from 180 days to one day prior to separation, and then also our Veterans who are within the first year they’re out. So our folks on military installations will be able to assist all those folks [up to one year], after the first year…we hand them off, give them a warm handoff to our, what we call department service officers. Those are the Service Officers who are in the communities who can best serve them.” -P5
  - “[T]he benefits training and operations team, we help the entire Benefits team with complex cases. We track everything through a claims assistance tracker. So I think so far this year we probably provided about 200 hours of support, helping adjudicate claims. [...]So not only do [I] do training, but [I] also support the team.” -P6
- Quotes about caseload (Big 6 VSORs)
  - “I primarily serve a non – let’s say – advocate role in terms of filing claims to the VA on a day-in and day-out basis. I’m mostly operational with my director, but I do maintain a niche subset of cases for mostly special forces and other high-priority needs from our board of directors. So I do access VA systems every day just to make sure…but I do maintain a much smaller caseload. [...] It could be anywhere from 25 to 50 [Veterans].” -P1
  - “Right now I probably have 90 active claims just on my book, but that number is obviously significantly higher across the whole [VSO].” (And that’s individual Veterans or is that active claims?) “That is individual Veterans.” -P2
  - “So the month of March I had 1,401 file reviews, 254 phone calls, 115 in-person [Veteran] interviews, 521 direct uploads. That’s when we submit claims and evidence…and then [my] quarter total is going to be 2,940 [Veteran] interactions.” -P3
  - “We probably get anywhere between 30-40 phone calls a day. Anywhere between 20 and 30 emails a day. 5 to 10 pieces of mail. But it’s not always the same Veterans, obviously. It…could be everybody’s different, every day. It could be frequent flier-type people, whatever.” -P4
  - “Our [Transitioning Service Officers] typically could do about 20, 25 claims a week for transitioning service members and…that’s their full-time job.” -P5
- Quotes about caseload (State VSORs)
  - “A lot [of cases]. Probably currently monitoring 4[00] to 500 in various stages of development between very beginnings to the ends, to the appeals and all that. But probably in the 2,000s by now.” -P7 
  - “So we’re a rural state, so we did like 600 phone calls last month, but we only had probably a hundred [Veteran] interviews.” -P8
(So in a typical day or week, how many Veterans are you supporting?) “Wow, Jesus. 20…40, say 80-100 [per week].” -P9

We also asked our participants about their current process establishing contact with and power of attorney for a Veteran, as well as the steps taken around establishing POA. 
- Singly accredited VSORs may not accept a POA without communicating with the Veteran first.
  - This may go through a VSO’s unique intake team and intake process to triage a Veteran’s needs, or it may be a conversation between the VSO Representative and the Veteran.
  - May have the Veteran sign an agreement to work with the organization before commencing work.
- We heard several examples of working with Veteran populations to get the POA filled out:
  - VSORs working in states areas with large rural Veteran populations may fill out and send the 21-22 by mail or email for the Veteran to sign and mail back, rather than relying on the Veteran to fill out the form themselves. 
- Some VSORs will submit an ITF and the POA simultaneously to reduce processing times, which is consistent with what we heard during our [user interviews](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/research/2024-02%20User%20Interviews/02-2024-user-interviews.md#research-findings-for-arf-team-accredited-representative-user-interviews-022024). 
- Quotes about establishing communication with the Veteran first
  - “For [VSO], we have our own statement of policy letter. We have the Veteran sign…if it’s an email and initial contact, we have an email that gets sent out to ‘em to tell ‘em exactly what the forms are for and how to fill them out. [...] First thing we ask them is if they’re represented by us. If they’re not, at that point in time, we start printing out the documents, filling out the document for them, and then explaining what this [form] is for and then they sign it and we submit it from there.” -P3
  - “We send them a statement of policy…through email[.]” -P4
  - “So what I normally do is … first give ‘em a call and … say ‘I’ve got a POA request, wanna make sure that’s still good, what do you wanna do?’ And then I would [accept the POA request].” -P5
  - “[The statement of representation] they don’t have to sign it, we just provide it upfront to them, so they have, you know, what are the expectations, what they can expect from us as an organization, and then what we will need or expect from them as well.” -P6
  - “In order for our benefits services team to represent anyone to the VA, [the Veteran has] to register to become an alumnus with [our VSO]. Not necessarily have to, but there are those, one-offs where we’ll take care of somebody. That’s other eras. But our alumni requirements is that [the Veteran] served on or after 9/11/2001. And so once they’re registered and approved completely free through our database and our registration folks have acknowledged it, then we can formally assist [the Veteran] with VA benefits and a number of other things outside the VA.” -P6
- Quotes about 21-22 process
  - “What’ll happen is [my Veterans] send me an email…I will email them a blank 21-22. Well it’s not blank, it’s filled out with [my VSO’s] information, and then I highlight what they need [to fill out].” -P2
  - (How often are you doing a paper form versus emailing and submitting digitally?) “It depends. We’re the Regional Office, so me personally, I could get a walk-in or an appointment upwards of maybe 10 Veterans a day, I would say. But at a national level, we also work with the Chapter Service Officers and Department Service Officers. So they are constantly sending us power of attorneys [electronically] from throughout the state.” -P3   - “So we actually mail them, an actual form, a Power of Attorney form, to say ‘hey just fill out your contact information, sign your part, I’ll input it.’ It takes about a day or two for me to get access to your records, though, through QuickSubmit. And then I give them a call and do a full cursory file review with them over the phone, or they come in and schedule an appointment [after POA is established]. [...] It’s just, you know, it’s different. So paper based, it’s a phone call and then pretty must, a a mail state. Slow, three-to-five days, gets to their house, they fill it out, they fax it, email it, or however they want to get it back to us, whatever.” -P8
- Quotes about filing the POA with other forms
  - “We print out three [forms to file]: the 21-22, 21-0966, the Intent to File.” -P3
  - “We have found the best way [to file] is just to have the Service Member while they’re there in front of us, will out the 21-22, sign it along with the claim in either QuickSubmit or our claims management system.” -P5

### Key Finding 2 
**Perceived usability for ARP was high, but observed usability was mixed.**
- Participants rated the ARP tool a 4.63 (out of 5), which corresponds to an observed usability score of 51. Anything below a 68 is considered below average ([source](https://measuringu.com/sus/#:~:text=The%20average%20SUS%20score%20from,through%20a%20process%20called%20normalizing.)). Explanations for the low SUS score include:
  - Participants’ could not complete two tasks without the moderator prompting.
   - [Task 2 (sign in)](#task-2-signing-in-and-authentication-experience) involved a sign-in flow that was not common for PIV card users. 9 of 9 participants in this study use PIV to log into representative-facing tools.
   - [Task 6](#task-6-bulk-select-and-approve-poa-requests) not conforming to a common use case for singly accredited VSO Representatives.
- It should be noted that the sample size for this usability test was small, which disproportionately skews low observed usability and task success measures.

### Key Finding 3 
**Bulk accepting POA requests is not a use case for singly accredited VSO Representatives.** 
- Based on our prior research, we understood VSO Representatives to work in two modes: 
  - A VSO Representative is often working with an individual and therefore seek out that person’s request, or 
  - Someone within the VSO whose responsibility it is to field incoming POA requests will access the system regularly to scan through all the new requests and make a decision on them
- References were made in prior research to a dedicated VSO Representative whose role within the organization was to monitor incoming requests at a regional or national level, taking bulk-actions. During this study, we were able to determine that large VSOs who participated in this study **do not use a bulk-accept workflow**, with [VSO Representatives saying that bulk work was prone to errors that would negatively affect the outcomes for the Veteran](#task-6-bulk-select-and-approve-poa-requests).

### Key Finding 4
**Singly accredited VSO Representatives do not associate accreditation (or OGC) with their daily work.**
- As part of the long-term roadmap for the Accredited Representative Portal, some representatives will be able to use the tool to apply for and manage their accreditation as well as manage POA and handle tasks related to claims. The [homepage design and global menu](https://www.figma.com/design/C3sdnDf8anVqXVdmiCWwq8/ARF---April-2024-usability-test?node-id=0-146) for ARP feature references to applying for and managing accreditation. 
  - Participants were [confused why accreditation was part of the tool’s navigation](#key-finding-1) and questioned whether it would be relevant to a tool used for power of attorney requests and claims management.
  - Two participants expressed confusion about why their OGC number would be relevant in their user profile when logged in. Some of this confusion may be a result of an unclear audience for ARP, as these users assumed that Veterans would also be able to access the authenticated experience. 
- Singly accredited VSO Representatives do not associate OGC with the VA. 
  - VSORs we spoke to for this study saw their work supporting Veterans with VA and OGC as entirely separate entities. 
  - We theorize this is because large VSOs handle accreditation for all of their representatives through administrative staff responsible for this work, and therefore an individual VSO Representative is not likely to engage with VA regarding their accreditation much, if ever. 
- ARF will need to address accreditation application and management as part of the overall content strategy for the site, but with a particular emphasis on unauthenticated landing page calls to action, so it is clear how representative.va.gov and OGC are related.

### Key Finding 5
**Hypothesis confirmed: file/claim number and Social Security number are the most desired Veteran search functions for ARP.**
- Consistent with findings from our [user interviews](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/research/2024-02%20User%20Interviews/02-2024-user-interviews.md#critical-recommendations-for-mvp), file/claim number, SSN, and Date of Birth are important search criteria for VSO Representatives to find a Veteran they are supporting.
- These search fields would eliminate the need for VSO Representatives to review multiple pending requests, especially in instances where the Veteran has a common name, or lives in an area with a large Veteran population. 
  - Several participants spoke of [the potential for VSOR error](#task-4-single-veteran-poa-search), when Veterans share identifying information such as name or location. This led to cases where the VSOR started POA or claims work for the incorrect Veteran and later had to correct it.
  - Unique identifiers are therefore important to improve accuracy of search data, reduce time to review search results, and reduce inaccurate or fraudulent claims, and should be prioritized in ARP Pilot. 

### Key Finding 6
**Hypothesis confirmed: because of a history of unreliable tools in the VA ecosystem, VSO Representatives need high visibility into the ARP system, such as confirmation an accepted 21-22 has been processed and they now have access to the e-Folder.**
- VSO Representatives have a notable distrust in the VA tools they use, because of a history of unreliable submission, and claims getting lost, “stuck,” or simply disappearing. As a result, the VSO Representatives we spoke to have [added additional steps in their workflows](#task-5-accepting-poa-request) to meticulously document their work. Reasons included:
  - Placating angry Veterans blaming VSO Representatives when a claim is misplaced or not submitted on time
  - Wanting proof to provide the VA that the Representative was not responsible for the error, and
  - Ensuring institutional memory of Veterans’ cases, given high turnover within a VSO.
- Building upon prior user feedback, this study attempted to pinpoint specific nudges, notifications and prompts that would help boost user confidence and satisfaction with ARP as a reliable VSOR tool. 
  - Users want confirmation of the system’s status at each step of the POA process, from searching for a Veteran’s 21-22, to viewing the request, to accepting or declining, and being able to find evidence of the work they completed later. Specific nudges are documented in the [Recommendations](#recommendations) section of this report.
 
## Tasks and Conclusions
The following findings are synthesized from participants’ responses to usability test prompts. Participants were scored on task success (0 = failure, 0.5 = indirect or partial success, 1 = success) and task paths were recorded if they deviated from the expected path. All participants were given a [Single Ease Question (SEQ)](https://measuringu.com/seq-prediction/) at the end of tasks, because SEQ helps to explain the perception of ease relative to users’ observed behavior. 

Since most VSOs use third party tools to prepare, file, and manage Veterans’ claims, we wanted to understand the product’s overall perceived usefulness and value and how to position the ARP MVP to prospective users. Participants answered a Net Promoter Score (NPS) question at the end of the study; this is because [NPS is correlated with the System Usability Scale (SUS)](https://measuringu.com/usability-loyalty/#:~:text=Improving%20the%20perception,a%20promoter%20(9%2B).), an observational usability measure. NPS helps us understand the nexus of user loyalty and usability without cumbersome post-task and post-test questionnaires. Calculations for all usability metrics can be found on [Sharepoint](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/032024%20VSOR%20User%20Testing/Task%20Success%20Measures.xlsx?d=wbe086d2f13364316aed7491c828055de&csf=1&web=1&e=GD3dDg). 

**A note about task completions:** One participant in our study was a cross-accredited VSO Representative and therefore not eligible to complete task-based flows. As a result, some tasks are calculated for 8 participants versus 9. Where applicable, we have noted when all 9 participants completed the task and provided answers to qualitative questions. More information about participant demographics for this study can be found in the [Appendix](#appendix).

### Task 1 / Unauthenticated landing page
*9 of 9 participants completed this task*

- 5 of 9 participants were confused who the users for ARP would be based on the unauthenticated landing page’s design. The primary sources of confusion were a call to action (CTA) directing Veterans to [Find a Representative](https://www.va.gov/get-help-from-accredited-representative/find-rep/) on VA.gov, as well as a content box and navigation component referring to accreditation and applying for accreditation.
- Quotes expressing confusion about who the site is for
  - “[This website is for] Veterans…they would have to sign in or create an account and then it would immediately take them to requesting [a VSO for power of attorney].” -P1
  - “I mean, it reminds me of myself if I’m a Veteran logging on to initially file my claim…I’m not sure about the ‘Apply to be an Accredited Representative.’ Is that for somebody who wants to be accredited, who’s not? [..] This is for VSOs only or is this for the public?” -P2
  - “I’m just concerned with new processes, how [the site] is gonna be more geared towards Veterans [...] and how it’s gonna be difficult for Veterans.” -P4
  - “I’m thinking [ARP] is for someone who wants to be an accredited representative, signing up and creating an account to become [one].” -P9
- _Quotes expressing clarity about who the site is for_
  - _“So I really like that it says ‘Welcome to the accredited representative portal’ because we are fighting the claim sharks issue. I like this because it says up front it’s an accredited representative portal, not for the Veterans or the non-accredited representative.” -P5_
  - _“The initial impression I have is that it looks like it’s more of just an accept and deny [tool for VSORs]. It’s called the accredited representative portal. If I’m looking at a portal, I would want to know that it’s like a dashboard that I can work the status of claims, you know, accept POAs, run reports.” -P6_
  - _“When I click on ‘Power of Attorney’ [I assume] I’m able to add from there, create a form, something like that.” -P8_
<br />

- Because of participant confusion over the content on the unauthenticated landing page, we iterated on the homepage design partway through the test and had some participants complete a short preference test between [multiple mockups](https://www.figma.com/design/C3sdnDf8anVqXVdmiCWwq8/ARF---April-2024-usability-test?node-id=2381-578626). 5 of 9 participants completed the preference testing task. 
  - 3 of 5 participants preferred option A, which they saw throughout the test session. Reasons why included its simplicity and the fact that it was “classic” and familiar.
  - 2 of 5 participants preferred option B, which differentiated VSO Representatives from other types of accredited representatives. These participants said they liked that it called them out as VSO Representatives in the splash, but questioned if other types of accredited representatives would like the content. 
- Quotes about option A
  - “I’m such a…I guess a traditional person that [option A] looked really good.” -P5 
  - “I think the first one is the clearest in terms of who’s supposed to be using this [website].” -P6
- Quotes about option B
  - “I just like that it says ‘welcome VSOs and accredited representatives, ‘cause there’s a difference.” -P1
  - “I would say if you are gonna be able to do [accreditation] stuff, ‘Welcome to the accredited representative portal’ is gonna be kind of weird to somebody that’s trying to come here to get their accreditation. So if you’re coming here to get your accreditation, you might think you’re in the wrong place” -P4
  - “What I don’t like about [option B] ‘VSOs and accredited representatives,’ because all VSOs should be accredited representatives. So it’s kind of like double talk to me.” -P5
<br />

- Based on the unauthenticated landing page design, VSO Representatives expect the ARP tool to be an all-in-one platform for their needs.
  - Further validating our [participatory design findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/research/2024-02%20User%20Interviews/02-2024-user-interviews.md#research-findings-for-arf-team-accredited-representative-user-interviews-022024), participants wanted to see integrations with their own Client Management Systems (CMS), integration with VBMS, VA and Veteran chat features, and auto-populated or auto-filed forms. 
- Quotes about expected ARP functionality
  - “I would assume that I log in as an accredited representative through this [site]. [...] [A]nd I would be able to hopefully accept [a] power of attorney [request], or my idea would be to send a link to the Veteran live, have them accept a link and I see it and I can click accept and it goes to VBMS.” -P4
  - “It would be kind of cool if there were resources available to seamlessly…track people in VBMS and we can look people up. [...] The tool needs to speak directly to VBMS live so that when we do something in the portal, it reflects the same thing in VBMS. It would be nice if it can start filling out forms for us because VBMS already has a profile on the Veteran so they’ll be able to capture whatever, you know, even if it’s just the name, social, address, date of birth.” -P2
  - “I would almost see [ARP] like a VSO dashboard. So you’d be able to [have it be] linked to VBMS. LIke once you get the approval, it is accepted, you can go in[to VBMS] and see where the claim is in the status, you can check and see in a status that it’s pending, you know.” -P6
<br />

- Participants were also asked what they would expect to find in the “About,” “Resources” and “Accreditation” categories in the global navigation. 
  - Expectations around the “About” navigation category focused on who the portal is for and what can be done on the authenticated experience. 
   - Participants also voiced expectations for Veteran-facing content in the “About” section. These expectations came from users who were unclear who the ARP tool was for, and reflected that misunderstanding. The content cited by these users was not useful for consideration in the ARP IA or global navigation.
  - Participants were unsure if the “Accreditation” category in the navigation would be for people applying to become accredited, those who already have accreditation, or a Veteran-facing resource. 
  - Participant responses regarding the “Resources” navigation category had several clear themes:
   - 5 of 9 participants wanted regulatory resources that help them do their job, as well as links to places to stay informed about updates to regulations and guidelines (e.g., 21 CFR, title 38, NOVA, Veteran Benefits manual)
   - 4 of 9 participants expressed interest in a Wizard, quickstart guide, or FAQ to help them set up ARP and make sure they used it correctly
   - 3 of 9 participants wanted quick access to VA forms
   - 1 participant wanted access to the OGC’s POA code list, since they regularly use that when establishing POA with a Veteran who had prior representation
  - Participants wanted Veteran-facing resources on the unauthenticated landing page, even if Veterans were directed off the ARP site to related resources. 
   - 3 of 9 participants wanted links to relevant Veteran-facing websites, benefits resources, and a Find a Representative tool, either in the “About” or “Resources” category
- Quotes about what participants expect under the “About” navigation category
  - “Information about what the portal is meant to do.” -P1
  - “An explanation of the website, like what is an accredited representative, what is this portal about? What is it for?” -P3
  - “I think it would define at a high level of what the portal, you know, can and cannot do. Like it would outline each of the…I guess I would say about managing expectations of what the portal or site can do, you know, and what it’s used for.” -P6
  - “It could tell me everything that I need to know about this portal, what I could do with the power of attorney, accreditation, the different resources. I think it’ll give me a scenario of everything that happens in this particular portal.” -P9
- Quotes about the “Accreditation” navigation category
  - “When you think about the current manner in which we submit re-accreditation annually for our Service Officers that they’ve done their 40 hours of…CLEs, you have to send them to OGC, to a [point of contact] at OGC via email. [A]n online platform would be a lot cooler.” -P1
  - “I don’t know who would need to apply to be an accredited representative because…if [ARP] is a portal for VSOs, anybody accessing the portal would already be a VSO. If they’re looking to apply to be an accredited representative, they should go to the VA OGC website.” -P6
  - “I’m not sure about the accreditation [category]. I mean, is that verifying that I’m an accredited representative?” (Well what would you expect to find there?) “Well, a lot of people don’t even know if you go to va.gov/ogc, you’re actually able to [verify accreditation]. A lot of people don’t even know they can check their own accreditation and their number and that kind of stuff. So that’s…the only thing I would ever think of under ‘Accreditation’...[Veterans] trying to verify who in their state is an accredited representative and then they can click on and say ‘I want you to represent me.’” -P8
  - “Right there where it says ‘Accreditation’ I [want to] go right there and look up who’s accredited.” (So you’d be able to look up people who are accredited as well?) “Right, because there’s so many people [that call] themselves helping Veterans and really are not qualified to help Veterans and are charging Veterans and shouldn’t be doing that.” -P9
- Quotes about what participants expect under the “Resources” navigation category
  - “Everything VA disability claim-oriented such as the VA forms links, all the links to the exposure lists, especially links to the 38 CFR and the M21 stuff that we use on a daily basis to assist Veterans...the disability calculator, that’s pretty much it. That’s what I use on a daily basis.” -P3
  - “What I need…is going to be like a quick guide for [ARP]. Because I don’t really want to know the history or how we got here or anything like that. I really don’t need to know who the secretary of VA is and things like that, or VBA, but I would be looking for something that would help me navigate the portal.” -P5
  - “A wizard or something like that, something that goes from step 1 to step 50 and you’re not going through multiple screens…there’s no going back and forth.” -P8
- Quotes about what participants expect under the “About” and “Resources” navigation for Veterans
  - “Recently the VA did a ‘15 things about what a VSO is and what does it mean and what they are all about.’ So I think a generic about a Veteran Service Officer or a power of attorney, just what it is and what they do would be cool.” -P2 
  - “Maybe links to local service officers within an area [for Veterans].” -P3
  - “I do believe that state resources such as, you know how every state has their own benefit. Number two is of course all the, any VA websites.” -P8

### Task 2 / Signing in and authentication experience
*8 of 9 participants completed this task*

| Usability measures | Score |
| ----------- | ----------- |
| Task success | 0.56/1 |
| Single Ease Question (SEQ) | N/A |
| Expected path | Splash **or** utility header “Sign In” button > Login.gov > “Sign in with government ID” |
| Most common path | Utility header “Sign In” button > Unable to move past sign in options without prompting |

- ARF Design wanted to test the location of a “Sign In” versus “Create an Account” button on the homepage. Most participants were comfortable with using the “Sign In” button in the utility header rather than a “sign in or create an account” button located on the hero image on the unauthenticated landing page. 
  - 5 of 8 participants used the “Sign In” button in the utility header.
  - Only 1 of 8 participants found the “Sign in with government ID” hyperlink within the Login.gov flow without prompting from the moderator. This option felt less familiar to the normal PIV login process for other VA tools that VSORs regularly use, like VBMS and QuickSubmit.
- Quotes about login flow
  - “I would almost think that if it’s me as an accredited representative I’d have a third option down here to be able to use my PIV credentials…or I mean like ‘Access the accreditation portal via PIV credentials’ [button], something like that.” -P1
  - “I don’t have any of those [login credentials] so I would be confused on which one to push.” -P3
<br />

- 8 of 8 participants use PIV to login to at least one of the tools they use on a regular basis. Participants preferred PIV to non-PIV login options.  
  - One participant asked if non-accredited staff would have view-only or limited access to the tool, since it offered non-PIV login options.
  - Participants were more familiar with ID.me than login.gov, but did not necessarily think that ID.me was a better option to PIV, since ID.me can be linked to personal accounts. There was some confusion among participants about the implications of authenticating as an accredited representative with non-PIV sign-in options.
- Quotes about non-PIV login and support staff access
  - “Would my support staff have access? [...] If [support staff] are able to go in here and view, let’s say hypothetically, the accepted [POAs], I can then give her the list of accepted ones and then she can go ahead and view her part, you know, adding them into CMS, and then it would stop me from having to view that.” -P8
- Quotes about ID.me and login.gov as alternatives to PIV
  - “I think ID.me is good for, you know, folks who maybe don’t have a PIV card because ID.me doesn’t…I don’t even think it verifies you, it just verifies that I’m a Veteran. I guess I’d have to learn more about the process in order to verify accreditation and access those types of privacy. I don’t know. I’ve only seen ID.me on QuickSubmit.” -P2
  - “Because I started off SEP with ID.me, I’d probably go ID.me, because I don’t know my login.gov…because some sites it works and some sites it doesn’t, but I know ID.me works.” -P5
  - “Okay, so this is one of the points of contention we've been having, especially with…Veteran benefits, like you said PIV card, I have one, I went through the background check, fingerprint, all that good stuff. I don't want to use any of those, especially ID me login.gov. I use those for my own personal things and they're two factor authentication. So I know if you use ID.me, cool, you log in with your username password and then it's gonna either text you or call you with a code. So where I work…one of my coworkers… [he] can't get any cell phone signal. So if he were to get the code on the cell phone, it might take a while. If he can get it all, he might have to wander over by the window to get the code, which kind of looks a little unprofessional and then you have to type it in or it goes to his phone, you know the call and 'cause those are connected [...]. Oh but now you're at home but it's gonna call your office number so now you can't use it for your own personal things. Right. And that is, you know, one of those things no one really thought about is this is something I use for both. Same thing with the login.gov. I use that for MyHealtheVet if I need to ask for a refill on my medication or get an appointment or anything like that. Again, if I'm at home and something's bothering me on a weekend or something, I don't wanna have to wait till Monday to come into the office so I can use my phone to log in. I'd rather use my own personal cell phone on my own time with my own personal login.” -P7

### Task 3 / POA requests page
- Overall feedback on the visual design of the POA requests page was positive, and participants could understand the purpose of the portal and next actions to take based on the UI.
  - 2 of 9 participants felt that the UI looked “familiar” to other VA and third party accredited representative tools they use.
  - Detailed feedback on search functionality and the design of the POA requests table is located under [Task 4](#task-4-single-veteran-poa-search) in this report.
- Quotes about overall POA requests page visual design
  - “[ARP] would make [POA] a lot easier on us.” -P3
  - “It’s convenient.” -P4
  - “I think everything [about ARP] is useful.” -P5
- Quotes about the familiarity of ARP UI
  - “It looks just like SEP…just the layout, the ability to, the search feature, looks a lot like SEP. [...] It is a bit nicer layout in terms of ability to quickly identify people I previously declined, [the] ones I’ve already accepted and ones that are still waiting to be looked at.” -P1
  - “It is something we’re used to seeing, so it would be something that a lot of people would be ready to use. I think that’s a positive, because like I said, I know a lot of people are scared of change.” -P8
<br />
 
- 7 of 9 participants felt confident they were signed in based on the design of the POA requests page; specifically, participants knew they were logged in when they saw the user profile in the top right corner of the screen.
  - 6 of 9 participants saw their OGC number as a unique identifier that told them they were logged into their own account. 
  - VSO Representatives said they do not have their OGC accreditation number memorized, so having that information in the profile view was useful to have on hand. 
    - Some VSORs referred to this as their “Accreditation number” and others as their “OGC number.” 
    - Several participants said they put their OGC accreditation number on their business card or in their email signature line so that Veterans can look them up and verify they are accredited through OGC. 
  - 2 of 9 participants liked having a contact button if they noticed their OGC number or accredited organizations was incorrect.
   - One cross-accredited user gave feedback on this experience and was confused about the order in which their accredited organizations appeared, preferring their “home” organization to be at the top, rather than alphabetical order with that accreditation appearing mid-screen.
 - 1 of 9 participants said they would have understood they were logged in sooner if the table of pending POA requests had been more visible on his screen. 
   - The location of the Call to Action about Find a Representative, combined with the prominent search feature, meant that users’ eyes were not immediately drawn to the table populated with pending POA requests. 
   - On smaller screens, ARP v1’s POA requests table was “below the fold” and required scrolling to find. Having the POA request search fields at the top of the page alone was not an indication to participants that they had successfully logged in.
- Quotes about OGC number being linked to their profile in ARP
  - “I’d have my OGC number, [so] I know I’m signed in based on that. This is a unique feature.” -P2
  - “Oh look at that! Oh look, you’ve got the OGC number and everything. OK, I like that. It says who you’re accredited with and everything.” (Can you talk about that?) “Yeah so it’s, I assume when I’m logged in that it’s me. [...] So then when I click into it and then see that, yeah, that is me, OGC number and who I’m with. [...] I know how to find my [OGC number] and I’ve got it in my signature block because I don’t remember those numbers.” -P5
  - “[It tells] me that I am logged in and it looks like it actually tells me my OGC number. That’s good. That would tell me I’m a Veteran Representative, right now, for the DAV. So yes, I do feel confident that I am [logged in].” -P8
- Quotes OGC accreditation number confusion
  - “What is an O-G-C number? [...] I’ve never heard of OGC, but I utilize my accreditation number and I put it on every single POA that I submit.” -P3
- Quotes about contact button
  - “I like the ‘Contact Us’ so if something’s wrong, like the name spelled wrong. I don’t know if there’s expiration dates [on accreditation] or I think [my VSO] just automatically submitting them. I forget, I haven’t done it in a while. I think it’s every five years for the reaccreditation process. So it would be helpful if it shows an expiration date next to [each organization], especially if you have multiple [accreditations], because it might be hard to keep track.” -P7
<br />

- 8 of 9 participants were confused by the message about Veterans being able to find and appoint a representative on [VA.gov](https://www.va.gov/get-help-from-accredited-representative/find-rep/), linking them to [Find a Representative](https://www.va.gov/get-help-from-accredited-representative/find-rep/). This was seen as Veteran-facing information not relevant  on a VSO Representative tool.
- Quotes about Find a Rep and ARM v2 calls to action
  - “If this is meant to be just for VSOs, then why is this here for [Veterans] to find a VSO?” -P1
  - “This would tell me that I’m the Veteran because I’m not gonna search [for myself].” -P2
  - “Ok so the Veteran gets to choose…will this be on the Veteran or is this on a Service Officer choosing the Veteran Service Organization?” -P3
  - “I don’t know why this would be on here for me. Something that I would more expect to see on a site that a Veteran’s looking at, looking for help.” -P4
  - “The language ‘find a VSO’...so if you’re an accredited representative, why would you wanna find a VSO?” -P6
 <br />

- 5 of 9 participants saw the value of having user documentation and feedback information located on the POA requests page.
  - While this content was valuable to participants, it was less important than core search/filter functionality. 
  - Users with prior experience in the Stakeholder Enterprise Platform wanted clear delineation between a help guide, and support for OGC or IT-related issues. 
- Quotes about user guides and documentation
  - “I like that you can email your thoughts. I don’t know who’s gonna maintain oversight of this inbox, or who's gonna go to and how they’re gonna action each one of those. Like contacting the VA helpline. What VA helpline? The only thing I could think of is a paralegal in OGC or something that can answer questions related to, well…yeah that might not be [in ARP] though.” -P1
    - Note that this participant had already discussed OGC and accreditation when looking at the user profile dropdown, and so may have been primed to mention OGC as a resource.
  - “I like that. I guess that would just be, you know, if you weren’t sure how to use something, you could click on it and figure it out.” -P2
  - “Would the user guide have a FAQ section? I just always found those to be nice so you don’t have to read the whole thing” -P4
  - “User guide would be a good one. Maybe instead of a VA helpful put the service organizations or a link [of who] to get in contact with. Maybe frequently asked questions thrown in there, definitely the file number what’s the difference and what you should put.” -P3
  - “Look at the reader user guide there. That's very helpful. Contact the VA helpline…why would I contact the VA helpline unless I have an issue that I need to chat with somebody about? I’d [prefer] a chat function and we’ll sort out the issue.” -P5
  - “Is that [connected to] the VSO helpline? If you’re looking at SEP, they have ‘contact the VSO helpline.’ [...] If it has the VSO hotline here, that’s great. But then also if they have an issue, like I know they were matching profiles and SEP had to match profiles to names and there was an issue with that they had to correct. If there’s an IT-related issue, maybe if something with the site or there’s an issue logging in, you know, where would that [help] be?” -P6

### Task 4 / Single Veteran POA search 
*8 of 9 participants completed this task*

| Usability measures | Score |
| ----------- | ----------- |
| Task success | 0.75/1 |
| Single Ease Question (SEQ) | 6.88/7 |
| Expected path | Last/first name search fields > Search button > Table view |
| Most common path | _Same as expected path_ |

- Searching for and finding a single Veteran’s POA request had a high success rate, was rated very easy, and followed the expected task path. 
- SEQ quotes
  - “That’s easy to find.” -P2
  - “Very, very easy. Just the name and the social [security number], that’s gonna be key for searching for POA.” -P3
  - “This was really easy to do, to go in there, search name, find it, and if it wasn’t in pending, I could go to Accepted or Decline because it’s right there.” -P5
<br />

- 4 of 8 participants were able to search for and locate a specific Veteran’s POA request in ARP without prompting from the moderator. Reasons why participants required prompting included: 
  - 4 of 8 cited a lack of search fields for Social Security number, Date of Birth, or contact information, which are more commonly used to find a Veteran in other representative-facing tools.
  - 2 of 8 participants said they would not search by a Veteran’s name or personally identifying information. They wanted the VSO search field pre-populated so they would feel confident they were only searching for requests for their organization. This would allow them to simply search by VSO and scroll through the requests list until they found the specific Veteran.
- We asked participants what search functionality would improve their experience searching for a specific Veteran’s POA request. 
  - Singly accredited participants want the VSO search field to be pre-populated so they are confident that they would automatically see requests to their organization.
   - ARF Design will need to determine how to modify this search field to accommodate users with multiple accreditations.
  - 1 participant wanted a fuzzy search to be able to locate a Veteran’s request without inputting the entire name. This request assumed that the search would filter for the correct VSO as well as the location where the VSO Representative operated.
- Quotes about existing POA search fields
  - “I would do last name and then first name and click search.” -P1
  - “I’d be looking for the Veteran’s last name, and maybe the first name too. And then just do search. That’s exactly what I would do.” -P5
  - “We represent foreign [Veterans] so anything with our power of attorney code where we represent, then we click [I would expect] comes up.” -P4
  - “I would assume that I wouldn’t need to do Veteran Service Organization because I would assume that it’s already registering me as [a VSO Representative of] VFW. So I wouldn’t get American Legion or DAV stuff.” -P5
- Quotes about fuzzy search
  - “To be honest, I wouldn’t even put in the full [name]. I’m a little lazy to be honest. I’m trying to save keystrokes [if the name] is unique enough. Smith, Jones, Brown, you know? Those are real common names.” -P7
<br />

- All participants were asked which search fields were missing from the prototype. The most commonly requested fields are listed below by frequency: 
  - File number, claim number, or Social Security number (7)
  - Veterans Service Organization or POA code (3)
  - Domestic location (e.g., assigned region, state or states, city or cities, zip code) (3)
  - Veteran’s date of birth (2)
  - Veteran’s email address or phone number (2)
  - Foreign location (e.g., base, postal code and country) (1)
- 3 of 8 participants cited Veterans with common names creating confusion when establishing POA or filing claims. Having file number, claim number, SSN and/or date of birth search fields would allow the VSO Representative to narrow down the Veteran without opening each individual POA request within the system.
- Of the geographic location search fields suggested, singly accredited VSO Representatives primarily want state search. This is because they are primarily working at a state or multi-state level within their VSO and do not require more granular geographic search fields. 
- Quotes about search fields
  - "Other than [name], email address is one that I mean, that’s what I use to find my people in my database. But that’s not always the same email address that they give to VA. But email address is a nice way to search people out too, or telephone or Social Security number versus a million different Griffiths or a million different Gonzalezes. It makes it a little bit easier.” -P1
  - “That’s how we search for Veterans on our CMS and VBMS, is gonna be [their] name, claim/file number, and everything you have here: the email, phone number, the address, we use all of those to try to find that Veteran. It narrows the search for that Veteran.” -P3
  - “I’d ask [the Veteran] for their file number. File, social…as soon as he gave me the file number or social I’d put it in, search it. If nothing came up, then I would ask him for his first and last name. Put that in there. Maybe a state along with that.” -P4
  - “I mean we’re national reps on the transitioning service member side. I’d probably just go to the state and look up, you know…all the pending [POAs] in Virginia.” -P5
  - “A lot of the time I would put the file or social security number if they have it…If you do Veteran’s first and last name and they’re…a John Smith, it’s harder to find [but] if they would give me their file number then I would search it that way.” -P6
  - “[I would search by] last four [of Social Security number]. I actually have a couple Veterans with the same name, so I would just be like, ‘all right Mike Jones’ because if I search Mike Jones and all of the sudden 8 of them pop up…I wouldn’t be able to figure out which Mike Jones I’m looking for.  [...] People have always tried to get away from using social security numbers as identifiers, but we keep going back to it just because the Veteran knows it. Or even the dependents, I keep seeing people and they know their spouse’s entire social. So the last four [digits of the social security number].” -P7
  - “I work for the state of Maine, so I only really care about state of Maine Veterans unless, I’m getting a call, let’s say, someone asked me to help a Marine out from Maryland.” -P8
<br />

- ARF asked participants about claimant-specific search functionality for non-Veteran claimant cases. 
  - Only 1 of 8 participants asked for a non-Veteran claimant name search in addition to Veteran name search fields. This is because VSO Representatives associate non-Veteran claimants with the Veteran’s file number, SSN or name.
- Quotes about searching for non-Veteran claimants
  - “Veteran name would be much more applicable.” -P1
  - “If it was a surviving spouse [POA] I guess it would be [searching by] claimant name instead of Veteran name.” -P4
  - “It’s six one half a dozen the other. It’d be helpful to have both [Veteran and claimant name] because not all claimants have the same last name or it might be the widow has a unique name, but if it was Bob Jones the Veteran. So now you’re pulling up a bunch of [Bob Jones]. It would be helpful if you had both.” -P7
<br />

- The table of POA requests was intuitive for participants. They were able to easily understand the POA requests populated in the table, how to filter those requests, and what actions to take next.
  - 7 of 9 participants said they liked the Limitations of Consent column, corresponding to VA 21-22 lines 19-21. Participants said they would work on those requests first, as they would either need to contact the 
  - Veteran to proactively work with them to resubmit the 21-22, or decline them.
  - Participants wanted additional columns in the table for the last 4 of SSN, email address, or phone, but understood that if they clicked into a request that they could surface that information quickly.
- 5 of 9 participants wanted to be able to expand the table view from 10 POA requests to 25, 50, 100 or “all requests.”
- Quotes about overall design of the POA requests table
  - “I like the filters, I think it looks fine.” -P2
  - “I can see that we’re in pending [requests], it says the POA has been received, gives a date, which is really good.” -P3
  - “Well it’s nice, it gives you right up front any limitations that were put in [the 21-22], where they’re located, when the POA came in, name.” -P4
  - “I would look at pending and at the date received, if there’s any limitations of consent.” -P6
  - “As long as you have the date received in there, what’s pending, what’s accepted, I think that’s a lot easier than having all the categories [in SEP] before.” -P7
  - “It’s waiting for me to do my job. So if I click on that, then of course it’s going to give me the ability to accept or decline.” -P8
  - “To be able to itemize [POA requests] in here, with their last name versus received date. Yeah, I like that.” -P9
- Quotes about limitation of consent
  - “The limitations of consent, I would like to have this somehow [up] front.“ -P2
(Would you take action to contact the Veterans who limited consent?) “Yes, definitely. We need to know that Veterans understand that we have to have that access to assist them.” -P3
  - “I like where you can automatically see the limitations of consent right off the bat. If they have an issue with health or the address, I really do like that because that would help if I were looking for a particular person…I know that I’d have to address before I could click the box and accept them for POA.” -P5
  - “We would actually make a phone call to contact these Veterans because we would not be able to accept their power of attorney, but we would send them a new one that allows us, you know, to access their records.” -P8
  - “Those [requests] with the hazardous signs [indicating limitations of consent], I would work on that. I would definitely do those first.” -P9
<br />

- Participants liked the Pending, Accepted and Declined tabs in the POA Requests table, as it made them confident they could find requests they worked on, or that other VSO Representatives in their organization had worked on. 
  - Participants did not distinguish between “new” and “pending” requests in any meaningful way, with both meaning “all requests that are not yet accepted or declined.”
  - Participants expected that as requests were accepted or declined that they would disappear from the pending list so other VSO Representatives within the organization would not attempt to action them. 
    - Participants had varying requests for how long a request should be visible in the Accepted or Declined tabs, ranging from a week to “forever.”
  - Not all participants have permission to decline requests within their organization. One participant said it would not be appropriate for them to have a “Declined” tab in the table if they were logged in.
  - One participant requested a Withdrawn or Resubmission column or tab within the table for cases where a Veteran limited consent to their medical records and the VSO Representative asked them to resubmit their 21-22.
- Quotes about “Pending” versus “New” label
  - “Pending means pending, you know, that we need to take action….I don’t think having a new-pending or an old-pending or a pending would make a difference. Once they’re accepted, they’re…accepted, once they’re declined, they’re declined.” -P2
  - “Pending to me would mean that you’ve already accepted [POA] and it’s processing.” -P3
  - “If [a POA request] was new, it hasn’t been accepted, hasn’t been declined yet. So it’s the same thing as pending. Pending means it was submitted, waiting on a decision by us.” -P4
  - “I assume pending and new [are] the same thing.” -P5
- Quotes about “Accepted” and “Declined” tabs
  - “Well, being a manager, I would want to be able to see what my folks are doing. So I would filter declined [requests] to see why they were declined. And all I should see are these highlighted [requests], why they were declined. If I started seeing folks we should have accepted, then I would know that there’s an error on our part.” -P2
  - “I would come in and verify what [requests] we’ve accepted and what we’ve declined. If somebody says they put something in and it’s not in Pending, I can check to see if we’ve accepted or declined it in the past.” -P4
  - “I was just thinking I might wanna see - every now and then you might have somebody who has kind of burned some bridges with an agency, you know, if they’re very disrespectful, they’ve threatened, someone cussed them out, obviously they’re being declined. But it would be nice, you know, if they keep trying to force [POA requests] by if there was something like [the Declined tab]. I mean you can’t ban them forever because things could change. But it would be helpful to know if this is a repeat or switching or never done anything before.” -P7
- Quotes about how long POAs should sit in any tab
  - (How long should things stay in the pending tab?) “I mean, I guess it depends on the organization you work at. Some of [the POA requests] could get really, really old. [...] I think there should be a date by which they become canceled out and [the Veteran] would be prompted to submit one again.” -P1
  - “Once [a VSO Representative] clicks [the pending POA request], it either disappears [from Pending requests] or it’s marked or flagged or there’s a box or something so we know that someone’s working on it.” -P2
  - (How long would you expect requests to sit in the Accepted tab?) “You wouldn’t want that for a long period of time, what, 30 days maybe? Something like that. [...] The importance of the Accepted and Decline because like I said, if I’m looking for Roger Saunders and OK, it’s not in Pending anymore, but it’s not in Accepted and it’s in Declined, then, alright, well now I need to find out who declined it and why they declined it.” -P5  - (How long should a request sit in the pending column?) “Forever. Well, until it’s done, until it’s been accepted.” -P8
- Quotes about permissions
  - “I don’t understand [the Declined tab]. I can’t decline at my level. I’m not allowed to decline a power of attorney, that would be at a higher level.” -P3
- Quotes about Withdrawn or Resubmission tabs
  - “SEP had a withdrawn status, that relates to if someone, you call [the Veteran] up and you say, ‘please resubmit a POA that gives us access so we can access your records’ and then it moves to Withdrawn.” -P8
 
### Task 5 / Accepting POA request
*8 of 9 participants completed this task*

| Usability measures | Score |
| ----------- | ----------- |
| Task success | 1/1 |
| Single Ease Question (SEQ) | 1/1 |
| Expected path | (From table view) Veteran name > POA request detail view > Accept button > Accept confirmation |
| Most common path | _Same as expected path_ |

- 8 of 8 participants were able to find the POA request detail page, understand the nature of the POA request and accept it. The path to view and accept a POA request was the simplest flow in the ARP v1 prototype.
- SEQ quotes
  - “If anyone’s selecting less than [very easy] then they’re way too critical, because that’s just so easy to do right there.” -P1
  - “It’s easy…just compared to what we have now, it’s very simple.” -P4
  - “This was really easy to do, to go in here, search a name, find it [...]. But accepting it, that was very easy to do.” -P5
  - “It’s pretty straightforward. [...] I like when it popped up that ‘are you sure?’ little kind of confirmation box. I appreciate that.” -P7
  - “If it worked, it’d be amazing.” -P8
<br />

- Participants found the detailed POA request page straightforward and informative. They understood the information presented based on the Veteran’s 21-22 and had sufficient information to decide whether they were going to accept or decline the request.
- Quotes on overall impressions of the detail POA request page
  - “That’s all of her information, which is what we would need from the file. [...] We could also, from this page, input this data into our case management system.” -P2
  - “It has all the information that we’re gonna be asking for the 21-22.” -P3
  - “I see all the great information here. Phone number that I can call [the Veteran] or email…I’d probably call.” -P5
  - “It’s just standard stuff.” -P7
  - “That’s awesome right here. If I’m able to see this information before I even accept [POA]...that there is amazing, right?” -P8
<br />

- Participants were asked if there was any additional information they would like to see on the detailed POA request page to facilitate decision making and next steps with handling a Veteran’s case. Requests included:
  - POA history and other information currently available in Share (5)
  - Date of birth or last 4 of SSN to confirm common names (3)
  - Ability to export or easily copy name and basic contact information into the VSO’s CMS to begin tracking actions taken on behalf of the Veteran (3)
  - Ability to download a PDF of the filled out 21-22 (1)
  - Ability to select commonly submitted forms so that immediately on acceptance the forms would auto-populate with the Veteran’s information (1)
- Quotes about Share functionality
  - “They’re gonna sunset Share, and it’s all gonna go into VBMS. If there was a VBMS feature showing it pulled up [here next to the] POA, it would be helpful. It could be a link to VBMS directly.” -P6
  - “I would assume if I were to click on somebody, it would give me a little synopsis of the Veteran. That’s something we’ve always said we wanted, we call it the ‘POA peekaboo.’ Sometimes you wanna see all that’s been done [for a Veteran]. Like how big of a mess is this again, are you trying to file an appeal for an earlier effective date that there’s no bearing or standing? We don’t necessarily wanna, you know, jump onto that. So it’d be nice to see because Veterans will be like ‘oh no, I never filed before.’  And then you can see that [the Veteran] was rated a zero back in 1974…or ‘no I don’t have any open claims’ [and] you have two open appeals, and that’s one of those things you don’t find out until after you took POA. [...] So VA obviously is gonna have all of [the Veteran’s] ratings, have them click a button that allows [us] to review open claims information, ratings information, things of that nature, characterization of discharge, things like that. That would be helpful because sometimes [Veterans] didn’t know [they] have to bring [their] DD-214.” -P7
- Quotes about including date of birth or last 4 of SSN in the detailed POA request page
  - “I like date of birth because of course, that duplicate [name]...If we get a John Smith and yeah, there’s 14 of them in Florida, but one of them was born in 1936 and the other one’s in 1986, I mean, that would help me out.” -P8
  - “Date of birth because that’s another part of our [CMS] that we are able to search with. Again, the full process of when we go in and look for any representation request, the first thing I’m gonna do is go into my [CMS], look up to see if we already have the Veteran in our system because I don’t want to create a duplicate account.” -P4
- Quotes about exporting a Veteran’s request into a VSO’s CMS
  - “[If] we could go from this page, input this data into our case management system, or at least put some of it [and] we could pull social, we can verify [the Veteran].” -P2
  - “We can transfer [the Veteran’s information] over into our CMS system, which we can build a profile right then and there, put them in our system and then we already have them in the VBMS system [too], so that makes things a lot easier.” -P3
 <br />

- The accepted POA request popup was highly valued by participants, since it assured the POA data was transmitted properly, and provided confirmation of their access to the Veteran’s eFolder in VBMS.
  - Participants said their current process involved waiting for VBMS access, so they do not immediately check the Veteran’s e-Folder. The suggestion that ARP could provide near-instant access made participants consider how the tool would change their workflow to more quickly assist Veterans.
  - Participants had questions where the “Go to VBMS” button would take them within VBMS, preferring not to land on their homepage, but rather a Veteran search feature, or the Veteran’s profile within VBMS. An alternative was proposed where VSO Representatives could copy the Veteran’s name and full social security number and upon landing on the search feature in VBMS, easily paste in the information to pull the Veteran’s profile up.
- Quotes about accept popup and instant access
  - “Oh, that’s sweet. Go to VBMS. That’s cool, I dig that.” -P1
  - “This is perfect. Yeah, I like that.” -P2
  - (Is this what you expected to happen?) “So is that saying that if I accept POA that I automatically have access to their VBMS profile?...So, right now our process is to receive the 21-22 and then submit it to the VA and that process takes 3-5 days. So if I could have the Veteran submit this and I approve it right then and go directly into their VBMS, that would save a lot of time. A lot of time.” -P3
  - “I would like this much more [than what we currently have] because now I know that as soon as I accept your request that VBMS is open to me, which is not always the case in SEP. Sometimes it takes a minute for them to update. So, I like this better. The regular process now would be, you clicked accept and then you would have any of the missing information [for the Veteran] that would be…basically just a full claim number and then a button to click back to go to the request list. So from there I would then go into VBMS and mainly put [the Veteran’s information] in. So I like that ‘go directly to VBMS’ [button]. That’d be good.” -P4
  - “Oh, I can go to VBMS now. Would that really send me to VBMS?” (What would you like to happen here?) “I mean, if that would be really cool to be able to go right into VBMS and then confirm that the POA was accepted. Because then I could see for sure that everything’s good. And so now I can start working a claim for [the Veteran], getting in touch with her, setting up an appointment…yeah I think that’s good” -P5
  - (Was this what you expected when you clicked Accept?) “No, especially ‘go to VBMS.’ That’s good, it’s really good.” -P6
  - “If I’m able to go in, create [a Veteran’s] accounts, accept [POA] right there, and then hey, we already have access to VBMS, here we go. It would be seamless.” -P8
- Quotes about how VBMS integrates with ARP
  - “Now I do have a question here, based on this wording. Where in VBMS does that button take you to? [...] So does it go to a [Veteran] specific page or part of VBMS?” (If it just brought you to like the home or landing page at VBMS, what are you feeling?) “I don’t need that. It’s not good or bad, like all right, fine. If I use VBMS the way I should use it then if there’s a claim already pending for this [Veteran]...it would only make sense for it to go to their actual [profile] page inside VBMS. Like, there’d be no other place that you need to be sent to.” -P1
  - “Will I have to log into VBMS on each go to VBMS? Or will it just take me seamlessly back and forth if I have multiple folks in there? [...] I mean, I have two monitors, so I’ll have VBMS open on one side and then my regular one on the other side. This would assume I’m behind the VA firewall. So I would assume it would just make sense to go right into it once I’m logged in, so that I can go back and forth and just keep helping folks.” -P2
  - “The link…to go directly into VBMS. That’s cool. So that we can just go right into helping [the Veteran] while we have her on the phone, or we can return to the [pending POA requests] list if she’s not ready [and] we can go back to our business of accepting other folks.” -P8
<br />

- Visibility into the system is important for VSO Representatives, especially tracking the quality of data when a step has been taken with the VA that might require documentation to substantiate later.
  - While participants said they would immediately go to VBMS upon gaining access to the Veteran’s e-Folder, they had questions about what would happen to the POA request once it was accepted within ARP. 
  - Participants requested easy access to export a POA request or obtain a “POA request number” to verify it was accepted by the VA.
  - Participants also requested a “POA history” or dashboard to confirm which requests they had accepted or handled on behalf of their organization.
- Quotes about steps taken after a POA request is accepted
  - “[When a Veteran] hits my plate as their current advocate, [Accepted POA Requests] would be a place I’d want to go. Like when in fact did we accept their representation request? How long ago was it? Because we may one day wake up and go into VBMS and try and look them up, and all of the sudden it’s declined. We’re not allowed to see them. So then we’re thinking to ourselves, well wait a minute, I thought we represented this person in our software database with our organization. It shows we represent them, but VA is saying something different. Let me go check this [ARP] portal. And oh yeah, I see where it’s been accepted. So either for some reason it got removed, or that claimant has now gone to somebody else for help and submitted a new POA request. So I would want to…see that. That’d be one of probably a few different instances in which I’d want to see accepted [POA] history.” -P1
  - “Once I select [your POA request], you disappear, I have no idea where you went or what you’re doing and how do I follow up with you or am I just waiting for you to reach out again? Do [the Veterans] know we selected it? I mean all these questions start entering my mind…I would go to Accepted [POA requests] to find out who I accepted.” -P2
  - “Probably just for my own safety, I would probably go to the decline and I’d do a snapshot [of the decline reason]...and then put it in [my CMS].” -P5
  - “Now ‘Go to VBMS’ - that’s gonna log directly into the VA system supposedly, correct?...Looking at [ARP], is there a dashboard or anything you’re gonna have set up, like a snapshot, like the claims status?” (What would you want that to look like?) “[...]If [I] accepted a requested POA, you can go back to the dashboard, the organization that shows all the claims pending and where they are. Or the second button would be to go to VBMS so they go directly to the electronic file.” -P6
  - “You [should] have that symbol for [copying text] and it just says, should say ‘copy file number,’ click the copy, then gimme a little indication that it’s copied. I think VBMS does that. The system we have doesn’t, so you click it, but you’re not always sure. Did it go through? So a little, just a quick copy ‘cause then I just pull up the search bar in VBMS [and] paste.” -P7
  - “So, the [accepted POA] is in the accepted ones now. Takes them out of [the pending POA requests] section. Cool. So that’s great, but again…if it says ‘Do you want to export these to Word document’ or whatever. If there’s an ability to have their name and social security number, you know, then we can…add all those things in [our CMS] or send that to somebody to add those people into our system.” -P8

### Task 6 / Bulk select and approve POA requests
*8 of 9 participants completed this task*

| Usability measures | Score |
| ----------- | ----------- |
| Task success | 0.63/1 |
| Single Ease Question (SEQ) | 6.25/7 |
| Expected path | (From table view) Sort city column (A-Z) > Sort city column (Z-A) > Select Wichita requests > Click Accept > Confirm Accept |
| Most common path | (From search fields) City, state > Search > Table > Sort city column (Z-A) with moderator prompting > Sort city column (Z-A)) with moderator prompting > Select Wichita requests > Click Accept > Confirm Accept |

- 7 of 8 participants struggled to bulk select and accept Veteran POA requests from Wichita, Kansas without prompting from the moderator. This is because:
  - Participants  do not bulk accept or decline requests, preferring to review each request individually before making a decision. This differs from responses from our user interviews, where some singly accredited VSO 
Representatives said they have members of their team whose job is to monitor and bulk clear incoming requests.
  - Our task flow involved filtering the table of pending POA requests using the column sorting, rather than using city and state search fields above the table. This flow was counter to participants’ mental model.
- SEQ quotes
  - “It’s just a massive selection without looking at the Veterans’ information. (So would that change your score at all, that you’re not able to review all of the Veterans’ information before accepting?) Well, I mean, that’s two different questions. Was it easy to accept them? Yes…Should I accept all of them? No, because I haven’t reviewed any of them.” -P3
  - “You could make it easy also by showing the arrows on the Veteran’s name, limitations and all. I mean it’s right there, I was able to understand just visually that it’s not a header and I can sort [through the requests].” -P5
  - “This is closer to a three or four [out of 7]. Having the check box as opposed to a ‘select all.’  That would save me keystrokes or clicks.” -P7
  - “It’s a seven [out of seven] but it needs, it definitely needs an additional workaround.” -P8
- Quotes about bulk accept not being useful
  - “You still have to go through each and every one of [the POA requests] and click [to review them before accepting]. Then maybe there’s hundreds that could take you a really long time if you did it that way.” -P1
  - “I would go page by page [to review requests]. I don’t know how often I would select all, though. I would probably want to do these individually.” -P2
  - “I would definitely go line by line and open up every single Veteran [POA request] to review their information and then accept from their [POA request detail] page.” -P3
  - “[W]hat we typically do is I would call [the Veteran] first to make sure there’s no POA, no appeal that is pending. So that we wouldn’t accept it and then have to call ‘em up later and go ‘I’m sorry but you’ve got an appeal pending and we’re not gonna be able to accept your POA.’”  -P5
  - “There’s nobody at [VSO] whose job is to [bulk accept POA] in SEP. The [VSO Representative] will usually engage and check, and if we do see that there is POAs in there that have limitations or haven’t, they’re gonna engage with that [Veteran] directly to make sure that, okay, we’ve received a request, we can’t approve it, this is why.” -P6
  - “I would not approve any of those [POA requests] until I click on each one of them and be able to add them [to our CMS]. [...] There’s two reasons why people would [bulk accept] and it’s ‘cause they’re lazy or stupid.” -P8
- Quotes about searching by city and mental model
  - “I’d go to [VSO], then I could go to Wichita, Kansas search and then it would hopefully pull up a list of all the [VSO] requests outta Wichita, Kansas.” -P2
  - “I would think, I would guess…everything would just automatically populate and I could just hit Kansas or hit state to go straight to Kansas.” -P4
  - “I would go to the city, Wichita, and then Kansas. And then I would do a search.” -P5
  - “I’d click on, of course, the state, and then of course VSO[rg] and then I’d search. [...] I’d never use city ‘cause I don’t care where they live.” -P8
<br />

- Once prompted to sort columns in the POA request table, participants found the functionality of the table useful. Participants requested additional functionality to make the bulk accept useful for their current workflow:
 - Make clear search button easier to locate, or automatically clear search when returning to the POA requests page (2)
 - Ability to deselect requests with limitations of consent (2)
 - Display POA history (1)
- Quotes about sort feature in POA requests table
 - “You can itemize [the requests] here.” -P1
 - “Oh the columns, you can click the column [to] change!” -P3
- Quotes about additional functionality required to make bulk accept flow usable for singly accredited VSO Representatives
 - “All right, well [the search fields] should be blank.” -P1 (In reference to automatically clearing search fields)
 - “I’d probably unselect the one that says health and the health and address [limitations of consent], but the other ones with no issues, I could [accept]. [...] I like [the accept popup] because then it allows me to understand that I do have some that are limited and by our standard we would have to drill into that before we accepted [those POAs]. So then I’d cancel out, find those Veterans and then contact them and ask ‘em why.” -P5
 - “I would go back, uncheck those [POA requests with limitations of consent] and then accept those that are, don’t have any limitations. [...] Maybe a button that says, ‘accept only those without limitations of consent.’” -P6
 - “I don’t like things disappearing from a screen, ‘cause I don’t want to ever like forget where I’m at, you know. So if I accept [the POA requests] and then they are no longer viewable, I want to go in [and find them]. I wouldn’t want to create a duplicate, if we’ve already accepted some people.” -P8

## Task 7 / Decline Veteran POA request
*8 of 9 participants completed this task*

| Usability measures | Score |
| ----------- | ----------- |
| Task success | 0.94/1 |
| Single Ease Question (SEQ) | 6.13/7 |
| Expected path | (From table view) Veteran name > POA request detail view > Decline button > Click decline reason text box > Decline confirmation |
| Most common path | _Same as expected path_ |

- While 8 of 8 participants were able to complete the decline flow without prompting from the moderator, 1 participant was concerned that the “accept” and “decline” buttons would not have consistent interactions. 
 - This is because declining a Veteran in ARP v1 is a 3-step flow: clicking the “Decline” button, inputting a reason for declining in a text box, clicking “Decline” again, and then agreeing when a “confirm decline” popup appears.
 - Participants were concerned about how decline messaging would be delivered to the Veteran and how the Veteran would understand the message.
 - ARF Design intends to test a 2-step decline flow that would eliminate confusion over the Accept/Decline buttons.
- Decline flow SEQ quotes
 - “That was super easy.” -P1
 - “Streamlined [and] quick.” -P4
- Quotes about communicating the decline message to the Veteran
 - “It’s a six [out of seven]...If you are a Veteran, what does [a decline] mean to you? ‘Please resubmit 21-22 and grant access for health records.’ [...] It just needs to be easier [for Veterans to understand].” -P2
 - “One [out of seven]...I did like the narrative reason why we’re declining right then and there and it saves me having to call ‘em and say ‘this is why we can’t accept it, you need to redo it.’ Whereas now they’re gonna get that notification in their email or whatever. I’m guessing in VA.gov, there’s a message center saying ‘hey you got a new message, [your POA request] was declined, here’s the reason.’” -P7
- Quotes about confusion over 3-step decline flow
 - “I don’t like that when now we’re going to accept and decline, because I’m like well, am I accepting that or…so now I’m confused about which button I would hit…because I don’t know if I hit decline, I’m declining this [POA] and now I’m back to…I’d really be concerned. I don’t know which one to hit.” -P7
<br />

- 6 of 8 participants would decline a Veteran’s POA request if it limited consent to health records.
  - The 2 participants who said they would accept the request were both from the same VSO, which has a policy of accepting any and all POA requests. These participants said they would reach out to the Veteran to explain the limitations of consent and have them resubmit the 21-22 after explaining why consent has to be given. 
  - No participants said they would decline a request purely on restricting access to change a Veteran’s address.
  - This pattern is consistent with findings from our prior research.
<br />

- Participants liked the ability to write a decline message to the Veteran as part of the decline flow.
  - 6 of 8 would rely on boilerplate language written by their VSO in communications with the Veteran.
  - 2 of 8 participants wanted the ability to customize the message fully to tailor to the individual Veteran’s request.
  - 4 of 8 participants would still email or call the Veteran after declining their POA request, despite the ARP system sending the decline message to the Veteran automatically.
  - 2 of 8 participants were concerned that the messaging sent to Veterans would be too negative if it used the term “decline,” which they interpreted as an outright rejection of the Veteran by the VSO. They asked that messaging to the Veteran use neutral or positive language to encourage them to reach out and communicate with the VSO to correct any limitations of consent so that representation would be accepted.
- Quotes about boilerplate decline language
  - “Our boilerplate is pretty good. It’s not, you know, anti-anything. It’s just letting [the Veteran] know we just need them to take certain actions before they come to us.” -P1
  - “I would put limitations or something here. Maybe just copy and paste that [from my VSO manual], put it in there and decline.” -P3
  - “We have some text we would use already.” -P9
- Quotes about contacting the Veteran
  - “I’m gonna email him, I’m gonna give him a phone call. If he doesn’t answer, leave a message. If I can email him with that email [in the POA detail view]...if all else fails, we have the address and name there so I can mail the information to them.” -P3
  - (Where do you think Veterans will receive the decline message?) “I don’t, to be honest with you. I think that I mainly don’t care just because [we will be] reaching out to ‘em directly.” -P4
- Quotes about decline language
  - “There needs to be a term for rework, maybe ‘rework claim’ or…not readjudicate, but I guess rework that’s the only thing that’s coming to my mind. Because at the end of the day, we’re not gonna decline any Veteran at all. We, we’ll try our best to reach out and get their approval…The decline word is kind of harsh for me. I would inform the Veteran what we do to fully assist them with their claim. I have to have medical records.” -P3
  - “Our wording is a little bit different to make it more understanding why we’re not accepting [the POA request] or that we can’t accept it. We put more of the blame on VA.” -P4
<br />

- Consistent with findings from other flows within ARP, 1 participant wanted a snapshot of the decline request and language saved in ARP or available to download for their VSO’s CMS to have a record of actions taken on the POA request.
- Quotes about having copies of actions taken on declined POA requests
  - “[Is clicking decline] assuming I already have all of this [recorded] in my system?” -P4
 
### Task 8 / Net Promoter Score (NPS)
*8 of 9 participants completed this task*

- 7 of 8 participants gave positive feedback on their overall ARP experience. 
- The outlier on NPS said they did not see value in ARP as an everyday tool. This participant’s organization uses a Tyler Technology tool that combines client management features with the ability to populate and submit forms. 
  - A participant from our [user interviews and participatory design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/research/2024-02%20User%20Interviews/02-2024-user-interviews.md#research-findings-for-arf-team-accredited-representative-user-interviews-022024) study using the same tool had similar feedback, suggesting that widespread adoption by third party tool users may require more than SEP parity; such as the ability to sync to a CMS or auto-populate form fields. 
- NPS Quotes (High scores)
  - “Five [out of 5], totally. That’s the kind, it’s added the kind of functionality I think we’ve kind of always wanted to see in little ways here and there, and I think it’s a lot more useful than [SEP was] before. It’s so limited right now. You just can’t really do much. You can’t count on it. It’s constantly wonky.. Sometimes it won’t even let you log in, like there’s always problems…so to have something like this that provides much more detail, gives you the ability to give it one more thought to bulk approve or bulk decline. You know, to customize a note that actually gets kicked to the claimant so they understand why.” -P1
  - “It’s just the easier [tool]. If we’re doing everything digital and everything is just sliding right into place where it should be, it’s gonna make our day faster. We’ve got appointments, walk-ins, everybody out there waiting. The faster we get one Veteran done, we can get the next one in.” -P2
  - “I’d say it’d be leaps and bounds above SEP as it is right now.” -P4
  - “It’s really good. It’s visually appealing, I mean, you know, it’s straightforward. I don’t particularly see a use for the ‘Veterans can now digitally submit a 21-22’ because you know, that’s why we’re in [ARP] for, but besides [that], that’s not a big deal. But everything else is straightforward.” -P5
  - “I would say a five [out of five] ‘cause it’s easy access into the system and I know most VSO [Representatives], if you have a digital link where it’s updated quickly and they can get access to the file to help someone, they’re gonna like the tool.” -P6
  - “I want to use [ARP] so much that we make it awesome or break it. We need to make sure the full scope of what we’re getting into so we can be [utilizing] it to its full potential.” -P8
- NPS Quotes (Low score)
  - “Honestly, probably a two [out of five] because you need to know when it’s an appropriate time to use this tool. Because yeah, I’ve been doing this a while. I have a lot of friends all over the country, so for them, I would be like ‘hey man, do this. Send it to me and I can take care of it.’ Because now I’m just like here’s a form, fill it out, sign it, scan it, or email it or something back to me. So for, in that case, again, because I’m more knowledgeable and I know when it would be appropriate, I would [use ARP]. But there could just be a lot of issues and it could overwhelm people. Again, using a whole other system on a regular basis. Like I would use this occasionally just for those one-offs that they can’t get to our office for whatever reason.” -P7

## Additional Insights

### Consider additional functionality to enhance the VSO Representative experience. 
Participants were asked what additional features - in addition to feedback already given for each feature and flow tested - would enhance their experience using ARP to manage power of attorney requests. Feedback fell into 3 categories: 
- **1. Make it easier for Representative-Veteran interactions in-person.**
  - 2 of 9 participants would like the ability to walk a Veteran through the 21-22 digitally in the office to submit through ARP, potentially without the Veteran needing ID.me or a VA.gov login.
- **2. Customize the ARP experience to accommodate a variety of workflows, and facilitate next steps in the claims management process as soon as a POA request is accepted.**
  - 4 of 9 participants asked for the ability to expand the list of pending POA requests instead of relying solely on pagination.
  - 3 of 9 participants requested the ability to change the order of columns in the pending POA requests table, save searches, or customize search parameters.
  - 2 of 9 participants wanted ARP to automatically populate Intent to File upon accepting POA, or attach and submit other forms to the POA before you finish the Accept flow.
- **3. Build trust in the ARP system by providing visibility.**
  - 3 of 9 participants want clear assurance that VA forms are current and up-to-date within ARP.
  - 1 of 9 participants wanted documentation from the VA acknowledging that VA accepts digital signatures from the Veteran and the VSO Representative when a POA goes through ARP.
  - 1 of 9 participants asked that VSO Representatives receive an email or notification within ARP to confirm that a POA they accepted or declined has been acknowledged and received by the VA.

### There is not a clear use case for mobile ARP…yet.
Participants were asked what equipment they use to do their job and whether there was any use case where they would like a mobile-ready version of the ARP tool. 
1 of 9 participants said a mobile-ready ARP tool would be useful for instances where they are traveling and need to quickly approve a request, but that use case would be extremely rare.
We recommend further exploration into a mobile-ready ARP with cross-accredited VSO Representatives, who are more likely to work in the field.
- Quotes about mobile ARP 
  - “I don’t know where [I’d use ARP on mobile], so I would use the laptop, and the reason is, because I would be able to see everything much better than on a mobile device. I could see the use of a mobile device, especially if we’re traveling and we’re at [a] conference and I wanna check it out. But I, you know, that would be, for me, it’d be few and far between to do that. Because when we accept the POA we usually call [the Veteran] and that’s where it’d be nice to do that through the laptop.” -P5

### Cross-accredited VSO Representatives may have a different mental model for their accreditation and work than previously thought. 
[One of the participants](https://app.enjoyhq.com/projects/LknDOXWOX/content/document/93562700-9928-449a-b36c-9d8f2e67754c?project_id=LknDOXWOX) of this study signed up in error, assuming they were a singly accredited VSO Representative for the state of Georgia, when they in fact hold 8 cross-accreditations. This is because, to the participant, they are employed through and primarily accredited with the Georgia Department of Veterans Services, and their cross-accreditations are organizations with whom they agree to support. Some design considerations the participant raised include:
- This participant felt that their user profile in ARP once logged in should indicate their accreditation with the Georgia Department of Veterans Services before listing other organizations through whom they are accredited.
- The participant did not think it was appropriate for them to approve or decline incoming POA requests regardless of the VSO requested on the 21-22, because they answer to management at the state level as well as from their cross-accredited VSOs at the national level.
- The participant did not see the value in filtering POA requests by VSO and would default to filling out new 21-22s with the state of Georgia or American Legion, who has a Memorandum of Understanding with the GDVS. 
Overall, this participant’s feedback should help inform changes to the ARP UI to accommodate cross-accredited workflows. Additional research will be necessary to understand how prevalent these workflows and conceptions of accreditation are. 
- Quotes about cross-accredited workflows
  - (If you are switching between Veterans who you support through the Georgia Department of Veterans Services and American Legion, are you logging out and logging back in [to SEP and Tyler Tech], into a different homepage?) “No, I’m not logging in and logging out of different accounts or different pages or anything. I’m just logging in and, you know, either [...] it'll say POA is Georgia Department of Veterans Services, or POA is American Legion, or it’ll just tell me who the POA [VSO] is.” -P9
  - “I wanna see all of the POAs that I am currently accredited with [in the pending POA requests table], all the VSOs that I’m accredited with under my OGC number [in the user profile]. Especially if I’m a county VSO. And in that way the system is also designed to…acknowledge that they’re allowed to see information for each one of the organizations they’re accredited with. [...] I want to maintain quality controls of [my] work.” -P9

### VSOR Find a Representative feedback was mixed.
In collaboration with the [Accredited Representation Management](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/research) team, ARF Design showed the live [Find a Representative](https://www.va.gov/get-help-from-accredited-representative/find-rep/) experience on VA.gov to 5 of 9 participants.
- 4 of 5 participants were able to find themselves using the tool, with moderator prompting. 
- 1 participant struggled to find themselves with the tool because their address was 11 years out of date. This participant made a comment assuming that roughly 90% of VSOR information in the OGC database is incorrect, so searching for representatives by location and contact information is irrelevant.
- 3 participants could not find themselves because all representatives at their organization are listed under the same address
  - 2 of these participants were from the same Big 6 VSO
  - 1 participant was a State VSOR
- Participants liked the informational content on the Find a Representative page, including the definitions of each representative type.
  - 1 participant wanted bulleted versions of each representative definition, because the content was too “wordy.”
- 2 of 5 participants requested the ability to search by organization rather than location. These participants worked for VSOs that have a centralized organizational model where location of the VSOR is irrelevant to the type and level of care provided to the Veteran.
  - 1 of these participants attempted to use the name search field to search by organization.
- 4 of 5 participants would not use the report button for various reasons:
  - 3 participants were concerned that reporting their information would impact their accreditation status.
  - 2 participants wanted to update their information, but wanted to know how the “report” button would be used first.
  - 1 participant would not report outdated information, because their VSO has a centralized model, and individual VSOR do not handle accreditation issues with OGC.
- 1 participant was surprised to see their accreditations listed when they found their information in the tool.
  - This representative was cross-accredited, and wanted to see their “home” organization listed at the top of the list of accreditations.

### VSO Representatives are eager to be included in other VA.gov research efforts.
VSO Representatives repeatedly said they felt like their feedback has been ignored in the development and redesign of VA.gov products. Participants said they had experience handling and greatly desired the opportunity to provide feedback on pension, DIC, and dependency claims, as well as the 21-526 form. While testing on these elements is outside of the scope of the ARF team, we can recommend VSO Representative points of contact to other VA.gov teams working on these products, should they desire VSO Representative input in future research. 

## Recommendations
This section is divided into two parts: Critical Recommendations for Pilot and Future Considerations. The first part highlights our suggestions that should be incorporated in the coming months as part of our initial user experience. The second part highlights suggestions that are larger in scope and will require more exploration, yet are important to consider as the Accredited Representative Portal evolves over time.

### Critical recommendations for Pilot

#### 1. Do not pilot ARP with VSO Representatives who use and are currently happy with third-party tools.
- ARF Design strongly recommends a pilot of ARP with both current users of SEP, and users with no prior experience in SEP. However, based on repeated feedback from users of Tyler Technology representative-facing tools, we believe they should be excluded from the ARP Pilot. These users:
  - Operate at the state level
  - Have limited cross-accreditation (2 or less) or are singly accredited
  - Have software needs that exceed VA-facing functionality, such as social services or other wraparound supports.
- These users have suggested use cases for ARP in their workflows in the future as an “occasional” or rare instance where its functionality exceeds that of Tyler Technologies’ offerings. As such, we believe that they would be better suited to using the tool once it is available to the general population of accredited representatives.

#### 2. Update both the authenticated and unauthenticated ARP global navigation and site structure.
- Streamline the About menu to include content that was previously in a content box on the POA requests page to improve findability. About should include:
  - Information about who ARP is for
  - Help guides, including a “quick start” tutorial and longform documentation with Frequently Asked Questions 
Contact information
- Move Resources content to the footer for quick access. Resources should include:
  - Regulatory documentation from the VA
  - VA forms most commonly used by accredited representatives
    - Explore how to communicate to VSORs that the forms at up-to-date
  - OGC POA code lists
- Add 21-22 links to the authenticated Power of Attorney menu:
  - View power of attorney requests
  - Access 21-22 form -> digital version of 21-22
  - Download 21-22 -> direct download link of form
- Confirm Accreditation menu content with OGC.
- Remove links to Veteran resources from the POA request page, as it proved confusing and distracting to VSO Representatives.

#### 3. Refine ARP content strategy and calls to action for core audience, tasks and actions.
On both the unauthenticated homepage and the POA requests page, participants struggled to understand messaging around Veteran-facing VA.gov tools. They were also unclear on whether not-yet accredited representatives should use the portal. Some of this uncertainty was around a fear that unauthorized users would access ARP maliciously, or that Veterans would take action on their claims that would negatively affect their outcome. 
- Unauthenticated homepage recommendations:
  - Remove Veteran-facing content entirely, or move it to a less prominent location on the homepage, so as not to confuse users around the purpose and core audience of the ARP tool.
  - Clarify who can apply to become accredited and how ARP and OGC are related, with a goal of promoting ARP as a one-stop location for all things accredited representative, reduce the siloing of representative-facing tools, and clarify that not everyone can become an accredited representative.
    - Decide whether “OGC number” or “Accreditation number” is the appropriate label for the user profile moving forward.
- POA requests page recommendations:
  - Move the link to 21-22 digital submission to the Power of Attorney global menu
  - Remove the link to Find a Representative
  - Deprioritize secondary task functions, including moving resources for help and contacting IT or OGC to relevant locations (footer, profile drop-down)

#### 4. Make the sign-in and authentication process clearer for PIV users. 
To date, VSO Representatives who use PIV to log into VA and 3rd party systems have made up the majority of our participant panel, and evidence suggests they will continue to represent the majority of ARP users moving forward. The current sign in and authentication flow in the [VA Design System](https://design.va.gov/) does not make clear that PIV users should select login.gov. We recommend making it clearer to users who are not familiar with login.gov and who want to use PIV - as opposed to ID.me - where they should go to log in.

#### 5. Provide clear, repeated checks into the ARP system’s status to reduce steps in VSO Representatives’ workflow. 
VSO Representatives need to be able to document and verify the steps they (or their colleagues) took on a Veteran’s case. ARF Design and Engineering should collaborate to consider how to design for the below user stories:
- As a VSO Representative, I need to know **when** the list of POA requests was populated and how to check if any new requests have come in.
- As a VSO Representative, I need confirmation that once a POA request has been accepted or declined, record of that action has been recorded in ARP.
- As a VSO Representative, I need to see the full SSN, DOB or other PII after accepting POA so that I can create the Veteran’s profile in our CMS, verify we do not already have information, and begin searching for the Veteran in VBMS. 

#### 6. Update ARP POA search capability to accommodate common use cases.
The search function should be persistent and not collapsible. Additional search fields need to be considered to accommodate searching for Veterans with common names and in high population areas
- Explore technical feasibility of last 4 SSN/claim number and/or DOB as search fields.
- Make “Clear search” and “refresh” or redo search functions easy to locate in the UI.
  - Consider auto-clearing a search after a VSOR accepts/declines a POA request and clicks “Return to homepage” to bring to future user testing.

#### 7. Improve the readability and flexibility of the POA request list and POA request page.
Consider alternate presentations of POA data in the table, such as cards, which would allow more data to be shown in the UI.
- Explore the technical feasibility to expand the POA requests list  length from 10 results to 25, 50, 100 and “all.”
  - Evaluate how current representative-facing systems like VBMS expand lists.
- Explore what additional data to display in the POA list, such as SSN, DOB, and contact information.
- Deprioritize filtering the list of POA search results so that it accommodates basic filtering (recent/oldest requests) over complex filtering.

#### 8. Explore the technical feasibility of populating more non-PII Veteran data on the POA request detail page to facilitate faster decision-making.
Participants were asked if there was any additional information they would like to see on the detailed POA request page to facilitate decision making and next steps with handling a Veteran’s case. Requests included:
- POA history, current POA code, and other information currently available in Share (5)
- Date of birth or last 4 of SSN to distinguish between Veterans with  common names (3)
- Ability to export or easily copy name and basic contact information into the VSO’s CMS to begin tracking actions taken on behalf of the Veteran (3)
- Ability to download a PDF of the filled out 21-22 (1)
- Ability to select commonly submitted forms so that immediately on acceptance the forms would autopopulate with the Veteran’s information (1)

#### 9. Continue to explore the technical feasibility of accepted and declined POA history.
Participants saw the value of the Pending, Accepted and Declined tabs of the table as a way to confirm the status of a case, validate their work, and manage other VSO Representatives. Given low trust in VA tools by VSO Representatives, this can be seen as a failsafe to Representatives that the VA has confirmed their power of attorney and they can move forward with assisting the Veteran. Seeing accepted POA requests is also necessary for the VSO Representative to input the Veteran's data into their CMS, a common next step after establishing POA.
- As a VSO Representative, I need confirmation that once a POA request has been accepted or declined, record of that action has been recorded in ARP.

#### 10. Reduce steps in the POA decline flow to reduce friction.
ARF Design intends to reduce the decline flow from a 3-step to a 2-step process that would eliminate confusion over the Accept/Decline buttons.
- Test the 2-step decline flow in subsequent rounds of user testing
- Explore standardized decline messaging and VSORs’ reactions to lack of customization.
- Support ARM team with any testing of standardized decline messaging with Veterans.

### Future considerations

#### 1. Explore expanded geographic search options for POA search.
We know that state and national VSO Representatives, such as those we spoke to in this study, are less likely to conduct complex geographic searches for Veterans. In future research, we will need to better understand complex geographic searches and whether ARP POA search needs to accommodate customized or savable search parameters, such as a multi-zip code area or a region.

Possible use cases include:
- Service members located on a base (requires a different address code)
- Veterans and service members who live overseas 
- VSOs that support multiple zip codes in their region

#### 2. Develop tools for VSO Representative managers who need the ability to view and report on the actions taken by other VSORs.
User story: As a VSO Representative, I need documentation that I accepted a POA. I need this documentation for myself, my manager, and the Veteran. 
User story: As a manager, I need to see what my VSO Representatives have done on a POA request and what actions have been taken post-acceptance.
- ARF Design should collaborate with Engineering to consider a POA submission number, ability to download the 21-22 or have a “snapshot” of actions taken on a specific request.

#### 3. Explore ways to speed up tasks that happen concurrent to accepting POA.
Based on the our current understanding of VSO Representative workflows, there are several key actions taken at the same time or immediately following acceptance of power of attorney:
- Explore options to sync or export data to a VSO’s CMS to more easily populate a Veteran profile.
- Offer pre-populated digital or downloadable forms with the Veteran’s information.
- Offer links directly to Veteran-specific pages in other VA systems, like VBMS.

#### 4. Provide transparency and customization options within VA communication with Veterans
When discussing the messaging sent about declining a POA request, VSORs expressed that they want to use their accredited organization’s boilerplate language. In some cases, they want to send additional communication to soften the decline message sent by VA, which VSORs worry will imply that the Veteran themselves is being rejected (rather than a form needing re-submission with some modifications). 
- Explore how we can provide VSORs with transparency into the exact language Veterans are receiving from VA, and provide them with opportunities to customize the language to fit their organization’s needs. 

## Next Steps
1. Update top tasks, user stories and persona to reflect insights
1. Update MVP screens to include top tasks
1. Prepare to test updated task flows with cross-accredited VSO Representatives

## Further Research Needed

### 1. Utilize repeated measures across additional usability studies on ARP to determine a benchmark usability score.
- In order to ensure a successful launch of ARP’s 21-22 functionality, it will be necessary to benchmark the usability of key tasks and flows. 
- Repeating SEQ, NPS and task prompts across future iterations of usability testing will provide a baseline from which we will be able to measure the impact of ARP once it goes to Pilot and MVP.

### 2. Understand more broadly whether representatives associate their accreditation process, and by extension OGC, with their Veteran-facing work with VA.
- By now, we understand that singly accredited VSORs do not associate their work supporting Veterans with the VA with their accreditation, or OGC. 
- Since ARP will have multiple accredited representative-facing functions, which will include some connections with accreditation and OGC, additional research will be necessary to validate whether this theory extends to other types of VSO Representatives and accredited representative types.
  - Continue to research how cross-accredited VSORs view their accreditation, whether they see themselves having a “home” organization or whether they view all of their accreditations equally. 

### 3. Determine what geographic search parameters are useful for cross-accredited VSORs.
- ARF Design now has a clear understanding of how singly accredited representatives want to search for and filter data. We will need to determine additional geographic search fields with cross-accredited representatives, such as county representatives.

### 4. Which VSO Representative types use a bulk accept flow in ARP? Is this a use case that needs to be accommodated in ARP?
- Plan SME interviews with individuals at several VSOrgs who may be able to explain how their organization accommodates high volumes of requests in the Stakeholder Enterprise Portal (SEP). 
- Include bulk accept flow in any cross-accredited user testing to see if that use case fits their workflow.

### 5. Understand use cases for sorting POA requests
- The task presented to participants that required sorting the table was counter to their mental model. Additional research is needed to understand how frequently, in which scenarios, and by which data a user might sort POA requests.

### 6. Understand the case for a mobile-ready platform.
- We theorize that cross-accredited VSO Representatives, such as county VSO Representatives, will be more likely to have use cases for mobile or tablet-ready ARP tools, who frequently work in the field.
- ARF will plan to confirm mobile/tablet use cases with cross-accredited VSO Representatives in upcoming user testing, and then decide whether the use case is significant enough to warrant a round of mobile user testing.

### 7. Explore ARP-VBMS connectivity for the 21-22 accept flow. 
- Partner with ARF Engineering to discover whether the VBMS button can link directly to a Veteran’s profile or a Veteran search feature in VBMS, rather than the homepage. We currently have reason to believe that this is not feasible in the short-term.
- Assuming that it’s not immediately possible to link directly to a Veteran’s profile in VBMS: Test an accept flow that includes clicking through the “POA has been accepted” popup to VBMS to gauge whether users accept landing on the VBMS homepage rather than the Veteran’s profile/e-Folder.

### 8. Understand the adoption of standardized decline messages to the Veteran with VSO Representatives.
- It will not be feasible to have a free text box for decline messaging in the pilot, which our research shows some VSORs would prefer. Additional research is required to understand what type(s) of standardized decline messaging VSORs like and would use.
- Plan to incorporate standard decline messaging into the decline flow for cross-accredited VSOR user testing.

## Appendix
- [Research plan](https://dvagov.sharepoint.com/:b:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/032024%20VSOR%20User%20Testing/User%20Testing_%20Research%20Plan.pdf?csf=1&web=1&e=Tj2v5y) (Sharepoint)
- [Conversation guide](https://dvagov.sharepoint.com/:b:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/032024%20VSOR%20User%20Testing/User%20Testing_%20Conversation%20Guide.pdf?csf=1&web=1&e=ig1Xgr) (Sharepoint)
- [Recruitment plan](https://dvagov.sharepoint.com/:b:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/032024%20VSOR%20User%20Testing/User%20Testing_%20Recruitment%20Plan.pdf?csf=1&web=1&e=OPpAti) (Sharepoint)

### Tools used for synthesis
- [EnjoyHQ](https://app.enjoyhq.com/sh/pj/b021641a-7708-49ea-9d29-bf4f312d8783)
- [User testing notes and debrief](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1711575270185/83b03fe96dcafe9f42b206e0dc3efbfd2457c1f2?wid=0-1712943681350&sender=u503219bf4e47eab9c75d3838) (Mural)
- [Task success and usability metrics](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/032024%20VSOR%20User%20Testing/Task%20Success%20Measures.xlsx?d=wbe086d2f13364316aed7491c828055de&csf=1&web=1&e=GD3dDg) (Sharepoint)
- [Key takeaways from test sessions](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/032024%20VSOR%20User%20Testing/Key%20takeaways.docx?d=w1161f34583fd47de8da84a5539af4a2b&csf=1&web=1&e=qTr3w7) (Sharepoint)

### Pages and applications used
- [ARP mockup](https://www.figma.com/design/C3sdnDf8anVqXVdmiCWwq8/ARF---April-2024-usability-test?node-id=0-146) (Figma)
- Homepage mockups for preference testing (Figma)
  - [Option A](https://www.figma.com/design/C3sdnDf8anVqXVdmiCWwq8/ARF---April-2024-usability-test?node-id=2381-578776&t=uL7vCeO7QycKflBC-1)
  - [Option B](https://www.figma.com/design/C3sdnDf8anVqXVdmiCWwq8/ARF---April-2024-usability-test?node-id=2381-578764&t=uL7vCeO7QycKflBC-1)
  - [Option C](https://www.figma.com/design/C3sdnDf8anVqXVdmiCWwq8/ARF---April-2024-usability-test?node-id=2381-578752&t=uL7vCeO7QycKflBC-1)
  - [Option D](https://www.figma.com/design/C3sdnDf8anVqXVdmiCWwq8/ARF---April-2024-usability-test?node-id=2381-578740&t=uL7vCeO7QycKflBC-1)
- [Find a Representative](https://www.va.gov/get-help-from-accredited-representative/find-rep/) (VA.gov)

### Other supporting documents created
- [Veterans Service Officer persona](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709236473099/7a69ce07dbe58af30f1954470bebbe59b7bf1160?sender=u503219bf4e47eab9c75d3838) (Mural)
- [ARP Information Architecture](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710857598969/32219746df15eb2602a01b1b3b1b3ccf9fa8760d?sender=u503219bf4e47eab9c75d3838) (Mural)

### Secondary research
- [09/2023 Secondary Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2023-09-secondary-research/2023-09-secondary-research-accredited-representation-management.md) (GitHub)
- [Comparative analysis of accredited representative tools](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=dKYGQx&cid=8d41c7a2%2D4c40%2D4d41%2Db6b1%2Df996cfe708c0&FolderCTID=0x01200073ECFC0A16DB51439C06C6FDC0E92947&id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representative%20Facing%2FResearch%2FCurrent%20State%2FComparative%20Analysis%2Epdf&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72&parent=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representative%20Facing%2FResearch%2FCurrent%20State) (Sharepoint)
- [01/2024 VSO Listening Session](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/research/01-23-24-listening-session.md) (GitHub)
- [02/2024 VSO User Interviews](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research/2024-02%20User%20Interviews) (GitHub)

### Who we talked to
Our target audience was 5-8 Veterans Service Organization Representatives who are accredited with **one** Veterans Service Organization. We spoke to 9 representatives, 8 of whom were singly accredited. One representative (marked with an asterisk below) thought they were singly accredited but ended up being cross-accredited with 8 Veterans Service Organizations. We asked this participant a subset of the planned questions.

### Study recruitment criteria
Veterans Service Organization:
- Big 6 (7)
  - Disabled American Veterans: 4
  - Veterans of Foreign Wars: 1
  - Wounded Warrior Project: 2
- State (2)
  - Nevada Department of Veterans Services: 1
  - Georgia Department of Veterans Services: 1*

VSO Representative sub-type:
- National Service Officer: 6
- Transitioning Service Officer: 1
- State Veterans Service Officer: 2*

Field experience
- 1-3 years: 1
- 4-6 years: 2*
- 7-9 years: 0
- 10+ years: 5

Location
- Georgia: 1*
- Maine: 1
- Missouri: 1
- Nevada: 1
- Pennsylvania: 3
- Washington, D.C.: 1
- Virginia: 1

Support type
- In-person: 3
- Hybrid: 4*
- Online-only: 2

Office location
- Urban: 6
- Suburban: 2*
- Rural: 1

Service record
- Veteran: 9*

### Underserved groups we haven’t talked to
- This research does not include perspectives of the following groups:
- Non-Veteran accredited VSO Representatives
- Small- and midsize national VSO Organizations
- Regional accredited VSO Representatives
- Tribal accredited VSO Representatives
- Assistive technology (any)
