/***************************************************************************************************
 Name:               BQ - VAOS Events
 URL:                https://va-gov.domo.com/datasources/b1a085f4-b988-49d7-b283-aa3ec7c30acc/details/settings
 Create Date:        2020-08-27
 Author:             Brian Martin
 Description:        This returns daily total and unique events for all event labels with a prefix of 'vaos-' on pages
 that start with 'www.va.gov'.
 /***************************************************************************************************/
#standardSQL
WITH ga AS (
    SELECT
        -- date (dimension)
        PARSE_DATE("%Y%m%d", date) AS date,
        -- fullVisitorId (dimension)
        fullVisitorId,
        -- pagePath (dimension)
        hits.page.pagePath,
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
        --_TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 2 DAY))
        _TABLE_SUFFIX BETWEEN '20201001'
        AND FORMAT_DATE(
            '%Y%m%d',
            DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
        )
        AND hits.type = 'EVENT'
        AND REGEXP_CONTAINS(
            hits.eventInfo.eventLabel,
            '^(login-loa-current-.*|vaos-schedule-appointment-button-clicked)$'
        )
        AND REGEXP_CONTAINS(hits.page.pagePath, '^www.va.gov')
    GROUP BY
        1,
        2,
        3,
        4,
        5,
        6
)
SELECT
    logged_in_users.date,
    -- year (dimension)
    FORMAT_DATE('%Y', logged_in_users.date) AS year,
    -- month (dimension)
    FORMAT_DATE('%m', logged_in_users.date) AS month,
    -- month_name (dimension)
    FORMAT_DATE('%B', logged_in_users.date) AS month_name,
    -- day (dimension)
    FORMAT_DATE('%d', logged_in_users.date) AS day,    
    COUNT(DISTINCT(logged_in_users.fullVisitorId)) AS logged_in_users,
    COUNT(DISTINCT(vaos_starts_users.fullVisitorId)) AS vaos_starts_users
FROM
    (
        SELECT
            date,
            fullVisitorId
        FROM
            ga
        WHERE
            REGEXP_CONTAINS(event_label, '^login-loa-current-.*$')
    ) AS logged_in_users
    LEFT JOIN (
        SELECT
            date,
            fullVisitorId
        FROM
            ga
        WHERE
            event_label = 'vaos-schedule-appointment-button-clicked'
    ) AS vaos_starts_users ON logged_in_users.fullVisitorId = vaos_starts_users.fullVisitorId
GROUP BY
    1
ORDER BY
    1 ASC