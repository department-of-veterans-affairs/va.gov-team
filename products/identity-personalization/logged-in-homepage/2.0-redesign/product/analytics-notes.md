# Analytics review - July 2020

All data is from Jan 1, 2020 to the date that the report was viewed.

## My VA

### Users

[User overview report](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-overview/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=builtin1,userTBuj9_dPSF-sBQQO9Srv-g/)

- About 8% of users who go to VA.gov (modernized) go to My VA. 
- Users who view My VA have more sessions on average than users who do not. This makes sense — you need to login to view My VA, so users who are logging in are getting more value and may be coming back to check things like claim status.

### Engagement

[Behavior > Engagement > Session duration report](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-engagement/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=userTBuj9_dPSF-sBQQO9Srv-g&histogramTab-sectionControl.sectionId=duration/)

- Users who view my VA tend to view the site anywhere between 1 minute - 30 minutes, with the most being in the 3 - 10 minute range.
- They also mostly view 1 -2 pages, with another even distribution in the curve between 6 - 9 pages.

[Cohort analysis report](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-cohort/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=userTBuj9_dPSF-sBQQO9Srv-g/)

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

## Homepage - Logged-in users only

### Users

[Audience overview report](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-overview/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=builtin1,usersYzZ0EUDT4uJLecPmCwn3Q/)

- About 20% of VA.gov user login.
- There is not a meaningful difference in how many sessions logged-in users have vs. all users. 
- However, logged-in users have a much lower bounce rate — almost 0% — in contrast to all users. They view almost 13 pages pers session on average as opposed to about 5 per session for logged-out users, and spend ~11 minutes on the site vs. 5 minutes, suggesting that they are interacting at a more in-depth level.



### Engagement

### Behavior

### Search terms
