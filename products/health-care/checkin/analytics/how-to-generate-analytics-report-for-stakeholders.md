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

