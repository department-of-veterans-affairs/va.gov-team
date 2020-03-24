# Apply for Chapter 36 Benefits (VRE Education and Career Counseling)

- GitHub Label: [vsa-ebenefits](https://github.com/department-of-veterans-affairs/va.gov-team/#workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vsa-ebenefits&repos=133843125&showPipelineDescriptions=false)
- Slack channel: #vsa-ebenefits
- Staging EBN link: https://sqa.eauth.va.gov/ebenefits/vre
- va.gov link: tbd

## WIP

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

Veterans and related claimants can apply for "Chapter 36" benefits, or Education and Career Counseling benefits, through the TED (Transition and Economic Development) office. This is a very simple application for which we should attempt to prefill all possible fields.

## User Problem Statement

eBenefits is broken.

## Solution Goals

### User Goals

- **Veterans:** Apply for Education/ Career Counseling at the VA.

### Business Goals

- Deprecate eBenefits, meet TED office goals of better online submissions

## Assumptions

- Product will submit form to Central Mail, no other BE integration
- LOA3 users may be able to apply with one click

## Requirements and Constraints

- Application should be available for all users: UNAUTH, LOA1, and LOA3

## Solution Approach

- FAST FAST FAST. Translate form to VA.gov, prefill logged in user info, submit to central mail.

## Value Propositions

### User Value

I can apply for CH36 benefits quickly and without mailing in a form or visiting a RO.

### Business Value

1. Sunset EBN
2. Increase CH36 applications


---

# Implementation Info

## Status

**March 24, 2020**  
- Kickoff with platform  

## Solution Narrative
- TBD

## Team

- VA Executive Sponsor `*`:
- VA Policy Expert(s):
- VA Digital Strategist(s) `*`:
- Product Manager `*`: 
- Design Lead: 
- Eng Lead:
- VA Web Comms Partner:
- VA Contact Center Partner(s):
- Production Testing Partner(s):
- Designer(s):
- Content Writer(s):



`*` = approval required for launch

## Resources and Documentation

- Discovery
- [Research and Design](research-design/README.md)

## NOTES

Form 8832: https://www.vba.va.gov/pubs/forms/VBA-28-8832-ARE.pdf

