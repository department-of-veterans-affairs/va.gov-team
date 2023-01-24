# Military info review

The goal of this is to outline some thinking on whether we should put additional work into this section.

## Improvements since 2021

- We've integrated military information through VA Profile, so [we have a lot of data available to us that we could add to the military information section of the profile](https://qa.vaprofile.va.gov:7005/profile-service/swagger-ui.html) (**Note**: you need to be on the VA network to view VA Profile's swagger docs).
- We've added a link to DD214 information [based on analytics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/product/improvement-ideas-2021.md#top-searched-terms-overall-on-vagov-related-to-military-history-between-10112020-and-101721).

## Additional considerations in 2022

- [The PACT Act has passed](https://www.va.gov/resources/the-pact-act-and-your-va-benefits/), and people are wondering whether their military history may qualify them for expanded disability benefits.
- There is some expectation among stakeholders that we are showing more personalized military information on VA.gov than we are showing re: PACT Act ([details](https://dsva.slack.com/archives/G03HQ55DC/p1667829320512719?thread_ts=1667569982.198959&cid=G03HQ55DC)).
- However, relative to other personalized information, not that many people go to their profile to view military information. This could be because they don't expect to find it there, and/or because we have poor  wayfinding to this information on VA.gov. The site heavily favors sending people to logged-out content info. We don't know without more research.

For exampled, [in the last year, from Nov 8 2021 - Nov 7 2022](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-pages/a50123418w177519031p176188361/_u.date00=20211108&_u.date01=20221107&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=500&_.useg=builtin1,useri0ZvPaPpQKyUHGrYCFPigw/), These are the numbers we see for where people are viewing military information:

- www.va.gov/records/get-military-service-records/: 8,543,082 views (all users); 2,708,000 for logged-in users
- www.va.gov/profile/military-information/: 555,405 views

We see that the logged-out content page gets significantly more traction. As a comparison for logged-in tools, the top logged-in tool is the claims tool, which got about 68 million logged out views/58 million logged in views in the last year.

## Questions we have

- We have never done user research on this section, so we have no idea what users expect to see on this page or what would be the most useful to them. There is a ton we could show based on VA Profile's data; what is the most useful? 
- Is adding information to this page specifically helpful for helping veterans navigate PACT Act?
- Will adding information to this page actually meet stakeholder expectations, since it will not include health data?
- Where do users expect to find their military information? Do they need to see it on VA.gov, or just get their DD214?

## Potential next steps

- Talk to stakeholders about military info re: PACT Act.
- Potentially just add a PACT Act link onto military information and see how it does (low stakes bet).
- Do actual user research.
