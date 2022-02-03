---
name: Kubernetes Onboarding Template
about: For onboarding a new application to the VSP Kubernetes clusters
title: ''
labels: 'operations, kubernetes, devops'
assignees: ''

---
## Description of your application
_Please provide a brief description of the application, ie What does it do? Who does it serve?_

### Required info: 
Team Name:  
Application Name:  
Functionality:  
Language/Stack:  
Ports/Networking needed:  
Other infrastructure needed e.g. Database, Redis, etc:  
Anything else we need to know?:  

---
## Background/Context/Resources
_Please link to an initiative or other documentation that desribes the need and purpose of the application_

## Technical Notes
_Additional technical information that helps to explain the desired setup and configuration_

---

## Onboarding checklist 
_*Responsible party listed below each item in the checklist_    
- [ ] Team name     
_Your team_  
- [ ] Application name    
_Your team_   
_Note: the application should conform to the 12 factor app methodology (https://12factor.net/)_
- [ ] GitHub repository: _<link here>_  
_Your team; Infrastructure Team can assist if needed_  
- [ ] Dockerfile:  
_Your team; Infrastructure Team can assist if needed_  
- [ ] AWS Elastic Container Registry (ECR) repository for the application  
_Infrastructure Team; [PRs welcome](https://github.com/department-of-veterans-affairs/devops/blob/master/terraform/environments/global/ecr.tf)_  
- [ ] Automation to "release" and "tag" the application's GitHub repository with a semantic version number | [Example here](https://github.com/department-of-veterans-affairs/vsp-infra-calico/blob/main/.releaserc)  
_Your team; Infrastructure Team can assist if needed_  
- [ ] Automation to push the built Docker container to the ECR Repository and tag it with the semantic version number -- Note: Please do not use 'latest' tags. The release system uses the modified tag to synchronize CI/CD automation | [Example here](https://github.com/department-of-veterans-affairs/vsp-infra-calico/blob/main/.releaserc)  
_Your team; Infrastructure Team can assist if needed_
- [ ] Kubernetes manifest(s) in YAML, jsonnet, or Helm Chart  
_Your team_  
- [ ] Automation to update the Kubernetes Application Manifest when a new version of your application container is pushed to ECR | [Example here](https://github.com/department-of-veterans-affairs/vsp-infra-calico/tree/main/.github/workflows)  
_Your team; Infrastructure Team can assist if needed_
- [ ] AWS app service account and secrets management for your application | [Request Here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=operations%2C+devops%2C+needs-grooming&template=ops_issue_template.md&title=)  
_Infrastructure Team_
- [ ] Secrets or parameters that the application needs to run  
_Your team_

