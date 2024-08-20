# Debt Team Datadog Documentation

## Table of Contents

1. [Setup](#setup)
2. [Links](#links)
3. [Implementation](#implementation)
4. [Monitors](#monitors)
5. [Queries](#queries)
6. [Dashboards](#dashboards)

## Links

- [Debt Team Dashboard](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1723950680292&to_ts=1724123480292&live=true)
- [Debt Controller Errors (index)](https://vagov.ddog-gov.com/apm/traces?query=env%3Aeks-prod%20resource_name%3A%22V0%3A%3ADebtsController%23index%22%20%40http.status_code%3A5%2A%20operation_name%3Arack.request&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&historicalData=true&messageDisplay=inline&query_translation_version=v0&sort=desc&spanType=all&traceQuery=&view=spans&start=1724037171643&end=1724123571643&paused=false)
- [Copay Controller Errors(index)](https://vagov.ddog-gov.com/apm/traces?query=env%3Aeks-prod%20resource_name%3A%22V0%3A%3AMedicalCopaysController%23index%22%20-%40http.status_code%3A20%2A%20-%40http.status_code%3A403%20operation_name%3Arack.request&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=true&historicalData=true&messageDisplay=inline&query_translation_version=v0&sort=desc&spanType=all&traceQuery=&view=spans&start=1723950842090&end=1724123642090&paused=false)
- [Debt Controller Overview(index)](https://vagov.ddog-gov.com/apm/resource/vets-api/rails.action_controller/9daef478fc36cacc?query=env%3Aeks-prod%20operation_name%3Arails.action_controller%20resource_name%3A%22V0%3A%3AFormsController%23index%22%20service%3Avets-api&fromUser=true&resourceName=V0%3A%3ADebtsController%23index&summary=qson%3A%28data%3A%28visible%3A%21t%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21t%29%2Csublayer%3A%28slot%3A%28layers%3Aservice%29%2Cselected%3Apercentage%29%2ClagMetrics%3A%28selectedMetric%3A%21s%2CselectedGroupBy%3A%21s%29%29%2Cversion%3A%211%29&timeFrame%5Bend%5D=1720556942696&timeFrame%5BfromUser%5D=true&timeFrame%5Bpaused%5D=false&timeFrame%5Bstart%5D=1720470542696&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1723950872667&end=1724123672667&paused=false)
- [Copay Controller Overview (index)](https://vagov.ddog-gov.com/apm/resource/vets-api/rails.action_controller/d6273deb1520dc31?query=env%3Aeks-prod%20operation_name%3Arails.action_controller%20resource_name%3A%22V0%3A%3ADebtsController%23index%22%20service%3Avets-api&fromUser=true&graphType=flamegraph&resourceName=V0%3A%3AMedicalCopaysController%23index&shouldShowLegend=true&sort=time&spanViewType=errors&summary=qson%3A%28data%3A%28visible%3A%21t%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21t%29%2Csublayer%3A%28slot%3A%28layers%3Aservice%29%2Cselected%3Apercentage%29%2ClagMetrics%3A%28selectedMetric%3A%21s%2CselectedGroupBy%3A%21s%29%29%2Cversion%3A%211%29&timeFrame%5Bend%5D=1723045111391&timeFrame%5Bpaused%5D=false&timeFrame%5Bstart%5D=1723041511391&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&view=spans&start=1723950928301&end=1724123728301&paused=false)
- [Debt Team Monitors](https://vagov.ddog-gov.com/monitors/manage?q=team%3Avfs-debt&order=desc)

The controller examples above can be easily changed to investigate other controller actions by changing the query.

## Setup
You will need to have a PIV card to access Datadog. When you first gain access, you will likely have read-only access. You can request write access in the #vfs-platform-support channel in the Octo Slack.

## Implementation

When you want to send a metric to Datadog, you use something like this:

```ruby
StatsD.increment('example.something.good.happened')
```

For the actual vets-api implementation, we often use constants to aid in consistency. Here is an example:
```ruby

module Example
  class Something
    STATSD_PREFIX = 'example.something'

    def something_request
      response = HTTParty.get('http://example.com')
      if response.success?
        StatsD.increment("#{STATSD_PREFIX}.good.happened")
        user = User.find(response['user_id'])
        user.update!(status: response['status'])
      else
        StatsD.increment("#{STATSD_PREFIX}.bad.happened")
      end
    rescue StandardError => e
      StatsD.increment("#{STATSD_PREFIX}.error.happened")
      raise e
    end
  end
end
```
We use this 'dot notation' to namespace metrics, it represents a hierarchy. When you want to leverage these metrics in
Datadog, they will not have dot notation, they get normalized by Datadog with underscores. Here is an example of how our metric would look in Datadog:

`example_something_good_happened`

## Monitors
Datadog monitors generate 'alerts' and are configured using the metrics like the one we made above. [Here is a link to all of the Debt team monitors](https://vagov.ddog-gov.com/monitors/manage?q=team%3Avfs-debt&order=desc).

### Alerts
We use these monitors to alert us when something bad or interesting happens, usually bad. Datadog supports many ways to send alerts but we almost exclusively pay attention to the #debt-alerts channel in Slack. Our alerts go to our VA emails too. We have a slack channel called #debt-alerts that is used for all alerts related to the debt team. 

[Here is a link to a monitor for the DebtsController#index controller/action](https://vagov.ddog-gov.com/monitors/170467?view=spans) a particularly noisy monitor at the time of this writing, note the query.
```
sum(last_6h):default_zero(sum:trace.rack.request.hits{env:eks-prod , resource_name:v0::debtscontroller_index, http.status_code:5*}.as_count()) / sum:trace.rack.request.hits{env:eks-prod , resource_name:v0::debtscontroller_index}.as_count() > 0.5
```
This monitor is looking at the last 6 hours of data and if the percentage of 5xx errors is greater than 50% it will alert us.

## Queries
Queries are used across Datadog for investigating errors, creating monitors, and creating dashboards. Datadog calls this query syntax 'DQL' (DataDog Query Language). It can be frustrating building DQL queries at first, it's helpful to start with the queries in our existing dashboards, error link examples above, and monitors.

[Take this link](https://vagov.ddog-gov.com/apm/traces?query=env%3Aeks-prod%20resource_name%3A%22V0%3A%3AMedicalCopaysController%23index%22%20-%40http.status_code%3A20%2A%20-%40http.status_code%3A403%20operation_name%3Arack.request&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&historicalData=true&messageDisplay=inline&query_translation_version=v0&sort=desc&spanType=all&traceQuery=&view=spans&start=1723954223280&end=1724127023280&paused=false) to the MedicalCopayController#index for example. We could change the `#index` suffix in the `"V0::MedicalCopaysController#index"` query parameter to something like the `#get_pdf_statement_by_id` action to get info on that action.

## Dashboards
Dashboards have 'groups' and 'widgets'. Together, groups and widgets give us a visual representation of our metrics. We have a [Debt Team Dashboard](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1723950680292&to_ts=1724123480292&live=true) that we use to monitor the health of our services. We can add graphs, tables, and other widgets to our dashboards to help us understand what is happening with our code. You are free to create Dashboards for whatever you find helpful.

Dashboards have groups that are used to organize/group widgets.

Widgets are built with queries and formulas. [Here is a good example of a widget](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f?fromUser=false&fullscreen_end_ts=1724127596574&fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_section=edit&fullscreen_start_ts=1723954796574&fullscreen_widget=1567811530194862&refresh_mode=sliding&view=spans&from_ts=1723954422579&to_ts=1724127222579&live=true) that shows us the percentage of cached responses returned.

### Tips
* Almost all of our widgets are "Query Value" widgets.
* When building a widget that returns a count, set a default of 0. Otherwise, the widget will say "No data" and it may look like the widget is broken. [Here is an example](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f?fromUser=false&fullscreen_end_ts=1724127759464&fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_section=edit&fullscreen_start_ts=1723954959464&fullscreen_widget=3158253356771478&refresh_mode=sliding&view=spans&from_ts=1723954422579&to_ts=1724127222579&live=true)
