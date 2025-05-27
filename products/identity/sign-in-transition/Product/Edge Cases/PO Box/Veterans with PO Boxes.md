# Identity Verification Issues for Veterans with PO Boxes 
**Edge Case:** [Veterans with PO Boxes](https://jira.devops.va.gov/browse/SITEC-4)  
**Created:** 25 March 2025  
**Last Updated:** 13 May 2025\
**Contributors:** Matthew Declercq  

## Situation
Veterans, particularly those in regions such as Hawaii, American Samoa, Guam, and Alaska, are encountering significant challenges when attempting to verify their identity with Login.gov and ID.me to access VA services. A recurring issue is that many veterans in these areas use PO Box addresses on their identification documents, such as driver’s licenses, which do not align with the physical address records required by the verification systems. This mismatch frequently results in verification failures, preventing Veterans from completing the process. Additionally, in certain states like Alaska, state IDs are not usable for verification because these states do not share data with the American Association of Motor Vehicle Administrators (AAMVA), Login.gov’s source for ID validation. These issues are compounded by user confusion, privacy concerns, and inconsistent success with alternative verification methods, leading to delays and frustration in accessing critical VA services.

## Findings
1. **PO Box Address Mismatch**
   - Veterans in regions where PO Boxes are common on IDs (e.g., Hawaii, American Samoa, Guam) face repeated verification failures because Login.gov and ID.me cannot match PO Box addresses to physical address records in their systems.
   - Login.gov explicitly notes that PO Boxes often do not work for verification and suggests using ID.me instead. However, ID.me may still require alternative methods, such as video verification, which are not always effective or accessible.
   - *Example:* A Veteran with a Guam driver’s license and passport listing a PO Box was unable to verify with either service despite multiple attempts and correct mailing address information.

2. **State ID Restrictions**
   - In states including Alaska, Wisconsin, Delaware, and Nevada, state IDs cannot be used for Login.gov verification because these states do not allow AAMVA to access their ID data.
   - This forces Veterans in these states to rely on alternative IDs, such as passports, which may not be universally available.
   - *Example*: Alaska Coast Guard Veterans attending the TAPS class reported that even in-person verification at post offices failed due to this restriction.
  
3. **User Confusion and Process Issues**
   - Some Veterans experience confusion during the sign-in process, such as being prompted to create a new account instead of signing in with an existing one, potentially due to email mismatches or selecting the wrong option on the login page.
   - Multiple failed verification attempts can lead to temporary lockouts, further hindering access.
   - *Example*: A Veteran from Guam was asked to create a new Login.gov account despite having an existing one, and his Guam and Florida driver’s licenses were rejected.

4. **Inconsistent Success with Alternative Methods**
   - Alternative verification options, such as video calls or in-person verification at post offices, have not consistently resolved the issues, particularly in regions like Alaska where systemic barriers persist.
   - *Example*: Alaska Veterans reported that in-person verification at the Kodiak post office still resulted in system rejections of their driver’s licenses.

## Next Steps
To address these challenges and improve the identity verification process for Veterans, the following investigative steps are recommended:

1. **Data Analysis**
   - Collect and analyze data on verification failure rates, focusing on regions with prevalent PO Box usage (e.g., Hawaii, Guam, American Samoa) and states with AAMVA data-sharing restrictions (e.g., Alaska, Wisconsin, Delaware, Nevada). This will help quantify the extent of the issue and identify patterns.

3. **Collaboration with ID Providers**
   - Engage directly with Login.gov and ID.me to gain a deeper understanding of their verification algorithms and explore potential modifications to accommodate PO Box addresses or Veterans from states with ID restrictions.

4. **Education and Support**
   - Develop tailored guidelines and support resources (e.g., step-by-step instructions, FAQs) for Veterans in affected regions, clarifying the verification process and available options. Establish dedicated support channels to assist those facing persistent issues.

5. **Policy Advocacy**
   - For states that restrict AAMVA data sharing, explore policy discussions or agreements to enable Veterans to use their state IDs for verification, reducing reliance on alternative documents.

## Investigation Updates
**Date:** 1 April 2025  
**Contributors:** Matthew Declercq\
**Source:** Trevor Sinclair, GSA’s Partner Success Manager for the VA

### Summary of Investigation

While PO Boxes are not directly linked to a specific known issue, the lack of participation in the American Association of Motor Vehicle Administrators (AAMVA) database by Alaska, Wisconsin, Delaware, and Nevada affects Veterans using state-issued IDs (not driver’s licenses) in these states. This restriction prevents successful verification through Login.gov’s identity verification flow, which notifies users that their state ID cannot be verified. 

Although this limitation is unrelated to PO Box addresses, Veterans with driver’s licenses listing a PO Box may still face verification issues due to mismatches with authoritative databases requiring a physical address. No resolution timeline has been provided, and it remains unclear whether these states or Login.gov are actively addressing the state ID issue. As a result, Veterans in these scenarios are left without a clear workaround, highlighting the need for better guidance and alternative options.

### Suggestions to Help Veterans

- **Provide Clear Guidance on ID Options:** Inform Veterans that state-issued IDs from Alaska, Wisconsin, Delaware, and Nevada are not accepted by Login.gov. Encourage affected users to use ID.me if their only form of identification is a state-issued ID. Consider adding this information to [account creation support resources](https://www.va.gov/resources/creating-an-account-for-vagov/#:~:text=2025%2C%20keep%20reading.-,Choosing,-your%20account). 

- **Enhance Support Communication:** Distribute FAQs or host webinars to explain verification limitations for affected states and PO Box users, ensuring Veterans know their next steps after a failed verification attempt.



