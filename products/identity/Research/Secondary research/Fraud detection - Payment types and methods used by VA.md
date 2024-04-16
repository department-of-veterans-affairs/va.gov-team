# Fraud Detection & Prevention

# VA.gov Payment Types & Methods

## UX Researcher- Joshua.Matulonis@va.gov

Updated - March 25, 2024
Updated - March 12, 2024
Version 1- January 12, 2024


**Table of Contents**

## [Summary of payment methods used by VA.gov](#summary-of-payment-methods-used-by-va.gov)
## [Fraud Detection and Prevention](#fraud-detection-and-prevention)
## [Investigating Fraud - BDPR](#investigating-fraud---bdpr)
## [Payment Redirection Fraud](#payment-redirection-fraud)
## [Cases of Fraud Attempts](#cases-of-fraud-attempts)
### [Student Aid Fraud](#student-aid-fraud)
### [Educational Grant Fraud](#educational-grant-fraud)
### [Student Financial Assistance Fraud](#student-financial-assistance-fraud)
### [Student Financial Assistance Fraud](#student-financial-assistance-fraud-1)
## [VA Life Insurance Policies and Dividends](#va-life-insurance-policies-and-dividends)
### [Life Insurance Benefits](#life-insurance-benefits)
## [Claims Processing Business Transformation (CPBT)](#claims-processing-business-transformation-cpbt)
### [Claim Payment Methods](#claim-payment-methods)
## [Beneficiary Travel Self-Service System (BTSSS)](#beneficia)
## [Construction Service Payments](#construction-service-payments)
### [Fast Pay](#fast-pay)
### [Imprest funds and third party drafts](#imprest-funds-and-third-party-drafts)
## [Home Loans](#home-loans)
### [Direct Loans](#direct-loans)
## [Overpayments](#overpayments)
### [Payroll Overpayments](#overpayments)
### [Debt Management Center - Overpayments](#debt-management-center---overpayments)
## [DATA Act PMO](#data-act-pmo)
## [Automobile Allowance](#automobile-allowance)
## [Educational Payment Fraud](#education-payment-fraud)
### [Serving as School Certifying Official (SCO) with VA Benefits](#serving-as-school-certifying-official-sco-with-va-benefits)
### [Education Benefit Payments](#education-benefit-payments)
#### [Education Claim Processing & Communication]()
#### [Accelerated Payments](#accelerated-payments)
##### [Certifying Accelerated Payments](#certifying-accelerated-payments)
#### [Advance Payments](#advance-payments)
### [Scholarship Fraud Awareness and Prevention](#scholarship-fraud-awareness-and-prevention)
#### [Optional Practical Training (OPT) Training Plan for STEM OPT Students]
#### [Edith Nourse Rogers STEM Scholarship](#)
#### [Marine Gunnery Sergeant John David Fry Scholarship]()
#### [GI Bill Chapter 30 (MGIB-AD) Eligibility and Benefits]()
#### [Post-9/11 GI Bill and Yellow Ribbon Program]()
## [Appendix](#appendix)
### [Table 1. System Architecture for EDU payments. EDU uses eMPWR to make STEM payments](#table-1)
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


### Dividends

Not all VA life insurance policies pay dividends.

In 2024, the following policies pay dividends:

- National Service Life Insurance (NSLI) (policies beginning with V) Veterans’ Reopened Insurance (policies beginning with J and JR)

   - Option 1: Pay Annual Policy Premium:

       - If the dividend is less than your annual premium, they’ll receive a bill for the difference.

   - Option 2: If the dividend is more than your policy’s annual premium, they must choose from these options:

       - Request cash payment.
       - Buy paid-up additional insurance.

- Option: Repay a policy loan or lien.

- Option: Pay Premiums in Advance: Use dividends to pay premiums far in advance.
   - Note: This option is not available if premiums are paid via specific methods (e.g., retirement pay allotment, VA compensation deduction).

- Option: Receive Dividends in Cash: On a policy anniversary date, a veteran will receive dividends via:
   - Direct deposit into your bank account.
   - U.S. Treasury check (limited situations) (Note: Area for research?).


### Life Insurance Benefits


VA administers each of the six life insurance programs (the first four programs below cover Veterans who served during World Wars I and II and the Korean Conflict eras, and are now closed to new issues):

1. United States Government Life Insurance (USGLI)
2. National Service Life Insurance (NSLI)
3. Veterans Special Life Insurance (VSLI)
4. Veterans Reopened Insurance (VRI)
5. Service-Disabled Veterans Insurance (S-DVI) provides insurance to Veterans who
receive a service-connected disability rating
6. Veterans’ Mortgage Life Insurance (VMLI) covers severely disabled Veterans and is part of the Veterans’ Insurance and Indemnities fund.


## Claims Processing Business Transformation (CPBT)

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

## Overpayments

Payroll Overpayments

The Defense Finance and Accounting Service (DFAS) plays a crucial role in processing payroll transactions for the VA. When the Defense Civilian Payroll System disburses an overpayment, DFAS oversees the debt collection process on behalf of the VA. Here are the key points regarding debt collection and waivers:

Debt Collection Process:
Under the Debt Collection Improvement Act, the agency is required to give full due process notification for a debt incurred for pay periods older than four pay periods and $50 or more.
Debts incurred within the most recent four pay periods or less than $50 do not require advance notification prior to collection.
However, these debts will include a reference to them on the Leave and Earnings Statement.

Waiver Requests:
Employees have 30 days from the debt letter date to request a waiver.
If the request is not received by the DFAS payroll office within the 30-day limit and debt collections have begun, they will not be placed on hold, even if the employee requests a waiver later.
Employees have up to three years to request a waiver.
If collections have already started and a waiver is requested later and approved, DFAS will refund all collections made prior to that time.
(“FY 2020 OMB Supplemental Data Call Veterans Affairs (VA)”)


### Overpayments and Receivables:

Overpayments to veterans or beneficiaries are a significant cause of compensation, pension, and education receivables.

While VA is authorized to charge interest and administrative costs on benefit debts, the current practice does not include charging interest on compensation, pension debts, and certain education benefits based on a decision made in July 1992 by the then VA Deputy Secretary.

Advances and Prepayments:
Intragovernmental advances primarily involve payments to the U.S. Army Corps of Engineers for major construction projects.
Public advances consist of payments to medical schools, grantees, and beneficiaries.
Advances and prepayments are gradually reduced as services are performed.

Accounts Payable:
Accounts payable represent amounts owed by VA for goods and services received.
When VA accepts title to goods (whether delivered or in transit) or incurs costs for services received, a liability is recognized for the unpaid amount.
If invoices for these goods and services are unavailable during financial statement preparation, estimated amounts owed are recorded.
Accounts payable primarily include payables to veterans for scheduled payments related to compensation, pension, and education benefits.
Variations in accounts payable can occur annually based on the timing of compensation and pension benefit payments.

Intragovernmental Accounts Payable:
Intragovernmental accounts payable involve amounts owed to other Federal Government agencies.
These agencies include the Department of Labor (DOL), Office of Personnel Management (OPM), and Department of Justice (DOJ).
The remaining accounts payable represent amounts due to the public.

Debt Management Center - Overpayments

Quality Reviews and Overpayments:
VBA conducts quality reviews to identify possible duplicates and overpayments.
Monthly and quarterly payment reviews are also used for this purpose.

The Debt Management Center (DMC) tracks, monitors, and recovers most eligible overpayments.
DMC collects debts through lump-sum offset from current or future benefit payments or by installment payments agreed upon with the debtor.
If DMC cannot collect the debt, it is referred to the Treasury Offset Program (TOP) for further collection.

Local Offices and Debt Establishment:
VBA local offices handle debts not currently managed by DMC.
For monetary loss cases, VBA assesses collectability and establishes a debt in the core financial management system.

Waiving Benefit Debts:
In accordance with 38 U.S.C. § 5302, VBA may waive benefit debts under specific conditions.
Waivers are considered when collection would be against equity and good conscience, and no evidence of fraud, misrepresentation, or bad faith exists.
Debtors are informed of their rights, remedies, and the consequences of non-cooperation.
Debtors can dispute the debt’s existence or amount or request a waiver.

Note: A breakdown of Overpayments is available here FY2023 Payment Accuracy Dataset_Data_As_of 11.21.2023



### DATA Act PMO

The DATA Act PMO works with program owners to develop program activity crosswalks for Treasury Account Symbols that use complex allocations to assign cost to program activities. The PMO explores options for FMS and MinX JV edit checks to ensure data elements are present. 

The Program Activity Code and Program Activity Name data elements are currently not stored in FMS - it is being considered as part of iFAMS – and therefore edit checks cannot be added to FMS without significant software modifications.

It is critical that eCMS, IFCAP and the core financial management system will be integrated to allow for comprehensive reconciliations. 

The current reconciliation process in most cases requires the generation and use of transaction processing status reports and status of fund balances reports to ensure consistency across systems. 

Additionally, contract numbers are not transferred from eCMS to IFCAP in an automated fashion.

https://www.va.gov/finance/docs/va-financialpolicyvolumeviiichapter01a.pdf
https://public-inspection.federalregister.gov/2020-22929.pdf
https://www.reginfo.gov/public/do/PRAViewDocument?ref_nbr=201907-2900-003

## Automobile Allowance

Payment for the automobile allowance and adaptive equipment grant will be made as follows:
One-Time Payment for Specially Equipped Vehicle:
To receive assistance in purchasing a specially equipped vehicle:
Complete the Application for Automobile or Other Conveyance and Adaptive Equipment (VA Form 21-4502).
Mail the form to the address specified on the form.
VA will directly pay the vehicle’s seller.

Eligibility:
Person must have a service-connected condition to qualify for a specially equipped vehicle.
They must file a claim for disability compensation before qualifying.

Adaptive-Equipment Grant:
For adaptive equipment related to motor vehicles:
Fill out the Application for Adaptive Equipment—Motor Vehicle (VA Form 10-1394).
Bring the form to the prosthetic representative at a local VA medical center.
VA may pay the requestor directly or the equipment seller.
Eligibility requires a service-connected disability.

## Education Payment Fraud

Every year, families fall victim to fraudulent financial aid schemes. 

With the rising costs of four-year college education outpacing inflation rates, parents understandably worry about paying for education without accumulating heavy debt. 

Scam artists exploit these concerns. (Note: Potential future research topic)

To combat financial aid scams, Congress enacted the College Scholarship Fraud Prevention Act of 2000. 
This legislation mandated stronger sentencing guidelines for higher education financial assistance fraud. 
Additionally, it directed the Secretary of Education, in collaboration with the Federal Trade Commission (FTC), to create national awareness initiatives. 

One such initiative is the financial aid fraud awareness site on the Department of Education’s website.
As part of their responsibilities, the Department of Justice (DOJ), the Department of Education (ED), and the FTC compile an annual report on fraud related to businesses or individuals offering advice or assistance to students and parents seeking financial aid for higher education. This report assesses the nature and extent of financial aid fraud.


### Serving as School Certifying Official (SCO) with VA Benefits

When an SCO is also a VA student at the same school where they work, they must designate another SCO at the approved facility to certify their enrollment with the VA. It’s important to note that the VA will not disburse GI Bill benefits for courses certified by the individual who is taking those courses.




## Education Benefit Payments

For students in IHL (Institution of Higher Learning) and NCD (Non-College Degree) programs, monthly benefit payments (or MHA for Chapter 33) are made directly to the students. The payment corresponds to the number of days the student is certified for the month. 

Proration Calculation:
VA uses a 30-day month for proration purposes.
To calculate the daily rate, divide the monthly rate by 30.
If a student is certified from the 1st through the 15th, they are certified for 15 days and entitled to 15/30ths of the full monthly benefit.

Example:
If the monthly benefit is $100.00.
If the student is certified 1/1/12 through 1/15/12, they are entitled to $50.00 ($3.33 per day for 15 days).
Similarly, if the student is certified 1/16/12 through 1/31/12, they are also entitled to $50.00.
If the student is certified 1/1/12 through 1/31/12, they receive the full month’s benefit of $100.00.
Note that VA considers 1/16 through 1/30 (or 1/31) as 15 days, and 2/16 through 2/28 (or 2/29) as 15 days, rounding out to a 30-day month.

Additional Kicker:
Some Chapter 30, 33, and 1606 students may receive an additional kicker along with standard benefits.

Education Claim Processing & Communication
PACT Act funding will be used to set up a Test Environment for DGIB and eMPWR-VA integration testing, Improve Education Claim Processing Automation, and Migrate Education Legacy Systems data to Managed Service Platform. Funding will enhance eligibility verification, and communication from VA in a timely manner and will support increase in claim processing.


## Accelerated Payments

An accelerated payment is a lump sum payment of 60% of tuition and fees for certain high-cost, high-tech programs.
It applies to non-college degree programs that are less than two years (for chapters 1606).
The payment is made one semester, quarter, or term at a time.
If a program isn’t offered on a standard basis, the accelerated payment covers the entire program.

High-Cost Requirement:
Tuition and fees must be more than double the benefit the student would otherwise receive.

Example:
A typical semester (17 weeks) or quarter (11 weeks).
If chapter 30 pays $1,368.00 per month full-time, it pays:
$5,335.20 for the semester.
$3,328.80 for the quarter.
To qualify, tuition and fees must exceed:
$10,640.70 for the semester.
$6,657.60 for the quarter


### Certifying Accelerated Payments

High Technology Requirement:
Students must enroll in a high-tech program.
They must certify their intent to seek employment in a high-tech industry as defined by VA.
VA maintains a list of high-tech programs and industries on the Education Benefits website.

Student Request Process:
Direct students to the accelerated payment link on VA’s website.
Certify accelerated payment as usual, with the following exceptions:
Confirmed certifications: Cannot be signed, dated, and submitted until on or after the beginning date of the certified enrollment period.
Check the “Accelerated Pay (high-tech courses only)” box on a new Cert.
EM enters “Student has requested Accelerated Pay” in remarks.
Obtain the student’s written request for accelerated payment for each term.
The written request should state: “I request accelerated payment”, followed by the student’s signature and date.
On the first request, include: “I certify that I intend to seek employment in a high technology industry as defined by VA. I have read VA’s approved list of high technology industries.”

Certification Details:
Certify one term at a time.
Include the total charges (tuition and fees) for the certified courses.
The student must request accelerated payment separately for each term.
Enrollment Status Changes:
Adjust or terminate the Cert as needed.
Ensure to include tuition and fees.
Consider mitigating circumstances.
[VA eBenefits](knowva.ebenefits.va.gov/)




## Advance Payments

An advance payment provides students with benefit payments at the beginning of a school term.
Helps students meet expenses concentrated at the start of the term.
Pays the student’s monthly benefit for the first and second month of the quarter or semester in advance.
The first month covers from the start date through the end of the month.

Participation and Certification:
Schools must certify their ability to carry out the provisions of advance payment.
Schools handle advance paychecks securely.
Participation in advance payment is voluntary for schools.
Eligibility for Advance Payment:

A school can participate in advance payment if:
The student requests advance pay.
There are more than 30 days between terms.
The student is enrolled at least half-time.
VA receives the advance payment request 30 to 120 days before the enrollment period.

Student Request Process:
Students complete a form to request advance pay.
The form is stapled to the file copy of the Cert.
The Cert is annotated as “Advance Payment Requested and Signature of Student on Record.”


## Advance Payments: Key Points
Submission Timeline:
Advance pay requests should be submitted 30 to 120 days before the begin date of the enrollment period.

Payment Process:
The check for advance payment will be sent directly to the school, payable to the student.
The payment covers the first and second month of the quarter or semester in advance.
The first month may be a partial month, prorated for the number of days attended.

Example:
For a student certified from September 20, 2010 through June 10, 2011:
Advance pay would cover September 20, 2010 through October 30, 2010.
Subsequent checks would follow the regular payment schedule (e.g., payment for November in December).

Certification of Delivery:
When an advance paycheck is issued, the next check won’t issue unless the Certification of Delivery (or the chapter 1606 generated letter with the same information) mailed to the school is received and processed by VA.
If you receive a letter stating that a returned Certification of Delivery wasn’t received:
Call VA (1-888-442-4551) and explain the issue to the Education Case Manager.
Request the Education Case Manager to input the certification of delivery.






### Scholarship Fraud Awareness and Prevention

Annual Report on Scholarship Fraud:
The Attorney General and the Secretary of Education, in conjunction with the Federal Trade Commission, submit an annual report to Congress.
The report assesses the nature and quantity of incidents of fraud related to financial assistance for education at institutions of higher education.

National Awareness Activities:
The Secretary of Education, along with the Federal Trade Commission, maintains a scholarship fraud awareness site on the Department of Education’s website.

The site includes:
Materials from the Project Scholarscam awareness campaign.
A list of convicted companies and individuals involved in scholarship fraud.
An Internet-based message board for public complaints and experiences.
An electronic comment form for reporting scholarship fraud.
Internet links to other sources of information on scholarship fraud, including nongovernmental organizations, colleges, universities, and government agencies.
A link to the Better Business Bureau for assessing business practices.
Information on communicating with the Federal Student Aid Information Center.
Promoting awareness and vigilance against scholarship fraud helps protect students and maintain the integrity of educational financial assistance programs


#### Fraud Report Findings 

Congress recognizes the prevalence of fraud due to misrepresentation in the realm of college education financial assistance services. (Note: Potential research topic)

Misrepresentations about Sources:
Providing false information about sources from which consumers can obtain financial assistance (e.g., scholarships, grants, loans).

Tailored Portfolios Misrepresentation:
Misleading consumers regarding the provision of customized portfolios of assistance to meet their specific needs.

Pre-Selection Misrepresentation:
Falsely claiming that students have been pre-selected as eligible for financial assistance.

Conditional Assistance Misrepresentation:
Promising assistance to consumers who purchase specific services from designated entities.

Business Relationship Misrepresentation:
Providing misleading information about business relationships between entities that award or may award financial assistance.

Refund Misrepresentation:
- Misrepresenting refund policies, especially related to processing fees.

Despite efforts by organizations and law enforcement, scholarship fraud remains a significant issue due to a lack of awareness among consumers. (Note: Potential research topic on quantifying the # of knowledgeable consumers before and after updated awareness campaigns)


### Optional Practical Training (OPT) Training Plan for STEM OPT Students

Form I–983 or Successor Form:
A student must fully complete an individualized Form I–983 or its successor form.
Requisite signatures from an appropriate individual in the employer’s organization are necessary, consistent with form instructions.
The form is essential before the Designated School Official (DSO) can recommend a 24-month OPT extension under specific conditions in SEVIS.
The student must submit the completed form, including a certification of adherence to the training plan, to their DSO.
The signed form must also be presented to a DSO at the educational institution of the student’s most recent enrollment.
Additionally, while in F–1 student status, the student may need to submit the form to ICE and/or USCIS upon request or as per form instructions.

Training Plan Goals:
The training plan outlined in the Form I–983 or successor form must:
Identify goals for the STEM practical training opportunity.
Specify knowledge, skills, or techniques that will be imparted to the student.
Explain how these goals will be achieved through the work-based learning opportunity with the employer.
Describe a performance evaluation process.
Detail methods of oversight and supervision.
Employers can use existing training programs or policies to meet performance evaluation and oversight requirements.

Direct Relation to STEM Degree:
The training plan must clearly explain how the training is directly related to the student’s qualifying STEM degree.


### Edith Nourse Rogers STEM Scholarship

The Edith Nourse Rogers STEM Scholarship is a valuable provision of the Harry W. Colmery Veterans Educational Assistance Act (Forever GI Bill). It offers additional benefits to students training in the high-demand fields of Science, Technology, Engineering, and Math (STEM). Given that obtaining a degree in these areas often requires more extensive training, this scholarship aims to bridge that gap and incentivize students pursuing critical careers.

Benefits:
The scholarship provides up to nine months of additional Post-9/11 GI Bill benefits, with a maximum value of $30,000.
It is available to qualifying Veterans and Fry Scholars seeking an undergraduate STEM degree or those who have already earned a STEM degree and are pursuing a teaching certification.

Expanded Eligibility:
As of January 5, 2021, section 1001 of Public Law 116-315 expanded eligibility for the Edith Nourse STEM Scholarship.
Now, scholarships are also available to those enrolled in dual-secondary degrees and health care professionals completing clinical training for state or locality licensure.

Eligibility Criteria:
To qualify for the Rogers STEM Scholarship, a student must meet one of the following conditions:
Be enrolled in an undergraduate STEM degree program or a qualifying dual-degree program requiring at least 120 semester credit hours (or 180 quarter credit hours) for completion.
Hold a Bachelor’s degree in a STEM field and be accepted or enrolled in a Teaching Certification program.
Hold a Bachelor’s or graduate degree in a STEM field and be enrolled in a covered clinical training program.
Additionally, the student must have completed at least 60 semester hours (or 90 quarter credit hours) toward the STEM degree.
Furthermore, they must have exhausted or will exhaust their Post-9/11 GI Bill entitlement within six months based on their current enrollment.
Students must be enrolled in or have earned a degree in one of the following areas on the STEM Designated Degree Program list.


### Marine Gunnery Sergeant John David Fry Scholarship

The Fry Scholarship offers Post-9/11 GI Bill benefits to eligible beneficiaries, including children and surviving spouses of Service members who died after September 10, 2001. Here are the key points:

Eligibility Criteria:
Children and surviving spouses qualify if the Service member:
Died while serving on duty other than active duty as a member of the Armed Forces.
Suffered a service-connected disability while a member of the Selected Reserve.

Benefit Duration:
Eligible beneficiaries attending school can receive up to 36 months of benefits at the 100% level.
The Fry Scholarship covers full tuition and fees directly for in-state students at public schools.
For private or foreign schools, tuition and fees are capped at a statutory maximum per academic year.
Additional benefits include a monthly housing allowance and a books and supplies stipend.

Surviving Children:
Eligible children can begin an approved program of education before the age of 18.
Marital status does not affect eligibility.
If the qualifying parent’s death occurred before January 1, 2013, the child’s eligibility ends on their 33rd birthday.
If the qualifying parent’s death occurred on or after January 1, 2013, the child’s eligibility never expires.

Surviving Spouses:
There is no specific timeline for using the benefit.
However, a spouse will lose eligibility upon remarriage.

Recent Expansion:
Effective August 1, 2021, children or spouses of members of the Selected Reserves are also eligible under the Fry Scholarship.

SCOs should identify Fry students as chapter 33 and use their social security number as their file number. Certify Fry students as any other chapter 33 student. Students who are not eligible will be sent a disallowance letter that explains the reason for their disallowance and will explain the appeal process.




### GI Bill Chapter 30 (MGIB-AD) Eligibility and Benefits

Eligibility Categories:
- Chapter 30 benefits generally apply to Veterans who began active duty service after June 30, 1985.

Eligibility criteria include:
- Pay reduction of $100 a month for 12 months during active duty.
- Honorable discharge.

Exclusions:
- Veterans with a General Under Honorable Conditions discharge or any other discharge other than Honorable are excluded.
- Officers commissioned after December 31, 1976, through military academies or ROTC scholarship programs (payments exceeding $3,400/year) are also excluded.

Additional Eligibility:
- Individuals released from active duty with an Honorable discharge by reason of Convenience of the Government (COG) are eligible.
- Eligible individuals receive 36 months of MGIB-AD at the appropriate rate.

Payment:
- Chapter 30 benefits are paid monthly directly to the Veteran.
- Post-9/11 GI Bill and Yellow Ribbon Program

Effective August 1, 2009:
- The Post-9/11 GI Bill pays the highest public in-state undergraduate tuition and fees.
- Veterans attending private institutions, graduate schools, or out-of-state schools may have tuition and fees that exceed this amount.
- If enrolled at a Yellow Ribbon participating institution, additional funds may be available without an additional charge to their entitlement.

Effective August 1, 2011:

U.S. Public Schools:
- The actual net cost for in-state tuition and fees after applying waivers, scholarships, aid, or assistance (except specific funds) directly to the institution.

U.S. Private Schools:
- The lesser of the actual net cost or the annual maximum for the academic year.
- The Yellow Ribbon Program may provide additional funds if tuition and fees exceed the amount payable by VA.
- The Yellow Ribbon Program will include active-duty Service members and their spouses using transferred entitlement.

Yellow Ribbon Agreement:
- Institutions voluntarily entering into a Yellow Ribbon Agreement choose the amount of tuition and fees.
- VA matches that amount and issues payment directly to the institution.
- These amounts are considered maximums that the school will contribute.

Matching Contribution:
- Regardless of the agreement, the VA will match a school’s contribution up to 50% of the uncovered tuition and fees.
- If a school submits an amount exceeding 50% of the uncovered tuition and fees, the VA will pay 50% of the uncovered costs under the Yellow Ribbon Program.


Eligibility and Contributions

The Institution of Higher Learning (IHL) must:
- Provide contributions to eligible individuals on a first-come, first-served basis.
- Offer contributions during the current academic year and subsequent years.
- Make contributions in the form of a grant, scholarship, etc.
- Specify the dollar amount contributed per individual for the academic year.
- State the maximum number of individuals eligible for contributions in any given academic year.

Funds Usage:
- Funds used by the institution for the YRP must be available for unrestricted use.
- Restricted funds from third parties or internal institution funds cannot be part of the institution’s contribution for the YRP.

## Appendix

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/4978a8d9-1857-435d-a4f9-d39ec80319ac)

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/320906fa-0f3f-4195-aca9-6e0e15734dfa)

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/f0cc8090-32ce-4f54-8b08-fe71588e01d9)

Table 2: Confirmed fraud amounts breakdown by VA Services.

FY2023 Payment Accuracy Dataset_Data_As_of 11.21.2023



## Glossary of terms


These definitions provide essential context for understanding payment processes and detecting potential fraud within VA.gov.


Awards: Awards encompass grants, subgrants, loans, cooperative agreements, and other forms of financial assistance.
They also include contracts, subcontracts, purchase orders, task orders, and delivery orders.


Appropriation: An appropriation is a provision of law that authorizes the expenditure of funds for a specific purpose.


Obligations: Obligations represent the legal liability of the Federal government, such as a contract or grant award.


Object Class:
Object class is a way of identifying obligations based on the types of goods or services purchased.
Examples include personnel compensation, supplies and materials, and equipment.


Outlays:
Outlays refer to the issuance of checks, disbursements of cash, or electronic transfers of funds made to liquidate a federal obligation.


Program Activity:
Program activity refers to a specific activity or project listed in the program and financing schedules of the annual US Government budget.
The Program Activity section of the President’s Budget shows the new obligations incurred for each principal program activity or project financed.


Treasury Account Symbol (TAS):
The TAS is an identification code assigned by the Treasury, in collaboration with OMB and the owner agency.
It is used for individual appropriations, receipts, or other fund accounts.
All financial transactions of the Federal government are classified by TAS for reporting to OMB and Treasury.


## Works Cited

BTSSS. “BTSSS Overview.” Home · BTSSS, 2023, https://dvagov-btsss.dynamics365portals.us/. Accessed 29 February 2024.
eCFR. “8 CFR 214.2 -- Special requirements for admission, extension, and maintenance of status.” eCFR, 2023, https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2#p-214.2(f)(10)(ii)(C). Accessed 17 January 2024.
ECFR.gov. “48 CFR Part 13 -- Simplified Acquisition Procedures (FAR Part 13).” eCFR, 2024, https://www.ecfr.gov/current/title-48/chapter-1/subchapter-C/part-13#subpart-13.4. Accessed 17 January 2024.
Education.gov. “The College Scholarship Fraud Prevention Act of 2000: Seventh Annual Report to Congress by the Department of Justice, the Depar.” ERIC, 2008, https://files.eric.ed.gov/fulltext/ED504629.pdf. Accessed 25 January 2024.
Federal Register. “Update to the Department of Homeland Security STEM Designated Degree Program List.” Federal Register, 21 January 2022, https://www.federalregister.gov/documents/2022/01/21/2022-01188/update-to-the-department-of-homeland-security-stem-designated-degree-program-list. Accessed 17 January 2024.
FSC-VA.gov. “Payments.” VA-FSC Internet, 2016, https://www.fsc.va.gov/fsc/payments.asp. Accessed 22 January 2024.
FTC. “College Scholarship Fraud Prevention Act of 2000: Eleventh Annual Report to Congress by the United States Department of Educatio.” Federal Trade Commission, 2011, https://www.ftc.gov/sites/default/files/documents/reports/college-scholarship-fraud-prevention-act-2000-eleventh-annual-report-congress-united-states/1211scholarshipfraudreport.pdf. Accessed 25 January 2024.
“FY 2020 OMB Supplemental Data Call Veterans Affairs (VA).” FY 2020 OMB Supplemental Data Call Veterans Affairs (VA), 2020, https://www.cfo.gov/wp-content-2/Supplemental-Data-Call-2020/VA.pdf. Accessed 18 January 2024.
Govinfo. Scholarship Fraud, 9 November 2017, https://www.govinfo.gov/content/pkg/USCODE-2022-title20/pdf/USCODE-2022-title20-chap28-subchapIV-partG-sec1092d.pdf. Accessed 25 January 2024.
knowva.ebenefits.va.gov/. “School Certifying Official Handbook (On-line).” knowva.ebenefits.va.gov/, 2024, https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000149088/School-Certifying-Official-Handbook-On-line#Enrolling_in_ACH_Direct_Deposit. Accessed 24 January 2024.
OIT VA. “OIT and VA.gov.” OIT.gov, 2023, https://vaww.ea.oit.va.gov/vba-obi-bsm/. Accessed 29 February 2024.
oversight.gov. OIG Reports, 2022, https://www.oversight.gov/sites/default/files/oig-reports/VA/VAOIG-22-01155-14.pdf. Accessed 29 February 2024.
VA.gov. “Change Your VA Direct Deposit Information | Veterans Affairs.” VA.gov, 21 February 2024, https://www.va.gov/change-direct-deposit/. Accessed 25 March 2024.
VA.gov. “Life Insurance Dividend Payment Options | Veterans Affairs.” VA.gov, 22 January 2024, https://www.va.gov/resources/life-insurance-dividend-payment-options/. Accessed 29 February 2024.
VA.gov. “Protecting Veterans From Fraud | Veterans Affairs.” VA.gov, 12 February 2024, https://www.va.gov/initiatives/protecting-veterans-from-fraud/. Accessed 29 February 2024.
VA.gov. “Review And Pay Your VA Copay Bill | Veterans Affairs.” VA.gov, 12 October 2022, https://www.va.gov/health-care/pay-copay-bill/. Accessed 29 February 2024.
VA.gov. “U.S. Department of Veterans Affairs Fiscal Year 2024 Budget Submission Volume 5 of 5 Information Technology Programs and Electro.” VA.gov, 2024, https://www.va.gov/budget/docs/summary/fy2024-va-budget-volume-v-information-technology-programs-and-electronic-health-record-modernization.pdf. Accessed 22 January 2024.
VA News. “Protect your benefits: Combatting Payment Redirection Fraud - VA News.” VA News, 10 October 2023, https://news.va.gov/124837/protect-your-benefits-combatting-payment-redirection-fraud/. Accessed 24 January 2024.
Veterans Administration. “VA Automobile Allowance And Adaptive Equipment | Veterans Affairs.” VA.gov, 2024, https://www.va.gov/disability/eligibility/special-claims/automobile-allowance-adaptive-equipment/. Accessed 24 January 2024.
eCFR. “8 CFR 214.2 -- Special requirements for admission, extension, and maintenance of status.” eCFR, 2023, https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2#p-214.2(f)(10)(ii)(C). Accessed 17 January 2024.
ECFR.gov. “48 CFR Part 13 -- Simplified Acquisition Procedures (FAR Part 13).” eCFR, 2024, https://www.ecfr.gov/current/title-48/chapter-1/subchapter-C/part-13#subpart-13.4. Accessed 17 January 2024.
Education.gov. “The College Scholarship Fraud Prevention Act of 2000: Seventh Annual Report to Congress by the Department of Justice, the Depar.” ERIC, 2008, https://files.eric.ed.gov/fulltext/ED504629.pdf. Accessed 25 January 2024.
Federal Register. “Update to the Department of Homeland Security STEM Designated Degree Program List.” Federal Register, 21 January 2022, https://www.federalregister.gov/documents/2022/01/21/2022-01188/update-to-the-department-of-homeland-security-stem-designated-degree-program-list. Accessed 17 January 2024.
FSC-VA.gov. “Payments.” VA-FSC Internet, 2016, https://www.fsc.va.gov/fsc/payments.asp. Accessed 22 January 2024.
FTC. “College Scholarship Fraud Prevention Act of 2000: Eleventh Annual Report to Congress by the United States Department of Educatio.” Federal Trade Commission, 2011, https://www.ftc.gov/sites/default/files/documents/reports/college-scholarship-fraud-prevention-act-2000-eleventh-annual-report-congress-united-states/1211scholarshipfraudreport.pdf. Accessed 25 January 2024.
“FY 2020 OMB Supplemental Data Call Veterans Affairs (VA).” FY 2020 OMB Supplemental Data Call Veterans Affairs (VA), 2020, https://www.cfo.gov/wp-content-2/Supplemental-Data-Call-2020/VA.pdf. Accessed 18 January 2024.
Govinfo. Scholarship Fraud, 9 November 2017, https://www.govinfo.gov/content/pkg/USCODE-2022-title20/pdf/USCODE-2022-title20-chap28-subchapIV-partG-sec1092d.pdf. Accessed 25 January 2024.
knowva.ebenefits.va.gov/. “School Certifying Official Handbook (On-line).” knowva.ebenefits.va.gov/, 2024, https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000149088/School-Certifying-Official-Handbook-On-line#Enrolling_in_ACH_Direct_Deposit. Accessed 24 January 2024.
VA.gov. “Life Insurance Dividend Payment Options | Veterans Affairs.” VA.gov, 22 January 2024, https://www.va.gov/resources/life-insurance-dividend-payment-options/. Accessed 29 February 2024.
VA.gov. “U.S. Department of Veterans Affairs Fiscal Year 2024 Budget Submission Volume 5 of 5 Information Technology Programs and Electro.” VA.gov, 2024, https://www.va.gov/budget/docs/summary/fy2024-va-budget-volume-v-information-technology-programs-and-electronic-health-record-modernization.pdf. Accessed 22 January 2024.
VA News. “Protect your benefits: Combatting Payment Redirection Fraud - VA News.” VA News, 10 October 2023, https://news.va.gov/124837/protect-your-benefits-combatting-payment-redirection-fraud/. Accessed 24 January 2024.
Veterans Administration. “VA Automobile Allowance And Adaptive Equipment | Veterans Affairs.” VA.gov, 2024, https://www.va.gov/disability/eligibility/special-claims/automobile-allowance-adaptive-equipment/. Accessed 24 January 2024.







