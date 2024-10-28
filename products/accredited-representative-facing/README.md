# Accredited Representative-Facing (ARF) Team

## About ARF

The Accredited Representative Facing (ARF) team, part of the Accredited Reps Crew within the Office of the Chief Technology Officer (OCTO) Benefits Portfolio at the Department of Veterans Affairs (VA), supports Accredited Representatives in their work with Veterans.

See the [VA Organigram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1678236223248/ef60b22feff4aa22c594256683b81988abc1f181?invited=true&sender=u44da4f823ec94118a7079396) (Mural) for a visual on where ARF sits within this organization.

## Mission

Our mission is to create an accessible, modern, and secure online system for [Accredited Representatives](https://www.va.gov/resources/va-accredited-representative-faqs/). This system is called the **Accredited Representative Portal (ARP)**. Through ARP, we aim to streamline the use of digital forms, providing a faster and smoother experience for both representatives and the Veterans they serve, ultimately improving the overall VA experience.

We have focused on 3 main features or work streams within ARP: [Form 21a digitization (representative accreditation)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/21a-digital-accreditation.md), [Form 21-22 (power of attorney) accept/decline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/21-22-power-of-attorney.md), and [contact information updates for accredited representatives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/contact-information-updates.md). Because there were many external dependencies that influenced which feature(s) might be released first, we designed each of these features separately, knowing that eventually they would live together within ARP, along with other features like claims management. 

## Where to find our work

- [#benefits-representative-facing](https://dsva.slack.com/archives/C05SUUM4GAW) OCTO Slack channel
- [GitHub repo for documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing) (this repo; see the [product](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/product-info), [engineering](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/engineering), and [research/design](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research) folders for discipline-specific work)
- [GitHub repo for frontend work(vets-website)](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/accredited-representative-portal)
- [GitHub repo for backend work (vets-api)](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/accredited_representative_portal)
- [Sharepoint folder](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/032024%20VSOR%20User%20Testing?csf=1&web=1&e=nBcDcq) within the Benefits Portfolio Sharepoint
- [GitHub board](https://github.com/orgs/department-of-veterans-affairs/projects/1471/views/7)
- [Mural folder](https://app.mural.co/t/departmentofveteransaffairs9999/r/1613770853903?folderUuid=ec617166-2771-4165-a134-39e239f3a045)
- [Figma project](https://www.figma.com/files/team/1278375444205744118/project/176208173/Accredited-Representatives?fuid=1142566432181786950) (shared with our sister team, ARM)
- [Speadsheet of our team Slack canvases](https://dsva.slack.com/docs/T03FECE8V/F06HU14UKQC), which includes some internal team meeting notes (Slack; must be accessed via the OCTO/DSVA Slack workspace)
- [Google Drive folder](https://drive.google.com/drive/folders/0AHtMEJhzWhvjUk9PVA) (requires permissions request)

## Primary work streams

The paragraphs below summarize our 3 main work streams. Proposed next steps for each are included in the pages linked to at the end of each summary.

### Form 21a digitization (representative accreditation)
Before attorneys or claims agents can help Veterans with claims, they need to become accredited through VA. To become accredited by submitting the Form 21a. Office of General Counsel (OGC) uses this form to verify the applicant’s credentials and reputation. Claims agents then need to complete a written test verifying they have sufficient knowledge of the claims process.

This form is currently a paper form. OGC would like to cut down on the time needed to process the form by digitizing it. ARF began this process and documented next steps and relevant resources on the [21a Digital Accreditation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/21a-digital-accreditation.md) page.

### Form 21-22 (power of attorney) accept/decline
The first work stream our team tackled was Form 21-22 (power of attorney) accept/decline. In order to work with an accredited representative, a Veteran must file Form 21-22, which gives the representative limited power of attorney. VA is looking to streamline the process through which accredited reps can accept Form 21-22. We envision this being one of the first features released within ARP. 

ARF spent the most time working on this work stream, but eventually broadened our work to include other work streams, described below. Our research, design and engineering for 21-22 is documented on the [Form 21-22 (Power of Attorney)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/21-22-power-of-attorney.md) page.

### Contact information updates for accredited representatives
Veterans and others can access information about accredited representatives (i.e. VSOs, attorneys, claims agents) on the Find a Rep tool and the OGC Accreditation Search. The information on these tools is often out of date. Updating contact information is a highly manual process managed by the Office of General Counsel (OGC). ARF designed a feature for the portal that we believe will be more efficient for both representatives and OGC, leading to more reliable information for Veterans. ARF began this process and documented next steps and relevant resources on the [Contact information updates](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/contact-information-updates.md) page.

## Understanding our work

In addition to the above content, the below files may be helpful in understanding our work and how we created it:

- [Accredited Representatives FAQ](https://www.va.gov/resources/va-accredited-representative-faqs/) (VA.gov)
- [ARP Team Jargon](/products/accredited-representative-facing/product-info/team-jargon.md) (Github)
- [ARM glossary of terms and their definitions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/terminology-definitions.md) (Github; note that Accredited Representative Management [ARM] is our sister team that works on similar products, but for the Veteran-facing experience)
- ARF personas (Mural):
  - [VSO representatives](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709236473099/7a69ce07dbe58af30f1954470bebbe59b7bf1160?sender=u8cf3f08a008c2b61ad621433)
  - [Accredited attorneys](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717533456497/60064424f651818203ff49ac43d6fb9f0f2bccac?sender=u8cf3f08a008c2b61ad621433)
  - [Accredited claims agents](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718731869465/cf73b89eddb92c604d292554a31e503f7ce5d982?sender=u8cf3f08a008c2b61ad621433)
- [ARF Team Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1720019177037/1918bcb5dac0dab8a8103395aef7c9ddb347d6e6?sender=u2a4240a640b257ce33545495) (Mural; last updated in July 2024) 
- [ARF Pilot Decision Record](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Repr[…]x?d=waab14a59eb53458c9a3f01ba6660d290&csf=1&web=1&e=c3oxLK) (Sharepoint)

## Next Steps
- Recommended next steps for each work stream are listed on the overview page for each respective work stream:
  - [Form 21a digitization (representative accreditation)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/21a-digital-accreditation.md)
  - [Form 21-22 (power of attorney) accept/decline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/21-22-power-of-attorney.md)
  - [Contact information updates for accredited representatives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/contact-information-updates.md) 
- Also see the [High-Level Next Steps for ARF Engineering](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/docs/2024-9-ARF-engineering-next-steps.md) page

## The Team

### Core Members

- **Product Owner:** Jennifer Bertsch - [jennifer.bertsch@va.gov](mailto:jennifer.bertsch@va.gov)
- **Engineering Lead:** Sam Raudabaugh - [samuel.raudabaugh@va.gov](mailto:samuel.raudabaugh@va.gov)
- **Design Lead:** Lesley Ropp - [lesley.ropp@va.gov](mailto:lesley.ropp@va.gov)
- **Product Manager:** Candi Lemoine - [candi.lemoine@oddball.io](mailto:candi.lemoine@oddball.io)
- View the [full ARF team roster](https://github.com/orgs/department-of-veterans-affairs/projects/947/views/4)
- View the [Stakeholder Engagement Tracker](https://dvagov.sharepoint.com/:x:/s/vaabdvro/EQgtn4jarAlBrIzHbxXaRnsBwyQxcNxleqUfl6QEAuaxTA?e=kCEQav) (Sharepoint) and [Rep Facing Stakeholder Map](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696447082781/01a5c0865df77c97693ac51b36a61a989c8f9fba?sender=u2a4240a640b257ce33545495) (Mural)

### Stay Connected

Do you have questions or want to get in touch? Join us on the DSVA Slack channel: [#benefits-representative-facing](https://dsva.slack.com/archives/C05SUUM4GAW).

To reach out to ARF engineers on Slack, message @arfeng.

To tag engineers on Github PRs, tag: [benefits-accredited-rep-facing]([url](https://github.com/orgs/department-of-veterans-affairs/teams/benefits-accredited-rep-facing)https://github.com/orgs/department-of-veterans-affairs/teams/benefits-accredited-rep-facing)
