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
    forms.form_name,
    stars.rating
FROM
    `vsp-analytics-and-insights.vsp_foresee.va_gov_stars_only_*` AS stars
    JOIN `vsp-analytics-and-insights.vsp_sites.forms` AS forms ON CONCAT('https://', forms.landing_page) = stars.url
ORDER BY
    date;