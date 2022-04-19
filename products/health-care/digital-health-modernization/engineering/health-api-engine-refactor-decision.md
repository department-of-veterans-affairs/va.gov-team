This document serves as a decision doc for determining whether to refactor the existing MHV-related APIS into a Rails engine.

## Background
* In ~2017 time frame, Vets.gov exposed several health features - secure messaging, prescription refill, and health records. Multiple API resources were exposed in vets-api in support of those features - including but not limited to `/v0/prescriptions`, `/v0/messaging/health/folders`, `/v0/messaging/health/messages`, `/v0/messaging/health/triage_teams`, `/v0/health_records`.
* There was no concept of modularization at the time, so all of these were built as API controllers and models within the main Rails application, and with multiple upstream integration adapters in `/lib`. 
* Since then, some teams have used Rails Engines to better isolate their code from the main application. This doesn't make a big difference at runtime, but does allow for teams to more easily claim responsibility for a set of functionality via GitHub's `CODEOWNERS` mechanism.
* Also since then, the mobile app team established a set of mobile-specific API endpoints that overlaps with the above feature set. These API resources _are_ built in a Rails engine under a mobile-specific API sub-route. 
  * While the API controllers and models are mobile-specific, the upstream integration adapter code used to interact with MHV's upstream services is the same shared code under `/lib`, such as `/lib/sm` for secure messaging.
  
## Question
Given that MHV development teams are going to come aboard and participate as VFS teams to once again surface health functionality on VA.gov, do we want to refactor the current API controllers into one or more Rails engines, or leave it in the main Rails application? 

## Options
### 1. Leave controller code as-is
* Pro: No unnecessary work. The API controllers may require some minor functional tweaks during the course of feaure development. but these are believed to be minimal. In other words the bulk of the upcoming active development is expected on the frontend, rather than the backend. 
* Pro: vets-api is potentially going to be split apart into independent runtime applications. Depending on how that work proceeds, the interim step of refactoring into a rails engine might be redundant. 

* Con: Painful to establish CODEOWNERS ownership over a large number of files scattered throughout vets-api. Hard to maintain this mapping if any files are added or moved.
* Con: Less convenient to run unit/integration tests on subsets of code in the main Rails application vs. in an engine. 

### 2. Refactor into a single engine
Move all of the MHV-related controllers and models for VA.gov use into a single engine. This would consolidate all the code owned by the MHV development org into once place, controlled by CODEOWNERS.

* Pro: Straightforward to map this engine's directory to CODEOWNERS. This gives the MHV development org a nicer onboarding and development experience. 
* Pro: If vets-api is split apart, it might be easier if the set of related code is already consolidated into an engine. Aka is this premature optimization or helpful preparation? 

* Con: One of the health features, VAOS, is already in its own engine, so this would leave the steady state for the health features as "VAOS" and "everything else health related". However, VAOS does not have MHV as an upstream dependency so you could argue this is "VAOS" and "everything MHV-related". 

### 3. Refactor into multiple engines
Since the MHV development org is split into multiple feature-aligned teams, it might make sense to reflect that and establish a Rails engine per logical service (SM/Rx/Health Records). 

* Pro: More granular mapping and establishment of ownership of specific teams to functionality.
* Pro: More consistent with VAOS - one engine per "big 4" application. 

* Con: More engines to set up. This is largely a mechanical process, but does have some implementation overhead.

### Notes
It's important to note that there will still be shared code:
* The code for MHV account creation, and the code to establish an MHV session token, is shared across these functional areas, so shouldn't be replicated in multiple engines.
* The upstream adapter code is shared with the flagship mobile app and shouldn't be duplicated. In a future state where vets-api is split up, we'll need to consider how to share this code (e.g. via a versioned Ruby Gem?), but this is a more general problem for vets-api where a number of upstream integrations are shared across applications. 

Also important to note that there is one area of VA.gov that is using the current main-app API controllers - the "My VA" dashboard calls a single secure messaging operation (to determine if any unread messages are present) and a single RX refill operation (to determine if any prescriptions are refillable). If any API refactoring occurs, these use cases should be accounted for. 

## Decision
Consensus seemed to be to refactor into a single module. 
