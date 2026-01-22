# VA.gov profile design and content standards

Last updated: January 2026  

# Jump to

[Overview](#overview)

[Profile files](#profile-files)

[Individual page guidance](#individual-page-guidance)

- [Profile hub](#profile-hub)

- [Sub pages](#sub-pages)

- [Email and text notifications](#email-and-text-notifications)

[Universal profile standards](#universal-profile-standards)

[Design](#design)

- [Components](#components)

- [Interactions](#interactions)

[Content](#content)

- [Components](#components-1)

- [Explaining processes to users](#explaining-processes-to-users)

# Overview 

The following usability best practices should be kept in mind when adding or updating features in the VA.gov profile.

Designs should be created mobile first, with at least a single desktop view for reference, and follow VADS guidelines.

## Profile files 

* [Product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile)  
* [Figma files](https://www.figma.com/files/1499394822283304153/project/176473451)  
* [Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Research)  
* [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/use-cases)

# Individual page guidance 

Below are pages that have individual guidance. Universal standards are further down the page.

## Profile hub 

The profile hub is the landing page for profile. Content standards for the profile hub are as follows:

* Links should be 36 characters or less.  
* Links are organized by clicks, with the most popular at the top. Other than Personal information, Contact information, and Service history information, which always appear at the top in that order.  
* Descriptions should be 140 characters or less, and should be fragments without punctuation.  
* [Link to Figma file](https://www.figma.com/design/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?node-id=1-1471&t=EixEydr69IDWqo7m-1)

## Sub pages 

The profile sub pages are link groups for each sub section of profile. Content standards for profile sub pages are as follows:

* Links should be 36 characters or less and appear in alphabetical order.  
* Descriptions should be 140 characters or less, and be complete sentences with punctuation.  
* Sub pages should be links with descriptions only.  
  * The only exception is a cross link to My HealtheVet, which has continuous confusion from users on how to navigate to.  
* Each sub page has its own Figma file. Refer to the use cases for each file link.

## Email and text notifications 

[Link to Figma file](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=251-8520&t=vepZx0510qdYp1fz-1)

### Information architecture 

The Email and text notifications page allows teams to add a way for users to opt in or out of emails from VA Notify and texts from VEText. The page has an underlying technology structure that allows new sections to be added through the VA Profile API.

No other methods of notifications are supported on this page at this time. If you have a notification setting that does not fit within this structure please reach out to the team to discuss.

[Link to product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences#what-to-know)

### Content standards 

#### Categories

There are currently three sections within Email and text notifications. Categories are limited to 36 characters, and should align with other categories already on VA.gov. If your email or text notification does not fit within one of these categories please contact the team to discuss adding a new category. Current categories are:

1. Claims, decision reviews, and appeals
2. Health care  
3. Payments and debts

#### Email and text checkbox groups

Checkbox groups appear in alphabetical order within a category, and are made up of four sections:

1. Label header  
2. (Optional) Group hint text  
3. Checkbox label  
4. (Optional) Checkbox description

Label header

* Describes the subject of notifications.  
* Limit to 36 characters to keep text on a single line.  
* Don’t use the word ‘notification’.  
* Label headers are managed by the VA Profile API team, so any updates must be coordinated with them. The Authenticated Experience team does not own or manage the label headers.

Group hint text

* Provides additional information that applies to all notification types within a single subject.  
* Limit to XX characters.  
* Group hint text is optional.

Checkbox label

* Indicates which type of notification to receive.  
* Only options are:  
  * Notify me by email  
  * Notify me by text  
* If both email and text are available, email should always be listed first.

Checkbox description

* Provides additional information that applies to a single notification type.  
* Typical use case will be to indicate what information the reminders will contain.  
* Checkbox descriptions are optional.

# Universal profile standards 

# Design 

* There are several shared use cases that can be reused across profile. Including, but not limited to, editing features, alerts, and system errors. [Link to shared use cases.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md)  
* There are shared spacing rules across profile that should be followed when creating new content. [Link to spacing Figma file.](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1327-12487&t=0pVANx1yZnv3PGBG-1)  
* When designing make sure to create all states of information for the feature, including, but not limited to:  
  * When the feature is available;  
  * when the feature is not available;  
  * all error states, including system errors.  
    * If error states have a dedicated status code, provide the status code.

## Components 

### Alerts 

* Page level alerts and messages should be a [standard alerts](https://design.va.gov/components/alert/#examples---standard), and appear directly below the page header.  
* Alerts within the page, such as in a section or card, should be [slim alert](https://design.va.gov/components/alert/#web-2), and appear below the header or sub header of that section.

### Cards 

* Each datapoint available to the user should be within a card.  
* Cards should be grouped based on topic.  
  * *Example is available on the Contact information page.*

## Interactions 

### Editing information 

* Editing information has a series of shared components and patterns that are standardized across the profile.  
  * [Link to shared editing use cases.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md)  
* When possible, provide inline editing for single response questions, and sub-task flow editing for multi-response questions for accessibility purposes.  
  * Provide clear direction on the impacts of updating or removing information.  
* When it is not possible to update information online, provide explanatory copy on how to update information. This is typically done through an additional information component on the page.  
  * *Example is available on the Personal information page.*

# Content 

## Components 

### Alerts 

#### Editing information 

##### Saving information: Success

| Component | Success slim alert |
| :---- | :---- |
| File | [Link to Figma file](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1119-2220&t=T0306saDbqO1v21e-1) |
| When to use | When a user successfully saves information. |
| Content | Update saved |

##### Saving information: Error

| Component | Error slim alert |
| :---- | :---- |
| File | [Link to Figma file](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1119-2221&t=WZAzpvHJHwM6oqlz-1) |
| When to use | When a user's information is not successfully saved. |
| Content | We’re sorry. We can’t update your information right now. We’re working to fix this problem. Try again later. |

#### Warning alerts 

##### International phone number

| Component | Warning alert standard |
| :---- | :---- |
| When to use | When a user adds an international phone number to the mobile field. |
| Content | Header: We can’t send text notifications to international phone numbers Body: \[user entered number\] is an international phone number. If you save this number, you won’t receive text notifications. |

##### System down, page level error

| Component | Warning alert standard |
| :---- | :---- |
| File | [Link to Figma file](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1548-2689&t=WZAzpvHJHwM6oqlz-1) |
| When to use | When an entire page in profile is down. |
| Content | Header: This page isn't working right now Body: We're sorry. Something went wrong on our end. Refresh this page or try again later. |

##### System down, page section error

| Component | Warning alert slim |
| :---- | :---- |
| File | [Link to Figma file](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1119-2228&t=WZAzpvHJHwM6oqlz-1) |
| When to use | When a section on a page in profile is down. |
| Content | Header: This page isn't working right now Body: We can't show your \[section header\] right now. Refresh this page or try again later. |

### Modals 

#### Cancelling edit changes

| Component | Warning modal |
| :---- | :---- |
| File | [Link to Figma file](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1543-2499&t=WZAzpvHJHwM6oqlz-1) |
| When to use | If a user has made changes to any form field, and the field is correctly and completely filled out, they'll see a modal warning message asking to confirm if they want to cancel their changes. |
| Content | Header: Cancel changes? Body: You haven’t saved the changes you made to your \[H2 or H3 section title\]. If you cancel, we won’t save your changes. |
| Primary button | Cancel changes |
| Secondary button | Keep editing |

#### Edit new information while editing

| Component | Warning modal |
| :---- | :---- |
| File | [Link to Figma file](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1119-2223&t=WZAzpvHJHwM6oqlz-1) |
| When to use | If a user attempts to edit a different data point on the page, a modal will trigger informing them they have to complete their action first before starting a new one. |
| Content | Header: Save or cancel your edits to \[H2 or H3 section header\] Body: Before you can edit a new section of your profile, you need to save or cancel your edits to your \[H2 or H3 section header\]. If you cancel, we won't save your in-progress edits. |
| Primary button | OK |

#### Remove information

| Component | Warning modal |
| :---- | :---- |
| File | [Link to Figma file](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1543-2404&t=WZAzpvHJHwM6oqlz-1) |
| When to use | When the user attempts to remove information, a warning modal appears to verify the action. |
| Content | Header: Remove your \[H2 or H3\]? Body: This will remove your \[what will this do? If not applicable don’t show this part.\] You can always add another \[H2 or H3\] any time. |
| Primary button | Remove |
| Secondary button | Cancel change |

## Explaining processes to users 

1. When a user is unable to update their information online, provide information on what can be updated and how. Including phone numbers or a link to an informational page.  
   1. Content should fit within an [additional information component](https://design.va.gov/components/additional-info) and meet VADS guidelines.  
   2. *Example available on the Personal information page.*  
2. When content is long, or helpful to all users, provide an unauthenticated FAQ to cover more complex topics within the Records or Resources and support sections of VA.gov.  
   1. FAQ content should not live within VA.gov Profile.
