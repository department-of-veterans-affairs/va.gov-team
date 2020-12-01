/***************************************************************************************************
Name:               BQ - All VA - PVs, Sessions, Users, Bounces by Month
URL:                https://va-gov.domo.com/datasources/b9b232d0-0a8f-45cb-a1c4-a828418cd261/details/overview
Create Date:        2020-08-25
Author:             Brian Martin
Description:        This returns monthly totals for sessions, users, paseviews, and bounces for the entire previous month
                    for ALL va.gov domains.
 /***************************************************************************************************/
#standardSQL
SELECT
    -- year (dimension)
    FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", date)) AS year,
    -- month (dimension)
    FORMAT_DATE('%m', PARSE_DATE("%Y%m%d", date)) AS month,
    -- month_name (dimension)
    FORMAT_DATE('%B', PARSE_DATE("%Y%m%d", date)) AS month_name,
    -- sessions (metric)
    SUM(totals.visits) AS sessions,
    -- users (metric)
    COUNT(DISTINCT fullVisitorId) AS users,
    -- pageviews (metric)
    SUM(totals.pageviews) AS pageviews,
    -- bounces (metric)
    SUM(totals.bounces) AS bounces
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga
WHERE
    -- Load previous month's tables
    SUBSTR(_TABLE_SUFFIX, 0, 6) = FORMAT_DATE(
        "%E4Y%m",
        DATE_SUB(CURRENT_DATE, INTERVAL 1 MONTH)
    )
    --_TABLE_SUFFIX BETWEEN "20190701" AND "20200831"
    AND totals.visits = 1
GROUP BY
    1,
    2,
    3
ORDER BY
    year ASC,
    month ASC