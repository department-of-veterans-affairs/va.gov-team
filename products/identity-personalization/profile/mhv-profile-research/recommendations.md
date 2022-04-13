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
*Question: do we need to address the fact that there are other sections of personal information that are coming over, but will go to the health apartment and not managed by our team? E.g. Pay or Receive funds content, download my data, etc.*

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

****

### Retire certain items with MHV.
Generally, we do not recommend moving things that don’t link back to a VA database.  This includes self-entered data points such as blood type, My Links, and the MHV In Case of Emergency information.

#### Social security number
- This is already slated for removal from the MHV profile in September 2022.
- **Recommendation:** Follow MHV’s lead and don’t bring this over to the VA.gov profile.

#### Gender
- We know from[previous research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/research/findings-summary.md#2-participants-who-identify-as-other-than-straight-or-cisgender-found-the-sex-assigned-at-birth-and-sexual-orientation-fields-triggering) that this data point is triggering for some Veterans, particularly because it can’t be changed online. 
- **Recommendation:** Stick with our decision to keep this out of the VA.gov profile.

#### Martial status and current occupation
- The MHV data for these fields does not impact any VA benefits for users.
- The majority of users we spoke with did not name these as fields that are important to them to update.
- **Recommendation:** Don’t bring these fields over to the VA.gov profile.

#### What is your relationship to VA? 
- We heard from stakeholders that this field is valuable for internal VA purposes, but they weren’t aware of a value for end users.
- End users were confused about the purpose of this field in their profile, and it wasn’t important to them to be able to update it since it doesn’t change.
- **Recommendation:** We shouldn't migrate this field to the VA.gov profile.

#### How would you like to be addressed?
- We heard from stakeholders that users love this field.
- Users weren’t clear about it’s purpose, despite it being directly under a heading reading “Welcome bar personalization”.  Many understood it to become a part of their health record so their doctor would know if they had any nicknames.
- **Recommendation:** We shouldn't migrate this field to the VA.gov profile. Our name tag serves the same purpose as the welcome bar on MHV, and preferred name will give users the functionality to let their doctor know how they’d like to be addressed.

#### Blood type
- We heard from stakeholders that they feel this should not be an editable field.
- We heard from users that they expect this to be part of their medical record, and not something they need to update in their profile.
- **Recommendation:** Don’t move this over as an editable field in the VA.gov profile. Have further discussions with health modernization team regarding how to handle health-related profile items (see below).

#### Preferred method of contact
- Since the VA is not set up to honor these preferences for all communications, it isn’t helpful for users to be able to update this setting. 
- **Recommendation:**  We shouldn't migrate this field to the VA.gov profile.

#### Fax and pager
- Stakeholders acknowledged that these were outdated methods of contact, and stated they were already planning to follow VA.gov profile and remove fax number.
- Multiple users commented that these fields were outdated in our interviews.
- **Recommendation:** We shouldn’t migrate these fields to the VA.gov profile.

#### My VA Treating facilities 
- We heard from stakeholders that this field is valuable for internal VA purposes, but they weren’t aware of a value for end users.
- End users were confused about the purpose of this field in their profile, and it wasn’t important to them to be able to update it since it doesn’t change.
- **Recommendation:** We shouldn't migrate this field to the VA.gov profile.
****



## Additional points to think about
### Self-journaling features are confusing for users.
### We should collaborate with the health apartment team to determine where it makes the most sense to put health-related profile items.
- Blood type
### We need further discussions on managing shipping addresses for prescriptions.
- Lots of complexity and conditional logic depending on whether or not a person has a PO Box.
- Currently, there is a temporary address in a back-end system.
- It’s likely this problem needs to be solved at a higher level than our team. May need to work with VEO or a larger research effort needs to go into it.
### Determine the timing of retiring the MHV profile.
### Have discussions with MHV team around X Y Z
- Will review notes from meeting with Carnetta.


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
