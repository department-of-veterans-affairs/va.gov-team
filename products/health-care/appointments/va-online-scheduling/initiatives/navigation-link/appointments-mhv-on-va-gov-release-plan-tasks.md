# Release Tasks - Implementing the URLs, Breadcrumbs, Page Title + Re-directs for the Appointments tool (MHV on VA.gov initiatve) 

## Project Summary Feature [#57667](https://app.zenhub.com/workspaces/appointments-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/57667)
MHV users will now use the Appointments tool on VA.gov. The changes are to update the URLs, breadcrumbs, page titles, and re-directs structure on the Appointments tool. The update will be consistent across the mulitple application on MHV on VA.gov.

## Implementation Plan
- The Appooinemnts FE team will turn on the feature toggle 100% to all users in production on Tuesday, October 3, 2023. The MHV on VA.gov try me banner is expected to go live on Thursday, October 5, 2023.
- MHV static landing page to go out live on _____.
- Public Websites widget link to the new URL is under the Appointments FE feature toggle `va_online_scheduling_breadcrumb_url_update`
- Authenticated Experience MyVA widget (non-Cerner) link to the new URL is under the Appointments FE toggle `va_online_scheduling_breadcrumb_url_update`

## Tasks 
- [ ] Simi (add any deployment tasks for the team if applicable) 
- [ ] Jeff to turn on the feature toggle 100% on Tuesday, October 3, 2023
- [ ] Simi will need to deploy the re-direct work on Wednesday, October 4, 2023  or Thursday, October 5, 2023 (may need to put a maintenance window) [need to discuss with Eric Boehs - Platform Reliability Lead]
- [ ] Test in production with a MHV user (coordinate with Kay) 
- [ ] Test in production with a non-MHV user (coordinate with Marcy)
- [ ] Test in production with a Cerner user (coordinate with Kay - maybe we can ask Brian again)

  
