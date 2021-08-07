SELECT DISTINCT PARSE_DATE("%Y%m%d",a.date) AS date,
      a.user,
      a.sessionId as session_id,
      device_category,
      browser,
      TRIM(search_results_arr[SAFE_OFFSET(1)]) AS type_ahead_setting,
      hitNumber as hit_number,
      hitTime as hit_time,
      page_path,
      previous_page,
      event_category,
      event_label,
      event_action,
      search_results_type,
      TRIM(search_results_arr[SAFE_OFFSET(0)]) AS results_returned,
      TRIM(search_results_arr[SAFE_OFFSET(2)]) AS search_scope, 
      CASE WHEN event_label = 'view_search_results' THEN TRIM(search_results_arr[SAFE_OFFSET(3)])
          WHEN event_label = 'onsite-search-results-click' THEN TRIM(search_results_arr[SAFE_OFFSET(5)]) END AS search_query,
      CASE WHEN event_label = 'onsite-search-results-click' THEN TRIM(search_results_arr[SAFE_OFFSET(3)]) ELSE NULL END AS search_result_chosen_title,
      search_results_position,
      type_ahead_option_chosen,
      type_ahead_option_list,
      CASE WHEN type_ahead_option_chosen = '(not set)' THEN '(not set)' ELSE cast(type_ahead_position as string) END as type_ahead_position_cm,
      search_result_page,
      type_ahead_position,
       -- Time_between_results_and_click_sec measure: looks at hit time for search result return and hit time of search results chosen based on position of records
      CASE WHEN TRIM(search_results_arr[SAFE_OFFSET(0)]) = 'Search Results Returned'
            AND event_label = 'view_search_results'
            AND LEAD(TRIM(search_results_arr[SAFE_OFFSET(0)]),1) OVER (PARTITION BY date, sessionid ORDER BY hitNumber) = 'Search Result Chosen' 
        THEN (LEAD(hitTime,1) OVER (PARTITION BY date, sessionid ORDER BY hitNumber) - hitTime)/1000
      ELSE NULL 
      END as Time_between_results_and_click_sec,
      CASE WHEN TRIM(search_results_arr[SAFE_OFFSET(1)]) = 'Type Ahead Enabled' 
            AND type_ahead_position in ('1','2','3','4','5')
            AND LEAD(search_results_position,1) OVER (PARTITION BY date, sessionid ORDER BY hitNumber) IS NOT NULL
        THEN 1 
     ELSE 0 
     END AS type_ahead_conversion,
     -- Search Conversion: Looking for search regardless of type ahead where user clicked
     CASE WHEN LEAD(search_results_position,1) OVER (PARTITION BY date, sessionid ORDER BY hitNumber) IS NOT NULL 
           THEN 1 
     ELSE 0 
     END AS search_conversion,
     CASE WHEN (CASE WHEN event_label = 'view_search_results' THEN TRIM(search_results_arr[SAFE_OFFSET(3)]) END) != LEAD(CASE WHEN event_label = 'view_search_results' THEN TRIM(search_results_arr[SAFE_OFFSET(3)]) END,1) OVER (PARTITION BY sessionid ORDER BY hitNumber ASC) THEN 1 ELSE 0 END as refinement
  FROM (
          SELECT
              ga.date,
              ga.fullVisitorId as user,
              CONCAT(ga.fullVisitorId, visitStartTime) as sessionId,
              device.deviceCategory as device_category,
              device.browser as browser,
              hits.hitNumber,
              hits.time as hitTime,
              hits.page.pagePath as page_path,
              LAG(hits.page.pagePath,1) OVER (PARTITION BY date, fullVisitorId, visitStartTime ORDER by hitNumber) as previous_page,
              hits.eventInfo.eventCategory as event_category,
              hits.eventInfo.eventAction as event_action,
              hits.eventinfo.eventLabel as event_label,
              SPLIT(hits.eventInfo.eventAction,'~') AS search_results_arr,
              MAX(IF(hcd.index = 114, hcd.value, NULL)) AS type_ahead_option_chosen,
              MAX(IF(hcd.index = 115, hcd.value, NULL)) AS type_ahead_option_list,
              MAX(IF(hcd.index = 117, hcd.value, NULL)) AS type_ahead_position,
              MAX(IF(hcm.index = 40, hcm.value, NULL)) AS search_results_position,
              MAX(IF(hcm.index = 41, hcm.value, NULL)) AS search_total_results_returned,
              MAX(IF(hcm.index = 42, hcm.value, NULL)) AS search_result_pages_returned,
              MAX(IF(hcm.index = 43, hcm.value, NULL)) AS search_result_page,
              MAX(IF(hcm.index = 44, hcm.value, NULL)) AS search_result_top_rec_clicks,
              MAX(IF(hcd.index = 120, hcd.value, NULL)) AS search_results_type
           FROM `vsp-analytics-and-insights.176188361.ga_sessions_*` as ga
            LEFT JOIN UNNEST(hits) AS hits
            LEFT JOIN UNNEST(hits.customDimensions) AS hcd
            LEFT JOIN UNNEST(hits.customMetrics) AS hcm
          WHERE 
           _TABLE_SUFFIX --= FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
                         BETWEEN '20210101' AND FORMAT_DATE('%Y%m%d', DATE_TRUNC(CURRENT_DATE(), WEEK(SATURDAY)))
           AND hits.eventInfo.eventLabel in ('view_search_results', 'onsite-search-results-click')
          GROUP BY date,
          fullVisitorId,
          visitStartTime,
          device_category,
          browser,
          hitNumber,
          hitTime, 
          page_Path,
          event_category,
          event_action,
          event_label) a
