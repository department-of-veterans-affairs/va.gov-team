# VSA Authenticated Experience - My VA product transition doc

<br>

>**Team transition document | March 2022**
>
> The purpose of this transition document is to outline the current state of VSA Authenticated Experience - My VA product development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.

<br>

## Table of Contents
[Product context (PM)](#product-context)

[Product portfolio (PM)](#product-portfolio)

[Product approach (Team)](#product-approach)

[VA relationships (Team)](#va-relationships)

## Product context 
When Veterans log into VA.gov, they expect to be met with an experience that reflects their personal circumstances at VA. My VA aims to meet this expectation by providing Veterans with a direct route to their most critical tasks and updates.

## Product portfolio
### My VA
The My VA dashboard on VA.gov provides Veterans easier access to critical information in one place. My VA allows Veterans to view a summary of important information about themselves, applicable benefits, statuses and additional resources.

- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/README.md)
- [Analytics dashboard](https://analytics.google.com/analytics/web/#/dashboard/XOEdSZeVT9qyxQU5T29PNw/a50123418w177519031p176188361/) (Google Analytics)
- [Staging users and usecases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
     - [My VA Use cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md)
     - [Benefit Payments & debts use cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info.md)
     - [On-site Notifications use cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-Onsite-Notification.md)


#### Now/Next/Later Roadmap
My VA page was redesigned and released to production in July 2021.  The priority of this redesign was to elevate action items and communicate benefit status and updates that do not require action.  At the time of the redesign launch, it was decided that the My VA page would not replace the VA.gov homepage when the user logs in.  As we move through 2022, we are adding information identified as important by Veterans, as well as looking at My VA being the logged-in landing page and a potential reorganization of the information displayed on the page for findability and ease of use/accessibility.  

- **In March**, we are releasing a new section being added to the My VA dashboard: Benefit payments and debts.  This new section will display recent payment information, number of any outstanding debts, and links to related financial resources
- **Next**, we will be adding outstanding medical copays to the financial info, and adding an On-site Notification feature that will display at the top of the page.
- **Later**, we are going to look at two things:
     - Currently, users are redirected back to VA.gov home page after logging in.  We want to run an experiment of having the My VA page be the logged-in home page, meaning that when users log in (using the login button on VA.gov), they will then be redirected to the My VA page.  
     - We want to take a step back to review My VA as a whole, determine the scalability of the current design, and decide if a reorganization of information is needed.  Our goal remains to elevate time-sensitive information and action items, while also providing a resource to manage other personalized data.

## Product approach 

### Artifacts
- [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/charter.md)
- [Authenticated Experience team folder](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/)
- [My VA Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/roadmap/my-va-roadmap.md)
- [2022 Team priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/roadmap/team-priorities-myva-Q1-Q2-2022.md)

### Research and design
- [**My VA product research and design hub page**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/Authenticated%20Experience%20-%20My%20VA%20UX%20research%20and%20design%20hub.md)
     - [My VA redesign hub page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/My%20VA%20redesign%20-%20UX%20research%20and%20design%20hub.md)
     - [Payment Information hub page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/My%20VA_Payment%20Information%20-%20UX%20research%20and%20design%20hub.md)
     - [On-site Notifications hub page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/vagov-notifications/mvp/My%20VA_On-site%20Notifications%20-%20UX%20research%20and%20design%20hub.md)


### Engineering
- [My VA Redesign Technical diagram Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2.0-redesign/Technical-diagrams)
- [My VA Redesign FE Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2.0-redesign/frontend)
- [Payment Information FE Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history/documentation)
- [On-Site Notifications BE Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications/mvp/backend)
- [On-Site Notifications FE Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications/mvp/frontend/documentation)

<br>

## VA relationships

### March 2022 team roster

- Heather Justice | heather.justice1@adhocteam.us -- Team product manager
- Lihan Li | lihan@adhocteam.us -- Backend engineer
- Taylor Mitchell | taylor.mitchell@gcio.com -- Frontend engineer
- Liz Lantz | liz.lantz@adhocteam.us -- UX researcher
- Angela Agosto | angela.agosto@adhocteam.us -- UX designer
- Samara Strauss | samara.strauss@va.gov -- Product owner

### Additional Contacts (worked on the original My VA re-design) 

- Ana Jakabcin | ana@adhocteam.us -- Product Manager
- Tressa Furner | tressa.furner@adhocteam.us -- UX designer 
- Cassandra Allen | callen@governmentcio.com -- UX designer


### Meetings

- Stand-up
     - What is ready for review, what are we working on, and what blockers are present?
     - 3pm ET (15min) - Mondays, and Fridays
     - 1:45pm ET (15min) - Thursdays
- Team of Teams (scheduled by VA team)
     - Provide a weekly update to other VA teams that may impact or be beneficial to them
     - 12p ET (45 min) - Every Tuesday
- Retrospective and Sprint Planning
     - Gain feedback from the team, and plan the next sprint or 2 with tickets, estimations and details
     - 2pm ET (1 hour) - 1st Wednesday of each sprint
- End of Sprint Demo (scheduled by VA team)
     - Demonstrate development, designs, research or other work highlighted by the team
     - 1pm ET (1.5 hr) - 2nd Tuesday of each sprint
- Backlog Grooming
     - Groom outstanding tickets, create new tickets, discuss tasks and details, ask what is missing or next steps
     - 2pm ET (1 hour) - 2nd Wednesday of each sprint
- Cross-team sync (scheduled by another team)
     - Discussion between Mobile, Auth Exp and other teams on designs, research, direction, challenges, and questions
     - 11:30am ET (30 min) - 1st Tuesday of each sprint
- VA Notify <> Auth Exp sync
     - Bi-weekly synch with VA Notify team to discuss upcoming enhancements and ensure the teams are engaged for dependency related work
     - 2pm ET (30 min) - 1st Tuesday of each sprint
- 1:1 with PO
     - Discuss upcoming sprint objectives, blockers/constraints, topics
     - 2pm ET (30 min) - Every Monday

### Open questions

<br>

---
