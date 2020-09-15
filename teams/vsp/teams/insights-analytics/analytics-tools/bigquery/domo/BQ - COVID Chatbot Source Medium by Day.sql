/***************************************************************************************************
Name:               BQ - COVID Chatbot Source/Medium by Day
URL:                
Create Date:        2020-09-12
Author:             Brian Martin
Description:        This returns the previous page path for all /profile pages. 
/***************************************************************************************************/
SELECT
    date,
    source,
    medium,
    source_medium,
    COUNT(DISTINCT(fullvisitorId()) AS users
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
            _TABLE_SUFFIX BETWEEN '20200901'
            AND '20200902'
        ORDER BY
            DATE ASC
    )
WHERE
    REGEXP_CONTAINS(pagePath, '^www.va.gov/coronavirus-chatbot/.*')
GROUP BY
    1, 2, 3
