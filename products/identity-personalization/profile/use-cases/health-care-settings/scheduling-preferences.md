# Scheduling preferences use cases

Last updated: November 2025  

* [User flow](https://www.figma.com/design/smldak4d56moGObUR5jifE/E.-Dole-Act--Appointment-Scheduling-Preferences-in-VA-Profile?node-id=1052-5446&t=fHIMQ6WPXSUP39LM-1)  
* [Figma files](https://www.figma.com/design/smldak4d56moGObUR5jifE/E.-Dole-Act--Appointment-Scheduling-Preferences-in-VA-Profile?node-id=842-58852&t=fHIMQ6WPXSUP39LM-1)


# Jump to

[Overview](#overview)

[Use cases](#use-cases)

- [User is in supported VISN / pilot launch](#user-is-in-supported-visn-/-pilot-launch)

- [User is NOT in supported VISN / pilot launch](#user-is-not-in-supported-visn-/-pilot-launch)

[Edge cases](#edge-cases)

[Flags](#flags)

- [Profile shared flags](#profile-shared-flags)

[Errors](#errors)

- [Profile shared errors](#profile-shared-errors)

- [Scheduling preferences specific errors](#scheduling-preferences-specific-errors)


# Overview 

The Scheduling preferences page is a feature created for the [Senator Elizabeth Dole 21st Century Veterans Healthcare and Benefits Improvement Act, SEC. 145\. Documentation of preferences of Veterans for scheduling of appointments for health care under laws administered by Secretary of Veterans Affairs.](https://www.congress.gov/bill/118th-congress/house-bill/8371/text#H1FC12CFA9BF146C38FDB69DA85FB5058)

The act requires preferences provided voluntarily by a Veteran to be documented on My HealtheVet or another system designated by the Secretary that allows the Veteran to view and change such preferences at any time. Preferences shall include the following:

1. How and when the Veteran prefers to be contacted about an appointment for health care.  
2. Whether the Veteran prefers to schedule appointments without the assistance of the Department, if able.  
3. Whether the Veteran prefers to select a provider without the assistance of the Department, if able.  
4. Whether the Veteran prefers appointments to be scheduled during certain days or times.

Per the act, the product will be piloted with at least three geographically diverse Veterans Integrated Service Networks (VISN).

The Integrated Veteran Care (IVC) office also added a requirement to allow Veterans to select the gender of their provider as part of the pilot. [Link to Slack context.](https://dsva.slack.com/archives/C09K4K47KHS/p1763391389905409)

**Veterans will need to be LOA3 verified, and part of the pilot, to see the Scheduling preferences feature. Those who are not part of the pilot will not see the feature within their VA.gov profile. If the user is not LOA3 verified, but is part of the pilot, the user will be directed to the Sign-in information page to verify their account first.**

*Note: This product will be re-evaluated after pilot to determine if the product should be expanded or have any experience changes.*


# Use cases 

## User is in supported VISN / pilot launch 

If the user is LOA3 verified, and part of the pilot, all six questions show. If they have no preferences saved, an **Edit** button shows prompting them to add information. If they have preferences saved, saved preferences show with the option to **Edit** or **Remove**.

If the user is not LOA3 verified, the user will be directed to the Sign-in information page to verify their account. Once verified, the feature will appear in their profile.


### Interactions 

#### What's the best way to contact you to schedule your appointments? 

* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/smldak4d56moGObUR5jifE/E.-Dole-Act--Appointment-Scheduling-Preferences-in-VA-Profile?node-id=855-67878&t=MYqCU4YdNPgtrBqg-1)  
* Link to code

**Description**  
When the user selects the **Edit** button, they start a sub-task flow.

* If they choose **No preference** or **Secure message**, they are returned to the page and their selection is saved.  
* If they choose a contact method stored in **VA Profile**, and already have information on file, that information is shown for review.  
* If they want to update their information, or if no information exists, they are shown input fields to add or edit their information.


All contact information cards and input fields should be generated using the **Contact information** page components and patterns.

When the user saves, the updated information is stored in their profile, and they are returned to the section they were editing with a success message.

If the user already has a preferred contact method saved, and the information is editable, a link to **Update contact information** is shown in the card. Selecting this link starts the edit-as-a-subtask flow so they can update their contact information. They also have the option to **Edit** or **Remove** their preference.



#### When do you want us to contact you to schedule your appointments? 

* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/smldak4d56moGObUR5jifE/E.-Dole-Act--Appointment-Scheduling-Preferences-in-VA-Profile?node-id=855-66985&t=ozFz3M866dXSMZdQ-1)  
* Link to code

**Description**  
When the user selects the **Edit** button, they start a sub-task flow.

* If they choose **No preference** they are returned to the page and their selection is saved.  
* If they choose **Select days and times to be contacted** they’re presented with options to select **Morning** or **Afternoon** timeframes **Monday** through **Friday**.

When the user saves, the updated information is stored in their profile, and they are returned to the section they were editing with a success message.

If the user already has this information saved, it shows in the card with the option to **Edit** or **Remove**.



#### Do you want help scheduling your appointments? 

* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/smldak4d56moGObUR5jifE/E.-Dole-Act--Appointment-Scheduling-Preferences-in-VA-Profile?node-id=842-64319&t=ozFz3M866dXSMZdQ-1)  
* Link to code

**Description**  
When the user selects the **Edit** button, they start inline editing. The user can choose to save **Yes**, **No**, or **No preference**. Once selected they can **Save** or **Cancel**.

* Selecting **Save** updates the card with a success message and the saved option shown.  
* Selecting **Cancel** closes the edit mode with no changes.

If the user already has this information saved, it shows in the card with the option to **Edit** or **Remove**.



#### When do you want to go to your appointments? 

* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/smldak4d56moGObUR5jifE/E.-Dole-Act--Appointment-Scheduling-Preferences-in-VA-Profile?node-id=863-9802&t=n6ADaQCogaDjJna4-1)  
* Link to code

**Description**  
When the user selects the **Edit** button, they start a sub-task flow.

* If they choose **No preference** they are returned to the page and their selection is saved.  
* If they choose **Select days and times to be scheduled** they’re presented with options to select **Morning** or **Afternoon** timeframes **Monday** through **Friday**.

When the user saves, the updated information is stored in their profile, and they are returned to the section they were editing with a success message.

If the user already has this information saved, it shows in the card with the option to **Edit** or **Remove**.



#### Do you prefer a male or female provider? 

* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/smldak4d56moGObUR5jifE/E.-Dole-Act--Appointment-Scheduling-Preferences-in-VA-Profile?node-id=842-63822&t=n6ADaQCogaDjJna4-1)  
* Link to code

**Description**  
When the user selects the **Edit** button, they start inline editing. The user can choose to save **Male**, **Female**, or **No preference**. Once selected they can **Save** or **Cancel**.

* Selecting **Save** updates the card with a success message and the saved option shown.  
* Selecting **Cancel** closes the edit mode with no changes.

If the user already has this information saved, it shows in the card with the option to **Edit** or **Remove**.



#### Do you want help choosing your provider? 

* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/smldak4d56moGObUR5jifE/E.-Dole-Act--Appointment-Scheduling-Preferences-in-VA-Profile?node-id=842-63822&t=n6ADaQCogaDjJna4-1)  
* Link to code

**Description**  
When the user selects the **Edit** button, they start inline editing. The user can choose to save **Yes**, **No**, or **No preference**. Once selected they can **Save** or **Cancel**.

* Selecting **Save** updates the card with a success message and the saved option shown.  
* Selecting **Cancel** closes the edit mode with no changes.

If the user already has this information saved, it shows in the card with the option to **Edit** or **Remove**.



#### Shared profile editing interactions 

There are several shared editing interactions that are used in profile. The linked documentation includes the following:

* Adding information  
* Inline editing and validation  
* Save in progress  
* Saving information: Success  
* Saving information: Error  
* Removing information  
* Canceling edit changes  
* Edit new information while editing  
* Edit-as-a-subtask flow

[Profile shared editing information use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-interactions)


## User is NOT in supported VISN / pilot launch 

If the user is LOA3 verified, and is not part of the pilot, the Scheduling preferences page is hidden. The page does not show in the left navigation, and is not accessible in any way.

If the user gets to the page through a link they should be shown the 403 page.



# Edge cases 

## Flags 

### Profile shared flags 

* [User with a blocked account attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)  
* [LOA1 user attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


## Errors 

### Profile shared errors 

* [Full page, backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#full-page-backend-system-down)


### Scheduling preferences specific errors 

#### User has saved contact preference and deleted contact information 

* **Format:** [Slim alert](https://design.va.gov/components/alert/#web-2)  
* [Link to designs](https://www.figma.com/design/smldak4d56moGObUR5jifE/E.-Dole-Act--Appointment-Scheduling-Preferences-in-VA-Profile?node-id=1990-9120&t=f89InEaiWTDBeIdV-1)

**Scenario**  
A user has a saved preference for the ***What's the best way to contact you to schedule your appointments?*** question that references their contact information. Then deletes their contact information.

**Experience**
* Contact information page messages that health care settings will be impacted by removing the information.  
* Scheduling preferences page shows an alert prompting the user to either add their contact information or change their preference.
