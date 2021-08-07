(
    WITH last_step AS (
        SELECT
            form_name,
            MAX(step_number) AS last_step
        FROM
            `vsp-analytics-and-insights.vsp_sites.forms`
        GROUP BY
            form_name
    )
    SELECT
        ff.user,
        ff.device_category,
        ff.browser,
        ff.form_name,
        min(date) AS date,
        count(DISTINCT sessions) AS sessions,
        CASE
            WHEN max(ff.step_number) = ls.last_step THEN 1
            ELSE 0
        END AS completed_form
    FROM
        `vsp-analytics-and-insights.vsp_sites.vw_forms_funnels_last_week` ff
        LEFT JOIN last_step ls ON ls.form_name = ff.form_name
    GROUP BY
        user,
        device_category,
        browser,
        form_name,
        last_step
)
UNION
ALL (
    WITH last_step AS (
        SELECT
            form_name,
            MAX(step_number) AS last_step
        FROM
            `vsp-analytics-and-insights.vsp_sites.forms_vaos`
        GROUP BY
            form_name
    )
    SELECT
        ff.user,
        ff.device_category,
        ff.browser,
        ff.form_name,
        min(date) AS date,
        count(DISTINCT sessions) AS sessions,
        CASE
            WHEN max(ff.step_number) = ls.last_step THEN 1
            ELSE 0
        END AS completed_form
    FROM
        `vsp-analytics-and-insights.vsp_sites.vw_forms_funnels_vaos_last_week` ff
        LEFT JOIN last_step ls ON ls.form_name = ff.form_name
    GROUP BY
        user,
        device_category,
        browser,
        form_name,
        last_step
)