# Release Notes

## SonarJS deployed rules

March 19, 2020

- The following [SonarJS rules](sonarjs.md) will be forced from now on:
  - no-all-duplicated-branches
  - no-element-overwrite
  - no-identical-conditions
  - no-one-iteration-loop
  - no-use-of-empty-return-value
  - no-collection-size-mischeck
  - no-redundant-jump
  - no-same-line-conditional
  - no-useless-catch
  - prefer-object-literal
  - prefer-single-boolean-return
  - prefer-while

## SonarJS release rules - Sprint 21

March 4, 2020

- The following [SonarJS rules](sonarjs.md) will be trialed:
  - no-all-duplicated-branches
  - no-element-overwrite
  - no-identical-conditions
  - no-one-iteration-loop
  - no-use-of-empty-return-value
  - no-collection-size-mischeck
  - no-redundant-jump
  - no-same-line-conditional
  - no-useless-catch
  - prefer-object-literal
  - prefer-single-boolean-return
  - prefer-while
- These rules will be under review for 2 weeks (Sprint 21) and enforced starting Sprint 22
- Feedback from VFS teams will be collected during this period. Please use the tag `@frontend-review-group` or message any of the front-end tools team members in Slack and provide us with your feedback.

## SonarJS new rules

February 24, 2020

- New rules and their intended release date
- SonarJS details can be found [here](sonarjs.md)

## ESLint Rule Changes and Testing

February 21, 2020

- Added a procedure on how new ESLint rules will be added to a test stage before they are moved to enforced.
- CircleCI process with ESLint
- Feedback is expected from VSA teams
- New rules procedure can be found [here](adding-new-rules.md)

## ESLint Enforced Rules Audit

February 3, 2020

- An audit was performed to find out exactly what rules are being used for further expansion. Audit can be found [here](eslint-initial-audit.md)
