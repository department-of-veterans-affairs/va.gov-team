# Nametag specs

## When to show the nametag

**Show**

- If someone is LOA3.

**Do not show**

- If we can not detect someone's name.

## States
  
**State 1**  

- Include the total disability rating **if** someone has one.
- The disability rating should link to the [the disability rating tool](https://www.va.gov/disability/view-disability-rating/rating).
- The disability rating number we are showing is the **total disability rating** for a given veteran, which can be made up of one or more ratings. This integration already exists on VA.gov. For specifics on how to connect to that endpoint, please talk to the **eBenefits migration team**, who originally migrated this information over to VA.gov from eBenefits.
    - The [`GET disability_compensation_form/rating_info`](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/getRatingInfo) endpoint might do the job. User 228 should work in staging.
- **Final copy for the disability rating link is TBD**.

![Name tag with disability rating](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Name%20tag%20with%20disability%20rating.jpg)

**State 2**

![Name tag without disability rating](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Name%20tag%20without%20disability%20rating.jpg)
