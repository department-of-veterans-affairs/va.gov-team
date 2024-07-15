## Overview
This documentation provides guidelines on how to maintain and update the hardcoded lists of QA and Engineer reviewers in the approval workflow script. These lists are crucial for the script to correctly identify approvals from the appropriate team members.

## Workflow Script
Below is the workflow script link that checks for PR approvals: 
https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/.github/workflows/pr-checks-for-qa-approvals.yml
## Steps to Maintain Reviewer Lists

## 1. Identify Current Reviewers:
- Determine the current members of the QA teams who are authorized to approve PRs with the following link: https://github.com/orgs/department-of-veterans-affairs/teams/flagship-mobile-reviewers

- Determine the current members of the Engineering teams who are authorized to approve PRs with the following link: https://github.com/orgs/department-of-veterans-affairs/teams/flagship-mobile-qa

- Obtain their usernames that are used in the version control system (Github).


## 2. Update Engineer Reviewers:
- Locate the engineer approval check in the script:
if [[ $(jq '[.[] | select(. | IN("timwright12", "alexandec", "theodur", "dumathane", "cadibemma", "Sparowhawk"))] | length' <<< "$approvals") -gt 0 ]]

- Update the list of usernames within the 'IN' clause to reflect the current engineers. Ensure the usernames are enclosed in double quotes and separated by commas:
if [[ $(jq '[.[] | select(.user | IN("new_eng1", "new_eng2", "new_eng3"))] | length' <<< "$approvals") -gt 0 ]]


## 3. Update QA Reviewers:
- Locate the QA approval check in the script:
if [[ $(jq '[.[] | select(. | IN("timwright12", "rbontrager", "DJUltraTom", "TKDickson"))] | length' <<< "$approvals") -gt 0 ]]

- Update the list of usernames within the 'IN' clause to reflect the current QA members. Ensure the usernames are enclosed in double quotes and separated by commas:
if [[ $(jq '[.[] | select(.user | IN("new_qa1", "new_qa2", "new_qa3"))] | length' <<< "$approvals") -gt 0 ]]


## 4. Test the Script:
- After making updates, test the script with a push to ensure it behaves as expected.
- Confirm that the script correctly identifies when there is sufficient engineer and QA approval.

## 5. Document Changes:
- Keep a change log documenting when and who updated the reviewer lists: Tim Wright is the maintainer of QA, and Engineer reviewer lists
- Include the reason for the update (e.g., team member changes, role updates).

## Conclusion
Regularly updating and maintaining the reviewer lists is essential for ensuring the integrity of the approval workflow. Following this documentation will help streamline the process and minimize the risk of errors.
