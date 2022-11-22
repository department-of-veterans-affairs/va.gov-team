## Background

This script first searches datadog for a list of lambda request IDs matching the "too early" message,
and then pulls appointment time logs matching those request IDs from datadog. It then analyzes the times
to determine how much before the 30 minute check-in window the veteran attempted to check in,
shows a histogram and writes a CSV of the results to `out.csv`.

## How to run it

You'll need to have Python 3 available, along with the `datadog_api_client`, `more_itertools`, `matplotlib`, `pandas` and `statistics` python packages.

Edit the dates on lines 17-18 to adjust the date range you wish to query, and run the following command:

`DD_SITE="ddog-gov.com" DD_API_KEY="XXX" DD_APP_KEY="XXX" python3 too_early.py`

- For `DD_API_KEY`, retrieve a key from the Datadog User Settings menu -> Organization Settings -> API Keys
- For `DD_APP_KEY`, retrieve a key from the Datadog User Settings menu -> Organization Settings -> Application Keys
