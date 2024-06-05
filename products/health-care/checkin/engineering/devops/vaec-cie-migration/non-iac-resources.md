# Non-IaC Resources

These are resources created while working on the `vaec-cie` migration through the console that are not managed in IaC or automatically cleaned up through some other process.

## CloudFormation

- `project-cie-iam-manager`: IAM Role and Policy for creating other IAM Roles and Policies.

## DynamoDB

- `project-cie-tfstate`: Table used for Terraform state locking

## S3

- `project-cie-tfstate`: Bucket used for Terraform state storage

## Secrets Manager

- `global/datadog/tevi/api_key`: Datadog API key for the Tevi Datadog instance.
- `global/github_bot_token`: GitHub personal access token for the [Check-In Experience GitHub Bot](https://github.com/VAeCheckinAPIGHA-bot).
