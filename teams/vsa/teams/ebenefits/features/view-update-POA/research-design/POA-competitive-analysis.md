# eBenefits Representative for VA Claims (POA) comparative analysis

**VSA eBenefits Team | March 2020**

`Nick Wygonik, UI/UX Designer`

---

## Problem
#### eBenefits Representative for VA Claims or Power of Attorney feature

Claims Representative or Power of Attorney (POA) feature enables Veterans to submit Form 21-22 and 21-22a online. These forms allow the Veteran to allocate legal representation regarding a disputed VA claim to a Veteran Service Organization (VSO) (21-22) or legal counsel (22-22a). The application also provides the Veteran with a list of officially recognized organizations and lawyers that can represent the Veteran. 

#### VSO and Attorneys POA forms
**VSO** | Most VSO websites provide informational articles and FAQ pages about the VA's Power of Attorney process.  Within these webpages, the VSO provides links to VA.gov or eBenefits, directing users to the 21-22 or 21-22a forms. There are several other forms and links directing the user to more information provided by VA.

**Attorneys** | There are several examples of law firms that provide their own Power of Attorney forms as PDFs. Standard inputs to the form are the applicant's legal name, today's date, applicant's address, and usually a signed statement agreeing to allow the attorney the right to represent the applicant.  

## User
#### eBenefits 
The key users of the Representative for VA or Power of Attorney are Veterans, who allocate POA, and VSOs and lawyers, who are empowered to represent the Veteran in a disputing a VA claim.

## Solution
### Current eBenefits Representative for VA Claims process
The eBenefits Representative for VA Claims feature allows Veterans to search for [Veteran Service Organizations]( https://www.va.gov/vso/VSO-Directory.pdf) (e.g. The American Legion) or accredited VA attorneys to represent Veterans through their claims processes.  The fundamental problem solved by the Power of Attorney is to provide the mans by whaich a Veteran can designate either an organization or lawyer to “initiate the Veteran’s claim to preserve an effective start date, gather required records and evidence on your behalf, and review your application prior to submission.” 

A Veteran seeking to have a representative manage their claim must first sign in to eBenefits using the DSLogon and click the “Representative” found in the “Dashboard” left aside. 

- Click on Representative
- Click on Apply for a Representative

#### Completing the form
Clicking “apply” begins the application. The following steps must be completed:

#### Personal Information steps
First, the Veteran confirms, updates, or edits the following personal information.
 - Privacy Act
    - Checkbox and save & continue button
 - VA File Number
    - SSN and save & continue button
 - Personal information
     - Name
     - Gender
     - DOB
     - SSN
     - VA file number
     - Address
     - Email

#### Searching for Representative steps 
Second, the Veteran chooses what type of representation they would prefer.
- VSO
- Attorney
- Claims agent

Third, the Veteran narrows their search to some local representative and click on the search button
- State
- City
- Zip
- Distance from their location

After clicking "search," a table is displayed listing VA approved representatives. The table's column headers can be sorted by alpha or numeric order. The table headers are:
- Name POA code
- Address
- Phone
- Accepts electronic request
- Actions (a select button to choose the representative)
- Save & continue button

After a representative is selected, there is a confirmation step displaying the representative's information.
- Name
- Origination name
- Address
- Phone number

#### Military Information
Next, the Veteran completes the following information if it is not auto-populated.
- What is your most recent Service Member number?
- What Branch of Service?
- Click Save & Continue button

#### Limitation of Consent
Next, the application allows restricting of Veteran's personal information. Veterans can choose between 
- Yes with some constraints
  - Drug abuse
  - Alcoholism or alcohol abuse
  - Infection with the Human Immunodeficiency Virus
  - Sickle cell anemia
- No

#### Authorization for Address Change
The Veteran can permit the VSO or layers to change the Veteran's address. There are two radio buttons, "Yes & No".

#### Error Check
Finally, the application is bookended by a review step. 
- Example of issue: “You have 1 warning with a statement about the issue"

### VSO and law firms processes
VSO offers guidance through the VA's Power of Attorney process and provides links to different VA forms, most often, 21-22/21-22a in PDF. Other commercial options can are similar to LegalZoom and law offices.  LegalZoom requests information and then provides the needed form.  Law firms provide “Durable Power of Attorney” for specific use cases. An example is Michigan’s POA for finances.

## Conclusion
Suggestions for VA.gov's POA process
- Create a responsive Representative results table
- Provide a search feature within the Find Local Representative step. This search would allow Veterans to type in the VSO or law firm's name, alleviating the searching and sorting of the Representative result table. 
- Combine some steps:
	- VA file number and Insurance number 
	- Combine Military service with Personal information
		- Both steps are information is auto-populated 	
