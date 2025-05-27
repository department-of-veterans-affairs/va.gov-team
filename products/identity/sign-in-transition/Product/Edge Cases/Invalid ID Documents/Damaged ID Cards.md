# Identity Verification Issues for Veterans with Damaged ID Cards

**Edge Case:** [Damaged ID Cards](https://jira.devops.va.gov/browse/SITEC-33)  
**Created:** May 8, 2025  
**Last Updated:** May 12, 2025  
**Contributors:** Tristan Jung, Matthew Declercq

## Situation

Veterans frequently face challenges verifying their identity due to damaged or unreadable identification documents, including drivers licenses or state-issued IDs. Automated image capture technology often fails to read these documents, preventing Veterans from completing verification despite possessing valid IDs. This issue disproportionately affects older Veterans or those with limited access to modern devices, exacerbating barriers to accessing critical services.

## Findings

### ID.me Verification Process

* Many Veterans, particularly older individuals, struggle with ID.me’s photo capture workflow due to outdated devices (e.g., low-quality cameras), resulting in low-quality images that highlight document damage.  
* ID.me accepts VHIC as a primary document only during video call verification, requiring Veterans to select “verify by video call” and provide secondary documents (e.g., proof of address).  
* Temporary IDs are accepted during extended video calls if valid, but Veterans cannot use expired state licenses.  
* In-person verification at UPS Stores requires a readable ID. Veterans may use a VHIC as a primary document with two secondary documents, but unreadable IDs still pose challenges.  
* If verification fails, ID.me recommends using a different primary document.  
* Data on the percentage of damaged license verification attempts is currently unavailable.

### Login.gov Verification Process

* Login.gov’s automated document capture technology often fails with damaged or blurry IDs.  
* If automated capture fails, Login.gov recommends in-person verification at USPS locations, where staff may be able to read the document manually.  
* Login.gov does not accept temporary IDs, extension documents, or passports (though passport acceptance is under consideration).  
* Verification by mail is not an option, and Login.gov offers no further guidance beyond replacing the document or using a different one.

## Suggestions to Help Veterans

* **Improve Document Preparation**:  
  * Educate Veterans on cleaning ID cards and using a dark background during photo capture to improve readability.  
  * Develop and distribute collateral (e.g., guides or reminders) to inform Veterans about potential verification issues with damaged IDs and steps to prepare.  
* **Enhance Verification Options**:  
  * Encourage Veterans with blurry or hard-to-read (but not severely damaged) IDs to use ID.me’s video call verification, where a human can confirm the ID matches the Veteran’s identity.  
  * Direct Veterans with damaged IDs to replace their ID card before attempting verification, providing clear instructions on the replacement process.  
  * For Veterans with unreadable IDs, recommend ID.me’s video call option with a VHIC and secondary documents or in-person verification at USPS for Login.gov with an alternative document.  
* **Systemic Improvements**:  
  * Advocate for ID.me and Login.gov to adopt advanced document-processing software capable of reading blurry or damaged IDs or to streamline the photo capture process.

## References 

* [ID.me Rejected documents](https://help.id.me/hc/en-us/articles/360058791094-Rejected-documents)  
* [ID.me Document upload troubleshooting](https://help.id.me/hc/en-us/articles/10269916096919-Document-upload-troubleshooting)  
* [ID.me Document photo best practices](https://help.id.me/hc/en-us/articles/360051696334-Uploading-documents#document-photo-best-practices)  
* Spoke with Jessica Guglielmini from ID.me regarding the issue  
* [Login.gov How to take photos to verify your identity](https://www.login.gov/help/verify-your-identity/how-to-take-photos-to-verify-your-identity/)
