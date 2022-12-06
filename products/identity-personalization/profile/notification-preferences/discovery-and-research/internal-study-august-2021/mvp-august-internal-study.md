# Profile Notification Settings Internal Research Study Findings 

**Digital Services Veterans Affairs (DSVA), VSA, Authenticated Experience**<br>

Liz Lantz, August 24, 2021

View the [project brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/README.md).

## Overview

We've made some significant changes to our design since our [usability test in June](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/notifications-research-findings.md), but won't have the opportunity for additional usability testing before launch.  Our changes include an [experimental design pattern](https://design.va.gov/experimental-design/input-message), an alert at the top of the page to drive engagement, and using radio buttons instead of checkboxes.

To get ensure there aren't any blatant usability issues with these changes, we ran 5 moderated sessions on Zoom with internal colleagues who are also Veterans.  We asked each participant to interact with a [UX Pin prototype](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/141256292/simulate/sitemap?mode=i). After the first participant, we added a scenario (you've logged into VA.gov to update your address) to gauge whether or not a modal would be a good component to drive traffic to the notification settings page once we launch.

## Findings

1. All participants were able to easily understand where they needed to update their setting. No one expressed any sentiment suggesting they were overwhelmed by the warning alerts or that they were being yelled at.

   - One participant hesitated to make any selections because the notifications weren't relevant to them.

2. Auto-saving was intuitive for all but one participant.  They wanted to click a button to feel confident that their changes were saved. 

   - This participant was 45-55, and the only participant who does not work directly on a product team.
   - They immediately looked for a save button after checking the radio inputs.  

   - When prompted, they stated that they weren't confident their changes had been saved and would feel more confident if there had been a save button to press.
   - Another participant admitted they weren't confused by the lack of a submit button due to their profession, and wondered aloud whether or not older Veterans would be confused by the lack of the submit button.

3. The "Manage your health email notifications on MHV" link is easily missed. 4 of 5 participants didn't see this.

4. People still expect to have email and text messages available as options for each notification.  We saw it in our first usability study, so this simply validates that it is a common expectation.

   - 3 of 5 participants asked questions about why both text and email notifications were not available for each notification item. They expected both would be an option since both pieces of contact information were on file.
   - They were easily able to overcome the lack of options and lack of an answer to their question.

   - One wanted to see information about what was and wasn't available for each notification. For example, the label for Appointment reminders would be `notify by text (email not available)`.

5. There was a tendency to dismiss modal content.

   - 2 participants wanted to dismiss the modal without reading it; moderator had to prompt them to read it.
   - Another participant stated they normally don't read modals but "this looks important" so they went ahead and read the modal. 

   - One participant wanted a "remind me later" option in the modal because they didn't want to be interrupted while completing their task.

6. There was a low engagement with the "Select your notification options" link in the alert at the top of the page.

   - 2 clicked the link in the alert to navigate down the page.
   - The 3 remaining participants scrolled down right away, and only used the link after being prompted.

   

   

## Recommendations

1. We should do more research on our design with a broader, non-employee participant pool to validate what we saw here and see if there are additional findings. With regard to these specific findings, we should:
   - Confirm that loading a page with multiple warning alerts doesn't overwhelm people
   - Evaluate if the lack of a submit button causes usability problems for Veterans who aren't technology super-users, especially older Veterans. The single participant who wasn't part of a product team had the most questions and points of hesitation.

2. Update the "Manage your health email notifications on MHV" link to use the [active text link](https://design.va.gov/design/typography#links) style. It's an easy approach to make it more visible. We can also check the navigation path in analytics to see if people are finding it.
3. Use an in page alert instead of a modal to drive traffic to the notification settings page.
4. Add a click event to the "Select your notification options" link in the alert to measure engagement when we launch.  This isn't critical to the UX, but it would be interesting to better understand the level of engagement with links in alerts. It's a low level of effort to implement.

### Pages and applications used

[UX Pin prototype](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/141256292/simulate/sitemap?mode=i)

[Notes/synthesis doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/notifications-mvp-internal-study.xlsx)



