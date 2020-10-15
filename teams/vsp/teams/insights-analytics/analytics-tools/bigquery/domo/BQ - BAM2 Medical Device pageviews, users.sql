/***************************************************************************************************
Name:               BQ - BAM2 Medical Device pageviews, users 
URL:                https://va-gov.domo.com/datasources/6e4a3a1b-c5fa-42df-8d85-7d5fddd8cf2d/details/overview
Create Date:        2020-09-04
Author:             Brian Martin
Description:        This returns daily totals for sessions, users (DON'T ADD JUST ADD TOGETHER!  USE A MONTHLY QUERY!),
                    pageviews, unique pageviews and bounces for BAM2 / Medical Device pages
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
    -- sessions (metric)
    SUM(totals_visits) AS sessions,
    -- users (metric)
    COUNT(DISTINCT fullVisitorId) AS users,
    -- pageviews (metric)
    SUM(totals_pageviews) AS pageviews,
    -- Unique Pageviews (metric)
    SUM(unique_pageviews) AS unique_pageviews,
    -- bounces (dimension)
    SUM(totals_bounces) AS bounces
FROM (
    SELECT
        date,
        fullVisitorId,
        hits.page.pagePath as pagePath,        
        device.browser AS browser,
        device.deviceCategory AS device_category,
        totals.pageviews AS totals_pageviews,
        totals.visits AS totals_visits,
        totals.bounces AS totals_bounces,
        COUNT(DISTINCT CONCAT(CAST(fullVisitorId AS STRING), CAST(visitStartTime AS STRING))) AS unique_pageviews,
    FROM
        `vsp-analytics-and-insights.176188361.ga_sessions_*` ga,
        UNNEST(ga.hits) as hits
    WHERE
        _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
        AND totals.visits = 1
        AND REGEXP_CONTAINS(hits.page.pagePath, r"^www.va.gov/health-care/order-hearing-aid-batteries-and-accessories.*$")
    GROUP BY
        1, 2, 3, 4, 5, 6, 7, 8
)
GROUP BY
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8
ORDER BY
  date ASC