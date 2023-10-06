# Initiative outline: Remove My VA from unauthenticated header

**Last updated: October 6, 2023 - published**

### Communications

- **GitHub Label**: authenticated-exp; my-va-dashboard
- **Slack channel**: accountexp-authexp
- **Development Epic:** [#67054](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67054)

### Roles

[Please see the My VA product outline for the current My VA team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#roles).

### Table of Contents

- [Overview](#overview)
- [Measuring Success](#measuring-success)
- [Key Dates](#key-dates)
- [Screenshots](#screenshots)

## Overview
The original purpose of having "My VA" in the unauth header on VA.gov was to let users know that there is personalized content once they log in. But now that we reroute from the homepage to My VA at login, we don't need it, so we're going to remove "My VA" from the unauth header.

We'll first hide the link behind a feature flag and monitor analytics for a few weeks to make sure the change has not had a negative impact on traffic to My VA and then will likely remove it entirely, and clean up the flag code.

## Measuring Success

### Objective: Streamline the unauthenticated experience on VA.gov by de-cluttering the header

**Key Result: We do not see an overall decline in traffic to My VA**

|KPI|Baseline: <br />1 week pre-launch <br />(mm/dd/yy - mm/dd/yy)| Week 1  post-launch<br />(mm/dd/yy - mm/dd/yy)| Week 2 post-launch <br />(mm/dd/yy - mm/dd/yy)| Week 3 post-launch <br />(mm/dd/yy - mm/dd/yy)| Week 4 post-launch <br />(mm/dd/yy - mm/dd/yy)|
|----------|-------------|---------------|-------------------|----------|-------------|
|My VA pageviews|    |     |      |      |      |


## Key Dates
- October 2023: Development
   
## Screenshots

### Before
![Screenshot 2023-10-06 at 11 16 29 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/41ddb029-a011-4b49-85b6-5a275c61c62d)



### After

