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
   - the AWS services that support the VA.gov website - the frontend work on the Form 526ez and ancillary forms is hosted on VA.gov
   - AWS EKS, as used by VFS ArgoCD - our team's backend work is deployed through apps vets-api and contention-classification-api.
   - AWS S3
- Describe named instances of each service used
   -  S3: `dsva-vagov-[dev/staging/sandbox/prod]-contention-classification-api`
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
  - We do not intend for PII to enter any of these tools. Jenkins is hosted by VFS. For GitHub Actions, we use GitHub-hosted runners.
- List software included in deployment or generate SBOM
- List all packages/plugins/modules/gems/etc. Include version numbers

### Connections
- List the connections your team makes/maintains with systems outside the Platform AWS Environment
- Are these connections Internal or External to the VA?
- Do you have a POC? Please list
- Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS).  
- Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed)
- List the types of PII shared (in each direction) with this connection
- Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it

### Provide a data flow diagram that shows your product’s relationship to Platform.
