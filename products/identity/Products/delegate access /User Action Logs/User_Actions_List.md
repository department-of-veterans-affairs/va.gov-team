# User Actions List

### What We're Defining
- **_Event type_**: types of access events tracked in the user action database for regulatory and compliance purposes.
- **_Event description_**: describes the action taken and the specific asset or benefit accessed.

### Guidance for Writing Event Descriptions
- Start with one of these verbs: Add, Create, Delete, Download, Update, View
  - We can add verbs if needed
- Describe the action completely and concisely
- Write event actions in the present tense, not past tense.
- Events have a status: Initial, Success, or Error
- Include the exact document, form, or benefit name as needed

{{ User action }} {{ Resource accessed or updated }} {{ Specific form, document, or benefit }}

Example: Add  direct deposit for pension and disability

### Current List

|   Event type    |                   Event description                    |
| :-------------- | :----------------------------------------------------- |
| Sign-in account | Create account on {{ Login.gov }}                      |
|                 | Verify identity on {{ Login.gov }}                     |
|                 | Update password on {{ ID.me }}                         |
|                 | Sign in on {{ ID.me }}                                 |
|                 | Add multifactor authentication on {{ Login.gov }}      |
| Profile         | Update mailing address                                 |
|                 | Update phone number                                    |
|                 | Update email address                                   |
| Payments        | Add direct deposit for pension and disability          |
|                 | Update direct deposit for pension and disability       |
|                 | Add direct deposit for tuition                         |
|                 | Update direct deposit for tuition                      |
|                 | Add direct deposit for travel pay reimbursement        |
|                 | Update direct deposit for travel pay reimbursement     |
| Prescriptions   | Request prescription refill                            |
|                 | View prescriptions list                                |
|                 | Track prescription order                               |
| Secure messages | Send a secure message                                  |
|                 | View messages list                                     |
| Documents       | Download Blue Button report                            |
|                 | Download VA benefits letter                            |
|                 | Download VA Health summary PDF                         |
|                 | View VA Health summary                                 |
| Forms           | Submit VA Form 21-10210 Lay/Witness Statement          |
|                 | Submit VA Form 10-10EZ Application for Health Benefits |

