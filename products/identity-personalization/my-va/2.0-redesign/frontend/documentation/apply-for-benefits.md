# Apply for benefits

## When to show the Apply for benefits section

**Show**

- We will always show this section.

## States
  
**State 1: A user who has never applied for and doesn’t have health care/disability/edu benefits; Also has no apps in flight**  

Showing the **health care block** if..:

- Someone does NOT have VA health care 
- Someone has NEVER applied for VA health care

Showing the **disability block** if…:

- Someone does NOT have a disability rating
- Someone does NOT have ANY claims in progress
- Someone has NEVER filed a claim for disability benefits

Showing the **education block** if:

- Someone does NOT have an Edu application in progress
- Someone has NEVER applied for edu benefits

![Apply for benefits_Getting started](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Apply%20for%20benefits_Getting%20started.jpg)

**State 1B: A user who has an in-progress health care, disability, OR education application**  

- If someone starts an application for health care, disability, or education, we remove that block from the “Benefits you might be interested in” section, and we move it up to the “Applications in progress” section.
- If someone starts a health care, disability, OR eduation application, or if they already have that benefit (as noted above) then we never show that block again in “Benefits you might be interested in.”

![Apply for benefits_Getting started_Apps in progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Apply%20for%20benefits_Getting%20started_Apps%20in%20progress.jpg)

**State 2: A user has some applications in progress**  

- If someone starts an application, we show it in the “Application in progress” section.
- In this particular example, we are showing what it would like if someone had NOT started a healthcare, disability, or edu application, but HAD started an application for something else (eg. pension; burial and memorial benefits)

![Apply for benefits_Apps in progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Apply%20for%20benefits_Apps%20in%20progress.jpg)

**State 2B: A user has some applications in progress, and either already has health/disability/edu or has applied for them**  

- If someone starts an application, we show it in the “Application in progress” section.
- If someone has already applied for healthcare, disability, AND edu benefits, or if they already have all of those benefits, then we do not need to show the “Benefits you might be interested in” section anymore.

![Apply for benefits_No getting started](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Apply%20for%20benefits_No%20getting%20started.jpg)

**State 3: A user has no applications in progress and no benefits in the “benefits you might be interested in” section**  

![Apply for benefits_No apps in progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Apply%20for%20benefits_No%20apps%20in%20progress.jpg)
