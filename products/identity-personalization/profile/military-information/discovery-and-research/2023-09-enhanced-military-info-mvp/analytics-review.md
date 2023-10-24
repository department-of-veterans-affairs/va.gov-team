# Initial analytics review

## Top "military history" pages on VA.gov

[Top page views for 4.11.23 - 10.10.23](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p176188361/_u.date00=20230411&_u.date01=20231010&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=250/)

These are the number of pageviews for any page that appears in the top 250 pages and contains the word `military` in its URLs:

|Rank|Page|Number of page views in the last 6 months|
|---------|---------|----------|
|#88|[Request your military service records (including DD214)](www.va.gov/records/get-military-service-records/)|1,681,797|
|#124|[Disability claim form: Review your military history](www.va.gov/disability/file-disability-claim-form-21-526ez/review-veteran-details/military-service-history/)|1,115,678|
|#180|[Disability claim form: Military service history - Reserves/National Guard](www.va.gov/disability/file-disability-claim-form-21-526ez/review-veteran-details/military-service-history/reserves-national-guard/)|719,992|
|#217|[VA.gov profile: Military history](www.va.gov/profile/military-information/)|586,497|

### What we can extrapolate from this

- The primary goal around military history is to obtain a copy of the DD214 or similar separation papers.
- In terms of forms, the claims form is the form with the highest amount of traffic to its `military history` section.

## Navigation summaries

### [Request your military service records (including DD214)](www.va.gov/records/get-military-service-records/)

[Navigation summary for 4.11.23 - 10.10.23](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p176188361/_u.date00=20230411&_u.date01=20231010&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Frecords~2Fget-military-service-records~2F&_r.tabId=navigationsummary/)

From this report, we can extrapolate the following:

- The profile is the second-most common referral source for this page. This isn't surprising, as we directly link to it for people looking for their DD214 and other discharge papers.
- However, given that the total pageviews for this page was over 1.5MM in the time period we are looking at, no single referral source drove a large amount of volume to this page in terms of raw numbers. This is interesting, because it lessens the strength of the relationship between this page and any of its referral sources.
- The primary things people want to do from this page are get official copies of their DD214 or other discharge papers, and get their health records.
- Similar to the referral sources, none of the next-pages received a high volume of traffic if we look at raw numbers.

![Navigation summary for military service record content page 4.11.23 - 10.10.23](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-09-enhanced-military-info-mvp/images/Navigation%20summary_get%20your%20military%20service%20records%20content%20page.jpeg)

### [Disability claim form: Review your military history](www.va.gov/disability/file-disability-claim-form-21-526ez/review-veteran-details/military-service-history/)

[Navigation summary for 4.11.23 - 10.10.23](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p176188361/_u.date00=20230411&_u.date01=20231010&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fdisability~2Ffile-disability-claim-form-21-526ez~2Freview-veteran-details~2Fmilitary-service-history~2F&_r.tabId=navigationsummary/)

- No real surprises here -- all the previous/next pages are within the 526EZ. Note people aren't going to their profile to look for military history while filling out this form, and why would they? We don't have any information that's not already supported by prefill, and there's no link from the 526EZ to the profile (nor should there be).

![Navigation summary for 526EZ review military service 4.11.23 - 10.10.23](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-09-enhanced-military-info-mvp/images/Navigation%20summary_526EZ%20military%20history.jpeg)

### [Disability claim form: Military service history - Reserves/National Guard](www.va.gov/disability/file-disability-claim-form-21-526ez/review-veteran-details/military-service-history/reserves-national-guard/)

[Navigation summary for 4.11.23 - 10.10.23](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p176188361/_u.date00=20230411&_u.date01=20231010&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fdisability~2Ffile-disability-claim-form-21-526ez~2Freview-veteran-details~2Fmilitary-service-history~2Freserves-national-guard~2F&_r.tabId=navigationsummary/)

- Same as above: this page is part of the 526EZ, so most previous/next pages are within the 526EZ.

![Navigation summary for 526EZ review military service_reserves and national guard 4.11.23 - 10.10.23](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-09-enhanced-military-info-mvp/images/Navigation%20summary_526EZ%20military%20history_reserves%20national%20guard.jpeg)

### [VA.gov profile: Military history](www.va.gov/profile/military-information/)

[Navigation summary for 4.11.23 - 10.10.23](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p176188361/_u.date00=20230411&_u.date01=20231010&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fprofile~2Fmilitary-information~2F&_r.tabId=navigationsummary/)

- Naturally, most previous and next pages go to other sections of the profile.
- A noteworthy amount of traffice also goes to the [Request your military service records (including DD214)](www.va.gov/records/get-military-service-records/) page because we send people there who are looking for their DD214.

![Navigation summary for military history in profile 4.11.23 - 10.10.23](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-09-enhanced-military-info-mvp/images/Navigation%20summary_Profile%20military%20history.jpeg)

## Search results

I couldn't find any relationship between the 526EZ and the military information section of the profile based on search terms alone. In the 526EZ, searches around the `PACT Act` were common. In the VA.gov profile, people are primarily searching for `letters` and `dependents` information, even from the military information section.

- [VA.gov profile search terms from 4.11.23 - 10.10.23](https://va-gov.domo.com/page/1834995012?userId=66061986)
- [VA.gov profile military history page search terms from 4.11.23 - 10.10.23](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20230411&_u.date01=20231010&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.searchStartPage:www.va.gov~2Fprofile~2Fmilitary-information~2F/)
- [526EZ searches](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20230411&_u.date01=20231010&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.searchStartPage:www.va.gov~2Fdisability~2Ffile-disability-claim-form-21-526ez~2Fstart~2F/)
