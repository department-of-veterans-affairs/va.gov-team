/***************************************************************************************************
Name:               BQ - Closed Funnel - VAOS Facility Selector variant  
URL:                https://va-gov.domo.com/datasources/5f044980-daf4-4f4c-af8d-56f8b897aec1/details/overview
Create Date:        2020-10-29
Author:             Brian Martin
Description:        This...
 /***************************************************************************************************/

WITH segments AS (
  SELECT
    PARSE_DATE("%Y%m%d", date) as date,
    fullVisitorId,
    hits
  FROM
      `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga
  WHERE
      _TABLE_SUFFIX BETWEEN "20201021" AND FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
      AND totals.visits = 1
),
ga AS (
  SELECT
        date,
        fullVisitorId,
        (CASE WHEN hits.type = 'PAGE' THEN hits.page.pagePath ELSE hits.eventInfo.eventLabel END) AS stepPagePathOrEventLabel,
        hits.hitNumber AS hitNumber
    FROM
        segments AS ga,
        UNNEST(ga.hits) AS hits
    WHERE
        (
            REGEXP_CONTAINS(
                hits.page.pagePath,
                '^www.va.gov/health-care/schedule-view-va-appointments/'
            )
            OR REGEXP_CONTAINS(
                hits.eventInfo.eventLabel,
                '^vaos-(request-submission-successful|schedule-appointment-button-clicked)$'
            )
        )
        AND (
            SELECT
                COUNT(1) > 0
            FROM
                UNNEST(ga.hits) AS hits
            WHERE
                hits.eventInfo.eventAction = 'VAOS - Facility Selection v2'
        )   
        AND (
            SELECT
                COUNT(1) > 0
            FROM
                UNNEST(ga.hits) AS hits
            WHERE
              REGEXP_CONTAINS(
                  hits.page.pagePath,
                  '^www.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/va-facility/'
              )
        ) IS FALSE    
),
users AS (
  SELECT
      a.date AS date,
      IFNULL(COUNT(DISTINCT(a.fullVisitorId)), 0) AS Step_1_users,
      IFNULL(COUNT(DISTINCT(b.fullVisitorId)), 0) AS Step_2_users,
      IFNULL(COUNT(DISTINCT(c.fullVisitorId)), 0) AS Step_3_users,
      IFNULL(COUNT(DISTINCT(d.fullVisitorId)), 0) AS Step_4_users,
      IFNULL(COUNT(DISTINCT(e.fullVisitorId)), 0) AS Step_5_users,
      IFNULL(COUNT(DISTINCT(f.fullVisitorId)), 0) AS Step_6_users,
      IFNULL(COUNT(DISTINCT(g.fullVisitorId)), 0) AS Step_7_users,
      IFNULL(COUNT(DISTINCT(h.fullVisitorId)), 0) AS Step_8_users,
      IFNULL(COUNT(DISTINCT(i.fullVisitorId)), 0) AS Step_9_users,
      MIN(a.stepPagePathOrEventLabel) AS Step_1_stepPagePathOrEventLabel,
      MIN(b.stepPagePathOrEventLabel) AS Step_2_stepPagePathOrEventLabel,
      MIN(c.stepPagePathOrEventLabel) AS Step_3_stepPagePathOrEventLabel,
      MIN(d.stepPagePathOrEventLabel) AS Step_4_stepPagePathOrEventLabel,
      MIN(e.stepPagePathOrEventLabel) AS Step_5_stepPagePathOrEventLabel,
      MIN(f.stepPagePathOrEventLabel) AS Step_6_stepPagePathOrEventLabel,
      MIN(g.stepPagePathOrEventLabel) AS Step_7_stepPagePathOrEventLabel,
      MIN(h.stepPagePathOrEventLabel) AS Step_8_stepPagePathOrEventLabel,
      MIN(i.stepPagePathOrEventLabel) AS Step_9_stepPagePathOrEventLabel
  FROM
      (
          SELECT
              date,
              fullVisitorId,
              stepPagePathOrEventLabel,
              hitNumber
          FROM
              ga
          WHERE
              stepPagePathOrEventLabel = 'vaos-schedule-appointment-button-clicked'
      ) a
      LEFT JOIN (
          SELECT
              date,
              fullVisitorId,
              stepPagePathOrEventLabel,
              hitNumber
          FROM
              ga
          WHERE
              REGEXP_CONTAINS(stepPagePathOrEventLabel, r'^www.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/?(\?.+)?$')

      ) b ON b.fullVisitorId = a.fullVisitorId
      AND b.hitNumber > a.hitNumber
      LEFT JOIN (
          SELECT
              date,
              fullVisitorId,
              stepPagePathOrEventLabel,
              hitNumber
          FROM
              ga
          WHERE
              REGEXP_CONTAINS(stepPagePathOrEventLabel, r'^www.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/va-facility-2/?(\?.+)?$')
      ) c ON c.fullVisitorId = b.fullVisitorId
      AND c.hitNumber > b.hitNumber
      LEFT JOIN (
          SELECT
              date,
              fullVisitorId,
              stepPagePathOrEventLabel,
              hitNumber
          FROM
              ga
          WHERE
              REGEXP_CONTAINS(
                  stepPagePathOrEventLabel,
                  r'^www.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/request-date/?(\?.+)?$'
              )
      ) d ON d.fullVisitorId = c.fullVisitorId
      AND d.hitNumber > c.hitNumber
      LEFT JOIN (
          SELECT
              date,
              fullVisitorId,
              stepPagePathOrEventLabel,
              hitNumber
          FROM
              ga
          WHERE
              REGEXP_CONTAINS(
                  stepPagePathOrEventLabel,
                  r'^www.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/reason-appointment/?(\?.+)?$'
              )
      ) e ON e.fullVisitorId = d.fullVisitorId
      AND e.hitNumber > d.hitNumber
      LEFT JOIN (
          SELECT
              date,
              fullVisitorId,
              stepPagePathOrEventLabel,
              hitNumber
          FROM
              ga
          WHERE
              REGEXP_CONTAINS(
                  stepPagePathOrEventLabel,
                  r'^www.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/choose-visit-type/?(\?.+)?$'
              )
      ) f ON f.fullVisitorId = e.fullVisitorId
      AND f.hitNumber > e.hitNumber
      LEFT JOIN (
          SELECT
              date,
              fullVisitorId,
              stepPagePathOrEventLabel,
              hitNumber
          FROM
              ga
          WHERE
              REGEXP_CONTAINS(
                  stepPagePathOrEventLabel,
                  r'^www.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/contact-info/?(\?.+)?$'
              )
      ) g ON g.fullVisitorId = f.fullVisitorId
      AND g.hitNumber > f.hitNumber
      LEFT JOIN (
          SELECT
              date,
              fullVisitorId,
              stepPagePathOrEventLabel,
              hitNumber
          FROM
              ga
          WHERE
              REGEXP_CONTAINS(
                  stepPagePathOrEventLabel,
                  r'^www.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/review/?(\?.+)?$'
              )
      ) h ON h.fullVisitorId = g.fullVisitorId
      AND h.hitNumber > g.hitNumber
      LEFT JOIN (
          SELECT
              date,
              fullVisitorId,
              stepPagePathOrEventLabel,
              hitNumber
          FROM
              ga
          WHERE
              stepPagePathOrEventLabel = 'vaos-request-submission-successful'
      ) i ON i.fullVisitorId = h.fullVisitorId
      AND i.hitNumber > h.hitNumber
  GROUP BY
    1
  ORDER BY
    a.date ASC
)
SELECT
    date,
    Step_Number,
    Step_Name,
    stepPagePathOrEventLabel,
    Users,
    SAFE_DIVIDE((Users - LAG(Users, 1) OVER (PARTITION BY date ORDER BY Step_Number ASC)), 
      LAG(Users, 1) OVER (PARTITION BY date ORDER BY Step_Number ASC)) AS Percent_Change,
    SAFE_DIVIDE(Users, FIRST_VALUE(Users) OVER (PARTITION BY date ORDER BY Step_Number)) AS Percentage_Of_Total    
FROM (
    SELECT date, 1 AS Step_Number, 'Started New Appointment Flow' AS Step_Name, Step_1_stepPagePathOrEventLabel AS stepPagePathOrEventLabel, Step_1_users AS Users FROM users UNION ALL
    SELECT date, 2, 'Choose Type of Care', Step_2_stepPagePathOrEventLabel, Step_2_users FROM users UNION ALL
    SELECT date, 3, 'Choose VA Location', Step_3_stepPagePathOrEventLabel, Step_3_users FROM users UNION ALL
    SELECT date, 4, 'Choose date, AM/PM', Step_4_stepPagePathOrEventLabel, Step_4_users FROM users UNION ALL
    SELECT date, 5, 'Reason for appointment', Step_5_stepPagePathOrEventLabel, Step_5_users FROM users UNION ALL
    SELECT date, 6, 'Choose Visit Type', Step_6_stepPagePathOrEventLabel, Step_6_users FROM users UNION ALL
    SELECT date, 7, 'Your contact information', Step_7_stepPagePathOrEventLabel, Step_7_users FROM users UNION ALL
    SELECT date, 8, 'Review your appointment details', Step_8_stepPagePathOrEventLabel, Step_8_users FROM users UNION ALL
    SELECT date, 9, 'Successful Submitted Request', Step_9_stepPagePathOrEventLabel, Step_9_users FROM users
    ORDER BY
    date ASC,
    Step_Number ASC
)
ORDER BY
  date ASC,
  Step_Number ASC