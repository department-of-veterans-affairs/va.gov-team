# Feb 2021 VA Form Data Evaluation

##Purpose
This evaluation was performed to get a current status on the number and types of forms currently available via the Find a VA Form product.  A secondary purpose was to identify data inconsistencies and existing data issues that could generate errors or unexpected behavior. 

## Data Source
Marci McGuire (Find a VA Form Product Manager) performed this evaluation on 2/25/2021.  The aata referenced in this evaluation was retrieved by Zach Morel (FE Engineer) via the Lighthouse API on Feb 24, 2021.  This data source combines data from the VA Forms database and forms data stored in the Drupal CMS.

## Contents
- Form Counts
    - Active as of 2/24/2021
    - Forms with Detail pages
    - Forms with Online Tools
    - Forms with related Forms
    - Forms with Alert information (note - we are currently determining where this data originates)
    - Deleted as of 2/24/2021 (note - this is a logical delete in the Lighthouse API - form data is still present, but denoted as deleted with a date in the Deleted At field.
- Potential Data Issues
    - Inconsistent form label names
    - Inconsistent PDF links
    - Questionable dates
    - Problematic PDF links (note - these links may work on browsers that are more "forgiving", but not on others)
    - Forms missing language attribute
