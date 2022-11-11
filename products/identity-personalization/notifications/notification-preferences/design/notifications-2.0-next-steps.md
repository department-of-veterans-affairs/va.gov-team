# Profile Notification Preferences: Next steps
**Date:** 11/11/2022

Liz Lantz (liz.lantz@adhocteam.us)

## Background
We expect to support additional channels and notifications within our Notification preferences section. We need to start thinking about whether we need to change our edit model to accommodate this. Specifically, we need to know:

1. Do we have enough information now to make a yes or no determination on if we want to change the edit model as we scale to add channels and notifications?

2. If we do not have enough information to decide whether we should change the edit model or not, what do we need in order to make this determination (eg. research, more info on how the feature is expected to scale near term, etc)?

## Summary
At this point, we don’t have enough information now to make a yes no determination if we need to change the edit model. We know we need to make some design updates related to the input type (go from radio buttons to checkboxes) and better separation of notification items. 

In order to make this determination, we need to get our existing pattern in front of users, with all the notifications we’re aware of today. The upcoming notifications (addition of the [1095-B](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/notification-preferences/1095B-preference) and [MHV](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/mhv-notification-preferences-migration/README.md) preferences) will double the amount we have today, and that should be sufficient enough to help us evaluate how the page might scale over the next ~2 years.

## Editing patterns we’ve explored
1. [Our first prototype](https://preview.uxpin.com/5ecec4de6ec34eddc9f095677a881be3646124ce#/pages/139049739/simulate/sitemap?mode=i) followed the profile pattern at that time, and had a read/edit model.  In our prototype, we included email and text notification options across 4 notification groups.

	There were some problems observed during usability testing:
	
	- The right side placement of the edit button made some people unsure whether they were about to edit preferences for that particular notification, or for the whole group.
	- It wasn’t easy for people to know whether or not their notifications were turned on before clicking on the edit button. ([Supporting research finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/usability-june-2021/notifications-research-findings.md#overall-our-design-provides-a-good-solution-for-veterans-to-manage-notifications-but-status-messages-and-available-notification-channels-were-not-clear-to-all-participants))
	- It wasn’t clear to people what notification channel options were available. ([Supporting research finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/usability-june-2021/notifications-research-findings.md#overall-our-design-provides-a-good-solution-for-veterans-to-manage-notifications-but-status-messages-and-available-notification-channels-were-not-clear-to-all-participants))

2. To mitigate the above problems, we decided to use a different pattern where form fields were exposed.  This helped to make it more clear what options were available, as well as the current setting for each notification.

	We also implemented auto-save, since the list of notifications could be lengthy, and users may only want to edit something in one group.  It felt simpler and more intuitive if the user doesn’t have to scroll around looking for a button.

	The current auto-save pattern is mostly working well for people. We observed in our [internal research study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/internal-study-august-2021/mvp-august-internal-study.md), UAT and our [profile editing research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md) that people were intuitively able to use this UI for the most part. The lack of a save button is a usability problem for a small group of people. 
		
	- In both our internal usability study ([finding 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/internal-study-august-2021/mvp-august-internal-study.md)), and recent profile editing study ([additional findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#the-lack-of-a-save-or-submit-button-on-notification-settings-presented-a-minor-problem-for-2-participants)), people mentioned wanting to press a button to be confident their updates would be saved.
		
	- Another person in the profile editing study pointed out that the auto-save feature does not allow a person to clear or cancel their update. (Read [additional findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#the-lack-of-a-save-or-submit-button-on-notification-settings-presented-a-minor-problem-for-2-participants)) 

3. Now that we have some new notification channels on the horizon, [we’ve mocked-up what the next iteration could look like](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/v/rYWLpD/a/eKAeA8W). It mostly uses a combination of what we tested in round 1, and what we have on production today.   This mock-up:
	- Illustrates what the page would look like if we have text and email notifications options, and we’re missing email address from the users profile.
	- Includes all possible notification options we have today
	- Uses checkboxes instead of radio buttons since we no longer have a hard requirement to capture an explicit opt out ([documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/default-send/july-2022-notes.md#findings)). This reduces the vertical space, repetition on the page, and cognitive load required to process options.
	- Uses the content and pattern we decided on in June 2021 when someone doesn’t have contact info on file for a notification channel.
	- Has more distinct visual separation between groups and sections than we have as of November 2022:
	
	  ![Screen Shot 2022-11-11 at 5 35 44 PM](https://user-images.githubusercontent.com/55992116/201440113-1c04b067-f2cd-405d-bd18-785fa64396ea.png)


## What we need to learn
1. As the list of notification groups and options grows, users have to scroll through a lengthy page to get a sense of the notifications that are available. **In our current design, how does that work for users?**
	- We could leverage the [On this Page component](https://design.va.gov/components/on-this-page) to provide an overview, possibly at a particular threshold (2+ notification groups available)
2. If we go to a read/edit pattern, what information do we need to surface at the read level to make the current settings and options clear to people?

## Next steps
To answer the questions above, we need to get feedback on a prototype that includes all the possible notifications.  We should conduct a research study with Veterans 55+, who have cognitive impairments, as they have the greatest potential to be overwhelmed by a long list, and could be unsure how to proceed with a form that doesn’t have a save button.
