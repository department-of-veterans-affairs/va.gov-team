# Direct deposit for comp & pen: Blocking updates if someone has a fiduciary/incompetent/deceased flag

**Last updated January 7, 2020**

Currently, we do not allow people who have a fiduciary/are incompetent/are marked as deceased to access and update the direct deposit section of the VA.gov profile. We get these flags from the endpoint, and show the following in the profile if someone has one of those flags:

![Direct deposit with a fiduciary flag](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/design/Direct%20deposit%20fiduciary%20flag%20error.png)

For more on the original implementation of this blocking, please read the [documentation from 2.24.20 in the sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/2020-02-21%20Direct%20Deposit%20Fiduciary%20Issue.md).
