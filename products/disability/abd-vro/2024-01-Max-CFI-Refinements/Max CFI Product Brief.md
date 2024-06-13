**November 6, 2023 update:** Since this brief was written, we have launched a pilot in production for tinnitus (our MVP), set up an A/B test to assess the effectiveness of our intervention, and conducted broad, exploratory research to inform the direction of this project. We have gotten signals that our intervention is working and are ready to move forward with the next phase of this work – improving our intervention by giving Veterans more timely and accurate information and empowering them to make informed decisions about their disability claims.

Max CFIs: reducing the number of tinnitus CFI that are confirmed & continued at 10% (the max rating)

Last updated: June 30, 2023

Updated by: Amy Lai

Product: Disability Comp Application (21-526 EZ) | Initiative: Max CFIs

**Problem space**

The VA receives many claims for increase (CFIs) for conditions where a Veteran is already at the maximum rating for that condition. In most cases, the condition will be confirmed and continued (C&C) by a claims processor.

Although actions are "quick wins" for their production points, it still requires claims processor time to review and process the claim – time that could be spent on more complex claims.

In FY 2022, this resulted in approximately 20,000 VA.gov CFI that were confirmed and continued at the max rating. A screenshot of the top 15 diagnoses, in terms of claim volume, is shown below.

**Hypothesis**

By educating Veterans that they’re already at the schedular maximum rating at the moment they are filing a claim, we can reduce the number of VA.gov CFI that will likely result in a C&C decision, thereby reducing VSR/RVSR burden and Veteran stress of processing and submitting these claims.

**Initial focus**

Our first effort will target one type of claim: tinnitus CFIs that are submitted on VA.gov. Why tinnitus? It represents the largest group of CFIs that were confirmed and continued at the maximum rating in FY 2022 (~11,000 of the 20,000 VA.gov claims). It’s also a good test case because it is virtually never granted over the 10% rating (it happens approximately 0.001% of the time). However, at the same time, the number of tinnitus claims C&Ced at 10% have increased over the past few years as shown below.


**Measuring Success**

**Objective**

To reduce the burden of VSRs/RVSRs of developing claims when the Veteran is already at the schedular maximum and to reduce the burden/stress of Veterans of submitting claims that will likely result in a C&C decision.

Based on a review of literature on similar education-only interventions, we anticipate that our intervention might result in an 0-10% reduction in tinnitus claims submitted at the maximum rating. We plan to conduct A/B testing to assess the impact.

**Desired outcomes**

- Veterans understand what it means to be at the schedular maximum and what their options are
- Veterans are empowered to make informed decisions over their disability claims through accurate and timely information
- VSRs and RVSRs are not negatively impacted
- There’s no impact to Veteran survey ratings

**Undesired outcomes**

- The changes we make cause Veterans to feel confused, dissatisfied, or distrustful of the VA, or that the VA is trying to not provide them benefits.
- Veterans miss out on benefits they may qualify for (e.g., individual unemployability, extra-schedular evaluations) due to the changes we make
- There is an increase in tinnitus CFI at the schedular maximum that are confirmed & continued

**How we plan to measure success**

**Context**

According to the VA Rated Disabilities Report / Evaluation by Disability in Tableau as of June 2023:
- There are 2.8 million rated tinnitus claims total
- 8,000 out of 2.8 million are service connected at 0% (.29%)
- 28 out of 2.8 million have extra-schedular evaluations (.001%)
  - 8 claims are rated at 10%
  - 10 claims are rated at 20% (with 4 of these being pension benefits)
  - 2 claims are rated at 40%
  - 5 claims are rated at 50%
  - 3 claims are rated at 100%

**Learning goals and measurements**

[Mural for Analyzing the Effectiveness of our Solution](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686611425680/24441fa7cc71e50b4b1dbd9e053693655b4e0b5e?wid=0-1689028207719)

**MVP solution**

**What’s in scope**

In the spirit of launching something smaller, simpler, and sooner, we are planning for a MVP solution that consists of the:
- Ability to check whether the Veteran’s current rating is at the schedular maximum, and if so
- Displaying copy that informs the Veteran that they’re at the max rating, and
- Saving this data so we can validate through analytics whether we can influence the Veteran’s behavior
- For one condition: tinnitus
- Focusing on VA.gov CFI only


**What’s not in scope**

In future iterations, we might want to:
- Expand our solution to additional conditions
- Incorporate front-end changes that are more interactive
- Explore repeating this education in other parts of the 526 for consistency or elsewhere on va.gov, such as in the claim status tool
- Build an API that enables us to check what the max rating is for any given condition
- For valid claims for increase, there may also be opportunities to inform Veterans of the requirements to meet the next % level, which could help set expectations about what might be coming at a C&P exam, support them providing the right documentation, or lead to them opting-out of the claim if they realize they don't meet the requirements

**Assumptions/Risks**

We plan to validate against the risks by conducting research with Veterans and gauging the effectiveness of different versions of messaging we could present in the 526 application.

**Value Risks (will people use it)**

- It is possible Veterans will read our warning message and submit their claim anyway
- We will know if this is happening if the rate of CFIs doesn’t decrease after implementing our changes.
- It is possible that Veterans will misinterpret our messaging and be discouraged from submitting a claim at all.
- It is possible Veterans will be discouraged from filing a CFI even when they have a valid reason to do so at their max rating.
- We can consider implementing some additional language for those rare exceptions.

**Usability Risks (can people figure out how to use it)**
- It is possible that our messaging won’t be easy to understand for Veterans
- It is possible that our messaging may be interpreted to apply to more than one condition and change Veteran behavior.

**Technical Feasibility Risks**

- It is possible that we cannot reliably fetch the Veteran’s existing rating – although, this is something we validated through early technical exploration and the Veteran’s rating is data that exists.

**Organizational Viability Risks/Constraints**

- It is possible that VA stakeholders will be concerned that we will be discouraging Veterans from filing claims, especially valid claims. However based on conversations with our VBA stakeholders, the risk is low since MVP is focused on tinnitus claims. Fewer than 30 out of 2.8 million rated tinnitus claims have a rating over 10%. That being said, we will continue to work with our stakeholders to validate our approach and messaging, especially when we expand beyond tinnitus.

**Checkpoints**

We should consider pivoting if, through Veteran research and technical exploration, we find that:
- We can’t influence Veterans’ decisions to file a claim for increase when they’re already at a maximum rating — i.e., alerting and educating them has no impact on their behavior.
- We can’t fetch data on a Veteran’s existing rating, it takes too long, or is prone to break.
- We discover that we can’t change the Rated Disabilities screen on VA.gov AND there’s not a way to insert the messaging on a subsequent screen
- Something about the design system or front-end components makes implementation very difficult
- We are discouraging Veterans from submitting valid claims

What is not a deal breaker:
- Circumstances that might extend our timeline, such as VFS platform onboarding and collaboration with other teams. If this process takes longer, we should be open to extending the timeline and working on reducing the burden caused by EP400s in parallel. 

**Related artifacts**

- Evaluation of 7 ideas that would make va.gov claims more complete, actionable, and less burdensome for VSRs/RVSRs [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684352754931/fc8a7fd10083442790a6fdfceaed111ef2472ecf?sender=ua42f7003779134a5bd576137)
- Brainstorming open questions, what the simplest/smallest solution could be, reasons that would suggest needing to pivot from this idea, and tasks to complete [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686611425680/24441fa7cc71e50b4b1dbd9e053693655b4e0b5e?sender=ua42f7003779134a5bd576137)
- Max CFI Refinements research plan [GitHub Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2024-01-Max-CFI-Refinements/2024-01-Max-CFI-Refinements-Research-Plan.md)
- Project brief slide deck [Google doc](https://docs.google.com/presentation/d/1c38hcsSCwEPUVC7xsBuUz0hkIfMKlKVGmbro67IPZ5g/edit?usp=sharing)
- Prototype [Codepen](https://codepen.io/team/a6it/live/KKEMGGE)

**Team and timelines**

Timeline:
- Pilot launch: September 5, 2023
  - Kick off: #62491
  - Contact Center / Veteran Support Team review request: #64605
  - Platform Security review request: #1222
  - Google Analytics request: #62370
  - Launch plan: [Google doc](https://docs.google.com/document/d/1EcbIeiju10luMV2BjRobF1Lgr-uzpO0z80hPsTd2WiA/edit)

Next iteration
  - Discovery & concept testing research - October 2023
  - Usability testing - November 2023
  - Refinement testing with AT users - Jan/Feb 2024
  - Kick off:

Communications
  - Team Name: Employee experience team
  - GitHub Label(s): N/A
  - Slack channel: #benefits-cft-employee-exp
  - Product POCs: Emily Theis, Zach Goldfine, Jennifer Bertsch

Stakeholders
  - Office/Department: VBA Office of Benefits Automation
  - Contacts: Andrew Gray, Karla Leal, Joshua Will
