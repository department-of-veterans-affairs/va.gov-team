# **Product Outline: Appoint a Representative (VA Forms 21-22 and 21-22a)**

**Team**: [Accredited Representation Management](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management) (partner team to Accredited Rep-Facing)

Product URL (Staging): [Apply to become a VA-accredited attorney or claims agent](https://staging.va.gov/representative/accreditation/attorney-claims-agent-form-21a/introduction)

**⚠️ Not yet in Production!**


## **Overview**

Today, individuals who want to become an accredited claims agent or attorney through the VA must fill out [Form 21A](https://www.va.gov/VAFORMS/va/pdf/VA21a.pdf) and submit to the Office of General Counsel through US Mail, fax machine, or potentially email. VA Office of General Counsel (OGC)'s Benefits Law Group (BLG) employees/accreditation managers must process the paper form. They correspond with the individual multiple times due to insufficient information provided by applicants on the form.

The goal of this initiative is to build a secure, web-based self-service Accreditation application form (21a) on VA.gov to support those who seek accreditation, starting with Claims Agents and Attorneys.


## **Problem Statement**

VA OGC BLG employees spend significant time processing paper applications from thousands of individuals who desire to become accredited to work with Veterans. They do not have sufficient resources to process the existing applications in a timely manner. 

At the same time, individuals applying to become accredited with VA OGC have to submit paper applications. After submitting the application, they have to wait extended periods (up to two years, according to some applicants) for their application to be processed.

This application backlog limits the number of accredited claims agents and attorneys available to help Veterans apply for Benefits and navigate the VA's claims appeals processes.

Additionally, OGC BLG emplyees has extensive back-and-forth communication with applicants applying to become accredited with VA as accredited representatives. This is due to questions raised by applicant's responses, and a general insufficient set of questions needed to assess an applicant’s worthiness of accreditation. This accreditation process is time-consuming for VA OGC and results in further backlog and wait times.

**Stakeholder Pain Points:**
1. OGC currently has to reach out to applicants to ask follow up questions, depending on how they respond to the questions in the standard form.
2. OGC currently has a 2,000 applicant backlog. Their staff is massively overworked–they don’t have enough staff to process all the applicants they have.
3. This backlog and lack of staffing resources means that applicants take several years to complete. (Note that a [PDF](https://www.va.gov/OGC/docs/Accred/HowtoApplyforAccreditation.pdf) linked to from the [OGC website](https://www.va.gov/ogc/accreditation.asp) says 60-120 days, but we’ve heard from a recently accredited claims agent that her process took 2 years.
4. From a process standpoint, OGC has been “burned” by working in an agile fashion before–teams have told them that they’ll build features in future versions, and it never gets done. They prefer to wait to release the digitized form until it has the entire set of features that they need to get their work done.

[Accredited attorney persona](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717533456497/60064424f651818203ff49ac43d6fb9f0f2bccac?sender=u8cf3f08a008c2b61ad621433) (Mural) - Representation of what we know about attorneys based on secondary research (previous studies, conversations with OGC), and primary research conducted with attorneys in August 2024.

**Applicant Pain Points:**
1. Little to no transparency from OGC about the status of their application.
2. Calling OGC does not result in more information.
3. They want to begin helping Veterans, but feel like they’re stuck in limbo for an indefinite amount of time.

[Accredited claims agent persona](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718731869465/cf73b89eddb92c604d292554a31e503f7ce5d982?sender=u8cf3f08a008c2b61ad621433) (Mural) - Representation of what we know about claims agents based on secondary research (previous studies, conversations with OGC), and primary research conducted with claims agents in August 2024.

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

## **Assumptions**

1. Prospective representatives are interested in applying for accreditation online through VA.gov.
2. Prospective representatives would prefer to complete a form online, compared to printing the form out and completing it by hand.

## Potential Risks
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

## **Measuring Success**

TBD - this product is not yet in Production. Some ideas for measuring success include...

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

---

## **Release History**

This product is not yet in Production, please refer to the "Recommended Next Steps" section below, for the goals and remaining work related to versions 4 and 5.

## **Supporting Documentation**

1. [Paper/PDF Form 21a](https://www.va.gov/find-forms/about-form-21a/)
2. [21a v4 Form Fields](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/product-info/21a/form21a-fields-v4) 
5. [Figma Files](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation--CA---Attorneys-?node-id=616-23089&p=f&t=Gw5noDTyr2O67EmE-0) 
6. [VA Form 21a User Flow & Planning](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1748541140818/7053ec76ed1cce9b41a8aaa04cc42e20908f20fa) (with user flow and IA notes)

---

## **Recommended Next Steps**

#### Version 4.0 (Parity with paper form and essential business logic, "MVP")

The 21a v4 experience serves as the MVP for VA.gov, since this will be the first time users can complete a 21a form online. The goal of this version is to match the [VA Form 21a paper form](https://www.va.gov/vaforms/va/pdf/va21a.pdf), while also factoring in essential business logic (including required GCLAWS fields) from our OGC stakeholders. 

Remaining development work to bring version 4.0 to a "release-ready" stage includes:
1. Chapter 6: Comlete document handling implementation in vets-website and vets-api, to ensure documents are successfully transferred to GCLAWS upon submission.
3. End to End tests.
4. Only allow LOA3 users on the backend, so it can't be accessed directly via API.
5. Updating the experience for post-submission:
   1. Remove the application from Save In Progress tables.
   2. Improve the confirmation page.
   3. Confirm submission on the Introduction page.
6. Entry points to the 21a experience, on the ARP homepage.
7. Formal QA, to uncover and address any critical bugs.
8. Privacy Review.
9. Staging Review.
10. Implement Datadog monitoring.

This remaining work is ready for development, and outlined in the tickets, within this epic: ARM Development 21a v4.0

#### Version 5.0 (Adding additional questions, requested by OGC) 

The 21a v5 experience is intended to introduce:
1. 90+ additional questions for applicants, the majority of which are follow-up (i.e. conditional) questions based on the applicant's responses to initial questions introduced in v4.
2. Conditional logic, so applicants only see questions related to the representative type they're applying for.

This experience is currently being finalized by UX and if time permits, the team would recommend a round of usability testing on v5 before moving into development.

Current Figma status:
1. [Form 21a v5](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation--CA---Attorneys-?node-id=1026-23089&p=f&t=Gw5noDTyr2O67EmE-0) -- GCLAWS is using this as a reference, to understand what additional questions will be added and build fields to accept the answers ahead of our development on VA.gov.
2. [Form 21a v5.1](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation--CA---Attorneys-?node-id=1026-23089&p=f&t=Gw5noDTyr2O67EmE-0) -- The ARM UX team is using this to consider UX improvements, including component updates and the introduction of conditional logic. The team does not anticipate a drastic difference to what's collected on the backend (and thus, sent to GCLAWS) between v5 and v5.1.

---

## **Communications**

1. **Team Name**: Accredited Representative Facing
2. **GitHub Label**: accredited-rep-facing
3. **Slack channel**: #benefits-representative-facing


## **Team Leads**

1. **DEPO Lead**: Jennifer Bertsch
2. **PM**: Lindsay Li-Smith
3. **Engineering**: Holden Hinkle
4. **UX Research/Design**: Marisa Dominguez
