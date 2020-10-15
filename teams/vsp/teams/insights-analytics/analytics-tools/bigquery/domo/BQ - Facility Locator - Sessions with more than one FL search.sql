/***************************************************************************************************
 Name:               BQ - 
 URL:                https://
 Create Date:        2020-09-23
 Author:             Brian Martin
 Description:        This...
 /***************************************************************************************************/
#standardSQL
SELECT
    -- date (dimension)
    date,
    -- year (dimension)
    FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", date)) AS year,
    -- month (dimension)
    FORMAT_DATE('%m', PARSE_DATE("%Y%m%d", date)) AS month,
    -- month_name (dimension)
    FORMAT_DATE('%B', PARSE_DATE("%Y%m%d", date)) AS month_name,
    -- day (dimension)
    FORMAT_DATE('%d', PARSE_DATE("%Y%m%d", date)) AS day,
    COUNT(
        CASE
            WHEN search_count = 1 THEN 1
        END
    ) AS sessions_one_search,
    COUNT(
        CASE
            WHEN search_count > 1 THEN 1
        END
    ) AS sessions_more_than_one_search
FROM
    (
        SELECT
            date,
            CONCAT(
                CAST(fullVisitorId AS STRING),
                CAST(visitStartTime AS STRING)
            ) AS session_id,
            COUNT(1) AS search_count
        FROM
            `vsp-analytics-and-insights.176884211.ga_sessions_*` AS ga,
            UNNEST(ga.hits) AS hits
        WHERE
            -- _TABLE_SUFFIX = FORMAT_DATE(
            --     '%Y%m%d',
            --     DATE_SUB(CURRENT_DATE(), INTERVAL 2 DAY)
            -- ) 
            _TABLE_SUFFIX BETWEEN '20200909'
            AND '20200927'
            AND hits.type = 'EVENT'
            AND hits.eventInfo.eventLabel = 'fl-search'
        GROUP BY
            1,
            2
    )
GROUP BY
    1,
    2,
    3,
    4,
    5
ORDER BY
    date ASC