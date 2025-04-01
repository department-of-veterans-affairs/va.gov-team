# Forms Status on My VA Frontend Documentation
**Last updated: March 18, 2025 - removed "MVP" from title**

_Note: The "Submit an intent to file (VA Form 21-0966)" form has been removed from MVP as of 10/10/24 due to the variability of statuses being displayed (depending on the use of Central Mail vs. VBMS, what a user chooses in the submission (Veteran vs. not). This will not be added in the future and is expected to live in the Claim Status Tool._

This FE documentation outlines all possible status cards that appear in the Benefit applications and forms section on My VA: 

- Drafts
- Submission in progress
- Received
- Action needed (an error state specific to an individual form submission)

It also outlines the accordion component with the title "If you can't find your application or form" that appears at the bottom of this section.

In addition, this documentation accounts for possible scenarios in which no draft and/or form statuses can be displayed in the entirety of the section:
- Failed user call
- Failed network call
- Failed API call
- Failure for drafts only
- Failure for submitted only
- Scheduled maintenance


## When to show the ‘Benefit applications and forms' section
We show this section for every user (LOA1 and LOA3). (Note: Not all forms are available to be filled out/displayed on My VA without LOA3 authentication)

---

### If a user does not have any benefit application drafts or forms to show

- [Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1231-49126&t=FOSo9YgBxV0pQn0K-1)
- [Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1260-37414&t=FOSo9YgBxV0pQn0K-1)

### **Content**

You have no benefit applications or forms to show.

(This is displayed as body text, with no cards appearing).


**Positioning**

This text appears directly below the "Benefit applications and forms" header on the lefthand side of the page on desktop.

Below that, an accordion component (Titled "If you can't find your application or form") appears below the text "You have no benefit applications or forms to show."

---

### "If you can't find your application or form" accordion
- [Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1242-26844&t=bHDPfYWgYCpxLSG5-1)
- [Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1318-46177&t=bHDPfYWgYCpxLSG5-1)


This component is visible in all scenarios EXCEPT for error scenarios in which no forms or drafts can be displayed (API fail, Network call fail, scheduled maintenance).

It provides information to help inform users why a draft or a form they have submitted previously is not appearing in the Benefit applications and forms section of the page.


**Positioning**

If there are form or draft card(s):

The accordion appears below the entirety of form and draft cards


If there are no form or draft card(s):

You have no benefit applications or forms to show.


**Visual specs**
- [The accordion component's bordered variant from the VA design system is utilized](https://design.va.gov/components/accordion)
- Typography: 'h3', 'vads-font-size-base' with bolded text using 'vads-font-weight-bold', tag component uses its default 'regular' font style
- Link component style: ['default'](https://design.va.gov/components/link/#default)

### Collapsed state

**Content**

If you can't find your application or form

### Expanded state

**Content**

If you can’t find a draft application or form, it may have expired. We only save draft applications and forms for a limited time. This helps us protect your personal data. After a draft application or form expires, you’ll need to start over.

If you can’t find an application or form you submitted, that doesn’t mean that we didn’t receive it. 

We're offering a new feature for some forms that helps you track those forms from the time you submit the form online to when we confirm that we've received it.

We'll show the status of these select forms here for 60 days after you submit the form:
- Authorize the release of non-VA medical information to VA (VA Form 21-4142 & 21-4142a)
- Submit a lay or witness statement to support a VA claim (VA Form 21-10210)
- Authorize VA to release your information to a third-party source (VA Form 21-0845)
- Request priority processing for an existing claim (VA Form 20-10207)
- Request personal records (VA Form 20-10206)
- Request to be a substitute claimant for a deceased claimant (VA Form 21P-0847)
- Sign VA claim forms as an alternate signer (VA Form 21-0972)

If you have questions about your applications or forms, call us at 800-827-1000 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.

---

## Card types and variations

### Draft card
- [Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1242-26447&t=FOSo9YgBxV0pQn0K-1)
- [Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1264-32620&t=FOSo9YgBxV0pQn0K-1)

**Show card**

- If a user has started an benefit application or form but has not yet submitted it.

**Do NOT show card**

- If a user does not have any benefit applications or forms that they have not yet submitted.

**Visual specs**

- The Card component in [VADS](https://design.va.gov/components/card#variations) is used, with the default white background variation.
- The Tag component in [VADS](https://design.va.gov/components/tag) is also used.
- Link component style: the "Continue your application" link should use the [Link component active link style](https://design.va.gov/storybook/?path=/docs/components-va-link--default#active) in VADS.
- Typography: 'h3', 'vads-font-size-base'

#### **Content**

Form code

Application type

`error`(icon) Application expires on: Date

Last saved on: Date

Continue your application (linked to saved application)


##### **Content specs**

- The data for the benefit application draft card is gathered from the same API call as the main user call.

---

#### How does an application in progress end up showing in a card on My VA?

- Forms and applications must be configured using the Save in progress (SiP) configuration as outlined on the [Platform website](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) 
- Most applications expire after 60 days of inactivity. The draft is no longer available. Veteran must restart the application/form.
- There are exceptions to the 60 day rule which include: the 526 (1 year), ...

---

### If a user has multiple cards to show including drafts

- [Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1236-25214&t=FOSo9YgBxV0pQn0K-1)
- [Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1326-47671&t=FOSo9YgBxV0pQn0K-1)

**Positioning**

Cards are stacked in a single column on both mobile and desktop, as shown in the mockups above. The order of cards stacks from the most recently created draft or submitted form at the top, with the oldest at the bottom. 

---

## When form status cards besides drafts appear

For MVP, [8 forms are tracked and displayed on My VA](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/2024-05%20VFF%20and%20My%20VA%20Form%20Submission%20Research/Research/MVP-form-list.md):

- Authorize the release of non-VA medical information to VA (VA Form 21-4142 & 21-4142a)
- Submit a lay or witness statement to support a VA claim (VA Form 21-10210)
- Authorize VA to release your information to a third-party source (VA Form 21-0845)
- Request priority processing for an existing claim (VA Form 20-10207)
- Request personal records (VA Form 20-10206)
- Request to be a substitute claimant for a deceased claimant (VA Form 21P-0847) 
- Sign VA claim forms as an alternate signer (VA Form 21-0972)


Once one of these forms are submitted, they will be represented as a card on My VA. The cards with the statuses of submission in progress, received, and action needed correspond to these forms. 

---

## Form Status card - Submission in progress
- [Desktop figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1233-60863&t=FOSo9YgBxV0pQn0K-1)
- [Mobile figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1326-46257&t=FOSo9YgBxV0pQn0K-1)

**Show card**
- When one of the supported forms that can be tracked has been successfully submitted by the user, prior to it being received after being processed through VBMS.

**Do NOT show card**
- When a form that is not supported has been submitted by the user
- When a detectable silent error has occured with a supported form submission (the "Action needed" card variation will be shown instead)
- When a form is still in progress (a "Draft" card)
- When a supported submitted form has been received ("Received" card)
- If a user does not have any benefit applications or forms that they have submitted.


**Visual specs**
- The Card component in [VADS](https://design.va.gov/components/card#variations) is used, with the default white background variation.
- The Tag component in [VADS](https://design.va.gov/components/tag) is used.
- Link component styles:
  - ['default' for benefits hotline number and TTY](https://design.va.gov/components/link/)
- Typography: 'h3', 'vads-font-size-base', tag component uses its default 'regular' font style

### **Content**

SUBMISSION IN PROGRESS

Form name

Form number

Submitted on: Month Day, Year

Next step: We’ll prepare your form for review. This may take up to 10 days.
If you have questions, call us at 800-827-1000 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.

**Below the card**

"If you can't find your application or form" accordion (see [expanded content for 'If you can't find your application or form'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/FE-documentation-MVP.md#expanded-state) section on this page for more details).

#### **Content specs**

Figma file (with content supplied by CAIA):
- [Desktop figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1233-60863&t=FOSo9YgBxV0pQn0K-1)
- [Mobile figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1326-46257&t=FOSo9YgBxV0pQn0K-1)

### How does a form/application in the submission in progress status end up showing in a card on My VA?
- The card appears after a supported form is submitted.
- The card disappears if it has been more than 60 days since submission.
- The card may continue to exist but with a different status and associated content changes as the submission process progresses. 

---

## Form Status card - Received
- [Desktop figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1236-24507&t=70N3w0qWEHXE9kWz-1)
- [Mobile figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1326-47328&t=70N3w0qWEHXE9kWz-1)

**Show card**
- When one of the supported forms that can be tracked has been received by the VA after going through the submission process.

**Do NOT show card**
- When a form that is not supported has been submitted by the user
- When a detectable silent error has occured with a supported form submission (the "Action needed" card variation will be shown instead)
- When a form is still in progress (a "Draft" card)
- If a user does not have any benefit applications or forms that they have submitted.

**Visual specs**
- The Card component in [VADS](https://design.va.gov/components/card#variations) is used, with the default white background variation.
- The Tag component in [VADS](https://design.va.gov/components/tag) is used.
- Link component styles:
  - ['default' for benefits hotline number and TTY](https://design.va.gov/components/link/#default)
- Typography: 'h3', 'vads-font-size-base', tag component uses its default 'regular' font style

### **Content**

**Card contents:**

RECEIVED

Form name

Form number

Submitted on: Month Day, Year

Received on: Month Day, Year

Next step: We’ll review your form. If we need more information, we’ll contact you. 

If you have questions, call us at 800-827-1000 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.

**Below the card**

"If you can't find your application or form" accordion (see [expanded content for 'If you can't find your application or form'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/FE-documentation-MVP.md#expanded-state) section on this page for more details).

#### **Content specs**

Figma file (with content supplied by CAIA):
- [Desktop figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1236-24507&t=70N3w0qWEHXE9kWz-1)
- [Mobile figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1326-47328&t=70N3w0qWEHXE9kWz-1)

### How does a form/application in the received state end up showing in a card on My VA?
- The card appears after a supported form is submitted.
- The card disappears if it has been more than 60 days since submission.

---

## Form Status card - Action Needed
- [Desktop figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1237-27666&t=qtVTZVRRbZjROpfd-1)
- [Mobile figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1327-12819&t=rws9CImTjEAVCPiu-1)

This is an **error state** for an individual form submission. This occurs after submission and before it would be received. When detected errors (aka detectable "silent errors") occur during the submission process of supported forms, the associated form cannot be processed by VA staff. In all likelihood, the form will have to be redone and resubmitted. To inform users, we display the "Action needed" card to indicate a system error took place and that they should contact the VA via the Benefits Hotline.


**Show card**
- When detected errors (aka detectable "silent errors") occur during the submission process of supported forms.
  
**Do NOT show card**
- There are no detected system errors during the submission process of any of the user's forms (_however_ it is possible that an undetected error occurred in unknown scenarios - use cases of "Action needed" may expand over time).

**Visual specs**
- The Card component in [VADS](https://design.va.gov/components/card#variations) is used, with the default white background variation.
- The Tag component in [VADS](https://design.va.gov/components/tag) is also used.
- 'Error alert' variation of the Alert component in [VADS](https://design.va.gov/components/alert#error-alert) is used on the card.
- 'error'(icon) is in the alert. 
- Link component style:
  - ['default' for benefits hotline number and TTY](https://design.va.gov/components/link/#default)
- Typography: 'h3', 'vads-font-size-base', tag component uses its default 'regular' font style

### **Content**

ACTION NEEDED

Form name

Form number

Submitted on: Month Day, Year 

Submission failed on: Monday Day, Year

We're sorry. There was a problem with our system. We couldn't process this form. Call us at 800-827-1000 (TTY: 711). We're here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.

**Below the card**

"If you can't find your application or form" accordion (see [expanded content for 'If you can't find your application or form'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/FE-documentation-MVP.md#expanded-state) section on this page for more details).

#### **Content specs**
Figma file (with content supplied by CAIA):
- [Desktop figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1237-27666&t=qtVTZVRRbZjROpfd-1)
- [Mobile figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1327-12819&t=rws9CImTjEAVCPiu-1)

### How does a form/application in the action needed status end up showing in a card on My VA?
- This card can appear when 
- _explain when the form disappears i.e. expires after 60 days_

---


## System-wide errors for the Benefit application and forms section

There are multiple possible error scenarios that are not related to specific forms:

---

### Failed main user call (pagewide error state)

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-128&t=HqzBWh1aYg5G4WmO-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-782&t=0g1QL0e3j29my5Qt-1)

This error states when the page fails to load. This could be due to a "catastrophic" failure.

 
### Failed network call

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1242-26844&t=nHq2rMia3osfDiWr-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1327-17482&t=nHq2rMia3osfDiWr-1)

This error state occurs when a network request fails. This could be because of: an issue with VA.gov's front-end/back-end, with an internal API failure(s). 

**Visual specs**
- The warning alert component in [VADS]([https://design.va.gov/components/card#variations](https://design.va.gov/components/alert#warning-alert)) is used
- The 'warning' icon is used inside the alert
- Typography: alert title (matches USWDS 1.33rem), 'vads-font-size-base'

#### **Content**

We can't access your benefit applications and forms right now

We're sorry. We're working to fix this problem. Check back later.

### Failed external API call

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1302-28921&t=nHq2rMia3osfDiWr-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1302-28909&t=nHq2rMia3osfDiWr-1)

This error state occurs when an API request for statuses fails, on the Lighthouse side.

**Visual specs**
- The warning alert component in [VADS]([https://design.va.gov/components/card#variations](https://design.va.gov/components/alert#warning-alert)) is used
- The 'warning' icon is used inside the alert
- Typography: alert title (matches USWDS 1.33rem), 'vads-font-size-base'

#### **Content**

We can't access your benefit applications and forms right now

We're sorry. We're working to fix this problem. Check back later.

### Failure for drafts only, submitted only

There are separate services utilized for displaying draft statuses and form statuses, and the possibility of one failing while the other does not is tangible. However, for the sake of our MVP and minimizing complexity, we are treating either kind of service failure as a total failure for all and as such we show the same error state regardless. The associated Figma file has dedicated frames for each of these possible states, but the content being the same is intentional (Post-MVP, this will change). 

### Drafts only

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1771-70415&t=Ly3AlX7WzQaWU6dS-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1789-41493&t=Ly3AlX7WzQaWU6dS-1)

#### Submitted only

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1771-71011&t=Ly3AlX7WzQaWU6dS-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1789-41838&t=Ly3AlX7WzQaWU6dS-1)

### Scheduled maintenance

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1294-62137&t=nHq2rMia3osfDiWr-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1330-40104&t=nHq2rMia3osfDiWr-1)
 
**Visual specs**
- The warning alert component in [VADS]([https://design.va.gov/components/card#variations](https://design.va.gov/components/alert#warning-alert)) is used
- The 'warning' icon is used inside the alert
- Typography: alert title (matches USWDS 1.33rem), 'vads-font-size-base'

#### **Content**

We can't access your benefit applications and forms right now due to maintenance

We’re working on this part of My VA. During this time, you won’t be able to access benefit applications and forms. Check back after Month Date, Year, at hh:mm a.m/p.m. ET. 


