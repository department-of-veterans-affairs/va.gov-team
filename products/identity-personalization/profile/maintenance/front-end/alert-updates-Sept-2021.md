# Profile alert improvements

**Last updated:** 11/08/21

**Status:** pending content review in [#30265](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30265)

## Background

We've got a variety of alert styles and content patterns throughout profile. In [#25820](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25820), we conducted an audit of alerts to identify opportunities to improve consistency. This document captures the recommendations that came out of the audit and collaboration with the content team.

Visit [this mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?sender=lizlantz1528) to see alert states as of September 2021, and screenshots of these use cases.

## New alerts

### 1. Successfully updated contact information in profile ([#30735](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30735))

- **Alert (pattern, state):**  Background only with icon, success

- **Include heading:** No

- **Placement:** Immediately above edit button ([example](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631822264292)), all editable sections of personal and contact information page

- **Copy:** 

  > Update saved. 

## Updates

### 1. Can't load data (API failure) ([#31402](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31402))

- **Impacted sections**: all

- **What's changing:** Copy updates, streamlining alert patterns, states, use of headings and whether or not they are dismissible

- **Placement:** Under h1 when it impacts only things on that page. Display above h1 when it impacts things in other parts of profile

- **Alert (pattern, state):** Full width, warning

- **Include heading:** No

- **Copy:** 

  > We're sorry. We can't access your [data] right now. We're working to fix this problem. Please check back later.

### 2. Identity verification ([#31403](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31403))

- **Impacted sections:** account security (rest are hidden when this alert shows)

- **What's changing:** alert state

- **Placement:** Under h1

- **Alert (pattern, state):** Full width alert, [continue state](https://design.va.gov/storybook/?path=/docs/components-va-alert--continue)

- **Include heading:** Yes

- **Copy:** 

  > [heading] **Verify your identity to access your complete profile** 
  >
  > [body] First, we need to make sure you’re you—and not someone pretending to be you. Then, we can give you access to your personal and health information. We do this to help keep your information safe from fraud and identity theft. 
  >
  > **This one-time process takes about 5 to 10 minutes**.
  >
  > [action link] Verify your identity

### 3. Successfully updated direct deposit information in profile ([#31404](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31404))

- **Impacted sections:** direct deposit

- **What's changing**: placement, copy, adding icon to alert pattern

- **Placement:** Immediately above edit button ([example](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631822264292))

- **Alert (pattern, state):**  Background only with icon, success

- **Include heading:** No

- **Copy:** 

  > Update saved.

### 4. Failure to update contact information in profile ([#31405](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31405))

- **Impacted sections:** personal and contact information

- **What's changing:** Copy updates, streamlining alert patterns, states, use of headings and whether or not they are dismissible

- **Placement:** Immediately above update button ([example](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631823092685), note that content is not up to date)

- **Alert pattern, style:**  Background only with icon, failure

- **Include heading:** No

- **Copy:** 

  > We're sorry. We can't update your information right now. We're working to fix this problem. Please check back later.

### 5. Successfully disconnected an app ([#31406](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31406))

- **Impacted sections:** connected apps

- **What's changing**: copy, alert pattern and state.

- **Alert (pattern, state):**  Background only with icon, success

- **Include heading:** No

- **Placement:** Replace tile of disconnected app 

- **Copy:** 

> We disconnected [app name] from your VA.gov profile. If you have questions about data the app has already collected, review the app's privacy policy or contact customer support.  
> [Review the [app name] privacy policy] (link to privacy policy) 

### 6. Failure to disconnect an app ([#31407](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31407))

- **Impacted sections:** connected apps

- **What's changing**: copy, alert pattern and state.

- **Alert (pattern, state):**  Background only with icon, failure

- **Include heading:** No

- **Placement:** Above button user clicked to attempt disconnect

- **Copy:** 

  > We're sorry. We can't disconnect this app from your VA.gov profile right now: [app name]. We're working to fix this problem. Please check back later.

### 7. User hits cancel button while editing data ([#31408](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31408))

- **Impacted sections:** any editable section

- **What's changing**: button styles

- **Placement:** In modal component

- **Alert (pattern, state):** Full width, warning state

- **Include heading:** Yes

- **Button usage:**

  - First button contains the confirming action and has the primary button style
  - Second button (if applicable) contains the cancel action and has the secondary button style

- **Copy:**

  > [heading] Are you sure?
  >
  > [body] You haven't finished editing and saving the changes to your [data]. If you cancel now, we won't save your changes.
  >
  > [button] Continue editing 
  >
  > [button] Cancel

### 8. User is editing a section and attempts to edit another section without saving ([#31410](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31410))

- **Impacted sections:** personal and contact information

- **What's changing**: copy, button styles, new button added

- **Placement:** In modal component

- **Alert (pattern, state):** Full width, warning state

- **Include heading:** Yes

- **Button usage:**

  - First button contains the confirming action and has the primary button style
  - Second button (if applicable) contains the cancel action and has the secondary button style

- **Copy:**

  > [heading] Are you sure?
  >
  > [body] You haven't finished editing and saving the changes to your [data]. If you cancel now, we won't save your changes.
  >
  > [button] Continue editing 
  >
  > [button] Cancel

### 9. Confirmation user wants to disconnect app ([#31411](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31411))

- **Impacted sections:** connected apps

- **What's changing**: copy, button order

- **Placement:** In modal component

- **Alert (pattern, state):** Full width, warning state

- **Include heading:** Yes

- **Button usage:**

  - First button contains the confirming action and has the primary button style
  - Second button (if applicable) contains the cancel action and has the secondary button style

- **Copy:**

  >  [heading] Are you sure?
  >
  > [body] After you disconnect this app, the app won’t have access to new information from your VA.gov profile. This may affect how useful the app is to you.
  >
  > Some apps might store information you’ve already shared after you disconnect. If you want your stored information deleted from the app, contact the app’s customer support. 
  >
  > [button] Disconnect
  >
  > [button] Cancel

### 10. User has been flagged as incompetent, so they can't access their financial information ([#32416](https://github.com/department-of-veterans-affairs/va.gov-team/issues/32416))

- **Impacted sections:** profile wide

- **What's changing**: alert state, copy

- **Placement:** Don't change current placement

- **Alert (pattern, state):** Full width, warning state

- **Include heading:** Yes

- **Copy:** 

  - Please link phone numbers

  >  [heading] We don’t include your financial information in your VA.gov profile
  >
  >  [body] If you think financial information should be here, or if you need to make updates, call us at 800-698-2411[link] (TTY: 711[link] ). We're here 24/7.

## No changes

### 1. Review data entered

​		Going to address with [#30258](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30258)

### 2. User is not in MPI

​		No changes, keep [current state](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631669409313)

### 3. User removes contact information

​		No changes, keep [current state](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631670449009)
