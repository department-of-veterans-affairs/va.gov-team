# Nametag Frotend Documentation
**Last updated - February 26, 2024 - added Figma link**

_These specs are largely pulled from the documentation done by the Benefits team in 11/23_

The Nametag appears on both Desktop & Mobile for VA.gov.

__[Figma mockups](https://www.figma.com/file/takD53OoltCjdlmGBwK3DH/Sketch-Archive---Authenticated-Experience?type=design&node-id=1%3A3754&mode=design&t=AjnTodamOvCVzRFF-1)__

## When to show the nametag:

**Show:**
- If someone is LOA3 (identity verified), except when there are MPI errors or legal name endpoint does not load (use cases listed below).
- If someone is LOA3 but the Profile is blocked (fiduciary flag/marked as incompetent/deceased).

**Do not show**
- If someone is LOA1 (not identity verified).
- Legal/full name endpoint does not load.
- Profile encounters MPI errors.

## States

### Disability rating

**State 1: User has a disability rating**
- We can only detect a disability rating if a user is LOA3 (identity verified). We can not detect if they have one if they are LOA1 (not identity verified).
- Show nametag with name (this includes First Name, Middle Name/Initials (if any, supports multiple capitalized characters, Last Name), branch of service (if returned), and disability rating as a percentage value.
- Include the total disability rating if someone has one.
- The disability rating should link to the the disability rating tool.
- The disability rating number we are showing is the total disability rating for a given veteran, which can be made up of one or more ratings. This integration already exists on VA.gov. For specifics on how to connect to that endpoint, please talk to the eBenefits migration team, who originally migrated this information over to VA.gov from eBenefits.
- The GET disability_compensation_form/rating_info endpoint might do the job. User 228 should work in staging.

**State 2: User does NOT have a disability rating**
- Show nametag with name and branch of service (if returned/applicable). A disability rating will not show since the user does not have one.

**State 3: Error state - We can not connect to the disability endpoint / unable to retrieve disability rating**
- Show nametag with name, branch service (if returned/applicable), and no disability rating, but link to disability overview page. In the event the disability endpoint is down, we degrade gracefully and show a generic "View disability rating" link instead of the customized link with the rating. We realize this means that some people who do not have a disability rating may see that link, and that is OK.

### Legal name

**State 1: Legal/full name end point loads**
- Show nametag with user's name (this includes First Name, Middle Name/Initials (if any, supports multiple capitalized characters), Last Name). Branch of service and disability rating will only show if they are returned/applicable.

**State 2: Legal/full name end point does NOT load**
- Do not display nametag.

### Military information

**State 1: User has branch of service available**
- Show nametag with user's name, military branch, and disability rating (if returned/applicable).

**State 2: User does NOT have a branch of service**
- Show nametag with user's name, and disability rating (if returned/applicable).

**State 3: Error state - Profile information/legal name loads, but military information is not available or military information call fails**
- Show nametag with user's name (and disability rating if applicable). Does not show military branch or branch name.

### Identity verification (Account security)
**State 1: Error state - Not in MPI**
- Do not display nametag.
  
**State 2: Error state - MPI connection error**
-  Do not display nametag.

### Blocked Profile
- This happens if someone has a fiduciary, is marked as incompetent, or is marked as deceased.
- Show nametag with all available user data.
- Same as standard LOA3 use cases.
