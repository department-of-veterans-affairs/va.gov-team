# Impact to AE Team

- **The problem:** About 30% of Veterans had an ‘unknown’ discharge status for all their service history causing Veterans who should be eligible unable to access the VSC.

- **The change:** The Veteran Status Card (VSC) was originally set up to pull information from VA Profile service history end points. Mobile investigated the Lighthouse (LH) API, and found it yielded higher results than the VA Profile API. The team is in the process of changing to a mix of LH API and VA Profile API.

- **How this impacts AE team**

  - If the LH API is in fact presenting more accurate results than VA Profile, consider swapping or combining API calls to remove unknown information.

    - Consider experience in cases of conflicting information.

  - Evaluate what is being returned by the front end based on the different Veteran statuses. Update experience based on responses.

- **Resources**

  - [Full documented history and breakdown of the core problem.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/ineligibility-error-messaging-logic.md)

    - Noting VA Profile pulls from DEERS + VADIR, LH API pulls from VADIR.

  - [Link to VA Profile developer documentation.](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-profile)

    - [VA Profile API Sharepoint.](https://dvagov.sharepoint.com/sites/OITEPMOVAPROPUB/SitePages/Profile-Service.aspx?csf=1\&web=1\&e=HmuH3U)

  - [Link to LH API documentation.](https://developer.va.gov/explore/api/veteran-service-history-and-eligibility/docs?version=current)

  - [Link to AE team investigation ticket.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110486)


## About the Veteran Status Card

- The VSC is reliant on Title 38 Veteran status to determine eligibility. In the chart provided:

  - Green are Title 38 eligible Veterans.

  - Yellow is unknown discharge statuses and are \~30% of users.

  - Orange are not Title 38 eligible Veterans and are \~1% of users.

- The VSC is being handed off to the Mobile Support Team.

- The Veteran ID Card (VIC) is an application you can submit that a team manually processes. It is the same process, only manual, as the VSC. Most of the team's role is hunting down eligibility information.

  - The goal is to sunset VIC by end of year.

- VSC and VIC have to abide by laws that say the Veteran has to pay for the card (VA doesn’t uphold payment requirement) and requires a photo ID.
