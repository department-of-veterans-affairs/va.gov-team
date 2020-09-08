## Profile 2.0 UAT Findings

[Profile 2.0 UAT Findings Spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Research/UAT/Profile%202.0%20UAT%20(1).xlsx)

## Issues

1.    [Updating phone number had a weird delay and took 3 attempts](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9765)
2.    [No military branch showing up in military information section](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13222)
3.    [Need to create an Error alert when we can’t verify a person is a veteran/info is not available](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13224)
4.    [“Invalid date” on Military Information service dates](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13130)
5.    Connected apps API issue: the frontend is expecting an empty array if the user has no apps, but for some reason there is a “404” display to users who have never connected an app.There seems to be an ID issue . User is shown “there was an issue connecting to connected apps”. This shouldn’t be shown if they have never been connected to apps (Mark Greenberg to create ticket)
6.    Users unable to update phone number to fix Direct Deposit issues if they have an international phone number ((VA Profile doesn't accept international phone numbers, and that's not something they are addressing for at least 3 months))
