/***************************************************************************************************
Name:               BQ - COVID FAQ Page Entrance Data
URL:                https://va-gov.domo.com/datasources/1fc2aede-050a-41c6-87f0-e4a6b9b04c97/details/overview
Create Date:        2020-09-12
Author:             Brian Martin
Description:        This returns....
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
        -- page (dimension) 
        hits.page.pagePath as page_path,
        -- language (dimension)
        device.language as lang_code,
        COUNT(*) AS pageviews,
        COUNT(DISTINCT fullVisitorId) as users,
        COUNT(DISTINCT CONCAT(fullVisitorId, CAST(visitId AS STRING))) as sessions
    FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_2020*` AS GA,
    UNNEST(GA.hits) AS hits
    WHERE
    hits.type = 'PAGE'
    AND totals.visits=1
    AND REGEXP_CONTAINS(hits.page.pagePath,'(.*covid.*|.*coronavirus.*)')
    AND _TABLE_SUFFIX = FORMAT_DATE('%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
    GROUP BY
    1,2,3,4,5,6,7
    ORDER BY
    date ASC;

EXCEPTION WHEN ERROR THEN
    RETURN;
END;