---
name: Kubernetes Onboarding Template
about: For onboarding a new app to the VSP Kubernetes clusters
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

- [ ] GitHub repository: _provide link to repo here_  
Note: app should conform to the 12 factor app methodology | [Documentation here](https://12factor.net/)   
_Your team; Infrastructure Team can assist if needed_  
- [ ] Dockerfile: _provide link to Dockerfile here_ | [Example here](https://github.com/department-of-veterans-affairs/platform-console-api/blob/master/Dockerfile)  
_Your team; Infrastructure Team can assist if needed_  
- [ ] AWS service account for GitHub actions, ie `svc-gha-team-name` | [Request Here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=operations%2C+devops%2C+needs-grooming&template=ops_issue_template.md&title=)  
_Infrastructure Team_
- [ ] AWS Elastic Container Registry (ECR) repository for the app: _provide name of ECR repo here_  
_Infrastructure Team; [PRs welcome](https://github.com/department-of-veterans-affairs/devops/blob/master/terraform/environments/global/ecr.tf)_  
- [ ] Automation to release and tag the app's GitHub repository with a semantic version number | [Example here](https://github.com/department-of-veterans-affairs/vsp-infra-calico/blob/main/.releaserc)  
_Your team; Infrastructure Team can assist if needed_  
- [ ] Automation to push the Docker container to the ECR repository and tag it with the semantic version number | [Example here](https://github.com/department-of-veterans-affairs/vsp-infra-calico/blob/main/.github/workflows/mirror-images.yaml)  
Note: Please do not use 'latest' tags. The release system uses the modified container image tag to synchronize CI/CD automation  
_Your team; Infrastructure Team can assist if needed_  
- [ ] Kubernetes manifest(s) in YAML, jsonnet, or Helm Chart added to `vsp-infra-application-manifests` | [Repo here](https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests)  
Note: needs to be compatible with ArgoCD | [Documentation here](https://argo-cd.readthedocs.io/en/stable/)  
_Your team_  
- [ ] Automation to update Kubernetes manifest(s) when a new version of the app container is pushed to ECR | [Example here](https://github.com/department-of-veterans-affairs/vsp-infra-calico/blob/main/.github/workflows/update-manifests.yaml)  
_Your team; Infrastructure Team can assist if needed_
- [ ] AWS SSM Parameter Store path created for your team or app, ie `/dsva-vagov/team-name/` | [Request Here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=operations%2C+devops%2C+needs-grooming&template=ops_issue_template.md&title=)  
_Infrastructure Team_
- [ ] AWS SSM Parameter Store secrets or parameters that the app needs to run, ie `/dsva-vagov/team-name/env/secret-name` | [Documentation here](https://depo-platform-documentation.scrollhelp.site/developer-docs/Store-a-secret-in-Parameter-Store.1474595172.html)  
_Your team_

End of checklist
