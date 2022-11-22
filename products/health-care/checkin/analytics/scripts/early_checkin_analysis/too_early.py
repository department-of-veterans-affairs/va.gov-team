from datadog_api_client import ApiClient, Configuration
from datadog_api_client.v2.api.logs_api import LogsApi
import dateutil
import dateutil.parser as dp
from more_itertools import chunked
import pandas as pd
import matplotlib.pyplot as plt 
import statistics

configuration = Configuration()
with ApiClient(configuration) as api_client:
    api_instance = LogsApi(api_client)

    request_ids = set()

    checkin_window_before = 30
    start = dp.isoparse('2022-09-12T00:00:00-04:00')
    end = dp.isoparse('2022-09-23T00:00:00-04:00')

    print('Retrieving "too early" logs from {} to {}'.format(start.strftime('%c'), end.strftime('%c')))
    items = api_instance.list_logs_get_with_pagination(
        filter_query="\"Check-in attempted too early\" service:chip",
        filter_from=start.isoformat(),
        filter_to=end.isoformat(),
        page_limit=1000
    )
    for item in items:
        if 'lambda' in item.attributes.attributes:
            if 'request_id' in item.attributes.attributes['lambda']:
                request_ids.add(item.attributes.attributes['lambda'].get('request_id'))

    too_early_requests = {}
    for request_id_group in chunked(request_ids, 100):
        print('Retrieving start times for 100 requests...')

        items = api_instance.list_logs_get_with_pagination(
            filter_query='(@lambda.request_id:' + ' OR @lambda.request_id:'.join(request_id_group) + ') "Start time from appt" service:chip',
            filter_from=start.isoformat(),
            filter_to=end.isoformat(),
            page_limit=1000
        )   
    
        for item in items:
            request_id = item.attributes.attributes['lambda'].get('request_id')
            appt_time = item.attributes.message.split()[-1]
            checkin_time = item.attributes.timestamp.isoformat()
            if request_id not in too_early_requests:
                 too_early_requests[request_id] = { 'timestamp': checkin_time, 'start_times': [ appt_time ] } 
            else:
                 too_early_requests[request_id]['start_times'].append(appt_time)
        
    too_early_appointments = []
    for request_id in too_early_requests:
        datum = too_early_requests[request_id]
        check_in_time = dp.isoparse(datum['timestamp'])
        time_before = 0
        for start_time in datum['start_times']:
            appt_time = dp.isoparse(start_time)
            diff = (appt_time - check_in_time)
            time_before_days = diff.days
            time_before_minutes = (diff.seconds / 60) - checkin_window_before
            if time_before_days >=0 and time_before_minutes > 0:
                if time_before == 0 or time_before_minutes < time_before:
                    time_before = time_before_minutes
            
        if time_before:
            too_early_appointments.append(time_before)
            too_early_requests[request_id]['minutes_before_checkin_window'] = time_before

    number_early_requests = len(too_early_appointments)
    time_before_mean = statistics.mean(too_early_appointments)
    time_before_median = statistics.median(too_early_appointments)
    min_before = min(too_early_appointments)
    max_before = max(too_early_appointments)

    print("{} early check-in requests were found.".format(number_early_requests))
    print("The least early attempt was {} minutes before the check-in window.".format(min_before))
    print("The most early attempt was {} minutes before the check-in window.".format(max_before))
    print("The mean of all attempts was {} minutes before the check-in window.".format(time_before_mean))
    print("The median of all attempts was {} minutes before the check-in window.".format(time_before_median))

    csv_data = []
    for request in too_early_requests:
        csv_data.append({'request_id': request, 'check_in_time': too_early_requests[request]['timestamp'], 'appt_times': ','.join([str(elem) for i,elem in enumerate(too_early_requests[request]['start_times'])])})
    pd.DataFrame(csv_data).to_csv('out.csv', index=False)

    data = pd.Series(too_early_appointments)
    data.plot.hist(grid=True, bins=30, rwidth=0.9, color='#607c8e')
    plt.title('Early check-ins')
    plt.ylabel('Counts')
    plt.xlabel('How early in minutes')
    plt.grid(axis='y', alpha=0.75)
    plt.show()
    
