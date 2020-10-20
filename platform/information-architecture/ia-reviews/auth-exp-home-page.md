# IA Review and Recommendations
**STATUS: NOT STARTED**

**Team:** Authenticated experience

**Product/Featue:** Iteration on the MY VA dashboard.  

**Background/Context:** Originally planned as an authenticated home page, but direction changed to start with a dashboard iteration. 

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/14642

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

**Approach:**

- 


Page | URL | Breadcrumb
--- | --- | ---

**General Details**
- Please connect with your writer/editor on the proper verbiage and capitalization of the last element of the breadcrumb

<hr>

### Navigation Changes and Entry and Exit Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Description
--- | --- | ---

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- 

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

<hr>
<hr>

### Meetings Notes and Background Info

**10/8/2020 - Regroup**

- Will no longer replace the home page, will live as iteration of dashboard
- Page includes
  - Name/badge section includes link to profile and small bits of info - dis rating, claims in progress and upcoming appointments
  - Health care section
  - Upcoming appointments, active prescriptions, link to lab and test results, secure message/inbox
  - Learn more about your VA health benefits
- Questions posed
  - My VA and My Health - with initial heavy focus on health care, what what will the relationship between these entities?
	- "Go to" links / "Learn more about your VA health benefits"
    - Hub pages give primary focus to getting benefits, what is the most relevant destination for each?
    - Hub page is very focused on getting benefits, is there a more helpful place to take users or something they may be commonly looking for from this experience?
	- CTAs
    - Scheduling takes you into tool
		- Others take you to MHV
    - Recommend minimizing CTAs

**9/24/2020 - Design intent** - Crystabel, Tze, Cassandra Allen, Emily W, Jennifer S, Matt Shea, Peggy, Ryan, Tressa F, Trevor, Rachel R, Kevin H, Samara 
Meg attended in place of Mikki, her notes below, feedback here: https://github.com/department-of-veterans-affairs/va.gov-team/issues/13415
 
- Wireframes showed left nav versus tabs. 
- TF - retiring the MyVA dashboard. 
- LLantz did research around this. Most imp things were claims and disability - what $ they cd get from VA. 
- Phase 1 is to retire MyVA, no notifications or nav. See timeline on Git page. 
- Complicated page, high visibility. 
- High-level wires, not designed at all. Have not really thought thru design. 
- Each phase has a platform checkpoint planned. TF wants to set up informal meeting or Slack checkins every week or 2. 
- Phase 2 - Healthcare and claims, Starting on this this sprint. 
- Phase 3 - Educ, etc. - See Git page. 
- Phase 4 - Design “blank” state and LOA1 state.
- Phase 5 - Validation and retirement of MyVA. 
- Eventually hoping to have 1 streamlined, personalized hub. 
- Samara Strauss to Everyone: (1:41 PM)Disability rating and claims were the highest priority information stated by veterans in the user research sessions Liz conducted, and that’s also supported by analytics and other data.
- Cassandra -Issue for tabs if there is no content to show. Maybe if don’t have healthcare, wd give them opportunity to enroll.
- TF - profile will still exist. 
- Peggy - * What if users want to look at content of current homepage? TF - showed where on wire the main sections from hp are. Links will be dynamic, for ex, if you have healthcare. 
- Meg - Filling in for MIkki. Love the idea of regular check-ins. Thinking about complexities like disability rating — overall versus other disability ratings. Also thinking about integration with content on MHV (not as much on eBenes). 
- Jennifer S - Accessibility of icons. Progressive web techniques for browsers. 
- Trevor - Dynamic CTA for Vets who don’t have healthcare. Really like this! Having prompts that say, “You are eligible; let’s get started!” I lean towards left nav over tabs, which take up vertical real estate on mobile. There is also conflicting research on how to move thru tabs. We don’t have a pattern in Design System library yet. 
- Emily - Crystabel and I are also drawn to the left side nav. Easier to stack, more flexible. Use Font Awesome 5 icons, and we can put these in our library. 
- Crystabel - Maybe we can make the rounded boxes a Design System component. 
- Ryan - Similarities to mobile app. Task based! One thing the mobile app team is discovering is that what we want to do and what we can do are very different. Your boxes for summaries, etc — keep these extremely flexible. Think about names being long, etc. Do we need a nav at all? Can we treat this as a product page? Like your mobile mockup. This is almost verbatim what Bridget has done for mobile app. I love this focused, nav-less version. I have a lot more ideas!
- Samara Strauss to Everyone: (1:55 PM)BTW, Tressa and Cassandra have been syncing with the mobile team regularly, so we are already on the cross-team collaboration for these efforts. 
- Samara Strauss to Everyone: (1:57 PM)All of the data represented here is data we have access to in VA.gov (maybe with the exception of the doctor’s name) — most of it already exists on the My VA dashboard.


**4/16/20 - Kick-off**
- when logged in you have the home page and the My VA Dashboard - they compete for attention with the Veteran
- Dashboard is supposed to be a personalized space with VA - many don't use or know about it
- Current dashboard is designed like a content page, doesn't utilize the design system
- User goals:
  - easy access to tools/tasks specific to my VA experience
  - easily see status updates and notifications
  - quickly complete tasks the user came to do and move on
- Biz goals: 
 - lay a foundation for a personalized home page that is relevant to the user type and their tasks
 - have a place to highlight status updates and notifications
 - retire My VA
- Future thoughts for authenticated tools navigation 
- Logged in home page vs profile?
- Timeline - launch before end of year would be awesome, doing discovery phase now, this will likely be broken down into a couple projects

