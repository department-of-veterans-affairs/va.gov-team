# Domo FAQ

**Summary:** Internal VSP Analytics & Insights FAQ for using Domo.

## Table of Contents

- [Adding users to Domo](#adding-users-to-domo)
- [Delimiting a string in a JSON upload](#delimiting-a-string-in-a-json-upload)
- [Missing date values in line graphs](#missing-date-values-in-line-graphs)

## FAQ

### Adding users to Domo

1. Users should request access to Domo via the [Github issue template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban&labels=analytics-insights%2C+analytics-request%2C+access-request&template=analytics-request-google-analytics-domo-access.md&title=Request+access+to+Google+Analytics+and%2For+Domo).
2. The Analytics teammate on Customer Support should self-assign any new access ticket in the Backlog or Triage columns of the `[VSP Analytics & Insights - Tracking & Access` project board](https://github.com/department-of-veterans-affairs/va.gov-team/projects/20). This should be done within 1-3 business days.
3. Check that the user is not already in Domo.
4. Use the `More` tab at the top of Domo to navigate to the `Admin` tab.
5. Add the user's name & email. All VFS users should be assigned the role, 'Participant'. If the user is on a VSP/Platform team & has gone through Domo training, their role should be, `Editor`. 
6. Add the user to the appropriate Group. The Group should correspond to the _team_ that the user is on, i.e. VAOS, VSP Contact Center. If the team does not exist yet in Domo, add a new Group with the appropriate team name. Each user should, at a minimum, be a part of the "Default" Group and their team Group.
7. Once added to Domo, follow up with the user to check that they received the confirmation email that Domo automatically sends. 
8. If the user does not respond within 2 weeks/a sprint, make a note on the Github request, and close the ticket.

### Delimiting a string in a JSON upload

Issue with fix [here.](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/11383)

### Missing date values in line graphs

If a date is missing in a DOMO dataset used by a line graph, DOMO will connect the surrounding dates.  This creates the illusion of a value on that date when the value is (probably) zero.  Unfortunately, the "Hide Zero Values" setting in the graph configuration will not fix the problem.

To fix the issue, you will need to make sure your dataset includes a row for every date:

```sql
-- For a date range:
UNNEST(
    GENERATE_DATE_ARRAY('2020-01-01', 
      FORMAT_DATE('%Y-%m-%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)), 
      INTERVAL 1 DAY)
) AS date,
"[placeholder]" AS eventLabel

UNION ALL
--- the rest of your query
```

```sql
-- For a single date:
UNNEST(
    GENERATE_DATE_ARRAY('2020-01-01', 
      FORMAT_DATE('%Y-%m-%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)), 
      INTERVAL 1 DAY)
) AS date,
"[placeholder]" AS eventLabel

UNION ALL
--- the rest of your query
```

One example of this is [BQ - Caregivers Events by Day](https://va-gov.domo.com/datasources/0ba2721f-f3e9-4046-915b-beb64003dbee/details/overview).
