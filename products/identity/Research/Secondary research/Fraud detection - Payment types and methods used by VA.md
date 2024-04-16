# Fraud Detection & Prevention

# VA.gov Payment Types & Methods

## UX Researcher- Joshua.Matulonis@va.gov

Updated - March 25, 2024
Updated - March 12, 2024
Version 1- January 12, 2024


**Table of Contents**
## [Summary of payment methods used by VA.gov](#summary-of-payment-methods-used-by-VA.gov)
[Table 1. System Architecture for EDU payments. EDU uses eMPWR to make STEM payments](#table)
## [Fraud Detection and Prevention](#fraud-detection-and-prevention)
## [Investigating Fraud - BDPR](#investigating-fraud---bdpr)
## [Payment Redirection Fraud](#payment-redirection-fraud)
## [Cases of Fraud Attempts](#cases-of-fraud-attempts)
## [Student Aid Fraud](#student-aid-fraud)
## [Educational Grant Fraud](#educational-grant-fraud)
## [Student Financial Assistance Fraud](#student-financial-assistance-fraud)
## [Student Financial Assistance Fraud](#student-financial-assistance-fraud-1)
## [VA Life Insurance Policies and Dividends](#va-life-insurance-policies-and-dividends)
## [Life Insurance Benefits](#life-insurance-benefits)
## [Claims Processing Business Transformation (CPBT)](#claims-processing-business-transformation-cpbt)
## [Claim Payment Methods](#claim-payment-methods)
## [Beneficiary Travel Self-Service System (BTSSS)](#beneficia)
## [Construction Service Payments](#construction-service-payments)
## [Fast Pay](#fast-pay)
## [Imprest funds and third party drafts](#imprest-funds-and-third-party-drafts)
## [Home Loans](#home-loans)
## [Direct Loans](#direct-loans)
## [Overpayments](#overpayments)
## [Payroll Overpayments](#overpayments)
## [Debt Management Center - Overpayments](#debt-management-center)
## [DATA Act PMO](#data-act-pmo)
## [Automobile Allowance](#automobile-allowance)
## [Educational Payment Fraud](#education-payment-fraud)
## [Serving as School Certifying Official (SCO) with VA Benefits](#serving-as-school-certifying-official-sco-with-va-benefits)
## [Education Benefit Payments](#education-benefit-payments)
## [Education Claim Processing & Communication]()
## [Accelerated Payments](#accelerated-payments)
## [Certifying Accelerated Payments](#certifying-accelerated-payments)
## [Advance Payments](#advance-payments)
## [Scholarship Fraud Awareness and Prevention](#scholarship-fraud-awareness-and-prevention)
## [Optional Practical Training (OPT) Training Plan for STEM OPT Students]
## [Edith Nourse Rogers STEM Scholarship](#)
## [Marine Gunnery Sergeant John David Fry Scholarship]()
## [GI Bill Chapter 30 (MGIB-AD) Eligibility and Benefits]()
## [Post-9/11 GI Bill and Yellow Ribbon Program]()
## [Appendix](#appendix)
## [Glossary of terms](#glossary-of-terms)
## [Works Cited](#works-cited)




## Summary of payment methods used by VA.gov

Disability Benefits
- Direct Deposit is commonly used for disability compensation and pension benefits.
- Veterans receive their payments directly into their bank accounts.
- This method ensures timely and secure disbursement of funds.


Pension Benefits
- Similar to disability benefits, direct deposit is the primary method for pension benefits.
- Veterans’ pension payments are electronically transferred to their bank accounts.  (VA.gov)


Most Education Benefits
- Direct Deposit is also utilized for most education benefits.
- Veterans pursuing education receive their payments directly into their bank accounts.
- This includes benefits such as the Post-9/11 GI Bill and other educational assistance programs.


STEM (Science, Technology, Engineering, and Mathematics) Benefits
- An outlier in the education category.
- Despite being an education benefit, STEM benefits still use direct deposit for compensation and pension payments.
- This ensures consistency with other benefit disbursements.


VETTEC (Veteran Employment Through Technology Education Courses) Benefits
- Another outlier within education benefits.
- VETTEC benefits also rely on direct deposit for compensation and pension payments.
- The focus remains on efficient and secure fund distribution.


Travel Claims
- Beneficiary Travel Self-Service System (BTSSS)


Medical Benefits


Life Insurance Policies & Dividends


Automobile Allowance


Construction Services


Recent Changes: Benefit Payments
- As of April 20, 2024, the VA has transitioned to a streamlined approach for distributing payments related to disability compensation, pension, and education benefits. All payments are now consolidated into a single bank account, aiming to bolster security and minimize fraud risks.


## Beneficiary Action Steps


Direct Deposit Verification:
For beneficiaries currently receiving education benefit payments via direct deposit, the following steps are recommended:


1. Access the VA.gov profile using a verified Login.gov or ID.me account.
2. Navigate to the Direct deposit information section.
3. Verify that direct deposit details align consistently across all benefit types.
4. Any discrepancies (e.g., different bank accounts) should be promptly updated.


For beneficiaries currently receiving education benefit payments by paper check, transitioning to direct deposit is essential:

Phone Setup: Contact the VA at 800-827-1000 (TTY: 711) during business hours (Monday through Friday, 8:00 a.m. to 9:00 p.m. ET).

International Updates: For international direct deposit adjustments, call the VA at 918-781-7550 (Monday through Friday, 9:00 a.m. to 5:30 p.m. ET).

Setting Up Direct Deposit:
By Phone: Call the VA at 800-827-1000 (TTY: 711) during the specified hours.
For international updates, dial 918-781-7550.


In Person: Visit the nearest VA regional office to establish direct deposit.


Alternative Option: Beneficiaries without internet access or phone availability can use the Direct Deposit Sign-Up Form (VA Form SF-1199a) to update their information.

## Healthcare Travel Reimbursement


Requirement: To receive healthcare travel reimbursement payments, beneficiaries must set up direct deposit.


Instructions: Phone Setup: Contact the VA at 800-827-1000 (TTY: 711) during business hours.

International Updates: For international direct deposit adjustments, call the VA at 918-781-7550.

Veterans Benefits Banking Program (VBBP)

The VBBP assists veterans lacking bank accounts in establishing direct deposit.

Steps:

Contact one of the participating Veteran-friendly banks or credit unions listed on the VBBP website.
Mention the Veterans Benefits Banking Program during inquiries.


For further information, beneficiaries are encouraged to refer to official VA resources and forms. Questions or requests for assistance can be directed to the VA helpline.
Additional details on health care travel reimbursement and the VBBP can be found on the relevant VA resources:
- HealthCare Travel Reimbursement - Veterans Affairs
- Veterans Benefits Banking Program (VBBP)
- Veterans Affairs

(VA.gov)

## Databases with EFT information


VBA currently has two different databases that contain EFT information:
The first one, known as the Corporate database (CorpDB) is the repository for EFT information for all VBA benefits programs except most EDU benefits (excluding STEM and VETTEC- which uses CorpDB). 
The second database, known as Benefits Delivery Network (BDN), is the legacy system that serves as the repository for EFT information for all other EDU claims. EDU is the only VBA benefit still running through BDN because BDN is old and has been replaced by other systems like VBMS. BDN is being completely retired, and EDU is migrating its claims to Corp DB in May. All EDU benefits point forward in May 2024 where books and supplies payments (and monthly housing payments) will go through the direct deposit information registered on the profile page of VA.gov.
EDU accepts a variety of forms that can include updated EFT info for any of our EDU benefits. 
Many of our initial applications collect EFT data and are sometimes used subsequently by veterans to update their personal info to include EFT.  We also accept SF 1199A (a Treasury form). 
We don’t update EFT info based on a call to our EDU Call Center, but will accept new EFT info through the AskVA inquiry system. 
EDU requires multi factor authentication such as ID.me or login.gov to submit an EDU inquiry.
Source: Cinda Quatrini VBAVACO - email conversation




Figure 1. System Architecture for EDU payments. EDU uses eMPWR to make STEM payments. 




## Fraud Detection and Prevention


The Department of Veterans Affairs (VA) is actively combating fraud related to department benefits.


Rapid expansion of assistance in the last year has raised concerns about potential scams targeting vulnerable veterans.
Common fraudulent activities include:
Misrepresentations about sources of financial assistance (scholarships, grants, loans).


- False promises of tailored assistance portfolios.
- Pre-selection claims for eligibility.
- Conditional assistance tied to purchasing services.
- Misleading information about business relationships.
- Refund misrepresentations.


VA is providing veterans with fraud and scam information to help them recognize and report such activities.


Online Resources:
VA has launched an online page (www.va.gov/vsafe) to educate veterans on spotting scams and reporting suspicious actors.
This information is also integrated into veterans’ regular health care visits and interactions with benefits processors.
Collaboration with Veterans Groups:
VA partners with veterans organizations to direct veterans to proper channels for benefits-related questions.
Awareness campaigns and vigilance are essential to protect veterans’ financial interests.
Monitoring Unusual Patterns:
Analyzing patterns of fund disbursement can reveal anomalies.
For example, sudden large withdrawals or frequent transfers may indicate fraudulent behavior.


Internal Controls and Audits:
Regular audits and internal controls help detect discrepancies.
Segregating duties, conducting surprise audits, and monitoring cashiers’ activities are essential.


## Investigating Fraud - BDPR


The Veteran Benefits Administration’s (VBA) Benefits Delivery Protection and Remediation (BDP&R) team takes the following actions:
Investigation:
The BDP&R team investigates the incident to confirm the fraudulent activity.
They determine the necessary actions to protect the Veteran’s benefits.
Reporting and Accountability:
The team reports those responsible for the alleged fraud.
This ensures accountability and helps prevent further incidents.
Restoring Benefits:
The BDP&R team immediately reinstates the Veteran’s benefits.
Their goal is to make the Veteran whole again by ensuring timely benefit payments.


## Payment Redirection Fraud


As part of the Sergeant First Class Heath Robinson Honoring our Promise to Address Comprehensive Toxics Act (PACT Act), more Veterans are receiving increased benefits. However, this positive development also attracts criminals who seek to exploit vulnerable individuals. Online scams are rampant, and scammers continually invent new tactics to deceive people and gain access to sensitive information, ultimately stealing money and identities.


One specific form of fraud is Payment Redirection Fraud.


Impersonation: Criminals impersonate others, often targeting Veterans.
They gain access to sensitive Personal Identifiable Information (PII).


Unlawful Diversion:
Armed with the stolen information, scammers redirect the victim’s VA benefits payments.
These payments are rerouted to bank accounts or prepaid debit cards controlled by the fraudsters. (Note: Fraud investigation reports often include a column on # of banks involved.)


Methods Used:
Scammers exploit vulnerabilities through phishing attempts, email scams, and other tactics.
They may manipulate publicly available data, social media, and other sources to gather PII.
With enough demographic details, they can call the National Contact Center and change Veterans’ bank accounts for payment redirection.
Additionally, stolen passwords and credentials allow them to access Veterans’ information through VA.gov.





