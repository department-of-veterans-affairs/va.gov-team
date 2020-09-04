/***************************************************************************************************
Name:               BQ - All BAM2 Medical Device events by day.sql
URL:                
Create Date:        2020-09-01
Author:             Brian Martin
Description:        This returns daily total and unique events for all event labels with a previs of 'bam-' 
                    or login-successful on pages that start with
                    'www.va.gov/health-care/order-hearing-aid-batteries-and-accessories'. It also returns
                    browser and device category.                   
/***************************************************************************************************/
#standardSQL
SELECT
    -- date (dimension)
    PARSE_DATE("%Y%m%d", date) AS date,
    -- year (dimension)
    FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", date)) AS year,
    -- month (dimension)
    FORMAT_DATE('%m', PARSE_DATE("%Y%m%d", date)) AS MONTH,
    -- month_name (dimension)
    FORMAT_DATE('%B', PARSE_DATE("%Y%m%d", date)) AS month_name,
    -- day (dimension)
    FORMAT_DATE('%d', PARSE_DATE("%Y%m%d", date)) AS DAY,
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
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
    UNNEST(ga.hits) AS hits
WHERE
    _TABLE_SUFFIX = "20200827"
    AND hits.type = 'EVENT'
    AND REGEXP_CONTAINS(
        hits.eventInfo.eventLabel,
        r'^(bam-|login-successful).*'
    )
    AND REGEXP_CONTAINS(
        hits.page.pagePath,
        r'^www.va.gov/health-care/order-hearing-aid-batteries-and-accessories'
    )
    AND (
        EXISTS (
            SELECT
                1
            FROM
                UNNEST(hits.customDimensions)
            WHERE
                INDEX = 57
                AND value = 'accessories_bam-ineligibility-no-prescription'
        )
        AND EXISTS (
            SELECT
                1
            FROM
                UNNEST(hits.customDimensions)
            WHERE
                INDEX = 57
                AND value = 'batteries_bam-ineligibility-no-prescription'
        ) IS FALSE
)

-- TRUE AND TRUE = true
-- FALSE AND TRUE = false
-- TRUE AND FALSE  false

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