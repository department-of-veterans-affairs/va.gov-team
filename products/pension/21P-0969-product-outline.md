# Digitizing 21P-0969 - Income and Asset Statement - Product Outline 

**Overview**

What is form 21P-0969 used for? From the [About VA Form 21P-0969 page on VA.gov](https://staging.va.gov/find-forms/about-form-21p-0969/):

"VA Form 21P-0969 should be used to report or verify income and/or net worth.  It is an attachment to other forms, and is used to provide supporting financial evidence. Use VA Form 21P-0969 only if you’re instructed to, when you’re completing VA form 21P-527, 21P-527EZ, 21P-534, or 21P-534EZ."

[Downloadable PDF](https://www.va.gov/find-forms/about-form-21p-0969/#:~:text=Download%20VA%20Form-,21P,-%2D0969%20(PDF))

**Background**

The 21P-0969 is available to Veterans today through a paper form.  This initiative will bring the form online so that Veterans instructed to complete it can more efficiently populate their income and asset information through a streamlined digital experience.
Today when the Veteran triggers the need for the Income and Asset statement form from the online pension application, they are presented an alert asking them to fill out and upload or mail the 0969.  They are also messaged at the end of the application about Supporting Documentation that need to be submitted with the application.
Today the 534 Dependency and Indemnity, Survivors pension form is only available as PDF.  If the applicant answers yes to one of the questions 39B-40E, the instructions prompt them to fill out and upload or mail the 0969.

The 21P-0969 feature was on the Veteran Facing Forms team roadmap through March of 2024 when the decision was made to transition it to the Pension team.  A handoff meeting was held in April.
The current behavior for a Veteran to populate a 21P-0969:
Veterans Pension Benefits (527)
Paper form - 527EZ PDF may be accessed at VA.gov at the 21P-527 about page.
Online form - 527EZ online application may be accessed at VA.gov at the Introduction page.
Dependency and Indemnity Compensation, Survivors Pension (534)
Paper form only - 21P-534 PDF may be accessed at VA.gov at the 21P-534 about page.

**Use cases**
Submit 0969 alongside initial 21P-527EZ claim

Trigger point 1: Do you and your dependents have over $25K in assets?
Trigger point 2 Did you, your spouse or your dependents transfer any assets in the last 3 calendar years?
Trigger point 3: Do you or your dependents own your/your family’s private residence + Is the size of the lot on which the primary residence sits over 2 acres?

Submit alongside 21P-527 to provide evidence at a later time to support an existing claim
 
DIC, Survivors Pension, and/or Accrued Benefits (534)
Submit alongside initial 21P-534EZ claim
Submit alongside 21P-534 to provide evidence at a later time to support an existing claim

**Problem Statement**

When a Veteran is instructed to complete form 21P-0969 as part of the 527 or 534 pension application process,  the opportunity to do so in a streamlined digitized manner is not currently available.    A meaningful amount of Veterans stand to benefit,  ~59k 21P-0969 forms were submitted from 04/2022 through 03/2023. 
Veterans experience form filling fatigue populating more complex forms like the 21P-0969 that has fourteen sections requesting detailed personal and financial data.  When completing the Income and Asset statement along with the 527EZ the risk of fatigue is enhanced.  This initiative intends to reduce that fatigue through up-front questions and thoughtful design that provides a more efficient path through the 0969 that reduces the overall burden.  Easing that burden could result in few drop offs in the 527EZ at the trigger points for the 0969. For example, just 19% of 527EZ applicants between 1/28/24 and 5/8/24 completed the total net worth (income and assets) section.  It is our hypothesis that digitizing the 0969 will increase this completion rate, reducing the number of applications VSRs must do additional “development work” to process.
How might we provide Veterans with an online, streamlined Income and Asset Statement form that brings clarity and efficiency to their form filling process?

**Desired Outcomes**

Ease the burden of Veterans applying for pension benefits to complete the 21P-0969.
Enable Veterans to  provide income, asset and net worth information in a clear, streamlined online experience. 
Deliver incremental value to Veterans in a timely fashion.
Avoid
Confusing Veterans about the purpose or process for completing the 21P-0969 that complicates their benefits application experience.
Lack of clarity on when supplemental forms (e.g. 21P-8416, 21P-4185) should be completed in support of 0969 and claim.
Adding to VSR processing burden for 0969 and claim through forms with missing information.

**Policy Documents**

[Policy guidelines on Income and Net Worth development](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000178674/M21-1-Part-IX-Subpart-i-Chapter-3-Section-A-General-Information-on-Income-and-Net-Worth-Development?query=0969)

**Discovery Research References**

[va.gov 21P-0969 about page](https://www.va.gov/find-forms/about-form-21p-0969/)

[Work in progress Figma file](https://www.figma.com/file/tJhSwyQorlgdVPC2UKx1fQ/WIP---21P-0969-Income-and-Asset?type=design&node-id=0-1&mode=design&t=WNEUMmB2kNt706wv-0)

[Flow diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1716990611183/ae454eca4402d95d1d1f82d8a55d901f43bee6e1?sender=ud143866fd5369378295a0267)

[Figma designs from VFF team](https://www.figma.com/design/tJhSwyQorlgdVPC2UKx1fQ/WIP---21P-0969-Income-and-Asset?node-id=0-1&t=fj1AJefI1lxkTs5h-0)


**Solution Approaches**

V0 - Mock 21P-0969
Goal: Create a Mock online version of the 21P-0969 Income and Asset form.  

Why V0: Expedite the technical implementation of the form while providing the flexibility to enable product, design and business stakeholders to make key user experience decisions with little rework.  This mock form will include all UI elements to complete the form and provide the necessary infrastructure for the full implementation. It should support page and content flexibility so that user experience can be enhanced. It should allow for integration into larger forms, such as the Disability or Pension Benefits forms.
Hypothesis:
The mock form will speed implementation and enable User Experience design flexibility by using modular components. All UI elements should be modular, allowing for easy rearrangement of sections and blocks of information via the form configuration file including:
Adjust order and content of sections (chapters) 
Adjust order and content of pages
Adjust order of fields

**Measuring Success:**

The overall time to implement the form with product, design, CAIA and Collab Cycle input will be less than if no Mock form was implemented.

**Scope**

**WHAT’S INCLUDED IN V0:**
Basic UI elements of all 14 sections of 0969 form
Initial implementation of Conditional Logic, configurable for future logic updates
PDF Generation
PDF Form Submission to backend systems via Lighthouse API


**WHAT’S NOT INCLUDED IN V0:**

Embedded flow from 527EZ or other supplemental forms 
Finalized design and content (will come in V1)


**V1 - Standalone 21P-0969**

Goal: Introduce digitized 0969 form so that Veterans instructed to complete can benefit from streamlined, digital experience
Why V1: Implement foundational functionality so that Veterans can begin to benefit from an online form filling experience.  V1 brings the entire 0969 online as a standalone form, without the embedded experience with the 527EZ and supplemental forms contemplated for V2.
Risks:
Findability - Veterans must be able to easily locate the online 21P-0969 when instructed to fill out that form.
Form fatigue - Veterans completing the 0969 in tandem with the 527EZ or 534 may become frustrated with the amount of data required to complete the process.
Hypothesis:
By introducing a streamlined, online 21P-0969, Veterans will be provided clarity on the Income and Asset Statement process and how to satisfy the requirements for reporting their net worth in support of their 527 or 534 application.
The Veteran shall be provided an efficient path through the data collection process through up-front and conditional questions that ease their form filling burden.


**Measuring Success:**

The total number of Veterans applying for Pension benefits online that fill out a paper 0966 Income and Asset  form through another medium is reduced.
Drop offs at 0969 screens are minimized.  The 0969 is a complex form with 14 sections. Approaches to minimize drop offs include: clear calls to action and an efficient navigational structure.
The online 0969 experience does not hamper the Veteran's 527EZ or 534 pension application journey.
Research studies show that users clearly understand Income and Asset statement  screens and understand what they need to do to benefit from it.


Proposed behavior: Enable Veterans to populate the 21P-0969 form online through a streamlined, digitized process.
Veterans may complete the entire online form while authenticated or unauthenticated.  Authentication enables pre-population of applicant demographic information.
Authenticated applicants may leave the form and return to the section they most recently populated. 
A series of up-front and conditional questions streamlines the applicant's path through the form and eases their form-filling burden.
Instructional language on the form is carefully designed to best enable the applicant clarity of purpose in populating the form.
The form shall provide visual cues to the Veteran to orient them to what step of the process they are completing.
Question language on the form is carefully designed to best ensure applicant understanding of the information they need to provide and why.
The user inputted values in the online form are mapped to their respective fields in the PDF.
On the backend the 0969 responses are transmitted to the 0969 API and/or PDF for downstream processing.
Explore for V1 or future release: 
Feasibility of guiding 527EZ applicants to the standalone 0969 at trigger points and then bringing them back to the 527EZ upon completion. Depending on the level of complexity, implement as part of V1 or a subsequent release.
Including document uploads where relevant within the form rather than only at the end.
Scope
TO BE ADDRESSED / BLOCKERS:
Outstanding questions to VBA team from VBA Questions and Answers
Agreement on scope of v1


**WHAT’S NOT INCLUDED IN V1:**

Embedded flow from 527EZ or other supplemental forms (e.g. 21P-8416, 21P-4185)
Embedded flow from 534 (as it is paper only at this time)


**External items to prioritize:**

Update DOMO dashboard with Analytics team to include new 21P-0969 related pages.
Update [0969 About page](https://www.va.gov/find-forms/about-form-21p-0969/)
Create 0969 product guide to educate support teams about online form.
Update Pension product guide to inform and educate support teams on 21P-0969  functionality and behavior.
Update processing team documentation where needed



**Risks:**

Confusion- Veterans must be able to easily understand that they have met their additional documentation requirements by completing the embedded questions.
Form fatigue - Veterans completing the 0969 in tandem with the 527EZ may become frustrated with the amount of data required to complete the process.
Measuring Success:
The total number of Veterans that have to locate and complete the standalone 0969 are reduced.
Completion rates of online pension applications are not reduced.


**WHAT’S NOT INCLUDED IN V2:**
Embedded flow from 0969 to other supplemental forms (e.g. 21P-8416, 21P-4185)
Embedded flow from 534 (as it is paper only at this time)


****
