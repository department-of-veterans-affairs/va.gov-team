# Feb 2021 VA Form Data Evaluation

##Purpose
This evaluation was performed to get a current status on the number and types of forms currently available via the Find a VA Form product.  A secondary purpose was to identify data inconsistencies and existing data issues that could generate errors or unexpected behavior. 

## Data Source
Marci McGuire (Find a VA Form Product Manager) performed this evaluation on 2/25/2021.  The data referenced in this evaluation was retrieved by Zach Morel (FE Engineer) via the **Lighthouse API** on Feb 24, 2021.  This data source combines data from the **VA Forms database** and forms data stored in the **Drupal CMS**.

## Contents
- [Form Counts](#form-counts)
    - Active records
    - Forms with any type of Detail Page
    - Forms with Basic detail page
    - Forms with custom detail page
    - Forms with Online Tools
    - Forms with related Forms
    - Forms with Alert information 
    - Deleted
    
-  [Data Issues](#data-issues)
    - [Invalid PDF links](#invalid-pdf-links)
    - [Forms with Tool URL but no Tool Intro](Forms-with-Tool-URL-but-no-Tool-Intro)
    - Inconsistent form label names
    - Inconsistent PDF links
    - Questionable dates
    - Problematic PDF links (note - these links may work on browsers that are more "forgiving", but not on others)
    - Forms missing language attribute


## Form Counts

 - Active records as of 2/24/2021: **573**
 - Forms with any type of Detail Page: **446**
 - Forms with custom detail page: **43** (note - this is determined by the presence of a value in **Form Usage** field.
 - Forms with Online Tools: **29** (note - this is determined by the presence of a value in the **Tool URL** field)
 - Forms with related Forms: **35**
 - Forms with Alert information: ** ** (note - we are currently determining where this data originates)
 - Deleted as of 2/24/2021: **13** (note - this is a _logical_ delete in the Lighthouse API - form record is still present, but contains a date value in the _Deleted At_ field.


## Data Issues

### Forms with invalid PDF links
Confirmed that these currently all return a 404 (Not Found) error.

| type    | Name        | Url                                                                     |
|---------|-------------|-------------------------------------------------------------------------|
| va_form | VA4670      | https://www.va.gov/vaforms/va/pdf/VA4670.pdf                            |
| va_form | VA4667b     | https://www.va.gov/vaforms/va/pdf/VA4667b.pdf                           |
| va_form | VA4667c     | https://www.va.gov/vaforms/va/pdf/VA4667c.pdf                           |
| va_form | VA3215      | https://www.va.gov/vaforms/va/pdf/VA3215.pdf                            |
| va_form | 26-1844     | https://www.vba.va.gov/pubs/forms/VBA-26-1844-ARE.pdf                   |
| va_form | VA0880a     | https://www.va.gov/vaforms/va/pdf/VA0880a.pdf                           |
| va_form | VA0880b     | https://www.va.gov/vaforms/va/pdf/VA0880b.pdf                           |
| va_form | VA0862      | https://www.va.gov/vaforms/va/pdf/VA0862.pdf                            |
| va_form | VA0927a     | https://www.va.gov/vaforms/va/pdf/VA0927a.pdf                           |
| va_form | VA0927b     | https://www.va.gov/vaforms/va/pdf/VA0927b.pdf                           |
| va_form | VA0927c     | https://www.va.gov/vaforms/va/pdf/VA0927c.pdf                           |
| va_form | VA0927d     | https://www.va.gov/vaforms/va/pdf/VA0927d.pdf                           |
| va_form | VA0927e     | https://www.va.gov/vaforms/va/pdf/VA0927e.pdf                           |
| va_form | VA10002     | https://www.va.gov/vaforms/va/pdf/VA10002.pdf                           |
| va_form | VA4637      | https://www.va.gov/vaforms/va/pdf/VA4637(ES).pdf                        |
| va_form | 10-0484     | https://www.va.gov/vaforms/medical/pdf/vha-10-0484-fill.pdf             |
| va_form | VA646       | https://www.va.gov/vaforms/va/pdf/VA646.pdf                             |
| va_form | 21-0960C-5  | https://www.vba.va.gov/pubs/forms/VBA-21-0960C-5-ARE.pdf                |
| va_form | 21-0960C-8  | https://www.vba.va.gov/pubs/forms/VBA-21-0960C-8-ARE.pdf                |
| va_form | 21-0960C-9  | https://www.vba.va.gov/pubs/forms/VBA-21-0960C-9-ARE.pdf                |
| va_form | 21-0960G-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960G-1-ARE.pdf                |
| va_form | 21-0960G-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960G-2-ARE.pdf                |
| va_form | 21-0960G-3  | https://www.vba.va.gov/pubs/forms/VBA-21-0960G-3-ARE.pdf                |
| va_form | 21-0960G-4  | https://www.vba.va.gov/pubs/forms/VBA-21-0960G-4-ARE.pdf                |
| va_form | 21-0960G-5  | https://www.vba.va.gov/pubs/forms/VBA-21-0960G-5-ARE.pdf                |
| va_form | 21-0960G-6  | https://www.vba.va.gov/pubs/forms/VBA-21-0960G-6-ARE.pdf                |
| va_form | 21-0960G-7  | https://www.vba.va.gov/pubs/forms/VBA-21-0960G-7-ARE.pdf                |
| va_form | 21-0960G-8  | https://www.vba.va.gov/pubs/forms/VBA-21-0960G-8-ARE.pdf                |
| va_form | 21-0960H-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960H-2-ARE.pdf                |
| va_form | 21-0960K-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960K-1-ARE.pdf                |
| va_form | 21-0960K-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960K-2-ARE.pdf                |
| va_form | 21-0960L-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960L-2-ARE.pdf                |
| va_form | 21-0960M-11 | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-11-ARE.pdf               |
| va_form | 21-0960N-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960N-1-ARE.pdf                |
| va_form | 10-0485     | https://www.va.gov/vaforms/medical/pdf/10-0485-fill.pdf                 |
| va_form | 21-0960A-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960A-1-ARE.pdf                |
| va_form | 21-0960B-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960B-1-ARE.pdf                |
| va_form | 21-0960C-1  | https://www.vba.va.gov/pubs/forms/VA%20Form%2021-0960C-1.pdf            |
| va_form | 21-0960M-4  | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-4-ARE.pdf                |
| va_form | 21-0960M-8  | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-8-ARE.pdf                |
| va_form | 21-0960M-9  | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-9-ARE.pdf                |
| va_form | VA8         | https://www.va.gov/vaforms/va/pdf/VA8.pdf                               |
| va_form | 21-0960M-12 | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-12-ARE.pdf               |
| va_form | 21-0960M-14 | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-14-ARE.pdf               |
| va_form | 21-0960M-3  | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-3-ARE.pdf                |
| va_form | 21-0960M-6  | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-6-ARE.pdf                |
| va_form | 21-0960M-7  | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-7-ARE.pdf                |
| va_form | 21-0960A-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960A-2-ARE.pdf                |
| va_form | 21-0960A-3  | https://www.vba.va.gov/pubs/forms/VBA-21-0960A-3-ARE.pdf                |
| va_form | 21-0960A-4  | https://www.vba.va.gov/pubs/forms/VBA-21-0960A-4-ARE.pdf                |
| va_form | 21-0960C-4  | https://www.vba.va.gov/pubs/forms/VBA-21-0960C-4-ARE.pdf                |
| va_form | 21-0960E-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960E-1-ARE.pdf                |
| va_form | 21-0960F-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960F-1-ARE.pdf                |
| va_form | 21-0960F-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960F-2-ARE.pdf                |
| va_form | 21-0960M-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-1-ARE.pdf                |
| va_form | 21-0960M-10 | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-10-ARE.pdf               |
| va_form | 21-0960M-13 | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-13-ARE.pdf               |
| va_form | 21-0960M-15 | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-15-ARE.pdf               |
| va_form | 21-0960M-16 | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-16-ARE.pdf               |
| va_form | 21-0960M-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960M-2-ARE.pdf                |
| va_form | 21-0960N-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960N-2-ARE.pdf                |
| va_form | 21-0960B-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960B-2-ARE.pdf                |
| va_form | 21-0960C-10 | https://www.vba.va.gov/pubs/forms/VBA-21-0960C-10-ARE.pdf               |
| va_form | 21-0960C-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960C-2-ARE.pdf                |
| va_form | 21-0960I-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960I-1-ARE.pdf                |
| va_form | 21-0960I-6  | https://www.vba.va.gov/pubs/forms/VBA-21-0960I-6-ARE.pdf                |
| va_form | 21-0960J-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960J-1-ARE.pdf                |
| va_form | 21-0960J-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960J-2-ARE.pdf                |
| va_form | 21-0960J-3  | https://www.vba.va.gov/pubs/forms/VBA-21-0960J-3-ARE.pdf                |
| va_form | 21-0960P-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960P-1-ARE.pdf                |
| va_form | 21-0960P-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960P-2-ARE.pdf                |
| va_form | 21-0960P-3  | https://www.vba.va.gov/pubs/forms/VBA-21-0960P-3-ARE.pdf                |
| va_form | 21-0958     | https://www.vba.va.gov/pubs/forms/VBA-21-0958-ARE.pdf                   |
| va_form | 21-0960C-11 | https://www.vba.va.gov/pubs/forms/VBA-21-0960C-11-ARE.pdf               |
| va_form | 21-0960C-3  | https://www.vba.va.gov/pubs/forms/VBA-21-0960C-3-ARE.pdf                |
| va_form | 21-0960C-6  | https://www.vba.va.gov/pubs/forms/VBA-21-0960C-6-ARE.pdf                |
| va_form | 21-0960C-7  | https://www.vba.va.gov/pubs/forms/VBA-21-0960C-7-ARE.pdf                |
| va_form | 21-0960D-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960D-1-ARE.pdf                |
| va_form | 21-0960E-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960E-2-ARE.pdf                |
| va_form | 21-0960E-3  | https://www.vba.va.gov/pubs/forms/VBA-21-0960E-3-ARE.pdf                |
| va_form | 21-0960H-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960H-1-ARE.pdf                |
| va_form | 21-0960I-2  | https://www.vba.va.gov/pubs/forms/VBA-21-0960I-2-ARE.pdf                |
| va_form | 21-0960I-3  | https://www.vba.va.gov/pubs/forms/VBA-21-0960I-3-ARE.pdf                |
| va_form | 21-0960I-4  | https://www.vba.va.gov/pubs/forms/VBA-21-0960I-4-ARE.pdf                |
| va_form | 21-0960I-5  | https://www.vba.va.gov/pubs/forms/VBA-21-0960I-5-ARE.pdf                |
| va_form | 21-0960J-4  | https://www.vba.va.gov/pubs/forms/VBA-21-0960J-4-ARE.pdf                |
| va_form | 21-0960L-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960L-1-ARE.pdf                |
| va_form | 21-0960N-3  | https://www.vba.va.gov/pubs/forms/VBA-21-0960N-3-ARE.pdf                |
| va_form | 21-0960N-4  | https://www.vba.va.gov/pubs/forms/VBA-21-0960N-4-ARE.pdf                |
| va_form | 21-0960Q-1  | https://www.vba.va.gov/pubs/forms/VBA-21-0960Q-1-ARE.pdf                |
| va_form | 10-0137B    | https://www.va.gov/vaforms/medical/pdf/10-0137B%20current%20version.pdf |
| va_form | 26-6705d    | https://www.vba.va.gov/pubs/forms/VBA-26-6705d-ARE.pdf                  |

### Forms with Tool URL but no Tool Intro

| type    | Name    | Url                                                         |
|---------|---------|-------------------------------------------------------------|
| va_form | 28764   | https://www.va.gov/vaforms/medical/pdf/vha-10-2478-fill.pdf |
| va_form | 29-1546 | https://www.vba.va.gov/pubs/forms/VBA-29-1546-ARE.pdf       |
| va_form | 29-4364 | https://www.vba.va.gov/pubs/forms/VBA-29-4364-ARE.pdf       |
| va_form | 28-1900 | https://www.vba.va.gov/pubs/forms/VBA-28-1900-ARE.pdf       |
