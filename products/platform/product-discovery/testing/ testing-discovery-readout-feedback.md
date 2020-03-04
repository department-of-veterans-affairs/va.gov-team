**Feedback from BE SMEs**

Kam

- Big takeaway is that he thinks staging is/has been a “rock solid” test bed for the most part, ~ 90%
- There are a lot of complexities in the logon chain (MVI-MHV-DSL-ID.me) that can cause headaches
- He’s self-rolled [some solutions ](https://github.com/department-of-veterans-affairs/vets-api/pull/3607#pullrequestreview-326904723)that help to alleviate pain points in testing w/ a particular user state on staging
- MVI in staging is used by VAOS, MHV, other teams, which means staging users need to be staged & setup across *all* business units
- This means we’re beholden to existing test user accounts

Bill Ryan

- Mock data requires engineers to modify
- Staging makes real connections to upstream services, so those services need to provide to us users
- Bill is working (sprint 14) on adding headers to map frontend features to endpoints, which then we can leverage to map features by endpoint to upstream services
- A large lift is to discover the hierarchy of user attributes (MVI is the ‘boss,’ or source-of-truth)
- Potentially we could make an interface for betamocks - would need to make it obvious in UI which deps. are available



**Feedback from VSP Leadership**  

- Address data drift issue- Do we have a “reset account” feature?
- Understand how different is staging from prod?



**Feedback from Design Team**

- Consider naming the accounts so they are more memorable (users name) or describe attributes of the account (RX Status)
- Consider including verification info/instructions if required for account
- Would need to have an account checked out for a week or so to finish documentation



**Feedback from DEPO**

- Talk to additional folks on veteran facing services (vfs) teams
  - Users on vfs teams that might be new to the platform or have divergent needs.
- Talk to contact center agents that might use a tool like the one you prototyped.
- The integrity of test account data is pretty paramount. 
  - I'd even go as far as to say that a user would prefer really good test account data in a csv or html table that is more findable in gh over a shiny ui with out-of-date data.
- Test accounts in production 
  - A good starting place would be to talk with the lighthouse team about their effort to set up their sandbox env and map it to the correct mvi env. 
- The two user groups that seemed to come up most often were members of product teams working on [va.gov](http://va.gov/) and contact center agents. given that these two groups are quite different in needs, experiences, skills, goals, etc..., might it be worth:
  - considering focusing this effort on just one of these groups instead of trying to satisfy both sets of needs at the same time? 
  - or, if both are high priority, split this effort into two efforts and get more folks involved?
- Zooming out a bit, how do these pain points that you uncovered in this work compare to other pain points that vfs teams experience while working on our platform? 
  - We should be looking to that as our primary consideration for how this work might get prioritized going forward.
