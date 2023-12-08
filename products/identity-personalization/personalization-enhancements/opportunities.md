# Opportunities to enhance the personalized experience on VA.gov
Last update: 6/5/2023

## Overview
We [completed research in April 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research#research-outline-identifying-issues-and-challenges-people-have-finding-tasks-when-they-are-signed-in-to-vagov) and identified opportunities to enhance the personalized experience on VA.gov.   These are outlined below; we’ll be working on a few starting in June 2023. We should revisit anything else when Samara is back and we can prioritize efforts and allocate resources.

## Opportunities by section of VA.gov
### My VA / Profile
#### Add items to profile that people have a hard time finding on the site
- We’ve received requests from other teams to add dependents in the past, and learned in research that people have a hard time finding this information.
- Records is another part of the site that is a mixed bag, and there are a few items that may make sense to link in the auth experienced: benefit letters, Veteran ID card, and claim letters.  

In June 2023, our team will start discovery work to begin the process of adding these to profile. ([Dependents epic](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/gh/department-of-veterans-affairs/va.gov-team/59198), [records epic](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/gh/department-of-veterans-affairs/va.gov-team/59200))

---

### Site header and global navigation
#### Make My VA the logged in homepage.
This isn’t something we’re going to move forward with for now. My VA isn’t ready to be the logged-in homepage today, and there is hesitation around removing access to the non-task content featured on the new homepage, such as the promo spot (currently PACT act) and VA News. 

##### Outstanding questions
- What non-task content is important for Veterans to have access to in a logged-in state?
- What would we need to change about My VA to make it ready to be the logged-in homepage?

#### Change the main navigation elements when people are logged-in.
We’re holding off on changing the navigation since the VA is piloting a new header for OMB and there are a lot of unknowns there.  Some ideas we talked about that we could explore when we’re ready are:
- Having a completely different nav for auth auth experience ([concepts](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684266228888/70e80eb031b0215679917698dc3abfcd74c76e03?wid=0-1684366332528))
- Adding My VA or personalized info to the mega menus

#### Updating “manage” URLs in the mega menu to point directly to tools, instead of the static pages.
This hasn’t been discussed previously with regard to site IA, but it’s worth considering. 
##### Considerations
- This relies on Drupal being smart enough to know when people are logged in
- We don’t have IA engineering resources to do this; currently falls under Public Websites

#### Updating the personalized menu
We (Chante, Mikki, Kristin, Liz) haven’t discussed this one yet. Updating the menu likely needs to consider the duplicative global nav items, and we need to hold off on changes to that while the site header updates are under way.  Our research didn't yield any insights related to changes we need to make, other than addressing the redundancy of the menu.

##### Considerations
- We've got a notification center coming up that makes sense to consider when we think about updating this menu

##### Possible next step
- Look at analytics to see if numbers suggest adding high-traffic “manage” items to the personalized menu would be helpful
- Look at search to see if there are specific things related to personalization that could make sense to add there

---

### Homepage (new 2023 version)
The Public Websites team owns the homepage, even in a logged-in state, so we’ll need to work with them on any of these efforts.  Is it possible for the Authenticated Experience to have more agency over the logged-in homepage? That could help us ensure we’re enhancing the logged-in UX in a thoughtful and consistent way, as well as with resources and expediting work.

#### Dynamically change the homepage content when logged-in
We could:
- show My VA cards/content in a logged-in state.
- Change “Create account” CTA to something about “My VA”
- Dynamically change links when logged in to point directly to tools and personalized content instead of static pages.

We shared these ideas and [concepts](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684266228888/70e80eb031b0215679917698dc3abfcd74c76e03?wid=0-1684953724245) with Dave Conlon; he wants to watch analytics on the new homepage (Launched 6/1) before having any discussions around this.

##### Considerations
- **NEED TO CONFIRM** This relies on Drupal being smart enough to know when people are logged in
- We don’t have IA engineering resources to do this; currently falls under Public Websites
- We should look at analytics to see if people are going back to the new homepage once logged in
---

### Benefit hubs
We talked about ways to make static pages smarter by surfacing personalized information at the right time.

#### Showing personalized information we surface on My VA on static pages that link people to tools
There are static pages on the site that link to tools, with a call to action that says “View your [tool data]”.  Above the call to action, we could pull in the most recent information through a card, like we do on My VA.

[We started a brief on this](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization-enhancements/surfacing-personalized-content.md), but after reviewing with IA, we determined this isn’t an ideal approach because the sign-in CTAs that link to these static pages, should actually go to the tool instead.  Our effort is better placed in optimizing those flows ([read below](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization-enhancements/opportunities.md#optimize-static-page--sign-in--static-page--tool-flows)).

#### Showing content about My VA on static pages where it’s relevant
We have a “More Information” section at the bottom of many static pages. We could use these boxes as a way to highlight My VA and raise awareness about it.  Impact would likely be pretty low.	[Example](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684266228888/70e80eb031b0215679917698dc3abfcd74c76e03?wid=0-1685619334931)x	

#### Surfacing relevant personal information on static pages
There are static pages on the site that give us an opportunity to provide a “smarter” UX and reduce a user’s need to search for information. Some examples include:
- Pages that refer to personal information in the context of benefit eligibility, like the reference to having a disability rating on the[Voc Rehab How to Apply page](https://staging.va.gov/careers-employment/vocational-rehabilitation/how-to-apply/)
- Pages that talk about next steps, or a refer to benefit status, or link to a tool, like the [VA Process After You File Your Claim](https://staging.va.gov/disability/after-you-file-claim/) page in the disability hub 
	- Here is a [concept](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684266228888/70e80eb031b0215679917698dc3abfcd74c76e03?wid=0-1684266389459) that shows how we might be able to serve up the information a user is looking for (the most recent claim in this instance) and save them a step.
##### Considerations
- We need to identify the pieces of personal information we have available to us about a Veteran that might be helpful to surface 
- This will require a content/IA audit to identify the opportunities where it makes the most sense to serve up this information
- IA doesn’t have dedicated engineering support, and the content team is constantly swamped

#### Optimize static page > sign in > static page > tool flows 
There’s currently an inconsistent experience across static pages with sign in CTAs that link people to tools. Examples:
On these URLs, when a user signs in, they’re taken to the same page they were just on, see it for a flash (sometimes longer if the API is slow) and then are redirected to the tool page. 
- https://www.va.gov/claim-or-appeal-status/
- https://www.va.gov/housing-assistance/home-loans/check-coe-status/
On other pages, they’re taken to the same page, and shown a button/link to the tool instead of the sign in widget. That happens on these pages:
- https://www.va.gov/va-payment-history/
- va.gov/manage-va-debt/

Optimizing these flows would be create a more consistent and predictable experience in a logged-in state.

##### Considerations
- These sign-in CTAs are managed by various product teams who have priorities that probably don’t include fixing this flow. It’s probably worth considering and documenting what the value to the Veteran and/or VA is to do this work, to have a better chance of getting teams to fix this

##### Next steps
- The auth experience team will work on this, starting with a page the auth exp has purview over, like the direct deposit static page.

---

### Forms and applications

#### Confirmation page
At the end of a form flow, we could direct people to My VA when it makes sense ([concept](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684266228888/70e80eb031b0215679917698dc3abfcd74c76e03?wid=0-1684267557640)). 

We called out this opportunity as an initial step toward surfacing personalized information, but decided to hold off on that work due to the heavy dependency on other teams to execute, and lack of product support while Samara is out.

##### Consideration
For any of this work, we’d need to collaborate with product teams and have them prioritize this in their backlog.

##### Outstanding question
- Some of these forms already direct people to the relevant tool, which makes sense. Is it still worthwhile to talk about My VA so they know about it?

