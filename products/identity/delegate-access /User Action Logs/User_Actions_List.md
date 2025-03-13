# User actions content guide
A pattern to write and scale event types and event descriptions for user action events in the [audit database](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/delegate%20access%20#2-audit-database---immutable-logs-of-delegate-actions-for-compliance) and [user actions view](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/delegate%20access%20). 

## Overview
- User action event records include: 
  - **Event type**: categories of access events, currently includes: sign in, profile, payments, documents, forms
  - **Event description**: describes the user action taken and the specific resource accessed or updated
  - **Identifier:** unique types of user action events referenced for investigation purposes.
- For the MVP this list of user actions is focused on sign-in events and access events that **update** database resources.

### Terminology
- **Access event:** an action where sensitive information is accessed or updated in a database by a user or system
- **Audit database:** logs for access events stored on vets-api and Amazon Web Services (AWS) for 7 years
- **Resource:** types of sensitive information accessed in a database, such as: password, direct deposit, or mailing address
- **User action:** a verb used to describe accessing or updating resources in a database, such as: create, update, or add
- **User actions view:** a user-facing dashboard view of actions taken on a user record

## How to write event descriptions
### Guidelines
- Describe the user action taken and the specific resource accessed or updated. 
- If applicable, include the related form, document, or benefit name.
- Write user actions in the present tense, not past tense, because events also include a status: Initial, Success, or Error.
- Most event descriptions start with one of these verbs: Add, Create, Update, Submit, Download.
  - Use "Add" for user actions that can be completed more than once.
  - Use "Create" for user actions that can only be completed once, such as creating an account with a CSP.
  - Use "Update" for changes to existing resources.
- Write in sentence case. Only include title case to reflect the capitalization of a specific form or document title.

### Pattern
{{ User action }} {{ Resource accessed or updated }} {{ Specific form, document, or benefit }}

### Examples
- Add  direct deposit  for pension and disability
- Submit VA Form 21-10210 Lay/Witness Statement
- Sign in on VA.gov

## How to write identifiers (draft)
### Guidelines
- Describe the user action taken and the type of resource accessed or updated.
- Include enough information to identify the related form, document, or benefit.
- Write user actions in the present tense, not past tense, because events also include a status: Initial, Success, or Error.
- Most identifiers start with one of these verbs: add, create, update, submit, download.

### Pattern
action_resource_identifying-information

### Examples
- add_direct_deposit_disability
- update_va_1010ez
- sign_in


## User actions list
User actions prioritized for the MVP



|   Event type    |                   Event description                    |       Identifier (draft)    |
| :-------------- | :----------------------------------------------------- | :------------------- |
| Sign-in         | Sign in {{ on VA.gov }}                                | sign_in              |
|                 | Verify identity* {{ on ID.me }}                        | verify_identity      |
| Profile         | Update mailing address                                 | update_mailing_address |
|                 | Update phone number                                    | update_phone_number   |
|                 | Update email address                                   | update_email_address  |
| Payments        | Add direct deposit for pension          | add_direct_deposit_pension   |
|                 | Update direct deposit for pension       | update_direct_deposit_pension  |
|                 | Add direct deposit for disability compensation       | update_direct_deposit_disability  |
|                 | Update direct deposit for disability compensation       | update_direct_deposit_disability  |
|                 | Add direct deposit for tuition                         | add_direct_deposit_tuition     |
|                 | Update direct deposit for tuition                      | update_direct_deposit_tuition  |
|                 | Add direct deposit for travel pay reimbursement        | add_direct_deposit_travel_pay  |
|                 | Update direct deposit for travel pay reimbursement     | update_direct_deposit_travel_pay  |
| Documents       | Download {{ Blue Button report }}                      | download_blue_button_report    |
|                 | Download {{ VA benefits letter }}                      | download_va_benefits_letter    |
|                 | Download {{ VA Health summary PDF }}                   | download_va_health_summary  |
| Forms           | Submit {{ VA Form 21-10210 Lay/Witness Statement }}    | submit_va_form_21-10210 |
|                 | Submit {{ VA Form 10-10EZ Application for Health Benefits }} | submit_va_form_10-10ez |

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
