# 10-10EZ - Medicare Claim Number use cases and users

- See ticket #44112 for Backend details
- See [ticket #33561](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/33561) for content background, as well as the links below for designs:
     - The claim number field [now has an expandable info alert](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/ygw2kK8)
     - The [open expandable info](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/eKeE8dq)
     - The [closed](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/rbpzrqd) and [open](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/wLqej1V) error states.

[List of most staging users and passwords](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)


### Test cases for ["Benefit payments and debts"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/payment-history-frontend.md)

**NOTE**: Anything to note for preparations prior to QA Testing?
|Test case|Intended outcome|Staging User|Prototype link|
|----|----|----|----|
|User has NEVER had payments made to them|User will not see the Benefit payments and debts section at all|**vets.gov.user+39@gmail.com**| [Never received payments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)|  
|User DOES have outstanding debt **AND** DOES have a payment made to them in the **last 30 days**|User sees an alert "You have n outstanding debts" with a bolded link "manage your VA debt", User will also see latest payment information in a box and "View your payment history" link.  There will also be an additional link displayed: "Manage your direct deposit" link|**vets.gov.user+1@gmail.com**| [Has Debts and Payments](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/7y2Wq3Z)|
|User DOES NOT have outstanding debts **AND** DOES have a payment made to them in the **last 30 days**|User will see a line of text stating "Your total VA debt balance is $0", User will see latest payment information in a box and "View your payment history" link. There will also be 2 additional links displayed: "Manage your direct deposit" link and "Learn about VA debt" link. |**vets.gov.user+36@gmail.com**|[No Debts, Has recent Payments](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/1KnQlRO)|
|User DOES have outstanding debts **AND** DOES NOT have a payment made to them in the **last 30 days**|User will see the Benefit payments and debts section with a text line "You haven't received any payments in the past 30 days.".User sees an alert "You have n outstanding debts" with a bolded link "Manage your VA debt".  There will also be additional links displayed: "View your payment history" link and "Manage your direct deposit" link.|**vets.gov.user+11@gmail.com**|[Outstanding Debts, No recent Payments](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/paD25yQ)|
|User DOES NOT have outstanding debts **AND** DOES NOT have a payment made to them in the **last 30 days**|User will see the Benefit payments and debts section with a text line "You haven't received any payments in the past 30 days.", User will see a line of text stating "Your total VA debt balance is $0" and there will be 3 links displayed: "View your payment history" link, "Manage your direct deposit" link, and "Learn about VA debt" link. |**vets.gov.user+21@gmail.com**|[No Debts, No recent Payments](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/R1JK3qy)|
|Payment detail that is showing in MyVA matches what is in the VA Payments tool|Cross reference the VA Payments tool and the Benefit payments and debts section to make sure the most recent payment information is correct|**vets.gov.user+36@gmail.com**| [Has recent payment](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/1KnQlRO)|
|Ensure # of outstanding debts is accurate|Number of oustanding debts in the Benefit payments and debts section should match the number of outstanding debts shown in the debt tool|**vets.gov.user+1@gmail.com**| [Has debts](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/7y2Wq3Z)|



#### Benefit payments and debts links
|Test case|Intended outcome|Staging User|Prototype link|
|----|----|----|----|
|Manage your direct deposit| Link to the direct deposit page in the user's Profile, appears when the user has direct deposit set up |**vets.gov.user+1@gmail.com**| [Manage your direct deposit link](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/R1JK3qy)|
|View your payment history| Link to the payment history page |**vets.gov.user+21@gmail.com**| [View your payment history link](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/R1JK3qy)|
|Learn about VA debt| Link to the debt management page, appears when the user has no outstanding debt |**vets.gov.user+21@gmail.com**| [Learn about VA debt link](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/R1JK3qy)|
|Manage your VA debt| Link to the debt management page, appears when the user has outstanding debt |**vets.gov.user+1@gmail.com**| [Manage your VA debt link](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/paD25yQ)|

#### Possible Payment types (informational only)
|Payment Category|Payment Type|
|----|----|
|Comp & Pen|Compensation & Pension - Recurring|
|Comp & Pen|Compensation & Pension - Retroactive|
|Comp & Pen|Compensation & Pension - Irregular|
|Education|Post-9/11 GI Bill|
|Education|CH31 VR&E|
|Education|MGIB-AD|
|Education|MGIB-SR|



#### Link already promoted to production ~Health Care links~ - 
|~Test case~|~Intended outcome~|~Staging User~|~Prototype link~|
|----|----|----|----|
|~Request Travel Reimbursement~|~Addition of the link to the Request for Travel Reimbursement shown on the Health Care section of My VA~|~**vets.gov.user+36@gmail.com**~|~[Request Travel Reimbursement](https://www.sketch.com/s/418ca6f6-cc24-4496-82aa-9deda03b08f6/a/qeyvMD3)~|
