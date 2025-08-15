/***************************************************************************************************
Name:               BQ - All VA - PVs, Sessions, Users, Bounces by Day
URL:                https://va-gov.domo.com/datasources/24ff29ec-4329-45a4-8b0f-06dfde513817/details/overview
Create Date:        2020-08-18
Author:             Jon Wehausen
Description:        This returns daily totals for sessions, users (DON'T ADD JUST ADD TOGETHER!  USE A MONTHLY QUERY!),
                    pageviews, and bounces.
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
    -- sessions (metric)
  SUM(totals.visits) AS sessions,
    -- users (metric)
  COUNT(DISTINCT fullVisitorId) AS users,
    -- pageviews (metric)
  SUM(totals.pageviews) AS pageviews,
    -- bounces (dimension)
  SUM(totals.bounces) AS bounces
FROM
  `vsp-analytics-and-insights.176188361.ga_sessions_*`
WHERE
  _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
  --_TABLE_SUFFIX BETWEEN "20190618" AND "20200912"
  AND totals.visits = 1
GROUP BY
  1,
  2,
  3,
  4,
  5
ORDER BY
  date ASC