/***************************************************************************************************
Name:               BQ - All VA - PVs, Sessions, User by Device Category by Day 
URL:                https://va-gov.domo.com/datasources/e4aa11d0-f99c-4cb7-b941-eee6feba72fc/details/overview
Create Date:        2020-08-18
Author:             Jon Wehausen
Description:        This returns daily totals for sessions, users (DON'T ADD JUST ADD TOGETHER!  USE A MONTHLY QUERY!),
                    pageviews, and bounces.
/***************************************************************************************************/
SELECT
  date AS DATE,
  device.deviceCategory AS DEVICE_TYPE,
  COUNT(DISTINCT fullVisitorId) AS USERS,
  SUM(totals.visits) AS VISITS,
  SUM(totals.pageviews) AS PAGEVIEWS
FROM
  `vsp-analytics-and-insights.176188361.ga_sessions_*`
WHERE
  _TABLE_SUFFIX BETWEEN FORMAT_DATE(
    '%Y%m%d',
    DATE_SUB(CURRENT_DATE(), INTERVAL 396 DAY)
  )
  AND FORMAT_DATE(
    '%Y%m%d',
    DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
  )
GROUP BY
  date,
  device_type
ORDER BY
  date ASC