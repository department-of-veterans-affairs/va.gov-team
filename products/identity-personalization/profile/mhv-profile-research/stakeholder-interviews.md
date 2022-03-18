# My HealtheVet (MHV) Personal Information: Stakeholder Interviews
3/17/2022
Liz Lantz, VSA Authenticated Experience

## Background
We interviewed MHV stakeholders to better understand their expectations for the transition to a single profile for Veterans. What we learned will inform our approach toward a strategy for how we might provide a single profile experience for Veterans on VA.gov

## Goals
1. Learn stakeholder expectations.
2. Understand if there is anything else we should be considering that we haven't thought about.
3. Determine if we need to talk to coordinators and help desk staff.

## Who we spoke to
1. Nancy Wilck, Director of Connected Health Implementation
2. Carnetta Scruggs, MHV Product Owner
3. Theresa Hancock, Director, VHCIO (MHV product lead)
4. Susan Haidary, MHV Coordinator Lead
5. Brenda Torres-Hill,  Deputy Associate Director, MHV Help Desk
6. Tricia Henry, MHV Product Owner
7. VA.gov Identity team

## Findings Summary
1. Above all else, we need to keep the patient experience at the forefront of our work.
2. MHV stakeholders expect a single place for Veterans to manage their profile information, and have a desire to streamline Veteran data. 
3. The MHV team has audited and planned for the majority of fields in the MHV profile; there are 4 sections we definitely need to get user feedback on.
4. MHV notification settings will be a confirmed change to VA.gov profile.
5. There is some uncertainty whether health data fields belong in a health section or a personal profile.
6. The MHV team is working incrementally toward having Veterans manage their profile information on VA.gov instead of My HealtheVet; the first big step forward is planned for September 2022.
7. MHV coordinators and help desk staff do not reference information from the MHV personal information to assist Veterans. 

## Findings Details
### Above all else, we need to keep the patient experience at the forefront of our work.
All stakeholders we spoke with shared a sentiment that the patient experience needs to come first.  

Overall goals mentioned by the MHV product lead were (not only for the personal information section, but for the entire transition):
- Ensure we are not disruptive to a patients ability to manage their health care.
- Avoid creating an experience where patients have to go back and forth between multiple places to update their profiles (or access other health information).
- Maintain Foresee satisfaction scores, which are consistently very high, if not the highest among VA business lines. 
- Create an experience where patients find value in what we’re providing and want to come back.

**Implications:** 
- Overall, this aligns with VA.gov’s philosophy, so we shouldn’t experience any friction with MHV teams as we prioritize the patient experience.
- Further discussions with stakeholders on satisfaction score data may be needed, but that likely would not fall on our team to lead those.
	
### MHV stakeholders expect a single place for Veterans to manage their profile information, and have a desire to streamline Veteran data. 
Currently, Veterans can update profile information on VA.gov and MHV, and MHV stakeholders want Veterans to have only one place to manage this information.  Stakeholders shared mixed sentiment as to whether this should happen incrementally, or all at one time.

Data from the MHV personal information section is pulled from different sources. This varies by the account level a user has, and specific fields. For example, in a premium account, the data for first name is pulled from MPI, and the marital status stored in MHV. In a basic account, the first name is pulled from MHV because the account hasn’t been matched against any VA data sources.

Stakeholders shared that they expect that as part of the transition to a single profile, data will streamlined and we can rely on VA Profile for Veteran’s profile data.

**Implication:**  
- This expectation aligns with what our team would hope for Veterans managing their personal information.
- Since the VA.gov profile is already leveraging VA Profile’s data, their desire to use VA Profile will simplify the transition on our end.


### The MHV team has audited and planned for the majority of fields in the MHV profile; there are 4 sections we definitely need to get user feedback on.

For the most part, stakeholders feel that only data points that are part of a Veteran’s record (*not* self-entered into MHV, such as `blood type`) should come over from MHV to the VA.gov profile.  [This spreadsheet contains field-by-field information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/comparison/mhv-profile-audit.xlsx) about current plans for migration.  VA.gov’s profile already has the majority of the data points (first name, last name, date of birth, email, contact information, etc).

There are a few fields and sections of Personal Information stakeholders agree we need to learn more about from the Veteran perspective before figuring out whether or not they’ll be useful to patients in a VA.gov profile.
- What is your relationship to VA? (Field)
- My VA treating facilities (field)
- My Links (page under Personal information)
- Health Information (page under Personal information)

For the “What is your relationship to VA?” field, stakeholders shared that this data is tied to the cost model on how MHV is funded, performance measures, and marketing in medical centers. It’ll be critical to confirm that IAM can match the role values to Veteran profiles before we determine whether or not we can eliminate this field completely.  

We also learned that the “My VA treating facilities” field is a MHV feature that was never completed.  Stakeholders mentioned the ability to set preferences is critical for users who actively see doctors at multiple medical centers; VA patients in Spokane were cited as a specific example because half of those patients also go to Portland.

**Implications**: 
- We won’t need to add many new fields or data points to VA.gov profile in order to accommodate MHV users.
- We need to get user input on specific parts of MHV’s personal information section; ideally, we can talk to some Veterans who are actively being treated in multiple medical centers.
- More information is needed from IAM about matching VA relationship data to profiles.

### MHV notification settings will be a confirmed change to the VA.gov profile.

We are confident that the email notification settings from MHV will need to be migrated into VA.gov’s profile. VA Notify and MHV will soon start working together to determine a plan for that migration.

**Implication**: We need to start thinking about how notification settings will expand, especially since we don’t currently have any multi-channel notification options.

	
### There is some uncertainty whether health data fields belong in a health section or a personal profile.
Stakeholders felt that research should dictate whether or not things like “My VA treating facilities” and the health information card should be in a profile or in a health section, like the health apartment.

The VA.gov health apartment team isn’t sure about these fields, and neither are we. 

**Implication**: We should include this as a research goal for our Veteran-facing research.


### The MHV team is working incrementally toward having Veterans manage their profile information on VA.gov instead of My HealtheVet; the first big step forward is planned for September 2022.

Stakeholders shared that they’re planning on tackling the migration to a single profile in increments. To date, they’ve focused on the new user experience. Their plans are to:

1. Remove the MHV registration page in September 2022. This means that new users will not be able to get a MHV credential, and will have to use login.gov or ID.me.
2. Work out plans for the next phase of this transition in their next increment.
3. Eventually, fully retire the MHV login.

At some point, they will direct users to VA.gov to manage contact and profile information. Plans are TBD as contract renewal decisions are currently being made.

**Implications**:
- We may see a surge of new user registrations on VA.gov once MHV retires their registration page. 
- We should sync again with MHV once contract decisions are made and they begin planning for the next phase of the transition, so we have a better sense of when we’ll see MHV users managing info on VA.gov.

### MHV coordinators and help desk staff do not reference information from the MHV personal information to assist Veterans. 

MHV coordinators educate Veterans about My Healthevet, but don’t ever change information in the Personal Information section. If they need to refer to data about the Veteran, they’d use the data in the MHV admin portal, which comes from MPI. Any non-MPI data in the MHV personal information section is only viewable and used by the account holder.

The help desk that supports MHV guides Veterans to navigate to parts of MHV if they reach out for help, but does not use data from the personal information section to provide that help.

**Implication**: Coordinators and help desk staff will not be impacted by the transition to a single profile, beyond needing the typical product documentation and call center guides VA.gov produces for product updates.
