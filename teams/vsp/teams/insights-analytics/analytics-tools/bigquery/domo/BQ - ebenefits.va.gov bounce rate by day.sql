/***************************************************************************************************
Name:               BQ - ebenefits.va.gov bounce rate by day
URL:                https://va-gov.domo.com/datasources/d2c3d6b2-e185-4be8-b4f6-0f6877a2fa56/details/overview
Create Date:        2020-09-07
Author:             Brian Martin
Description:        This returns daily bounce rate for ebenefits pages.
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
    bounces,
    sessions,
    CASE
        WHEN sessions = 0 THEN 0
        ELSE bounces / sessions
    END AS bounce_rate
FROM
    (
        SELECT
            date,
            SUM(bounces) AS bounces,
            SUM(sessions) AS sessions
        FROM
            (
                SELECT
                    date,
                    fullVisitorId,
                    visitStartTime,
                    CASE
                        WHEN hitNumber = first_interaction THEN bounces
                        ELSE 0
                    END AS bounces,
                    CASE
                        WHEN hitNumber = first_hit THEN visits
                        ELSE 0
                    END AS sessions
                FROM
                    (
                        SELECT
                            date,
                            fullVisitorId,
                            visitStartTime,
                            hits.page.pagePath,
                            totals.bounces,
                            totals.visits,
                            hits.hitNumber,
                            MIN(
                                IF(
                                    hits.isInteraction IS NOT NULL,
                                    hits.hitNumber,
                                    0
                                )
                            ) OVER (PARTITION BY fullVisitorId, visitStartTime) AS first_interaction,
                            MIN(hits.hitNumber) OVER (PARTITION BY fullVisitorId, visitStartTime) AS first_hit
                        FROM
                            `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
                            UNNEST(ga.hits) AS hits
                        WHERE
                            --_TABLE_SUFFIX BETWEEN '20200711' AND '20200916'
                            _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
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


                            
                    )
            )
        GROUP BY
            date
    )
ORDER BY
    date ASC,
    sessions DESC