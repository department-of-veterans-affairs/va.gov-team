---
layout: pattern
title: Help users to... Know when their information is prefilled
draft: true
permalink: /patterns/help-users-to/know-when-their-information-is-prefilled
sub-section: [help-users-to]
intro-text: Follow this pattern to help users know when their information will be prefilled for them in an application.
research-title: Help users know when their info is prefilled
figma-link: https://www.figma.com/file/
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
> Content from this page has been moved to the VA Design System [Help users to… Know when their information is prefilled](https://design.va.gov/patterns/help-users-to/know-when-their-information-is-prefilled) pattern. This page is no longer being updated.

## Usage
### When to use this pattern
- **When you prefill the user's data into an application, like a form.** When using this pattern, clearly inform the user of where their data is being pulled from to prefill for them.
- **When users can update prefilled information.** View [Help users to... Know how their information is updated](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated) for guidance on helping users update this prefilled information.

#### Design Principals
- **Visibility of system status.** This pattern demonstrates the usability principle of communicating the current state to help users feel in control and take appropriate action. [Learn more about Visibility of system status](https://www.nngroup.com/articles/visibility-system-status/).
- **User control and freedom.** This pattern also gives users control over their own information. [Learn more about User Control and Freedom](https://www.nngroup.com/articles/user-control-and-freedom/).

### When not to use this pattern
- **For unauthenticated users**. Users who aren't signed in shouldn't see their information prefilled when they interact with an application. However, when forms don't require users to be signed in, they should see an information alert describing benefits to signing in. [View the unauthenticated intro page alert](#unauthenticated-intro-page-alert) later described on this page.

### When to use caution
- **When prefilling data from a source other than VA Profile.** It is crucial to explain to the user exactly where the data is coming from so that if there are any errors in the data, it is clear how to correct them. 

## How to design and build
### Anatomy or layout details 
This pattern involves these types of pages found in VA.gov forms:
- **Introduction page**: The first page of a form. Introduces the process the Veteran or other beneficiary will follow to apply for a benefit or to complete a supporting form. Changes slightly after a user signs in.
- **Personal information page**: Usually the first page of a form after the user signs in. Has personal details that cannot be edited online, like name, date of birth, Social Security Number, etc.
- **Prefill check page**: Any page of a form that displays prefilled information users can edit within the form.

#### Introduction page
There are two states of an introduction page: Authenticated and Unathenticated. 

<img src="https://github.com/user-attachments/assets/96117070-4a9e-4755-9fc5-2c305a1e76bd" width="600">
<br>
Image caption: Authenticated introduction page alert on the introduction page.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Images/Unauthenticated%20Alert.png" width="600">
<br>
Image caption: Unauthenticated introduction page alert on the introduction page.
  
#### Personal information page
<img src="https://github.com/user-attachments/assets/1c122b34-1cc3-48c8-b6b4-2950a7dc692c" width="600">
<br>
Image caption: Uneditable prefilled information on the personal information page.

#### Prefill check page
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Images/Address%20Review%20Page.png" width="600">
<br>
Image caption: Editable prefilled information displayed on the Prefill check page. This is the proposed style to display data that is editable.

### How this pattern works

#### Communicate when and why information will be prefilled
This pattern communicates when and why information will be prefilled with: 
- **Unauthenticated intro page alert.**. This tells users they should expect prefilled information in a form after they sign in.
- **Authenticated intro page alert.** This alert tells users that some of their information may be prefilled for them because they are signed in.
  
#### Communicate information that cannot be edited
This pattern communicates information that cannot be edited with: 
- **Uneditable prefilled information displayed in a card.** Prefilled information (such as legal name, date of birth, and Social Security Number) is displayed in a card component.
- **Directions for updating uneditable information.** Helper text is added under the card that has the bolded word 'Note" and directions to update this information offline. For additional guidance on helping users update prefilled information, see the ["Help users to... Know how their information is updated"](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated) pattern which will be updated soon.

#### Communicate information that can be edited
This pattern communicates information that can be edited with: 
- **Editable prefilled information displayed in a card with an edit link.** Prefilled information the is editable is displayed in a card component with a link to edit the information. For additional guidance on helping users update prefilled information, see the ["Help users to... Know how their information is updated"](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated) pattern which will be updated soon.

### Components used in this pattern

- [Alert](https://design.va.gov/components/alert/)
- [Card](https://design.va.gov/components/card)


### Page templates available for this pattern

List of links to page templates or layouts used to build any pages for this pattern.

## Examples
 
Examples of this pattern. May contain reference or links to:

### Examples in production
Coming soon!

## Code usage
Coming soon!


## Content considerations
### Directions for updating uneditable information
Directions for updating information that can't be updated online within the form varies and should be updated based on the context of the form or application being used. CAIA is currently working on finalizing some base language to be included, but general guidelines are:
- If it's benefits related, include the content that has the VA benefits hotline
- If it's health related, include the content that has the VA benefits hotline AND the content to contact your local medical center


### Contextual Alert content
Each alert has specific content requirements. You can find each content scenario below. 
- Unauthenticated intro page alert
- Authenticated intro page alert
- Authenticated contextual alert

#### Unauthenticated intro page alert
...[Draft guidance from CAIA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/content-patterns-and-standards/sign-in-alerts.md) on sign in alerts?

> [heading] Sign in with a verified account
> 
> [content] Here’s how signing in with an identity-verified account helps you:
> - We can fill in some of your information for you to save you time.
> - You can save your work in progress. You’ll have {time limit} from when you start or make changes to submit your form.
> 
> After you sign in, we’ll tell you if you need to verify your identity for your account.
> 
> **Note:** You can sign in after you start filling out your form. But you'll lose any information you already filled in.
> 
> [button] Sign in or create an account
> 
> [text link] Start your form without signing in

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Images/Unauthenticated%20Alert.png" width="600">


#### Authenticated intro page alert
> [content] **Note:** Since you’re signed in to your account, we can prefill part of your form based on your account details. You can also save your form in progress and come back later to finish filling it out.

<img src="https://github.com/user-attachments/assets/a279e845-aaa9-4373-bda0-932de3d3e2aa" width="600">

#### Authenticated contextual alert
> [content] **Note:** We've prefilled some of your information from your account. If you need to correct anything, you can select edit below. All updates will be made only to this form.

<img src="https://github.com/user-attachments/assets/36b4acb4-be99-49cd-8bd6-536d8ef7db8e" width="600">

## Research findings
The Authenticated Experience Design Patterns team conducted [user research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/authenticated-patterns/Design%20and%20Research/2024-07-Research%20Initiative-One-Prefill) to gather validation about this pattern.
