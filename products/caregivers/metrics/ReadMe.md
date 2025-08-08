## Resources for 10-10CG Metrics
### DataDog
- [EZ and CG DD Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?from_ts=1689364959316&to_ts=1689368559316&live=true)
- [CG APM Traces](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Acaregiver-application%20-status%3Aok&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&historicalData=true&messageDisplay=inline&query_translation_version=v0&sort=desc&spanType=service-entry&traceQuery=&view=spans&start=1711464472416&end=1712674072416&paused=false)
- [CG Submission APM](https://vagov.ddog-gov.com/apm/traces?query=env%3Aeks-prod%20-status%3Aok%20resource_name%3A%22Form1010cg%3A%3ASubmissionJob%22%20&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=true&graphType=flamegraph&historicalData=true&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanType=all&spanViewType=errors&storage=hot&view=spans&start=1725281423104&end=1725886223104&paused=false)
- [CG Service APM](https://vagov.ddog-gov.com/apm/entity/service%3Acaregiver-application?dependencyMap=qson%3A%28data%3A%28telemetrySelection%3Aall_sources%29%2Cversion%3A%210%29&deployments=qson%3A%28data%3A%28hits%3A%28selected%3Aversion_count%29%2Cerrors%3A%28selected%3Aversion_count%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%210%29&env=eks-prod&errors=qson%3A%28data%3A%28issueSort%3AFIRST_SEEN%29%2Cversion%3A%210%29&fromUser=false&groupMapByOperation=null&infrastructure=qson%3A%28data%3A%28viewType%3Apods%29%2Cversion%3A%210%29&logs=qson%3A%28data%3A%28indexes%3A%5B%5D%29%2Cversion%3A%210%29&operationName=rack.request&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&start=1737730328255&end=1737744728255&paused=false)
- [EZ-CG Schema Validation logs](https://vagov.ddog-gov.com/logs?query=env%3A%22eks-prod%22%20service%3Avets-api%20%40message_content%3A%2A%22Form%20validation%20in%22%2A&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1737664958446&to_ts=1738269758446&live=true)
- [EZ-CG-EZR ZSF dashboard](https://vagov.ddog-gov.com/dashboard/w4w-uc4-u6u/10-10-health-apps-zsf?fromUser=false&refresh_mode=sliding&from_ts=1754579024625&to_ts=1754665424625&live=true)

### Google Analytics (GA4)
- [CG Events](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/ffeHfxucSzypFvNDaGArbw)
- [GA4 Explorations](https://analytics.google.com/analytics/web/#/analysis/p419143770) (filter by owner Heather Justice)

### DOMO
- [Forms KPI dashboard](https://va-gov.domo.com/page/447193050)
- [Medallia dashboard](https://va-gov.domo.com/page/1030131175)
- [VA Notify KPI dashboard](https://va-gov.domo.com/page/2040841289?userId=228456075)
- [CSAT Score dashboard](https://va-gov.domo.com/page/1545882322)
- [VA.gov Performance dashboard](https://www.va.gov/performance-dashboard/)
