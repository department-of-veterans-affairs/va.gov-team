/***************************************************************************************************
Name:               BQ - Modernized - PVs, Sessions, Users, Bounces by Day
URL:                https://va-gov.domo.com/datasources/179e5ca8-ccb0-4ba1-af00-d95fde98bb29/details/overview
Create Date:        2020-09-13
Author:             Brian Martin
Description:        This returns daily pageview, sessions, users, and bounces for pages with Modernized CD set to
                    True and on the www.va.gov domain.
/***************************************************************************************************/
#standardSQL
WITH sessions AS (
  SELECT
    date,
    fullVisitorId,
    visitStartTime,
    hits.hitNumber,
    totals.bounces AS totals_bounces
  FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
    UNNEST(ga.hits) AS hits
  WHERE
    -- Load previous day's tables
    _TABLE_SUFFIX = FORMAT_DATE(
        '%Y%m%d',
        DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
    )   
    AND totals.visits = 1
    AND hits.type = "PAGE"
    AND (
      SELECT
        value
      FROM
        UNNEST(hits.customDimensions)
      WHERE
        INDEX = 30
      GROUP BY
        1
    ) IS NOT NULL
    AND REGEXP_CONTAINS(hits.page.pagePath, "^www.va.gov")
  GROUP BY
    1,
    2,
    3,
    4,
    5
)
SELECT
  -- date (dimension)
  PARSE_DATE("%Y%m%d", date) as date,
  -- year (dimension)
  FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", date)) AS year,
  -- month (dimension)
  FORMAT_DATE('%m', PARSE_DATE("%Y%m%d", date)) AS month,
  -- month_name (dimension)
  FORMAT_DATE('%B', PARSE_DATE("%Y%m%d", date)) AS month_name,
  -- sessions (metric)
  COUNT(DISTINCT CONCAT(CAST(fullVisitorId AS STRING), CAST(visitStartTime AS STRING))) AS sessions,
  -- users (metric)
  COUNT(DISTINCT fullVisitorId) AS users,
  -- pageviews (metric)
  COUNT(1) AS pageviews,
  -- bounces (metric)
  SUM(totals_bounces) AS bounces
FROM
  sessions
GROUP BY
  1,
  2,
  3,
  4
ORDER BY
  year ASC,
  month ASC