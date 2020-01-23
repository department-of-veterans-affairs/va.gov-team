# Decisions we've made about managing external teams

* [External team access to tools](external-team-access.md)
* [ATO and security](ato-security.md)
* [Logging and monitoring](logging-monitoring.md)
* [Tracking and workflow](#tracking-requirements-and-workflow)
* See [Questions to be answered](questions.md)
* See [In-progess POVs (not yet decided)](in-progress-povs)

<hr/>

## Other Decisions

### Tracking requirements and workflow

> UPDATED Nov 2018

External teams need to use an approved VA tool for tracking epics, user stories, and code. The VA goal is to maintain "traceability" between epics/user stories and the specific code that addresses those epics/user stories.

* As of Nov 2018, Github/Zenhub is the tool that DSVA uses to manage this.
* Jira is also an approved tool (ask Angela Gantt-Curtis if you want more details on this). 

If external teams decide to use Jira, DSVA needs to work out access details with the external team so VA has access to the Jira account after the project ends. As of Nov 2018, the external team (AgileSix) working on VA.gov CMS is doing this, so ask them for details on how they set this up.

~~We've decided that external teams must use follow our DSVA process on Github so the DSVA team can maintain traceability for VA.~~
~~* They must file Github issues for epics, user stories, and code issues.~~
~~* They must connect these to each other to create "traceability," e.g., connect a code pull request to a user story.~~
~~* They must use Zenhub to ensure consistency across how Veteran-facing Services Platform teams use Github issues.~~

### Contractor to Contractor communication

[See the norms we've established](https://github.com/department-of-veterans-affairs/vets-work-practices/blob/master/Norms/norms-communication.md)

* We've decided to monitor the situation and respond as things come up.
* We've decided Mary will think about the following for future contracts.
  * Is there flexibility in new workstreams to allows for collab btwn contractors? A clause or mod in contract? There's a built-in reason for why contractors might have to direct each other, bc if we're all on the same platform, we may need to direct each other.


### Application/Feature Improvement and Maintenance

DSVA is working on this now.

- One initial idea related to intake (per Liz): if someone new wants to build, they need to have a plan in place for how what they create will be maintained. Might need definition around if upstream team DOES prioritize something that "our" team would need to maintain, then "we" 
- RISK: the idea of "one team builds, and another team maintains" is not ideal, and is one of the key problems w/current state of govt contracting. Is it possible to sway the approach we recommend to encourage a structure where the team that builds something is the same team that maintains it?



