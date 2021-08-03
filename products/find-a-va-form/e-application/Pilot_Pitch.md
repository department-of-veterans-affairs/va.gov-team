
## DISCOVERY SPRINT BRIEF

### Initiative Name
Find a Form - e-Application/Digital Signature Option

### Problem Statement / How Might We statements
How might we make it easier for Veterans and their caretakers to apply for a wider range of benefits without the complicatons of using a downloadable PDF form?

### What Sprint Teams Are Associated with this Discovery? 
* Decision Tools (Find a Form)

### Background 

The use of paper/PDF forms by Veterans and their beneficiaries for determining eligibility, applying for and managing changes related to VA benefits is increasingly out-of-step with key Federal Government modernization initiatitives and mandates, including:

- The 21st Century Integrated Digital Experience Act, otherwise known as 21st Century IDEA, was signed into law in December 2018.  The Act requires all executive branch agencies to:

  - digitize services and forms,
  - **accelerate use of e-signatures**, and
  - improve customer experience

- The Social Security Number Fraud Prevention Act of 2017 which prohibits the inclusion of SSNs on any document sent by mail unless the head of the agency determines that the inclusion of the SSN is necessary. For VA, any form that has a field for a SSN, must be reviewed and a determination must be made as to whether that field can be removed, reduced to only the last four digits, or remain as-is. If the full SSN must remain, the program office that owns that form must submit an acceptable justification. This portion of the Act must be implemented by 2023.




Docusign has an Enterprise License Agreement with VA to digitize many of the VA's paper intensive processes such as consent and privacy docs.  VA has the opportunity to test the desirability and viability of electronic signature transaction -- which has become common in the consumer sector (e.g. Home Loans, legal agreements, etc.) -- using the new modernized Find a Form tool as the test bed.

More details about the Docusign Federal Government initiative here:

https://www.docusign.com/blog/growing-federal-government-acceptance-electronic-signatures


Electronic signatures in the coronavirus (COVID-19) era

https://www.nixonpeabody.com/en/ideas/articles/2020/05/12/electronic-signatures-in-the-coronavirus-covid-19-era

Docusign Overview of 21st Century IDEA Act & Readiness info

https://www.docusign.com/21st-century-idea-act

Docusign Agreeable Government Mandate whitepaper

https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/e-application/IDEA_Dept_Whitepaper.pdf



**Benefits of e-Signature solution**

An e-Signature solution should provide the following benefits:

- Legally binding signature
- Can pre-fill users information with authentication
- Can support multiple signatures (e.g. Veteran and Spouse, Dependents, Attorney) 
- Application can not be submitted without completion of Required fields 
- Attachments can be included for supporting documents
- Can automatically add up loan amounts and use of funds amounts to take the burden off the applicant
- Allows user to save and return later to complete process
- Is Secure, encrypted in transit and in rest
- Is accessible to those using screen readers
- Requires no special plug-in or helper application
- Success metrics would include:
  - Evidence of user preference over standard digital download and email/fax
  - Reduced "error rate" in submitted documents
  - Reduction in labor costs associated with manually keying in form data
  - Faster speed to outcomes


**

### Discovery Sprint Roles

* Product Lead: John Hashimoto
* Product Manager: Marci McGuire
* Discovery Sprint Lead: TBD
* Engineer: Zach Morel
* Designer: Cassandra Allen
* Researcher: Cindy Merrill
* Accessibility: Josh Kim, Angela Fowler
* Other people from the Sprint Team:
* SME: Janel Keyes

### Stakeholders
* VA business owner: Janel Keyes
* Stakeholders who will be involved or interviewed: TBD.  Possiblilities:
    - OMB Personnel to better understand the form creation/approval/modification process
    - VA Forms leadership to better understand the end-to-end workflow from form creation to the processing of submitted forms
    - VA Forms Managers to better understand their workflow in adding new or updated forms to the VA system
    - Other technical teams that complete VA forms in the background as part of their web applications
    - VA personnel who process forms that have been emailed, mailed, or faxed in
        - Centralized Mail: https://eauth.va.gov/accessva/about/dmhs
        - VA Evidence Intake Center: https://cck-law.com/blog/what-is-the-va-evidence-intake-center/
    - VA personnel who make decisions based on the information provided in forms
    - People who manage the database(s) where the form contents are ultimately stored
    - Veterans so that we can observe their experience with using PDF forms


## DISCOVERY PLANNING

### Project Details

* What do we know?
   - There are currently ~1500 VA Forms on the VA Intranet, ~400 PDF forms available on Find a VA Form, ~40 of which have a web-based alternative
   - It would be extremely time consuming and labor intensive to build web-based interfaces for every form
   - Several of the current web-based alternatives ultimately insert user-entered data into a PDF form in the background
   - The VA has been incorporating digital signature into forms for several years and more recently has been utilizing dynamic XFA-based digital signature fields as a result of updating to Adobe's current PDF creation tool
   - The VA plans to continue incorporating digital signatures into forms.
   - According to Adobe, PDF forms that utilize dynamic XFA are incompatable with modern web browsers.  Further research indicates this incompatibility occurred because XFA is  was dropped from the ISO's PDF 2.0 standardard in 2017.
   - The addition of dynamic XFA to an existing VA form can cause web-based form-filling applications to unexpectedly stop functioning.  As a workaround, some teams supporting the VA have opted to create a "flattened" copy of the PDF form stored outside the VA database.  Having multiple copies of the same form introduces the risk for out-of-sync versions of forms.
    - As of June 2021, users who downloaded PDF forms from Find a VA Form used the following browsers and operating systems:
        - Chrome on Windows: 36.97%
        - Edge on Windows: 26.31%
        - Internet Explorer on Windows: 9.55%
        - Safari on Macintosh: 8.11%
        - Safari on iOS: 6.05%
        - Chrome on Android: 4.53%
        - Chrome on Macintosh: 3.04%
        - Chrome on Chrome OS: 1.53%
        - Chrome on iOS: 0.74% 
    - The behavior of dynamic XFA forms varies depending on the browser and user's system settings and the manner in which the PDF is downloaded and opened.  The form may display a "Please wait" error message, or it may open in the browser, and unbeknownst to the user, fail to render the digital signature fields or other dynamic XFA fields.
    - The only completely reliable way to fill out forms containing dynamic XFA is to save them locally and complete them in Adobe Acrobat Reader
    - There is an attribute currently used on Find a VA Form that will instruct the web browser to **download** a PDF form rather than attempt to open it within the browser window
    - The above-mentioned attribute works only if the form is hosted on the same domain as the web page containing the link.  Some PDF forms available on Find a VA Form are hosted on a VA subdomain (ex vba.va.gov), which prevents the use of the download attribute. In those cases, if the user does not have Adobe Acrobat Reader set as their default for opening PDF files, the file may open in the browser, another PDF reader, or may display an error message in the browser.
    - PDF forms present challenges to those who rely on screen reader technology including users who are blind or have low vision
    - Multi-step instructons -- download Adobe Acrobat Reader, download the the PDF form, locate the form it on the user's local device, and then open -- may confuse, overwhelm frustrate older users and those with mental health conditions, cognitive issues or tramautic brain injury
* What don't we know?
    - If a user has Adobe Acrobat Reader installed, or if it is set as their default PDF reader
    - How many users actually succeed in completing and sending in a PDF form after having clicked a PDF link or downloaded a PDF
    - How many users who download and open a PDF in their browser vs. those who download and save it locally
    - What pecent of users are willing or able to follow multi-step instructions for downloading a PDF (and Adobe Acrobat Reader if they don't already have it)
* Are any of the above assumptions that need to be verified?
     - Yes
* How are we going to find out answers? (There are tons of different methods to choose from depending on your project goals, resources, and time constraints. Checkout the methods and templates provided in the [Discovery Toolkit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/how-to-run-discovery-sprint.md) and consult the [Research Team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/research).)
     - We plan to conduct a research study with users wherein they will be asked to download specific PDF forms selected due to their varying behavior in different browsers
     - We will inquire about the feasibility of using analytics to distinguish between those who downloaded a PDF into their browser vs. on their device
* What kinds of users are likely to benefit from solving this problem (bonus points for our personas)?
    - All users should benefit in some way from improved ease-of-use and form behavior predictability, but it should be particularly beneficial to those who:
        - Do not use the Internet often, or have no/limited familiarity with PDFs
        - Have never downloaded and installed a helper application like Adobe Acrobat Reader
        - Only have access to a work or public computer that does not allow them to download files or install Adobe Acrobat Reader
        - Have difficulty locating a file once they have downloaded to their local device or computer
        - Use a screen reader due to low vision or blindness
        - Have suffered a traumatic brain injury or have other mental health conditions affecting their congnitive abilities
- Resources related to different ways DocuSign is able to help the Government and Public Sector: 
  - https://www.docusign.com/solutions/industries/government
  - https://www.docusign.com/solutions/industries/government/federal
  - https://www.docusign.com/sites/default/files/docusign-for-federal-government_industry-brief.pdf
  - https://support.docusign.com/en/articles/FedRamp-FAQ

* Who do we needs to talk to (stakeholders, Veterans, MHV Coordinators, etc.)? (Try to get a wide variety of people to get a range of perspectives – both higher ups and people on the ground doing the work. Meet with people in person whenever possible.)
    - OMB Personnel to better understand the overall form creation/approval/modification process
    - VA Forms leadership to better understand the end-to-end workflow from form design to the processing of submitted forms
    - VA Forms Managers to better understand their workflow in adding new or updated forms to the VA system
    - Other technical teams that fill out VA forms in the background as part of their web applications
    - VA personnel who key/OCR paper forms that have been emailed, mailed, or faxed in (Centralized Mail)?
    - VA personnel who make decisions based on the information provided in forms
    - People who manage the database(s) where the form contents are ultimately stored
    - Veterans so that we can observe their experience with using PDF forms
* What secondary research should we do (google, facebook, internal documents)?
* Are there any intentional project constraints (things we're intentionally deeming out of scope)?
* Are there any challenges or risks that will make this discovery sprint hard to complete (tricky politics, technology complications, etc.)?


### Timeline
See also: [sample discovery sprint schedule](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/sample-discovery-sprint-schedule.md).

* Are there any hard and fast deadlines for completing the discovery work?
* When will the following take place?
  * Discovery Prep:
  * Discovery (ideally 1-2 weeks):
  * User Research:
  * Complete & Readout:

## Upon Completion
_To be filled out by the sprint team._

* Lessons learned (about the discovery process)
* Links to key documents (discovery readout, charter, etc.)

# Next Steps
- Talk with Matt & Sabrina - next week or so
- Talk to Janel & possibly Yvette?
   - Possible executive champion
- Meet again with Docusign after that conversation
- What other insights do we need to flesh out?
  - Whether we should do it
  - If we do, HOW do we do it?
- What do the costs look like? 
- Cost/Benefit analysis
  - Hard costs
  - Soft costs
  - Benefits to Veterans & caregivers
  - Estimated cost per page
  - Janel's BA can figure that out
