# **Product Outline: Appoint a Representative (VA Forms 21-22 and 21-22a)**

**Team**: [Accredited Representation Management](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management) (partner team to Accredited Rep-Facing)

Product URL (Staging): [Apply to become a VA-accredited attorney or claims agent](https://staging.va.gov/representative/accreditation/attorney-claims-agent-form-21a/introduction)

**⚠️ Not yet in Production!**


## **Overview**

Before attorneys or claims agents can help Veterans with claims, they need to become accredited through VA. To become accredited, they need to submit [Form 21a](https://www.va.gov/find-forms/about-form-21a/), which the Office of General Counsel (OGC) uses to verify the applicant’s credentials and reputation. Claims agents then need to complete a written test verifying they have sufficient knowledge of the claims process. 


## **Problem Statement**

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

## **Desired User Outcomes**

1. Users can apply for accreditation as an attorney or claims agent, in the Accredited Representative Portal on VA.gov.
2. Users can revisit the application and see a confirmation of their previous submission.
3. OGC can view and process accept/decline applications submitted online, using the GCLAWS interface.
4. [Future goal] Users can edit their application, to ensure information remains up to date over the lengthy processing period.

## **Assumptions**

1. Prospective representatives are interested in applying for accreditation online through VA.gov.
2. Prospective representatives would prefer to complete a form online, compared to printing the form out and completing it by hand.

---

## **Measuring Success**

TBD - this product is not yet in Production.

## **Release History**

This product is not yet in Production, please refer to the "Recommended Next Steps" section below, for the goals and remaining work related to versions 4 and 5.

## **Supporting Documentation**

1. [21a v4 Form Fields](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/product-info/21a/form21a-fields-v4) 
5. [Figma Files](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation--CA---Attorneys-?node-id=616-23089&p=f&t=Gw5noDTyr2O67EmE-0) 
6. [VA Form 21a User Flow & Planning](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1748541140818/7053ec76ed1cce9b41a8aaa04cc42e20908f20fa) (with user flow and IA notes)

---

## **Recommended Next Steps**

#### Version 4.0 (Parity with paper form and essential business logic, "MVP")

The 21a v4 experience serves as the MVP for VA.gov, since this will be the first time users can complete a 21a form online. The goal of this version is to match the [VA Form 21a paper form](https://www.va.gov/vaforms/va/pdf/va21a.pdf), while also factoring in essential business logic (including required GCLAWS fields) from our OGC stakeholders. 

Remaining development work to bring version 4.0 to a "release-ready" stage includes:
1. Completing unit tests for Chapters 8-9 of the 21a form experience.
2. Chapter 6: Implement document handling in vets-website and vets-api, to ensure documents are successfully transferred to GCLAWS upon submission.
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

1. **Team Name**: Accredited Representation Management
2. **GitHub Label**: accredited-representation-management-team
3. **Slack channel**: #benefits-representation-management


## **Team Leads**

1. **DEPO Lead**: Jennifer Bertsch
2. **PM**: Lindsay Li-Smith
3. **Engineering**: Holden Hinkle
4. **UX Research/Design**: Marisa Dominguez
