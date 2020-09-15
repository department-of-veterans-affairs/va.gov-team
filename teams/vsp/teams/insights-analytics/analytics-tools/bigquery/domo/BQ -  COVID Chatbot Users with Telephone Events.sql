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
        date,
        fullVisitorId,
        visitStartTime,
        CONCAT(fullVisitorId, CAST(visitStartTime AS STRING)) AS session_id,
        hits.hitNumber AS hitNumber,
        hits.eventInfo.eventAction AS event_action
    FROM
        `vsp-analytics-and-insights.176188361.ga_sessions_*` AS ga,
        unnest(ga.hits) AS hits
    WHERE
        _TABLE_SUFFIX BETWEEN "20200701" AND "20200705"
        AND hits.type = 'EVENT'
        AND REGEXP_CONTAINS(hits.eventInfo.eventAction, '^Chatbot - COVID.*')
),
overlap AS (
    SELECT
        a.date,
        COUNT(DISTINCT(a.session_id)) AS step_1_sessions,
        COUNT(DISTINCT(b.session_id)) AS step_2_sessions,
        COUNT(DISTINCT(a.fullVisitorId)) AS step_1_users,
        COUNT(DISTINCT(b.fullVisitorId)) AS step_2_users
    FROM
        (
            SELECT
                date,
                session_id,
                fullVisitorId,
                event_action,
                hitNumber
            FROM
                ga
            WHERE
                REGEXP_CONTAINS(
                    event_action,
                    r'^Chatbot - COVID - Response - (What happens to my GI Bill benefits if my school changes to online classes or temporarily closes\?|Can I still file a claim or get help from my regional office\?|What if I can’t pay my existing VA debt\?|What if I’m having trouble paying my VA direct or VA-backed home loan during this time\?|How do I get help if I’m homeless or at risk of becoming homeless\?|What if I had or need an in-person appointment for VA benefits or services\?|What if I need to turn in or sign paperwork for my claim or appeal\?|If I’ve lost my job, can I get help with my VA copays over time\?|If I’ve lost my job or health insurance, can I get VA health care\?|Can I have more time to apply for Veterans’ Group Life Insurance \(VGLI\) after separation\?|Talk with someone about my specific needs|Can I use emergency care|First message in the chatbot \(emergency warning\))'
                )
        ) a
        LEFT JOIN (
            SELECT
                date,
                session_id,
                fullVisitorId,
                event_action,
                hitNumber
            FROM
                ga
            WHERE
                REGEXP_CONTAINS(
                    event_action,
                    '^Chatbot - COVID - Resource Link - (.*) - tel:'
                )
        ) b ON b.session_id = a.session_id AND b.hitNumber > a.hitNumber
    GROUP BY
    1
)
SELECT date, 1 AS step_number, "Chatbot response with telephone link click" AS step_name, step_1_sessions AS sessions, step_1_users AS users FROM overlap UNION ALL
SELECT date, 2 AS step_number, "Telephone link click" AS step_name, step_2_sessions, step_2_users FROM overlap
ORDER BY
  date ASC,
  step_number ASC