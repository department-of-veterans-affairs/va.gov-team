
# Debt Resolution Staging Users by Product

### Medical Device Reordering Tool (mDOT) Staging Users
[Staging URL](https://staging.va.gov/health-care/order-hearing-aid-batteries-and-accessories/)

**Note:** *Do not **submit** the order form! The mock data will be distorted because items can only be reordered once every 6 months!*
 |Staging User  |Use Case|
|--|--|
| test-user-14 |  Veteran who can reorder medical devices.
<br/>

### Benefit Debt Portal Staging Users
[Staging URL](https://staging.va.gov/manage-va-debt)
 |Staging User  |Use Case|
|--|--|
| test-user-1 |  ?
|test user-228  |?
<br/>

### Financial Status Report (FSR) Staging Users
[Staging URL](https://staging.va.gov/manage-va-debt) 
Staging User  |Use Case|
|--|--|
| test-user-1| ?
| test user-228 |?
<br/>

### Medical Copay Tool (MCP) Staging Users
[Staging URL](https://staging.va.gov/health-care/pay-copay-bill/your-current-balances/%5D%28https://staging.va.gov/health-care/pay-copay-bill/your-current-balances/) 
|Staging User  |Use Case|
|--|--|
| test-user-80 |  Veteran has active medical copay bills from one facility
| test user-81  | Veteran has active medical copays at multiple facilities
| test user-82  | Veteran has a resolved/paid medical copay balance from one facility
| test user-84  | Veteran has a mixture of active and resolved copay balances from multiple facilities
| test user-86  | Veteran has no history of medical copays
| test user-87  | Veteran is not enrolled in VA health care
<br/>

### Combined VA Debt Portal Staging Users
Staging User  |Use Case|
|--|--|
| test-user-##| TBD
| test user-## |TBD

<br/>
<br/>

## Debt Resolution Staging User Notes
 - Users 80 thru 95 are reserved for the Debt Resolution Team 
 - Debts will be added to existing users via the mockdata repo

## Test User Dashboard (TUD)
- Is behind the SOCKS proxy, so you have to have that setup in order to use TUD.
- To use TUD, start SOCKS, then go to [https://tud.vfs.va.gov/](https://tud.vfs.va.gov/) and login with GitHub.
- [https://depo-platform-documentation.scrollhelp.site/developer-docs/Using-the-Test-User-Dashboard.1910702416.html](https://depo-platform-documentation.scrollhelp.site/developer-docs/Using-the-Test-User-Dashboard.1910702416.html)
