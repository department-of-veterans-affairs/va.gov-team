/***************************************************************
Name:         vsp_sites.vw_forms_funnels_vaos_yesterday
Created:      2021-08-02
Created By:   Jason Cavnar
Description:  Standardized query for all form funnels for data
              from previous day

****************************************************************/

WITH users AS (
  SELECT
          date AS date,
          fullVisitorId AS user,
          concat(fullVisitorId, visitStartTime) as session,
          a.pagePath,
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
          loa,
          (MIN(next_hit_time) - MIN(hitTime)) as time_on_step,
      FROM
          (
              SELECT
                  PARSE_DATE("%Y%m%d",ga.date) AS date,
                  ga.fullVisitorId,
                  ga.visitstarttime,
                  ga.device.browser as browser,
                  fv.form_name,
                  fv.hub_product,
                  fv.form_type,
                  fv.form_description,
                  fv.step_number,
                  fv.step_link,
                  fv.step_name,
                  hits.page.pagePath AS pagePath,
                  hits.eventInfo.eventLabel as eventLabel,
                  totals.bounces as bounce,
                  CASE WHEN (SELECT hcd.value FROM ga.customdimensions as hcd WHERE hcd.index = 22) = '3' THEN 'true' ELSE 'false' END as loa,
                  CASE WHEN fv.step_type = 'page' and hits.type = 'PAGE' THEN hits.time/1000
                          WHEN fv.step_type = 'event' and hits.type = 'EVENT' THEN hits.time/1000
                          ELSE NULL END as hitTime,
                      LEAD(CASE WHEN fv.step_type = 'page' and hits.type = 'PAGE' THEN hits.time
                          WHEN fv.step_type = 'event' and hits.type = 'EVENT' THEN hits.time
                          ELSE NULL END, 1) OVER(PARTITION BY ga.fullVisitorId, visitNumber ORDER BY hitNumber ASC )/1000 AS next_hit_time,
              FROM
                  `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
                  UNNEST(ga.hits) AS hits
             INNER JOIN `vsp-analytics-and-insights.vsp_sites.forms_vaos` AS fv ON (hits.page.pagePath LIKE CONCAT('%',fv.step_link,'%') 
                 OR hits.eventInfo.eventLabel = fv.step_link) AND fv.active = true 
              WHERE
                _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))  
          ) a
      GROUP BY 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
  )
  SELECT
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
      users.hub_product,
      users.browser,
      users.form_name,
      users.form_type,
      users.form_description,
      users.step_number,
      users.step_link,
      users.step_name,
      users.loa,
      users.user,
      users.session,
      users.bounce,
      users.time_on_step, 
  FROM users
  ORDER BY
      date ASC,
      form_name ASC,
      session ASC,
      Step_Number ASC;
