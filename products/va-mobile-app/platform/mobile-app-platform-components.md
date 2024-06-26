# Flagship Mobile App Platform Components

The term "platform" is overloaded and means different things in different contexts and to different people.  This document enumerates the processes and technology that make up the Flagship Mobile App and group them into areas that must be owned by the core mobile team, those that will probably belong to the core mobile time for the near future and those that can be owned by experience teams.


## Platform Components

These are things that _must_ be owned by the core mobile team.  Note that these things require the core mobile team have both frontend _and_ backend engineering expertise.

- Apple and Google developer accounts
- Apple and Google app store listings
- management of the [va-mobile-app](https://github.com/department-of-veterans-affairs/va-mobile-app) repo
- management of the mobile API module in the [vets-api](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/mobile) repo
- build and CI pipelines
- internal build distribution (e.g. TestFlight)
- app and mobile API quality assurance
- bug and crash triage
- app release management
- app development languages and frameworks
- app library and dependency management
- app OS version updates
- app development tool updates
- app-side feature flagging infrastructure
- global navigation (i.e. login flow, tabs and main nav)
- push notification registration and app-side infrastructure
- app analytics infrastructure
- mobile authentication and biometrics
- mobile deep linking infrastructure
- global app resource management
    * (ensure that teams are not abusing network bandwidth, battery, notifications, etc.)
- defining standards and governance for mobile
- mobile design & eng collab cycle oversight


## Core Mobile Team Components

These are things that _could_ be owned by other teams in the future but will probably belong to the core mobile team for the time being.

- mobile developer onboarding and offboarding (i.e. accounts and access)
- the mobile design system
- mobile content
- mobile information architecture
- UI test automation
- final code review
- overall mobile analytics
- login flow
- home screen
- profile view


## Experience Components

These are things that can be owned by experience teams, but will default to the core mobile team when experience teams lack mobile development capacity.

- health experience
    * appointments
    * messages
    * prescriptions
    * vaccine records
    * (future health features on mobile)
- benefits experience
    * disability rating
    * claims
    * letters and documents
    * (future benefits features on mobile)
- payments experience
    * payment history
    * direct deposit
    * (future payments features on mobile)
- feature use analytics
- feature area bug fixes
- feature content
- backend integration with upstream services
