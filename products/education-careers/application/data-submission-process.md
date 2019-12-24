# Education Benefit Claims Data Submission Process
Education forms are received by the backend, validated, and saved as a `SavedClaim`.  
A scheduled job `CreateDailySpoolFiles` runs on a nightly basis.  
This job takes all the received claims and combines them into one large spool (text) file.  
This file is uploaded to the TIMS (SFTP) backend service.

The education forms handled this way are:
  * [22-1990 - APPLICATION FOR VA EDUCATION BENEFITS](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/application/1990)
  * [22-1990N - APPLICATION FOR VA EDUCATION BENEFITS UNDER THE NATIONAL CALL TO SERVICE (NCS) PROGRAM](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/application/1990n)
  * [22-1990E - APPLICATION FOR FAMILY MEMBER TO USE TRANSFERRED BENEFITS](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/application/1990e)
  * [22-1995 - REQUEST FOR CHANGE OF PROGRAM OR PLACE OF TRAINING FOR VETERANS, SERVICEPERSONS & MEMBERS OF THE SELECTED RESERVE](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/application/1995)
  * [22-5490 - DEPENDENTS APPLICATION FOR EDUCATION BENEFITS](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/application/5490)
  * [22-5495 - DEPENDENTS' REQUEST FOR CHANGE OF PROGRAM OR PLACE OF TRAINING](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/application/5495)
  * [22-0993 - REQUEST TO OPT-OUT OF INFORMATION SHARING WITH EDUCATIONAL INSTITUTIONS (Colmery Act Opt Out)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/opt-out)
    - User does not have to be logged in.
    - The [paper application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/opt-out/current-paper-opt-opt.pdf) only asks for name, date and signature.  Through our conversations with stakeholders, we decided we should ask for SSN or VA File Number also as name only is not enough to be sure we are positively identifying the correct person.
    - [vets-json-schema](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/src/schemas/22-0993/schema.js)
    - Example request JSON
    
        ```
        {
          "educationBenefitsClaim": {
            "claimantFullName": {
              "first": "Mark",
              "last": "Olson"
            },
            "claimantSocialSecurityNumber": "111223333",
            "privacyAgreementAccepted": true
          }
        }
        ```  




     - Example response JSON
        ```
        {
          "data": {
            "id": "3046",
            "type": "education_benefits_claims",
            "attributes": { 
              "form": "{\\"privacyAgreementAccepted\\":true,\\"veteranFullName\\":{\\"first\\":\\"Mark\\",\\"last\\":\\"Olson\\"},\\"preferredContactMethod\\":\\"mail\\"}",
              "regionalOffice": "Eastern Region\\nVA Regional Office\\nP.O. Box 4616\\nBuffalo, NY 14240-4616",
              "confirmationNumber":"V-EBC-3046"
            }
          }
        }
        ```
