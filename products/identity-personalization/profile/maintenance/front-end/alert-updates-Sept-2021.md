# Profile alert improvements

**Last updated:** 10/11/21

**Status:** pending content review in [#30265](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30265)

Visit [this mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?sender=lizlantz1528) to see alert states as of September 2021, and screenshots of these use cases.

## New alerts

### 1. Successfully updated contact information in profile

- **Alert (pattern, state):**  Background only with icon, success

- **Include heading:** No

- **Placement:** Immediately above edit button ([example](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631822264292)), all editable sections of personal and contact information page

- **Copy:** 

  > Update saved. 

## Updates

### 1. Can't load data (API failure)

- **Impacted sections**: all

- **What's changing:** Copy updates, streamlining alert patterns, states, use of headings and whether or not they are dismissible

- **Placement:** Under h1 when it impacts only things on that page. Display above h1 when it impacts things in other parts of profile

- **Alert (pattern, state):** Full width, warning

- **Include heading:** No

- **Copy:** 

  > We're sorry. We can't access your [data] at this time. We're working to fix this problem. Please check back later.

### 2. Identity verification

- **Impacted sections:** personal and contact information (rest are hidden when this alert shows)

- **What's changing:** alert state

- **Placement:** Under h1

- **Alert (pattern, state):** Full width alert, [continue state](https://design.va.gov/storybook/?path=/docs/components-va-alert--continue)

- **Include heading:** Yes

- **Copy:** 

  > [heading] **Verify your identity to view your complete profile**. 
  >
  > [body] We need to make sure you’re you - and not someone pretending to be you - before we can give you access to your personal and health-related information.  This helps to keep your information safe, and to prevent fraud and identity theft.  
  >
  > **This one-time process takes about 5-10 minutes**.
  >
  > [action link] Verify your identity

### 3. Successfully updated direct deposit information in profile

- **Impacted sections:** direct deposit

- **What's changing**: placement, copy, adding icon to alert pattern

- **Placement:** Immediately above edit button ([example](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631822264292))

- **Alert (pattern, state):**  Background only with icon, success

- **Include heading:** No

- **Copy:** 

  > Update saved.

### 4. Failure to update contact information in profile

- **Impacted sections:** personal and contact information

- **What's changing:** Copy updates, streamlining alert patterns, states, use of headings and whether or not they are dismissible

- **Placement:** Immediately above update button ([example](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631823092685), note that content is not up to date)

- **Alert pattern, style:**  Background only with icon, failure

- **Include heading:** No

- **Copy:** 

  > We're sorry. We can't update your [data] at this time. We're working to fix this problem. Please check back later.

### 5. Successfully disconnected an app

- **Impacted sections:** connected apps

- **What's changing**: copy, alert pattern and state.

- **Alert (pattern, state):**  Background only with icon, success

- **Include heading:** No

- **Placement:** Replace tile of disconnected app 

- **Copy:** 

  > We've disconnected [app name] from your VA.gov profile. To delete stored information in the app, contact the app's support.

### 6. Failure to disconnect an app

- **Impacted sections:** connected apps

- **What's changing**: copy, alert pattern and state.

- **Alert (pattern, state):**  Background only with icon, failure

- **Include heading:** No

- **Placement:** Above button user clicked to attempt disconnect

- **Copy:** 

  > We're sorry. We can't disconnect [app name] from your VA.gov profile at this time. We're working to fix this problem. Please check back later.

### 7. User hits cancel button while editing data

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
  > [body] You haven't finished editing your [data]. If you cancel, your in-progress work won't be saved.
  >
  > [button] Continue editing 
  >
  > [button] Cancel

### 8. User is editing a section and attempts to edit another section without saving

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
  > [body] You haven't finished editing your [data]. You can continue editing, or cancel your work. If you cancel, your in-progress work won't be saved.
  >
  > [button] Continue editing 
  >
  > [button] Cancel edits

### 9. Confirmation user wants to disconnect app

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
  > [body] Once you disconnect this app, it won’t have access to new information from your VA.gov profile. This may affect how useful the app is to you.
  >
  > Some apps might store information you’ve already shared after you disconnect. You can Contact the app’s support if you want stored information to be deleted from the app.
  >
  > [button] Disconnect
  >
  > [button] Cancel



## No changes

### 1. Review data entered

​		Going to address with [#30258](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30258)

### 2. User is not in MPI

​		No changes, keep [current state](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631669409313)

### 3. User has been flagged as incompetent, so they can't access their financial information

​		Going to address with [#30460](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30460)

### 4. User removes contact information

​		No changes, keep [current state](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631670449009)

### 

