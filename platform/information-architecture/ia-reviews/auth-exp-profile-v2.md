# IA Review and Recommendations

**Team:** VSA - Authenticated Experience

**Product/Featue:** Profile 2.0

**Background/Context:**

**Review Date:** 

**IA Review Issue:** 

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

**Approach** <Br>
- The profile page(s) will live behind authentication and URLs should be short and succinct, but still understandable (i.e. no abbreviations or shortened words)
- Each page of the profile will be represented as a separate page with a separate URL and breadcrumb. This help us to:
  - deep link into specific content within profile (i.e. direct link to direct deposit)
  - provide left navigation for users to navigate between sections of profile
  - represent the user's location within profile in the breadcrumb so they can easily go back to the initial page
- The contact information will be the default/initial page of profile

![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/6c747a78-4777-4d0a-a642-0f89582d4018)


Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Profile - Contact Information (default page) | www.va.gov/profile  | Home > Your profile  | 
Profile - Military Information | www.va.gov/profile/military-information | Home > Your profile > Military information | 
Profile - Direct Deposit Info | www.va.gov/profile/direct-deposit | Home > Your profile > Direct deposit information | 
Profile - Account Security | www.va.gov/profile/account-security | Home > Your profile > Account security | *Need to discuss scenario where breadcrumb and left nav are removed in prototype*
Profile - Connected Apps | www.va.gov/profile/connected-apps | Home > Your profile > Connected apps |


<hr>

### Navigation Changes and Entry and Exit Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Link to | Description
--- | --- | --- | ---
Must | Header | REMOVE LINK | --- | Remove the option from the drop list under the user's name. This URL needs to be redirected to the new profile page.  Redirect information is below
Must | [Direct deposit static page](https://www.va.gov/change-direct-deposit/) | www.va.gov/profile/direct-deposit | Once the user has signed in, he should be sent directly to the direct deposit page within profile. 


***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

Current URL | Redirect to new URL 
---| ---
https://www.va.gov/account/ | www.va.gov/profile


Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

<hr>
<hr>

### Meeting notes

**4/28/2020 - Connected accts mtg w/Danielle, Selina, Carey O, Matt S**
- getting rid of old connected accounts FAQ
- new FAQ and app directory should both be available to unauthenticated users, PW site to implement
- App directory likely not supported by Drupal due to images, 
- Plan to launch with Profile 2.0 work

**4/20/20 - Connected accts mtg w/Selina, Carey O, Matt S**
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


