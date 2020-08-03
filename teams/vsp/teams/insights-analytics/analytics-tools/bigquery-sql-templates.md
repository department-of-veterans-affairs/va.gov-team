### Total Users, Sessions, Pageviews for a specific date range

```sql
#standardSQL
SELECT 
  date,
  SUM(totals.visits) as Sessions,
  COUNT(DISTINCT fullVisitorId) as Users,
  SUM(totals.pageviews) as Pageviews
FROM 
  `vsp-analytics-and-insights.176188361.ga_sessions_2020*`
WHERE 
  _TABLE_SUFFIX BETWEEN 'XXXX' and 'XXXX' //change here for relevant dates needed
GROUP BY 
  date
```

### Total Users, Sessions, Pageviews by specific page, by date

```sql
SELECT 
  date,
  hits.page.pagePath,
  COUNT(*) as pageviews,
  COUNT(DISTINCT fullVisitorId) as Users,
  COUNT(DISTINCT CONCAT(fullVisitorId, CAST(visitId AS STRING))) as Sessions
FROM 
  `vsp-analytics-and-insights.176188361.ga_sessions_2020*` as GA,
  UNNEST(GA.hits) AS hits
WHERE
  _TABLE_SUFFIX = 'XXXX'//change according to desired specified date or use BETWEEN for a range
  AND hits.type = 'PAGE'
  AND REGEXP_CONTAINS(hits.page.pagePath,'.*coronavirus.*)') //change according to pagePath desired with RegEx matching
GROUP BY 
1, 
2
```

### Content Grouping Views
```sql
SELECT 
  hits.contentGroup.contentGroupXX, //change according to content group desired 
  SUM(hits.contentGroup.contentGroupUniqueViews1) as Unique_Content_Views,
  COUNT(*) AS Pageviews,
  SUM(IF(hits.isentrance = TRUE, 1,0)) as Entrances,
FROM 
  `vsp-analytics-and-insights.176188361.ga_sessions_2020*`,
  UNNEST(hits) as hits
WHERE 
  _TABLE_SUFFIX = 'XXXX'//change according to desired specified date or use BETWEEN for a range
  hits.type = 'PAGE'
GROUP BY
  hits.contentGroup.contentGroupXX 
```


### Event Metrics with custom dimension values, by user
```sql
SELECT
  -- Visitor ID
  Visit.fullVisitorId, 
  -- Visit ID, 
  Visit.visitId, 
  -- Hit Number
  hits.hitNumber,
  -- Event Category (dimension)
  hits.eventInfo.eventCategory AS Event_Category,
  -- Event Action (dimension)
  hits.eventInfo.eventAction AS Event_Action,
  -- FAQ Custom Dimension
  max(case when CDs.index = xx then CDs.value end)  AS Frequently_Asked_Question,
  -- FAQ Section
  max(case when CDs.index = xx then CDs.value end) AS FAQ_Section, 
  -- Event Label (dimension)
  hits.eventInfo.eventLabel AS Event_Label,
  -- Total Events (metric)
  COUNT(*) AS Total_Events,
  -- Unique Events (metric),
  COUNT(DISTINCT CONCAT(CAST(fullVisitorId AS STRING), CAST(visitStartTime AS STRING))) AS Unique_Events,
FROM
  `vsp-analytics-and-insights.176188361.ga_sessions_2020*` VISIT,
  UNNEST(hits) AS hits,
  UNNEST(hits.customDimensions) AS CDs
WHERE
  totals.visits = 1
  AND hits.type = 'EVENT'
  AND hits.eventInfo.eventLabel = 'XXXXX' //change according to relevant event
  AND CDs.index IN(XX,XX) //change according to relevant custom dimension index values
  AND _TABLE_SUFFIX = 'XXX' //change according to relevant date
GROUP BY
  fullVisitorId, 
  visitId, 
  hits.hitNumber, 
  Event_Category, 
  Event_Action,
  Event_Label
ORDER BY
  9 DESC
```


### Time to Complete - WIP
```sql

```
### Custom Metric Example - WIP
```sql

```
