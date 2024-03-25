# Engineering Agreements

## Document Purpose

This document serves as an agreement among ARF engineers on our collaborative working practices. It will be updated regularly based on feedback from engineering or team retrospectives and on an ad-hoc basis when necessary.

We adhere to the Platform guidelines, [VA Platform Developer Docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/), as the core of our agreement, and as such will cite them frequently in our PRs. If there are no Platform guidelines on an important area or we want to extend an area we will add that here.

## Code Guidelines

### Acronyms and Initialisms in Code
Acronyms and initialisms should always be all uppercased or all lowercased and always align with javascript case rules. As such to align with javascript case standards, they should be lowercased when at the beginning of camelCase and in all cases of kabob-case or snake_case, and they should be uppercased in all other situations:

- camelCase
  - POA Requests --> poaRequests (all lowercase at the beginning of camelcase)
  - Mock POA Requests --> mockPOARequests (all uppercase for all other situations)
- PascalCase
  - POA Requests Widget --> POARequestsWidget
  - Example POA Requests --> ExamplePOARequests
- kabob-case
  - POA styling --> poa-styling (all lowercase for kabob-case)

This aligns with the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript?tab=readme-ov-file#naming--Acronyms-and-Initialisms): "23.9 Acronyms and initialisms should always be all uppercased, or all lowercased."

Platform documentation only discusses acronyms in the [context of page content](https://design.va.gov/content-style-guide/abbreviations-and-acronyms): "For acronyms, use the spelled-out term on first mention in body copy with the acronym in parentheses; then the acronym alone on subsequent mentions..."

After discussing with Platform in the vfs-platform-support channel [they said the following](https://dsva.slack.com/archives/CBU0KDSB1/p1709565273517439?thread_ts=1709317801.992969&cid=CBU0KDSB1): "I recommend treating the acronym like an acronym". Which from the context of the tagged thread references our above recommendation.

## Pull Requests

### General Guidelines

We adhere to the Platform guidelines on PR Best Practices: [VA Platform Developer Docs PR Best Practices](https://depo-platform-documentation.scrollhelp.site/developer-docs/pull-request-best-practices).

### Draft PRs

- Open draft PRs as early as possible after making a sensible commit.
- Draft PRs are not subject to nitpicking.
- Discussing development direction while a PR is in draft state is acceptable.
- Aim to keep code-related discussions within PRs.

### Open, Ready for Review PRs

#### Required Information

- Link the related Zenhub issue in the PR.
- Use the branch format: `issue-number-arf-feature`.
- Complete relevant sections of the default PR template.
- Labels: As part of the OCTO Code Yellow plan for the Benefits team, use the `benefits-accredited-rep-facing` label for all PRs ([source](https://dsva.slack.com/archives/C06ABHUNBRS/p1705959799005869?thread_ts=1705940696.805789&cid=C06ABHUNBRS)).

#### Ownership

- PRs that you initiate are your responsibility until completion.
- Only modify others' PRs if they explicitly request it or if they've passed ownership to you (e.g., during PTO). Modifying others' PRs should be an exception, not the norm.
- Creating PRs against others' work for significant changes is okay.

### Commits

- Example format: `issue-number-arf: <commit description>`.
- Refer to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for guidance.
- Write clear and meaningful commit messages whenever possible.
- Remember that concise and efficient work adds more value than perfect wording in commit messages.
- Ensure each push passes Continuous Integration (CI) tests.

## Zenhub

- Use an ARF Engineering ZenHub Template to create every issue.
- None of the sections in the templates are explicitly labeled as 'required' or 'optional.' Therefore, it is up to the person creating the issue to decide which sections to include.
- If important sections are consistently omitted, we can consider adding 'required' labels in the next iteration of the templates.
- To update a template, edit the corresponding file:
  - [Discovery Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/arf-eng-discovery-issue.md)
  - [Feature Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/arf-eng-feature-issue.md)
  - [Bug Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/arf-eng-bug-issue.md)
  - [Epic Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/arf-epic.md)
- Link PRs to the corresponding Zenhub issues if they exist.
