# Forms Status on My VA MVP Frontend Documentation
Last updated: outline and draft cards info added August 1, 2024

This FE documentation outlines all possible status cards that appear in the Benefit applications and forms section on My VA: drafts, submission in progress, received, and action needed

## When to show the ‘Benefit applications and forms' section
We show this section for every LOA3 user.

---

## Benefit application draft card
- Desktop
- Mobile 

**Show card**

- If a user has started an benefit application or form but has not yet submitted it.

**Do NOT show card**

- If a user does not have any benefit applications or forms that they have not yet submitted.

**Visual specs**

- There is a Tag component with the content "Draft"
- Use the [form status version of the card component](https://design.va.gov/components/card#form-status) in the VA design system.
- The "Continue your application" link should use the [active link style](https://design.va.gov/storybook/?path=/docs/components-va-link--default#active) in the VA design system.

### **Content**

Form code

Application type

`error` Application expires on: Date

Last opened on: Date

Continue your application (linked to saved application)


### **Content specs**

- The data for the benefit application draft card is gathered from the same API call as the main user call.

---

### How does an application in progress end up showing in a card on My VA?

- Forms and applications must be configured using the Save in progress (SiP) configuration as outlined on the [Platform website](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) 
- Applications expire after 60 days of inactivity. The draft is no longer available. Veteran must restart the application/form.

---

### If a user has multiple cards to show including drafts

- [Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1236-25214&t=FOSo9YgBxV0pQn0K-1)
- [Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1326-47671&t=FOSo9YgBxV0pQn0K-1)

**Positioning**
Cards are displayed side by side on desktop and stacked on mobile as shown in the mockups above. If a user has more than two drafts to show, they keep stacking in this way on desktop with two per row max.

_Needs to be updated since we are changeing configuration to single column_


---

### If a user does not have any benefit application drafts to show

- [Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1231-49126&t=FOSo9YgBxV0pQn0K-1)
- [Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1260-37414&t=FOSo9YgBxV0pQn0K-1)

#### **Content**

You have no benefit applications or forms to show.

**Positioning**

This text appears directly below the "Benefit applications and forms" header on the lefthand side of the page on desktop.

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
- _what components are used?_
- _what link styles are used?_
- etc.

### **Content**
_provide exact content/copy that will display_

### **Content specs**
_where is the content called from_

### How does a form/application in the pending/submitted status end up showing in a card on My VA?
- _explain how the form appears_
- _explain when the form disappears i.e. expires after 60 days_

---
## Form Status card - Action Needed
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
## Error States
- Desktop figma link
- Mobile figma link

### Error states associated with drafts
- The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error.

### Errors states associated with form status
- tk tk
