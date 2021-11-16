# Nametag specs

## InVision Mockups

- [Desktop](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/screens)
- [Mobile](https://vsateams.invisionapp.com/share/GC10HT8RSMQN#/screens)

## When to show the nametag

**Show**

- If someone is LOA3.

**Do not show**

- If someone is LOA1.

## States
  
**State 1: User has a disability rating**  

- Include the total disability rating **if** someone has one.
- The disability rating should link to the [the disability rating tool](https://www.va.gov/disability/view-disability-rating/rating).
- The disability rating number we are showing is the **total disability rating** for a given veteran, which can be made up of one or more ratings. This integration already exists on VA.gov. For specifics on how to connect to that endpoint, please talk to the **eBenefits migration team**, who originally migrated this information over to VA.gov from eBenefits.
    - The [`GET disability_compensation_form/rating_info`](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/getRatingInfo) endpoint might do the job. User 228 should work in staging.

*Copy specs*

[Copy documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/my-va-copy.md)

![Name tag with disability rating](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/name-tag-disability-rating.png)

**State 2: User does not have a disability rating**

*Copy specs*

[Copy documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/my-va-copy.md)

![Name tag without disability rating](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/name-tag-no-disability-rating.png)

**Error state: We can not connect to the disability endpoint**

In the event the disability endpoint is down, we can degrade gracefully and show a generic "View disability rating" link instead of the customized link with the rating. We realize this means that some people who do not have a disability rating may see that link, and that is OK.

*Copy specs*

[Copy documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/my-va-copy.md)

![Name tag with disability rating_error state](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/name-tag-error-state.png)
