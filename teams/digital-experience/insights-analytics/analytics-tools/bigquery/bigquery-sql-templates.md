### Total Users, Sessions, Pageviews for a specific date range

```sql
#standardSQL
SELECT 
  date,
  SUM(totals.visits) as sessions,
  COUNT(DISTINCT fullVisitorId) as users,
  SUM(totals.pageviews) as pageviews
FROM 
  `vsp-analytics-and-insights.176188361.ga_sessions_2020*`
WHERE
  -- change here for relevant dates needed
  _TABLE_SUFFIX BETWEEN 'XXXX' and 'XXXX'
GROUP BY 
  date
```

### Previous day's data
```sql
#standardSQL
SELECT 
  date,
  SUM(totals.visits) as sessions,
  COUNT(DISTINCT fullVisitorId) as users,
  SUM(totals.pageviews) as pageviews
FROM 
  `vsp-analytics-and-insights.176188361.ga_sessions_*`
WHERE
  -- Load previous day's table
  _TABLE_SUFFIX = FORMAT_DATE(
      '%Y%m%d',
      DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
  )
```

### Previous month's data
```sql
#standardSQL
SELECT 
  date,
  SUM(totals.visits) as sessions,
  COUNT(DISTINCT fullVisitorId) as users,
  SUM(totals.pageviews) as pageviews
FROM 
  `vsp-analytics-and-insights.176188361.ga_sessions_*`
WHERE
  -- Load previous month's tables
  SUBSTR(_TABLE_SUFFIX, 0, 6) = FORMAT_DATE(
    "%E4Y%m",
    DATE_SUB(CURRENT_DATE, INTERVAL 1 MONTH)
  )
```

### Total Users, Sessions, Pageviews by specific page, by date

```sql
SELECT 
  date,
  hits.page.pagePath,
  COUNT(*) as pageviews,
  COUNT(DISTINCT fullVisitorId) as users,
  COUNT(DISTINCT CONCAT(fullVisitorId, CAST(visitId AS STRING))) as sessions
FROM 
  `vsp-analytics-and-insights.176188361.ga_sessions_2020*` as ga,
  UNNEST(ga.hits) AS hits
WHERE
  -- change according to desired specified date or use BETWEEN for a range
  _TABLE_SUFFIX = 'XXXX'
  AND hits.type = 'PAGE'
  -- change according to pagePath desired with RegEx matching
  AND REGEXP_CONTAINS(hits.page.pagePath, r'.*coronavirus.*')
GROUP BY 
  1, 
  2
```

### Content Grouping Views
```sql
SELECT 
  -- change according to content group desired 
  hits.contentGroup.contentGroupXX,
  SUM(hits.contentGroup.contentGroupUniqueViews1) as unique_content_views,
  COUNT(*) AS pageviews,
  SUM(IF(hits.isentrance = TRUE,1,0)) as entrances,
FROM 
  `vsp-analytics-and-insights.176188361.ga_sessions_2020*` ga,
  UNNEST(ga.hits) as hits
WHERE
  -- change according to desired specified date or use BETWEEN for a range
  _TABLE_SUFFIX = 'XXXX'
  hits.type = 'PAGE'
GROUP BY
  hits.contentGroup.contentGroupXX 
```


### Event Metrics with custom dimension values, by user
```sql
SELECT
  -- Visitor ID
  fullVisitorId, 
  -- Visit ID, 
  visitId, 
  -- Hit Number
  hits.hitNumber,
  -- Event Category (dimension)
  hits.eventInfo.eventCategory AS event_category,
  -- Event Action (dimension)
  hits.eventInfo.eventAction AS event_action,
  -- FAQ Custom Dimension
  max(CASE WHEN CDs.index = xx THEN CDs.value END)  AS frequently_asked_question,
  -- FAQ Section
  max(CASE WHEN CDs.index = xx THEN CDs.value END) AS faq_section, 
  -- Event Label (dimension)
  hits.eventInfo.eventLabel AS event_label,
  -- Total Events (metric)
  COUNT(*) AS total_events,
  -- Unique Events (metric),
  COUNT(DISTINCT CONCAT(CAST(fullVisitorId AS STRING), CAST(visitStartTime AS STRING))) AS unique_events,
FROM
  `vsp-analytics-and-insights.176188361.ga_sessions_2020*` ga,
  UNNEST(ga.hits) AS hits,
  UNNEST(hits.customDimensions) AS CDs
WHERE
  totals.visits = 1
  AND hits.type = 'EVENT'
  -- change according to relevant event
  AND hits.eventInfo.eventLabel = 'XXXXX'
  -- change according to relevant custom dimension index values
  AND CDs.index IN (XX,XX)
  -- change according to relevant date
  AND _TABLE_SUFFIX = 'XXXX'
GROUP BY
  fullVisitorId, 
  visitId, 
  hits.hitNumber, 
  event_category, 
  event_action,
  event_label
ORDER BY
  9 DESC
```

### Scroll Depth Tracking
```sql
#standardSQL
SELECT
  date,
  hits.eventInfo.eventLabel,
  COUNT(*) total_events,
  count(distinct CONCAT(COALESCE(fullVisitorId, ''), ':', COALESCE(CAST(visitId AS STRING), ''))) as unique_events 
FROM
  `vsp-analytics-and-insights.176188361.ga_sessions_2020*` as ga,
  UNNEST(ga.hits) AS hits
WHERE
  _TABLE_SUFFIX = 'XXXX'
  AND hits.type = 'EVENT'
  AND hits.eventInfo.eventAction = 'Scroll Depth'
  AND REGEXP_CONTAINS(hits.page.pagePath,'^XXXX*')
GROUP BY
  1,2
```

### Time to Complete
```sql
WITH sessions AS (
    SELECT
        CONCAT(fullVisitorId, CAST(visitStartTime AS STRING)) AS sessionID,
        hits.eventInfo.eventLabel AS event_label,
        (
            CASE
                WHEN hits.eventInfo.eventLabel = 'start-event-label' THEN MIN(hits.time)
                WHEN hits.eventInfo.eventLabel = 'end-event-label' THEN MAX(hits.time)
            END
        ) AS hit_time
    FROM
        `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
        UNNEST(ga.hits) AS hits
    WHERE
        _TABLE_SUFFIX BETWEEN "XXXX" AND "XXXX"
        AND hits.eventInfo.eventLabel IN (
            'start-event-label',
            'end-event-label'
        )
    GROUP BY
        1,
        2
)
SELECT
    AVG(time_diff) / 1000 avg_time_diff
FROM
    (
        SELECT
            CASE
                WHEN event_label = 'start-event-label'
                AND LEAD(event_label, 1) OVER(
                    PARTITION BY sessionID
                    ORDER BY
                        hit_time ASC
                ) = 'end-event-label' THEN (
                    -- DIFF event timestamps
                    LEAD(hit_time, 1) OVER(
                        PARTITION BY sessionID
                        ORDER BY
                            hit_time ASC
                    ) - hit_time
                )
            END time_diff
        FROM
            sessions
    )
```
### Custom Metric Example - WIP
```sql

```
