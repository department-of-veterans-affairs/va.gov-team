# Platform Security Questionnaire

From the kickoff meeting invitation:
> Platform and Platform Security are undertaking an effort to properly define our security boundary and VFS teams are included in our ATO (Authority to Operate).
> 
> We need to gather and maintain some specific information about your team and its work on and in support of VA.gov.


## Questionnaire

Items needed from each VFS team:

### POC
- What is the name of your product(s)/system(s)? 
   - Form 526ez
   - Form 0781
   - Form 4142
   - Contention Classification API
   - Employee Experience 
- Describe its purpose in a few sentences.
   - Contention Classification API: The API maps contention text and diagnostic codes from the Form 526ez submission to contention classification codes as defined in the [Benefits Reference Data API](https://developer.va.gov/explore/api/benefits-reference-data/docs).
- If you represent multiple products, please describe the relationship between them, if there is any.
- What is the expected duration of your project? This information helps us understand how our processes need to adapt
  - Ongoing with regular enhancements. The contract runs through ~March 2028.

### AWS Resources
- List AWS services used
   - AWS EKS, as deployed through VFS ArgoCD
   - AWS S3
- Describe named instances of each service used
- Which of your resources handle PII? List the types of PII
- Do you utilize any other cloud resources beyond VA.gov?
   - VA Datadog (vagov.ddog-gov.com), VA GitHub (github.com/department-of-veterans-affairs), DSVA Slack, VFS ArgoCD.

### Repos
- List repos maintained by your team, provide links
  - [Contention Classification API](https://github.com/department-of-veterans-affairs/contention-classification-api/)
  - We maintain additional repos that hold documentation and do not contribute artifacts for deployments. 
- List repos used by your team, provide links
- Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable
- List other groups you know use your repos

### Tools
- List CI/CD or Infrastructure as Code tools
  - GitHub Actions; VFS Jenkins; Terraform (used by our products, however we are not the maintainers)
- Describe where each tool is hosted and if they handle PII
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
