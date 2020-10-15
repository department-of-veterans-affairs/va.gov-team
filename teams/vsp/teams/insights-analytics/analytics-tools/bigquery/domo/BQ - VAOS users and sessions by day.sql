/***************************************************************************************************
Name:               BQ - VAOS users and sessions by day
URL:                https://va-gov.domo.com/datasources/90ecc7a5-33a0-477d-a02f-eeb8d69c5d19/details/overview
Create Date:        2020-09-07
Author:             Brian Martin
Description:        This returns daily user and session counts for sessions with a visit to 
                    www.va.gov/health-care/schedule-view-va-appointments/appointments/
/***************************************************************************************************/
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
    -- sessions (metric)
    COUNT(
        DISTINCT CONCAT(
            CAST(fullVisitorId AS STRING),
            CAST(visitStartTime AS STRING)
        )
    ) AS sessions,
    -- users (metric)
    COUNT(DISTINCT fullVisitorId) AS users,
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` ga
WHERE
    _TABLE_SUFFIX = FORMAT_DATE(
        '%Y%m%d',
        DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
    )
    --_TABLE_SUFFIX BETWEEN "20200301" AND "20200916"
    AND totals.visits = 1
    AND (
        SELECT
            COUNT(1) > 0
        FROM
            UNNEST(ga.hits) hits
        WHERE
            hits.page.pagePath = "www.va.gov/health-care/schedule-view-va-appointments/appointments/"
    )
GROUP BY
    1,
    2,
    3,
    4,
    5
ORDER BY
    date ASC