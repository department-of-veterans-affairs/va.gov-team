# Veteran eFolder Product Outline
- GitHub Label: eFolder
- Slack channel: Dragons-team
- Vets.gov link: tbd
- Demo video link: tbd

---

### Table of Contents

# Executive Summary 
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

## User Problem Statement

A frequent Veteran complaint is that VA should already know "xyz" about them, and they have no visibility into what info VA does have, and what they don't have. It makes it hard when applying for a variety of benefits (both within the VA and outside the VA) which require certain documentation or proof of service type documentation, and Veterans don't have clarity into what docs VA already has or how to get it.

## Solution Goals

### User Goals

- See all the documents VA has about me
- Understand what the documents are / what they mean
- Find a particular document easily
- Download documents
- Understand what to do if I believe there's a doc missing

*Future*
- Upload new documents to be reviewed for entry into eFolder

### Business Goals

- Contribute to 60-day claims goal
- Improve transparency and trust with customers (Veterans)
- Increase online engagement
- Reduce admin costs of contact center volume, mailing paper documents

## Assumptions

- Seeing all documents w/current metadata available to guide the experience, will cause more trust and confidence than anxiety and frustration
- VA is OK assuming the risk of Veterans seeing potentially sensitive docs, or docs that aren't theirs due to manual human error of doc placement and tagging within VBMS

## Requirements, Questions, Constraints

- Need to know existing VBMS metadata available to use in API filtering, and in interface display
- Need an updated API to deliver the docs from VBMS to the user interface
- Need to build an interface on a modern platform, so that iteration as we learn from users can be fast
- Need to encorporate requirements from related efforts:
  - **Digital electronic communications**: allowing Veterans to opt in to get award information via online doc, instead of in the mail
    - Need a connection to a notification system, so that if a Veteran gets a message about an update, they can be taken directly to the correct document
    - Need ability for VBMS to store award docs w/appropriate metadata and doc type settings
  - **Apply for Disability Compensation**: allowing Veterans to easily/successfully submit their 526 online
    - Need to tag docs from eFolder that a Veteran wants to include as evidence in their claim

## Discovery Takeaways

TBD

## Solution Approach

TBD

#### User Value

#### Business Value

## KPIs

---

# Implementation Info

## Status

- Alignment conversations between DSVA and OBPI
- Scheduling Discovery kickoff
- Identifying appropriate implementation team

### Roadmap
1. Align (between DSVA and OBPI) on the appropriate team to tackle the work (Unicorns + VBMS + OBPI + who else?)
2. Kickoff Discovery with the Dragons team
3. Discovery (document tech requirements, and solution approach)
3. Test design with users to validate the assumptions above
4. Decide if we proceed with the build, or if adjustments to VBMS or the API are necessary to provide more good than harm
5. Build!
6. Usability testing in staging
7. Check the work (security scan, load testing, 508, analytics setup, monitoring setup)
8. UAT
9. Launch plan (comms, go/no-go, contingencies)

## Solution Narrative

TBD

## Team

- VA Executive Sponsor `*`: Robert Allendale
- VA Policy Expert(s): ? VBMS? Melissa Rebstock? Who else?
- VA Digital Strategist(s) `*`: Steve Kovacs
- Product Manager `*`: Ben Barone
- Design Lead: Mel Woodard
- Eng Lead: Ben Shyong
- VA Web Comms Partner: ?
- VA Contact Center Partner(s): ?
- Production Testing Partner(s): ?
- Designer(s): Lauren Alexanderson, Samara Strauss
- Content Writer(s): Danielle Thierry
- Front-end Engineer(s): Ben Shyong, Nick Sullivan
- Back-end Engineer(s): Harry Levine, Emerson This, Ryan Baker

`*` = approval required for launch

## Resources and Documentation

TBD

### How to access in staging
- Link:
- Password protection info:
- User authentication info:

### Screenshots
#### Before
#### After
