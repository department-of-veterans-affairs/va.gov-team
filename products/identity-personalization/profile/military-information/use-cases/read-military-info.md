# Military information: user wants to access their military information
**Last updated: August 18, 2022**

For LOA3 users who sign in, go to the profile, and click into the military information section, they can view their service history if they have a Department of Defense (DoD) ID.

If they don't have a DoD ID, they'll see an alert instead of a service history.

This page isn’t editable.

## UX
### User has DoD ID
* A user lands on the military information page; they can see data points for all periods of service the VA knows about from their military record.
	* Branch of service
	* The month, day, and year they started with that branch
	* The month, day, and year they completed service with that branch.  
		* There are some instances where the end date will be blank.
* The page has an [additional info component](https://design.va.gov/components/additional-info) with information in case the military service information doesn’t look right.
*  [Desktop mockup](https://www.sketch.com/s/fc96664a-1c62-40ed-9fcd-90218c54e775/a/g0YO03a) 
*  [Mobile mockup](https://www.sketch.com/s/fc96664a-1c62-40ed-9fcd-90218c54e775/a/DPDA8Wk) 

### User does not have DoD ID
* If DEERS does not return a DoD ID, the user will see an alert on the page telling them we don't have their military information
* The additional info component is not displayed
* Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the design system
*  [Desktop mockup](https://www.sketch.com/s/fc96664a-1c62-40ed-9fcd-90218c54e775/a/8yQObmR) 
*  [Mobile mockup](https://www.sketch.com/s/fc96664a-1c62-40ed-9fcd-90218c54e775/a/zxvZ4Le) 

## Codes
N/A

## How to reproduce
### User has DoD ID
1. Go staging.va.gov/profile/military-information
2. Log in with vets.gov.user+11 or vets.gov.user+36 ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))

### User does not have DoD ID
1. Go staging.va.gov/profile/military-information
2. Log in with vets.gov.user+10 ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))

