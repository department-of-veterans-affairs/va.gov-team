# MHV Tier 3 Support Product Outline 
This product outline defines the Tier 3 Support framework for My HealtheVet (MHV), the VA's integrated personal health record platform. Tier 3 Support represents the highest level of technical escalation, handling complex issues that require specialized expertise, system-level troubleshooting, and cross-functional coordination.

## Product Vision
To provide Veterans with seamless, reliable access to their healthcare information by maintaining a robust escalation support system that resolves complex technical issues efficiently and drives continuous platform improvement.

## Problem Statement
Veterans and healthcare providers encounter technical issues with MHV that cannot be resolved through standard help desk support (Tier 1) or technical support (Tier 2). These complex issues require deep technical knowledge, system access, and coordination across multiple VA systems including VistA, CPRS, and integrated third-party applications. Without effective Tier 3 support, these issues result in delayed care access, frustrated users, and diminished trust in digital health services.

## Objective
Identify and surface issues that inhibit users from successfully accomplishing the self-service tasks they undertake on MHV on VA.gov, as well as assist internal VA staff with issues preventing successful accomplishment of tasks within internal MHV tools (such as Secure Messaging), to the teams that can address them. 


### Desirable outcomes
- When issues arise for a user that exceed Tier 2 capabilities, Tier 3 is able to quickly surmise and identify the issue, then notify the operative team so that they can address it in a short time span.
- MHV tool teams understand what is expected of them on Tier 3 issues and are able to efficiently perform diagnosis and communicate resolutions.
### Undesirable outcomes
- Tier 3 issues go unaddressed at the Triage stage and fail to reach relevant tool teams in a timely manner, allowing issues that are possibly systemic to remain, frustrating users.

## Goals and Objectives
### Primary Goals
- Resolve escalated Tier 3 issues in a timely manner
- Reduce repeat escalations through root cause analysis and systemic fixes
- Document and share knowledge to prevent recurring issues

### Secondary Goals
- Identify and prioritize platform improvement opportunities based on recurring issues
- Establish clear escalation paths to engineering and product teams
- Build comprehensive knowledge base for common complex scenarios
- Foster collaboration between clinical, technical, and product teams


## Challenges
- Tier 3 Support generally will not be allowed to contact Veterans directly, so it may take considerable time to address their concerns due to additional exchanges with other services who are able to communicate with them.
- Often, the information received in requests is insufficient for troubleshooting purposes.  This requires additional communications and time.

## Primary Users & Players
- MHV Tier 1 & 2 Support Teams: Escalate unresolved issues
- Veterans: Experience complex technical issues affecting healthcare access
- VA Healthcare Providers: Encounter system issues impacting patient care
- MHV Product & Engineering Teams: Receive detailed issue reports and recommendations

## Key Features and Capabilities
### Issue Management

- Advanced ticketing system with detailed technical logging
- Priority classification based on impact to Veteran care
- Real-time status tracking and communication
- Comprehensive issue documentation and resolution records

### Technical Troubleshooting

- System-level access to MHV infrastructure
- Database query and analysis capabilities
- Integration testing with VA systems (VistA, CPRS, VHIE)
- Log file analysis and error trace investigation
- User account and permissions management at enterprise level

### Root Cause Analysis

- Systematic investigation methodology
- Cross-system impact assessment
- Pattern recognition for recurring issues
- Documentation of underlying technical causes
- Recommendations for permanent fixes

### Knowledge Management

- Searchable knowledge base of resolved complex issues
- Standard operating procedures for common scenarios
- Training materials for Tier 1/2 teams
- Issue trend reports and insights
- Best practice documentation

### Collaboration & Escalation

- Direct communication channels with engineering teams
- Coordination with third-party vendors (e.g., authentication providers)
- Emergency response protocols for critical outages

## Reporting & Analytics

- Issue volume and category trending
- Backlog trentding
- Weekly performance dashboards

## Escalation Workflow
### Tier 3 Entry Criteria
Issues must meet at least one of the following:

- Tier 2 unable to resolve after investigation
- Requires system-level configuration changes
- Affects multiple users or facilities
- Involves cross-system integration failures
- Security or compliance implications
- Reproducible bugs requiring code-level investigation

### Response Time SLAs

- Critical (Patient Safety Impact): 1 hour initial response, 24-hour resolution target
- High (Multiple Users/Providers): 4 hour initial response, 48-hour resolution target
- Medium (Single User, Complex): 8 hour initial response, 5-day resolution target
- Low (Enhancement/Non-urgent): 24 hour initial response, 10-day resolution target


## Questions
- Do Tier 1 and 2 centers know how to engage w/ Tier 3?
- Do they know what should be escalated?


## Ownership
#### In Scope 
- Triange of Tier 3 escalated issues
- Assignment of issues to relevant tool teams

#### Out of Scope
- Any Tier 3 Appointments issues
- Any non-MHV Tier 3 issues


## KPIs


---




## Team
- Product Manager: Bryan Ivie (Ad Hoc)
- Support Lead: Melissa Ashton (IronArch)
- Technical Analyst Engineer: Tom Gammons (Ad Hoc)
- OCTO POCs:
  - Lauren Alexanderson - OCTO Sponsor


## Communications
- Team GitHub Label: MHV-Tier-3
- Product GitHub Label: MHV-Tier-3
- Slack channel: mhv-tier-3-support


