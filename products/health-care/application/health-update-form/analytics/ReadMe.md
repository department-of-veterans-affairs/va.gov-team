## Resources for 10-10EZR Metrics
### DataDog
- [EZR Dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?refresh_mode=sliding&from_ts=1698757876568&to_ts=1698761476568&live=true)
- [EZR Job APM](https://vagov.ddog-gov.com/apm/traces?query=env%3Aeks-prod%20operation_name%3Asidekiq.job%20service%3Avets-api-sidekiq%20resource_name%3A%22HCA%3A%3AEzrSubmissionJob%22%20&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&graphType=flamegraph&historicalData=true&messageDisplay=inline&query_translation_version=v0&refresh_mode=sliding&shouldShowLegend=true&sort=time&spanType=all&spanViewType=errors&view=spans&start=1723576924341&end=1723580524341&paused=false)
- [EZR APM Traces](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Ahealth-information-update%20-status%3Aok&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&graphType=flamegraph&historicalData=true&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanType=service-entry&traceQuery=&view=spans&start=1720126160146&end=1721335760146&paused=false)
- [EZR Create APM](https://vagov.ddog-gov.com/apm/resource/health-information-update/rack.request/b3dd8934d6edf9d3?query=env%3Aeks-prod%20operation_name%3Arack.request%20service%3Ahealth-information-update&env=eks-prod&graphType=flamegraph&shouldShowLegend=true&sort=time&spanViewType=metadata&topGraphs=latency%3Alatency%2Chits%3Acount%2Cerrors%3Acount%2CbreakdownAs%3Apercentage&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&view=spans&start=1703116031187&end=1703139202364&paused=true)
- [EZ-EZR Payload with Attachment logs](https://vagov.ddog-gov.com/logs?query=env%3A%22eks-prod%22%20service%3Avets-api%20%40message_content%3A%2A%22Payload%20for%20submitted%22%2A&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1739466620077&to_ts=1739481020077&live=true)
- [EZ-CG-EZR ZSF dashboard](https://vagov.ddog-gov.com/dashboard/w4w-uc4-u6u/10-10-health-apps-zsf?fromUser=false&refresh_mode=sliding&from_ts=1754579024625&to_ts=1754665424625&live=true)

### Google Analytics (GA4)
- [EZR Events](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/B1BuF9JgTgCgLV3cx4EB4Q)
- [EZR Start form](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/ejYeYXxMRViT5UJzSEafaQ)
- [GA4 Explorations](https://analytics.google.com/analytics/web/#/analysis/p419143770) (filter by owner Heather Justice)

### DOMO
- [Forms KPI dashboard](https://va-gov.domo.com/page/447193050)
- [Medallia dashboard](https://va-gov.domo.com/page/1030131175)
- [VA Notify KPI dashboard](https://va-gov.domo.com/page/2040841289?userId=228456075)
- [CSAT Score dashboard](https://va-gov.domo.com/page/1545882322)
- [VA.gov Performance dashboard](https://www.va.gov/performance-dashboard/)
