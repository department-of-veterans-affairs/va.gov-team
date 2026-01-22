# **Landscape Analysis of the VA's Dependent Management Process for Pension**

**Note**: Read the [disability landscape](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/dependents-disability-landscape.md) first. In this doc we point out differences between managing dependents on pension vs disability benefit, and make pension-specific recommendations. 

[Sources](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755642960566/2825754c5b58bb972a5a7f5a594b46d982e2ad58?wid=0-1758224806968)

## **1\. Key Differences from Dependents-on-Disability**

1. Dependency is established as part of the initial pension claim, not as a separate EP. 
2. Parents cannot be dependents on a veteran’s pension (which they can on disability)
3. Spouses cannot have their own aid+attendance increase on pension unless they are also a veteran (which they can on disability)
4. Users can’t just add a dependent with 686 – they will often need to provide more detailed financial information (like from the 0969, 8416, 0518-1 or 0517-1)
5. VBA discontinued mandatory dependent verification for pension recipients several years ago. This used to be mandatory send of forms 0518-1 or 0517-1. Those forms can still be used to make changes, but are not mandatory.

**Key Findings that our team CAN impact:**
| Finding                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Recommendation                                                                                                                                                                                                                                                                                                                         |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The pension rates page states that child income only needs to be reported if it is over $15,000, but on the 674, we ask the user to list all of the child's income.                                                                                                                                                                                                                                                                                                                                                                                        | Clarify this with Pension SMEs. If we only need to collect any income over $15,000, we could avoid user headache w/ entering unneeded info                                                                                                                                                                                             |
| VA is supposed to automatically consider aid+attendance (A+A) for pension applicants, but they often don't if it isn't clear in the records (like it veteran didn't submit 2680).                                                                                                                                                                                                                                                                                                                                                                          | We could facilitate A+A additions on the 527 by asking specific questions about A+A, and directing a user to submit a 2680, or indicating to the VSR that they should request one.                                                                                                                                                     |
| When a user goes to add a spouse or child to pension, the claim goes into development because the user needs to provide the dependent financial info. I think 0516 and 0517 forms are still used to provide that financial info.                                                                                                                                                                                                                                                                                                                           | We could incorporate the financial info Qs from 0516/0517 into 686, preventing the user for entering a bunch of duplicate information in 2 forms.                                                                                                                                                                                      |
| There are a lot of details for a pension recipient to know and remember about their pension, but no one place to see that information. (their monthly payment, when the payment comes, which dependents are on the payment, where the money is going, what nursing home they are at, what % disabled they are, etc) In addition to dependents, pension recipients may have a fiduciary, and may need to regularly update the VA as their financial situation changes (ex: running out of money, spouse dies, moving from assisted living to memory care).  | Create a ‘my pension benefit’ for MyVA home screen that shows the user everything about their personal pension benefit in one place – like this type of thing for auto insurance (see image below this table) We could also think about improving the SEO of the pension benefit information by adding keywords and descriptions of the benefit that would appeal |


**Example of a "your policy" widget on an insurance website. We could use a similar concept to show a user their active pension benefit, and the important details and actions related to it**
**<img width="918" height="826" alt="Example auto policy from USAA" src="https://github.com/user-attachments/assets/4cc2dd44-6cb2-4ccc-9b0d-139d75dbb0b1" />

**Here is a basic mockup of this idea for MyVA**
<img width="750" height="582" alt="Screenshot 2025-12-04 at 2 42 19 PM" src="https://github.com/user-attachments/assets/742e666b-b5a2-4acb-990d-402ab15e6a89" />



**Key Findings that our team CANNOT impact:**
| Finding                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Recommendation                                                                                                                                                                                                                                                                                              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| In some cases, a surviving spouse might be automatically enrolled in DIC. In others, they need to take action to get those payments.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | If we can find out these rules, we could trigger personalized communications to survivors about the specific actions they need to take after the veteran's death, reducing their burden and potential underpayment/underutilization of benefits. We could also add content to the site about this scenario. |
| Veterans Pension has a marketing problem. It isn't reaching its target audience, resulting in fewer veterans getting the $ they need. Many veterans don't know about or understand this benefit. They confuse it with military pension and disability compensation.  But there are clear populations that could benefit from pension -- low-income veterans who might have been disabled in an accident after service, and low-income veterans in nursing/assisted living homes. More so than other benefits, children or grandchildren of veterans may be trying to find financial help for their aging or disabled veteran. The only way va.gov explains this benefit is "monthly payments", and then jumps right into eligibility. There is no page or place to learn "what is this benefit for".  I saw one external resource explain pension as money "for home care, adult day care, skilled nursing, memory care" – framing that could help more veterans find this benefit. | Ask content and IA team to prioritize marketing and explaining the benefits of this benefit more effectively for family members, nursing homes, etc.                                                                                                                                                        |

## **2\. Appendix**

**Dependent changes that could result in removal, a decrease in payments, and overpayments (if not reported)**
- The parenthetical includes the form or process a veteran can use to remove/edit them

| Spouse                             | Child                                                                                                         |
|------------------------------------|---------------------------------------------------------------------------------------------------------------|
| Death (686c, 0538, SSA automation) | Death (686c, 0538, SSA automation)                                                                            |
| Divorce (686c, 0538)               | Divorce (stepchildren only)(686c, 0538)                                                                       |
|                                    | Left school (if 18-23 and was previously enrolled in school)(674)                                             |
|                                    | Turned 18 (VBMS  automation)                                                                                  |
|                                    | Got married (686c, 0538)                                                                                      |
|                                    | Adopted out of family (686c, 0538)                                                                            |
|                                    | Stepchild left household for reason other than divorce (like went to live with other bio parent) (686c, 0538) |

**Dependent changes that could result in need to add dependent (and an increase in monthly payment amounts)**
- The parenthetical includes the form or process a veteran can use to add/edit them

| Spouse              | Child                                               |
|---------------------|-----------------------------------------------------|
| New marriage (686c) | Birth or adoption (686c)                            |
|                     | Student 18-23 starting or re-attending school (674) |
|                     | Turned 18, and is permanently disabled (686c)       |

**Other evidence required for adding dependents**

**If you live outside the US**: birth/marriage certificates

**If you adopted a child or married someone with an adopted child**: adoption stuff

**If your child is permanently disabled before they turn 18**: medical records, doctor statement

**If your child is 18-23 in school**: 674

**If your marriage is common-law**: 2x form 4170s, 2x form 41712

**If you have a tribal ceremony**: Various signed statements, no specific form

**If you have a proxy marriage**: whatever documentation you have

