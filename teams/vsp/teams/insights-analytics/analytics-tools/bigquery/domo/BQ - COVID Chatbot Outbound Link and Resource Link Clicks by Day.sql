/***************************************************************************************************
 Name:               BQ - COVID Chatbot Outbound Link and Resource Link Clicks by Day
 URL:                https://va-gov.domo.com/...
 Create Date:        2020-09-13
 Author:             Brian Martin
 Description:        This returns daily total and unique events for all event labels with a prefix of 'vaos-' on pages
                     that start with 'www.va.gov'.
 /***************************************************************************************************/
 #standardSQL
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
    -- pagePath (dimension)
    hits.page.pagePath,
    -- event_category (dimension)
    hits.eventInfo.eventCategory AS event_category,
    -- event_action (dimension)
    hits.eventInfo.eventAction AS event_action,
    -- event_label (dimension)
    hits.eventInfo.eventLabel AS event_label,
    -- device_category (dimension)
    device.deviceCategory AS device_category,
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
    --_TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
    _TABLE_SUFFIX BETWEEN '20200831' and '20200902'
    AND hits.type = 'EVENT'
    AND REGEXP_CONTAINS(hits.eventInfo.eventAction, '^(Chatbot - COVID - Resource Link|Outbound Link)')
    AND REGEXP_CONTAINS(hits.page.pagePath, '^www.va.gov/coronavirus-chatbot.*')
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