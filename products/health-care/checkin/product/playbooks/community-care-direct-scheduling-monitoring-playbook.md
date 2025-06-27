
# Endpoint monitoring

## Scope 
This applies to Community Care direct scheduling flow within the appointments application, and focuses on the use of Datadog for observability.

## Purpose
It is critical that we are aware of the performance of va.gov systems, notified when system behavior is impacting veterans, 
and have the necessary information to address problems quickly.  To accomplish implement the following for your systems:

## Dashboards

[Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/t4t-axu-zvb/vaos-appointments-metrics?fromUser=false&refresh_mode=sliding&from_ts=1750097905206&to_ts=1750101505206&live=true)

## Monitors

- [VAOS Vets API Endpoint Error Rate - Community Care Referrals Fetch](https://vagov.ddog-gov.com/monitors/384297)
- [VAOS Vets API Endpoint Error Rate - Community Care Referral Fetch](https://vagov.ddog-gov.com/monitors/384298)
- [VAOS Vets API Endpoint Error Rate - Community Care Draft Create](https://vagov.ddog-gov.com/monitors/382158)
- [VAOS Vets API Endpoint Error Rate - Community Care Appointment Create](https://vagov.ddog-gov.com/monitors/382190)
- [VAOS Vets API Endpoint Error Rate - Community Care Appointment Status Check](https://vagov.ddog-gov.com/monitors/384196) 

## Process expectations

For issues and investigations follow the [Production Support Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/zero-failures/production-support-playbook.md)

## Watch Officer (watchtower) Process

TBD
