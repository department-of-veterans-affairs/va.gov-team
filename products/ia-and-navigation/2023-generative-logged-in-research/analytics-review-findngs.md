# VA.gov Logged in IA Analytics Review

`DRAFT`


## Questions for Analytics team
### Pages
- In the page reports, what are these things:
	-  `(other)` 
	- /sign-in/index.html?application=mhv&to=home
	- /index.html?next=loginmodal (if this is people clicking sign in on the homepage, wouldn’t My VA be the next thing since we have that redirect in place?)
- [The report shared with me](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.plotKeys=%5B%5D&explorer-table.filter=nav-header-sign-in&explorer-table.secSegmentId=analytics.pagePath&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22RE%22,%22nav-header-sign-in%22,0%5D%5D&explorer-table.rowStart=0&explorer-table.rowCount=250/) shows the page people were on when they signed in, if they clicked the header link - I don’t think it includes any CTA buttons that would be within page content.  The question I’m trying to answer is “What are the top ten popular pages for people to sign in on?” 
	- I think the “login-modal-opened” event would tell us where sign in attempts took place, regardless of what they clicked on to trigger it. correct? [report](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=&_r.drilldown=analytics.eventCategory:Sign-on,analytics.eventAction:Login%20-%20vagovprod,analytics.eventLabel:login-modal-opened&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath/)
	- If we wanted to instead look at pages where people definitely completed the sign in process, would looking at the pages w/ `?postLogin` in the URL tell us that? [report](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22PT%22,%22%3FpostLogin%22,0%5D%5D&explorer-table.plotKeys=%5B%5D/)

### Events
- How do I determine how many clicks happened, or pages were visited, before a specific event was fired?
- How do I answer “What are peoples’ next clicks **after** signing in?”
	- It could be going to a new page, or some other interaction on the page they are on.  
	- How do we distinguish between the two?

### Search 
- Do we have data about best bets in our search results (“our top recommendations for you”) to better understand engagement with those results? I don't see any specific events firing in the console when I click on those. 
- There are some differences between what I see in Domo and GA Site Search, for example in the GA “Site Search” report, and the Domo dashboard, the top keywords don’t align.
	- Which is the source of truth?
	- Are some searches programmatically performed? I noticed some search terms in GA have a `_` instead of a space.

### Custom segments
 - For comparing logged in vs. logged out users, I used the following custom segments in GA. Is this correct?
	- VA.gov - Session - Authenticated - LOA Present
	- VA.gov - Session - No LOA Present [Veteran Not Logged In]
-  In [this report](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=usersYzZ0EUDT4uJLecPmCwn3Q,userBgZiUrK9Sieg7jBAnx44OQ/), why don’t the total of the two segments equal 100%, if they are opposites of each other?

## Signing in to VA.gov
1. What percentage of users signed in to VA.gov over the last year (2/22-2/23)?
19.04% of users authenticated in their session. ([Report](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=usersYzZ0EUDT4uJLecPmCwn3Q,builtin1/))


### What are the top ten popular pages for people to sign in on? 
These are the top 10 pages where sign-in events occurred, excluding va.gov/sign-in. The events we looked at are fired when people click on a sign in CTA, and the header sign-in button. ([Report](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22RE%22,%22nav-header-sign-in%7Clogin-link-clicked-cta%22,0%5D%5D&explorer-table.rowCount=250/))


3. How many clicks do people usually take/pages do people usually visit before signing in?

Not sure how to figure this one out.

4.  What are peoples’ next clicks **after** signing in?

Behavior flow report?

### What is the % breakdown of people who click sign in CTAs vs. “Create Account” CTAs?
Of 30,818,378 total events, 3.45% were “create account” events. Note that the CTA events do not include interactions with the sign in button on the header; these represent sign in CTAs within pages.

| Event Label      | Total Events | Report link |
| ----------- | ----------- | ----------- |
|register-link-clicked-[logingov or idme] | 1,024,110 | [report](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22PT%22,%22register-link-clicked-%22,0%5D,%5B0,%22analytics.eventLabel%22,%22PT%22,%22false%22,1%5D%5D/) |
|login-link-clicked-cta| 29,794,268 | [report](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22PT%22,%22login-link-clicked-cta%22,0%5D%5D/) |


### For people who click “Create Account”, where are they coming from (previous page)?

Since the “Create Account” link is contained within the login modal, we looked at the page the person triggered the modal from by looking at the `register-link-clicked-[logingov or idme]` event. [Report](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22PT%22,%22register-link-clicked-%22,0%5D,%5B0,%22analytics.eventLabel%22,%22PT%22,%22false%22,1%5D%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.rowStart=0&explorer-table.rowCount=50/)	

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
 The top 25 most popular pages include the VA.gov homepage, and:
	- Pages related to claims
	- the facility locator
	- My VA
	- pages related to payments
	- Pages related to disability ratings
	
There were multiple variations of the `/auth/` redirects that happen in the sign-in process in the initial report, so we filtered those out to land on these results. ([Report](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22PT%22,%22~2Fauth~2F%22,1%5D%5D&explorer-table.plotKeys=%5B%5D/))

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



2. What are the most popular landing pages?

 ([Report](https://analytics.google.com/analytics/web/#/report/content-landing-pages/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25/))

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

4. What are the 25 most popular pages visited while signed in? ([Report](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=usersYzZ0EUDT4uJLecPmCwn3Q/))

|Page | Pageviews |
| -----------  | -----------  | 
| /index.html|  44,141,374 |
| (other)|  38,677,534 |
| /track-claims/your-claims/|   29,340,018 |
| /claim-or-appeal-status/index.html|   19,267,773 |
| /index.html?next=loginmodal|  14,467,958 |
| /track-claims/index.html|     12,626,673 |
| /auth/login/callback?type=idme    | 11,581,963 |
| /my-va/index.html | 10,873,618 |
| /auth/login/callback?type=custom  | 10,642,914 |
| /auth/login/callback?type=dslogon | 9,361,986 |
| /my-va/index.html?postlogin=true|     8,115,723 |
| /va-payment-history/payments/index.html|  6,620,163 |
| /index.html?next=loginmodal&postlogin=true    | 6,417,762 |
| /auth/login/callback?type=mhv|    6,366,107 |
| /va-payment-history/index.html|   6,275,515 |
| /claim-or-appeal-status/index.html?postlogin=true | 6,194,059 |
| /logout/index.html    | 4,979,978 |
| /disability/view-disability-rating/rating/    | 4,929,436 |
| /disability/file-disability-claim-form-21-526ez/introduction/ | 4,539,980 |
| /records/download-va-letters/index.html   | 4,260,424 |
| /health-care/schedule-view-va-appointments/appointments/index.html|   4,038,070 |
| /session-expired/index.html   | 3,989,442 |
| /profile/personal-information/    | 3,879,188 |
| /records/download-va-letters/letters/letter-list/ | 3,633,688 |
| /search/index.html?t=false    | 3,594,106 |

6. What are the 25 most popular pages visited while signed out? ([Report](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=userBgZiUrK9Sieg7jBAnx44OQ&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25/))

|Page | Pageviews |
| -----------  | -----------  | 
| /index.html    | 31,861,090 |
| /facilities/index.html?XXX     | 17,221,456 |
| /sign-in/index.html?application=mhv&to=home    | 12,947,811 |
| (other)    | 8,507,231 |
| /search/index.html?t=false     | 5,859,946 |
| /resources/the-pact-act-and-your-va-benefits/index.html |     5,557,123 |
| /disability/compensation-rates/veteran-rates/index.html    | 5,505,467 |
| /index.html?next=loginmodal    | 5,478,655 |
| /claim-or-appeal-status/index.html     | 4,513,532 |
| /track-claims/your-claims/     | 4,440,458 |
| /find-forms/index.html     | 3,288,856 |
| /find-locations/index.html     | 3,172,691 |
| /covid19screen/    | 2,822,371 |
| /session-expired/index.html    | 2,777,240 |
| /sign-in/index.html?application=mhv&to=home&oauth=false    | 2,606,296 |
| /contact-us/index.html     | 2,581,410 |
| /find-locations/   | 2,248,542 |
| /education/gi-bill-comparison-tool/index.html?search=name&excludedschooltypes[]=public&excludedschooltypes[]=for profit&excludedschooltypes[]=private&excludedschooltypes[]=foreign&excludedschooltypes[]=flight&excludedschooltypes[]=correspondence&excludedschooltypes[]=high school    | 2,170,784 |
| /my-va/index.html  | 1,971,642 |
| /disability/file-disability-claim-form-21-526ez/introduction/  | 1,893,108 |
| /records/get-military-service-records/index.html |    1,745,846 |
| /search/index.html?t=true |   1,729,275 |
| /health-care/schedule-view-va-appointments/index.html |   1,667,208 |
| /health-care/appointment-pre-check-in/index.html |    1,639,173 |
| /education/gi-bill-comparison-tool/index.html?search=location |   1,593,663 |


### What are the average number of pages visited on the site in a session?
* Logged in: 16.95
* Logged out: 3.53
- Logged-in users have much longer session durations than logged out: 15:49 compared to 3:08. Logged-in users also have significantly lower bounce rates: .03% compared to 36.78%

6. What are the top ten most popular logged in tasks?
	- How are we defining a task?
	
8. For the top ten most popular logged in tasks, how many clicks/page visits does it take for people to get to those pages?
- Navigation summary report

9. For the top ten most popular logged in tasks, what are the top previous pages?
- Navigation summary report

## Search
1. What are the top search terms?

**Domo Search KPI dashboard report** ([link](https://va-gov.domo.com/page/1964748112/kpis/details/552188912))
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

**GA Search Terms report** ([link](https://analytics.google.com/analytics/web/#/report/content-site-search-search-terms/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&_.useg=builtin1&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25/))
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


2. How often is search used/search button clicked? (Search.gov might need to help us).

These metrics were tricky to figure out.  The [Domo dashboard](https://va-gov.domo.com/page/1964748112) the analytics team sent me doesn’t clearly answer this question, so I went to GA and looked at the Site Search report.

GA reports that 7.1% of visits included the use of site search.


3. How often are people clicking best bets for search (especially if task-related)?
- Need help getting these data
