/***************************************************************
Name:         vsp_sites.vw_forms_funnels_last_week
Created:      2021-04-12
Created By:   Jason Cavnar
Description:  Standardized query for all form funnels for data
              from previous week

****************************************************************/

WITH users AS (
  SELECT DISTINCT
          date AS date,
          fullVisitorId AS user,
          concat(fullVisitorId, visitStartTime) as session,
          CASE WHEN a.loa = '3' THEN 'true' ELSE 'false' END as loa,
          a.pagePath,
          a.device_category,
          a.browser,
          form_name,
          `vsp-analytics-and-insights.vsp_sites.find_benefit_hub`(a.pagePath) as benefit_hub,
          hub_product,
          form_type,
          form_description,
          step_number,
          step_link,
          step_name,
          bounce,
          hit_time,
          next_hit_time
      FROM
          (
              SELECT DISTINCT
                  PARSE_DATE("%Y%m%d",ga.date) AS date,
                  ga.fullVisitorId,
                  ga.visitstarttime,
                  (SELECT hcd.value FROM ga.customdimensions as hcd WHERE hcd.index = 22) as loa,
                  ga.device.deviceCategory as device_category,
                  ga.device.browser as browser,
                  f.form_name,
                  f.hub_product,
                  f.form_type,
                  f.form_description,
                  f.step_number,
                  f.step_link,
                  f.step_name,
                  hits.page.pagePath AS pagePath,
                  hits.eventInfo.eventLabel as eventLabel,
                  totals.bounces as bounce,
                  CASE WHEN f.step_type = 'page' and hits.type = 'PAGE' THEN hits.time/1000
                          WHEN f.step_type = 'event' and hits.type = 'EVENT' THEN hits.time/1000
                          ELSE NULL END as hit_time,
                  LEAD(CASE WHEN f.step_type = 'page' and hits.type = 'PAGE' THEN hits.time
                      WHEN f.step_type = 'event' and hits.type = 'EVENT' THEN hits.time
                      ELSE NULL END, 1) OVER(PARTITION BY f.form_name, ga.fullVisitorId, visitStartTime ORDER BY hitNumber ASC )/1000 AS next_hit_time
              FROM
                  `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
                  UNNEST(ga.hits) AS hits
              INNER JOIN `vsp-analytics-and-insights.vsp_sites.forms` AS f ON hits.page.pagePath LIKE CONCAT('%',f.step_link,'%') and f.active = true
              WHERE
                _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_TRUNC(DATE_SUB(CURRENT_DATE(), INTERVAL 6 DAY), WEEK(SUNDAY))) 
                        AND FORMAT_DATE('%Y%m%d', DATE_TRUNC(CURRENT_DATE(), WEEK(SATURDAY)))  
          ) a
  )
  SELECT DISTINCT
      users.date,      
      -- year (dimension)
      FORMAT_DATE('%Y', users.date) AS year,
      -- month (dimension)
      FORMAT_DATE('%m', users.date) AS month,
      -- month_name (dimension)
      FORMAT_DATE('%B', users.date) AS month_name,
      -- day (dimension)
      FORMAT_DATE('%d', users.date) AS day,
      users.benefit_hub,
      forms.hub_product,
      users.device_category,
      users.browser,
      forms.form_name,
      forms.form_type,
      forms.form_description,
      forms.step_number,
      forms.step_link,
      forms.step_name,
      users.loa,
      users.user,
      users.session,
      users.bounce,
      users.hit_time, 
      users.next_hit_time
  FROM `vsp-analytics-and-insights.vsp_sites.forms` AS forms 
  CROSS JOIN users
  WHERE users.form_name = forms.form_name
    AND users.step_number >= forms.step_number;