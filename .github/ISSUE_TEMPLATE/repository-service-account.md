name: Repository service account (TEMPLATE WIP)
description: (TEMPLATE WIP) Request an AWS service account that can be used with GitHub actions
title: "[AWS/GHA]: Repository service account for TEAM"
labels: ["infrastructure-request", "aws", "github-actions]
assignees:
  - []
body:
  - type: markdown
    attributes:
      value: |
        This request is for the creation of an AWS service account that can be used with GitHub actions in a specific repository.
  - type: input
    id: team-name
    attributes:
      label: Team Name
      description: What is your team's name?
      placeholder: ex. Infrastructure Team
    validations:
      required: false
  - type: input
    id: product-owner
    attributes:
      label: Product Owner
      description: Who is your team's product owner?
      placeholder: ex. Saima Simran
    validations:
      required: false
  - type: input
    id: product-manager
    attributes:
      label: Product Manager
      description: Who is your team's product manager?
      placeholder: ex. Hannah Ilja
    validations:
      required: false
  - type: input
    id: repo-link
    attributes:
      label: Link to GitHub repo
      description: Where is your GitHub application code hosted?
      placeholder: ex. https://github.com/department-of-veterans-affairs/<my-team's-code>
    validations:
      required: false
- type: textarea
  attributes:
    label: Anything else?
    description: |
      Links? References? Anything that will give us more context about your request! 

      Tip: You can attach images or log files by clicking this area to highlight it and then dragging files in.
  validations:
    required: false
