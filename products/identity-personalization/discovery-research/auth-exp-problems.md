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
 They are va.gov, va.gov/my-health, and va.gov/my-va. A user may never see any of these pages during their session, depending on where they start on the website. This makes it hard for people to get grounded in the website and establish a home base.

### The main navigation leaves a lot to be desired once I’m signed in.
- **The navigation stays almost exactly the same when you're logged in vs logged out.** We know from multiple research studies that Veterans sign into the website in order to complete a task.  
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
- Both of these are true in the unauthenticated experience as well.

## Learning about and applying for benefits


### Filling out forms on the website is buggy and inconsistent

## Understanding and managing benefits once you’ve applied

## Personalization and account management

## Visual, interaction, and content design
