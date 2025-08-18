/***************************************************************************************************
Name:               BQ - COVID FAQ Pageviews by day
URL:                https://va-gov.domo.com/datasources/2f353d70-3187-4a2e-89c6-da98509691e8/details/overview
Create Date:        2020-09-12
Author:             Brian Martin
Description:        This returns the previous page path for all COVID chatbot pages.
/***************************************************************************************************/
SELECT 
    date,
    pagePath,
    previous_page_path,
    COUNT(1) AS pageviews,
    COUNT(DISTINCT(session_id)) AS unique_pageviews
FROM
    (
        SELECT
            PARSE_DATE("%Y%m%d", date) as date, 
            hits.hitNumber,
            CONCAT(
                CAST(fullVisitorId AS STRING),
                CAST(visitStartTime AS STRING)
            ) AS session_id,
            hits.page.pagePath AS pagePath,
            LAG(hits.page.pagePath, 1) OVER (
                PARTITION BY fullvisitorId,
                visitStartTime
                ORDER BY
                    hits.hitNumber ASC
            ) AS previous_page_path
        FROM
            `vsp-analytics-and-insights.176188361.ga_sessions_*` AS GA,
            UNNEST(GA.hits) AS hits
        WHERE
            _TABLE_SUFFIX BETWEEN '20200422' AND '20200922'
            --_TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
            AND hits.type = 'PAGE'
        ORDER BY
            DATE ASC
    )
WHERE
    REGEXP_CONTAINS(pagePath, '^www.va.gov/coronavirus-veteran-frequently-asked-questions.*')
GROUP BY
    1, 2, 3
ORDER BY
  pageviews DESC