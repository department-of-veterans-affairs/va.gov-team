# Notification settings Test/Use Cases & Users 


### Test cases for LOA1 user and LOA3 user

| Test case                                 | Intended outcome                                             | Staging User  | Prototype link |
| ----------------------------------------- | ------------------------------------------------------------ | ------------- | -------------- |
| LOA1 user has not verified their identity | User sees warning message stating that we can't load all of their profile information, and they are prompted to verify their identity | Any LOA1 user |                |
|                                           |                                                              |               |                |

### Test cases for notifications all views

| Test case                                    | Intended outcome | Staging User | Prototype link |
| -------------------------------------------- | ---------------- | ------------ | -------------- |
| User navigates to notification settings page |                  | TK           | TK             |
|                                              |                  |              |                |

### Test cases for notifications read view

| Test case                                                    | Intended outcome                                             | Staging User | Prototype link |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------ | -------------- |
|                                                              |                                                              |              |                |
|                                                              |                                                              |              |                |
| User clicks edit button                                      | User enters to edit view                                     | TK           |                |
| User returns to read view after saving changes               | Success alert displayed under `h1`                           | TK           |                |
| User returns to read view after hitting "cancel" button in edit mode | No changes from previous state                               | TK           |                |
| User has no contact info on file                             | Page displays `h1` and information alert telling user they need to add contact information to add notifications.<br />Alert includes link to contact information section of profile<br />No access to edit view | TK           |                |
| User is missing an email address OR mobile phone number (not both) |                                                              | TK           |                |

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
