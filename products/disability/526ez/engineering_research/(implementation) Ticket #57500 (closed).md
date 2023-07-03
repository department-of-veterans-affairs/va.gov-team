# Ticket #57500 Dev Log
## Note: 
**This ticket is for historical purposes only. Do not consider the information herein to be a source of truth.  Relevant findings have been cherry picked [into this document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526%20Submission%20Stabilizing%20and%20Logging%20round-up%20(second%20pass).md).**
## Purpose: 
To track progress, challenges, and decisions made relative to the work on this ticket: [526ez | Implement Logging and Monitoring](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/57500).
## Scope: 
IN SCOPE: Braindumps, notes, open questions

OUT OF SCOPE: Refinement, 100% visibility

## Note: 
### The acceptance criteria: 
- The log data includes relevant information (example: IP address, timestamp, and form input data).
  - Need to see what’s in here, but this will probably be configuring Rails logger, or wrapping Rails logger in an object?
  - Need something to be inscope, so let’s start here by wrapping one of the KPI actions in a log
- The log data is stored in a secure and scalable manner, and is easily searchable and accessible to authorized personnel.
  - Datadog pretty much has this covered, so this feels out of scope.
- The logging system generates alerts for any errors or unexpected behavior, such as user input that exceeds acceptable limits or failed form submissions.
  - First pass should be getting data into the logs, we can configure alerts later.
  - We might need to pass extra data into the logs for alerting, but this feels like an edge case.  Also, as a proof of concept it makes more sense to just start logging and iterate.
- The alerts are sent to relevant team members via email or other appropriate channels, with clear information about the nature of the issue and how to resolve it.
  - Alerting if V2
- A dashboard has been created to display the log data and facilitate analysis and monitoring of user behavior and performance.
  - V2
- The dashboard allows for easy filtering and aggregation of log data to identify patterns and trends over time.
  - V2
- The dashboard includes clear visualizations of the data, such as charts or graphs, to facilitate easy interpretation and analysis.
  - V2
- The dashboard allows for drill-down into the data to identify specific areas for improvement and track progress at the user or form level.
  - V2
- Regular reports are generated and shared with the relevant stakeholders, summarizing performance and highlighting any areas for improvement or concern.
  - Feels like dev ops work imho

 ### Notes from Steve A. 
 - For this task we have some challenges with the best approach to alerting. Sentry Alerts are not sending messages, and we are only able to add alerts to DD via Terraform. I'm assuming Datadog is the plan for alerts, please let me know if we want to go a different direction.
   - Terraform?  Seems like there is an ownership question for log / alert config.  Find out who owns terriform and coordinate with them
  ### Recommendations
- Split out the work into
  - Rails logging
    - [Done](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60952)
  -  Dashboard config
-  Start with a proof of concept rails logging.
    -  Medical record upload? Seems to be a hot topic
-  How does configuring DataDog work?
    - Either way, this will have to happen later on, because i don’t have access.
    - Kyles wording implies there is no specific dashboard configuration required in datadog, i.e. dynamic tagging / indexing of datapoints
    - If it’s not automagical, and even if we wait, it’s still not something i have access too.  It’s either terraform or UI owned by platform team.
### WIP:
Cracking open the ticket.  Not sure it accurately reflects the work on a granular level, but at this point i think I’d like to start committing code and stop refining and documenting.

We should probably use a gem to encapsulate our 3rd party API logging
- Why?
- Examples:
  - [Rails API Logger](https://github.com/renuo/rails_api_logger)

[I appears we are supporting Tagged logs with this…](https://api.rubyonrails.org/classes/ActiveSupport/TaggedLogging.html)
- Is there a reason these tags aren't being used in sentry?
- Are they being used?

I need DataDog access before I’m going to be able to actually improve log content.  E.g. logging IP addresses, do we do it?  It’s in the ticket, but i’d like to see what we have first.
 





