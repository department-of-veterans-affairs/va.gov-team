## Creating Period-Over-Period Gauge Charts in DOMO

DOMO provides several types of [gauge charts](https://knowledge.domo.com/Welcome/Available_Chart_Types/08Available_Gauges) that we use to display individual metrics.  This can be an individual value like an aggregated average or the change to a metric over a period.

Because the BigQuery daily session tables are at least one day behind the current day, it is not possible (at the time of this writing) to use DOMO's period-over-period gauge charts as-is.  Because DOMO considers the "Last 7 days" to start at the current date - and not the most recent day in the dataset - you will end up comparings periods of 6 days to periods of 7.

We have several options to work around this limitation.

### Calculated column in DOMO dataset views

You can create a calculated column in a [DOMO dataset view](https://www.domo.com/learn/dataset-views).  Your goal is to create an output dataset that includes a grouping date column and the values you want to compare.

For instance, if you want to compare the average of a conversion rate from the last 7 days to the 7 days before that, you can create a grouping date column like:

```sql
-- Return 1 for the last 7 days and 2 for the period before that
CASE
	WHEN DATEDIFF(`date`, MAX(`date`) OVER ()) <= 0 
		AND DATEDIFF(`date`, MAX(`date`) OVER ()) >= -6 THEN 1
	WHEN DATEDIFF(`date`, MAX(`date`) OVER ()) <= -7
		AND DATEDIFF(`date`, MAX(`date`) OVER ()) >= -13 THEN 2  
END 
```

To use this in a gauge chart, create a 'Multi-value Gauge' chart and use your grouping date column as the "Optional Group By" field.

### Beast Mode calculation in a card

It's a little unwieldy (especially for periods of 30 days), but adding together and dividing values in a Beast Mode does give you an accurate rolling value.

For instance, you can create a Beast Mode calculation for the last 7 days:

```sql
(`event_rate` + LAG(`event_rate`, 1) OVER (ORDER BY `date`) + LAG(`event_rate`, 2) OVER (ORDER BY `date`) + 
LAG(`event_rate`, 3) OVER (ORDER BY `date`) + LAG(`event_rate`, 4) OVER (ORDER BY `date`) + 
LAG(`event_rate`, 5) OVER (ORDER BY `date`) + LAG(`event_rate`, 6) OVER (ORDER BY `date`)) / 7
```

...and the 7 days before that...

```sql
(LAG(`event_rate`, 7) OVER (ORDER BY `date`) + + LAG(`event_rate`, 8) OVER (ORDER BY `date`) + 
LAG(`event_rate`, 9) OVER (ORDER BY `date`) + LAG(`event_rate`, 10) OVER (ORDER BY `date`) + 
LAG(`event_rate`, 11) OVER (ORDER BY `date`) + LAG(`event_rate`, 12) OVER (ORDER BY `date`) + 
LAG(`event_rate`, 13) OVER (ORDER BY `date`)) / 7
```

You can then use a "Comparative Gauge" chart to compare the two values.

You will probably want to set *General > Value Displayed*  to "Percentage Change" and "General > Value Format" to "Percentage".
