/***************************************************************************************************
 Name:               BQ - Facility Locator - Search Refinements by Facility Type
 URL:                https://va-gov.domo.com/datasources/ff7cfb55-4f83-4cd5-9957-2e46a42d8cff/details/overview
 Create Date:        2020-10-05
 Author:             Brian Martin
 Description:        This returns daily total searches and search refinements for Facility Locator searcges.
 /***************************************************************************************************/
#standardSQL
WITH ga AS (
    SELECT
        -- date (dimension)
        PARSE_DATE("%Y%m%d", date) AS date,
        -- session_id (dimension)
        CONCAT(
            CAST(fullVisitorId AS STRING),
            CAST(visitStartTime AS STRING)
        ) AS session_id,
        -- hitNumber (dimension)
        hits.hitNumber AS hitNumber,
        -- facility_type
        (
            SELECT
                hcd.value
            FROM
                hits.customdimensions AS hcd
            WHERE
                hcd.index = 110
        ) AS facility_type
    FROM
        `vsp-analytics-and-insights.176884211.ga_sessions_*` AS ga,
        UNNEST(ga.hits) AS hits
    WHERE
        _TABLE_SUFFIX BETWEEN '20200901'
        AND FORMAT_DATE(
            '%Y%m%d',
            DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
        )
        AND hits.type = 'EVENT'
        AND hits.eventInfo.eventLabel = 'fl-search-results'
        AND totals.visits = 1
    ORDER BY
        date ASC,
        session_id ASC,
        hitNumber ASC
)
SELECT
    date,
    -- year (dimension)
    FORMAT_DATE('%Y', date) AS year,
    -- month (dimension)
    FORMAT_DATE('%m', date) AS month,
    -- month_name (dimension)
    FORMAT_DATE('%B', date) AS month_name,
    -- day (dimension)
    FORMAT_DATE('%d', date) AS day,
    facility_type,
    -- total_searches (metric)
    COUNT(1) AS total_searches,
    -- refined_searches (metric)
    SUM(
        CASE
            WHEN next_hitNumber IS NOT NULL THEN 1
            ELSE 0
        END
    ) AS refined_searches
FROM
    (
        SELECT
            date,
            facility_type,
            session_id,
            hitNumber,
            LEAD(hitNumber, 1) OVER(
                PARTITION BY session_id
                ORDER BY
                    hitNumber ASC
            ) AS next_hitNumber
        FROM
            ga
    )
GROUP BY
    1, 6
ORDER BY
  date ASC    