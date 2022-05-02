# Personal information: Staging test-users

Manage test-users[^1] here for testing Profile - Personal information on Staging.  Each section below manages a different test-scenario or group of scenarios.

## Blank state

Constraint(s):

- Should ALWAYS stay blank-state
- Do NOT Add Preferred name or Gender identity &mdash; use ONLY for checking blank-state content/styling.

| Staging test-user(s)[^2] | Reserved for | Current incumbent | Usage tracking/notes |
| --- | --- | --- | --- |
| 297 | EVERYONE | n/a |  |

## Successful add

Constraint(s):

- Starts in Blank-state
- Can ONLY test ONCE &mdash; gets "burnt" after successful Add
- Need to engage API team to "reset" to blank-state[^3] after each round of testing [or each Platform Staging Review]

| Staging test-user(s)[^2] | Reserved for | Current incumbent | Usage tracking/notes |
| --- | --- | --- | --- |
| ??? | Design/Research | Christina Gednalske (@cgednalske) |  |
| ??? | F/E | Adam Whitlock (@adamwhitlock1) |  |
| 285-296 | QA | Tze Lei (@tlei123) | Need 1 for each device/browser QA'ed |
| ??? | Platform-Design | ??? |  |
| ??? | Platform-Content | ??? |  |
| ??? | Platform-IA | ??? |  |
| ??? | Platform-A11y | ??? |  |
| ???-??? | Platform-QA | Darius Dzien (@ddzz) | ?? |


[^1]: See [MVI Staging Users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) doc for most passwords.  There __may__ be other test-users involved that are unlisted there, in which case consult with app-team Product Manager.
[^2]: All usernames (email-addresses) start with `vets.gov+user`, except where full email-addresses are listed.
[^3]: Reset test-user by deleting Preferred-name & Gender-identity data from API back-end.
