# Analytics review - July 2020

All data is from Jan 1, 2020 to the date that the report was viewed.

## My VA

### Users

[User overview report](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-overview/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=builtin1,userTBuj9_dPSF-sBQQO9Srv-g/)

- About 8% of users who go to VA.gov (modernized) go to My VA. 
- Users who view My VA have more sessions on average than users who do not. This makes sense — you need to login to view My VA, so users who are logging in are getting more value and may be coming back to check things like claim status.

### Engagement

[Audience > Behavior > Engagement > Session duration report](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-engagement/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=userTBuj9_dPSF-sBQQO9Srv-g&histogramTab-sectionControl.sectionId=duration/)

- Users who view my VA tend to view the site anywhere between 1 minute - 30 minutes, with the most being in the 3 - 10 minute range.
- They also mostly view 1 -2 pages, with another even distribution in the curve between 6 - 9 pages.

[Audience > Cohort analysis report](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-cohort/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=userTBuj9_dPSF-sBQQO9Srv-g/)

- Users tend to not view the My VA page multiple days in a row, which is expected and fine. The information there isn't going to update daily, so there is little incentive to have them logging in everyday.

### Behavior

[Behavior overview report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-overview/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=usersYzZ0EUDT4uJLecPmCwn3Q&overview-dimensionSummary.selectedGroup=sitecontent&overview-dimensionSummary.selectedDimension=analytics.pageTitle/)

- If I'm reading this report correctly, ~3% of pageviews for logged in users on the modernized site were of My VA. That number feels "low" until you consider that it's in the top 10 pages for logged in users and is only below the homepage and claim status-related content, which is the most popular tool on the site.

[Site content overview report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=userTBuj9_dPSF-sBQQO9Srv-g&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25/)

- People who view My VA are mostly interested in viewing their claim status. This is probably the most important thing we can feature on the logged-in homepage.
- These users are also interested in facilities info, records info, payment info, GI bill info, and profile info.
- Health info is less popular in this view because we are looking at modernized site data only, but we should keep in mind health content/MHV is the most popular info in the VA digital ecosystem.

[Site content overview navigation summary report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=userTBuj9_dPSF-sBQQO9Srv-g&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25&_r.tabId=navigationsummary&_r.drilldown=analytics.pagePath:~2Fmy-va~2Findex.html/)

- In terms of pages feeding in to My VA, we see the homepage, claim status, the profile, the Find VA benefits tool (which is on My VA), the account page, and search.
- In terms of what people do from My VA, we see the most popular next step is to go to the profile. The account page is also in the top 10. I wonder if this is less because those are the most important interactions people want to take and actually because there is info the expect to see on My VA that they do not. We should continue to be mindful of this relationship between a dashboard and a profile going forward and continue to move towards clarifying what lives where.
- Finding VA benefits is the second most popular action. Unclear if this is because it's at the top of the page or how useful people find it.
- Download records ranks at number 6, underscoring its importance.
- They also go to MHV. I think this may be from the "My Health" link, though unclear if they are clicking through from a Rx or message.
- Going to the claim status tool is actually number 10 in the top 10. Unclear if this is because people can see the status right on My VA, or if because they have already been to the claim status tool and don't need to go back.

[Exit page report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-exit-pages/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=userTBuj9_dPSF-sBQQO9Srv-g/)

- Aside from the homepage, people who view My VA leave from the claim status tool, payment info, to go to MHV, and the download VA letters page. We can assume that these are the things people came to the site to interact with.
- Some are leaving from My VA itself, though it's unclear if this is because they found what they were looking for or didn't.

[Behavior > Events > Pages > My VA](https://analytics.google.com/analytics/web/#/report/content-event-pages/a50123418w177519031p176188361/_u.date00=20200101&_u.date01=20200721&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&_r.drilldown=analytics.pagePath:www.va.gov~2Fmy-va~2F,analytics.eventCategory:Interactions/)

- This report shows the top events on My VA. It's pretty much what we'd expect.
- With regards to applying for benefits, no "apply" actions are in the top 10 events. Clicking the CTAs to apply for disability and education are in the top 25; clicking CTAs to apply for a home loan, health care, career help, and pre-need burial benefits are in the top 50.

### Search terms

[Search term report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-search-terms/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=userTBuj9_dPSF-sBQQO9Srv-g/) — Only goes to April 2, 2020

For people who view My VA, the top 10 search terms are (note: these searches do not necessarily happen from My VA itself):

- health
- all
- benefits
- vet center
- direct deposit
- cc provider
- urgent care
- cemetery
- ebenefits
- Direct deposit

We can assume that if we link to/feature any of these things on the logged-in homepage, we can reduce the incidents of search for these tools.

[Terms searched from My VA](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-pages/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=userTBuj9_dPSF-sBQQO9Srv-g&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.searchStartPage:~2Fmy-va~2Findex.html/) - Only fgoes to April 2

These are the terms searched for from My VA itself. We can assume that these are what people expect to find on their dashboards:

- direct deposit
- ebenefits
- id card
- dd214
- Direct deposit
- weblgy
- claims
- vic
- Disability
- Vic

Of note — "Rating", "disability rating," and "Disability rating" all make it into the top 20, but since they are counted as separate searches, did not make it into the top 10. We can assume this means people are expecting to see their disability rating on their dashboard but are not seeing it.

## Homepage - Logged-in users who view the homepage

### Users

[Audience overview report — logged in users](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-overview/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=builtin1,usersYzZ0EUDT4uJLecPmCwn3Q/)

- About 20% of VA.gov user login.
- There is not a meaningful difference in how many sessions logged-in users have vs. all users. 
- However, logged-in users have a much lower bounce rate — almost 0% — in contrast to all users. They view almost 13 pages pers session on average as opposed to about 5 per session for logged-out users, and spend ~11 minutes on the site vs. 5 minutes, suggesting that they are interacting at a more in-depth level.

[Audience overview report - logged in users who also view the homepage](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-overview/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200714&_.useg=userMhNhPIZvSdezY8NttD81Jg,userxb9UctsLQ0iOI8CGh9HA1g&overview-graphOptions.selected=analytics.nthMonth/)

- About 72% of logged-in users view the homepage.
- The number of sessions per user (~3), pages per session (~13), time on site (~11:00), and bounce rate 0.02 - 0.04%) aren't that different for all logged-in users vs. logged-in users who view the homepage.

### Engagement

[Audience > Behavior > Engagement > Session duration report](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-engagement/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200714&_.useg=userMhNhPIZvSdezY8NttD81Jg/)

- Logged-in users who view the homepage spend, on average, mostly between 1 - 10 minutes on VA. Some of these users spend 30 minutes or more.
- There is a pretty even distribution in terms of how many pages viewed, with the largest part of the distribution between 6 - 10 pages.

[Audience > Cohort analysis](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-cohort/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200714&_.useg=userMhNhPIZvSdezY8NttD81Jg,builtin1&cohortTab-cohortOption.cohortBaseDate=20200715&cohortTab-cohortOption.hasLoaded=true/)

- Logged-in users who view the homepage aren't very likely to come back and view the homepage multiple days in a row. This isn't terribly surprising — when we look at the report for all users, we see that most people don't log in to VA.gov multiple days in a row.

### Behavior

[Behavior overview report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-overview/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200714&_.useg=userMhNhPIZvSdezY8NttD81Jg/)

- In a surprise to no one, the top pages for users who view the homepage are the homepage (duh), a bunch of claim status related URLs, and My VA.

[Behavior site content report for logged-in users who view the homepage](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200714&_.useg=userMhNhPIZvSdezY8NttD81Jg&_r.tabId=navigationsummary/)

- For logged-in users who view the homepage, the homepage is the entrance page for 34% of these pageviews.
- Other pages that refer users to the homepage include the login flow, claim status, My HealtheVet, refill and track prescriptions, payment history, and My VA.
- In terms of actions logged-in users take on the homepage, users are going to claim status, payment history, refill and track prescriptions, download letters, how to file a claim, and My VA. This supports our approach to combine the logged-in homepage and My VA — people are clearly looking for personal information from this page.

[Behavior site content report for logged-in vs. logged-out users](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200714&_.useg=usersYzZ0EUDT4uJLecPmCwn3Q,userBgZiUrK9Sieg7jBAnx44OQ&_r.tabId=navigationsummary/)

-This report looks at logged-in vs. logged-out users. We can see a super significant amount of users who are logged-out — 74% — have the homepage as their entrance page, as opposed to only 34% for logged-in users. This suggests that users who log-in to VA.gov may have pages bookmarked, or are entering through more targeting web searches/links.
- The homepage is also more frequetly the exit page for logged-out users, which suggests that logged-in users are having more meaningful interactions.
- When we look at [the report for logged-out users only](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200714&_.useg=userBgZiUrK9Sieg7jBAnx44OQ&_r.tabId=navigationsummary/), we can see the previous and next pages before and after the homepage are quite different. Before, while claim status makes an appearance, people are coming from search, facility locator, payment history, how to apply pages for disability and edu, how to get an ID card, and refill and track presecriptions. After, users are going to search, claim status, how to apply for disability/edu, facility locator, payment history, refill and track prescriptions, and a bunch of record-related pages.

[Exit page report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-exit-pages/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200714&_.useg=userMhNhPIZvSdezY8NttD81Jg/)

- These are the pages logged-in users who view the homepage are on when they leave the site. We can assume that this is what people came to do, or one of multiple tasks. This list looks like we'd expect — claim status, various health care tools, records, payment history, and My VA. 

[Behavior > Events > Pages > Homepage for logged-in users](https://analytics.google.com/analytics/web/#/report/content-event-pages/a50123418w177519031p176188361/_u.date00=20200101&_u.date01=20200721&_r.drilldown=analytics.pagePath:www.va.gov~2F,analytics.eventCategory:Interactions&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&_.useg=useri0ZvPaPpQKyUHGrYCFPigw/)

- Unlike with My VA, "apply" links are much more popular on the homepage. How to file a claim is number 7, how to apply for edu benefits is 15, and applying for health care is 21.

### Search terms

#### All VA.gov data

[All VA sites - Top search terms for logged-in users in general](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-search-terms/a50123418w177519031p176188361/_u.date00=20200101&_u.date01=20200716&_.useg=useri0ZvPaPpQKyUHGrYCFPigw&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=10&explorer-table.rowStart=0/)

The top ten search terms for all logged-in users are:

- direct deposit
- ebenefits
- certificate of eligibility
- coe
- claims
- DD214
- disability rating
- disability
- change address
- id card

[All VA sites - Top search terms for logged-in users who view the homepage](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-search-terms/a50123418w177519031p176188361/_u.date00=20200101&_u.date01=20200716&_.useg=user6qnIKrttSLWJ_RSccaT2xg&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=10&explorer-table.rowStart=0/)

The top ten search terms for logged-in users who view the homepage are:

- direct deposit
- ebenefits
- certificate of eligibility
- disability rating
- coe
- dd214
- claims
- disability
- forms
- rating

[All VA sites - Top search terms for logged-in users from the homepage](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20200101&_u.date01=20200716&_.useg=user6qnIKrttSLWJ_RSccaT2xg&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.searchStartPage:www.va.gov~2F/)

These are the top ten searches for logged-in users when they are on the homepage:

- direct deposit
- ebenefits
- coe (certificate of eligibility)
- forms
- 22-1995
- certificate of eligibility
- dd214
- disability rating
- weblgy
- dental

#### Modernized content only

[Modernized content only - Top search terms for logged-in users in general](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-search-terms/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200716&_.useg=useri0ZvPaPpQKyUHGrYCFPigw&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=10&explorer-table.rowStart=0/)

On the modernized section of the site, the top search terms for logged-in users are:

- health
- benefits
- urgent_care
- all
- vet_center
- cc_provider
- cemetery
- forms
- direct deposit
- ebenefits

[Modernized content only - Top search terms for logged-in users who view the homepage](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-search-terms/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200714&_.useg=userMhNhPIZvSdezY8NttD81Jg/)

The top ten search terms for logged-in users who view the homepage are:

- health
- benefits
- all
- direct deposit
- vet_center
- ebenefits
- cemetary
- cc_provider (Community care provider)
- certificate of eligibility
- 22-1995 (Program to change GI bill school or program)

[Modernized content only - Top search terms for logged-in users from the homepage](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-pages/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200714&_.useg=userMhNhPIZvSdezY8NttD81Jg&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.searchStartPage:~2Findex.html/)

These are the top ten searches for logged-in users when they are on the homepage:

- direct deposit
- ebenefits
- 22-1995 (Program to change GI bill school or program)
- forms
- Direct deposit
- certificate of eligibilty
- weblgy
- coe (certificate of eligibility)
- COE (certificate of eligibility)
- benefits

We can assume that people expect to find information about these things from the homepage. We can also assume that if we feature these things — even just via a link — from the homepage, we will drastically reduce the number of searches for these features.

Also, what's interesting is that we **do** feature the 22-1995 on the homepage, but the link is called "Change your current education benefits." Perhaps we need to include the form number in parantheses. It looks like veterans know this form number for some reason (potentially schools reference it?).
