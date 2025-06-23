# Tool usage Log - 5/19/25

## Craft a prompt for Vercel to create wireframes. Focus on transition points.

### AI Tool used
- ChatGPT

### Task Description
- Craft a prompt for Vercel to create wireframes. Focus on transition points.

### Prompt(s) used
- I am a UX designer and I am investigating a user journey that connects two healthcare forms. Here is the information that I have:  
     - I will use Veteran and user interchangeably, but they will mean the same thing in this scenario.  
     - User: My user is a Veteran of the United States military. They have a 100% disability rating, which means they qualify for healthcare through the VA. Additionally, the Veteran has dependents who might qualify for CHAMPVA. Here is the site with that information: https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/.  
     - This Veteran is filling out the 10-10EZ form. Here is a link to the staging version: https://staging.va.gov/health-care/apply-for-health-care-form-10-10ez/introduction. I have also uploaded the paper version for reference.  
     - The 10-10EZ has many pathways based on the applicant’s background. In this scenario, the user has an account on VA.gov and their identity has been verified, so we know they have a 100% disability rating. Because of this, they will fill out a shorter form, which will not include the section about dependents or finances. We tell them this from the beginning with an alert on the page. On this shorter form, the system will check their disability rating so we know that they have 100%. This Veteran will then enter their personal information, including their place of birth (city, state), their mother’s maiden name, their sex (which might be pre-filled if we know it based upon our database), their mailing address, and their home address (if it is different).  
     - The Veteran is then asked a question if they want to fill out more information about their military service, especially around potential toxic exposure. This section in optional. For the purposes of our scenario, the answer is no, they do not want to fill it out.  
     - The user moves onto the insurance information, which asks if they are eligible for Medicaid. For the purposes of our scenario, the answer is no, so they do not answer any additional questions. The Veteran does not have any additional insurance policies to add. They select their preferred VA facility, based upon their location, but do not want to be contacted for a first appointment. The Veteran reviews their information, the military service section (which does not have information in it, as they declined to answer), and their insurance information. If everything looks good, the Veteran submits.  
     - Now we want to connect this flow into form that allows the Veteran to apply for CHAMPVA for their dependents. That form is called the 10-10d and it is here: https://www.va.gov/find-forms/about-form-10-10d/. I have also provided you the paper form for reference. Based on the information we have, we want to seamlessly move the Veteran into an application for the 10-10d.  
     - The Veteran is first asked about their identity and which situation describes them. In this scenario, they are a Veteran applying for benefits for a spouse and dependent. The Veteran then fils out the signer information. As the Veteran is filling out the form, they are the signer. We pull their legal name from what they previously entered in the 10-10EZ. The Veteran is asked for the signer’s mailing address. Because the signer is the Veteran, we have this address from what they entered on the 10-10EZ. The Veteran fills out the signer contact information, which is their phone and email. This information has also been previously entered as part of the 10-10EZ.  
     - The following section is for sponsor information. A sponsor is the Veteran or active duty service member who is sponsoring the healthcare of the dependents. This information should have been pulled originally from the 10-10EZ as the Veteran, signer and sponsor are all the same person in this case. Then the Veteran is asked for sponsor SSN and VA file number. This should be their own social security number, and we assume at this point that it has not yet been entered and we do not pre-populate it. VA file number is not required and is left blank. The form asks for sponsor mailing address and sponsor phone number. As is the Veteran information, it was provided originally as part of the 10-10EZ.  
     - Now we move into applicant information. The applicant is the Veteran’s dependent applying for healthcare and is not the Veteran. In this case it is a spouse and a minor child. The form asks for name and birthday of the applicants enrolling in CHAMPVA. The Veteran will be asked to fill in this information for each dependent: Social Security Number, mailing address (which may be the same address as the Veteran, that was entered originally into the 10-10EZ), phone number, email address, sex at birth, relationship to sponsor. For the spouse, they are then asked for the date of marriage to the sponsor. For the minor child, the Veteran is asked to upload a copy of their birth certificate. The Veteran is asked if each dependent is eligible for Medicare. For the purposes of this scenario, the answer is no, neither dependent is eligible. The form asks if either dependent has additional insurance policies. For the purpose of this scenario, the answer is no.  
     - The Veteran then reviews the information entered into the 10-10d and submits the application.  
- My goal is to make a set of basic wireframes of this flow. First ask: Use this information to craft a prompt that I can use to ask Vercel to make a set of wireframes. Second ask: Note that we need to focus on a a transition point between the two forms, as the goal is to make this a seamless flow and right now, such a connection does not exist. Suggest an options to direct the user to fill out the second form, since we have already collected some of the necessary information. Think about how we can make this as painless for the Veteran as possible.  
- Is there anything here you need clarification on? Ask me questions in order to clarify this situation to make sure you understand it.


### Other inputs (links to design files, screenshots, other files and references)
- https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/
- https://staging.va.gov/health-care/apply-for-health-care-form-10-10ez/introduction
- https://www.va.gov/find-forms/about-form-10-10d/

### Output Summary
- ChatGPT expresses appreciation for the detailed breakdown and requests clarification on several key points before developing a Vercel-compatible wireframe. Further prompting resulted in a Vercel prompt.

### Output details and resources (links if applicable)
- [Prompt](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746708567334/89dc9187ed20ce833ffec9675c53a685a17cf120?wid=1-1747678581200)
### Success Status
- none mentioned

### Evaluation Notes, if any
- none
