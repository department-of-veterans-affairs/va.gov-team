# EVSS Datadog Monitoring - Investigation Summary

## Objective

Track request origins for the legacy `v0/evss_claims` endpoint to identify callers and support endpoint retirement scheduled for 01/28/26.

## Implementation Details

- Added `InboundRequestLogging` module to `V0::EVSSClaimsController`
- Implemented `before_action :log_request_origin` to log all incoming requests
- Feature flag: `log_claims_request_origin` (enabled globally in Flipper)
- Message type: evss.cst.inbound_request

## Key Findings

- `vets-api`: The EVSS controller is reachable in production via routes, and it is exercised by specs; any real usage in production comes only from external HTTP clients (web/mobile/etc.), not from internal Ruby code directly calling the controller.

- `vets-website`: Confirmed no production code calls `v0/evss_claims`. Cypress E2E test mocks/intercepts only. Zero production runtime code references found. No actual network calls to `/v0/evss_claims` in production code

- `va-mobile-app`: Confirmed no production code calls `v0/evss_claims`. `/v0/evss_claims` is not used anywhere in the mobile app codebase. Only reference found: JSON:API resource type string evss_claims in local test fixture

- Over a 24 hour period we had 652 recorded calls to `v0/evss_claims`. Of the 652 recorded calls there were 54 unique ip addresses.
- These are real users with legitimate web browsers, NOT mobile apps.
- All requests (100%) route through `x_forwarded_host: api.va.gov:443`.
- No variation in routing. All traffic goes through the API gateway.
- `referer_host` / referer headers are completely absent in all EVSS logs.
  - No EVSS requests show `www.va.gov` or any referer. The Lighthouse requests do show `www.va.gov`
  - This suggests a direct API call

## Mystery Remains - Still unknown HOW veterans are accessing this endpoint, but I have some theories.

Possible explanations for missing referer on EVSS endpoint: **(Can we reach out to veterans using this endpoint and ask how they found access to this URL?)**

- Bookmarked claim URLs (Veterans with bookmarked direct claim URLs checking their claim status throughout the day.)
- Old VA guides/emails with direct API URLs still in circulation
- Accessing through an unknown third-party benefits tracking tool... are there third-party tools that use this endpoint?
- Is it possible that some veterans may have direct API access?

## Outstanding Technical Debt

- vets-api: lots of EVSS removal needed after 01/28/26
- vets-website: 6 Cypress test mocks still reference `/v0/evss_claims`.
- va-mobile-app: 1 test fixture uses type: 'evss_claims' string

## Helpful DataDog Links

- [All inbound EVSS requests ordered by user_agent](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20env%3Aeks-prod%20%40payload.message_type%3Aevss.cst.inbound_request&agg_m=count&agg_m_source=base&agg_q=%40payload.user_agent&agg_q_source=base&agg_t=count&clustering_pattern_field_path=message&cols=%40name%2Chost%2Cservice&messageDisplay=inline&refresh_mode=sliding&sort_m=count&sort_m_source=base&sort_t=count&storage=hot&stream_sort=time%2Casc&top_n=10&top_o=top&viz=toplist&x_missing=true&from_ts=1767674205106&to_ts=1767760605106&live=true)
- [All unique inbound EVSS requests ordered by user_agent](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20env%3Aeks-prod%20%40payload.message_type%3Aevss.cst.inbound_request&agg_m=%40client_ip&agg_m_source=base&agg_q=%40payload.user_agent&agg_q_source=base&agg_t=cardinality&clustering_pattern_field_path=message&cols=%40name%2Chost%2Cservice&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=time%2Casc&top_n=10&top_o=top&viz=toplist&x_missing=true&from_ts=1767674356236&to_ts=1767760756236&live=true)
- [All inbound EVSS requests ordered by path](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20env%3Aeks-prod%20%40payload.message_type%3Aevss.cst.inbound_request&agg_m=count&agg_m_source=base&agg_q=%40payload.path&agg_q_source=base&agg_t=count&clustering_pattern_field_path=message&cols=%40name%2Chost%2Cservice&messageDisplay=inline&refresh_mode=sliding&sort_m=count&sort_m_source=base&sort_t=count&storage=hot&stream_sort=time%2Casc&top_n=10&top_o=top&viz=toplist&x_missing=true&from_ts=1767673070640&to_ts=1767759470640&live=true)
- [All inbound EVSS requests grouped by time of day](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20env%3Aeks-prod%20%40payload.message_type%3Aevss.cst.inbound_request&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=%40name%2Chost%2Cservice&messageDisplay=inline&refresh_mode=sliding&step=3600000&storage=hot&stream_sort=time%2Casc&viz=timeseries&from_ts=1767673070640&to_ts=1767759470640&live=true)
- [All inbound EVSS requests grouped by remote IP](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20env%3Aeks-prod%20%40payload.message_type%3Aevss.cst.inbound_request&agg_m=count&agg_m_source=base&agg_q=%40remote_ip.geoip.subdivision.iso_code&agg_q_source=base&agg_t=count&clustering_pattern_field_path=message&cols=%40name%2Chost%2Cservice&messageDisplay=inline&refresh_mode=sliding&sort_m=count&sort_m_source=base&sort_t=count&storage=hot&stream_sort=time%2Casc&top_n=10&top_o=top&viz=toplist&x_missing=true&from_ts=1767673070640&to_ts=1767759470640&live=true)
