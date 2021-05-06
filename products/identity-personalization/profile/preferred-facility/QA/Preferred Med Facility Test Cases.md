# Preferred Medical Facility Test/Use Cases & Users ("Your VA health facilities")


### Test cases for LOA1 user and LOA3 user

| Test case                                 | Intended outcome                                             | Staging User                                     | Prototype link |
| ----------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------ | -------------- |
| LOA1 user has not verified their identity | User sees warning message stating that we can't load all of their profile information, and they are prompted to verify their identity | Any LOA1 user                                    |                |
| LOA3 user without health care             | User does not see Your VA health facilities section in navigation | Any LOA3 user who is not enrolled in health care |                |
| LOA3 user with health care                | User sees "Your VA health facilites" in profile navigation; clicking nav item goes to read view of facilities page | Any LOA3 user who is enrolled in health care     |                |

### Test cases for facilities all views

| Test case                                                    | Intended outcome                                             | Staging User                                 | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| User navigates to facilities page                            | H1 reads "Your VA health facilties<br />Copy under H1 includes link to VAOS > user clicks link, should go to VAOS<br />"How can I add a new facility?" additional info component is under facilty list and expands when clicked.<br /> | Any LOA3 user who is enrolled in health care | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006244/simulate/sitemap?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006241?mode=i) |
| LOA3 user with health care, but no registered facilities     | Info alert informs user that we don't have any facilities for them in our records; no other content on page |                                              | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006248/simulate/no-panels?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006243/simulate/no-panels?mode=i) |
| User interacts with `How can I add a new facility?` Component | If closed, should open to reveal content<br />If open, should close to hide content | Any LOA3 user who is enrolled in health care | [Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138299458?mode=i) |

### Test cases for facilities read view

| Test case                                                    | Intended outcome                                             | Staging User | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| All registerd facilities for user are marked as current      | All registered facilities are displayed<br />no reference to "other registered facilities"<br />Edit button is available | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006244/simulate/sitemap?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006241?mode=i) |
| Some registered facilities for user are marked as current    | Only facilities marked as current are displayed<br />Copy below list references other facilities marked as current.  Number of other facilities + number of current facilities should equal total number registered facilities for user.<br />Edit button is available | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006250?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006242?mode=i) |
| User clicks edit button                                      | User enters to edit view                                     | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006247/simulate/sitemap?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006240?mode=i) |
| User returns to read view after saving changes               | Success alert displayed under `h1`                           | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138016196?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006545?mode=i) |
| User returns to read view after hitting "cancel" button in edit mode | No changes from previous state                               | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006244/simulate/sitemap?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006241?mode=i) |
|                                                              |                                                              |              |                                                              |
|                                                              |                                                              |              |                                                              |

### Test cases for facilities edit view

| Test case                                                    | Intended outcome                                             | Staging User | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| User edits facility list and saves                           | TK                                                           | TK           | TK                                                           |
| User unchecks all of their facilities and saves              | Message appears in place of facility list informing them that they have no facilities marked as current. | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138280156/simulate/no-panels?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138280155?mode=i) |
| User interacts with a checkbox                               | If box is checked, becomes unchecked<br />If box is unchecked, becomes checked | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006246/simulate/no-panels?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006239/simulate/no-panels?mode=i) |
| User edits and presses save button                           | Returns to read view with success alert under `h1`           | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138016196?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006545/simulate/no-panels?mode=i) |
| User presses cancel button (does not matter if they made changes or not) | Returns to read view in previous state (no changes; may or may not have **note** under facility list depending on if the user has ever updated) | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006244/simulate/sitemap?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006241?mode=i) |
|                                                              |                                                              |              |                                                              |
|                                                              |                                                              |              |                                                              |
|                                                              |                                                              |              |                                                              |
|                                                              |                                                              |              |                                                              |


### Test cases for errors/warnings

| Test case                   | Intended outcome                                             | Staging User | Prototype link                                               |
| --------------------------- | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| Save failure                | Error alert displays above update/cancel buttons             | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006245/simulate/no-panels?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138112327/simulate/no-panels?mode=i) |
| Facilities endpoint failure | Warning alert displays under `h1` in place of all content    | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006249/simulate/no-panels?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138112328?mode=i) |
| Contact endpoint failure    | Warning alert displays in place of contact information<br />**5/5/21: Still need to account for how to treat notification opt-in when we don't have their contact info** | TK           |                                                              |
|                             |                                                              |              |                                                              |
