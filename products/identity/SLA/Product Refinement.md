# SLA Product Refinement

On Friday, April 15, 2024 the Identity Team had our first product refinement for the Login SLA project.


It was focused around this Problem Statement:

__Problem Statement__
_We do not currently have any current Service Level Agreements for VA.gov logins, and publishing them -- as well as dashboards that visualize key data -- will help us monitor and improve the Veteran login experience._

With the Problem Statement in mind, we brainstormed around two high-level User Stories
__High-Level User Stories__
* As a VA Team Member, I would like to see high-level data visualizations related to the status and performance of authentication services on VA.gov, so that I am provided with immediate, comprehensive information about the status of services that I am using.
* As a VA Team member, I would like to see service level agreements related to the status and performance of authentication services on VA.gov, so I can understand what to expect from those services.

One thing to note: this is specifically around Service-Level Agreements for

The brainstorming focused upon three separate areas:
* __Outstanding Questions__ - What are we unsure of, what do we still need to discuss?
* __Tasking__ - How do we break down what needs to be done and assign it?
* __After Party__ - Save for future iterations.



### Outstanding Questions
Note: anything that wasn't specfically within scope of the User Stories or would be determined during the process got moved to either __Tasking__ or __After Party__.
* Can we reference example SLAs as inspiration?
* Do customers need to agree to the SLAs?
* Should we have a communication standard with our SLA to other services?
* How many SLAs to we want to commit to?
* What SLAs to we want to commmit to?
* Assign external service to monitor SLO?
* Is there possibility for downtime in different regions? Specific events?


### Tasking
Once again, anything that wasn't specifically within scope of the User Stories would be moved to __After Party__.  Also, tried to break the tasks up into logical grouping.
* Create Each SLA either as a metric or as a log
  * Ensure all SLAs are written to Datadog
* Develop document, host in github which explains each SLA
  * SLA Document should include which teams fall under the agreement.
  * Automate the sending of the SLA compliance report
  * Qualitatively describe the info contained within SL's visualizations
* Communicate about planned downtime - how much lead time can we give?

### After Party
Most of these revolved around Incident Response and preventing service outages, as well as communication with our customers so I grouped those together, but didn't combine like items.
* Incident Response
  * SLA for downtime? Do we include them?
  * SLA document should include a table w/ contacts for violation or escalation.
  * SLA Response times
  * What happens if we violate our SLA?
    * Determine the penalties (if any) for violating SLA.
* Prevention
  * Tests to proactively decrease downtime.
  * Methods to Maintain uptime
    * Uptime monitoring
    * Load testing
    * Manual testing
    * Geographical testing
    * Logging & Monitoring
    * Backup and Redundancy
    * Failover Testing
* Communication
  * Are we including service level adjustments? Events our of our control (storms) occur that affect uptime.
  * How often should we communicate updates during an issue. (20 minutes)
  * Difference in use/need between internal & external.
  * How will we communicate SLA changes?
  * Adherence to SL's builds trust & improves CX. Can we show our SLs as part of a VA.gov promotion to the public?
* Misc
  * What level of compliance with section 508?
  * Triangulate research re: SL's (quant) and impact on users (qual & qual) (perhaps interviews) to understand what happens when there is downtime, and identify themes/insights for improving the experience, whether before, during, or after a disruption  Maybe users can be told about the app, to try it out, if it is working despite website being down. Or other methods to use for completing their tasks.
  

