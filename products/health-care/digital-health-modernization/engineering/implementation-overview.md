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
* Becauese VA.gov is integrated with many other systems at VA, it opens the door to further integration among features, such as embedding disability rating on the health landing page or unifying veteran profile information in one place.

## Building on VA.gov
### Architecture
  - React Frontend
  - Rails API proxy layer
  - Backing services/API tier built in MHV stack continue to exist. 
 
### Building the frontend - what's involved
- React/redux stack
- vets-website mono-repo
- 

### Building the backend proxy - what's involved 
- Facade model
- Rails - vets-api mono-repo
- Existing MHV integration code
- Shared dependency with mobile

### Content management - what's involved


### Collaboration cycle 


## Phased Migration Approach
- Feature by feature
- Options for building and deploying but not releasing
- Options for soft launch/phased release
- Pattern for communicating migration to users and eventually retiring deprecated UI entry points. 
