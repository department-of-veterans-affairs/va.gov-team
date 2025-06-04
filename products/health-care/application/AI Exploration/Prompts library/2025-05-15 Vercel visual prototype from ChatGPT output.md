# Tool usage Log - 5/15/2025

## v0/Vercel visual prototype from ChatGPT output

### AI Tool used
- ...

### Task Description
- [Output from ChatGPT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/AI%20Exploration/2025-5-15%20ChatGPT%20Create%20prompt%20for%20Vercel.md) to create visual prototype in v0/Vercel

### Prompt(s) used
- Now we want to connect this flow into form that allows the Veteran to apply for CHAMPVA for their dependents. That form is called the 10-10d and it is here: https://www.va.gov/find-forms/about-form-10-10d/. I have also provided you the paper form for reference. Based on the information we have, we want to seamlessly move the Veteran into an application for the 10-10d. The Veteran is first asked about their identity and which situation describes them. In this scenario, they are a Veteran applying for benefits for a spouse and dependent. The Veteran then fils out the signer information. As the Veteran is filling out the form, they are the signer. We pull their legal name from what they previously entered in the 10-10EZ. The Veteran is asked for the signer’s mailing address. Because the signer is the Veteran, we have this address from what they entered on the 10-10EZ. The Veteran fills out the signer contact information, which is their phone and email. This information has also been previously entered as part of the 10-10EZ. The following section is for sponsor information. A sponsor is the Veteran or active duty service member who is sponsoring the healthcare of the dependents. This information should have been pulled originally from the 10-10EZ as the Veteran, signer and sponsor are all the same person in this case. Then the Veteran is asked for sponsor SSN and VA file number. This should be their own social security number, and we assume at this point that it has not yet been entered and we do not pre-populate it. VA file number is not required and is left blank. The form asks for sponsor mailing address and sponsor phone number. As is the Veteran information, it was provided originally as part of the 10-10EZ. Now we move into applicant information. The applicant is the Veteran’s dependent applying for healthcare and is not the Veteran. In this case it is a spouse and a minor child. The form asks for name and birthday of the applicants enrolling in CHAMPVA. The Veteran will be asked to fill in this information for each dependent: Social Security Number, mailing address (which may be the same address as the Veteran, that was entered originally into the 10-10EZ), phone number, email address, sex at birth, relationship to sponsor. For the spouse, they are then asked for the date of marriage to the sponsor. For the minor child, the Veteran is asked to upload a copy of their birth certificate. The Veteran is asked if each dependent is eligible for Medicare. For the purposes of this scenario, the answer is no, neither dependent is eligible. The form asks if either dependent has additional insurance policies. For the purpose of this scenario, the answer is no. The Veteran then reviews the information entered into the 10-10d and submits the application. My goal is to make a workable prototype of this flow. First ask: Use this information to craft a prompt that I can use to ask AI to make a clickable prototype. Second ask: Note that we need to focus on a a transition point between the two forms, as the goal is to make this a seamless flow and right now, such a connection does not exist. Suggest an options to direct the user to fill out the second form, since we have already collected some of the necessary information. Think about how we can make this as painless for the Veteran as possible.


### Other inputs (links to design files, screenshots, other files and references)
- none

### Output Summary
- Vercel attempted to create a prototype from the prompt.

### Output details and resources (links if applicable)
- [Prototype attempt](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746708567334/89dc9187ed20ce833ffec9675c53a685a17cf120?wid=0-1747423986060)

### Success Status
- [Not very successful](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746708567334/89dc9187ed20ce833ffec9675c53a685a17cf120?wid=0-1747424077464)

### Evaluation Notes, if any
- None
