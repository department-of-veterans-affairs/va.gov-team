/***************************************************************************************************
Name:               BQ - Funnel - 1010EZ HCA Step Completion by Session
URL:                https://va-gov.domo.com/datasources/ea5a09b4-93b9-4136-a3b5-25b9033f2f29/details/overview
Create Date:        2020-08-24
Author:             Brian Martin
Description:        This is an attempt to recreate the standard Goal Funnel Visualization in Google
                    Analytics.  The 'goal' dataset is used to define the Goal steps and is used to 
                    filter related hits from the GA session tables.  In this funnel, all steps are 
                    optional and are back-filled.  A step is marked successful for a session if it -
                    or a step after it - is visited in a session.
/***************************************************************************************************/         

WITH goal AS (
    (
      SELECT 1 AS Step_Number ,"www.va.gov/health-care/apply/application/introduction" AS Step_Page, "Introduction" AS Step_Name UNION ALL
      SELECT 2 ,"www.va.gov/health-care/apply/application/veteran-information/personal-information", "Personal Information" UNION ALL
      SELECT 3 ,"www.va.gov/health-care/apply/application/veteran-information/birth-information", "Birth Information" UNION ALL
      SELECT 4 ,"www.va.gov/health-care/apply/application/veteran-information/demographic-information", "Demographic Information" UNION ALL
      SELECT 5 ,"www.va.gov/health-care/apply/application/veteran-information/veteran-address", "Address" UNION ALL
      SELECT 6 ,"www.va.gov/health-care/apply/application/veteran-information/contact-information", "Contact Information" UNION ALL
      SELECT 7 ,"www.va.gov/health-care/apply/application/military-service/service-information", "Service Information" UNION ALL
      SELECT 8 ,"www.va.gov/health-care/apply/application/military-service/additional-information", "Military Service - Additional Information" UNION ALL
      SELECT 9 ,"www.va.gov/health-care/apply/application/va-benefits/basic-information", "VA Benefits - Basic Information" UNION ALL
      SELECT 10 ,"www.va.gov/health-care/apply/application/household-information/financial-disclosure", "Financial Disclosure" UNION ALL
      SELECT 11 ,"www.va.gov/health-care/apply/application/household-information/spouse-information", "Spouse" UNION ALL
      SELECT 12 ,"www.va.gov/health-care/apply/application/household-information/child-information", "Child" UNION ALL
      SELECT 13 ,"www.va.gov/health-care/apply/application/household-information/annual-income", "Annual Income" UNION ALL
      SELECT 14 ,"www.va.gov/health-care/apply/application/household-information/deductible-expenses", "Deductible Expenses" UNION ALL
      SELECT 15 ,"www.va.gov/health-care/apply/application/insurance-information/medicare", "Medicare" UNION ALL
      SELECT 16 ,"www.va.gov/health-care/apply/application/insurance-information/general", "Insurance General" UNION ALL
      SELECT 17 ,"www.va.gov/health-care/apply/application/insurance-information/va-facility", "VA Facility" UNION ALL
      SELECT 18 ,"www.va.gov/health-care/apply/application/review-and-submit", "Review and Submit" UNION ALL
      SELECT 19 ,"www.va.gov/health-care/apply/application/confirmation", "Submit Health Care Application (Form 1010EZ)"
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
                `vsp-analytics-and-insights.176188361.ga_sessions_2020*` AS ga,
                UNNEST(ga.hits) AS hits
            WHERE
                _TABLE_SUFFIX BETWEEN '0701' AND '0731'
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