/***************************************************************************************************
Name:               BQ - ebenefits.va.gov Top Pages
URL:                https://va-gov.domo.com/datasources/cc298ccd-abe5-40cd-b0af-15724c7ca337/details/overview
Create Date:        2020-09-07
Author:             Brian Martin
Description:        This returns daily totals for pageviews and unique pageviews for eBenefits pages/
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
    hits.page.pagePath,
    -- pageTitle (dimension)
    hits.page.pageTitle,
    -- pageviews (metric)    
    COUNT(*) AS pageviews,
    -- unique pageviews (metric)
    COUNT(
        DISTINCT CONCAT(fullVisitorId, CAST(visitId AS STRING))
    ) AS unique_pageviews
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
    UNNEST(ga.hits) AS hits
WHERE        
    --_TABLE_SUFFIX BETWEEN '20200717' and '20200914'
    _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
    AND hits.type = 'PAGE'
    AND totals.visits = 1    
    AND REGEXP_CONTAINS(
            hits.page.pagePath,
            r'^(eauth\.va\.gov|www\.ebenefits\.va\.gov)'
    )
    AND NOT REGEXP_CONTAINS(
        hits.page.pagePath,
        r'(/mhv-portal-web|/web/myhealthevet/)'
    )
    AND NOT REGEXP_CONTAINS(
        hits.page.pagePath,
        r'(preprod\.eauth\.va\.gov|preprodchat\.vrm\.vba\.va\.gov|sqa\.eauth\.va\.gov|pint\.eauth\.va\.gov|m\.pint\.ebenefits\.va\.gov|int\.ebenefits\.va\.gov|int\.eauth\.va\.gov|perf\.ebenefits\.va\.gov|demo\.ebenefits\.va\.gov|mhv-intb\.myhealth\.va\.gov|mhv-syst\.myhealth\.va\.gov|pint\.ebenefits\.va\.gov|pint2\.vaausessapp601\.aac\.va\.gov|pint2\.vaenapp30\.aac\.va\.gov.*|vaausessapp(.*)\.aac\.va\.gov.*|vaebnapp7\.aac\.va\.gov.*|ebenefits-preprod\.aac\.va\.gov)'
    )
GROUP BY
    1,
    2,
    3,
    4,
    5,
    6,
    7