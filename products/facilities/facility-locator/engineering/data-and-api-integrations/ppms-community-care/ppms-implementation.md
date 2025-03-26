# Provider Profile Management System (PPMS) / Community Care implementation details
_last updated: 2025-03-25_

## What is Community Care
VA Community Care, https://www.va.gov/COMMUNITYCARE/: VA provides care to Veterans through community providers, to supplement VA Health facilities and services. Community care is based on specific eligibility requirements, availability of specific services at VA Health facilities, and the needs and circumstances of individual Veterans.

Community Care may also be referred to as Choice Act, MISSION Act, or veterans choice. 

## What is PPMS
Provider Profile Management System (PPMS) is a VA-owned/managed database that manages and provides data about Community Care providers and services.

Facility Locator integrates with PPMS as an API, to display Community Care providers and services. 
PPMS/Community Care data is returned as JSON with the `ProviderSerializer`.

PPMS has a very high bar for implementing change requests, as they have a very large user base and manage over 1 million providers in their system, so operate as an enterprise data lake. Requests for additions or changes must be submitted as a SNOW ticket, and meet a high bar for utility across their user base in order to be considered. (To date, PPMS has not prioritized any requested API changes made by the Facility Locator team.)
* How to file a change request: [TODO]

### PPMS Owners / Support
PPMS team own the PPMS data / endpoints. 

[Mar 2025]
* PPMS hosts **PPMS Integration Office Hours**:
  * Meeting owner: ornella.gomez1@va.gov (though recent reminders did not include Ornella Gomez but John Bryant only - John.Bryant2@va.gov)
  * Weekly on Tuesdays, 1pm ET
  * [MS Teams call link](https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWE3NjBmNTAtNDlhYS00ZTdjLWI1MWEtNzhiNzMwM2EzNmE0%40thread.v2/0?context=%7b%22Tid%22%3a%22e95f1b23-abaf-45ee-821d-b7ab251ab3bf%22%2c%22Oid%22%3a%222d38b465-c51a-412c-8e6b-a9d4843eff2b%22%7d) (the occurrence of this meeting ended 3/21/25)
* **MS Team chat** for questions / updates: [Provider Profile Management System (PPMS) Community | General | Microsoft Teams](https://teams.microsoft.com/l/team/19%3A2zu7xoewCffgNQryaIqmG03z9SUhsGoJUPUSWa2vZUE1%40thread.tacv2/conversations?groupId=68e7db21-a328-4d8c-8275-78f4e736b046&tenantId=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)

## PPMS integrations in Facility Locator
1. Facility Type: Community care providers (in VA's network) - returns PPMS provider results
2. Facility type: Community pharmacies (in VA's network) - returns PPMS pharmacy results
3. Facility type: Urgent care - is a "mashup" search that returns both Community Care urgent care providers and VA Health facilities that offer Urgent care services (from Lighthouse). [More info](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data-and-api-integrations/README.md#ppms-and-lighthouse-mashups)
3. Facility type: Emergency care - is a "mashup" search that returns both PPMS Community Care urgent care providers and VA Health facilities that offer Emergency care services (from Lighthouse). [More info](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data-and-api-integrations/README.md#ppms-and-lighthouse-mashups)
4. Provider core training: Providers who have completed trainings show a visual indicator on their search result card. Filters are not built, due to low % of providers with training data - [#14225](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14225)

**Provider data elements for Facility Locator**
- Providers in Community Care need three data elements: 
  - provider (who)
  - their specialty (what)
  - care site (where) to be available to the Facility Locator
 
### PPMS Limitations

Other limitations:
- Pagination: PPMS does not offer pagination as a parameter on their API, except for the Pharmacy endpoint. For other searches (Providers, ER, Urgent care), we provide PPMS with an address, radius and maximum results, and the endpoint responds with all providers in that maximum results/radius for the address, and THEN filters by service, so a request for 20 providers may return 20 providers in the geographic then filter down to 5 results for the service match, which affects our ability to effectively paginate (e.g. to find the _next_ set of matching results). Thus:
    - for ER and Urgent care results: we just return the first 20 results 
    - for Providers: we return all of the PPMS results returned, but the results per page is not counted, and pagination count in the FE is wrong. (e.g. [orthodontic care in Tulsa = 12 results](https://www.va.gov/find-locations/?page=1&address=Tulsa%2C%20Oklahoma%2C%20United%20States&facilityType=provider&serviceType=1223X0400X&latitude=36.15286&longitude=-95.989395&radius=67&bounds%5B%5D=-96.369395&bounds%5B%5D=35.772859999999994&bounds%5B%5D=-95.609395&bounds%5B%5D=36.53286&context=Tulsa%2C%20Oklahoma%2C%20United%20States))
- We cannot pull a number or list of all providers - requires an address or lat/long position -
- Their database is not accessible except via their Microsoft Azure application or via the API that has significant limitations
- Their developer dashboard has not been updated after their 2024 move to Microsoft Azure. (Most of their consumer organizations use the Microsoft application and do not access their API.)


## PPMS Provider Locator Sequence, optimized v1 query
![PPMS Provider Locator Sequence, optimized v1 query](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/v1%20ppms%20provider%20locator%20sequence.png)


## Development for PPMS
Requires vets-api (dev) console access. File a ticket to request, e.g. https://github.com/department-of-veterans-affairs/va.gov-team/issues/59791

### Local dev work 
[PPMS: How to connect vets-api to PPMS for local development](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facilities-api/how-to-connect-vets-api-to-PPMS-for-local-development.md)


## PPMS Endpoints
The PPMS endpoints are available only on the VA network or through CAG/Azure VM. They are as follows:

### DEV
DEVELOPMENT APIM Root URL: dws-dev.pmt.vaec.va.gov
Swagger: https://dws-dev-ppms.devtest.vaec.va.gov/swagger/ui/index (the Dev root URL changed in 6/2024 to the URL above. This Swagger URL has probably changed -- I haven't been able to verify) 

### NPROD (preprod)
PREPROD APIM Root URL: https://api.preprod.pmt.vaec.va.gov/dws/v1.0/ 
Developer Portal is at: https://va-devportal-api.preprod.pmt.vaec.va.gov/
-  Microsoft Azure API Management - developer portal (va.gov), subscription key required

### PROD 
PROD APIM ROOT URL https://dws.pmt.vaec.va.gov
There used to be a regional root URL and key, but they seem to be load balanced behind Azure now so there is only one ROOT URL after 8/2/24
-  Microsoft Azure API Management - developer portal (va.gov), subscription key required

## Key Management
Subscription keys for endpoints called by the Facility Locator are in the AWS Systems Manager (SSM) Parameter Store.

Please contact a member of the [@cms-devops-engineers](https://app.slack.com/client/T03FECE8V/CT4GZBM8F/user_groups/S01JXBLLMJL) group in the DSVA Slack to add, modify, or to get information about a Parameter Store secret.

## PPMS troubleshooting
These are the tools to diagnose problems
   - Access to the VA network (GFE or VM)
     - You can only access PPMS API docs from the VA Network
   - Access to AWS
     - We store the API keys in the ParamStore
     - PPMS APIs can be accessed from the vets-api VMs hosted by amazon
   - Monitoring tools
     - vets-api requests are logged to Datadog. However, most of the request data is hidden. Errors of type 400 have traces while 500 errors do not. If there are gateway timeouts (to vets-api or to PPMS from vets-api) there are no traces to identify the reason (likely systemic). [More info on Monitors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/monitoring.md)
   - Helpful Scripts:
     - `request-to-curl` this is what I use to generate the `curl` command from any given url
   - Useful things to know about `vets-api`
     - `FacilitiesApi::V1::PPMS::Configuration` includes some Middleware to comment out request bodies in logs
       - `curl` will log the request its attempting to make to `STDOUT`
       - Rails `logger` logs the body of the response to `STDOUT`
       - To access rails logger, one needs to get ArgoCD access for dev (or other level). One needs terminal access to vets-api on that environment. Go to the [ArgoCD dash for the application](https://argocd.vfs.va.gov/applications/vets-api-dev?resource=name%3Avets-api-web) and go to a pod (only pods work for terminal access). Open the vets-api-web pod instance and click the terminal tab in that window.
    - The [TIC](https://github.com/department-of-veterans-affairs/devops/blob/master/docs%2Faws-dx-transit-spoke-architecture%2Farchitecture.md)

### PPMS How to get data that vets-api is sending to PPMS
PPMS Swagger - Allows you to get the raw data from PPMS but is limited because you can't alter requests except for the options that Swagger gives you.

Alternative 
- [Get access to ArgoCD vets-api rails console](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose)
- Adding logs with limitations to show only on dev to vets-api - get merged into dev
- [Go into ArgoCD](https://argocd.vfs.va.gov/applications/vets-api-dev?resource=name%3Avets-api-web)
- Go into pod and into the terminal access
- Go into rails console and look at logs to compare what was being sent
  
If you make changes to vets-api models, write down what you're changing and what you need from the data so that you can repeat steps and recover changes.

## PPMS vets-api testing

Instructions for how to connect to PPMS for local API development: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facilities-api/how-to-connect-vets-api-to-PPMS-for-local-development.md

#### Testing vets-api queries to external APIs

The old way used the Ruby gem VCR tapes to record an HTTP request to an external API. This is still necessary, because Platform requires any new endpoint to have rspec tests and corresponding capture of VCR tapes. Generally, you can run `make rspec` locally to capture any new testing "cassettes" before making a PR to vets-api.

### Requests to PPMS are Failing
PPMS Requests are failing, You might notice then when monitoring Datadog. These can be difficult to troubleshoot. You need to recreate the request and run it from a dev/staging box. Remember to get the API keys from `ParameterStore`. You can use the `vcr.rb` script to make some requests to PPMS and the bodies should help point you to the problem.

#### PPMS is returning a stack trace
PPMS is having a major issue and `ppmsit@va.gov` needs to be notified ASAP.
Make sure that the breaker isn't causing an issue (this is the reason we ratelimit requests from a given IP address)

#### PPMS is returning an empty body
  There are three things that may be having an issue.
  - PPMS
    - Does it work from the commandline (`curl`)?
    - Does it work from PPMSs SWAGGER page on the VA network?
      - you can copy into CAG but not from it. 
  - The Reverse Proxy
    - Check the request metrics in Datadog, do they seem normal?
    - Have there been any changes to the proxy configs? https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy

#### PPMS requests are timing out
We have a really high timeout for a reason. But sometimes PPMS requests have taken over 2 minutes to return a response. When PPMS requests are timming out I recomend checking the Datadog Facilities dashboard. Is there a spike in response time? Do you have the same slow response if you make the request directly to PPMS without going through the reverse proxy? If you contact PPMS and they insist that the responses are fast on their end you may have an issue with the TIC. This has happened several times in the last two years and we haven't been able to get a consitant failure case to trouble shoot the problem.

## Provider Core Training
PPMS provides trainings to providers. 
"Department of Veterans Affairs (VA) has created the Provider Core Training so that Veterans can be offered care from the highest quality providers available. Referring Veterans to Providers who have completed the Provider Core Training ensures that Veterans are receiving high-quality care in the community."

When providers complete those trainings, their data in PPMS will return values that show completed trainings. In 2023, an effort was started to make it possible for Facility Locator users to filter providers by completed trainings. 

As of March 2025, the icon to indicate a trained provider is present in the FE, but not filters, because only 1-2% of providers have completed the relevant trainings. 

Epic = https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14225

#### Training data
Example endpoint: https://api.va.gov/facilities_api/v1/ccp/provider?specialties%5B%5D=101YP2500X&page=1&per_page=10&radius=26&address=268%20High%20Street,%20Morgantown,%20West%20Virginia%2026505,%20United%20States&bbox%5B%5D=-80.705944&bbox%5B%5D=38.879681&bbox%5B%5D=-79.205944&bbox%5B%5D=40.379681&latitude=39.629681&longitude=-79.955944

The following DWS endpoints allow downstream partners to pull Provider Training Information. The updates are currently deployed

`get /ProviderLocator`
`get /Providers`
`get /ProviderServices`

The following Provider Training information is provided in these endpoints:

Course Name
Course Code
Course Completion Date
Course Expiration Date

