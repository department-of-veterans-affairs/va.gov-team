# Discussion with previous 686 Dependents Team
These discussions were with both Andrea Schneider and Matt Self individually on October 18, 2019.  The folder for previous work can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/declare-dependent) for reference.

**General Questions**
- What does the 21-686c form do?  
- What discussions have there been to allow the user modify only the parts they are interested in and possibly submit the form in its entirety in the background?
  - Is it possible to only submit part of the form, for things like updates?
- What does the final validation of the form look like to the user before submission?
- How much user validation has been done?
- Did your team consider doing "View" first or why did "Add" get picked up first to go into staging? **No, see below**
- Who can help with DS Login?  Or a point of contact to get started
  - Accounts might be blown away...anticipate a DM with Niranjan Sathindran (@niranjans)
- Is there a check to see if the TCDR is over 30%?  **No**

## Discussion with Andrea Schneider
`Friday, October 18, 2019 at 9:05am ET`  
- Work was done mostly in 2018 over the course of 6 months
- There were some stakeholder blockers: confusion with the form
- unicorns wrapped up in May 2019 after they picked it up
  - Felt like they were 80% there but the next 20% had some unknowns
  - Some questions they had were how to connect it with everything else (View, Modify etc and how to associate it to a claim, apply services to a dependent like education)
  _Associate to a claim is not the same as service connected_
- "Save in progress" helps quite a bit
- After submission, very little is automated actually, a person needs to take a look at it
- Questions about the form itself need to go to the **business owner (?)**
- Order of questions can be loose as long as data gets in 
- In general, logic can be used but it seems that walking through the form is the best course to take
- As far as validatoin goes, A/B test as much as possible and get to staging when you feel close

## Discussion with Matt Self
`Friday, October 18, 2019 at 1:30am ET`  
**Background**
- Its been a year, some of this might be stale
- There are a few different modes to trigger the dependents form
  - changes can change drastically
  - One type of benefit is like connecting to a the GI Bill (I didn't serve, but my spouse did)
  - Another is a type where they (the dependent themself) will have no interaction with, just their mere existence and/or relationship, it changes the compensation.
  - People that are diabled changes pretty dramatically if they have dependents ($1400 all the way to $3600)
  - 686 is only concerned with boosting the award, not establishing the dependent as a new entitity 
  - The 686 form is only concerned with boosting a benefit
  - Its more of an ancillary of the compensation form
- we chose the 686 because its a little unique and has a rules based process system (RBPS)
  - if a form makes it into the RBPS and a positive decision is made: funds can start funnelling in pretty quick (2 days)
    - we did some discovery and asked "why do so many get kicked out?"  25% made it in, rest were kicked out
    - mostly bc of stupid reasons (form validation, trailing white space, symbols where they shouldn't be, etc)
    - Don't recall the metric we shot for but reducing off ramps and time to money  
**Questions**
- View Dependents is not going to come from 686?
  - Connections are key so if another department (like education) gets a claim, they can refer to the 686 and see they exist but there is no process right now to automate that.
- A Veteran needs to be at 30%+ rated (TCDR) to get to the 686, correct?
  - We did not check for that when we went through this
  - It would be hard to check for that as a pre-filter
- View vs Modify is our current Epic, and it looks like a lot was done for Add 
  - Yes and no, think of adding dependents as not synonmous with submitting them for a disability claim.  686 is not about adding dependents but more about submitting dependents to get more money from your claim.  (Its about submitting dependents to associate them with other claims.)
  - It sounds like your problem statement is "We want to allow users to add and edit their dependents online."
  - But our problem statement was "We want to allow users to increase their monthly disability check using every method possible."
  - They both touch dependents but they were very different use cases..
  - Filling out a 686 is not the same thing as adding a dependent to your file.  They are kind of similar and their might be a process to tie them together in the background.
- Is there another form altogether that deals with just adding a dependent?
  - I don't think there is and there might not need to be.  Forms start as paper forms and adding someone to a paper form doesn't really do anything because there is nothing outside of the digital world that would have an effect.
  - You need to be able add and remove dependents and modify status (usually kids: they themselves have a disability, age out, or something changes with their education).  
  - If you were going to design proceses to do that, from the ground up, you wouldn't do it through a form, you could just hit the endpoints/systems.  Making associations with my record as a veteran, breaking those associations and changing those details as associations, none of those seem form centric and you might not need to deal with 686 other than given that its mostly done.
- It sounds like we miscontrued what the purpose of the 686 form is meant to do.
  - You are not the first to do that, others have done that as well.
- Maybe we should simply port it over to VA.gov and make it so you can at least do it at VA.gov. 
- If there was another claim out there you wanted a dependent to take advantage of, you would need to fill this out and go back and implement that new claim status for example?
  - Yes.
- If you are a Veteran and you type in "I want to add a dependent" you will be sent to eBN and click here and add them.  Today, you will do this in EBN or on a paper form.
- What does it do today?
  - Its presented as a workflow.  Like adding someone to my Amazon Family Account.
- Could you erase the 686 completely and still have a way to add a dependent?
  - Yes and no.  You could add someone and have them associated with you but if you wanted to apply them to different things around the VA to change things (tell compensation service that I have a kid to get more money (needs the 686), or tell education that I have a wife so she can take advantage of my GI Bill(needs the 5490)).  
  - The act of creating a family unit should not need the 686.
- Its like there is a huge buffet of things you can do with your dependents but the 686 is more for creating a vehicle to get a small subset of that buffet.
  - Exactly.  Creating the family to take advantage of that is not the 686, but for follow on action.
- So if you have dependents established and they are not associated, you would need to use the 686 to associate them to an award.
- Identifying how to get the Veteran more money through the 686 is the goal and another might be setting up my family and working backwards from the 686 submission, might be a good way to tackle that.
- Aside from things that require a 686 form, what are some other things that a Veteran might want to do?
  - Education benefits are transferable and that is probably the biggest one (and most interactive) aside from increasing your disablity claim which is a little more silent in that associations simply increase that dollar amount.  Education requires more information about schools and dates - there are 3 or 4 different programs that are involved.
  - Another is death and indemmnity benefits: there are opportunities to streamline applying for a burial
- When work for the 686 dropped off, do you remember any gaps?  Frontend looks mostly done, but not connected...whats a high level status of where things were left?
  - Frontend is mostly done
  - We wanted to do a time and motion study where we took our form next to the existing process and did some usability testing and calculate the RBPS against a large set of use cases and see if that would show validation.
  - For backend, there is connection to some backend service (Tuxedo?) but there is some BGS service that the eBN 686 services are making use of them as well and it is active.
- Paperwork reduction act: were you responsible for handling that?
  - No not really.
- It seems like there can be some smaller functions that are within the 686 form that can be addressed by the Veteran and they can continue on and in the background, we build and submit the complete 686 for them.  Alternatively, as it is now, we are looking at an end to end process and walking through the entire form and then submitting.
  - But what if someone wants to fill out the entire 686?  Maybe there is a whole 686 option?
- The 686 can help prevent some fraud vectors in that when things change like mutliple marriage histories but there is no room to break up the form as the VA is not going to allow for that.
  - For usability testing, maybe we can break into some smaller tasks and see if we can make it into get that into flow.

**Usecases**
- As a Veteran with dependents, I want to simply add my family into my account so that I can simply see that they are there.
  - We might want to create some logic so that we simply capture that information and store it.  Submitting a 686 for family members that aren't going to have any effect on a benefit might confuse those VA employees on the back end and yield no results.  It could go into a 686 that gets stored and not submitted but it depends on the data sources. You should not have to 686 jsut an addition.
  - Not sure a Veteran would go through the time and trouble of simply 'adding a family' to the VA record if there's no benefit tied to the action.
  - The 'add dependent workflow' could be a precursor to receiving increased compensation; i.e. save the work for later...
  - Might want to research where dependents factor-in elsewhere in VA.gov and in benefits generally; find the 'source of truth' for dependents?
- I want to add dependents to increase my compensation etc (or education, for example)
  - Then a 686 needs to be submitted.
- An inert place where you store dependents and associations ahead of assigning them to specific benefits would be a great way to navigate the use of the 686.  Submit once there is a need to.  Dependents not on award might be a great place to start with an inert list for storage in your profile/account.
- If you don't have a 526, you can't get to a 686 (you need a disability to associate your dependents to)

## So what is on staging as of today (10/21/2019)?
- A version of the 686 exists in `vets-website` [here](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/disability-benefits/686). 
- The existing form is broken down into 4 chapters: veteran information, household information, current spouse information, and unmarried children. 
- The existing form can be walked through and filled out without any issues, however, attempting to submit it throws a schema validation error even though all fields are marked as valid. 
- There is some groundwork in the actions and reducers for checking if the user is at least thirty percent disabled. It should be noted, this form cannot be used if a user is less than thirty percent disabled. 
- There is currently no connection between the frontend and `vets-api`, though it looks like work has been done to scaffold the backend [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/dependents_application.rb)
- There is a url that points to `/dependents_application/disability_rating` intended to fetch the total combined rating for a user and verify it is over thirty percent found [here](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/disability-benefits/686/helpers.jsx#L47)
