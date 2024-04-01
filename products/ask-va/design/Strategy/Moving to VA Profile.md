# Moving to VA Profile

Last updated by @beckyphung on December 14, 2023

This document outlines how the move to VA Profile from Ask VA (AVA) Profile will impact submitters.

## What is VA Profile?

The VA Profile API provides a one-source solution to retrieve contact information, communication permissions, demographics, rating and awards, health eligibility and enrollment, and military personnel data about Veterans and other users.

When an authenticated user logs into VA.gov and clicks to view their profile, their data is pulled using the VA Profile API. When the user updates any of the fields in their profile and clicks save, the API will update the appropriate database.

Learn more [about VA Profile and how it differs from AVA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/spikes/va_profile_spike.md).

## How will the move to VA Profile impact submitters?

When we move to VA.gov, we'll start using VA Profile instead of AVA Profile for most fields. For fields that only exist in AVA Profile, we will continue to use AVA Profile. This change will have no impact on agents. 

These examples demonstrate the similarity, from the submitter's perspective.

### User journey on ask.va.gov

1. Submitter signs in.
2. Submitter's information is pre-filled in the form when possible (pulling from AVA Profile).
3. Submitter makes any changes to information that was pre-filled (for example, they have a new phone number).
4. Submitter fills in fields that were not pre-filled.
5. Submitter sends inquiry.

### User journey on va.gov/contact-us/ask-va

1. Submitter signs in.
2. Submitter's information is pre-filled:
    - Fields in both VA Profile and AVA Profile - Submitter's information is pre-filled from VA Profile
       - Submitter goes to their VA.gov profile to makes any changes to information that was pre-filled (for example, they have a new phone number), saves them and returns to the form.
       - Submitter can also edit most fields within the form, which will not make updates to their VA.gov profile data. [See guidance from the VA Design System here](https://design.va.gov/components/form/prefill).
    - Fields that do NOT exist in VA Profile and exist in AVA Profile - Submitter's information is pre-filled from AVA Profile
       - Submitter makes any changes within the form to pre-filled information (for example, they have a new phone number). 
7. Submitter fills in fields that were not pre-filled.
8. Submitter sends inquiry.

#### How their journey changes
In Step 4, when we pull from VA Profile, there are certain fields that don't exist in VA Profile and do exist in AVA Profile. These fields will still be pre-filled from AVA Profile:

- Suffix (can potentially come from VA Profile pending intake meeting with VA Profile team)
- Pronouns (can potentially come from VA Profile pending intake meeting with VA Profile team)
- School State
- School Facility
- Service Number
- Business phone
  - There is only one phone field in the Ask VA flow.
  - If the question is a business inquiry, then AVA Profile will pre-fill the front-end **Mobile phone number** field with the back-end Business phone field
  - Else, VA Profile will pre-fill the Mobile phone number field
- Business email
  - There is only one email field in the Ask VA flow.
  - If the question is a business inquiry, then AVA Profile will pre-fill the front-end **Email address** field with the back-end Business phone field
  - Else, VA Profile will pre-fill the Email address field
<br>
  In the new Ask VA flow, this is how we will determine if a question is a business inquiry:

- What's your question about == Someone else's VA benefits
- What's your relationship to the Veteran? == I’m connected to the Veteran through my work (for example, as a School Certifying Official or fiduciary)



## Comparison of all fields in VA Profile and AVA Profile as-is

|VA Profile fields|AVA Profile fields|
|:--|:--|
|Legal name|First Name, Middle Name, Last Name|
|Date of birth|Veteran's Date of Birth (MM/DD/YYYY)|
|Preferred name|Preferred Name|
|Gender identity|Gender|
|Disability rating||
||Suffix|
||Pronouns I use|
|Mailing address: Country (*Required)||
|Mailing address: Street address (*Required)||
|Mailing address: Street address 2||
|Mailing address: Street address 3||
|Mailing address: City (*Required)||
|Mailing address: State (*Required)||
|Mailing address: Zip code (*Required)||
|Home address: Country (*Required)|Country|
|Home address: Street address (*Required)|Street|
|Home address: Street address 2|Suite/Apt/Other|
|Home address: Street address 3||
|Home address: City (*Required)|City|
|Home address: State (*Required)|State|
|Home address: Zip code (*Required)|Zip Code|
|Home phone number (*Required)||
|Extension (6 digits maximum)||
|Work phone number (U.S. numbers only) (*Required)|Business phone|
|Extension (6 digits maximum)||
|Mobile phone number (U.S. numbers only) (*Required)|Personal Phone|
|Extension (6 digits maximum)||
|Contact email: Email Address (*Required)|Personal E-mail|
|Sign-in email: View or edit your sign-in email at ID.me||
||Business Email|
||School State|
||School Facility Code|
|[Military Branch]|Branch of Service|
||Service Number|
||Claim Number|
|[Service start date]|Veteran Service Start Date|
|[Service end date]|Veteran Service End Date|
|Email Address (*Required)||
|Mobile phone number (U.S. numbers only) (*Required)||
