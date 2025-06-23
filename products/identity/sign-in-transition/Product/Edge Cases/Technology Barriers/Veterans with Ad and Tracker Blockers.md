# **Identity Verification Issues for Veterans with Ad/Tracker Blockers**

**Edge Case**: [Ad/Tracker Blockers Limiting Ability to Verify](https://jira.devops.va.gov/browse/SITEC-37)  
**Created**: 27 May 2025  
**Last update**: 27 May 2025  
**Contributors**: Matthew Declercq

## **Situation**

Veterans attempting to verify their identities on Login.gov and ID.me have reported issues, particularly when using the DuckDuckGo browser or other ad/tracker blockers. These tools, designed to enhance privacy, appear to interfere with the functionality of the identity verification processes, preventing successful completion.

## **Findings**

* **DuckDuckGo Browser**: The browser’s built-in tracker blocking and strict privacy settings may block essential scripts or cookies required for identity verification on Login.gov and ID.me. This can result in errors such as failed page loads, broken verification forms, or inability to submit identity documents.  
* **Other Ad/Tracker Blockers**: Extensions like Ghostery, Privacy Badger, uBlock Origin, or similar tools may misidentify necessary scripts or cookies as trackers, disrupting interface functionality. Common issues include incomplete page rendering or failed verification attempts.  
* **Impact on Veterans**: These issues affect Veterans who are unaware that ad/tracker blockers are causing issues during verification, the lack of  clear guidance on disabling blockers frustration and delays access.

## **Recommendations**

1. **For Veterans**:  
   * **Disable Ad/Tracker Blockers Temporarily**: Instruct Veterans to disable blockers for Login.gov and ID.me. For DuckDuckGo, click the shield icon in the address bar and toggle off "Privacy Protection" for the site. For other blockers (e.g., uBlock Origin), add Login.gov and ID.me to the allowlist via the extension’s settings.  
   * **Use Alternative Browsers**: If issues persist, recommend using a standard browser (e.g., Chrome, Firefox, or Edge) with minimal privacy extensions during verification..  
2. **For Login.gov and ID.me Product Teams**:  
   * **Add Guidance to Help Pages**: Update help documentation to include specific instructions for disabling ad/tracker blockers.  
   * **Optimize Script Detection**: Ensure scripts and cookies critical to verification are not easily flagged as trackers by common blockers.   
   * **User Notifications**: Implement on-site alerts that detect blocker interference and prompt users to disable blockers or allowlist the site.  
   * **Test with Privacy Browsers**: Conduct regular compatibility testing with privacy-focused browsers like DuckDuckGo to identify and resolve issues proactively.
