# How to Generate an Analytics Report for VA Stakeholders

These instructions outline how to generate and send an analytics report to our VA stakeholders

## Frequency
- Quarterly
    - Jan-Mar
    - Apr-Jun
    - Jul-Sep
    - Oct-Dec
 
## Delivery
- Via VA Email using this [Outlook template]()
- Distribution List
  - Kay Lawyer
  - Kristen McConnel
  - Stephen Barrs
- CC List
  - Lori Pusey
  - Anita Halici
  - Ben Brasso

## Data to Send (in this format)

| Product Name | External System Dependencies | Scheduled and Unscheduled downtime Strategy | Downtime  | Customer Satisfaction score Avg |
|:------------|:---------------------|:----------------------|:---------------------|:--------------------|
| eCheck-In (pre check-in and travel claim included) | Upstream: VeText; Downstream: vets-api, vets-website, VA Notify, VSE, VSE-CS | 1) VeText doesn't send 45MR, 2) VeText responds with unavailable message. 3) eCheck-in displays maintenance window, 4) Post messsage in DSVA to alert OCTO | TBD[^1] | TBD[^2] |


| Transaction Name  | Count  | Error %  | Error Handling   | Latency (50/90p)  |
|:------------|:---------------------|:----------------------|:---------------------|:--------------------|
| Check-In Completed | TBD[^3] | TBD[^4] % total "complete check-in" api call failures | Warning alert to Veteran: Something went wrong, see staff to check in. | TBD[^5] sec |
| Pre Check-In Completed | TBD[^6] | TBD[^7] % total "complete pre-check-in" api call failures. | Error alert to Veteran: Something went wrong, call your VA health facility, you can still check in online on the day of your appointment.	| TBD[^8] sec
| Mileage-only travel submission in Check-In | TBD[^9] | TBD[^10] % total "vets-api call to BTS3" api call failures. |	Warning alert to Veteran: Something went wrong, you can still file within 30 days. | TBD[^11] sec

**Pre Check-in Usage**:
- Audience: TBD[^12] unique sessions verified their identity; TBD[^13] % verification rate
- Conversion: TBD[^14] % (verified their identity to completing pre check-in)
- Submissions: TBD[^15]
- Submission failures: TBD[^16] total "complete pre-check-in" api call failures; TBD[^17] % total
 
**Check-In usage**:
- Audience: TBD[^18] unique sessions verified their identity; TBD[^19] % verification rate
- Conversion: TBD[^20] % (verified their identity to completing check-in)
- Submissions: TBD[^21]
- Submission failures: TBD[^22] total "complete check-in" api call failures; TBD[^23] % total
 
**Travel Claim via check-in**:
- Audience: TBD[^24] unique pageviews of "Do you want to file?"; TBD[^25] % answered "Yes"
- Conversion: TBD[^26] %
- Submissions: TBD[^27]
- Submission failures: TBD[^28] total "vets-api call to BTS3" api call failures; TBD[^29] % total

[^1]: Value 'Veteran facing - Overall error rate (%) (Actual, not Objective)' from the [SLO Dashboard](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1709658513005&to_ts=1712250513005&live=true) after filtering for the last 3 months

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/90ef1b33-a1ef-4f8c-b6d2-7ddc8bcd3a93)

[^2]: To be determined, we are just getting Medallia set up; once we do we will have a quarterly score

[^3]: Value 'TOTAL Check Ins (Unique)' from the [eCheck-in PCI GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/1iHzB1FJTq6wHfngzN0LQg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)
after filtering for the 3 months for the previous quarter 

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/427ba82e-a468-4960-be0b-3daebd3adee0)

[^4]: Value 'TOTAL vets-api fails when attempting to check in (Unique)' divided by value 'TOTAL Check Ins (Unique)' and multiplied by 100 from the [eCheck-in PCI GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/1iHzB1FJTq6wHfngzN0LQg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) after filtering for the 3 months for the previous quarter 

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/79964c1b-8249-491f-94be-ec14bc6106cd)
    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/62365763-c25f-4e15-9a92-a2ad9e045d56)

[^5]: Value 'Check Veteran In - Duration from when a Veteran clicks 'Check in' and receives confirmation (p95) (Acutal, not Objective)' from the [SLO Dashboard](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1709658513005&to_ts=1712250513005&live=true) after filtering for the 3 months for the previous quarter 

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/50f6ecf6-0850-4a50-bf3f-4c56bc07bcda)

[^6]: Value 'Completed Pre Check Ins (Unique)' from the [Pre-Check-in (PCI) GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)
after filtering for the 3 months for the previous quarter 

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/38e5adac-9664-49a3-8bb0-8b4d9660acf0)
    
[^7]: Value 'API Request Fails When Attempting to Complete Pre Check In (Non Unique)' divided by value 'Completed Pre Check Ins (Unique)' multiplied by 100 from the [Pre-Check-in (PCI) GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) after filtering for the 3 months for the previous quarter 

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/0c15cd8c-3846-4fe5-8dd9-2afdf83d733f)
    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/d3fb7ed8-04c4-4c9c-bd45-db942f1ab8d1)

[^8]: Value 'Pre Check In - Duration from when a Veteran completes 'pre-check-in' and receives confirmation (p95) (Acutal, not Objective)' from the [SLO Dashboard](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1709658513005&to_ts=1712250513005&live=true)

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/220fa95a-08c3-45be-8814-93fe830d1ec8)

[^9]: Value 'TOTAL # of BT claims from eCheck-in successfully received by BTS3' from the [Bene Travel Claims from eCheck-in Report Dashboard](https://analytics.google.com/analytics/web/#/dashboard/-LnfQTl3ShO8HbLIPQ7ZEQ/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) after filtering for the 3 months for the previous quarter

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/c05b9c95-b446-45fa-8abb-aecf7596d932)

[^10]: Value 'BTSSS API Error' divided by the sum of values 'BTSSS API Success' and 'BTSSS API Error' from the [Check In (Travel Claims) Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-3a95d2603bfb8826abb8aa81a04efd03?fromUser=true&refresh_mode=sliding&tpl_var_env%5B0%5D=eks-prod&from_ts=1704477923003&to_ts=1712253923003&live=true) after filtering for past 3 months

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/dba67e8f-0151-46e1-a5bd-a99ade7c099f)

[^11]: Value 'Check Veteran In - Duration from when a Veteran clicks 'Check in' and receives confirmation (p95) (Acutal, not Objective)' from the [SLO Dashboard](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1709658513005&to_ts=1712250513005&live=true) after filtering for the 3 months for the previous quarter (NOTE: same value as number 5]

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/50f6ecf6-0850-4a50-bf3f-4c56bc07bcda)
    
[^12]: Value 'Successful Pre Check In ID Authentication (Unique)' from the [Pre-Check-In (PCI) Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) after filtering for the 3 months for the previous quarter

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/2e4da988-fb38-4e39-a7e0-2c1d2cfa29c7)

[^13]: Value 'Successful Pre Check In ID Authentication (Unique)' divided by value 'Started Pre Check In ID Authentication (Unique)' from the [Pre-Check-In (PCI) Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) after filtering for the 3 months for the previous quarter

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/ddbffe1b-48fd-4fb1-8b4d-3ceb2067a3db)
    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/c81e6eaf-1df8-4b32-8b90-5d090654cb80)

[^14]: Value 'Completed Pre Check Ins (Unique)' divided by value 'Successful Pre Check In ID Authentication (Unique)' from the [Pre-Check-In (PCI) Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) after filtering for the 3 months for the previous quarter

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/cf85cc88-7580-484a-b0b9-acba81451d8e)
    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/dddccc5b-2790-4c8b-b25f-7e0db8fd2e81)

[^15]: Value 'Completed Pre Check Ins (Unique)' from the [Pre-Check-in (PCI) GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)
after filtering for the 3 months for the previous quarter 

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/38e5adac-9664-49a3-8bb0-8b4d9660acf0)
    
[^16]: Value 'Completed Pre Check Ins (Unique)' from the [Pre-Check-in (PCI) GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) after filtering for the 3 months for the previous quarter 

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/0c15cd8c-3846-4fe5-8dd9-2afdf83d733f)    

[^17]: Value 'API Request Fails When Attempting to Complete Pre Check In (Non Unique)' divided by value 'Completed Pre Check Ins (Unique)' from the [Pre-Check-in (PCI) GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) after filtering for the 3 months for the previous quarter 

    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/0c15cd8c-3846-4fe5-8dd9-2afdf83d733f)
    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/d3fb7ed8-04c4-4c9c-bd45-db942f1ab8d1)
    
[^18]:
[^19]:
[^20]:
[^21]:
[^22]:
[^23]:
[^24]:
[^25]:
[^26]:
[^27]:
[^28]:
[^29]:
