# Non-IaC Resources

These are resources created while working on the `vaec-cie` migration through the console that are not managed in IaC or automatically cleaned up through some other process.

## CloudFormation

- `project-checkin-devops`: IAM Role and Policies assumable by the `checkin-devops` repository.

## DynamoDB

- `project-cie-tfstate`: Table used for Terraform state locking

## S3

- `project-cie-tfstate`: Bucket used for Terraform state storage

## Secrets Manager

- `global/github_bot_token`: GitHub personal access token for the [Check-In Experience GitHub Bot](https://github.com/VAeCheckinAPIGHA-bot).
