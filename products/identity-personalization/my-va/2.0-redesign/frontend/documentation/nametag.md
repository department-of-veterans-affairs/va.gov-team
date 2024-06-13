# Nametag specs

## Figma Mockups

- [Desktop & Mobile](https://www.figma.com/file/takD53OoltCjdlmGBwK3DH/Sketch-Archive---Authenticated-Experience?type=design&node-id=1%3A3755&mode=design&t=CREOF8xG3jKa75nz-1)

## When to show the nametag

**Show**

- If someone is LOA3 (except when there are MPI errors or legal name endpoint does not load - use cases listed below).

**Do not show**

- If someone is LOA1.
- Legal/full name endpoint does not load.
- Profile encounters MPI errors.

## States

### Disability rating

**State 1: User has a disability rating**  

- Show nametag with name, branch of service, and disability rating as a percentage value. 
- Include the total disability rating **if** someone has one.
- The disability rating should link to the [the disability rating tool](https://www.va.gov/disability/view-disability-rating/rating).
- The disability rating number we are showing is the **total disability rating** for a given veteran, which can be made up of one or more ratings. This integration already exists on VA.gov. For specifics on how to connect to that endpoint, please talk to the **eBenefits migration team**, who originally migrated this information over to VA.gov from eBenefits.
    - The [`GET disability_compensation_form/rating_info`](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/getRatingInfo) endpoint might do the job. User 228 should work in staging.

**State 2: User does NOT have a disability rating**

- Show nametag with name and branch of service

**State 3: Error state - We can not connect to the disability endpoint / unable to retrieve disability rating**

- Show nametag with name, branch service, and no disability rating, but link to disability overview page. In the event the disability endpoint is down, we can degrade gracefully and show a generic "Your disability rating" link instead of the customized link with the rating. We realize this means that some people who do not have a disability rating may see that link, and that is OK.

----

### Legal name

**State 1: Legal/full name end point loads**

- Show nametag with user's name, military branch and branch name, and disability rating.

**State 2: Legal/full name end point does NOT load**

- Do not display nametag.

----

### Military information

**State 1: User has branch of service available**

- Show nametag with user's name, military branch, and disability rating.

**State 2: User does NOT have a branch of service**

- Show nametag with user's name only.

**State 3: Error state - Profile information/legal name loads, but military information is not available or military information call fails**

- Show nametag with user's name (and disability rating if applicable). Does not show military branch or branch name.

----

### Identity verification & fiduciary flag/marked as incompetent (Account security)

**State 1: Error state - Not in MPI**

- Do not display nametag.

**State 2: Error state - MPI connection error**

- Do not display nametag.

**State 3: Fiduciary flag / marked as incompetent**

- Show nametag with user's name only.
