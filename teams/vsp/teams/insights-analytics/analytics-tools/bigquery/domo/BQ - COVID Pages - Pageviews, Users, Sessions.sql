/***************************************************************************************************
Name:               BQ - COVID Pages - Pageviews, Users, Sessions
URL:                https://va-gov.domo.com/datasources/6fca6029-6e53-4a81-90f4-501cb65a41f9/details/overview
Create Date:        2020-07-29
Author:             Jon Wehausen
Description:        This returns daily pageview, users, and sessions for all pages with COVID or coronavirus in the 
                    URL.
/***************************************************************************************************/
SELECT
    date,
    hits.page.pagePath,
    COUNT(*) AS pageviews,
    COUNT(DISTINCT fullVisitorId) AS users,
    -- New Users (metric)
    COUNT(
        DISTINCT(
            CASE
                WHEN totals.newVisits = 1 THEN fullVisitorId
                ELSE NULL
            END
        )
    ) AS new_users,
    COUNT(
        DISTINCT CONCAT(fullVisitorId, CAST(visitId AS STRING))
    ) AS sessions
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS GA,
    UNNEST(GA.hits) AS hits
WHERE
    --_TABLE_SUFFIX = FORMAT_DATE('%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
    _TABLE_SUFFIX BETWEEN "20200913" AND "20200913"
    AND hits.type = 'PAGE'
    AND totals.visits = 1
    AND REGEXP_CONTAINS(hits.page.pagePath, '(covid|coronavirus)')
GROUP BY
  1, 2
ORDER BY
    date ASC,
    pageviews DESC