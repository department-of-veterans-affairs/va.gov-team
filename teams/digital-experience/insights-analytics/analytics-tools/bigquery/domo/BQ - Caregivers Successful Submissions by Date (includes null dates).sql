/***************************************************************************************************
Name:               BQ - Caregivers Successful Submissions
URL:                https://va-gov.domo.com/datasources/ef11b673-024e-4ccb-bca2-37063c01afc0/details/overview
Create Date:        2020-09-18
Author:             Jon Wehausen
Description:        This returns daily total and unique events for caregiver 10-10 submissions. This creates
                    the date and subsequent columns for days where a submission isn't recieved.
 /***************************************************************************************************/
SELECT
    DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY) AS date,
    'placeholder' AS event_category,
    'placeholder' AS event_action,
    'placeholder' AS event_label,
    0 AS total_events
UNION
ALL
SELECT
    -- date (dimension)
    PARSE_DATE("%Y%m%d", t1.dt) AS date,
    -- year (dimension)
    FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", t1.dt)) AS year,
    -- month (dimension)
    FORMAT_DATE('%m', PARSE_DATE("%Y%m%d", t1.dt)) AS month,
    -- month_name (dimension)
    FORMAT_DATE('%B', PARSE_DATE("%Y%m%d", t1.dt)) AS month_name,
    -- day (dimension)
    FORMAT_DATE('%d', PARSE_DATE("%Y%m%d", t1.dt)) AS day,
    -- event_category (dimension)
    IFNULL(t2.event_category, 'Transactions') AS event_category,
    -- event_action (dimension)
    IFNULL(
        t2.event_action,
        'Forms - Family Member Benefits'
    ) AS event_action,
    -- event_label (dimension)
    IFNULL(
        t2.event_label,
        'caregivers-10-10cg--submission-successful'
    ) AS event_label,
    (
        CASE
            WHEN SUM(t2.total_events) IS NULL THEN 0
            ELSE SUM(t2.total_events)
        END
    ) AS total_events,
FROM
    dates t1
    LEFT JOIN (
        SELECT
            date AS event_date,
            -- event_category (dimension)
            hits.eventInfo.eventCategory AS event_category,
            -- event_action (dimension)
            hits.eventInfo.eventAction AS event_action,
            -- event_label (dimension)
            hits.eventInfo.eventLabel AS event_label,
            -- TOTAL_EVENTS (metric)
            COUNT(1) total_events,
        FROM
            `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
            UNNEST(ga.hits) AS hits
        WHERE
            _TABLE_SUFFIX BETWEEN '20200820'
            AND FORMAT_DATE(
                '%Y%m%d',
                DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
            )
            AND totals.visits = 1
            AND hits.type = 'EVENT'
            AND REGEXP_CONTAINS(
                hits.eventInfo.eventLabel,
                '^caregivers-10-10cg--submission-successful.*'
            )
        GROUP BY
            1,
            2,
            3,
            4
    ) AS t2 ON t1.dt = t2.event_date
GROUP BY
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
ORDER BY
    1 ASC;