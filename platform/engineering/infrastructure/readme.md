# Infrastructure 
Hello! In this folder, you'll find information specific to how Infrastructure/Devops Engineering works on VA.gov. 

### Communication channels
- Slack channels: #vetsgov-devops, #vsp-operations
- Github labels: [operations](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/board?labels=operations&repos=133843125)

### Points of contact
The Infrastructure points of contact are:  
- [Wyatt Walter], @wyattwalter on Slack, [@wyattwalter](https://github.com/wyattwalter) on Github
- [Andrew Gunsch], @gunsch on Slack, [@gunsch](https://github.com/gunsch) on Github

### Table of contents
The following list is a set of resources compiled by the people in your practice area to help you do your work and answer questions you might have. Some of the links may take you to other sites and resources outside this repo. If you need a hand with anything, don't hesitate to ping the Slack channels and people listed above.
- Hosting Architecture
    - [Overview]()
    - [AWS networks]()
    - [Website proxy]()
- Environment/tools setup
    - [SOCKS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md)
    - [PagerDuty](https://github.com/department-of-veterans-affairs/devops/blob/master/terraform/environments/dsva-pagerduty/README.md)
    - [AWS](https://github.com/department-of-veterans-affairs/devops#setup)
- On-call / Operational Basics
    - [Incident Response](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/triage/incident-response-playbook.md)
    - Alert descriptions
    - Postmortems
- Configuration Management
    - [Terraform]()
    - [BRD]()
    - [Jenkins]()
- Tools
    - [Sentry]()
    - [Grafana](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/grafana-overview.pdf)
    - [Prometheus]()
- [External Service Integrations]()
    - [Adding a new integration]()


---

# Previous Readme Content From Deprecated 'Work Practices' Folder
The Vets.gov DevOps team has gone by both "DevOps" and "Platform" over time. You may find references to either in GitHub. While we do our best to update them all, some references can get missed. This team was renamed back to "DevOps" to avoid name conflicts with the [Digital Services Platform project at the VA](https://github.com/department-of-veterans-affairs/va-digital-services-platform-docs) (aka Lighthouse).

<details>
  
<summary>DevOps Orientation</summary>

## DevOps Orientation

Welcome to the team! If all has gone well, you've made it through our [main orientation section](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/orientation) and you're ready to start work with the DevOps teem. This should help you get started. 

Resources from the sprint teams will work with the DevOps team regularly to encourage further cross-product communication. During orientation, find out what we do, our history, our responsibilities, and who the people are who share those responsibilities.

[Get started on the DevOps team]().

</details>

<details>
  
<summary>Scope</summary>

## Scope

DevOps provides development and maintenance resources with a focus on establishing reusable libraries, patterns, and processes for use across the Vets.gov project. Efforts may span the entirety of the project stack, including documentation, design, frontend, backend, supporting services, process, and infrastructure.

This team should be consulted on new application sprint team developments, but will not monopolize development of cross-product features. Rather, they are responsible for helping these teams build those features as reusable, maintainable components.

</details>

<details>
  
<summary>History</summary>

## History

The DevOps team originally provided infrastructure and deployment processes for the Vets.gov project. The DSVA maintained a separate team to build similar components for Appeals. Both projects continued to develop separate infrastructure and utilities to better support application development. Frequent dialog between the teams led to the utilization of similar technologies, but implementation details differed.

An effort to reduce the duplication of work and take advantage of the common technology stack led to the development of a framework capable of providing a common set of tools and provisioning with the ability to customize as needed for each project. This work, resulting in the ability to solve common problems faced by both teams, led to the creation of the DSVA SRE team. This new team breaks down silos between the Appeals and Vets.gov teams, and provides the opportunity to further scale resources and services into additional DSVA projects and ultimately to the VA. For more information, see the [SRE Team design rationale](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/SRETeam.md). 

DevOps historically contributed to a common technology stack across the Vets.gov application stack as well. The team developed common monitoring, logging, exception tracking systems, and assisted with the integration of basic resilience patterns. Contributions to documentation and process helped formalize requirements for code review and incident response. 

This team continues to break down silos between sprint teams by reimplementing the pattern that led to the DSVA SRE team. 

</details>

<details>
  
<summary>Responsibilities</summary>

## Responsibilities

Responsibilities includes operation and maintenance of Vets.gov systems, as well as development aimed at providing new features for and enhancement of those systems. Additionally, we develop documentation, libraries, services, and features that enhance and enable the development of products across the application sprint teams. We train and consult with application sprint teams to ensure these resources are utilized properly, and encourage ownership of product operation in the production environment.

### Vets.gov

* Develop and maintain infrastructure
* Develop and maintain high-level monitoring and alerts functionality
* Develop and maintain deployment pipeline
* Develop and maintain source control management
* Develop and maintain change preview functionality
* Record release/deployment information
* Respond to operation and security incidents
* Maintain backup systems and execute recovery operations
* Optimize for system performance
* Perform schema modifications and data migrations
* Develop and evangelize platform services
* Provide framework for resilience patterns

### DSVA SRE

* Strategic planning
* System operation and maintenance
* Participate in on-call rotations for common services
* Perform Shared configuration updates / bug fixes
* ATO
* Perform cross-team audits
* Consolidate documentation

</details>

<details>
  
<summary>Resources/People/Individual Responsibilities</summary>

## Resources/People/Individual Responsibilities

| Name | Roles |
| --- | --- |
| Brian Gryth | Delivery Owner / ATO Product Manager |
| Wyatt Walter | Product Owner / Tech Lead |
| TBD | Backend Engineer / Full Stack Engineer |
| James Kassemi | Backend Engineer / ATO Product Support / DevOps Engineer (Limited Capacity) |
| Craig Butler | DevOps Engineer / ATO Product Support |
| Aaron Wieczorek | DevOps Engineer (Limited Capacity) / ATO Product Consultant / DSVA Liaison |

### Product Owner / Tech Lead

* Ensure team is operating effectively to achieve overall team goals
* Ensure reliability and correctness in team technical deliverables
* Provide team technical strategy
* Understand upcoming product requirements and roadmap
* Participate in feature development and lead technical direction
* Develop and review postmortems for all significant events
* Coordinate with delivery manager to ensure timely and transparent delivery
* Organize team on-call schedules
* Perform 1:1’s with all members of the team
* Perform interviews with potential candidates for team
* Coordinate with DSVA SRE team on major technical strategy decisions
* Consult with Vets technical lead on all major requirements and developments
* Ensure team is utilizing up to date documentation for architecture and system response
* Interface with external service providers to ensure and maintain reliable integrations
* Establish and maintain security audit procedures

### Backend Engineer

* Build reusable, performant, tested, and correct code and libraries for use in the backend application
* Maintain ownership of deliverables in production operation
* Assist with architecture and design of components in the backend application
* Utilize knowledge of infrastructure and deployment pipeline to debug application issues and respond to incidents
* Follow new technologies and suggest updates/improvements
* Perform cross-team code review for backend application additions
* Coordinate with the delivery manager to ensure timely and transparent delivery

### Full Stack Engineer

* Build reusable, performant, tested, and correct code for use in the frontend and backend application
* Maintain ownership of deliverables in production operation
* Assist with architecture and design of components in both the frontend and backend applications
* Work with design, user experience and user research resources to implement frontend deliverables
* Assist with design and architecture of APIs and other integration points
* Coordinate with the delivery manager to ensure timely and transparent delivery
* Perform cross-team code review for backend application additions

### DevOps Engineer

* Build reusable, tested, and correct infrastructure and associated configuration
* Automate recurring tasks
* Provide a path to production for all applications
* Monitor network services, system infrastructure, and application entry/exit points
* Respond to infrastructure and application alerts and incidents
* Maintain ownership of deliverables in production operation
* Utilize knowledge of infrastructure and deployment pipeline to debug application issues
* Liaise with Backend and Frontend engineers to inform and optimize CI/CD pipelines
* Coordinate with the delivery manager to ensure timely and transparent delivery
* Respond to and report remediation of WASA and NESSUS scans
* Perform and respond to internal security audits

### DSVA Liaison

* Provide assistance navigating VA/DSVA policy
* Consult with Platform team on all major new VA/DSVA updates
* Assist with escalation of issues through the proper channels
* Provide background and context for architecture and design of integrations

### ATO Product Manager

* Ensures ATO documentation is in sync with team’s practical security/operational goals and roadmap
* Ensures ATO documentation updated and included in RiskVision
* Coordinates response to ATO requests by ISO
* Delegates review tasks and schedules deliverables with ATO Support / Tech Lead
* Develops and maintains Information Security Assessment and Memorandum of Understanding documentation for external integrations
* Submits and manages ESCCB requests

### ATO Product Support

* Ensure technical accuracy of Privacy Impact Assessments and Privacy Threshold Analysis
* Regularly review Standard Operating Procedures and suggest improvements to documentation
* Work with team to establish required integration points and assist with development of ESCCB requests

### ATO Product Consultant

* Reviews all ATO related documentation for validity against NIST requirements
* Coordinates efforts to consolidate ATO documentation across DSVA projects 

</details>

<details>
  
<summary>Sprint Rotations</summary>

## Rotations

To encourage cross-team collaboration and to ensure usability and applicability of Platform product contributions, we will pull resources from Kudos, Rainbows, Nebula, or Unicorns for single sprint rotations. 

During their rotation, team members will ideally work on a platform feature that is relevant to their sprint team or that they have some relevant background/context on. They will also spend some time working on core DevOps tasks in order to disseminate expertise on how Vets.gov is operated. The rotation schedule should be determined during Program Increment (PI) planning.

</details>

<details>
  
<summary>DevOps Ambassadors</summary>

## Ambassadors

To encourage the continued application of processes and experience from DevOps team rotations, a member of each team will become the DevOps Ambassador. They are responsible for maintaining familiarity with DevOps projects/developments, and ensuring that DevOps is updated with major feature/process developments on their team.

</details>

<details>
  
<summary>Tools we use</summary>
  
## Tools we use

This is a place for you to add the things you use often that you think might be useful to other members of the team. 

- [PR Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/code_review_guidelines.md): Code-review guidelines 
- [SiP Prefill Process Document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/sip-prefill/process.md)
- [Maintenance and downtime for VA partners listserv]()
- [Vets-API Endpoint Punch List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/vets-api-endpoint-punch-list.md)
- [USDS Mailing Lists]()
- [DevOps Sprint Log]()
- [Vets.gov Threat Model](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/threat-model-in-practice.md)
- [Test Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/claims-status/file-claim/test-plan.md)
- [Postmortems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems): In the event of a page or service interruption, a postmortem provides a useful reference for understanding problems with our systems and approach, and for communicating the issue to stakeholders. A postmortem should be crafted for every event that causes a page or an interruption to expected service operation.
- [Soft-launch Strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/soft-launch-strategies.md)
- [Review Instances](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/review-instances.md)
- [Documented Decisions: Backend Repositories]()
- [Deployment Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/deployment-process.md): Notifying the DevOps team on what feature flags should be enabled/disabled in staging and production environment is an important part of this process.
- [Alerts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/alerts.md): This document describes alerts generated by Vets.gov monitoring systems.
- [Key Management](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/key-management.md): This document outlines our guidelines and general practices with regards to managing cryptographic keys and access credentials for protected systems.
- [Sending Metrics Using StatsD](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/sending-metrics-using-statsd.md):This document is meant to provide an introduction to how StatsD metrics are sent, how they interact with Prometheus, and how a developer can use them on vets-api.
- [Structured Logging](): Output structured logs that are human readable and machine parsable. Automate the logging of event ids, and make it easy to publish metrics.




</details>

<details>
  
<summary>Important Links</summary>

## Important links

This is where we store links from outside the Vets.gov repo that can be helpful to the DevOps practice area. Again, feel free to add links that you find helpful.

</details>

<details>
  
<summary>DevOps Schedule</summary>

## DevOps schedule

Meetings and schtuff

[Check out the minutes from Engineering/DevOps meetings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/team-meetings).

</details>

## DevOps index 

Every time something new is added to the DevOps folder, it should also be indexed and described here, so it's easier for folks to search for what they need, as well as to see when something is outdated and should be archived. 

<details>
    
<summary>Overall DevOps Folder</summary>

## [Overall DevOps Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/infrastructure)

- [When, How, and Why to Engage Platform](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/engage-platform.md)
- [Onboarding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/operations/onboarding.md): Things you need to know when you join the DevOps team
- [Readme](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/infrastructure): Welcome to DevOps
- [DevOps Team Sprint Log]): This document tracks the teams sprint goals and performance over time. 

</details>

<details>
    
<summary>Retro Notes Folder</summary>

## [Retro Notes Folder]()
    
   - [PI 6 Sprint 3 Devops Retro](): What went well? (Kong deployment, AdHoc retreat) What didn't? (Sharing Terraform with Appeals, turning on-call requests into tickets)
   - [PI 7 Sprint 2 & 3 Devops Retro](): What went well? (Closed tickets, onboarding) What didn't? (Confusion around ESCCB, testing requests come in last-minute)
   - [PI8 Sprint 1 Devops Retro](): What went well? (Caught up on grooming, ESCCB for preview.va.gov was approved) What didn't? (Explore the possibility of hiring a security analyst or similar position to handle the ATO process)
    
</details>
