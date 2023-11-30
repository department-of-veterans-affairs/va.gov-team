# Problems with the authenticated experience on VA.gov

November 30, 2023<br />
Liz Lantz, Authenticated Experience

This is an informal document to capture problems on VA.gov, once a user has logged into the website.  I identified these problems using my knowledge of user experience best practices, and by comparing the experience of completing tasks on VA.gov to other modern websites used by many people like Amazon.com, Epic’s My Chart, Blue Cross Blue Shield, and Bank of America.

The goal of this exercise was simply to identify these issues, so recommendations or solutions are not included in this document.

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

TK: screenshot of About VA menu

### The website uses common navigation tools inconsistently, which adds to the cognitive load of getting around the website.
- There are 3 different types of sub-navigation on the site. Benefit hubs, VAMC detail pages, and the profile all have different, which behave and look different on desktop and mobile (screenshot below).  
- The use of breadcrumbs is not consistent across the site. This means I have to rely on different ways to get around, and re-learn this as I move throughout the site ([examples on Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1701044250903/5b3495239169c934c4fbf620eb50178b1952c97d?wid=0-1701135909073)).
- This is applies to the unauthenticated experience as well.

TK: screenshot of different sub-navigation

### Links don’t always behave the same way on the website.
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

  TK: screenshot of CST
### Filling out forms on the website is buggy and inconsistent
- Some forms allow you to complete the from an unauthenticated state, and others don’t. That means these problems exist for both types of users
- I encountered multiple inconsistencies and bugs with pre-fill on the various forms I checked out:
  - My form application pre-fills some data from my profile initially, but doesn't reflect updates I make to my profile after a draft application is saved.
  - Benefit applications only pre-fill *some* of the data I have in my profile. The 22-1995 pulled in my address but not my mobile number, even though both were on file. 
  - The 526ez pre-filled my country incorrectly from my profile.
- An LOA3 user can fill out applications for Veteran benefits even if there are no military records found for that person, which isn’t helpful for VA or that person.  
- Some applications that pre-fill from profile data advise the user that changes made to their data in the application won't get updated in their profile. Others do not offer this info, even though they're pulling info from the profile in the same way.
  - The info about not saving to the profile is lost on the page among all the other content.

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
## Visual, interaction, and content design
