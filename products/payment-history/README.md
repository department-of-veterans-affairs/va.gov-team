# My Payment History
`WIP` [working doc in team folder](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-payment-history/)
- GitHub Label: [vsa-ebenefits](https://github.com/department-of-veterans-affairs/va.gov-team/#workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vsa-ebenefits&repos=133843125&showPipelineDescriptions=false)
- Slack channel: [#vsa-ebenefits](https://dsva.slack.com/channels/vsa-ebenefits)
- Old links:
  - [My Payment History - http://www.ebenefits.va.gov/ebenefits/#](#)
- Staging link: https://staging.va.gov/#/payment-history/
- va.gov link: TBD
- [Current Mockup](#)

### Table of Contents

# Executive Summary
- [Abstract](#abstract)
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Team](#team)
- [Resources and Documentation](#resources-and-documentation)
- [Screenshots](#screenshots)

---

# Executive Summary

## Abstract

A commonly used feature on EBN is viewing My Payment History. It is simply a view task that displays a list of payments made to the Veteran and offers the ability to look at some details within each.

## User Problem Statement

- I am a Veteran who needs to review my payment history , so that I can ensure they are correct, I haven't missed any and am informed about each in case I need to make a change affecting the benefits I deserve.

## Solution Goals

The eBenefits Team will migrate this functionality from EBN to the modern front door at VA.gov, conducting research along the way to make sure Veterans are able to achieve their goals in the quickest and most equitable way possible.

### User Goals

- **Veterans:** Review information about payments sent to me from the VA. Practically: View a list of payments and returns in a sortable list that allows easy access to further details upon selection within an easy to use environmnet on VA.gov.  In the event that something is incorrect, there is a clear path to rectify.

### Business Goals

- Increase exposure of payment information to the Veteran so that corrections can be made more readily

## Assumptions

- Veterans can have hundreds of payments, so there should be some way to paginate/ filter top columns
- We assume "returned payments" arrive from the same service as regular payments
- Endpoint is theoretically BGS `PaymentInformationService` at http://bepdev.vba.va.gov/vrm-ws/PaymentInformationService?WSDL
  - ESCP request reproved as of 20200212

### Product Assumptions: Veteran User Group

- I can find a page to view my Payment History
- I can see a list of my payments
- I can see a list of my returned payments
- I can read information about what payments are displayed in these lists, and what payments are not, and what to do if I think something is wrong
- I can sort the list of payments by date, amount, and type
- I can click on a payment to see details about that payment

## Requirements and Constraints

- Only a logged in, LOA3-proofed, Veteran should be able to find and view their payment history
- TODO: Add more

## Solution Approach

- Review other payment specific processes
- Perform any necessary supplementary research how Veterans use the Payment History feature on EBN
- Mock/update existing designs of Payment app
- Audit existing BGS endpoints and build connections frontend
- Write e2e tests
- Perform comprehensive usability
- Follow launch checklist

## Value Propositions

### User Value

**Veterans:** Viewing payment history clearly with a clear path forward in the event that a correction needs to be taken.
**Admin Profesionals:** Supply an accurate list of payments and returns and make them more available to the Veteran so action can be taken sooner.

*"If I can see there is an issue within my payment or return history, I can correct it sooner and not have funds misrepresented."*

### Business Value

1.
2.
3.
4.

## OKRs & KPIs

**Objective 1:** Greater number of Veterans can view their payment history.
- Key Results 1: Data shows the number of views of the payment history application has increased since migration; statistically significant increase in traffic
- Key Results 2: Data shows more requests for corrections are being successfully submitted; statistically significant increase in number of approved submissions
---

# Implementation Info

## Status

**March 2020**
- Discovery

## Solution Narrative
- March 2020: Discover how the current application works, analyze existing products/features that might be informatitive, start mockups

## Team

- VA Executive Sponsor`*`: Paul Schute(?)
- VA Policy Expert(s):
- DEPO`*`: TBD
- Product Manager`*`: Jacob Worrell
- Design Lead: TBD
- Eng Lead: TBD
- VA Web Comms Partner:
- VA Contact Center Partner(s): TBD
- Production Testing Partner(s):
- Designer(s): TBD
- Content Writer(s): None

### API Team
- Product and Project: Jacob Worrell
- Front-end Engineer(s): TBD
- Back-end Engineer(s): TBD

### Veteran Facing UX Team
- Product and Project: Jason Wolf
- Front-end Engineer(s): TBD
- Back-end Engineer(s): TBD


`*` = approval required for launch

## Resources and Documentation

- [Discovery](#)
- [Research and Design](#)


