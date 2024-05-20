# Historical Context

## Intent

This document captures key decisions made over the course of the CEDAR Identity contract as they relate to In-Person Proofing. It summarizes the timeline with a (hopefully) easy-to-digest level of detail, but also includes links to additional resources (presentations, documentation, reports, and more) that can provide greater detail if needed.

## Audience

Primarily VA Product Owners and stakeholders. Ideally the content in this document is still approachable for folks that don’t interact with IPP directly/day to day.

## Overview

### In-Person Proofing Historical Context (Narrative)

#### Original mandate

In-Person Proofing was established as a priority during the Discovery phase undertaken by MO and Frog Design between September and December 2022. Other priorities investigated included:

- **Priority 1: MHV coordinators in-person proofing (and remote video)**
- Priority 2: Non-Veteran User Roles focusing on caregivers, beneficiaries, and delegates
- Priority 3: Inherited proofing/migration of MHV users to Login.gov
- Priority 4: Security Keys as an MFA option distributed during in-person proofing
- Priority 5: TAP curriculum evaluation

#### **Solutions & approaches considered**

Between December 2022 and April 2023, the team focused on investigating inherited proofing and the communications campaign for notifying Veterans (and the VA at large) of the deprecation of DS Logon and My Healthe Vet.

In Person Proofing as a service kicked off on April 4th, 2023 ([IPP Kickoff deck](https://docs.google.com/presentation/d/1tK3FUQBtTxmKx_kqluA9PC8tt239-nwD/edit#slide=id.p1)). It raised a few risks, including considering existing tools, collaborating with MHV coordinators and Login.gov, and making changes to existing databases.

#### **Process to get to solution & service flow design**

Starting with IPP kickoff in April 2023, the team developed the service flow in addition to exploring paths to supporting that service.

Targeted at answering questions like:

- What resources are involved (People, teams, systems)
- How will they interact
- What pre-existing infrastructure at the VA could be utilized to support these interactions

The goal was to test In Person Proofing as a service/concept. And that, coupled with not knowing who will eventually own the service (VA? Login.gov?), led to a focus on building on or integrating with pre-existing systems–instead of building a standalone custom software solution.

MO explored the following solutions:

##### > Update the identity toolkit to support IPP

The identity toolkit is a tool owned by Identity Access Management (IAM), it is not open source, so there was no way for our team to make direct contributions to it. We asked if the IAM team could make changes if our team could not. Our understanding is the IAM contract was at critical levels of funding (or out of funding left) to make changes; so an enhancement to support In-Person Proofing would not be approved. We had prior data extract requests for credential reporting that would remain open for up to several months. So relying on a code change (much more complex and involved than a data extract) would have been extremely risky from a dependency perspective.

##### > Build off of Login.gov’s In Person Proofing Pilot at USPS

Login.gov’s USPS pilot (and current solution) is essentially using USPS’s Informed Delivery system, which is a legacy system that USPS is not enhancing. Deploying that solution to a VA facility would not be possible.

Further the USPS system only accounts for the document authentication piece of the flow, the rest of the IAL2 flow still needs to be completed online at Login.gov.

##### > Implement service kiosks at VAMCs

We determined based on discovery research that this would not be the most accessible or feasible solution due to cost and finding a secure space for the kiosk at a VA medical center

##### > Implement a 3rd party solution for proofing

Enabling IdentoGO by IDEMIA - a digital service that uses fingerprinting for verification. This service would require access to extra technology which would incur additional costs thus lowering the feasibility of the service implementation at scale.

#### Emergent Plan (current timeline)

Given restrictions on alternative options, VA PO John Rahagi and MO decided to pursue a custom software solution for pilot that supports the following requirements:

- Identify a Veteran’s Login.gov account to move from IAL1 -> IAL2
- Use Identity toolkit out of the box (not integrated directly, i.e. MHV Coordinator “swivel chair” between the IPP application and Identity Toolkit accessed locally on a VA computer)
- Meet identity assurance criteria (IAL 2)
- Either integrate with Login.gov directly or store the credential packet for integrating at a later date
- Pilot quickly

This plan and service blueprint were workshopped with NIST, Login.gov, and VA POs (John Rahagi and Tom Black) on July 27th, 2023 to verify compliance with IAL2 and expectations for what the service would encompass.

After this initial workshop, the concept of In Person Proofing was further refined into the [Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/products/in-person%20support/product-brief.md) that is the current source of truth for the IPP Pilot.

Usability test results

- [Literature Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/research/In-Person%20Identity%20Proofing%20Literature%20Review_11.9.2023.md)
- [Subject Matter Expert Interviews](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/research/2023-12-in-person-proofing-pilot-SME%20Interviews) (December 2023)
- [Usability testing with Veterans](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/research/IPP%20Usability%20Testing/2023-12-in-person-proofing-pilot-Veteran-usability-test) (December 2023)
- [Usability testing with MHV Coordinators](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/research/IPP%20Usability%20Testing/2024-1-in-person-proofing-pilot-proofing-agent-usability-test) (January 2024)
- ([Mid January sprint demo](https://docs.google.com/presentation/d/1u1Z8_eI9GDZv0QcVYkQvZCAj0xVz6rLY/edit#slide=id.g2b013ced771_0_11))
