# Opportunities to enhance the personalized experience on VA.gov
Last update: 5/31/2023

## Overview
We [completed research in April 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research#research-outline-identifying-issues-and-challenges-people-have-finding-tasks-when-they-are-signed-in-to-vagov) and identified opportunities to enhance the personalized experience on VA.gov.  Many approaches are not feasible at the moment for various reasons, but we’d like to revisit them at a future time.

## Site header and global navigation
### Make My VA the logged in homepage.
This isn’t something we’re going to move forward with for now. My VA isn’t ready to be the logged-in homepage today, and there is hesitation around removing access to the non-task content featured on the new homepage, such as the promo spot (currently PACT act) and VA News. 

#### Outstanding questions
- What non-task content is important for Veterans to have access to in a logged-in state?
- What would we need to change about My VA to make it ready to be the logged-in homepage?

### Change the main navigation elements when people are logged-in.
We’re holding off on changing the navigation since the VA is piloting a new header for OMB and there are a lot of unknowns there.  Some ideas we talked about that we could explore when we’re ready are:
- Having a completely different nav for auth auth experience ([concepts](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684266228888/70e80eb031b0215679917698dc3abfcd74c76e03?wid=0-1684366332528))
- Adding My VA or personalized info to the mega menus

### Updating “manage” URLs in the mega menu to point directly to tools, instead of the static pages.
This hasn’t been discussed previously with regard to site IA, but it’s worth considering. 
#### Technical consideration
- This relies on Drupal being smart enough to know when people are logged in
- We don’t have IA engineering resources to do this; currently falls under Public Websites

### Updating the personalized menu
We haven’t discussed this one yet. We know it’s duplicative of global nav items.  We haven’t looked for evidence to suggest that people need more added to it though. 

#### Possible next step
- Look at analytics to see if numbers suggest adding high-traffic “manage” items to the personalized menu would be helpful
- Look at search to see if there are specific things related to personalization that could make sense to add there

## Homepage (new 2023 version)
The Public Websites team owns the homepage, even in a logged-in state, so we’ll need to work with them on any of these efforts.  Is it possible for the Authenticated Experience to have more agency over the logged-in homepage? That could help us ensure we’re enhancing the logged-in UX in a thoughtful and consistent way, as well as with resources and expediting work.

### Dynamically change the homepage content when logged-in
We could:
- show My VA cards/content in a logged-in state.
- Change “Create account” CTA to something about “My VA”
- Dynamically change links when logged in to point directly to tools and personalized content instead of static pages.

We shared these ideas and [concepts](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684266228888/70e80eb031b0215679917698dc3abfcd74c76e03?wid=0-1684953724245) with Dave Conlon; waiting for him to set-up a meeting to discuss.

#### Technical consideration
- **NEED TO CONFIRM** This relies on Drupal being smart enough to know when people are logged in
- We don’t have IA engineering resources to do this; currently falls under Public Websites

## Benefit hubs
We talked about ways to make static pages smarter by surfacing personalized information at the right time.

### Showing My VA cards/content on static pages that link people to tools
There are static pages on the site that link to tools, with a call to action that says “View your [tool data]”.  Above the call to action, we could pull in the most recent information through a card, like we do on My VA.

After reviewing with IA, we determined this isn’t an ideal approach because the sign-in CTAs that link to these static pages, should actually go to the tool instead.  Our effort is better placed in optimizing those flows.

### Surfacing relevant personal information on static pages


### Optimize static page > sign in > static page > tool flows 
When people sign in

## Forms and applications
