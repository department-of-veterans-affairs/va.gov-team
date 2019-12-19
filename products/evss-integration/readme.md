# EVSS Integration

Vets.gov relies on a growing set of services that provide functionality being migrated and transformed from [eBenefits](https://www.ebenefits.va.gov). You can play around on eBenefits by following [these instructions](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-ebenefits.md).

## Services

As of March 2018, vets.gov relies on the following EVSS services, which are available in multiple environments.

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
    * vets.gov-team docs: ?
  * Claim Services
    * Swagger docs: ?
    * vets.gov-team docs: https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Global/Claim%20Status/file-claim/technical-documents/rest-documentation.md
  * Document Services
    * Swagger docs: ?
    * vets.gov-team docs: https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Global/Claim%20Status/file-claim/technical-documents/rest-documentation.md
  * Education Services
    * Swagger docs: https://csraciapp6.evss.srarad.com/wss-education-services-web/swagger-ui/index.html
    * vets.gov-team docs: https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Education/Post-911%20GI%20Bill%20Statement%20of%20Benefits
  * Letter Services
    * Swagger docs: https://csraciapp6.evss.srarad.com/wss-lettergenerator-services-web/swagger-ui/index.html
    * vets.gov-team docs: https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Records/VA%20Documents%20and%20Letters and https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Data/Data-Services/EVSS/Letters
  * PCIU Services
    * Swagger docs: https://csraciapp6.evss.srarad.com/wss-pciu-services-web/swagger-ui/index.html
    * vets.gov-team docs: https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Data/Data-Services/EVSS/Contact-Information
    
Note that the earlier EVSS services were built with no swagger documentation. _TODO(@mattpointzxer0, @jkassemi): ask CSRA to provide API specs in some format_

### EVSS Roadmap

There are  new EVSS services being designed and developed--the roadmap for these should be coupled with the vets.gov roadmap in order to make our collaboration as efficient as possible.

This section is a placeholder for a link to the current EVSS Roadmap.  _TODO(@mattpointzxer0, @rroueche): decide where versioned copies of the EVSS roadmap will live and point to the most current one from here._

## EVSS Team Collaborations

There are 2 separate contract teams responsible for EVSS software:
  1. EVSS Sustainment Team (contractor: Insignia): responsible for maintaining and fixing production EVSS services
  1. EVSS Development Team (contractor: CSRA): responsible for building new EVSS services that vets.gov will consume

### EVSS Sustainment Team

For any issues with services vets.gov is currently consuming in production, contact the EVSS Sustainment Team. Ways to do this:
  * **Slack:** the `#evss-prod` channel includes DSVA, Ad Hoc, Insignia, and CSRA members. This might be the first place you inquire about an issue you're seeing in production. However, Insignia folks aren't glued to Slack, so you should almost always follow up with an email message
  * **Email:** as with all government things, there are numerous people who should be included on an email inquiring about a production issue
    * Insignia: Michael.Walker10@va.gov, Fredrik.Durand@va.gov, Courtney.Rive@va.gov, and VAEVSSSustainmentTeam@va.gov (not sure who's on this, but seems like a good way to catch everyone)
    * VA: Dale.Beehler@va.gov  (Insignia COR), Troy.Hamilton@va.gov (CSRA COR)
    * DSVA: Matt Self, Mary O'Toole, and the DSVA product strategist responsible for the product
    * Ad Hoc: Rachael Rouche, James Kassemi, and any Ad Hoc product managers and developers responsible for the product
  * **Meetings:** the EVSS sustainment and development teams meet with vets.gov every Monday and Thursday at 2:30pm ET. Ask  @mattpointzxer0 or @MaryO-USDS to send you the meeting info if you'd like to join.
  
_Why are CSRA people included in the the `#evss-prod channel`,_ you might ask? There is a bit of fuzziness around how long a service is live in production before it is considered to be in maintenance mode. E.g., if a new service goes live and bugs or issues become apparent shortly afterward, CSRA is likely still responsible for addressing those issues. If you are not sure which team to ask about a given issue, get on `#evss-internal` and see if @mattpointzxer0 and @MaryO-USDS can help make that call.

### EVSS Development Team

When designing and developing new services for vets.gov to consume, contact the EVSS Development Team. Ways to do this:
  * **Slack:** the `#evss` channel includes DSVA, Ad Hoc, and CSRA members. CSRA members are fairly responsive on this channel, and will usually help by @ mentioning a specific developer on that channel who can help you out.
  * **Email:**
    - CSRA: Niranjan.Sathindran@csra.com, Kayur.Shah@csra.com, and any other specific team members you know of working on the product
    - VA: Troy.Hamilton@va.gov (CSRA COR)
    - DSVA: Matt Self, Mary O'Toole, and the DSVA product strategist responsible for the product
    - Ad Hoc: any Ad Hoc product managers and developers responsible for the product
  * **Meetings:** the EVSS development team and vets.gov have a daily 1pm ET standup which you are welcome to join any day. It's best to post on `#evss` that you'd like to discuss X with the team at the next standup if there's time, and someone will respond and get you added to the event. Thursdays are typically platform discussion days, so @patrickvinograd, @leannammiller, and @a12k join to discuss CSRA's migration of services from the VA AITC environment to AWS GovCloud.

### Slack

Just to recap the purpose of the 3 evss-related slack channels:

  * `#evss-internal`: vets.gov only (DSVA and Ad Hoc); use this to brainstorm things before heading over to #evss or #evss-prod
  * `#evss-prod`: EVSS sustainment and development; use this to ask questions about any live product; you can also ask if something that's live is broken in staging if you're seeing a problem; not always responsive, so if urgent, follow up with email (see above for contacts)
  * `#evss`: EVSS development;  use this to collaborate on services that aren’t launched yet; you can also ask about how production services were architected and/or get background information on production services; in some cases, this team will be asked to make a change to a production service, but before asking them to do this, discuss on #evss-internal

## May 2017 Historical Notes

Below is the README content written in April/May 2017. 

We have a [getting started](Getting_Up_To_Speed.md) document regarding 2017 EVSS work.

Additionally, this directory contains a plethora of historical and current-state information about EVSS integration, which includes:
* All [technical discovery done in 2016](2016_discovery), which was then put on pause 
* All [UX discovery done in 2016 by frog](2016_ux_discovery_by_frog), which should be considered a starting point for review for 2017 work, although please note that the discovery context and product solutions are somewhat different now versus then (there are still very good ideas and data in this research)
* A general [overview of where we started in 2017](Vets.gov-eBenefits_intro_2017.pptx)
* A general [list of EVSS features](EVSS_Features_Overview.pptx)

## Additional Notes
* Want to login to eBenefits and look around?  Great!  Here are some [test accounts](eBenefits_test_accounts.md).
* We have daily standups and frequent face-to-face meetings with the [EVSS team](EVSS_Org_Chart_2017-05-22.pdf).  Those notes can be found in the [meeting notes](meeting-notes) directory.
  * These meetings include discussion of our running list of joint [action items](EVSS_Vets.gov_Collaboration_Kickoff_Action_Item_Tracker.xlsx)
* The [reference documents](reference_documents) folder contains current reference materials including important documents to understand such as the [EVSS/Vets.gov API proposals document](reference_documents/EVSS_DSVA_API_Proposal_Mar2017.pptx) put together in March 2017 and were instrumental in getting us to where we are today (a healthy collaborative working environment).
* All current product plans are heavily informed by the [comprehensive information and metrics document](reference_documents/EVSS_comprehensive_info_and_metrics_Apr2016.xlsx) put together in early 2016.
