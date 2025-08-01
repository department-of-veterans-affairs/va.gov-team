# VA Form 21a - Read Me

[Product Outline for VA Form 21a](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/21a/product-outline-21a.md)

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
