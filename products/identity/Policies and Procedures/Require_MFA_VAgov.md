# MFA Required on VA.gov

### Version History
| Version Number | Author(s) | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 1.0 | Joe Niquette | 5/19/23 | Initial creation, approval provided via email to the VA.gov Identity team by Cody Reinold. This document formally acknowledges that approval by the PR approval of Thomas Black. |

## Background

Fraudulent Direct Deposit account changes on VA.gov are on the rise at the Department of Veterans Affairs. In an attempt to reduce fraudulent activity on VA.gov, the VA.gov Identity team has implemented a policy that requires all direct deposit changes to be made with a verified ID.me or Login.gov account that requires MFA (multi-factor authentication). This policy was set by the Identity team's PO (Product Owner) at the time, Cody Reinold. The policy has been set and is not set to expire until 9/20/2021.

## Policy

All bank account (direct deposit) detail modifications within the VA.gov domain must utilize a verified ID.me or Login.gov account with required multi-factor authentication. Services which provide the option to modify bank account details must also confirm multi-factor was successfully entered by the current user during the session in which the account changes are being requested. Modifications on a bank account must be performed by a user that is directly authenticated, modifications cannot be made on behalf of another user.

## Execution

Services within VA.gov must validate the current users details from the `user model`. The fields from the `user model` which must be present at the time the modifications are being requested are:

```elixir
data.attributes.profile.multifactor=true AND 
data.attributes.profile.loa.current=3 AND
data.attributes.profile.signIn.serviceName=(logingov OR idme)
```

If these conditions are not met then the service must not allow for the submission or request to be forwarded to the downstream service which consumes the bank account changes.

In order to ensure continued access to modify bank account details users which do not currently meet the requirements of a verified ID.me or Login.gov account with required multi-factor authentication, the service must display content which explains why the current account does not meet the requirements of VA. The service must also present the user with a path to create either of the currently approved  verified ID.me or Login.gov accounts with required multi-factor authentication.

## Renewal Instructions

This policy is not set to expire however it will be reviewed yearly to ensure the technical details of the values to validate are still accurate. Reviews will be conducted yearly in the month of May.

## Approval

Thomas Black
Veteran digital identity, VA OCTO
5/19/2023
