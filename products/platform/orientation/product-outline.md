# VSP Product Outline Template

# Platform Orientation

## Overview
*When a new VFS team joins or a new person joins a VFS team, Platform conducts platform orientation (a series of meetings and reading material) to introduce VFS teams to processes, standards and expectations of developing on platform.*

## Problem Statement
The current problems orientation faces are the following (in priority order):
1. VFS teams struggle with retaining information shared in Orientation. 
2. There is no reliable process for Platform to be notified of new VFS team members.*
3. It is challenging to keep the content in the slide decks up to date.* 
4. Not having separate platform processes for new teams vs. new team members is inefficient. 
5. Platform team members spend a significant amount of time hosting 1:1 orientation meetings.
6. Content that VFS teams would find valuable is not included in orientation. 
7. The current orientation process is not scalable.
8. VFS teams struggle to find information shared in orientation.*
9. (assumption) VFS teams get too much information too quickly.
10.(assumption) VFS teams don't know what VA.gov is and how it works prior to general orientation.*
11. VFS Product Owners are not familiar with Platform processes and policies.

In a MURAL session with our Product Owner on 9/1, the following matrix was developed to help prioritize which problems to solve for first:
![image](https://user-images.githubusercontent.com/71330581/131703640-bf44ba7c-a465-45e5-bd70-f99ea4fdfb0f.png)

The MVP will attempt to solve for problems #2, #3, #8 and #10. 

## Personas
- Brand new VFS teams
- New VFS team members on existing teams

## Measuring Success

### Key Performance Indicators (KPIs)
* What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?
* _What are the most important metrics that track with this product/initiative's success?_

* Reduction in number of hours per sprint dedicated to hosting orientation meetings
* Reduction in quantity of questions per sprint on #vfs-platform-support relevant to "where do I find..." or "how do I..."?
* Reduction in quantity of questions on #vfs-platform-support from new VFS team members
* Increase in page views of Getting Started page
* Decrease in notification of new team members via Slack, ToT meeting or via Email

#### Baseline KPI Values
* _Baseline values for those most critical metrics, if possible._

---

## Assumptions
Platform is making 2 assumptions, also detailed in the problem statement above.

1. VFS teams get too much information too quickly. (#9 in problem statement)
2. VFS teams don't know what VA.gov is and how it wokrs priot to general orientation. (#10 in problem statement)
3. We assume that VFS team members who do not receive orientation may not be aware of Platform processes and policies, meaning they could build products that don't meet Platform standards.

## Solution Approach

MVP/Phase 1 solution:
The MVP will have 2 parts. The first iteration of the MVP will include migrating all existing Orientation slide decks to the Getting Started page of Platform Website. 

The 2nd iteration will focus on the design of the Getting Started page, and will include transfering content out of the General Orientation deck to pages within Platform Website. Platform also plans to include a solution for giving new teams/team members knowledge/an overview of VA.gov and potentially sharing veterans use cases. This will either manifest as a VA.gov Overview video that we ask VFS teams to watch, or asking VFS teams to perform a list of tasks on VA.gov with staging log ins. Lastly, Platform would like to modify an existing or create a new Github ticket (that is linked and accessible from Platform Website) that will notify Platform team members of the new VFS team members (not new teams). This will help Platform manage intake of new team members as right now there is no reliable process.

Phase 2 solution:
Using General Orientation as an example, other Platform teams will follow suit and transfer content from their Orientation decks over to Platform Website. For orientation decks where there is no defined Platform team owner (ie Design Orientation), we will need to identify a solution. 

A more detailed approach has been documented and is currently commented out. View file in raw form to read in detail.
<!---
We are taking a 2-pronged approach to resolving the problems identified in the Problem Statement.

The first approach will be to create a one-stop shop/self-service tool/landing page for Platform Website that has all of the guidance and documentation VFS team members will need to start supporting their VFS team on VA.gov. The content of this landing page will be organized by VFS team member roles (General, PM, BE Engineer, FE Engineer, Designer/Researcher). Content will live in it's appropriate location on Platform Website, however it will be linked/accessible from the landing page. The team hopes to use the Getting Started page on Platform Website for this purpose. An MVP of this page could be the content in the current orientation decks (transformed to Platform Website guidance), with later iterations including additional content identified through Platform research. 

The second approach will be to update and modify the existing process for orienting new teams and new team members. Utilizing the landing page above, new VFS teams will be directed to open a github ticket using an updated [New Team VSP Orientation Epic template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=&template=orientation-epic.md&title=New+Team+VSP+Orientation). This ticket will be modified to reflect the responsibilities of a brand new team only. In addition, new VFS team members will also be directed to open a github ticket with a new template (also accessible from the Platform Website landing page). This new template will be an abbreviated version of the new team template. This is necessary to ensure that the new team member is added to the appropriate VFS team in the VFS team Roster, as well as other tasks TBD. Both templates will ensure that the right Platform teams are notified of the new team/team member. Both templates will also be dependent on the content outlined in the Platform Website landing page (per the first approach above). 

We are starting with the landing page because we already know the slide deck content is valuable for VFS teams. Some of this content may already exist on Platform Website, and therefore can be easily referenced on the landing page. For the content that does not already exist on Platform Website, the appropriate owner will be identified and a ticket will be added to that teams backlog so that content can then be migrated from github or created.

To ensure content referenced on the landing page remains up to date, the acceptance criteria on the Platform initiative outlines will be modified. Platform teams will be asked to verify that the release of their product/iteration does not impact Platform Orientation documentation. If it does, they will need to update the documentation appropriately before release of their product.

There is the [VFS Orientation Epic template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=vsp-product-support&template=vfs-onboarding-epic.md&title=Orientation+for+______+Team) that is used by Platform Product Support to manage orientation from the Platform perspecive. Valueable information from this ticket can be merged with the New Team VSP Orientation Epic template and this template can be archived.

We are taking this solution/approach over others because it allows important information to be accessed indpenedently, but also allows us to separate the solution for new team orientation from new team member orientation. New team members and new teams can both benefit from this landing page, however new teams will still need a different, more personal approach to orientation. We still plan to have orientation meetings for new teams, however they can be modified and/or abbreiviated so they only cover what is not included in the landing page. We also recognize that there is value in new teams meeting face-to-face with Platform teams as they being their work on VA.gov.

The solution/approach may evolve to include other content and/or valuable information from other non-platform teams. 
-->


## Launch Dates
- *MVP Launch Date*: ~October 2021

---
   
## Screenshots

_Include before/after screenshots, if applicable. Delete this section otherwise._

### Before

### After

---

## Reference Material

_Link to the following materials as relevant._

- VFS-facing Product README (in `/platform`)
- Release Plan
- Any product health or success dashboards

### Communications

<details>

- Team Name: 
- GitHub Label: 
- Slack channel: 
- Product POCs:

</details>

### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
