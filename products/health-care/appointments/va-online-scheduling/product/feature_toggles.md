# VAOS Feature Toggles

## Available

:exclamation: Toggles name that have strikethrough text means the flag is deleted
| Toggle | Description | Ticket to Add | Related Epic | Ticket to Remove | Comments |
| ------ | ----------- | ------------- | ------------ | ---------------- | -------- |
| ____________________________________________________________ | ____________________________________________________________ | _______________ | _______________ | _______________ | _________________________________________________________________ |
| va_online_scheduling | Allows veterans to view their VA and Community Care appointments |  |  | n/a | Toggle that manages the whole application. Should remain "enabled for everyone" at all times. |
| va_online_scheduling_cancel | Allows veterans to cancel VA appointments
| va_online_scheduling_community_care | Allows veterans to submit requests for Community Care appointments
| va_online_scheduling_direct | Allows veterans to directly schedule VA appointments
| va_online_scheduling_facility_selection_v2_2 | Next iteration of facility selection, version 2.2.
| va_online_scheduling_requests | Allows veterans to submit requests for VA appointments
| va_online_scheduling_unenrolled_vaccine | Toggle for unenrolled vaccine scheduling discovery work.
| va_online_scheduling_vaos_service_cc_appointments | Toggle for new vaos service cc appointments.
| va_online_scheduling_vaos_service_requests | Toggle for new vaos service requests.
| va_online_scheduling_vaos_service_va_appointments | Toggle for new vaos service va appointments.
| va_online_scheduling_variant_testing | Toggle for VAOS variant testing. | [#24277](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/24277), [#24278](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/24278) | [#24319](https://app.zenhub.com/workspaces/vaos-team-603fdef281af6500110a1691/issues/department-of-veterans-affairs/va.gov-team/24319) |  | Shared toggle for ongoing variant tests. Only one test should be conducted at a time. 
| va_online_scheduling_poc_health_apt | Toggle for health apartment proof of concept | [#33387](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33387) | [#33100](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33100) |  | For experimentation work related to the appointments part of the health apartment initiative. Features and functionality under this toggle are not intended to be user-facing in Production.
| va_online_scheduling_status_improvement | Toggle for Homepage status improvement | [#35158](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/35158) |  n/a | n/a  | Replace appointment status dropdown with status links|
| va_online_scheduling_clinic_location | Toggle for display of clinic location on appointment detail page | [#40860](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40860) | [#14091](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14091) | n/a | Toggle for display of clinic location on appointment detail page
| va_online_filter36_vats | Toggle to update the filtering logic from 24 months to 36 months for a given clinic in the direct appointment schedule flow | [#42695](https://github.com/department-of-veterans-affairs/va.gov-team/issues/42695) | n/a | n/a | Active but not currently used
| va_online_scheduling_vaos_v2_next | Toggle for VAOS tickets with the label vaos-v2-next will be behind this flag | [#44559](https://github.com/department-of-veterans-affairs/va.gov-team/issues/44559) | n/a | n/a | n/a
| va_online_scheduling_appointment_list | Toggle for the new appointment List feature | [#45377](https://github.com/department-of-veterans-affairs/va.gov-team/issues/45377) | n/a | n/a | Proof of concept for appointment list layout
| va_online_scheduling_clinic_filter | Toggle for VAOS direct scheduling clinic filtering | [#47302](https://github.com/department-of-veterans-affairs/va.gov-team/issues/47302) | n/a | n/a | n/a
| va_online_scheduling_acheron_service | Toggle for Acheron service changes | [#48250](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48250) | n/a | n/a | n/a
| va_online_scheduling_status_improvement_canceled | Toggle for canceled booked apppointments status improvement | [#48733](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48733) |  n/a | n/a  | Displays canceled booked appointments|
| ~~va_online_scheduling_express_care_new~~ | Enables Express Care request flow in VAOS | [#11066](https://app.zenhub.com/workspaces/vaos-team-603fdef281af6500110a1691/issues/department-of-veterans-affairs/va.gov-team/11066) | [#10840](https://app.zenhub.com/workspaces/vaos-team-603fdef281af6500110a1691/issues/department-of-veterans-affairs/va.gov-team/10840), [#23842](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23842) | [#27387](https://app.zenhub.com/workspaces/vaos-team-603fdef281af6500110a1691/issues/department-of-veterans-affairs/va.gov-team/27387) | Code and toggle removed, feature no longer in the app |
| ~~va_online_scheduling_provider_selection~~ | Enables the community care provider selection field | [#15869](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/15869) | [#6236](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6236), [#18855](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18855) | [#28572](https://app.zenhub.com/workspaces/vaos-team-603fdef281af6500110a1691/issues/department-of-veterans-affairs/va.gov-team/28572) | MVP launched in Production and in sustainment |
| ~~va_online_scheduling_cc_iterations~~ | Post-MVP iterations to community care provider preferences | [#28527](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/28527) | [#16462](https://app.zenhub.com/workspaces/vaos-team-603fdef281af6500110a1691/issues/department-of-veterans-affairs/va.gov-team/16462) | [#32322](https://github.com/department-of-veterans-affairs/va.gov-team/issues/32322) | |
| ~~va_online_scheduling_homepage_refresh~~ | Shows the refreshed appointment list and detail pages | [#17098](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17098) | [#15290](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15290) | [#35524](https://app.zenhub.com/workspaces/vaos-team-603fdef281af6500110a1691/issues/department-of-veterans-affairs/va.gov-team/35524) |  |


