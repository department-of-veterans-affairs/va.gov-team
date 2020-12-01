/***************************************************************************************************
Name:               BQ - Modernized - PVs, Sessions, Users, Bounces by Month
URL:                https://va-gov.domo.com/datasources/6d0dd635-41bf-4ee4-9866-c49e8d701870/details/overview
Create Date:        2020-08-18
Author:             Brian Martin
Description:        This returns monthly totals for users, pageviews, and bounces for all pageviews where custom
                    dimension 'Modernized' is set to true and the pagePath begins with 'www.va.gov'.  This should run
                    on the first of every month.
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
    -- Load previous month's tables
    SUBSTR(_TABLE_SUFFIX, 0, 6) = FORMAT_DATE(
      "%E4Y%m",
      DATE_SUB(CURRENT_DATE, INTERVAL 1 MONTH)
    )
    --_TABLE_SUFFIX BETWEEN "20190701" AND "20200831"
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
  3
ORDER BY
  year ASC,
  month ASC