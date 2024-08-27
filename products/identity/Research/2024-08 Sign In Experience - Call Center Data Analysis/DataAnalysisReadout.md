# **Service Desk Call Data Analysis - Sign-in Experience**
Office of the CTO Digital Experience (OCTO-DE), Identity Experience Team

Date: 08/27/2024

[Charlye Tran](mailto:charlye@bluetiger.digital) - charlye@bluetiger.digital

## **Background**

The Identity team owns the sign-in experience for Veterans logging into VA.gov and VA Mobile App. We connect veterans to their accounts on both portals using their sign-in credentials that are passed on from a CSP (e.g. ID.me, Login.gov, MHV, and DSLogon). We own several products that help us achieve a positive user-friendly experience which encompasses the universal sign in page, Terms of Use page, and recently, all sign in flows from any page on VA.gov including the sign-in widgets.

## **Methodology** 

In order to continuously improve the sign-in experience, we need to understand pain points veterans encounter when logging into their accounts. Previously, we examined Google Analytics data and Medallia data. For this round of analysis, we examined call center data from the VA support desk (My411). These calls took place between Jan 1 and April 30, 2024 which included over 28,000 calls after filtering all call data by these key terms:
-   Navigation Issues | Account Sign In
-   Navigation Issues | Identity
-   Inability to Sign In | Two-factor authentication
-   Inability to Sign In | Confirmation Email Issue
-   Inability to Sign In | EVSS Errors
-   Identity Verification Issues | ID.me
-   Identity Verification Issues | DS Logon
-   Identity Verification Issues | My HealtheVet
-   Identity Verification Issues | Login.gov
-   Forgot Password | DS Logon
-   Forgot Password | ID.me
-   Forgot Password | My HealtheVet
-   Forgot Password | Login.gov
-   Unable to Update Information | Profile - Direct Deposit Information

## **Questions to be Answered** 
-   What kinds of calls does the support desk receive related to the sign-in experience?
    
-   What types of issues do Veterans encounter with their accounts in particular signing/logging in?
    
-   Are there any patterns/trends where we might intervene to provide a better user experience?

## **Sorted and Filtered Data **
- Overall 28,203 calls total

| Key Word        | Count |
|-----------------|-------|
| “account”       | 2073  |
| "auth"          | 1245  |
| "sign"          | 1113  |
| "factor"/ "MFA" | 1131  |
| "log"           | 944   |
| "password"      | 563   |
| "access"        | 521   |
| "claim"         | 363   |
- Navigation Issues 5,572 calls, Mobile 37 vs Va.gov 383

| Key Word  | Count |
|-----------|-------|
| “account” | 1193  |
| "sign"    | 797   |
| "log"     | 567   |
| "claim"   | 363   |
| "benefit" | 229   |
| "access"  | 169   |
| "status"  | 78    |

- Inability to sign-in - 9,461 calls total
  - Inability to sign-in issues related to CSP

| CSP          | Count |
|--------------|-------|
| Login.gov    | 333   |
| ID.me        | 421   |
| DS Logon     | 368   |
| MyHealtheVet | 235   |
|              | 1357  |

  - Other Keywords

| Key Word              | Count | Notes                                           |
|-----------------------|-------|-------------------------------------------------|
| "EDIPI"               | 1860  | Electronic Data Interchange Personal Identifier |
| "authen"              | 1248  |                                                 |
| factor / MFA          | 1068  | Factor includes 2 factor, multi factor, etc.    |
| account               | 518   |                                                 |
| 106 / 102             | 438   | Multiple accounts, SSN mismatch, missing EDIPI  |
| lock / suspended      | 201   |                                                 |
| verify / verification | 145   |                                                 |


