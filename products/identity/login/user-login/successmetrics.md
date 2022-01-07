## Login Success Metrics
- [OKRs & KPIs](#okrs-and-kpis)
- [Metric Sources](#metric-sources)

## OKRs and KPIs
### OKR 1 - Reliable sign-in experience to access digital services
#### Objective:
Create a reliable sign in experience on VA.gov so that users can access digital services using one of the three credential types available on VA.gov: DS Logon, MHV, ID.me

#### Key Results: 
Increase completion percentage of the sign in flow.

##### 1.30-2.27
Decrease of ~350,000 login failures on VA.gov

#### KPIs 
##### 1.30-2.27
Overall Completion percentage of the the sign in flow: **82.52%**
##### 12.22-1.22
Overall Completion percentage of the the sign in flow: **60.26%**

---

### OKR 2 -  Successful resolution of login issues
#### Objective
When veterans have difficulty logging in, allow them to resolve these issues themselves or with through the aid of the help center.

#### Key Results: 
Decrease submitted help center request issues. Dependent on coordination with help center for quantitative and qualitative issues.

#### KPIs
##### 3.4.19
- It has been reported that login help requests have been decreased up to 10x, for an average of 10-20 per day.

##### 1.22.19
- According to the help center personel, login help requests are reaching up to 200 per day.

---

### OKR 3 - Successful registration experience
#### Objective
Allow Veterans to create a new account to access VA.gov digital services. Currently, users able to create new ID.me accounts and DS Logon accounts from VA.gov. Users are not able to create new MHV accounts from VA.gov.

#### Key Results: 
Increase registration conversions.

#### KPIs 
##### 2.11-3.12
- % of users that start a registration and are successful: 53.38% 
- % of users the open modal and iniate registration: 4.51%


---

### OKR 4 - Successful identity verification experience
#### Objective
Allow Veterans to verify their identity to gain access VA.gov digital services that require authorization. Currently, Veterans are able to create new ID.me accounts and DS Logon accounts from VA.gov. Veterans are not able to create new MHV accounts from VA.gov and must go to [My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home) to do so.

#### Key Results:
Increase LOA3 converstion rate.

#### KPIs 
KPIs are provided weekly by IDme on verification success rates in the [#vfs-analytics](https://dsva.slack.com/channels/vfs-analytics) channel in DSVA slack. 

##### 12/16-12/22
Total Identity Verification Attempts: 7,914
- Veried - 66.64%
- Unsuccessful - 23.91%
- Abandoned after starting - 3.39%
- Abandoned before starting - 6.07%

---

### OKR 5 - Successful multi-factor authentication experience
#### Objective
Allow Veterans to secure their accounts by requiring sign-in confirmation through a second device. 

#### Key Result
This objective is currently fulfilled as VA.gov is experiencing exceptional MFA success rates. Once we have [cross-domain analytics]() implemented, we can revisit abandonments or issues here to see where we could make any additional progress.

#### KPIs
Success rate for MFA (9/2018):
1. When mandatory: 98.9%
2. When optional: 97.2%

## Metric Sources
### Google Analytics
- [Success funnels for login & registration](https://analytics.google.com/analytics/web/?authuser=0#/my-reports/U_bnaGd1QdWQwS0e-J0pOQ/a50123418w177519031p184624291/_u.dateOption=last30days&_r.tabId=81/)
- [Login usage dashboard](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p184624291/_u.dateOption=last30days&_.useg=userlSoCJs-8RzS8ITs0kUtVPA,userm6kH3yFDRuS28OYZ55HxFA&overview-graphOptions.primaryConcept=analytics.totalVisitors/)
- [Login errors (user-facing)](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184624291/_u.dateOption=last7days&_.useg=builtin1&explorer-segmentExplorer.segmentId=analytics.eventLabel&_r.drilldown=analytics.eventCategory:Sign-on&explorer-table.plotKeys=%5B%5B%22login-error-user-fetch%22%5D%5D&explorer-table.rowCount=10&explorer-table.filter=login-error&explorer-table-dataTable.sortColumnName=analytics.totalEvents&explorer-table-dataTable.sortDescending=true/)
- [Login flow chart](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/analytics/logingaflowchart.md)
- [Login-specific GA events (total list)](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.dateOption=last30days&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.eventCategory:Sign-on,analytics.eventAction:Login%20-%20vagovprod/)


### Sentry
- [Login & identity-related Sentry errors (for debugging)](http://sentry.vetsgov-internal/vets-gov/platform-api-production/?query=is%3Aunresolved+assigned%3Ame)

### Grafana
We're able to track granular changes in errors with the following Grafana charts:
- [VA.gov Login](http://grafana.vetsgov-internal/dashboard/db/site-authentication?orgId=1&from=1548694141953&to=1549903741953)
- [MVI](http://grafana.vetsgov-internal/dashboard/db/mvi?orgId=1&from=1548565200000&to=1549904130110)

