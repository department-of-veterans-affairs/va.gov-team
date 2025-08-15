/***************************************************************************************************
 Name:               BQ - Facility Locator - Search Timings by Facility Type
 URL:                https://va-gov.domo.com/datasources/95006524-a2d1-4681-9bf8-08503c8121ab/details/overview
 Create Date:        2020-09-24
 Author:             Brian Martin
 Description:        This...
 /***************************************************************************************************/
#standardSQL
WITH ga AS (
    SELECT
        -- date (dimension)
        PARSE_DATE("%Y%m%d", date) AS date,
        CONCAT(
            CAST(fullVisitorId AS STRING),
            CAST(visitStartTime AS STRING)
        ) AS session_id,
        hits.eventInfo.eventLabel AS event_label,
        -- facility_type
        (
            SELECT
                hcd.value
            FROM
                hits.customdimensions AS hcd
            WHERE
                hcd.index = 110
        ) AS facility_type,        
        hits.time AS hit_time
    FROM
        `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
        UNNEST(ga.hits) AS hits
    WHERE
        --_TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
        _TABLE_SUFFIX BETWEEN '20200920'
        AND FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
        AND hits.type = 'EVENT'
        AND REGEXP_CONTAINS(hits.eventInfo.eventLabel, '^fl-search.*')
    GROUP BY
        1,
        2,
        3,
        4,
        5
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
    -- average hit time
    AVG((next_hit_time - hit_time) / 1000) avg_time_diff_in_sec
FROM
    (
        SELECT
            date,
            hit_time,
            facility_type,
            next_hit_time
        FROM
            (
                SELECT
                    date,
                    event_label,
                    hit_time,
                    facility_type,
                    LEAD(event_label, 1) OVER(
                        PARTITION BY session_id
                        ORDER BY
                            hit_time ASC
                    ) AS next_event_label,
                    LEAD(hit_time, 1) OVER(
                        PARTITION BY session_id
                        ORDER BY
                            hit_time ASC
                    ) AS next_hit_time
                FROM
                    ga
            )
        WHERE
            event_label = 'fl-search'
            AND next_event_label = 'fl-search-results'
    )
GROUP BY
    1, 6
ORDER BY
  date ASC    