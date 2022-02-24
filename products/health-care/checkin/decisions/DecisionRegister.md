This is a decision register to capture decisions the team feels need to be documented in a centralized place.

| Decision  | Owner | Date | Notes | Link |
| --------- | ----- | ---- | ----- | ---- |
| The Pre-Checkin token validity will be for 24 hours and the veteran will need to re-authenticate after that period. | Patrick | 11/10/2021 | | [slack](https://dsva.slack.com/archives/C022AC2STBM/p1636566903374900?thread_ts=1636564483.369900&cid=C022AC2STBM) |
| Appointments at multiple facilities on the same day will not be supported until post-MVP at the soonest | Stephen + Patrick | 11/16/2021 | | [slack](https://dsva.slack.com/archives/C022AC2STBM/p1637078951426300?thread_ts=1636550509.363200&cid=C022AC2STBM) |
| Appointments at multiple facilities on the same day will not be supported until post-MVP at the soonest | Corey | 12/22/2021 | After meeting to go through Pre-Check-in staging testing, it was decided to wait until new year to release to prod due to additional deployments needed, UX review, and code freeze going into effect 12/17/2021 UPDATE: additionally, pre-checkin cannot be launched until https://github.com/department-of-veterans-affairs/chip/issues/338 has been resolved and deployed to prod. | [slack]( https://dsva.slack.com/archives/C022AC2STBM/p1640202748439300) |
| URL Shortener will use DynamoDB as a data store instead of S3 | Shane, Stephen | 1/31/2022 | | [slack](https://dsva.slack.com/archives/C02G6AB3ZRS/p1643649918524849?thread_ts=1643647614.222829&cid=C02G6AB3ZRS), [slack](https://dsva.slack.com/archives/C02G6AB3ZRS/p1643649142159969?thread_ts=1643647614.222829&cid=C02G6AB3ZRS) |
| For reporting purposes, we will consider Pre-Check-In to have been started when a Veteran completes the LoROTA auth during the Pre-Check-In flow. This is where the "pre-check-in-started" status will be set in the "initiateprecheckin" lambda.|Team|2/16/2022|We made this decision because we feel completing the authentication shows intent to complete the pre-check-in.|n/a|
| vets-api: Any error when calling CHIP set-precheckin-started endpoint will be handled within vets-api, and not returned to website. It'll be logged to Sentry for investigation and resolution|Stephen, Corey, Adrian, Gaurav|2/22/2022|We discussed that allowing the veteran to continue pre check-in will lead to a better experience than showing them an error, even if this means a temporary discrepancy in staff facing app|[details](vets-api-set-precheckin-status.md)|
|Editing decisions: vets-api will integrate directly with lighthouse (not CHIP) for address verification; stephen will work to get a timeline on lighthouse profile read/write api & if lighthouse timeline is too long, vets-api will work to integrate directly with va profile api; FE will work on both full auth and edit screens, kept behind feature flag; we know that there is a risk of having different data in vista & vets-api, and that sometimes a veteran might see different data after fully auth'ing| Stephen + Engineers| 02/24/2022| Decided at engineering planning meeting| insert link to arch doc|


Team Check-In "North Star" Vision- key takeaways from vision discussion on 11/17

What functionality does the Veteran need at launch?
 - To be able to check in to appointments and receive care. (We already do this.)
 - Ability to check in easily if blind/visually impaired. Alternative to poster? (Team agreed we value ensuring our product is accessible to vision-impaired folks.)
 - Reassurance that the process worked, and assurance that the staff won't ask them for the same info on appointment day.
 - Assurance that their information gets updated across the VA.

What do the MSAs need at launch?
 - An easy way to see pre-check in status.
 - An easy way to know if they need to review contact or insurance information.
 - Confidence that no Veterans will slip through the cracks.



What must be true within the product ecosystem?
 - Ability to easily troubleshoot production support issues as they come in. (Product dashboard and developer dashboard? Ensure we can view record of instance(s) that may have had issues- which facility and check-in, and ability to pull logs to find out what went wrong.)
 - Discussed ensuring clinics have sufficient wifi/phone coverage to use mobile check-in. Per Patrick, we will have a white list of clinics that can use mobile check-in. This will need some planning before go-live.


