# Payment History Documentation

## Mockups

**Will add after design intent**

- [Desktop]()
- [Mobile]()

## When to show the Payment Information section

**Show**

- If a user is currently recieving any of the following:
  - Disability compensation
  - Pension compensation
  - Education payments

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
