# Post-Mortem Outage Incident Report
## Incident Date
Jul 29, 2022

### Summary
At 4:00 PM ET on Thursday, June 30, 2022, an updateto the Place of Birth - State field on the 10-10EZ Health Care application to  was deployed to the production environment. This update allowed Veterans to select any State/Province in North America (including Mexico and Canada), causing the applications to fail the automatic processing and be routed to a manual registration process. The list of states, including foreign states, has been in the schema (which is used by the backend and the frontend for validation) for 5+ years. At some point, the frontend was updated to only include USA states, but the schema was not updated. The recent frontend change changed it back to match the schema, which caused the errors to happen.  There are no risks to other applications, as the 10-10ez schema is only used by the 10-10ez frontend and backend codebase.

The Enrollment System can only accept the 50 U.S. States, Washington D.C. and Other (for any other territories or foreign countries) for automatic processing. During the manual registration process, the HEC staff rely on the Military Service Information provided in the application data.

At 4:00 PM ET on Monday, July 25, 2022, a new feature to allow Veterans to complete a shortened version of the 10-10EZ Health Care application was deployed to the production environment. The 10-10EZ Short Form skips the Military Service Information and Household sections of the application, that information is not required for those that qualify to complete the shortened version.  

When the Veteran enters a Place of Birth outside of the allowable 50 states, D.C. or Other, and completes the Short Form, the Military Service Information is blank.  Therefore, when the application fails the automatic processing (due to the Place of Birth issue), the HEC staff cannot manually register the applicant because the Military Service Information is blank.

The issue was identified and reported by Joshua Faulkner at 12:07 PM ET via an email.

Upon this report, the deployment for Short Form was rolled back. As of 1:53 PM ET July 29, 2022, the Short Form feature was no longer available and the 10-10EZ regular form flow was in place for all applicants.

#### Event Timeline
- 06-30-2022 @ 4:00PM ET: Deployed production release of Place of Birth update
- 07-25-2022 @ 4:00PM ET: Deployed production release of Short Form feature
- 07-29-2022 @ 12:07 PM ET: Identified and reported by HEC team
- 07-29-2022 @ 1:53 PM ET: Rolled back production release for Short Form feature

#### Impact
High - Impact was high, as to the HEC staff being unable to manually register any failures from the automatic process due to the Military Service information being blank.

#### Ownership
- Online Health Apps team (10-10EZ)
- Joshua Faulkner/Enrollment System team

#### Action Items
|Action	|Owner	|Ticket|
|-------------|-------------------|---------------------|
|Update the Place of Birth list to reflect only the expected values that the 1010 needs|Online Health Apps team |[#45076](https://github.com/department-of-veterans-affairs/va.gov-team/issues/45076)|
|Update the ES Backend to receive empty Military Service information values|Joshua Faulkner |n/a|
|Complete end to end testing in staging environment prior to launch|Joshua Faulkner/Online Health Apps team |[#45077](https://github.com/department-of-veterans-affairs/va.gov-team/issues/45077)|
|Release to Production starting with 5%, check in with HEC team|Online Health Apps team/Joshua Faulkner |tbd|
|Conduct UAT with Veterans (including POB outside US)|Online Health Apps team |tbd|
|Release increase to 25%, check in with HEC team|Online Health Apps team/Joshua Faulkner  |tbd|
|Release increase to 50%, check in with HEC team|Online Health Apps team/Joshua Faulkner  |tbd|
|Release increase to 75%, check in with HEC team|Online Health Apps team/Joshua Faulkner  |tbd|
|Release increase to 100%, check in with HEC team|Online Health Apps team/Joshua Faulkner  |tbd|
