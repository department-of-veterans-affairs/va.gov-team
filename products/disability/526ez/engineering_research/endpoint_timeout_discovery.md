# 526 endpoint timeout discovery

## Purpose

Document each endpoint that the 526 from interacts with along with it's timout threshold in two places:
- on the external API
- on our api

## Context

After the IFT failure<citation> it was requested by Steve Albers that we gather this information.  We will use it to
- align our timouts to prevent overloading existing services in the future
- inform upcomming dashboarding work

The original ask:

![Screenshot 2023-08-23 at 1 56 52 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/72a670aa-8a2b-498f-896d-350b59ce9e75)

## Resources
- [Ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/64199)
- [Slack thread asking EVSS and LH teams](https://dsva.slack.com/archives/C02CQP3RFFX/p1693249478108359)
- [Slack thread about kicking off this work](https://dsva.slack.com/archives/C04KW0B46N5/p1693237964443529)

## Research

### List of Endpoints
- EVSS:
    - /wss-pciu-services-web/rest/pciuServices/v1
    - /wss-intenttofile-services-web/rest/intenttofile/v1
    - /wss-ppiu-services-web/rest/ppiuServices/v1/paymentInformation
    - /wss-form526-services-web/rest/form526/v1/ratedDisabilities
    - /wss-form526-services-web-v2/rest/form526/v2
    - /wss-form526-services-web-v2/rest/form526/v2
    - /wss-document-services-web-#{Settings.evss.versions.documents}/rest/
    - /wss-document-services-web-#{Settings.evss.versions.documents}/rest/
    - /wss-form526-services-web-v2/rest/form526/v2

- LightHouse
    - /services/claims/v2/veterans
    - /services/veteran_verification/v2
    - /services/benefits-documents/v1/documents
    - /services/direct-deposit-management/v1/direct-deposit
    - /services/benefits-reference-data/v1/contention-types
    - /services/benefits-reference-data/v1/disabilities

- Central Mail
    - /VADocument

### WIP breakdown with verbs

```
- ITF
   - EVSS: 
      - URL
          "#{Settings.evss.url}/wss-intenttofile-services-web/rest/intenttofile/v1"
      - Paths
      (itf_type EG 'compensation')

      :get, "#{itf_type}/active"
      :post, "#{itf_type}"
      :get, ''
  LH: 
    URL
      "#{Settings.lighthouse.benefits_claims.host}/services/claims/v2/veterans"
    Paths
      :get "#{@icn}/intent-to-file/#{type}"
      :post "#{@icn}/intent-to-file"

PPIU
  EVSS:
    URL
      "#{Settings.evss.url}/wss-ppiu-services-web/rest/ppiuServices/v1/paymentInformation"
    Paths
      :get
      :post
  LH:
    not implemented?

PCIU
  EVSS: 
    URL
      "#{Settings.evss.url}/wss-pciu-services-web/rest/pciuServices/v1"

ratedsdisabilities
  EVSS:
    URL
      is this relevant?
      - "/wss-form526-services-web/rest/form526/v1/ratedDisabilities" ??

      #{Settings.evss.url}/wss-form526-services-web-v2/rest/form526/v2"
    Paths:
      :get, 'ratedDisabilities'
  LH:
    URL
      "#{Settings.lighthouse.veteran_verification.host}/services/veteran_verification/v2"
    Paths
      :get, 'disability_rating/#{@icn}'
      :get "#{endpoint}/#{icn}"

Submit
  EVSS: 
    URL
      "#{Settings.evss.url}/wss-form526-services-web-v2/rest/form526/v2"
    Paths
      :post, 'submit'
      :post, 'validate'
  LH: 
    Implemented????

Document Services
  evss: 
    URL
      "#{Settings.evss.url}/wss-document-services-web-#{Settings.evss.versions.documents}/rest/"
    PATHS:
      :get "documents/getClaimDocuments/#{claim_id}"
      :post 'queuedDocumentUploadService/ajaxUploadFile
  LH: 
    URL
      "#{Settings.lighthouse.benefits_documents.host}/services/benefits-documents/v1/documents"
    PATHS:
      ??

getPDF
  EVSS
    URL
      #{Settings.evss.url}/wss-form526-services-web-v2/rest/form526/v2"
    PATHS: 
      :post, 'getPDF'
  LH
    Implemented???

BRD
  Lighthouse service


submit form 4142
  central_mail:
    URL
      "https://#{Settings.central_mail.upload.host}/VADocument"
    PATHS
      :post, 'getStatus'
      :post, 'upload'
```


## Resource
