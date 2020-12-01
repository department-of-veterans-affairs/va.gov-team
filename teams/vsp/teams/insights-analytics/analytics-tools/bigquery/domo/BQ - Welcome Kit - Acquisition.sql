/***************************************************************************************************
Name:               BQ - Welcome Kit - Acquisition
URL:                https://va-gov.domo.com/datasources/d22ddebd-cbc0-49ef-8547-fbc3d5572d7b/details/overview
Create Date:        2020-10-05
Author:             Ben McGrady
Description:        This dataset returns acquisition events for va.gov/welcome-kit.
/***************************************************************************************************/
SELECT
    -- Date
    date,
    -- Page Path (dimension)
    page_path,
    -- Previous Page Path
    previous_page_path,
    -- Social Network
    social_network,
    -- Referral Path
    referral_path,
    -- Source (dimension)
    traffic_source,
    -- Medium (dimension)
    traffic_medium,
    -- Source / Medium (dimension)
    source_medium,
    --Users
    COUNT(DISTINCT(fullVisitorId)) AS users
FROM (
    SELECT
    -- Date
    date,
    -- Page Path (dimension)
    page_path,
    -- Previous Page Path
    (CASE WHEN previous_page_path IS NULL THEN "(entrance)" ELSE previous_page_path END) as previous_page_path,
    -- Social Network
    social_network,
    -- Referral Path
    referral_path,
    -- Source (dimension)
    traffic_source,
    -- Medium (dimension)
    traffic_medium,
    -- Source / Medium (dimension)
    source_medium,
    --Users
    fullVisitorId,
    FROM
    (
        SELECT
        date,
        fullVisitorId,
        hits.page.pagePath AS page_path, 
        LAG(hits.page.pagePath, 1) OVER (
                PARTITION BY fullvisitorId,
                visitStartTime
                ORDER BY
                    hits.hitNumber ASC
            ) AS previous_page_path,
            hits.social.socialNetwork AS social_network,
            trafficSource.referralPath AS referral_path,
            trafficSource.source AS traffic_source,
            trafficSource.medium AS traffic_medium,
            CONCAT(trafficSource.source," / ",trafficSource.medium) AS source_medium
        FROM 
        `vsp-analytics-and-insights.176188361.ga_sessions_*`AS GA,
            UNNEST(GA.hits) AS hits
        WHERE 
            --_TABLE_SUFFIX BETWEEN '20190101' and '20201005'
            _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
            AND hits.type = 'PAGE'
        ORDER BY
        date asc
    )
    WHERE
    REGEXP_CONTAINS(page_path, '^www.va.gov/welcome-kit.*')
    GROUP BY
    1,2,3,4,5,6,7,8
    ORDER BY 
    1,
    2 desc
)