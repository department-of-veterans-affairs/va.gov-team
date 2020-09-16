/***************************************************************************************************
Name:               BQ - VAOS Scheduling Frequency
URL:                https://...
Create Date:        2020-09-14
Author:             Brian Martin
Description:        This returns daily...
/***************************************************************************************************/

SELECT
    date,
    visitNumber,
    COUNT(DISTINCT(CONCAT(fullVisitorId, CAST(visitStartTime AS STRING)))) as sessions    
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga
WHERE
    _TABLE_SUFFIX BETWEEN "20200701" AND "20200705"
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