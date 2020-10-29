/***************************************************************************************************
Name:               BQ - ebenefits.va.gov All Events
URL:                https://va-gov.domo.com/datasources/2d9510d2-ad65-4fe5-b10a-1d93f664a23e/details/overview
Create Date:        2020-09-07
Author:             Brian Martin
Description:        This returns daily total and unique events for all events on pages that start with 
                    'ebenefits.va.gov' or 'eauth.va.gov'
 /***************************************************************************************************/
 #standardSQL
SELECT
    -- date (dimension)
    PARSE_DATE("%Y%m%d", date) as date,    
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
    -- event_category (dimension)
    hits.eventInfo.eventCategory AS event_category,
    -- event_action (dimension)
    hits.eventInfo.eventAction AS event_action,
    -- event_label (dimension)
    hits.eventInfo.eventLabel AS event_label,
    -- total_events (metric)
    COUNT(1) AS total_events,
    -- unique_events (metric),
    COUNT(
        DISTINCT CONCAT(
            CAST(fullVisitorId AS STRING),
            CAST(visitStartTime AS STRING)
        )
    ) AS unique_events
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
    UNNEST(ga.hits) AS hits
WHERE
    _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
    --_TABLE_SUFFIX BETWEEN '20200717' and '20200915'
    and totals.visits = 1
    AND hits.type = 'EVENT'
    AND REGEXP_CONTAINS(hits.page.pagePath, r'^(eauth\.va\.gov|www\.ebenefits\.va\.gov)')
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
    7,
    8,
    9