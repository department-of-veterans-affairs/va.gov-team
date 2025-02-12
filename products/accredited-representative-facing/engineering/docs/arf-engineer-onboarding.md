# ARF Engineer Onboarding

## NOTE: Please update this document as you go through it! Let's make things easier for the next person onboarded to the ARF Team.

Welcome to the Accredited Representative Facing (ARF) Engineering team! This document is an onboarding guide for new team members, providing a comprehensive overview of our projects, resources, and critical documentation. Following the steps outlined here, you'll be able to understand our mission, current projects, technical details, and where to find important information.

## High-Level Project Overview

- [ ] **Explore** [Accredited Representative Facing Homepage](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing). The ARF homepage outlines the team's mission at the Department of Veterans Affairs to enhance the VA experience through a user-friendly online system. It showcases resources like the MVP, roadmap, and glossary of jargon. It also highlights vital documentation, team agreements, and communication channels for engagement.
- [ ] **Explore** [Glossary of Terms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/terminology-definitions.md)

## ARF Repositories

See [ARF's engineering README.md](/products/accredited-representative-facing/engineering/README.md).

## Deeper Technical Discovery

- [ ] **Explore** [ADRs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/engineering/ADRs)
   - [ ] The [ARF 21a Architecture Intent Document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/ADRs/arp-architecture-intent-meeting.md) is a key one to spend time with!
- [ ] **Explore** [Next Steps for ARF Engineers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/docs/2024-9-ARF-engineering-next-steps.md)
- [ ] **Explore** [ARF Engineering Canvases](https://dsva.slack.com/docs/T03FECE8V/F06HU14UKQC)
- [ ] **Explore** [Exercising BGS's POA request APIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/docs/exercising_BGS_POA_request_apis.md) - which will allow you to hit BGS from `vets-api` (see [diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709071900155/9d5180a5134a76b7a9a0165a6cd56a892ad1b6a1?sender=u44da4f823ec94118a7079396)). The ability to do this may not be of consequence depending on the [chosen 21-22 storage solution](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/technical-documentation/appoint-a-representative/poa_request_proposal.md#features-supported).

## ARP Design

- [ ] [Figma ARP Mockups](https://www.figma.com/file/C3sdnDf8anVqXVdmiCWwq8/%F0%9F%9A%A7-Accredited-Rep-Facing?type=design&node-id=0-146&mode=design&t=ruvFknOZtWOzmZZP-0)
- [ ] [Figma 21A](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/Form-21a---Apply-for-Accreditation-(CA-%26-Attorneys)?node-id=10-10419&t=b9VYiJwClgSQ6TSl-0)

## Zenhub

Below are the essential ARF engineering epics.

- [ ] [Accept/Deny Power of Attorney Requests](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/78472)
- [ ] [ARF Authentication](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/75746)
- [ ] [ARF Digital 21a](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/83627)

## DSVA Slack Channels

Join, and keep an eye on all of the below:
- [ ] [#benefits-representation-engineering](https://dsva.slack.com/archives/C06ABHUNBRS)
- [ ] [#benefits-representation-engineering-log](https://dsva.slack.com/archives/C06TTS0J4LV)
- [ ] [#benefits-representative-facing](https://dsva.slack.com/archives/C05SUUM4GAW)
- [ ] [#benefits-engineers-lighthouse-collaboration](https://dsva.slack.com/archives/C063D0M76HX)
- [ ] [#benefits-portfolio](https://dsva.slack.com/archives/C055573C508)
- [ ] [#benefits-representation-management](https://dsva.slack.com/archives/C05L6HSJLHM)
- [ ] [#arp-identity-integration](https://dsva.slack.com/archives/C06NBCMA7LL)

### Background Research / SEP Demos

The main bit is the SEP slides, which capture much of the functionality that must be built in ARP. Everything else is optional.

- [ ] **Reference** [SEP Slides](https://docs.google.com/presentation/d/1aDd9MVh-fg8bl040WeEAX_-0sZBnTntkgfhl1LEGxbg/edit#slide=id.g2b70658ac6f_1_65)

- [ ] **Watch** (optional) [SEP demo with DAV](https://dvagov.sharepoint.com/:v:/s/vaabdvro/Ee3gR_HqQ45CnY4OO5URNgYBJ-4haXSIx60F8Mmwz0MzPw?e=uJTLu9&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)
- [ ] **Watch** (optional) [SEP demo with VEO](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/SEP%20Demos/SEP%20Demo%20with%20CTO-20231208_111227-Meeting%20Recording.mp4?csf=1&web=1&e=a3abDH)


### Initial ARF Project Docs

The below doesn't add much value beyond the ARF homepage but can provide historical context. I would say it's only worth skimming for general awareness:

- [ ] **Skim** [Product brief](https://docs.google.com/document/d/17yZF0USxhFP6aCuy4QL-sf-fpBxUx7KwCoCDnvKIDNE/edit)
- [ ] **Skim** [White paper](https://docs.google.com/document/d/1BBaYQ3FEwsNbjCLw9s7hSMIIj42eDLvixX8w4yoCfiY/edit)
- [ ] **Skim** [Alignment mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1698946005167/83f2b6b79d93fcdd9d13ef9431167c9804852a9d?sender=u513eeac34c563a9cc9834127)
- [ ] **Skim** [What is an accredited representative?](https://www.benefits.va.gov/vso/)
- [ ] **Skim**: [21a OIT/OCTO Sync Notes](https://dsva.slack.com/docs/T03FECE8V/F077TCRJTR6)
- [ ] **Skim** [Open questions](https://docs.google.com/document/d/1qQjq5IEMGW4ZDPdDI22LuBY6JxFiuUzNgty4KqRX5q8/edit#heading=h.hc4r5od8cxww)
- [ ] **Skim**  [Iterating on the Lighthouse API to support representative tools](https://docs.google.com/document/d/10uq87LqFWVPzr9J2eYeBmWnCqhv9xmchrndSeU6Kr0c/edit#heading=h.bwy7w8s83fxd) - [LH Slack canvas with commentary](https://dsva.slack.com/docs/T03FECE8V/F062AE3BJ4R)
- [ ] **Skim** [Lighthouse Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705440431964/42ea71b5405cda62ed44e95794facd94d8d266a0?sender=u44da4f823ec94118a7079396)
- [ ] **Skim** [Staging/WIP LH API Endpoints](https://staging-developer.va.gov/explore/api/benefits-claims/docs?version=current)
- [ ] **Skim** [BGS API catalog](https://github.com/department-of-veterans-affairs/bgs-catalog/blob/main/VDC/ManageRepresentativeService/ManageRepresentativePortBinding)
- [ ] **Skim** [Existing research mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695929155059/a302158eccec694ec7089bd6a02954421721987d?sender=ua71936780d8bc9a2d2b29830)

## Output

- [ ] Suggested: contribute to the [ARF Team Docs](products/accredited-representative-facing)
- [ ] Suggested: improve this onboarding document for the next person
