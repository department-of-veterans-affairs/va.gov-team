/***************************************************************************************************
 Name:               BQ - VAOS Events with error
 URL:                https://va-gov.domo.com/datasources/b1a085f4-b988-49d7-b283-aa3ec7c30acc/details/settings
 Create Date:        2020-08-27
 Author:             Brian Martin
 Description:        This returns daily total and unique events for all event labels with a prefix of 'vaos-' on pages
 that start with 'www.va.gov'.
 /***************************************************************************************************/
#standardSQL
SELECT
    date,
    year,
    month,
    month_name,
    day,
    pagePath,
    event_category,
    event_action,
    event_label,
    error_key,
    total_events,
    unique_events,
    users
FROM
    (
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
            -- pagePath (dimension)
            hits.page.pagePath,
            -- event_category (dimension)
            hits.eventInfo.eventCategory AS event_category,
            -- event_action (dimension)
            hits.eventInfo.eventAction AS event_action,
            -- event_label (dimension)
            hits.eventInfo.eventLabel AS event_label,
            -- error_key
            (
                SELECT
                    hcd.value
                FROM
                    hits.customdimensions AS hcd
                WHERE
                    hcd.index = 110
            ) AS error_key,            
            -- total_events (metric)
            COUNT(1) AS total_events,
            -- unique_events (metric),
            COUNT(
                DISTINCT CONCAT(
                    CAST(fullVisitorId AS STRING),
                    CAST(visitStartTime AS STRING)
                )
            ) AS unique_events,
            -- users (dimension)
            COUNT(DISTINCT(fullVisitorId)) AS users
        FROM
            `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
            UNNEST(ga.hits) AS hits
        WHERE
            _TABLE_SUFFIX = FORMAT_DATE(
                '%Y%m%d',
                DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
            ) --_TABLE_SUFFIX BETWEEN '20200909' and '20200912'
            AND hits.type = 'EVENT'
            AND REGEXP_CONTAINS(hits.eventInfo.eventLabel, '^vaos-')
            AND REGEXP_CONTAINS(hits.page.pagePath, '^www.va.gov')
        GROUP BY
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
    )
WHERE
    error_key IS NOT NULL