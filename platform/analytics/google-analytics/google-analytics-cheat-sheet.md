## Google Analytics Cheat Sheet

Overview: This document's purpose is to serve as a quick reference for commonly used Google Analytics metrics/dimensions and their definitions. 


| Metric | Definition | Example(s) 
| -------------- | --------- | --------- |
Pageviews | Total number of pageviews (includes duplicates) | _Ex1_: Veteran A visits page A 3 times during their visit and page B 2 times during their visit. <br> - **Page A = 3 pageviews** <br> - **Page B = 2 pageviews**
Unique Pageviews | The number of sessions where the specific page was viewed at least once (excludes duplicates) | _Ex1_: Veteran A visits page A 3 times during their visit and page B 2 times during their visit. <br> - **Page A = 1 unique pageview** <br> - **Page B = 1 unique pageviews**
Sessions | Total number of visits. Sessions records each time someone has started/ended a visit to the site. <br><br> _30 minutes of inactivity will also cause a session to record_| _Ex1:_ A veteran visits the site, looks at a few pages, closes the site. The veteran takes a lunch break and retuns to the site again after their lunch break. <br> **Sessions = 2** <br> _Ex2_: A veteran visits the site, has been inactive for 30 minutes while keeping the site open, comes back at minute <br> **Session = 2** 
Users | The total number of users for the requested time period. | _Ex1_: Veteran A who has been to the site before from the same browser visits the site. Veteran B visits who has never been to the site. <br> **Users = 2**
New Users | The number of sessions marked as a user's first-time visit (or hasn't been to the site in the last 2 yers). | _Ex1_: Veteran A who has been to the site before from the same browser visits the site. Veteran B visits who has never been to the site. <br> **New Users = 1**
Returning Users | The number of sessions marked where the user has been to the site before within the last 2 years | _Ex1_: Veteran A visited the site a week prior <br> **Returning Users = 1**
Total Events | Total number of times the interaction was done (includes duplicates, ignores user) | _Ex1_: Veteran A clicks on track claims button, goes to the claims page, circles back and clicks track claims again <br> **Total Events = 2**
Unique Events | Number of sessions where the event occurred (excludes duplicates) | _Ex1_: Veteran A clicks on track claims button, goes to the claims page, circles back and clicks track claims again. <br> **Unique Events = 1**  
Entrances | Number of times the specific page was the first viewed in the session | _Ex1_: Veteran A, B + C click on a VEText that lands them directly on a Page Z. <br> **Page Z Entrances = 3**
Bounce Rate | The percentage of times where a visitor does not engage (_most commonly clicks_) with the page (or site) before departing | _Ex1_ Veteran A clicks on a Facebook post that lands him on Page Z of the site. Veteran A does not do anything while on Page Z before closing his browser. Veteran B clicks on a Facebook post that lands him on Page Z and he clicks on a call-to-action <br> **Page Z Bounce Rate = 50%** (Veteran A bounce + Veteran B non-bounce)

### Traffic Source Dimensions
| Dimension | Definition | Example(s) 
| -------------- | --------- | --------- |
Source | _Where_ the traffic has come from coming from. Commonly grouped with medium, source is designed to be slightly more specific than medium. | _Ex1_: Veteran A clicks on a link within a newsletter that takes him to a specific page of VA.gov. The URL Vet A clicked on in the newsletter is `utm_source=Newsletter`: <br> Medium = referral<br> **Source = Newsletter** <br><br>_Ex2_: Veteran A types va.gov directly into their browser URL bar and lands on the site. <br> **Source = Direct** 
Medium | _How_ the traffic got there <br> Commonly interpreted as the "more general" category of source. | _Ex1_: Veteran A clicks on a VEText that takes them directly to a page on VA.gov. The URL  of the VEText is `utm_medium=referral`: <br> **Medium = referral** <br><br> _Ex2_: Veteran A types va.gov directly into their browser URL bar and lands on the site. <br> **Medium = (none)** <br><br> _Ex3_: Veteran A clicks on a link within an emailed newsletter that lands them on VA.gov with `utm_medium=Email` in the URL  <br> **Medium = Email**
Campaign | The marketing campaign being executed to drive users to the site. | _Ex1_: Veteran A clicks on a newsletter link that sends him to a site on VA.gov with `utm_campaign=may-covid19`. <br> **Campaign = may-covid19**
Landing Page | Page where the user began their session, where they entered the site. | _Ex1_: Veteran A clicks on a newsletter link that lands them on the COVID 19 FAQ page. <br><br> **Landing Page = /coronavirus-frequently-asked-questions**

