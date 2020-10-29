/***************************************************************************************************
Name:               BQ - VAOS Scheduling Frequency
URL:                https://va-gov.domo.com/datasources/bd0a5bf7-c10d-4e0c-b62a-3ac34a530f16/details/overview
Create Date:        2020-09-14
Author:             Brian Martin
Description:        This returns daily sessions counts by visit number for sessions with a 
                    'vaos-schedule-appointment-button-clicked' event.
/***************************************************************************************************/

SELECT
    -- date (dimension)
    PARSE_DATE("%Y%m%d", date) as date, 
    visitNumber,
    COUNT(DISTINCT(CONCAT(fullVisitorId, CAST(visitStartTime AS STRING)))) as sessions    
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga
WHERE
    --_TABLE_SUFFIX BETWEEN "20200311" AND "20200920"
    _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
    AND (
        SELECT
            COUNT(1) > 0
        FROM
            ga.hits
        WHERE
            eventInfo.eventLabel = 'vaos-schedule-appointment-button-clicked'
    )
GROUP BY
  1, 2
ORDER BY
  1 ASC,
  2 ASC