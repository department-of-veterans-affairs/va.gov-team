/***************************************************************************************************
Name:               BQ - COVID Navigational Events by Date with Frequently Asked Question
URL:                  https://va-gov.domo.com/datasources/1bb613d8-8ebe-43be-9668-e30190e6595a/details/data/table
Create Date:        2020-09-09
Author:             Jon Wehausen
Description:        This returns daily total and unique events for all navigational events within the frequently
                    asked questions content on https://www.va.gov/coronavirus-veteran-frequently-asked-questions/.
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
    -- event category (dimension)
    h.eventInfo.eventCategory as event_category,
    -- event action (dimension)
    h.eventInfo.eventAction as event_action,
    -- event label (dimension)
    h.eventInfo.eventLabel as event_label,
    -- frequently asked question (custom dimension 77)
    (SELECT hcd.value FROM h.customdimensions AS hcd WHERE hcd.index = 77) AS frequently_asked_question,
    -- frequently asked question section header (custom dimension 78)
    (SELECT hcd.value FROM h.customdimensions AS hcd WHERE hcd.index = 78) AS faq_section,
    -- total events (metric) 
    COUNT(1) as total_events,
    -- unique_events (metric) 
    COUNT(DISTINCT CONCAT(CAST(fullVisitorId AS STRING), CAST(visitStartTime AS STRING))) AS unique_events
FROM  
  `vsp-analytics-and-insights.176188361.ga_sessions_*` AS t,
  UNNEST(t.hits) AS h
WHERE 
  _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
  AND h.type = 'EVENT'
  AND h.eventInfo.eventLabel = 'nav-covid-link-click'
GROUP BY 
  date, year, month, month_name, day, event_category, event_action, event_label, frequently_asked_question, faq_section
ORDER BY 
  date asc