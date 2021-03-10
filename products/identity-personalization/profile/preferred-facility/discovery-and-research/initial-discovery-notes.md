# Preferred Facilities Initial Discovery

3/10/21, Liz Lantz

Sought answers to these questions to prepare for the design phase of adding preferred facilities to VA.gov profile:

**How is VAOS currently integrated into the VA.gov Auth Exp?**

- Users are directed to the tool ([lives on it's own page](https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/)) from  `Schedule and view appointments ` CTAs
- MHV sends users to this tool on VA.gov (VAOS is not integrated directly into MHV)

**Given [profile will not have an integration with MHV](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/README.md#questions), will users have to update facilities in two places?**

- Yes.  
- MHV may direct users to profile to update eventually, in which case they would no longer have to update twice.

**How does a Veteran add a new facility, e.g. they move to a new town, and the facility they want to visit isn't listed anywhere since they haven't registered yet?**

- This isn't in scope for an MVP or something Veterans can currently do online (as far as we know). 
- Currently they need to register through the facility.

**Are there any plans for VAOS to be used for non-medical appointments in the future?**

- No
- The idea of VAOS being a starting point to a bigger scheduling platform/service has been discussed, but the team is not currently working towards that.

**Went through the VAOS tool on VA.gov; seems like there is just one screen impacted by this work. True?**

- True, if we are literally only concerned with the "selecting facility" screen
- There is opportunity to improve the whole scheduling flow, but those opportunities are likely outside of any updates to VA.gov profile (especially for an MVP)
- Mobile app team is also working on improving the scheduling flow

**One user had more than 5 facilities, and I saw the `+5 more facilities` button appear below the first 5 facilities. What does the UI do if a user has more than 10?**

- The tool displays facilities in increments of 5

- would just continue to allow users to show 5 more until all facilities had been displayed

  ![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/images/VAOS-with-5-more-locations.png)

**Does the tool show them facilities nearby where they aren't registered if their preferred facility doesn't offer online scheduling for their service?**

- It doesn't. 
- It'll direct people to facility locator, which admittedly isn't the best UX.

**Is there any research we can look at on the MHV implementation of preferred facilities?** **This is the only other place we know of where Veterans can set preferred facilities, so it'd be good to learn more about their reaction to this implementation, how it performed in usability testing, etc.**

- It doesn't appear so. 
- Searched our va.gov-team repo, and [asked in DSVA Slack](https://dsva.slack.com/archives/C0NGDDXME/p1615326032011100). 
- Our research history document mentions a [study from March 2018](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md#march-2018) led by someone still at Ad Hoc; waiting to hear back from him but not expecting that he'll know where the research folder is now.

**Is there any research on the VAOS "select facility" design we can reference?**

- Research lives in [this folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/research)
-  

**What do the numbers in parentheses mean after the facility name on MHV? Is this meaningful to Veterans? If not, can we get rid of them in our implementation?**

**What does the data look like that we get from MVI about facilities?**
