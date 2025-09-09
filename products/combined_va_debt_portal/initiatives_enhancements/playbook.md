# One Thing Per Page Playbook

NOTE: 
- links to complete data for each of the sections below is welcome and encouraged.
- This document serves the requirement of an incident response procedure for your product. This document should be iterated upon as changes are made to the product.

## Product Description
The Combined Debt Portal previously presented multiple layers of information on single pages, creating confusion and cognitive overload for veterans. The One Thing Per Page (OTPP) update restructures the experience so each page focuses on a single task or piece of information. This mirrors the Financial Status Report’s one-question-per-page design, reducing cognitive load, improving navigation, and making the process clearer and more manageable for veterans.

## Routes to code
links here
issue tickets (if they add value when describing known errors for your product)

## Contacts

### Team Members:
- DSVA Product Lead: Denise Coveyduc, denise.coveyduc@va.gov
- Team Product Manager:Tom Davis, thomas.davis@govcio.com
- _Additional Team Role_: _person’s name_ _persons's email_

### Outage Contacts:
- Backend: derek.dyer@govecio.com
- Frontend: brandyn.sullins@govcio.com
- pagerduty email/activation call (if available)

## Troubleshooting

### Errors and Metrics
# Endpoint Monitoring Playbook

## Datadog links
* Endpoint logging: 
  * [Debts endpoint](https://vagov.ddog-gov.com/apm/traces?query=env%3Aeks-prod%20resource_name%3A%22V0%3A%3ADebtsController%23index%22%20%40http.status_code%3A5%2A%20operation_name%3Arack.request&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&historicalData=true&messageDisplay=inline&query_translation_version=v0&sort=desc&spanType=all&storage=hot&traceQuery=&view=spans&start=1744540621291&end=1744544221291&paused=false&live)
  * [Copays endpoint](https://vagov.ddog-gov.com/apm/traces?query=env%3Aeks-prod%20resource_name%3A%22V0%3A%3AMedicalCopaysController%23index%22%20-%40http.status_code%3A20%2A%20-%40http.status_code%3A403%20operation_name%3Arack.request&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&historicalData=true&messageDisplay=inline&query_translation_version=v0&sort=desc&spanType=all&storage=hot&traceQuery=&view=spans&start=1715094120000&end=1715094180000&paused=false&live)
  * [Combine PDF endpoint](https://vagov.ddog-gov.com/apm/traces?query=env%3Aeks-prod%20resource_name%3A%22DebtsApi%3A%3AV0%3A%3AOneDebtLettersController%23combine_pdf%22%20-%40http.status_code%3A20%2A&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&graphType=span_list&historicalData=true&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=desc&spanType=all&spanViewType=errors&storage=hot&traceQuery=&view=spans&start=1743335165821&end=1744544765821&paused=false&live)

* Endpoint Monitoring:
  * [Debts endpoint](https://vagov.ddog-gov.com/monitors/170467)
  * [Copays endpoint](https://vagov.ddog-gov.com/monitors/170469)
  * [Combine PDF endpoint](https://vagov.ddog-gov.com/monitors/349719)

### Issue investigation steps
- Follow the standard flow to view debts in combined debt portal, there is no new logic, only a reordering of pages.

### Flipper Features and Rollback
- Is there a flipper feature? If yes, describe here and explain when to modify the flipper and to what exactly.
- At what point, if applicable, should your code be rolled back, to what state? (optional)

## Security
descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log senstive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc.
