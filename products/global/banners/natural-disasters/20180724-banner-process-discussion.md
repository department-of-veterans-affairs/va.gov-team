# Discussion about Vets.gov banner process (07/24/2018)

The purpose of this meeting was to discuss the process around planned and unplanned banners on Vets.gov, which came about as a result of a series of banners that were requested due to DS logon outages that were difficult to confirm whether or not they were actually needed and caused back and forth across multiple teams at DSVA. As a result of this confusion, Nebula and Griffins determined it is necessary to re-visit our strategy for putting up and taking down sitewide and sign-in modal banners.

## Attendees

Natalie, Mina, James, Wyatt, Lauren, Brian, Andrea, Matt, Steve, Melissa S.  

## Agenda

- Determine source of truth for knowing when something is down
- Determine process for when we put up banners. What necessitates a banner?
- Determine process for removing a banner. How do we know when to take down a banner?
- Revisit language, specifically when does it make sense to direct users to the help desk?
- Who are the right POCs at DSVA?



## Follow-up / Action Items

- [ ] Natalie: ensure all eng on griffins get added to this email list
- [ ] Griffins: prioritize adding MHV and ID.me in modal banners
- [ ] Melissa to confirm correct documentation for content and in formation: specification of what type of banner/where and updates to content based on this convo
- [ ] James to look into pager duty integration
- [ ] Melissa to request content changes to banners
  - [ ] Joe: remove mention of help desk

## Notes

- What is the source of truth for knowing something is down? (Natalie trying on her phone, ds logon email, eBenefits telling us, evss people telling us, IAM emails, MHV, all of the above, etc.)
  - planned outages: 
    - email sent to someone on griffins. 
    - on-call person on griffins triggers in pager duty to put up banner during planned outage window
  - issues:
    - we don't have prod accounts for DS logon
    - IAM and other systems having issues
  - source of truth: Roy on DoD side
  - eBN dependent on IAM. we are not

- When do we put banners up? If it's not working great, totally down, etc.

  - Content says "may not be working", are we ok with it being up if we aren't sure that there is/isnt an error
  - automated banner
    - based on metrics
    - query to prometheus, based on rates, contact center (contact center emails griffins if there is an issue related to login OR reach out to Aubrey and he relays issue to griffins.)
      - Concern: Aubrey is single person. need plan B. but can scale up if this works
  - to get banner on log in modal, add maintenance window in pager duty

- Language for all the different types of banners we may need readily available and not needing additional approval or if it does who is the right POC? When makes sense to call help desk?

  - for unexpected outages, the helpdesk can't really do anything. need to change language. 

  - planned and unplanned content changes: --> if [system] is down...try logging in with another account.

    - if DS logon is down, will ID.me sign up work? most likely
    - if EVSS/MVI are down, tools and login are impacted 
      - MVI can't LOA3
      - EVSS cant use tools
    - need to go through matrix to figure out what happens when multiple services are down

  - Existing language:

    **(APPLICATION NAME) will be down for maintenance soon**

    We'll be doing some work on (APPLICATION NAME) on (DATE) between (TIME) and [TIME]. If you have trouble using this tool during that time, please check back soon.
    **(ID.ME/DS LOGON/MYHEALTHEVET) will be down for maintenance soon**

    (ID.ME/DS LOGON/MYHEALTHEVET) will be down for maintenance on [DATE] between [TIME] and [TIME]. If you have trouble signing in to your Vets.gov account during that time, please check back soon.

    **\*Unplanned outage***

    *Initial alert*

    **Some Vets.gov tools and features may not be working as expected**

    We’re sorry. We’re working to fix some problems with our system right now. Please check back later or try logging in with [another / a different] account. [remove: call the Vets.gov Help Desk for more information at 1-855-574-7286, TTY: 1-800-877-8339.]

- Process for removing them--when is it for sure good to remove, how do we know?

  - planned = maintenance window / known
  - unplanned = put in for 24 hours in pager duty, review before end of window to continue or end. 5-10 min to remove upon decision. 

- Who are the right POCs in general?

  - content is already developed
  - ping griffins team (on call schedule) to put up appropriate banner
    - if scheduled and in pager duty: 2-30ish mins until escalated to correct person, then 5-10 mins for modal banner
    - if unplanned login modal, about 10 mins to push to prod once approved 
    - if unplanned homepage banner, about 45 mins to push to prod once assigned and approved
