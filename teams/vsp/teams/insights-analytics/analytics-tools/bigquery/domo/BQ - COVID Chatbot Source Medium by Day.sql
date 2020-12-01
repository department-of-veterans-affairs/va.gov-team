/***************************************************************************************************
Name:               BQ - COVID Chatbot Source/Medium by Day
URL:                https://va-gov.domo.com/datasources/305b4a4e-bdcb-4b6b-917c-a5a69ed41fb1/details/overview
Create Date:        2020-09-12
Author:             Brian Martin
Description:        This returns daily source/medium and user counts for COVID chatbot pages.
/***************************************************************************************************/

 BEGIN

    CALL `vsp-analytics-and-insights.stored_procedures.hasGoogleAnalayticsDataLoaded`();

    SELECT
        -- date (dimension)
        PARSE_DATE("%Y%m%d", date) AS date,
        -- year (dimension)
        FORMAT_DATE('%Y', PARSE_DATE("%Y%m%d", date)) AS year,
        -- month (dimension)
        FORMAT_DATE('%m', PARSE_DATE("%Y%m%d", date)) AS month,
        -- month_name (dimension)
        FORMAT_DATE('%B', PARSE_DATE("%Y%m%d", date)) AS month_name,
        -- day (dimension)
        FORMAT_DATE('%d', PARSE_DATE("%Y%m%d", date)) AS day,
        source,
        medium,
        source_medium,
        COUNT(1) AS pageviews,
        COUNT(DISTINCT(fullvisitorId)) AS users
    FROM
        (
            SELECT
                date,
                fullvisitorId,
                visitStartTime,
                hits.hitNumber,
                hits.page.pagePath AS pagePath,
                -- source (dimension)
                trafficSource.source AS source,
                -- medium (dimension)
                trafficSource.medium AS medium,
                -- source / medium (dimension)
                CONCAT(trafficSource.source," / ",trafficSource.medium) AS source_medium
            FROM
                `vsp-analytics-and-insights.176188361.ga_sessions_*` AS GA,
                UNNEST(GA.hits) AS hits
            WHERE
                _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
                AND hits.type = 'PAGE'
            ORDER BY
                DATE ASC
        )
    WHERE
        REGEXP_CONTAINS(pagePath, '^www.va.gov/coronavirus-chatbot/.*')
    GROUP BY
        1, 2, 3, 4,5,6,7,8;

EXCEPTION WHEN ERROR THEN
    RETURN;
END;
