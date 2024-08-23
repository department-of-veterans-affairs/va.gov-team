# Security Review

These are the top two issues revealed in the review. Other issues were discussed, and deemed low severity and risk.

## Input Validation

AVA VA.gov logic does not validate user input on the backend (the API facade / middleware), only within the UI. Authenticated and unauthenticated users can call our facade APIs directly.

  * Could be vulnerable to SQL injection, or XSS.
  * Could be an attack against submitter UI, Dataverse, or agent's UI.
  * We rely on CRM's APIs to ensure that vulnerabilities are addressed.
  * [Link for more info / tips](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html).

> **ACTION:** This is very likely handled by CRM's PowerPages platform. Need to verify with Kyle.

## Access Control

We do not enforce access restrictions for attachments. Any authenticated user can access any document, given its GUID.

  * Could be vulnerable to leaking PII/PHI.
  * "Simple" solution is to ensure the current ICN (user ID) is authorized to access the document (by its GUID).

> **ACTION:** Get with Key/Shelby/Carl to gauge severity, priority, and level of effort. Is a fix needed?

