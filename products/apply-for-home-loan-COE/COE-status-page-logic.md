# COE Status Page Logic | January 2025

This documentation is an explanation of how the [VA.gov COE status page](https://www.va.gov/housing-assistance/home-loans/check-coe-status/your-coe/) works depending on certain COE data coming from the LGY API. 

## Questions from stakeholders on 12/22:

- Does it show the most recent COE? Does it show multiple versions?

  - It only shows the active COE if there is one. A person can only have one active COE.

- Does it show lender submitted COEs?

  - Yes, source does not matter.

- Does it show closed COEs? What’s the behavior?

  - No, only active COEs are shown if there is one.

- Does it show locked COEs? What’s the behavior?

  - No, only active COEs are shown if there is one.

- Test behavior of automatic COEs, test behavior for manual COE.

  - We tested on web and mobile and they both surface as expected - COEs are visible regardless if it is automatic or not.

- What about a person who has a valid COE, then another one which is closed, does it show the valid one?

  - It only shows the active COE if there is one. A person can only have one active COE.

- Mobile - what is the logic for the COE to show up in the letters list?

  - It only shows up for users who come back as ELIGIBLE? If they come back as somemthing else, it doesn't show up at all.

- Mobile - what is the logic for the COE to actually display if it is selected in the letters list?

  - Same as web - if there is an application, it is not an automatic COE and still displays. If there isn'at an application, it is an automatic COE and it displays with the automatic COE alert above it.

## [LGY Swagger Documentation](https://services.lgy.va.gov/eligibility-manager/swagger-ui/index.html?configUrl=/eligibility-manager/v3/api-docs/swagger-config)

## Overview of the calls [VA.gov](http://va.gov) makes to LGY \[[link to flow chart](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/apply-for-home-loan-COE/engineering/coe_status.md)]:

- VA.gov calls both `/eligibility/determination` and `/eligibility/application` every time the status page is visited

- A subsequent call is made to `/eligibility/documents` only when `/eligibility/determination` comes back as ELIGIBLE + 200 application response, NOT ELIGIBLE, or PENDING.

- Calls to `/eligibility/documents/coe/file` only happen when a user clicks the COE download links. Those download links only populate for ELIGIBLE users.

## [Simplified Mural of this process](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1768579899578/1291fedc1151d896668d5e432db8305d3d58deb7?sender=u948e39813cb5600d37268438)

## [Test Users for each of the status page scenarios](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/apply-for-home-loan-COE/Test%20and%20Launch/CoE%20Staging%20Test%20User%20Information.md#all-login-information)

## A user is returned as ELIGIBLE from `/eligibility/determination`

- If the determination comes back as ELIGIBLE, and a 404 response is returned from `/eligibility/application`, this means that no COE application was found and an automatic COE is created. The user will see this page - a green alert with the reference number and a download link below.

<img width="803" height="785" alt="Screenshot 2026-01-07 at 4 24 13 PM" src="https://github.com/user-attachments/assets/72c1c213-5bee-4cba-90a1-dd4fbd3de078" />

- If the determination comes back as ELIGIBLE, and a 200 response is returned from `/eligibility/application`, this means that a COE application was found and an active COE exists (not created automatically). The user will see this page - no green alert but a link to download their COE.

<img width="773" height="667" alt="Screenshot 2026-01-07 at 4 25 48 PM" src="https://github.com/user-attachments/assets/5ef2c6a2-eb77-4d21-8ced-d83f07866d05" />

NOTE: A subsequent call is made to `/eligibility/documents` and populates the “You have letters about your COE request” section if there are documents returned. If no documents are returned, that section does not populate.

NOTE: Nick Fisseler confirmed that LGY only returns active COEs for download - Veterans can only have one single active COE at a time. The source does not matter - could be a lender-submitted COE or a Veteran-submitted COE. Closed and Locked COEs will not be returned because they are not active.

## A user is returned as UNABLE\_TO\_DETERMINE\_AUTOMATICALLY from `/eligibility/determination`

- If LGY returns this value, a user will see this page - a blue alert telling them we don’t have a COE on file and they need to submit an application. 

<img width="560" height="759" alt="Screenshot 2026-01-07 at 4 27 08 PM" src="https://github.com/user-attachments/assets/ea6fa231-6b99-4699-aab3-aedbee094948" />

## A user is returned as NOT\_ELIGIBLE from `/eligibility/determination`

- If LGY returns this value, a user will see this page - a blue alert telling them they were denied.

<img width="856" height="609" alt="Screenshot 2026-01-07 at 3 59 51 PM" src="https://github.com/user-attachments/assets/abb3f1b2-6f1f-4447-b9a4-ba7a90c8381f" />

NOTE: A subsequent call is made to `/eligibility/documents` and populates the “You have letters about your COE request” section if there are documents returned. If no documents are returned, that section does not populate.

## A user is returned as PENDING from `/eligibility/determination`

- If the determination comes back as PENDING, and a SUBMITTED or 404 response is returned from `/eligibility/application`, a user will see this page - yellow alert telling them we’re reviewing their request.

<img width="639" height="783" alt="Screenshot 2026-01-07 at 4 01 47 PM" src="https://github.com/user-attachments/assets/45e45fc8-6198-4f27-8ab5-2a8dd89d7d5e" />

- If the determination comes back as PENDING, and a RETURNED response is returned from `/eligibility/application`, a user will see this page - a yellow alert telling them we need more information and a place to upload documents.

<img width="523" height="764" alt="Screenshot 2026-01-07 at 4 28 38 PM" src="https://github.com/user-attachments/assets/7c1aadf5-cc58-47ff-bd35-8baecdd6dbd3" />

NOTE: A subsequent call is made to `/eligibility/documents` and populates the “You have letters about your COE request” section if there are documents returned. If no documents are returned, that section does not populate.
