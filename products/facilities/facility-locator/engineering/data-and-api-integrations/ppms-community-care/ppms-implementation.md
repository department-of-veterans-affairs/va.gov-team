# Provider Profile Management System (PPMS) / Community Care implementation details
_last updated: 2023-12-28_

VA Community Care, https://www.va.gov/COMMUNITYCARE/: VA provides care to Veterans through community providers when VA cannot provide the care needed. Community care is based on specific eligibility requirements, availability of VA care, and the needs and circumstances of individual Veterans

Community Care may also be referred to as Choice Act, MISSION Act, or veterans choice.

Facility Locator integrates with Community Care data, to display Community Care providers in provider search results. 

**Provider data elements for Facility Locator**
- Providers in Community Care need three data elements: 
  - provider (who)
  - their specialty (what)
  - care site (where) to be available to the Facility Locator
* PPMS/Community Care data is returned as JSON with the `ProviderSerializer`.

**TODO**: Validate all the data below as being modern / relevant


## Owners / Support
PPMS team own the PPMS data / endpoints. 

PPMS hosts PPMS Integration Office Hours:
* Weekly on Tuesdays
* 1pm ET
* [MS Teams call link](https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODA4M2RkOTItM2E4OS00MzY4LWFhZjctYjM1MTdhYTQ5NjI1%40thread.v2/0?context=%7b%22Tid%22%3a%22e95f1b23-abaf-45ee-821d-b7ab251ab3bf%22%2c%22Oid%22%3a%220af18ed8-f144-4baf-ae78-4bb0789af688%22%7d)


## Provider Core Training
PPMS provides trainings to providers. 
"Department of Veterans Affairs (VA) has created the Provider Core Training so that Veterans can be offered care from the highest quality providers available. Referring Veterans to Providers who have completed the Provider Core Training ensures that Veterans are receiving high-quality care in the community."

When providers complete those trainings, their data in PPMS will return values that show completed trainings. In 2023, an effort was started to make it possible for Facility Locator users to filter providers by completed trainings. 

As of Jan 2024, we have designs and planned research, and have integrated the API for  training data into vets-api endpoints. Training data is not exposed to the FE yet, because only 1-2% of providers have completed the relevant trainings. 

Epic = https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14225


## PPMS Provider Locator Sequence, optimized v1 query
![PPMS Provider Locator Sequence, optimized v1 query](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/v1%20ppms%20provider%20locator%20sequence.png)


## Development for PPMS
Requires vets-api console access. File a ticket to request, e.g. https://github.com/department-of-veterans-affairs/va.gov-team/issues/59791


## PPMS Endpoints
The PPMS endpoints are available only on the VA network or through CAG. They are as follows:

### DEV
- https://dws-dev-ppms.devtest.vaec.va.gov/swagger/ui/index
- Swagger

### NPROD
https://nprod-apim.developer.ppms.va.gov/
-  Microsoft Azure API Management - developer portal (va.gov), subscription key required

### PROD EAST
https://api-east.apim.developer.ppms.va.gov/
-  Microsoft Azure API Management - developer portal (va.gov), subscription key required

### PROD SOUTH
https://api-south.apim.developer.ppms.va.gov/
-  Microsoft Azure API Management - developer portal (va.gov), subscription key required

## Key Management
Subscription keys for endpoints called by the Facility Locator are in the AWS Systems Manager (SSM) Parameter Store.

Please contact a member of the [@cms-devops-engineers](https://app.slack.com/client/T03FECE8V/CT4GZBM8F/user_groups/S01JXBLLMJL) group in the DSVA Slack to add, modify, or to get information about a Parameter Store secret.

### Training data
Example endpoint: https://api.va.gov/facilities_api/v1/ccp/provider?specialties%5B%5D=101YP2500X&page=1&per_page=10&radius=26&address=268%20High%20Street,%20Morgantown,%20West%20Virginia%2026505,%20United%20States&bbox%5B%5D=-80.705944&bbox%5B%5D=38.879681&bbox%5B%5D=-79.205944&bbox%5B%5D=40.379681&latitude=39.629681&longitude=-79.955944

The following DWS endpoints allow downstream partners to pull Provider Training Information. The updates are currently deployed to INT (NPROD)

`get /ProviderLocator`
`get /Providers`
`get /ProviderServices`

The following Provider Training information is provided in these endpoints:

Course Name
Course Code
Course Completion Date
Course Expiration Date




## PPMS troubleshooting
   These are the tools to diagnose problems
   - Access to the VA network (GFE or Citrix)
     - You can only access PPMS API docs from the VA Network
   - Access to AWS
     - We store the API keys in the ParamStore
     - PPMS APIs can be accessed from the vets-api vms hosted by amazon
   - Monitoring tools
     - [Graphana](http://grafana.vfs.va.gov/d/000000048/facility-locator-ppms?orgId=1)
     - [Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/?query=is%3Aunresolved+FacilitiesApi&statsPeriod=14d)
   - Helpful Scripts:
     - `vcr.rb` a single file bundler enabled app to generate vcr tapes outside `vets-api`
     - `request-to-curl` this is what I use to generate the `curl` command from any given url
   - Useful things to know about `vets-api`
     - `FacilitiesApi::V1::PPMS::Configuration` includes some commented out Middleware
       - `curl` will log the request its attempting to make to `STDOUT`
       - `logger` logs the body of the response to `STDOUT`
    - The [TIC](https://github.com/department-of-veterans-affairs/devops/blob/master/docs%2Faws-dx-transit-spoke-architecture%2Farchitecture.md)

### PPMS How to get data that vets-api is sending to PPMS
PPMS Swagger - Allows you to get the raw data from PPMS but is limited because you can't alter requests except for the options that Swagger gives you.
Alternative 
- Adding logs to vets-api - got merged into staging or production
- then go into ARGO (open issue and request permission)
- Go into production pod
- Then Got into rails console and looked at logs to compare what was being
Max suggested if you make changes to vets-api models write down what you're changing and what you need from the data so that you can repeat steps and recover changes.

### PPMS is making a change to their API (when??)
TODO: 2023-12-28: IS the below still real?  VCR TAPES??

#### How to update the VCR tapes
  SSH into a staging box, make note of the internal IP Address. As a non root user run the `vcr.rb` script with the `-R` record flag. It will create the vcr tapes and copy them into the `/tmp` directory of the staging box.

  After the script has finished running run the same script with the `-D` download flag, it takes the IP Address as an argument. The script will then download the the vcr tapes into the current directory with the following naming convention: `#{datestamp}-#{offset}-ppms.yml` I found that keeping the tapes so you can compare the results was helpfull when trying to track down a change.

  Once you have the vcr tape downloaded to you machine copy it into the `vets-api` repo and replace the current script. You can then run the `rspec` test suite and fix any issues due to the data changes.
  

### Requests to PPMS are Failing
  PPMS Requests are failing, You might notice then when monitoring Grafana, Sentry, or Datadog. These can be difficult to troubleshoot. You need to recreate the request and run it from a staging box. Remember to get the API keys from `ParamStore`. You can use the `vcr.rb` script to make some requests to PPMS and the bodies should help point you to the problem.

#### PPMS is returning a stack trace
  PPMS is having a major issue and `ppmsit@va.gov` needs to be notified ASAP.
  Make sure that the breaker isn't causing an issue (this is the reason we ratelimit requests from a given IP address)

#### PPMS is returning an empty body
  There are three things that may be having an issue.
  - PPMS
    - Does it work from the commandline (`curl`)?
    - Does it work from PPMSs SWAGGER page on the VA network?
      - you can't copy and paste into `citrix`
  - The Reverse Proxy
    - Check the request metrics in Grafana, do they seem normal?
    - Have there been any changes to the `ha-proxy` configs?

#### PPMS requests are timing out
  We have a really high timeout for a reason. But sometimes PPMS requests have taken over 2 minutes to return a response. When PPMS requests are timming out I recomend checking the Grafana Facilities dashboard. Is there a spike in response time? Do you have the same slow response if you make the request directly to PPMS without going through the reverse proxy? If you contact PPMS and they insist that the responses are fast on their end you may have an issue with the TIC. This has happened several times in the last two years and we haven't been able to get a consitant failure case to trouble shoot the problem.


