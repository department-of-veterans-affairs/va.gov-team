/***************************************************************************************************
Name:               BQ - COVID FAQ - Combined with Topic
URL:                https://va-gov.domo.com/datasources/1bb613d8-8ebe-43be-9668-e30190e6595a/details/data/table
Create Date:        2020-09-09
Author:             Jon Wehausen
Description:        This returns daily total and unique events for all navigational events within the frequently
                    asked questions content on https://www.va.gov/coronavirus-veteran-frequently-asked-questions/.
/***************************************************************************************************/
WITH ga AS (
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
    -- pagePath (dimension)
    h.page.pagePath AS pagePath,
    -- event category (dimension)
    h.eventInfo.eventCategory AS event_category,
    -- event action (dimension)
    h.eventInfo.eventAction AS event_action,
    -- event label (dimension)
    h.eventInfo.eventLabel AS event_label,
    -- frequently asked question (custom dimension 77)
    (
      SELECT
        hcd.value
      FROM
        h.customdimensions AS hcd
      WHERE
        hcd.index = 77
    ) AS frequently_asked_question,
    -- frequently asked question section header (custom dimension 78)
    (
      SELECT
        hcd.value
      FROM
        h.customdimensions AS hcd
      WHERE
        hcd.index = 78
    ) AS faq_section,
    -- total events (metric) 
    COUNT(1) AS total_events,
    -- unique_events (metric) 
    COUNT(
      DISTINCT CONCAT(
        CAST(fullVisitorId AS STRING),
        CAST(visitStartTime AS STRING)
      )
    ) AS unique_events
  FROM
    `vsp-analytics-and-insights.176188361.ga_sessions_*` AS t,
    UNNEST(t.hits) AS h
  WHERE
    --_TABLE_SUFFIX BETWEEN '20200401' AND '20200930'
    _TABLE_SUFFIX = FORMAT_DATE(
      '%Y%m%d',
      DATE_SUB(CURRENT_DATE(), INTERVAL 2 DAY)
    )
    AND h.type = 'EVENT'
    AND REGEXP_CONTAINS(h.eventInfo.eventLabel, '(nav-accordion-expand|nav-covid-link-click|chatbot-button-click)')
    AND REGEXP_CONTAINS(h.page.pagePath, '(corona|covid)')
  GROUP BY
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ORDER BY
    date ASC
)
SELECT
    a.date,
    a.frequently_asked_question,
    b.covid_topic AS covid_topic,
    a.source,
    event_category,
    event_action,
    event_label,
    pagePath,
    a.total_events,
    a.unique_events
FROM
    (
        SELECT
            date,
            event_category,
            event_action,
            event_label,
            pagePath,            
            (
                CASE
                    WHEN frequently_asked_question IS NOT NULL THEN REPLACE(
                        TRIM(frequently_asked_question),
                        '’',
                        "'"
                    )
                    WHEN event_label = 'nav-accordion-expand'
                    AND STRPOS(event_action, '?') > 0 THEN REPLACE(
                        TRIM(SUBSTR(event_action, 34)),
                        '’',
                        "'"
                    )
                    WHEN event_label = 'chatbot-button-click'
                    AND STRPOS(event_action, '?') > 0 THEN REPLACE(
                        TRIM(SUBSTR(event_action, 30)),
                        '’',
                        "'"
                    )
                END
            ) AS frequently_asked_question,
            (
                CASE
                    WHEN REGEXP_CONTAINS(pagePath, 'frequently') THEN 'FAQ'
                    WHEN REGEXP_CONTAINS(pagePath, 'chatbot') THEN 'chatbot'
                END
            ) AS source,
            SUM(total_events) AS total_events,
            SUM(unique_events) AS unique_events
        FROM
            ga
        GROUP BY
            1,
            2,
            3,
            4,
            5,
            6
    ) a
    LEFT JOIN (
        SELECT
            DISTINCT(text),
            source,
            covid_topic
        FROM
            `vsp-analytics-and-insights.covid_topics.wip_topic_lookup` 
    ) b ON a.frequently_asked_question = b.text AND a.source = b.source
WHERE
    a.frequently_asked_question IS NOT NULL