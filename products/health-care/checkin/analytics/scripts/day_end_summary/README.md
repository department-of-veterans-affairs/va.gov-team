## Background

This script queries datadog for metrics to generate a day-end summary. It takes a date argument and queries the stats from midnight to 8pm ET on that day.

## How to run it

You'll need to have Python 3 available along with the `datadog_api_client` python package.

Run the following command, updating the date argument for the date you want:

`DD_SITE="ddog-gov.com" DD_API_KEY="XXX" DD_APP_KEY="XXX" python3 summary.py -d 2022-12-01`

- For `DD_API_KEY`, retrieve a key from the Datadog User Settings menu -> Organization Settings -> API Keys
- For `DD_APP_KEY`, retrieve (or generate) a key from the Datadog User Settings menu -> Organization Settings -> Application Keys
