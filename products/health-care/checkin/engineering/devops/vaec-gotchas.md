# VA Enterprise Cloud Gotchas, Catch-22's, and Other Assorted Issues

## Inadequate Permissions in the Permissions Boundary Policy

The VAEC `vaec/project-admin` IAM Permissions Boundary Policy, which is used to restrict the access of ADFS project administrators and any roles they create, has some problems. 

In an attempt to reduce the risk and surprise of these discrepancies, we will document them as we encounter them.

- `iam:UpdateRoleDescription`: We can't update the description of an IAM Role once it is created, meaning that the role (and all resources depending on it) must be destroyed and recreated or the description remain in its original form, possibly inaccurate.
- `iam:UpdateRole`: We can't update the description or maximum session duration of an IAM Role once it is created.
- `kms:DeleteAlias`: Once an alias is created, it cannot be destroyed. However, since `kms:ScheduleKeyDeletion` is available, you can schedule a KMS key but not its alias, so you're left with an alias that points nowhere.
- `kms:UpdateAlias`: Once an alias is created, it cannot be pointed to a new KMS key. However, as above, this can lead to aliases that point nowhere.

## See Also
- [List of IAM Permissions We Really Should Have](https://github.com/department-of-veterans-affairs/checkin-devops/issues/495)
- [List of Crap We Need Deleted For Us Because Permissions Boundary Policy](https://github.com/department-of-veterans-affairs/checkin-devops/issues/496)
