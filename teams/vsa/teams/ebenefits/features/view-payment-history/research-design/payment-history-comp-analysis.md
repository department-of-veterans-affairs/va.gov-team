# eBenefits Payment History comparative analysis
**VSA eBenefits Team | March 2020**

[James Adams](jadams@governmentcio.com)

## Problem
#### eBenefits Payment History feature
The fundamental problem solved by the Payment History feature is to provide a historical view of payment details to the Veteran or beneficiary. After signing in to eBenefits using DSLogon, users can view their Payment History arranged in two tables, one for payments made, the other for payments returned. Some information is available to users for only six years.

From the Payment History screen, users can access contact info, and ultimately direct deposit links.

#### Commercial financial account apps
Commercial banks, brokerages, pay apps, etc. also need to provide historical views of account transactions to their users. Typically deposits, payments and withdrawals are displayed in a tabular arrangement. Authentication is required to access account information. Some account information has limited availability. 

Commercial apps have a wide variety of account features available to users, usually via a drawer, dropdown or accordion.

## User
#### eBenefits Payment History feature
The key users of the Benefits Payment History feature are Veterans or beneficiaries who are receiving VA payments for diasability, pension or education.

#### Commercial financial account apps
A very large number of Americans use commercial financial apps--possibly 80% or more. Considering how common and pervasive such apps are, what can be said with certainty is users have accounts and internet access. 

## Solution
#### eBenefits Payment History feature
The eBenefits Payment History feature allows Veterans to view a record of several types of payments online as well as any "returned" payments. If you’re a Veteran, you’ll see a history of your past VA payments for:

- Disability compensation
- Pension benefits
- Education benefits

If you’re the survivor of a Veteran or service member, you’ll see a history of your past VA payments for:

- Survivors pension benefits
- Survivors' and Dependents' Educational Assistance (Chapter 35 benefits)
- Dependency and Indemnity Compensation (DIC)

The fundamental problem solved by the Payment History feature is providing a historical view of payment details to the Veteran or beneficiary. After signing in to eBenefits using DSLogon, users can view their Payment History arranged in two tables, one for payments made, the other for payments returned. The table columns include: 

- Date
- Amount
- Type
- Method

Clicking payment dates will link to a corresponding details page where bank name and account number are displayed in addition to the info above. The initial sort is by date, latest first.

To allow the user to refine their view of payment tables, View Payments provides two features. The first is a drop-down timeframe filter that allows selection of three, six, or twelve months, or all. The other is sortable columns that display information in an ascending order with the first click, and descending order when the column header is clicked again. This feature has bugs that sometimes cause columns to sort incorrectly.

**Responsiveness:** The current implementation of Payment History on eBenefits is fully-responsive with tables scaling down to one-column "cards" and stacking vertically. Compared with the corresponding desktop view, most or all information and feature are available. Pages can be extremely long with considerable scrolling required to view relatively small amounts of information.

The current table component/styling in VA.gov seems to be incompletely responsive, with rows simply compressing to the narrow widths of mobile viewports.

#### Commercial financial account apps
Commercial banks, brokerages, pay apps, etc. provide historical views of account transactions to their users, typically deposits, payments and withdrawals. These apps additionally provide a wide range of other features, but for the purpose of this comparison, the focus will be account history. All financial apps and website provide a tabular historical view of transaction information with transactions occurring in rows, and details of each transaction occurring in columns, which are often sortable. Some rows expand or link on click to reveal further details about a transaction. Typically, these tables have search and filtering functions to refine the user's view. All modern apps are fully responsive.

With rows representing individual transactions, columns typically include:

- Date
- Description
- Amount
- Balance

Other information displayed may include: 

- Category
- Status
- Payee
- Account

Commercial financial apps typically include several features to allow users to change and refine the view of their transactions:

- Search
- Date range
- One-click filters
- Column sorting (usually date)
- Drill-down or expansion details

**Responsiveness:** Commercial financial apps are fully-responsive. Like eBenefits, tables scale-down to one-column "cards" and stack vertically. Compared with the corresponding desktop view, most or all information and feature are available. Consequently, pages are very long and require considerable scrolling.

## Conclusion
The current version of the eBenefits Payment History feature compares favorably to commercial financial account apps. The eBenefits screen aligns nearly 1:1 with the standard presentation and features found in commercial apps. Users will find a high correspondence with their bank apps, and will likely encounter no significant stepping from commercial apps to the Payment History feature--on either desktop or mobile.

One caution is that the current VA.gov table styling/component has potential issues. If all current eBenefits feature are to be maintained and correctly implemented, support for responsive screen design, and fully functional sorting must be confirmed.

