10. Decision to use Parameter Store for secrets and variables
Date: 2021-06-16

Status  
In Review

Context  
Currently, we store secrets in 'credstash' which is essentially an encrypted DynamoDB table. The limitations of this system include, but are not limited to:
- Lack of ability to control permissions granularly (Ops must update the table for everyone)
- Lack of structure or pathing
- Limited support
- Security concerns with the CI server (Jenkins) having access to all the secrets as a current operational necessity

The Operations team explored other options to credstash, including Hashicorp Vault, AWS SSM Parameter Store, and AWS Secrets Manager. Ultimately we rejected
these solutions for these reasons:
- Vault
  - Complexity of the solution was high
  - Learning curve of the solution was high
  - Overhead of maintenance of the solution was high
- AWS Secrets Manager
  - Differences between Parameter Store and Secrets Manager did not justify the high cost of Secrets Manager
    - Ability to generate random passwords in Secrets Manager was not necessary
    - Ability to share secrets Cross-Account did not seem relevant
    - Ability to rotate secrets automatically would be nice to have but not ultimately worth the cost ($.40/secret + $.05/10k API calls vs. Almost free for Parameter Store)
    

Decision  
The Operations team has decided to use AWS SSM Parameter Store to store configuration values and secrets. This decision was made to limit complexity, cost,
and to allow the Operations team to define IAM permissions to control read and write access to paths in Parameter store, enabling teams to manage
their own configuration parameters and secrets. It will also enable principles of least privilege to be applied with CI service accounts in AWS IAM.

Consequences  
The Operations team has already migrated all the values from credstash to Parameter Store, but the values are still being used from credstash. We have a script
which synchronizes from credstash to Parameter Store, however this is not a long-term solution. The Operations team has a procedure in place for updating the code,
and is working on a mass migration plan as well.
