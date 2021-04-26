---
name: Kubernetes Onboarding Template
about: For onboarding a new application to the VSP Kubernetes clusters
title: ''
labels: 'operations, kubernetes, devops'
assignees: ''

---
## Description of your application
_Describe your application_
_Name_:
_Functionality_:
_Language/Stack_:
_Ports/Networking needed_:
_Other infrastructure needed e.g. Database, redis, etc_:
_Anything else we need to know?_:

## Background/Context/Resources
_Any addition information that can be provided, Slack conversations, tickets, design documents, epics, etc._

## Technical Notes
_Any addition technical notes that can be provided_

## Checklist of Items needed for onboarding (Responsible parties in parentheses)
[ ] Your application! (Your team)  
    Your application should conform to the 12 factor app methodology (https://12factor.net/)  
[ ] A Github Repository for your application (Operations or your team)   
[ ] A Dockerfile for your application (Your team, Operations can assist if needed) 
[ ] Elastic Container Registry Repository for your application (Operations, PRs are welcome: https://github.com/department-of-veterans-affairs/devops/blob/master/terraform/environments/global/ecr.tf)  
[ ] Automation to "Release" and "Tag" the application Github Repository with a semantic version number. (Your team, Operations can assist if needed)  
[ ] Automation to push the built Docker container to the ECR Repository and tag it with the semantic version number. (Your team, Operations can assist if needed)  
    Please do not use 'latest' tags  
[ ] Kubernetes Application Manifest in YAML, jsonnet, or Helm Chart (Operations and your team)  
    YAML and jsonnet are highly preferred, Helm charts are discouraged  
[ ] Automation to update the Kubernetes Application Manifest when a new version of your application container is pushed to ECR (Operations and your team)  
[ ] AWS Service account for your team or application (Operations)  
[ ] Path/s in AWS SSM Parameter Store created for your team or application (Operations)  
[ ] AWS IAM Permissions applied to your team members to allow read/write access to AWS SSM Parameter Store path/s for your application/team (Operations)  
[ ] AWS IAM Permissions applied to the service account to allow read access to AWS SSM Parameter Store path/s for your application/team (Operations)  
[ ] Secrets and Parameters needed for your application stored in AWS Systems Manager Parameter Store (Your team)  

