# Design System Post-mortem, 3/28/2023

## INDEX

*   [Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/Post-Mortems/Design/2023/Design-System-Post-Mortem.md#summary)
*   [Root Cause Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/Post-Mortems/Design/2023/Design-System-Post-Mortem.md#root-cause-analysis)
*   [Ownership](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/Post-Mortems/Design/2023/Design-System-Post-Mortem.md#ownership)
*   [Timeline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/Post-Mortems/Design/2023/Design-System-Post-Mortem.md#timeline)
*   [Problem Statements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/Post-Mortems/Design/2023/Design-System-Post-Mortem.md#problem-statements)
*   [Resulting Issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/Post-Mortems/Design/2023/Design-System-Post-Mortem.md#resulting-issues)
*   [Why it's important](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/Post-Mortems/Design/2023/Design-System-Post-Mortem.md#why-its-important)
*   [Solutions & Action Items](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/Post-Mortems/Design/2023/Design-System-Post-Mortem.md#solutions--action-items)
*   [Conclusion](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/Post-Mortems/Design/2023/Design-System-Post-Mortem.md#conclusion)

## SUMMARY

A multitude of factors ranging from workstreams crossing contract boundaries during PTEMS funding cuts to low UX team maturity on the CMS team has resulted in UX Design Debt and Operational Design Debt that needs to be addressed. Resolving these issues is going to be an ongoing process as we balance addressing adding new functionality to the CMS with paying off design debt.

**Design Debt** affects the integrity of the user experience. Design debt is the sum of all the imperfections of the user experience and design processes that appear over time as a result of innovation, growth, and lack of design refactoring. The larger team, not just the designers, must agree the design debt exists and that it’s important to address. Especially product management but also engineering needs to be on board. Executive stakeholders should be aware of the issue as well.

Every product, purposefully or not, starts with design. This is when the domino effect of both good and bad events begins. Understanding and measuring design debt is an ongoing process that gives the most value when continued over a long period of time. The initial examination conducted as part of [ticket #12362](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/12362) shows the current state of the design system and provides a look into what actions need to be taken to better the situation.

## Root Cause Analysis

Once the Design System Specialist position was cut due to PTEMS funding, nobody was explicitly in charge of overseeing the CMS Design System Figma and any corresponding documentation that is needed to ensure that the design system is being implemented and followed correctly by Developers. This position was part of the PTEMS contract and not the VFS-CMS contract. This gap in ownership started on Sept 11, 2022 when PTEMS funding stopped and continues today. Although the incoming designer that started on the VFS-CMS contract after PTEMS was cut was responsible for utilizing the Figma Design System in the state that it was left in, other priorities prevented them from being able to effectively manage critical design workflow touchpoints and documentation for a total of 14 sprints. This has resulted in an undocumented backlog of design debt that will continue to build until the proper time is allotted to resolve this issue as we continue to try and balance adding new functionality to the CMS with paying off the resulting design debt.

## OWNERSHIP

Product Owner

Product Manager

UX Team - Specifically Designers

Developers - Specifically Frontend

Program Manager

Leadership at both the prime contractor and subcontractor companies.

## TIMELINE

### 2022 Q3

**Sept 11, 2022: PTEMS Funding Cut**

*   Due to PTEMS funding, 70% of the UX team’s capacity was lost
    *   10 UX roles (a few were vacant) reduced to 3
    *   10 roles on a 45-person program = 22%
    *   3 roles on a 27-person program = 11%
*   The following UX roles were cut:
    *   Design System Specialist (Root Cause)
    *   Visual Designer
    *   UX Designer
    *   CMS UX Lead
    *   UX Researcher / Generalist
    *   UX Generalist
    *   Information Architect

**September 12th - 18th:**

No UX representation on the CMS team. No transfer of knowledge from the previous CMS UX team to the new CMS UX team member.

**Sept 19, 2022:**

New Product Designer starts on the CMS Team

*   This new designer is now responsible for managing tasks that were once spread across several of the positions that were cut. Some of those include but are not limited to:
    *   All CMS design
    *   All Editor research
    *   Assisting with Change Management
*   While the new Product Designer would sit on Sitewide CMS, they would be responsible for the back-end design for all three teams: Sitewide CMS, Facilities, and Public Websites

### 2022 Q4

For the majority of Q4, the sole CMS Designer was tasked with a research project for 6102 notifications. This project lasted from Sprint 72 - 76, and while there was some UI/UX work that required utilizing what currently existed in the Figma design system, the majority of these sprints were dedicated to research tasks and not to design tasks.

The following research tasks done during these sprints are listed below.

*   Writing Research Plan
*   Writing Conversation Guide
*   Research Recruitment
*   Research Scheduling
*   Conducting Research Sessions

For visual artifacts that were needed during the research sessions, the Product Designer needed to use the Design System as it existed at the time that PTEMS was cut. At this time, the Figma design system and its supporting documentation was still a work in progress, but there was a knowledge gap of what was approved and what was still a work in progress due to no overlap or knowledge transfer from when PTEMS work stopped and the new designer started. This is where the new designer discovered problems with the Design System and the CMS being out of line with one another and other problems such as:

*   Unclear and unfinished design documentation in Figma and Confluence
*   Discrepancies in design documentation from Figma, Storybook, and other Drupal tools.
*   No documented design processes on how to ensure the Design System and the CMS reflect each other.

During this time that the Product Designer was focused on research priorities, Developers were implementing things with inadequate UX input or any Design System updates being made.

### 2023 Q1

**DESIGNER TASKED WITH CMS NOTIFICATIONS PRIORITIES**

*   Sprint 75
    *   Research Synthesis & Topline Report Writing
*   Sprint 76
    *   Research Readout & Documentation
    *   (Jan 30) - UX Researcher Starts on the VFS-CMS contract.
*   Sprint 77
    *   Collecting data on outdated content for each VAMC and Vet Center
    *   Creating an outdated content runbook
*   Spring 78
    *   Updating 6102 email mockups based on research findings.
    *   Note: This was one of the only design related tasks that was given to the UX Designer.
*   Sprint 79
    *   Designer tasked with CMS Design System Audit
*   Sprint 80
    *   Designer tasked with writing Design System Post-mortem.
    *   Designer discovered that the **Design System went two quarters without anyone making updates to the design system or any design documentation.**

### 2023 Q2 (Present Day)

Moving forward, we should **PRIORITIZE ADDRESSING DESIGN DEBT** that has been accruing for a total of 14 sprints.

## PROBLEM STATEMENTS

### PTEMS

#### TRANSITION PLAN

*   No time to properly transition people off of the project. The team had approx 1 - 2 weeks notice to come up with a transition plan and execute it.
*   No overlap between design resourcing / no knowledge transfer.

#### TEAM STRUCTURE / RESOURCING

*   The PTEMS contract was used for Accelerated Publishing and for program augmentation without regard to severability. The remaining roles didn’t leave the UX team with the skills needed to function properly as a team.
*   Designer was leading research instead of doing design. Designer is currently developing processes on how to work with design instead of designing.
*   Only one person owned all of the knowledge about the Design system before the PTEMS cut. This continues to be a problem in the current team structure and could potentially be a problem for future iterations of the team if anything were to happen with this position again.
*   More thought needs to be put into what types of skill sets are available and if they’re on the proper contract.
*   Designer is caught in the middle of trying to complete work, triage work coming in, and manage competing priorities.
*   Developers were either knowingly or unknowingly making important design decisions with little UX input which is inefficient and can lead to Veteran and editor experiences that are less intuitive and accessible.
*   There has been no space for design team leadership and no opportunity for the UX team to build relationships with the client and other design teams across the VA ecosystem.
*   No visibility as to what is happening on other teams unless they come to our team first. At times there is not visibility even within our own team because not everyone has an understanding of the work that other people on our own team are doing.

### Low UX Team Maturity

Low UX maturity makes it difficult for the UX team to hold their own against many developers. Selling, convincing, and educating can take most of the UX team’s time when they should be spending that time doing design. There has not been the infrastructure in place for them to do design activities, so they need to create a lot of things from scratch.

There is an opportunity to establish clear service design processes. Service design is the activity of planning and organizing a business’s resources (people, props, and processes) in order to:

*   Directly improve the employee’s experience
*   Indirectly, the customer’s experience.

Service components are broken down into frontstage and backstage, depending on whether the end user sees them or not. Think of a theater performance. The audience sees everything in front of the curtain: the actors, costumes, orchestra, and set. However, behind the curtain there is a whole ecosystem: the director, stage hands, lighting coordinators, and set designers. Though not ever seen by the audience, the backstage plays a critical part in shaping the audience’s experience. In a restaurant, what happens in the kitchen dictates what appears on your table. Backstage components includes:

*   Policies
*   Technology
*   Infrastructures
*   Systems

When backstage problems exist, they have frontstage consequences: poor service, customer frustration, and inconsistent channels. Streamlining backstage processes improves the employees’ experience, which, in turn, allows them to create a better user experience.

#### Organization/Process/Documentation Problems

*   Lack of organization to the Figma Design System. This will be a problem as our team looks to eventually merge with the Platform team and other designers need to utilize our design system.
*   Design System Problems
    *   Too complicated from an outsider's perspective. This will be a problem as other teams start to utilize our design system for their own use cases.
    *   Current state not documented well in Confluence. The rules for how to use different UI elements are not documented in Confluence
    *   Work in progress and finalized work mixed among each other with no indication of which is which.
*   Unclear workflow processes. People aren’t knowledgeable of what the process needs to be in order to effectively work with designers because the team hasn’t had a defined process before.
*   UX decisions were being driven by Developers, whether knowingly or unknowingly due to necessity.
*   No documented process of how to implement Design system elements in Figma into Developer tools. Clarity is needed on what the process should be, who owns each step of the process, and what specific documentation needs to be updated when changes are made.
*   Designers need a better understanding of how Drupal works, but explanations from devs can be too technical from a Designer’s perspective
*   Currently, design review QA is part of the PR process, but oftentimes the designer has no context of the work that was done by the developer or why certain UX decisions were made when they are brought into this process.
    *   The designer is being brought into the picture too late into the process.
    *   This leaves not enough time for the designer to gain context on the problem and make meaningful suggestions or adjustments within the boundaries of the sprint which results in a subpar user experience once the PR is merged.

## RESULTING ISSUES

### UX design debt

The commonly known one. It is defined by inconsistent experiences throughout the product that negatively impact the learnability and integrity of the flow.

### Operational design debt

This type of debt slows down the design and development teams’ work. It can be defined as the absence of the underlying structure and processes. Symptoms that we’re experiencing:

*   Lack of design system and corresponding UI components
*   Outdated design files, not consistent with the implementation
*   Design files that are hard to work with (no components and styles, flat structure, etc.) that cause designers to build elements from scratch or spend time on cleaning up the existing files before starting the project
*   Hard vs soft design hand-off process is resulting in a less than ideal designer-developer workflow. The designer-developer communication when implementing a solution should be ongoing and not “passed off”.

### Symptoms of lingering design debt.

Long ‘housekeeping’ before starting the design project indicates issues with resources and methods. When working with outdated files, an incomplete component library and in general chaos, designers spend disproportionately a lot of time on the following instead of solving actual design problems:

*   aligning styles, assets and components with the implementation
*   creating mockups from scratch
*   looking for and understanding past design files
*   writing usability testing documentation from scratch

## WHY IT’S IMPORTANT

The longer the team postpones addressing the design debt, the harder it is to get it done. Customers get used to the current implementation and changing anything can potentially ruin their workflows resulting in more difficult change management.

As the CMS team is planning to join the Platform team and as other VA teams could potentially have their content live within the CMS, the Design System needs to be in a state that is useful for other teams to utilize so that they can easily create visual artifacts for the use cases of their own team and so the CMS team can provide helpful support to these teams as they interact with the CMS team as part of the CMS Collab Flow.

*   **Slow growth** as introducing any change requires a disproportionate amount of work.
*   **Reduced adoption and customer satisfaction** as new solutions are clunky and the system is less and less coherent. Users are having a hard time learning and using the product.
*   **Low team velocity** as every time a change is introduced, the domino effect of additional work starts.
*   **Difficulties in accommodating new features** as the solutions developed so far were meant for the simpler and smaller product.

## SOLUTIONS & ACTION ITEMS

*   **Better Documentation**
    *   An epic has been created for “[Establish CMS DesignOps](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/12843)” and any design related process tickets are now being added to this epic as we make new discoveries.
    *   We are in the process of creating reusable Github ticket templates and plan to write a runbook that includes instructions for every touchpoint that needs to stay in line in order to have the Design System implemented in the CMS as intended.
    *   The implementation of each design system element will be tracked through the [Design System Implementation Spreadsheet](https://docs.google.com/spreadsheets/d/1b5BxRM9UlM74G3dgKfJM1dqSeN8QoQrwzGAtbGiwdeE/edit?usp=sharing) and will be updated as we identify new updates and monitor the status of these updates.
    *   In order to establish better governance, we will be updating Confluence to establish rules for how Designers and Developers should work together as a project progresses through the different practice areas of the team.
    *   Determine what should be the source of truth for which developer tool is used to implement design system decisions and document it.
    *   Organize the CMS Design System in Figma to follow established organizational patterns used by the Platform team.
*   **Pre-planning for contract severability**
    *   Ensure that UX resourcing is adequate for the needs of the project and ensure that these roles are funded on the project that they’re assigned to and not an ancillary contract.
    *   Don’t have one person that has all the knowledge in one particular area.
    *   This information will need to be communicated to the company leadership of the prime and subcontractors to ensure that staffing decisions are fully considered for the project.
    *   There is no UX voice for the CMS Team at the prime contractor level. All UX team members are subcontractors, but all staffing decisions are being made by the prime contractor with very little input given from the people closest to the work.
*   **More collaboration amongst our team and with other teams.**
    *   Updates are being made to the [Collab Flow Documentation](https://va-gov.atlassian.net/wiki/spaces/VAGOV/pages/1791459333/CMS+Collaboration+Flow) and we are currently working on strengthening these processes. There is an epic called "[CMS Collab Cycle Pilot](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9672)" to ensure that this gets done.
    *   Shift the CMS Collab cycle to also collab amongst our own team, not just external teams.
*   **Gain more visibility into other teams’ work within our team and outside of it.**
    *   We are making progress towards a more solidified collab flow which will inherently allow our team have a better idea of the work that is happening on other teams
*   **Plan to address Design Debt tickets**
    *   Aim to do one Design Debt ticket per sprint, when capacity allows.
*   **Establishing service design processes**
    *   Create a runbook for how design sytem elemets should get from Figma to the CMS.
    *   We will include the Github ticket templates that can be reused as a part of this runbook
    *   This runbook will establish who owns what steps and who owns updating which each necessary channel.
*   **Improve our agile processes.**
    *   Try setting up a monthly meeting with Agile Coach to discuss ways to better involve the UX team.
    *   Try meeting 1-1 with Devs for UX team members to learn more about how Drupal works.
    *   Don’t have UX and Dev happen in the same sprint, if possible.
    *   Bring the UX team in early on in the project. Have them start the process and collaborate with the Dev team instead of having design decisions be led by the Dev team.
    *   The Dev team should be responsible for implementing the agreed-upon design in a way that makes sense within our current tech infrastructure.
    *   It’s up to the Developer to determine what developer tools (theme, widgets, storybook) need to be updated to ensure that the design system is implemented as intended by the designer.
    *   Before a Developer installs a new Drupal Module, Developers MUST collaborate with the Designer to ensure that the chosen module meets UI/UX standards.

## CONCLUSION

*   A crucial UX role on the CMS team (Design System Specialist) was cut when PTEMS funding was cut.
*   This role should have been part of the VFS CMS contract, not funded separately through a different contract.
*   Design debt accrued for a total of 14 sprints because nobody was explicitly tasked with overseeing the Figma design system and all of its supporting documentation.
*   The Designer that was on the team was focused on research priorities and 6102 notification priorities instead of overseeing changes to the Design System and what existed of its supporting documentation.
*   The team is currently experiencing the symptoms of lingering UX Design Debt and Operational Design Debt.
*   Until the proper time is given to address design debt and establish CMS design ops processes that will set governance standards, this problem will continue to grow and become more difficult to fix.
