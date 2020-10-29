/***************************************************************************************************
Name:               BQ - COVID Chatbot Source/Medium by Day
URL:                https://va-gov.domo.com/datasources/305b4a4e-bdcb-4b6b-917c-a5a69ed41fb1/details/overview
Create Date:        2020-09-12
Author:             Brian Martin
Description:        This returns daily source/medium and user counts for COVID chatbot pages.
/***************************************************************************************************/
SELECT
    date,
    source,
    medium,
    source_medium,
    COUNT(1) AS pageviews,
    COUNT(DISTINCT(fullvisitorId)) AS users
FROM
    (
        SELECT
            date,
            fullvisitorId,
            visitStartTime,
            hits.hitNumber,
            hits.page.pagePath AS pagePath,
            -- source (dimension)
            trafficSource.source AS source,
            -- medium (dimension)
            trafficSource.medium AS medium,
            -- source / medium (dimension)
            CONCAT(trafficSource.source," / ",trafficSource.medium) AS source_medium
        FROM
            `vsp-analytics-and-insights.176188361.ga_sessions_*` AS GA,
            UNNEST(GA.hits) AS hits
        WHERE
            --_TABLE_SUFFIX BETWEEN '20200422' AND '20200916'
            _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
            AND hits.type = 'PAGE'
        ORDER BY
            DATE ASC
    )
WHERE
    REGEXP_CONTAINS(pagePath, '^www.va.gov/coronavirus-chatbot/.*')
GROUP BY
    1, 2, 3, 4
