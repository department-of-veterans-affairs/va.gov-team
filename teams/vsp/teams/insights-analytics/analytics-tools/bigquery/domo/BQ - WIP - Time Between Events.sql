WITH sessions AS (
    SELECT
        CONCAT(fullVisitorId, CAST(visitStartTime AS STRING)) AS sessionID,
        hits.eventInfo.eventLabel AS event_label,
        (
            CASE
                WHEN hits.eventInfo.eventLabel = 'start-event-label' THEN MIN(hits.time)
                WHEN hits.eventInfo.eventLabel = 'end-event-label' THEN MAX(hits.time)
            END
        ) AS hit_time
    FROM
        `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
        UNNEST(ga.hits) AS hits
    WHERE
        _TABLE_SUFFIX BETWEEN "XXXX" AND "XXXX"
        AND hits.eventInfo.eventLabel IN (
            'start-event-label',
            'end-event-label'
        )
    GROUP BY
        1,
        2
)
SELECT
    AVG(time_diff) / 1000 avg_time_diff
FROM
    (
        SELECT
            CASE
                WHEN event_label = 'start-event-label'
                AND LEAD(event_label, 1) OVER(
                    PARTITION BY sessionID
                    ORDER BY
                        hit_time ASC
                ) = 'end-event-label' THEN (
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