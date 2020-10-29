# Direct Deposit for EDU: discovery & process flows
**VSA AuthdExp/eBenefits Teams | October 2020**

`James Adams, designer | Slack: @Jim Adams | GH: Sporeboy`

---

### Users
Recipients of VA compensation and pension (C&P), or educational (EDU) payments can elect to have deposits made directly to their checking or savings account via Electronic Funds Transfer (EFT). These recipients include Veterans and qualifying dependents, and payments are made from C&P, GI Bill and Veteran Readiness and Employment (VR&E) programs. Some recipients get all three payment types. `confirm`

Payment recipients can initiate or change their direct deposit information three ways: calling the Veteran's hotline, appearing in-person at their regional office, or using the VA.gov and eBenefits websites. Veterans without a bank may qualify for an account through the Veterans Benefits Banking Program (VBBP).

Direct deposits for C&P and EDU (GI Bill and VR&E) `confirm` payments are set up and managed independently. Currently C&P direct deposit self-service is managed within the VA.gov user profile; EDU direct deposit is handled in eBenefits. The two DD features will be ultimately consolidated within the user profile.

### EDU Direct Deposit enrollment
It is unclear whether or not a user can "enroll" or "set up" direct deposit using the exisiting online tools. The "Debt Collection Improvement Act of 1996" which was signed into law on April 26, 1996 required all Federal payments to be made by Electronic Fund Transfer (EFT or Direct Deposit) beginning January 1, 1999. Waivers are available where the conversion(?) from paper checks imposes a hardship. This seems to indicate that EFT/DD is the default and may be set up when the decision to pay a benefit claim is made.

### EDU Direct deposit change processes
Users who want to set up(?) or manage direct deposit of their EDU payments must sign into eBenefits using a Premium DSLogon. Users who begin their path on VA.gov will be redirected to an eBenefits content page. 

#### Veterans Benefits Banking Program (VBBP)
VBBP went on line December 2019. The program provides Veterans and their beneficiaries the chance to safely, reliably, and inexpensively receive and manage their VA monetary benefits through financial services at participating banks. The program also helps Veterans without a bank to qualify for an account.

#### VA Form 29-0309
There is a paper form to enroll in direct deposit, or change direct deposit information. VA Form 29-0309 is a simple one-page form that has two sections: contact and identifying info, and banking info. It also includes a checkbox for the user to indicate participation in VAMatic. There is some indication that direct deposit information is embedded in other VA.gov forms, such as the 526EZ.

[VA Form 29-0309 Direct Deposit Enrollment/Change](https://www.vba.va.gov/pubs/forms/VBA-29-0309-ARE.pdf)

#### eBenefits current user flow:

Note: Users need a Premium DS Logon (LOA3) account to access this feature.

- Navigate to eBenefits
- Click "Personal Contact and Direct Deposit" link under Manage Benefits or Log in
- Log in using DSLogon via link on landing page
- Click "Update your Direct Deposit and contact information..." link on Dashboard screen
- Click "Edit Payment Information" button in Payment Information section
- Select "Change direct deposit information..." radio button near bottom of screen
- Input or amend Account Type, Bank Routing Number, and Bank Account Number, confirming the last two
- Click "Save My Changes" button

<details>
  <summary><strong>eBenefits user flow diagram</strong> (Click to show diagram)</summary>
  
  ![Current eBenefits user flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/design/DD_EDU_Breakdown_1.png)
</details>
<details>
  <summary><strong>eBenefits screens</strong> (Click to show diagram)</summary>
  
  ![Current eBenefits DD screens](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/design/DD_EDU_Screens_1.png)
</details>

#### VA.gov (Compensation & Pension) current user flow:

- Navigate to VA.gov and sign in
- Sign in using DSLogon/MyHealtheVet/ID.me
- Click "Profile" link on Username drop-down
- Click "Direct deposit" in sidebar nav
- Click "Edit" in disability compensation account box
- Input or amend Routing number, Account Number or Account type
- Click "Update" button

<details>
  <summary><strong>VA.gov user flows</strong> (Click to show diagram)</summary>
  
  ![Current eBenefits DD screens](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/design/DD_EDU_User_Flows_1.png)
</details>

### EDU Direct deposit use cases

- Veteran wants to enroll in direct deposit for educational benefits (CH33, CH31, others?)
- Veteran wants to enroll in direct deposit for both C&P and EDU payments
- Veteran wants to change bank used for direct deposit for one or both payment types
- Veteran wants to change account (checking/savings) for direct deposit for one or both payment types
- Dependent want to enroll in direct deposit
- Dependent wants to change direct deposit details

#### Questions for team and/or business
For business:
- Can users use the eBenefits or VA.gov DD features to **enroll** in direct deposit, or does enrollment occur when a person begins receiving benefits?
- How long does it take to initially enroll in and set up direct deposit; how long to see a change take effect?
- Do potential users of this feature on VA.gov include **dependents**?
- So, would direct deposit arrangements (C&P ans EDU) cover **dependents’** C&P, education and DIC payments?
- Does direct deposit cover Special Monthly Payments (SMC) made to veterans? Is that folded-in with C&P payments?
- Are payment recipients allowed to use paper forms for DD changes (e.g. the 29-0309)? Are they discouraged from this?
- Where is the C&P/EDU direct deposit crossover (did not find this in initial pass)? That is where would a change in EDU DD affect C&P paymnet's DD?
- How often do users choose different bank for C&P vs. EDU deposits?

For team:
- How are user's entry errors handled (e.g. incorrect account type or number)?
- Account info confirmation was required in eBenefits; why is that absent on VA.gov?
- What other common questions might be better answered on the DD form screen itself vs. the landing page (e.g. timeframe when enrolling)?

### Payment (compensation) use cases

|   | [Disability](https://www.va.gov/disability/) | [Pension](https://www.va.gov/pension/) | [Chapter 35](https://www.va.gov/education/survivor-dependent-benefits/) | [CH33/GI Bill](https://www.va.gov/education/about-gi-bill-benefits/post-9-11/) | [CH31/VR&E](https://www.va.gov/careers-employment/vocational-rehabilitation/) | [SMP](https://www.va.gov/disability/compensation-rates/special-monthly-compensation-rates/) | [DIC](https://www.va.gov/disability/dependency-indemnity-compensation/) |
| ---: | :---: | :---: |  :---: | :---: | :---: | :---: | :---: |
| Veteran | X | X |  | X | X | X |  |
| Service member |  |  |  | ? | X |  |  |
| Dependent |  |  | X | X |  | X | X |
| Parent |  |  |  |  |  | X | X |

#### Direct deposit category

| | Comp & Pen | Education | In Payment History |
| ---: | :---: | :---: | :---: |
| Disability | X |  | X |
| Pension | X |  | X |
| Chapter 35 |  | ? | X |
| CH33/GI Bill |  | X | X |
| CH31/VR&E |  | X | ? |
| SMP | ? |  |  |
| DIC | ? |  | X |

---
