# How We Work

## Background
The Disability Experience (DBEX) teams (T-REX and Carbs, collectively referred to as DBEX) have been collaborating with each other and with VA's Office of the CTO (OCTO) as part of a distributed product development effort. While all teams have effectively addressed veterans' problems and challenges with the online 526 form, there is a shared belief that more can be done to enhance collaboration across teams and with OCTO, aiming for a more efficient veteran experience when filing for and receiving disability compensation. DBEX and OCTO wished to identify improved methods for team collaboration with OCTO, empower teams to self-manage their workflows, increase team satisfaction with their work, share responsibilities more comprehensively, and foster a unified platform of knowledge rather than fragmented pieces, all while prioritizing quality over quantity.

In early August 2024, DBEX and OCTO identified several challenges falling into three main categories: strategic planning, delivery, and knowledge sharing. Strategic planning challenges include difficulty understanding the business objectives of tasks, features, or initiatives, unclear strategic planning processes, lack of data-informed decision-making, managing multiple concurrent initiatives, challenges in scoping initiatives, handling urgent time-sensitive tasks, and ensuring team members feel their contributions are meaningful. Delivery challenges involve slow progress on initiatives, ambiguity around completion criteria, tight timelines and delivery pressures, frequent context switching, and a perceived lack of ownership over planning processes. Knowledge sharing challenges encompass over-specialization in product areas, silos of knowledge between teams, separation between veteran-facing and backend work knowledge, risks of burnout and turnover within DBEX teams, insufficient collaboration across teams, and unresolved technical debt.

## Proposal:
To improve how we work, OCTO asked DBEX to come up with a proposal for how we might address some of our shared challenges. DBEX and OCTO will iterate on the proposal, and begin implementing the agreed upon changes listed below in mid-to-late August 2024. DBEX will identify the action items that will best optimize roadmap and the experiments that we will run in Q3 and Q4 2024. For each, either DBEX or OCTO will own the action items most appropriate while also understanding that this is a highly collaborative effort that all teams will be executing together.

* Create a cadence of reviewing new and existing high level initiatives with OCTO on a quarterly basis
* Create a monthly **strategic planning meeting** with leads from each team and OCTO (OCTO PO and Design Lead, DM, PM, Team Design Leads, Team Engineering Leads to:
  * Better define initatives and epics for upcoming sprints. We’ll;
    * Engage roles across both teams and OCTO to drive clarity on problem statements, success criteria, definition of veteran impact, defintion of business impact. Effectively working ahead of the team with improved understanding.
    * Assign work based with consideration given to 1) current workload and priority work 2) each team’s current area of skillsets or competencies
    * Define and leverage shared language of Veteran impact as a mechanism to aid with prioritization
    * Understand how constraints impact delivery timing
  * Understand how we’ll collaborate across teams to solve the Veteran problems
    * Understand how members of either team need to be involved in work that another team is working on
  * Deliver faster with higher quality
    * Use WIP limits to limit the number of Features (Epics) a team is working on at a given time (proposal: 2)
    * Maintain an open “lane” for 1) tech debt, and 2) urgent unplanned work (Proposal ~10-20%)
    * Break down Initiatives into small increments that can be delivered quickly. Aim for < 6 weeks
* Create mechanisms for cross-team collaboration
  * Build clear and consistent practice for brainstorming/ideating across roles and teams
* Improve and leverage UX, Product, and Engineering metrics to measure against defined success criteria

## Risks & Challenges
* When distributing work across multituple teams,  teams may need time to re-familliarize themselves with the problem space and codebase
  * Strategic planning meetings can be used to surface and socialize features of form 526, sharing knowledge across Product, UX, Design, Delivery, and Engineering
  * Appropriate documentation can be created to share knowledge
  * Sprint Reviews can be further augmented to index on knowledge sharing
* Current areas of product specialization could pigenhole teams into doing the same work, and thus not spreading knowledge
  * We’ll need to balance time to value with the cost of spreading knowledge
* We may not currently have a shared language of Veteran impact.
  * If not, this will need to be created with alignment across all teams involved
* Unplanned and urgent or time-sensitive requests may still come up mid-sprint.
  * We’ll try to get ahead of this with monthly strategic planning meeting
  * The effort required to ship these items may exeec the dedicated “lane” for tech debt we’’ve allocated
* Create a cadence of reviewing new and existing high level initiatives with OCTO on a quarterly basis - becomes irrelevant due to monthly mtg

## Open questions:
* does OCTO have a quarterly planning?
  * Yes, there's a Quarterly Business Review (QBR) that we can leverage. Might there be touchpoints before and after this?

## Next Steps
1. Gather additional feedback from DBEX and OCTO on proposal
2. Identify the experiments OCTO and DBEX will run in Q3 and Q4
3. Identify concrete actions and owners for each that will best optimize the roadmap
4. Implement the identified processes and mechanisms
5. Daily or weekly discuss the established changes and identify any adjustments that need to be made


## Appendix
Constraints:
**way more engineering work than design work that is under important time pressure**: the EVSS-> LH migration and CY work is large, complex, and unfolding in real-time in ways we cannot control because we are dependent and collaborating with other teams. This has separated design and engineering pretty heavily because there simply isn't design work on these projects, yet engineering is fully indexed.
new priorities and requests will come to us pretty often, and we sometimes have to pivot to take them up, especially if they have a higher Veteran impact than what's currently on the plate. Or tied to something like a congressional mandate. This can cause churn and context switching, but it's unavoidable at times.
competing desires between VBA business partners, OCTO gov leads, Veteran feedback, and product team interest
OCTO plans  priorities generally a quarter ahead -- work further than that may be broadly accurate, but will likely be changed and tweaked and shouldn't be considered in stone.

Current state:
Prioritization sheet needs updating now that we're in July, and the descriptions need refinement. What's done? what's left? Any expected timelines should also be consistently noted. The description  of the initiative should help shape a clearer definition of done.
too many competing initiatives at a single time and may continue the problems noted above

Next Steps:
* Use next session to get into specific problem solving
* Can we set WIP limits
* Identify the action items that will best optimize roadmap
* Identify the experiment we’re goign to try next quarter
* Lisa & Jared to name the right structure of the conversation for next time


**Emily:**
prioritization, roadmapping, and work planning.
~~too many big-ticket initiatives,~~ 
~~there's a lot of cost and risk of burnout when context switching between them.~~ 
~~Some of those requests have tight timelines and speed pressure,~~
~~new, random things can come in too.~~
~~when initiatives go on too long~~ 
~~Initatives aren't clear when they're done~~
~~Initiatives have to get picked up and put down many times.~~
~~It's great to feel that you've made an observable contribution~~
~~desire for more space for collaboration and coworking on problems, which can be lost when there is pressure to churn out across a couple of different initiatives.~~ 
~~We noted a specific desire for engineering to be involved earlier in the process~~

**Notes fom Product Sync**
~~How might we move towards smaller feature delivery? - shorten time to value~~
~~increase collaboration across team roles (Eng, Product, Design)~~
~~empower teams to be more responsible for how to prioritize work and delivery timing~~
~~improve work planning~~
~~limit context switching~~
~~more alignment of the definition of done for certain work or features~~
~~How can we balance Veteran and business need while controlling context switching and teams timelines?~~


Goals for changes

The goals we are trying to achieve by having these discussions: 
- Better way of working across both teams with OCTO
- Empowering the teams do decide for themselves how they work 
- Increase team satisfaction on the work they are doing
- Share responsibilities and create a platform that both teams have full knowledge of (vs. pieces) (IOW - shared knowledge vs. speciality knowledge) 
- Deliver quality vs. quantity
