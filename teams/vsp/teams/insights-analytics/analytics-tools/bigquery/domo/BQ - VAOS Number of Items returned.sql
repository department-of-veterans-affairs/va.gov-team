/***************************************************************************************************
 Name:               BQ - VAOS Number of items returned
 URL:                https://va-gov.domo.com/datasources/
 Create Date:        2020-08-27
 Author:             Brian Martin
 Description:        This...
 /***************************************************************************************************/
#standardSQL
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
    AVG(upcoming_count) AS avg_upcoming_count,
    AVG(available_facilities_count) AS avg_available_facilities_count,
    AVG(video_home_count) AS avg_video_home_count,
    AVG(express_care_count) AS avg_express_care_count,
    AVG(video_store_forward_count) AS avg_video_store_forward_count
FROM (
    SELECT
      date,
      session_id,
      SUM(CASE WHEN vaos_item_type = 'upcoming' THEN CAST(vaos_item_count AS INT64) ELSE 0 END) AS upcoming_count,
      SUM(CASE WHEN vaos_item_type = 'available_facilities' THEN CAST(vaos_item_count AS INT64) ELSE 0 END) AS available_facilities_count,
      SUM(CASE WHEN vaos_item_type = 'video_home' THEN CAST(vaos_item_count AS INT64) ELSE 0 END) AS video_home_count,
      SUM(CASE WHEN vaos_item_type = 'express_care' THEN CAST(vaos_item_count AS INT64) ELSE 0 END) AS express_care_count,
      SUM(CASE WHEN vaos_item_type = 'video_store_forward' THEN CAST(vaos_item_count AS INT64) ELSE 0 END) AS video_store_forward_count
    FROM
        (
            SELECT
                -- date (dimension)
                PARSE_DATE("%Y%m%d", date) AS date,
                -- session_id       
                CONCAT(
                    CAST(fullVisitorId AS STRING),
                    CAST(visitStartTime AS STRING)
                ) AS session_id,
                -- vaos_item_type
                (
                    SELECT
                        hcd.value
                    FROM
                        UNNEST(hits.customdimensions) AS hcd
                    WHERE
                        hcd.index = 111
                ) AS vaos_item_type,  
                -- vaos_item_count
                (
                    SELECT
                        hcd.value
                    FROM
                        UNNEST(hits.customdimensions) AS hcd
                    WHERE
                        hcd.index = 112
                ) AS vaos_item_count
            FROM
                `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
                UNNEST(ga.hits) AS hits
            WHERE
                _TABLE_SUFFIX = FORMAT_DATE(
                    '%Y%m%d',
                    DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
                )
                AND hits.type = 'EVENT'
                AND REGEXP_CONTAINS(hits.eventInfo.eventLabel, '^vaos-(TODOTODO|number-of-items-retrieved)$')
                AND REGEXP_CONTAINS(hits.page.pagePath, '^www.va.gov')
            GROUP BY
                1,
                2,
                3,
                4
        )
    GROUP BY
      1, 2
)
GROUP BY
  1,2,3,4,5