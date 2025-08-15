/***************************************************************************************************
Name:               BQ - All VA - PVs, Sessions, User by Device Category by Day 
URL:                https://va-gov.domo.com/datasources/e4aa11d0-f99c-4cb7-b941-eee6feba72fc/details/overview
Create Date:        2020-08-18
Author:             Jon Wehausen
Description:        This returns daily totals for sessions, users, and pageviews with device category.
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
  device.deviceCategory as device_category,
  COUNT(DISTINCT fullVisitorId) AS users,
  SUM(totals.visits) AS sessions,
  SUM(totals.pageviews) AS pageviews
FROM
  `vsp-analytics-and-insights.176188361.ga_sessions_*`
WHERE
_TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
GROUP BY 
  1,2,3,4,5,6
ORDER BY 
  date ASC