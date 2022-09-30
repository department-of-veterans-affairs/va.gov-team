# Notes on medical financial things
Meeting notes from Riley Orr (Debt Resolution Team designer working on medical copays and patient statements) and Meg Peters (designer for the health apartment)</br>
Team met with Riley February 15, 2022

### What exactly does “copay” mean? What are examples of things that are copays?
- A copay is the amount the Veteran pays for medical care and pharmacy services depending on their [priority group](https://www.va.gov/health-care/eligibility/priority-groups/) and whether the treatment is connected to their service. Their priority group is determined through multiple factors including income and disability rating. 
- Examples of copays: Refilling a prescription, medical care at a community care facility 
- Prosthetic socks and hearing aid batteries and accessories: Veteran does not pay for them. The tool on VA.gov populates whatever the doctor prescribed.

Related Links:
- [Pay your VA copay bill](https://www.va.gov/health-care/pay-copay-bill/)
- [Copay rates](https://staging.va.gov/health-care/copay-rates/) 
- [Cost of care](https://staging.va.gov/health-care/about-va-health-benefits/cost-of-care/)

### Do Veterans understand what the word “copay” means?
- Can't find specific user research on this.
- In past research, Veterans have been confused about what their copay rating was. They were checking to find if VA was charging them too much money. To figure this out, a Veteran needs to know what priority group they're in. And over time, their disability rating could change, which could affect how much they owe VA.

### What is Veterans’ mental model of copays?
- Veterans conceptualize their copay statements as bills. During discovery research, most of our participants called a piece of mail detailing their VA medical charges as ‘VA bill’ or ‘Billing statement’. Several also stated their bill would be sent to collections if they didn’t pay. [See related research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/apr-2021/readout.md#overwhelmingly-veterans-conceptualize-the-veteran-patient-statements-as-bills)
- Research shows that some things are confusing to Veterans: 
  - The charges themselves on patient statements seemed dense. Veterans do not understand what they're being charged for. Example: 3 statements for prescription refill. If Veteran does not pay, then only 1st statement lists what they are being charged for. 
  - There are admin fees on patient statements. Related to what statement is being sent. If the Veteran does not pay, there are admin and interest fees on later statements. (Not sure what the different types of charges are -- would need to talk to a SME.) Ultimately the Veteran's debt can go to the IRS, which can withhold tax refunds, etc. At that point, the Veteran must resolve the debt with the IRS.

### Do Veterans think of their medical expenses with VA as a part of their financial business with VA – or as separate? 
(Examples of other financial things with VA are GI Bill payments and disability compensation. Both are payments to Veterans from VA.)
- Yes. During our discovery research, Veterans overwhelmingly expect to find all money owed to VA together. It’s also Congressionally mandated that we provide a way for Veterans to find information about all their debts in one place online, so we are currently working towards combining the existing VBA Debt Portal (education, disability compensation + pension debts) with the Medical Copay Tool. [See related research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/apr-2021/readout.md#overwhelmingly-veterans-conceptualize-the-veteran-patient-statements-as-bills)
- If a Veteran overpays, VA will refund the debt if it's for VBA-related things (education, disability, and pension). For medical copays, VA puts that balance towards future copay charges. 
- In summer of 2021, the Debt Resolution Team created concepts for combining all 3 tools: [VBA Debt Portal](https://www.va.gov/manage-va-debt/), [Medical Copay Tool](https://www.va.gov/health-care/pay-copay-bill/), and [Payment History](https://www.va.gov/va-payment-history/) 

### Please share insights from your research related to other key words (exs: “copayment,” “billing,” “bills,” “debt”) – or point us to this study.
- During a study, we asked Veterans to search for a pathway to copayment information from the homepage, they primarily looked for a variation of “bill”:
  - “Billing” / “Pay my bill” / “Pay bill” / “Pay bill here”
  - Words the Debt Resolution Team decided to use: “billing” “pay my bill” “balance.” In one study, 7 of 11 or 12 folks used these words. Across the board, “copay” meant “bill.” Wording they settled on for VA.gov: “Check details to resolve this bill” and “copay balance.”
- They also overwhelmingly conceptualize a statement as a bill. [See related research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/apr-2021/readout.md#veterans-looked-for-a-variety-of-keywords-when-searching-for-a-pathway-to-copayment-information-but-primarily-looked-for-bill)  
- There's a disconnect with the payment history tool and where they access their copays (Medical Copay Tool).    

### How do Veterans usually pay copays? Through pay.gov or by mail?
- Riley: I need to dig deeper on this. I believe most people preferred paying online but they struggled with certain aspects of Pay.gov such as finding their statement’s account number. We display the account number in the Medical Copay Tool so Veterans don’t need to download their statement to find that information. 
- Riley: I recall one participant during our discovery research study that stated they’d pay by check because they were more comfortable. 
- When VA.gov directed people to Pay.gov, they were confused. Needed account number and people not know where to find it. So we make it easy to find in our tool (medical copays). 

### What charges/information could a “patient statement” contain?
- Prescriptions
- Medical care

### Could a patient statement have non-medical things on it?
- Riley: Not that I’ve seen.

### Will medical expenses become part of your payment history? 
- Payment history now includes: disability compensation, pension, and education/GI Bill (as well as payments to survivors of Veterans or service members. [See payment history.](https://www.va.gov/va-payment-history/)
- The payment history tool shows Veterans money that VA sends them. We played around with bringing the payment history tool into the combined VBA/VHA debt portal but there aren’t plans in the immediate future to bring all 3 tools together: [VBA Debt Portal](https://www.va.gov/manage-va-debt/), [Medical Copay Tool](https://www.va.gov/health-care/pay-copay-bill/), and [Payment History](https://www.va.gov/va-payment-history/). 

### Will/does payment history include debts owed to VA?
- The payment history tool only shows Veterans money that VA sends them. The [VBA Debt Portal](https://staging.va.gov/manage-va-debt/) shows Veterans debts. (Sign in with test user 1.)

### Are patient statements being moved from AccessVA to VA.gov? Will they be PDFs and/or accessible web pages?
- Yes, they can [view patient statements here.](https://staging.va.gov/health-care/pay-copay-bill/) (Sign in with test user 80 or 81.)
- We are currently working on an HTML rendering of the statements.
- In research, only 1 person knew about the [AccessVA tool.](https://eauth.va.gov/accessva/)
- Currently Veterans only receive medical bills by mail. We are setting up notifications with VANotify. Not sure what the trigger for the notification will be.

### Do you have examples of patient statements you can share?
- [Sample patient statement on UX pin](https://preview.uxpin.com/a0f7710002cf5f0d104c63ea77f2c7112f0853f0#/pages//simulate/no-panels?mode=i0)
- [Guide to understanding your VA patient statement](https://www.va.gov/HEALTHBENEFITS/resources/publications/IB10-691-understanding_your_VA_patient_statement.pdf)


