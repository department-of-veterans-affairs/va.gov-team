
## DISCOVERY SPRINT BRIEF

https://www.nixonpeabody.com/en/ideas/articles/2020/05/12/electronic-signatures-in-the-coronavirus-covid-19-era

### Initiative Name
Find a Form - e-Application/Digital Signature Option

### Problem Statement / How Might We statements
How might we make it easier for Veterans and their caretakers to apply for a wider range of benefits without the complicatons of using a download and print paper form?

### What Sprint Teams Are Associated with this Discovery? 
* Decision Tools (Find a Form)

### Background 

More than 20 years ago, the landmark Electronic Signatures in Global and National Commerce (ESIGN) Act was passed in the U.S. to address the growing need for a consistent standard for electronic signatures. While this legislation certainly paved the way for the use of electronic signatures in government, it wasn’t until the COVID-19 pandemic when agencies were truly forced to use this innovation for meeting citizen needs during a challenging time. 

Docusign has an Enterprise License Agreement with VA to digitize many of the VA's paper intensive processes such as consent and privacy docs.  VA has the opportunity to test the desirability and viability of electronic signature transaction -- which has become common in the consumer sector (e.g. Home Loans, legal agreements, etc.) -- using the new modernized Find a Form tool as the test bed.


More details about the Docusign Federal Government initiative here:

https://www.docusign.com/blog/growing-federal-government-acceptance-electronic-signatures

Trump signs IDEA Act into Law: President Trump signed the 21st Century IDEA Act into law, requiring all Federal agencies to make sure their websites are user-friendly and support digital forms
https://www.meritalk.com/articles/president-trump-signs-21st-century-idea-act-into-law/

Electronic signatures in the coronavirus (COVID-19) era
https://www.nixonpeabody.com/en/ideas/articles/2020/05/12/electronic-signatures-in-the-coronavirus-covid-19-era

**Benefits of e-Signature solution

An e-Signature solution should provide the following benefits:

- Legally binding signature
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
* Stakeholders who will be involved or interviewed: TBD


## DISCOVERY PLANNING

### Project Details

* What do we know?
   - There are currently over 400 forms available on Find a VA Form, and only about 40 that have a web-based fillable form option
   - It would be extremely time consuming and labor intenstive to manually build an HTML-based web form for all of the remaining forms
   - The VA has been incorporating digital signature into forms for several years and plans to continue to do so.
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
    - Some VA PDF forms containing **dynamic XFA** (typically in a digital signature field) are incompatable with modern browsers according to Adobe
    - The behavior of dynamic XFA forms varies depending on the browser and user's system settings and the manner in which they download and open the PDF.  The form may display a "Please wait" error message, or it may open in the browser, and unbeknownst to the user, fail to render the digital signature fields or other dynamic XFA fields.
    - The only reliable way for forms with dynamic XFA to be used is to save them locally and complete them in Adobe Acrobat Reader.
    - There is an attribute currently used on Find a VA Form that will instruct a browser to **download** a PDF form rather than attempt to open it within the browser.
    - Some PDF forms available on Find a VA Form are hosted on a VA subdomain (ex vba.va.gov), which prevents the use of the download attribute described above. In those cases, if the user does not have Adobe Acrobat Reader set as their default for opening PDF files, the file could open in the browser, could open in another PDF reader, or could display an error message in the browser.
    - PDF forms are difficult for screen reader users (those who are blind or have poor vision) to navigate
    - Instructions to download Adobe Acrobat Reader, download the the PDF form, locate the form it on the user's local device, and then open it may confuse or overwhelm older users and those with mental health conditions, cognitive issues or tramautic brain injury.  
* What don't we know?
    - We have no way of knowing at runtime if a user has Adobe Acrobat Reader installed, or if it isset as their default PDF reader.
    - We don't know how many users are actually able to successfully complete and send in a PDF form after having clicked a PDF link.
* Are any of the above assumptions that need to be verified?
     - Yes
* How are we going to find out answers? (There are tons of different methods to choose from depending on your project goals, resources, and time constraints. Checkout the methods and templates provided in the [Discovery Toolkit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/how-to-run-discovery-sprint.md) and consult the [Research Team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/research).)
     - We plan to conduct a research study with users wherein they will be asked to download specific PDF forms selected due to their varying behavior in different browsers.
* What kinds of users are likely to benefit from solving this problem (bonus points for our personas)?
* Who do we need to talk to (stakeholders, Veterans, MHV Coordinators, etc.)? (Try to get a wide variety of people to get a range of perspectives – both higher ups and people on the ground doing the work. Meet with people in person whenever possible.)
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
