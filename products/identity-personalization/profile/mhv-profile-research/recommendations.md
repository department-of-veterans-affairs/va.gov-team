# MyHealtheVet to VA.gov profile transition recommendations
## Office of the CTO - Digital Experience (OCTO-DE), Profile, Authenticated Experience
Date: `draft`

Liz Lantz, liz.lantz@adhocteam.us

## Background
In order to support Veterans in the Starting Up and Taking Care of Myself phases of the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf), we need to define a strategy for how to move forward with rolling the My HealtheVet (MHV) profile into the VA.gov profile. 

In order to do this, we conducted research to better understand:
1. The similarities and differences between the My HealtheVet and VA.gov profiles.
2. The current status of MHV profile work and transition planning.
3. How MHV support roles (coordinators and help desk) use the MHV profile.
4. How MHV users use the profile.

Read [the questions we sought to answer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/README.md#research-questions) and [our approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/README.md#solution-approach) in our project outline.


## Recommendations
The following recommendations are focused on 4 sections of the My HealtheVet personal information section:
1. My Profile
2. In case of emergency
3. Health information card
4. My links

The remaining sections are being migrated by the health modernization team; we focused our research on profile and other sections our teams had questions about.

### Maintain important items that are already consistent between the two profiles.

The following data points exist in both the MHV and VA.gov profiles.  These are important data points, and common to online profiles. We recommend keeping these in the VA.gov profile. 

Some are editable on MHV (indicated below) and will no longer be editable on VA.gov
| Field | Editable on MHV? | Note |
|----|----|----|
| First name | no | appears in name tag |
| Middle name | yes | will be read only; appears in name tag |
| Last name | no | appears in name tag |
| Suffix | yes | will be read only;  appears in name tag |
| Alias | yes | called “Preferred name” on VA.gov |
| Birth date | no | consistent with MHV |
| Military branches | yes | will be read only; appears in name tag and in Military information section |
| Email address | yes | consistent with MHV  |
| Home phone | yes |  consistent with MHV |
| Mobile phone | yes | consistent with MHV |
| Work phone | yes | consistent with MHV |

### Email notification settings need to be incorporated into VA.gov profile.
MHV currently has settings to manage email notifications for Rx Refill shipments, appointment reminders, medical images and report availability, and the MHV newsletter.

We’ll need to revisit our design for VA.gov profile notification items, since it currently only handles single channel notifications.

### Retire certain items with MHV.
Generally, we do not recommend moving things that don’t link back to a VA database.  This includes self-entered data points such as blood type, My Links, and the MHV In Case of Emergency information.

#### My Profile section
##### Social security number
- This is already slated for removal from the MHV profile in September 2022.
- **Recommendation:** Follow MHV’s lead and don’t bring this over to the VA.gov profile.

##### Gender
- We know from [previous research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/research/findings-summary.md#2-participants-who-identify-as-other-than-straight-or-cisgender-found-the-sex-assigned-at-birth-and-sexual-orientation-fields-triggering) that this data point is triggering for some Veterans, particularly because it can’t be changed online. 
- **Recommendation:** Stick with our decision to keep this out of the VA.gov profile.

##### Martial status and current occupation
- The MHV data for these fields does not impact any VA benefits for users.
- The majority of users we spoke with did not name these as fields that are important to them to update.
- **Recommendation:** Don’t bring these fields over to the VA.gov profile.

##### What is your relationship to VA? 
- We heard from stakeholders that this field is valuable for internal VA purposes, but they weren’t aware of a value for end users.
- End users were confused about the purpose of this field in their profile, and it wasn’t important to them to be able to update it since it doesn’t change.
- **Recommendation:** We shouldn't migrate this field to the VA.gov profile.

##### How would you like to be addressed?
- We heard from stakeholders that users love this field.
- Users weren’t clear about it’s purpose, despite it being directly under a heading reading “Welcome bar personalization”.  Many understood it to become a part of their health record so their doctor would know if they had any nicknames.
- **Recommendation:** We shouldn't migrate this field to the VA.gov profile. Our name tag serves the same purpose as the welcome bar on MHV, and preferred name will give users the functionality to let their doctor know how they’d like to be addressed.

##### Blood type and organ donor
- We heard from stakeholders that they feel these should not be editable fields in a VA.gov profile.
- We heard from users that they expect this information to be part of their medical record, and not something they need to update in their profile.
- **Recommendation:** Don’t move these as editable fields to the VA.gov profile. Have further discussions with health modernization team regarding how to handle health-related profile items (see below).

##### Preferred method of contact
- Since the VA is not set up to honor these preferences for all communications, it isn’t helpful for users to be able to update this setting. 
- **Recommendation:**  We shouldn't migrate this field to the VA.gov profile.

##### Fax and pager
- Stakeholders acknowledged that these were outdated methods of contact, and stated they were already planning to follow VA.gov profile and remove fax number.
- Multiple users commented that these fields were outdated in our interviews.
- **Recommendation:** We shouldn’t migrate these fields to the VA.gov profile.

##### My VA Treating facilities 
- We heard from stakeholders that this field is used by help desk staff to assist VA patients, but help desk staff stated they didn’t use this information to support patients.
- Stakeholders also stated that this field was intended to support functionality that was never completed.
- End users were confused about the purpose of this field in their profile, and it wasn’t important to them to be able to update it, even if they actively receive care at multiple VA facilities listed in their profile.
- **Recommendation:** We shouldn't migrate this field to the VA.gov profile.

##### Account security questions and answers
- Stakeholders shared that the MHV credential will be retired and users will have to log in with ID.me or Login.gov in the near future.
- Users shared they had used this field in the past to manage their account, and talked about the importance of being able to keep their account secure.
- **Recommendation**: We shouldn’t migrate these fields to the VA.gov profile since it’ll be irrelevant once the MHV credential is retired. However, we need to consider users that are accustomed to managing their account security in their profile and be sure it’s clear to them that is no longer necessary.

#### In case of emergency section
- We heard from stakeholders that the data in this field is strictly used to inform the printable health information wallet card, and isn’t accessible by VA staff in an emergency situation.
- We heard from users that it’s helpful to be able to manage this information because they expect it’s part of their health record and accessible by VA staff.
- **Recommendation:** We shouldn’t bring this over to the VA.gov profile in its current state. It’s worth adding this item to the list of  health-related profile items to discuss with the health modernization team.

#### Health information card
- Stakeholders shared that this feature was popular when MHV first launched, but that it’s functionality was never fully completed (only the address can be edited).
- 10 out of 11 users we spoke to had never used this card given that most things are digital today. They also didn’t expect that someone would search their wallet looking for this card if they were incapacitated. Some also saw it as duplicative of the card they use to check in for appointments.
- **Recommendation:** We shouldn’t bring this over to the VA.gov profile.

#### My links
- We heard from stakeholders that this section is a remnant of an earlier era of digital tools, and is likely no longer useful.
- Users agreed; no users we spoke to had ever used this, and many found it confusing.
- **Recommendation:** We shouldn’t bring this over to the VA.gov profile. 

## Additional points to think about
### Self-journaling features are confusing for users.
Users we interviewed were confused about self-journaling features and expected they had some kind of downstream effect at VA. 10 of 11 users expected the VA had access to the information they entered. 

This is an important point to keep in mind as VA.gov and MHV partner during this migration.

### We should collaborate with the health apartment team to determine where it makes the most sense to put health-related profile items.

Our card sort revealed that it will likely be helpful to Veterans to reference health-related profile items in both the VA.gov profile and their health portal.  We’ll need to collaborate on a strategy of where makes the most sense for these data points to be managed vs linked.

Below are the results from our card sort showing which category made sense to the majority of our 11 participants. In some cases, it was a slim majority.

| Card | Category |
|---|---|
| Emergency contacts | My VA.gov Profile |
| Next of kin | My VA.gov Profile |
| Notification settings for prescription shipping updates | My VA.gov Profile |
| Notification settings for the MHV newsletter | My Health Care |
| Printable wallet health information card | My VA.gov Profile |
| The ability to connect your health tracking device (like a FitBit) | My Health Care |
| Your blood type | My Health Care |
| Your caregivers | My Health Care |
| Your non-VA health insurance information | My VA.gov Profile |
| Your power of attorney | My VA.gov Profile |
| Your providers and doctors (self-entered) | My VA.gov Profile |

### We need further discussions on managing shipping addresses for prescriptions.
	- We’ve learned there is a significant amount of complexity and conditional logic depending on whether or not a person has a PO Box.
	- Currently, there is a temporary address in a back-end system.
	- It’s likely this problem needs to be solved at a higher level than our team. May need to work with VEO or a larger research effort needs to go into it. 
### Determine the timing of retiring the MHV profile.
- We know new users will not be able to get a MHV credential starting in September 2022.
- We need to learn more about the MHV team’s plans for retiring the profile.

## Appendix
- [Project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/mhv-profile-research)

### Comparative analysis
- [Mural board](https://app.mural.co/invitation/mural/vsa8243/1645732777530?sender=lizlantz1528&key=923bca62-d832-4ec4-bbb3-d9382ac47fd4) (visual comparison of MHV + VA.gov structure)
- [MHV personal info audit (xlsx)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/comparison/mhv-profile-audit.xlsx) 
- [Comparative analysis findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/comparison/findings.md)

### Stakholder interviews
- [Stakeholder meeting notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/mhv-profile-research/meeting-notes)
- [Stakeholder interview summary](ob/master/products/identity-personalization/profile/mhv-profile-research/stakeholder-interviews.md)

### MHV user interviews
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/mhv-user-interviews/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/mhv-user-interviews/conversation-guide.md)
- [MHV user interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/mhv-profile-research/mhv-user-interviews/session-notes)
- [Mural board](https://app.mural.co/invitation/mural/vsa8243/1648474932983?sender=lizlantz1528&key=d392672c-1eca-4670-a690-0e42df488af6)
