# Discovery summary: adding records and dependents to profile, June 2023

`draft`

**Last updated:** June 23, 2023

## Background
After conducting research to understand challenges people have navigating to tasks while logged in ([summary report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/comprehensive-research-summary.md)), we identified a few personalized items that are hard to find on the site, and are reasonably logical to surface in the authenticated experience:
- Dependents
- Benefit letters
- Claim letters
- Veteran ID card

We’ve previously received requests to add dependents to the profile, and [we observed in research that people struggled to find dependents on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/findings-summary.md#participants-struggled-to-find-dependent-information-which-wasnt-linked-from-the-homepage-my-va-or-the-mega-menu-links). Letters and ID cards are no longer linked from the homepage as of June 1, 2023, which make them even harder to find.

We conducted some initial discovery to determine which of these items make sense to add to the VA.gov profile, and develop an approach to how they could be incorporated.

## Goals
1. Understand what we know so far about how Veterans think about and navigate to dependents, letters, and their ID card
2. Understand how these items fit into the current site IA
3. Determine an approach to how we can add these to profile

## Summary
### What we know so far
#### Previous research
- In our Logged-in IA and Nav wayfinding study, 3 participants expected to find dependent information in their profile ([finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/findings-summary.md#participants-struggled-to-find-dependent-information-which-wasnt-linked-from-the-homepage-my-va-or-the-mega-menu-links)).

#### Search behavior
To evaluate search behavior, we looked at [Google Analytics (GA) data from January 1, 2023-June 11, 2023](https://analytics.google.com/analytics/web/#/report/content-site-search-pages/a50123418w177519031p184624291/_u.date00=20230101&_u.date01=20230611&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=250&explorer-table.filter=~2Fprofile&explorer-table.secSegmentId=analytics.searchKeyword&explorer-table.advFilter=%5B%5B0,%22analytics.searchStartPage%22,%22RE%22,%22~2Fprofile%22,0%5D%5D&_.useg=builtin1/). We cross-referenced this data with the [DOMO dashboard](https://va-gov.domo.com/page/1834995012/kpis/details/203579416) and saw similar patterns, though the numbers don’t match 1:1.  Since we were unable to get a solid answer as to why they don’t match, and we are more familiar with GA, we used GA data for our discovery.

##### Sitewide searches
Multiple search terms for the items we’re looking into rank in the [top 25 VA.gov search terms in Google Analytics](https://analytics.google.com/analytics/web/#/report/content-site-search-search-terms/a50123418w177519031p184624291/_u.date00=20230101&_u.date01=20230611&_.useg=builtin1&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25/) :
- dependents/dependent (41,181 searches)
- letters/Letters  (31,111 searches)
- certificate of eligibility (16,555 searches)

This suggests these items are important to people and they are not easily finding them on the site through navigation.

##### Profile searches
From Jan 1-June 11, 2023, there were 950m unique page views within profile, and 72,646 unique searches initiated from profile.  About 1% of visitors are conducting searches from profile.

Keywords related to dependents, letters, and ID cards make up the majority of the top 30 keywords searched ([analytics report](https://analytics.google.com/analytics/web/#/report/content-site-search-pages/a50123418w177519031p184624291/_u.date00=20230101&_u.date01=20230611&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=250&explorer-table.filter=~2Fprofile&explorer-table.secSegmentId=analytics.searchKeyword&explorer-table.advFilter=%5B%5B0,%22analytics.searchStartPage%22,%22RE%22,%22~2Fprofile%22,0%5D%5D&_.useg=builtin1/)).

- 8,004 searches used a search term related to dependents. Top terms are:
	- dependents/Dependents (2,938 searches)
	- dependent/Dependent (1134 searches)
	- add dependent (771 searches)
- 7,098 searches used a search term related to letters and the Veteran ID card. Search terms related to letters were used more frequently than ID card terms. Top search terms are:
	- letters/Letters, letter/Letter (2585 searches)
	- award letter (372 searches)
	- benefit letter (334 searches)

The majority of these searches took place from va.gov/profile/personal-information, the profile’s entry point.
- The contact information page was the second most popular place to initiate a dependent related search
- The military information page was the second most popular place to initiate a records related search

#### Navigation behavior
We reviewed the navigation summaries in Google Analytics for each page in profile to see if there is data that demonstrates any interesting trends or correlation between profile and the items we’re looking into. 

The military information page is the only page in profile that had a trend of visitors going from profile to records (specifically, to the R[equest Your Military Records](https://www.va.gov/records/get-military-service-records/index.html) page), which makes sense because it has a direct link to that page.  This tells us that people do find and use relevant links when we surface them in profile.

###  How do these items fit into the current site IA?

#### Content considerations
We met with Danielle Thierry, OCTO Content Lead, to learn about efforts related to dependents and records that we should be aware of as we consider adding these items to profile. 

##### Overall thoughts
- Danielle agreed dependents, letters, and ID cards are worth considering for the VA.gov profile, and that they’d most likely work best as dedicated pages rather than somehow incorporating these items into an existing part of profile.
- It makes sense to consider simply adding links as an MVP, but we know Veterans want one place to get things. Does it make sense to move the View dependents and letters tools into profile?

##### Dependents
- The content/IA team has been working on building out the [family member benefit hub](https://www.va.gov/family-member-benefits/).  The current experience links people to pages all over VA.gov and mixes Veteran benefit information with family member information, which can be confusing. 
- [Tree testing research (finding 3)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2022-12-health-apt-tree-test-round2/mhv-on-va-round-2-tree-test-findings.md) proved that in the health care space family members didn’t go to health care to look for health care items; they went to the family member hub.
- The term “family members” is the best umbrella term so far (includes family members, caregivers, spouses, survivors, dependents).
	- Something to consider is that there are non-family member things that fall into this category. Caregivers don’t have to be family members, and neither do delegates.
	- We need to consider how we can have an umbrella name, that will also make sense to Veterans who are looking for specific terms (such as family members, caregivers, spouses, survivors, dependents).
##### Records
- This section of the site was created at a time when we were  far behind where we are now with the authenticated experience. It’s a “mixed bag”.
- Veterans can download most letters they search for in profile through this section of the site, but Certificate of Eligibility (COE) is an exception. 
	- COE is specific to home loans
	- COE’s are either automatically assigned to a Veteran, or they can submit a form to requests one. 
	- If we include letters in profile, we’ll probably need to include content and additional links around the COE
- Outside of OCTO, there’s a letters generating project happening. Danielle is going to check into that for our team to learn if there are any content considerations we should include in our implementation.

### Our approach
#### Recommendations
#### Next steps
