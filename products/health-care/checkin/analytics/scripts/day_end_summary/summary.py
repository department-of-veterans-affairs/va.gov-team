from datetime import datetime
from dateutil.relativedelta import relativedelta
from datadog_api_client import ApiClient, Configuration
from datadog_api_client.v1.api.metrics_api import MetricsApi

import argparse

argParser = argparse.ArgumentParser()
argParser.add_argument("-d", "--date", help="Date")
args = argParser.parse_args()

startdate = args.date + 'T00:00:00-05:00'
enddate = args.date + 'T18:00:00-05:00'

configuration = Configuration()

def get_point_total(response):
    total = 0.0
    pointlist = response.series[0].get('pointlist', None)
    for x in pointlist:
        total += x.value[1]
    return total

def query_metric(query_string):
    with ApiClient(configuration) as api_client:
        api_instance = MetricsApi(api_client)
        response = api_instance.query_metrics(
            _from=int((datetime.fromisoformat(startdate).timestamp())),
            to=int(datetime.fromisoformat(enddate).timestamp()),
            query=query_string,
        )
        return response


checkins_clicked_response = query_metric("sum:vets_api.statsd.api_check_in_v2_sessions_show_count_success{environment:prod}.as_count()")
checkins_clicked = get_point_total(checkins_clicked_response)
checkins_completed_response = query_metric("sum:vets_api.statsd.api_check_in_v2_checkins_create_count_success{environment:prod}.as_count()")
checkins_completed = get_point_total(checkins_completed_response)

pre_checkins_clicked_response = query_metric("sum:vets_api.statsd.api_pre_check_in_v2_sessions_show_count_success{environment:prod}.as_count()")
pre_checkins_clicked = get_point_total(pre_checkins_clicked_response)
pre_checkins_completed_response = query_metric("sum:vets_api.statsd.api_check_in_v2_pre_checkins_create_count_success{environment:prod}.as_count()")
pre_checkins_completed = get_point_total(pre_checkins_completed_response)


print("Completed check-ins: {}%".format(round((checkins_completed / checkins_clicked) * 100, 1)))
print("Completed pre-check-ins: {}%".format(round((pre_checkins_completed / pre_checkins_clicked) * 100, 1)))
print()
print("Check-ins clicked: {}".format(round(checkins_clicked)))
print("Check-ins completed: {}".format(round(checkins_completed)))
print("Pre-check-ins clicked: {}".format(round(pre_checkins_clicked)))
print("Pre-check-ins completed: {}".format(round(pre_checkins_completed)))

