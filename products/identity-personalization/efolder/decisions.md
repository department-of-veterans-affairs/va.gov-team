# eFolder: Decision Points

_[Deliberative WIP]_

## Executive Summary

#### Where are we in the research phase? 

DSVA is midway into the research and discovery phase, targeting wrap for the second week in May.

#### What are the options we are considering?

1. Adapt eFolder Express for use on Vets.gov, porting over as a straightforward app to download the entire eFolder (possibly gating access through a "privacy portal" or some other side door, to set user expectations and elicit user agreements)
2. Adapt eFolder Express and its underlying tech (e.g. [connect_vbms](https://github.com/department-of-veterans-affairs/connect_vbms)) to fetch, render, and paginate the document manifesto, allowing simple browsing of individual documents in a Profile "Document Center"
3. Work with VBMS to build out a comprehensive new document management service API to be exposed to VETS-API, and by definition all downstream consumers
4. Work with existing EVSS APIs and contracts to further develop and integrate with VBMS-EVSS services.
5. Regardless of integration path, build reusable helper application to facilitate attaching documents to any online form directly from eFolder

(NB: There are other options which might arise as a result of research and discovery.)

#### What (if any) decisions need to be made?

1. Impact: Which of the available options correctly balances the needs of Veterans and their advocates, and the needs of the business?
2. Experience: Are there documents that cannot be made available to the Veteran, regardless of their presence in the eFolder? (E.g. business rules about delaying access to C&P exam results until a claim has been decided.) If so, what system should be used to screen/ redact those documents? What are other policy-level considerations of this sort?
3. Work: Whatever product design path is chosen, should we build or modify the underlying tech in house with our development contractor, or should we leverage the EVSS services and task those associated contractors to build or modify the APIs?
4. Schedule: How should feature deployment align with concurrent initiatives, such as [migration of VBMS services to the cloud](https://github.com/department-of-veterans-affairs/vbms-to-the-cloud)?

## Introduction

There is a clear and present need for a robust document management facility in the landscape of Veteran Facing Tools. Multiple research engagements have demonstrated that document self-service ranks among the most requested online features from both Veterans and their advocates. The reasons are varied, ranging from trust and self-advocacy to transparency to efficient and effective management of claims and appeals, but the overarching desire is undeniable.

## Policy Considerations

- What is the mandate for surfacing the "entire eFolder" at this point? Is the mandate contained in an internal memo, a regulation, or a public law?
  - [ ] Action item: Find recorded source of this policy and document it in this repo.
- Are all impacted parties briefed on this directive, and do they understand its implications? Are the various contact centers, for example, equipped to deal with questions about document self service?
  - [ ] Action item: Based on current understanding of the customer journey, draft a list of touchpoints and affected partners and catalog potential impact
- If, as has been proposed, VBA is "accepting the risk" of exposing the whole eFolder without robust human intervention (for document redaction et al), what are those exact risks -- and what are the proposed mitigations?
  - [ ] Action item: Work with VBA stakeholders to draft a catalog of risks and mitigations
- What documents should _never_ be exposed to Veterans and their advocates, whether or not they exist in an eFolder? Are there documents which could be viewed by one user "type," but not another?
  - Examples may include domestic abuse protection orders with spousal PII, or older military deployment orders that often have multiple other Veterans' PII
  - There are business rules around other document types, e.g. delaying access to C&P exam results documents until a claim has been decided
  - [ ] Action item: Work with VA stakeholders to catalog risky document categories, and what level of visibility each user type should have for each of these document categories
- To what extent does providing self-service document management or full eFolder download on vets.gov require ATO modification or the creation of new agreements?
  - [ ] Action item: Document the paperwork requirements of exposing the entire eFolder on vets.gov, wither as a discreet download or surfacing individual downloadable files

## User Considerations

- Who files Privacy Act requests, and why? What are they looking for? What are the motivating factors?
  - [ ] Action item: Synthesize user research from discovery with existing portfolio research, as well as eFolder Express and other claims and appeals research
  - [ ] Action item: Interview Veterans who have performed Privacy Act requests
- _If_ Veterans and advocates are looking for specific document management features, what are they?
  - [ ] Action item: Run paper tests and card sorts on existing concepts and against existing functionalities, such as eBenefits "My Documents"
- For eFolders with >250 docs (some users have >100k docs) what does meaningful document management even look like?
  - [ ] Action item: Research Veterans who have received large data sets (> 1k docs) and understand their motivations, mental models, and search methodologies
  - [ ] Action item: Perform competitive analysis on COTS document management systems geared towards single users
  - [ ] Action item: Concept out framework for goal-oriented management of large doc sets
- Which user "types" need access to eFolder on vets.gov? What is the lift in provisioning accounts to these granular types?
  - [ ] Action item: Based on current understanding of the customer journey, draft a catalog of personas who interact with documents, along with how each user type is currently represented in DoD/ VA credentialing systems

- General design questions: What do veterans and their advocates want to see in an interface? 
  - Which VBMS columns are useful?
  - Which columns are used by admins and should never be surfaced?
  - Can columns be added to VBMS?

## Schedule Considerations

- What is the business goal date for public availability of proposed feature sets?
  - [ ] Action item: Frame out detailed project schedule
- How does the migration of VBMS to the cloud affect front end development?
  - [ ] Action item: Sync with SRE team to integrate VBMS migration schedule to overall schedule, understanding risks and dependencies

## Technical Considerations [WIP]

- Confirm maximal use cases and maximum load possible on VBMS in its current and proposed environments
- What permissions are available through API? Do we need to provision CSS credentials ad hoc?
- See other technical considerations in the [migration of VBMS services to the cloud](https://github.com/department-of-veterans-affairs/vbms-to-the-cloud) project
- [WIP]


