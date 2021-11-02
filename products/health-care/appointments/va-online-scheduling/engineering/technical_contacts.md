# VAOS technical contacts

## External services

### PPMS

- Status: used to fetch provider info in the community care request flow
  - In the future will be used to fetch provider name to show on the request detail page
- Context: PPMS is a large database of provider information from around the country. It has performance issues at times and also struggles with duplicate data, due to the same provider coming into PPMS through multiple healthcare networks. We access this data through vets-api passthrough API maintained by the va.gov facilities team (which is distinct from the Lighthouse facilities team).
- Point of contact: Michelle Middaugh and Lance Sanchez on the va.gov facilities team can point folks to the right PPMS contacts
- Escalation: Generally should coordinate with the facilities team, since if VAOS is seeing an issue, there's likely an issue on the facility locator app, too.

### VA Profile
- Status: used to fetch a user's phone and email address for use in the contact info page in the scheduling flow
- Context: this is automatically included in the vets-api User service and the FE pulls it from Redux. We rarely have to care about this data, it's fairly reliable
- PoC: #va-profile in digital services Slack is a good place to start. Erik Hansen or Lihan Li on the va.gov profile team can be helpful if we have issues understanding the data.
- Escalation: Unlikely to affect VAOS and no one else, probably need to monitor #va-profile.

### Facilities API
- Status: used to VA facility info. Currently this is done through a va.gov passthrough API, in the future it will be done through VAMF's mobile facility service passthrough
- Context: Lighthouse owns the facility api that is the source of truth for VA facility info. We've been getting at this data through the va.gov facility team's passthrough, but once the VAOS service work goes live, we'll be going through MFS v2.
- Point of contact: Michelle Middaugh and Lance Sanchez on the va.gov facilities team are contacts for the vets-api passthrough. Questions about actual facility data can be directed to the Lighthouse team, who are in digital services Slack. Lauren A can help point to the right folks, but Dave Mazik is the Lighthouse product lead/owner.
- Escalation: Generally should coordinate with the facilities team, since if VAOS is seeing an issue, there's likely an issue on the facility locator app, too.

### VAMF appointment services
- Status: Currently using mobile appointment service, mobile facility service, and var-resources, in the future will be using the vaos service and mobile facility service v2.
- Context: These are the core appointment services that we use. 
- Point of contact: We have regular meetings with this team, so contacting them through scrum of scrums or in #vaos-engineering in PPG Slack is the best route.
- Escalation: If we need prod support, creating a ticket in the MAPSUP project is the right path: https://issues.mobilehealth.va.gov/projects/MAPSUP/

### Community care eligibility API

- Status: Currently using this Lighthouse service to check that a user can create a community care request, via a passthrough API in VAMF
- Context: VAMF has a mobile CCE service that we use, which returns the top level eligible/not eligible flag, and none of the other eligibility information
- Point of contact: For info about the actual service, contact Lighthouse through digital services Slack, Dave Mazik or Lauren A.
- Escalation: Raising the issue in Slack is the best we have, currently.
