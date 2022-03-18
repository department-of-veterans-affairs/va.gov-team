# MHV-on-VA.gov Implementation Plan
This document serves to document the overall implementation approach for migrating MyHealtheVet (MHV) features to VA.gov. 

## Desired End State

The desired end state is that veterans use VA.gov to access the health features and content that currently reside on MHV. In other words, the user-facing portions of those applications will be migrated to VA.gov.  

Technology-wise this means that:
  * The frontend of each health feature will be built and deployed on the VA.gov platform using the typical tools and workflow for veteran-facing services. Applications will be built in React; content will be hosted in the VA.gov content management system (CMS). 
  * The backend services and APIs that currently fulfill those health features will continue to operate in the current MHV hosting environment. 
  * An API proxy layer will be built in the VA.gov platform to mediate between the VA.gov frontend and MHV APIs, as described [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/engineering/health-api-design.md)

The development teams responsible for migrating these features will need to incorporate some new tools and processes into their development workflow to participate in the VA.gov ecosystem; some of these changes are described further below. 


### Why
OCC and OCTO product owners are aligned on the rationale for moving health features to VA.gov:
* Veterans have one site, with a unified user experience, where they can manage their health and benefits.
* It eliminates much of the complexity of navigating between sites, such as the extensive engineering effort that went in to making single sign on between sites work correctly. 
* Because VA.gov is integrated with many other systems at VA, it opens the door to further integration among features, such as embedding disability rating on the health landing page or unifying veteran profile information in one place.

## Getting from here to there - phased migration
If the desired end state is for veterans to access these health tools on VA.gov, how do we get there? Exact details will need to be worked out, but generally we expect to follow this **rough** approach:

1. Build each feature on VA.gov without releasing to production, until ready for any desired UAT/beta/pre-release activities.
2. Soft launch to production on VA.gov such that the tool is reachable at a well-defined URL, but without updating any external links or site navigation. This step facilitates UAT/limited beta activities. 
3. (If desired) Selective linking - pick specific links to a feature in content pages, site navigation, or other channels (such as email notifications) and link to the new version of the tool.
4. Full inclusion in VA.gov site navigation. 
5. Suggested redirection from MHV - via page banners, making users aware of timeline for migration and offering them the new tool.
6. Mandatory redirection from MHV - links/calls to action on MHV redirect to VA.gov.

Any of steps 3-5 can also include a phased rollout where the feature is made available to a percentage of users that we can ramp up over time. 

Other principles to consider:
### Migrate feature by feature
Each of the "big 4" features, and any additional functionality, can be migrated independently. This goes for both how these features are implemented and how they are launched to end users. Doing so avoids the risk of a "big bang" cutover, and lets us learn from and refine our implementation approach as we go. _(Open Question: On the other hand, if we anticipate a high degree of inter-tool navigation, then we may want to keep users on one site or the other, even if tools exist in both places)_

This means that our roll-out plan needs to account for veterans still having to navigate between sites (so single sign on should continue to be supported as smoothly as possible), and we should be able to update links to each tool and easily configure redirects as needed.

### Build and deploy without releasing
We want to be able to build the new veteran-facing features on VA.gov and maintain control over when they are launched to end users. 

At this point the VA.gov platform has good support for using feature flags to control when functionality is exposed to end users. Code can deploy to production without being released. The VA.gov feature flag mechanism also allows for phased rollouts (e.g. exposing a feature to a percentage of users), and exposing features to specific set of opt-in users to allow for user acceptance testing in production. 

### Account for rollback
Roll-out plans should account for the possibility that a migration will need to be rolled back, pointing users back to a feature on MHV for some interval. An accounting should be made of the complete set of links/redirects/landing pages/content that need updating in such an event. As always we will strive to minimize the likelihood of needing to rollback. 

### Consider the long-term 
We should consider how many existing links there are to specific MHV content pages - both within VA web properties and on the internet at large. If these are signficant, we'll need to maintain a longer term strategy of redirecting specific MHV URls to specific destinations on VA.gov. Alternatively we may opt to do a blanket redirect to the VA.gov My Health landing page on the assumption that users will be able to easily find the content they are looking for. 

## Building on VA.gov
The VA.gov development process is organized around many independent Veteran Facing Service (VFS) teams building applications, while platform teams provide common functionality and infrastructure, as well as a governance model known as the collaboration cycle. The following section gives a high-level description of the development process, and pointers to relevant parts of VA.gov platform documentation. 

A couple interesting details to be aware of:
1. The VA.gov platform is itself still evolving. It grew organically out of a single team building the Vets.gov site. A lot of the current platform efforts are geared towards letting VFS teams work in a more autonomous, self-service manner.
2. Most VFS teams are building a veteran-facing application on VA.gov but don't have much control over the upstream dependencies that actually fulfill the business process or act as the system of record for data. The MHV teams building in this ecosystem will be in the interesting position of having control over their upstream dependencies, because the current MHV services and APIs will continue to exist in that role. 

### Architecture
  - React Frontend
  - Rails API proxy layer
  - Backing services/API tier built in MHV stack continue to exist. 
 
### Building the frontend - what's involved
* As of now (March 2022), VA.gov frontend applications are built as single page applications using the React+Redux framework. 
* VA.gov frontend code is located in a [mono-repo](https://github.com/department-of-veterans-affairs/vets-website/) that is continuously deployed to lower environments (dev/staging) with a scheduled daily deploy to production. 
* So, a typical workflow for moving health features to VA.gov will consist of a team establishing one or more new [features](https://depo-platform-documentation.scrollhelp.site/developer-docs/Adding-applications-and-features.1847591039.html) (widgets or full-page applications) to the vets-website repository, then building out the relevant functionality as a series of React components and screens with navigation between them. There is shared utility code to help with making API calls and incorporating analytics. 
  * There is a code generator utility to help get a new feature established.
  * The design system provides some standard pre-built UI components, but since the health features are feature-rich, new components will likely need to get built. 
* [Platform website (frontend)](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/)

### Building the backend proxy - what's involved 
* The VA.gov frontend uniformly talks to the API served at api.va.gov. This API is in turn a facade or proxy in front of several dozen VA upstream systems. 
* As of now (March 2022), VA.gov backend is implemented as a monolithic Ruby on Rails application. 
* For a typical team building a new integration with an upstream system, they need to build one or more API controllers to expose the relevant API endpoints to the frontend, and an adapter/integration layer that can interact with any relevant upstream systems.
  * Within that pattern, there are variations - some upstream integrations are synchronous, some are asynchronous. Some are largely pass-throughs to a single upstream, others are doing significant orchestration among multiple systems. 
* For the MHV features, there is significant existing code to leverage, so building the API facade will not be starting from scratch.
   * API controllers still exist for the previous implementations of SM/RxRefill/Health Records that existed on vets.gov several years ago.
   * The mobile app team has built mobile-specific API controllers to serve their application.
   * Both of these rely on a shared adapter integration that allows easy invocation of MHV's APIs and handles the details of establishing and maintaining a user session token. 
* So, the workflow here will consist of:
  * Refreshing/updating the vets.gov-era API controllers on a feature-by-feature basis to reflect any new capabilities or optimizations that are needed.
  * Possibly refactoring those API controllers into a standalone Rails engine for better maintainability. 
  * Staying in contact with the mobile application team to ensure that the shared dependency on the adapter code does not result in any conflicts.
* For the most part, since MHV's APIs are already RESTful and well-structured, the API facade implementation is pretty straightforward and will represent a smaller share of the engineering effort compared to the frontend implementation work. But it should still be accounted for. 

### Content management - what's involved

### Collaboration cycle 

### Upcoming changes


