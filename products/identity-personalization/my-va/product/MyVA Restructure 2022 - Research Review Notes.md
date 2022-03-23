# MyVA Restructure 2022
### Notes from meeting with Samara, Liz & Heather 3/14
* Not a huge overhaul
* Make it able to grow
* Links should be secondary to action items
* Make sure the most important things are surfaced
* Open to a notification center
* MVP with VANotify
* Maybe show option with and without notification center
* Some VANotify notifications will be in ours
* Wonder if we should explore a tabbed experience
	* There’s some concern about the page getting long
* Action items need to be prioritized - this has surfaced in research
* We may want to do some research/testing on what needs to change about it before we explore options?
* Education updates are coming
* Does the application section need to be so big?
* We could be more specific about things like how much debt there is
* Blue Sky Prototype - Mel

## Research Review Takeaways
### Stakeholder Interviews
* Making MyVA the login in homepage will result in a more personalized experience once a veteran logs in and give them more reason to log in; also help them find what they’re looking for
* Prioritizing top tasks will decrease necessary cognitive load for veterans 
* Veterans don’t know where their notifications are when they log in (This might be a good argument to add a notification badge to MyVA)
* Not only do we need to surface the most pressing and relevant info - we also need to provide a clear path to complete tasks
* In order to avoid MyVA being a dumping ground, nothing should be added to it without research showing that veterans need it there
* When MyVA becomes the logged in homepage, we should track metrics like volume of calls to call center, mail/in-person tasks, # of LOA3 users, etc. to measure success
* Look at the logged in experience of banking websites for good examples
* This restructure will likely require collaboration with VSP to create better authenticated components
* We should consider a new navigation for the logged in user
* This restructure will need a concrete roadmap to manage stakeholder expectations

### Analytics Review
* Claim status and disability applications are king on the modernized website (VA.gov)
* Wonder if we could pull more updated analytics from the new MyVA before deciding whether this is still the case
* MHV was visited 6x more than VA.gov
* Since Find a VA Location is a very popular function, it should be in whatever updated nav or MyVA page we show upon login
	* QUESTION: **My VA is more popular than we expected.**
In the non-modernized data, we can see that My VA is more popular than we thought if we look at pageviews alone. This page makes it into the top 25 of all pages across VA web properties with about **~7.5MM views**. This may indicate an interest in seeing personalized benefit information.
 [Top pages between VA.gov, MHV, eBenefits, and more](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20190412&_u.date01=20200412&_.useg=&explorer-segmentExplorer.segmentId=analytics.pageTitle&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50/) 
**Recommendation**: Continue with plan to personalize the logged-in homepage. Also continue with plan to retire My VA, since the homepage still gets significantly more traction.
	* 	Retire MyVA? Does this mean the content on MyVA would become the logged in homepage? Then how would a veteran access the links on the current homepage once they are logged in?
* Make sure all tools are easily accessible from the logged in homepage, since most users start there and navigate to tools

### Previous Research Review
* Organizing information by benefit matches the Veteran’s mental model - this helped me to better understand the categories currently on MyVA
* Veterans had a hard time finding MyVA and MyHealth in top right of the page > I assumed this would be an issue
* Participants expressed interest in notifications, and changing the order of modules on the dashboard to reflect their personal preferences and activity. > Should we consider more customizability?
* Participants wanted to see each block in the open state, and generally did not like being forced to manually open each module. > We should probably not consider presenting any info in a collapsed state by default according to this finding
* People want to see meaningful next steps in their notifications > every notification should have an action
* Mobile features people were less interested in: Comparing GI bill benefits, having the ability to sign in for appointments, viewing payment history, adding VA docs to their Apple/Android wallet. > This tells me that veterans overall  still prefer some things to be manual as they have been, like doctor appts and payments.
* The current MyVA design addresses previous issues of needing actionable and relevant info for veterans, particularly around claims and benefits.

### User Interviews and Co-Design Exercise
* Easy access to documents from the homepage was important to participants. > Are we prioritizing this on current MyVA?
* Most participants didn’t see “profile” items as totally separate from benefit items. Some wanted to see or have access to “profile” information right on their logged-in homepage. > Important to retain a prominent link to profile once user is logged in.
* Participants typically look for notifications in the top portion of a page, but expect notifications from the VA outside of their logged-in experience. > Make sure notifications are prominent at the top but also sync with VANotify to ensure we’re sending emails as well.
* “If we could set up our pages how we want to - “these are the top 6 things that matter to me’ and have them at the top of the page, that would be awesome.” > A customizable solution seems like every veteran would be happy with the blue sky prototype. “If things are overwhelming I can just hide them.”

### Blue Sky Prototype
* Heavy focus on prioritization, status, and clear action items
* Recommended benefits are in righthand rail - is this not a best practice for accessibility?
* Love that the “Overview” section is statuses and high priority items but there’s a sub nav to dive further into specific sections. Not sure if this is necessary with the amount of content we currently have but maybe further down the line
* More justification for a sub-nav: Veterans found the sidebar navigation in the blue sky prototype helpful because it provided them with a scannable list of sections and tools.

### Comparative Analysis
* Almost every site had personalized content upon login and some also included customization
	* The people who shared those screenshots stated they could not recall ever using the customization options. > Hm! The takeaways also state this isn’t necessary to communicate a sense of personalization.
* Being able to expand and collapse groups might provide enough customization and was common on competitor sites
* Most were grouped by service type (as MyVA currently is)
* A dedicated message center isn’t necessarily the right approach for simple messages - it’s more important to empower the user to take action quickly and directly. > This is a potential argument for not including a separate notification page, but other research shows users want it for reference.
* If we had a sub-nav, it could be split into sections with headings (someone from DEPO shared an example from HRweb)

### MyVA Redesign Research Findings
* Preference (not A/B) test of two mobile options with different IA but same content
* Users do not expect to see _all_ their information on an overview page - they want to see any time-sensitive information or action items and all other details can live on a separate page. > This is really valuable info for an overview page with action items
* Overall users preferred whatever prototype was shown first - aka no clear winner
* Thought it was interesting we tested on mobile first - could we do this for our next redesign? (/shouldn’t we according to recent DEPO feedback?)

### My VA Redesign 2 Research Findings
* Updates tested on mobile and were well-received
* Users appreciated the personalization in MyVA
* Updates weren’t actionable enough
* Confusion around gray box info and CTAs - are they combined? Same? Recommendation would be to not repeat info to avoid this confusion. If we show previews, show them all, or just show a number
* Users didn’t need to see details about messages and prescriptions on the main page

### Action Items Research Findings
* Tested a mobile prototype for action items_notifications_alerts
* This was the early usability testing for our current “Notifications” section when we intended to link to a separate page with all alerts
* Users want the ability to see old_expired alerts and expect to see differentiation between read_unread > But they couldn’t find the View All when it was at the bottom of the page

### My VA Payment Info and Onsite Notifications Research Findings
* Displaying important information at the top of the page was effective at getting participants’ attention, and they had no issue with repeated notifications. This is why the decision was made to have them in both places.
* Two pieces of information were repeatedly named as being missing from the Benefit payments and debts section: remaining education benefits, and debt status. > Should we consider adding these in the restructure?
* Participants wanted to see the status of their debt, even if they had no outstanding debt with VA. > This is why the decision was made to show the debt balance of $0.
* Notifications section at top needs to have a heading, for both accessibility and usability reasons 
* Explore additional, more specific debt information we can include in alerts > I would like to do this with all alerts not just debt

### Discussion Points for Meetings 3/18
* Clarity around what “becoming the logged in homepage” and “eliminating MyVA” means - are we getting rid of the logged out homepage in the logged in experience? Are there certain things on the homepage that we still need to account for in this redesign that won’t be accessible elsewhere?
* Notifications/alerts should have more detail, show status, and give the user a clear path to resolve
		* The most urgent/newest notifications should be at the top
		* In MyVA 2.0 research there was confusion around gray box info and CTAs - are they combined? Same? Recommendation would be to not repeat info to avoid this confusion. If we show previews, show them all, or just show a number.
* We should test on mobile first - OCTO has been expressing interest in this and mobile was tested first for MyVA 2.0 redesign
* Research seems to show that expandable and collapsible sections would be enough customizability  and further customization was not necessary to communicate a sense of personalization
* Still leaning towards a separate Notifications page since some research said users want to be able to see old notifications and distinguish between read/unread; the View All link needs to be at the top (users couldn’t find it at the bottom)
* If we had a sub-nav like in the blue sky prototype, it could be split into sections with headings (someone from DEPO shared an example from HRweb)
	* More justification for a sub-nav: Veterans found the sidebar navigation in the blue sky prototype helpful because it provided them with a scannable list of sections and tools.
* Two pieces of information were repeatedly named as being missing from the Benefit payments and debts section: remaining education benefits (is this already in the works?), and debt status












