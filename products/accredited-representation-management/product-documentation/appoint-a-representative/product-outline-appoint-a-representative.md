# **Product Outline: Appoint a Representative (VA Forms 21-22 and 21-22a)**

**Team**: Accredited Representation Management

Product URL: [Request help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/appoint-rep)

Main entry points:
1. [Get help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/) (landing page)
2. [About VA Form 21-22](https://www.va.gov/find-forms/about-form-21-22/)
3. [About VA Form 21-22a](https://www.va.gov/find-forms/about-form-21-22a/)


## **Overview**

Create a user-friendly, accessible tool for Veterans to digitally complete a 21-22 or 21-22a form, with the ultimate goal of appointing an accredited VSO, Attorney or Claims Agent. This experience is intended to mirror the search functionality of the older, external tool[ eBenefits](https://www.docstomarkdown.pro/convert-markdown-to-google-docs-online/%5Burl%5D\(https://www.ebenefits.va.gov/ebenefits/vso-search\)).


## **Problem Statement**

There is not currently an experience on VA.gov for Veterans to appoint a representative. The current experience happens either in person (offline) or through an older system (eBenefits) which does not provide a great user experience: confusing errors, dead ends, and inconsistent user flows.

**How might we enable Veterans to appoint a representative on VA.gov and provide clear instructions and expectations around next steps?**


## **Desired User Outcomes**

1. Veterans can select a VSO, attorney or claims agents on VA.gov for new representation.
3. Veterans can fill out VA Form 21-22 and 21-22a on VA.gov and generate a completed PDF.
4. Veterans can submit a VA Form 21-22 (requesting Power of Attorney) on VA.gov, to Veteran Service Organizations that are accepting online submission.
5. For representatives that are not accepting online submission:
   1. Veterans can download a filled-out VA Form 21-22 or 21-22a form (accessible PDF) from VA.gov.
   2. Veterans will be given guidance on next steps, including obtaining a representative signature and submitting their form outside of VA.gov (in person, via mail, through an online tool like QuickSubmit).


## **Assumptions**

1. Veterans are interested in appointing a representative online through VA.gov
2. Veterans would prefer to complete a form online, compared to printing the form out and completing it by hand
---

## **Measuring Success**

**Datadog Dashboards**
1. [ARM: Appoint a Representative](https://vagov.ddog-gov.com/dashboard/iiz-nnm-2em/arm-appoint-a-representative?fromUser=false&offset=0&refresh_mode=monthly&from_ts=1751353200032&to_ts=1753980942350&live=true)

**Domo Dashboards**
1. [Accredited Representation Managment](https://va-gov.domo.com/page/1897070864) - User trends for ARM products
2. [VA.gov Forms KPIs](https://va-gov.domo.com/page/447193050) - for tracking our Appoint a Representative form experience (21-22/21-22a), working with Analytics to get rid of the extra filters

## **Release History**

#### Version 1.0 (PDF Generation, MVP) | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/release-plan-appoint-a-representative-1.0.md) and [Demo Video](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Appoint%20a%20Representative%20-%20PDF%20Generation%20Demo.mp4?csf=1&web=1&e=Z6NxVn)

Released to 100% of users on January 23, 2025. Appoint a Representative 1.0 (MVP) mirrors the VA Form 21-22 / 21-22a digital form-fill functionality on eBenefits, but with a more consistent and intuitive experience that lives directly on VA.gov. 

#### Version 2.0 (Online Submission of 21-22) | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/release-plan-appoint-a-representative-2.0.md) and [Demo Video](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Appoint%20a%20Representative%20-%20Online%20Submission%20Demo.mp4?csf=1&web=1&e=6fZuue)

Released to 100% of users on March 25, 2025. Appoint a Representative 2.0 enabled Veterans to submit VA Form 21-22 directly on VA.gov, so representatives can respond immediately to the POA request in the Accredited Representative Portal and, if accepted, establish the Power of Attorney relationship in the Veteran's VBMS eFolder within minutes (not days or weeks). Online submission is avaialble for LOA3 Veteran users, who choose to appoint a participating Veteran Service Organizations online.

See the for additional context including: user flows, page names, sub-URLs, and specifics for each version.

## Current Risks

#### Appoint a Representative is capturing a Veteran email address that is not aligned with Profile.
Veterans may update the email address they’d like to use for receiving email notifications but because this update isn’t syncing to Profile, Lighthouse will continue to use the Profile email address for the ”Accept” email notification (and the Veteran may miss this email update).

Integrating the "prefill pattern" into Appoint a Representative, where updates in the form flow are reflected in Profile, would resolve this risk.

#### Form Versioning Discrepancy Between VA.gov and Lighthouse

At the end of the online submission experience, users are provided with a copy of their completed VA Form 21-22. This download is the most up-to-date version of the form, but upon acceptance by the representative, Lighthouse will uploade an older version of VA Form 21-22 (pre-Oct 2023 updates) to the eFolder in VBMS when establishing the POA relationship. 

The October 27,2023 updates to VA Forms 21-22 and 21-22a include...

1. 21-22 form updates:
   1. Field 11a "Claimant's Date of Birth" in Section II has been added
2. 21-22a form updates:
   1. Field 11 "Claimant's Date of Birth" in Section II has been added
   2. Field 19 "Authorization for Disclosure to Affiliated Personnel" has been added to allow additional authorization for
      1. All associate attorneys, claims agents and support staff affiliated with the representative
      2. Individually named administrative employees of the representative
         
Lighthouse has confirmed that an older version of the PDF will not be an issue; confirmed by LH Benefits & Appeals APIs Crew Engineer Drew Fisher ([Slack message](https://dsva.slack.com/archives/C063D0M76HX/p1706308610572019?thread_ts=1706119737.834139&cid=C063D0M76HX)).

But there is an OCTO goal of keeping VA Forms up to date and this scenario puts that goal at risk.

## **Supporting Documentation**

1. [Enabling Online Submission for VSOs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/enabling-online-submission-for-vsos.md)
2. [Required Form Fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/required-form-fields.md)
3. [Decision and Change Log: Appoint a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/decision-change-log-appoint-a-representative.md)
4. [Appoint a Representative Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/launch-materials/product-playbook-incident-response-plan.md)
5. [Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/appoint-a-representative/contact-center) (with screenshots)
6. [Appoint a Rep Planning Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1714785369605/65b1ce20d08478615fe2ef8c347cf19305cbffab) (with user flow and IA notes)

---

## **Recommended Next Steps**

#### Next Version Priorities - Appoint a Representative 2.1
A future version of Appoint a Representative should strive for:
1. Updating the contact information entry pages, to use the prefill pattern and ensure any updates are also updated in the user's Profile.
   1. Current implementation leans on text-input components that are pre-populated with Profile information, but any edits do not get routed back to Profile.
2. Features that did not make the version 2.0 release date - UX and accessibility improvements, code cleanup.

Related epic with refined tickets: [Appoint a Representative 2.1](https://github.com/orgs/department-of-veterans-affairs/projects/1180/views/34)

#### Redirect Goals

When [Appoint a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/appoint-a-representative) is out of pilot for the online submission of VA Form 21-22 (i.e. most, or all VSOs can accept online submissions), we will work with stakeholders to redirect related pages within eBenefits:
1. https://www.ebenefits.va.gov/ebenfits/vso-search - redirect to Find a Representative
2. https://www.ebenefits.va.gov/ebenfits/about/feature?feature=request-vso-representative - redirect to Appoint a Representative
3. https://www.ebenefits.va.gov/ebenfits/manage/representative - redirect to landing page

Reference: [IA redirect plan - Sharepoint](https://dvagov.sharepoint.com/:w:/r/sites/SitewideCAIA/_layouts/15/Doc.aspx?sourcedoc=%7B203EE57C-1260-4A20-9981-40A7396FB36A%7D&file=0.0%20Redirect%20plan.docx&action=default&mobileredirect=true)

#### Future Ideas
Longer term ideas are stored in our[ARM Future Ideas](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/ARM%20Future%20Ideas.docx?d=wfe95a788166e4670bfda5a59798550d7&csf=1&web=1&e=7iFIw0) document.

---

## **Communications**

1. **Team Name**: Accredited Representation Management
2. **GitHub Label**: accredited-representation-management-team
3. **Slack channel**: #benefits-representation-management


## **Team Leads**

1. **DEPO Lead**: Jennifer Bertsch
2. **PM**: Lindsay Li-Smith
3. **Engineering**: Holden Hinkle
4. **UX Research/Design**: Marisa Dominguez
