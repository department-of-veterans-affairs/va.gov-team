SELECT
    DISTINCT PARSE_DATE(
        "%Y-%m-%d",
        (
            LEFT(
                REPLACE(CAST(stars.Response_Date AS STRING), '00', '20'),
                10
            )
        )
    ) AS date,
    stars.Respondent_id,
    stars.url,
    LOWER(stars.device_type) AS device_category,
    SPLIT(stars.browser, '|') [SAFE_OFFSET(0)] AS browser,
    vs.search_scope,
    stars.rating
FROM
    `vsp-analytics-and-insights.vsp_foresee.va_gov_stars_only_*` AS stars
    JOIN `vsp-analytics-and-insights.vsp_sites.vw_search` AS vs ON vs.date = PARSE_DATE(
        "%Y-%m-%d",
(
            LEFT(
                REPLACE(CAST(stars.Response_Date AS STRING), '00', '20'),
                10
            )
        )
    )
    AND concat('https://', vs.page_path) LIKE concat(stars.url, '?');