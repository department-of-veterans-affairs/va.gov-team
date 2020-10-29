/***************************************************************************************************
Name:               BQ - Login Events by day
URL:                https://va-gov.domo.com/datasources/9fd960c4-fabf-46fe-98bb-9be6d532c14f/details/overview
Create Date:        2020-08-12
Author:             Jon Wehausen
Description:        This returns daily total and unique events that have an event label that start with
                    "label-"
/***************************************************************************************************/
#standardSQL
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
    -- event_category (dimension)
    hits.eventInfo.eventCategory AS event_category,
    -- event_action (dimension)
    hits.eventInfo.eventAction AS event_action,
    -- event_label (dimension)
    hits.eventInfo.eventLabel AS event_label,
    -- total_events (metric)
    COUNT(1) AS total_events,
    -- unique_events (metric),
    COUNT(
        DISTINCT CONCAT(
            CAST(fullVisitorId AS STRING),
            CAST(visitStartTime AS STRING)
        )
    ) AS unique_events
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
    UNNEST(ga.hits) AS hits
WHERE
    --_TABLE_SUFFIX BETWEEN '20200913' AND '20200916'
    TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
    AND hits.type = 'EVENT'
    AND REGEXP_CONTAINS(hits.eventInfo.eventLabel, '^login.*')
GROUP BY
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8