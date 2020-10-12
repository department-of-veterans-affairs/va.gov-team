/***************************************************************************************************
Name:               BQ - COVID Chatbot Users with Telephone Events
URL:                https://va-gov.domo.com/datasources/e53e9442-e9fa-4bab-8d0e-a1c3bf979cc1/details/overview
Create Date:        2020-09-13
Author:             Brian Martin
Description:        This is a funnel seeing how many sessions or users - when shown a COVID chatbot response
                    that includes a telephone link, click that link.
/***************************************************************************************************/
WITH ga AS (
    SELECT
        PARSE_DATE("%Y%m%d", date) AS date,
        fullVisitorId,
        visitStartTime,
        CONCAT(fullVisitorId, CAST(visitStartTime AS STRING)) AS session_id,
        hits.hitNumber AS hitNumber,
        hits.eventInfo.eventAction AS event_action,
        LEAD(hits.eventInfo.eventAction, 1) OVER (
            PARTITION BY fullvisitorId,
                visitStartTime
            ORDER BY
                hits.hitNumber ASC
        ) AS next_event_action
    FROM
        `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
        unnest(ga.hits) AS hits
    WHERE
        --_TABLE_SUFFIX BETWEEN "20200701" AND "20200923"
        _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d',DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
        AND hits.type = 'EVENT'
        AND REGEXP_CONTAINS(hits.eventInfo.eventAction, '^Chatbot - COVID.*')
        AND device.deviceCategory = 'mobile'
        AND (
            REGEXP_CONTAINS(
                hits.eventInfo.eventAction,
                '^Chatbot - COVID - Response - (What happens to my GI Bill benefits if my school changes to online classes or temporarily closes\?|Can I still file a claim or get help from my regional office\?|What if I can’t pay my existing VA debt\?|What if I’m having trouble paying my VA direct or VA-backed home loan during this time\?|How do I get help if I’m homeless or at risk of becoming homeless\?|What if I had or need an in-person appointment for VA benefits or services\?|What if I need to turn in or sign paperwork for my claim or appeal\?|If I’ve lost my job, can I get help with my VA copays over time\?|If I’ve lost my job or health insurance, can I get VA health care\?|Can I have more time to apply for Veterans’ Group Life Insurance (VGLI) after separation\?|Talk with someone about my specific needs|Can I use emergency care|First message in the chatbot (emergency warning))'
            )
            OR REGEXP_CONTAINS(hits.eventInfo.eventAction, '^Chatbot - COVID - Resource Link - (.*) - tel:')

        )
),
step_1 AS (
    SELECT
        date,
        COUNT(DISTINCT(session_id)) AS sessions,
        COUNT(DISTINCT(fullVisitorId)) AS users
    FROM
        ga
    WHERE
        REGEXP_CONTAINS(
            event_action,
            '^Chatbot - COVID - Response - (What happens to my GI Bill benefits if my school changes to online classes or temporarily closes\?|Can I still file a claim or get help from my regional office\?|What if I can’t pay my existing VA debt\?|What if I’m having trouble paying my VA direct or VA-backed home loan during this time\?|How do I get help if I’m homeless or at risk of becoming homeless\?|What if I had or need an in-person appointment for VA benefits or services\?|What if I need to turn in or sign paperwork for my claim or appeal\?|If I’ve lost my job, can I get help with my VA copays over time\?|If I’ve lost my job or health insurance, can I get VA health care\?|Can I have more time to apply for Veterans’ Group Life Insurance (VGLI) after separation\?|Talk with someone about my specific needs|Can I use emergency care|First message in the chatbot (emergency warning))'
        )
    GROUP BY
      1
),
step_2 AS (
    SELECT
        date,
        COUNT(DISTINCT(session_id)) AS sessions,
        COUNT(DISTINCT(fullVisitorId)) AS users
    FROM
        ga
    WHERE
        REGEXP_CONTAINS(
            event_action,
            '^Chatbot - COVID - Response - (What happens to my GI Bill benefits if my school changes to online classes or temporarily closes\?|Can I still file a claim or get help from my regional office\?|What if I can’t pay my existing VA debt\?|What if I’m having trouble paying my VA direct or VA-backed home loan during this time\?|How do I get help if I’m homeless or at risk of becoming homeless\?|What if I had or need an in-person appointment for VA benefits or services\?|What if I need to turn in or sign paperwork for my claim or appeal\?|If I’ve lost my job, can I get help with my VA copays over time\?|If I’ve lost my job or health insurance, can I get VA health care\?|Can I have more time to apply for Veterans’ Group Life Insurance (VGLI) after separation\?|Talk with someone about my specific needs|Can I use emergency care|First message in the chatbot (emergency warning))'
        )
        AND REGEXP_CONTAINS(next_event_action, '^Chatbot - COVID - Resource Link - (.*) - tel:')
    GROUP BY
      1
)
   
SELECT
    DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY) as date,
    1 AS step_number,
    "Chatbot response with telephone link click" AS step_name,
    0 AS sessions,
    0 AS users
FROM
    UNNEST([1, 2]) steps

 UNION ALL

SELECT
    DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY) as date,
    2 AS step_number,
    "Telephone link click" AS step_name,
    0 AS sessions,
    0 AS users
FROM
    UNNEST([1, 2]) steps

UNION ALL

SELECT date, 1 AS step_number, "Chatbot response with telephone link click" AS step_name, sessions, users FROM step_1 UNION ALL
SELECT date, 2 AS step_number, "" AS step_name, sessions, users FROM step_2
ORDER BY
  date ASC,
  step_number ASC