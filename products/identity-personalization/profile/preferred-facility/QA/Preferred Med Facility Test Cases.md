# Preferred Medical Facility Test/Use Cases & Users ("Your VA health facilities")


### Test cases for LOA1 user and LOA3 user

| Test case                                 | Intended outcome                                             | Staging User                                      | Prototype link |
| ----------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------- | -------------- |
| LOA1 user has not verified their identity | User sees warning message stating that we can't load all of their profile information, and they are prompted to verify their identity | Any LOA1 user                                     |                |
| LOA3 user without health care             | User does not see Your VA health facilities section          | Any LOA3 user who is not renrolled in health care |                |

### Test cases for facilities read and edit views

| Test case                         | Intended outcome                                             | Staging User | Prototype link                                               |
| --------------------------------- | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| User navigates to facilities page | H1 reads "Your VA health facilties<br />Copy under H1 includes link to VAOS > user clicks link, should go to VAOS<br />"How can I add a new facility?" additional info component is under facilty list and expands when clicked. | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006244/simulate/sitemap?mode=i)<br />[Desktop](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006241?mode=i) |

### Test cases for facilities read view

| Test case                                                    | Intended outcome                                             | Staging User | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| All facilities where a user is registered are marked as current | All registered facilities are displayed, no reference to "other registered facilities". User sees edit button and "how can I add a new facility" component under list. | TK           | [Mobile](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006244/simulate/sitemap?mode=i)<br />Desktop |
| Some facilities are marked as current                        | Only facilities marked as current are displayed, copy below list references other facilities marked as current.  Number of other facilities + number of current facilities should equal total number registered facilities for user. | TK           | TK                                                           |
| User clicks edit button                                      | User goes to edit view                                       | TK           | TK                                                           |

### Test cases for facilities edit view

| Test case                             | Intended outcome | Staging User | Prototype link |
| ------------------------------------- | ---------------- | ------------ | -------------- |
| User edits facility list              | TK               | TK           | TK             |
| User unchecks all of their facilities | TK               | TK           | TK             |


### Test cases for errors/warnings

| Test case    | Intended outcome | Staging User | Prototype link |
| ------------ | ---------------- | ------------ | -------------- |
| Save failure |                  |              |                |
