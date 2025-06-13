---
layout: pattern
title: Help users to... Update prefilled information
draft: true
permalink: /patterns/help-users-to/update-prefilled-information
sub-section: [help-users-to]
intro-text: Follow this pattern to help users update prefilled information in an application.
research-title: Help users update prefilled information
figma-link: https://www.figma.com/design/1z3bAkQl4uR1IvAxmtyqZi/AE-Design-Patterns---Update-Prefill?node-id=4013-14358&t=GYX9RT423zMZrhat-1
status: use-with-caution-available
anchors:
  - anchor: Usage
  - anchor: How to design and build
  - anchor: Examples
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Research findings
---

> [!WARNING]
> Content from this page has been moved to the VA Design System [Help users to… Update prefilled information](https://design.va.gov/patterns/help-users-to/update-prefilled-information) pattern. This page is no longer being updated.

## Usage
### When to use this pattern
- **When you prefill the user’s information into a form or other online tool.** This pattern helps users understand how they can update their prefilled information, including sensitive information that they can't update online. This pattern also informs users where we'll save their changes—either only to the specific form or tool, or to the form or tool and their VA.gov profile. See the related ["Help users to... Know when their information is prefilled"](https://design.va.gov/patterns/help-users-to/know-when-their-information-is-prefilled) pattern for guidance on how to display the prefilled information. 

#### Design principles
- **Visibility of system status.** This pattern demonstrates the [usability principle of communicating the current state](https://www.nngroup.com/articles/visibility-system-status/) in order to allow users to feel in control and to be able to take appropriate action.
- **User control and freedom.** This pattern also gives users control over their own information, thereby providing [control and freedom](https://www.nngroup.com/articles/user-control-and-freedom/). 

### When not to use this pattern
- **When you don't prefill the user's information.**

### When to use caution
- **When the user can't update their information online, but can update another way.** This pattern accounts for cases when the user needs to call VA or take a different step to change certain information, such as their name and Social Security number. You'll need to confirm that you're giving the correct instructions for changing that specific information.
- **When the user can't update their information at all.** If your form prefills information that the user can't change through any means, you'll need to explain that directly.

## How to design and build
### Anatomy or layout details 
This pattern involves these types of pages found in VA forms:

- **Prefilled information the user can't update:** This is usually personal information like name, date of birth, and Social Security number.
- **Prefilled information the user can update:** This can be many different types of information that the user can update directly on the screen where we display it.

See the related ["Help users to... Know when their information is prefilled"](https://design.va.gov/patterns/help-users-to/know-when-their-information-is-prefilled) pattern for guidance on helping users know when their information is prefilled.

#### Prefilled information the user can't update

Alt: A form page asking users to confirm their personal information, such as legal name, date of birth, and Social Security number. That information is contained in a white card. Below the white card is a string of text explaining why users can't update that information online.

<img width="786" alt="Personal-information-page" src="https://github.com/user-attachments/assets/591faf75-4455-46d9-ac81-18e4543ebd79">

#### Prefilled information the user can update
There are 2 variations of this type of page. 

##### If we automatically save changes to VA.gov profile
In most cases, changes should save to both the form or tool and to VA.gov profile. An informational alert informs users where we'll save their changes.

Alt: A page for users to update their mailing address. Above the address fields is an informational alert stating, "Any changes you make will also be reflected on your VA.gov profile."

<img width="569" alt="Edit-save-to-profile" src="https://github.com/user-attachments/assets/54e9cf8c-b777-43f4-b96a-2845ea7cfce1">

##### If we let the user choose whether to save changes to VA.gov profile
In certain cases, users may need more control over where the changes will save. Instead of displaying an informational alert at the top of the page, display a question with radio button response options asking the user where they want to save their changes. Learn more about these cases in the "communicate where changes will save" section below.

Alt: A page for users to update their mailing address. Below the address fields is a required radio button field asking, "Do you also want to update this information in your VA.gov profile?"

<img width="565" alt="Edit-choose-where-to-save" src="https://github.com/user-attachments/assets/47a3f173-4624-4dc3-819e-0ce0ba5065bd">

#### Prefilled information that is missing and required
There may be instances where some information that would otherwise be prefilled is missing from the database, but also required by the form itself. In those instances, users will be brought to a page with a card that utilizes a colored tag to indicate that the information is missing, along with the word "(*Required)" next to the field heading text to indicate the user needs to provide that information. 

Alt: A page showing users they have missing and required information they will need to add.

<img width="364" alt="missing-required-prefilled-information" src="https://github.com/user-attachments/assets/b183d0fa-dfc8-4bd8-93fe-ec42404d74d4" />


If the user does not provide the required missing information and hits the "Continue" button to try and move forward, they will see the same page with that card in an error state and some red error text telling them what information they need to provide. Once they click "Add" and provide the information on an edit page, they will be redirected back to this screen and able to continue through the form.  

Alt: A page showing users an error state of the card with missing and required information they need to add.

<img width="323" alt="missing-required-prefilled-information-error-state" src="https://github.com/user-attachments/assets/5e15eb9c-ddce-45ac-aaa8-18cc02a5d363" />


Please note that there is currently a [ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4276) to update the card component to include this error state. It may not yet be available for use in the VADS Figma design files.

### How this pattern works

#### Communicate whether or not users can update their prefilled information online
Here's how to communicate that users can't update certain information online:
- **Omit the edit link in cards with non-editable information.**
- **Include instructions for how to update uneditable information.** Under the card with the uneditable information, display a note starting with the bolded word “Note:” followed by directions to help users find out how to update this information by phone or another way. See the "content considerations" section for sample text.

Here's how to communicate that users can update certain information online:
- **Display editable prefilled information in a card with an edit link.** Display prefilled information in a card component with a link to edit the information. This information may include contact information, such as phone, email, or mailing address.

#### Communicate that changes will also save to VA.gov profile — or let users choose whether to save to profile
- **In most cases, tell users that we'll automatically save changes to their VA.gov profile.** In [user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill/Prefill%20Research%20Report%2009_2024.md), most users indicated that they want changes they make to their information to update their VA.gov profile. On the edit page, display an informational alert informing users that these changes will impact their profile information. 

- **In certain cases, let users choose where to save their information.** Consider using this variation for information that may change frequently. For example, when reordering medical supplies, users may want to provide a temporary mailing address. But they may not want this temporary mailing address to save to their VA.gov profile. In these cases, on the edit page, don't display the informational alert informing them where their changes will save. Instead, display a required radio button below the editable fields asking them if they also want to update this information in their VA.gov profile.

#### Communicate when updates to prefilled information are successful
- **Inform users where the changes were saved.** Display a success alert informing users "We've made these changes to this form and your VA.gov profile" or "We've made these changes to only this form.” Place this alert at the top of the page, below the stepper and the auto-save text. Use a standard alert if the user made the changes on a form step page. Use a slim alert if the user made the changes on the final review page.

### Components used in this pattern
- [Alert](https://design.va.gov/components/alert/)
- [Radio button](https://design.va.gov/components/form/radio-button)
- [Additional info](https://design.va.gov/components/additional-info)

## Examples
### Note after uneditable prefilled information
Inform the user that they need to call VA to find out how to update this information. The specific number to call will vary by form. 

Alt: A note to the user explaining why they can't edit personal information online. It starts with the bolded word "Note" and ends with a link to find more detailed instructions on how to change their legal name. 

<img width="649" alt="How to edit personal information" src="https://github.com/user-attachments/assets/0c784990-98d2-4c69-a18a-9fdaa8552362">

### Alert informing user we'll save changes to VA.gov profile
Inform users that their changes will save to their profile before they make the changes. If your form does not save changes to VA.gov profile, use a radio button question instead (example below).

![An informational alert with a bolded header saying "Any changes you make will also be reflected on your VA.gov profile."](https://github.com/user-attachments/assets/e4a0b49a-b136-4c7c-b5f1-f4a5fc7d0542)

### Success alert 
Inform users their change has been saved to the form and their VA.gov profile. If the change was only saved to the form, the alert should read "We've made these changes to only this form."

![A success alert with the header "We've updated your mailing address" and the body text "We've made these changes to this form and your VA.gov profile."](https://github.com/user-attachments/assets/323786ec-62f3-4890-8441-4d8091b985b3)

If the user made the change from the final review page, display the slim success alert on the review page, immediately under the header of the section where they made the change.

![A slim success alert with the text "Address successfully updated on this form."](https://github.com/user-attachments/assets/b90882ed-ebdc-48a2-abc3-4d00603c39e5)

### Radio button
In cases where the information might change frequently (like a temporary mailing address), ask users if they want to save their changes to their VA.gov profile.

![A required radio button field asking the user if they also want to update this information in their VA.gov profile.](https://github.com/user-attachments/assets/dc1f2a69-9ce2-4e34-b830-cc85f773e56a)

### Examples in production
Coming soon!

## Code usage
Coming soon!

## Content considerations

### Directions for updating uneditable information
Directions for updating information vary by form, benefit type, and type of information. You must confirm with subject matter experts that your instructions are accurate for the way your specific form populates information and how to update it. And you must confirm with the call center that they will be able to either update the information directly, or give the person instructions for how to update the information.

Here's an example that tells people to call the VA benefits hotline:
> **Note:** To protect your personal information, we don't allow online changes to your name, date of birth, or Social Security number. If you need to change this information, call us at 800-827-1000 (TTY: 711). We're here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET. 
> 
> [Find more detailed instructions for how to change your legal name (opens in new tab)](https://www.va.gov/resources/how-to-change-your-legal-name-on-file-with-va/)

## Research findings
The Authenticated Experience Design Patterns team [conducted user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill/Prefill%20Research%20Report%2009_2024.md) in late 2024 about how users prefer to see their editable and non-editable information, and how they prefer to be informed about how to edit it. The majority of participants want updates to save to their VA.gov profile, but some also want the ability to choose where the updates save, in the case that they are using a temporary address or other temporary situation. 

This pattern would benefit from additional research. Spefically for the scenario where there is missing and required prefilled information, research to understand if the solution suggested here is effective and understandable for users would be helpful in strengthening this pattern guidance. 

