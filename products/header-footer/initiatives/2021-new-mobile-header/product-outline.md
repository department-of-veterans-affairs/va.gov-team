## New VA.gov Mobile Header

Since the launch of VA.gov in late 2018, the site has featured one responsive Global header element that was **not optimized for Mobile view.**  
As a result, for our growing base of Mobile users, issues with the current header include:

- It consumes too much space, pushing down the most important element on the page (based on usage): the top tasks links.
- Some of the exposed navigational elements cause user confusion -- e.g. the Crisis Line logo was mistaken for a hamburger menu on mobile per user research
- Too many chevrons in the top right corner with all acting differently, causing confusion

## The Problem to be Solved

**How might we make the Mobile version of VA.gov easier to scan and use, while preserving important links in an intuitive way?**

## Proposed Solution(s)


![image (4)](https://user-images.githubusercontent.com/63107147/126556098-9f79475a-4514-4b40-b033-38782bab2325.png)


## Hypothesis or Bet

**If** we implement a mobile optimized sitewide header **then** we will increase usage of Top Task links on the Home Page without significantly impacting discoverability/usage of Search from that navigational component.

Reference [VA.gov Mobile Header Initiative Briefing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/initiatives/2021-new-mobile-header/Initiative%20Briefing.md) for more details.  


## What We Know

- A snapshot of VA.gov click-through analytics and user research conducted in May 2021 indicates there is relatively modest engagement of the navigational elements in the global header by mobile users, **with the exception of the VA Benefits and Health Care menu item and to a lesser extent Search**.

<img width="1130" alt="Screen Shot 2021-07-23 at 8 45 53 AM" src="https://user-images.githubusercontent.com/63107147/126784095-b9009ffc-33d8-4436-bb6c-a51eee153b6e.png">

<img width="1247" alt="Screen Shot 2021-07-23 at 8 46 35 AM" src="https://user-images.githubusercontent.com/63107147/126784074-177cf028-54b1-4870-90a0-9276a85cd91e.png">

- For Search, year-to-date data shows about a 70/30 split between the search engagement on Desktop vs. Mobile (source: [DOMO Dashboard/Google Analytics](https://va-gov.domo.com/page/1964748112))

<img width="432" alt="Screen Shot 2021-07-23 at 9 01 34 AM" src="https://user-images.githubusercontent.com/63107147/126785444-4cc0286f-3782-470c-818b-fc9a00ec2b53.png">

<img width="348" alt="Screen Shot 2021-07-23 at 9 01 24 AM" src="https://user-images.githubusercontent.com/63107147/126785457-b457518b-6099-49c7-b6bd-940a6b1c7d82.png">

- A VA.gov customer service data snapshot from August 2021 shows an increase in Tier 1 calls related to navigation issues to include mobile sign-in issues along with header and footer info requests (user confusion)
![Screen Shot 2021-09-13 at 4 35 42 PM](https://user-images.githubusercontent.com/70410912/133165778-d994657a-62ae-49fb-808d-846a16a52102.png)


## Analytics: 2020-08-23 to 2021-08-23

## Total users by device category

[GA report](https://analytics.google.com/analytics/web/#/report/visitors-mobile-overview/a50123418w177519031p176188361/_u.date00=20200823&_u.date01=20210823)


<table>
  <tr>
   <td><strong>Device Category</strong>
   </td>
   <td><p style="text-align: right">
<strong>Users</strong></p>

   </td>
   <td><p style="text-align: right">
<strong>New Users</strong></p>

   </td>
   <td><p style="text-align: right">
<strong>Sessions</strong></p>

   </td>
  </tr>
  <tr>
   <td>desktop
   </td>
   <td><p style="text-align: right">
62,299,493</p>

   </td>
   <td><p style="text-align: right">
60,660,768</p>

   </td>
   <td><p style="text-align: right">
167,225,384</p>

   </td>
  </tr>
  <tr>
   <td>mobile
   </td>
   <td><p style="text-align: right">
46,514,817</p>

   </td>
   <td><p style="text-align: right">
45,562,890</p>

   </td>
   <td><p style="text-align: right">
125,214,357</p>

   </td>
  </tr>
  <tr>
   <td>tablet
   </td>
   <td><p style="text-align: right">
3,964,380</p>

   </td>
   <td><p style="text-align: right">
3,811,410</p>

   </td>
   <td><p style="text-align: right">
11,341,625</p>

   </td>
  </tr>
</table>



## Search (the little magnification icon)

We don't have direct tracking on the icon, but we can look at the _view_search_results_ events going back to December 2020.

[GA Custom Report template](https://analytics.google.com/analytics/web/template?uid=ralbK1-NQyuKxBUu7oiing)


<table>
  <tr>
   <td><strong><em>Device Category</em></strong>
   </td>
   <td><p style="text-align: right">
<strong><em>Users</em></strong></p>

   </td>
   <td><p style="text-align: right">
<strong><em>Percent  of Total</em></strong></p>

   </td>
  </tr>
  <tr>
   <td>desktop
   </td>
   <td><p style="text-align: right">
1,262,131</p>

   </td>
   <td><p style="text-align: right">
2.0259089%</p>

   </td>
  </tr>
  <tr>
   <td>mobile
   </td>
   <td><p style="text-align: right">
509,364</p>

   </td>
   <td><p style="text-align: right">
1.0950575%</p>

   </td>
  </tr>
  <tr>
   <td>tablet
   </td>
   <td><p style="text-align: right">
69,673</p>

   </td>
   <td><p style="text-align: right">
1.7574753%</p>

   </td>
  </tr>
</table>


If you want data before that, I can pull site search data.


## Menu

Unfortunately I see no tracking on the MENU button.


## Veteran Crisis Line

Event action = _Navigation - Crisis Modal Clicked - Header_

[GA Custom Report template](https://analytics.google.com/analytics/web/template?uid=zU1NWl2QRLiL_RVVtusQjQ)


<table>
  <tr>
   <td><strong><em>Device Category</em></strong>
   </td>
   <td><p style="text-align: right">
<strong><em>Users</em></strong></p>

   </td>
   <td><p style="text-align: right">
<strong><em>Percent of Total</em></strong></p>

   </td>
  </tr>
  <tr>
   <td><em>mobile</em>
   </td>
   <td><p style="text-align: right">
<em>128,076</em></p>

   </td>
   <td><p style="text-align: right">
<em>0.2753445%</em></p>

   </td>
  </tr>
  <tr>
   <td><em>desktop</em>
   </td>
   <td><p style="text-align: right">
<em>88,937</em></p>

   </td>
   <td><p style="text-align: right">
<em>1.4275558%</em></p>

   </td>
  </tr>
  <tr>
   <td><em>tablet</em>
   </td>
   <td><p style="text-align: right">
<em>7,709</em></p>

   </td>
   <td><p style="text-align: right">
<em>0.1944566%</em></p>

   </td>
  </tr>
</table>



## Contact us

Event action = _Navigation - Jumplink Click - Contact us_

[GA Custom Report template](https://analytics.google.com/analytics/web/template?uid=6262qu4cTC-inTH97ZUkAg)


<table>
  <tr>
   <td><strong>Device Category</strong>
   </td>
   <td><p style="text-align: right">
<strong>Users</strong></p>

   </td>
   <td><p style="text-align: right">
<strong>Percent of Total</strong></p>

   </td>
  </tr>
  <tr>
   <td>desktop
   </td>
   <td><p style="text-align: right">
332,050</p>

   </td>
   <td><p style="text-align: right">
0.5329899%</p>

   </td>
  </tr>
  <tr>
   <td>mobile
   </td>
   <td><p style="text-align: right">
205,467</p>

   </td>
   <td><p style="text-align: right">
0.4417238%</p>

   </td>
  </tr>
  <tr>
   <td>tablet
   </td>
   <td><p style="text-align: right">
14,230</p>

   </td>
   <td><p style="text-align: right">
0.3589464%</p>

   </td>
  </tr>
</table>



## Sign in

Event label = _login-link-clicked-header_

[GA Custom Report template](https://analytics.google.com/analytics/web/template?uid=Y7UHXbS0TPCDdKfcq4TgMA)


<table>
  <tr>
   <td><strong><em>Device Category</em></strong>
   </td>
   <td><p style="text-align: right">
<strong><em>Users</em></strong></p>

   </td>
   <td><p style="text-align: right">
<strong><em>Percent of Total</em></strong></p>

   </td>
  </tr>
  <tr>
   <td><em>desktop</em>
   </td>
   <td><p style="text-align: right">
<em>3,524,695</em></p>

   </td>
   <td><p style="text-align: right">
<em>5.6576624</em></p>

   </td>
  </tr>
  <tr>
   <td><em>mobile</em>
   </td>
   <td><p style="text-align: right">
<em>1,994,226</em></p>

   </td>
   <td><p style="text-align: right">
<em>4.2872919</em></p>

   </td>
  </tr>
  <tr>
   <td><em>tablet</em>
   </td>
   <td><p style="text-align: right">
<em>193,620</em></p>

   </td>
   <td><p style="text-align: right">
<em>4.8839919</em></p>

   </td>
  </tr>
</table>



## Back to home (VA logo/Home menu item in the current nav)

Unfortunately I see no tracking on the logo or HOME menu item.



## What Needs to Be Done

- [X] Need Analytics to determine baseline performance of the current header, including % of mobile users that click on:
      - Search (the little mganification icon) (8/3 - Ticket created for Analytics - https://github.com/department-of-veterans-affairs/va.gov-team/issues/28225)
      - Menu
      - Veteran Crisis Line
      - Contact us
      - Sign in
      - Back to home (VA logo/Home menu item in the current nav)
- [ ] Create a version of the proposed new Mobile-optimized header for a live, in-production "sample size" test of 1–5% via GA tracking
- [ ] Metrics that will determine "success" (e.g. same or higher usage of Search and Top Tasks), using the same tasks as listed above
- [ ] Created a Technical discovery ticket to review technical aspects/risks for implimentation - https://github.com/department-of-veterans-affairs/va.gov-team/issues/28288


*Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.*

## Relevant Links

[Design Sketch Files](https://www.sketch.com/s/63193c20-04fc-4d4f-8b54-abf698c48636/a/Vr8Zzrw) 


## Status 
Some questions to answer as we gain analytics insight and determine best path forward:

- Q: How are we planning to mitigate any organizational constraints/concerns that arise from minimizing or changing logos? Who needs to know?
- A: Ryan has been discussing with Chris. Dave C. to follow up and validate with applicable stakeholders.
- Q: The proposed changes to the unauth/auth states still have Health care as the only visible Top 4 Box (albeit not as pushed down). Given the Hypothesis, what impact are we actually hoping to see re:usage of Top Task links?
- A: Analytics/KPIs - this was my big focus as well. Two thoughts here:

We need specifics: What specifically are we trying to improve/keep the same
Baselines - we have a ticket open with analytics team that should be treated as a blocker to ensure we have enough data for comparison as related to Specifics.
Analytics comparison of Mobile to Desktop.
- What are the common tasks across each device that should be the same?
- What are the "top tasks" that lend themselves more to desktop (e.g. filling out a form)?
- What are those that lend themselves more to mobile?

Q: It sounds like we'd like to improve mobile search usage. But, the proposed changes have the Search CTA moving a level deeper. What impact do we expect that to have/not have?

## Technical Analysis 
- Review product outline and provide a technical analysis on implementation
  - Many of the changes in the product outline are cosmetic including:
    - Updating the "Official..." banner to consume less space
    - Removing the "crisis line" logo
    - Use a simplified version of the VA logo
    - Add th hamburger icon to the Menu button
    - Remove the Home page item in the menu"
    - "Contact us" moves to the bottom spot on the expanded menu
    - Wrap "Close menu" with the expanded menu
    - Authenticated user drop down menu moves to the top
  - All of these changes can be done by removing/updating assets and elements with minimal risk
  - Some changes will involve relocating existing components 
    - Sign in stays persistent in the header
    - Search is now usable in the expanded menu
    - Currently these are part of the [SearchHelpSignIn component](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/site-wide/user-nav/components/SearchHelpSignIn.jsx), but would need to be broken up into individual components so we can relocate the individual UI pieces
- Provide best recommendations for optimized UX/UI
  - Earlier comments mentioned building out 2-4 components 1 for each combination of Unauth/Auth + Desktop/Mobile, but it looks as though the distinction between unauth and auth at the component level is already done for us [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/site-wide/user-nav/components/SearchHelpSignIn.jsx#L36-L66), so we can mostly copy the [MegaMenu](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/site-wide/mega-menu/components/MegaMenu.jsx) to a `MobileMegaMenu` component that can be combined with the [MobileMenuButton](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/site-wide/mobile-menu-button/containers/Main.jsx)
  - We should consider moving the mobile mega menu out of `content-build` entirely and having it render by react so it can sit below the menu button within the dom, making it easier to have connect the background/border of the menu and button
- Include risks and ideas to mitigate risks for implementation
  - The biggest risk is in breaking functionality, especially anything tied to the redux state when we break out the components in the [SearchHelpSignIn component](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/site-wide/user-nav/components/SearchHelpSignIn.jsx), but we can mitigate this risk with E2E testing
- Add questions for PO/PM/Lead Designer for follow up and determination during future planning and grooming sessions
  - None at this time

*Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.*

## How to configure this issue
- [ ] **Labeled with Team** (`product support`, `analytics-insights`, `operations`, `Console-Services`, `tools-fe`,`content-ia`, `service-design`, `vsa-*`)
- [ ] **Labeled with Practice Area** (`backend`, `frontend`, `devops`, `design`, `research`, `product`, `ia`, `qa`, `analytics`, `contact center`, `research`, `accessibility`, `content`)
