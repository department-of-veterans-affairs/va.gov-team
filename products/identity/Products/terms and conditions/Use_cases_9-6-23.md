# Terms of Use Use Cases

|  | Assumptions: |
| --- | --- |
| 1 | Four applications will be participating in the VA Enterprise ToU MVP; My VA Health, My HealtheVet, VA.gov, and the flagship mobile app |
| 2 | IAM SSOe will control/configure which applications are included in the VA Enterprise ToU. VA.gov and VA Health and Benefits app will control enforcement for ToU for their apps. |
| 3 | IAM SSOe will check the Signup Service agreement status for each authenticated user accessing a participating application and will only send users to the Signup UI if they have not agreed to the current ToU |
| 4 | The Signup Service will automatically provision users into the Cerner system if the users agree to the ToU and are eligible for My VA Health access |
| 5 | The Signup Service will automatically deprovision users from the Cerner system if the users decline the ToU and have been previously provisioned |
| 6 | Signup Service will be responsible for notifying IAM Provisioning when a user accepts or declines the ToU.  IAM Provisioning will be responsible for notifying participating applications |
| 7 | The current My VA Health T&C page and decline/opt-out page content is specific to the My VA Health portal and must be changed to reflect use for enterprise-wide ToU |
| 8 | The helpdesk information currently displayed is specific to the My VA Health portal and must be changed to the enterprise helpdesk information |
| 9 | The bypass period for the ToU is a configurable time period that starts with the creation of the VA Enterprise ToU MVP.  Initial default configuration will be 180 days. |
| 10 | The Signup Service will determine if a user is allowed to bypass the ToU and provide that information to the UI |
| 11 | The new enterprise ToU must be legally designated as version "1.0", which must be displayed to the user with the ToU.  This conflicts with the existing My VA Health document version, so the existing Signup "version" can no longer be used to uniquely identify a record.  Signup will have to separately track a unique document id and a legal document version.  Both of these will be provided by the Signup Service to the UI for the purpose of displaying the legal version and submitting the document id with the user's accept/decline decision. |
| 12 |  |

## ToU Page Scenarios

**Notes**: Columns B, C, and D determine the eligibility of presenting the bypass option to the user. This eligibility will be determined by the Signup Service and provided to the UI as a boolean flag. If the user is attempting to access My VA Health and the user is not eligible for My VA Health access, then the user should be presented with an error message stating that we could not verify their association with a VA Electronic Health Record Modernization (EHRM) facility, rather than presenting the ToU page (see current Signup behavior)

| # | Within ToU bypass period? | User is eligible for My VA Health access? | User agreed to previous version of My VA Health T&C or Enterprise ToU? | Options displayed on ToU page | Actions recorded by Signup Service | Post-action user workflow | Cookie created for IAM | User's post-action agreement status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Yes | Yes | Yes | Agree | - User ICN - Agreed to ToU - ToU version/revision - Provisioned to Cerner = Yes - Notify IAM Provisioning = Yes | Redirected to IAM SSOe to complete login and be sent to requested application | CERNER_CONSENT = ACCEPTED | Agreed to ToU = Yes |
|  |  |  |  | Decline | N/A | Display "Decline" page | N/A | Agreed to ToU = No |
|  |  |  |  | Ask Me Later (Bypass) | N/A | Redirected to IAM SSOe to complete login and be sent to requested application | CERNER_CONSENT = BYPASSED | Agreed to ToU = No |
|  |  |  |  |  |  |  |  |  |
| 2 | Yes | Yes | No | Agree | - User ICN - Agreed to ToU - ToU version/revision - Provisioned to Cerner = Yes - Notify IAM Provisioning = Yes | Redirected to IAM SSOe to complete login and be sent to requested application | CERNER_CONSENT = ACCEPTED | Agreed to ToU = Yes |
|  |  |  |  | Decline | N/A | Display "Decline" page | N/A | Agreed to ToU = No |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| 3 | Yes | No | N/A | Agree | - User ICN - Agreed to ToU - ToU version/revision - Provisioned to Cerner = No - Notify IAM Provisioning = Yes | Redirected to IAM SSOe to complete login and be sent to requested application | CERNER_CONSENT = ACCEPTED | Agreed to ToU = Yes |
|  |  |  |  | Decline | N/A | Display "Decline" page | N/A | Agreed to ToU = No |
|  |  |  |  | Ask Me Later (Bypass) | N/A | Redirected to IAM SSOe to complete login and be sent to requested application | CERNER_CONSENT = BYPASSED | Agreed to ToU = No |
|  |  |  |  |  |  |  |  |  |
| 4 | No | N/A | N/A | Agree | - User ICN - Agreed to ToU - ToU version/revision - Provisioned to Cerner = If eligible - Notify IAM Provisioning = Yes | Redirected to IAM SSOe to complete login and be sent to requested application | CERNER_CONSENT = ACCEPTED | Agreed to ToU = Yes |
|  |  |  |  | Decline | N/A | Display "Decline" page | N/A | Agreed to ToU = No |
|  |  |  |  |  |  |  |  |  |

## Decline Page Scenarios

| # | User agreed to previous version of My VA Health T&C or Enterprise ToU? | User provisioned to Cerner? | Options displayed on opt-out page | Actions recorded by Signup Service | Post-action user workflow | User's post-action agreement status |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | No | No | Decline | - User ICN - Opted out of ToU - ToU version/revision - Deprovisioned from Cerner = No - Notify IAM Provisioning = Yes | Redirect to VA.gov logout page showing "you declined terms and we logged you out error page") | Agreed to ToU = No |
|  |  |  | Cancel | N/A | Display ToU page again | Agreed to ToU = No |
|  |  |  |  |  |  |  |
| 2 | Yes | No | Decline | - User ICN - Opted out of ToU - ToU version/revision - Deprovisioned from Cerner = No - Notify IAM Provisioning = Yes | Redirect to VA.gov logout page showing "you declined terms and we logged you out error page" | Agreed to ToU = No |
|  |  |  | Cancel | N/A | Display ToU page again | Agreed to ToU = Yes |
|  |  |  |  |  |  |  |
| 3 | No | Yes | Decline | - User ICN - Opted out of ToU - ToU version/revision - Deprovisioned from Cerner = Yes - Notify IAM Provisioning = Yes | Redirect to VA.gov logout page showing "you declined terms and we logged you out error page") | Agreed to ToU = No |
|  |  |  | Cancel | N/A | Display ToU page again | Agreed to ToU = No |
|  |  |  |  |  |  |  |
| 4 | Yes | Yes | Decline | - User ICN - Opted out of ToU - ToU version/revision - Deprovisioned from Cerner = Yes - Notify IAM Provisioning = Yes | Redirect to VA.gov logout page showing "you declined terms and we logged you out error page" | Agreed to ToU = No |
|  |  |  | Cancel | N/A | Display ToU page again | Agreed to ToU = Yes |
|  |  |  |  |  |  |  |
