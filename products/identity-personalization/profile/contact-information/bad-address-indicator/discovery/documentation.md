# Bad Address Indicator Discovery

## Activities

-   Review the product outline.

-   Meeting with Samara and Marci for an intro to the work.

-   Researched answers to questions to prepare for the design phase of adding a bad address indicator. Explore possibilities for in-line alerts as well as one-per-page editing

## Initial Questions:

-   Can we proactively email all people who have the bad address indicator to log into VA.gov and update their address? How would this work?

-   What's currently going on with on-site notifications / elsewhere on the site or in Profile?

-   The Authenticated Experience MyVA team is currently working on on-site notifications and recently did research for similar alerts. Utilize the same pattern. 

-   What is the guidance for current alert use on Profile?

## Discussions with Liz on Guidance for Alerts within Profile:

-   In-line alerts for different pages should be above Heading 1

-   In-line alerts for the current page should be directly below Heading 1

-   If after editing, in-line alerts in field should be directly above buttons

-   If before editing, in-line alerts should be directly above the field heading

Page alert

Whole page alert already exists that is used for Direct Deposit for example - if something is not working and access to the page is not allowed.

-   What patterns exist in the design system that might help us work towards a solution?

-   <https://design.va.gov/components/alertboxes>

-   <https://design.va.gov/storybook/?path=/docs/components-va-alert--default>

-   Where can we show people they have a bad address? (see below)

-   When can we show people they have a bad address? (see below)

-   What form can this take? (see below)

Photo - exploration of questions

## Thoroughly assessing root cause:

Photo - 5 Whys

Finding: Important to consider that not only do Veterans not have an indicator that their address is bad and an update is needed, they also need to understand the importance of updating this address and the negative consequences of not doing so - else risk that Veterans continue ignoring the prompt. If urgent enough, another option here is to require this change before anything else can be done on Profile.

## Overall user flow to consider edge cases:

Photo - user flow

## Assessing Additional Risks in User Mistakes - Further Predicting User Mistakes

Photo - Unhappy path

Predicting all possible user mistakes to show pathways in which users may still not update their addresses, resulting in a few different ways to address this:

-   Using a solution that blocks doing anything else on Profile until updated.

-   Content clearly conveying the importance of updating this

-   Having alerts remain on page - or utilizing an email reminder

-   Including hint text on page to convey the difference between Mailing address and Home address

-   New model reminders for Address change can help if a user accidentally updates home address instead of mailing address

## Possible Solutions:

**Primary Alert Requirements**

-   Once logged in, Inform user that there is an update to be made

-   Convey that this update is important (and why) so it not ignored

**Secondary Alert Requirements**

-   Can this be combined with email after a certain period of time?

**+ Related**

-   Related: Hint text to clearly convey what mailing address is



### Option 1:

**On overall Profile:** 

Forced edit through entire page alert (one-per-page). Page that appears upon entering Profile and does not disappear until mailing address is updated. Using one-per-page editing - good opportunity to try out.

Photos

### Option 2:

**On pages other than in Profile:**

In-line, profile-wide alert + 1 of the options for Contact Information page

**On Contact Page:**

Either in-line alerts within page or only alert on page that prevents anything else from being done until edited (like notification settings)

Photos

### Additional:

Outside of profile, alerts could be located in MyVA to alert Veterans that changes are needed on Profile:

Photo / Photo

## Remaining Overall Questions for Samara and Marci :

-   How critical is this? Is it urgent enough to warrant preventing Veterans from doing anything else on Profile until they have updated this address?

-   Can email be sent out after a certain amount of time? So not as many are needed?

-   Would we consider placing something in the healthcare-related section of MyVA due to this address being related to prescriptions?
