# Release Notes

----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/ESLint-new-rule-release-notes.1847918613.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

## ESLint deployed rules

June 12, 2020

- The following [SonarJS rules](sonarjs.md) will be enforced from now on:
  - cognitive-complexity
  - no-collapsible-if
  - prefer-immediate-return
  - va/use-resolved-path
  - react/prefer-stateless-function

## ESLint release rules

Sprint 26 & 27 - May 14, 2020

- The following [SonarJS rules](sonarjs.md) will be trialed:
  - cognitive-complexity
  - no-collapsible-if
  - prefer-immediate-return
- These rules will be under review for 4 weeks (Sprint 26 & 27) and enforced starting Sprint 28
- Feedback from VFS teams will be collected during this period. Please use the tag `@platform-release-tools` or message any of the front-end tools team members in Slack and provide us with your feedback.
- Other ESLint rules that will be added:
  - va/use-resolved-path
  - react/prefer-stateless-function

## SonarJS deployed rules

April 30, 2020

- The following [SonarJS rules](sonarjs.md) will be enforced from now on:
  - no-extra-arguments
  - no-identical-expressions
  - max-switch-cases
  - no-duplicated-branches
  - no-inverted-boolean-check
  - no-redundant-boolean
  - no-small-switch
  - no-unused-collection

## SonarJS release rules

Sprint 23 & 24 - April 2, 2020

- The following [SonarJS rules](sonarjs.md) will be trialed:
  - no-extra-arguments
  - no-identical-expressions
  - max-switch-cases
  - no-duplicated-branches
  - no-inverted-boolean-check
  - no-redundant-boolean
  - no-small-switch
  - no-unused-collection
- These rules will be under review for 4 weeks (Sprint 23 & 24) and enforced starting Sprint 25
- Feedback from VFS teams will be collected during this period. Please use the tag `@platform-release-tools` or message any of the release tools team members in Slack and provide us with your feedback.

## SonarJS deployed rules

March 19, 2020

- The following [SonarJS rules](sonarjs.md) will be enforced from now on:
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

## SonarJS release rules

Sprint 21 - March 4, 2020

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
- Feedback from VFS teams will be collected during this period. Please use the tag `@platform-release-tools` or message any of the release tools team members in Slack and provide us with your feedback.

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
