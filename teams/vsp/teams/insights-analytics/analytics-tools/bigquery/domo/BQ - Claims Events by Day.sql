/***************************************************************************************************
Name:               BQ - Claims Events by day
URL:                https://va-gov.domo.com/datasources/a8be940b-5929-46e6-874b-0ed0c77c016b/details/overview
Create Date:        2020-09-11
Author:             Brian Martin
Description:        This returns daily total and unique events for events that have an event action
                    starts with "Claims -".
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
    --_TABLE_SUFFIX BETWEEN '20190618' AND '20200910'
    _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
    AND hits.type = 'EVENT'
    AND REGEXP_CONTAINS(hits.eventInfo.eventAction, '^Claims -')
GROUP BY
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8