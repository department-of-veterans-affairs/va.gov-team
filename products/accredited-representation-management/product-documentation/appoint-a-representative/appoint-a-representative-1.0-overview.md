# Appoint a Representative 1.0 (MVP) Overview

Developed by the Accredited Representation Management team, the Appoint a Representative will support Veterans in a digital form fill of the 21-22/21-22a which is required for appointing a representative.  This will be paired with the [Representative Status Widget](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/mvp-representative-status-widget.md) to provide Veterans with insight into any existing representation, before they apply for new representation.

The MVP will include desktop & mobile experiences and the pathway is `/src/applications/representative-appoint`

⚠️ Content below may be updated based on Midpoint Review feedback and Research findings, development is scheduled to begin in March 2024

1. **Chapter 1**: Veteran Personal Information
   1. Unauth: Enter Veteran Name and Date of Birth
   2. Unauth: Enter Veteran Identification Information
   3. Auth: Review Veteran Personal information on file (cannot update on VA.gov, need to call to update)
2. **Chapter 2**: Veteran Contact and Insurance Information
   1. Unauth: Enter Veteran Contact Information (phone and email)
   2. Unauth: Enter Veteran Mailing Address
   3. Auth: Review (w option to Edit) Veteran Contact Information -- the `Edit` view
   4. Auth: Edit Veteran Contact Information with option to save (i.e. Enter) changes -- the `Enter` view
3. **Chapter 3**: Claimant Information (pages are the same for both unauth/auth)
   1. Claimant Ask (Are you the Veteran who the claim is being submitted for?)
   2. [claimant = no] Claimant Personal Information
   3. [claimant = no] Claimant Contact Information
   4. [claimant = no] Claimant Mailing Address
4. **Chapter 4**: Authorization for Record Access (pages are the same for both unauth/auth)
   1. Authorization for Representative’s Access to Records Protected by Section….
5. **Chapter 5**: Authorization for Address Change (pages are the same for both unauth/auth)
   1. Authorization to Change Claimant’s Address
6. **Chapter 6**: Review and Complete (pages are the same for both unauth/auth)
   1. Sections are collapsed
   2. Sections are expanded with option to edit
   3. Sections are expanded with editing and option to save
7. **Download page (pages are the same for both unauth/auth)**
   1. Ensure download is accessible (generated pdf is likely not accessible, consider providing access to an html-based version) 
9. Email notification to Veterans ([partner with VA Notify](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify#what-we-are))
   1. The email would include next step for printing, signing, and uploading their form on VA.gov
   2. Include an option to re-download the completd form? Consider how to reduce the undesired outcome of duplicate submissions, e.g. the Veteran submits the saved pdf on QuickSubmit on AccessVA


## Future Iteration

1. Digital submission of 21-22 (feature flag?)
    1. Authenticated users only
1. Digital submission of 21-22a (feature flag?)
    1. Determine if we can support digital submission for attorneys and claim agents who often require fee agreements before accepting
    2. Identify how the insurance field impacts Power of Attorney
    3. Authenticated users only
 1. Notifications (partner with VA Notify)
    1. Representative approved request
    1. Representative rejected request
1. Manage requests (can the vet cancel a request)
1. Manage rep (can the vet cancel an existing rep)
2. Satisfaction survey to assess the user perceptions of our product experience
3. Consider how we might support situations where multiple representatives are assigned (Claim PoA vs. Claimant PoA)
4. Consider showing an error state if the user is [deceased, incompetent, or has a fiduciary appointed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)
5. Explore if there is an acceptable [esignature option for unauthorized users](https://design.va.gov/patterns/ask-users-for/signature)
6. Explore how to assist the homeless population with requesting representation, as they often do not have an address, phone number and/or access to internet to check email
7. Explore an option for a quick link or QR code, where a representative's information is quickly added to the 21-22/21-22a 

