/***************************************************************************************************
 Name:               BQ - All VA - Overall PVs, Sessions, Users, Bounces by Month
 URL:                https://va-gov.domo.com/datasources/b9b232d0-0a8f-45cb-a1c4-a828418cd261/details/overview
 Create Date:        2020-08-25
 Author:             Brian Martin
 Description:        This returns monthly totals for sessions, users, paseviews, and bounces for the entire previous month.
 /***************************************************************************************************/
#standardSQL
SELECT
    FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", date)) AS YEAR,
    FORMAT_DATE('%m', PARSE_DATE("%Y%m%d", date)) AS MONTH,
    FORMAT_DATETIME("%B", PARSE_DATE("%Y%m%d", date)) AS MONTH_NAME,
    SUM(totals.visits) as SESSIONS,
    COUNT(DISTINCT fullVisitorId) as USERS,
    SUM(totals.pageviews) as PAGEVIEWS,
    SUM(totals.bounces) AS BOUNCES
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga
WHERE
    -- Load previous month's tables
    SUBSTR(_TABLE_SUFFIX, 0, 6) = FORMAT_DATE(
        "%E4Y%m",
        DATE_SUB(CURRENT_DATE, INTERVAL 1 MONTH)
    )
GROUP BY
    1,
    2,
    3
ORDER BY
    YEAR ASC,
    MONTH ASC
