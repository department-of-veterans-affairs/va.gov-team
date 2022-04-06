# VSA 10-10CG Mulesoft integration hub

<br>


## Table of Contents
[Background](#feature-background)

[Engineering artifacts](#engineering-artifacts)

[Zenhub epics and Process milestones](#zenhub-epics)

[Team members](#team-members-that-worked-on-this)

<br>

## Feature background
VA.gov used to interface directly with
CARMA (Salesforce) for 10-10CG form submissions and document uploads. The problems that seeded the need for the Mulesoft Proxy were:
- Salesforce latency
- Salesforce API (breaking) changes

The solution was to place the Mulesoft Proxy in between VA.gov and Salesforce so that Mulesoft could:
- manage API updates between itslef and Salesforce, taking the burden off the VA
- asynchronously queue requests and provide a faster response to the VA frontend

User story: As a va.gov user I would like to know when my online 10-10CG has been successful so I don't resubmit duplicates.

## Feature Flipper
`/flipper/features/caregiver_mulesoft`

## Engineering artifacts
- [Architecture design](https://images.zenhubusercontent.com/5fb57aafa11eae0592a15cb1/223bdd9f-e95a-4611-b294-7e4f4cd480a6)
- [CARMA + Mulesoft integration roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/roadmap%20-%20carma%20mulesoft%20integration.pdf)

## Zenhub epics
- [Prepare for and Transition 10-10CG from direct-to-Salesforce to MuleSoft-to-Salesforce](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/31307)


## Process milestones
Include notes about which Platform process was in use when this feature was in design and development.

- [Collaboration Cycle Kickoff 10-10 Caregivers, Mulesoft Integration](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/34055)
- [Security review]
- [MS UAT (Techy & Business) of Mulesoft](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/35125)
- Mar-29-2022: Enabled Feature Flipper in prod at 25% of the time
- Mar-30-2022: Got approval from business for 100% after no errors seen by MULE, DTC, or VA.gov


<br>

## Team members that worked on this
- James Childers -- (Beginning Phase) Backend Engineer
- Dillo Raju | dillo.raju@va.gov -- (Middle Phase) Backend Engineer
- Kevin Musiorski | Kevin.Musiorski@va.gov -- (Final Phase) Backend engineer
- Mickin Sahni | Mickinjit.Sahni@va.gov  -- Product lead
- Sharon Kasimow | Sharon.Kasimow@va.gov -- Product Manager
- Lisa Zapson | lisa.zapson@va.gov -- Frontend engineer

<br>

---
