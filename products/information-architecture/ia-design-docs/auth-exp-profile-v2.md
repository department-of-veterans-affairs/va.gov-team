# IA Review and Recommendations

**STATUS: COMPLETE**

**Team:** VSA - Authenticated Experience

**Product/Featue:** Profile 2.0

**Background/Context:** Consolidation of the existing Account and Profile pages into 1 profile page and corresponding redesign. 

**IA Request:** https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/9670

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

**Approach** <Br>
- The profile page(s) will live behind authentication
- URLs do not need to be SEO optimized, and can be a bit shorter and less descriptive but should still be readable and understandable - no abbreviations or shortened words
- Each page of the profile will be represented as a separate page with a separate URL and breadcrumb. This help us to:
  - deep link into specific content within profile (i.e. direct link to direct deposit)
  - provide left navigation for users to navigate between sections of profile
  - represent the user's location within profile in the breadcrumb so they can easily go back to the initial page
- The top level /profile page will be a pass through page, users will always be sent to the contact information page as the default/initial page

![image](https://user-images.githubusercontent.com/20994159/89221329-b8c6c100-d598-11ea-8b88-dc03fe981234.png)

**User Flows** <br>
- If an unauthenticated users attempts to directly access any page within the /profile tree, they will initially be sent through the sign in process
- Once a user is authenticated, if they have not verified their account, they will be taken to the /profile/account-security page, they will not be able to access any other profile features/pages until they verify their account
- Once a user is authenticated and their account is verified, they will be taken to the originally requested page

![image](https://user-images.githubusercontent.com/20994159/85774448-79c56600-b6e4-11ea-950c-fcf81eabf08f.png)


**Page Structure** <br>

Page | URL | Breadcrumb | Page Requirements/Notes
--- | --- | --- | ---
Profile | www.va.gov/profile  | n/a | This is a pass through page that user's can't access.  When clicking on a link to "your profile" users will be automatically routed to the contact information page as the default.  This page will not be accessible. 
Profile - Contact Information (default page) | www.va.gov/profile/contact-information  | Home > Your profile > Personal and contact information | This is the default page of Profile. 
Profile - Military Information | www.va.gov/profile/military-information | Home > Your profile > Military information | 
Profile - Direct Deposit Info | www.va.gov/profile/direct-deposit | Home > Your profile > Direct deposit information | 
Profile - Account Security | www.va.gov/profile/account-security | *Verified acct:* <Br> Home > Your profile > Account security <br> *Non-verified acct:* <br> Home > Your profile - Account security| Note that there are 2 variations of the breadcrumb for this page.  For users who have not verified their account, this is the only page in Profile they can access and the breadcrumb should remove their ability to click on the main "profile" option.  In this scenario, all other options should be hidden on the left nav as well. 
Profile - Connected Apps | www.va.gov/profile/connected-applications | Home > Your profile > Connected apps |


<hr>

### Navigation Changes and Entry and Exit Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Link to | Description
--- | --- | --- | ---
Must | Header | www.va.gov/profile  | Keep existing link
Must | Header | Account - REMOVE LINK | Remove the "Account" option from the drop list under the user's name. This URL will need to be redirected, see section below. 
Must | [Direct deposit static page](https://www.va.gov/change-direct-deposit/) | www.va.gov/profile/direct-deposit | Once the user has signed in, and verified their account (if applicable), they should be sent directly to the direct deposit page within profile. 
Should | [Change your address page](https://www.va.gov/change-address/) | www.va.gov/profile/personal-information | The link in step 3 should take the user straight to the personal-information page

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

**Will redirects be needed?**  YES 
- The existing Account URL should be redirected to the new Profile URL to ensure no users receive a 404 if they attempt to directly access the old Account page. 
- Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 

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


