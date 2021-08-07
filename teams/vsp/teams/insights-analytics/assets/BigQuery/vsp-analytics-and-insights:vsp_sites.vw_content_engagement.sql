/***************************************************************
Name:         vsp_sites.vw_content_engagement
Created:      2021-04-12
Created By:   Jason Cavnar
Description:  Standardized query for all content engagement for data
              from all time

****************************************************************/

SELECT DISTINCT PARSE_DATE("%Y%m%d", date) AS date,
  -- year (dimension)
  FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", date)) AS year,
  -- month (dimension)
  FORMAT_DATE('%m', PARSE_DATE("%Y%m%d", date)) AS month,
  -- month_name (dimension)
  FORMAT_DATE('%B', PARSE_DATE("%Y%m%d", date)) AS month_name,
  -- day (dimension)
  FORMAT_DATE('%d', PARSE_DATE("%Y%m%d", date)) AS day,
  user,
  session,
  site_url,
  SUBSTRING(site_url, 0, CASE WHEN REGEXP_CONTAINS(site_url,'[?]') THEN STRPOS(site_url,'?')-1 
                                          WHEN REGEXP_CONTAINS(site_url,'[#]') THEN STRPOS(site_url,'#')-1 ELSE LENGTH(site_url) END) as product,
  `vsp-analytics-and-insights.vsp_sites.find_benefit_hub`(site_url) as benefit_hub,
  `vsp-analytics-and-insights.vsp_sites.find_hub_product`(site_url) as hub_product,
  page_title,
  new_or_returning,
  bounces,
  entrance_page,
  exit_page,
  previous_page,
  device_category,
  browser,
  medium,
  source_medium,
  hit_number,
  hit_time as hit_time_sec,
  hit_type,
  time_on_page,
  hit_time - LAG(hit_time,1) OVER (PARTITION BY date, session 
    ORDER BY date, user, session, hit_number) as time_to_event,
  event_action,
  event_label,
  engagement_type,
  link_label,
  search_keyword
FROM (
  SELECT date,
    fullVisitorId as user,
    concat(fullVisitorId, visitStartTime) as session,
    hits.page.pagePath as site_url,
    hits.page.pageTitle as page_title,
    CASE WHEN totals.newVisits = 1 THEN 'New' ELSE 'Returning' END as new_or_returning,
    totals.bounces as bounces,
    hits.isEntrance as entrance_page,
    hits.isExit as exit_page,
    LAG(hits.page.pagePath,1) OVER (PARTITION BY date, concat(fullVisitorId, visitStartTime) 
                                    ORDER BY date, concat(fullVisitorId, visitStartTime), hits.hitNumber) as previous_page,
    device.deviceCategory as device_category,
    device.browser as browser,
    trafficSource.medium as medium,
    trafficSource.source as source,
    CONCAT(trafficSource.source, '/', trafficSource.medium) as source_medium,
    hits.hitNumber as hit_number,
    hits.time/1000 as hit_time,
    hits.type as hit_type,
    (LEAD(hits.time,1) OVER (PARTITION BY date, concat(fullVisitorId, visitStartTime) 
    ORDER BY date, fullvisitorid, concat(fullVisitorId, visitStartTime), hits.hitNumber) - hits.time)/1000 as time_on_page,
    hits.eventinfo.eventAction as event_action,
    hits.eventinfo.eventLabel as event_label,
    '' as engagement_type,
    '' as link_label,
    hits.page.searchKeyword as search_keyword
    FROM `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
  UNNEST(ga.hits) AS hits
  WHERE _table_suffix --= FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
                      between '20190618' AND FORMAT_DATE('%Y%m%d', DATE_TRUNC(CURRENT_DATE(), WEEK(SATURDAY)))
  and hits.type = 'PAGE'

  UNION ALL

  SELECT date,
    fullVisitorId as user,
    concat(fullVisitorId, visitStartTime) as session,
    hits.page.pagePath as site_url,
    hits.page.pageTitle as page_title,
    '' as new_or_returning,
    totals.bounces as bounces,
    CAST(NULL as BOOL) as entrance_page,
    CAST(NULL as BOOL) as exit_page,
    '' as previous_page,
    device.deviceCategory as device_category,
    device.browser as browser,
    trafficSource.medium as medium,
    trafficSource.source as source,
    CONCAT(trafficSource.source, '/', trafficSource.medium) as source_medium,
    hits.hitNumber as hit_number,
    hits.time/1000 as hit_time,
    hits.type as hit_type,
    NULL as time_on_page,
    hits.eventinfo.eventAction as event_action,
    hits.eventinfo.eventLabel as event_label,
    CASE WHEN REGEXP_CONTAINS(hits.eventinfo.eventLabel,'link') and NOT REGEXP_CONTAINS(hits.eventinfo.eventLabel,'^nav-jumplink-click') THEN 'Links'
      WHEN REGEXP_CONTAINS(hits.eventinfo.eventLabel,'^cta-(button|default|primary|secondary)-*') THEN 'Buttons'
      WHEN REGEXP_CONTAINS(hits.eventinfo.eventLabel,'^nav-jumplink-click') THEN 'Anchor Links'
      WHEN REGEXP_CONTAINS(hits.eventinfo.eventLabel,'^(nav|int)-accordion-(expand|collapse)') THEN 'Accordions'
       ELSE 'Other' END AS engagement_type,
    CASE WHEN hits.eventInfo.eventLabel = 'gtm.linkClick' THEN hits.eventInfo.eventAction
         WHEN REGEXP_CONTAINS(hits.eventinfo.eventLabel,'link') THEN TRIM(SPLIT(hits.eventInfo.eventAction,'-')[SAFE_OFFSET(2)])
         WHEN REGEXP_CONTAINS(hits.eventinfo.eventLabel,'^cta-(button|default|primary|secondary)-*') THEN TRIM(SPLIT(hits.eventInfo.eventAction,'-')[SAFE_OFFSET(1)]) 
         WHEN REGEXP_CONTAINS(hits.eventinfo.eventLabel,'^(nav|int)-accordion-(expand|)') THEN CONCAT(TRIM(SPLIT(hits.eventInfo.eventAction,'-')[SAFE_OFFSET(3)]),
                                                                                                              CASE WHEN TRIM(SPLIT(hits.eventInfo.eventAction,'-')[SAFE_OFFSET(4)]) IS NULL THEN '' ELSE ' - ' END,
                                                                                                              IFNULL(TRIM(SPLIT(hits.eventInfo.eventAction,'-')[SAFE_OFFSET(4)]),'')) END as link_label,
   hits.page.searchKeyword                                                                                                              
    FROM `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
  UNNEST(ga.hits) AS hits
  WHERE _table_suffix --= FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
                      between '20190618' AND FORMAT_DATE('%Y%m%d', DATE_TRUNC(CURRENT_DATE(), WEEK(SATURDAY)))
  AND hits.type = 'EVENT'
  AND REGEXP_CONTAINS(hits.eventInfo.eventLabel,'link|^nav-jumplink-click|^cta-(button|default|primary|secondary)-*|^(nav|int)-accordion-(expand|collapse)|% Viewed')
  AND hits.eventInfo.eventAction not in ('Login - vagovprod')
  )
