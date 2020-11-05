# Github Project Automation

## Purpose

Automatically add new issues to projects based on their labels.

## Setup

A Github Action has been configured which runs when new issues are created, and adds the issue to a defined project depending on the configured label.

To create a new automation edit [assign-to-one-project.yml](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/workflows/assign-to-one-project.yml) file and add an additional `step` such as:
```yaml
    - name: Assign issues with `example-label` label
      uses: srggrs/assign-one-project-github-action@1.2.0
      if: |
        github.event.action == 'opened' && 
        contains(github.event.issue.labels.*.name, 'example-label')
      with:
        project: 'example-project-url'
        column_name: 'Example Column Name'
```

`example-label` = the label you wish to trigger on
`example-project-url` = the full URL to the project the issue should be added to, such as `https://github.com/department-of-veterans-affairs/va.gov-team/projects/20`
`Example Column Name` = the name of the column in the project where the issue should be added

## Notes

- The action only runs on new issue creation, not when labels are applied to existing issues.
- The action can take a few minutes to run. The status is available [here](https://github.com/department-of-veterans-affairs/va.gov-team/actions?query=workflow%3A%22Assign+to+One+Project%22).
- The indentation of `.yml` files is important, so make sure it matches exactly.
- The column name is required, so if the column name is changed in the project then the action config will have to be updated to match.
