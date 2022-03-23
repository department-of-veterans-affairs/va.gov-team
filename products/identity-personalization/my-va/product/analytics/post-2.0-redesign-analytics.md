# Post 2.0 relaunch analytics

**November 2021**

[My VA dashboard - 7.1.21 - 11.1.21](https://analytics.google.com/analytics/web/#/dashboard/XOEdSZeVT9qyxQU5T29PNw/a50123418w177519031p176188361/_u.date00=20210701&_u.date01=20211101/)

## How we did on KPIs after 2.0 launch

[See the Measuring Success section of the product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#what-we-can-do-in-the-next--1--2-quarters-100-foot-view-q2--q3-2021)

- We did **not** see an increase in usage of My VA for logged in users. Usage rate still hovers around 7% for logged in users; 16% for logged-in homepage usage.
- We **did** almost double clicks for all target interactions (clicks into claims and health care information) between Q2 (pre-launch) and Q3 (post-launch).
- For top searches from My VA, our redesign appears to have made a significant impact in reducing searches for some key terms from My VA -- disability, disability rating, rating, and claim/claims. All of these terms have been moved out of the top 10 or 20 searches from My VA, and almost all of them have dropped by about 20 in terms of their frequency rank.
- We switched from Foresee to Medallia and don't currently have insight into that data.

## What else we see in analytics

### Top clicks

Besides seeing an overall increase in our target interactions for claims, disability, and health care from versions 1.0 to 2.0, these are some interesting findings (since 7.1.21):

- Viewing the VA.gov profile is the top interaction, even more so than viewing claims. **How can we figure out what people are looking for here?** Is it that people want or need to go to the profile, or they don't see information they expect to see on My VA and try the profile next?
- People clicking into individual or all claims are the #2 and #3 interactions, which is what we would expect.
- While we doubled interactions for health care information, health care interactions still aren't in the top 10, which does not match the overall priority for this information that we've heard from veterans. My hypothesis is that this is because most health care users still sign in through MHV and don't go to VA.gov, so the target audience for these interactions may not be seeing them. Additionally, the #6 interaction is clicking the My Health link in the nav (to MHV), which suggests people just want to get to MHV. It will be interesting to see how clicks change as we (1) redirect people here from the unauth homepage at log-in and (2) as health care tools get rolled into VA.gov.
- "What benefits does VA offer" is #7 for top interactions. **This receives more clicks than a lot of our health care links**, which shows that people have a lot interest in getting more information on this. (Note: We know most health care users still go directly to MHV, so this likely plays a large factor in the rankings for health care links).
- "Apply for Education" is #9 for top interactions, which could indicate that this suggestion is a driver for education applications. Additionally, Apply for Disability is #16 interaction, which also suggests its utility. 
- However, the Apply for Health care interaction is #41, which suggests this particular link isn't helpful. This could be for a few reason. First, if most people who sign in have health care or have already applied, they won't see this suggestion (which is by design). Second, we should also make sure that we aren't hiding this suggestion too often. Because some people show as having VA health care without having it (eg. a veteran who went to a VAMC one time ever as a service member), it's possible that a lot of people aren't seeing this who could actually find this useful. **We should look into this.**


### Searches

[Top searches from My VA between 7.1.21 - 11.1.21](https://analytics.google.com/analytics/web/#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20210701&_u.date01=20211101&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&_r.drilldown=analytics.searchStartPage:www.va.gov~2Fmy-va~2F/)

Since 7.1.21, four of the top 10 searches are for finacial information:

- (1) Payment
- (2) Debt
- (5) Direct deposit
- (8) Direct [we can assume this is "direct" as in "direct deposit']

Other searches:

- (3) travel
- (4) gi bill
- (6) dd214
- (7) letters
- (9) letter
- (10) coe [certificate of eligibility]

All of this jives with what we've heard in research and what we know about people looking for on VA.gov. Of things we don't currently have on My VA that we do have on the homepage, payment information, records, and education information are the things we're missing. These are also items we've repeatedly heard people mention in research as areas of interest for their own personal dashboards.
