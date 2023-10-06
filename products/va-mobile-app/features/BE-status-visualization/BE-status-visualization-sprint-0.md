# Sprint 0 Backend Status Visualization

[Epic #6750](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6750)

## Problem Statement

### Current Experience ###

* Currently, when there is staging down time or other unexpected behavior, Mobile team members ask the BE team to look into the issue to confirm if it is an upstream issue that needs to be waited out or an addressable issue.

### Desired Outcomes ###

* We would like to further develop the mobile BE test suite software to include a publicly available website that would visualize the status of each endpoint and clearly show if an upstream service as a whole is down or a specific endpoint. It can look similar to the following upstream services map ([Upstream Service Map](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Architecture/Services/#upstream-service-map) ) but each node can be color coded with green/red/yellow to show their status. This would allow other non-BE team members to quickly determine on their own if the issue is upstream and can save BE team members time by not having to look into it. Even if BE is still asked to look into it, it would be a quicker resource to use than datadog. Datadog has a complex login process and requires many clicks to get to the dashboard with the necessary information. Even when that dashboard is reached, it can be intimidating to non-technical users.

## Assumptions and Level of Confidence

1. We can find a place to host this. May need to investigate hosting on github.
2. Front end development can be easily done by the Backend team using javascript libraries such as https://js.cytoscape.org/.

## Risks

1. Not being used by other team members.

## Business Goals
* Streamline our processes and avoid more context switching for team members.

## Roadmap

**V1**

* Do MVP that only creates a single page with a color coded directed graph and host on local machines

**V2 and beyond**

* Setup host platform
* Polish page looks and add feature to see relevant logs on hover of node.

## Technical Approach

*	Use js library to visualize directed graph: https://js.cytoscape.org/
*   Use lightweight library like https://atomiks.github.io/tippyjs/ for hover modals for logging information, alternatively we could use a heavier framework like Bootstrap (https://getbootstrap.com/ ).
*   If all the endpoints for a particular upstream service are all the same color, then that upstream service node will inherit that color.
- Color can be determined as follows:
  - Green - Within the last 20 minutes (can change to whatever time we see fit), all tests on this endpoint get expected responses (right now we have every GET endpoint being tested once every few minutes in staging)
  - Yellow - Within the last 20 minutes, a non-zero number of tests on an endpoint failed but some succeed
  - Red - Within the last 20 minutes, all tests on an endpoint failed
*   Color can be accompanied with text status in node so color is not the only signifier.
*   We can determine if we’d like to break up nodes into each endpoint or clump controllers together so for example, all claims endpoints will just be one node instead of 5-6 nodes for each endpoint.
*   This status page will be limited to only GET endpoints as that is all we currently test. Some PUT/UPDATES could be added to this list but some cannot since it will alter limited test data that needs to be saved for QA since changing it back is not simple.
*   This can take place in the same repo as the current tester and be built on top of it. It is already a rails project so adding views shouldn’t be hard. Will need a way to host it non locally on our laptops.

## Measuring success

*	Can track traffic to the site.
*   After some months we can ask other team member if they’ve used it successfully

## Stakeholders

* Internal tool. No VA stakeholders

## Open Questions

* Is this wanted by the QA team and others?

## Important Links

* [Upstream Service Map](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Architecture/Services/#upstream-service-map)
