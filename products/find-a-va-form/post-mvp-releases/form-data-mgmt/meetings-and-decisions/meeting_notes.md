# Meeting Notes

## 2021-03-26 Lighthouse Database Update Meeting with Robert Parks (VBAVACO), Paul Shute

#### Attendees:
- John Hashimoto - Product Owner
- Marci McGuire - Product Manager
- Robert Parks - VBA VACO
- Nichole Harris - Product Manager, Team Matsumoto (Lighthouse API Support)
- Mark Viterna - Developer, Intake/Forms API

#### Notes:
- High level overview of Forms API
- DBQ (Disability Benefits Questionnaires) forms overview - if something is a VA Form, that is a very very specific thing. Some VA forms are pamphlets (non-substative forms - not subject to certain rules).  Some forms are controlled. They have to renew everything years, petition to OMB, petition for each renewal and published in the Federal Register twice. 
- Each form has a very specific version number assigned by OMB, and that can't be tinkered with.  
- Up until 2020, DBQ were considered controlled forms.  In 2020, they were made publicly-facing.  
- The problem was that Veterans, VSOs and other people.  Some people were using them for fraudenlent purposes ("pay me and I'll put anything in that you want").  They were told to take them off the public site and eventually internally, and discontinued. 
- MDE used to be part of Comp service.  Last year they split off, and became responsible for DBQ switchboard.  
- In January, Congress mandated that public DBQs were to be published on the website. They talked to DBQ and they agreed to publish as documents only not forms.  
- Tina Skelly is the contact at MDE.  They have been in discussions with MDE about how they would about writing regs around DBQs.  
- If these are spun back up as forms, those will be re-entered into the forms database.  This is a 6-18 month process

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
