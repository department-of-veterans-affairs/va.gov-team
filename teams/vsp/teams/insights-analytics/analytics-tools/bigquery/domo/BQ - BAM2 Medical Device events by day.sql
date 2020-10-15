/***************************************************************************************************
Name:               BQ - BAM2 Medical Device events by day.sql
URL:                https://va-gov.domo.com/datasources/81789f8b-0eda-4405-ac85-60444af53d10/details/overview
Create Date:        2020-09-01
Author:             Brian Martin
Description:        This returns daily total and unique events for all event labels with a previs of 'bam-' 
                    or login-successful on pages that start with
                    'www.va.gov/health-care/order-hearing-aid-batteries-and-accessories'. It also returns
                    browser and device category.                   
 /***************************************************************************************************/
#standardSQL
WITH ga AS (
    SELECT
        PARSE_DATE("%Y%m%d", date) AS date,
        hits,
        fullVisitorId,
        visitStartTime,
        device
    FROM
        `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga
    WHERE
        -- _TABLE_SUFFIX = FORMAT_DATE(
        --     '%Y%m%d',
        --     DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
        -- )    
        _TABLE_SUFFIX BETWEEN "20200715" AND "20200916"
)
SELECT
    -- date (dimension)
    date,
    -- year (dimension)
    FORMAT_DATE('%Y', date) AS year,
    -- month (dimension)
    FORMAT_DATE('%m', date) AS month,
    -- month_name (dimension)
    FORMAT_DATE('%B', date) AS month_name,
    -- day (dimension)
    FORMAT_DATE('%d', date) AS day,
    -- device_category (dimension)
    device.deviceCategory AS device_category,
    -- device_browser (dimension)
    device.browser AS device_browser,
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
    ga,
    UNNEST(ga.hits) AS hits
WHERE
    hits.type = 'EVENT'
    AND REGEXP_CONTAINS(
        hits.eventInfo.eventLabel,
        r'^(bam-|login-successful).*'
    )
    AND REGEXP_CONTAINS(
        hits.page.pagePath,
        r'^www.va.gov/health-care/order-hearing-aid-batteries-and-accessories'
    )
GROUP BY
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
ORDER BY
    event_label ASC