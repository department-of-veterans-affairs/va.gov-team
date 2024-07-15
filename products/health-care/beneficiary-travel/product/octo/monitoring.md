# Monitoring Requirements

This will define some baseline abstract Monitoring solution requirements (Datadog, Dynatrace, etc) for downstream APIs from VA.gov. The chosen solution should work with the technologies the API is built on and be hosted on a FedRamp authorized service. 


The biggest  question we are answering is 

```
How can we, as a team, know that how well our API is currently functioning
```

## Alerting & Monitoring

**PRIMARY USE CASE** 
```
As a API owner, 
we should know when the API we built is having issues 
so that we take timely actions to migtigate the problem and restore service 
```

### Existing VA best practices
> Follow standards about [Signal to Noise](https://depo-platform-documentation.scrollhelp.site/developer-docs/managing-signal-to-noise-ratio)

> Working Example: check out va.gov [monitioring best practices](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-effective-monitors) with Datadog 

### Detailed guidance
- The API Team should be alerted to problems or anomalies that are going on their API. Such as 
    - higher than normal number of errors
    - Slow than expected repsones times
- These alerts should be timely and actionable. 
- Alerts should be delivered on channels that the team has access to and will be listening (Teams, slack, email, etc. )
- Once an alert triggers, team members should acknoledge in an agreed upon timeframe (Example, alerts are acknowledged with in 30 minutes during business hours) and act on the problem accordingly (debug, turn features off, alert downstream systems, etc)
- Alerts should include a message with details to what is going on
- Ideally, the team can set up differnt thresholds of alerting (warning, errors, recovering, etc)
- Monitoring and alerting should follow the [USE](https://www.brendangregg.com/USEmethod/use-linux.html) and [RED](https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/) paradigms
- This should include what details we can gather from the APIs downstream dependencies 


## Obersability

**PRIMARY USE CASE**
```
As an API owner
We should be able to see the current health and metrics of our application
So that we can observe what is going on
```

### Detailed guidance

- We should able to create multiple Dashboards for different audeinces displaying the current activity in the system 
- Different audeinces can be stakeholders, support engineers, product managers, support staff members.
- Dashboards should be able to display near-realtime data
- Some datapoints that we could want to be displayed
    - Metrics that are used in alerting (RED and USE)
    - Key OKRs that are defined by Stakeholders
- We should be able to query(searched and filter) system logs to investigate problems or answer questions

## Access

- There should be a limted full admins/owners
- Role based access (READ vs READ/WRITE) should exist
- Rules about who has what access should be agree upon on the team's resources and operation
- There should be some API access to bulid and extend on as needed 

## Data Retention

- Data should be retained for at long as it takes to ensure the upstream custody of information is established
    - Long enough to debug and investigate bug reports
    - Long enough to survive any busniess logic rules (such as a claim life cycle)
- No PHI or PII should be logged
    - If(when) PHI/PII is logged, we should be able to have a process to sanitize or scrub the offending data

## Links

- [Signal to Noise](https://depo-platform-documentation.scrollhelp.site/developer-docs/managing-signal-to-noise-ratio) 
- [How va.gov creates effecting monitors](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-effective-monitors)
