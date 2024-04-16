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

For further information, beneficiaries are encouraged to refer to official VA resources and forms. 
Questions or requests for assistance can be directed to the VA helpline.
Additional details on health care travel reimbursement and the VBBP can be found on the relevant VA resources:
- HealthCare Travel Reimbursement - Veterans Affairs
- Veterans Benefits Banking Program (VBBP)
- Veterans Affairs

## Databases with EFT information


VBA currently has two different databases that contain EFT information:

The first one, known as the Corporate database (CorpDB) is the repository for EFT information for all VBA benefits programs except most EDU benefits (excluding STEM and VETTEC- which uses CorpDB). 

The second database, known as Benefits Delivery Network (BDN), is the legacy system that serves as the repository for EFT information for all other EDU claims. EDU is the only VBA benefit still running through BDN because BDN is old and has been replaced by other systems like VBMS. 

BDN is being completely retired, and EDU is migrating its claims to *Corp DB* in May. All EDU benefits point forward in May 2024 where books and supplies payments (and monthly housing payments) will go through the direct deposit information registered on the profile page of VA.gov.

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
- Misrepresentations about sources of financial assistance (scholarships, grants, loans).
- False promises of tailored assistance portfolios.
- Pre-selection claims for eligibility.
- Conditional assistance tied to purchasing services.
- Misleading information about business relationships.
- Refund misrepresentations.

VA provides veterans with fraud and scam information to help them recognize and report such activities.

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
These payments are rerouted to bank accounts or prepaid debit cards controlled by the fraudsters. (Note: Fraud investigation reports may include a column on # of banks involved.)

Methods Used:
Scammers exploit vulnerabilities through phishing attempts, email scams, and other tactics.
They may manipulate publicly available data, social media, and other sources to gather PII.
With enough demographic details, they can call the National Contact Center and change Veterans’ bank accounts for payment redirection.
Additionally, stolen passwords and credentials allow them to access Veterans’ information through VA.gov.

Immediate Action:
The Benefits Delivery Protection and Remediation (BDP&R) team investigates and takes necessary steps to protect benefits.
Their goal is to make the user whole again by reinstating their benefits.
Imposter Scams: Imposter scams account for up to 40% of the total fraud reported by military members. 


### Cases of Fraud Attempts

An investigation into the methods used in these cases could be a beneficial future research topic.

#### Student Aid Fraud
Case Details:
- During the 2003-2004 school year, the defendant applied for student aid at three institutions of higher learning.
- The applications were submitted in his own name and in the name of two aliases.
- The defendant used three different Social Security Numbers, none of which were actually his.


#### Educational Grant Fraud
Case Details:
- Investigation of USA Beauty School in Chinatown, New York City.
- The school participated in ED’s Federal Pell Grant program from 2006 until 2010, receiving approximately $4.2 million in Pell Grant funds.
- Assisted students in filling out FAFSA forms with false information.
- Produced fake high school diplomas.
- Falsified attendance records.
- Issued W-2s for non-existent employees.
- Defendants charged with conspiracy, wire fraud, and educational grant fraud. 


#### Student Financial Assistance Fraud
Case Details:
- Charged with nine counts of wire fraud, federal student financial assistance fraud, and identity theft.
- Scheme involved serially applying for federal student financial assistance at multiple educational institutions.
- Repeatedly dropped out or failed courses.
- Concealed prior academic history and assumed new identities. 


#### Student Financial Assistance Fraud
Case Details:
- Conspired to obtain money from Northwestern State University in Natchitoches, Louisiana.
- Submitted false applications and documents to obtain federal student aid and student loans.
- Submitted additional false applications to retain funds.
- Conspiracy and bank fraud.


## VA Life Insurance Policies and Dividends

The handling of VA life insurance policies and dividends can be subject to fraud. Fraudulent activities may include misrepresenting eligibility, falsifying information, or attempting to receive excess benefits. It’s crucial for the VA to closely monitor and verify transactions to prevent any fraudulent actions and ensure the security of veterans’ financial interests.


### Dividends:
Not all VA life insurance policies pay dividends.


In 2024, the following policies pay dividends:


- National Service Life Insurance (NSLI) (policies beginning with V) Veterans’ Reopened Insurance (policies beginning with J and JR)


   - Option 1: Pay Your Annual Policy Premium:


       - If your dividend is less than your annual premium, you’ll receive a bill for the difference.


   - Option 2: If your dividend is more than your policy’s annual premium, choose from these options:


       - Request cash payment.


       - Buy paid-up additional insurance.


- Option 5: Repay a policy loan or lien.


- Option 6: Pay Premiums in Advance:


Use dividends to pay premiums far in advance.


Note: This option is not available if premiums are paid via specific methods (e.g., retirement pay allotment, VA compensation deduction).


- Option 7: Receive Dividends in Cash:
On your policy anniversary date, receive dividends via:


   - Direct deposit into your bank account.
   - U.S. Treasury check (limited situations) (Note: Area for research?).


### Life Insurance Benefits


VA administers each of the six life insurance programs (the first four programs below cover Veterans who served during World Wars I and II and the Korean Conflict eras, and are now
closed to new issues):


1. United States Government Life Insurance (USGLI)
2. National Service Life Insurance (NSLI)
3. Veterans Special Life Insurance (VSLI)
4. Veterans Reopened Insurance (VRI)
5. Service-Disabled Veterans Insurance (S-DVI) provides insurance to Veterans who
receive a service-connected disability rating
6. Veterans’ Mortgage Life Insurance (VMLI) covers severely disabled Veterans and is part of the Veterans’ Insurance and Indemnities fund.
(oversight.gov)


## Claims Processing Business Transformation (CPBT)


**Claims Processing Business Transformation (CPBT)**


CPBT is a service that streamlines claims processing for veterans. It aims to improve efficiency and accuracy in handling claims related to benefits, compensation, and other services.


Payment methods used by CPBT include direct deposits, checks, and electronic fund transfers. (Note: Needs confirmation- Check use was reported to be discontinued in 2023)

Monitoring CPBT is crucial to detect any fraudulent activity related to payments made to veterans.


Centralized Data Repository (CDR):
CDR consolidates information from various platforms into a cohesive view to support Integrated Veterans Care (IVC) business processes.
It serves as a single source of truth for IVC and other VHA entities that generate reports from Community Care data.
CDR ensures accurate, normalized data and provides tools for staff.
Monitoring CDR helps prevent fraudulent activities related to data manipulation or unauthorized access.


Planned Enhancements:
The VA plans to consolidate duplicative Application Programming Interfaces (API) connections.
Proper funding is essential for timely and accurate analytics in support of Community Care providers’ claims and payments.
Lack of funding could adversely affect system performance and storage costs, potentially leading to vulnerabilities that fraudsters might exploit.


CAPRI Sustainment-Enhancement:
CAPRI is critical for processing Veteran and service member claims for disabilities.
Enhancements are needed to ensure quality service for all locations.
As CAPRI migrates to the EHRM platform, updates are necessary for legacy users.
CLAIMS Sustainment-Modernization:
CLAIMS ensures reliability, stability, and modernization of legacy systems.
Security, authorization, and authentication for users across VA Medical Centers and medical records are essential.


VistA-CAPRI (AMIE):
AMIE enhancements cover new requirements, approved business needs, and legislative changes.
VHA clinicians rely on AMIE to provide VBA with medical evidence for Veteran disability claims.


Legacy Claims Processing (VETSNET):
Modernization efforts aim to reduce duplicative capabilities and streamline claim processing.
Limiting the number of systems improves efficiency and decreases processing time.
(VA.gov)


Question asked in Slack (March 25, 2024):
**VEText is used for confirming appointments, right? Could it be used with the claim process?**
Answer: *It is somewhat used today for the eCheck-in and travel pay workflow that Christina described earlier today.
After a claim is submitted using that workflow, the Veteran receives an SMS with their claim number.*

## Claim Payment Methods

EFT for Approved Payments:
When claims are approved for payment, the system is designed to make payment by the US Treasury through Electronic Funds Transfer (EFT) to transfer funds directly to the user’s checking/savings account or VA debit card (Note: Check use was discontinued in 2023).

Missing EFT Information:
If EFT information is not already on file with the Veterans Health Administration (VHA) Financial Management System (FMS), the approved payment may be temporarily delayed.
Veterans who currently receive other benefit payments by EFT from the Veterans Benefits Administration (VBA) should note that their EFT information is not automatically on file with the system unless previously provided to their local VA Medical Center.

Checking EFT Information: To verify whether their EFT information is on file, review the Veteran profile screen.

Contacting Local BT Office: If EFT information needs to be added or updated, the local Beneficiary Travel (BT) office provides the necessary signature forms to ensure EFT details are accurately recorded.

Facility for Payment:
When submitting claims, it’s essential to identify the facility responsible for payment.
This facility should be the one that provides care or approved care for services in the community.
For instance, if a claim is submitted for care approved at a non-VA facility, it should specify the VA facility that authorized it as the responsible payment facility.


## Beneficiary Travel Self-Service System (BTSSS)

BTSSS Overview:
Beneficiary Travel Self-Service System (BTSSS) automates travel claims processing for veterans.
It handles waiver exceptions, electronically passes vouchers for direct deposit, and enhances the audit process.
The system streamlines existing work processes related to travel claims.

Enhancements and Goals:
The planned enhancements for BTSSS aim to position the Veterans Transportation Program (VTP) for future workflow integration.
Integration targets include VA’s Office of Rural Health, Homeless Program, Veteran Transportation Network (VTN), and Spinal Cord Injuries (SCI) Centers.
The goal is to improve the network of transportation services and increase access to VA services.
Importance of Funding:
Without adequate funding, the 2024 enhancements to BTSSS will not be executable.
Proper funding ensures that the system can effectively support veterans’ transportation needs and enhance their access to essential services.

Note: (From Slack thread March 25, 2024)
Question: **What are the payment methods currently used by BTSSS?**
Answer: *Direct deposit is required, however some facilities I've heard still do cash, so long that they're filing in person at a Travel Office at a VAMC.*

## Construction Service Payments

Checking Invoice Status:
Customers can check the status of an invoice.
They can either call or email the Customer Support Help Desk or use the Vendor Inquiry System (VIS).

Vendor Inquiry System (VIS):
VIS is a Web-based application that allows registered vendors to access invoice status and payment information via the Internet.

Construction Payments:
A memorandum from the Chief Management Office requires all remaining Veterans Health Administration (VHA) certified payments (with a few exceptions) to be processed by the FSC (Financial Services Center).
Construction payments are not excluded from this requirement.
While the FSC handles construction payments, stations are still responsible for reconciling and capitalizing items as needed.
The FSC uses the Online Certification System (OLCS) for construction payments, ensuring user-friendly tools for the field.
[FSC Construction Payments](https://www.fsc.va.gov/fsc/payments.asp)


## Fast Pay

The VA may use “Fast Pay” procedures to pay vendor invoices before fully verifying that supplies have been received and accepted.
These procedures allow for quicker payment processing.
For more details and specific conditions related to fast payment processes, refer to FAR Subpart 13.4 and [5 C.F.R. § 1315.6](https://public-inspection.federalregister.gov/2021-21805.pdf)


### Imprest funds and third party drafts

Imprest Funds:
Imprest funds are used to acquire and pay for supplies or services.

Policies and regulations governing imprest funds and third-party drafts are outlined in:
Part IV of the Treasury Financial Manual for Guidance of Departments and Agencies.
Title 7 of the GAO Policy and Procedures Manual for Guidance of Federal Agencies.
Agency-specific implementing regulations.


Responsibilities:
Designated cashiers and alternates handle imprest funds.
The Manual of Procedures and Instructions for Cashiers, issued by the Financial Management Service (Department of the Treasury), provides guidance.

Third-Party Drafts:
Third-party drafts are also used for payments.
Agencies follow established procedures for handling these drafts.

## Home Loans

Direct Loans and Loan Guarantee Commitments:
The Credit Reform Act governs direct loan obligations and loan guarantee commitments made after FY 1991.
The present value of estimated net cash flows paid by VA is recognized as a subsidy cost in the year the loan is disbursed.
Direct loans and guaranteed loans receivable are reported net of an allowance for subsidy costs at present value.
Loan guarantee liabilities are also reported at present value.

Non-Credit Reform Act Loans:
Direct loans obligated before October 1, 1991, and other non-Credit Reform Act direct loans and loan guarantees are not subject to the Credit Reform Act.
These are recorded at the net realizable value (remaining balance of amounts disbursed plus accrued and unpaid interest receivable).
Allowance for loan losses on pre-1991 direct loans is recognized when it’s more likely than not that the loans won’t be fully collected.

Risk Factors and Modeling:
Risk factors evaluated for each group of program loans include historical experience, economic conditions, borrower characteristics, collateral value, and new events.
VA uses a Notional Foreclosure Proportion Model for generating time-specific default rates for the Loan Guarantee Program.
[FSC](FSC-VA.gov)









