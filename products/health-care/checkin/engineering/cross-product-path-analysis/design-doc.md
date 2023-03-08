## CIE Cross Product Path Analysis Design Doc

Author(s): **Adrian Rollett**

Last Updated: **March 7, 2023**

Status: **Draft** | In Review | Approved

Approvers:

* Stephen Barrs
* Patrick Bateman
* Shawn Adams

## Overview

### Problem statement

The data needed to answer questions like the following are siloed in disparate stores, greatly increasing the complexity of improving services for Veterans & Staff.

- Of all Veterans who sent a check-in SMS last Tuesday, how many eventually succeeded in checking in?
- On average, how long does it take from the time an SMS is received until a check-in link is sent?
- As a MSA, how might I know what actions a Veteran has already taken before coming to me for help?

### Objective

Provide a data storage & analysis service for tracing Veteran journeys across different products (VEText, CHIP, vets-website), meeting the following requirements:

- Aggregate relevant data from disparate systems
- Provide data visualization tools for synthesized data, ideally including [funnel charts](https://en.wikipedia.org/wiki/Funnel_chart) and [Sankey diagrams](https://en.wikipedia.org/wiki/Sankey_diagram).
- Facilitate real-time data analysis & visualization
- Allow scaling to millions of data points per day
- Provide an API for retrieving high-level Veteran interactions by ICN & date

This document is intended to facilitate review & approval of the project solution by VA technical staff & stakeholders & provide clear implementation guidance to project engineers.

### High Level Design

#### Narrative

In a nutshell, the proposed solution is to [forward logs](https://www.datadoghq.com/blog/route-logs-with-datadog-log-forwarding/) from Datadog instances to a [managed instance](https://aws.amazon.com/opensearch-service/) of [OpenSearch](https://opensearch.org) on AWS GovCloud. Once ingested, the data can be rewritten from event-centric log events to entity-centric data using [index transforms](https://opensearch.org/docs/latest/im-plugin/index-transforms/index/). This will facilitate searching and visualizations of various interactions, both Veteran-based and transaction-based. Finally, these data may be queried by external systems such as VSE-CS with a relatively light-weight middleware hosted on AWS lambda and fronted with API Gateway.

#### Diagram

```mermaid
graph LR;
classDef opsrch fill:#003B5C,stroke:#333,stroke-width:4px,color:#fff;
classDef ddog fill:#632CA6,stroke:#333,stroke-width:4px,color:#fff;
classDef vega fill:#652c90,stroke:#333,stroke-width:4px,color:#fff;
classDef lam fill:#dc6c11,stroke:#333,stroke-width:4px,color:#fff;
classDef api fill:#8450e1,stroke:#333,stroke-width:4px,color:#fff;
classDef vse fill:#003F72,stroke:#333,stroke-width:4px,color:#fff;

A01(VEText Datadog):::ddog --> B01[(OpenSearch)]:::opsrch
A02(Tevi Datadog):::ddog --> B01[(OpenSearch)]:::opsrch
A03(VaGov Datadog):::ddog --> B01[(OpenSearch)]:::opsrch
B01 --> C01[Kibana + Vega Visualizations]:::vega
B01 -.OpenSearch SQL.-> D01(Lambda):::lam
D01 --> E01(API Gateway):::api
E01 --> F01[VSE-CS]:::vse
```

## Specifics

### Detailed Design

#### Narrative 

The system architecture is relatively simple, heavily leveraging Datadog and OpenSearch capabilities to meet the requirements. Most complexity will lie in correctly transforming the data to entity-centric formats (both by Veteran ID and Checkin UUID) and building the queries and visualizations needed, likely in [Vega](https://vega.github.io). Additional effort will be required to correctly configure an ingest endpoint and VPN access to the VPC on which OpenSearch is hosted.

#### Day-of check-in data Proof of Concept

For the following PoC, a test instance of OpenSearch was run [using Docker](https://opensearch.org/docs/latest/install-and-configure/install-opensearch/docker/) and a few hundred sample log entries were manually exported from Datadog and imported with [`elasticsearch-dump`](https://github.com/elasticsearch-dump/elasticsearch-dump).

##### Data transformation PoC

The following [index transformation](http://opensearch.org) summarizes indexed log data from CHIP and vets-api logs, grouping visits to VA.gov with the associated UUID creation by the initiate-checkin function:

<details><summary>Index transformation sample</summary>
  
```
PUT _plugins/_transform/visit_funnel
{
  "transform": {
    "enabled": true,
    "continuous": true,
    "schedule": {
      "interval": {
        "period": 1,
        "unit": "Minutes",
        "start_time": 1602100553
      }
    },
    "description": "Sample transform job",
    "source_index": "checkins",
    "target_index": "checkins_uuid_centric",
    "data_selection_query": {
      "match_all": {}
    },
    "page_size": 1,
    "groups": [
      {
        "terms": {
          "source_field": "Uuid.keyword",
          "target_field": "Uuid.keyword_terms"
        }
      }
    ],
    "aggregations": {
      "responses.counts": {
        "scripted_metric": {
          "init_script": "state.responses = ['initiate':0L,'visit':0L]",
          "map_script": """
              def type = doc['Controller.keyword'].value;
                 if (type.contains('CheckIn')) {
                  state.responses.visit += 1 ;
                  } else if (type.contains('project')) {
                   state.responses.initiate += 1;
                }
             """,
          "combine_script": "state.responses",
          "reduce_script": """
            def counts = ['initiate': 0L, 'visit': 0L];
                for (responses in states) {
                  counts.initiate += responses['initiate'];
                  counts.visit += responses['visit'];
        }
        return counts;
        """
        }
      }
    }
  }
}
```
  
</details>


This allows data from indexed log entries like:

```
Mar 2, 2023 @ 14:56:58.162	Date:Mar 2, 2023 @ 14:56:58.162 Host:"internal-dsva-vagov-prod-vets-api-elb-811011630.us-gov-west-1.elb.amazonaws.com" Service:"elb" Uuid: Controller: Action: Message:2023-03-02T21:56:58.162550Z dsva-vagov-prod-vets-api-elb 10.247.32.181:43218 10.247.32.99:3004 0.000023 0.010285 0.000028 200 200 0 92 "GET http://api.va.gov:3004//check_in/v2/sessions/c87e7f90-ab60-4f6a-8f1f-7628e9a41f0f HTTP/1.0" "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Mobile/15E148 Safari/604.1" - - _id:wPEBqYYB1eOA2wwsgUY_ _type: - _index:checkins _score: -
Mar 2, 2023 @ 14:57:02.583	Date:Mar 2, 2023 @ 14:56:58.162 Host:"internal-dsva-vagov-prod-vets-api-elb-811011630.us-gov-west-1.elb.amazonaws.com" Service:"elb" Uuid: Controller: Action: Message:2023-03-02T21:57:02.583550Z dsva-vagov-prod-vets-api-elb 10.247.32.181:43218 10.247.32.99:3004 0.000023 0.010285 0.000028 200 200 0 92 "GET http://api.va.gov:3004//check_in/v2/sessions/c87e7f90-ab60-4f6a-8f1f-7628e9a41f0f HTTP/1.0" "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Mobile/15E148 Safari/604.1" - - _id:wPEBqYYB1eOA2wwsgUY_ _type: - _index:checkins _score: -
Mar 2, 2023 @ 14:56:55.858	Date:Mar 2, 2023 @ 14:55:55.858 Host:"169.254.33.173" Service:"chip" Uuid:"c87e7f90-ab60-4f6a-8f1f-7628e9a41f0f" Controller:"project-chipapi-initiatecheckin-prod" Message:text message sent to veteran _id:hPEBqYYB1eOA2wwsbUaV _type: - _index:checkins _score: -
```

To be summarized as follows:

```
transform._id:visit_funnel _doc_count:1 transform._doc_count:1 Uuid.keyword_terms:"c87e7f90-ab60-4f6a-8f1f-7628e9a41f0f" responses.counts.initiate:1 responses.counts.visit:2 _id:cmZmrqDxuqpzHQXJd7zxfg _type: - _index:sample_target _score:0
```

This in turn allows for creating path-dependent visualizations such as Funnels without creating complex, intensive queries.

##### Day-of check-in data visualization PoC

The following [Vega](https://vega.github.io) spec creates a bar chart showing how many initiate-checkin requests were found in the sample index, and of those UUIDs, how many went on to be visited by a veteran:

<details><summary>Vega sample</summary>
  
```
{
  "$schema": "https://vega.github.io/schema/vega/v3.json",

  "data": [{
    "name": "initiate",
    "url": {
      "index": "sample*",
      "body": {
        "size": 0,
        "query": {
          "bool": {
            "must" : [
              { "term" : { "responses.counts.initiate" : 1 } }
            ]
          }
        }
      }
    },
    "transform":[
      {
        "type": "formula",
        "expr": "'initiate-checkin'",
        "as": "category"
      }
    ],
    format: { property: "hits.total" },
  },
  {
    "name": "visit",
    "url": {
      "index": "sample*",
      "body": {
        "size": 0,
        "query": {
          "bool": {
            "must" : [
              { "term" : { "responses.counts.initiate" : 1 } },
              { "range" : { "responses.counts.visit" : { "gte": 1 } } }
            ]
          }
        }
      }
    },
    "transform":[
      {
        "type": "formula",
        "expr": "'visit-checkin'",
        "as": "category"
      }
    ],
    format: { property: "hits.total" },
  },
  {
    "name": "all",
    "source": ["initiate", "visit"]
  }
  ],

 "scales": [
    {
      "name": "yscale",
      "type": "linear",
      "zero": true,
      "domain": {"data": "all", "field": "data"},
      "range": "height"
    },
    {
      "name": "xscale",
      "type": "band",
      "domain": {"data": "all", "field": "category"},
      "range": "width",
      "padding": 0.05
    }
  ],
  "axes": [
    {"scale": "yscale", "orient": "left"},
    {"scale": "xscale", "orient": "bottom"}
  ],

  "marks": [ {
    "type": "rect",
    "from": { "data": "all" },
    "encode": {
      "update": {
        "x":     {"scale": "xscale", "field": "category"},
        "width": {"scale": "xscale", "band": 1},
        "y":     {"scale": "yscale", "field": "data"},
        "y2":    {"scale": "yscale", "value": 0}
      }
    }
  } ],
}
```
  
</details>


The generated visualization:

![Screenshot 2023-03-07 at 17 23 24](https://user-images.githubusercontent.com/101649/223586898-594a8650-30e1-4fdc-9bf6-3d8c5edb6dbb.png)

### Privacy Concerns

No PHI needs to be stored to meet the design requirements, and very limited PII. The following mitigations are recommended to limit risk of PII/PHI disclosure:

- carefully construct log filters to ensure only required data is forwarded to OpenSearch
- host OpenSearch within a private VPC, only allowing system access to authorized personnel on the VA Network
- consider encrypting any unique identifiers like ICNs as necessary

### Open Questions and Risks

- Datadog Log Forwarding Release timeline - slated for late Q1/early Q2, but could potentially slip ([ref](https://dsva.slack.com/archives/C01G6J7UGGH/p1677770499238659?thread_ts=1677694697.304329&cid=C01G6J7UGGH))
- Ongoing hosting costs have not been estimated - it's possible that resource usage could be significant to store and analyze all relevant log events for months at a time

### Work Estimates

| Scope       | Estimate       |
| ----------- | -------------- |
| OpenSearch setup, VPC configuration, DevOps config | 2 weeks |
| Configure data transformations for day-of check-in | 1.5 weeks |
| Build Sankey Visualization for day-of check-in | 1 week | 
| Configure log forwarding for relevant events on all DataDog instances | 1 week |
| Build API endpoint to retrieve unified event logs by ICN and date | 2 weeks |

### Alternatives

#### Dual log shipping

- A tool like [Vector](https://github.com/vectordotdev/vector) could be used to ship logs both to the current datadog instances and the chosen analysis solution (whether OpenSearch or something else) - This would increase effort and configuration tech debt, but provide increased control/visibility into the solution and is actionable without waiting for DataDog to ship log forwarding for Government.

#### Bespoke solution

- Events could be shipped (perhaps again via Vector) via a new API endpoint to a relational database. (likely an RDS instance of some flavor) At that point, analysis could be performed by creating SQL queries and visualizing the data with any tool preferred. This solution would provide the ultimate flexibility, but would require careful structuring to ensure good performance, and require a good deal more implementation and maintenance effort.

### References

- Sankey Diagrams with Vega in Kibana/OpenSearch: [link 1](https://www.elastic.co/de/blog/sankey-visualization-with-vega-in-kibana), [link 2](https://gist.github.com/XavierGimenez/82ed6db55ade843c51ee062852b5313e)
- [Alerting with OpenSearch](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/alerting.html)
- [Introduction to Vega Visualizations with Kibana](https://www.elastic.co/blog/getting-started-with-vega-visualizations-in-kibana)
- [Basic funnel chart in Vega](https://stackoverflow.com/questions/60444288/draw-funnel-chart-in-vega-vega-lite)
- [ElasticSearch Transforms Tutorial](https://www.elastic.co/guide/en/elasticsearch/reference/master/ecommerce-transforms.html)
- [Transform examples](https://www.elastic.co/guide/en/elasticsearch/reference/current/transform-examples.html)

#### Importing datadog CSV exports to elasticsearch with elasticdump

```bash
# `NODE_TLS_REJECT_UNAUTHORIZED=01 is only required if you need to skip certificate validation
NODE_TLS_REJECT_UNAUTHORIZED=0 elasticdump --input=csv:///path/to/file/extract-2023-03-03T18_27_48.189Z.csv --output=https://username:password@localhost:9200/index_name
```

## Revision History

| Date        | Revisions made | Author         |
| ----------- | -------------- | -------------- |
| Mar 7, 2023 | Initial Draft  | Adrian Rollett |
| Mar 8, 2023 | Additions & revisions | Adrian Rollett |
