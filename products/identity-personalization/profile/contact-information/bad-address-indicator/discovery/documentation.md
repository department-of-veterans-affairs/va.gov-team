# Bad Address Indicator Discovery

DRAFT

## Activities

-   Review the [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/bad-address-indicator).

-   Meeting with Samara and Marci for an intro to the work.

-   Researched answers to questions to prepare for the design phase of adding a bad address indicator. Explore possibilities for in-line alerts as well as one-per-page editing

-   Discovery Review with Samara and Marci

## Initial Questions:

-   Can we proactively email all people who have the bad address indicator to log into VA.gov and update their address? How would this work?

	-   Reached out to VA Notify team. Team members have all been added to the GitHub self service for template if needed.
	-   Marci and Tom have taken over product and BE questions about VA Notify email capabilities.

-   What's currently going on with on-site notifications / elsewhere on the site or in Profile? [See Mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1644526520883/08368c9a6d81a9b02b0caa3f736586539b3d1f20?sender=u28f508d646c449cc1afe4873)

-   The Authenticated Experience MyVA team is currently working on on-site notifications and recently did research for similar alerts. Utilize the same pattern. [See Mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1644526520883/08368c9a6d81a9b02b0caa3f736586539b3d1f20?sender=u28f508d646c449cc1afe4873) 

-   What is the guidance for current alert use on Profile?

	- Discussions with Liz on Guidance for Alerts within Profile:

		-   In-line alerts for different pages should be above Heading 1

		-   In-line alerts for the current page should be directly below Heading 1

		-   If after editing, in-line alerts in field should be directly above buttons

		-   If before editing, in-line alerts should be directly above the field heading

	- Page alert - Whole page alert already exists that is used for Direct Deposit for example - if something is not working and access to the page is not allowed.

-   What patterns exist in the design system that might help us work towards a solution?

	-   <https://design.va.gov/components/alertboxes>

	-   <https://design.va.gov/storybook/?path=/docs/components-va-alert--default>

-   Where can we show people they have a bad address? (see below / [See Mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1644526520883/08368c9a6d81a9b02b0caa3f736586539b3d1f20?sender=u28f508d646c449cc1afe4873))

-   When can we show people they have a bad address? (see below / [See Mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1644526520883/08368c9a6d81a9b02b0caa3f736586539b3d1f20?sender=u28f508d646c449cc1afe4873))

-   What form can this take? (see below / [See Mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1644526520883/08368c9a6d81a9b02b0caa3f736586539b3d1f20?sender=u28f508d646c449cc1afe4873))


## Thoroughly assessing root cause:

Finding: Important to consider that not only do Veterans not have an indicator that their address is bad and an update is needed, they also need to understand the importance of updating this address and the negative consequences of not doing so - else risk that Veterans continue ignoring the prompt. If urgent enough, another option here is to require this change before anything else can be done on Profile.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/discovery/images/5-whys.png)

## Assessing Additional Risks in User Mistakes - Further Predicting User Mistakes

Predicting all possible user mistakes to show pathways in which users may still not update their addresses, resulting in a few different ways to address this:

-   Using a solution that blocks doing anything else on Profile until updated.

-   Content clearly conveying the importance of updating this

-   Having alerts remain on page - or utilizing an email reminder

-   Including hint text on page to convey the difference between Mailing address and Home address

-   New model reminders for Address change can help if a user accidentally updates home address instead of mailing address

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/discovery/images/unhappy-path.png)

## Possible Solutions:

**Primary Alert Requirements**
-   Once logged in, Inform user that there is an update to be made
-   Convey that this update is important (and why) so it not ignored

**Secondary Alert Requirements**
-   Can this be combined with email after a certain period of time?

**+ Related**
-   Related: Hint text to clearly convey what mailing address is



### Option 1:

-   **On overall Profile:** Forced edit through entire page alert (one-per-page). Page that appears upon entering Profile and does not disappear until mailing address is updated. Using one-per-page editing - good opportunity to try out.

*Photos*

### Option 2: (Preferred)

-   **On pages other than in Profile:** In-line, profile-wide alert + 1 of the options for Contact Information page

-   **On Contact Page:** Either in-line alerts within page or only alert on page that prevents anything else from being done until edited (like notification settings)

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/discovery/images/initial-design-direction.png)

### Additional:
-   Outside of profile, alerts could be located in MyVA to alert Veterans that changes are needed on Profile:

*Photo / Photo*

## Meeting with Tom to understand restraints on alert timing
Met with Tom to discuss any limitations to when/how to display alerts. He established that there is nothing that would prevent alerts from being be displayed immediately as Veteran enters Profile. Once updated, alerts can also be removed immediately.

## Feedback from Samara and Marci

-   Email blast will act as the primary notifier - with alerts directly on the page as a secondary method to prompt updates. 

-   We will go the route that includes less forceful, in-line alerts. We want users to update this, but we do not want to block any part of Profile in the meantime.

-   The inclusion of something in MyVA (healthcare section or near "Go to profile") could be possible for future work but will not be addressed in this work.

## Other Considerations:

-   It is possible that in some cases, an address flagged as wrong could be correct. In final design, we need to incorporate the ability to approve address and override flag - like the solution already built in to confirm an address that has been flagged as incorrect.
