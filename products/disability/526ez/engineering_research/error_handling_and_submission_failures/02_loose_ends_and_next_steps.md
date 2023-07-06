# Loose End round up and Next steps for 526 stabilizing
[Ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60565)

## Purpose
- Gather documentation to the effect of 526 submission error handling atm, summarize, and qualify each.
- Synthesize most salient data available to us to date in regards to 526 submission errors, logging, and fixes.
- Define clear action items to improve submission success.

## Questions
- What are the potential pitfalls of our “paper” back up submission?
  - [TODO] will this create a longer wait time? Potentially longer time to get the claim established. WIth the backup submission process, the claim is sent to the Centralized Mail Portal, which scans claims to see if they meet automation requirements. Those that don’t will go through manual establishment. (via Sade)  Yes, this will make waits longer.  Additionally we add an unmitigatable point of potential failure when we add humans into the process. (via Kyle)
  - [TODO] Will this impact a vets ability to use online services in the future? The backup submission process does not impact the Veteran’s ability to use online services in the future. (via Sade)
- Can we set, as an axiom, that form validations to ensure EVSS acceptance are worthwhile, vs saying “no worries, paper
  - TODO: check with product after we find out the above
- What do KPIs mean, specifically, in regards to [Kyle's previous git document](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57489)?

## Existing Documentation 
- [State of 526 Error Handling and Fallback summary as of June 2023](https://docs.google.com/document/d/1IIRz1og52BRLxkAPmowHJRxX8POlBK1zWt3dtWewTHM/edit#heading=h.4pz3vouh89o5)
  - Takes a high level look at how we are reporting errors and how we should be reporting errors in the current ecosystem
  - Highlevel look at our fallback solution
  - Defines the following relevant action items:
    - Add manual / automatic retries to "paper" submission fallback
    - Align our FE validations with EVSS validations
    - Create architecture diagram of submission and fallback flow
    - Improve error reporting and logging around submission and fallback flow
- [Assess code and Identify KPIs (by Kyle Soskin)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57489)
  - [Resultant artifact of this epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57473)
  - [TODO] what exactly does “KPIs” mean here? KPIs in this context means “If all is well, these are the things that should happen.”  The work here is to logging that give us clarity into the health of these parts of the app.
- [Open Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57500)
  - The ask is to implement logging.
    - [TODO] clarify what that means. The work here is squaring up the identified KPIs (via Kyle) with our logging expectations.  Some stuff will be covered, other stuff needs coverage, and there may be areas for improvement
## Next Steps: 
- Add / validate logging, [as described in the open issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57500), to [the places identified by Kyle here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57489)
  - There is (probably) way more than one sprint worth of work described in this ticket.  If that is the case, break it down.
- Datadog logging is already good.  Sentry error reporting could be better.  Investigate ways to make Sentry errors, scoped to form submission, more verbose.  This may require getting better errors from EVSS.
  - This work is blocked by my datadog access.  I need more insight into what information we have before I start trying to improve a siloed portion of it.
## Follow up: 
The next step, as recommend here was to engage this ticket [526ez | Implement Logging and Monitoring](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/57500), and start iterating on actual logging.  This lead to a bit of a follow-up discovery with the tickets criteria.  As noted below, the acceptance criteria has been labeled in-scope, out-of scope, and open questions.
### The acceptance criteria from the original ticket:
- The log data includes relevant information (example: IP address, timestamp, and form input data).
  - Need to see what’s in here, but this will probably be configuring Rails logger, or wrapping Rails logger in an object?
    - This will be answered in [the proof of concept ticket here](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60944)
  - Need something to be inscope, so let’s start here by wrapping one of the KPI actions in a log
- The log data is stored in a secure and scalable manner, and is easily searchable and accessible to authorized personnel.
  - Datadog pretty much has this covered, so this feels out of scope.
- The logging system generates alerts for any errors or unexpected behavior, such as user input that exceeds acceptable limits or failed form submissions.
  - First pass should be getting data into the logs, we can configure alerts later.
  - We might need to pass extra data into the logs for alerting, but this feels like an edge case.  Also, as a proof of concept it makes more sense to just start logging and iterate.
- The alerts are sent to relevant team members via email or other appropriate channels, with clear information about the nature of the issue and how to resolve it.
  - Alerting if V2
-  A dashboard has been created to display the log data and facilitate analysis and monitoring of user behavior and performance.
   - V2
-   The dashboard allows for easy filtering and aggregation of log data to identify patterns and trends over time.
    - V2
-   The dashboard includes clear visualizations of the data, such as charts or graphs, to facilitate easy interpretation and analysis.
    - V2
-  The dashboard allows for drill-down into the data to identify specific areas for improvement and track progress at the user or form level.
   -  V2
-  Regular reports are generated and shared with the relevant stakeholders, summarizing performance and highlighting any areas for improvement or concern
   - Feels like dev ops work imho
### Takeaway
The old ticket is basically obsolete.  It made sense to round up all of the findings from this document and the initial investigation into an epic with actionable sub-tasks.  [This is that epic.](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60952)
      







