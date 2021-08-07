SELECT
    date,
    user,
    session,
    vce.product AS product_url,
    cu.product_name AS product,
    cu.product_description,
    vce.benefit_hub,
    hub_product,
    page_title,
    new_or_returning,
    previous_page,
    device_category,
    browser,
    medium,
    source_medium,
    hit_number,
    hit_time_sec,
    hit_type,
    time_on_page,
    time_to_event,
    event_action,
    event_label,
    engagement_type,
    link_label,
    search_keyword
FROM
    `vsp-analytics-and-insights.vsp_sites.vw_content_engagement_last_week` vce
    INNER JOIN `vsp-analytics-and-insights.vsp_sites.content_urls` AS cu ON REGEXP_CONTAINS(vce.site_url, cu.content_url);