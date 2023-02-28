# VA.gov Logged in IA Analytics Review
2/28/2023

For comparing logged in vs. logged out users, I used the following custom segments in GA:
- VA.gov - Session - Authenticated - LOA Present
- VA.gov - Session - No LOA Present [Veteran Not Logged In]

## Questions for Analytics team
- Is the Site Search report in GA accurate? There are some differences between what I see in Domo (e.g. next bullet)
- What is the difference between the GA “Site Search” report, and the Domo dashboard? The top keywords don’t align.
	- Are some searches programmatically performed? I noticed some search terms in GA have a `_` instead of a space.
- How do I determine how many clicks happened, or pages were visited, before a specific event was fired?
- Do we have data about best bets in our search results (“our top recommendations for you”) to better understand engagement with those results?
- What does `(other)` represent in the Page reports?
- 


## Signing in to VA.gov
1. What percentage of users sign in to VA.gov over the last year (2/22-2/23)?

10.87%

2. What are the top ten popular pages for people to sign in on? ([View Google Sheets export](https://docs.google.com/spreadsheets/d/10LxJE3j8SCBi8aNL0RaC4wdLGVqwSpuvLDmc3jB1EsU/edit?usp=sharing))
   * [www.va.gov/](http://www.va.gov/) 
   * [www.va.gov/claim-or-appeal-status/](http://www.va.gov/claim-or-appeal-status/) 
   * [www.va.gov/va-payment-history/](http://www.va.gov/va-payment-history/) 
   * [www.va.gov/my-va/](http://www.va.gov/my-va/) 
   * [www.va.gov/track-claims/your-claims/](http://www.va.gov/track-claims/your-claims/) 
   * [www.va.gov/health-care/schedule-view-va-appointments/](http://www.va.gov/health-care/schedule-view-va-appointments/) 
   * [www.va.gov/records/download-va-letters/](http://www.va.gov/records/download-va-letters/) 
   * [www.va.gov/va-payment-history/payments/](http://www.va.gov/va-payment-history/payments/) 
   * [www.va.gov/claim-or-appeal-status/?postlogin=true](http://www.va.gov/claim-or-appeal-status/?postlogin=true) 
   * [www.va.gov/disability/compensation-rates/veteran-rates/](http://www.va.gov/disability/compensation-rates/veteran-rates/) 

3. How many clicks do people usually take/pages do people usually visit before signing in?

Not sure how to figure this one out.

4.  What are peoples’ next clicks **after** signing in?

Behavior flow report?

5. What is the % breakdown of people who click sign in CTAs vs. “Create Account” CTAs?
Of 33,172,355 total events, 3.13% were “create account” events.

| Event Label      | Total Events |
| ----------- | ----------- |
|register-link-clicked-[logingov or idme] | 1,030,721|
|login-link-clicked-cta| 32,141,634 |


6. For people who click “Create Account”, where are they coming from (previous page)?
	* [Report](https://docs.google.com/spreadsheets/d/1Bgg2X5vJ_f0xqQUvyGPPpLGB4lqsYSSTSt2R3b9htkE/edit?usp=sharing)

## Navigating to tasks & tools
1. What are the most popular pages overall?
 Top 25 pages from GA:

| URL | Pageviews|
| -----------  | -----------  |
| www.va.gov/ | 77,674,202 |
| www.va.gov/track-claims/your-claims/ |    34,712,069 |
| www.va.gov/claim-or-appeal-status/ |  24,208,408 |
| www.va.gov/facilities/index.html?XXX |    21,533,531 |
| www.va.gov/?next=loginmodal | 20,736,018 |
| www.va.gov/sign-in/?application=mhv&to=home | 16,711,890 |
| www.va.gov/auth/login/callback?type=idme |    13,649,687 |
| www.va.gov/track-claims/   |13,559,758 |
| www.va.gov/my-va/ |   13,149,365 |
| www.va.gov/reach/lethal-means/ |  13,068,912 |
|www.va.gov/auth/login/callback?type=custom |   11,716,359|
|www.va.gov/my-va/?postlogin=true | 10,878,523|
|www.va.gov/auth/login/callback?type=dslogon |  10,367,120|
|www.va.gov/search/?t=false |   9,816,530|
|www.va.gov/va-payment-history/payments/ |  7,828,250|
|www.va.gov/va-payment-history/ |   7,636,068|
|www.va.gov/auth/login/callback?type=mhv |  7,526,437|
|www.va.gov/claim-or-appeal-status/?postlogin=true |    6,966,709|
|www.va.gov/disability/file-disability-claim-form-21-526ez/introduction/ |  6,654,005|
|www.va.gov/?next=loginmodal&postlogin=true |   6,641,747|
|www.va.gov/session-expired/ |  6,301,222|
|www.va.gov/disability/compensation-rates/veteran-rates/ |  6,181,000|
|www.va.gov/disability/view-disability-rating/rating/ | 5,938,474|
|www.va.gov/health-care/schedule-view-va-appointments/appointments/ |   5,659,821|



2. What are the most popular landing pages? ([Report](https://analytics.google.com/analytics/web/#/report/content-landing-pages/a50123418w177519031p184624291/_u.date00=20220201&_u.date01=20230201&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25/))

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


5. What are the average number of pages visited on the site in a session?
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
