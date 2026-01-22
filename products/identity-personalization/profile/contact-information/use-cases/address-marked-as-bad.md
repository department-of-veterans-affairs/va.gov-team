# Mailing address is flagged as “bad” in VA Profile

Last updated: January 2026  
* [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1748544816643/8147634738618bff171962ce84b2f940c888fb03?sender=u36b374887f74c9a3de2d0750)  
* [Figma files](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4598-32695&t=8bYeomyYEZZgmvu7-1)  
* Product documentation  
  * [Initial brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md)  
  * [Discovery documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/discovery/documentation.md)

# Jump to

[Experience](#experience)

- [Profile hub page](#profile-hub-page)

- [Contact information page](#contact-information-page)

# Experience 

* When mail is sent to a Veteran and then returned to the VA, the address is flagged as “bad” in VA Profile. When a user’s address has this flag, they will be prompted to review and update their **Mailing address** on the **Contact information** page in VA.gov Profile.  
* **Mailing addresses** must be kept updated as it may be where Veterans receive VA bills, notices, and prescriptions.  
* The **Mailing address** inputs follow the same rules as all others, including when saving, removing, and system and validation errors.

## Profile hub page 

* **Description:** User is prompted to review their **Mailing address** from the **Profile hub**. Alert disappears once the Mailing address is updated and validated.  
* **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)  
* [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4598-32713&t=8bYeomyYEZZgmvu7-1)

## Contact information page 

* **Description:** User is prompted to review their **Mailing address** from the **Contact information** page. Alert persists in edit mode, unless an error or validation message occurs. Once the information is updated and validated the message disappears.  
* **Format:** [Warning slim alert component](https://design.va.gov/components/alert/#web-2)  
* [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4598-32725&t=8bYeomyYEZZgmvu7-1)



---



<details><summary>Archive | Contact information: Mailing address is flagged as “bad” in VA Profile, June 2025</summary>

# Contact information: Mailing address is flagged as “bad” in VA Profile
**Last updated: June 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1748544816643/8147634738618bff171962ce84b2f940c888fb03?wid=0-1749014970296&outline=open)
- [Figma files](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3168-11876&t=Lec9VMwUOLJiae7J-1)
- Test Rail QA
- Product documentation
	- [Initial brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md)
	- [Discovery documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/discovery/documentation.md) 

## Current experience
- When mail is sent to a Veteran and then returned to the VA, the address is flagged as “bad” in VA Profile. When a user’s address has this flag, they will be prompted to review and update their Mailing address on the Contact information page in VA.gov Profile.
- Mailing address must be kept updated as it may be where Veterans receive VA bills, notices, and prescriptions.
- The Mailing address inputs follow the same rules as all others, including when saving, removing, and system and validation errors.

### Profile hub page
- **Use case:** User is prompted to review their mailing address from the Profile hub. Alert disappears once the Mailing address is updated and validated.
- **Status code:** TBD
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3168-14824&t=Lec9VMwUOLJiae7J-1)
- [Link to code]
- **Content:**

Header: Review your mailing address

The mailing address we have on file for you may not be correct.

Link: Review the mailing address in your profile


### Contact information page
- **Use case:** User is prompted to review their mailing address from the Contact information page. Alert persists in edit mode, unless an error or validation message occurs. Once the information is updated and validated the message disappears.
- **Status code:** TBD
- **Format:** [Warning slim alert component](https://design.va.gov/components/alert/#web-2)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3168-12770&t=Lec9VMwUOLJiae7J-1)
- [Link to code]
- **Content:**

Review and update your address.

If your address is already correct, select **Edit** to review it again. Then select **Save** to confirm.

</details>

















<details><summary>Archive | Contact information: Mailing address is flagged as “bad” in VA profile, February 2024</summary>

# Contact information: Mailing address is flagged as “bad” in VA profile
**Last updated:** February 14, 2024

When mail is sent to a Veteran and then returned to the VA, the address is flagged as “bad” in VA Profile. When a user’s address has this flag, they will be prompted to review and update their mailing address on the personal information and contact information pages in profile. Mailing address must be kept updated as it may be where Veterans receive VA bills, notices, and prescriptions.  

- [Initial brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md)
- [Discovery documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/discovery/documentation.md) 

## UX
- Review behavior `B-1` in the [user flow](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0%3A608&mode=design&t=rqPFqCwnOiocoCbM-1)

### Profil hub page
- Displays an [alert](https://design.va.gov/components/alert#warning-alert)  (VA design system component) directing user to review their mailing address
* Alert disappears once Mailing address is successfully updated and validated.
* [Desktop mock-up](https://www.figma.com/file/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?type=design&node-id=0-185&mode=design&t=5hjp61jNtbzmIl2J-11) 
* [Mobile mock-up](https://www.figma.com/file/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?type=design&node-id=0-15&mode=design&t=5hjp61jNtbzmIl2J-11)
	
### Contact information page
* Displays a [background only alert with icon](https://design.va.gov/components/alert#background-color-only-alert-with-icon) in the mailing address section. 
	* Alert ask user to review mailing address and update if it is incorrect.
* Alert persists in edit mode.
* Alerts disappears once Mailing address is successfully updated and validated or when an error message occurs because the address cannot be updated and validated.
* [Desktop mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=66-10333&mode=design&t=rqPFqCwnOiocoCbM-11)
* [Mobile mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-365&mode=design&t=rqPFqCwnOiocoCbM-11) 

#### Address validation
- A user can enter the address validation flow if the address they enter warrants it. The UX for this flow is not changed for a user with this flag in their profile.
-[Address validation use case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md)

### Successful update
- Once the user has successfully updated their address, they’re returned to read mode and a success confirmation is displayed
- [Mock-ups linked here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#saving-information) 

### Save error
- If the mailing address update can’t be completed, they’ll see an error alert above the save button.
- [Mock-ups linked here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#save-error-information-cant-be-saved) 

## Codes
N/A

## How to reproduce
1. Go to staging.va.gov/profile and sign in with one of the following users ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
* vets.gov.user+26
2. Follow the prompts in the alerts.
3. If you saved an update for the address for one of these users you can have it display again by signing-out and signing back into staging using a new tab on your browser.

</details>
