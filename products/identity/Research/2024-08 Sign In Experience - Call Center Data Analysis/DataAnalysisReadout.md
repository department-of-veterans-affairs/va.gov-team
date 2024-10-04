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

## **Sorted and Filtered Data**
Overall 28,203 calls total

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
### Navigation Issues 5,572 calls, Mobile 37 vs Va.gov 383

| Key Word  | Count |
|-----------|-------|
| “account” | 1193  |
| "sign"    | 797   |
| "log"     | 567   |
| "claim"   | 363   |
| "benefit" | 229   |
| "access"  | 169   |
| "status"  | 78    |

### Inability to sign-in - 9,461 calls total

Inability to sign-in issues related to CSP
 
 | CSP          | Count |
|--------------|-------|
| Login.gov    | 333   |
| ID.me        | 421   |
| DS Logon     | 368   |
| MyHealtheVet | 235   |
|              | 1357  |

Other Keywords
| Key Word              | Count | Notes                                           |
|-----------------------|-------|-------------------------------------------------|
| "EDIPI"               | 1860  | Electronic Data Interchange Personal Identifier |
| "authen"              | 1248  |                                                 |
| factor / MFA          | 1068  | Factor includes 2 factor, multi factor, etc.    |
| account               | 518   |                                                 |
| 106 / 102             | 438   | Multiple accounts, SSN mismatch, missing EDIPI  |
| lock / suspended      | 201   |                                                 |
| verify / verification | 145   |                                                 |

### Identity Verification Issues 11,175 calls total
Verification Issues by CSP
  
   | CSP          | Count | Percentage |
|--------------|-------|------------|
| Login.gov    | 4297  | 38.5%      |
| ID.me        | 2951  | 26.4%      |
| DS Logon     | 2469  | 22.1%      |
| MyHealtheVet | 1458  | 13.0%      |
|              | 11175 | 100%       |

Verification issues by Login.gov
 
| Keyword | Count |
|---------|-------|
| verif   | 1970  |
| phone   | 143   |
| access  | 81    |
| upload  | 47    |
| authe   | 32    |
| loop    | 23    |
| doc     | 15    |

Verification issues by ID.me

| Keyword | Count |
|---------|-------|
| verif   | 1068  |
| phone   | 80    |
| access  | 68    |
| loop    | 26    |
| authe   | 23    |
| upload  | 16    |
| doc     | 7     |
### Forgot Password 2,076 calls total

| Keyword    | Count |
|------------|-------|
| forgot     | 871   |
| reset      | 120   |
| suspended  | 11    |
| lock       | 14    |
| mfa/factor | 5     |

###  Updating information - 4,158 calls total

-   Update 947
-   Direct deposit - 113, bank - 6
-   Phone - 88
-   Address - 67
-   Name - 59
-   Email 35 (e-mail - 0)
-   Profile - 29
-   Incorrect 28
-   Contact - 23
-   T3 - 63 (wrong military information)
-   Change - 87

## Key Findings
We analyzed over 28,000 calls based on the criteria above. From that, we noticed consistently account issues (creation, setting up, being locked/suspended) accounted for 7.4% of calls sign-in and log-in issues comprised 7.3% of all calls. There were also a significant number of calls coming in around authentication issues specifically (4.4%) and MFA/2-factor authentication (4.0%).

####  Navigation
-   The most frequent navigation issues came from a veteran’s inability to sign in or login to their accounts, 24.5%.
    
-   The second most frequent issue was related to a veteran’s account encompassing issues related to creation, suspension, access and the like at 21.4%.
    
#### Inability to sign-in
    

-   Roughly 20% of all calls where veterans were not able to sign-in were related to EDIPI issues with an additional 5% of calls related to account mismatch and duplicates.
    
-   Authentication issues and MFA/two-factor accounted for 13.2% and 11.3% respectively which isn’t surprising based on previous research.
    
-   Surprisingly, the inability to sign in was roughly the same across all CSPs, but CSPs were only tagged in 14% of these 9,461 calls.

####  Identity Verification Issues
    

-   Verification issues made up roughly 40% of all the calls we reviewed with calls related to Login.gov at 38.5% (4,297 calls) and ID.me at 26.4% (2,951 calls).
    
-   Of these Login.gov calls, ~46% were related to verification.
    
-   Of these ID.me calls, ~36% were due to issues related to verification.
    

#### Forgot Password
    

-   For those callers calling in about “forgot password” issues, 42% were related to forgetting their passwords and 5.7% needed their passwords to be reset.

####  Updating Information
    

-   The data for updating information did not yield anything significant related to the sign-in experience.
  

## Summary:

-   The data from the call center is consistent with prior research.
    
-   A good portion of this subset of calls were from Veterans trying to get help with account management (creation, suspension and access).

-   Veterans continue to struggle with account verification and authentication of their accounts, more so with Login.gov than ID.me.
    
-   Since there isn’t a single source of truth for veteran identification, veterans continue to run into issues related to duplicative accounts, mismatches and missing or incorrect information.
    
-   MFA/2-factor authentication continues to cause problems for veterans.
    

## Recommendations:

-   In order to better understand and break down some of these numbers, it might be helpful to get access to transcripts/recordings of some of these calls for context.

-   -   Since account management was an issue for a number of these veterans, we might want to connect with teams managing these parts to provide them the data we uncovered.
