Agenda:

**Product Summary and Overview (5 min) - Pete**

- **Background on GIB Statement of Benefits**

  - **Initial Reason for Adoption:**

    - IIR took on the GIBSOB project due to numerous reports from Veterans experiencing issues accessing their Statement of Benefits.

  - **Findings Upon Review:**

    - Despite appearing non-functional, the product was operating as intended. However, the user experience was misleading, causing confusion for both Veterans and Stakeholders.

  - **Improvements Implemented:**

    - **Backend Migration:** Transitioned from EVSS to Lighthouse to enable and segment relevant error codes.

    - **Enhanced UI Messaging:** Provided clear and relevant messages within the UI to improve user experience.

- **Intro to the codebase (5-7 min)** 

  - **FE - Nick**

    - Very minimal changes made to `vets-website` - just enough to get it working

    - Modified api call to hit the new controller

    - Worked with UX to provide better error messaging, handle errors flowing from Lighthouse

    - In addition to changes in the [main component](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/post-911-gib-status), modify the request in [form 10203](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/edu-benefits/10203) which hits the GIBS endpoint but only to see how much of the entitlement is remaining

    - Made heading-level structural changes, updated and added copy, updated markup to use some VA components.

  - **BE - Adam**

    - Most of the code lives in `lib/lighthouse/benefits_education` within `vets-api`

    - New controller version created at `app/controllers/v1/post911_gi_bill_statuses_controller.rb`

    - When a request comes to the controller, it instantiates a new instance of the service

    - Service calls it’s `config.get` to retrieve the data from Lighthouse

    - Response is put into a custom response object and returned to the controller, which serializes it and sends it to the web client

    - Previously, the EVSS service always sent a 200 response back to `vets-api`, then a whole bunch of ugly logic had to determine if we were actually successful or how we failed

- **Q\&A as listed below (20 min)**

****

Question for GIB Hand off:

****

**GovCIO's Education Data Migration (EDM) team will take over code ownership for GI Bill Statement of Benefits.**

**EDM will also ask questions related to:**

- **“Why downtimes were hardcoded and any additional context about error handling”**

  - My assumption is that the old service (EVSS) had less visibility into downtimes/outages than Lighthouse does.  We have not done any work in this area of the component, other than recently adjusting error handling to properly handle service outage errors.  

  - The next step here would be to confer with the Lighthouse folks ([#lighthouse-delivery-platform-support](https://dsva.slack.com/archives/C03UA9MV1EH) on DSVA slack) and see if we can go ahead and let network requests flow to Lighthouse.

- **Status about the script for creating test users**

  - Test users have been a source of frustration for us.  We had one test user which would allow us to retrieve GIBS data, but that user has “aged out” now.  It’s not a satisfying answer but those responses can be mocked out, either at the API level through [vets-api-mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata/) or using mocked requests in vets-website

  - For long term ownership purposes, we would recommend working with Lorri Glover and Michael Harlow in DSVA slack to create a specific relevant test user

- **Other credentials like lighthouse access that can be transferred**

  - You will need to put up a request at [#lighthouse-delivery-platform-support](https://dsva.slack.com/archives/C03UA9MV1EH) on DSVA and they’ll assign you a client id.  You’ll need to send them an ssh key

- **The operating hours for LTS are hardcoded into vets-api here.** 

  - Was this existing behavior? 

    - Yes the operating hours for the product were defined as they currently are when we inherited the product. During product discovery, the logic we discovered for having operating hours was dependent on the need for an in person customer support agent to help

  - And is it preferable to letting Lighthouse handle the error upstream

    - As previously mentioned, it’s possible that Lighthouse has better handling than EVSS did.  

  - And in general, any additional context for problems/solutions regarding error handling?

    - I think this would be a great area to explore next.

- **Can you demonstrate configuring a test user for SOB, and can you share the necessary script or document the steps?**

  - 

- **Are there any credentials that would need to be transferred after code transfer? For example, Lighthouse sandbox and production access. RSA key and client ID. Would client ID remain the same?**

  - We do not have production keys, those are in aws parameter store.  The client id is stored in

    - /dsva-vagov/vets-api/prod/lighthouse/benefits\_education/access\_token/client\_id

    - /dsva-vagov/vets-api/staging/lighthouse/benefits\_education/access\_token/client\_id

  - The rsa keys are associated with the machines and are placed in the filesystem.

  - Sandbox keys will be assigned to you - ask on the DSVA slack linked above

Additional questions

- **Are references to EVSS in the codebase still accurate, or do those need to be updated? For example on the frontend here and here**

  - This needs to be updated.  You can see instructions on how to do this [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications).  It will require adding an entry in both `vets-website` and `vets-api` but should be a relatively minor change 

- **I noticed differences between Lighthouse and vets-api in how some attribute names are getting serialized for the amendment object. Can you point to where the key transformation is taking place?**

  - Differences between LH/vets-api:

    - residenceHours/onCampusHours

    - distanceHours/onlineHours

    - amendmentType/type

    - amendmentStatus/status

    - amendmentEffectiveDate/changeEffectiveDate

  - I’m not sure about these.  It’s possible that these are incorrectly set in the serializer, to match the previous data contract with EVSS.  Further hammers home the importance of securing a good set of staging users.

- **It looks like the BackendStatusesController also relies on the hardcoded LTS operating hours. The note here states the show action “only looks at GI bill scheduled downtime (and gets no data from PagerDuty).” Is PagerDuty tracking any metrics for GIBS that you’re aware of?**

  - The only alerting I have access to is through Datadog and the #gib-statement-alerts channel in DSVA.  I would talk with Steve Albers about doing some PagerDuty integrations with the GIBS tool.  It’s possible that now that we have moved over to Lighthouse, we can leverage PagerDuty.

  - Here are the Datadog dashboards I have:

    - [prod dashboard](https://vagov.ddog-gov.com/dashboard/kpe-8jk-rik/post-911-gi-bill-statuses-controller?fromUser=false\&refresh_mode=sliding\&view=spans\&from_ts=1721829846137\&to_ts=1721833446137\&live=true)

    - [prod apm traces](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3A%22eks-prod%22%20service%3A%22gibill-statement%22%20resource_name%3A%22V1%3A%3APost911GIBillStatusesController%23show%22\&agg_m=count\&agg_m_source=base\&agg_t=count\&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code\&env=eks-prod\&fromUser=false\&graphType=flamegraph\&historicalData=false\&messageDisplay=inline\&query_translation_version=v0\&shouldShowLegend=true\&sort=time\&sort_by=%40http.status_code\&sort_order=asc\&spanType=service-entry\&spanViewType=logs\&traceQuery=\&view=spans\&start=1721832564227\&end=1721833464227\&paused=false)

    - [staging dashboard](https://vagov.ddog-gov.com/dashboard/3ex-9zm-b34/post-911-gi-bill-statuses-controller-staging?fromUser=false\&refresh_mode=sliding\&view=spans\&from_ts=1721829887283\&to_ts=1721833487283\&live=true)

    - [low traffic alarm](https://vagov.ddog-gov.com/monitors/190212?view=spans) (kicked off when we had downtime that we weren’t aware of, June 27 - Jul 8)

    - [high error rate alarm](https://vagov.ddog-gov.com/monitors/214566?view=spans) (noisy, needs tuning)
