# Research | On-line Apps | Candidates for Translation #34444

### Initial discovery of commonly downloaded spanish form pdfs that may have an online counterpart

Below are the most frequently downloaded PDFs by spanish audience. We need to see if there is an existing on-line tool for any of these 

- VA Form 21-4138: Statement in Support of Claim (no - just upload to support disability claim)
- VA Form 10-8678: Application for Annual Clothing Allowance (no on-line tool)
- VA Form 20-0995: Decision Review Request: Supplemental Claim (no on-line tool)
- VA Form 10-7959A: CHAMPVA Claim Form (no on-line tool)
- VA Form 10-7959f-1: Foreign Medical Program (FMP) Registration Form (no on-line tool)
- VA Form 21-22: Appointment of Veterans Service Organization as Claimant’s Representative (no on-line tool)
- VA Form 10-10d: Application for CHAMPVA Benefits (no on-line tool...but there is a spanish pdf)
- VA Form 21-526EZ: Application for Disability Compensation and Related Compensation Benefits (**yes** on-line tool for auth users)
- VA Form 21-0781: Statement in Support of Claim for Service Connection for PTSD (**yes** on-line tool)
- VA Form 10-5345: Request for and Authorization to Release Health Information (no on-line tool)

Of the two forms that are shown as having an online version of them, the 21-526EZ is actually the form that is filled out for both forms (21-0781 & 21-526EZ) https://www.va.gov/disability/how-to-file-claim

### Overview of 21-526EZ Form Structure

Codebase root: https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/disability-benefits

The 21-526EZ is probably one of the most complex series of forms that is available online, and **would not make a good candidate** for a translated MVP form application. 

Codebase includes: 

-  ≈ 20 custom components 
-  6 custom UI containers 
-  72 custom content components
-  a very complex form configuration setup
-  document upload/submission functionality

### Conclusion

For these reasons, I don't believe that the 21-526EZ form would make a good prospective MVP form application for translation and a simpler form can be chosen. 

In looking at the other forms, we had previously discussed translating the vre/28-1900 for that lives at https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/start. The reasons for looking to translate this form would be that it is relatively simple and will give us a chance to dive into the technical needs of translating various components within the existing forms system. We could also evaluate more forms for determining if a different form would be more appropriate for Spanish translation.
