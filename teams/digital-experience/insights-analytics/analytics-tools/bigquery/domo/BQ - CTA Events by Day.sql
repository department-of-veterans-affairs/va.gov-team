/***************************************************************************************************
Name:               BQ - CTA Events by Day
URL:                https://va-gov.domo.com/datasources/37aa0420-78b7-4516-88c4-c169be84f760/details/overview
Create Date:        2020-09-16
Author:             Brian Martin
Description:        This returns daily event information for events with a label tha starts with 'cta-'
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
    -- event_category (dimension)
    hits.eventInfo.eventCategory AS event_category,
    -- event_action (dimension)
    hits.eventInfo.eventAction AS event_action,
    -- event_label (dimension)
    hits.eventInfo.eventLabel AS event_label,
    -- TOTAL_EVENTS (metric)
    COUNT(1) total_events,
    -- unique_events (metric)
    COUNT(
        DISTINCT CONCAT(
            CAST(fullVisitorId AS STRING),
            CAST(visitStartTime AS STRING)
        )
    ) AS unique_events
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` as ga,
    UNNEST(ga.hits) AS hits
WHERE
    _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
    --_TABLE_SUFFIX BETWEEN "20200818" AND "20200916"
    AND totals.visits = 1
    AND hits.type = 'EVENT'
    AND REGEXP_CONTAINS(hits.eventInfo.eventLabel, '^cta-.*')
GROUP BY
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8