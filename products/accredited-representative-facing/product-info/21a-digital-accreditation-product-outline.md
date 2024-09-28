# Form 21a Product Brief

## Description
Today, individuals who want to become an accredited claims agent or attorney through the VA must fill out [Form 21A](https://www.va.gov/VAFORMS/va/pdf/VA21a.pdf) and submit to the Office of General Counsel through US Mail, fax machine, or potentially email. VA Office of General Counsel (OGC)'s Benefits Law Group (BLG) employees/accreditation managers must process the paper form. They correspond with the individual multiple times due to insufficient information provided by applicants on the form.

The goal of this initiative is to build a secure, web-based self-service Accreditation application form (21a) on VA.gov to support those who seek accreditation, starting with Claims Agents and Attorneys.

## Problem

### What is the problem and who is affected?

VA OGC BLG employees spend significant time processing paper applications from thousands of individuals who desire to become accredited to work with Veterans. They do not have sufficient resources to process the existing applications in a timely manner. 

At the same time, individuals applying to become accredited with VA OGC have to submit paper applications. After submitting the application, they have to wait extended periods (up to two years, according to some applicants) for their application to be processed.

This application backlog limits the number of accredited claims agents and attorneys available to help Veterans apply for Benefits and navigate the VA's claims appeals processes.

### Why do you think the problem is occurring?

This problem occurs because the application process is not digitzed.

Additionally, the BLG has extensive back-and-forth communication with applicants applying to become accredited with VA as accredited representatives. This is due to questions raised by applicant's responses, and a general insufficient set of questions needed to assess an applicant’s worthiness of accreditation. This accreditation process is time-consuming for VA OGC and results in further backlog and wait times.

### How does this initiative help further OCTO-DE’s mission and goals?

OCTO strives to provide excellent experiences and outcomes for Veterans. For some Veterans, working with accredited representatives is a crucial step to navigating the VA ecosystem. 

## Objective

Build a secure, web-based self-service Accreditation application (21a) on VA.gov that allows individuals to apply to become accredited as Claims Agents or Attorneys, and pass this data securely to VA OGC for processing.

What’s in scope:
* Implement functionality for Accreditation portal visitors to create an account or login.
* Enable new applicants to securely apply for accreditation as an Attorney/Claims Agent using a form 21a-based application intake form.
* Uploading requirements to report good standing and continuing legal education artifacts.
* Enable applicants to return to an unfinished application and submit the application (within 60 days).

What’s not in scope:
* Create a user-friendly home page for Accreditation portal visitors who have not yet logged in or created an account.
* Create a personalized dashboard for users after logging in.
* Providing capabilities for viewing and updating user contact information within the portal.
* Supporting correspondence history between Accreditation managers and applicants/accredited entities.
* Supporting Fee Agreement and Dispute processes and submitting complaints.
* Bringing over static copy pages from the OGC/Accredited Representatives section of benefits.va.gov.

Go-to-market
* Once released to production, a link to the new Digital 21a Accreditation Form will be added to the existing [VA OGC aAccreditation page](https://www.va.gov/ogc/accreditation.asp). 

## Outcomes

### Desired user outcomes
* Design a digitized version of Form 21a that incorporates new questions needed by VA OGC employees who process applications. 
* Reduce time for VA OGC employees to review and process accreditation applications
* Provide accurate applicant data to VA OGC employees; this will also improve Veteran experiences on VA.gov for applications that call on GCLAWS.
* Effectively convey the gravity, seriousness, and commitment required to becoming accredited, thereby dissuading potential applicants who are applying solely for self-gain
* Create a more efficient accreditation process for applicants
* Create an accessible accreditation process for all users, including those who use assistive technology

### Undesired user outcomes
* Increase the number of steps or time required from VA OGC employees to process applications
* Increase the percentage of unqualified applicants (e.g. “claim sharks”) who apply to become accredited
* Significantly increase the need for tech support or support from VA OGC employees to complete the accreditation process

Note: A long-term goal of VA OGC is to reduce the backlog of accreditation applicants. (The backlog currently sits at roughly 2,000 applicants.) The digitization of this form will not contribute to reducing the existing backlog. However, a desired outcome of this product is to reduce the time needed to process future applications, thus helping reduce future backlogs.

## Related artifacts
* [Paper/PDF Form 21a](https://www.va.gov/find-forms/about-form-21a/)
* [Mockups](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation-(CA-%26-Attorneys)?node-id=1026-23089&t=bZzrpQIbIIgz574V-1) (Figma)
* [21a Overview page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/21a-digital-accreditation.md) (Github)
* [Proposed research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research/Future%20-%20%2021a%20research) (Github)

## Measuring Success

### Key Performance Indicators (KPIs)

Quantitative:
* Average time application process time relative to previous processing time
* % of successful and failed form submissions
    * Overall submission volume
    * Submission error %
    * Backup path usage
* User form completion behavior
    * Number of sessions to complete a form
    * Time to complete form
* Applicant satisfaction (measured by CSAT score)

Qualitative:
* Feedback from VA OGC employees who process applications about the increased or decreased ease of processing applications
* Feedback from applicants, captured through usability tests

## Assumptions/Risks

* Value Risks
    * If the process does not present an easier, self-service experience for Attorneys and Claims Agents, and they continue to rely on paper/PDF form submission, there is the potential to create additional workflows for OGC staff to monitor for accreditation applications.
    * The application results in a significant increase in applications, which VA OGC has stated they cannot handle.
    * The application does not have the features or fields VA OGC desires, and OGC decides to continue using paper form applications until more features have been built.
* Usability Risks
    * The product is not sufficiently validated through user testing, resulting in confusing or poor user experiences. At worst, it could lead applicants to submit incorrect data. 
    * The product is not tested for usability, resulting in a poor or non-functioning experience for assistive technology users.
* Technical Feasibility Risks
    * This product is dependent on SPM-CORP SCLA’S GCLAWS team to provide backend services to integrate with the GCLAWS system
    * This product will not be made available to applicants until our dependent GCLAWS development team has completed development of a separate interface for OGC staff members to receive and process the applications submitted from this new digital application. 
* Organizational Viability Risks/Constraints
    * The Benefits Law Group access to the applications and automated processes will depend on the continued enhancement of GCLAWS to support the application and accreditation needs.

## Launch Planning

### Collaboration Cycle

Because this product is not Veteran-facing, it has not followed the standard collaboration cycle process. A Midpoint Review was held on September 16, 2024. See the [Collaboration Cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/91879) and [Midpoint Review feedback](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1398).

### Initiative Launch Dates
* Target Launch Date
    * Targeting end of September 2024 for initial development of the new digital 21a application by the Accredited Resentative-Facing Team

        _Note: Official launch date will need to be coordinated with and is dependent on GCLAWS development team and OGC stakeholders_

* Actual Launch Date
    * TBD - Pending alignment with GCLAWS team

## Communications

Team:
* Name: Accredited Representative-Facing Team
* Slack channel: [#benefits-representative-facing](https://dsva.slack.com/archives/C05SUUM4GAW) (active until the close of the period of performance on September 27th, 2024)
* [Github repo](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing)

VA Enablement Team (OCTO):
* Jen Bertsch, Benefits Portfolio Product Owner (Jennifer.Bertsch@va.gov)
* Lesley Ropp, Benefits Portfolio Design Lead (Lesley.Ropp@va.gov)
* Sam Raudabaugh, Benefits Portfolio Tech Architect/Engineering Lead (Samuel.Raudabaugh@va.gov)
