# Personalization 2.0 Discovery: Comparative Analysis

## Goals & Takeaways

This comparative analysis aimed to observe the following:

### How can a site effectively change the homepage from a logged out --> logged in state?

- Amazon's logged out and logged in homepages are different — the logged in homepage customizes the design and parts of the navigation based on what Amazon knows about the user. However, the logged out and logged in states are similar in design and structure, which makes the change from logged out to logged in state feel natural and not disorienting.

**Takeaway**: Personalizing a logged in homepage can feel natural if the logged out and logged in experiences are styled similiarly and share patterns and elements of the navigation.

### When does it make sense to have a separate manage account/dashboard from the homepage?

- Amazon has a logged in homepage as well as a robust Your Account dashboard. This is effective because the focuses o the homepage and Your Account dashboard are completely different — the homepage surfaces new features and products you may be interested in, and the Your Account dashboard is strictly about managing all-things account.
- The Blue Cross Blue Shield site keeps the logged out homepage the same and has a separate, personalized logged in dashboard. This is useful to people because users are routed there when they are logged in, and because the content and focus on the dashboard is much different than what's on the logged out homepage. Also, the logged out homepage is still accessible in the navigation should users need it.

**Takeaway**: It is effective to have a logged in dashboard that is separate from the homepage when the purposes of each page is different and clear.

### When makes for an effective dashboard?

An effective dashboard has a clear purpose. For data-driven sites, a dashboard might have a lot of data analysis communicated through charts and graphs. But for sites that are more task oriented, and effective dashboard becomes a router. It needs to give an overview, a lay of the land so users can navigate their journey.

- Amazon, BCBS, Microsoft, and My USCIS all use tiles on their dashboards to highlight primary actions on its logged in homepage. Additionally, BCBS bubbles up some data, but sparingly — only the (presumably) most important pieces of information.

**Takeaway**: Dashboards don't necessarily need to bubble up information like we're doing now. They can simply be well-designed routers. If they do elevate information, this should be done sparingly.

### What are additional patterns we haven't considered?

- BCBS has a notifications menu in its navigation. Navigations are shown under a bell icon, and there is no separate page that lists all notifications. These notifications just take you where you need to go. 
- Google doesn't have a singular dashboard. Instead, they use an accessible megamenu that is in the navigation of each of their properties. This megamenu provides links to all of their tool so people can navigate through the Google universe easily.

**Takeaway**: We may want to explore a personalized megamenu, in-context notifications, and/or a notification center that lets people know about updates (and then routes them to more information).

### How do sites that have many setting options make them manageable and easy to navigate?

- Github Settings section clearly organizes a super robust set of controls into sections via a left nav.

**Takeaway**: We can use the left nav pattern we have on VA.gov as part of profile/settings/my stuff.

### What kind of terminology is used (eg. profile, account, settings, my stuff, etc)?

- Profile, [My/Your] Account, Settings, and My Info are all terms used.
- Profile and Account sometimes are synonymous.
- Icons are also used instead of relying on verbal labels.

**Takeaway**: See what terms people use in the card sort. Otherwise, just make sure distinctions are meaningful.

## Site examples

### Amazon

- Amazon's logged out and logged in homepages are similar in structure and style, but the logged in homepage personalizes content based on what Amazon knows about you. Both the logged out and logged in homepage have a carousel hero area with additional featured content. Some of the ads in the carousel are the same between the logged in and logged out experiences, but some of the prompts are customized in the logged in experience. Keeping this logged in and logged out hero area similar in style helps to make the user feel grounded when they switch from a logged out to a logged in state.
- Beyond that, the logged out and logged in homepages have entirely different content below the hero area. The styling is similar, but there is no other duplicate content.
- Additionally, Amazon's logged in navigations changes significantly from the logged in nav. In both, the primary menus and actions in the right-hand side of the navigation stay the same, which help ground the user. However, the links under the search bar are entirely different between the logged out and logged in experiences.

*Logged out homepage*
![Amazon logged out homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/Amazon%20nav%20logged%20out.png)

*Logged in homepage*
![Amazon logged in homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/Amazon%20nav%20logged%20in.png)

- Once logged in, there is a robust megamenu that allows users to manage their account. Though the list of links are long, they are organized in a navigable way.

![Amazon account megamenu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/Amazon%20Account%20Megamenu.png)

- If you go to the Account page, you are taken to a dashboard that is completely action oriented. The primary actions are set  apart as tile-like buttons at the top of the page. Additional actions are grouped into categories and shown in tiles below the primary actions.
- Note that there is no "profile" or singular "settings." All of this falls into the category of managing your account.
- Notice that information about each category is not bubbled up on this dashboard. The primary purpose of this page is to route people to where they need to go and not to serve as a singular destination.

![Amazon account dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/Amazon%20account%20page.png)

### Blue Cross Blue Shield — FEP Blue

- BCBS has a separate logged out homepage and website for the federal health insurance plan and a separate, personalized portal once someone logs in. When someone is logged in, they can click the fepblue.org link in the navigation to get back to the unauthenticated version of the website.

*Logged out homepage*
![BCBS logged out homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/BCBS%20Logged%20out%20homepage.png)

*Logged in homepage*
![BCBS logged in homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/BCBS%20Logged%20in%20homepage.png)

- The authenticated BCBS portal has an account menu in the upper right of the navigation that is separate from the other controls found on the dashboard.

![BCBS account menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/BCBS%20Account%20menu.png)

- Navigations are shown under the bell icon. There is no notification landing page where you can see historical notifications, and it is unclear from the frontend how long notifications stick around. 

![BCBS notification menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/BCBS%20notifications.png)

- There is, however, a super robust notification and messaging preference center which organizes its many settings via a left nav.

![BCBS notification preferences](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/BCBS%20notification%20center.png)

- The dashboard is organized by common actions --> plan and care overview info --> suggested content. With the exception of the super high-level plan and care overview, the dashboard links to pages with more information instead of surfacing prescriptions, claims, or notification updates right on the page.

![BCBS dashboard actions and overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/BCBS%20dashboard%20actions%20and%20overview.png)

![BCBS dashboard "suggested for you"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/BCBS-dashboard-suggested-for-you.png)


### Github

- Github has a personalized menu in the navigation that remains regardless of what repo you're in. This menu takes you to your profile and settings.

![Github account menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/Github%20account%20menu.png)

- The profile page is very dashboard-like. I didn't find this page terribly useful, but I imagine it's much more robust and useful for developers who are following repos and commiting code on Github.

![Github profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/Github%20profile.png)

- Github's Settings section is great. There are a lot of setting categories, but they are clearly organized in a left nav. Note that Settings encompass Account, Notifications, and any other preferences. We may want to use the word "settings" instead of prepending it with "account" to allow it to cover more information.

![Github settings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/Github%20settings.png)

### Google

- Google keeps a menu icon and an account icon in the upper right corner of all of its web properties, regardless of whether you are on on GMail, Google Docs, Google Search, etc., so people always have easy access to all of their tools and to their login/logout/acocunt information.

![Google tools menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/Google%20tools%20menu.png)
![Google account menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/Google%20account%20menu.png)

### Microsoft

- Via [this list of dashboard examples](https://baymard.com/ecommerce-design-examples/58-account-dashboard/4103-microsoft).
- This dashboard organizes to-dos by tiles and utilizes iconography, making this menu easy to scan and fun to look at. We should remember that veterans are action oriented and the main priority is to route them effectively.
- I also like the blue profile block at the top of the page, which balances personal information and additional actions someone might want to take.

![Microsoft dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/Microsoft%20dashboard.png)

### My USCIS

- After login, you are directed to the logged in account homepage, but you can still get to the logged out homepage by clicking the logo. Honestly, this didn't feel that intuitive to me **because** there was nothing in the main nav to indicate that the logged out homepage persisted in any way. Also, there was nothing to indicate the logged in account page was a different page. This could have been clarified if there was a highlighted **Your Account** link in the main navigation in the logged in state.

*Logged out homepage*
![My USCIS logged out homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/My%20USCIS%20logged%20out%20hompage.png)

*Logged in homepage*
![My USCIS logged in homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/My%20USCIS%20logged%20in%20hompage.png)

- Also, there are some confusing things that happen with the navigation menus:
  - In the logged out state, there is an Explore menu. This goes away in the logged in version, even though this resource is still accessible via the Resources menu in the logged in state. Given this, the Explore menu could have persisted through to the logged in state.
  
![My USCIS logged out Explore menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/My%20USCIS%20logged%20out%20Explore%20menu.png)
  
  - In both logged in and logged out states, there is a Resources menu, but it is styled differently in each version. Also, some of the links are different between versions. This would probably be less confusing if these menus were styled the same way in each version so differences *and* similiarities in links or sections were more apparent.

*Logged out Resources menu*
![My USCIS logged out Resources menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/My%20USCIS%20logged%20out%20Resources%20menu.png)

*Logged in Resources menu*
![My USCIS logged in Resources menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/My%20USCIS%20logged%20in%20Resources%20menu.png)  
  
  
- Pros about the My Account menu:
  - Has a generic "Settings" page, which is currently sparse but could grow over time without having to change the nomenclature since "Settings" isn't overly specific.
  - Has the main actions (I assume) people want to take.

![My USCIS My Account menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/Screenshots/My%20USCIS%20logged%20in%20My%20Account%20menu.png)  
