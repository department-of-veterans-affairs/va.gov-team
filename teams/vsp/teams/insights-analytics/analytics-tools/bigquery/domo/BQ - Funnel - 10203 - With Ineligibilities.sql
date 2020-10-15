WITH goal AS (
    (
        SELECT 1 AS Step_Number, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction' AS Step_Page, 'Introduction' AS Step_Name UNION ALL
        SELECT 2, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/applicant/information', 'Applicant Information' UNION ALL
        SELECT 3, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/benefits/eligibility', 'Education Benefit' UNION ALL
        SELECT 4, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/benefits/initial-confirm-eligibility/', 'Initial Confirm Eligibility' UNION ALL
        SELECT 5, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/benefits/stem-eligibility', 'STEM Eligibility' UNION ALL
        SELECT 6, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/benefits/confirm-eligibility', 'STEM Confirm Eligibility' UNION ALL
        SELECT 7, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/benefits/program-details', 'Program Details' UNION ALL
        SELECT 8, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/active-duty', 'Active Duty' UNION ALL
        SELECT 9, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/personal-information/contact-information', 'Contact Information' UNION ALL
        SELECT 10, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/personal-information/direct-deposit', 'Direct Deposit' UNION ALL
        SELECT 11, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/review-and-submit', 'Review and Submit' UNION ALL
        SELECT 12, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/confirmation', 'Confirmation'
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
                _TABLE_SUFFIX BETWEEN '20200929'
                 AND FORMAT_DATE(
                    "%Y%m%d",
                    DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
                )
                AND (
                    SELECT
                        COUNT(1) > 0
                    FROM
                        ga.hits
                    WHERE
                        REGEXP_CONTAINS(hits.page.pagePath, 'www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/benefits/confirm-eligibility')
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