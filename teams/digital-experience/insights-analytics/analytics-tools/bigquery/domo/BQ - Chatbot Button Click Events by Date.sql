/***************************************************************************************************
Name:               BQ - Chatbot Button Click Events by Date
URL:                https://va-gov.domo.com/datasources/e53e9442-e9fa-4bab-8d0e-a1c3bf979cc1/details/overview
Create Date:        2020-09-09
Author:             Jon Wehausen
Description:        This returns daily event information for events with a label of 'chatbot-button-click'
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
    h.eventInfo.eventCategory AS event_category,
    -- event action (dimension)
    h.eventInfo.eventAction AS event_action,
    -- event label (dimension)
    h.eventInfo.eventLabel AS event_label,
    -- total events (metric) 
    COUNT(1) AS total_events,
    -- unique_events (metric) 
    COUNT(
        DISTINCT CONCAT(
            CAST(fullVisitorId AS STRING),
            CAST(visitStartTime AS STRING)
        )
    ) AS unique_events
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS t,
    UNNEST(t.hits) AS h
WHERE
    _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
    --_TABLE_SUFFIX BETWEEN '20200422' and '20200916'
    AND h.type = 'EVENT'
    AND h.eventInfo.eventLabel = 'chatbot-button-click'
GROUP BY
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8