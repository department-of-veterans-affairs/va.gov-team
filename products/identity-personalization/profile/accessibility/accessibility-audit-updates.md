# Accessibility audit & updates

**Last updated: August 15, 2022**

_We should consolidate all accessibility feedback we've gotten, review it, and determine next steps. Tasks run from full-on projects (eg. moving edit from in-line to another page) to smaller tasks we can knock out as time allows._

## Questions / Concerns Raised

See [Profile screen reader walk-through](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/product/screen-reader-walkthrough.md) - **May 3, 2022**

### Sidebar nav position 
- Currently below the H1 and creating confusion for screen reader users
-   **Next steps:** _Resolved?_

### Hubless spoke
- [Mural](https://app.mural.co/t/vsa8243/m/vsa8243/1653404244021/d2fdb4d36539e09705429286accaf119db765664?invited=true&sender=u28f508d646c449cc1afe4873) 
- Concerns presented by accessibility folks regarding current challenges due to the lack of a true landing page
- **Next steps:** TBD

### Field "headings" (i.e. Mailing address and Home address)
-   Some changes are needed for the field names/headings
-   Concern also raised during during BAI pilot session with Angela
-   **Recommendations:**
	-   It would be better if "Mailing address" were H3 instead of a list item, with paragraph text then used for the hint text
	-   Same applies to Phone numbers and other similar fields in Profile
-   **Next steps:** TBD

### Address validation 
-   Address validation is a considerably difficult flow for screen reader users
-   Concern raised during BAI pilot session with Angela
-   **Next steps:** TBD

### Name tag
-   Currently, nametag is hiding above the first heading and there's a good chance a screen reader user wouldn't catch this (unless a beginner)
-   **Recommendations:**
	-   Angela considers this like "basic information," which could be displayed right below the H1 under an H2 heading that says “basic information” 
	-   Or for less priority, it could be at the bottom of the page
	-   In order to make it visible to the screen reader, it would need to be under a new H2 heading under the H1
	-   If we put it above H1, we might not need to display it on each page, as it could get redundant. Instead, the nametag could be included and read out on Personal information only
-   **Next steps:** TBD

### TTY (Direct Deposit)
-   The help phone number is ok for the screen reader, but 711 is not. TTY is not part of the aria label and needs to be. Angela would put TTY prior to the 711 in actual link text
-   **Next steps:** _Resolved?_

### Account Security
-   If navigating by heading, it's easy to skip all main fields
-   Headings can be changed to improve this page
-   **Recommendations:**
	-   Angela: "You can put the email address change at the top under H1 under an H2 and then another that says completed tasks (H2) - or put the email part somewhere else and then get rid of the rest"
-   **Next steps:** TBD

### Connected Apps
-   Screen reader user is not aware of most content
-   Headings can be changed to improve this page
-   **Recommendations:**
	-   Angela suggested having an H2 that says Connected Apps with the rest of the headings (app names) as H3, so a screen reader could easily skip down to Veteran programs and services
-   **Next steps:** TBD

### Editing in Profile

#### In-line error message:
-   Focuses on wrong thing with error - not keeping focus on update button. (Note: this might need more looking into, I'm not sure what the specific focus needs are)
-   Also does not tell her about all the errors shown, just one.
-   **Recommendations:**
	-   Angela suggested that the best thing to do is to have a list of errors together
-   **Next steps:** TBD

#### "Are you sure?" modal
- Wording might need to be revisited
- **Recommendations:**
	- Maybe instead of Continue and Cancel, the modal could be Are you Sure? with Yes/No buttons
- On the other hand, as is might be better for those with cognitive disabilities
- **Next steps:** TBD

### One-per-page editing
-   Consider moving from in-line editing to one-per-page editing
-   Can one-per-page editing help with any of the above concerns?
-   Some research has been done by other teams
-   **Next steps:** TBD


## Resolved Issues

_Document resolved issues so we can learn from them_

-   When we have character maximums, the ideal, no-magic solution is to include text next to the label without a modal alert (25 characters maximum)
-   Avoid conditional reveal when possible
