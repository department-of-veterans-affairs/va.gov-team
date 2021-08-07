SELECT
    date,
    user,
    session_id,
    device_category,
    browser,
    type_ahead_setting,
    hit_number,
    hit_time,
    page_path,
    previous_page,
    event_label,
    event_action,
    search_results_type,
    results_returned,
    CASE
        WHEN search_scope = 'All VA.gov' THEN 'VA.gov Onsite Search'
        WHEN search_scope = 'Find forms' THEN 'Find VA Forms'
        WHEN search_scope = 'Resources and support' THEN 'Resources & Support'
        ELSE search_scope
    END AS search_scope,
    search_query,
    search_result_chosen_title,
    search_results_position,
    type_ahead_option_chosen,
    type_ahead_option_list,
    type_ahead_position_cm,
    search_result_page,
    type_ahead_position,
    time_between_results_and_click_sec,
    type_ahead_conversion,
    search_conversion,
    refinement
FROM
    `vsp-analytics-and-insights.vsp_sites.vw_search_last_week`
WHERE
    search_scope <> ''