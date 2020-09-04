/***************************************************************************************************
Name:               BQ - Modernized www.va.gov - Overall PVs, Sessions, Users, Bounces by Month
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
    (SELECT
      value
    FROM
      UNNEST(hits.customDimensions)
    WHERE
      index = 30
    GROUP BY
      1) AS Modernized,
    hits.page.pagePath as pagePath,
    totals.pageviews as totals_pageviews,
    totals.visits as totals_visits,
    totals.bounces as totals_bounces
  FROM 
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
    UNNEST(ga.hits) AS hits
  WHERE
    -- Load previous month's tables
    SUBSTR(_TABLE_SUFFIX, 0, 6) = FORMAT_DATE(
        "%E4Y%m",
        DATE_SUB(CURRENT_DATE, INTERVAL 1 MONTH)
    )
  GROUP BY 
    1, 2, 3, 4, 5, 6, 7
)
SELECT 
  FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", date)) AS YEAR,
  FORMAT_DATE('%m', PARSE_DATE("%Y%m%d", date)) AS MONTH,
  FORMAT_DATETIME("%B", PARSE_DATE("%Y%m%d", date)) AS MONTH_NAME,
  SUM(totals_visits) as SESSIONS,
  COUNT(DISTINCT fullVisitorId) as USERS,
  SUM(totals_pageviews) as PAGEVIEWS,
  SUM(totals_bounces) AS BOUNCES
FROM
  sessions
WHERE
  Modernized IS NOT NULL
  AND REGEXP_CONTAINS(pagePath, r"^www.va.gov")
GROUP BY
  1, 2, 3
ORDER BY
  YEAR ASC,
  MONTH ASC