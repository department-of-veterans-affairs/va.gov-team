
SELECT
  NumVisits,
  COUNT(DISTINCT fullVisitorId) as sessions
  
FROM
(
  SELECT fullVisitorId, COUNT(*) as NumVisits,
  FROM
      `vsp-analytics-and-insights.176188361.ga_sessions_*` ga
  WHERE

      _TABLE_SUFFIX BETWEEN "20200801" AND "20200801"
  GROUP BY fullVisitorId
)
GROUP BY
  1
ORDER BY
  1 ASC