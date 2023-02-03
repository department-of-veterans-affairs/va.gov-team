# Medical Records Requirements

## Table of Contents
- [General](#general)
- [Vaccines](#vaccines)
- [Lab and test results](#lab-and-test-results)
- [Care summaries and notes](#care-summaries-and-notes)
- [Health conditions](#health-conditions)
- [Vitals](#vitals)
- [Allergies](#allergies)
- [Demographics](#demographics)
- [DoD Information](#dod-information)
- [Blue Button Reports](#blue-button-reports)
- [VA Health Summary Reports](#va-health-summary-reports)

## General
### Downloads
- Whenever a download option is provided, we must provide a file option other than PDF and XML since PDF and XML files are not accessible. The best option to satisfy this requirement is to provide a TXT file.
- Labeling for the download needs to make it clear which type of file is being downloaded (PDF, TXT, or XML).

## Vaccines
**List view**
- A user should be able to see a list of their vaccines ordered chronologically by date (descending). 
- A user should be able to sort the list by date received and alphabetically by vaccines name.
- A user should be able to print and download (PDF and TXT) their entire vaccine record. 
- Each vaccine entry on the list should include:
  - Vaccine's name
  - Date received
  - Location
  - Link to details 
  
**Details view**
- Date received
- Type and dosage 
- Series 
- Facility 
- Reactions
- Comments

- A user should be able to print and download (PDF and TXT) each vaccine detail. 

**Not for first iteration, requires future usability research**
- A user should be able to print and download (PDF and TXT) their vaccines in different ways: 
  - Multiple entries of the same vaccine
  - Vaccines that they received in a certain time range

## Lab and test results
**Includes** 
- Laboratory results
  - Chemistry/Hematology
  - Microbiology 
- Pathology reports
  - Surgical
  - Cytology
  - Microscopy
- Radiology images and reports 
- Cardiology images and reports (know as Electrocardiogram (EKG) history)

**List view**
- At the top of the page, a user should be able to quickly learn about the availability of lab and test results. For more info, see https://mhv-syst.myhealth.va.gov/mhv-portal-web/blue-button-availability
- A user should be able to see a list of all of their lab and test results, ordered chronologically by date collected. 
- Each should include:
  - Category (e.g. Pathology, Microbiology, etc)
  - Title of the lab result or report (if available)
  - Date collected
  - Ordering provider
- A user should be able to click into each entry to get more details.
  
**Details view**
 - The H1 of the details view should be the lab or test type. 
 - Where possible and clinically permissable, transform text to make a note easier to read.
 - From the top of the page, a user should be able to print a note, or download it as either a PDF or TXT file. 
 - Because each category of the labs and tests is different, details view for each entry will also vary: 
  - Radiology reports
    - Procedure/test name
    - Date/time exam performed
    - Ordering location 
    - Requesting provider
    - Reason for study
    - Performing location 
    - Clinical history 
    - Radiologist 
    - Report
 - Chemistry, Hematology
    - Lab type (chemistry/hematology)
    - Lab test (aka name, not always present)
    - Date/time collected
    - Tests
      - Test name
      - Results
      - Units
      - Reference range
      - Status
      - Performing location
      - Interpretation
    - Specimen
    - Ordering provider
    - Ordering location
    - Collected location
    - Comments
    - Perfomring Location
  - Microbiology
    - Lab type
    - Lab test (aka name, not always present)
    - Date collected
    - Date completed (not always present)
    - Results
    - Site/specimen (not always present)
    - Ordering provider
    - Ordering location
    - Collected location
  - Pathology reports (surgical pathology) 
    - Type of report (surgical pathology/cytology) 
    - Specimen 
    - Date obtained
    - Performing location
    - Date completed 
    - Report 
  - EKG (historical exam dates) *BB no longer updates EKG, needs to figure out where we can find the full report
    - Procedure/test name 
    - Date/time performed
    - Ordering location

  - A user should be able to print or download a result/report as either a PDF or TXT file.
  - When a lab results includes multiple tests, such as a CMP, the tests should be presented as accordions, with one test result per accordion.
  - If a result does no include mutliple tests, the results should be laid out flat on the page.
  - When there is reference range included, a user should be able to easily see when their lab result falls above or below the normal range.

**Not for first iteration, requires future usability research**
  - A user should be able to sort their results in different ways
    - Chronologically
    - By location, chronologically
    - By ordering phyiscian, chronologically
    - By type, alphabetically
  - A user should be able filter to find what they are looking for.
    - A user should be able to filter by result metadata, such as  title, location, ordering physician, or type

## Care summaries and notes
**Includes** 
  - VA notes
  - Admission & Discharge summaries 
  - After visit summaries
  - Treatment plans

**List view**

- At the top of the page, a user should be able to quickly learn about the availability of notes. For more info, see https://mhv-syst.myhealth.va.gov/mhv-portal-web/blue-button-availability
- A user should be able to see a list of all of their notes, ordered chronologically. 
- Each entry should include the:
  - Date
    - VA note: date of note
    - Admission & discharge summary: Date of admission
    - AVS: Visit date  
  - Note title
    - VA note: Note title
    - Admission & discharge summary: Admission & discharge summary
    - AVS: After-visit summary
  - Location where that note was written
  - Physician
    - VA note: signing physician 
    - A&D: Admitting physician
    - AVS: Provider
- A user should be able to click into each entry to get more details.
  
**Details view**
  - The H1 of the details view should be the title of the note. 
  - Where possible and clinically permissable, transform text to make a note easier to read.
  - From the top of the page, a user should be able to print a note, or download it as either a PDF or TXT file. 

 **Not for Phase 0, requires future usability research**
    
  - A user should be able to sort their notes in different ways
    - Chronologically
    - By location, chronologically
    - By signing physician, chronologically
  - A user should be able search Notes to find what they are looking for.
    - A user should be able to search by note metadata, such as note title, signing or co-signing physician, location, or date. 
    - A user should be able to search for keywords in the body content of a note, such as "high blood pressure" or "back pain." A common use case is finding reference to a specific health condition in order to support something like a disability claim.
    - Search results should be ordered chronologically, from newest to oldest, and matches should be highlighted. 
    - The search box can be collapsed to create real estate for the list view of notes. 


## Health conditions
**List view**
  - At the top of the page, a user should be able to quickly learn about the availability of notes. For more info, see https://mhv-syst.myhealth.va.gov/mhv-portal-web/blue-button-availability
  - Users should be able to view a list of their health issues from across all VA facilities
  - Each entry should include the issue/problem title, and the date/time it was entered, and the status of the issue (e.g. active/inactive)
  - A user should be able to sort their health conditions
    - Chronologically based on initially entered date
    - Alphabetically by issue
    - By status

**Details view**
  - Each health issue entry should include:
    - Issue/problem title
    - Date/time entered
    - Provider's name
    - Location where the issue was entered
    - Status
    - Comments
  - From the top of the page, a user should be able to print and download the entire list so that they can share and communicate their health issues with their health care team
  
  
<img width="807" alt="Screenshot 2023-01-31 at 1 46 03 PM" src="https://user-images.githubusercontent.com/65574620/215923319-0ffc1406-1598-4cf7-925d-acefa505764d.png">


## Vitals
**Includes**
  - Blood pressure
  - Blood sugar
  - Heart rate
  - Cholesterol
  - Body Weight
  - Height
  - Pulse Oximetry
  - Body Temperature
  - International Normalized Ratio (INR)
  - Pain

**List view**

- A user should be able to see a list of vital sign categories, listed alphabetically. 
- Each entry should include
  - Category name
  - Latest reading
  - Date of latest reading
  - Location of latest reading
- A user should be able to click into each category to see a historical list of readings
  
**Details view**
  - The H1 of the details view should be the category name 
  - From the details view, a user should be able to see a historical list of readings for that category (chronological order)
  - Each entry in that list should include
    - Reading
    - Date of entry
    - Location of entry 
    - Comments
  - From the top of the page, a user should be able to print a category of readings, or download it as either a PDF or TXT file. 


## Allergies
**List view**
- A user should be able to see a list of all of their allergies.
- Each entry should include:
  - Date entered
  - Allergen/reactant
  - Reaction/side effect
  - Location
  - Source
- A user should be able to click into each entry to learn more details.
- A user should be able to print or download (PDF or TXT) the complete allergies list. 
- A user should be able to sort the list alphabetically by allergen/reactant name and chronologically based on initially entered date.

**Details view**
- Each allergy detail should include:
  - Location
  - Date entered
  - Allergen/reactant
  - Reaction/side effect
  - Allergy type (all drug, except self-entered allergies)
  - VA drug class
  - Observed/historical
  - Comments

## Demographics
**List view**
- A user should be able to view their demographics information. 
- At top of the list, a user should be informed on how they can update their demorgraphics.
- Demorgaphics have a list of infomration, and should include: 
  - VA Treating Facility
  - First name
  - Middle name
  - Last name
  - Religion
  - Ethnicity
  - Date of birth
  - Place of birth
  - Age
  - Gender
  - Marital status
  - Permanent address and contact information
  - Eligibility 
  - Employment
  - Active insurance
  - Primary next of kin
  - Emergency contact
  - VA guardian
  - Civil guardian
  
**Details view** 
- A few of items (permanent address and contact information, eligibility, employment status, insurance company, primary next of kin, emergency contact, VA guardian, and civil guardian) on the list include more information. These items should be presented as accordions so that a user pick and choose what they want to see. Those items should include: 
  - Permanent address and contact information
    - Street address
    - Work phone number
    - City
    - State
    - Zip code
    - County
    - Country
    - Home phone number
    - Work phone number
    - Cell phone number
    - Email address:
  - Eligibility
    - Primary eligibility code
    - Service connected percentage
  - Employment
    - Employment Status
    - Employer Name
  - Active insurance
    - Insurance Company
    - Effective Date
    - Expiration Date
    - Group Name
    - Group Number
    - Subscriber ID
    - Subscriber Name
    - Subscriber Relationship
  - Primary next of kin 
    - Name
    - Street Address
    - City
    - State
    - Zip Code
    - Home Phone Number
    - Work Phone Number
  - Emergency contact
    - Name 
    - Street Address 
    - City 
    - State 
    - Zip Code 
    - Home Phone Number 
    - Work Phone Number
  - VA guardian
    - Name
    - Street Address
    - City 
    - State 
    - Zip Code 
    - Home Phone Number 
    - Work Phone Number 
  - Civil guardian
    - Name
    - Street Address
    - City
    - State
    - Zip Code
    - Home Phone Number
    - Work Phone Number

## DoD Information
**List view** 
- A user should be able to see all 9 sections of their DoD information. 
- This list includes: 
  - Regular Active Service
  - Reserve/Guard Association Periods
  - Reserve/Guard Activation Periods
  - Deployment Periods
  - DoD MOS/Occupation Codes
  - Military/Combat Pay Details
  - Separation Pay Details
  - Retirement Periods
  - DoD Retirement Pay

**Details view** 
- Each section on the list might include more information. For the sections that include more information, they should be presented as accordions.  
- Regular Active Service
  - Service
  - Begin Date
  - End Date
  - Character of Service
  - Rank
- Reserve/Guard Association Periods
  - Service
  - Begin Date
  - End Date
  - Character of Service
  - Rank
- Reserve/Guard Activation Periods
  - Service
  - Begin Date
  - End Date
  - Activated Under (Title 10, 32, etc.)
- Deployment Periods
  - Service
  - Begin Date
  - End Date
  - Conflict
  - Location
- DoD MOS/Occupation Codes
  - Service
  - Begin Date
  - Enl/Off
  - Type
  - Service Occupation Code
  - DoD Occupation Code
- Military/Combat Pay Details
  - Service
  - Begin Date
  - End Date
  - Military Pay Type
  - Location
- Separation Pay Details
  - Service
  - Begin Date
  - End Date
  - Separation Pay Type
- Retirement Periods
  - Service
  - Begin Date
  - End Date
  - Retirement Type
  - Rank
- DoD Retirement Pay
  - Service
  - Begin Date
  - End Date
  - Disability Percent
  - Pay Stat
  - Termination Reason
  - Stop Pay Reason


## Blue Button Reports
- We will continue to provide the ability to create and download Blue Button reports as these reports fill different needs for Veterans and contain different information than the Health Summary.
- Once a Blue Button report has been generated, it can be viewed as a PDF or TXT file within an iframe, downloaded as a PDF or TXT file, or printed.
- Users must be allowed to select the same types of data to include in their Blue Button report as they are on the MyHealtheVet site today.
- The page that generates the Blue Button must present the last and most current generated reports, when they were generated, and links to view, print, or download them.
- We will NOT provide the ability to send a Blue Button report as that capability is provided by Community Care via CCD Direct.
### Blue Button Report PDF within page
<img width="927" alt="image" src="https://user-images.githubusercontent.com/69174644/215801201-040832d6-d29a-4dd8-afb4-268e7211949b.png">


### Blue Button Report TXT within page
<img width="927" alt="image" src="https://user-images.githubusercontent.com/69174644/215802401-deeb022c-fd44-4d1e-953c-8a530db78e7a.png">




## VA Health Summary Reports
- We will continue to provide the ability to create and download Health Summary reports as these reports fill different needs for Veterans and contain different information than Blue Button reports.
- Once a VA Health Summary has been generated, it can be viewed in the browser as HTML, or downloaded as a PDF or XML file.
- The page that generates the VA Health Summary must present the last and current generated reports, along with the links to view or download them as above.

### VA Health Summary Report HTML within page iframe
<img width="927" alt="image" src="https://user-images.githubusercontent.com/69174644/215800539-51f2d602-a258-4927-a0b5-f953f3041266.png">
