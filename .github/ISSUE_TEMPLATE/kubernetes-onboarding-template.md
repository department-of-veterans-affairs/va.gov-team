---
name: Application Onboarding Template
about: For onboarding a software application to the Platform's delivery infrastructure
  (EKS, Kubernetes)
title: "[Insert app name here] - Application onboarding infrastructure request"
labels: devops, eks, infrastructure, infrastructure-request, operations
assignees: ''

---

## Summary
The purpose of this template is to capture requirements for onboarding a software application to the Platform's delivery infrastructure. 

### Overview
- The Platform leverages container orchestration to host and deploy software applications  
- Container orchestration automates the deployment, scaling, and management of containerized applications
- To learn more, see ["Application Hosting and Deployment using Container Orchestration (EKS)"](https://vfs.atlassian.net/wiki/spaces/OT/pages/1474593866/Application+Hosting+and+Deployment+using+Container+Orchestration+EKS)

### Guidance
- Please fill out the sections below with as much info as possible 
- If you don't have info or know the answer to a given prompt, _it's okay to leave it blank_
- The Infrastructure Team will assist you with gathering requirements _and_ performing key setup and configuration tasks 

---

## Description of application
_Please provide a brief description of the application, ie What does it do? Who does it serve?_

### Basic info:
**Team Name:**   
_ie "Access Management Team"_  
**Application Name:**  
_ie "Vets API" or "Platform Console UI"_  
**Functionality:**  
_ie "core API for va.gov website"_  
**Language/Stack:**  
_ie "Ruby on Rails"_  
**Ports/Networking needed:**  
_ie "80, 443" for standard HTTP and HTTPS_    
**Other infrastructure needed:**  
_ie "Database, Redis, S3, etc"_  

### Background/Context/Resources
_Please link to an initiative or supporting documentation that desribes the need and purpose of the application_

### Technical Notes
_Additional technical info that describes the desired setup and configuration_

---

## Onboarding checklist 
_*The responsible parties are listed below each item in the checklist_    

### Application repository and container 
- [ ] **GitHub repo:** _provide link to repo here_  
Note: app should conform to the 12 factor app methodology | [Docs](https://12factor.net/)   
_Requesting team; Infrastructure Team can assist_  
- [ ] **Dockerfile:** _provide link to Dockerfile here_ | [Example](https://github.com/department-of-veterans-affairs/platform-console-api/blob/master/Dockerfile) | [Docs](https://docs.docker.com/engine/reference/builder/)  
_Requesting team; Infrastructure Team can assist_  

### Application delivery pipeline (CI/CD)
- [ ] **AWS service account for GitHub actions**, ie `svc-gha-team-name` | [Request here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=operations%2C+devops%2C+needs-grooming&template=ops_issue_template.md&title=)  
_Infrastructure Team_
- [ ] **AWS Elastic Container Registry (ECR) repository for the app container:** _provide name of ECR repo here_  
_Infrastructure Team_ | [PRs welcome](https://github.com/department-of-veterans-affairs/devops/blob/master/terraform/environments/global/ecr.tf)  
- [ ] **Automation to release and tag the app's GitHub repo with a semantic version number** | [Example](https://github.com/department-of-veterans-affairs/vsp-infra-calico/blob/main/.releaserc) | [Docs](https://semantic-release.gitbook.io/semantic-release/)    
_Requesting team; Infrastructure Team can assist_  
- [ ] **Automation to push the app's container to ECR with a semantic version number** | [Example](https://github.com/department-of-veterans-affairs/vsp-infra-calico/blob/main/.github/workflows/mirror-images.yaml)    
Note: Don't use default "latest" tag. The release system uses modified container image tags to synchronize automation. 
_Requesting team; Infrastructure Team can assist_  
- [ ] **Kubernetes manifest in YAML, Jsonnet, or Helm Chart** in `vsp-infra-application-manifests` | [Example](https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/tree/main/apps) | [Docs](https://argo-cd.readthedocs.io/en/stable/)  
Note: must be compatible with ArgoCD  
_Requesting team; Infrastructure Team can assist_  
- [ ] **Kubernetes detect and update application** in `vsp-infra-applications-manifests` | [Environments](https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/tree/main/apps/vsp-operations/argocd-apps)
- [ ] **Automation to update the Kubernetes manifest** when a new version of the app's container is pushed to ECR | [Example](https://github.com/department-of-veterans-affairs/vsp-infra-calico/blob/main/.github/workflows/update-manifests.yaml)  
_Requesting team; Infrastructure Team can assist_

### Application secrets and parameters
- [ ] **AWS SSM Parameter Store path created for your team or app,** ie `/dsva-vagov/team-name/` | [Request here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=operations%2C+devops%2C+needs-grooming&template=ops_issue_template.md&title=)  
_Infrastructure Team_
- [ ] **AWS SSM Parameter Store parameters that the app needs to run,** ie `/dsva-vagov/team-name/env/secret-name` | [Docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/Store-a-secret-in-Parameter-Store.1474595172.html)  
_Requesting team_

---

### Notes 
- Please add comments to this issue as checklist items are completed, and...
- Tag the Infrastructure Team's product manager and product owner to help expedite the process
