# Notification settings Test/Use Cases & Users 


### Test cases for LOA1 user and LOA3 user

| Test case                                 | Intended outcome                                             | Staging User  | Prototype link |
| ----------------------------------------- | ------------------------------------------------------------ | ------------- | -------------- |
| LOA1 user has not verified their identity | User sees warning message stating that we can't load all of their profile information, and they are prompted to verify their identity | Any LOA1 user |                |
|                                           |                                                              |               |                |

### Test cases for notifications all views

| Test case                                                    | Intended outcome                                             | Staging User | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| User has saved email address **and** mobile phone number in profile | Display default notification settings page with all applicable groups and notifications | TK           | [Mobile](TKhttps://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/137989653?mode=i)<br />[Desktop](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/139127795/simulate/sitemap?mode=i) |
| User is not enrolled in health care                          | Should not see notifications group titled "Your health care" | TK           | n/a                                                          |
| User does not have saved email address **and** mobile phone number in profile | Display `h1` and background only information alert in place of notification groups and contact information | TK           | [Mobile](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138278598/simulate/sitemap?mode=i)<br />[Desktop](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138298167/simulate/sitemap?mode=i) |
| User does not have saved email address **OR** mobile phone number in profile | • Display information alert above notification groups<br />• Content impacts in read/edit mode (detailed below) | TK           | [Mobile](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138278597/simulate/sitemap?mode=i)<br />[Desktop](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/139109897/simulate/sitemap?mode=i) |

### Test cases for notifications read view

| Test case                                                    | Intended outcome                                             | Staging User | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| User has a mobile number **and/or** email address on file    | • Notification groups and items display under `h1` and intro content<br />• Status under each notification item reflects user input when we have corresponding contact information<br />• When we don't have corresponding contact information, copy displays in place of status message directing user to update their profile. | TK           | [Mobile](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138278597/simulate/sitemap?mode=i)<br />[Desktop](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/139109897/simulate/sitemap?mode=i) |
| User does not have saved email address **OR** mobile phone number in profile | •. If all the notifications in a group have *only* the missing channel, hide the edit button for the group <br />• Replace the on/off status message with text directing user to update their contact information. |              |                                                              |
| User clicks edit button                                      | User enters to edit view                                     | TK           |                                                              |
| User returns to read view after saving changes               | Success alert displayed under `h1`<br />On/off status under each notification  should correspond with user input | TK           |                                                              |
| User returns to read view after hitting "cancel" button in edit mode | No changes from previous state                               | TK           |                                                              |
|                                                              |                                                              |              |                                                              |
|                                                              |                                                              | TK           |                                                              |

### Test cases for notifications edit view

| Test case                                                    | Intended outcome | Staging User | Prototype link |
| ------------------------------------------------------------ | ---------------- | ------------ | -------------- |
|                                                              |                  |              |                |
|                                                              |                  |              |                |
| User interacts with a checkbox                               |                  |              |                |
| User presses save button                                     |                  |              |                |
| User presses cancel button                                   |                  |              |                |
| User is missing an email address OR mobile phone number (not both) |                  |              |                |
| User has no contact information on file corresponding with available notification options (e.g. has no mobile number, and notification group only has text notifications available) |                  |              |                |
|                                                              |                  |              |                |
|                                                              |                  |              |                |


### Test cases for errors/warnings

| Test case    | Intended outcome | Staging User | Prototype link |
| ------------ | ---------------- | ------------ | -------------- |
| Save failure |                  |              |                |
