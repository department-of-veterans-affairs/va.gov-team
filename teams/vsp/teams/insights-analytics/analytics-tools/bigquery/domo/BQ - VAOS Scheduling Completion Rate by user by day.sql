/***************************************************************************************************
 Name:               BQ - VAOS Scheduling Completion Rate by user by day 
 URL:                https://va-gov.domo.com/datasources/df0acc2b-b035-4829-ab04-8f42ddc4721b/details/overview
 Create Date:        2020-10-09
 Author:             Brian Martin
 Description:        This returns a daily conversion rate (session and user) for a funnel that starts with
                    'vaos-schedule-appointment-button-clicked' and ends with 'vaos-.*-submission-successful$'
 /***************************************************************************************************/
#standardSQL
BEGIN

    CALL `vsp-analytics-and-insights.stored_procedures.hasGoogleAnalyticsDataLoaded`();

    WITH ga AS (
        SELECT
            -- date (dimension)
            PARSE_DATE("%Y%m%d", date) AS date,
            fullVisitorId,
            hits.eventInfo.eventLabel AS event_label,
            hits.hitNumber AS hitNumber
        FROM
            `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
            UNNEST(ga.hits) AS hits
        WHERE
            --_TABLE_SUFFIX BETWEEN "20200715" AND "20200920"
            _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
            AND REGEXP_CONTAINS(
                hits.eventInfo.eventLabel,
                '^vaos-(schedule-appointment-button-clicked|.*-submission-successful)$'
            )
    )
    SELECT
        date,
        -- year (dimension)
        FORMAT_DATE('%Y', date) AS year,
        -- month (dimension)
        FORMAT_DATE('%m', date) AS month,
        -- month_name (dimension)
        FORMAT_DATE('%B', date) AS month_name,
        -- day (dimension)
        FORMAT_DATE('%d', date) AS day,
        SAFE_DIVIDE(Step_2_Users, Step_1_Users) AS users_rate
    FROM
        (
            SELECT
                a.date AS date,    
                COUNT(DISTINCT(a.fullVisitorId)) AS Step_1_Users,
                COUNT(DISTINCT(b.fullVisitorId)) AS Step_2_Users
            FROM
                (
                    SELECT
                        date,
                        fullVisitorId,
                        hitNumber
                    FROM
                        ga
                    WHERE
                        event_label = 'vaos-schedule-appointment-button-clicked'
                ) a
                LEFT JOIN (
                    SELECT
                        date,
                        fullVisitorId,
                        hitNumber
                    FROM
                        ga
                    WHERE
                        REGEXP_CONTAINS(
                            event_label,
                            '^vaos-.*-submission-successful$'
                        )
                ) b ON a.fullVisitorId = b.fullVisitorId AND b.hitNumber > a.hitNumber
            GROUP BY
                1
        )
    ORDER BY
        date ASC;

EXCEPTION WHEN ERROR THEN
    RETURN;
END;        