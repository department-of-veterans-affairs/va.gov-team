/***************************************************************************************************
Name:               BQ - All VEO-related events by month and year
URL:                https://va-gov.domo.com/datasources/8f9df1fe-3100-464a-b403-05d63c21a74a/details/overview
Create Date:        2020-08-14
Author:             Brian Martin
Description:        This returns monthly totals for total and unique events for a selection of event labels
                    related to the VEO dashboard.  This should be scheduled to run on the 1st of the month.
/***************************************************************************************************/
#standardSQL;
SELECT
    -- Year (dimension),
    FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", date)) AS year,
    -- Month Name (dimension),
    FORMAT_DATE('%B', PARSE_DATE("%Y%m%d", date)) AS month_name,
    -- Event Category (dimension)
    hits.eventInfo.eventCategory AS event_category,
    -- Event Action (dimension)
    hits.eventInfo.eventAction AS event_action,
    -- Event Label (dimension)
    hits.eventInfo.eventLabel AS event_label,
    -- Total Events (metric)
    COUNT(*) AS total_events,
    -- Unique Events (metric),
    COUNT(
        DISTINCT CONCAT(
            CAST(fullVisitorId AS STRING),
            CAST(visitStartTime AS STRING)
        )
    ) AS unique_events
FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*`,
    UNNEST(hits) as hits
WHERE
    -- Load previous month's tables
    SUBSTR(_TABLE_SUFFIX, 0, 6) = FORMAT_DATE(
        "%E4Y%m",
        DATE_SUB(CURRENT_DATE, INTERVAL 1 MONTH)
    )
    AND totals.visits = 1
    AND hits.type = 'EVENT'
    AND (
        hits.eventInfo.eventLabel IN (
            "hca--submission-successful",
            "burials-530--submission-successful",
            "edu--submission-successful",
            "edu-1995--submission-successful",
            "edu-5490--submission-successful",
            "edu-1990e--submission-successful",
            "edu-5495--submission-successful",
            "edu-0994--submission-successful",
            "edu-1990n--submission-successful",
            "edu-feedback-tool-submission-successful",
            "edu-0993-submission-successful",
            "login-success-dslogon",
            "login-success-idme",
            "login-success-myhealthevet",
            "login-successful-start-form",
            "login-success-null"
        )
        OR hits.eventInfo.eventAction IN ("Claims - View Details", "Forms - Education", "Forms - Disability")
    )
GROUP BY
    1,
    2,
    3,
    4,
    5