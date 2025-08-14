## Resources for EZ Metrics
### DataDog
- [EZ and CG DD Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?from_ts=1689364959316&to_ts=1689368559316&live=true)
- [EZ APM Logs](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Ahealthcare-application%20-status%3Aok%20&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&historicalData=true&messageDisplay=inline&query_translation_version=v0&sort=desc&spanType=service-entry&traceQuery=&view=spans&start=1712612790528&end=1713822390528&paused=false)
- [EZ Create APM logs](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20resource_name%3A%22V0%3A%3AHealthCareApplicationsController%23create%22%20-status%3Aok%20&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&historicalData=true&messageDisplay=inline&query_translation_version=v0&sort=desc&spanType=service-entry&traceQuery=&view=spans&start=1712704149934&end=1713913749934&paused=false)
- [EZ Facilities APM](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3A%2A%20env%3Aeks-prod%20service%3Ahealthcare-application%20status%3Aerror%20-resource_name%3A%28%22V0%3A%3AHealthCareApplicationsController%23rating_info%22%20OR%20%22V0%3A%3AHealthCareApplicationsController%23create%22%20OR%20%22V0%3A%3AHealthCareApplicationsController%23enrollment_status%22%29&agg_m=count&agg_m_source=base&agg_t=count&cols=service%2Cresource_name%2C%40duration%2C%40http.method%2C%40http.status_code%2C%40_span.count%2C%40_duration.by_service&fromUser=true&graphType=service_map&historicalData=true&query_translation_version=v0&saved-view-id=1577&shouldShowLegend=true&spanType=service-entry&spanViewType=logs&storage=hot&view=spans&viz=stream&start=1727755200000&end=1733927602377&paused=true)
- [EZ APM Traces](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20-status%3Aok%20resource_name%3A%22HCA%3A%3ASubmissionJob%22%20&cols=service%2Cresource_name%2C%40duration%2C%40http.method%2C%40http.status_code%2C%40_span.count%2C%40_duration.by_service&fromUser=false&historicalData=true&query_translation_version=v0&saved-view-id=1736&spanType=service-entry&traceQuery=&view=spans&viz=stream&start=1710341392542&end=1710427792542&paused=false)
- [EZ PDF Download](https://vagov.ddog-gov.com/apm/resource/healthcare-application/rack.request/fed2018843dbdd46?query=env%3Aeks-prod%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AHealthCareApplicationsController%23download_pdf%22%20service%3Ahealthcare-application&env=eks-prod&fromUser=false&start=1746528453520&end=1746542853520&paused=false)
- [EZ-CG Schema Validation logs](https://vagov.ddog-gov.com/logs?query=env%3A%22eks-prod%22%20service%3Avets-api%20%40message_content%3A%2A%22Form%20validation%20in%22%2A&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1737664958446&to_ts=1738269758446&live=true)
- [EZ-EZR Payload with Attachment logs](https://vagov.ddog-gov.com/logs?query=env%3A%22eks-prod%22%20service%3Avets-api%20%40message_content%3A%2A%22Payload%20for%20submitted%22%2A&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1739466620077&to_ts=1739481020077&live=true)
- [EZ-CG-EZR ZSF dashboard](https://vagov.ddog-gov.com/dashboard/w4w-uc4-u6u/10-10-health-apps-zsf?fromUser=false&refresh_mode=sliding&from_ts=1754579024625&to_ts=1754665424625&live=true)

### Google Analytics (GA4)
- [EZ Start form](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/dwxhetVwQr2pSXRr341_Ow)
- [EZ Events](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/7yD42qmORqO0iVldCEuWdQ)
- [GA4 Explorations](https://analytics.google.com/analytics/web/#/analysis/p419143770) (filter by owner Heather Justice)

### DOMO
- [Forms KPI dashboard](https://va-gov.domo.com/page/447193050)
- [Medallia dashboard](https://va-gov.domo.com/page/1030131175)
- [VA Notify KPI dashboard](https://va-gov.domo.com/page/2040841289?userId=228456075)
- [CSAT Score dashboard](https://va-gov.domo.com/page/1545882322)
- [VA.gov Performance dashboard](https://www.va.gov/performance-dashboard/)
