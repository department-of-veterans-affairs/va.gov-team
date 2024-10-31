# Ongoing DBEX/VBA Bi-weekly Sync Agenda & Notes
Goal of the meeting series: addressing policy related or other open questions for ongoing work.

## 10/29/24 Biweekly VBA-DBEX Check-in
### Notes
1. 0781 opt out flow - when veterans opt out of 0781, should we automatically delete the 0781 evidence that they uploaded as well (supporting docs and treatment details)
2. Question from shannon - 0781 supporting docs, what will they be labeled as?
* RS - it will be hard coded
* SF - ask VBA what will these docs be ideally typed as in VBMS?
3. Aurora/Tommasina: Do we need to dynamically capture claimant certification (as a part of 5103 work) even though it is required in order to submit 526? 


## 10/01/24 Biweekly VBA-DBEX Check-in
### In attendance
…
### Notes
1. Ruben: Continue the discussion for 4142:
   * How private medical facilities are notified
   * How requests to limit consent are handled
   * How is it done today when using the paper form that allows them to enter more than, but not submit them separately?
   * 4142 vs. 4142a - the 4142 is the specific consent and is individually provided to each provider. the VA leverages a contractor to solicit that info, and they're apt to only disclose specifics to the vendor. The 4142a is a valid process for VBA, where there's multiple providers on one form. 
2. How is overflow content being handled? For 0781, we're trying to decide if we should limit fields to paper form, or put them on overflow. (ex. there's 6 spaces for events. should we allow for more and put extras on overflow, or limit to 6 entries?) ![Screenshot 2024-09-26 at 9 08 27 AM](https://github.com/user-attachments/assets/53a01405-f316-4c65-baf4-680b991b6a19)
   * don't think overflow would affect that
   * the "additional remarks" is the catch all for extra stuff that overflows 
   * "i don't think limiting would be needed" - kevin
   * "they can attach additional pages too, or veteran will submit 4138 where they will continue the info one. remarks space is pretty big enough already though" -kevin

4. Jina: does VBA have a new file type for display in VBMS for the new form? (0781)
   * SF - david put the new name in a slack message a week or two ago and it is different. more closely matches title of new name of the form
   * [slack thread]([url](https://dsva.slack.com/archives/C04KW0B46N5/p1726770800020109))
     
6. An update on 25% Toxic Exposure release is forthcoming. Here's a brief recap on the current existing silent failures: The four failed submissions from July were remediated this morning by Sam on Team 2. The 'xx' date submissions are still awaiting front-end and backend-fixes before they can be remediated. Tommasina will remediate the 14 duplicate submissions today (might need support on Sharepoint access if Emily isn't able to add her), and she is still investigating the 2 other missing 'icn' submissions.


## 9/17/24 Biweekly VBA-DBEX Check-in
### In attendance
…
### Notes

1. Mike: seeking VBA signoff on design for [Submission Experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/Submission%20Experience.md) > Timely and Truthful Submission ([Zenhub epic](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/82076) / [Github epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82076) / [Figma mockups](https://www.figma.com/design/qyTtKDOTHZPGU59PAfqVhq/Submission-Experience?node-id=5626-129729&t=yuh8OGDS9kvw7KCR-1))
2. Ruben: Continue the discussion for 4142:
   * How private medical facilities are notified
   * How requests to limit consent are handled
   * How is it done today when using the paper form that allows them to enter more than, but not submit them separately?
3. Jina: does VBA have a new file type for display in VBMS for the new form? (0781) 

## 9/3/24 Biweekly VBA-DBEX Check-in
### In attendance
…
### Notes
* Jina - We looked into how the 4142 is generated in the backend. If 5 providers are inputted, then one PDF 4142 with all 5 providers on it are generated. We want to double check that this is same PDF is sent to all 5 providers. ([ticket link]([url](https://github.com/orgs/department-of-veterans-affairs/projects/1263/views/6?pane=issue&itemId=75109776))) - separate 4142 goes to each provider. the grouped provider can be for a 4142a. 
what happens if multiple providers is sent to one provider? this is a HIPPA concern. it'll come back as "we haven't seen X for this condition" 
* Jina - which SC category does "traumatic event" fall under? - majority of time for traumatic event, it'd be the first option (direct SC). but there could be scenarios where it was aggravated by an event. so that'd be the third bullet. 
add (traumatic event)
* TREX - 2022/TE Form526 5% (Canary) release: how is the data looking for 10% release from VBA's side?

## 8/20/24 Biweekly VBA-DBEX Check-in
### In attendance
…
### Notes
* Feedback from VBA on Toxic Exposure Moderated Production Testing
* T-REX lessons learned from TE Moderated Production Testing
* [PII concern from Robin](https://dsva.slack.com/archives/CBU0KDSB1/p1724089667718119?thread_ts=1724089667.718119&cid=CBU0KDSB1)



## 8/6/24 Biweekly VBA-DBEX Check-in
### In attendance
…
### Notes

1. Jina - show content changes for 0781 (encouraging filling out new PDF while online version is being built out)
   david - this looks ok. 
   lisa - are we going to put anything about how online version isn't up to date? i don't feel like i'm being told why i'm being recommended the PDF
   shannon - turn off validation on upload 0781 page so we don't require them (emily leans toward not changing that); we want to keep this small lift. PDF is less burden, faster, trauma informed but it's hard to explain succintly (which is why content is more handwaving).. we can see what happens. this is at least an incremental nudge that's imperfect but could be a good tradeoff
   emily - tweak copy - you don't need to scan copy of your file for all folks (save as PDF instead). also add link to PDF on this page. check file types?
   
2. Emily - Is there a way to block the production "moderated testing" cases from being sent to Mail Automation?

* When performing Moderated Production Testing (MPT), we don’t want the submission to ping the service that triggers Mail Automation. This is part of Rapid Ready for Decision (RRD). T-REX can create a toggle to prevent this from happening.
* We also want to prevent an ITF from being created
* We don’t want testers to fill out a 4142, so exclude this from the test cases
* We should have a test case that includes uploading fake evidence documents. We’ll provide an image file for testers to use
* We want to prevent the backup path being triggered, as this would trigger a human creating a claim and we won’t have the ability to delete it as soon as it comes through. Ideally we should block this from happening.

3. Jared - How might we delete the submitted claims in VBMS? Who can do this? Similar to Emily's question. How will we communicate with potential testers?
* Kevin, VBA will help with deleting a claim. He’ll cancel the EP and delete documents. Matt can help as needed.
* To help Kevin, provide him a screenshot of the Review & Submit screen form data, or if needed provide him with the raw formDatta JSON
* Emily will create a spreadsheet to track test cases - this will help us understand if the submitted data is the same as the claim in VBMS & the PDF
* T-REX to edit the MPT email/Slack script to include that we’ll need volunteers to send their file number and email address to Kevin over a Teams chat or an encrypted email.


## 7/23/24 Biweekly VBA-DBEX Check-in
### In attendance
…
### Notes
1. the toxic exposure testing plan (logistics of how we create/cancel claims in prod) and release timing!
2. why don't we ask service connection question for PTSD/mental health conditions?
Initial conditions questions are really driven based on avenues of service connection (direct, secondary, aggravataion)
Avenues of service connections are used to determine what further questions are asked
What if we added a 5th option "this was caused by a traumatic event", and ustomize radio button option to show only for mental health conditions? 
The service connection questions still need to be there for the PTSD and mental health conditions. Down the line we can get into the 0781 questions
4. currently, POW is in step 2 conditions. we noticed on paper 526, it's under "service information / service history." could we move POW question to step 1 of digital 526?
Kevin agrees that POW in step 2 seems disjointed and agrees with moving it to the step 1 

## 7/09/24 Biweekly VBA-DBEX Check-in
### Notes
1. (Q12) Is there a distinction between "medical reports" in this list vs. records from VA or non-VA health care providers? We're trying to see if we can remove this checkbox if it is redundant with medical records. [(wireframe)]([url](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=4536-52527&t=t3GiM6ziyALYrIEO-1)) 
- ex. medical report from ambulence, we'd still need 4142 to get that record
- would not remove it (context thing, indication, reminder to veteran to submit it esp if they didn't complete 4142). leave it even if a little redundant
- especially if they fill out 4142 after, we can indicate later in the 4142 "you indicated you'd provide medical reports.."
- military physicians would already be in STR 
- is civilian physician a private healthcare provider? -> yes
2. (Q10) Behavioral changes section is optional for combat-only. Could it still be beneficial? We're trying to figure out if we should add conditional logic that skips this section, or still present it regardless. [(wireframe)]([url](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=4438-57597&t=t3GiM6ziyALYrIEO-1)) 
- if we can prove combat, we don't need any of these other markers. "i hate hiding parts of the form, but i also see this is a long list.. is there an in between option? giving content instruction"
- RVSRs don't want people telling them if it's combat or not. David agrees with sentiment that we don't want to assume it's as obvious as we think 
- Would rather see list than skip it, with caveat that "you indicated combat only, you may skip this section"
- Once a veteran identifies combat and we have other evidence to support that (DD214,medals); these questions are bonus but most decision makers won't see this as providing value 
3.0781 Research timeline update
4. (If time) Walkthrough of 0781 prototypes
- Does adding another treatment record create separate 4142? Because on paper form, there's only one 4142 per provider
- What are we doing right now? Look into what happens if someone fills out multiple providers 
- 4142a has space for several different providers and facilities 
- David's clear front runner is option B (additional forms page), adds simplicity and anytime we give veterans more context what form they're filling out, it's better. Emily also likes this option 
- Add conditional - you either need to complete form or delete it to continue 

## 6/11/24 Biweekly VBA-DBEX Check-in
### In attendance

### Notes
- PTSD and MST contention classification. From past VEO research and chats with the CC team, we heard that Veterans may be thinking of MST as a condition, rather than an event that results in PTSD. We're hoping to get more insight on this in our upcoming 0781 study. Is there a reason behind the languaged used (PTSD, the "type" of which can be "personal involving MST"), and could we explore changing the language to align with Veterans' expecations? Does the condition claimed need to align with the medical diagnosis / DSM standards? (For context, two types of PTSD were included in the conditions list because there are two classifications for PTSD. We also know it's important for RVSRs to know if MST was involved for claim processing.)
- <img width="682" alt="Screenshot 2024-06-04 at 8 15 41 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/130166646/ec853fe3-14bb-4212-a18e-ebf0e017b457"> <img width="514" alt="Screenshot 2024-06-04 at 8 14 36 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/130166646/c8bac860-4c43-4aa3-b481-775c1906cd36">
- involving/not involving MST - specifically trained individuals to work MST claims, important for business process 
Comes down to how the stressors are verified and levels 
Combat stressors require less stringent verification than personal traumatic event 
These 4 categories are set 
It’s not important for the veteran to claim combat related or non combat related
That’s a distinction made by RVSR, we don’t require the claimant t understand the difference, we don’t need to have them choose that upfront
We don’t want this in the dropdown
Contentions should be allowed in as much the veterans voice as we can, we will distinguish later in the process if needed 
We don’t wnat them to specify upfront 

- How common is it for a Veteran to submit both a 0781 and a 0781a? We're deciding how to approach the failure emails for these forms in the interim before the new combined version is launched. 
- David doesn’t know, new form is launching june 21 
“I don’t know how much work you want to put in to an interim” 
Kevin - it’s fairly rare to see this happen 



## 5/30/24 Biweekly VBA-DBEX Check-in
### In attendance
Jared Pace, Andrew Gray, Kate Allbee, Matt Larson, Jina Ryu, Mike Eng, David Reis

### Notes
- 5103 Claim Certification
  - We want to try revising some of the claim certification piece to put it into more plain language. Is there a team within VBA (Office of policy of oversight?) that we could work with on approving this?
      - top paragraph: is it possible to plain-language this, or does it need to be verbatim from paper form?
          - Matt: it makes sense to adjust content with page number, but very hesitant to change from what's on the paper form. Think it should match.
          - Andrew: agree, since it's a legal certification. Don't want to present different content online versus in paper form. 
  - Alternative approach to the bottom paragraph could be to dynamically populate the content shown there regarding evidence (figma) (skipped this)
- 0781    
  - [1.1] Event type checkboxes - do the options look good? Is “other” intentionally vague?  
    - Is it ok if a veteran has one event, but checks multiple boxes here?     
  - What questions are required for this form to be considered complete?      
    - Ex. Is 8, 9A-9C optional? Would you still be able to process it and follow up with veteran if this section wasn’t filled out?      
  - Supporting documents - rape crisis and counseling center what specific types of documents are these referring to?       
  - [4.4-4.6] What if multiple official reports were filed? Change to checkbox? Is the only additional detail we need from this location of police report?      
    - Official report question - do we need to know type of “other”? Or is checking “other” good enough?      
- Asking Veterans online about life-threatening illness      
  - Currently, we have a question asking Veterans online if they have a life-threatening illness and then send a flash from the 526. With the new Lighthouse synchronous endpoint, we will not be setting flashes. Should we remove this from the online form?


## 5/14/24 Biweekly VBA-DBEX Check-in
### Notes
- 0781 Design [screenshare Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715641897177/87fab1b22d2833fc50d79c68313efc63115c8cd0?sender=u3672f0ffd2d02de8b0885285)
  - Question 10B - additional info about behavior change
    - What is this asking for exactly? Describe the behavior change or records that may exist?
      - All of the above. Could mention other medical records that need to be obtained, details about when the change in behavior happened
      - Keep this section general in the form so that Veterans can provide more context for whichever option they select
  - Question 11 - police report location
    - what does this mean? city? Precinct?
      - More detail is better in case they need to try to get the police report. State is not helpful, township is much more helpful. City + state is a minimum, handling agency would be best — county sheriff, city cop, police department etc.
      - Would be better if the label said something like “provide the agency involved”
  - Question 13A - treatment details
    - “I think mental health might be incorrect here - I think you could possibly be treated for a physical attack or combat injury that then also had mental health implications. “
      - Align with paper form - any treatment related to event, not just related to mental health condition resulting from the event
    - Could we reference the condition they claimed instead of the traumatic event?
      - We’re working with CC team to think through how they enter the flow
      - “Traumatic event” language could be confusing since it’s embedded in the 526. Linking to their condition might be more clear.
      - Need to make it clear why they’re being asked these questions - indicated a claim for a mental health condition. Consistency in language is the important thing.
      - Treatment of the physical condition resulting from an event would validate that the event took place, even if it wasn’t treatment for the mental health condition. So it's still useful to include that here.
  - Question 12 - supporting documents
    - One screen per box checked? Yes based on current design
    - If they don’t have it available, they can continue without uploading
    - What about combining uploads on one page?
      - No distinct labels for evidence types in VBMS, but wouldn’t hurt
      - Look at document type dropdown that’s in the current 526 for other evidence types
      - What if they check three things and only upload two documents? Would want all checkboxes to be visible in case they’re planning to upload some later
    - Open question: if this is in section 2, when they get to section 3 there will be another opportunity to upload supporting documents. Thinking through how to message that so the Veteran doesn’t upload things twice
   
## 4/30/24 Biweekly VBA-DBEX Check-in
### Notes
- 0781 Design [screenshare Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710425395956/4f0a397015bbcaadd1a421ed60e8d8e185cf1b12?wid=0-1711129310221)
  - Question from CC team about conditions classification flow 
    - 2 options - exhaustive list (try to identify any veteran entered condition that may be a mental disorder) OR focus on subset of conditions (perhaps where 0781 is most likely to be relevant/helpful to a veteran’s case)
    - “It would be helpful to have a better sense of when this form is helpful to a Veteran's case. Since we know that claims processors are often overburdened with too much information/evidence that isn't relevant, my thinking is that a narrower approach (option 2) could be a good  place  to start with the nudge”
    - Who do we want to present the 0781 flow to? All veterans filling out 526? Veterans who entered a mental health condition into their condition list?
    - How exhaustive should the “mental health condition” list be? 
    - David likes the way it’s laid out here
      - Classify positively it’s mental health condition then give form
      - Also provide the option for the Veteran to indicate that their condition is mental health related
      - It’s difficult to know how veterans write conditions now 
        - “I saw a veteran filling out a 526 where they were writing a story of condition in condition list”
      - Don’t ask for 0781 if claiming for increase for mental health conditions
  - Thoughts on including an option to mail in 0781? It would be a radio button that submits intent to mail in 0781 (similar to how we would format evidence). 3 options then would be: continue online, upload paper form, mail in form
    - Seems like an edge case that would be rare, but doesn’t hurt to give them mailing address
    - People decide they don’t want to provide evidence scanning, but providing a mailing option is 
    - Ex. two choices (online, send in separately - upload or here’s the mailing address if you want to send it by mail)
    - If we want to show an address we can show an address - i have no problems with it (David)
  - For question 13 (treatment information) on the paper form, do we need to collect this information for both VA medical records and private medical records? (asking because in current evidence section, we only collect this information for VA medical records. Is 0781 evidence treated - differently?)
    - Do it for private healthcare provider as well (David)
    - If they tell us about private healthcare provider, it’ll also require 4142) if they put private and don’t provide 4142, they’ll be sent development letter to provide 4142
    - Option: private healthcare provider -> fill out 4142 
    - More important thing is getting form released on time, but linking 4142 is nice to have 
    - 4142 is only if they don’t put in treatment info and don’t upload PMR
    - (longer term) Pattern would be nice to be push back to 526 so we’re not asking about treatment information for 0781, but different for other conditions
- Signature step
  - Is the date necessary to capture on the digital form?
    - No, we automatically generate the date based on when you submit
   
## 4/16/24 Biweekly VBA-DBEX Check-in
### Notes
- 0781 discovery work update & questions (Julie P, Nichole, Jina) [We’ll screenshare Mural to walk through](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710425395956/4f0a397015bbcaadd1a421ed60e8d8e185cf1b12?wid=0-1711129310221)
  - How are the event type categories used? Is it important to include an event type with each event? Right now the new paper form does not attach an event type to each event.
    - COMBAT TRAUMATIC EVENT(S) 
    - PERSONAL TRAUMATIC EVENT(S) (not involving military sexual trauma (MST) 
    - PERSONAL TRAUMATIC EVENT(S) (involving MST) (if checked review Section VI)
    - OTHER TRAUMATIC EVENT(S) 
  - Makes more sense to select the event type for each event description you put in, but ultimately we’ll need to map what Veteran selects to the paper form, so it probably makes sense to ask “what types of events do you have?” and keep it separate for now 
    - Should we allow selecting multiple event types if we have one event?  
      - Don’t assume event types would be mutually exclusive
      - Event types don’t really help VBA confirm event, it’s really based on the event description
    - “It’s important however we display the form online, it maps out to the paper form”
  - Traumatic event dates - How does VBA use the Event date (i.e. 'we look a few months before and after the date you provide here')? 
    - How would we like the Veteran to respond to cases where it isn't a single event, but a series of events or a pervasive culture across multiple locations?
    - Present as text field instead of date field, so they can follow the examples for event dates in the new form
      - If need be, we can always reach out to Veteran for additional info. Don’t make it a required field. Make everything optional. We don’t want to stop them from filing the claim 
      - However, include messaging “The more info you give us and the more accurate it is, and the sooner you give it to us, the chances of your claim being processed faster are higher.” 
  - “It helps us narrow down the time frame to look for markers we can use to validate the event / pervasive culture. Also possibly comparing it to other periods of time to find those markers”
  - (only if time) New phone number included in the instructions which is different from the general hotline. Does this route folks to a specific helpdesk with folks trained on these types of claims?
    - Previously 800-827-1000, now 800-698-2411
    - Not familiar with this new number…  this isn’t a MST specific phone number either 
    - Julie S. and Shante might know more about the call center numbers
  - Paper mail communications sent after claim submission - per [Slack](https://dsva.slack.com/archives/C053UDWMH7U/p1712326990191919)
    - There is a letter sent after a claim is established 
      - but could be sent before it is fully established (ancillary job failures?)
      - David has an example but needs to redact PII from it before sending 
    - There are also other letters (when a claim is awarded, etc.)
- 526 Paper Audit - outstanding items
  - Question - Have you ever filed a claim before?
    - Way we are saying yes or no is if there is a valid va file number, sounds like this isn’t the right way to infer data, should we add this question to the form?
      - #4 isn't explicitly asked, it’s inferred right now. They could have file number without having filed a claim
      - Is this any claim or disability claim?
      - If it’s on the paper version its on the pdf we’re generating. 
      - Just asking the question is okay to get it properly generated on the pdf, make it a yes/no
    - Section VII Service pay #25 “Retired Status” does not appear as a question online, but could be baked into other parts of the UI
      - Sounds like the recommendation here is to add in box 25 
      - IF they say no to 24A and we give them 25, there should be an option to say none of those exist, which isn’t useful on the pdf
      - If 24 A is marked yes, you should have to answer 24-25
      - If 24 A is no, skip over 25
  - Row 23
    - Would like ssn is confirmed coming from VA Profile
      - We need to confirm that the SSN we think is related to that veteran is associated with them, and have them confirm it's correct.
      - Could make it uneditable in the UI but take another action to edit in the record database. 
        - Would need to link them wherever they can change it. 
  - Row 21
    - Missing select claim type
      - On paper form theres 4 options they have, we should ask them the same 4 options 
  - Are any of these prioritized higher than others?
    - Highest - TE
    - Higher- Something missing from the form entirely (no technical discovery)
    - Medium- Content







