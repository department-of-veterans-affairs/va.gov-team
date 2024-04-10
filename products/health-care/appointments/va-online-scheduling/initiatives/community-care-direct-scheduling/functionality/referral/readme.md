# Referral documentation (CCRA and HSRM)

## Documentation 

- [High-level business requirements and data fields of interest from CCRA/HSRM in regards to referral data; written from the perspective for a scheduler (XLS)](https://github.com/department-of-veterans-affairs/va.gov-team/files/14936442/ccra_eps_final_nsrreqt_table.xlsx)
- [CCRA/HSRM User Guide with screenshots of referral data fields; 2024 (SharePoint)](https://dvagov.sharepoint.com/sites/vacovha/DUSHCC/DC/DO/CI/CCRA/Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvacovha%2FDUSHCC%2FDC%2FDO%2FCI%2FCCRA%2FDocuments%2FHSRM%20Build%2024.0%20Files%2Fccra_hsrm_va_end_user_guide_release_24.0.pdf&parent=%2Fsites%2Fvacovha%2FDUSHCC%2FDC%2FDO%2FCI%2FCCRA%2FDocuments%2FHSRM%20Build%2024.0%20Files)
- [HSRM data and field definitions; 2021 (SharePoint)](https://dvagov.sharepoint.com/sites/VHACCPIR/KMSVID/KMS%20Documents/Forms/Docs.aspx?id=%2Fsites%2FVHACCPIR%2FKMSVID%2FKMS%20Documents%2FHSRM%20%28CCRA%29%2FData%20Entities%20and%20Field%20Definitions-v25-20210519.pdf&parent=%2Fsites%2FVHACCPIR%2FKMSVID%2FKMS%20Documents%2FHSRM%20%28CCRA%29)

## Tl;dr to inform design 

From the referral, at a minimum (not including Veteran information), we will know the following about the requested referral/appointment: 

| Data  |  Example  | How the data could be used |
| ------------- | ------------- | -------------
| Type of care | Sleep medicine | Veterans will not be able to change the type of care OR filter by sub-specialty |
| Referral start date | 00/00/0000 | Triggers VEText notification and when to show the referral task card in Appointments list |
| Referral expiration | 00/00/0000 | Show the expiration date in referral task card in Appointments list and defines when the task can longer be started |

And, we'll know and, potentially, be able to match and display providers that meet the Veteran's preferences, which are accessible in HSRM:

| Field  |  Example  | How the data could be used | Required | Notes |
| ------------- | ------------- | ------------- | ------------- | -------------
| Gender preference | Female | Ask Veteran to confirm their preference or set gender filter default value to their preference | Optional |  |
| Facility | VACCN TEST FACILITY | Ask Veteran to confirm the referral information OR find other providers, then show appropriate provider results | Optional | When facility is available, so is facility location |
| Facility location | VACCN TEST FACILITY-156 WILLIAM LANE FL 6 NEW YORK, NEW YORK 10000-000000000X |  | Optional |  |
| Provider name | VACCN TEST FACILITY |  | Optional | Provider name is sometimes available with facility and facility location; provider name values are inconsistent, e.g., may be a clinic or care team name |
