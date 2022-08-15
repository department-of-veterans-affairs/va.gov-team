# Accessibility audit & updates

_We should consolidate all accessibility feedback we've gotten, review it, and determine next steps. Tasks run from full-on projects (eg. moving edit from in-line to another page) to smaller tasks we can knock out as time allows._

## Questions / Concerns Raised

See [Profile screen reader walk-through](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/product/screen-reader-walkthrough.md) - May 3, 2022

### Sidebar nav position 
- Currently below the H1 and creating confusion for screen reader users
-   **_Resolved?_**

### Hubless spoke
- [Mural](https://app.mural.co/t/vsa8243/m/vsa8243/1653404244021/d2fdb4d36539e09705429286accaf119db765664?invited=true&sender=u28f508d646c449cc1afe4873) 
- concerns presented by accessibility folks regarding challenges presented due to the lack of a true landing page

### Field "headings" (i.e. Mailing address and Home address)
-   Some changes are needed for the heading order in Addresses. For example, it would be better if "Mailing address" were H3 instead of a list item, with paragraph text then used for the hint text. Same applies to Phone numbers and other similar fields in Profile. 
-   Concern also raised during during BAI pilot session with Angela

### Address validation 
-   Address validation is a considerably difficult flow for screen reader users
-   Concern raised during BAI pilot session with Angela

### One-per-page editing
-   Consider moving from in-line editing to one-per-page editing
-   Some research has been done by other teams

### Name tag
-   Currently, nametag is hiding above the first heading and there's a good chance a screen reader user wouldn't catch this (unless a beginner).

### TTY (Direct Deposit)
-   The help phone number is ok for the screen reader, but 711 is not. TTY is not part of the aria label and needs to be. Angela would put TTY prior to the 711 in actual link text.
-   **_Resolved?_**

### Account Security
-   If navigating by heading, it's easy to skip all main fields
-   Headings can be changed to improve this page

### Connected Apps
-   Screen reader user is not aware of most content
-   Headings can be changed to improve this page


## Resolved Issues

_Document resolved issues so we can learn from them_

-   When we have character maximums, the ideal, no-magic solution is to include text next to the label without a modal alert (25 characters maximum)
-   Avoid conditional reveal when possible
