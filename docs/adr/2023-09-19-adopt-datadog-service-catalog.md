# 2023-09-19 Adopt the Datadog Service Catalog as the source of truth for service/application/team mapping

_This file is being published in Github instead of Confluence pending publishing access issues. It will be synchronized to Confluence once adopted._

## Status
Proposed

## Context
Current context is the VA.gov Code Yellow exercise, in which the focus is on ensuring observability and correct functioning of all the key applications across VA.gov. This is in response to some important features having longstanding bugs that prevented Veteran submissions and were not caught for weeks/months. 
In order to remedy this, a key question has been “which team owns this API controller?” or “which team owns this Sidekiq job?” The Code Yellow team has had to pound the pavement to figure this out because there is not accurate source of truth. However, we have attempted to collect this information at least two other teams that I’m aware of (in the context of the platform spike teams). This information always winds up in an excel sheet or confluence table where it is then only visible to some, quickly becomes stale and outdated, and is impossible to integrate with other platform features, automation, and validation. 

## Decision
Adopt the Datadog Service Catalog as the source of truth for which services exist in vets-api, which teams own those services, and how they roll up to products/applications. Specifically, use the Datadog YAML format, managed in source control in the vets-api repository, as the source of truth for this information. 

Additionally, tag API controllers and Sidekiq jobs with the corresponding service information, meaning logs/traces/metrics in Datadog will be associated with a service, and consequently with a responsible team. 
Consequences

With this data in a single, machine-readable location it should become possible to:
* View a list of services and their associated teams using the existing Datadog UI.
* Filter traces/logs by service/application/team so teams can hone in on the issues they are responsible for.
* Auto-generate dashboard configuration for all of the APIs/workers associated with a service [needs validation]
* Generate reports for things like:
  * Controllers not associated with a service
  * Services not currently owned by any team (i.e how many orphaned services do we have today? What is the impact of a vendor team’s period of performance ending and not being replaced?)
* Build CI validation that enforces service ownership - i.e. I can’t merge a new API controller without establishing ownership. 

The hypothesis is that the validation and reporting will help keep this information current by tying this data as closely as possible to the development process rather than it living completely out of band of the code.

Longer term, these concepts can be fully integrated with the collaboration cycle - imagine automation that defines a new team and populates all the users in datadog, and creates a starter dashboard for a new service, as a team is going through platform orientation. (At this point, the needs may outgrow what is possible with Datadog’s Service Catalog format, but at that point this capability can be replaced with a full-fledged service with it’s own API. And the YAML file can still live on as an export/exchange format between this putative service and Datadog.)

## Tool Independence
While we’re recommending adopting the Datadog Service Catalog, we don’t want to build in too much dependence on Datadog.
* The YAML Format is general-purpose and even if we move off of Datadog, it would be feasible to translate that data format into a different custom schema for import into a custom DB, Service Now, or whatever else is needed. 
* We intend to not scatter Datadog::Tracing.foo calls throughout the vets-api code - instead creating a thin abstraction module for use by controllers/jobs, whose implementation (for now) invokes the right Datadog APIs to associate runtime information with services. 

## Next Steps
* Solidify taxonomy - what level constitutes a service vs. an application
* Generate service catalog config for a couple of services
* Prototype tagging of APIs/jobs for those services, ensure that all relevant Datadog views (logs, traces, metrics) are correctly associated and can be rolled-up and filtered plausibly.
* Build abstraction layer Ruby module to keep in-code service annotation Datadog-independent.
* Roll out across vets-api
* Identify gaps - orphaned controllers/workers, services, teams with no members, etc - and begin resolving them. 

## Decision Makers
* Patrick Vinograd
* Adrian Rollett
* Bill Chapman
* Steve Albers
