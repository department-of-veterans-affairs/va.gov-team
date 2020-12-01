/***************************************************************************************************
Name:               BQ - VAOS AVG time to complete - Control
URL:                https://va-gov.domo.com/
Create Date:        2020-
Author:             Brian Martin
Description:        This computes an average time (in seconds) between the beginning of the Caregivers
                    10-10cg form and a successful submission.  Change the MAX/MIN to select the earliest
                    or latest event.
/***************************************************************************************************/
WITH sessions AS (
    SELECT
        -- date (dimension)
        PARSE_DATE("%Y%m%d", date) as date,
        CONCAT(fullVisitorId, CAST(visitStartTime AS STRING)) AS sessionID,
        hits.eventInfo.eventLabel AS event_label,
        (
            CASE
                WHEN hits.eventInfo.eventLabel = 'vaos-schedule-appointment-button-clicked' THEN MIN(hits.time)
                WHEN hits.eventInfo.eventLabel = 'vaos-request-submission-successful' THEN MAX(hits.time)
            END
        ) AS hit_time
    FROM
        `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
        UNNEST(ga.hits) AS hits
    WHERE
        _TABLE_SUFFIX BETWEEN "20201001"  AND FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
        AND hits.eventInfo.eventLabel IN (
            'vaos-schedule-appointment-button-clicked',
            'vaos-request-submission-successful'
        )
        AND (
            SELECT
                COUNT(1) > 0
            FROM
                UNNEST(ga.hits) AS hits
            WHERE
                hits.eventInfo.eventAction = 'VAOS - Facility Selection v2'
        ) IS FALSE 
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
                WHEN event_label = 'vaos-schedule-appointment-button-clicked'
                AND LEAD(event_label, 1) OVER(
                    PARTITION BY sessionID
                    ORDER BY
                        hit_time ASC
                ) = 'vaos-request-submission-successful' THEN (
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