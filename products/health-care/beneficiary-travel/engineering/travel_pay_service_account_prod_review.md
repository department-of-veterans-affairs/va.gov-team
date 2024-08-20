## Architecture showing up/down stream dependencies

### Travel Pay High-Level Architecture
![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/container_vagov_travel_pay.png)

### Travel Pay STS Sequence Diagram
```mermaid
sequenceDiagram
autonumber
  actor v as Veteran
  box VA.gov
    participant vweb as vets-website
    participant vapi as vets-api
  end
  participant sis as Sign-In Service
  participant uauth as <User Authentication>
  participant tpapi as Travel Pay API


  v->>vweb: Login
  activate vweb
    vweb->>vapi: Kick off auth
    activate vapi
    vapi->>uauth: authenticate via Identity Provider (IdP)

    activate uauth
      uauth-->>vapi: access token
    deactivate uauth
    vapi-->>vweb: Redirect to dashboard
    deactivate vapi
    vweb-->>v: Veteran dashboard
    deactivate vweb

    v->>vweb: Travel Pay
    activate vweb
    vweb->>vapi: /travel-pay

    activate vapi
    vapi->>+sis: STS {endpoint: '/token'}
    sis->>-vapi: sts_access_token with ICN

    vapi->>tpapi: {endpoint: '/token', sts_access_token}
    activate tpapi
      tpapi->>tpapi: validate sts_access_token
      tpapi-->>vapi: travel_pay_api_token
    deactivate tpapi

    vapi->>tpapi: {endpoint: '/claims', travel_pay_api_token}

    activate tpapi
      tpapi->>tpapi: validate token

      tpapi-->>vapi: [ClaimsModel*]
    deactivate tpapi
    
    vapi-->>vweb: [TranslatedClaimsModel*]
    deactivate vapi

    vweb->>v: Travel Pay Status Page
  deactivate vweb
```

## Use Case(s)
1. A Veteran signs into VA.gov using ID.me or Login.gov. They navigate to the Travel Claims status page on VA.gov, where they are shown a list of claims in various statuses so that they can take action on those claims outside of VA.gov.

## Datadog logs
* [Travel Pay datadog logs](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20%40http.url_details.path%3A%2Ftravel_pay%2F%2A%20%40named_tags.dd.env%3Aeks-staging%20&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&sort=time&storage=hot&stream_sort=desc&viz=stream&from_ts=1723576930102&to_ts=1723577830102&live=true)
* [STS logs](https://vagov.ddog-gov.com/dashboard/i72-yy8-i97/identity-sts-performance?fromUser=false&refresh_mode=sliding&tpl_var_payload.service_account_id%5B0%5D=a162aaef5fb869aa4ea5a227728a753f&view=spans&from_ts=1722973012906&to_ts=1723577812906&live=true)

## Integration testing
demo
