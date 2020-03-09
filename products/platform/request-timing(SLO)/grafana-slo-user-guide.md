# External Service Availability Indicators User Guide

- [:link: to Dashboard](http://grafana.vfs.va.gov/d/pEgVdRlZk/external-service-availability-indicators?orgId=1)

These panels visualize the core service-level indicators for our external partner services. Typically, SLI/SLOs are set by a given service provider. We don't necessarily have those in every case. In that regard, these numbers are based on expectations and historical performance, used as an observability and reporting tool.

If a VFS engineer needs to interface with a 3rd party, that request is likely to happen in the `vets-api` code layer, i.e. `vets-api/lib/**/*/client.rb`

---

> **Availability** is the proportion of requests that result in a **successful response**.

-   This metric represents the proportion of successful HTTP requests made to a given service or endpoint.
-   We calculate availability by dividing the number of successful requests by the number of total attempted requests.
-   We consider a successful response to be that which returns a status code not equal to `500-599`. 
-   This is described further in the [Breakers middleware](https://github.com/department-of-veterans-affairs/breakers).
    
> **Latency** is measured in milliseconds, and is the duration of time elapsed between when the request is made until the full response payload is received.

-   We set an SLI for latency as the **proportion** of requests that are faster than a given threshold. The defaults for new service partners are:
    -   90% of requests are faster than 400ms

## Definitions

instrumentation:
  ~ code that allows for the monitoring and  measuring of a product's performance, or logging information related to this process
  
sla:
  ~ **service level agreement**: a contract or agreement that a service provider promises to customers a particular level of availability or performance
  
sli:
  ~ **service level indicator**: a technical measurement that a service provider uses to track performance 
  
slo:
  ~ **service level objective**: a performance goal the service provider would like to reach

quantile:
  ~ each of any set of values of a variate which divide a frequency distribution into equal groups, each containing the same fraction of the total population.


## Variables defined

`Data Source`: From which environment to pull metrics data

`Service`: Backend service tag from Breakers

`Endpoint`: Service endpoint from Breakers

`haproxy Backend`: Backend label at the forward proxy layer


## To Generate A SLO Report

**Note**: Requires :socks: SOCKS proxy access

- Navigate to [Grafana dashboard](http://grafana.vfs.va.gov/d/pEgVdRlZk/external-service-availability-indicators)
- Click on 14d Report button ![](https://i.imgur.com/a7D5OwB.png)
- Download report and deliver

## Caveats

- Currently we only have 14 days of rolling metrics in the production Prometheus stack
- Global thresholds are set as a baseline while we continue to iterate upon endpoint-specific latency thresholds
