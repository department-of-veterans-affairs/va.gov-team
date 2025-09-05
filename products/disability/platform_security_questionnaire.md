# Platform Security Questionnaire

From the kickoff meeting invitation:
> Platform and Platform Security are undertaking an effort to properly define our security boundary and VFS teams are included in our ATO (Authority to Operate).
> 
> We need to gather and maintain some specific information about your team and its work on and in support of VA.gov.


## Questionnaire

VFS team: Disability Benefits Crew (DBC)

### POC
- What is the name of your product(s)/system(s)? 
   - Form 526ez (shared with other teams; we focus on the core form and ancillary forms and pathways within the 526ez, such as Form 0781 and Form 4142)
   - Contention Classification API
   - products from the Employee Experience on DBC are generally under the platform footprint of the Form 526ez or Contention Classification API 
- Describe its purpose in a few sentences.
   - Form 526ez: improve the core digitized Form 526ez application and ancillary forms and pathways. We focus on end-to-end flow, error messages, filing an intent to file, overall navigation within the form, and managing stability and emergencies 
   - Contention Classification API: The API maps contention text and diagnostic codes from the Form 526ez submission to contention classification codes as defined in the [Benefits Reference Data API](https://developer.va.gov/explore/api/benefits-reference-data/docs).
   - Employee Experience: develop programmatic means to reduce burdensome manual actions that need to be taken by claims processors.
- If you represent multiple products, please describe the relationship between them, if there is any.
   - the Form 526ez submission flow invokes the Contention Classification API and Employee Experience features, to supplement the user-provided form data. The Contention Classification API and Employee Experience features are not relied on production systems other than the Form 526ez submission flow.
- What is the expected duration of your project? This information helps us understand how our processes need to adapt
  - Ongoing with regular enhancements. The contract runs through ~March 2028.

### AWS Resources
- List AWS services used
   - all of the services used to support the VA.gov website, as our Form 526ez and ancillarm forms are sections within the VA.gov website
   - AWS EKS, as used by VFS ArgoCD (our team's backend work is deployed through apps vets-api and contention-classification-api)
   - AWS S3
- Describe named instances of each service used
   -  S3: dsva-vagov-[dev/staging/sandbox/prod]-contention-classification-api
- Which of your resources handle PII? List the types of PII
   - these is potential for PII in form submissions on the Form 526ez and ancillary forms; and potential for PII in the files uploaded to S3.
- Do you utilize any other cloud resources beyond VA.gov?
   - VA Datadog (vagov.ddog-gov.com), VA GitHub (github.com/department-of-veterans-affairs), DSVA Slack, VFS ArgoCD.

### Repos
- List repos maintained by your team, provide links
  - [contention-classification-api](https://github.com/department-of-veterans-affairs/contention-classification-api/)
  - [vets-api](https://github.com/department-of-veterans-affairs/vets-api/) (shared with other teams)
  - [vets-website](https://github.com/department-of-veterans-affairs/vets-website/) (shared with other teams)
  - [vsp-infra-application-manifests](https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests) (shared with other teams)
  - we maintain additional repos that hold documentation and do not contribute artifacts for deployments. 
- List repos used by your team, provide links
  - repositories that `vets-website` is dependent on, noted in [DEPO docs]( https://depo-platform-documentation.scrollhelp.site/developer-docs/setting-up-your-local-frontend-environment#Settingupyourlocalfrontendenvironment-Step2:Getthesourcecode)
- Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable
  - for our work in `vets-api` and `vets-website`: GitHub team [disability-benefits](https://github.com/orgs/department-of-veterans-affairs/teams/disability-benefits)
  - for our work in `contention-classification-api` and `vsp-infra-application-manifests`: [vfs-benefits-conditions-team](https://github.com/orgs/department-of-veterans-affairs/teams/vfs-benefits-conditions-team)
- List other groups you know use your repos
  - `vets-api`, `vets-website`, and `vsp-infra-application-manifests` is shared by several project teams

### Tools
- List CI/CD or Infrastructure as Code tools
  - GitHub Actions, Jenkins, Terraform, Helm charts 
- Describe where each tool is hosted and if they handle PII
  - We do not intend for PII to enter any of these CI/CD or Infrastructure as Code tools. Jenkins is hosted by VFS. For GitHub Actions, we use GitHub-hosted runners.
- List software included in deployment or generate SBOM
    - vets-website: [dependency graph](https://github.com/department-of-veterans-affairs/vets-website/network/dependencies) 
    - vets-api:  [dependency graph](https://github.com/department-of-veterans-affairs/vets-api/network/dependencies)
    - contention-classification-api: [dependency graph](https://github.com/department-of-veterans-affairs/contention-classification-api/network/dependencies)
- List all packages/plugins/modules/gems/etc. Include version numbers
  - vets-api: [Gemfile.lock](https://github.com/department-of-veterans-affairs/vets-api/blob/master/Gemfile.lock), 
  - vets-website: [yarn.lock](https://github.com/department-of-veterans-affairs/vets-website/blob/main/yarn.lock), [package.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/package.json)
  - contention-classification-api: [poetry.lock](https://github.com/department-of-veterans-affairs/contention-classification-api/blob/main/poetry.lock)

 

### Connections
- List the connections your team makes/maintains with systems outside the Platform AWS Environment
  - [topology](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/Updated%20External%20Service%20Topology.png)
  - Lighthouse APIs
  - VANotify (?)
- Are these connections Internal or External to the VA?
  - internal
- Do you have a POC? Please list
- Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS).
  - not certain, but we believe TLS 1.2/1.3 encryption over HTTPS, VA Certificate Authority signed. 
- Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed)
- List the types of PII shared (in each direction) with this connection
- Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it
  - No, our team does not directly maintain MOUs, ISAs, or IAAs for these connections. These external system connections are facilitated through platform-provided APIs (Lighthouse) and shared services like the Identity VFS team.

### Provide a data flow diagram that shows your product’s relationship to Platform.
- contention-classification-api: [Service v1.0 Architecture [cc-team]](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1677003925622/f5284353833891a9f341413073b3b16695026cba) (see section with label "Option 2 - Models hosted in Va.gov Infrastructure [...] Last Updated August 2025"
