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

## Data to Generate

| Product Name | External System Dependencies | Scheduled and Unscheduled downtime Strategy | Downtime  | Customer Satisfaction score Avg |
|:------------|:---------------------|:----------------------|:---------------------|:--------------------|
|eCheck-In (pre check-in and travel claim included) | Upstream: VeText; Downstream: vets-api, vets-website, VA Notify, VSE, VSE-CS | 1) VeText doesn't send 45MR, 2) VeText responds with unavailable message. 3) eCheck-in displays maintenance window, 4) Post messsage in DSVA to alert OCTO | TBD | TBD |


| Transaction Name  | Count  | Error %  | Error Handling   | Latency (50/90p)  |
|:------------|:---------------------|:----------------------|:---------------------|:--------------------|
| Check-In Completed | TBD | TBD % total "complete check-in" api call failures | Warning alert to Veteran: Something went wrong, see staff to check in. | TBD sec |
| Pre Check-In Completed | TBD | TBD % total "complete pre-check-in" api call failures. |	Error alert to Veteran: Something went wrong, call your VA health facility, you can still check in online on the day of your appointment.	| TBD sec
| Mileage-only travel submission in Check-In | TBD | % total "vets-api call to BTS3" api call failures. |	Warning alert to Veteran: Something went wrong, you can still file within 30 days. | TBD sec

**Pre Check-in Usage**:
- Audience: TBD unique sessions verified their identity; TBD% verification rate
- Conversion: TBD% (verified their identity to completing pre check-in)
- Submissions: TBD
- Submission failures: TBD total "complete pre-check-in" api call failures; TBD% total
 
**Check-In usage**:
- Audience: TBD unique sessions verified their identity; TBD% verification rate
- Conversion: TBD% (verified their identity to completing check-in)
- Submissions: TBD
- Submission failures: TBD total "complete check-in" api call failures; TBD% total
 
**Travel Claim via check-in**:
- Audience: TBD unique pageviews of "Do you want to file?"; TBD% answered "Yes"
- Conversion: TBD%
- Submissions: TBD
- Submission failures: TBD total "vets-api call to BTS3" api call failures; TBD% total
