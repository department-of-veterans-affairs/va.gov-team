## WIP — We'll do some kind of summary of this content

## Product Questions

We're broadly trying to figure out how to create a more useful logged in homepage, one that is the most useful blend of dashboard/personal information and links to tools. We want to do a better job than we are now of showing veterans the full picture of their care at the VA in one place, and a better job of helping them complete the tasks they come to VA.gov to complete.

To help us figure this out, we'd like to better understand:

- Why people come to VA.gov.
- What people do on VA.gov
- How people move through the site.
- How people use the homepage.
- How people use My VA.
- Areas for improvement for existing functionality.
- How people's experience with the site might change if we had a proper notification system.

## Analytics to Track Down

I'm pretty sure most, if not all, of these metrics are already tracked, but we don't know where or how to track them down ourselves. That's where we need your help.

We'd like to know the following:

**General**

- What are the top ~20  pages visited on VA.gov?
  - How does this change if we look at top pages for logged out users vs. logged in users?
- What are the top ~20 search terms on VA.gov? 
- Is there a pattern to where people are in the site when they decide to search?
- What are the top ~20 entry points for VA.gov?
- What are the top ~20 organic search terms people are using to get to VA.gov?
- After people enter the site, what is the next thing they do?
- % of traffic by device (desktop; tablet; mobile).

**Homepage**

- What page do people visit BEFORE the homepage?
- How often is the homepage people's first entry point?
- What do people do from the homepage? (ie. what links do they click?)
- How many people visit the homepage?

**My VA**

- What page do people visit BEFORE My VA?
- Is My VA ever a first entry point?
- What do people do from My VA? (ie. what links do they click?)
- How many people visit My VA? 

## Why do people come to the site? What do they do here?

### Overall, the claim status tool is the most popular tool on the website.

The **claim status tool (~60MM)** is our most popular tool. Other tools that made it into the top 25 include the **facility locator (~27MM)**, the **GI Bill statement of benefits (3.4MM)**, and the **download your VA letters tool (~2MM)**. People also wanted to **view payment history (~2.4MM)** and **refill their prescriptions (~1.7MM)** even though these tools do not exist on VA.gov.

On the modernized site, we only saw one health tool — refill prescriptions — in the top 25. This is likely because health care is primarily managed on MHV. We should review the non-modernized data to get a more full picture of the importance of health tools.

More unexpected: going by pageview, **My VA (~6.8MM)** is more popular than we would have expected. This may indicate an interest in seeing personalized benefit information.

[Top 25 pages — Overall](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&_.useg=builtin1/)

<details>
  <summary><b>Popular "tools" content: Modernized VA.gov from 4.12.2019 — 4.12.2020</b></summary>

| Page title | Page| Pageviews |
|-----|------|------|
| Claim status tool (logged out content page) | /claim\-or\-appeal\-status/index\.html | 26,328,147  |
| Facility locator (forward from old vets.gov URL)| /facilities/index\.html?XXX | 24,971,596  |
| Claim status tool (logged in)| /track\-claims/your\-claims/| 24,426,252  |
| Claim status tool | /track\-claims/index\.html | 10,342,922  |
| My VA | /my\-va/index\.html| 4,647,413   |
| Facility locator| /find\-locations/index\.html| 3,624,995   |
| Post-9/11 GI Bill Statement of Benefits content page| /education/gi\-bill/post\-9\-11/ch\-33\-benefit/| 3,369,881|
| View your VA payment history content page | /va\-payment\-history/index\.html  | 2,351,679   |
| My VA dashboard| /my\-va/| 2,168,777|
| Download VA benefit letters content page | /records/download\-va\-letters/index\.html| 1,965,634 |
| VA.gov profile | /profile/index\.html | 1,920,045   |
| VA Prescription Refill and Tracking content page| /health\-care/refill\-track\-prescriptions/index\.html| 1,726,433   |
| Post 9/11 GI Bill Statement of Benefits| /education/gi\-bill/post\-9\-11/ch\-33\-benefit/status/ | 1,704,997  |

</details>

### "Explore/Apply" content is the primary focus for logged out users. 

In terms of "explore/apply" content, **how to apply for GI Bill/education benefits (~2.8MM)**, **disability content (~4MM)**, and **veteran ID card content (~3.2MM)** made it onto the lists for top 25 pages overall and top 25 pages for logged in users.

- [Top 25 pages — Overall](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&_.useg=builtin1/)
- [Top 25 Pages - Logged In Session](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.useg=usersYzZ0EUDT4uJLecPmCwn3Q&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/)

<details>
  <summary><b>Popular "explore/apply" content: Modernized VA.gov from 4.12.2019 — 4.12.2020</b></summary>

| Page title | Page| Pageviews |
|-----|------|------|
| How to apply for the GI Bill and related benefits content page| /education/how\-to\-apply/index\.html| 2,836,891 |
| How to file a VA disability claim content page | /disability/how\-to\-file\-claim/index\.html| 2,583,794   |
| How to apply for a Veteran ID Card content page| /records/get\-veteran\-id\-cards/vic/index\.html | 1,734,573   |
| VA disability compensation hub page | /disability/index\.html| 1,669,521   |
| Types of Veteran ID cards content page | /records/get\-veteran\-id\-cards/index\.html| 1,621,850   |

</details>

It's worth noting that in the data we received back, logged out users primary focus was exploring benefits. When looking at the data from a logged-out only lens, we saw additional content hubs appear in the top 25.

- [Top 25 Pages - Not Logged In Sessions](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.useg=userBgZiUrK9Sieg7jBAnx44OQ&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/)

<details>
  <summary><b>Popular "explore/apply" logged out content: Modernized VA.gov from 4.12.2019 — 4.12.2020</b></summary>

| Page title   | Page  | Pageviews  |
|----------|-------|----|
| How to apply for the GI Bill and related benefits content page | /education/how\-to\-apply/index\.html| 1,599,227|
| How to file a VA disability claim content page| /disability/how\-to\-file\-claim/index\.html | 1,368,858  |
| GI Bill comparison tool | /gi\-bill\-comparison\-tool/  | 1,105,048  |
| VA disability compensation hub page| /disability/index\.html| 1,066,396  |
| How to apply for VA health care content page| /health\-care/how\-to\-apply/index\.html  | 1,030,906  |
| GI Bill comparison tool results | /gi\-bill\-comparison\-tool/index\.html | 979,965    |
| Request your military service records \(including DD214\) content page | /records/get\-military\-service\-records/index\.html| 969,554    |
| How to apply for a Veteran ID Card content page | /records/get\-veteran\-id\-cards/index\.html| 823,157|
| Careers and employment hub page | /careers\-employment/index\.html | 804,267|
| Health care hub landing page | /health\-care/index\.html | 786,269    |
| VIC application intro page | /records/get\-veteran\-id\-cards/vic/index\.html | 765,312    |
| Family member benefit hub page | /family\-member\-benefits/index\.html| 740,490 |
| Eligibility for VA health care content page | /health\-care/eligibility/index\.html | 722,121    |
| Coronavirus FAQ| /coronavirus\-veteran\-frequently\-asked\-questions/index\.html | 707,904    |

</details>

### Logged in users come to VA.gov to check the status of benefits or to get their records. Logged out users are more interested in exploring benefit eligibility and application information. 

Also, search is significantly more important for logged out users **(~4.3MM pageviews)** than logged in users **(~1.1MM pageviews)**.

- [Top 25 Pages - Logged In Session](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.useg=usersYzZ0EUDT4uJLecPmCwn3Q&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/)
- [Top 25 Pages - Not Logged In Sessions](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.useg=userBgZiUrK9Sieg7jBAnx44OQ&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/)

### People start on the homepage, the claim status tool, and the facility locator.

This data tells us the first page people land on when they come to the modernized VA.gov. This may reflect how people are being directed via search engine results or what pages people have bookmarked.

The **homepage (~25MM)** was the most popular by orders of magnitude, with the **claim status tool (~5.4MM)** and the **facility locator (~2MM)** rounding out the top 3. Other popular landing pages include many of the content pages we've already related as popular, namely content related to health care, disability, and education benefits.

[Top 25 landing pages](https://analytics.google.com/analytics/web/?authuser=0#/report/content-landing-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/)

### People are searching for general health and benefit information, forms, and some specific tasks we may want to do a better job of elevating.

- **"Benefits" (153,244)** and **"health" (58,827)** are the most searched terms. Given how generic these terms are, this may suggest that people are looking for more help and assistance from us on getting started with benefits.
- **"Forms" (24,197)** is also high on the list, which suggests people want a full list of VA forms.
- Benefits-related terms like **"direct deposit" (12,723)**, **"cemetery" (9,726)**, and **"certificate of eligibility" (8,154)** are high on the list, which suggests that we may need to elevate these tools more.
- **"DD214" (8,597)** is high on the list, further reflecting people's desire to get their military records.

[Top search terms](https://analytics.google.com/analytics/web/?authuser=0#/my-reports/17yMINMRQiCe6kcHdjC6tg/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200413&5592-table.plotKeys=%5B%5D&5592-table.rowStart=0&5592-table.rowCount=25/)

## How do people use the homepage?

### People come back to the homepage through the sign in flow, and then through many of the site's most popular pages.

People come to the homepage through the **sign in flow (~6MM combined through DS logon, MHV, and ID.me)** and many of the other popular pages on the site, including the **claim status tool (~2.4MM)**, **view payment history (455,233)**, and **refill and track prescriptions (361,060)**.

[Top 25 pages before the homepage](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.goalOption=ALL&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.previousPagePath&explorer-table.rowStart=0&explorer-table.rowCount=25&_r.drilldown=analytics.pagePath:~2Findex.html/)

### From the homepage, people primarily navigate into the tools displayed in the top 20 tasks. 

As expected, almost all of the top 25 interactions on the homepage take place in the top 20 tasks, with notable excpetions being the sign in prompt and some interaction with the main nav. In the top 20 tasks, **Check your claim or appeal status (~5MM)**, **View payment history (759,540)**, and **Refill and track your prescriptions (516,320)** had the most clicks.

This further shows the reliance on the top 20 tasks and suggests we should take extra care with how we handle these when creating a personalized logged-in homepage.

[Top 25 interactions on the homepage](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.goalOption=ALL&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22Scroll%20Depth%7CScript%20error.%22,1%5D,%5B0,%22analytics.pagePath%22,%22EQ%22,%22~2Findex.html%22,0%5D%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-segmentExplorer.segmentId=analytics.eventAction/)

## How do people use My VA?

### People come to my VA via many of the same paths that lead them to the homepage, just in smaller numbers.

People come to My VA through **sign in (~600K)**, the **claim status tool (393,342)**, and **view payment history (75,162)** just like they do on the homepage. They just do so in a much smaller quantity.

[My VA previous page paths](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&explorer-table.filter=my-va&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&explorer-table.secSegmentId=analytics.previousPagePath&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22RE%22,%22my-va%22,0%5D%5D/)

### Login is the primary action taken from My VA.

Since you can't view My VA without being logged in, it's interesting that the most popular action by far from My VA is to **log in (~5MM events)**. This may suggest that people are going directly to this page and signing in from here, potentially people who have bookmarked this page.

### Claims, VA letters, and profile information are all popular next steps from My VA.

Unsurprisingly, people who come to My VA have the same priorities as other users — they want to **track claims (~560K)** and **download their VA letters (239,802)**, among other things. They also want to go to their **profile (304,902)** which was a unique interaction we didn't see from the homepage, likely because a link to the profile is featured prominently from the dashboard.

[Top 25 interactions from My VA](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22PT%22,%22my-va%22,0%5D,%5B0,%22analytics.eventAction%22,%22PT%22,%22Script%20error.%22,1%5D%5D&explorer-table.rowCount=25/)

