# Appoint a Representative MVP

Developed by the Accredited Representation Management team, the Appoint a Representative will support Veterans in a digital form fill of the 21-22/21-22a which is required for appointing a representative.  This will be paired with the [Representative Status Widget](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/mvp-representative-status-widget.md) to provide Veterans with insight into any existing representation, before they apply for new representation.

The MVP will include desktop & mobile experiences and the pathway is `/src/applications/representative-appoint`

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

## Post-MVP

1. Submission of 21-22/21-22a
    1. Requires signatures
    2. Investigate/address signature errors
    3. Determine if we can support digital submission for attorneys and claim agents who often require fee agreements before accepting
    4. Identify how the insurance field impacts Power of Attorney 
1. Notifications
    1. Representative approved request
    1. Representative rejected request
1. Manage requests (can the vet cancel a request)
1. Manage rep (can the vet cancel an existing rep)
2. Satisfaction survey to assess the user perceptions of our product experience
3. Consider how we might support situations where multiple representatives are assigned (Claim PoA vs. Claimant PoA)
