# Problems with the authenticated experience on VA.gov

November 30, 2023<br />
Liz Lantz, Authenticated Experience

## Goals
This is an informal document to capture problems on VA.gov, once a user has logged into the website.  I identified these problems using my knowledge of user experience best practices, and by comparing the experience of completing tasks on VA.gov to other modern websites used by many people like Amazon.com, Epic’s My Chart, Blue Cross Blue Shield, and Bank of America.

The goal of this exercise was simply to identify these issues, so recommendations or solutions are not included in this document.

### Caveats
- Since accessibility reviews are baked into the majority of VA.gov features and tools, I didn’t include an accessibility audit as part of this work.
- This review was conducted on a laptop, so there are likely mobile-specific issues not captured here.

## Signing into the website
This isn’t new - we know this is a huge pain point for Veterans.
- Having multiple credentials to choose from is confusing.
- They sometimes fail, even when you have the correct user name and password.
- There’s a slight delay loading the VA logo in the header of the sign-in modal, which causes the buttons to jump around.  We frequently clicked the login.gov button instead of ID.me by mistake during this exercise, because of the buttons jumping around after they loaded.
- We got signed out with no warning, multiple times, while reviewing VA.gov for this exercise. Not only was this confusing, but it also caused some buggy behavior in a form flow.

## Finding your way around VA.gov
### There are essentially three “homepages” when you log into the website.
 They are va.gov, va.gov/my-health, and va.gov/my-va. A user may never see any of these pages during their session, depending on where they start on the website. 
- This creates an inconsistent experience for authenticated users.
- This makes it hard for people to get grounded in the website and establish a home base.
- The distinction between these pages, and the user profile, is murky and continues to become more so as work evolves on the MHV on VA.gov initiative.

### The main navigation leaves a lot to be desired once I’m signed in.
- The navigation stays almost exactly the same when you're logged in vs logged out. We know from multiple research studies that Veterans sign into the website in order to complete a task.  
  - That means a large portion of the navigation menu options are misaligned with a user’s goals once they’re signed in.  For example, there are 20 generic links in the “About VA” menu, which is prominently featured at the top of a logged-in user’s view of VA.gov (screenshot below)
  - It also means some prominent links produce errors for logged in users: if a person doesn’t have health care and they click on the My HealtheVet link in the header, they see a big warning on the page that says they don’t have access ([screenshot](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1701044250903/5b3495239169c934c4fbf620eb50178b1952c97d?wid=0-1701170015402) in Mural board). Why are we putting this front and center in their navigation?
- Clicking on a websites logo to get back to the homepage is a common standard in websites today. Our logo goes back to the root of va.gov, which has generic, unpersonalized content that isn’t very helpful to an authenticated user.
- The authenticated menu is sparse, yet at the same time duplicates other prominent links in the header.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/auth-exp-problems/about-va-mega-menu.png" width="50%" />

*Screenshot above shows About VA mega menu, desktop view*

### The website uses common navigation tools inconsistently, which adds to the cognitive load of getting around the website.
- There are 3 different types of sub-navigation on the site. Benefit hubs, VAMC detail pages, and the profile all have different, which behave and look different on desktop and mobile (screenshot below).  
- The use of breadcrumbs is not consistent across the site. This means I have to rely on different ways to get around, and re-learn this as I move throughout the site ([examples on Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1701044250903/5b3495239169c934c4fbf620eb50178b1952c97d?wid=0-1701135909073)).
- This is applies to the unauthenticated experience as well.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/auth-exp-problems/sub-nav-varieties.png" width="50%" />

*Screenshot above shows 3 different approaches to sub-navigation on different types of VA.gov pages, desktop view*

### Links don’t always behave the same way across the website.
This is problematic because it creates a feeling of uncertainty about what will happen when a link is clicked. I’ve observed Veterans avoid navigation entirely or clicking any ambiguous links on the site because they’re not sure what will happen and they’re concerned about getting signed out by accident.
- There are links all over the website that take a person away from va.gov, usually without any hint that it’s about to happen. This causes Veterans to conflate VA websites. A few examples are:
  - Search results
  - Links to health tools on the MHV landing page and My VA
  - Links in the benefit hubs. One example is the link to “Search historical military records” in the sub-navigation on pages in the Records hub.
- Some links open new tabs on the same website, for example links at the bottom of the letters in the Download Letters tool.
- Some links look like buttons instead of links.
- Both of these are true in the unauthenticated experience as well.

## Learning about, applying for, and managing benefits

### The amount of content on the website, combined with the absence of personalization, makes it really difficult to understand what information applies to me.
- There is almost nothing on the website tailored to a person who is logged in based on what we know about them.
  - Exceptions to this are the content on My VA, and the prompt to complete an application in progress at the start of a form flow.
  - Some search results have a “top recommendations for you” that isn’t actually based on the logged in person at all.
- There is a huge amount of potentially irrelevant content to wade through after you've logged in. 
- Even when you know where you want to go, you often have to go through generic content to get there. For example, some links to tools in the mega menu take a person through a content page; others go right to the tool.
- There are many places on the site that talk about eligibility based on having disability rating. When a person is logged in we know if they have one or not - why not update the content to reflect that?
- I have to work to find the VAMCs I’m affiliated with or that are close to my home,  even though both pieces of info are known to VA.gov when I’m logged in.
- The amount of content on many pages pushes the most important information way down. For example, on the Claim Status Tool, the desktop view displays claim information “below the fold” on a standard size laptop monitor. 

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/auth-exp-problems/cst-above-fold.png" width="50%" />

*Screenshot above the initial desktop view of the Claim Status Tool, where no claim statuses display in the viewport.*

  
### Filling out applications on the website is buggy and inconsistent
- Some forms allow you to complete the from an unauthenticated state, and others don’t. That means these problems exist for both types of users
- I encountered multiple inconsistencies and bugs with pre-fill on the various forms I checked out:
  - My form application pre-fills some data from my profile initially, but doesn't reflect updates I make to my profile after a draft application is saved.
  - Benefit applications only pre-fill *some* of the data I have in my profile. The 22-1995 pulled in my address but not my mobile number, even though both were on file. 
  - The 526ez pre-filled my country incorrectly from my profile.
- An LOA3 user can fill out applications for Veteran benefits even if there are no military records found for that person, which isn’t helpful for VA or that person.  
- Some applications that pre-fill from profile data advise the user that changes made to their data in the application won't get updated in their profile. Others do not offer this info, even though they're pulling info from the profile in the same way.
  - The info about not saving to the profile is lost on the page among all the other content.

### We don't do a good job of telling people what to next once they've applied.
- Some forms have a button, others have a link, that says "Go back to VA.gov" at the bottom of their confirmation page. They're already on VA.gov. And a link shouldn't look like a button.
- There's no personalized calls to action to help people figure out what else might be useful for them to do.

### Lots of errors are encountered as a person tries to access tools.
- There were many times on the staging site that an error message showed in place of a tool, either because the logged-in user didn’t have a relevant benefit, or because the tool wasn’t loading properly.
- Other times, the tools did load, but took a significant amount of time, even with a fast internet connection

### On my next visit, there’s no way for me to easily get back to the information I worked hard to find.
- We don’t show recent searches.
- We don’t surface recently visited pages.
- We don’t give users a way to save facilities or important content pages.
## Personalization and account management
### There’s not a clear personalized home base for people who are signed in.
- Information about the user is reflected back to them in 3 key places on the site: My VA, the profile, and the MHV on VA.gov landing page. The lack of distinction between the 3 muddies the logged in experience.
- I’ve heard in research sessions that the duplicate links and content on the MHV on VA.gov landing page and My VA leaves people unsure about where they’re “supposed” to go. It feels like the two pages are in competition with each other.

### There’s very little to signal that the site knows who I am or that I’m signed in.
- The “true” homepage content isn't personalized at all. Nothing on the page changes once signed in, other than the call to action to create an account disappears.
- Some pages still talk about signing in, even though you’re already signed in. One example is the VA Payment History tool.
- The lack of personalization makes it hard to understand what information actually applies to the logged-in user ([details above](#the-amount-of-content-on-the-website-combined-with-the-absence-of-personalization-makes-it-really-difficult-to-understand-what-information-applies-to-me)).
- We display calls to action about downloading the mobile app when when know someone is logged-in on a desktop site and can’t take action.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/auth-exp-problems/mobile-cta-on-desktop.png" width="50%" />

*Screenshot above shows a call to action to download a mobile app on a desktop device.*

### The site surfaces no notifications or alerts to inform me about time-sensitive things that pertain only to me.
- If I have benefits that require an annual review or update of information, there’s nothing on the site to help me remember to do that.
- If there’s something important that I need to know about related to my benefits (message from my doctor, update in my claim status), I have to learn and remember the specific location to look on the website to see that information for every single benefit I have.

### The website shows me information about myself that I can’t act on online.
- In the profile, there are multiple pieces of information you have to call or update in person (legal name, DOB, and personal health care contacts are coming soon).
- There are places throughout the site where we reference things that you have to access some way other than VA.gov, such as the DD214.

### I can't easily switch between accounts.
- Many Veterans have multiple sets of benefits to manage either because they are a caregiver, have dependents, or are a health delegate. There’s no way to toggle between accounts.
- We know from conversations with Veterans that this leads to people sharing account information and logging in on their behalf.

## Visual, interaction, and content design
### The overall look of authenticated tools on the site is fairly bland with a lot of empty white space and boxes. 
- As you move throughout the site, it because hard to easily distinguish things from page to page because everything looks so similar.
- We have a common pattern of stacking content on desktop . This pushes important content further down the page than is probably necessary.

### There are choppy and disorienting transitions throughout the site.
- VA.gov has lots of redirects. They can be disorienting, especially when you see flashes of other pages along the way. This is true in the unauthenticated experience as well.
- If you're going through a form flow where the page lengths are different, the browser scroll position doesn't change. Sometimes this means you lose the context of the page and the footer takes up most of the viewport (video below). This is true in the unauthenticated experience as well.
### There are inconsistent behaviors when moving from page to page on the site.
- If you try to leave a form with unsaved changes, the site asks you if you want to leave in different ways. Sometimes there’s a custom VA.gov modal and other times there's a browser pop up.  The modals have different button labels and headings.
- Transitioning between pages within a tool isn't always the same. For example, in the claim status tool, some "view detail" links feel like they're jumping you to the top of the same page even though a new URL loads, and others feel like a whole new page is loading.  

### We have visual inconsistencies in how the same type of information is displayed on the site.
- There are at least 6 different ways lists of links are presented on the site ([examples on Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1701044250903/5b3495239169c934c4fbf620eb50178b1952c97d?wid=0-1701113640090)). Some, but not all are [documented in the design system.](https://design.va.gov/components/link/collection).
- Status is communicated differently in cards throughout the site. 
  - The status of benefit application drafts on cards and warnings is communicated differently, and it’s also different than the status of claims is displayed in cards.
  - In the claim status tool, status are displayed differently within the same page (screenshot below).
  - It’s possible status is communicated in another way for health tools; they seemed to be down each time I tried to check with a staging user.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/auth-exp-problems/claim-status-discrepancy.png" width="50%" />

*Screenshot above shows two stacked cards displaying status in different ways in the same tool.*

## Potential next steps
1. Noodle on this list and determine how we want to proceed as a team.
2. Even though accessibility reviews are baked into the VA.gov development process, there are likely many accessibility problems left to discover.  We could conduct a dedicated review as a separate task, or review open [GitHub tickets with the ￼`accessibility`￼ label](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aopen+is%3Aissue+label%3Aaccessibility+) to understand known issues.
3. For an even deeper dive, we could conduct the same, or a pared down version, of this review on a mobile device, as there are likely problems specific to mobile that weren't identified here.
