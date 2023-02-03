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
 - 
Because each category of the labs and tests is different, details view for each entry will also vary. 
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

- A user should be able to see a list of vital sign categories, listed alphabetically. 
- Each entry should include
  - Category name
  - Latest reading
  - Date of latest reading
  - Location of latest reading
- A user should be able to click into each category to see a historical list of readings
  


## Health conditions
**List view**
  - Users should be able to view a list of their health issues from across all VA facilities
  - Each entry should include 
    - issue/problem title (preferablly without SCT)
    - date/time entered
    - status of the issue (e.g. active/inactive)
  - A user should be able to sort their health issues
    - Chronologically based on initially entered date
    - Alphabetically by issue
    - By status

**Details view**
  - Each health issue entry should include:
    - Issue/problem title
    - Date/time entered
    - Status
    - Provider's name
    - Location where the issue was entered
    - Problem code (aka SCT, this may not be able to separated from Issue/problem title. If it can't be, don't include as part of title and here)
    - Comments
  
<img width="807" alt="Screenshot 2023-01-31 at 1 46 03 PM" src="https://user-images.githubusercontent.com/65574620/215923319-0ffc1406-1598-4cf7-925d-acefa505764d.png">

- Data is available thirty-six (36) hours after it has been entered. It may not contain active problems managed by non-VA health care providers. 
- Actions
  - From the top of the page, a user should be able to print and download the entire list so that they can share and communicate their health issues with their health care team
  

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
- For each category, a user must be able to click in and see a historical list of readings. a use must be able to view readings within a category over time to be able to quickly understand change over time. 
- Each reading should include type, measurement including units, comments, location where the reading was collected, and the datetime collected. 
- A user should be able to download (PDF or TXT) or print a vitals details view

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
- A user should be able to print or download (PDF or TXT) the complete list. 
- A user should be able to sort the list alphabetically by allergen/reactant name and chronologically based on initially entered date.

**Details view**
- Each allergy detail should include
  - Location
  - Date entered
  - Allergen/reactant
  - Reaction/side effect
  - Allergy type (all drug, except self-entered allergies)
  - VA drug class
  - Observed/historical
  - Comments

## Demographics

## DoD Information

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
