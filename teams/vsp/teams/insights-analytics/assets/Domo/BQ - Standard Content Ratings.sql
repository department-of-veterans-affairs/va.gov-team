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
    cu.product_name,
    cu.content_url AS product_url,
    stars.rating
FROM
    `vsp-analytics-and-insights.vsp_foresee.va_gov_stars_only_*` AS stars
    JOIN `vsp-analytics-and-insights.vsp_sites.content_urls` AS cu ON REGEXP_CONTAINS(stars.url, cu.content_url)
ORDER BY
    date;