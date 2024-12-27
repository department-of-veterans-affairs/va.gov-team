# **Product Outline: Appoint a Representative**

Team: Accredited Representation Management

Product URL:[ Request help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/find-rep)

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

Our immediate goal for the Appoint a Representative MVP is to mirror the 21-22 / 21-22a digital form fill functionality on eBenefits, but with a more consistent and intuitive experience that lives directly on VA.gov.

As we work towards this MVP, we will also be preparing for a future goal of digital submission by migrating EVSS endpoints to Lighthouse's Benefits Claims API (specifically the POA services) and working with the Accredited Representative Facing team.


## **Measuring Success**

Monthly performance metrics are currently documented in Sharepoint: the [Performance Metrics](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representation%20Management%2FPerformance%20Metrics\&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72) folder includes raw data, which is summarized in the monthly [Sprint Report](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representation%20Management%2FVeteran%20Facing%20Sprint%20Reports%20and%20Demos\&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72) decks.

We are actively working with the Platform Analytics team to visualize our[ ARM OKRs](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718224425278/b300ea8d63dcaaa0cdad0ebf6b4a65a20fcc9371?sender=ubac5f0487f25bc4431288699) in a Domo dashboard at a future time.


## **Supporting Documentation**

1. [Decision and Change Log: Appoint a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/decision-change-log-appoint-a-representative.md)
2. [Required Form Fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/required-form-fields.md)
3. [Appoint a Representative Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/launch-materials/product-playbook-incident-response-plan.md)
4. [Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/appoint-a-representative/contact-center)


## **Release History**

### Version 1.0 (MVP)

Appoint a Representative 1.0 (MVP) is targeted to release to 100% of users on January 13, 2024 ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/release-plan-appoint-a-representative-1.0.md)). The team will partner with CAIA to implement Bets Bets and entry points.

The feature set for this version includes:

1. Introduction
2. Tell us who you are (Veteran or non-Veteran claimant)
3. Select a Representative/Organization
   1. Select the accredited representative (individual or organization)
   2. Select the associated organization to appoint (for VSO representatives accredited with multiple organizations)
   3. Confirmation to replace an existing representative (if applicable)
   4. Reminder to contact the representative
4. Claimant Information (for non-Veteran claimants only)
   1. Claimant's relationship to the Veteran
   2. Claimant's personal information
   3. Claimant’s mailing address
   4. Claimant's phone number and email address
5. Veteran Information
   1. Veteran's personal information
   2. Veteran's mailing address
   3. Veteran’s phone number and email address
   4. Veteran identification information (for non-Veteran claimants only)
   5. Veteran service information (21-22a form only)
6. Authorizations
   1. Authorization to access certain medical records
   2. Authorization to access certain medical records - select records
   3. Authorization to change address
   4. Authorization for access in VA systems (21-22a only)
   5. Authorization for access outside VA systems (21-22a only)
   6. Authorization for access outside VA systems - name individuals to authorize (21-22a only)
7. Review
8. Download
9. Next Steps
   1. An email notification is sent via VA Notify to reiterate next steps


## **Future Plans and Ideas**

When [Appoint a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/appoint-a-representative) v2 (with digital submission) is released, we will work with stakeholders to redirect related pages within[ eBenefits](https://www.docstomarkdown.pro/convert-markdown-to-google-docs-online/%5Bhttps://www.ebenefits.va.gov/ebenefits/vso-search).

Ideas for the next version are stored in our [Appoint a Representative v2](https://dsva.slack.com/docs/T03FECE8V/F07T60DAK7Z) Slack canvas, and we are targeting a pilot launch in March 2024.

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
