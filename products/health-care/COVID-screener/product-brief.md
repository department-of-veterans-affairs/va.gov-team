# Pre-entry covid screener

## Background and context

As the country begins to reopen, VHA facilities face a new reality where (1) the number of persons on a facility campus will continue to increase back towards pre-crisis levels; and (2) all of those persons will be required to complete some type of pre-entry screening for covid infection and/or exposure to the novel coronavirus. In the past week, the Office of the Chief Technology Officer (OCTO), working with our VHA partners, have identified four isolated efforts to utilize digital technologies to conduct pre-entry screens for actionable symptoms. 

In the most mature effort we have observed, the Durham VAMC has launched a webpage that contains an interactive set of screening questions. Rather than answering these questions face-to-face with a VHA employee or volunteer before being granted admittance to the facility, visitors and employees alike are instructed to complete the online screener and then display the result (a red or green screen) at an entry checkpoint. Those who display a green screen, having not reported any symptoms, are given a sticker for the day and allowed to proceed. Those who display a red screen are directed either to a triage area, or if an employee, to occupational health.

## Opportunity

The Durham VAMC implementation of a pre-entry covid screener was intended for use exclusively within that facility. Other efforts are similarly localized. OCTO believes there is an opportunity to begin aliging around a single, nationwide pre-entry covid screener to reduce the duplication of effort, allow for greater standardization of screening protocols across VISNs, and ensure protocols are updated quickly and timely through the use of common technical architecture.

A further, and potentially more important opportunity is to leverage the opportunity for a subtle behavior change in patients and visitors to VHA facilities. By encouraging a digital interaction with the VHA prior to entering a VHA facility, patients and visitors will feel more comfortable and be more prepared to engage in more complex and engaging pre-visit activities through digital means. For example, in addition to completing a mandatory pre-entry covid screen, a patient could "level up" on their next visit to using the same or an adjacent tool to check in for their appointment or receive up to the second instructions on which entrance to use or whether to wait in their car instead of a crowded waiting room.

Beyond activities closely tied to the physical proximity of a patient or visitor to a VHA facility (e.g. completing an entry screener or checking in for an appointment), the possibilty of high levels of engagement in pre-visit activities such as questionnaire or health summary submission become more possible. However, to cross the digital divide to reach patients and visitors that would not otherwise consider interacting with VHA digitally, we have to start small. OCTO views this as an excellent opportunity to do just that.

## Proposal

OCTO proposes to build a common pre-entry covid screener delivered on VA.gov. The initial tool will be based on experiences collected from VHA colleagues and direct observations of the Durham VAMC localized implementation and will evolve iteratively based on quantitative and qualitative data collected from patient and visitor users. As engagement with the pre-entry screener increases, OCTO will rapidly scale out to incoporate other common sense functionality, such as appointment check in or customized facility updates and wayfinding. As the product continues to grow, it will link up with a concurrent effort already underway by OCTO to define and deploy a high value pre-visit experience.

In addition to a robust pre-entry tool focused on patients and visitors, OCTO will also explore and, if approrpriate, implement a specific tool for VHA employees, contractors, and other frequent visitors. This may simply be a branch in the logic of the patient and visitor focused tool, or it may be a unique experience altogether.

OCTO will use the following foundational concepts to shape the first iteration of the pre-entry screenign tool. These concepts will be revised and refined based on information continuusly gathered from the field:

- Screening questions should tie back to the latest CDC guidance;
- Screening should take place as early as possible in a persons visit to a VHA facility, ideally before they have physically entered the facility;
- Screening should involve as little human interaction or contact as possible to reduce possible transmission;
- The screening includes a binary decision based on the person's responses: if any symptoms, the person is directed to a designated triage structure or area; or, if no symptoms, the person may proceed into the facility; and
- A person's screening is good for one day. There is little/no need to screen a person multiple times per day.

## Scope

The proposal above includes:

- complete, end-to-end design, development, deployment, and continuous iteration of pre-entry screening functionality;
- the ability for VHA to update screening protocols (e.g. question content, order, conditional logic) in 24 hours or less from receipt of requested change;
- close involvement and collaboration with VHA partners in all clinical aspects of the product;
- instrumentation of the product with appropriate feedback mechanisms to gather usage and other behavioral data; and
- high availability of the product on the VA.gov platform.

During the initial phase of this work, the following are not in scope: 

- the ability to localize the pre-entry screener to individual facilities;
- integration of the pre-entry screener with the electronic health record system or other patient-specific system;
- the requirement that a patient "log in" to access the pre-entry screener; and
- the use of usage or behaviorial data gathered from the tool for epidemological purposes without further study and validation.

## Team

Work on the pre-entry screener will be carried by members of OCTO and their contractors. Guidance, prioritization, and leadership will be provided by:

- {name}, {title} - VHA business owner
- Charles Worthington, Chief Technology Officer
- Lauren Alexanderson - OCTO health portfolio lead
- Patrick Bateman - OCTO product lead

## Next steps

In recognition of the immediate need for a solution, development of a VA.gov pre-entry screener began on May 8th, is anticipated to be ready for business owner review no later than May 19th, and upon approval will be deployed immediately. The OCTO team will continue to work with VHA colleagues engaged in interim efforts to learn from their implementations and gather data directly from users.
