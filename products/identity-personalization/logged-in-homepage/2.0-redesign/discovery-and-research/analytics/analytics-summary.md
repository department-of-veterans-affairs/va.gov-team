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

**Popular "tools" content**

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

**Popular "explore/apply" content**

| Page title | Page| Pageviews |
|-----|------|------|
| How to apply for the GI Bill and related benefits content page| /education/how\-to\-apply/index\.html| 2,836,891 |
| How to file a VA disability claim content page | /disability/how\-to\-file\-claim/index\.html| 2,583,794   |
| How to apply for a Veteran ID Card content page| /records/get\-veteran\-id\-cards/vic/index\.html | 1,734,573   |
| VA disability compensation hub page | /disability/index\.html| 1,669,521   |
| Types of Veteran ID cards content page | /records/get\-veteran\-id\-cards/index\.html| 1,621,850   |

It's worth noting that in the data we received back, logged out users primary focus was exploring benefits. When looking at the data from a logged-out only lens, we saw additional content hubs appear in the top 25.

- [Top 25 Pages - Not Logged In Sessions](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.useg=userBgZiUrK9Sieg7jBAnx44OQ&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/)

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

### Logged out vs. logged in users

Logged in users appear to be on the site primarily to check the status of benefits (claims, GI Bill benefits) or to get their records (download letters). Logged out users are more interested in exploring benefits and getting information on eligibility and how to apply for them.

Search is much more important for logged out users than logged in users.

- [Top 25 Pages - Logged In Session](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.useg=usersYzZ0EUDT4uJLecPmCwn3Q&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/)
- [Top 25 Pages - Not Logged In Sessions](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.useg=userBgZiUrK9Sieg7jBAnx44OQ&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/)

### Top landing pages

## Insights: VA.gov homepage

## Insights: My VA
