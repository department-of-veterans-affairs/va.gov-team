# Analytics for Find a Form
> for qualitative (Medallia) feedback, please see (TBD)

- [CSAT scores](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/analytics/analytics-find-a-form.md#csat-scores)
- [Summary data](#summary-data)
- [Search page interactions](#search-page-interactions)
  - [Frequently used forms (blue boxes)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/analytics/2025-find-a-form.md#frequently-used-forms-blue-boxes)
  - [Manage your VA benefits and other information online list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/analytics/2025-find-a-form.md#manage-your-va-benefits-and-other-information-online-list)
  - [More information box](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/analytics/2025-find-a-form.md#more-information-box)
- [Search metrics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/analytics/analytics-find-a-form.md#search-metrics)
  - [Most frequent numeric ID queries](#most-frequent-numeric-id-queries)
  - [Most frequent plain text queries](#most-frequent-plain-text-queries)
- [Search result metrics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/analytics/analytics-find-a-form.md#search-result-metrics)
  - [Most frequently viewed results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/analytics/2025-find-a-form.md#most-frequently-viewed-results)
  - [Most frequently clicked results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/analytics/2025-find-a-form.md#most-frequently-clicked-results)
  - [Most frequently downloaded forms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/analytics/2025-find-a-form.md#most-frequently-downloaded-forms)
  
## CSAT Average user combined experience
- CSAT dashboard in DOMO, CSAT captured by filtering this dashboard by month and facility locator url.
- Experience scores are based on A11 survey. Where users choose a rating from 1 to 5, 4 and 5 are counted as 100%, others as 0%.

<details>
	<summary>Scores are for the search page itself (does not include About pages)</summary>
	

</details>


## Summary data
> pertains to landing page only

|	Month	|	Total users	|	Returning users	|	Engagement rate	|	Average session duration (sec)	|
|	---	|	:---:		|	:---:		|	:---:		|	:---:		|
|	January 	|	 66,728 	|	 40,166 	|	98.8%	|	27	|
|	February	|	 56,620 	|	 32,680 	|	98.5%	|	23	|
|	March	|	 57,304 	|	 33,212 	|	98.5%	|	27	|
|	April	|	 56,164 	|	 32,566 	|	98.7%	|	27	|
|	May	|	 52,820 	|	 30,514 	|	98.5%	|	29	|
|	June	|	 53,086 	|	 32,528 	|	99.0%	|	30	|



## Search page interactions
### Frequently used forms (blue boxes)	

| Link	| Jan 2025  | Feb 2025  | March 2025  | April 2-25 | May 2025 | June 2025
| --- | :---:|:---:|:---:|:---:|:---:|:---:| 
| File a VA disability claim - Apply online (link to VA Form 21-526EZ)	|	 6,650 	|	 5,890 	|	 7,600 	|	 5,168 	|	 5,548 	|	 6,422 	|
| Apply for the GI Bill and other education benefits (VA Forms 22-1990 and 22-1995) - Learn how to apply online	|	 9,804 	|	 4,674 	|	 4,902 	|	 4,978 	|	 5,738 	|	 4,674 	|
| Apply for VA health care - Apply online (link to VA Form 10-10 EZ)	|	 9,804 	|	 4,674 	|	 4,902 	|	 4,978 	|	 5,738 	|	 4,674 	|


	
### Manage your VA benefits and other information online list

| Link	| DataLayer Event Name | Jan 2025  | Feb 2025  | March 2025  | April 2025 | May 2025 | June 2025
| --- | :---:|:---:|:---:|:---:|:---:|:---:| :---:| 
| 	Change your address in your VA.gov profile	|	nav-link-click	|	 342 	|	 494 	|	 304 	|	 380 	|	 380 	|	 304 	|
|	Change your address in your VA.gov profile	|	nav-linkslist	|	 532 	|	 570 	|	 76 	|	 -   	|	 -   	|	 -   	|
|	Change your direct deposit information		|	nav-link-click	|	 1,178 	|	 798 	|	 836 	|	 1,254 	|	 760 	|	 684 	|
|	Change your direct deposit information	|	nav-linkslist		|	 1,368 	|	 874 	|	 456 	|	 -   	|	 -   	|	 -   	|
| 	Request your military records, including DD214	|	nav-link-click	|	 3,154 	|	 3,154 	|	 3,116 	|	 3,344 	|	 3,002 	|	 2,166 	|
|	Request your military records, including DD214	|	nav-linkslist	|	 3,344 	|	 3,420 	|	 1,520 	|	 -   	|	 -   	|	 -   	
| 	Get your VA records and documents online	|	nav-link-click	|	 5,928 	|	 7,904 	|	 6,802 	|	 6,384 	|	 4,256 	|	 5,130 	|
|	Get your VA records and documents online	|	nav-linkslist	|	 6,270 	|	 8,170 	|	 3,686 	|	 -   	|	 -   	|	 -   	|

### More information box
| Link	| event | Jan 2025  | Feb 2025  | March 2025  | April 2025 | May 2025 | June 2025
| --- |--- | :---:|:---:|:---:|:---:|:---:|:---:|
|	SGLI, VGLI, and other VA life insurance programs	|	nav-link-click	|	 684 	|	 722 	|	 836 	|	 646 	|	 646 	|	 418 	|
|	SGLI, VGLI, and other VA life insurance programs	|	nav-linkslist	|	 760 	|	 874 	|	 380 	|	 -   	|	 -   	|	 -   	|
 | 	Department of Defense (DOD) forms 	|	nav-link-click	|	 1,178 	|	 1,558 	|	 1,064 	|	 1,064 	|	 1,026 	|	 1,102 	|
|	Department of Defense (DOD) forms 	|	nav-linkslist	|	 1,406 	|	 1,710 	|	 570 	|	 -   	|	 -   	|	 -   	|
|	Contact the VA forms managers	|	nav-link-click	|	 1,938 	|	 2,014 	|	 1,330 	|	 1,026 	|	 1,026 	|	 1,596 	|
|	Contact the VA forms managers	|	nav-linkslist	|	 2,014 	|	 2,128 	|	 912 	|	 -   	|	 -   	|	 -   	|


## Search metrics


| Queries |Jan 2025  | Feb 2025  | March 2025  | April 2025 | May 2025 | June 2025
| --- | :---:|:---:|:---:|:---:|:---:|:---:|
| Total queries | 186,960 | 154,014  | 148,238| 145,350 | 133,152 | 134,672
| searched by numeric ID |	 122,132 	|	 79,800 	|	 39,748 	|	 39,140 	|	 35,454 	|	 36,366 	|
| searched with plain text |  64,828 	|	 74,214 	|	 108,490 	|	 106,210 	|	 97,698 	|	 98,306 	|

### Most frequent numeric ID queries

<details>
	<summary> January - June 2025 top forms  </summary> 

| Numeric ID |Jan 2025  | Feb 2025  | March 2025  | April 2025 | May 2025 | June 2025
| --- | :---:|:---:|:---:|:---:|:---:|:---:|
| total |	 122,132 	|	 79,800 	|	 39,748 	|	 39,140 	|	 35,454 	|	 36,366 	|  
|	21-0966	|	 1,026 	|	 1,102 	|	 3,382 	|	 2,546 	|	 2,850 	|	 2,470 	|
|	21-526ez	|	 4,370 	|	 2,508 	|	 950 	|	 1,140 	|	 1,064 	|	 722 	|
|	22-1995	|	 7,600 	|	 2,166 	|	 532 	|	 114 	|	 76 	|	 38 	|
|	21-4138	|	 2,280 	|	 2,508 	|	 1,216 	|	 1,292 	|	 532 	|	 798 	|
|	20-0995	|	 3,572 	|	 2,128 	|	 988 	|	 760 	|	 760 	|	 380 	|
|	4138	|	 1,900 	|	 836 	|	 494 	|	 950 	|	 1,292 	|	 1,444 	|
|	21-22	|	 2,242 	|	 1,406 	|	 988 	|	 760 	|	 646 	|	 722 	|
|	526ez	|	 1,672 	|	 1,862 	|	 1,292 	|	 798 	|	 342 	|	 760 	|
|	21-4142	|	 1,862 	|	 1,254 	|	 608 	|	 722 	|	 1,102 	|	 494 	|
|	526	|	 836 	|	 912 	|	 228 	|	 988 	|	 1,064 	|	 1,406 	|
|	10-10ezr	|	 1,178 	|	 950 	|	 988 	|	 380 	|	 380 	|	 1,444 	|
|	10-10cg	|	 1,026 	|	 646 	|	 684 	|	 684 	|	 874 	|	 912 	|
|	1199	|	 798 	|	 456 	|	 1,216 	|	 950 	|	 760 	|	 646 	|
|	995	|	 950 	|	 722 	|	 380 	|	 608 	|	 684 	|	 570 	|
|	21-2680	|	 1,292 	|	 836 	|	 684 	|	 456 	|	 342 	|	 228 	|
|	22-5490	|	 2,318 	|	 532 	|	 152 	|	 190 	|	 76 	|	 114 	|
|	20-0996	|	 1,178 	|	 646 	|	 380 	|	 190 	|	 456 	|	 418 	|
|	781	|	 950 	|	 912 	|	 418 	|	 228 	|	 228 	|	 380 	|
|	21-686c	|	 1,254 	|	 874 	|	 304 	|	 342 	|	 114 	|	 38 	|
|	21p-534ez	|	 1,140 	|	 646 	|	 228 	|	 190 	|	 266 	|	 380 	|

</details> 

### Most frequent plain text queries

<details>
	<summary> January - June 2025 top forms </summary>

|Plain text |Jan 2025  | Feb 2025  | March 2025  | April 2025 | May 2025 | June 2025
| --- | :---:|:---:|:---:|:---:|:---:|:---:|
| total |	 64,828 	|	 74,214 	|	 108,490 	|	 106,210 	|	 97,698 	|	 98,306 	|
|	(not set)	|	 -   	|	 31,692 	|	 87,704 	|	 85,386 	|	 81,586 	|	 82,726 	|	 369,094 
|	foia	|	 1,026 	|	 646 	|	 646 	|	 494 	|	 38 	|	 76 	|	 2,926 
|	request	|	 342 	|	 190 	|	 -   	|	 342 	|	 228 	|	 494 	|	 1,596 
|	intent to file	|	 722 	|	 304 	|	 38 	|	 76 	|	 190 	|	 152 	|	 1,482 
|	aid and attendance	|	 570 	|	 152 	|	 342 	|	 190 	|	 152 	|	 -   	|	 1,406 
|	dic	|	 456 	|	 190 	|	 304 	|	 266 	|	 152 	|	 -   	|	 1,368 
|	coe	|	 228 	|	 342 	|	 190 	|	 228 	|	 190 	|	 114 	|	 1,292 
|	dbq	|	 646 	|	 228 	|	 38 	|	 114 	|	 114 	|	 76 	|	 1,216 
|	direct deposit	|	 570 	|	 304 	|	 114 	|	 -   	|	 38 	|	 114 	|	 1,140 
|	tax	|	 418 	|	 494 	|	 76 	|	 114 	|	 -   	|	 -   	|	 1,102 
|	rfs	|	 304 	|	 152 	|	 152 	|	 76 	|	 114 	|	 266 	|	 1,064 
|	fmla	|	 114 	|	 304 	|	 76 	|	 76 	|	 266 	|	 114 	|	 950 
|	travel	|	 266 	|	 228 	|	 266 	|	 76 	|	 38 	|	 38 	|	 912 
|	burial	|	 304 	|	 304 	|	 38 	|	 -   	|	 114 	|	 114 	|	 874 
|	certificate of eligibility	|	 494 	|	 228 	|	 -   	|	 76 	|	 38 	|	 -   	|	 836 

</details>

## Search result metrics

### Most frequently viewed results

<details> 
<summary> January - June 2025 top forms </summary>

| Form	| Jan 2025  | Feb 2025  | March 2025  | April 2025 | May 2025 | June 2025
| --- | :---:|:---:|:---:|:---:|:---:|:---:|
|	/find-forms/?q=22-1995	|	 7,904 	|	 3,876 	|	 4,294 	|	 2,280 	|	 3,116 	|	 3,192 
|	/find-forms/?q=21-526ez	|	 4,712 	|	 3,876 	|	 3,382 	|	 3,914 	|	 3,762 	|	 3,686 
|	/find-forms/?q=20-0995	|	 4,028 	|	 3,268 	|	 2,774 	|	 3,230 	|	 3,610 	|	 2,888 
|	/find-forms/?q=21-4138	|	 2,432 	|	 3,686 	|	 3,914 	|	 3,990 	|	 2,470 	|	 3,306 
|	/find-forms/?q=21-0966	|	 1,026 	|	 1,368 	|	 5,092 	|	 3,458 	|	 4,180 	|	 3,610 
|	/find-forms/?q=21-22	|	 2,470 	|	 2,014 	|	 2,812 	|	 2,584 	|	 2,166 	|	 3,078 
|	/find-forms/?q=4138	|	 2,014 	|	 1,330 	|	 1,900 	|	 2,888 	|	 3,572 	|	 3,420 
|	/find-forms/?q=526	|	 912 	|	 1,482 	|	 1,254 	|	 3,002 	|	 3,268 	|	 3,686 
|	/find-forms/?q=21-4142	|	 2,204 	|	 1,824 	|	 2,546 	|	 1,976 	|	 2,926 	|	 2,052 
|	/find-forms/?q=526ez	|	 2,128 	|	 2,926 	|	 2,774 	|	 2,052 	|	 1,178 	|	 1,596 
|	/find-forms/?q=22-5490	|	 2,356 	|	 912 	|	 1,444 	|	 1,900 	|	 1,520 	|	 2,850 
|	/find-forms/?q=10-10ezr	|	 1,672 	|	 1,482 	|	 2,014 	|	 1,178 	|	 1,216 	|	 3,154 
|	/find-forms/?q=10-10cg	|	 1,748 	|	 1,102 	|	 1,558 	|	 1,444 	|	 2,014 	|	 2,204 
|	/find-forms/?q=0995	|	 912 	|	 1,254 	|	 1,292 	|	 1,672 	|	 2,090 	|	 1,938 
|	/find-forms/?q=21-2680	|	 1,482 	|	 1,254 	|	 2,128 	|	 1,596 	|	 1,026 	|	 988 
|	/find-forms/?q=21-686c	|	 1,330 	|	 1,178 	|	 1,596 	|	 1,634 	|	 950 	|	 1,368 
|	/find-forms/?q=20-0996	|	 1,178 	|	 1,102 	|	 1,292 	|	 1,330 	|	 1,672 	|	 1,444 
|	/find-forms/?q=1199	|	 1,558 	|	 722 	|	 1,292 	|	 1,292 	|	 874 	|	 722 
|	/find-forms/?q=21-674	|	 1,140 	|	 1,026 	|	 1,254 	|	 1,444 	|	 722 	|	 874 
|	/find-forms/?q=0781	|	 1,216 	|	 1,216 	|	 950 	|	 874 	|	 1,178 	|	 950 
|	/find-forms/?q=21-0845	|	 1,596 	|	 1,216 	|	 760 	|	 1,520 	|	 722 	|	 570 
|	/find-forms/?q=21p-534ez	|	 1,292 	|	 1,026 	|	 912 	|	 798 	|	 950 	|	 1,292 
|	/find-forms/?q=21-0781	|	 1,026 	|	 1,254 	|	 1,178 	|	 950 	|	 912 	|	 874 
|	/find-forms/?q=1010ez	|	 988 	|	 228 	|	 760 	|	 1,672 	|	 494 	|	 1,140 
|	/find-forms/?q=10182	|	 798 	|	 684 	|	 1,026 	|	 912 	|	 874 	|	 912 
|	/find-forms/?q=686c	|	 1,102 	|	 912 	|	 494 	|	 798 	|	 1,026 	|	 684 
|	/find-forms/?q=21-4142a	|	 684 	|	 608 	|	 912 	|	 798 	|	 1,216 	|	 722 
|	/find-forms/?q=21-10210	|	 684 	|	 722 	|	 1,178 	|	 798 	|	 380 	|	 1,026 
|	/find-forms/?q=22-1990e	|	 1,102 	|	 456 	|	 418 	|	 836 	|	 722 	|	 1,254 
|	/find-forms/?q=10-10ez	|	 608 	|	 532 	|	 950 	|	 874 	|	 722 	|	 874 
|	/find-forms/?q=foia	|	 1,102 	|	 760 	|	 1,292 	|	 760 	|	 304 	|	 342 
|	/find-forms/?q=0845	|	 760 	|	 1,520 	|	 912 	|	 608 	|	 266 	|	 342 
|	/find-forms/?q=0996	|	 684 	|	 304 	|	 380 	|	 1,406 	|	 1,064 	|	 418 
|	/find-forms/?q=21-8940	|	 608 	|	 988 	|	 684 	|	 646 	|	 570 	|	 722 
|	/find-forms/?q=22-1990	|	 1,064 	|	 646 	|	 456 	|	 722 	|	 608 	|	 532 
|	/find-forms/?q=intent+to+file	|	 760 	|	 608 	|	 608 	|	 760 	|	 570 	|	 608 
|	/find-forms/?q=0740	|	 494 	|	 608 	|	 532 	|	 988 	|	 608 	|	 456 
|	/find-forms/?q=4142	|	 1,140 	|	 190 	|	 532 	|	 570 	|	 608 	|	 646 
|	/find-forms/?q=10-10171	|	 380 	|	 608 	|	 950 	|	 1,064 	|	 456 	|	 -   
|	/find-forms/?q=10-10172	|	 494 	|	 646 	|	 722 	|	 494 	|	 380 	|	 532 
|	/find-forms/?q=10-10hs	|	 950 	|	 494 	|	 646 	|	 228 	|	 380 	|	 570 
|	/find-forms/?q=sf180	|	 304 	|	 418 	|	 1,216 	|	 608 	|	 380 	|	 266 
|	/find-forms/?q=21p-530ez	|	 456 	|	 304 	|	 456 	|	 532 	|	 532 	|	 874 
|	/find-forms/?q=chapter+35	|	 532 	|	 266 	|	 456 	|	 722 	|	 342 	|	 798 
|	/find-forms/?q=dd214	|	 1,710 	|	 1,026 	|	 152 	|	 38 	|	 38 	|	 114 
|	/find-forms/?q=674	|	 494 	|	 380 	|	 532 	|	 646 	|	 380 	|	 494 
|	/find-forms/?q=aid+and+attendance	|	 646 	|	 380 	|	 646 	|	 494 	|	 532 	|	 228 
|	/find-forms/?q=8940	|	 456 	|	 456 	|	 456 	|	 646 	|	 418 	|	 456 
|	/find-forms/?q=10-3542	|	 76 	|	 684 	|	 152 	|	 608 	|	 646 	|	 646 
|	/find-forms/?q=va+form+10-8678	|	 456 	|	 266 	|	 266 	|	 532 	|	 874 	|	 418 
|	/find-forms/?q=21p-527ez	|	 114 	|	 418 	|	 608 	|	 570 	|	 380 	|	 646 
|	/find-forms/?q=2237	|	 494 	|	 570 	|	 570 	|	 342 	|	 570 	|	 190 
|	/find-forms/?q=dic	|	 570 	|	 228 	|	 760 	|	 532 	|	 380 	|	 152 
|	/find-forms/?q=0966	|	 342 	|	 722 	|	 380 	|	 380 	|	 532 	|	 190 
|	/find-forms/?q=20-10206	|	 722 	|	 380 	|	 266 	|	 532 	|	 342 	|	 304 
|	/find-forms/?q=21-526	|	 190 	|	 646 	|	 760 	|	 418 	|	 228 	|	 304 
|	/find-forms/?q=2680	|	 418 	|	 304 	|	 760 	|	 228 	|	 304 	|	 418 
|	/find-forms/?q=534ez	|	 456 	|	 418 	|	 494 	|	 760 	|	 190 	|	 114 
|	/find-forms/?q=530ez	|	 266 	|	 380 	|	 798 	|	 380 	|	 342 	|	 228 
|	/find-forms/?q=va+form+20-0995	|	 570 	|	 152 	|	 304 	|	 228 	|	 456 	|	 684 
|	/find-forms/?q=5655	|	 570 	|	 380 	|	 532 	|	 304 	|	 342 	|	 190 
|	/find-forms/?q=request	|	 570 	|	 228 	|	 -   	|	 456 	|	 266 	|	 798 
|	/find-forms/?q=1099	|	 760 	|	 532 	|	 380 	|	 304 	|	 76 	|	 152 
|	/find-forms/?q=21p-0969	|	 532 	|	 342 	|	 342 	|	 114 	|	 304 	|	 570 
|	/find-forms/?q=direct+deposit	|	 646 	|	 304 	|	 532 	|	 228 	|	 152 	|	 342 
|	/find-forms/?q=10091	|	 190 	|	 266 	|	 494 	|	 494 	|	 380 	|	 342 
|	/find-forms/?q=21-4192	|	 494 	|	 380 	|	 380 	|	 304 	|	 342 	|	 266 
|	/find-forms/?q=10-10d	|	 380 	|	 190 	|	 456 	|	 456 	|	 228 	|	 418 
|	/find-forms/?q=burial	|	 304 	|	 456 	|	 304 	|	 228 	|	 532 	|	 304 
|	/find-forms/?q=10-7959c	|	 456 	|	 380 	|	 190 	|	 228 	|	 228 	|	 570 
|	/find-forms/?q=686	|	 38 	|	 228 	|	 380 	|	 418 	|	 532 	|	 456 
|	/find-forms/?q=travel	|	 418 	|	 456 	|	 418 	|	 456 	|	 114 	|	 190 
|	/find-forms/?q=21p-8416	|	 456 	|	 380 	|	 456 	|	 304 	|	 266 	|	 152 
|	/find-forms/?q=21-4170	|	 456 	|	 418 	|	 152 	|	 418 	|	 456 	|	 76 
|	/find-forms/?q=certificate+of+eligibility	|	 532 	|	 228 	|	 228 	|	 304 	|	 304 	|	 266 
|	/find-forms/?q=20-0998	|	 456 	|	 228 	|	 304 	|	 228 	|	 266 	|	 342 
|	/find-forms/?q=40-1330	|	 266 	|	 114 	|	 304 	|	 190 	|	 342 	|	 608 
|	/find-forms/?q=sf+180	|	 266 	|	 152 	|	 418 	|	 380 	|	 190 	|	 380 
|	/find-forms/?q=vaf+28-1902w	|	 190 	|	 912 	|	 152 	|	 114 	|	 190 	|	 228 
|	/find-forms/?q=10-5345	|	 380 	|	 304 	|	 342 	|	 266 	|	 266 	|	 190 
|	/find-forms/?q=534	|	 380 	|	 342 	|	 532 	|	 114 	|	 228 	|	 152 
|	/find-forms/?q=tax	|	 456 	|	 646 	|	 380 	|	 190 	|	 -   	|	 38 
|	/find-forms/?q=21-0538	|	 304 	|	 228 	|	 380 	|	 304 	|	 114 	|	 342 
|	/find-forms/?q=va+form+21-526ez	|	 570 	|	 152 	|	 266 	|	 152 	|	 304 	|	 228 
|	/find-forms/?q=20-10207	|	 152 	|	 304 	|	 304 	|	 228 	|	 342 	|	 304 
|	/find-forms/?q=22-1999	|	 532 	|	 152 	|	 228 	|	 114 	|	 380 	|	 228 
|	/find-forms/?q=4192	|	 228 	|	 228 	|	 228 	|	 456 	|	 190 	|	 304 
|	/find-forms/?q=28-1902w	|	 152 	|	 228 	|	 228 	|	 266 	|	 342 	|	 304 
|	/find-forms/?q=10-8678	|	 76 	|	 190 	|	 76 	|	 76 	|	 646 	|	 418 
|	/find-forms/?q=21-674b	|	 342 	|	 228 	|	 342 	|	 114 	|	 76 	|	 380 
|	/find-forms/?q=21p-4171	|	 114 	|	 304 	|	 152 	|	 342 	|	 342 	|	 228 
|	/find-forms/?q=request+for+service	|	 266 	|	 190 	|	 228 	|	 228 	|	 304 	|	 228 
|	/find-forms/?q=10-10	|	 152 	|	 228 	|	 380 	|	 342 	|	 152 	|	 152 
|	/find-forms/?q=1995	|	 114 	|	 228 	|	 304 	|	 304 	|	 266 	|	 152 
|	/find-forms/?q=28-1900	|	 304 	|	 76 	|	 228 	|	 152 	|	 266 	|	 342 
|	/find-forms/?q=champva	|	 494 	|	 76 	|	 342 	|	 114 	|	 228 	|	 114 


</details>

### Most frequently clicked results

<details> 
<summary> January - June 2025 top forms </summary>

| Form	| Jan 2025  | Feb 2025  | March 2025  | April 2025 | May 2025 | June 2025
| --- | :---:|:---:|:---:|:---:|:---:|:---:|
|	/find-forms/?q=22-1995	|	 1,634 	|	 608 	|	 874 	|	 456 	|	 722 	|	 950 
|	/find-forms/?q=21-4138	|	 722 	|	 1,140 	|	 760 	|	 608 	|	 836 	|	 722 
|	/find-forms/?q=22-5490	|	 304 	|	 380 	|	 228 	|	 570 	|	 494 	|	 722 
|	/find-forms/?q=21-22	|	 608 	|	 418 	|	 266 	|	 456 	|	 228 	|	 494 
|	/find-forms/?q=21-674	|	 456 	|	 418 	|	 456 	|	 532 	|	 228 	|	 342 
|	/find-forms/?q=20-0995	|	 532 	|	 342 	|	 342 	|	 304 	|	 532 	|	 342 
|	/find-forms/?q=21-526ez	|	 456 	|	 342 	|	 228 	|	 380 	|	 380 	|	 494 
|	/find-forms/?q=4138	|	 342 	|	 304 	|	 456 	|	 380 	|	 342 	|	 304 
|	/find-forms/?q=21-2680	|	 342 	|	 228 	|	 456 	|	 342 	|	 190 	|	 190 
|	/find-forms/?q=21-0845	|	 342 	|	 380 	|	 76 	|	 494 	|	 228 	|	 114 
|	/find-forms/?q=21-4142	|	 304 	|	 152 	|	 532 	|	 152 	|	 152 	|	 228 
|	/find-forms/?q=10-10172	|	 228 	|	 228 	|	 228 	|	 266 	|	 152 	|	 266 
|	/find-forms/?q=21-686c	|	 228 	|	 190 	|	 342 	|	 190 	|	 114 	|	 304 
|	/find-forms/?q=10-10cg	|	 304 	|	 114 	|	 152 	|	 38 	|	 532 	|	 76 
|	/find-forms/?q=20-0996	|	 304 	|	 266 	|	 114 	|	 38 	|	 228 	|	 266 
|	/find-forms/?q=21p-534ez	|	 304 	|	 190 	|	 152 	|	 76 	|	 76 	|	 418 
|	/find-forms/?q=intent+to+file	|	 228 	|	 152 	|	 190 	|	 304 	|	 190 	|	 152 
|	/find-forms/?q=21-0781	|	 304 	|	 190 	|	 38 	|	 304 	|	 76 	|	 266 
|	/find-forms/?q=0996	|	 342 	|	 76 	|	 152 	|	 380 	|	 114 	|	 76 
|	/find-forms/?q=21-0966	|	 266 	|	 190 	|	 304 	|	 114 	|	 152 	|	 114 
|	/find-forms/?q=22-1990e	|	 304 	|	 114 	|	 76 	|	 114 	|	 228 	|	 304 
|	/find-forms/?q=0995	|	 228 	|	 76 	|	 266 	|	 190 	|	 76 	|	 190 
|	/find-forms/?q=21-4142a	|	 152 	|	 114 	|	 152 	|	 114 	|	 190 	|	 228 
|	/find-forms/?q=21-10210	|	 190 	|	 38 	|	 114 	|	 152 	|	 76 	|	 342 
|	/find-forms/?q=526	|	 38 	|	 152 	|	 228 	|	 228 	|	 152 	|	 114 

</details>

### Most frequently downloaded forms
> based on Event name = file_download

<details> 
<summary> January - June 2025 top forms </summary>


| Form	| Jan 2025  | Feb 2025  | March 2025  | April 2025 | May 2025 | June 2025
| --- | :---:|:---:|:---:|:---:|:---:|:---:|
|	/find-forms/about-form-21-4138/			|	 21,812 	|	 19,988 	|	 22,990 	|	 21,964 	|	 23,180 	|	 22,192 	|
|	/find-forms/about-form-21-526ez/			|	 16,226 	|	 14,478 	|	 14,136 	|	 14,098 	|	 12,768 	|	 14,174 	|
|	/find-forms/about-form-10-10172/			|	 13,908 	|	 13,414 	|	 12,122 	|	 14,136 	|	 11,818 	|	 17,974 	|
|	/find-forms/about-form-10-7959c/			|	 13,490 	|	 14,440 	|	 12,806 	|	 14,060 	|	 12,844 	|	 13,452 	|
|	/find-forms/about-form-21-2680/			|	 15,504 	|	 13,262 	|	 13,946 	|	 12,578 	|	 12,578 	|	 12,084 	|
|	/find-forms/about-form-10-10ez/			|	 11,780 	|	 10,412 	|	 10,260 	|	 9,766 	|	 12,388 	|	 10,146 	|
|	/find-forms/about-form-21-10210/			|	 8,854 	|	 10,526 	|	 11,286 	|	 10,906 	|	 9,310 	|	 10,070 	|
|	/find-forms/about-form-20-0995/			|	 8,968 	|	 8,664 	|	 9,386 	|	 9,956 	|	 8,626 	|	 10,032 	|
|	/find-forms/about-form-22-5490/			|	 6,688 	|	 7,448 	|	 8,436 	|	 9,576 	|	 9,044 	|	 12,122 	|
|	/find-forms/about-form-21p-534ez/			|	 10,564 	|	 6,422 	|	 10,374 	|	 8,968 	|	 7,828 	|	 8,702 	|
|	/find-forms/about-form-40-1330/			|	 7,942 	|	 7,372 	|	 8,094 	|	 9,310 	|	 8,018 	|	 9,842 	|
|	/find-forms/about-form-21-0781/			|	 9,500 	|	 8,284 	|	 6,802 	|	 6,840 	|	 6,688 	|	 8,930 	|
|	/find-forms/about-form-10-10d/			|	 10,640 	|	 9,576 	|	 6,574 	|	 5,282 	|	 5,092 	|	 5,890 	|
|	/find-forms/about-form-21-8940/			|	 10,184 	|	 6,802 	|	 6,650 	|	 5,168 	|	 7,562 	|	 5,586 	|
|	/find-forms/about-form-21-686c/			|	 6,688 	|	 5,624 	|	 5,738 	|	 7,372 	|	 6,498 	|	 8,246 	|
|	/find-forms/about-form-21-674/			|	 7,410 	|	 5,168 	|	 5,168 	|	 5,738 	|	 5,852 	|	 6,422 	|
|	/find-forms/about-form-21-4142/			|	 6,612 	|	 6,384 	|	 5,700 	|	 5,586 	|	 6,270 	|	 4,636 	|
|	/find-forms/about-form-10-3542/			|	 5,624 	|	 6,308 	|	 5,358 	|	 5,738 	|	 6,270 	|	 5,244 	|
|	/find-forms/about-form-10-8678/			|	 2,698 	|	 2,470 	|	 2,508 	|	 3,078 	|	 14,288 	|	 8,892 	|
|	/find-forms/about-form-21-0966/			|	 5,624 	|	 6,194 	|	 6,232 	|	 4,864 	|	 4,522 	|	 5,852 	|
|	/find-forms/about-form-21-0845/			|	 5,130 	|	 4,712 	|	 4,940 	|	 6,688 	|	 4,902 	|	 4,940 	|
|	/find-forms/about-form-10-5345/			|	 4,978 	|	 5,396 	|	 4,978 	|	 4,864 	|	 5,130 	|	 5,510 	|
|	/find-forms/about-form-20-10206/			|	 5,016 	|	 5,092 	|	 4,978 	|	 5,130 	|	 4,104 	|	 4,522 	|
|	/find-forms/about-form-10-10cg/			|	 5,510 	|	 4,332 	|	 3,914 	|	 4,104 	|	 5,168 	|	 5,548 	|
|	/find-forms/about-form-21-22/			|	 6,460 	|	 4,256 	|	 4,636 	|	 4,332 	|	 3,838 	|	 4,522 	|
|	/find-forms/about-form-10-0137/			|	 4,788 	|	 3,078 	|	 3,648 	|	 3,876 	|	 5,700 	|	 4,028 	|
|	/find-forms/about-form-21-4192/			|	 5,282 	|	 5,966 	|	 3,344 	|	 3,230 	|	 4,142 	|	 3,002 	|
|	/find-forms/about-form-20-0996/			|	 4,028 	|	 3,686 	|	 4,256 	|	 4,370 	|	 4,066 	|	 3,648 	|
|	/find-forms/about-form-22-1990e/			|	 3,230 	|	 3,458 	|	 3,306 	|	 4,826 	|	 3,838 	|	 4,522 	|
|	/find-forms/about-form-21p-530ez/			|	 4,370 	|	 3,382 	|	 3,382 	|	 3,990 	|	 3,382 	|	 4,104 	|
|	/find-forms/about-form-22-1995/			|	 6,080 	|	 3,876 	|	 3,002 	|	 2,280 	|	 3,116 	|	 4,104 	|
|	/find-forms/about-form-10091/			|	 4,066 	|	 2,622 	|	 2,736 	|	 2,546 	|	 4,674 	|	 3,762 	|




