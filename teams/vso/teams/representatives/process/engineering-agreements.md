# Engineering Agreements

## Document Purpose

This document serves as an agreement among ARF engineers on our collaborative working practices. It will be updated regularly based on feedback from engineering or team retrospectives and on an ad-hoc basis when necessary.

## Pull Requests

### General Guidelines

We adhere to the Platform guidelines: [DEPO Platform Documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/code-and-build).

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

#### Ownership

- PRs that you initiate are your responsibility until completion.
- Only modify others' PRs if they explicitly request it or if they've passed ownership to you (e.g., during PTO). This should be an exception, not the norm.
- Creating PRs against others' work for significant changes is okay.

### Commits

- Example format: `issue-number-arf: <commit description>`.
- Refer to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for guidance.
- Write clear and meaningful commit messages whenever possible.
- Remember that concise and efficient work adds more value than perfect wording in commit messages.
- Ensure each push passes Continuous Integration (CI) tests.

### Zenhub

- Use an ARF Engineering ZenHub Template to create every issue.
- None of the sections in the templates are explicitly labeled as 'required' or 'optional.' Therefore, it is up to the person creating the issue to decide which sections to include.
- If important sections are consistently omitted, we can consider adding 'required' labels in the next iteration of the templates.
- To update a template, edit the corresponding file:
  - [Discovery Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/arf-eng-discovery-issue.md)
  - [Feature Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/arf-eng-feature-issue.md)
  - [Bug Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/arf-eng-bug-issue.md)
  - [Epic Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/arf-eng-epic.md)
- Link PRs to the corresponding Zenhub issues if they exist.
