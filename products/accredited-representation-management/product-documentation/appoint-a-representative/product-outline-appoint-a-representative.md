# **Product Outline: Appoint a Representative**

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

1. Veterans can select a VSO, attorney or claims agents on VA.gov for new representation
2. Veterans can fill out (but not submit) a 21-22 or 21-22a form on VA.gov
3. Veterans can download a filled-out 21-22 or 21-22a form (accessible PDF) from VA.gov
4. Veterans will be given guidance on next steps, including obtaining a representative signature and submitting their form outside of VA.gov (in person, via mail, through an online tool like QuickSubmit)


## **Desired Business Outcomes**

1. Increase the functionality of VA.gov to support appointing accredited representatives
2. Reduce the time it takes for Veterans to appoint an accredited representative
3. Facilitate and support claim automation initiatives and processes aimed at reducing the amount of time it takes to render decisions and deliver benefits
4. Expedite the deprecation of the legacy eBenefits platform by delivering replacement services


## **Assumptions**

1. Veterans are interested in appointing a representative online through VA.gov
2. Veterans would prefer to complete a form online, compared to printing the form out and completing it by hand


## **Solution Approach**

Our immediate goal for the Appoint a Representative 1.0 (MVP) is to mirror the 21-22 / 21-22a digital form fill functionality on eBenefits, but with a more consistent and intuitive experience that lives directly on VA.gov. This digital form-fill experience was released to 100% of users on January 23, 2025.

We are currently preparing Appoint a Representative 2.0 which introduces digital submission of the 21-22 form, for users that:
- are LOA3 authentiated
- are a Veteran
- have selected a representative that accepts digital submission
- have chose "online" as the preferred submission method
If all of these conditions are met, the end of the Appoint experience will result in a POA request being sent to the representative to accept/decline in the Accredited Representative Portal.

## **Measuring Success**

1. [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/iiz-nnm-2em/arm-appoint-a-representative?fromUser=true&refresh_mode=monthly&from_ts=1735718400000&to_ts=1737609578840&live=true)
2. [GA4 explore report](https://analytics.google.com/analytics/web/?pli=1#/analysis/p419143770/edit/s8Td-mYMQoKwisXggjlrqw)
3. We are actively working with the Platform Analytics team to have our experience reported in the [VA.gov Forms KPIs Domo dashboard](https://va-gov.domo.com/page/447193050?userId=1801042161)


## **Supporting Documentation**

1. [Decision and Change Log: Appoint a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/decision-change-log-appoint-a-representative.md)
2. [Required Form Fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/required-form-fields.md)
3. [Appoint a Representative Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/launch-materials/product-playbook-incident-response-plan.md)
4. [Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/appoint-a-representative/contact-center)


## **Release History**

### Version 1.0 (MVP)

Appoint a Representative 1.0 (MVP) released to 100% of users on January 23, 2025 ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/release-plan-appoint-a-representative-1.0.md)). 

The base URL for this product is `/appoint-rep` and the form experience for this version includes:

1. Introduction `/introduction`
2. Tell us who you are (Veteran or non-Veteran claimant) `/claimant-type`
3. Select a Representative/Organization
   1. Select the accredited representative (individual or organization) `/representative-select`
   2. Contact the accredited representative `/representative-contact`
   3. Select the associated organization (for VSO representatives accredited with multiple organizations)`/representative-organization`
   4. Confirmation to replace an existing representative (if applicable) `/representative-replace`
4. Claimant Information (for non-Veteran claimants only)
   1. Claimant's relationship to the Veteran `/claimant-relationship`
   2. Claimant's personal information `/claimant-personal-information`
   3. Claimant’s mailing address `/claimant-contact-mailing`
   4. Claimant's phone number and email address `/claimant-contact-phone-email`
5. Veteran Information
   1. Veteran's personal information `/veteran-personal-information`
   2. Veteran's mailing address `/veteran-contact-mailing` (Veteran users) OR  `/veteran-contact-mailing-address` (non-Veteran users)
   3. Veteran’s phone number and email address `/veteran-contact-phone-email`
   4. Veteran identification information (for non-Veteran claimants only) `/veteran-identification`
   5. Veteran service information (21-22a form only) `/veteran-service-information`
6. Authorizations
   1. Authorization to access certain medical records `/authorize-medical`
   2. Authorization to access certain medical records - select records `/authorize-medical/select`
   3. Authorization to change address `/authorize-address`
   4. Authorization for access in VA systems (21-22a only) `/authorize-inside-va`
   5. Authorization for access outside VA systems (21-22a only) `/authorize-outside-va`
   6. Authorization for access outside VA systems - name individuals to authorize (21-22a only) `/authorize-inside-va/names`
7. Review  `/review-and-submit`
8. Download `/confirmation`
9. Next Steps `/next-steps`
   1. An email notification is sent via VA Notify to reiterate next steps

## **Form Versioning Discrepancy**

**Risk**: When Appoint a Reprsentative v2 (with digital submission) launches in Q1 2025, users will be able to download a copy of their completed 21-22 (the most up-to-date version), but Lighthouse will uploade an older version of the 21-22 (pre-Oct 2023) to the eFolder in VBMS. 

On October 27,2023, a new version of VA Forms 21-22 and 21-22a were released.

1. 21-22 form updates:
   1. Field 11a "Claimant's Date of Birth" in Section II has been added
2. 21-22a form updates:
   1. Field 11 "Claimant's Date of Birth" in Section II has been added
   2. Field 19 "Authorization for Disclosure to Affiliated Personnel" has been added to allow additional authorization for
      1. All associate attorneys, claims agents and support staff affiliated with the representative
      2. Individually named administrative employees of the representative

         
The Appoint a Representative experience generates PDFs of the most up-to-date version of VA Forms 21-22 and 21-22a PDFs. 

The Lighthouse auto-establishment service will be generating an older version of the form and uploading it to the eFolder in VBMS. Lighthouse confirms that an older version of the PDF will not be an issue; confirmed by LH Benefits & Appeals APIs Crew Engineer Drew Fisher ([Slack message](https://dsva.slack.com/archives/C063D0M76HX/p1706308610572019?thread_ts=1706119737.834139&cid=C063D0M76HX)).


## **Future Plans and Ideas**

When we are out of the digital submission pilot phase, we will work with stakeholders to redirect related pages within [eBenefits](https://www.docstomarkdown.pro/convert-markdown-to-google-docs-online/%5Bhttps://www.ebenefits.va.gov/ebenefits/vso-search) to point to [Appoint a Representative](https://www.va.gov/get-help-from-accredited-representative/appoint-rep/introduction) on VA.gov.

Ideas for the next versions are stored in our [Appoint a Representative v2](https://dsva.slack.com/docs/T03FECE8V/F07T60DAK7Z) Slack canvas, and we are targeting a pilot launch in March 2024.

Longer term ideas for Appoint a Representative are stored in our[ ARM Future Ideas](https://dsva.slack.com/docs/T03FECE8V/F06JUJ4CR19) Slack canvas.


## **Communications**

1. **Team Name**: Accredited Representation Management
2. **GitHub Label**: accredited-representation-management-team
3. **Slack channel**: #benefits-representation-management


## **Team Leads**

1. **DEPO Lead**: Jennifer Bertsch
2. **PM**: Lindsay Li-Smith
3. **Engineering**: Holden Hinkle
4. **UX Research/Design**: Janelle Finnerty
