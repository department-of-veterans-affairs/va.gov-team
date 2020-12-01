/***************************************************************************************************
Name:               BQ - Funnel - BAM2 Medical Device conversion rate by device, browser
URL:                https://va-gov.domo.com/datasources/1fa1740b-1204-4aa5-a49f-c0c895ed2e5e/details/overview
Create Date:        2020-09-01
Author:             Brian Martin
Description:        This returns daily the conversion rate for the BAM2 / medical device form for users WITHOUT
                    both ineligibility events.          
 /***************************************************************************************************/
#standardSQL
WITH ga AS (
    SELECT
        -- date (dimension)
        PARSE_DATE("%Y%m%d", date) as date, 
        fullVisitorId,
        visitStartTime,
        ga.hits AS hits,
        device.browser AS browser,
        device.deviceCategory AS device_category
    FROM
        `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga
    WHERE
        --_TABLE_SUFFIX BETWEEN "20200715" AND "20200920"
        _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
        AND totals.visits = 1
        AND NOT (
            SELECT
                COUNT(1) > 0
            FROM
                ga.hits
            WHERE
                (
                    SELECT
                        value
                    FROM
                        UNNEST(hits.customDimensions)
                    WHERE
                        INDEX = 57
                ) = 'accessories_bam-ineligibility-no-prescription'
        )
        AND NOT (
            SELECT
                COUNT(1) > 0
            FROM
                ga.hits
            WHERE
                (
                    SELECT
                        value
                    FROM
                        UNNEST(hits.customDimensions)
                    WHERE
                        INDEX = 57
                ) = 'batteries_bam-ineligibility-no-prescription'
        )
),
Step_1 AS (
    SELECT
        date,
        fullVisitorId,
        visitStartTime,
        CONCAT(fullVisitorId, CAST(visitStartTime AS STRING)) AS session_id,
        browser,
        device_category,
        COUNT(*) AS step_1_count
    FROM
        ga
    WHERE
        (
            SELECT
                COUNT(1) > 0
            FROM
                UNNEST(ga.hits) AS hits
            WHERE
                hits.eventInfo.eventLabel = 'login-successful-start-form'
                AND REGEXP_CONTAINS(
                    hits.page.pagePath,
                    r'^www.va.gov/health-care/order-hearing-aid-batteries-and-accessories.*$'
                )
        )
    GROUP BY
        1,
        2,
        3,
        4,
        5,
        6
),
Step_2 AS (
    SELECT
        date,
        fullVisitorId,
        visitStartTime,
        CONCAT(fullVisitorId, CAST(visitStartTime AS STRING)) AS session_id,
        browser,
        device_category,
        COUNT(*) AS step_2_count
    FROM
        ga
    WHERE
        (
            SELECT
                COUNT(1) > 0
            FROM
                UNNEST(ga.hits) AS hits
            WHERE
                hits.eventInfo.eventLabel = 'bam-2346a--submission-successful'
        )
    GROUP BY
        1,
        2,
        3,
        4,
        5,
        6
),
Steps_Combined AS (
    SELECT
        Step_1.date,
        Step_1.browser,
        Step_1.device_category,
        COUNT(DISTINCT(Step_1.fullVisitorId)) AS bam2_starts,
        COUNT(DISTINCT(Step_2.fullVisitorId)) AS bam2_finishes
    FROM
        Step_1
        LEFT JOIN Step_2 ON Step_1.fullVisitorId = Step_2.fullVisitorID
    GROUP BY
        1,
        2,
        3
)
SELECT
    date,
    browser,
    device_category,
    1 AS step,
    bam2_starts AS users
FROM
    Steps_Combined

UNION ALL

SELECT
    date,
    browser,
    device_category,
    2 AS step,
    bam2_finishes AS users
FROM
    Steps_Combined
ORDER BY
    date ASC,
    Step ASC