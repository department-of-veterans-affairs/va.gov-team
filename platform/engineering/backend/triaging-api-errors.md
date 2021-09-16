----
# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Triaging-API-errors.687931492.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Triaging API Errors

When triaging errors in vets-api there are several tools available. Sentry for error disovery/tracking, AWS CloudWatch logs for an event stream, and Prometheus for metrics.

## Sentry
Sentry is our primary source for API errors. There are Sentry 'projects' for each of our environments. 
`platform-api-development`, `platform-api-staging`, and `platform-api-production`. Selecting a project 
brings up a list of 'Unresolved Issues' sorted by 'Last Seen' date. Other sorting options are: 
'Priority', 'First Seen', and 'Frequency'. Priority being one of the most useful as it's a time decay 
algorithm that uses the total frequency to show both consistenly noisy and new issues. 

Once you've found a Sentry issue you're interested in you can click it to view the details. The [official 
Sentry docs](https://docs.sentry.io/) cover issue details but there are areas of interest in how we use each section:
  - *Tags*: The auto-generated Rails tags, in concert with our custom tags, provide extra issue details. 
`controller_name` and `transaction` let you know the source of an issue. `sign_in_method` marks 
if the user signed in via  id.me, DSlogon, or MHV. The `team` tag marks an issue as belonging to an app team.
  - *Message*: This section maps to the original exception's message. An identical message will appear 
in the AWS CloudWatch logs in the `message` field.

![Sentry Issue 01](images/triaging_errors_sentry_issue_01.png)

  - *User*: Provides the `authn_context` (authentication context), the user's LOA level, and their uuid.
  - *Additional Data*: Unless filtered the request `body` and extra `errors` details are here. `request_uuid` 
  is a valuable field for correlation with AWS CloudWatch logs.
  
![Sentry Issue 02](images/triaging_errors_sentry_issue_02.png)
  
## AWS CloudWatch logs
To save on database resources Sentry uses sampling. This means that all unique error events will be recorded 
in Sentry but it will skip some error events. AWS logs capture every instance of an error.

```json
{
  "host": "ip-xxx-xx-xx-xx",
  "application": "vets-api-server",
  "timestamp": "2019-04-25T16:17:38.670102Z",
  "level": "error",
  "level_index": 4,
  "pid": 3278,
  "thread": "puma 004",
  "file": "../vets-api/src/lib/sentry_logging.rb",
  "line": 54,
  "named_tags": {
    "request_id": "9e70c519-5a49-48f4-bc3d-2be4c69af6cf",
    "ref": "439c7b54201eb2213366f0fc387e4961d7fb8265"
  },
  "name": "Rails",
  "message": "BackendServiceException: {:source=>\"Vet360::Person::Service\", :code=>\"VET360_MVI202\"}",
  "payload": {
    "title": "MVI duplicate correlations",
    "detail": "The MVI Service returned duplicate correlations for the requested identifier.",
    "code": "VET360_MVI202",
    "session": "b1edbbfac22004ed69f97",
    "source": "Vet360::Person::Service",
    "status": "400",
    "backtrace": [
      "/srv/vets-api/src/lib/vet360/service.rb:79:in `raise_backend_exception'",
      "/srv/vets-api/src/lib/vet360/service.rb:40:in `handle_error'",
      "/srv/vets-api/src/lib/vet360/person/service.rb:31:in `rescue in init_vet360_id'",
      ...
    ]
  }
}
```

| field                      | detail                                                                                 |
|----------------------------|----------------------------------------------------------------------------------------|
| host                       | ip address of the host instance                                                        |
| application                | app name e.g. `vets-api-server` or `vets-api-worker`                                   |
| timestamp                  | timestamp in UTC                                                                       |
| level                      | error level e.g. `debug`, `info`, `warn`, `error`                                      |
| level_index                | error level index                                                                      |
| pid                        | linux process identification number                                                    |
| thread                     | puma server thread                                                                     |
| file                       | where the log took place, many will be in sentry_logging.rb as sentry call route there |
| line                       | line number where the log took place                                                   |
| named_tags.request_id      | the rack request id, called 'request_uuid' in sentry                                   |
| named_tags.ref             | the git SHA-1 hash                                                                     |
| name                       | framework name e.g. Rails or in the case of workers Sidekiq                            |
| message                    | the original exeception message                                                        |
| payload.title              | json:api spec title; a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem                                                                               |
| payload.detail             | json:api spec detail; a human-readable explanation specific to this occurrence of the problem                                                                                                                         |
| payload.code               | json:api spec code; an application-specific error code, expressed as a string value    |
| payload.session            | the user session, can be used to trace a user's flow through the app                   |
| payload.source             | json:api spec source; an object containing references to the source of the error       |
| payload.status             | json:api spec status; an object containing references to the source of the error       |
| payload.backtrace          | ruby backtrace of the error                                                            |

You can access AWS logs via the [AWS web console](https://aws.amazon.com/console/). But it's often more efficient to query logs via the command line. 
The AWS CLI is one option, a higher level CLI is awslogs.

### awslogs
All CLI interactions with AWS, including awslogs, needs an active MFA session. Instructions for which are in the 
[devops credentials docs](https://github.com/department-of-veterans-affairs/devops#credentials). Once you're setup you can create a new MFA session by entering the following in a new terminal:

```bash
$ mfa 060350
AWS Session credentials saved. Will expire in 12 hours
```

You can now run awslogs commands, there are two log groups we're interested in; 'server' and 'worker' which are `dsva-vetsgov-prod/srv/vets-api/src/log/vets-api-server.log` and `dsva-vetsgov-prod/srv/vets-api/src/log/vets-api-worker.log` respectively.
e.g. to get all server errors in production over the last minute (`-s 1m`) run:

```bash
awslogs get dsva-vetsgov-prod/srv/vets-api/src/log/vets-api-server.log ALL -s 1m -S -G 
```

and to get all worker logs over the same period:

```bash
awslogs get dsva-vetsgov-prod/srv/vets-api/src/log/vets-api-server.log ALL -s 1m -S -G
```

In the examples aboce the `-G` and `-S` options remove the group and stream names.

### Filter and Pattern Syntax
We're usually looking for a specific error or a pattern of errors. AWS CloudWatch provides a [filter and pattern syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html) which works with the structured JSON log format we use. The `$` references the root JSON object after which you can lookup field values via dot notation. Below we filter all production server logs over the last minute for errors:

```bash
awslogs get dsva-vetsgov-prod/srv/vets-api/src/log/vets-api-server.log ALL --filter-pattern='{ $.level = "error" }' -s 1m -S -G
```

In production timespans as short as a minute can still return hundreds of errors. We can furthur filter errors by including a controller. Using the controller from the Sentry example above and searching over 2 hours:

```bash
awslogs get dsva-vetsgov-prod/srv/vets-api/src/log/vets-api-server.log ALL --filter-pattern='{ $.level = "error" && $.payload.controller = "V0::AddressesController" }' -s 2h -G -S
```

To correlate Sentry errors to those in AWS logs match the Sentry `request_uuid` to the AWS `named_tags.request_id`. Using the request id in a filter pattern will return all log lines that include it:

```bash
awslogs get dsva-vetsgov-prod/srv/vets-api/src/log/vets-api-server.log ALL --filter-pattern='{ $.named_tags.request_id = "9e70c519-5a49-48f4-bc3d-2be4c69af6cf" }' -G -S -s 2h
```

The above examples deal with specific error log lines or group of lines making up a request. A user session is made up of multiple requests. To trace how a user ended up in a bad state or analyze a happy path through the app you can query by session id:

```bash
awslogs get dsva-vetsgov-prod/srv/vets-api/src/log/vets-api-server.log ALL --filter-pattern='{ $.named_tags.session = "b1edbbfac22004ed69f97" }' -s 4h -G -S
```

The volume of production logs require drilling down to the session or request level. On lower volume environments we can run live debugging sessions by 'tailing' the logs. This is done via awslogs by appending the `--watch` command:

```bash
awslogs get dsva-vetsgov-staging/srv/vets-api/src/log/vets-api-server.log ALL -G -S --watch
```

A JSON blob on one line is hard to read, if you're only looking for one field you can append `--query=field` to only output that data:

```bash
awslogs get dsva-vetsgov-prod/srv/vets-api/src/log/vets-api-server.log ALL --filter-pattern='{ $.level = "info" }' -S -G -s1m --query=message
```

And to format the JSON output you can install `jq` and pipe the logs to it:

```bash
brew install jq
awslogs get dsva-vetsgov-prod/srv/vets-api/src/log/vets-api-server.log ALL --filter-pattern='{ $.level = "error" }' -s 1m -S -G | jq
```

## Prometheus
[Prometheus](http://prometheus-prod.vetsgov-internal:9090/prometheus/graph) captures a wide array of metrics. api.va.gov automatically captures metrics around latency, requests per minute, and error rates. To view the impact of a specific error you need to have in place StatsD metrics that track total calls and failures. Tracking totals from the api:

```ruby
StatsD.increment("service.method.total")
```

For failures we can add tags to differentiate error types within failure totals:

```ruby
StatsD.increment("service.method.fail", tags: ["error:#{error.class}"])
```

The above pattern is common enough in service classes that it's been abstracted out to a concern, `Common::Client::Monitoring`, which can be mixed in to a service.

```ruby
module EVSS
  class Service < Common::Client::Base
    include Common::Client::Monitoring
```

Service calls can then be wrapped in a block that automatically records totals and failures:

```ruby
def get_appeals(user, additional_headers = {})
  with_monitoring do
    response = perform(:get, '/api/v2/appeals', {}, request_headers(user, additional_headers))
    Appeals::Responses::Appeals.new(response.body, response.status)
  end
end
```

With those calls in place we can query for the sum across deployed server instances in Prometheus:

```
sum(api_appeals_get_appeals_total)
```
![Sentry Issue 01](images/triaging_errors_prometheus_01.png)

The error query can filter by error tag:

```
sum(api_appeals_get_appeals_fail) by (error)
```
![Sentry Issue 01](images/triaging_errors_prometheus_02.png)

Ongoing issues can have their related Prometheus queries saved as [Grafana](http://grafana.vetsgov-internal) dashboards. An example of this is the [EVSS dashboard](http://grafana.vetsgov-internal/dashboard/db/evss?orgId=1). As prometheus [queries can be complex](https://prometheus.io/docs/prometheus/latest/querying/basics/), inspecting or [editing](https://grafana.com/docs/guides/getting_started/#adding-editing-graphs-and-panels) an existing Grafana dashboard is a good way to learn how to write them.
