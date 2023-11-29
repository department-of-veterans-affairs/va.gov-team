# Onsite Notifications Use Cases
**Last updated:** November 17, 2023 (note added)

**NOTE**: On October 3, 2023, the Notifications section on My VA (onsite notifications MVP) was removed from production. The feature was hidden behind a feature flag (and will eventually be removed from code) after the team and stakeholders determined this feature was not the right solution for elevating personalized updates at this time.

For all use cases, the user must be LOA3 (identity verified). If the user is not LOA3, they will see a prompt to verify their identity and only be able to apply for benefits [(see LOA1 documentation)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/use-cases/onsite-notifications-loa1-user.md).

## Common Use Cases

### User logs in with LOA1 account

- [User logs in with LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/use-cases/onsite-notifications-loa1-user.md)

### User logs in with LOA3 account

- [User has a notification or multiple notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/use-cases/user-has-notifications.md)
- [User does not have notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/use-cases/user-does-not-have-notifications.md)


## Edge Cases

### Flags

- There are no flags for this feature.

### System

- If there is an error on the backend and we can't show notifications, then we do not show this section at all on My VA.
- [A user tries to dismiss a notification and the command fails](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/use-cases/cant-dismiss-notification.md)

## Flow diagrams
- [Notification flow with screenshots](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/p/426AF99C-8159-4972-8BC3-FD5CF5770F3D/canvas)
