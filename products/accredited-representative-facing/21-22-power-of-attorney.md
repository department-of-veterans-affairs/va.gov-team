# Form 21-22 (Power of Attorney) 

## Problem Overview

Many Veterans struggle to navigate the VA claims process, or want someone to help them through it. VA offers [accredited representatives](https://www.va.gov/resources/va-accredited-representative-faqs/), people who work outside of VA but are authorized to provide help with VA benefit claims to Veterans and service members, as well as their dependents and survivors. There are 3 kinds of representatives: Veterans Service Organization (VSO) representatives, attorneys, and claims agents. 

To work with an VSO representative, a Veteran must grant them power of attorney via [Form 21-22](https://www.va.gov/find-forms/about-form-21-22/). A VSO will then approve the power of attorney (POA) and gain access to the Veteran’s or claimant’s VA records. 

As shown in the [VSO Current State/Future State Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1701101229797/15c7e1a5a9d426a998eb634408ff1dd3f4f9bdd1?sender=u2a4240a640b257ce33545495), a VSO can accept Form 21-22 via [QuickSubmit](https://eauth.va.gov/accessva/?cspSelectFor=quicksubmit) (for physical/paper copies) or the Stakeholder Enterprise Platform (SEP, for digital forms submitted via eBenefits). Once a rep accepts a request in SEP, they are granted more-or-less instant access to a VA tool called VBMS, which lets the rep review the Veteran’s record and find evidence to support a claim submission. 

There are a few pain points with the above flow: QuickSubmit is not “quick,” as it takes hours or days for 21-22 forms to get processed. Furthermore, SEP will be sunset in a few years, leaving reps without a way to accept digital 21-22 forms. 

Our goal is to create a seamless process where reps can see and accept POA requests in real time, thereby getting instant access to VBMS and other systems they need to begin processing claims. This will be one feature in the **Accredited Representative Portal (ARP)**, which is envisioned to be a one-stop-shop for accredited representatives to get accredited and support Veterans and their dependents with their claims. 

**For more information on ARP and Form 21-22, view the [21-22 product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/21-22-power-of-attorney-product-outline.md).**

## The End User

Form 21-22 impacts several types of users:
* **Veterans, their families, and caregivers:** Veterans submit Form 21-22 and are impacted by how VSO reps handle their request. Read more about the various [Veteran personas](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-customer-personas/VA%20Customer%20Personas.pdf).
* **VSO representatives:**
    * We believe that optimizing the VSO rep experience will have positive downwind impacts for Veterans. We are treating VSO reps as the primary user for our work on Form 21-22, and for ARP in general.
    * We’ve created a [VSO representative persona](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709236473099/7a69ce07dbe58af30f1954470bebbe59b7bf1160?sender=u8cf3f08a008c2b61ad621433) (Mural) that represents what we know about VSO reps on secondary research (previous studies, conversations with OGC), and primary research conducted from January-June 2024. 
    * Also see this [VSO Mapping file](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/Benefits%20and%20Appeals%20Research/2019-10-VSOs-Appeals-Higher-Level-Review-Discovery-Research-with-VSOs/VSO-Mapping.pdf) compiled by the Lighthouse team that organizes the different types of accredited representatives, including VSOs.

## Proposed next steps

Over the yearlong POP (September 2023-September 2024) the ARF team gathered information, ran [research and usability studies](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research), and created [mockups](https://www.figma.com/design/LVCQBuW7a6nfVFNyhA4kv4/ARF---Form-21-22-Design-Explorations?node-id=1-6972&t=RqUG2a8vMUfxnfaI-1) of what this portion of the portal could look like. Proposed next steps include:

* Validate design decisions with research.
    * Some kind of interactive prototype may be necessary for further testing, either Figma or Codepen (or Staging if that's better for the long term). Seeing the designs, reps may say they like the layout and understand, but do they actually interact in the expected way?
    * After that, iterate on design based on the results of that research.
* Coordinate with the Platform/Governance team and their Collaboration Cycle especially since we are diverging from the standard patterns in a few ways. The largest divergence would be the two column layout vs. their recommended single column layout. Research will help guide for this conversation (though they may just say flatly it's not a good solution for AT users, and we won't have AT research for quite a while imo)
* We need to understand how fast/slow search, fetch, and (maybe) sort actions are since we've been speculating a bit on that so that would be an engineering task. Design/content may need to be adjusted based on how that plays out.
* As we get closer to launch, explore ways that we can meld the IA/header and footer for this feature (POA requests) with the other features our team explored (contact info updating and 21a). The IA that gets selected for the initial ARP release will be entirely dependent on which feature(s) go live first. These features have been designed independently so far, but if two features go live at the same time, the team will need to explore how it should be presented. 
* See the [Future Research Activities Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718980793805/b1c89e3110a00b235ee30bc04bab3cc96a33c696?sender=u2a4240a640b257ce33545495) for more information on proposed research studies about 21-22 and other ARP features.
* See also the [High-Level Next Steps for Accredited Representative Facing (ARF) Engineering Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/docs/2024-ARF-engineering-next-steps.md) (Github).

## Resources 

### General

* [VSO Current State/Future State Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1701101229797/15c7e1a5a9d426a998eb634408ff1dd3f4f9bdd1?sender=u2a4240a640b257ce33545495), which shows the current process of appointing a POA and the improvements we envision.
* [Collaboration cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75782) and [Design Intent and Midpoint review feedback](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1264). For the Design Intent specfically, also see the [Design Intent Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707942010655/f155b4200e5c862bf2136eeba8387a569d4eb5a3?sender=u2a4240a640b257ce33545495) and [Design Intent talking points](https://dsva.slack.com/docs/T03FECE8V/F06JM63CV8W) (Slack canvas)
* [Pilot Decision Record (PDR)](https://docs.google.com/spreadsheets/d/1E4muMKOZJGPYe4vQGwmwj9_aViSun8wPq5PkZyT5bVM/edit?gid=0#gid=0) that documents some of our main decisions and why we made them. This file also contains decisions for other parts of ARP, but can be filtered to show decisions that are only relevant to 21-22.

### Data flow

* [Older but comprehensive map](https://github.com/department-of-veterans-affairs/vets-contrib/blob/master/products/APIs/benefits-intake-api/Benefits%20Intake%20Product%20Outline.md) of how data flows from the Veteran through VA systems from the Benefits Intake API team. 
* [Lighthouse Claims API POA Future System Diagram](https://lucid.app/lucidchart/cdc067c7-0300-4fb8-af4d-09d6facf6194/view?page=SPiqDHIZuCjf#)

### Design/UI

* [21-22/Power of Attorney Figma file](https://www.figma.com/design/LVCQBuW7a6nfVFNyhA4kv4/ARF---Form-21-22-Design-Explorations?node-id=1-6972&t=Pmz1Cpj7Bff37htN-1). See the “About this file” page within the Figma file for more information about what the Figma file contains. Other Figma files for this work stream include: 
    * [April 2024 usability test (single-accredited VSOs)](https://www.figma.com/design/C3sdnDf8anVqXVdmiCWwq8/ARF---April-2024-usability-test?node-id=2381-578614&t=MGt4Iy9MKogycPkS-1)
    * [NACVSO conference assets](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=211-146177&t=5fFfHOmijrhRNoWJ-1)
* [ARP Information Architecture Exploration (21-22)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710857598969/32219746df15eb2602a01b1b3b1b3ccf9fa8760d) (Mural)

### Stakeholder Enterprise Portal (SEP)

The way VSOs currently accept digital POA requests is through SEP. Learn about this tool through these resources:
* [SEP Demo with Disabled American Veterans (DAV)](https://dvagov.sharepoint.com/:v:/s/vaabdvro/Ee3gR_HqQ45CnY4OO5URNgYBLCtAJUnjkvSlWRapJ6PAJA?e=6dXquF), one of the "big 6" VSOrgs. (Sharepoint; if that link doesn’t work, follow this Sharepoint path:  Accredited Representative Facing > POA 21-22 > 2024_01 Current State Analysis > SEP Demos). 
* [SEP Demo with the VEO team behind the tool](https://dvagov.sharepoint.com/:v:/s/vaabdvro/ETtSA993V8BJrmNL4YQsuhUB7l4DktQOoQ2pj5lZuacrBg?e=CiJMFz). These are the [SMEs we interviewed](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research/2024-02%20User%20Interviews). (Sharepoint; if that link doesn't work, follow this Sharepoint path: Accredited Representative Facing > POA 21-22 > 012024 Current State Analysis > SEP Demos) 
* [Screen-by-screen SEP walkthrough deck](https://dvagov.sharepoint.com/:b:/s/vaabdvro/EYvdNE8cjkBGoOz7AyaH8dYBvhgZ2CMCKyPahLqfAvv6TA?e=WddtlG) we created to reference SEP UI (Sharepoint; if that link doesn’t work, follow this Sharepoint path:  Accredited Representative Facing > POA 21-22 > 2024_01 Current State Analysis)
* [SEP-specific existing research](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695929155059/a302158eccec694ec7089bd6a02954421721987d?sender=ua71936780d8bc9a2d2b29830) (Mural). Some of these resources overlap with the literature review and the recordings linked elsewhere in this ticket. The research reports about SEP are very interesting!
* Explore SEP and eBenefits with these [login credentials](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/_layouts/15/Doc.aspx?sourcedoc=%7BD10426C1-A013-4818-9B90-1A213E83DA01%7D&file=SEP%20Account%20For%20Testing.xlsx&action=default&mobileredirect=true) (Sharepoint; **link broken - Can Jen and Lesley help us fix it?**)

### 21-22 User and SME Interviews

* [SME Interview with Marty Caraway, VSO liaison](https://dvagov.sharepoint.com/sites/vaabdvro/_layouts/15/stream.aspx?id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representative%20Facing%2FResearch%2FSME%20Interviews%2FMarty%20Caraway%20%2D%20recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview) (Sharepoint; if that link doesn't work, follow this Sharepoint path: Accredited Representative Facing > POA 21-22 > SME Interviews > Marty Caraway)
* [Accredited Representative listening session](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/01-23-24%20Representative%20Listening%20Session/Recording?csf=1&web=1&e=cRufIR) (Sharepoint; if that link doesn't work, follow this Sharepoint path: Accredited Representative Facing > POA 21-22 > 0124 Representative Listening Session > Recording)
* [Earlier VSO interviews](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=QIRHZa&cid=866978cd%2D2497%2D496e%2Dadae%2D42c02258162e&FolderCTID=0x01200073ECFC0A16DB51439C06C6FDC0E92947&id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representative%20Facing%2FPast%20Research%2FRecordings&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72) Notes are in the Existing Research Mural and there is a lot of overlap with these interviews and the walkthrough, so no need to go too in-depth. You can save this task for later if you're short on time. (Sharepoint; if that link doesn't work, follow this Sharepoint path: Accredited Representative Facing > POA 21-22 > 00 Past Research > Recordings ). 
* [Jan 2024 Listening Session report](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research/2024-01%20Listening%20Session) (Github). This summarizes the video directly above.
* [Feb 2024 User Interviews report](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research/2024-02%20User%20Interviews) about how VSOfficers interact with SEP and what they hope our new tool can offer (Github)
* [March 2024 Single Accredited Testing report](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research/2024-03%20Single%20Accredited%20Testing) (Github). This was a test in which we ran a prototype past VSO reps who are accredited with a single organization.
* [May 2024 NACVSO report](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research/2024-05%20NACVSO) (Github). NACVSO stands for [National Association of County Veterans Service Organizations](https://www.nacvso.org/). Some members of our team were able to travel to their conference in May to test prototypes and ask questions of VSOs in person. This report sums up that research.
