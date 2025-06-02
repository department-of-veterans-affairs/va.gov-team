# **Identity Verification Issues for Veterans with Multiple Accounts**

**Edge Case:** [ID.me Duplicate Accounts/Stolen Identity](https://jira.devops.va.gov/browse/SITEC-29)**,** [Login.gov Duplicate Accounts/Stolen Identity](https://jira.devops.va.gov/browse/SITEC-31)   
**Created:** 20 May 2025  
**Last Updated:** 30 May 2025  
**Contributors:** Tristan Jung, Matthew Declercq

## **Situation**

Veterans face challenges with duplicate or fraudulent accounts on ID.me and Login.gov, which prevent identity verification and access to services. These issues often arise from inadvertently created duplicate accounts, forgotten accounts, accounts created by family members, or identity theft. The absence of straightforward self-service options to resolve these issues increases reliance on support tickets, creating technical and procedural challenges.

## **Findings**

### **ID.me**

* **Duplicate Accounts**: Veterans attempting to verify their identity with a second ID.me account receive an error message stating, “You must use your existing ID.me account, which is associated with this email address.” The message displays a partially masked email. If Veterans lack access to the email linked to the duplicate account, they cannot resolve the issue without contacting ID.me support.  
* **Account Management**: Veterans can close a duplicate account by accessing “Sign In & Security” settings, navigating to “Privacy,” and selecting “Remove My Data.” Alternatively, they can add the duplicate email as a secondary email to their main account. However, merging accounts is not universally available, and ID.me support does not accept merge requests, requiring veterans to submit a support ticket for assistance.  
* **Fraudulent Accounts**: Fraud cases, such as accounts created by identity thieves or unauthorized individuals (e.g., a family member or ex-partner), prevent veterans from verifying their identity. Resolution requires submitting a support ticket to remove fraudulent accounts, as no self-service option exists. ID.me provides fraud warnings, but veterans may not realize their account has been compromised until verification fails.  
* **System Limitations**: While ID.me notifies users of existing accounts during verification attempts, it does not prevent creating unverified duplicate accounts with different emails, leading to potential confusion.  
* **Support Dependency**: ID.me [provides guidance for handling multiple accounts](https://help.id.me/hc/en-us/articles/1500002444141-Multiple-ID-me-accounts), but resolution relies on contacting support, as no self-service option exists for merging or deleting accounts that the Veteran does not have control of.

### **Login.gov**

* **Duplicate Accounts**: Veterans may create multiple Login.gov accounts for different services (e.g., Social Security or VA.gov) using different emails. While Login.gov allows multiple accounts, VA.gov restricts users to one verified account per identity. Switching or consolidating accounts requires escalating to [Login.gov support to delete an account](https://login.gov/help/manage-your-account/delete-your-account/).  
* **Access Issues**: Veterans with accounts linked to inaccessible multi-factor authentication (MFA) devices or outdated emails cannot delete old accounts, as deletion instructions are sent to the email on file. Login.gov support cannot bypass this requirement.  
* **Workaround**: Creating a new, verified Login.gov account automatically removes verification from the old account, though the old account remains active. 

## **Suggestions to Help Veterans**

1. **ID.me**:  
   * **Check for Duplicate Accounts**: Log in with all known email addresses to identify existing accounts. If access is unavailable, submit a support ticket to ID.me to close or merge duplicate accounts.  
   * **Close Unneeded Accounts**: Access account settings to delete duplicate accounts via the “Remove My Data” option in the “Privacy” section or add the duplicate email as a secondary email to the main account.  
   * **Monitor for Fraud**: Regularly review accounts for unauthorized access and report suspected fraud to ID.me support immediately.  
   * **Follow Guidance**: Refer to ID.me’s official help article for steps to address multiple accounts and ensure account details are current.  
2. **Login.gov**:  
   * **Create a New Account**: If unable to access an old account due to outdated email or MFA settings, create and verify a new Login.gov account to automatically remove verification from the old account, restoring access to VA.gov.  
   * **Update Contact Information**: Ensure the email and MFA methods for the new account are current and accessible to prevent future issues.  
   * **Request Account Deletion**: Log in to an accessible account and follow Login.gov’s deletion process to remove unneeded accounts, or contact support for assistance with fraudulent accounts.  
3. **General Recommendations**:  
   * **Secure Account Details**: Maintain a record of all emails and phone numbers used for ID.me and Login.gov accounts to avoid access issues.  
   * **Proactive Communication**: Engage with support teams as soon as issues arise, as both platforms rely on support tickets for resolution.
