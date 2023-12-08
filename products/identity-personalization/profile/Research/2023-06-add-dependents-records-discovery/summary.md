# Discovery summary: adding records and dependents to profile, June 2023

July 5, 2023

Pam Drouin and Liz Lantz, Authenticated Experience

## Background

In Spring 2023, we concluded generative research to understand challenges people experience while navigating to tasks while logged in ([summary report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/comprehensive-research-summary.md)). In that research, we observed that [people specifically struggled to find dependents on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/findings-summary.md#participants-struggled-to-find-dependent-information-which-wasnt-linked-from-the-homepage-my-va-or-the-mega-menu-links), which is not linked from the homepage, My VA, or the mega menu links. This finding bolstered [a past request](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/roadmap/profile-roadmap.md#general-profile-requests--updates) to add dependents to the profile. In addition, navigating to tasks that might be located in multiple categories were an issue (such as benefit letters, claim letters, Veteran ID card).

After that research concluded, the homepage was redesigned. As of June 1, 2023, letters and ID cards are no longer linked from the homepage. We assume this change makes them even harder for veterans to find.

## Goals

1.  Understand what we know so far about how Veterans think about and navigate to dependents, letters, and their ID card
2.  Understand how these items fit into the current site IA
3.  Determine an approach to how we can add these to profile

## What we know so far

### Previous research
- [Veteran ID Card User Experience Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-id-cards/research) (January, 2018)
	- Takeaways relevant to Profile
		- Digital cards may be of interest to Veterans who are smartphone-savvy and want immediate access to their cards.
		- Though all veteran participants wanted a plastic card, two third of veterans were interested in a digital or printable version of their card.
 		-  When we talk to users, we should learn what a user would want to do with their ID card online via Profile (apply/renew, download, etc).
- [Dependency Verification Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/research_plan_11_2020.md) (December, 2020)
	- Takeaways relevant to Profile
		- This research provided information on where to cross link to this process in the larger VA.gov navigation, so there is precedent in considering linking to this tool from within Profile.
		- It probably makes sense to show current dependent (and possibly previous) information in Profile as an MVP. 
		- Additionally, we can cross link to the online tool, as veterans must complete VA Form 21-686c to submit a claim for additional benefits for a dependent, or to request to remove a dependent from their benefits.
- [Decision Letter Download](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2022-08-Decision-Letter-Download/research-plan.md) (September, 2022)
	- Takeaways relevant to Profile
		- Heads-up that some people may struggle to articulate the differences between benefit letters and claim letters, even if they mostly understood the use cases for each.
		- We should thoroughly examine the taxonomy of letters that veterans receive (benefit letters, claim letters, decision letters, etc.).
		- Use what we learn to inform the information architecture of the Letters page in Profile.
		- Include enough explanation to help users understand where to find what they are looking for.
- [Login.gov Adoption Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/research/2022-10-Login.gov-Adoption-Discovery-Research) (November, 2022)
	- Takeaways relevant to Profile
		- One participant remarked that “You're gonna need to find another way to get to your VA letters and other services if I have to switch to another way of signing in.“ (i.e., this was the participant’s perception of what would happen if they had to migrate to Login.gov to sign into VA.gov)
		- While the flow for logging in is not under Authenticated Experience’s purview, this is something the team should be aware of.
- [MHV Medical Records Generative Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-10-medical-records-research-plan.md) (November, 2022)
	- Takeaways relevant to Profile
		- While this study involved medical records, it gave rise to relevant questions such as what users would expect or need to do with letters (view, download, share) in Profile and why.
		- We should determine what actions we would want to enable users to take with letters in Profile as an MVP.
		- Additionally, if we have any part of profile called "Records", we assume people will find it helpful if we (at a minimum) provide a link to medical records too.

- [Logged-in IA/Nav Generative Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/comprehensive-research-summary.md) (Jan-April, 2023)
	- Takeaways relevant to Profile
		- In the wayfinding portion of the study, 3 participants expected to find dependent information in their profile ([finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/findings-summary.md#participants-struggled-to-find-dependent-information-which-wasnt-linked-from-the-homepage-my-va-or-the-mega-menu-links)).
		- In the above study, participants had a harder time finding what they needed via the navigation menu when there could be multiple related categories (e.g. downloading benefit letters), or they didn't have enough context around the task (e.g. viewing dependents) ([finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/findings-summary.md#navigating-to-tasks-was-challenging-for-participants-who-werent-sure-how-their-task-was-categorized-within-va)).

### Search behavior

To evaluate search behavior, we looked at [Google Analytics (GA) data from January 1, 2023-June 11, 2023](https://analytics.google.com/analytics/web/#/report/content-site-search-pages/a50123418w177519031p184624291/_u.date00=20230101&_u.date01=20230611&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=250&explorer-table.filter=~2Fprofile&explorer-table.secSegmentId=analytics.searchKeyword&explorer-table.advFilter=%5B%5B0,%22analytics.searchStartPage%22,%22RE%22,%22~2Fprofile%22,0%5D%5D&_.useg=builtin1/). We cross-referenced this data with the [DOMO dashboard](https://va-gov.domo.com/page/1834995012/kpis/details/203579416) and the numbers matched.

#### Sitewide searches

Multiple search terms for the items we’re looking into rank in the [top 25 VA.gov search terms in Google Analytics](https://analytics.google.com/analytics/web/#/report/content-site-search-search-terms/a50123418w177519031p184624291/_u.date00=20230101&_u.date01=20230611&_.useg=builtin1&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25/) :

- dependents/dependent (41,181 searches)
- letters/Letters (31,111 searches)
- certificate of eligibility (16,555 searches)

##### Takeaways relevant to Profile
- These items are important to people and they are not easily finding them on the site through navigation.

#### Profile searches

From Jan 1-June 11, 2023, there were 950m unique page views within profile, and 72,646 unique searches initiated from profile. About 1% of visitors are conducting searches from profile.

Keywords related to dependents, letters, and ID cards make up the majority of the top 30 keywords searched ([analytics report](https://analytics.google.com/analytics/web/#/report/content-site-search-pages/a50123418w177519031p184624291/_u.date00=20230101&_u.date01=20230611&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=250&explorer-table.filter=~2Fprofile&explorer-table.secSegmentId=analytics.searchKeyword&explorer-table.advFilter=%5B%5B0,%22analytics.searchStartPage%22,%22RE%22,%22~2Fprofile%22,0%5D%5D&_.useg=builtin1/)).

- 8,004 searches used a search term related to dependents. Top terms are:
    - dependents/Dependents (2,938 searches)
    - dependent/Dependent (1134 searches)
    - add dependent (771 searches)
- 7,098 searches used a search term related to letters and the Veteran ID card. Search terms related to letters were used more frequently than ID card terms. Top search terms are:
    - letters/Letters, letter/Letter (2585 searches)
    - award letter (372 searches)
    - benefit letter (334 searches)

The majority of these searches took place from va.gov/profile/personal-information, the profile’s entry point. The contact information page was the second most popular place to initiate a dependent related search. The military information page was the second most popular place to initiate a records related search

##### Takeaways relevant to Profile
- The majority of people using search from profile are looking for things related to dependents and records
- The fact that most of these people are searching from the personal information page suggests that they either don’t see anything in the profile navigation that looks like it would contain what they’re looking for, or that they’re missing the navigation entirely (there is a slight uptick in searches on mobile compared to desktop)

### Navigation behavior

We reviewed the navigation summaries in Google Analytics for each page in profile to see if there is data that demonstrates any interesting trends or correlation between profile and the items we’re looking into.

The military information page is the only page in profile that had a trend of visitors going from profile to records (specifically, to the [Request Your Military Records](https://www.va.gov/records/get-military-service-records/index.html) page), which makes sense because it has a direct link to that page. 

#### Takeaways relevant to Profile
- This tells us that people do find and use relevant links when we surface them in profile.

## How do these items fit into the current site IA?

### Content considerations

We met with Danielle Thierry, OCTO Content Lead, to learn about efforts related to dependents and records that we should be aware of as we consider adding these items to profile.

#### Dependents

- The content/IA team has been working on building out the [family member benefit hub](https://www.va.gov/family-member-benefits/). The current experience links people to pages all over VA.gov and mixes Veteran benefit information with family member information, which can be confusing.
- [Tree testing research (finding 3)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2022-12-health-apt-tree-test-round2/mhv-on-va-round-2-tree-test-findings.md) proved that in the health care space family members didn’t go to health care to look for health care items; they went to the family member hub.
- The term “family members” is the best umbrella term so far (includes family members, caregivers, spouses, survivors, dependents).
    - Something to consider is that there are non-family member things that fall into this category. Caregivers don’t have to be family members, and neither do delegates.

#### Takeaways relevant to Profile
- Dependents deserves it’s own section in Profile
- We need to consider how we can have an umbrella name for this section, that will also make sense to Veterans who are looking for specific terms (such as family members, caregivers, spouses, survivors, dependents).
- It makes sense to consider simply adding links as an MVP, but we know Veterans want one place to get things. At some point we need to consider if make sense to move the View dependents tool into profile.

### Records

- This section of the site was created at a time when we were far behind where we are now with the authenticated experience. It’s a “mixed bag”.
- Veterans can download most letters they search for in profile through this section of the site, but Certificate of Eligibility (COE) is an exception.
    - COE is specific to home loans.
    - COE’s are either automatically assigned to a Veteran, or they can submit a form to requests one.
- Outside of OCTO, there’s a letters generating project happening. Danielle is going to check into that for our team to learn if there are any content considerations we should include in our implementation.

#### Takeaways relevant to Profile
- Letters and ID cards deserve their own section in Profile
- If we include letters in profile, we’ll probably need to include content and additional links around the COE.
- The letters generating project might have research we can leverage that will be helpful to our work in adding this to the profile
- Like dependents,  it makes sense to consider simply adding links as an MVP. At some point we need to consider if make sense to move the download letters tool into profile.

## Our approach

### Recommendation

We should continue forward with designing and testing an MVP of Profile that includes dependents, letters, and ID card.

### Next steps

- Learn more about letters (for linking, not bringing over any tools).
- Learn more about the letters generating work happening outside of OCTO to see if there is any research we can leverage to inform our work.
- Make mockups for MVP (how it would look in profile, and where it would live) [Design | Profile | Add dependents and letters to Profile | Mock up MPV #61261](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61261), and review with content/IA for feedback.
- Conduct research study to get user feedback (combination interview/MVP usability test) [Research | Profile | Add dependents and letters to Profile | Create research plan #61263](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61263) on the prototype, and open questions.

