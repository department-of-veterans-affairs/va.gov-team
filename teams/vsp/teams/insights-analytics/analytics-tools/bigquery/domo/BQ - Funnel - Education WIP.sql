/***************************************************************************************************
Name:               
URL:                
Create Date:        2020-09-03
Author:             Brian Martin
Description:        This is ...
/***************************************************************************************************/         

WITH goal AS (
    (
        SELECT 1 AS Step_Number, '/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction' AS Step_Page, 'Step 1' AS Step_Name UNION ALL
        SELECT 2, '/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/applicant/information', 'Step 2' UNION ALL
        SELECT 3, '/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/benefits/eligibility', 'Step 3' UNION ALL
        SELECT 4, '/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/benefits/stem-eligibility', 'Step 4' UNION ALL
        SELECT 5, '/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/benefits/confirm-eligibility', 'Step 5' UNION ALL
        SELECT 6, '/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/benefits/program-details', 'Step 6' UNION ALL
        SELECT 7, '/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/active-duty', 'Step 7' UNION ALL
        SELECT 8, '/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/personal-information/contact-information', 'Step 8' UNION ALL
        SELECT 9, '/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/personal-information/direct-deposit', 'Step 9' UNION ALL
        SELECT 10, '/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/review-and-submit', 'Step 10' UNION ALL
        SELECT 11, '/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/confirmation', 'Step 11'
    )
),
sessions AS (
    SELECT
        a.SessionID AS SessionID,
        a.pagePath AS pagePath,
        b.Step_Number AS Step_Number
    FROM
        (
            SELECT
                CONCAT(fullVisitorId, CAST(visitStartTime AS STRING)) AS SessionID,
                hits.page.pagePath AS pagePath
            FROM
                `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
                UNNEST(ga.hits) AS hits
            WHERE
                _TABLE_SUFFIX BETWEEN "20200825"
                 AND FORMAT_DATE(
                    "%Y%m%d",
                    DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
                )
                OR (
                    _TABLE_SUFFIX = CONCAT(
                        'intraday_',
                        CAST(
                            FORMAT_DATE(
                                "%Y%m%d",
                                DATE_SUB(CURRENT_DATE(), INTERVAL 0 DAY)
                            ) AS STRING
                        )
                    )
                    OR _TABLE_SUFFIX = CONCAT(
                        'intraday_',
                        CAST(
                            FORMAT_DATE(
                                "%Y%m%d",
                                DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
                            ) AS STRING
                        )
                    )
                )
        ) a
        INNER JOIN goal AS b ON a.pagePath LIKE CONCAT('%', b.Step_Page, '%')
)
SELECT
    goal.Step_Number AS Step_Number,
    goal.Step_Page AS Step_Page,
    goal.Step_Name AS Step_Name,
    COUNT(DISTINCT sessions.SessionID) AS Sessions,
    (COUNT(DISTINCT sessions.SessionID) - LAG(COUNT(DISTINCT sessions.SessionID)) OVER (ORDER BY goal.Step_Number)) / 
      LAG(COUNT(DISTINCT sessions.SessionID)) OVER (ORDER BY goal.Step_Number) as Percent_Change,
FROM
    goal
    CROSS JOIN sessions
WHERE
    sessions.Step_Number >= goal.Step_Number
GROUP BY
    1,
    2,
    3
ORDER BY
    1 ASC
