---
name: Application Onboarding Requirements Checklist
about: For onboarding a software application to the Platform's delivery infrastructure
  (EKS, Kubernetes)
title: "[Insert app name here] Application onboarding requirements checklist"
labels: devops, eks, infrastructure, infrastructure-request, operations
assignees: ''

---

## Summary
The purpose of this checklist is to capture requirements for onboarding a software application to the Platform's delivery infrastructure. 

### Overview
- The Platform leverages container orchestration to host and deploy software applications  
- Container orchestration automates the deployment, scaling, and management of containerized applications
- To learn more, see ["Application Hosting and Deployment using Container Orchestration (EKS)"](https://vfs.atlassian.net/wiki/spaces/OT/pages/1474593866/Application+Hosting+and+Deployment+using+Container+Orchestration+EKS)

### Guidance
- Please fill out the sections below with as much info as possible 
- Complete the checklist to prepare your application for onboarding to the VA.Gov Platform 
- Once complete, move on to [Manage applications in EKS](https://vfs.atlassian.net/wiki/spaces/OT/pages/2348909545/Manage+applications+in+EKS) 
- Reach out in #vfs-platform-support with questions 

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
_Requesting team_  
- [ ] **Dockerfile:** _provide link to Dockerfile here_ | [Example](https://github.com/department-of-veterans-affairs/platform-console-api/blob/master/Dockerfile) | [Docs](https://docs.docker.com/engine/reference/builder/)  
_Requesting team_  

### Application delivery pipeline (CI/CD)
- [ ] **AWS service account for GitHub actions**, ie `svc-gha-team-name` | [Request here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=operations%2C+devops%2C+needs-grooming&template=ops_issue_template.md&title=)  
_Infrastructure Team_
- [ ] **AWS Elastic Container Registry (ECR) repository for the app container:** Submit PR to add your application name to the "all-repos" section of [this page](https://github.com/department-of-veterans-affairs/devops/blob/master/terraform/environments/global/ecr.tf)  
_Requesting team_  
- [ ] **Add semantic release configuration (a `.releaserc` file) to your repo** | [Example](https://github.com/department-of-veterans-affairs/vsp-infra-calico/blob/main/.releaserc) | [Docs](https://semantic-release.gitbook.io/semantic-release/)    
_Requesting team_  
- [ ] **Automation to push the app's container to ECR with a semantic version number** | [Example](https://github.com/department-of-veterans-affairs/vsp-infra-calico/blob/main/.github/workflows/mirror-images.yaml)    
Note: Use `sha` or semver. Don't use default "latest" tag. The release system uses modified container image tags to synchronize automation.  
_Requesting team_  

### Application secrets and parameters
- [ ] **AWS SSM Parameter Store path created for your team or app,** ie `/dsva-vagov/team-name/` | [Request here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=operations%2C+devops%2C+needs-grooming&template=ops_issue_template.md&title=)  
_Infrastructure Team_
- [ ] **AWS SSM Parameter Store parameters that the app needs to run,** ie `/dsva-vagov/team-name/env/secret-name` | [Docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/Store-a-secret-in-Parameter-Store.1474595172.html)  
_Requesting team_

---
Once the checklist is complete, you will be ready to onboard your application. Visit [Manage applications in EKS](https://vfs.atlassian.net/wiki/spaces/OT/pages/2348909545/Manage+applications+in+EKS) to get started.

### Notes 
- Please add comments to this issue as checklist items are completed, and...
- Tag the Infrastructure Team's product manager and product owner to help expedite the process
