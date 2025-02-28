# User actions content guide
A pattern to write and scale event types and event descriptions for user action records in the [audit database](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/delegate%20access%20#2-audit-database---immutable-logs-of-delegate-actions-for-compliance). 

## Overview
- User action records include both an event type and event description.
- Event descriptions need to be clear and distinct.
- For the MVP this list of user actions is focused on sign-in events and access events that **update** database resources.

### Terminology
- **Access event:** an action where sensitive information is accessed or updated in a database by a user or system
- **Audit database:** logs for access events stored on vets-api and Amazon Web Services (AWS) for 7 years
- **Event description**: describes the user action taken and the specific resource accessed or updated
- **Event type**: categories of access events, currently includes: sign in, profile, payments, documents, forms
- **Resource:** types of sensitive information accessed in a database, such as: password, direct deposit, or mailing address
- **User action:** a verb used to describe accessing or updating resources in a database, such as: create, update, or add

## How to write event descriptions
### Guidelines
- Describe the user action taken and the specific resource accessed or updated. 
- If applicable, include the related form, document, or benefit name.
- Write user actions in the present tense, not past tense, because events also include a status: Initial, Success, or Error.
- Most event descriptions start with one of these verbs: Add, Create, Update, Submit, Download.
  - Use "Add" for user actions that can be completed more than once
  - Use "Create" for user actions that can only be completed once, such as creating an account with a CSP
  - Use "Update" for changes to existing resources
- For sign-in and identity terminology, refer to the [content design system](https://design.va.gov/content-style-guide/specific-topics-and-programs/sign-in-and-identity-verification).

### Pattern
{{ User action }} {{ Resource accessed or updated }} {{ Specific form, document, or benefit }}

### Examples
- Add  direct deposit  for pension and disability
- Update VA Form 21-10210 Lay/Witness Statement
- Sign in on VA.gov

## User actions list
User actions prioritized for the MVP

|   Event type    |                   Event description                    |
| :-------------- | :----------------------------------------------------- |
| Sign-in         | Sign in {{ on VA.gov }}                                |
|                 | Verify identity* {{ on ID.me }}                        |
| Profile         | Update mailing address                                 |
|                 | Update phone number                                    |
|                 | Update email address                                   |
| Payments        | Add direct deposit for pension and disability          |
|                 | Update direct deposit for pension and disability       |
|                 | Add direct deposit for tuition                         |
|                 | Update direct deposit for tuition                      |
|                 | Add direct deposit for travel pay reimbursement        |
|                 | Update direct deposit for travel pay reimbursement     |
| Documents       | Download {{ Blue Button report }}                      |
|                 | Download {{ VA benefits letter }}                      |
|                 | Download {{ VA Health summary PDF }}                   |
| Forms           | Submit {{ VA Form 21-10210 Lay/Witness Statement }}    |
|                 | Update {{ VA Form 10-10EZ Application for Health Benefits |

*Currently we only track identity verification if the user previously signed in with an unverified account.

## Future phases

Incorporate more data from Credential Service Providers (CSPs)

|   Event type    |                   Event description                    |
| :-------------- | :----------------------------------------------------- |
| Sign-in         | Create account {{ on Login.gov }}                      |
|                 | Verify identity {{ on Login.gov }}                     |
|                 | Update password {{ on ID.me }}                         |
|                 | Sign in {{ on ID.me }}                                 |
|                 | Add multifactor authentication on {{ Login.gov }}      |

Incorporate more actions from [My HealtheVet Activity History](https://www.myhealth.va.gov/account-activity-history-summary)

|   Event type    |                   Event description                    |
| :-------------- | :----------------------------------------------------- |
| Prescriptions   | Request prescription refill                            |
| Secure messages | Send secure message                                    |
|                 | View secure message                                    |
