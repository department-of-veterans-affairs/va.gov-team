/***************************************************************************************************
Name:               BQ - COVID Chatbot Previous Page Path
URL:                https://va-gov.domo.com/datasources/2f353d70-3187-4a2e-89c6-da98509691e8/details/overview
Create Date:        2020-09-12
Author:             Brian Martin
Description:        This returns the previous page path for all COVID chatbot pages.
/***************************************************************************************************/
SELECT
    date,
    pagePath,
    previous_page_path,
    COUNT(1) AS pageviews
FROM
    (
        SELECT
            date,
            fullvisitorId,
            visitStartTime,
            hits.hitNumber,
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
            _TABLE_SUFFIX BETWEEN '20200901'
            AND '20200902'
            AND hits.type = 'PAGE'
        ORDER BY
            DATE ASC
    )
WHERE
    REGEXP_CONTAINS(pagePath, '^www.va.gov/coronavirus-chatbot/.*')
GROUP BY
    1, 2, 3
ORDER BY
  pageviews DESC