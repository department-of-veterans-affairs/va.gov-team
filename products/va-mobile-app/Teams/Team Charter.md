# Team Charter

## Vision

Each Veteran is securely connected to the VA services that matter most to them regardless of device or VA org chart.

## Mission statement

A native mobile app that is a trusted source for Veterans to quickly and easily check the status of their VA services and complete simple, transactional tasks across their health and benefits.

## What we work on

### Product suite

- Health, benefits, payments, and profile products and services.
- Global systems like UI library, FE components, accessibility, devops, governance and documentation.

### Product portfolio

#### Health

- Appointments
- Secure Messages
- Prescriptions
- Vaccines

#### Benefits

- Claims & appeals status
- Disability rating
- Letters

#### Profile

- Personal & military information

#### Payments

- Compensation

## Team organization

The VA mobile App team is split into two groups covering different areas of focus.

### Red team

Health-related products in the app.

### Blue team

Benefits-related products, global app features like navigation and single sign on (SIS), and incremental improvements and maintenance (aka TLC).

See [teaming information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app) for the team roster.

## How we work

### Communications

#### Slack DSVA “#va-mobile-app”:

This is our main means of communication with each other. Keep as much conversation in public channels as possible, to minimize duplicative and extraneous communication.

#### GitHub

- Product and research documentation are on[ VA.gov repository](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app).
- Codebase and issues are on separate [VA mobile repository](https://github.com/department-of-veterans-affairs/va-mobile-app).
- Update tickets regularly. If conversations happen in Slack that are pertinent to a product or initiative, copy the useful info into GitHub/ZenHub.

See [Team Norms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/Teams/Team%20Norms.md) for more details on team communications.

### Team meeting cadence

#### Stand-up

Check in on people and product progress. Raise blockers.

- Every Tuesday and Thursdays
- 15-30 minutes
- Red team at 1:30pm ET
- Blue team at 2pm ET

#### Sprint Planning

Outline work to be done this sprint in order to accomplish the team's goals.

- Last Tuesday of every sprint
- 1 hour
- Red team at 1pm ET
- Blue team at 2pm ET

#### Demo

Showcase of work done during the previous sprint.

- Thursday after the end of every sprint
- 45 minutes
- Entire team (Red + Blue) at 2:35 ET

#### Retro

Open discussion on what has gone well, what has been challenging, and discussion of action items.

- Mid-Thursday of every sprint
- 45 minutes
- Entire team (Red + Blue) at 2:30 ET

#### Sprint 0

Team and POs working ahead of the team to define future initiatives. Create draft product briefs that we can pull from in the future. Open to anyone on the team.

- 1 hour
- Weekly on Wednesdays at 1:05pm ET

#### Scrum of Scrums (SoS)

Product, leads, and PO get together to discuss:

- Highlight the quarterly plan and review progress
- Review changes in risks, dependencies, assumptions, or priority for the current sprint
- Review insights from ongoing discovery or delivery work in the current sprint
- Discuss the plan for the upcoming sprint
- Rebalance team staffing if necessary
- Triage unplanned work

Cadence:

- 1 hour
- Weekly on Tuesdays at 4:05pm ET

#### Quarterly Planning

Outline work to be done next quarter in order to accomplish the team's goals.

- Upcoming tentative dates
  - Q2 2023 - 4/4/23
  - Q3 2023 - 6/27/23
  - Q4 2023 - 10/3/23
  - Q1 2024 - 1/9/24
- 2 hours
- Entire team (Red + Blue)

### GitHub Etiquette

- Anyone on the team can create a(n) issue/ticket/story.
- All teammates are responsible for keeping them up to date.
- Templates are available within the new issue/ticket/story during creation.

#### Labels to use:

- Team assigned (_mobile-blue-team_, etc)
- Discipline(s) (_ux_, _content_, _front-end_, _back-end_, _qa_)
- Feature area(s) if applicable (_direct-deposit_, _payments_, etc.)
- For bugs, add the _bug_ tag and [applicable severity tag](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/QA#issue-severity)

#### Epics should include:

- Clear acceptance criteria
- Definition of done
- A user story that reflects the benefit to a Veteran, Caregiver, or other user
- Been broken up into discrete tasks/Github tickets that are attached to the epic
- All components/steps have been accounted for in the epic
- Documented risks: Risks: Value Risk, Feasibility Risk, Business Viability Risk, Usability Risk

#### Stories/Tickets should include:

- Title that explains the goal in plain language
- Linked to another ticket or epic
- Includes:
  - Description (what happened & why we need this ticket),
  - General tasks to perform
  - Acceptance criteria (expected result)

#### Estimation

We use fibonacci numbers (1, 2, 3, 5, 8, 13) to account for the level of effort, complexity, and amount of unknowns in our work. Here is our guide:

##

| Points | Complexity | Meaning                                                                                      |
| ------ | ---------- | -------------------------------------------------------------------------------------------- |
| 1      | xxsmall    | Trival change - Up to 2 hours (time mostly in submitting the work)                           |
| 2      | xsmall     | Small change - Up to 4 hours (More validation is required)                                   |
| 3      | small      | Routine addon/none new - 1 to 2 days (small work/high domain knowledge/1 or no moving parts) |
| 5      | medium     | Routine addon/none new - 2 to 3 days (medium work/1-2 moving parts)                          |
| 8      | large      | New work/High Complexity - 3 to 5 days (over 2 moving parts)                                 |
| 13     | xlarge     | Too big/Risky, should be broken down - 1 to 2 weeks                                          |

