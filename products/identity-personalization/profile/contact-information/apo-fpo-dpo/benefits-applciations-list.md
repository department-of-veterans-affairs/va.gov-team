### The list of forms below,  serve as a central hub for understanding which benefit applications are impacted by address forms and pre-fill.


### Benefits Applications List 

| Appication Discipline| Form    | What does it use | What endpoint does it touch |
| -----------------------:| ---------------------------:| -------------------------:| -------------------------:
| Disability |[21-526EZ Disability Comp Benefits application](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/veteran-information)|This form uses the profile address and EVSS PCIU address. Profile address has priority but if it's blank then PCIU address will be used.|converted to pdf and submitted to the central mail server 
|Education |[22-0994  VETTEC program](https://staging.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994/introduction)|This form uses the profile address|uploaded as text files to an sftp server
|Education | [22-1995  Edith Nurse Rogers STEM scholarship](https://staging.va.gov/education/apply-for-education-benefits/application/1995/introduction)| This form uses the profile address|uploaded as text files to an sftp server
|Education |[22-1990  Application for VA Education Benefits](https://staging.va.gov/education/apply-for-education-benefits/application/1990/introduction)| This form uses the profile addrses|uploaded as text files to an sftp server
|Education| [22-1990E  Education Benefits Transfer application  ](https://staging.va.gov/education/apply-for-education-benefits/application/1990E/introduction)|This form uses the profile address|uploaded as text files to an sftp server
|Education |[22-1990N  Education Benefits for National Call to Service application](https://staging.va.gov/education/apply-for-education-benefits/application/1990N/introduction)|This form uses the profile address|uploaded as text files to an sftp server
|Education | [22-5495  Education Change of Program or Training application](https://staging.va.gov/education/apply-for-education-benefits/application/5495/introduction)|This form uses the profile address|uploaded as text files to an sftp server
| Education|[22-5490  Education Benefits Application](https://staging.va.gov/education/apply-for-education-benefits/application/5490/introduction)|This form uses the profile address|uploaded as text files to an sftp server
|Burials |[21P-530   Burial Benefits application](https://staging.va.gov/burials-and-memorials/application/530/introduction)|This form uses the profile address|converted to pdf and submitted to the central mail server
|Burials |[40-10007  Pre-need Burial benefits application](https://staging.va.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/burial-benefits)|This form uses the profile address|converted to pdf and submitted to the central mail server
|Pension |[21P-527EZ  Pension Benefits application](https://staging.va.gov/pension/application/527EZ/introduction)|This form uses the profile address|converted to pdf and submitted to the central mail server
|Health Care|[10-10EZ  Health Care application](https://staging.va.gov/health-care/apply/application/introduction)|This form uses the profile address|submits to vaww.esr.aac.va.gov/voa/voaSvc
|VA Records|[Download VA benefits letters](https://staging.va.gov/records/download-va-letters/letters/confirm-address)|This form uses the same component as the /profile mailing address editor, changes to this address will update to /profile and changes from /profile will update here.|This uses an EVSS API endpoint

