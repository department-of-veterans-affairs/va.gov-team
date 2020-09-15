/***************************************************************************************************
Name:               BQ - Caregivers 10-10cg AVG time to complete
URL:                https://...
Create Date:        2020-09-14
Author:             Brian Martin
Description:        This returns daily...
/***************************************************************************************************/
WITH sessions AS (
    SELECT
        date,
        CONCAT(fullVisitorId, CAST(visitStartTime AS STRING)) AS sessionID,
        hits.eventInfo.eventLabel AS event_label,
        (
            CASE
                WHEN hits.eventInfo.eventLabel = 'caregivers-10-10cg-start-form' THEN MIN(hits.time)
                WHEN hits.eventInfo.eventLabel = 'caregivers-10-10cg--submission-successful' THEN MAX(hits.time)
            END
        ) AS hit_time
    FROM
        `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
        UNNEST(ga.hits) AS hits
    WHERE
        _TABLE_SUFFIX BETWEEN "20200901" AND "20200913"
        AND hits.eventInfo.eventLabel IN (
            'caregivers-10-10cg-start-form',
            'caregivers-10-10cg--submission-successful'
        )
    GROUP BY
        1,
        2,
        3
)
SELECT
    date,
    AVG(time_diff) / 1000 avg_time_diff
FROM
    (
        SELECT
            date,
            CASE
                WHEN event_label = 'caregivers-10-10cg-start-form'
                AND LEAD(event_label, 1) OVER(
                    PARTITION BY sessionID
                    ORDER BY
                        hit_time ASC
                ) = 'caregivers-10-10cg--submission-successful' THEN (
                    -- DIFF event timestamps
                    LEAD(hit_time, 1) OVER(
                        PARTITION BY sessionID
                        ORDER BY
                            hit_time ASC
                    ) - hit_time
                )
            END time_diff
        FROM
            sessions
    )
GROUP BY
  1
ORDER BY 
  date ASC