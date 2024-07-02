# Referrals (CC Consults)

## Integration plan 

Last updated: July 2, 2024

- Get all approved CC Consults for PT at Los Angeles, CA (Tri-West CCN) and Salisbury, NC (Optum CCN) that have not been scheduled using vista-api-x.
- VEText could make this available to us, and then VistA RPC would be used to get CC Consult data from vista-api-x.
- vista-api-x: https://code.va.gov/catalog/default/api/vista-api-x
- [CC Consult example (VA Network)](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Appointments/Projects/2024%20Community%20Care%20Digital%20Self-Scheduling/CC%20Consult%20Example%20Sensitive.docx?d=we18df45f71a64a4598fb43bb9f58c15a&csf=1&web=1&e=cOAAfw)
- VistA RPCs are somewhere in:
   - https://vivian.worldvista.org/dox/PackageComponents.html
   - https://vivian.worldvista.org/vivian-data/8994/8994-351.html
- **Immediate next step:** While waiting for Shane and Stephen to return after July 15, we could begin mocking this based on the data in the email that Stephen forwarded to Simi and Ben.

## HSRM (CCRM) documentation 

- [CCRA/HSRM User Guide with screenshots of referral data fields; 2024 (SharePoint)](https://dvagov.sharepoint.com/sites/vacovha/DUSHCC/DC/DO/CI/CCRA/Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvacovha%2FDUSHCC%2FDC%2FDO%2FCI%2FCCRA%2FDocuments%2FHSRM%20Build%2024.0%20Files%2Fccra_hsrm_va_end_user_guide_release_24.0.pdf&parent=%2Fsites%2Fvacovha%2FDUSHCC%2FDC%2FDO%2FCI%2FCCRA%2FDocuments%2FHSRM%20Build%2024.0%20Files)
- [HSRM data and field definitions; 2021 (SharePoint)](https://dvagov.sharepoint.com/sites/VHACCPIR/KMSVID/KMS%20Documents/Forms/Docs.aspx?id=%2Fsites%2FVHACCPIR%2FKMSVID%2FKMS%20Documents%2FHSRM%20%28CCRA%29%2FData%20Entities%20and%20Field%20Definitions-v25-20210519.pdf&parent=%2Fsites%2FVHACCPIR%2FKMSVID%2FKMS%20Documents%2FHSRM%20%28CCRA%29)

## Functional requirements  

### Task card and provider search 

From the referral, at a minimum (not including Veteran information), we will know the following about the requested referral/appointment: 

| Data  |  Example  | How the data could be used |
| ------------- | ------------- | -------------
| Type of care | Sleep medicine | Veterans will not be able to change the type of care OR filter by sub-specialty |
| Referral start date | 00/00/0000 | Triggers VEText notification and when to show the referral task card in Appointments list |
| Referral expiration | 00/00/0000 | Show the expiration date in referral task card in Appointments list and defines when the task can longer be started |

### Intro page or task within the scheduling flow and provider search 

And, we'll know and, potentially, be able to match and display providers that meet the Veteran's preferences, which are accessible in HSRM:

| Field  |  Example  | How the data could be used | Required | Notes |
| ------------- | ------------- | ------------- | ------------- | -------------
| Gender preference | Female | Ask Veteran to confirm their preference or set gender filter default value to their preference | Optional |  |
| Facility | VACCN TEST FACILITY | Ask Veteran to confirm the referral information OR find other providers, then show appropriate provider results | Optional | When facility is available, so is facility location |
| Facility location | VACCN TEST FACILITY-156 WILLIAM LANE FL 6 NEW YORK, NEW YORK 10000-000000000X |  | Optional |  |
| Provider name | VACCN TEST FACILITY |  | Optional | Provider name is sometimes available with facility and facility location; provider name values are inconsistent, e.g., may be a clinic or care team name |
