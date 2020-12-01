#standardSQL
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
    -- page path (dimension)
    h.page.pagePath page_path,
    -- language (dimension)
    device.language AS lang_code,
    -- city (dimension)
    geoNetwork.city AS city,
    -- state (dimension)
    geoNetwork.region AS region,
    -- metro area (dimension)
    geoNetwork.metro AS metro,
    -- event category
    h.eventInfo.eventCategory AS event_category,
    -- event action
    h.eventInfo.eventAction AS event_action,
    -- event label
    h.eventInfo.eventLabel AS event_label,
    -- event action cleaned
    (
        CASE
            WHEN REGEXP_CONTAINS(TRIM(LOWER(h.eventInfo.eventAction)), '.*pass.*') THEN 'Pass'
            WHEN REGEXP_CONTAINS(TRIM(LOWER(h.eventInfo.eventAction)), '.*more.*') THEN 'More screening needed'
            ELSE h.eventInfo.eventAction
        END
    ) AS event_action_cleaned,
    -- total screening results (metric)
    count(1) AS total_screening_results,
    -- total screening time spent in seconds (metric)
    SUM(CMs.value) AS total_screening_time_spent_sec,
    -- average screening time spent (metric)
    SUM(CMs.value) / count(1) AS average_screening_time
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*`,
    UNNEST(hits) AS h,
    UNNEST(h.customMetrics) CMs
WHERE
    _TABLE_SUFFIX = FORMAT_DATE(
        '%Y%m%d',
        DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
    )
    --_TABLE_SUFFIX BETWEEN '20200923' AND '20200924'
    AND totals.visits = 1
    AND CMs.index = 26
    AND h.eventInfo.eventLabel = 'covid-screening-tool-result-displayed'
    AND h.type = 'EVENT'
GROUP BY
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
ORDER BY
    1 ASC