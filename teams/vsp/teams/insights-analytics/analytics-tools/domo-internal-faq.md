# Domo FAQ

**Summary:** Internal VSP Analytics & Insights FAQ for using Domo.

## Table of Contents

- [Delimiting a string in a JSON upload](#delimiting-a-string-in-a-json-upload)
- [Missing date values in line graphs](#missing-date-values-in-line-graphs)

## FAQ

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
