/***************************************************************************************************
Name:               BQ - Funnel - Education WIP
URL:                
Create Date:        2020-09-04
Author:             Jon Wehausen
Description:        This returns...
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
    -- pagePath (dimension)
    pagePath,
    -- device_category (dimension)
    device_category,  
    -- Browser (dimension)
    browser,
    -- pageviews (metric)
    pageviews,
    -- sessions (metric)
    sessions AS sessions,
    -- users (metric)
    COUNT(DISTINCT fullVisitorId) AS users,
    -- Unique Pageviews (metric)
    SUM(unique_pageviews) AS unique_pageviews,
    -- bounces (dimension)
    SUM(totals_bounces) AS bounces
FROM (
    SELECT
        date,
        fullVisitorId,
        hits.page.pagePath as pagePath,   
        device.deviceCategory AS device_category,     
        device.browser AS browser,
        totals.bounces AS totals_bounces,
        COUNT(DISTINCT CONCAT(fullVisitorId, CAST(visitStartTime AS STRING))) AS sessions,
        COUNT(*) AS pageviews,
        COUNT(DISTINCT CONCAT(CAST(fullVisitorId AS STRING), CAST(visitStartTime AS STRING))) AS unique_pageviews
    FROM
        `vsp-analytics-and-insights.176188361.ga_sessions_*` ga,
        UNNEST(ga.hits) as hits
    WHERE
        _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 2 DAY))
        AND totals.visits = 1
        AND hits.type = "PAGE"
        AND REGEXP_CONTAINS(hits.page.pagePath, r"^www.va.gov/health-care/order-hearing-aid-batteries-and-accessories.*$")
    GROUP BY
        1, 2, 3, 4, 5, 6, 7
)
GROUP BY
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
ORDER BY
  pageviews DESC