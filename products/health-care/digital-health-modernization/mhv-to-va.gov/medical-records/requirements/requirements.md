# Medical Records Requirements

## Table of Contents
- [General](#general)
- [Immunizations](#immunizations)
- [Labs and Tests](#labs-and-tests)
- [Clinical Notes](#clinical-notes)
- [Health Issues](#health-issues)
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

## Immunizations

## Labs and Tests

## Clinical Notes
- Clinical notes includes 
  - VA notes
  - Discharge summaries 
  - After visit summaries
- List view
  - A user should be able to see a list of all of their notes, ordered chronologically. Each list view entry should include the note title, who signed the note, the date of the note, and the location where that note was written. 
  - A user should be able to sort their notes in different ways
    - Chronologically
    - By location, chronologically
    - By signing physician, chronologically
  - In the list view, users need to understand the availability of notes, and the delays they are subject to. See https://mhv-syst.myhealth.va.gov/mhv-portal-web/blue-button-availability
  - A user should be able search Notes to find what they are looking for.
    - A user should be able to search by note metadata, such as note title, signing or co-signing physician, location, or date. 
    - A user should be able to search for keywords in the body content of a note, such as "high blood pressure" or "back pain." A common use case is finding reference to a specific health condition in order to support something like a disability claim.
    - Search results should be ordered chronologically, from newest to oldest, and matches should be highlighted. 
    - The search box can be collapsed to create real estate for the list view of notes. 

- Details view
  - The H1 of the details view should be the title of the note. 
  - Each note should 
  - Where possible and clinically permissable, transform text to make a note easier to read.
  - From the top of the page, a user should be able to print a note, or download it as either a PDF or TXT file. 


## Health Issues
- List
  - Users should be able to view a list of their health issues, and they should be able sort by date/time entered and alphabetically by issue.
  - Each health issue entry should include:
    - Issue/problem title
    - Date/time entered
    - Provider's name
    - Location
    - Status
    - Comments
- Data is available thirty-six (36) hours after it has been entered. It may not contain active problems managed by non-VA health care providers. If you have any questions about your information contact your VA health care team.
- 
## Vitals
- A user must be able to view readings from each of the following categories of vitals
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
- For each category, a user must be able to click in and see a historical list of readings. a use must be able to view readings within a category over time to be able to quickly understand change over time. 
- Each reading should include type, measurement including units, comments, location where the reading was collected, and the datetime collected. 
- A user should be able to download (PDF or TXT) or print a vitals details view


## Allergies

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
