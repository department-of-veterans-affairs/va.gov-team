/***************************************************************************************************
Name:               BQ - Generic - All Scroll Depth Events by Date
URL:                https://va-gov.domo.com/datasources/db81efec-91d0-4d27-b999-a9ea27fada0e
Create Date:        2020-09-09
Author:             Jon Wehausen
Description:        This returns daily total and unique events for all scroll depth events by date and page path. 
/***************************************************************************************************/
SELECT  
   -- date (dimension)
    PARSE_DATE("%Y%m%d", date) AS date,
    -- year (dimension)
    FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", date)) AS year,
    -- month (dimension)
    FORMAT_DATE('%m', PARSE_DATE("%Y%m%d", date)) AS month,
    -- month_name (dimension)
    FORMAT_DATE('%B', PARSE_DATE("%Y%m%d", date)) AS month_name,
    -- day (dimension)
    FORMAT_DATE('%d', PARSE_DATE("%Y%m%d", date)) AS day,
    -- page (dimension) 
    h.page.pagePath as page_path,
    -- event category (dimension)
    h.eventInfo.eventCategory as event_category,
    -- event action (dimension)
    h.eventInfo.eventAction as event_action,
    -- event label (dimension)
    h.eventInfo.eventLabel as event_label,
    -- total events (metric) 
    COUNT(1) as total_events,
    -- unique_events (metric) 
    COUNT(DISTINCT CONCAT(CAST(fullVisitorId AS STRING), CAST(visitStartTime AS STRING))) AS unique_events
FROM  
  `vsp-analytics-and-insights.176188361.ga_sessions_20*` AS t,
  UNNEST(t.hits) AS h
WHERE 
  _table_suffix BETWEEN '190618' AND '200907'
  AND h.type = 'EVENT'
  AND REGEXP_CONTAINS(h.eventInfo.eventAction,'^Scroll Depth.*')
GROUP BY 
  date, year, month, month_name, day, page_path, event_category, event_action, event_label
ORDER BY 
  date asc
