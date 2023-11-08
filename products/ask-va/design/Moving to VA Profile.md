# Moving to VA Profile

Last updated by @tygindraux on November 7, 2023

This document outlines how the move to VA Profile from Ask VA (AVA) Profile will impact submitters.

## What is VA Profile?

The VA Profile API provides a one-source solution to retrieve contact information, communication permissions, demographics, rating and awards, health eligibility and enrollment, and military personnel data about Veterans and other users.

When an authenticated user logs into VA.gov and clicks to view their profile, their data is pulled using the VA Profile API. When the user updates any of the fields in their profile and clicks save, the API will update the appropriate database.

Learn more [about VA Profile and how it differs from AVA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/spikes/va_profile_spike.md).

## How will the move to VA Profile impact submitters?

When we move to VA.gov, we'll start using VA Profile instead of AVA Profile. This change will have no impact on agents. This will have a very minor impact on submitters: If a field does not exist in VA Profile (but used to exist in AVA Profile), they will now need to manually fill it in or edit their VA.gov profile.

These examples demonstrate the similarity, from the submitter's perspective.

### User journey on ask.va.gov

1. Submitter signs in.
2. Submitter's information is pre-filled in the form when possible (pulling from AVA Profile).
3. Submitter makes any changes to information that was pre-filled (for example, they have a new phone number).
4. Submitter fills in fields that were not pre-filled.
5. Submitter sends inquiry.

### User journey on va.gov/contact-us/ask-va

1. Submitter signs in.
2. Submitter's information is pre-filled in the form when possible (pulling from VA Profile).
3. Submitter goes to their VA.gov profile to makes any changes to information that was pre-filled (for example, they have a new phone number), saves them and returns to the form.
4. Submitter fills in fields that were not pre-filled.
5. Submitter sends inquiry.

#### How their journey changes
In Step 4, when we pull from VA Profile, there are certain fields that don't exist in VA Profile and do exist in AVA Profile. This means they used to be pre-filled for a submitter (when Ask VA was on ask.va.gov) but they no longer are. In these cases, a submitter will have to manually fill in their information or edit their VA.gov profile:

- Suffix
  - This does not pre-fill from VA Profile, so they will manually fill it in.
- Pronouns
  - This does not pre-fill from VA Profile, so they will manually fill it in.
- Business phone
  - There is no field in the form for business phone, there's just one field for phone number.
  - We'll pull their personal phone number from their VA Profile, so if they want to change this to their business phone number, they will need to edit their personal phone number in their VA.gov profile.
- Business email
  - There is no field in the form for business email, there's just one field for email.
  - We'll pull their personal email from their VA Profile, so if they want to change this to their business email, they will need to edit their personal email in their VA.gov profile.
- School State
  - This does not pre-fill from VA Profile, so they will manually fill it in.
- School Facility
  - This does not pre-fill from VA Profile, so they will manually fill it in.
- Service Number
  - This does not pre-fill from VA Profile, so they will manually fill it in, or, they can input their Social Security Number instead.

## Comparison of all fields in VA Profile and AVA Profile

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
|Work phone number (U.S. numbers only) (*Required)|Business Phone|
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
