# Form 0781 Updates Concept Testing and User Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), 526EZ, Disability Benefits Experience Team 2**


Date: August 15, 2024

Julie Pedke (julie.pedtke@coforma.io), Ruben Sun (ruben.sun@coforma.io), Jina Ryu (jina.ryu@va.gov), and Nichole Nicholas (nichole.nicholas@coforma.io)


[2024-06 0781 Research Readout.pdf](https://github.com/user-attachments/files/16752040/2024-06.0781.Research.Readout.pdf)


**Jump to:**

- [Background](#background)
- [Research Goals and Hypotheses](#research-goals-and-hypotheses)
- [Research Questions](#research-questions)
- [Methodology](#methodology)
- [What did we learn: Summary](#what-did-we-learn-summary)
- [Hypotheses and Conclusions](#hypotheses-and-conclusions)
- [Next steps](#next-steps)
- [Appendix](#appendix)
- [Tools used for synthesis](#tools-used-for-synthesis)
- [Pages and applications used](#pages-and-applications-used)
- [Participant Demographics](#participant-demographics)

## Background 
About 1 in 3 women and 1 in 50 men report having experienced sexual harassment or sexual assault while in the military.

Stats are limited for nonbinary and transgender Veterans, but one study reports 15.2% of transgender women and 30% of transgender men experienced military sexual assault.

Almost a quarter of Veterans have PTSD at some point in their lives. 

VA released the new Form 21-0781 Statement in Support of Claimed Mental Health Disorder(s) Due to an In-Service Traumatic Event (s) this year, which is a combination of two previous VA forms:
- Form 0781 Statement in Support of Claim for Services Connected for PTSD, and…
- VA Form 0781a Statement in Support of Claim for Service Connected for PTSD Secondary to Personal Assault

The biggest changes to the form included:
- Expansion to include not just PTSD, but other mental health conditions linked to a traumatic in-service event
- Addition of treatment details and supporting evidence types
- Removal of many now unnecessary fields
- Addition of examples that model the required level of detail (shifting towards more brief descriptions of the trauma)

We are translating these updates to the digital 0781, which is embedded within the authenticated 526EZ. We are not currently working on a stand-alone digital version of the form.

[0781 Discovery Mural with mapping to older form versions](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710425395956/4f0a397015bbcaadd1a421ed60e8d8e185cf1b12?sender=udbd39c1bbebb4ec4d7d08829url)

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Background.png)


## Research Goals
Based on prior research and the discovery on the new form, we identified three research goals:
- Goal 1: Understand which placement of the new 0781 within the 526 works better, particularly as it relates to evidence.
   - Hypothesis 1: Veterans will be able to easily orient themselves to start and exit the 0781 with the new content on transitional pages.
   - Hypothesis 2: Veterans will be able to understand that there are two evidence upload sections within the form, and correctly identify what should be provided in each. 
   - Hypothesis 3: The new alerts and inclusion of previously uploaded documents will help the Veteran understand why they are asked for evidence twice, and prevent duplicate entries.
 
- Goal 2: Understand whether the event flow works for all Veteran experiences: reporting singular events, multiple related events, ongoing events, and so on.
   - Hypothesis 1: New instructions and examples will make it more clear to Veterans how they can describe their experience accurately and with an appropriate level of detail.
   - Hypothesis 2: Form updates will help clarify VA’s definitions while accounting for the Veteran’s mental models and guiding them to enter information needed for a successful outcome.

- Goal 3: Understand whether Veterans feel supported and heard through the claim process.
   - Hypothesis 1: New instructions, examples, and support alerts on every page will increase a sense of safety and provide relevant assistance as the Veteran navigates the form. 

## Research Questions

- Goal 1: Understand if the placement of the new 0781 form within the 526, particularly as it relates to evidence (which also appears in Step 3 for other conditions) aligns with the Veterans’ mental model. 
   - How well are Veterans able to orient to the ancillary form and understand when they are starting and exiting the 0781? 
      - Does the content on transitional pages into and out of the 0781 flow provide enough context for Veterans when navigating the form?
      - Does the “opt-in” approach work for Veterans with a variety of condition types? Or should we reconsider automatically routing some conditions to the 0781?
- Will Veterans be confused by having two separate evidence upload sections within the form? 
   - Does new messaging in the Step 3 evidence section showing what was already uploaded address this?
- Would Veterans prefer to upload one file at a time, or all documents together on one page? Will they be able to follow the headings that indicate which type they are uploading on each page?

- Goal 2: Understand whether the event flow works for all Veteran experiences: reporting singular events, multiple related events, ongoing events, and so on.
   - Do Veterans understand which event type(s) to choose based on the content provided? 
   - Will Veterans understand how to report singular events, multiple related events, ongoing events, and so on?
   - Are the new examples provided in the form helpful in orienting Veterans to the level of detail required, and lightening the burden of filling out this section?
   - Will the distinction between conditions and events be understandable, or should we explore adding MST as a condition (in collaboration with the contention classification team)?

- Goal 3: Understand whether Veterans feel supported and heard through the claim process.
   - Will adding support alerts to every page increase a sense of safety and provide relevant assistance as the Veteran navigates the form? Will they be distracting? 
   - Where in the form process will Veterans look for support messaging?
   - How can we align the support content with Veteran needs (e.g. desire for anonymity)?
- Are there specific aspects of the claim process where Veterans feel less heard in the process?
- Are the new instructions and examples provided in the form helpful in orienting Veterans to the level of detail required, and lightening the burden of filling out those sections?


## Methodology 

### **Design Concepts**
As we began translating the new form into a digital version, we realized there were several options for how we integrated the new content.

We decided to conducted research with two design concepts. 

- Concept A sticks with the way the form currently works, embedding the 0781 in Step 2 Conditions of the 526. 

- Concept B introduces the 0781 in Step 2, but pulls out ancillary forms (0781 and 4142) into a new Additional Forms section in Step 4.

Each participant saw just one concept. We alternated to get a mix of Veteran experiences across each concept. 

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Concept%20Screen.png)
![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Concept%20img%202.png)

### **Trauma-Informed Approach**
We partnered with Rachael Dietkus, a design researcher and licensed clinical social worker with OCTO and the Trauma-Informed Design Community of Practice to understand and incorporate a trauma-informed approached into our research. These approaches included:

**Extra care in screening questions**
- We included a question that explicitly stated the sensitive topics that would be discussed, and the purpose behind the study
- We screened out first-time participants, so that we’d only be talking to folks who had experience with the format of OCTO studies
  
**More screening phone calls and reminders**
- We worked with Perigean to develop a script for phone call reminders that reiterated the sensitive nature of the study and offered an additional opportunity to opt out or reschedule
  
**Extra care in our conversation guide**
- We spent additional time to explain the study and provided opportunities to opt out and take breaks throughout the interview
- We made recording explicitly optional, and limited the number of observers
- While we were uncertain about scheduling long (90 minute) sessions, this ended up working well, and we were able to finish early on several interviews while not feeling rushed on others

**Backup moderators, emergency exits, and team debriefs:**
- We invited Rachael Dietkus on interviews to support with difficult situations or topics, and ensured our team always had a backup moderator and exit strategies on hand
- We planned how we would run debriefs ahead of time, and scheduled 30-minutes after every interview to give team members time to decompress from hard interviews

**Thank-you emails with resources**
- After sessions, we included some resources in Perigean’s thank-you email to all participants, including VA Mental Health Services, Chaplain Services, and MST resources

## What did we learn: Summary

### Original Hypothesis
Early on, our team aligned on a design approach that aimed to keep all sections of the 0781 together. We hypothesized that given the sensitive nature of mental health conditions, it would be beneficial to allow the Veteran to get through this content all at once, and then “close the page” on their trauma while moving on to other parts of the 526.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2013.png)

### What We Learned
What we found from our research about the form structure was that this created more confusion.

- Instructional Cruft, Anticipation (Foreshadowing),
and Confirmation Fatigue
   - Separating the 0781 opt-in from the rest of the 0781 introduced a transitional instruction page in Concept B.
   - This, in addition to the “add-event” prompt in the experiences list-and-loop, in addition to the initial 
0781 opt-in generated a sense of confirmation fatigue.

- Disjointed Evidence Flow
   - Separating evidence for mental health conditions from evidence for other conditions introduced perceived redundancy in the form-flow and generated anxiety regarding what evidence was included for submission.

- Orphaned 4142
   - Separating the 4142 from the 0781 required adding “foreshadowing” mentions of it, and created a sense of complexity in the form-flow.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2014.png)

### Where We’re Headed
Moving forward we propose a hybrid approach, where the most emotionally burdensome parts of the 0781 stay together (narrative of experiences, behavior changes, and official reports), while 0781 evidence is pulled out and placed alongside evidence for other conditions.

- Instructional Cruft, Anticipation (Foreshadowing),and Confirmation Fatigue
   - To reduce fatigue related to instruction cruft and confirmation fatigue we propose to organize screens relating to the 0718 opt-in, traumatic experiences, behaviors changes up front, alongside conditions and the additional benefits opt-in. This reduces context switching and allows us to “screen” for what subsequent types of evidence we’ll need for the rest of the claim.

- Disjointed Evidence Flow + Orphaned 4142
   - To facilitate more ease in reviewing, editing, and appending evidence in like categories we’ve consolidated evidence entry into one unified step. In doing so, we’ll also be able to embedding the 4142 in-context.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2015.png)

### Concept C
Places decisional prompts screening for any additional forms (including additional disability benefits up-front). This is followed by a section housing additional forms (Step 3 instead of 4). Pieces of the 0781 in this section where applicable are as follows:
- 0781 introduction and opt-in
- Traumatic experiences
- Behavior changes

Placement of additional forms before supporting evidence, allows for screening what type of evidence we’ll need. All supporting evidence pages including the 4142 opt-in (as applicable) are consolidated in Supporting evidence (Step 4) to limit redundancy.
- Treatment details (for both 526 and 0781)
- 4142 (embedded)
- Supporting documents (for both 526 and 0781)

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2016.png)

**Risks and challenges to explore in further testing**
- Will showing a summary of the Veteran's responses in Step 2 Conditions on the "traumatic experiences" page help make things less redundant in that section?
- How well can we get the evidence for physical conditions and mental health conditions to gel together in one section, given that there are some differences in how this information needs to be collected? Will putting all evidence sequentially in the same section be enough to eliminate a sense of redundancy?
- Does our adjusted approach — keeping the most emotionally burdensome sections of 0781 together, while splitting out evidence — hold true? Will Veterans be expecting to revisit evidence for traumatic experiences alongside evidence for other conditions, or could this come as an unwelcome surprise and lead to retraumatization?
- Does the Additional Forms concept resonate when it appears earlier in the flow? Or might this placement feel destructive of the larger 526? Are there alternative framings we could use through new copy, such as “building your queue” or other concepts?
- How will introducing the 0781 in the Additional Forms step instead of the Conditions step be received? (This would add some distance in between inputting mental health condition and seeing 0781)
- Should we keep the yes/no question for the "traumatic experiences" page or direct Veterans directly to that page? 


## Hypotheses and Conclusions

### Goal 1: Understand which placement of the new 0781 within the 526 works better, particularly as it relates to evidence. 
### Form Placement 

#### Finding 1
**Hypothesis:** Veterans will be able to easily orient themselves to start and exit the 0781 with the new content on transitional pages.

_Maybe true_

Both our concepts performed better than the existing form. We addressed the abruptness which was a known pain point with the way the current version starts and stops. In both concepts, Veterans have a general understanding of what's been covered retroactively. However, comprehension of the overall form flow is vague.

Starting: The intro page appears in the same sequence for both concepts, and was generally well-received. In Concept B, the Additional Forms homepage performed well; Veterans were able to understand the intent of the page and remember why those additional forms were showing up.

Ending: In Concept A, the conclusion of the 0781 is soft and ambiguous without clear distinction from the rest of the claim process. In Concept B it was less ambiguous, but participants voiced frustrations around redundancy and length.

Quotes:
- "I know which ones to fill out next … I don't have to search for other forms, because everything is in one place."
  —P5

Concept B

- "This looks like a space saver before moving on. I understand that there is more to go but can stop if needed."
  —P9

Concept A

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2019.png)

#### Finding 2

Hypothesis: Veterans will be able to understand that there are two evidence upload sections within the form, and correctly identify what should be provided in each. 

_False_

The majority of participants were not able to clearly differentiate between evidence supporting mental health conditions and general evidence supporting their claim more broadly across both concepts.

**Concept A**
While a couple Veterans could clearly differentiate between the two evidence sections, the majority found this concept confusing, perceiving redundancy across the two sections.

**Concept B**
Participants who reviewed Concept B were able to make sense of the overall concept of "additional forms." However, once they arrived at the interior evidence-related pages of the additional forms sections they quickly got confused and were not able to understand how the pages related to the previous evidence sections of the form.

**What is evidence?**
In this context, “evidence” refers to the following: 
- Treatment records — including the types of facilities where treatment was received (private, VA, etc), and the records themselves, whether uploaded directly or a requested to be collected by VA (we tested the latter)
- 4142 Authorization to release private treatment records — permission Veterans grant VA to collect medical records from private medical facilities on the Veterans behalf
- Supporting documents, such as buddy or lay statements

0781 includes a more detailed list of types of supporting documents for mental health conditions such as diary entries, or records from counseling facilities, as well as official reports.

0781 also asks for more specifics on treatment facility type (Q13B) whereas 526 only asks if it was VA or private.

#### Finding 3
**Concept A:
Differentiating 526 and 0781 Evidence**

While a couple Veterans could clearly differentiate between the two evidence sections, the majority found this concept confusing, perceiving redundancy across the two sections. 
Along with the perceived redundancy between 526 and 0781 treatment records, participants also found the 4142 authorization and supporting document prompts to be redundant.

Quote:
- “Not sure why I am being asked this again. Feels like this page might be a catch-all, because we already provided the evidence.” —P9


![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2021.png)
![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2021.2.png)

#### Finding 4
**Concept A:
Differentiating 526 and 0781 Evidence (cont.)**

The blue alerts generally worked well to help remind the Veteran of what was already uploaded. 
For the question about how to request medical records, one participant mentioned wanting this answer prefilled since the blue alert seemed to indicate a prior choice.

- How might we… promote a clearer understanding of what evidence types are expected in each form section?
   - Consider ways to draw more clear distinctions between form sections and highlight differences between sections that may be misconstrued.

Quotes
- “This  gets point across that those don't need to get uploaded again.” —P15
- “It might be helpful to say, you’ve said this earlier, I want VA to get my medical records for me, and have it populate with that answer.” —P10


![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2022.png)

#### Finding 5
**Conflation of 0781 Evidence Types**

In the Concept A 0781 section, participants conflated medical records and supporting docs. Arriving at the lay statement upload page in the 0781, Veterans perceived this to be a place to upload all types of evidence. It wasn't clear to them that this page was only for uploading a lay statement. 
This was less of an issue for Concept B, because participants had already gone through medical records before arriving at this page. However, some participants made the same assumption about the supporting statements page outside of the 0781, and the dropdown reinforced the idea that this could be a place to upload many types of evidence.

- How might we… allow for a more clear understanding of what evidences types are required and how to submit them?
   - Consider providing ways to strengthen the association between evidence types and adjudication criteria.

Quote:
- “I noticed that this dropdown mentions things that wasn't in the previous page 5-10 pages back.
Photographs was never mentioned. I didn’t know I could submit that. I have a bunch of photos from my time there. From multiple cameras.” —P1

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2023.png)

#### Finding 6
**Concept A:
Evidence Placement**

Veterans generally expected all evidence to be provided at the same time or at least sequentially. 
Some expected the evidence to come closer to where they first entered the conditions. 

- How might we… allow for a more clear understanding of the connection between different evidence types supporting evidence and the conditions Veterans are claiming?
   - Consider providing ways to strengthen the association between evidence and supporting documentation and claimed conditions.
 Quote: “For a supporting statement about  how my condition affects me, it’s not really logical. It should follow right after where we see [condition] showing up ”—P1

Quote:
- “For a supporting statement about  how my condition affects me, it’s not really logical. It should follow right after where we see [condition] showing up ” —P1


![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Screen%2024.png)

#### Finding 7
**Concept B:
Differentiating 526 and 0781 Evidence**
All but one participant were unable to differentiate the 0781 form evidence pages from the pages in the other evidence section in the 526, and found the pages to be redundant. Confusion related to evidence encompassed treatment records, 4142,  as well as supporting documents.

Several participants (2) expressed the desire for one unified treatment records request section with an embedded 4142 opt-in.
![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%20%2025.png)

- How might we… increase form flow comprehension and reduce form complexity?
   - Consider ways to draw more clear distinctions between form sections and highlight differences between sections that may be misconstrued.
   - Consider embedding the 4142 into the treatment records requests in context

Quotes:
- “I feel like you already asked me this 23 pages ago. What else do you want?” —P7
- “Going between the first form and the second form. I would have thought the consent would have been done.” —P5

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2025.2%20.png)

#### Finding 8
**Concept B:
Complexity and Completion Anxiety**
Only one participant managed to piece together the intent of 0781 pages in "additional forms" retroactively. However, upon realizing this was the intent of the form flow, they expressed wanting to review what was included in the previous evidence section to ensure that all the evidence intended for submission were accounted for. This feeling of completion anxiety was shared by several participants (2). 

Only one participant understood the blue alert in the supporting document page intending to remind them what evidence had previously been included. Others misunderstood it's purpose or missed it entirely.

- How might we… reduce completion anxiety?
   - Consider ways to allow claimants to more easily review, edit and append evidence submission of like categories. This could be achieved by arranging these sections in closer proximity.
 
Quote:
- “Looking at the pages, and seeing so much redundancy, and for me not to see it toward the end — how can I know I submitted everything?” —P8


![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2026.png)

#### Finding 9
**Concept B:
Foreshadowing, Confirmation Fatigue, and Anticipatory Frustration**
3 of the 5 participants reviewing his concept had an overall feeling of confusion and frustration — stemming from the inclusion of the 0781, but, more across the 526 flow more broadly as well.  

This frustration was only amplified by an ambiguous understanding of what is required, as well as a pervading sense that the form is continually asking for confirmation while delaying information capture.

- How might we… reduce frustration and fatigue in the overall form flow?
   - Consider reviewing the form for ambiguous language such as "additional forms" and "anything else" and amend with clarifying details.
   - Consider revisiting the overall form structure to eliminate repeated instruction and transitional pages.
   - Explore alternative ways to more clearly convey the intent of multi-page list and loop form prompts.
 
Quotes:
- Confusion was most prominently observed on the additional forms listing page and repeating evidence sections
   - “[Laughs] So... right back to the additional forms homepage. I guess after spending this much time on this tab, and now you have to go back.” —P8
- Friction associated with permission fatigue is experienced most notably in the leading pages of multi-page list and loop form sections and transitional instruction pages.
   - “A few different times, there's been a lot of like… ‘Are you ready to do this?,’ ‘Are you really-really ready to do this?’” —P5

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2027.png)

### Goal 2: Understand whether the new event flow works for all Veteran experiences: reporting singular events, multiple related events, ongoing events, and so on.

#### Finding 1
**Hypothesis:** New instructions and examples will make it more clear to Veterans how they can describe their experience accurately and with an appropriate level of detail.

_Maybe true_

**Comprehension of the Overall Intent**
Most Veterans have a general understanding of the overall intent of this section in the form — gathering details surrounding traumatic events — and see it as critical as a part of the claims process.

**Comprehension of the Event Entry Flow and Entry Expectations**
Participants generally understood the overall entry flow, and appreciated the examples as setting a baseline for what's expected with each prompt. 
This is especially the case with the prompt for event timeframes. Challenges with clear recall of specific date ranges resonated with the majority of Veterans.

Quotes:
- “This is your moment of truth to tell me what happened, when, and where.” —P14
- “At bootcamp, that's helpful. Without these examples I would assume I would have to put day month year, that kind of thing.” —P5

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2029.png)

The overall expectation of the level of detail required for describing traumatic experiences for participants was unclear. At the start of the traumatic experiences section, half of the participants expected to be required to provide information about their experiences in great detail. (Previous versions of this form do require a greater level of detail, so this was likely informed by their past experience.) As they continued through the event detail page, three participants anticipated having to provide additional detail later, and one raised concern that a brief description could negatively impact their claim outcome. Others seemed satisfied with providing less detail with the guidance of examples.

Veterans find themselves in a double bind with regard to how much detail they should be supplying. Many Veterans think specificity and detail regarding traumatic experiences is critical for accurate adjudication. At the same time, many Veterans are faced with emotional burdens and risks in recalling these traumatic events.

- How might we… shift expectations and reduce ambiguity in the level of detail required?
   - Acknowledge the policy change that led to VA collecting less information than in previous versions
   - Allow for more choice in supplying additional detail to the event description through a separate free text area that is explicitly optional
   - Guide the Veteran toward using narrative text to fill in the gaps not covered in other evidence (eg medical records, lay statements)
 
Quotes:
- “When someone tells me to briefly describe, it still won't be short … I would like to see the box spread out. I would reread what I wrote, and to make sure I included everything.” —P8
- “I like that it give the Veteran the options to share what they are comfortable with, before asking to put every single detail. Because that can be traumatic, reliving every detail.” —P16

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2030.png)

The same double bind around the level of detail required extended to the prompts for official reports. Several participants appreciate that this was an explicitly optional step, and expressed their prior anxiety about not being believed without hard proof. Two participants expressed skepticism that reporting was truly optional. 

One participant shared that having a clearer understanding of filing requirements earlier in the form would help to encourage more reluctant claimants. 

Two other participants conflated the official reporting section as a place to upload medical evidence.

-How might we… shift expectations and reduce ambiguity in the level of detail required?
   - Consider emphasizing earlier in the process (on the 0781 intro page, or even in Step 2 conditions) what reporting and evidence is optional
   - Explore ways to draw a clearer distinctions between other claim evidence (eg medical records, lay statements, official reports)

Quotes:
- “In the beginning, I wouldn't put my [mental health condition] because I don't have supporting documents. Now in this page it says you don't need the report … If it's not listed, if I don't have proof, they might not think it happened.” —P8
- “I like this gives the Veteran the option. We understand if you don't have it, that's fine. Don't feel pressure of hunting your reports.” —P16

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2031.png)

#### Finding 2
**Hypothesis:** Form updates will help clarify VA’s definitions while accounting for the Veteran’s mental models and guiding them to enter information needed for a successful outcome. 

_Likely true_

**Comprehension of Traumatic Experiences Categories**
The majority of participants were familiar with most of the categories of traumatic events. This is particularly the case with categories relevant to them. Several participants were not clear about what constitutes trauma related to personal interactions or other traumatic experiences. 

The majority of participants engaged the dropdown with more examples unprompted and found the content to be detailed and useful.

Within the examples provided, two participants observed examples of MST to be lacking — causing for some confusion. 

- How might we… Revise the dropdown content to map more directly to the checkboxes?
![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2032.png)

#### Finding 3
**What’s optional and what’s not?**
With the original thought that all sections of the 0781 are optional, we matched the [VA Multiple Response pattern]([url](https://design.va.gov/patterns/ask-users-for/multiple-responses)) by providing an initial page with a yes/no option to start adding traumatic experiences.

However, during testing Veterans were confused with this question. Most saw this question as perfunctory, and two participants expressed skepticism that opting out was a viable option, believing that opting out would either get the claim denied or require additional follow-up.

- How might we… reduce friction once users opt into the 0781 flow?
   - Confirm with VBA that experience information is critical to claim outcomes
   - Explore removing this page entirely and bringing users directly to the “Add traumatic experience” page

Quote:
- “I do think VA is requiring a certain answer. You can't just file a claim and say no, I don’t want to talk about it. VA would just deny the claim.” —P9

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2033.png)

#### Finding 4
**Comprehension of the Experience Entry Interaction Model**
Half of participants (7/12) explicitly expressed they understood being able to add multiple entries. However, only two participants understood the interaction model upon first arriving at the "add additional detail” prompt. Four participants only become aware of the intended entry interaction model upon arriving at the subsequent detail or summary pages. 

**Comprehension of Experience Description**
Two participants thought the section was intended for reporting mental health episodes or triggers as opposed to providing details about traumatic experiences. 

- How might we… convey that details relating to the effects of trauma may be shared elsewhere, as opposed to the section devoted to traumatic experiences that caused the conditions? 

**More data needed:** Only one participant spoke to the complexity that can be associated with more complex forms of trauma, describing the ways in which individual events may intersect with more prolonged exposures (eg a pervasive culture of sexual harassment over time). So we’re not sure if our helper text is enough to account for these experiences.

Quote:
- “[I would write...] I experienced psychological trauma or loud noises trigger me.” —P16

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2034.png)


### Goal 3 Understanding whether Veterans feel supported and heard through the form.
#### Finding 1
**Hypothesis:** New instructions, examples, and support alerts on every page will increase a sense of safety and provide relevant assistance as the Veteran navigates the form. 

_Definitely true_

**Resource Page**
At the beginning of the 0781, we include a page with information about mental health support resources. ~10 Veterans responded positively to this page. 2 Veterans especially liked the mention of discharge status.
   "I like that, because a lot of these Veterans, especially if they're dishonorably discharged, don't think they can use these services." —P1
   
Only 2 Veterans expressed negative sentiments about this page. One felt the content was obligatory and nothing new or helpful, while the other expected this content to come at the end of the 0781.

Veterans also offered some feedback on small improvements that could be made to this page, including:
- Clarify if links will open in a new tab and not disrupt the form flow
- Consider which phone lines will be most familiar (one Veteran expressed concern that older Veterans would be looking for a toll-free 800 number and might not be familiar with the 988 number)

Quote:
- "I like that, because a lot of these Veterans, especially if they're dishonorably discharged, don't think they can use these services." —P1

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2036.png)

#### Finding 2
**Blue Support Alerts**
~7 Veterans expressed a positive sentiment towards the blue alerts that contained the support information throughout the form. No one appeared distracted or confused by this new alert.

**Mentions of breaks**
Two Veterans expressed gratitude for the content encouraging breaks throughout the process. 

Conversely, one Veteran perceived the amount of preparation and introductory content to be too much, and felt it made the process feel longer than necessary.

- How might we… simplify the “foreshadowing” content so that Veterans receive the right amount of information to feel prepared without feeling overwhelmed?

Quotes:
- "Is that a repeat of what was on the previous screen? It is the same. That's handy if I need it." —P14
- "I like that I can take a break at any time ... It gives me a chance to be prepared and know what info is needed in the form without traumatizing me or putting me back into the state reliving it over and over. And I can take my time... and come back and finish it." —P16

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2037.png)

#### Finding 3
**Opportunities for additional support**
**Where is support most needed?** Veterans overwhelmingly identified the narrative portion of the  0781 regarding experiences to be the place in the process where they would most need support. Secondary moments that were mentioned include behavioral changes, document upload, and after finishing the 0781. These were seen as “nice-to-haves,” while overall sentiment was still very positive.

- How might we… amp up support beyond mental health resources where it matters most?
   - In the most sensitive areas of the form, consider including additional resources such as VSOs or VA-supported wellness resources such as meditation apps 
   - Provide direction on technical support for file upload pages 
   - Point to more information about how to get healthcare for mental health conditions

Quote:
- "When you talk about certain things, you're back at the situation and that's a massive trigger. And to have the support at the bottom [of the page], I can talk to a person to talk me off the edge." —P8

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2038.png)

#### Finding 4
**Opportunities for additional support continued**
**Who are the people behind the scenes?** A few Veterans called out the mention of specialized claims processors for claims involving MST, and were reassured by this information — even though it didn't always resonate with their past experience. This could be an opportunity to increase trust in the process. 

- How might we… offer more transparency into the claim processing team, such as the credentials and training these staff members receive?

Quote:
- "If I could see the face of the team or if I could see their credentials ... The not knowing makes you hesitant to submit the form. I think especially if you're victimized, being able to be face-to-face with the person you're talking to is important for the experience. I don't want to be talking to a stranger."  —P11


![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2039.png)

## Next Steps

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2041.png)

## Appendix

### Additional Findings
- One Veteran wanted to see more date flexibility in Step 4: Additional Forms when asked about treatment.
   - “I would put an option of don't remember. I know folks who have TBIs and need help to remember these dates.” —P11
   - Consider adding helper text that says approximate dates are ok, or checking with VBA to see if we need the month in addition to the year. 

- One Veteran noticed that when an additional info dropdown was between two paragraphs of text, it can be easy to miss. 
   - “Sometimes the dropdown menus, they kind of blended into the background.” —P1
   - Explore placing the dropdowns closer to the top or bottom of page content. 

- One Veteran thought it was important to include a disclaimer that Veterans may still be responsible for medical records that the VA cannot collect, even if they requested the VA to request them.
   - “After several week I got a letter that ultimately I'm responsible, if they don't get it from my doctor. Mention this upfront.” —P14
   - Consider providing more information on what actions VA will take if there are problems collecting medical records on the Veteran’s behalf.
 
**Positives / Things that worked well**

- Several Veterans liked seeing lists of options for supporting evidence, including a detailed list of the types of buddy statements can be used for their claim. 
   - “If I were doing it my first time, I wouldn't know to add buddy statements.” —P10

- Many Veterans liked that they could limit the consent for medical records and only provide the VA with the medical records related to their condition.  
   - “It's free range. There's no checkboxes. So I could put anything in there if I wanted... like mentions of alcoholism or what not... because that could limit my ability to own firearms.” —P1

- Veterans understood that VA obtaining records could add time onto the process. Veterans generally prefered to obtain medical records and submit them on their own.

- Three Veterans saw the “Additional Information’ screen in Step 2 as a place they felt heard and supported by VA. 
   - “This is good, it conveys that they're trying to help you... where it might be an adversarial relationship.” —P5

### Additional Findings: Who we spoke to 
The Veterans in our study represented a mix of those who had previously filed on paper, online, or with some combination of the two. 

Many Veterans' claim filing histories were not linear, with delays up to years, denials, but also approvals later down the line. Many Veterans have multiple attempts to file claims for reasons including appeals, the PACT Act, and motivation to reapply from other organizations. 

Veterans engaged services such as lawyers, VSOs, and healthcare professionals and also other VA services such as education and healthcare. 

Most Veterans we spoke to claimed PTSD along with other mental health conditions. 

P11 shared their experience filing for MST, expressing that the process was so difficult they had to be hospitalized. This highlights the need for extra support with these claims, such as having trained professionals reviewing these claims, and direct support for Veterans throughout the process (whether from VSOs, attorneys, social workers, or healthcare professionals).

### Additional Findings: Headers and Navigation
- One Veteran stated that the sub headers and headers throughout the form are confusing because it indicates steps within a step.
   - “You're doing 2/5 at the top and now you're at 1/4 — I understand these are sub processes, but I don't know that others would know that.” -P10

### Additional Findings: Content
Content suggestions

- One Veteran noted that the current copy is missing  ‘hostile fire’ from imminent danger copy.
   - The current copy says "Served in an imminent danger area" which may address this concern, but we could consider rewording to explicitly mention hostile fire.

- One Veteran mentioned that in places where there are checkboxes, there could be an option select all of the above. 
   - For long lists, consider adding a checkbox option where Veterans can select all of the above with a single click.

- One Veteran shared that reading up on case law was helpful in informing their claim.
   - Consider adding informational links to the 0781 support page.

- One Veteran mentioned that there could be a dropdown to show their location in the form flow.
   - While navigation is a known challenge, consider short-term ways to better show Veterans their location in the form.

- One Veteran noticed the “how to submit medical records” dropdown menu doesn’t match the order of the radio buttons. 
   - Align the examples and radio options to flow in the same order.

### Additional Findings: Behavior Changes 
The behavior changes section was straightforward and clear to Veterans. The checkbox list was helpful in aiding Veterans in what to include in this section — One Veteran noted that they wouldn't know what to write down without the list. 

Veterans appreciated the ability to select multiple options. However, one Veteran suggested it could be nice to do everything on one page instead of clicking through each selected behavior change one by one.  (We only tested with one behavior change selected, which reduces the number of screens seen.) 

Veterans also suggested adding some options to the checklist (ex. power dynamic issues, shift in daily habits) and disclaimers about what happens if you don't have records for the behavior changes. 

The summary page was also helpful, especially the option to add more behavior changes.
![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2050.png)

### Additional Findings: MST Indicator Permission
Based on feedback from four Veterans

The content on this screen seemed to make sense to most Veterans and got the point across that saying yes won't affect your claim, and will lead to an indicator being put on record, although Veterans did not accurately understand the purpose of the indicator. Most opted in to giving the consent.

Moments of confusion of hesitation included:
- One Veteran wasn't sure if it would apply to them if they were not enrolled in VA healthcare.
- One Veteran referenced the earlier note about specialized claim processors, and thought this is what would enable that routing.
- One Veteran expressed concern about who would see the indicator, and would opt "no" under the assumption that anyone at VA would be able to see it. The Veteran thought the purpose of the indicator might include determining the gender of the person selected to conduct C&P exams, and expected that this would prolong their claim time. (They did express that they would like the opportunity to express preference for their examiner's gender. )

All Veterans liked the option to revoke consent. Revoking consent and VA healthcare radio buttons were confusing, raising questions if we can make these conditional based on information we already have (ex. enrolled in VA healthcare, previously provided consent).

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/Slide%2051.png)

### Additional Findings: Post-Task
Post-task Veteran feedback on the 0781 experience was mostly positive. Negative feedback was focused on more generally how filing a mental health claim is difficult.

"Magic wand" wishes for the 0781 included faster processing of claims, more communication across agencies (to limit how many records Veterans have to collect themselves), easier navigation through on unified portal (referencing the multiple log-in options), and faster communication about C&P exams.


## Tools used for Synthesis

[Mural Board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1720718384066/24c39fd610fe152cc3c29a612652c374d77a0e46) 

## Pages and applications used

[Figma Prototype Concept A](https://www.figma.com/proto/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=4546-69557&t=ErS4LkvuCgNfXqn8-1)
[Figma Prototype Concept B](https://www.figma.com/proto/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=4546-69556&t=ErS4LkvuCgNfXqn8-1)

## Participant Demographics
![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Images/slide%205.png)

**Recruitment criteria**

Primary criteria (must-haves): Our target audience for this research is Veterans who: 
- Have filed a claim for disability benefits
- Have claimed PTSD or a related mental health condition (see screener question)
- Have participated in studies with OCTO in the past. EG, not first-time participants.* 
- Must be ready to complete the session on a working computer, tablet, or mobile device with Zoom installed before the session and be able to view screen share content

Note that we are adding this criteria in an effort to be trauma-informed; because of the sensitive nature of the study, we believe that Veterans who are familiar with OCTO’s process and have participated in studies in the past will be best prepared for what’s involved and less likely to be retraumatized.

We are looking to complete 6-8 sessions. Because of the sensitive nature of the study, we anticipate it might be more difficult than usual to recruit and we could see higher than usual no-show rates or need to end sessions early. So we’d like to suggest recruiting 50% more than needed: 16 participants.


We talked to **12 participants.**

Audience segment:
* Veterans: 12 
* Caregivers: 0 
* Family members of a Veteran: 0  

Gender:
* Male: 7
* Female: 2

LGBTQ+:
* Transgender: 0
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 3
* Gay, lesbian, or bisexual: 0


Devices used during study: 
* Desktop: 12 
* Tablet: 0 
* Smart phone: 0 
* Assistive Technology: 0


Geographic location:
* Urban: 0
* Rural: 3
* Unknown: 9


Race:
* White: 8
* Black: 2
* Hispanic: 2
* Biracial: 1
* Asian: 1
* Native: 1


Disability and Assistive Technology (AT):
* Cognitive: N/A
* AT beginner: N/A
* AT advanced user: N/A
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
* Veterans ages 55+
* Veterans with other than honorable discharge
* Veterans who identify as Hispanic, Biracial, Asian, Native, or other LGBTQ+



