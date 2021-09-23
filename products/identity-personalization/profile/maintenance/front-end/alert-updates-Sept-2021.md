# Profile alert updates

September 2021

Visit [this mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?sender=lizlantz1528) to see current states, and screenshots of these use cases

## Use cases

### Can't load data (API failure)

**Placement:** Under h1 when it impacts only things on that page. Display above h1 when it impacts things in other parts of profile
**Alert pattern, style:** Full width, warning
**Include heading:** No
**Copy:** 

> We're sorry. We can't access your [data] at this time. We're working to fix this problem. Please check back later.

### Review data entered

No changes at this time, going to address with [#30258](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30258)



### Identity verification

**Placement:** Under h1
**Alert pattern, style:** Full width alert, [continue state](https://design.va.gov/storybook/?path=/docs/components-va-alert--continue)
**Include heading:** Yes
**Copy:** 

> [heading] **Verify your identity to view your complete profile**. 
>
> [body] We need to make sure you’re you - and not someone pretending to be you - before we can give you access to your personal and health-related information.  This helps to keep your information safe, and to prevent fraud and identity theft.  
>
> **This one-time process takes about 5-10 minutes**.
>
> [action link] Verify your identity

### Success states

All success states have the following characteristics:

**Alert pattern, style:**  Background only with icon, success
**Include heading:** No

#### Successfully updated contact or direct deposit information in profile

**Placement:** Immediately above edit button ([example](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631822264292))
**Copy:** 

> Update saved.

#### Successfully disconnected an app

**Placement:** Replace tile of disconnected app 
**Copy:** 

> We've disconnected [app name] from your VA.gov profile. To delete stored information in the app, connect the app's support.

### Failure states

All failure states have the following characteristics:

**Alert pattern, style:**  Background only with icon, failure
**Include heading:** No

#### Failure to disconnect an app

**Placement:** Above button user clicked to attempt disconnect
**Copy:** 

> We're sorry. We can't disconnect [app name] from your VA.gov profile at this time. We're working to fix this problem. Please check back later.

#### Failure to update contact information in profile

**Placement:** Immediately above update button ([example](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631823092685), note that content is not up to date)
**Copy:** 

> We're sorry. We can't update your [data] at this time. We're working to fix this problem. Please check back later.

### Request user confirmation

All confirmations have the following characteristics:

- **Placement:** In modal component
- **Alert pattern, style:** Full width, warning state
- **Include heading:** Yes
- **Button usage:**
  - First button contains the confirming action and has the primary button style
  - Second button (if applicable) contains the cancel action and has the secondary button style

#### User cancels while editing information

**Copy:** 

> [heading] Are you sure?
>
> [body] You haven't finished editing your [data]. If you cancel, your in-progress work won't be saved.
>
> [button] Continue editing 
>
> [button] Cancel

#### User is editing a section and attempts to edit another section without saving

**Copy:** 

> [heading] Are you sure?
>
> [body] You haven't finished editing your [data]. You can continue editing, or cancel your work. If you cancel, your in-progress work won't be saved.
>
> [button] Continue editing 
>
> [button] Cancel edits

#### User disconnects app

**Copy:** 

> [heading] Are you sure?
>
> [body] Once you disconnect this app, it won’t have access to new information from your VA.gov profile. This may affect how useful the app is to you.
>
> Some apps might store information you’ve already shared after you disconnect. You can Contact the app’s support if you want stored information to be deleted from the app.
>
> [button] Disconnect
>
> [button] Cancel

#### User removes contact information

No changes to current state

### Miscellaneous

#### User has been flagged as incompetent, so they can't access their financial information

**Placement:** under h1 on Personal and Contact information page
**Alert pattern, style:** Full width, warning state
**Include heading:** No
**Dismissible:** Yes

**Copy:**

> We’re sorry. Our records show that you’re unable to view and update your financial information from your VA.gov profile.
>
> If you think this is an error, you can call the VA.gov help desk at [855-574-7286](tel:1-855-574-7286) (TTY: [711](tel:711)). We’re here Monday – Friday, 8 a.m. – 8 p.m. ET.

#### User is not in MPI

[Current example](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631669409313)

TBD

#### No badge

[Current example](https://app.mural.co/t/vsa8243/m/vsa8243/1631668096417/8acd03935adaad54b1fae3483d057fcd3b044985?wid=0-1631670009351)

TBD
