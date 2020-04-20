# IA Review and Recommendations

**Team:** VSA - Authenticated Experience

**Product/Featue:** Profile 2.0

**Background/Context:**

**Review Date:** 

**IA Review Issue:** 

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *



### Navigation/Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*



### Redirects/Canonical <br>
*Identify if any redirect or canonical tags are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

For redirects, please submit a Redirect Request at least 2 weeks in advance per the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).


### Additional Notes/Recommendations


<hr>
<hr>

### Meeting notes

**4/20/20 - Content mtg with Public Websites**
- Some FAQ content is not veteran facing
- primary entry point is from the profile page, but doesn't necessarily mean that users HAVE to be logged in to see the content
- Content currently has some developer content in it, which has been recommended to be removed

**3/31/20 - Pre-usability testing collab - FAQ and Apps list pages**
- "Find apps to use" / "App directory" - land on title, need consistent between title and breadcrumb
- What is the relationship between the FAQ and app directory pages? They link to each other
- What will drive traffic to each page?  from profile
- Do users need to be logged in to access content? could be use case to be available outside authentication, but primary driver of traffic will be through profile
- IA feedback documented: https://github.com/department-of-veterans-affairs/va.gov-team/issues/7570

**3/24/20 - Pre-usability Testing Collab**
- discussed the left nav and breadcrumb and need for individual pages for each nav item to support deep linking and improve navigation usability on mobile
- Connected apps - 3rd party app user experience does the informing and connecting, the profile just provides the ability to view what is connected and allow users to disconnect it
- old connected accounts faq page content has been incorporated into the new page and likely will not be used. 
- IA feedback documented: https://github.com/department-of-veterans-affairs/va.gov-team/issues/7140

**1/28/20 - Early feedback provided**
- From an IA perspective, there are no issues with the tabs vs a left nav design for navigating different sections of the profile.  If a tabbed version is used and there's a concern that the number of tabs may exceed the width of the screen, I would review how the content within profile is organzied and challenge design to reduce the number of sections/groupings. 
- A card sort activity could be helpful in determining the tabs/groups, what goes in them and labeling
- Be sure tab labels, although shortened, still have enough information scent for users to understand what they would find in the section
- Ensure we have the ability to link directly to profile with a specific tab defaulted to open (by way of parameters or separate URL) - i.e. a user may go from the unauthenticated static page for direct deposit and be dropped directly into that tab in the profile.  This experience should be tested as well to ensure its not disorienting to users and they understand where they were taken. 
- Breadcrumbs are currently based on page hierarchy, so unless you are going to a different page, the current page breadcrumb label does not change. In other words, the breadcrumb will always say "Home > Profile". If user testing shows users want to use the breadcrumb to navigate to the default Profile view, we can/should revisit this.   


