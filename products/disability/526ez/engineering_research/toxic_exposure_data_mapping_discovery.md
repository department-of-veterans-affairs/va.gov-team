# Toxic Exposure Data Mapping Discovery (WIP)

This document is an attempt to 
- consolidate engineering findings around TE data mapping
- document and track progress on outstanding questions 
- ?

## Resources

- [Page migration for new Toxic Exposure pages](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64448) (ticket)
- [FE Discovery for Toxic Exposure - part 2](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/65498) (ticket)
- [TE wireframes](https://www.sketch.com/s/c353146f-eceb-4626-9918-7603c693417f/p/E0A782B2-E693-4BF0-97E1-F1502DB0593F/canvas#About) (sketch file)
- [LH API specs](https://dev-developer.va.gov/explore/api/benefits-claims/docs?version=current)  (see POST /veterans/{veteranId}/526, `toxicExposure` field)
- [TE Mapping Notes](https://docs.google.com/spreadsheets/d/1VzXOMXBsobsrLiNSoBH_FbI0NB-BUF65qoKAF9bHF7s/edit?pli=1#gid=0) (Christine)
- [TE Mapping Questions](https://docs.google.com/document/d/1E2hWSypZCycWIggH_Xu0-VY7vggZN3GvDBF23ocsTmQ/edit?usp=sharing) (Seth)
- [thread](https://agilesix.slack.com/archives/C04MJV66ZPC/p1696028135138709) on **#va-disability-exp-team**
	- preliminary questions for internal/LH
- [Notes - Biweekly VBA-BDEX Check-in](https://docs.google.com/document/d/1H9xgYJ-oAj3AWKtnzZxOI3xv_ayQKju03rkc36Emax8/edit) (see Oct 3 notes)
- [thread](https://dsva.slack.com/archives/C02CQP3RFFX/p1696350588727869) on **#vfs-evss-service-migration**
	- initial questions to LH on data mapping
- [thread](https://dsva.slack.com/archives/C053UDWMH7U/p1696455987731379) on **#benefits-disability-design** 
	- linking each new condition to TE (question to Shannon/Kate)

## Lighthouse Questions
[(slack)](https://dsva.slack.com/archives/C02CQP3RFFX/p1696350588727869)
1.  How are you mapping the  `isRelatedToToxicExposure`  and  `exposureOrEventOrInjury`  disabilities fields to the paper form? Our understanding is that veterans should be able to put all kinds of exposure, event or injury in column 2 of Section V- not just TE related

> The exposureOrEventOrInjury attribute accepts a string value and is
> used to map to column 2 of Section V. The isRelatedToToxicExposure
> flag let's us know that there is a disability being claimed that
> should include toxic exposure information.
> 
> We are using isRelatedToToxicExposure as an identifier to set the
> special issue for PACT on the contention (disability) in VBMS. The
> flag is not directly sent anywhere to BGS or VBMS. If the flag is
> true, we will add the special issue and require that toxic exposure
> information is included. At this time, we cannot associate the
> exposure event directly to the disability.

2.  How exactly do you determine the 15A checkbox? ("Are you claiming any conditions related to toxic exposure?

> If ANY of the disabilities have isRelatedToToxicExposure set to true,
> we will check box 15A and require that toxicExposure is included.
> There is no direct link to the disability and the related toxic
> exposure information.

3.  Can we allow month-only or otherwise partial dates (lacking a start or end date) in the  `toxicExposure`  fields?

> I understand the need to minimize validation. At the same time, we may
> not be able to accept month-only dates due to API standards. Could the
> front-end validate that a year is always included with a month before
> going to the next step in this case? And also give the option to
> remove the month if the year is not known?

4.  For 15E, can we change the exposure dates field to an array of dates? This is to better process scenarios where there are 2 different date ranges for the same location.

> I think it would make things a bit messy/over-complicated on our side,
> if we started opening up the exposureDates to be an array. That is
> mostly due to the way the 526EZ form is expecting this data. For
> gulfWarHazardService, herbicideHazardService and
> additionalHazardExposures, the form can only take one date range. The
> additionalHazardExposures section is actually the opposite direction,
> where it allows for multiple exposure types, but only one date range.
> I wonder if it may be helpful to propose some changes for the next
> version of the 526EZ form in how that toxic exposure information is
> collected. At this time, there is nowhere for us to send this toxic
> exposure data outside of the 526EZ form. I can also see where it would
> be useful to directly associate the exposure information to the
> disability in the future. But unfortunately, we do not have a way to
> do that at this time.
> 
> from Emily: Re: date, We've been in conversation with the forms lead
> at 526 who generated the paper version of the form, and she's open to
> the idea of multiple exposure dates  for a given exposure
> period/substance, and only set it up the way it is on the paper  form
> for  speed and space constraints. I agree with the inclination to not
> directly associate TE questions with individual disabilities. The
> decision we'd need to make is where to put the dates if one vs. more
> than one are entered -- all the additionnal hazards box? as an
> addendeum to the form? etc. Thanks for the reminder about the PACT
> special issue at the contention level.  I think we need to mull that
> over a bit :thinking_face: (10/5/2023)

5.  Generally, we are trying to understand how multiple exposures from 15B through 15D are mapped to the LH request  `multipleExposures`  block, and from there to the paper form. Given the following example request (in thread![:thread:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-medium/1f9f5.png)) based on the current UI, how does this map?
