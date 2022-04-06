# Health Apartment Mobile Shared Code Dependency

This document describes how the Health Apartment project (aka MyHealtheVet-on-VA.gov), can best manage shared code dependencies with the flagship mobile app. 

## Background
* The mobile app implements health features like secure messaging and prescription refill (in progress) that are powered by upstream APIs provided by MHV.
* These feature, along with health records, also exist on MyHealtheVet and are being migrated to live on VA.gov. The VA.gov implementation will follow the typical pattern of a React frontend, invoking API endpoints in vets-api, which in turn invoke upstream APIs provided by MHV. 
* So, we have two clients (mobile app and VA.gov) with overlapping but not identical concerns and implementation.

Given this, how can the teams working on these overlapping concerns best manage any shared code dependencies?

## Proposal
1. Mobile app continues to maintain mobile-specific API routes and controllers in its module in vets-api.
2. Current (mostly dormant) health APIs that live in the main Rails application get extracted into a second module that can be maintained by the MHV development teams as they join the VA.gov ecosystem.
3. The proxy code in `/lib/sm`, `/lib/rx`, `lib/health_records` and any other MHV related directories remains as is and becomes a shared dependency of the two teams.<br/>
  a. For accountability, we suggest adding a CODEOWNERS entry for each of these `lib` directories to ensure that **both** teams are required to approve any PRs that affect shared code.
4. For now, keep any decisions about caching in the module-specific code (i.e. in either mobile or health apartment module), since each client may have different requirements here. Longer term, 
5. For now, don't inline any capabilities around MHV account creation in the shared upstream integration library code. This code can be present in the shared library code, but it should be invoked explicitly by either the mobile app or VA.gov when needed. 

```
                          [team-specific]             [shared]
                       ┌─────────────────────────────────────────┐
                       │                                         │
                       │ ┌─────────────────┐                     │
                       │ │                 │                     │  ┌───────────┐
┌────────────────┐     │ │ Mobile module   │                     │  │           │
│                │     │ │ (controllers+   │          ┌───────┐  │  │           │
│   Mobile App   ├─────┤►│  models)        │  ┌──────►│lib/sm ├──┼─►│           │
│                │     │ │                 │  │       └───────┘  │  │           │
└────────────────┘     │ │                 ├──┤                  │  │           │
                       │ │                 │  │       ┌───────┐  │  │           │
                       │ └─────────────────┘  ├──────►│lib/rx ├──┼─►│           │
                       │                      │       └───────┘  │  │           │
                       │ ┌─────────────────┐  │                  │  │ MHV APIs  │
                       │ │                 │  │    ┌──────────┐  │  │           │
                       │ │ MyHealth module │  ├───►│lib/mhv_ac├──┼─►│ (upstream)│
┌────────────────┐     │ │ (controllers+   ├──┤    └──────────┘  │  │           │
│                │     │ │  models)        │  │                  │  │           │
│  VA.gov        ├─────┤►│                 │  │  ┌────────────┐  │  │           │
│                │     │ │ [currently in   │  └─►│lib/records ├──┼─►│           │
└────────────────┘     │ │  main rails app]│     └────────────┘  │  │           │
                       │ │                 │                     │  │           │
                       │ └─────────────────┘                     │  └───────────┘
                       │                                         │
                       │           vets-api                      │
                       └─────────────────────────────────────────┘

```
## Questions

1. **Would it be better to use the same API endpoints for both clients?**
Probably not:
* The mobile app uses a different authentication/token mechanism than VA.gov. There are ways that a shared API controller implementation could be modularized to use different auth, but it's still a factor.
* The mobile app has a different navigation model and typically does some amount of preloading of resources. This may or may not be a good fit for VA.gov.
* Most importantly - the mobile app necessarily has a different release cycle than VA.gov, because of the necessity of going through app store review processes. Because of this, it's important that the mobile app team can control when API changes that affect the app are released. This would likely cause conflict/delay with releasing features on VA.gov.

2. **Will this be tenable long term?**
The shared code in `lib` is a coordination point among the teams. Mostly this code is a straightforward reflection of the upstream capabilities in the MHV API, but there's still potential for subtly different requirements to arise. 
Longer term, the platform is moving in the direction of decomposing vets-api into independently-deployed applications. It's likely that both the mobile team and the MHV team will have separate deployable applications. At this point, we suggest refactoring the shared code in `lib` into a Ruby gem. By doing so, both teams can continue to contribute to this shared resource with appropriate code review process in place. The two applications will then be free to consume different versions of the Ruby gem as needed according to their respective release processes, further decoupling them. 



