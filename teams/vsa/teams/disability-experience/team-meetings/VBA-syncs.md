# Ongoing DBEX/VBA Bi-weekly Sync Agenda & Notes
Goal of the meeting series: addressing policy related or other open questions for ongoing work.

## 5/28/24 Biweekly VBA-DBEX Check-in
### Notes
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







