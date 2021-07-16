# Toggling App Available

- [Toggling App Available](#toggling-app-available)
  - [Code Change](#code-change)
  - [Feature Flip](#feature-flip)
    - [Feature flip URLs](#feature-flip-urls)

## Code Change

Context: <https://github.com/department-of-veterans-affairs/va.gov-team/issues/26346>

TL;DR; There is a loading issue with the Feature Flip(FF) Endpoint not loading that causes the page to never load. For the Pilot we have chosen to ignore the feature flip.

We have to undo the changes in [this PR](https://github.com/department-of-veterans-affairs/vets-website/pull/17650) in addition to disabling the FF.  

## Feature Flip

The front end of the application is behind a feature flip;

To disable the application, set the toggle to `disabled`. This will hide the check-in app on va.gov.

### Feature flip URLs

- [production](https://api.va.gov/flipper/features/check_in_experience_enabled)
- [staging](https://staging-api.va.gov/flipper/features/check_in_experience_enabled)
- [dev](https://dev-api.va.gov/flipper/features/check_in_experience_enabled)
- [Localhost](http://localhost:3000/flipper/features/check_in_experience_enabled)
