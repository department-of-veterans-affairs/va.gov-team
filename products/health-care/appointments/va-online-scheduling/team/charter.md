# VAOS Team Charter

## Workflow and Cadence

<details><summary>Hybrid cycle calendar</summary>
  <p>
    
  ![VAOS Dev Team Cycle Meeting Calendar](https://user-images.githubusercontent.com/72046525/122489083-b93f2f00-cf93-11eb-8d5a-ec58002ce3de.jpg)
  
</details>  

### Stand-up
Check on people and work progress.
- Daily at 12pm ET
- 30 min

### Backlog Refinement
Review and estimate backlog items. Review priorities of current and upcoming work.
- Weekly on Wednesdays at 12pm ET
- 1 hr


### Retro
Reflect on prior cycles: accomplishments, what went well, what can be improvemed, what questions people have, action items.
- Every 2 weeks on Tuesdays at 12pm ET
- 1 hr


### Demo
A safe space for dev team to demo in-progress or completed work.
- Every 3rd Monday of the month at 2pm ET
- 1 hr

## Issue Etiquette

Link to ZenHub board - [VAOS Team](https://app.zenhub.com/workspaces/vaos-team-603fdef281af6500110a1691/board?repos=133843125,194202180&showPRs=false&showReleases=false&showReviewers=false)

Anyone on the team can [create a ticket](how-to-create-vaos-tickets.md). All are responsible for keeping them up to date.

### Board Pipelines

- Backlog
  - Holding area for tickets not prioritized
  - Tickets may:
    - Be new and not yet triaged
    - Need more information - needs should be documented in description or in a comment
    - Be defined, but not yet groomed by team
    - Be defined and groomed, but not ready to be prioritized / iceboxed
    - Tickets in this pipeline should never be picked up by a Dev to be actively worked on, but may be assigned to help fill in information
- Epics
  - Houses all “epic” issue type
  - No specific prioritization/order
- Blocked
  - Triaged and defined tickets that can’t be worked on for some reason
  - For a ticket to go into the "Blocked" pipeline, it must:
    - Have the blocker documented in a ticket comment
    - Link to blocking ticket, if applicable
  - No work in progress limit
- Ready
  - Prioritized for development
  - For a ticket to go into the "Ready" pipeline, it must:
    - Have defined work
    - Be estimated (Some situations may require quick action and may be pulled in for ad hoc review)
    - Have a sense of priority (relative to other tickets)
  - Devs should pull from above the fold (the top few tickets, rather than the bottom of the list), preferably top-down
  - If a ticket is marked as high priority, it should be picked up before those not marked
- In Progress
  - Actively being worked on
  - Work in progress limit for pipeline = 7 (essentially 1 for each dev)
- Code Review
  - Requires peer, VSP, or other VFS team code review
  - No work in progress limit for pipeline
  - Devs to manage when and how long ticket is in code review
- Validate
  - Ready for QA, Product, Design, or VSP review
  - For a ticket to go into the "Validate" pipeline, it must:
    - Be code complete
    - Have all acceptance criteria reviewed and checked off by assignee
    - Have all definition of done items completed and checked off by assignee
    - Result in new or changed product functionality (for code changes), or have documentation/artifacts provided (for other tasks/requests)
    - Be available in Staging, if functional or visual change
- Closed
  - If through Validate pipeline, then validation is complete with no further work on ticket
  - If not through Validate pipeline, then when complete and ready for Production

### Estimation

We're going to experiment with t-shirt size estimates. Effectively this is just removing one number from our scale (2), but hopefully we can reframe conversations around bigger perceived gaps in estimates.

- 1 = small
- 3 = medium
- 5 = large
- 8 = x-large

### 

## Communication

## Slack

- #vaos-team
  - Team announcements, broad notifications
  - Coordinated communication related to rollouts, releases, and launches
  - SQA- and testing-related questions
- #vaos-eng
  - Code review reminders
- #vaos-alerts
  - Grafana alerts
