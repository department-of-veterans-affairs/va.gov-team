
# Debt Resolution Staging Users by Product

# Staging URLS
Product  | Staging URL |Use Cases|
|--|--|--|
| Combined Debt Portal| https://staging.va.gov/manage-va-debt/summary| [Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/use_cases.md)|
| Benefit Overpayment Debts |https://staging.va.gov/manage-va-debt/summary/debt-balances
| Current Copay Balances |https://staging.va.gov/manage-va-debt/summary/copay-balances
|FSR| https://staging.va.gov/manage-va-debt/request-debt-help-form-5655/introduction|

---
# Staging Users for Debt Portal 

| User | VBA - Benefit Overpayments                                                                               | VHA - Medical Copays                                                                                                                |
|------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| 1    | Chapter 25 education benefit with 1st and 2nd demand letters; a Post 9/11 GI Bill with 1st demand letter | No copays within the past 6 months                                                                                                  |
| 3    |                                                                                                          |                                                                                                                                     |
| 11   | 1 outstanding debt with 1st demand letter                                                                | 1 copay with 1 statement                                                                                                            |
| 14   | 1 Post 9/11 GI bill with 1st demand letter                                                               | No copays within the past 6 months                                                                                                  |
| 16   |                                                                                                          | Has multiple copays                                                                                                                 |
| 36   | None                                                                                                     | 2 copays + balance may be overdue message and 2 statements available on first copay; 2nd copay - 1 statement available for download |
| 38   | None                                                                                                     | None                                                                                                                                |
| 39   | None; Message: You don't have any current VA debt message                                                | 2 copays; 1st one - 1 statement; 2nd one - 1 statement available for download                                                       |
| 56   | Empty State:Veteran has neither a copay bill nor debt                                                    | Empty State:Veteran has neither a copay bill nor debt                                                                               |
| 80   | None                                                                                                     | Veteran has one active medical copay bills from one facility with 1 statement available for download                                |
| 81   | Veteran has a benefit overpayment debt                                                                   | Veteran has one active medical copays at multiple facilities                                                                        |
| 82   | None                                                                                                     | 1 copay with 1 statement available for download                                                                                     |
| 83   | None                                                                                                     | 1 copay with 1 statement available for download                                                                                     |
| 84   | None                                                                                                     | 1 copay with 1 statement available for download                                                                                     |
| 85   | None                                                                                                     | 1 copay with 1 statement available for download                                                                                     |
| 86   | Empty State:Veteran has neither a copay bill nor debt                                                    | Empty State:Veteran has neither a copay bill nor debt                                                                               |
| 87   | None                                                                                                     | 1 copay with 1 statement available for download                                                                                     |
| 88   | None                                                                                                     | 1 copay with 1 statement available for download                                                                                     |
| 89   |                                                                                                          |                                                                                                                                     |
| 90   | Empty State:Veteran has neither a copay bill nor debt                                                    | Empty State:Veteran has neither a copay bill nor debt                                                                               |
| 91   | Empty State:Veteran has neither a copay bill nor debt                                                    | Empty State:Veteran has neither a copay bill nor debt                                                                               |
| 92   | None                                                                                                     | 1 copay with 2 statements available for download                                                                                    |
| 93   | Empty State:Veteran has neither a copay bill nor debt                                                    | Empty State:Veteran has neither a copay bill nor debt                                                                               |
| 94   | None                                                                                                     | 1 copay available for download                                                                                                      |
| 95   | Empty State:Veteran has neither a copay bill nor debt                                                    | Empty State:Veteran has neither a copay bill nor debt                                                                               |
| 228  | 2 Benefit Overpayments (one is comp and pen with offset message and one is education)                    | None                                                                                                                                |
</br>
</br></br>

## Debt Resolution Staging User Notes
- Users 80 thru 95 are reserved for the Debt Resolution Team
- Debts will be added to existing users via the mockdata repo


</br>
</br></br>

❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖

### Medical Device Reordering Tool (mDOT) Staging Users
[Staging URL](https://staging.va.gov/health-care/order-hearing-aid-batteries-and-accessories/)

**Note:** *Do not **submit** the order form! The mock data will be distorted because items can only be reordered once every 6 months!*
 |Staging User  |Use Case|
|--|--|
| test-user-14 |  Veteran who can reorder medical devices.
<br/>

</br>
</br></br>

❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖



## Test User Dashboard (TUD)
- Is behind the SOCKS proxy, so you have to have that setup in order to use TUD.
- To use TUD, start SOCKS, then go to [https://tud.vfs.va.gov/](https://tud.vfs.va.gov/) and login with GitHub.
- [https://depo-platform-documentation.scrollhelp.site/developer-docs/Using-the-Test-User-Dashboard.1910702416.html](https://depo-platform-documentation.scrollhelp.site/developer-docs/Using-the-Test-User-Dashboard.1910702416.html)



