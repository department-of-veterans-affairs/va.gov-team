# Forms Status on My VA MVP Frontend Documentation
Last updated: outline and draft cards info added August 2, 2024

This FE documentation outlines all possible status cards that appear in the Benefit applications and forms section on My VA: 

- Drafts
- Submission in progress
- Received
- Action needed

It also outlines the accordion component with the title "If you can't find your application or form" that appears at the bottom of this section.

In addition, this documentation accounts for possible scenarios in which no draft or form statuses can be displayed:

- Failed network call
- Failed API call
- Scheduled maintenance

## When to show the ‘Benefit applications and forms' section
We show this section for every LOA3 user.

---

## If a user does not have any benefit application drafts to show

- [Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1231-49126&t=FOSo9YgBxV0pQn0K-1)
- [Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1260-37414&t=FOSo9YgBxV0pQn0K-1)

### **Content**

You have no benefit applications or forms to show.

(This is displayed as body text, with no cards appearing).


**Positioning**

This text appears directly below the "Benefit applications and forms" header on the lefthand side of the page on desktop.

Below that, an accordion component (Titled "If you can't find your application or form") appears below the text "You have no benefit applications or forms to show."

---

## "If you can't find your application or form" accordion
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
- Typography: 'vads-font-size-base', with bolded text using 'vads-font-weight-bold'
- Link style: 'default'

### Collapsed state

**Content**

If you can't find your application or form

### Expanded state

**Content**

If you can’t find a draft application or form, it may have expired. We only save draft applications and forms for 60 days. This helps us protect your personal data. After 60 days, you’ll need to start over. 

If you can’t find an application or form you submitted, that doesn’t mean that we didn’t receive it. 

We're offering a new feature for some forms that helps you track those forms from the time you submit the form online to when we confirm that we've received it.

We'll show the status of these select forms here for 60 days after you submit the form:
- Authorize the release of non-VA medical information to VA (VA Form 21-4142 & 21-4142a)
- Submit a lay or witness statement to support a VA claim (VA Form 21-10210)
- Request priority processing for an existing claim (VA Form 20-10207)
- Authorize VA to release your information to a third-party source (VA Form 21-0845)
- Sign VA claim forms as an alternate signer (VA Form 21-0972)
- Submit an intent to file (VA Form 21-0966)
- Request to be a substitute claimant for a deceased claimant (VA Form 21P-0847)

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

- There is a Tag component with the content "Draft"
- Use the [form status version of the card component](https://design.va.gov/components/card#form-status) in the VA design system.
- The "Continue your application" link should use the [active link style](https://design.va.gov/storybook/?path=/docs/components-va-link--default#active) in the VA design system.

#### **Content**

Form code

Application type

`error`(icon) Application expires on: Date

Last opened on: Date

Continue your application (linked to saved application)


#### **Content specs**

- The data for the benefit application draft card is gathered from the same API call as the main user call.

---

#### How does an application in progress end up showing in a card on My VA?

- Forms and applications must be configured using the Save in progress (SiP) configuration as outlined on the [Platform website](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) 
- Applications expire after 60 days of inactivity. The draft is no longer available. Veteran must restart the application/form.

---

### If a user has multiple cards to show including drafts

- [Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1236-25214&t=FOSo9YgBxV0pQn0K-1)
- [Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1326-47671&t=FOSo9YgBxV0pQn0K-1)

**Positioning**
Cards are stacked in a single column on both mobile and desktop, as shown in the mockups above. The order of cards stacks from the most recently created draft or submitted form at the top, with the oldest at the bottom. 

---

## When form status cards besides drafts appear

For MVP, [7 forms are tracked and displayed on My VA](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/2024-05%20VFF%20and%20My%20VA%20Form%20Submission%20Research/Research/MVP-form-list.md):

- Authorize the release of non-VA medical information to VA (VA Form 21-4142 & 21-4142a)
- Submit a lay or witness statement to support a VA claim (VA Form 21-10210)
- Request priority processing for an existing claim (VA Form 20-10207)
- Authorize VA to release your information to a third-party source (VA Form 21-0845)
- Sign VA claim forms as an alternate signer (VA Form 21-0972)
- Submit an intent to file (VA Form 21-0966)
- Request to be a substitute claimant for a deceased claimant (VA Form 21P-0847)


Once one of these forms are submitted, they will be represented as a card on My VA. The cards with the statuses of submission in progress, received, and action needed correspond to these forms. 


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
- Link styles:
  - ['download' variant](https://design.va.gov/components/tag)
  - 'default' for benefits hotline number and TTY

### **Content**

**Card contents:**

Submission in progress

Form name

Form number

Download your application, available until XX/XX/XXXX (PDF)

Submitted on: Month Day, Year

Next step: We’ll prepare your form for review. This may take up to 10 days.
If you have questions, call us at 800-827-1000 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.

**Below the card**

["If you can't find your application or form" accordion]()

### **Content specs**

Figma file (with content supplied by CAIA):
- [Desktop figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1233-60863&t=FOSo9YgBxV0pQn0K-1)
- [Mobile figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1326-46257&t=FOSo9YgBxV0pQn0K-1)


### How does a form/application in the submission in progress status end up showing in a card on My VA?
- _explain how the form appears_
- _explain when the form disappears i.e. expires after 60 days_

---

## Form Status card - Action Needed
- [Desktop figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1242-26844&t=9jXpvwMfseFUL5KE-1)
- [Mobile figma link](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1327-12819&t=nHq2rMia3osfDiWr-1)

**Show card**
- When detected errors (aka detectable "silent errors") occur during the submission process of supported forms, the associated form cannot be processed by VA staff. In all likelihood, the form will have to be redone and resubmitted. To inform users, we display the "Action needed" card to indicate a system error took place and that they should contact the VA via the Benefits Hotline.
  
**Do NOT show card**
- There are no detected system errors during the submission process of any of the user's forms (_however_ it is possible that an undetected error occurred in unknown scenarios - use cases of "Action needed" may expand over time).

**Visual specs**
- _what components are used?_
- _what link styles are used?_
- etc.

### **Content**
_provide exact content/copy that will display_

### **Content specs**
_where is the content called from_

### How does a form/application in the action needed status end up showing in a card on My VA?
- _explain how the form appears_
- _explain when the form disappears i.e. expires after 60 days_

---
## Form Status - Received
- Desktop figma link
- Mobile figma link

**Show card**
- _when to show the card_

**Do NOT show card**
- _when do we not show the card_

**Visual specs**
- _what components are used?_
- _what link styles are used?_
- etc.

### **Content**
_provide exact content/copy that will display_

### **Content specs**
_where is the content called from_

### How does a form/application in the received status end up showing in a card on My VA?
- _explain how the form appears_
- _explain when the form disappears i.e. expires after 60 days_

---
## Systems Related Error States

Error states that are not related to individual forms:
- Failed network call
    -  [Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1242-26844&t=nHq2rMia3osfDiWr-1)
    -  [Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1327-17482&t=nHq2rMia3osfDiWr-1)
- Failed API call
    - [Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1302-28921&t=nHq2rMia3osfDiWr-1)
    - [Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1302-28909&t=nHq2rMia3osfDiWr-1)
- Scheduled maintenance
    - [Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1294-62137&t=nHq2rMia3osfDiWr-1)
    - [Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1330-40104&t=nHq2rMia3osfDiWr-1)

- Desktop figma link 
- Mobile figma link

### Error states associated with drafts
- The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error.

### Errors states associated with form status
- tk tk
