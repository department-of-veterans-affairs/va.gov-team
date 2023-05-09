# VA.gov Logged in IA Analytics Review
3/7/2023

## Background
We pulled Google Analytics (GA) data:
* patterns and behaviors around logging in.
* if there are differences in what people intend to do logged in vs. logged out.
* what the numbers can tell us about how people navigate the site when logged in.

## About this data
We used the **WBC - VA.gov** view, which filters out data on My HealtheVet (MHV) and eBenefits. We focused on events and page views, sometimes with custom segments applied to separate out users who have LOA 1 or 3 present.

In many of these reports, we saw instances of `(other)`, `/auth/login/` and ` ?next=loginmodal` in the top URLs.  
- The analytics team is digging into what `(other)` means; we’ll update this report when we learn more if it’s meaningful.
- The `/auth/login` URL is part of the login redirects that occur. We removed this one from the reports since they’re not helpful in evaluating the IA of the site.
- `?next=loginmodal` is a parameter added to a the URL to ensure the sign-in modal is displayed, and primarily appears if a user uses their browser back button to go back to VA.gov after engaging in the sign-in process. This helps ensure the user picks up where they left off when they were last on VA.gov.  Since we can’t be sure exactly *why* people are leaving and navigating back, we left this in the report.

### Confidence rating
Our experience level with analytics falls in the intermediate range. This means that the confidence in the numbers represented here varies depending on the complexity of the question.

We’ve established a confidence rating scale, which can help identify areas where we might want to call in the Analytics team if we need further validation or expertise.

| Rating      |  Details | 
| ----------- | ----------- | 
| Low | There are many ways to answer this question and/or we weren’t able to confirm a detail (such as what a specific URL means). We’re fairly confident this data is correct, but another set of eyes would be useful. |
| Moderate | There are a couple of ways to answer this question, and we’re reasonably confident the way we chose answers the question accurately|
| High | There is only one way to answer this question, and we’re confident this data is correct. |

## Signing in to VA.gov

### What percentage of users signed in to VA.gov over the last 93 days (greatest number of days we can pull from GA with user data)?
- [Audience overview report](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p184624291/_u.date00=20221203&_u.date01=20230305&_.useg=user8twPUpCZT8qMEc9RwdXoUg,userbsqza7fOTvy36H-XeVcmLA/), Dec 3, 2022-Mar 5, 2023
- Confidence level: high

18.23% of users signed into VA.gov

### What are the top ten popular pages for people to sign in on? 
-  [Report](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22RE%22,%22nav-header-sign-in%7Clogin-link-clicked-cta%22,0%5D%5D&explorer-table.rowCount=250/), Feb 1, 2022-Feb 1, 2023
- Confidence level: high

These are the top 10 pages where sign-in events occurred, excluding `/sign-in/index.html` and `session-expired/index.html`. The events we looked at are fired when people click on a sign in CTA, and the header sign-in button.

GA tracks every permutation of the homepage as a separate page; they’ve been consolidated in the table below, but can be seen in the report linked above.

|URL | Number of unique sign in events |
| ----------- | ----------- | 
|/index.html| 9,185,967|
|/claim-or-appeal-status/index.html| 4,877,161|
|/health-care/schedule-view-va-appointments/index.html| 1,172,235|
|/va-payment-history/index.html| 1,165,341|
|/disability/file-disability-claim-form-21-526ez/introduction/| 708,602|
|/records/download-va-letters/index.html| 687,801|
|/health-care/refill-track-prescriptions/index.html| 631,084|
|/health-care/secure-messaging/index.html| 321,036|
|/records/get-veteran-id-cards/vic/index.html| 308,400|
|/track-claims/your-claims/| 136,018|


### How many clicks do people usually take/pages do people usually visit before signing in?

GA doesn’t offer a straightforward way to track this. It may be possible to have our analytics team cross-reference GA data with other sources to determine this, but we’d need to do that as a separate effort.

### What are peoples’ next clicks after signing in?
-  [Pages with post-login parameter report](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_r.tabId=explorer&navigationsummary-keySelector.searchTerm=%3Fpostlogin=true&explorer-table.filter=%3Fpostlogin=true&explorer-table.plotKeys=%5B%5D/), Feb 1, 2022-Feb 1, 2023
- Confidence level: low

This is another metric that isn’t straightforward to track in GA.  The first page a person lands on after signing in contains the `?postlogin=true` parameter, so we can look at the navigation summary on those URLs to see the next page they go.  It’s important to note that the page a person lands on after signing in isn’t necessarily the same page they logged in on.

Each of these has to be run manually, per page, so we limited the results to the top 3 pages with the `?postlogin=true` parameter.  

|Page | Pageviews |
| -----------  | -----------  | 
| /my-va/index.html?postlogin=true | 9,219,713 |
| /claim-or-appeal-status/index.html?postlogin=true | 6,840,624|
| /index.html?postlogin=true | 2,916,108|


On My VA and the homepage we see some similarities suggesting what people want to do next:
- Track a claim
- Make a payment
- Schedule or view an appointment

Interestingly, both My VA and the Claim or appeal status page have links to the homepage or logging in in their navigation summary reports. This suggests people aren’t finding what they’re looking for, and may be using their back button to back away.

|Next page path from My VA | Pageviews |
| -----------  | -----------  | 
| /claim-or-appeal-status/index.html | 1,596,977 |
| /disability/view-disability-rating/rating/ | 713,208 |
| /va-payment-history/payments/index.html | 700,655 |
| /profile/ | 563,897 |
| /index.html | 467,315 |
| /my-va/index.html | 338,394 |
| /verify/index.html | 318,489 |
| /health-care/schedule-view-va-appointments/appointments/ | 271,255 |
| /index.html?next=/my-va/ | 223,008 |
| /logout/index.html | 125,528 |

|Next page path from claim or appeal status | Pageviews |
| -----------  | -----------  | 
| /track-claims/your-claims/ | 2,163,913 |
| /verify/index.html | 60,784 |
| /auth/login/callback?type=verify | 30,796 |
| /index.html | 24,103 |
| /claim-or-appeal-status/index.html | 23,638 |
| /my-va/index.html | 15,871 |
| /auth/login/callback?type=dslogon | 9,404 |
| /auth/login/callback?type=idme | 9,102 |
| /claim-or-appeal-status/index.html?postlogin=true&next=loginmodal | 9,075 |


|Next page path from homepage | Pageviews |
| -----------  | -----------  | 
| /claim-or-appeal-status/index.html | 1,109,607 |
| /va-payment-history/index.html | 268,342 |
| /my-va/index.html | 164,347 |
| /records/download-va-letters/index.html | 135,218 |
| /health-care/refill-track-prescriptions/index.html | 103,004 |
| /index.html?postlogin=true&next=loginmodal | 78,504 |
| /disability/file-disability-claim-form-21-526ez/index.html | 64,903 |
| /health-care/schedule-view-va-appointments/index.html | 64,581 |
| /index.html | 61,788 |
| /health-care/secure-messaging/index.html | 51,743 |


### What is the % breakdown of people who click sign in CTAs vs. “Create Account” CTAs?
- Confidence level: High

Of 30,818,378 total events, 3.45% were “create account” events. Note that the CTA events do not include interactions with the sign in button on the header; these represent sign in CTAs within pages. We’re not sure if there are other call to action buttons tagged with something other than `login-link-clicked-cta`, but this still gives us a good comparison to get a sense of this breakdown.

| Event Label      | Total Events | Report link |
| ----------- | ----------- | ----------- |
|register-link-clicked-[logingov or idme] | 1,024,110 | [report](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22PT%22,%22register-link-clicked-%22,0%5D,%5B0,%22analytics.eventLabel%22,%22PT%22,%22false%22,1%5D%5D/) |
|login-link-clicked-cta| 29,794,268 | [report](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22PT%22,%22login-link-clicked-cta%22,0%5D%5D/) |


### For people who click “Create Account”, where are they coming from (previous page)?
- [Pages where event triggered report](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22PT%22,%22register-link-clicked-%22,0%5D,%5B0,%22analytics.eventLabel%22,%22PT%22,%22false%22,1%5D%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.rowStart=0&explorer-table.rowCount=50/), Feb 1, 2022-Feb 1, 2023
- Confidence level: High

Since the “Create Account” link is contained within the login modal, we looked at the page the person triggered the modal from by looking at the `register-link-clicked-[logingov or idme]` event. 	

Not surprisingly, the pages include:
- the VA.gov homepage
- My HealtheVet tasks (secure messaging, refilling prescriptions)
- Check claim or appeal status
- Filing a disability claim
- Applying for health care
- Downloading records and letters

| Page      |  Unique Events | 
| ----------- | ----------- | 
/index.html?next=loginmodal | 94,468 |
| /sign-in/index.html?application=mhv&to=home   | 57,761 |
| /claim-or-appeal-status/index.html    | 52,822 |
| /disability/file-disability-claim-form-21-526ez/introduction/ | 53,363 |
| /health-care/apply/application/introduction/  | 35,753 |
| /index.html?next=/my-va/  | 33,685 |
| /records/get-veteran-id-cards/vic/index.html  | 28,202 |
| /sign-in/index.html?application=mhv&to=home&oauth=false   | 27,487 |
| /records/download-va-letters/index.html   | 27,533 |
| /va-payment-history/index.html    | 22,698 |

## Navigating to tasks & tools
### What are the most popular pages overall?
- [Top pages report](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22PT%22,%22~2Fauth~2F%22,1%5D%5D&explorer-table.plotKeys=%5B%5D/), Feb 1, 2022-Feb 1, 2023
- Confidence level: high

 The top 25 most popular pages include the VA.gov homepage, and:
	- Pages related to claims
	- the facility locator
	- My VA
	- pages related to payments
	- Pages related to disability ratings

| Page | Pageviews|
| -----------  | -----------  |
|(other) |  80,693,924 |
| /index.html| 76,001,140 |
| /track-claims/your-claims/| 33,771,144 |
| /claim-or-appeal-status/index.html| 23,762,902 |
| /facilities/index.html?XXX| 20,061,083 |
| /index.html?next=loginmodal| 19,969,545 |
| /sign-in/index.html?application=mhv&to=home| 15,621,008 |
| /track-claims/index.html| 13,207,898 |
| /my-va/index.html| 12,862,947 |
| /search/index.html?t=false| 9,429,886 |
| /my-va/index.html?postlogin=true| 9,219,713 |
| /va-payment-history/index.html| 7,713,237 |
| /va-payment-history/payments/index.html| 7,698,968 |
| /index.html?next=loginmodal&postlogin=true| 7,139,729 |
| /claim-or-appeal-status/index.html?postlogin=true| 6,840,624 |
| /session-expired/index.html| 6,786,794 |
| /disability/file-disability-claim-form-21-526ez/introduction/| 6,435,754 |
| /disability/compensation-rates/veteran-rates/index.html| 6,062,444 |
| /disability/view-disability-rating/rating/| 5,638,260 |
| /records/download-va-letters/index.html| 5,460,391 |
| /logout/index.html| 5,289,789 |
| /health-care/schedule-view-va-appointments/index.html| 4,907,182 |
| /health-care/schedule-view-va-appointments/appointments/index.html| 4,651,024 |
| /profile/personal-information/| 4,393,099 |
| /records/download-va-letters/letters/letter-list/| 4,292,113 |



### What are the most popular landing pages?
- [Landing pages report](https://analytics.google.com/analytics/web/#/report/content-landing-pages/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25/), Feb 1, 2022-Feb 1, 2023
 - Confidence level: high
 
The most popular landing pages, outside of the homepage, tell us users are coming to VA.gov for health and disability related tasks.  As we get deeper into the list, we start to see content related to records and payment history.

|Landing Page | Sessions |
| -----------  | -----------  | 
| /index.html | 39,826,988 |
| /sign-in/index.html?application=mhv&to=home | 9,623,232 |
| /claim-or-appeal-status/index.html |  4,658,540 |
| /disability/compensation-rates/veteran-rates/index.html | 4,272,082 |
| (other) | 3,953,009 |
| /resources/the-pact-act-and-your-va-benefits/index.html | 3,505,106 |
| /session-expired/index.html | 2,758,147 |
| /covid19screen/ | 2,558,908 |
| /sign-in/index.html | 2,014,548 |
| /find-locations/index.html |  2,006,919 |
| /health-care/schedule-view-va-appointments/index.html |   1,671,765 |
| /facilities/index.html?XXX |  1,323,096 |
| /records/download-va-letters/index.html | 1,293,136 |
| /va-payment-history/index.html |  1,288,224 |
| /health-care/appointment-pre-check-in/index.html |    1,271,755 |
| /covid19screen/index.html  |1,193,626 |
| /records/get-military-service-records/index.html |    1,117,121 |
| /my-va/index.html  |1,044,637 |
| (not set) |   1,031,604 |
| /find-forms/index.html     |917,557 |
| /track-claims/your-claims/ |  901,908 |
| /index.html?next=loginmodal | 883,379 |
| /contact-us/index.html |  855,370 |
| /sign-in/index.html?application=vaoccmobile&redirect_uri=/rxr/ |  814,196 |
| /health-care/get-reimbursed-for-travel-pay/index.html |   767,730 |

### What are the 25 most popular pages visited while signed in? 
- [Top pages for users signed in](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20221203&_u.date01=20230305&_.useg=user8twPUpCZT8qMEc9RwdXoUg/), Dec 3, 2022-Mar 5, 2023
- Confidence level: high

The majority of these pages are related to disability, payment history, and records.  We wouldn’t expect to see much health care here, since we’re looking at the WBC view in GA.

|Page | Pageviews |
| -----------  | -----------  | 
|/index.html|16,661,926|
|(other)|11,970,259|
|/track-claims/your-claims/|8,685,840|
|/my-va/index.html?postlogin=true|6,068,473|
|/claim-or-appeal-status/index.html|5,577,023|
|/index.html?next=loginmodal|5,505,422|
|/auth/login/callback?type=idme|4,198,740|
|/track-claims/index.html|3,385,883|
|/my-va/index.html|3,176,046|
|/sign-in/index.html?application=mhv&to=home|2,713,405|
|/auth/login/callback?type=dslogon|2,253,593|
|/auth/login/callback?type=custom|2,243,557|
|/va-payment-history/payments/index.html|2,168,826|
|/auth/login/callback?type=mhv|2,147,191|
|/disability/view-disability-rating/rating/|1,870,908|
|/search/index.html?t=false|1,698,189|
|/claim-or-appeal-status/index.html?postlogin=true|1,638,418|
|/sign-in/index.html?application=mhv&to=home&oauth=false|1,619,939|
|/logout/index.html|1,606,793|
|/disability/file-disability-claim-form-21-526ez/introduction/|1,580,934|
|/va-payment-history/index.html|1,526,520|
|/auth/login/callback?type=logingov|1,423,376|
|/facilities/index.html?XXX|1,267,167|
|/profile/personal-information/|1,254,993|
|/records/download-va-letters/index.html|1,233,578|




### What are the 25 most popular pages visited while signed out?
- [Top pages for users signed out](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20221203&_u.date01=20230305&_.useg=userbsqza7fOTvy36H-XeVcmLA&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/), Dec 3, 2022-Mar 5, 2023
- Confidence level: high

The homepage tops this list, which also includes many pages related to:
- Finding a VA facility
- Signing in to MHV
- getting information about Covid-19 screening
- Search

|Page | Pageviews |
| -----------  | -----------  | 
|/index.html| 4,836,821|
|/facilities/index.html?XXX| 3,956,450|
|(other)| 3,802,647|
|/sign-in/index.html?application=mhv&to=home| 2,328,844|
|/resources/the-pact-act-and-your-va-benefits/index.html| 2,258,025|
|/disability/compensation-rates/veteran-rates/index.html| 1,781,716|
|/sign-in/index.html?application=mhv&to=home&oauth=false| 1,499,395|
|/search/index.html?t=false| 1,352,567|
|/find-forms/index.html| 751,692|
|/find-locations/index.html| 747,577|
|/index.html?next=loginmodal| 679,652|
|/sign-in/index.html?application=vaoccmobile&redirect_uri=/rxr/| 677,503|
|/health-care/appointment-pre-check-in/index.html| 630,369|
|/contact-us/index.html| 611,639|
|/health-care/appointment-pre-check-in/verify/| 568,517|
|/sign-in/index.html?application=vaoccmobile&redirect_uri=/rxr/&oauth=false| 529,303|
|/health-care/appointment-pre-check-in/introduction/| 521,614|
|/education/gi-bill-comparison-tool/index.html?search=name&excludedschooltypes[]=public&excludedschooltypes[]=for profit&excludedschooltypes[]=private&excludedschooltypes[]=foreign&excludedschooltypes[]=flight&excludedschooltypes[]=correspondence&excludedschooltypes[]=high school| 486,105|
|/find-locations/| 479,288|
|/claim-or-appeal-status/index.html| 414,348|
|/records/get-military-service-records/index.html| 404,127|
|/family-member-benefits/index.html| 380,724|
|/disability/index.html| 374,089|
|/disability/file-disability-claim-form-21-526ez/introduction/| 370,908|
|/health-care/appointment-pre-check-in/complete/| 363,603|




### What are the average number of pages visited on the site in a session?
- [Audience overview by session LOA](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=usersYzZ0EUDT4uJLecPmCwn3Q,userBgZiUrK9Sieg7jBAnx44OQ/), Feb 1, 2022-Feb 1, 2023
- Confidence level: High

* **Logged in:** 13.33
* **Logged out:** 2.63
- Logged-in users have much longer session durations than logged out: 13:37 compared to 2:39. 

### What are the most popular logged in tasks?
- Confidence level: moderate

We looked the popular signed-in pages, and pages people sign in on to arrive at the list below. Since we focused our research on the VA.gov GA view (which excludes MHV), there aren’t a lot of health related pages in those reports. 

- Tracking/checking the status of claims
- Viewing payments
- Disability related tasks, such as viewing a rating or filing a claim
- Downloading letters
- Scheduling appointments

	
### For the top ten most popular logged in tasks, how many clicks/page visits does it take for people to get to those pages?

GA doesn’t offer a straightforward way to track this. It may be possible to have our analytics team cross-reference GA data with other sources to determine this, but we’d need to do that as a separate effort.

### For the most popular logged in tasks, what are the top previous pages?
- Confidence level: moderate

We picked the most popular page for each of the 5 tasks listed above, and looked at the navigation summary for each one: 

#### Checking the status of a claim
- **URL**: `/track-claims/your-claim`
- [Your claim navigation summary for authenticated users](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20221203&_u.date01=20230305&explorer-table.plotKeys=%5B%5D&_.useg=user8twPUpCZT8qMEc9RwdXoUg&_r.drilldown=analytics.pagePath:~2Ftrack-claims~2Fyour-claims~2F&_r.tabId=navigationsummary/), Dec 3, 2022-Mar 5, 2023

|Previous Page | Pageviews |
| -----------  | -----------  | 
| /track-claims/index.html|3,346,567 |
| /claim-or-appeal-status/index.html|1,032,383 |
| /claim-or-appeal-status/index.html?postlogin=true|484,780 |
| /claim-or-appeal-status/index.html?next=loginmodal&postlogin=true|64,723 |
| /track-claims/your-claim-letters/|63,645 |
| /index.html|20,461 |
| /track-claims/|20,158 |
| /index.html?next=/track-claims/your-claims|9,729 |
| /my-va/index.html|5,296 |
| /track-claims/your-claim-letters?postlogin=true|5,246 || 



#### View payments
- **URL**: `/va-payment-history/payments/index.html`
- [View Payment History navigation summary](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20221203&_u.date01=20230305&_.useg=user8twPUpCZT8qMEc9RwdXoUg&_r.tabId=navigationsummary&_r.drilldown=analytics.pagePath:~2Fva-payment-history~2Fpayments~2Findex.html&explorer-table.plotKeys=%5B%5D/),  Dec 3, 2022-Mar 5, 2023

|Previous Page | Pageviews |
| -----------  | -----------  | 
| /va-payment-history/index.html|666,100 |
| /my-va/index.html?postlogin=true|519,505 |
| /va-payment-history/index.html?postlogin=true|406,421 |
| /my-va/index.html|250,272 |
| /profile/direct-deposit/|53,710 |
| /va-payment-history/index.html?next=loginmodal&postlogin=true|29,113 |
| /disability/view-disability-rating/rating/|8,030 |
| /index.html|7,468 |
| /track-claims/your-claims/|7,365 |
| /manage-va-debt/summary/debt-balances/index.html|4,103 | 


#### Filing a disability claim
- **URL:** `/disability/file-disability-claim-form-21-526ez/introduction/`
- [File disability claim navigation summary for authenticated users](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20221203&_u.date01=20230305&_.useg=user8twPUpCZT8qMEc9RwdXoUg&_r.tabId=navigationsummary&_r.drilldown=analytics.pagePath:~2Fdisability~2Ffile-disability-claim-form-21-526ez~2Fintroduction~2F&explorer-table.plotKeys=%5B%5D/), Dec 3, 2022-Mar 5, 2023

|Previous Page | Pageviews |
| -----------  | -----------  | 
| /disability/file-disability-claim-form-21-526ez/index.html|531,821 |
| /disability/file-disability-claim-form-21-526ez/start/|486,352 |
| /index.html|86,889 |
| /disability/file-disability-claim-form-21-526ez/resume/|60,696 |
| /disability/how-to-file-claim/index.html|32,908 |
| /resources/the-pact-act-and-your-va-benefits/index.html|30,460 |
| /disability/file-disability-claim-form-21-526ez/veteran-information/|16,890 |
| /my-va/index.html?postlogin=true|16,567 |
| /disability/index.html|15,908 |
| /my-va/index.html|11,533 |


#### Downloading letters
- **URL:** `/records/download-va-letters/index.html`
- [Download VA letters navigation summary for authenticated users](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20221203&_u.date01=20230305&_.useg=user8twPUpCZT8qMEc9RwdXoUg&_r.tabId=navigationsummary&_r.drilldown=analytics.pagePath:~2Frecords~2Fdownload-va-letters~2Findex.html&explorer-table.plotKeys=%5B%5D/), Dec 3, 2022-Mar 5, 2023

|Previous Page | Pageviews |
| -----------  | -----------  | 
| /index.html| 406,971 |
| /search/index.html?t=false| 58,802 |
| /records/download-va-letters/letters/letter-list/| 54,204 |
| /disability/index.html| 36,069 |
| /records/index.html| 35,068 |
| /records/download-va-letters/letters/confirm-address/| 26,901 |
| /index.html?postlogin=true| 20,924 |
| /my-va/index.html?postlogin=true| 19,775 |
| /va-payment-history/payments/index.html| 19,332 |
| /track-claims/your-claims/| 16,812 | 


#### Scheduling appointments
- **URL:** `/health-care/schedule-view-va-appointments/index.html`
- [Schedule and view appointments navigation summary for authenticated users](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20221203&_u.date01=20230305&_.useg=user8twPUpCZT8qMEc9RwdXoUg&_r.tabId=navigationsummary&_r.drilldown=analytics.pagePath:~2Fhealth-care~2Fschedule-view-va-appointments~2Findex.html&explorer-table.plotKeys=%5B%5D/), Dec 3, 2022-Mar 5, 2023

|Previous Page | Pageviews |
| -----------  | -----------  | 
| /index.html | 172,250 |
| /sign-in/index.html?application=mhv&to=home&oauth=false | 68,656 |
| /health-care/schedule-view-va-appointments/appointments/index.html | 33,539 |
| /my-va/index.html?postlogin=true | 21,999 |
| /health-care/index.html | 12,270 |
| /health-care/schedule-view-va-appointments/index.html?postlogin=true | 8,018 |
| /health-care/refill-track-prescriptions/index.html | 7,922 |
| /health-care/secure-messaging/index.html | 7,507 |
| /index.html?postlogin=true | 7,262 |
| /my-va/index.html | 6,466 |



## Search
### What are the top search terms?
- Confidence rating: low

We looked at GA and a DOMO search kpi report to evaluate top search terms. There are discrepancies between the two reports, and as of 3/6/23, we’re not sure why. 

The analytics team will dig into the discrepancy. For now, we have two flavors of the same report:

#### DOMO Search terms for Feb 1, 2022 - Feb 1, 2023
 - (Review dashboard at this [link](https://va-gov.domo.com/page/1964748112/kpis/details/552188912) and add date range after page loads)

|Search terms|  Searches|
| -----------  | -----------  |
|travel pay|    82,869|
|21-526ez|  72,933|
|dependents|    69,013|
|dd214| 51,480|
|travel reimbursement|  50,388|
|21-4138|   48,333|
|20-0995|   47,257|
|certificate of eligibility|    42,409|
|21-22| 41,106|
|direct deposit|    40,971|
|jobs|  40,600|
|coe|   37,574|
|careers|   36,860|
|ebenefits| 36,438|
|letters|   35,638|
|rating|    33,684|
|forms| 33,288|
|add dependent| 31,153|
|payment history|   30,660|
|burn pit registry  |30,021|
|travel|    28,836|
|disability rating| 28,417|
|intent to file|    27,974|
|travel claim|  |27,193|
|21-686c|   26,796|

#### GA Search Terms
- ([Search terms report](https://analytics.google.com/analytics/web/#/report/content-site-search-search-terms/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=builtin1&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25/)), Feb 1, 2022-Feb 1, 2023

|Search terms|  Searches|
| -----------  | -----------  |
|health|    3,063,494|
|(other)|   1,377,524|
|urgent_care|   762,369|
|benefits|  692,317|
|vet_center|    353,703|
|provider|  332,044|
|pharmacy|  271,066|
|emergency_care|    200,796|
|cemetery|  79,116|
|travel pay|    62,708|
|dependents|    58,802|
|20-0995|   42,685|
|travel reimbursement|  42,264|
|21-4138|   40,072|
|21-22| 36,701|
|certificate of eligibility|    35,066|
|21-526ez|  34,296|
|ebenefits| 30,885|
|21-526EZ|  28,996|
|direct deposit |28,703|
|forms| 28,146|
|add dependent| 27,699|
|dd214  |27,580|
|burn pit registry| 26,566|
|Jobs   |25,313|


### How often is search used? 
- [Site search overview](https://analytics.google.com/analytics/web/#/report/content-site-search-overview/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201/), Feb 1, 2022-Feb 1, 2023
- Confidence level: moderate

These metrics were tricky to figure out.  The [Domo dashboard](https://va-gov.domo.com/page/1964748112) the analytics team sent me doesn’t clearly answer this question, so I went to GA and looked at the Site Search report.

GA reports that 7.1% of visits included the use of site search.


### How often are people clicking best bets for search?
- [Search events report](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&explorer-segmentExplorer.segmentId=analytics.eventAction&_r.drilldown=analytics.eventCategory:Interactions&explorer-table.plotKeys=%5B%5D&explorer-table.filter=recommended/), Feb 1, 2022-Feb 1, 2023
- Confidence level: low

GA has an event to track clicks on best bets (called Recommended Results in the report), and the report shows 2,093,021 total events for the time period. 

However, other search results aren’t tagged in the same way, so we can’t run a comparison for one over the other.  We may be able to get better insights into this question by reaching out to Search.gov, or with further engagement of our analytics team.
