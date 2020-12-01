/***************************************************************************************************
Name:               BQ - All Transaction Events by Day
URL:                https://va-gov.domo.com/datasources/c7d2a229-fc34-4441-96f2-17e64ad4d8c6/details/overview
Create Date:        2020-08-12
Author:             Jon Wehausen
Description:        This returns daily event information for events with a category of 'Transactions'.
/***************************************************************************************************/
SELECT
    -- date (dimension)
    PARSE_DATE("%Y%m%d", date) as date,    
    -- year (dimension)
    FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", date)) AS year,
    -- month (dimension)
    FORMAT_DATE('%m', PARSE_DATE("%Y%m%d", date)) AS month,
    -- month_name (dimension)
    FORMAT_DATE('%B', PARSE_DATE("%Y%m%d", date)) AS month_name,
    -- day (dimension)
    FORMAT_DATE('%d', PARSE_DATE("%Y%m%d", date)) AS day,
    hits.eventInfo.eventCategory AS event_category,
    hits.eventInfo.eventAction AS event_action,
    hits.eventInfo.eventLabel AS event_label,
    COUNT(1) total_events
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
    UNNEST(ga.hits) AS hits
WHERE
    _TABLE_SUFFIX = FORMAT_DATE(
        '%Y%m%d',
        DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
    )
    AND hits.type = 'EVENT'
    AND hits.eventInfo.eventCategory = 'Transactions'
GROUP BY
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8