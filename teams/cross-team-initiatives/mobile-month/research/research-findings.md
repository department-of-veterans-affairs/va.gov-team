# Mobile Month Research Findings 

**Digital Services Veterans Affairs (DSVA), VSA**

Shawna Hein (shawna@adhocteam.us), Liz Lantz (liz.lantz@adhocteam.us), 09/08/2020

View the [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/cross-team-initiatives/mobile-month/research/research-plan.md).


## Research Goals 

As part of the mobile month initiative, we wanted to learn more about the Veteran experience visiting VA.gov on a mobile device. Our study aimed to validate whether perceived problems are in fact problems for Veterans, and get a better understanding of the UX of our mobile site.


## Research Methodology 

We conducted remote sessions via Zoom, utilizing our mobile research guidelines. Participants downloaded Zoom in advance of the session and practiced screen sharing with our recruiting team.

During the session, we asked participants to show us how they would complete 4 tasks (navigate content, complete a form, find a facility, and check the status of a claim) on VA.gov. Participants who didn’t have a claim in progress were directed to an InVision prototype to complete that task.


## Who we talked to

We spoke to 6 Veterans:

*   3 men, 3 women
*   2 Caucasian, 2 Black or African-American, 1 American Indian or Alaska Native, and 1 preferred not to answer
*   Located in rural and metro areas in NJ, OH, FL, WV, DC, and CA
*   2 identified as having cognitive and/or functional impairments
*   4 had a disability rating of 80% or higher


### Research Questions

We wanted to answer the following questions through this study:

*   What usability issues does the design of the header and navigation present for Veterans?
*   What usability issues do Veterans encounter when checking on the status of a claim?
*   Can folks find info in the "right rail component" on mobile?
*   What usability issues do Veterans encounter when looking for a VA location?
*   What usability issues do Veterans encounter when using site search and looking for information on a content page?
*   What usability issues do Veterans encounter when attempting to complete a multi-page form? 
*   Are there any gaps we need to fill in our mobile research guidelines?


## Key Findings

1. Participants primarily navigated using a combination of the Menu button and search in the site header.

2. No one used the “More in this section” menu on content pages; 5 of 6 participants said they hadn’t noticed it all.

3. 5 of 6 participants had a hard time finding urgent care facilities for COVID testing.

4. People were generally able to use the facility locator without problems, but encountered some minor usability issues.

5. All participants were easily able to fill out a form on their mobile device, although a few mentioned still preferring to use a desktop computer for this task.

6. The claims status tool overall worked well for participants on mobile, however, there were a few areas identified for improvement.

7. Participants are willing to scroll enough to find right rail content on mobile when they are looking for something specific.

8. The height of alerts contributed to some people hesitating before finding what they needed on a page.


## Details of Findings


### Participants primarily navigated using a combination of the Menu button and search in the site header.

All participants successfully used the menu button when asked to find content on the site; 4 of 6 also used search when they couldn’t find what they were looking for via the menu options.  Using the menu came naturally, though one participant wanted to see 2nd level links surfaced higher up on the menu.

No one used the Contact Us link, and only 3 participants used the sign in link in the header.  This could be due to the tasks we gave people. No task explicitly encouraged contacting the VA, and we only asked participants to sign in if they had claims in progress.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/cross-team-initiatives/mobile-month/images/mobile-header-homepage.png" alt="the VA.gov header area in mobile view" width="40%"  />



**Implications:**

*   Our current design helps people find what they’re looking for and is easy for them to use, specifically our menu button.  
*   The study didn’t reveal any usability issues encountered by having Contact Us and Sign In available in the header, but it’s worth taking a closer look in a future study dedicated to better understanding the usefulness of these options.


### No one used the “More in this section” menu on content pages; 5 of 6 participants said they hadn’t noticed it all.

As participants went through content pages they were exposed to the “More in this section” button.  We asked them repeatedly to show us how they’d find more information on the topic they were looking into; no one tried to interact with “more in this section”.

When we asked if they had noticed it, 5 of the 6 had not.  Expectations varied as to what would happen if they clicked on it; 2 people thought it would expand information within the page they were already looking at. Once they clicked on it, all participants thought that it was useful.

> It's actually pretty cool that that's there, I just wish it was a little more noticeable because then it gives you a little more information instead of having to scroll through everything. The topics are highlighted and would make it much easier to look into.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/cross-team-initiatives/mobile-month/images/more-in-this-section.png" alt="the VA.gov more in this section component in mobile view" width="40%"  />


**Implications:**

*   The functionality of this component is useful to people, but we need to revisit the design so people can find it.
*   We may want to consider a different label such as “More on [this topic]” so it’s more clear to people that they’ll be able view more on the topic itself, not only more on the specific page they’re on.
*   We should consider using Ryan’s redesign of this component across our site, since it tested well when Tressa tested it.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/cross-team-initiatives/mobile-month/images/new-more-in-this-section.png" alt="the VA.gov more in this section new component in mobile view" width="40%"  />

### 5 of 6 participants had a hard time finding urgent care facilities for COVID testing.

It was challenging for people to find urgent care facilities, and that seemed to be caused by a focus on the task itself rather than looking for a list of facilities.  They initially focused on “COVID” and looked for something about testing. Even with that mindset, only one person associated the “VA locations” link in the coronavirus alert with testing or urgent care.

When prompted that they were looking for urgent care facilities near them, their mental model changed to “urgent care” or “health care”.  They expected to find the information somewhere under the VA benefits and healthcare section.

> I’m still trying to find a link that points me towards facilities but I haven’t scrolled across one that I can see. Facilities or location are the key words I’m looking for. _- Participant scrolling through health care content pages_

Some participants tried various search terms such as “covid testing” and “urgent care facilities” and they were still not able to get to the facility locator.

Ultimately, 4 of 6 of participants had to be guided to the facility locator via the link under the menu.  2 people said they had seen it, but didn’t associate urgent care with the VA.


> I didn't think that would pertain to urgent care. I thought that was more like your local regional facility or something. I think of urgent care as more, you know, away from the VA

**Implications:**

*   People associate urgent care with health care, and don’t necessarily relate urgent care with something the VA provides. We could make it easier for Veterans to find this information by surfacing it on healthcare related content.
*   There is an opportunity to improve our search results. The term “urgent care facilities” should return our facility locator. We would benefit from evaluating our search results as they relate to the facility locator.
*   We should consider relocating or rethinking how we provide access to the facility locator to folks on mobile.
*   In future studies, we should phrase tasks to be more open ended to ensure participants don’t get caught up in specificities that aren’t important to the question we’re trying to ask.


### Participants were generally able to use the facility locator without problems, but encountered some minor usability issues.

Once people found the tool, it was straightforward and easy for them to use. All participants found the level of detail in the list view helpful; the in-network information and the Get Directions link were specifically called out:


> The ability to just click Get directions and then go to my maps app, that's super helpful.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/cross-team-initiatives/mobile-month/images/facility-locator-get-directions.png" alt="the VA.gov Find Locations get directions component in mobile view" width="40%"  />

People encountered some small usability issues when using the tool:

* 4 of 6 seemed to miss the map view, or saw it and didn’t feel like tapping on it. When they did, felt it left something to be desired because it didn’t have the same details as the list view:

  > The list is more to my satisfaction, because it gives you the name, location, _and_ the telephone number.


* The map view has functionality that filters the list view if you zoom in on the map. Only one participant discovered this, and it caused hesitation and momentary confusion:

  > Hang on. That's weird. Or... [hesitates] that's interesting. When I went to ‘view map’, and I go back to ‘view list’, I only see the ones that were on the map.

*   People were unclear about the difference between the three urgent care options in the Service Type menu.  They went with “all urgent care” to be sure nothing was missed. (more on this below)

**Implications:**

*   We’ve done a good job making the facility locator user friendly.
*   We can do a better job making various options clear on the dropdown. Possibly explore ways to get people more context from the tool, if we can’t provide it within the tool itself.
*   The level of detail in the map view isn’t helpful on mobile when people are looking for information on facilities.


### All participants were easily able to fill out a form on their mobile device, although a few mentioned still preferring to use a desktop computer for this task.

Overall, people easily navigated through the initial education wizard and the education form without incident. They mentioned that they liked the simplicity of filling out the form on their mobile device.

> I think it's pretty self-explanatory. I don't find it difficult at all. It's really simple.

> It was pretty straightforward and easy to manage.

A few participants said they would probably still fill out the form on their desktop because they are scared of making mistakes on their mobile device. 

> I got to this form, and I wanted to see better and make sure I didn't screw it up, so I went to my laptop.


> When you're using something smaller you get spelling errors, or you try to check a box and your finger is too big for the screen so it doesn't hit it. There's some hiccups with using your mobile device to fill out things that are important.

Both were able to fill out our online form without usability issues, and overall, people expressed positive sentiments about their experience in filling out our online forms.

**Implications**

*   The design patterns we’ve chosen for our forms work well for mobile devices.
*   People are hesitant and have reservations about filling out forms on mobile devices. 
*   We should continue to be cognizant of this as we bring more forms online, and be aware of the opportunities to ease the burden of filling out forms on mobile. 


### The claims status tool overall worked well for participants on mobile, however, there were a few areas identified for improvement.

Overall the claims status tool worked fairly well on mobile, however a few insights / issues came up:

1. A few users took a little time finding the area that let them know they did not need to upload any files.
2. A participant mentioned that he needed to click into the details of a claim to determine which claim it was because there wasn’t enough differentiation between claims in the list view.
3. A participant mentioned wanting to have access to disability rating information and letters within the claims status tool so he wouldn’t have to leave VA.gov and log into eBenefits to see if his disability rating had been updated.

> There's just not a lot of detail. Right here, it tells you 'the board made a decision on your appeal' but it doesn't give you any information. You have to go to eBenefits and see changes in your disabilities.

**Implications**

*   The design pattern of a list view with a detail page works well for Veterans.
*   The tabs on the detail page did not provide any issues for Veterans.
*   We should consider differentiating between claims on the list view more clearly, and surfacing statuses (e.g. you do not have to upload any more files).
*   We should consider adding access to disability ratings within the tool.


### Participants are willing to scroll enough to find right rail content when they are looking for something specific.

When looking for a specific task (in this case, trying to decide what to do when not seeing their claim on the claims status tool), participants’ natural inclination was to keep scrolling on mobile until they found the thing. Therefore, participants were able to find the right rail content that had dropped below the list.

**Implication**

Veterans seem to be ok scrolling down when searching for specific content on a page.


### The height of alerts contributed to some people hesitating before finding what they needed on a page.

All participants were exposed to at least 2 alerts as they went through the tasks, which consumed the majority of the viewport each time a page loaded. As each session went on, we noticed participants had to repeatedly scroll past the coronavirus alert on content pages to get to the information they were looking for.  One alert was dismissable; 2 of the 6 participants dismissed the alert in the session, and one participant appeared to have dismissed it previously (or when the recording was paused as he signed in) because it did not display at all while we were observing.

It seemed like people got fatigued, rather than frustrated, by the alerts. When we asked participants to find VA locations to get a COVID test, only 1 of the 6 referenced the VA locations link in the alert itself, which suggests people stopped reading it by that point in the session and just ignored it because they had seen it so many times.  3 of 6 participants had to be guided to the “complete application without signing in” option at the bottom of the info alert on the form page, which suggests they are not reading lengthy alert content carefully.

One participant navigated back to the homepage twice to start over, because they didn’t think they landed anywhere after choosing a page from the main navigation menu (because nothing on the page had changed due to the alert).

>*Clicked on Eligibility from Education menu*. Oh, I thought that would give me eligibility information as far as education, but [I backed out of it because] nothing came up.  

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/cross-team-initiatives/mobile-month/images/mobile-header-homepage.png" alt="the VA.gov homepage mobile header component" width="40%"  />


**Implications**

*   Alerts that consume the majority of the viewport make it harder for people to get to the content they’re most interested in.
*   People who really want to dismiss the alert figure out how to do so.
*   People could miss important information on a page when they are exposed to lengthy and repetitive content. 


## Recommendations

*   Iterate on the design of “more in this section”.  This study suggests there is more opportunity for it to stand out, and people would benefit from clearer language about what “section” means.
*   Conduct additional testing on navigation to determine:
    *   If people use/see the Contact Us/ Sign in options when they need them 
    *   If people can find the facility locator with other tasks.
*   Consider retiring or improving the map view for the facility locator on mobile.
*   Consider improvements to the claims status tool: 
    *   Enhance differentiation between list view items.
    *   Surface statuses more clearly in the list view.
    *   Provide access to the Veteran’s disability ratings.
*   Explore a more mobile friendly alternative to the alert component so people can see important information but not be forced to scroll excessively or wonder if anything has changed on the page.


## Next Steps

*   Revise [mobile research guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/mobile-research-guidelines.md)
*   Create GitHub issues under a single epic for mobile improvements and assign to the appropriate teams


## Appendix

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/cross-team-initiatives/mobile-month/research/research-plan.md)

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/cross-team-initiatives/mobile-month/research/conversation-guide.md)

- [Mobile research guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/mobile-research-guidelines.md)

- [Prototype](https://vsateams.invisionapp.com/share/4XYGXZU9B5T) (for participants who did not have a claim in process)

- [Workbook for notes and synthesis](
