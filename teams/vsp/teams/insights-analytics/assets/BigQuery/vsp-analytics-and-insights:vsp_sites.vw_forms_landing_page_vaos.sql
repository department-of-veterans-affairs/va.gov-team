WITH page_detail AS (
SELECT DISTINCT date,
  fullVisitorId as user,
  concat(fullVisitorId, visitStartTime) as session,
  hits.page.pagePath as page_path,
  hits.hitNumber as hit_number,
  (LEAD(hits.time,1) OVER (PARTITION BY date, fullvisitorid, concat(fullVisitorId, visitStartTime) 
  ORDER BY date, fullvisitorid, concat(fullVisitorId, visitStartTime), hits.hitNumber) - hits.time)/1000 as time_on_page
  FROM `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
UNNEST(ga.hits) AS hits
WHERE _table_suffix between '20190618' AND FORMAT_DATE('%Y%m%d', DATE_TRUNC(CURRENT_DATE(), WEEK(SATURDAY)))
                    --= '20210504'
and hits.type = 'PAGE'
ORDER BY date, user, session, hitNumber
)

SELECT DISTINCT PARSE_DATE("%Y%m%d", ga.date) AS date,
  -- year (dimension)
  FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", ga.date)) AS year,
  -- month (dimension)
  FORMAT_DATE('%m', PARSE_DATE("%Y%m%d", ga.date)) AS month,
  -- month_name (dimension)
  FORMAT_DATE('%B', PARSE_DATE("%Y%m%d", ga.date)) AS month_name,
  -- day (dimension)
  FORMAT_DATE('%d', PARSE_DATE("%Y%m%d", ga.date)) AS day,
  `vsp-analytics-and-insights.vsp_sites.find_benefit_hub`(hits.page.pagePath) as benefit_hub,
  `vsp-analytics-and-insights.vsp_sites.find_hub_product`(hits.page.pagePath) as hub_product,
  fv.form_name,
  fv.landing_page,
  hits.page.pagepath as page_path,
  device.deviceCategory as device_category,
  device.browser as device_browser,
  trafficSource.medium as medium,
  trafficSource.source as source,
  CONCAT(trafficSource.source, '/', trafficSource.medium) as source_medium,
  trafficSource.campaign as campaign_name,
  fullVisitorId as user,
  concat(fullVisitorId, visitStartTime) as session,
  CASE WHEN (SELECT hcd.value FROM ga.customdimensions as hcd WHERE hcd.index = 22) = '3' THEN true ELSE false END AS loa,
  totals.bounces as bounces,
  hits.type as hit_type,
  hits.eventInfo.eventlabel as event_label,
  hits.eventinfo.eventAction as event_action,
  hits.hitNumber as hit_number,
  top.time_on_page,
  hits.isEntrance as entrance_page,
  hits.isExit as exit_page,
  totals.newVisits as new_user
  FROM `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
    UNNEST(ga.hits) AS hits
LEFT JOIN page_detail top ON top.date = ga.date
                         AND top.user = ga.fullVisitorId
                         AND top.session = concat(ga.fullVisitorId, ga.visitStartTime)
                         AND top.page_path = hits.page.PagePath
                         AND top.hit_number = hits.hitNumber
INNER JOIN (SELECT DISTINCT form_name, landing_page FROM `vsp-analytics-and-insights.vsp_sites.forms_vaos` WHERE active = true) AS fv 
    ON (hits.page.pagePath LIKE CONCAT('%', fv.landing_page, '%') OR hits.eventInfo.eventLabel = fv.landing_page)                        
WHERE _table_suffix between '20190618' AND FORMAT_DATE('%Y%m%d', DATE_TRUNC(CURRENT_DATE(), WEEK(SATURDAY)))
                    --= '20210504'
