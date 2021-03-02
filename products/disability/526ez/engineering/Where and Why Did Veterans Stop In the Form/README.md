[from Anna's notes](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15689)

# Where and Why Did Veterans Stop In the Form

Places people get stuck or abandon and how we can measure it:

Rake task: https://github.com/department-of-veterans-affairs/vets-api/blob/master/rakelib/in_progress_forms.rake

## They leave the in progress form 
either by choice, frustration, or need to gather evidence:
- Choice/exhaustion/need more info: `bundle exec rake form_progress:abandon_url[21-526EZ,2020-10-06,2020-11-06]`
-  Frustration/stuck with validation error -  `bundle exec rake form_progress:error_url[21-526EZ,2020-10-06,2020-11-06]`
## They can't successfully submit
- Error  on submit -[grafana]( http://grafana.vfs.va.gov/d/000000066/evss-526-submissions?viewPanel=18&orgId=1&from=now-7d&to=now) or [FE validation error in Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/241/events/?query=url%3Ahttps%3A%2F%2Fwww.va.gov%2Fdisability%2Ffile-disability-claim-form-21-526ez%2Freview-and-submit&sort=freq&statsPeriod=14d)
- BE validation error - [sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/?project=3&query=transaction%3AV0%3A%3ADisabilityCompensationFormsController%23submit_all_claim&sort=freq&statsPeriod=14d)
- EVSS submission error [Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/?groupStatsPeriod=14d&project=3&query=transaction%3AV0%3A%3ADisabilityCompensationFormsController%23submit_all_claim&sort=freq&statsPeriod=14d), [grafana](http://grafana.vfs.va.gov/d/000000066/evss-526-submissions?viewPanel=8&orgId=1&from=now-7d&to=now)


Grafana for counts, Sentry for error details

```
Previous Snapshot: ~Nov 10th
1 “/new-disabilities/follow-up/30”
1 “/disabilities/ptsd-781a-additional-events-0"
1 “/disabilities/ptsd-incident-support-1”
1 “/new-disabilities/ptsd-additional-incident”
1 “/disabilities/ptsd-incident-unit-assignment-2”
1 “/disabilities/ptsd-individuals-involved-2"
1 “/disabilities/ptsd-secondary-incident-support-0”
1 “/disabilities/ptsd-secondary-incident-unit-assignment-1"
1 “/disabilities/ptsd-secondary-incident-unit-assignment-2”
1 “/disabilities/ptsd-secondary-other-sources-1"
1 “/disabilities/ptsd-secondary-other-sources-help-0”
1 “/disabilities/ptsd-secondary-permission-notice-0"
1 “/new-disabilities/ptsd-781a-social-changes”
1 “/new-disabilities/ptsd-781a-physical-changes”
1 “/new-disabilities/ptsd-781a-mental-changes”
1 “/new-disabilities/follow-up/13"
1 “/new-disabilities/follow-up/16”
1 “/new-disabilities/follow-up/18"
1 “/new-disabilities/follow-up/43”
1 “/new-disabilities/follow-up/20"
1 “/new-disabilities/follow-up/25”
2 “/disabilities/ptsd-incident-support-additional-break-0"
2 “/disabilities/ptsd-incident-unit-assignment-1”
2 “/new-disabilities/ptsd-781a-upload”
2 “/disabilities/ptsd-secondary-authorities-0”
2 “/disabilities/ptsd-secondary-incident-date-1"
2 “/new-disabilities/ptsd-781a-changes-intoduction”
3 “/disabilities/ptsd-secondary-incident-unit-assignment-0"
3 “/new-disabilities/ptsd-781a-additional-changes”
3 “/new-disabilities/follow-up/14"
3 “/disabilities/ptsd-individuals-involved-questions-1”
3 “/disabilities/ptsd-incident-description-2"
4 “/adaptive-benefits”
4 “/new-disabilities/follow-up/9"
4 “/new-disabilities/follow-up/8”
4 “/disabilities/ptsd-secondary-other-sources-0"
4 “/new-disabilities/follow-up/11”
4 “/new-disabilities/follow-up/17"
4 “/disabilities/ptsd-additional-events-1”
4 “/disabilities/ptsd-incident-date-1"
5 “/retirement-pay-waiver”
5 “/new-disabilities/follow-up/10"
5 “/disabilities/ptsd-incident-location-1”
6 “/new-disabilities/ptsd-781-upload”
6 “/disabilities/ptsd-medals-1”
6 “/training-pay-waiver”
7 “/disabilities/ptsd-incident-description-1”
7 “/retirement-pay”
8 “/terminally-ill”
8 “/disabilities/ptsd-secondary-incident-location-0"
8 “/new-disabilities/follow-up/7”
9 “/disabilities/ptsd-secondary-incident-date-0"
10 “/aid-and-attendance”
10 “/disabilities/ptsd-secondary-incident-description-0"
10 “/housing-situation”
12 “/disabilities/ptsd-additional-events-0"
12 “/disabilities/ptsd-incident-support-0”
13 “/new-disabilities/follow-up/6"
14 “/new-disabilities/ptsd-intro”
15 “/new-disabilities/walkthrough-781a-choice”
15 “/new-disabilities/additional-remarks-781”
15 “/training-pay”
16 “/new-disabilities/ptsd-intro-to-questions”
17 “/disabilities/ptsd-individuals-involved-0"
17 “/disabilities/ptsd-secondary-upload-supporting-sources-0”
18 “/new-disabilities/ptsd-type”
18 “/disabilities/ptsd-secondary-upload-supporting-sources-choice-0”
19 “/disabilities/ptsd-individuals-involved-questions-0"
20 “/new-disabilities/follow-up/5”
24 “/disabilities/ptsd-incident-location-0"
27 “/new-disabilities/follow-up/4”
30 “/disabilities/ptsd-incident-description-0"
34 “/separation-pay”
38 “/disabilities/ptsd-medals-0"
40 “/how-claim-exams-work”
40 “/disabilities/ptsd-incident-unit-assignment-0"
42 “/new-disabilities/follow-up/3”
44 “/review-veteran-details/military-service-history/federal-orders”
49 “/disabilities/ptsd-incident-date-0”
51 “/payment-information”
51 “/pow”
51 “/additional-disability-benefits-summary”
56 “/disabilities/orientation”
68 “/new-disabilities/walkthrough-781-choice”
72 “/supporting-evidence/summary”
74 “/contact-information”
75 “/new-disabilities/follow-up/2”
78 “/alternate-names”
106 “/new-disabilities/follow-up”
110 “/individual-unemployability”
121 “/additional-disability-benefits”
122 “/disabilities/summary”
163 “/new-disabilities/follow-up/1”
188 “/supporting-evidence/orientation”
191 “/va-employee”
276 “/review-veteran-details/combat-status”
284 “/new-disabilities”
308 “/disabilities/rated-disabilities”
331 “/veteran-information”
463 “/review-and-submit”
468 “/fully-developed-claim”
505 “/supporting-evidence/private-medical-records-release”
519 “/claim-type”
709 “/supporting-evidence/evidence-types”
777 “/review-veteran-details/military-service-history/reserves-national-guard”
826 “/supporting-evidence/additional-evidence”
948 “/new-disabilities/follow-up/0”
1019 “/supporting-evidence/va-medical-records”
1100 “/supporting-evidence/private-medical-records”
1157 “/review-veteran-details/military-service-history”
1276 “/new-disabilities/add”
```
Dec 30,2020 (within past month)
```
1,  {"/new-disabilities/ptsd-781a-additional-changes"
1,  "/new-disabilities/follow-up/12"
1,  "/new-disabilities/ptsd-intro-to-questions"
1,  "/disabilities/ptsd-incident-support-1"
1,  "/disabilities/ptsd-incident-support-additional-break-1"
1,  "/new-disabilities/ptsd-additional-incident"
1,  "/disabilities/ptsd-incident-unit-assignment-1"
1,  "/disabilities/ptsd-individuals-involved-1"
1,  "/new-disabilities/ptsd-781a-work-changes"
1,  "/disabilities/ptsd-medals-1"
1,  "/disabilities/ptsd-medals-2"
1,  "/disabilities/ptsd-secondary-authorities-0"
1,  "/new-disabilities/ptsd-781a-mental-changes"
1,  "/disabilities/ptsd-secondary-incident-support-0"
1,  "/disabilities/ptsd-secondary-other-sources-0"
1,  "/disabilities/ptsd-secondary-other-sources-help-0"
1,  "/disabilities/ptsd-secondary-upload-supporting-sources-1"
1,  "/new-disabilities/follow-up/11"
1,  "/new-disabilities/follow-up/5"
1,  "/new-disabilities/follow-up/39"
1,  "/new-disabilities/follow-up/20"
1,  "/new-disabilities/follow-up/19"
1,  "/new-disabilities/follow-up/18"
1,  "/new-disabilities/follow-up/17"
1,  "/new-disabilities/follow-up/16"
1,  "/aid-and-attendance"
2,  "/disabilities/ptsd-secondary-incident-location-0"
2,  "/new-disabilities/follow-up/15"
2,  "/disabilities/ptsd-incident-support-0"
2,  "/new-disabilities/follow-up/10"
2,  "/new-disabilities/follow-up/8"
2,  "/training-pay-waiver"
2,  "/disabilities/ptsd-781a-additional-events-0"
2,  "/supporting-evidence/evidence-types-bdd"
2,  "/retirement-pay"
2,  "/new-disabilities/follow-up/9"
3,  "/training-pay"
3,  "/terminally-ill"
3,  "/review-veteran-details/separation-location"
3,  "/disabilities/ptsd-additional-events-0"
3,  "/disabilities/ptsd-secondary-incident-unit-assignment-0"
3,  "/new-disabilities/ptsd-781a-physical-changes"
4,  "/separation-pay"
4,  "/new-disabilities/ptsd-781-upload"
4,  "/disabilities/ptsd-individuals-involved-questions-1"
4,  "/disabilities/ptsd-secondary-incident-date-0"
4,  "/new-disabilities/walkthrough-781a-choice"
5,  "/adaptive-benefits"
5,  "/disabilities/ptsd-incident-description-1"
6,  "/new-disabilities/follow-up/7"
6,  "/disabilities/ptsd-secondary-upload-supporting-sources-0"
6,  "/new-disabilities/additional-remarks-781"
6,  "/retirement-pay-waiver"
7,  "/disabilities/ptsd-secondary-incident-description-0"
7,  "/disabilities/ptsd-secondary-upload-supporting-sources-choice-0"
7,  "/housing-situation"
7,  "/supporting-evidence/service-treatment-records"
7,  "/new-disabilities/follow-up/6"
8,  "/disabilities/ptsd-incident-unit-assignment-0"
8,  "/review-veteran-details/military-service-history/federal-orders"
8,  "/disabilities/ptsd-incident-location-0"
9,  "/disabilities/ptsd-incident-date-0"
9,  "/disabilities/ptsd-individuals-involved-0"
9,  "/disabilities/ptsd-medals-0"
10,  "/new-disabilities/follow-up/4"
11,  "/additional-disability-benefits-summary"
12,  "/disabilities/ptsd-individuals-involved-questions-0"
12,  "/disabilities/orientation"
12,  "/new-disabilities/ptsd-type"
13,  "/disabilities/ptsd-incident-description-0"
15,  "/alternate-names"
15,  "/new-disabilities/walkthrough-781-choice"
16,  "/supporting-evidence/summary"
17,  "/new-disabilities/follow-up/3"
18,  "/new-disabilities/ptsd-intro"
20,  "/how-claim-exams-work"
23,  "/payment-information"
27,  "/contact-information"
29,  "/new-disabilities/follow-up"
32,  "/individual-unemployability"
35,  "/new-disabilities/follow-up/2"
38,  "/additional-disability-benefits"
40,  "/pow"
42,  "/supporting-evidence/orientation"
47,  "/disabilities/summary"
59,  "/new-disabilities/follow-up/1"
59,  "/review-veteran-details/combat-status"
60,  "/va-employee"
66,  "/veteran-information"
78,  "/disabilities/rated-disabilities"
130,  "/review-veteran-details/military-service-history"
144,  "/supporting-evidence/private-medical-records-release"
181,  "/claim-type"
181,  "/review-veteran-details/military-service-history/reserves-national-guard"
199,  "/supporting-evidence/evidence-types"
205,  "/fully-developed-claim"
271,  "/supporting-evidence/additional-evidence"
303,  "/review-and-submit"
314,  "/new-disabilities/follow-up/0"
340,  "/supporting-evidence/private-medical-records"
382,  "/supporting-evidence/va-medical-records"
433  "/new-disabilities/add"
```
[slack](https://dsva.slack.com/archives/C5AGLBNRK/p1603999885288700)
![sankeymatic_2200x1600 (1)](https://user-images.githubusercontent.com/19188/98864576-1c824500-2438-11eb-8e94-563589272217.png)
This is forms that have been updated/submitted within the last month, excluding today (as of October 29)

graph source made with http://sankeymatic.com/build/
```
Begin Form 526 [33440] Submit Form
Submit Form [33440] Success #4aa564
Begin Form 526 [3083] In Progress
In Progress [3083] Submit Form
Submit Form [3083]  Failed Submissions #e59393
Begin Form 526 [12872] In Progress
In Progress [1276] /new-disabilities/add  #f9c642
In Progress [1157] /review-veteran-details/military-service-history  #f9c642
In Progress [1100] /supporting-evidence/private-medical-records  #f9c642
In Progress [1019] /supporting-evidence/va-medical-records  #f9c642
In Progress [948] /new-disabilities/follow-up/0   #f9c642
In Progress [826] /supporting-evidence/additional-evidence   #f9c642
In Progress [777] /review-veteran-details/military-service-history/reserves-national-guard   #f9c642
In Progress [709] /supporting-evidence/evidence-types   #f9c642
In Progress [519] /claim-type   #f9c642
In Progress [505] /supporting-evidence/private-medical-records-release   #f9c642
In Progress [468] /fully-developed-claim  #f9c642
In Progress [463] /review-and-submit  #f9c642
In Progress [331] /veteran-information  #f9c642
In Progress [2774] Other   #f9c642
```



## PRs

department-of-veterans-affairs/vets-api#5217 fixed the primary issue for “/review-veteran-details/military-service-history”


## Notes

queries for digging in more
```
start_date = 7.days.ago.utc
end_date = 1.day.ago.utc
return_url = '"/new-disabilities/add"'
in_progress_forms = InProgressForm.where('updated_at BETWEEN ? AND ?', start_date.beginning_of_day, end_date.end_of_day) .where(form_id: '21-526EZ')
results = in_progress_forms.where(%Q{CAST(metadata -> 'return_url' AS text) = '#{return_url}'}).limit(10)
results.collect {|r| r.metadata}
```
