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

### Popular tools & tasks

The claim status tool is our most popular tool. Other tools that made it into the top 25 include the facility locator, the GI Bill statement of benefits, and the letters tool. People also wanted to view payment history and refill their prescriptions even though these tools do not exist on VA.gov.

On the modernized site, we only see one health tool — refill prescriptions — in the top 25. This is likely because health care is primarily managed on MHV. We should review the non-modernized data to get a more full picture of the importance of health tools.

More unexpected: going by pageview, My VA is more popular than we would have expected. This may indicate an interest in seeing personalized benefit information.

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
| Download VA benefit letters content page | /records/download\-va\-letters/index\.html| 1,965,634   |
| VA.gov profile | /profile/index\.html | 1,920,045   |
| VA Prescription Refill and Tracking content page| /health\-care/refill\-track\-prescriptions/index\.html| 1,726,433   |
| Post 9/11 GI Bill Statement of Benefits| /education/gi\-bill/post\-9\-11/ch\-33\-benefit/status/ | 1,704,997  |

</details>

### Exploring and applying for benefits

In terms of "explore/apply" content, how to apply for GI Bill/education benefits, disability content, and veteran ID card content made it onto the lists for top 25 pages overall and top 25 pages for logged in users.

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

### Logged out vs. logged in users

Logged in users appear to be on the site primarily to check the status of benefits (claims, GI Bill benefits) or to get their records (download letters). Logged out users are more interested in exploring benefits and getting information on eligibility and how to apply for them.

Search is much more important for logged out users than logged in users.

- [Top 25 Pages - Logged In Session](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.useg=usersYzZ0EUDT4uJLecPmCwn3Q&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/)
- [Top 25 Pages - Not Logged In Sessions](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.useg=userBgZiUrK9Sieg7jBAnx44OQ&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/)

### Landing pages: Where people are starting their VA.gov journey

This data tells us the first page people land on when they come to the modernized VA.gov. This may reflect how people are being directed via search engine results or what pages people have bookmarked.

The homepage was the most popular by orders of magnitude, with the claim status tool and the facility locator rounding out the top 3. Other popular landing pages include many of the content pages we've already related as popular, namely content related to health care, disability, and education benefits.

[Top 25 landing pages](https://analytics.google.com/analytics/web/?authuser=0#/report/content-landing-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/)

### What people are searching for

- "Health" and "benefits" are what people are most interested in. This may mean that people are looking for more help and assistance from us on getting started with benefits.
- "Forms" is also high on the list, which suggests people want a full list of VA forms.
- Benefits-related terms like "direct deposit", "cemetaries," and "certificate of eligibility" are high on the list, which suggests that we may need to elevate these tools more.
- "DD214" is high on the list, further reflecting people's desire to get their military records.

[Top search terms](https://analytics.google.com/analytics/web/?authuser=0#/my-reports/17yMINMRQiCe6kcHdjC6tg/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200413&5592-table.plotKeys=%5B%5D&5592-table.rowStart=0&5592-table.rowCount=25/)

## How do people use the homepage?

### As expected, people are entirely reliant on the top 20 tasks to navigate the homepage.

Almost all of the top 25 interactions on the homepage take place in the top 20 tasks, with notable excpetions being the sign in prompt and some interaction with the main nav. In the top 20 tasks, **Check your claim or appeal status (5,095,696)**, **View payment history (759,540)**, and **Refill and track your prescriptions (516,320)** had the most clicks.

This further shows the reliance on the top 20 tasks and suggests we should take extra care with how we handle these when creating a personalized logged-in homepage.

[Top 25 interactions on the homepage](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.goalOption=ALL&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22Scroll%20Depth%7CScript%20error.%22,1%5D,%5B0,%22analytics.pagePath%22,%22EQ%22,%22~2Findex.html%22,0%5D%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-segmentExplorer.segmentId=analytics.eventAction/)

## How do people use My VA?
