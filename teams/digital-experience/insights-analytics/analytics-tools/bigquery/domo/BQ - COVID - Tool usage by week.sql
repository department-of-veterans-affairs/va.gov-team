/***************************************************************************************************
Name:               BQ - COVID - Tool usage by week
URL:                
Create Date:        2020-08-12
Author:             Jon Wehausen
Description:        This returns daily...
/***************************************************************************************************/
#standardSQL
WITH ga AS (
    SELECT
        -- date (dimension)
        EXTRACT(WEEK FROM PARSE_DATE("%Y%m%d", date)) AS week,
        hits.page.pagePath as pagePath,
        fullVisitorId
    FROM
        `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
        UNNEST(ga.hits) AS hits
    WHERE
        _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 2 DAY))
        AND hits.type = 'PAGE'
        AND REGEXP_CONTAINS(hits.page.pagePath, '(covid|corona)')
    GROUP BY
        1, 2, 3
)
SELECT week, "Screener" AS name, COUNT(DISTINCT(CASE WHEN REGEXP_CONTAINS(pagePath, 'screen') THEN  fullVisitorId END)) as users FROM ga GROUP BY 1 UNION ALL
SELECT week, "Chatbot" AS name, COUNT(DISTINCT(CASE WHEN REGEXP_CONTAINS(pagePath, 'chatbot') THEN  fullVisitorId END)) as users FROM ga GROUP BY 1 UNION ALL
SELECT week, "Mental Health" AS name, COUNT(DISTINCT(CASE WHEN REGEXP_CONTAINS(pagePath, 'www.mentalhealth.va.gov/coronavirus') THEN  fullVisitorId END)) as users FROM ga GROUP BY 1 UNION ALL
SELECT week, "Public Health" AS name, COUNT(DISTINCT(CASE WHEN REGEXP_CONTAINS(pagePath, 'www.publichealth.va.gov/n-coronavirus') THEN  fullVisitorId END)) as users FROM ga GROUP BY 1 UNION ALL
SELECT week, "FAQs" AS name, COUNT(DISTINCT(CASE WHEN REGEXP_CONTAINS(pagePath, 'www.va.gov/coronavirus-veteran-frequently-asked-question') THEN  fullVisitorId END)) as users FROM ga GROUP BY 1