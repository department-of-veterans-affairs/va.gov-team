import pprint
import csv
import json
import datetime as dt
from dateutil import parser as dp
from datadog_api_client import ApiClient, Configuration
from datadog_api_client.v2.api.logs_api import LogsApi
from datadog_api_client.v2.model.logs_list_request import LogsListRequest
from datadog_api_client.v2.model.logs_list_request_page import LogsListRequestPage
from datadog_api_client.v2.model.logs_query_filter import LogsQueryFilter
from datadog_api_client.v2.model.logs_sort import LogsSort

# From VistA.
STEP_MAP = {
    1: "PRE-CHECK-IN STARTED",
    2: "PRE-CHECK-IN COMPLETE",
    3: "CHECK-IN STARTED",
    4: "CHECK-IN COMPLETE",
    5: "E-CHECK-IN STARTED",
    6: "E-CHECK-IN COMPLETE"
}

# Analyze for station.
STATION_ID = '558'

# Analysis period start.
START = dp.isoparse('2022-10-25T00:00:00-04:00')

# Analysis period end.
END = dp.isoparse('2022-10-26T00:00:00-04:00')

# Outfile config.
CSV_FIELDNAMES = ['date', 'timestamp', 'station', 'step', 'step_name']
OUTFILE_FNAME = f'outfile_{str(dt.datetime.now())[:19]}.csv'.replace(':', '_').replace(' ', '_')

# DD API config.
CONFIGURATION = Configuration()
CONFIGURATION.api_key['apiKeyAuth'] = 'get_from_dd_console'
CONFIGURATION.api_key['appKeyAuth'] = 'get_from_dd_console'
CONFIGURATION.server_variables['site'] = 'ddog-gov.com'

# Local log store.
COLLECTION = []

# Basic summation of data. 
TRACKER = {v:0 for v in STEP_MAP.values()}
LOG_COUNT = 0

with ApiClient(CONFIGURATION) as api_client:
    api_instance = LogsApi(api_client)
    items = api_instance.list_logs_get_with_pagination(
        filter_query='\"SDES SET APPT CHECK-IN STEP\" ', # @vista.station:358',
        page_limit=1000,
        filter_from=START,
        filter_to=END
    )
    for item in items:
        COLLECTION.append(item)

print(f'Fetched {len(COLLECTION)} logs from Datadog.')

with open(OUTFILE_FNAME, 'w') as outfile:
    writer = csv.writer(outfile)
    writer.writerow(CSV_FIELDNAMES)
    for item in COLLECTION:
        
        data = item['attributes'].get('attributes', json.loads(item['attributes']['message'].split('[RPC] ')[-1])) 
        data = data.get('vista', data)
        # Note: this comes from DD as UTC.
        ts = item.attributes['timestamp']
        # TODO: make this timezone aware.
        date = f'{ts}'[0:10]
        host = item['attributes']['host']
        try: 
            station = data['station']
            step = data['params'][1]
            step_name = STEP_MAP[int(step)]
            if station == STATION_ID:
                writer.writerow([date, ts, station, step, step_name])
                TRACKER[step_name] += 1
                LOG_COUNT += 1
        except:
            pass
print(f'{LOG_COUNT} logs for station {STATION_ID}.')
pprint.pprint(TRACKER)
