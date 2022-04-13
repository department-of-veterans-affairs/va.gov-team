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
### Maintain important items that are already consistent between the two profiles.

The following data points exist in both the MHV and VA.gov profiles. We recommend keeping these in the VA.gov profile. Some are editable on MHV (indicated below) and will no longer be editable on VA.gov
| Field | Editable on MHV? | Note |
|----|----|----|
| First name | no | appears in name tag |
| Middle name | yes | will be read only; appears in name tag |
| Last name | no | appears in name tag |
| Suffix | yes | will be read only;  appears in name tag |
| Alias | yes | called “Preferred name” on VA.gov |
| Birth date | no |   |
| Email address | yes |   |
| Home phone | yes |   |
| Mobile phone | yes |   |
| Work phone | yes |   |

### Move certain items from MHV to the VA.gov profile.

### Retire certain items with MHV.
Generally, we do not recommend moving things that don’t link back to a VA database.  This includes self-entered data points such as blood type, My Links, and the MHV In Case of Emergency information.

- What is the item or section?
		- What we heard from stakeholders
		- What we heard from users
		- Recommendation

## Additional points to think about
### Self-journaling features are confusing for users.
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
