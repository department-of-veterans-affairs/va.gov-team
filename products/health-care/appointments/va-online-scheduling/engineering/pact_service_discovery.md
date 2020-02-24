# PACT service investigation

## PACTs and clinics (extremely simplified explanation)

PACTs are teams of providers that Veterans are assigned to and receive care from. Any direct scheduled primary care appointment requires a PACT, so VAOS only exposes VistA clinics that are associated with the Veteran's PACT.

PACTs are not part of VistA, they're in a separate module, called PCMM. PACTs are associated with clinics by a primary provider, which is one of the PACT members and is also a provider in VistA.

In order to appropriately handle the PACT requirements, VAOS uses two CDW stored procedures specific to pulling clinics and members for primary care appointments.

## Problem
The VAOS PACT service (`/direct-scheduling/site/{site-code}/patient/{assigning-authority}/{patient-id}/pact-team`) takes 40+ seconds to fetch the members of a Veteran's PACT. Legacy VAOS uses this service in order to display the PACT members to a Veteran, as well as preventing a user from direct scheduling for primary care if they do not have any members associated with valid clinics in the chosen facility. The redesigned VAOS does not display the PACT members, but it does do the check to make sure there are PACT members in order to direct schedule primary care appointments.

However, the clinics service (`/clinical-services/clinics`), when requesting clinics for primary care, calls a CDW stored procedure that is filtering the clinics returned by a Veteran's PACT.

*Given that waiting 40+ seconds is not an acceptable user experience and that Veterans without a PACT should not have available clinics to scheduled into, do we need the PACT service?*

We would need to find a case where the clinics service returned schedulable clinics for primary care, but the PACT service returned no members, for the PACT service to be necessary.

### Why is the PACT service so slow?

A recent change to CDW's indexing model made queries that have a lot of row filtering slower, in the service of reducing data usage and better supporting data warehousing use cases. The PACT service specifically appears to be slow because the two underlying CDW stored procedures are slow, and the PACT service calls both of them in series.

## Recommendation

My recommendation is that we do not call the PACT service from the redesigned VAOS in the short term.

In the future, we or our dependencies will definitely need PACT member information, so this is a temporary solution that may be invalidated when designs change.

To be clear, _this does not mean we're ignoring PACTs entirely_. PACTs are still used to determine what clinics are available and have to remain a part of that logic. This recommendation is just to stop preventing users from direct scheduling while we call the PACT service and check that it has members.

### Long term

We know that PACT information will be needed to support some future work:

1. Community Care eligibility will need to take PACT into account for primary care
2. VAOS will need to support a provider-first scheduling flow, which would require fetching PACT members for a Veteran to choose from
3. VAOS may also need to be able to schedule into resident clinics, rather than just clinics associated with the primary provider, which would require information from PCMM.

We need to determine an efficient way of getting PACT members and assignments. The PCMM-R web service is the likeliest place for this, but we are just starting an investigation.

### Risk

The primary risk if this recommendation is wrong is that some subset of Veterans will be able to schedule into clinics that they shouldn't be able to. Given the following scenario:

1. A Vetern has an active PACT
2. That PACT has an assigned primary care provider, but they're not active
3. A primary care VistA clinic is associated with the primary care provider who is inactive in PCMM
4. All other providers in the team are also inactive (or the primary care provider is the only team member)

Currently, if 1-3 are true, VAOS will allow the patient to direct schedule, but if 4 is true, then it will stop you. With the removal of the PACT service check, the patient will no longer be stopped from scheduling.

According to the PCMM product owner, 4 would be "unusual." It's also worth noting that 1-3 are likely to be much more common than 4, so if this is actually a problem, it would already be occuring, and this recommendation would only impact the patients in the unusual circumstance of having a PACT with no active providers.

Direct scheduling accounts for around 40% of submissions in legacy VAOS, and this would be a small subset of primary care DS users.

### Areas of uncertainty

1. There's a lot of complicated filtering and merging of data in the Java code for the PACT service that I don't fully understand. In theory, this could be filtering out certain PACT members that the stored procedures are not, creating the active clinics and no PACT members scenario. However, this still would appear to be a data or logic error, based on other conversations
2. I don't have the full context of all the CDW tables involved in the query, nor have I been able to look at that data and run ad hoc queries. So it is possible there are edge cases in the data organization that I'm not aware of. However, Kevin Todd has indicated the two CDW stored procedures return similar results, which makes me more confident there aren't important cases we're missing.

### Supporting documentation

I was primarily trying to find evidence of scenarios where we display the "you must have a PACT assignment" message underneath the direct scheduling radio button in legacy VAOS. Due to the way the code is written, this would only occur if there were active clinics to schedule into, but the Veteran had no PACT members associated with the chosen health system.

There are three main places to check to investigate this: CDW stored procedures, var-resources, and var-web.

#### CDW stored procedures

Both CDW stored procedures are very similar in their join logic. They both query the same PCMM tables. The clinics service only returns clinics that have a staff id that matches the primary provider staff id from the PCMM team. That staff id must also be non-zero. Both stored procedures only pull active clinics that match the primary care stop codes provided. The members stored procedure then queries team members associated with the teams associated with those active clinics.

https://coderepo.mobilehealth.va.gov/projects/CDW/repos/cdwa01/browse/OIA_MobileHealth/sprocs/App.ap_GetPtActiveTeamsMembers_v4.sql
https://coderepo.mobilehealth.va.gov/projects/CDW/repos/cdwa01/browse/OIA_MobileHealth/sprocs/App.ap_GetPtActiveTeamsClinics_v5.sql

Also confirmed with Kevin Todd (via Lynne Case) that the stored procedures should return similar results: https://vappgteam.slack.com/archives/CFCQT5XJL/p1581017235179800

#### var-resources

The primary PACT service code (https://coderepo.mobilehealth.va.gov/projects/VAR/repos/var-resources/browse/src/main/java/gov/va/vamf/scheduling/direct/dataservice/DSFacilityProviderDataService.java) does some extra filtering and merging of the data from the two CDW stored procedures. This code is difficult to follow without being able to run it, but I believe it is:

1. Fetching the valid clinics and PACT members
2. Looping through the valid clinics and collecting the associated facilities
3. Filtering for only the site being requested
4. Dividing the PACT into primary and non-primary providers
5. Recombining the PACT providers into one list

There does not appear to be any additional business logic to filter out members in a PACT associated with the VistA site being requested.

#### var-web

In legacy VAOS, there are messages that display underneath the direct scheduling radio button when you're not allowed to choose that option. That message is determined by a series of checks (https://coderepo.mobilehealth.va.gov/projects/VAR/repos/var-web/browse/veteran-appointment-requests/app/modules/new-appointment-request/views/common/method/section-view.js#70). The first check is that the clinic list is not empty. The second is that there is a PACT. If we could find a case where the PACT error message was displayed, that would prove we needed the PACT service.

Mark Greenburg tried two users without PACT assignments in staging and only saw the clinic list empty message.  There is some commentary in an old wiki page about testers expecting this message, but not seeing it (https://wiki.mobilehealth.va.gov/display/ARA/VAR+4.8.0+%28with+SM+2.5.0+and+VATS+2.3.0%29+SQA+Testing+Feedback).

The empty clinic list check is a newer addition to legacy VAOS, so it's likely that the PACT error message was appearing prior to sometime in early 2018 (https://coderepo.mobilehealth.va.gov/projects/VAR/repos/var-web/commits/f591c83f266ab2c30acc800f09d5cb41b6ec1557#veteran-appointment-requests/app/modules/new-appointment-request/views/common/method/section-view.js).

#### Conversation with Marcy Nadeau

Marcy indicated that a Veteran having an active PACT, but that PACT not having any members would be a data error, not an expected use case. Marcy also confirmed that legacy VAOS is no longer showing the PACT assignment error message in staging, which would display in the active clinics, but no PACT members scenario.
