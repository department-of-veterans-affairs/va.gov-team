# Meeting Notes
## 2021-04-09 Form Matching Logic 

#### Attendees
- Zach Morel
- Marci McGuire

#### Notes
- Zach will get together the logic he wrote for the form name transformation
- SOCKS - if I get that set up, I can hit their sandbox database with the correct credentials and add to my PGAdmin service.

## 2021-04-09

#### Attendees
- John Hashimoto - Product Owner
- Marci McGuire - Product Manager
- Zach Morel - FE Engineer
- Premal
- Nichole Harris - PM for Lighthouse team Matsumoto
- Mark Viterna - Engineer for Lighhouse team Matsumoto
- Cristopher Shupp
- Gregory Bowman

### Notes
- Nichole asked what things we were doing that we would like to have in the CMS
- If they were to make a change to the API that overlaps, would it affect us?
- We explained the challenge we have with search phrases being chopped up into individual words ("direct deposit" becomes "direct" "deposit)
- With Postgres they could do weighting & ranking
- Where would that popularity metadata be maintained?  Note - we may not need that
- Kibana's metrics would update nightly and Mark could roll that in with the data
- Per Nichole, if there were Form API consumers that had different needs, then they would do that, but we would also take care of us because we are their biggest users.
- Premal observed that it sounds like a lot of the work would be on the API team, so we could iteratively make changes
- We need to make sure someone at the VA team can get access to SOX so they can test.  Per John that is the plan to get it in the PMs hands
- Premal asked what the impact to the Veterans - are they not finding the forms they need?  
- Marci responded that if they search for a form name, they are in pretty good shape.  If they are searching for key words and phrases, they generally are not getting the results they need.

#### Decisions
- The Lighthouse team will bake in our logic for the data scrubbing
- CMS will work with Zach on data scrubbing logic
- Premal thinks this would still be a priority for them.

#### Action Items
- Quantify how many searches are not successful
- Nichole needs to add more to the initiative brief about weighting/scoring
- Send them a list of all the logic that we've already applied that they need to bake into the CMS
- If Marci can get SOCKS set up, Mark can get it where she can query the data

## 2021-04-08 "When To Use" discussion
#### Attendees:
- John Hashimoto - Product Owner
- Marci McGuire - Product Manager
- Zach Morel - FE Engineer
- Premal - Product Owner
- Nichole Harris - PM for Lighthouse team Matsumoto
- Mark Viterna - Engineer for Lighhouse team Matsumoto

<hr>

#### Notes:
- Purpose of the meeting was to determine how many existing forms might benefit from more robust detail pages that include "When To Use" information. 
- We looked at Google Analytics data for the total number of searches between Jul 1 (first full month the tool launched) and March 1 (Feb was the last full month at the time we'd pulled the data). 
- DECISION - We are going to do the top 100 for now, and going forward, anything that gets 250 searches a month.
- We also discussed that moving this data into the CMS would make it much easier for us to manage keyword and key phrase metadata rather than relying on the VA forms managers to do it.

## 2021-03-26 Lighthouse Database Update Meeting with Premal Shah, Nichole Harris, Mark Viterna
#### Attendees:
- John Hashimoto - Product Owner
- Marci McGuire - Product Manager
- Premal Shah - Product Manager
- Nichole Harris - Product Manager, Team Matsumoto (Lighthouse API Support)
- Mark Viterna - Developer, Intake/Forms API

#### Notes:
- Purpose of the meeting is to make a  decision about whether the DBQ forms can safely be removed from the Postgres database used by the Forms API
- John has just heard back from Kayce White and will forward her email to us.  The gist is that the DBQ forms are NOT forms, do not have an OMB number and therefore **should not** appear on the Find a Form search.
- Premal doesn't have much other background about the "ghost forms" and also clarified that they had already been deleted, but needed to be cleaned up.
- Nichole - if it's not on the website, should it be shared with the other consumers, like Vet Pro.  
- Premal clarified that the reason why the links are invalid now is because they have old data that was deleted
- Premal is leaning toward the API should be consistent with the VA Forms search
- **DECISION** - the DBQ forms should be removed from the Postgres database.
- **DECISION** - we are safe to remove the duplicate forms as well (the ones that are NOT in the CMS)
- We also discussed about whether or not the search improvements should be implemented in the Forms API or on the front end
- The forms API was initially created for users to know if a form had changed, VA.gov started then using it and is now the biggest user
- **DECISION** - it shoulds like the other API users could benefit from the same changes we want to implement, so we will work with the Lighthouse team on introducing those changes in the API.
- Nichole will schedule some time to work with us on how to move forward.

## 2021-03-26 Lighthouse Database Update Meeting with Robert Parks (VBAVACO), Paul Shute

#### Attendees:
- John Hashimoto - Product Owner
- Marci McGuire - Product Manager
- Robert Parks - VBA VACO
- Nichole Harris - Product Manager, Team Matsumoto (Lighthouse API Support)
- Mark Viterna - Developer, Intake/Forms API

#### Notes:
- Purpose of the meeting is to discuss which forms can safely be removed from the Postgres database used by the Forms API.
- High level overview of Forms API
- DBQ (Disability Benefits Questionnaires) forms overview - if something is a VA Form, that is a very very specific thing. Some VA forms are pamphlets (non-substative forms - not subject to certain rules).  Some forms are controlled. They have to renew everything years, petition to OMB, petition for each renewal and published in the Federal Register twice. 
- Each form has a very specific version number assigned by OMB, and that can't be tinkered with.  
- Up until 2020, DBQ were considered controlled forms.  In 2020, they were made publicly-facing.  
- The problem was that Veterans, VSOs and other people.  Some people were using them for fraudenlent purposes ("pay me and I'll put anything in that you want").  They were told to take them off the public site and eventually internally, and discontinued. 
- MDE used to be part of Comp service.  Last year they split off, and became responsible for DBQ switchboard.  
- In January, Congress mandated that public DBQs were to be published on the website. They talked to DBQ and they agreed to publish as documents only not forms.  
- Tina Skelly is the contact at MDE.  They have been in discussions with MDE about how they would about writing regs around DBQs.  
- If these are spun back up as forms, those will be re-entered into the forms database.  This is a 6-18 month process
- Nichole observed that what is in their database currently is out of date.
- Mark explained that the issue now is a sync issue.  All they return is metadata; they don't actually serve the file. He also explained that some consumers want to know when something is decommissioned.
- Robert - is there a forum where they could post latest information about a form?
- Mark - the 'Deleted At' is really the only thing
- Nichole said they have an API Staus page 
- Mark asked Robert if there is any language about the metadata
- Congress did not ask them to take the forms down; they asked them to put them back.
- Robert shared a Word doc with the language related to the form & gave a quick overview
- Forms generally expire in 3 years
- They typically will accept it for 1 year after it expires
- Mark also mentioned the naming inconsistencies (sometimes has a VA, but sometimes does)
- Robert explained that VA Form 21-0538 is a controlled form.  21-means it's controlled by Robert's office
- 20- whatever is controlled by another person
- 10- whatever is a VHA form
- A form called VA Form 9 with no prefix - that's just a VA Form
- SF and OMB are also controlled
- Mark showed an example of where a form was called VA
- Nichole asked if we could get a document showing the naming conventions, how forms get loaded, etc. and listening in on forums
- Robert has a forms manager who has eight years experience in forms - Kayce White - she could probably answer any question we have about forms. 
- John - In closing - do we need to keep the ghosted forms in the database? 
- Robert - he could set up a call with Kayce and we could show them what we have.

#### Next Steps
- John will arrange another call next week.

## 2021-03-26 Meeting with Team Matsumoto (Forms API Support Team)

#### Attendees:
- John Hashimoto - Product Owner
- Marci McGuire - Product Manager
- Nichole Harris - Product Manager, Team Matsumoto (Lighthouse API Support)
- Mark Viterna - Developer, Intake/Forms API

#### Notes:
- We want to make sure that everyone is aligned on  timing, testing 
- Nichole checked with other API users that want info retained for historic purposes.  For the ghost records, they want to retain 
- John has a couple questions, comments
    - DBQ forms - a lot of the forms in the 'ghost list' are benefit questionnaires.  what we found out today that earlier this year, they decided to revive/not retire them.  Basicially, one party has those DBQs has those on their web site.  They are not **forms**, they are questionnaires, so they should not be in the Find a VA Form (
    - We have a call with Robert Parks at 4:45 today, and Nichole should be part of that.  We don't want to be in the middle of their relationship with other API users. Premal Shah should be the VA representative for the Lighthouse API team.
    - None of us knows 100% about how this all works.
    - Here's where we are today
        - We need to have some business-type meetings with the stakeholders
        - Find a Form product doesn't really need to be connected to the Forms API.  Nichole - up until now, they were intending to be 100% in sync with Find a VA Form
        - I explained that there is a challenge in the way that the search logic works in the API, and it is a hinderance to our ability to easily/quickly improve
        - Per Mark, there is a SHA calculation associated with the PDF that other consumers use to determine if something has changed (_note - Find a VA Form does not use that_)
        - I clarified that we aren't suggesting that the API be retired; we're simply saying we don't believe the API is necessary for Find a VA Form because everything we need is already in the CMS
        - Nichole expressed concern that us going straight to the CMS, there will be divergence (_note - there is divergence now; ghost forms & duplicates_)
        - We would want to discuss this with Steve Wirt to verify there is not an issue with us going straight against the CMS.
        - Why does the API have to get the data from Drupal vs. the VA database?  Nichole - they want the API to be consistent from what is on the page
        - Drupal also does an audit on when something changes, and that is not in the VA database
        - John will schedule a meeting next week with Steve Wirt and Premal, possibly Mike Chelen.
        - Can we tackle the ghost records at a later date?
        - Ghost records can be updated any day we want.  Monday restriction is just because it's a busy day
        - Mark doesn't really have control over the time when the fix goes in to populate the row ID (_subject to any platform issues, same as us_)
        - Mark will only be populating the row ID field he's already created - we'll do that on Tuesday starting around 2:00 PM.  Mark will let us know when it goes live so we can check it.

## 2021-03-26 Meeting with Janel Keyes and Gail Smith at VA

#### Attendees:
- John Hashimoto - Product Owner
- Marci McGuire - Product Manager
- Janel Keyes - Deputy Director, VA, VHA - Has been with VA for 10 years. Was a PCO at VBA in the past.  Did not work with Jen Lee on the MVP.
- Gail Smith - Management Analyst, VA, VHA - Has been working in this office for the past 5 years.  Started working with Brian McCarthy on forms about 2 years ago. She publishes forms, can change things on the forms. 

#### Notes
- Background of the MVP, enhancements, recent metrics
- QUestion from Janel - is this all three sections of the VA (VBA, VHA, NCA?) Answer: Yes, but more emphasis on VBA and VHA
- If a form has been discontinued - it's important for us to know when this happens.  What would be the ideal experience? 21-4138 broken out into several different forms.  **It still in the database & PDF has an expiration date** 
- John demonstrated that this is still in the database - **Per Janel, we should ask Nancy Kissenger and she would reach out to Casey White**
- Product Team Focus
    - DB Maintenence and Enhancements (retired ghost forms)
    - Improving search experience
        - Descriptions of "When to Use this Form"
        - We need them to collaborate with us on descriptions for the forms. 
        - We also could use their help with related forms
    - Discovery for VA forms management Proof of Concept (POC)
 - Ongoing
     - Link to new digital applications as they come online to encourage veterans to self-serve and speed time to outcomes
     - Paul Schute - Director of Operational Innovation, VBACO
     - Robert Parks - Chief, Part 3 Regs & Forms, VBACO
     - Josh Hardy - VHA Program Specialist - include in monthly meetings

## 2021-03-24 Meeting with Missie Vaccaro-Palomaki at VA
### Attendees:
- John Hashimoto - Product Owner
- Marci McGuire - Product Manager
- Missie Vaccaro-Palomaki - Forms Manager, VA Office of Acquisition & Logistics (OAL)

### Notes:
- Missie Vaccaro is OK with the Lighthouse team getting rid of the duplicate records in their data source. 
- 10091 - VHA at one time was randomly assigning numbers.  They had a 10-10091 form. _follow up note: That form seems to have since been removed_
- Forms starting with 10- (VHA) forms are managed by a different forms manager. 
- VA and a number or NCA to the best of Missie's knowledge are still valid.  She goes out to all her managers yearly and asks them to review their forms to ask if there are any to be removed or revised.  
- Some of the forms managers have turned over so many times, a lot of the folks aren't clear on what they need to do.
- If we want to provide some guidance on what would be good naming conventions, that will probably be helpful.
- VA & NCA - Missie - NCA does have a publications control officer (Cynthia Harvey Pryor) who is very involved, but Missie creates new forms and make changes for them as needed
- VHA/VBA - different forms managers (
- Based on Missie's understanding about the ecosystem, VHA, VBA, VA/NCA are the three main groups
- Nobody wants to take ownership of the web site and maintaining it.  She's always reached out to Kevin Reed to do it. 
- They still have the old Internet site and the Intranet site, but nobody wants to take ownership of that.
- Question from John - should we shut down the old Internet site? 
