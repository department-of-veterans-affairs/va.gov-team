# Beneficiary Travel Self-Service System (BTSSS)

The goal of our team is to develop a Veteran-facing user experience that enables users to complete travel reimbursement tasks across VA.gov. As part of our project, we'll review the legacy BTSSS portal and partner with teams to integrate relevant features and functionality with BTSSS services.

The legacy BTSSS portal is a stand alone web application that allows Veterans to submit and manage claims to be paid back for mileage and other travel expenses to and from approved health care appointments, and to manage associated data.

## About the Product

### Vision

Deliver a seamless and positive experience for any Veteran who needs to submit or manage travel claims, with a focus on automated processing of most claims.

There is a bunch of noise from the staff that the whole experience needs updated. We are focusing on 

```
Creating better claims will create a smoother system
```

Currently the claims that are created are causing the system to get `backed up`. Data points the reason that the system is creating a backlog is paperclaims. Knowing this, we are focusing on improving Veteran Tooling, focusing on findability, accessibility, and usability.


### User Problem Statement

Veterans are not able to easily discover, access, authenticate into and complete travel claims using BTSSS due to a complex user experience that was not built using human centered design principles. 

Staff travel clerks often have to take manual steps to fix, validate and process claims that were entered erroneously or on paper.  

## About the Team

**OCTO-DE Product Owners**
- Mark Dewey
- Chris Johnston

**Project Management**
- Michelle Ortiz
- Lauren Ernest

### VA.gov
- Kevin Duensing, Engineering Lead
- Micah Taylor, UX Design
- Cara Frissell, Research

### BTSSS API
- Mustapha Bello, Scrum Master
- Blaise Garfall, Business Analyst
- Jorge Gomez-Danes Mejia, Technical Lead
- Matt Lamb, Developer
- Joshua Patterson, Developer

## Communication

Find team members and channels in the [DSVA Slack Space](https://dsva.slack.com).

| Channel | Used for | 
|---|---|
| #beneficiary-travel-team | Start here. Main channel for any general product, engineering, or experience communication for BTSSS frontend team, including: agile ceremonies, announcements, broad notifications related to rollouts, releases, and launches. |
| #travel-pay | Coordinated communication related to travel pay experience across web and mobile teams |


## What We're Working On

- GitHub label = `beneficiary-travel`

### Current Work

- Updates for the Claim API v1 to production
- Creating a va.gov expereince

### Done

- Developing new requirements for the Claims API 
- Integration with the Patient Check In application
- Review Implement Basic 18F recommendations in the BTSSS protal 
- Reviewing existing BTSSS documentation and resources
- Conduct a heuristic review of the current BTSSS system
- Interview stakeholders across business, technology, and users
- Synthesizing research data into suggestions and lofi design proposals


## Product Documentation
- [Roadmap](./product/roadmap.md) 
- [Objectives & Key Results](./product/OKRS.MD)
- TODO: Product Guide 

## Research and Studies

- [Path analysis research plan](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/104)

## Related Projects

### Check-In Experience
<details>
 <summary>Check-in app integration</summary>
- [Wilkes-Barre Pilot Summary/Release Plan](./product/2023%20pilot%20release.md)
  
As Veteran, I want to submit a travel claim during the check in process

For the vets facing work, we are currently using the Check In Team for a bulk of the work since our first integration is Check In app. For the API we are using JIRA. 

- GitHub label = `HCE-Checkin` 
- JIRA board = https://vajira.max.gov/secure/RapidBoard.jspa?rapidView=7791&projectKey=BTSSS 

This is going to change in the fall of 2023. 

Team docs: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin
Prototype: https://www.sketch.com/s/38819fc4-18ef-4958-a330-a699785301d6/prototype/a/0042DC07-D314-45AF-946F-884DCBBE43C0
Sketch file (w/ additional confirmation pages) : https://www.sketch.com/s/38819fc4-18ef-4958-a330-a699785301d6
User flow (w/ text messages): https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1677531124203/5edcfd3ea4b1eaf1ef082d56782a8b3291ef3932?sender=u37bb983bd3fc3cc00c7d3286

 </details>
