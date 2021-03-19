# Apply for benefits

## InVision Mockups

- [Desktop](https://vsateams.invisionapp.com/share/RNZWCZBXZJ6#/screens/443777220)
- [Mobile](https://vsateams.invisionapp.com/share/XNZWCYAYD45#/screens/443913926_My_VA_Mobile_Icons)

## When to show the Apply for benefits section

**Show**

- We will always show this section.

## States
  
**State 1: A user who has never applied for and doesn’t have health care/disability/edu benefits; Also has no apps in flight**  

*UX specs*

Show the **health care block** if..:

- Someone does NOT have VA health care 
- Someone has NEVER applied for VA health care

Show the **disability block** if…:

- Always show this block in this section. We may iterate on this and change the approach in the future.

Show the **education block** _unless_:

- If we determine that the user is getting direct deposit payments for education benefits via [this API](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/profile/getCh33BankAccount), we will hide this block.

*Visual specs*

Much of this is the same as the specs in the health care section:

- The biggest challenge here may be the columns. We don't have many examples of handling information in columns like this on VA.gov, but we've reviewed this with some of the design leads and they agree that this treatment makes sense given that it improves scannability ove the existing single-column treatment. For an example of how we handle information in columns, please refer to the [Pittsburgh VA medical center site](https://www.va.gov/pittsburgh-health-care/).

![Apply for benefits_Getting started](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Apply%20for%20benefits_Getting%20started.jpg)

*Copy specs*

- **All final copy is TBD**

**State 1B: A user who has an in-progress health care, disability, OR education application**  

*UX specs*

- If someone starts an application for health care we remove that block from the “Benefits you might be interested in” section, and we move it up to the “Applications in progress” section. We never show this block again after their health care application is submitted.

*Visual specs*

- For applications in progress, we can use the existing applications block/styling, but it's max width will be capped now to allow for the three-column structure suggested.

*Copy specs*

- **All final copy is TBD**

![Apply for benefits_Getting started_Apps in progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Apply%20for%20benefits_Getting%20started_Apps%20in%20progress.jpg)

**State 2: A user has some applications in progress**  

*UX specs*

- If someone starts an application, we show it in the “Application in progress” section.
- In this particular example, we are showing what it would like if someone had NOT started a healthcare application, but HAD started an application for something else (eg. pension; burial and memorial benefits).

*Visual specs*

- For applications in progress, we can use the existing applications block/styling, but it's max width will be capped now to allow for the three-column structure suggested.

![Apply for benefits_Apps in progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Apply%20for%20benefits_Apps%20in%20progress.jpg)

*Copy specs*

- **All final copy is TBD**

**State 3: A user has no applications in progress**  

![Apply for benefits_No apps in progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Apply%20for%20benefits_No%20apps%20in%20progress.jpg)
