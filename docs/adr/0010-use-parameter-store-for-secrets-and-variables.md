10. Decision to use Parameter Store for secrets and variables
Date: 2021-06-16

Status
In Review

Context
Currently, we store secrets in 'credstash' which is essentially an encrypted DynamoDB table. The limitations of this system include, but are not limited to:
- Lack of ability to control permissions granularly (Ops must update the table for everyone)
- Lack of structure or pathing
- Limited support

The Operations team explored other options to credstash, including Hashicorp Vault, AWS SSM Parameter Store, and AWS Secrets Manager.

Decision
The Operations team has decided to use AWS SSM Parameter Store to store configuration values and secrets. This decision was made to limit complexity, cost,
and to allow the Operations team to define IAM permissions to control read and write access to paths in Parameter store, enabling teams to manage
their own configuration parameters and secrets.

Consequences
The Operations team has already migrated all the values from credstash to Parameter Store, but the values are still being used from credstash. We have a script
which synchronizes from credstash to Parameter Store, however this is not a long-term solution. The Operations team has a procedure in place for updating the code,
and is working on a mass migration plan as well.
