# Forms Status on My VA MVP Frontend Documentation
Last updated: outline and draft cards info added July 30, 2024

## When to show the ‘Benefit applications and forms' section
We show this section for every LOA3 user.

---

## Benefit application draft card
- Desktop (need sketch link)
- Mobile (need sketch link)

**Show card**

- If a user has started an benefit application or form but has not yet submitted it.

**Do NOT show card**

- If a user does not have any benefit applications or forms that they have not yet submitted.

**Visual specs**

- Use the [form status version of the card component](https://design.va.gov/components/card#form-status) in the VA design system.
- The "Continue your application" link should use the [active link style](https://design.va.gov/storybook/?path=/docs/components-va-link--default#active) in the VA design system.

### **Content**

Form code

Application type

`exclamation-circle` Application expires on: Date

Last opened on: Date

Continue your application (linked to saved application)


### **Content specs**

- The data for the benefit application draft card is gathered from the same API call as the main user call.

---

### How does an application in progress end up showing in a card on My VA?

- Forms and applications must be configured using the Save in progress (SiP) configuration as outlined on the [Platform website](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) 
- Applications expire after 60 days of inactivity. The draft is no longer available. Veteran must restart the application/form.

---

### If a user has multiple benefit application drafts to show

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/B58922A6-13FB-4CF1-9DCB-F270B9DD2DC0)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/D5EA049B-1179-4824-9F30-80920CE5EF1E)

**Positioning**
Cards are displayed side by side on desktop and stacked on mobile as shown in the mockups above. If a user has more than two drafts to show, they keep stacking in this way on desktop with two per row max.

_Needs to be updated since we are changeing configuration to single column_


---

### If a user does not have any benefit application drafts to show

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/10A09E21-70D7-4606-9E8A-1EBB31AE8EC9)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/C7F1D33D-5400-41CE-8F6D-78F43105AE91)

#### **Content**

You have no benefit application drafts to show.

**Positioning**

This text appears directly below the "Benefit applications and forms" header on the lefthand side of the page on desktop.

---
## Form Status card - Pending/Submitted

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

### How does a form/application in the pending/submitted status end up showing in a card on My VA?
- _explain how the form appears_
- _explain when the form disappears i.e. expires after 60 days_

---
## Form Status card - Action Needed

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

### Error states associated with drafts
- The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error.

### Errors states associated with form status
- tk tk
