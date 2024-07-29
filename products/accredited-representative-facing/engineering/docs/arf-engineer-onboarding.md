
# ARF Engineer Onboarding

Welcome to the Accredited Representative Facing (ARF) Engineering team! This document serves as an onboarding guide for new team members, providing a comprehensive overview of our projects, resources, and key documentation. By following the steps outlined here, you'll gain an understanding of our mission, current projects, technical details, and where to find important information.

## High-Level Project Overview

- [ ] **Explore** [Accredited Representative Facing Homepage](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing). The ARF homepage outlines the team's mission at the Department of Veterans Affairs to enhance the VA experience through a user-friendly online system, showcasing resources like the MVP, roadmap, and a glossary of jargon. It also highlights key documentation, team agreements, and communication channels for engagement.
- [ ] **Reference** [VA Form 21-22](https://www.vba.va.gov/pubs/forms/vba-21-22-are.pdf) - Veterans use VA Form 21-22 when they want to have a Veterans Service Organization (VSOrg) help them with VA benefits or claims. The Veteran/Claimant information from this form is what will populate ARP's POA Request Table (using LH<>BGS<>CorpDB).

### Background Research / SEP Demos

The main bit is the SEP slides. Everything else is optional.

- [ ] **Reference** [SEP Slides](https://docs.google.com/presentation/d/1aDd9MVh-fg8bl040WeEAX_-0sZBnTntkgfhl1LEGxbg/edit#slide=id.g2b70658ac6f_1_65)
- [ ] **Skim** [Existing research mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695929155059/a302158eccec694ec7089bd6a02954421721987d?sender=ua71936780d8bc9a2d2b29830)
- [ ] **Watch** (optional) [SEP demo with DAV](https://dvagov.sharepoint.com/:v:/s/vaabdvro/Ee3gR_HqQ45CnY4OO5URNgYBJ-4haXSIx60F8Mmwz0MzPw?e=uJTLu9&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)
- [ ] **Watch** (optional) [SEP demo with VEO](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/SEP%20Demos/SEP%20Demo%20with%20CTO-20231208_111227-Meeting%20Recording.mp4?csf=1&web=1&e=a3abDH)
- [ ] **Reference**: [21a OIT/OCTO Sync Notes](https://dsva.slack.com/docs/T03FECE8V/F077TCRJTR6)

### Deeper Technical Discovery

- [ ] **Explore** [ADRs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/engineering/ADRs)
- [ ] **Explore** [ARF Engineering Canvases](https://dsva.slack.com/docs/T03FECE8V/F06HU14UKQC)
- [ ] **Reference** [Lighthouse Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705440431964/42ea71b5405cda62ed44e95794facd94d8d266a0?sender=u44da4f823ec94118a7079396)
- [ ] [Staging/WIP LH API Endpoints](https://staging-developer.va.gov/explore/api/benefits-claims/docs?version=current)
- [ ] [ARP Process Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709071900155/9d5180a5134a76b7a9a0165a6cd56a892ad1b6a1?sender=u44da4f823ec94118a7079396)
- [ ] [vets-api<>BGS](https://github.com/department-of-veterans-affairs/vets-api/pull/16125/files#diff-bbca7a11ca641e8acf38c4bbd5f52808ac6f6eba817f149b9c8ecbb742f04f2e) See @nihil2501's PR on how [vets-api will interact with BGS](https://github.com/department-of-veterans-affairs/vets-api/pull/16125/files#diff-bbca7a11ca641e8acf38c4bbd5f52808ac6f6eba817f149b9c8ecbb742f04f2e) to get/update POA requests.
- [ ] [ARP engine data points exploration](https://docs.google.com/spreadsheets/d/1qPpJQ5IVbAU9xQLiEz_WSqdFPfuUNuGTz8nQo7khB-A/edit#gid=0)
- [ ] [BGS API catalog](https://github.com/department-of-veterans-affairs/bgs-catalog/blob/main/VDC/ManageRepresentativeService/ManageRepresentativePortBinding)
- [ ] [VA Forms Library - Getting Started with the Forms Library](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-getting-started-with-the-forms-li)

## ARP Design

- [ ] [Figma ARP Mockups](https://www.figma.com/file/C3sdnDf8anVqXVdmiCWwq8/%F0%9F%9A%A7-Accredited-Rep-Facing?type=design&node-id=0-146&mode=design&t=ruvFknOZtWOzmZZP-0)
- [ ] [Figma 21A](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/Form-21a---Apply-for-Accreditation-(CA-%26-Attorneys)?node-id=10-10419&t=b9VYiJwClgSQ6TSl-0)

## Zenhub

The below are the key ARF engineering epics

- [ ] [Accept/Deny Power of Attorney Requests](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/78472)
- [ ] [ARF Authentication](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/75746)
- [ ] [ARF Digital 21a](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/83627)

## ARF Repositories

See [ARF's engineering README.md](/products/accredited-representative-facing/engineering/README.md).

## DSVA Slack Channels

- [ ] [#benefits-representation-engineering](https://dsva.slack.com/archives/C06ABHUNBRS)
- [ ] [#benefits-representative-facing](https://dsva.slack.com/archives/C05SUUM4GAW)
- [ ] [#benefits-engineers-lighthouse-collaboration](https://dsva.slack.com/archives/C063D0M76HX)
- [ ] [#benefits-portfolio](https://dsva.slack.com/archives/C055573C508)
- [ ] [#benefits-representation-management](https://dsva.slack.com/archives/C05L6HSJLHM)

### Initial ARF Project Docs

The below doesn't add much value beyond the ARF homepage but can provide historical context. I would say it's only worth skimming:

- [ ] **Skim** [Product brief](https://docs.google.com/document/d/17yZF0USxhFP6aCuy4QL-sf-fpBxUx7KwCoCDnvKIDNE/edit)
- [ ] **Skim** [White paper](https://docs.google.com/document/d/1BBaYQ3FEwsNbjCLw9s7hSMIIj42eDLvixX8w4yoCfiY/edit)
- [ ] **Skim** [Alignment mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1698946005167/83f2b6b79d93fcdd9d13ef9431167c9804852a9d?sender=u513eeac34c563a9cc9834127)
- [ ] **Skim** [What is an accredited representative?](https://www.benefits.va.gov/vso/)
- [ ] **Skim** [Glossary of Terms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/terminology-definitions.md)
- [ ] **Skim** [Open questions](https://docs.google.com/document/d/1qQjq5IEMGW4ZDPdDI22LuBY6JxFiuUzNgty4KqRX5q8/edit#heading=h.hc4r5od8cxww)
- [ ] **Skim**  - [Iterating on the Lighthouse API to support representative tools](https://docs.google.com/document/d/10uq87LqFWVPzr9J2eYeBmWnCqhv9xmchrndSeU6Kr0c/edit#heading=h.bwy7w8s83fxd) - [LH Slack canvas with commentary](https://dsva.slack.com/docs/T03FECE8V/F062AE3BJ4R)

## Output

- [ ] Optional: contribute to the [ARF Team Docs](products/accredited-representative-facing)
- [ ] Optional: improve this onboarding document for the next person
