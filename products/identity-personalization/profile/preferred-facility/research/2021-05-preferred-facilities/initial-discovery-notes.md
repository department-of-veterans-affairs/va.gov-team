# Preferred Facilities Initial Discovery

3/11/21, Liz Lantz

## Activities

- Reviewed the [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/README.md) and [scope](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/README.md#requirements)
- Met with Samara for intro to the work + product background
- Had intro meeting w/ Lauren + Peter from VA Online Scheduling (VAOS) team
- Reviewed [previous research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/research) on VAOS scheduling flow
- Sought answers to the questions below that popped up as I prepared for the design phase of adding preferred facilities to VA.gov profile:

## Follow-up questions

**How is VAOS currently integrated into the VA.gov Auth Exp?**

- Users are directed to the tool ([lives on it's own page](https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/)) from  `Schedule and view appointments ` CTAs.
- My HealtheVet (MHV) sends users to this tool on VA.gov (VAOS is not integrated directly into MHV) when they click a `Schedule Appointment` link.

**Given [profile will not have an integration with MHV](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/README.md#questions), will users have to update facilities in two places?**

- Yes.
- MHV may direct users to profile to update eventually, in which case they would no longer have to update twice.

**How does a Veteran add a new facility to their profile, e.g. they recently move to a new town, and they want to set the closest VAMC as their preferred facility?**

- This isn't something Veterans can currently do online; currently they'll need to register directly through the facility. 
- Once they register at the facility, the facility would appear in their profile
- Adding this functionality to VA.gov profile isn't in scope for our MVP.

**Are there any plans for VAOS to be used for non-medical appointments in the future?**

- No.
- The idea of VAOS being a starting point to a bigger scheduling platform/service has been discussed, but the team is not currently working towards that.

**Went through the VAOS tool on VA.gov; seems like there is just one screen impacted by this work. True?**

- True, if we are literally only concerned with the "selecting facility" screen.
- The VAOS team sees opportunity to improve the whole scheduling flow, but those opportunities are likely outside of any MVP updates to VA.gov profile.
- Mobile app team is also working on improving the scheduling flow, so they may be interested in leveraging what we do with preferred facilities.

**One user had more than 5 facilities, and I saw the `+5 more facilities` button appear below the first 5 facilities. What does the UI do if a user has more than 10?**

- The tool displays facilities in increments of 5 (it does not paginate).

- UI would continue to allow users to show 5 more until all facilities had been displayed.

  ![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/images/VAOS-with-5-more-locations.png)

**If a users preferred facility doesn't offer online scheduling, does the VAOS tool have capability to show them facilities nearby where they could schedule online instead?**

- It doesn't. 
- It'll direct people to facility locator, which the VAOS team is aware isn't the best UX.

**Is there any research we can look at on the MHV implementation of preferred facilities?** **This is the only other place we know of where Veterans can set preferred facilities, so it'd be good to learn more about their reaction to this implementation, how it performed in usability testing, etc.**

After googling, searching our va.gov-team repo, and [asking in DSVA Slack](https://dsva.slack.com/archives/C0NGDDXME/p1615326032011100), I wasn't able to find any research on this.

**Are there any relevant findings in research on the VAOS "select facility" design we can reference?**

-  Feedback on the [scheduling flow in this Figma board](https://www.figma.com/file/2VX8fV3vdJyxHbwt2fzUG5/Self-Schedule-Synthesis?node-id=0%3A2463) suggests users easily understood sorting the facility list by proximity to them
-  A [study conducted in July 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/july-2020-user-research/2020-july-VAOSR-EC-research-report.md#scheduling-an-appointment-flow-vaosr) called out some facility related recommendations; including city + state with facility name is the most relevant to our work here.  So far, have not been able to find quotes or additional data to support the reasoning behind this recommendation but I don't disagree with that information.
-  There are not any clear research findings or recollections from team members on the current iteration of VAOS facility listings that we see in staging today.  
-  Some background on the design choices is available in [GitHub issue #12549](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12549).

**What do the numbers in parentheses mean after the facility name on MHV? Is this meaningful to Veterans? Is it possible to hide this in our implementation if it's not meaningful?**

- This is called a station ID, and is a way to provide consistent way to identify facilities.  More details are available in [this slack thread](https://dsva.slack.com/archives/CE4304QPK/p1615495663039500).
- We don't have MHV research available to know whether or not it's useful to end-users to see this code. It appears that MHV may just be pulling in the VistA ID into "treating facilities", rather than specific facilities where people have gone.  I didn't dig into this since that's out of scope for this work, but my take away is that we need to ensure we are not relying simply on station IDs.  
- The data model we'll be working with doesn't appear to include this, so I think we're in the clear. (Data example below)

**What does the data look like that we get from MVI about facilities?**

Here's an example provided by our backend dev.

```json
{`
`  "unique_id": "0101V",`
`  "name": "Boston Vet Center",`
`  "facility_type": "vet_center",`
`  "classification": null,`
`  "website": null,`
`  "lat": 42.3445949700001,`
`  "long": -71.0361351299999,`
`  "address": {`
`    "mailing": {`
`    },`
`    "physical": {`
`      "zip": "02210",`
`      "city": "Boston",`
`      "state": "MA",`
`      "address_1": "7 Drydock Avenue",`
`      "address_2": "Suite 2070",`
`      "address_3": null`
`    }`
`  },`
`  "phone": {`
`    "main": "``857-203-6461``"`
`  },`
`  "hours": {`
`    "friday": "830AM-430PM",`
`    "monday": "830AM-700PM",`
`    "sunday": "Closed",`
`    "tuesday": "830AM-700PM",`
`    "saturday": "Closed",`
`    "thursday": "830AM-600PM",`
`    "wednesday": "830AM-600PM"`
`  },`
`  "services": {`
`  },`
`  "feedback": {`
`  },`
`  "access": {`
`  },`
`  "fingerprint": "3fc0891276505c94953bd7178ecf3a8423f9a3a3c6b7369ac0dc69a4557e0e72",`
`  "created_at": "2019-09-25 19:29:01 UTC",`
`  "updated_at": "2020-06-24 08:45:01 UTC",`
`  "location": "POINT (-71.03613512999993 42.34459497000006)",`
`  "mobile": null,`
`  "active_status": null,`
`  "visn": null`
`}
```
