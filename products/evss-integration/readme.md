# EVSS Integration

va.gov relies on a growing set of services that provide functionality being migrated and transformed from [eBenefits](https://www.ebenefits.va.gov). You can play around on eBenefits by following [these instructions](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-ebenefits.md).

## Services

As of March 2018, va.gov relies on the following EVSS services, which are available in multiple environments.

  * Common Services: `https://$HOSTNAME/wss-common-services-web-11.2/rest/`
  * Claim Services: `https://$HOSTNAME/wss-claims-services-web-2.2/rest/`
  * Document Services: `https://HOSTNAME/wss-document-services-web-2.2/rest/`
  * Education Services: `https://HOSTNAME//wss-education-services-web/rest/education/chapter33/v1`
  * Letter Services: `https://$HOSTNAME/wss-lettergenerator-services-web/rest/letters/v1`
  * PCIU Services: `https://$HOSTNAME/wss-pciu-services-web/rest/pciuServices/v1`

There are a number of EVSS environments, but the ones we care about are
  * CI: `https://csraciapp6.evss.srarad.com` (use this for local development; requires a connection to the CSRA VPN)
  * INT: `https://int.ebenefits.va.gov` (connects to `dev-api.vets.gov`)
  * PINT: `https://pint.ebenefits.va.gov` (connects to `staging-api.vets.gov`)
  * PROD:

## API Documentation

[Instructions for connecting to the CSRA VPN](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/evss-integration/engineering-assets.md)

  * Common Services
    * Swagger docs: ?
    * va.gov-team docs: ?
  * Claim Services
    * Swagger docs: ?
    * va.gov-team docs: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/claims-status/file-claim
  * Document Services
    * Swagger docs: ?
    * va.gov-team docs: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/claims-status/file-claim
  * Education Services
    * Swagger docs: https://csraciapp6.evss.srarad.com/wss-education-services-web/swagger-ui/index.html
    * va.gov-team docs: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/statement-of-benefits
  * Letter Services
    * Swagger docs: https://csraciapp6.evss.srarad.com/wss-lettergenerator-services-web/swagger-ui/index.html
    * va.gov-team docs: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-military-records and https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems/eBenefits-EVSS
  * PCIU Services
    * Swagger docs: https://csraciapp6.evss.srarad.com/wss-pciu-services-web/swagger-ui/index.html
    * va.gov-team docs: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems/eBenefits-EVSS
    
Note that the earlier EVSS services were built with no swagger documentation. _TODO: ask CSRA to provide API specs in some format_

### EVSS Roadmap

There are  new EVSS services being designed and developed--the roadmap for these should be coupled with the va.gov roadmap in order to make our collaboration as efficient as possible.

This section is a placeholder for a link to the current EVSS Roadmap.  _TODO: decide where versioned copies of the EVSS roadmap will live and point to the most current one from here._

## EVSS Team Collaborations

There are 2 separate contract teams responsible for EVSS software:
  1. EVSS Sustainment Team (contractor: Insignia): responsible for maintaining and fixing production EVSS services
  1. EVSS Development Team (contractor: CSRA): responsible for building new EVSS services that vets.gov will consume

### EVSS Sustainment Team

For any issues with services vets.gov is currently consuming in production, contact the EVSS Sustainment Team. Ways to do this:
  * **Slack:** the `#evss-prod` channel includes DSVA, Ad Hoc, Insignia, and CSRA members. This might be the first place you inquire about an issue you're seeing in production. However, Insignia folks aren't glued to Slack, so you should almost always follow up with an email message
  * **Email:** as with all government things, there are numerous people who should be included on an email inquiring about a production issue
  * **Meetings:** the EVSS sustainment and development teams meet with va.gov every Monday and Thursday at 2:30pm ET. Ask for the meeting info if you'd like to join.
  
_Why are CSRA people included in the the `#evss-prod channel`,_ you might ask? There is a bit of fuzziness around how long a service is live in production before it is considered to be in maintenance mode. E.g., if a new service goes live and bugs or issues become apparent shortly afterward, CSRA is likely still responsible for addressing those issues. If you are not sure which team to ask about a given issue, get on `#evss-internal` and see if @mattpointzxer0 and @MaryO-USDS can help make that call.

### EVSS Development Team

When designing and developing new services for va.gov to consume, contact the EVSS Development Team. Ways to do this:
  * **Slack:** the `#evss` channel includes DSVA, Ad Hoc, and CSRA members. CSRA members are fairly responsive on this channel, and will usually help by @ mentioning a specific developer on that channel who can help you out.
  * **Meetings:** the EVSS development team and vets.gov have a daily 1pm ET standup which you are welcome to join any day. It's best to post on `#evss` that you'd like to discuss X with the team at the next standup if there's time, and someone will respond and get you added to the event. Thursdays are typically platform discussion days, so team leads join to discuss CSRA's migration of services from the VA AITC environment to AWS GovCloud.

### Slack

Just to recap the purpose of the 3 evss-related slack channels:

  * `#evss-internal`: va.gov only (DSVA and Ad Hoc); use this to brainstorm things before heading over to #evss or #evss-prod
  * `#evss-prod`: EVSS sustainment and development; use this to ask questions about any live product; you can also ask if something that's live is broken in staging if you're seeing a problem; not always responsive, so if urgent, follow up with email (see above for contacts)
  * `#evss`: EVSS development;  use this to collaborate on services that aren’t launched yet; you can also ask about how production services were architected and/or get background information on production services; in some cases, this team will be asked to make a change to a production service, but before asking them to do this, discuss on #evss-internal

## May 2017 Historical Notes

Below is the README content written in April/May 2017. 

We have a [getting started](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/evss-integration/getting-up-to-speed.md) document regarding 2017 EVSS work.

Additionally, this directory contains a plethora of historical and current-state information about EVSS integration, which includes:
* All [technical discovery done in 2016](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/evss-integration/discovery), which was then put on pause 
* All [UX discovery done in 2016 by frog](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/evss-integration/discovery), which should be considered a starting point for review for 2017 work, although please note that the discovery context and product solutions are somewhat different now versus then (there are still very good ideas and data in this research)
* A general [overview of where we started in 2017](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/evss-integration/vets.gov-ebenefits-intro-2017.pptx)
* A general [list of EVSS features](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/evss-integration/evss-features-overview.pptx)

## Additional Notes
* Want to login to eBenefits and look around?  Great!  Here are some [test accounts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-ebenefits.md).
* We have daily standups and frequent face-to-face meetings with the EVSS team. These meetings include discussion of our running list of joint [action items](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/evss-integration/reference-documents/evss-vets.gov-collaboration-kickoff-action-item-tracker-20170503.xlsx)
* The [reference documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/evss-integration/reference-documents) folder contains current reference materials including important documents to understand such as the [EVSS/Vets.gov API proposals document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/evss-integration/reference-documents/evss-dsva-api-proposal-mar2017.pptx) put together in March 2017 and were instrumental in getting us to where we are today (a healthy collaborative working environment).
* All current product plans are heavily informed by the [comprehensive information and metrics document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/evss-integration/reference-documents/evss-comprehensive-info-and-metrics-apr2016.xlsx) put together in early 2016.
