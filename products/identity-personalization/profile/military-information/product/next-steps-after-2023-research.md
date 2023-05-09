# Thoughts on next steps after Florence's 2023 military info discovery

### [2023 military info research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-military-info-discovery/findings-summary.md)

## Top insights from the research

1. [People would love to be able to view/download the DD214 online](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-military-info-discovery/findings-summary.md#participants-like-the-idea-of-being-able-to-access-service-history-information-and-their-dd214-easily-online)
- I believe this was a known insight prior to this research, but it's always good reaffirm these things and validate that they are still true. Unfortunately, because the DD214 is in the purview of DoD, and because I'm genuinely unsure whether digital copies of it exist or not, this is not something that our team can implement. In fact, I think VA getting access to the DD214 at all would be a major effort well above the level of just our team, and could take a significant amount of time. 
2. [People can not find their military info on VA.gov without guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-military-info-discovery/findings-summary.md#participants-do-not-think-of-the-vagov-profile-as-a-potential-place-to-access-their-service-history-information).
3. [The most important things we could potentially add to military info in the profile are](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-military-info-discovery/findings-summary.md#participants-like-the-idea-of-being-able-to-access-service-history-information-and-their-dd214-easily-online):
-  Awards
-  Education/training info
-  Location info w/ corresponding dates
-  (Honestly surprised that discharge status was not part of this list!)

## What we could do vs. what we should do

What this research can't answer (nor was it necessarily intended to) is what *should* we do. We know a lot of things we *could* do based on the research, but that doesn't answer whether it would provide enough of a benefit to veterans that it would be worth the investment of our team's time.

So, I decided to check out the analytics to see what they say, and how they supplement Florence's findings.

[Pageviews: September 13, 2023 - March 13, 2023, Segmented by logged-in and logged-out users](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20220913&_u.date01=20230313&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=500&_.useg=builtin1,useri0ZvPaPpQKyUHGrYCFPigw,userXZpoGov_R4K1a1Biwj2YNg/)

Overall, retrieving military information is a low-priority action compared to other tasks on VA.gov.

- The content page for [Request your military service records (including DD214)](https://www.va.gov/records/get-military-service-records/) ranks #89 in the last 6 months. This is semi-surprising, since there is currently a link to this page from the homepage.
  - About 27% of visits to this page happen in a logged-in state. 
- [Military info in the profile](https://www.va.gov/profile/military-information) ranks #195 in the last 6 months.
  - About 90% of visits to this URL happen in a logged-in state, which makes sense since the profile requires users to be logged-in and identity-verified. 

[Interactions from "Request your military service records (including DD214)": September 13, 2023 - March 13, 2023](https://analytics.google.com/analytics/web/#/report/content-event-pages/a50123418w177519031p176188361/_u.date00=20220913&_u.date01=20230313&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Frecords~2Fget-military-service-records~2F,analytics.eventCategory:Interactions/)

- Unsurprisingly, the main thing people want to do from here is go to MilConnect to get their DD214. There's not a lot people can do from this page, and the prompt to go to MilConnect is the main CTA. 

[Interactions from the Military Info section of the profile: September 13, 2023 - March 13, 2023](https://analytics.google.com/analytics/web/#/report/content-event-pages/a50123418w177519031p176188361/_u.date00=20220913&_u.date01=20230313&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fprofile~2Fmilitary-information~2F,analytics.eventCategory:Interactions/)

- Somewhat surprisingly, the top interaction on this page in the last 6 months is actually info on what to do if your military service history doesn't look right.
- Second, of course, is requesting a DD214.
- There's not a lot users can do from this page, so it's not surprising necessarily that these CTAs are the top actions. 

---

Basically, the numbers support what we heard in research -- the thing people want most is their DD214. But the question this doesn't answer is this: **if we had better/more military info visible on VA.gov, would that be useful to veterans**? The DD214 is an essential document, so it's possible that even with all the military info in the world on VA.gov, we wouldn't be changing people's needs or behavior. However, it's also possible that people could use the military info on VA.gov to help fill out applications and verify records, and that this might be useful regardless. It's hard to tell just by looking at the numbers, or even from the research we did.

## Next steps

Because of the low-usage overall of trying to retrieve military info on VA.gov, and because the main thing people want is their DD214 (which we can't access for them), I don't think we should invest a ton of time into this work right now.

However, that doesn't mean we should ignore this forever, especially given that it's likely the MHV health apartment team is going to come to us at some point and ask us to add more military information to the profile (this is based on conversations Samara has had at the OCTO level). If that happens, we should be ready with a smart approach that ensures we're investing time in the right veteran priorities. 

### Should we, or should we not, invest time in elevating military info on VA.gov?

This is the million dollar question, and something that I think we could run a few experiments on to see if updates change user behavior. These should be low-level efforts to see if we move the needle on behavior. Some potential ideas:

- Elevating the link to military info in the profile in some way.
- Add one field (eg. discharge status or something else) to the profile, and see if that changes behavior.
