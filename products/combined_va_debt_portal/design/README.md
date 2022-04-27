# Combined VA Debt Portal Design Folder

In this folder, you will find documentation about design efforts related to the Combined VA Debt Portal.
This initiative seeks combine the Medical Copay Tool and the VBA Debt Portal.

## User flows / Low fidelity wireflows

_Sprint 66-68_

### Related documentation

- [User flow process](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/combined_va_debt_portal/design/user-flows)

## Prototype and use cases

The prototype containing all use cases and states can be accessed in UXPin. For more information about use cases, please refer to the outline below:

### Debt and bills overview page
This page provides the authenticated Veteran a snapshot overview of their VA debts and health care copay bills. Similar to a credit card statement, this page shows a total oustanding amount for debts and bills. 

- [Veteran has both VA debts and copay bills](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages//simulate/no-panels?mode=i)
- [Veteran only has copays](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149492807/simulate/no-panels?mode=i)
- [Veteran only has VA debts](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149492808/simulate/no-panels?mode=i)
- [Veteran doesn't have VA debts or copays](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149492806/simulate/no-panels?mode=i)
- [Debt API (VBA) 404](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149503317/simulate/no-panels?mode=i)
- [Copay API (VHA) 404](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149503316/simulate/no-panels?mode=i)

### Debt list 
This page breaks down the Veteran's debts into specific debt types. These debt types can include: Post-9/11 GI Bill (CH 33), CH 34, CH 35, or Compensation & Pension. Each debt type will also have a status indicating any action the Veteran needs to take on their debt. Additionally, if the Veteran navigates directly to this page and bypasses the overview page, they'll be notified of available copay bills if applicable. 

- [Veteran has VA debts and copay bills](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148307609/simulate/no-panels?mode=i)
- [Veteran only has copays](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149534494/simulate/no-panels?mode=i)
- [Veteran only has VA debts](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148546854/simulate/no-panels?mode=i)
- [Veteran doesn't have VA debts or copays](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149534493/simulate/no-panels?mode=i)
- [Debt API (VBA) 404](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149376499/simulate/no-panels?mode=i)
- [Copay API (VHA) 404](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149376498/simulate/no-panels?mode=i)
- [Both APIs 404](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149376500/simulate/no-panels?mode=i)

### Debt detail 
This page already exists as part of the VBA Debt Portal MVP. 

- [Example of a debt detail page](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148307615/simulate/no-panels?mode=i)

### Debt letter download 
Veterans are able to download debt notification letters related to their VBA debts. This page already exists as part of the VBA Debt Portal MVP. However, it's been redesigned to display letters in a more accessible list view rather than table layout. 

- [Last 30 days - Post-9/11 GI Bill example](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149089100/simulate/no-panels?mode=i)
- [Last 30 days - different dates](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149122561/simulate/no-panels?mode=i)
- [Expanded to access older letters](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149089099/simulate/no-panels?mode=i)

### Copay list
This page breaks down the Veteran's copay bills by facility. As of 4/27/2022, this information is updated every 30 days as a statement is sent. Additionally, if the Veteran navigates directly to this page and bypasses the overview page, they'll be notified of available VA debts if applicable. 

- [Veteran has VA debts and has a copay balance at 1 facility](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148524984/simulate/no-panels?mode=i)
- [Veteran only has a copay balance at 1 facility](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148524983/simulate/no-panels?mode=i)
- [Veteran has no debts and copay balances at multiple facilities](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148559873/simulate/no-panels?mode=i)
- [Veteran only has VA debts](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149285599/simulate/no-panels?mode=i)
- [Veteran doesn't have VA debts or copays](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149285598/simulate/no-panels?mode=i)
- [Debt API (VBA) 404](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149423131/simulate/no-panels?mode=i)
- [Copay API (VHA) 404](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149423132/simulate/no-panels?mode=i)
- [Both APIs 404](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149423133/simulate/no-panels?mode=i)

### Copay balance detail 
This page already exists as part of the Medical Copay Tool's MVP 

- [Example of a copay balance detail page](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148307639/simulate/no-panels?mode=i)

### HTML copay statement
Veterans are able to access and download the last 6 months of copay bills from each facility. The Medical Copay Tool's MVP allows Veterans to download PDF statements. However, we're now providing an HTML version of each statement so the bills are in a more accessible format. Veterans can still download the PDF statements. 

- [Example of an HTML statement](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148307650/simulate/no-panels?mode=i)
