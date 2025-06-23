# **Product Outline: Appoint a Representative (VA Forms 21-22 and 21-22a)**

Team: Accredited Representation Management

Product URL:[Request help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/appoint-rep)

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
3. Veterans can fill out VA Form 21-22 and 21-22a on VA.gov.
4. Veterans can submit a VA Form 21-22 (requesting Power of Attorney) on VA.gov, to Veteran Service Organizations that are accepting online submission.
5. For representatives that are not accepting online submission:
   1. Veterans can download a filled-out VA Form 21-22 or 21-22a form (accessible PDF) from VA.gov.
   2. Veterans will be given guidance on next steps, including obtaining a representative signature and submitting their form outside of VA.gov (in person, via mail, through an online tool like QuickSubmit).


## **Assumptions**

1. Veterans are interested in appointing a representative online through VA.gov
2. Veterans would prefer to complete a form online, compared to printing the form out and completing it by hand


## **Solution Approach and Release History**

Appoint a Representative 1.0 (MVP) released to 100% of users on January 23, 2025 ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/release-plan-appoint-a-representative-1.0.md)). 
Our goal for the Appoint a Representative 1.0 (MVP) was mirroring the VA Form 21-22 / 21-22a digital form-fill functionality on eBenefits, but with a more consistent and intuitive experience that lives directly on VA.gov. 

Appoint a Representative 2.0 (Online Submission) released to 100% of users on March 25, 2025 ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/release-plan-appoint-a-representative-2.0.md)). 
Our goal for Appoint a Representative 2.0 (online submission) was enabling Veterans to submit VA Form 21-22 directly on VA.gov, so representatives can respond immediately to the POA request in the Accredited Representative Portal and, if accepted, establish the Power of Attorney relationship in the Veteran's VBMS eFolder within minutes (not days or weeks). Online submission is avaialble for LOA3 Veteran users, who choose to appoint a participating Veteran Service Organizations online.

See the [Appoint a Rep Planning Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1714785369605/65b1ce20d08478615fe2ef8c347cf19305cbffab) for additional context including: user flows, page names, sub-URLs, and specifics for each version.

## **Expected Impact**

1. Increase the functionality of VA.gov to support appointing accredited representatives.
2. Reduce the time it takes for Veterans to appoint an accredited representative.
3. Reduce the reliance on paper form processing, by increasing the online submission of VA Form 21-22 by 10% (19,164 submissions, compared to 17,422 SEP submissions in 2023). 
5. Facilitate and support claim automation initiatives and processes aimed at reducing the amount of time it takes to render decisions and deliver benefits.
6. Expedite the deprecation of the legacy eBenefits platform by delivering replacement services.

## **Measuring Success**

1. [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/iiz-nnm-2em/arm-appoint-a-representative?fromUser=true&refresh_mode=monthly&from_ts=1735718400000&to_ts=1737609578840&live=true)
2. [GA4 explore report](https://analytics.google.com/analytics/web/?pli=1#/analysis/p419143770/edit/s8Td-mYMQoKwisXggjlrqw)
3. We are actively working with the Platform Analytics team to have our experience reported in the [VA.gov Forms KPIs Domo dashboard](https://va-gov.domo.com/page/447193050?userId=1801042161)

## **Risk: Form Versioning Discrepancy**

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

## **Future Plans and Ideas**

When we are out of the digital submission pilot phase, we will work with stakeholders to redirect related pages within [eBenefits](https://www.docstomarkdown.pro/convert-markdown-to-google-docs-online/%5Bhttps://www.ebenefits.va.gov/ebenefits/vso-search) to point to [Appoint a Representative](https://www.va.gov/get-help-from-accredited-representative/appoint-rep/introduction) on VA.gov.

Longer term ideas for Appoint a Representative are stored in our[ ARM Future Ideas](https://dsva.slack.com/docs/T03FECE8V/F06JUJ4CR19) Slack canvas.

## **Supporting Documentation**

1. [Decision and Change Log: Appoint a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/decision-change-log-appoint-a-representative.md)
2. [Required Form Fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/required-form-fields.md)
3. [Appoint a Representative Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/launch-materials/product-playbook-incident-response-plan.md)
4. [Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/appoint-a-representative/contact-center)

## **Communications**

1. **Team Name**: Accredited Representation Management
2. **GitHub Label**: accredited-representation-management-team
3. **Slack channel**: #benefits-representation-management


## **Team Leads**

1. **DEPO Lead**: Jennifer Bertsch
2. **PM**: Lindsay Li-Smith
3. **Engineering**: Holden Hinkle
4. **UX Research/Design**: Marisa Dominguez
