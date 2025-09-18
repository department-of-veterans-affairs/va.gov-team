# Account security: LOA3 user views and completes tasks

**Last updated: September 2025**

Once users have verfied their identity, users can add multifactor authentication to their account and find a link to their sign in service (eg. ID.me or Login.gov) to manage their sign in information.


## UX
### Link to sign in service
- The user will see a section with information on how to change their sign in information for their sign in service of choice. 
- The link will bring the user to the website where they manage their account (either Login.gov or ID.me).
- [Design mock-up](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?node-id=613-25112&t=vEzOY6Vc44fxJdc2-1)

### Account setup
- The user will see the name of the section and two tasks:
  1. Verify your identity
  2. Add multifactor authentication
- Each section will have a link if the step has not been completed, which leads the user through the steps to complete the task.
- This uses the [process list component](https://design.va.gov/components/process-list) from the VA design system. A numeral will appear if it hasn't been completed, and a checkmark will appear if it has been completed.
- [Multifactor authentication, not completed](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?node-id=613-7987&t=vEzOY6Vc44fxJdc2-1)
- [Multifactor authentication completed](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?node-id=613-25112&t=vEzOY6Vc44fxJdc2-1)


## Codes
N/A

## How to reproduce

1. See [profile staging users and test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-profile.md#account-security) for information on how to test account security.
2. Go to the personalized menu in the upper right of the navigation, and click into the profile. You'll be dropped into the Personal information section of the profile.
3. Select Account security in the sidebar menu.
