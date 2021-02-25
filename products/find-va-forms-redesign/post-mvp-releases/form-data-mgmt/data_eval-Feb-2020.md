# Feb 2021 VA Form Data Evaluation

##Purpose
This evaluation was performed to get a current status on the number and types of forms currently available via the Find a VA Form product.  A secondary purpose was to identify data inconsistencies and existing data issues that could generate errors or unexpected behavior. 

## Data Source
Marci McGuire (Find a VA Form Product Manager) performed this evaluation on 2/25/2021.  The data referenced in this evaluation was retrieved by Zach Morel (FE Engineer) via the **Lighthouse API** on Feb 24, 2021.  This data source combines data from the **VA Forms database** and forms data stored in the **Drupal CMS**.

## Contents
- [Form Counts](#form-counts)


- [Form VA.gov Features](#form-vagov-features)

    
-  [Data Issues](#data-issues)
    - [Invalid PDF links](#invalid-pdf-links)
    - [Forms with Tool URL but no Tool Intro](#forms-with-tool-url-but-no-tool-intro)
    - Inconsistent form label names
    - Inconsistent PDF links
    - Questionable dates
    - Problematic PDF links (note - these links may work on browsers that are more "forgiving", but not on others)
    - Forms missing language attribute


## Form Counts

 - Active records as of 2/24/2021: **573**
 - Forms with any type of Detail Page: **446**
 - Forms with custom detail page: **43** (as determined by the presence of a value in **Form Usage** field)
 - Forms with Online Tools: **29** (as determined by the presence of a value in the **Tool URL** field)
 - Forms with related Forms: **35**
 - Forms with Alert information: ** ** (note - we are currently determining where this data originates)
 - Deleted as of 2/24/2021: **13** (note - this is a _logical_ delete in the Lighthouse API - form record is still present, but contains a date value in the _Deleted At_ field.

## Form VA.gov Features
| Type    | Name                 | PDF | Basic Detail Page | Enhanced Detail Page | Online Tool | Related Forms |
|---------|----------------------|-----|-------------------|----------------------|-------------|---------------|
| va_form | 21-0781              | Y   | Y                 | Y                    | Y           | Y             |
| va_form | 21-0781a             | Y   | Y                 | Y                    | Y           | Y             |
| va_form | 10-10EZ (esp)        | Y   | Y                 | Y                    | Y           | Y             |
| va_form | 21-686c              | Y   | Y                 | Y                    | Y           | Y             |
| va_form | 21P-527EZ            | Y   | Y                 | Y                    | Y           | Y             |
| va_form | 10-10EZ              | Y   | Y                 | Y                    | Y           | Y             |
| va_form | 10-10CG              | Y   | Y                 | Y                    | Y           | Y             |
| va_form | 22-1990              | Y   | Y                 | Y                    | Y           | Y             |
| va_form | 15615                | Y   | Y                 | Y                    | Y           |               |
| va_form | 21-4138              | Y   | Y                 | Y                    | Y           |               |
| va_form | 21-674               | Y   | Y                 | Y                    | Y           |               |
| va_form | 22-5490              | Y   | Y                 | Y                    | Y           |               |
| va_form | 21-526EZ             | Y   | Y                 | Y                    | Y           |               |
| va_form | 26-1880              | Y   | Y                 | Y                    | Y           |               |
| va_form | 40-10007             | Y   | Y                 | Y                    | Y           |               |
| va_form | 22-1995              | Y   | Y                 | Y                    | Y           |               |
| va_form | 22-5495              | Y   | Y                 | Y                    | Y           |               |
| va_form | 22-1990e             | Y   | Y                 | Y                    | Y           |               |
| va_form | 22-1990n             | Y   | Y                 | Y                    | Y           |               |
| va_form | 21P-530EZ            | Y   | Y                 | Y                    | Y           |               |
| va_form | 10-10d               | Y   | Y                 | Y                    |             | Y             |
| va_form | 21-2680              | Y   | Y                 | Y                    |             | Y             |
| va_form | 21P-0969             | Y   | Y                 | Y                    |             | Y             |
| va_form | 21P-527              | Y   | Y                 | Y                    |             | Y             |
| va_form | 21P-534              | Y   | Y                 | Y                    |             | Y             |
| va_form | 21P-534EZ            | Y   | Y                 | Y                    |             | Y             |
| va_form | 20-0998              | Y   | Y                 | Y                    |             | Y             |
| va_form | 21-22                | Y   | Y                 | Y                    |             | Y             |
| va_form | 10-0137A             | Y   | Y                 | Y                    |             | Y             |
| va_form | 10-0137              | Y   | Y                 | Y                    |             | Y             |
| va_form | 21-0779              | Y   | Y                 | Y                    |             | Y             |
| va_form | 10-7959C             | Y   | Y                 | Y                    |             | Y             |
| va_form | 21P-509              | Y   | Y                 | Y                    |             |               |
| va_form | 21-4142              | Y   | Y                 | Y                    |             |               |
| va_form | 21-0966              | Y   | Y                 | Y                    |             |               |
| va_form | 20-0995              | Y   | Y                 | Y                    |             |               |
| va_form | 21-22a               | Y   | Y                 | Y                    |             |               |
| va_form | 10-10EZR             | Y   | Y                 | Y                    |             |               |
| va_form | 21-0845              | Y   | Y                 | Y                    |             |               |
| va_form | 10-0137 (espanol)    | Y   | Y                 | Y                    |             |               |
| va_form | 16711                | Y   | Y                 | Y                    |             |               |
| va_form | 10-2850C             | Y   | Y                 | Y                    |             |               |
| va_form | 10-10143g            | Y   | Y                 | Y                    |             |               |
| va_form | 20-10207             | Y   | Y                 | Y                    |             |               |
| va_form | VA2346a              | Y   | Y                 |                      | Y           | Y             |
| va_form | 21P-530              | Y   | Y                 |                      | Y           | Y             |
| va_form | 29-336               | Y   | Y                 |                      | Y           | Y             |
| va_form | 29-336a              | Y   | Y                 |                      | Y           | Y             |
| va_form | VA2345               | Y   | Y                 |                      | Y           |               |
| va_form | 28-8832              | Y   | Y                 |                      | Y           |               |
| va_form | 29-1546              | Y   | Y                 |                      | Y           |               |
| va_form | 29-4364              | Y   | Y                 |                      | Y           |               |
| va_form | 28-1900              | Y   | Y                 |                      | Y           |               |
| va_form | 28764                | Y   | Y                 |                      | Y           |               |
| va_form | 10-7959f-1           | Y   | Y                 |                      |             | Y             |
| va_form | 10-7959f-2           | Y   | Y                 |                      |             | Y             |
| va_form | 10-493b              | Y   | Y                 |                      |             | Y             |
| va_form | 21P-0517-1           | Y   | Y                 |                      |             | Y             |
| va_form | 21P-0517-1(Spanish)  | Y   | Y                 |                      |             | Y             |
| va_form | 21P-4706b            | Y   | Y                 |                      |             | Y             |
| va_form | 21P-4706c            | Y   | Y                 |                      |             | Y             |
| va_form | 29-4125              | Y   | Y                 |                      |             | Y             |
| va_form | VA2346b              | Y   | Y                 |                      |             | Y             |
| va_form | 29-4125a             | Y   | Y                 |                      |             | Y             |
| va_form | 26-421               | Y   | Y                 |                      |             |               |
| va_form | 26-8106              | Y   | Y                 |                      |             |               |
| va_form | 26-0503              | Y   | Y                 |                      |             |               |
| va_form | 26-8644              | Y   | Y                 |                      |             |               |
| va_form | 26-1833              | Y   | Y                 |                      |             |               |
| va_form | 28-0588              | Y   | Y                 |                      |             |               |
| va_form | 26-8730              | Y   | Y                 |                      |             |               |
| va_form | 26-8731a             | Y   | Y                 |                      |             |               |
| va_form | 26-8731b             | Y   | Y                 |                      |             |               |
| va_form | 26-8731c             | Y   | Y                 |                      |             |               |
| va_form | 26-1814              | Y   | Y                 |                      |             |               |
| va_form | 26-8599              | Y   | Y                 |                      |             |               |
| va_form | 26-6807a             | Y   | Y                 |                      |             |               |
| va_form | 26-8827              | Y   | Y                 |                      |             |               |
| va_form | 22-8597              | Y   | Y                 |                      |             |               |
| va_form | 10-7959D             | Y   | Y                 |                      |             |               |
| va_form | 26-0551              | Y   | Y                 |                      |             |               |
| va_form | 29-380               | Y   | Y                 |                      |             |               |
| va_form | 29-0563              | Y   | Y                 |                      |             |               |
| va_form | 29-0532-1            | Y   | Y                 |                      |             |               |
| va_form | 26-1849              | Y   | Y                 |                      |             |               |
| va_form | 26-1859              | Y   | Y                 |                      |             |               |
| va_form | 26-8149              | Y   | Y                 |                      |             |               |
| va_form | 26-8641a             | Y   | Y                 |                      |             |               |
| va_form | 26-8712              | Y   | Y                 |                      |             |               |
| va_form | 26-6363              | Y   | Y                 |                      |             |               |
| va_form | 26-8629              | Y   | Y                 |                      |             |               |
| va_form | 26-8630              | Y   | Y                 |                      |             |               |
| va_form | 26-0286              | Y   | Y                 |                      |             |               |
| va_form | 10-7959A             | Y   | Y                 |                      |             |               |
| va_form | VA40-4970            | Y   | Y                 |                      |             |               |
| va_form | 29-0309              | Y   | Y                 |                      |             |               |
| va_form | 10-583               | Y   | Y                 |                      |             |               |
| va_form | 22-0848              | Y   | Y                 |                      |             |               |
| va_form | 22-8889              | Y   | Y                 |                      |             |               |
| va_form | 26-0585              | Y   | Y                 |                      |             |               |
| va_form | 21P-524              | Y   | Y                 |                      |             |               |
| va_form | 26-0592              | Y   | Y                 |                      |             |               |
| va_form | 28764                | Y   | Y                 |                      |             |               |
| va_form | 10-0103              | Y   | Y                 |                      |             |               |
| va_form | 28-1902w             | Y   | Y                 |                      |             |               |
| va_form | VA4597               | Y   | Y                 |                      |             |               |
| va_form | 22-1999c             | Y   | Y                 |                      |             |               |
| va_form | 29-0975              | Y   | Y                 |                      |             |               |
| va_form | 29-8636              | Y   | Y                 |                      |             |               |
| va_form | VA40-1330            | Y   | Y                 |                      |             |               |
| va_form | VA40-1330M           | Y   | Y                 |                      |             |               |
| va_form | 40-1330              | Y   | Y                 |                      |             |               |
| va_form | 40-1330M             | Y   | Y                 |                      |             |               |
| va_form | 22-8691              | Y   | Y                 |                      |             |               |
| va_form | 22-8692a             | Y   | Y                 |                      |             |               |
| va_form | 22-8692b             | Y   | Y                 |                      |             |               |
| va_form | 21-4142a             | Y   | Y                 |                      |             |               |
| va_form | 21P-0571             | Y   | Y                 |                      |             |               |
| va_form | 21P-0784             | Y   | Y                 |                      |             |               |
| va_form | 5655blank            | Y   | Y                 |                      |             |               |
| va_form | 21P-4171             | Y   | Y                 |                      |             |               |
| va_form | 21P-8416b            | Y   | Y                 |                      |             |               |
| va_form | 21P-8924             | Y   | Y                 |                      |             |               |
| va_form | 21P-8941             | Y   | Y                 |                      |             |               |
| va_form | 10-10152             | Y   | Y                 |                      |             |               |
| va_form | 21P-4185             | Y   | Y                 |                      |             |               |
| va_form | 21P-535              | Y   | Y                 |                      |             |               |
| va_form | 26-6381              | Y   | Y                 |                      |             |               |
| va_form | 29-1549              | Y   | Y                 |                      |             |               |
| va_form | 29-541               | Y   | Y                 |                      |             |               |
| va_form | 29-8485              | Y   | Y                 |                      |             |               |
| va_form | 29-8485a             | Y   | Y                 |                      |             |               |
| va_form | 29-888               | Y   | Y                 |                      |             |               |
| va_form | 21P-0510             | Y   | Y                 |                      |             |               |
| va_form | 21P-0510(Spanish)    | Y   | Y                 |                      |             |               |
| va_form | 21P-0512s-1          | Y   | Y                 |                      |             |               |
| va_form | 21P-0512s-1(Spanish) | Y   | Y                 |                      |             |               |
| va_form | 21P-0512V-1          | Y   | Y                 |                      |             |               |
| va_form | 21P-0513-1           | Y   | Y                 |                      |             |               |
| va_form | 21P-0513-1(Spanish)  | Y   | Y                 |                      |             |               |
| va_form | 21P-0514-1           | Y   | Y                 |                      |             |               |
| va_form | 21P-0514-1(Spanish)  | Y   | Y                 |                      |             |               |
| va_form | 21P-0516-1           | Y   | Y                 |                      |             |               |
| va_form | 21P-0516-1 (Spanish) | Y   | Y                 |                      |             |               |
| va_form | 21P-0518-1           | Y   | Y                 |                      |             |               |
| va_form | 21P-0518-1(Spanish)  | Y   | Y                 |                      |             |               |
| va_form | 21P-0519c-1          | Y   | Y                 |                      |             |               |
| va_form | 21P-0519C-1(Spanish) | Y   | Y                 |                      |             |               |
| va_form | 21P-0519s-1          | Y   | Y                 |                      |             |               |
| va_form | 21P-0519S-1(Spanish) | Y   | Y                 |                      |             |               |
| va_form | 22-0993              | Y   | Y                 |                      |             |               |
| va_form | 22-0997              | Y   | Y                 |                      |             |               |
| va_form | 26-6393              | Y   | Y                 |                      |             |               |
| va_form | 29-0543              | Y   | Y                 |                      |             |               |
| va_form | 26-4555              | Y   | Y                 |                      |             |               |
| va_form | 26-8923              | Y   | Y                 |                      |             |               |
| va_form | 21P-534a             | Y   | Y                 |                      |             |               |
| va_form | 21P-8416             | Y   | Y                 |                      |             |               |
| va_form | 26-1852              | Y   | Y                 |                      |             |               |
| va_form | 21P-0847             | Y   | Y                 |                      |             |               |
| va_form | 22-6553d-1           | Y   | Y                 |                      |             |               |
| va_form | VA9                  | Y   | Y                 |                      |             |               |
| va_form | 9                    | Y   | Y                 |                      |             |               |
| va_form | 10-5345a-MHV         | Y   | Y                 |                      |             |               |
| va_form | 10182                | Y   | Y                 |                      |             |               |
| va_form | 20-0996              | Y   | Y                 |                      |             |               |
| va_form | 29-586               | Y   | Y                 |                      |             |               |
| va_form | 21P-10194            | Y   | Y                 |                      |             |               |
| va_form | 21P-10195            | Y   | Y                 |                      |             |               |
| va_form | 21P-10196            | Y   | Y                 |                      |             |               |
| va_form | 21P-10197            | Y   | Y                 |                      |             |               |
| va_form | 21P-10198            | Y   | Y                 |                      |             |               |
| va_form | 21P-10199            | Y   | Y                 |                      |             |               |
| va_form | 21P-10202            | Y   | Y                 |                      |             |               |
| va_form | 21P-8768             | Y   | Y                 |                      |             |               |
| va_form | 29-357               | Y   | Y                 |                      |             |               |
| va_form | 29-389               | Y   | Y                 |                      |             |               |
| va_form | 21P-601              | Y   | Y                 |                      |             |               |
| va_form | VA40-10190           | Y   | Y                 |                      |             |               |
| va_form | 26-8937              | Y   | Y                 |                      |             |               |
| va_form | 21P-1775             | Y   | Y                 |                      |             |               |
| va_form | 21P-4165             | Y   | Y                 |                      |             |               |
| va_form | 21P-4718a            | Y   | Y                 |                      |             |               |
| va_form | 21P-530a             | Y   | Y                 |                      |             |               |
| va_form | 22-10201             | Y   | Y                 |                      |             |               |
| va_form | 22-10204             | Y   | Y                 |                      |             |               |
| va_form | 26-1817              | Y   | Y                 |                      |             |               |
| va_form | 26-6808              | Y   | Y                 |                      |             |               |
| va_form | 26-8084              | Y   | Y                 |                      |             |               |
| va_form | 29-0165              | Y   | Y                 |                      |             |               |
| va_form | 21P-8049             | Y   | Y                 |                      |             |               |
| va_form | 26-8844              | Y   | Y                 |                      |             |               |
| va_form | 22-6553c             | Y   | Y                 |                      |             |               |
| va_form | 22-8979              | Y   | Y                 |                      |             |               |
| va_form | VA Form 22-8979      | Y   | Y                 |                      |             |               |
| va_form | 22-0839              | Y   | Y                 |                      |             |               |
| va_form | 26-1802a             | Y   | Y                 |                      |             |               |
| va_form | 22-0989              | Y   | Y                 |                      |             |               |
| va_form | 26-6382              | Y   | Y                 |                      |             |               |
| va_form | 26-6807              | Y   | Y                 |                      |             |               |
| va_form | 26-8261a             | Y   | Y                 |                      |             |               |
| va_form | VA40-10088           | Y   | Y                 |                      |             |               |
| va_form | 22-0803              | Y   | Y                 |                      |             |               |
| va_form | 22-1990t             | Y   | Y                 |                      |             |               |
| va_form | 22-5281              | Y   | Y                 |                      |             |               |
| va_form | 26-1839              | Y   | Y                 |                      |             |               |
| va_form | 22-0976              | Y   | Y                 |                      |             |               |
| va_form | 26-1805              | Y   | Y                 |                      |             |               |
| va_form | VA40-0247            | Y   | Y                 |                      |             |               |
| va_form | 10-252               | Y   | Y                 |                      |             |               |
| va_form | 22-0810              | Y   | Y                 |                      |             |               |
| va_form | 26-1820              | Y   | Y                 |                      |             |               |
| va_form | 26-8497              | Y   | Y                 |                      |             |               |
| va_form | 26-8497a             | Y   | Y                 |                      |             |               |
| va_form | 29-0188              | Y   | Y                 |                      |             |               |
| va_form | 29-352               | Y   | Y                 |                      |             |               |
| va_form | 29-353               | Y   | Y                 |                      |             |               |
| va_form | 10-5345a             | Y   | Y                 |                      |             |               |
| va_form | 22-8864              | Y   | Y                 |                      |             |               |
| va_form | 22-8865              | Y   | Y                 |                      |             |               |
| va_form | 26-4555c             | Y   | Y                 |                      |             |               |
| va_form | 26-6705              | Y   | Y                 |                      |             |               |
| va_form | 26-6705b             | Y   | Y                 |                      |             |               |
| va_form | 26-6705d             | Y   | Y                 |                      |             |               |
| va_form | 28-10212             | Y   | Y                 |                      |             |               |
| va_form | 10-0003k             | Y   | Y                 |                      |             | Y             |
| va_form | 10-1313-4            | Y   | Y                 |                      |             |               |
| va_form | 4676a                | Y   | Y                 |                      |             |               |
| va_form | VA1100               | Y   | Y                 |                      |             |               |
| va_form | VA2130               | Y   | Y                 |                      |             |               |
| va_form | VA3288               | Y   | Y                 |                      |             |               |
| va_form | 3288                 | Y   | Y                 |                      |             |               |
| va_form | 20-572               | Y   | Y                 |                      |             |               |
| va_form | 22-8873              | Y   |                   |                      |             |               |
| va_form | 44478                | Y   | Y                 |                      |             |               |
| va_form | VA1107               | Y   | Y                 |                      |             |               |
| va_form | 10-1313-10           | Y   | Y                 |                      |             |               |
| va_form | 10-1313-11           | Y   | Y                 |                      |             |               |
| va_form | 10-1313-3            | Y   | Y                 |                      |             |               |
| va_form | 10-1313-7            | Y   | Y                 |                      |             |               |
| va_form | 10-1313-8            | Y   | Y                 |                      |             |               |
| va_form | VA4107               | Y   | Y                 |                      |             | Y             |
| va_form | VA4107VHA            | Y   |                   |                      |             |               |
| va_form | VA4107c              | Y   | Y                 |                      |             |               |
| va_form | 10-1313A             | Y   | Y                 |                      |             |               |
| va_form | 10-1436              | Y   | Y                 |                      |             |               |
| va_form | 44481                | Y   | Y                 |                      |             |               |
| va_form | 20-8800              | Y   | Y                 |                      |             |               |
| va_form | 21-6898              | Y   | Y                 |                      |             |               |
| va_form | 26-8791              | Y   | Y                 |                      |             |               |
| va_form | 26-8812              | Y   | Y                 |                      |             |               |
| va_form | VA2793               | Y   | Y                 |                      |             |               |
| va_form | FL70-2               | Y   | Y                 |                      |             |               |
| va_form | 10-0400a             | Y   | Y                 |                      |             |               |
| va_form | 10-0398              | Y   | Y                 |                      |             |               |
| va_form | 10-1314              | Y   | Y                 |                      |             |               |
| va_form | 44475                | Y   | Y                 |                      |             |               |
| va_form | 10-1023              | Y   | Y                 |                      |             |               |
| va_form | 10-0094d             | Y   | Y                 |                      |             |               |
| va_form | 10-0094e             | Y   | Y                 |                      |             |               |
| va_form | 10-0094f             | Y   | Y                 |                      |             |               |
| va_form | 10-0094g             | Y   | Y                 |                      |             |               |
| va_form | FL-10-426            | Y   | Y                 |                      |             |               |
| va_form | 10-0388              | Y   | Y                 |                      |             |               |
| va_form | 10-0376a             | Y   | Y                 |                      |             |               |
| va_form | 21-8767              | Y   | Y                 |                      |             |               |
| va_form | 10-0408              | Y   | Y                 |                      |             |               |
| va_form | 10-0381              | Y   | Y                 |                      |             |               |
| va_form | 10-1223              | Y   | Y                 |                      |             |               |
| va_form | 10-0102              | Y   | Y                 |                      |             |               |
| va_form | 10-0415              | Y   | Y                 |                      |             |               |
| va_form | 20-8206              | Y   | Y                 |                      |             |               |
| va_form | 10-0144a             | Y   | Y                 |                      |             |               |
| va_form | FL-10-341a           | Y   | Y                 |                      |             |               |
| va_form | VA4107INS            | Y   |                   |                      |             |               |
| va_form | 10-0144              | Y   | Y                 |                      |             |               |
| va_form | 21-8760              | Y   | Y                 |                      |             |               |
| va_form | 10-0445              | Y   | Y                 |                      |             |               |
| va_form | 10-1313-1            | Y   | Y                 |                      |             |               |
| va_form | 10-0455              | Y   | Y                 |                      |             |               |
| va_form | 10-0455a             | Y   | Y                 |                      |             |               |
| va_form | 28764                | Y   | Y                 |                      |             |               |
| va_form | 10-1170              | Y   | Y                 |                      |             |               |
| va_form | 21-0790              | Y   | Y                 |                      |             |               |
| va_form | VA0730b              | Y   | Y                 |                      |             |               |
| va_form | 10-0430              | Y   | Y                 |                      |             |               |
| va_form | 10-0459              | Y   | Y                 |                      |             |               |
| va_form | 10-1394              | Y   | Y                 |                      |             |               |
| va_form | 10-0460              | Y   | Y                 |                      |             |               |
| va_form | 44480                | Y   | Y                 |                      |             |               |
| va_form | FL1-28               | Y   | Y                 |                      |             |               |
| va_form | FL1-28a              | Y   | Y                 |                      |             |               |
| va_form | FL-10-90             | Y   | Y                 |                      |             |               |
| va_form | 21-8764              | Y   | Y                 |                      |             |               |
| va_form | 21-8764a             | Y   | Y                 |                      |             |               |
| va_form | VA5655               | Y   | Y                 |                      |             |               |
| va_form | 5655                 | Y   | Y                 |                      |             |               |
| va_form | 10-6056A             | Y   | Y                 |                      |             |               |
| va_form | FL 4-437             | Y   | Y                 |                      |             |               |
| va_form | 10-7959E             | Y   | Y                 |                      |             |               |
| va_form | VA0904               | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-10         | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-11         | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-12         | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-13         | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-15         | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-16         | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-17         | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-2          | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-3          | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-6          | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-7          | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-8          | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-9          | Y   | Y                 |                      |             |               |
| va_form | 10-0436              | Y   | Y                 |                      |             |               |
| va_form | 10-0474              | Y   | Y                 |                      |             |               |
| va_form | VA4107VRE            | Y   |                   |                      |             |               |
| va_form | 10-10072A            | Y   | Y                 |                      |             |               |
| va_form | 10-1245C             | Y   | Y                 |                      |             |               |
| va_form | 10-2850D             | Y   | Y                 |                      |             |               |
| va_form | 10-0408A             | Y   | Y                 |                      |             |               |
| va_form | 21-0506              | Y   | Y                 |                      |             |               |
| va_form | 10-6001a             | Y   | Y                 |                      |             |               |
| va_form | 10-10072C            | Y   | Y                 |                      |             |               |
| va_form | VA0730a              | Y   | Y                 |                      |             |               |
| va_form | VA40-0895-14         | Y   | Y                 |                      |             |               |
| va_form | 10-0246              | Y   | Y                 |                      |             |               |
| va_form | 10-0525a             | Y   | Y                 |                      |             |               |
| va_form | 10-0388-10           | Y   | Y                 |                      |             |               |
| va_form | 10-0388-12           | Y   | Y                 |                      |             |               |
| va_form | 10-0388-14           | Y   | Y                 |                      |             |               |
| va_form | 10-0388-2            | Y   | Y                 |                      |             |               |
| va_form | 10-0388-3            | Y   | Y                 |                      |             |               |
| va_form | 10-0388-8            | Y   | Y                 |                      |             |               |
| va_form | 10-10072             | Y   | Y                 |                      |             |               |
| va_form | VA0120               | Y   | Y                 |                      |             |               |
| va_form | 10-0525              | Y   | Y                 |                      |             |               |
| va_form | 26-8736b             | Y   | Y                 |                      |             |               |
| va_form | 10-0143              | Y   | Y                 |                      |             |               |
| va_form | VA8824i              | Y   | Y                 |                      |             |               |
| va_form | VA0730h              | Y   | Y                 |                      |             |               |
| va_form | VA0730i              | Y   | Y                 |                      |             |               |
| va_form | 10-10EC              | Y   | Y                 |                      |             |               |
| va_form | 10-3203a             | Y   | Y                 |                      |             |               |
| va_form | 10-10118             | Y   | Y                 |                      |             |               |
| va_form | 10-10HS              | Y   | Y                 |                      |             |               |
| va_form | 20-0968              | Y   | Y                 |                      |             |               |
| va_form | VA0220               | Y   | Y                 |                      |             |               |
| va_form | VA0877               | Y   | Y                 |                      |             |               |
| va_form | 21-651               | Y   | Y                 |                      |             |               |
| va_form | 44476                | Y   | Y                 |                      |             |               |
| va_form | 44479                | Y   | Y                 |                      |             |               |
| va_form | 10-0143a             | Y   | Y                 |                      |             |               |
| va_form | 10-0386              | Y   | Y                 |                      |             |               |
| va_form | 10-0388-4            | Y   | Y                 |                      |             |               |
| va_form | 10-0388-6            | Y   | Y                 |                      |             |               |
| va_form | 10-0388-9            | Y   | Y                 |                      |             |               |
| va_form | 10-0400              | Y   | Y                 |                      |             |               |
| va_form | 10-0462              | Y   | Y                 |                      |             |               |
| va_form | 10-10072B            | Y   | Y                 |                      |             |               |
| va_form | 10-1086              | Y   | Y                 |                      |             |               |
| va_form | 10-1313-2            | Y   | Y                 |                      |             |               |
| va_form | 10-1313-5            | Y   | Y                 |                      |             |               |
| va_form | 10-1313-6            | Y   | Y                 |                      |             |               |
| va_form | 24746                | Y   | Y                 |                      |             |               |
| va_form | 10-0383              | Y   | Y                 |                      |             |               |
| va_form | 10-0527              | Y   | Y                 |                      |             |               |
| va_form | 24016                | Y   | Y                 |                      |             |               |
| va_form | 20363                | Y   | Y                 |                      |             |               |
| va_form | 10-10145             | Y   | Y                 |                      |             |               |
| va_form | 10-493               | Y   | Y                 |                      |             |               |
| va_form | 10-493a              | Y   | Y                 |                      |             |               |
| va_form | 10-5588A             | Y   | Y                 |                      |             |               |
| va_form | 10-10065             | Y   | Y                 |                      |             |               |
| va_form | 18537                | Y   | Y                 |                      |             |               |
| va_form | 33878                | Y   | Y                 |                      |             |               |
| va_form | 10-2850A             | Y   | Y                 |                      |             |               |
| va_form | 10-10SH              | Y   | Y                 |                      |             |               |
| va_form | VA0896a              | Y   | Y                 |                      |             |               |
| va_form | 32417                | Y   | Y                 |                      |             |               |
| va_form | 10-0426              | Y   | Y                 |                      |             |               |
| va_form | 10-10M               | Y   | Y                 |                      |             |               |
| va_form | VA4597a              | Y   | Y                 |                      |             |               |
| va_form | VA4597b              | Y   | Y                 |                      |             |               |
| va_form | 10-2649B             | Y   | Y                 |                      |             |               |
| va_form | VA4939               | Y   | Y                 |                      |             |               |
| va_form | 21-0789              | Y   | Y                 |                      |             |               |
| va_form | 21-8960-1            | Y   | Y                 |                      |             |               |
| va_form | VA0710               | Y   | Y                 |                      |             |               |
| va_form | 10-0454              | Y   | Y                 |                      |             |               |
| va_form | VA10091              | Y   | Y                 |                      |             |               |
| va_form | 10091                | Y   | Y                 |                      |             |               |
| va_form | 21-4192              | Y   | Y                 |                      |             |               |
| va_form | 10-1313-13           | Y   | Y                 |                      |             |               |
| va_form | 21-4140              | Y   | Y                 |                      |             |               |
| va_form | 21-8940              | Y   | Y                 |                      |             |               |
| va_form | 21-4193              | Y   | Y                 |                      |             |               |
| va_form | 21-4170              | Y   | Y                 |                      |             |               |
| va_form | 10-10154             | Y   | Y                 |                      |             |               |
| va_form | 21-0788              | Y   | Y                 |                      |             |               |
| va_form | 21-4502              | Y   | Y                 |                      |             |               |
| va_form | 26-0785              | Y   | Y                 |                      |             |               |
| va_form | 26-0829              | Y   | Y                 |                      |             |               |
| va_form | 21-674b              | Y   | Y                 |                      |             |               |
| va_form | 21-0819              | Y   | Y                 |                      |             |               |
| va_form | 27-0501              | Y   | Y                 |                      |             |               |
| va_form | VA10101              | Y   | Y                 |                      |             |               |
| va_form | 19998                | Y   | Y                 |                      |             |               |
| va_form | 20363                | Y   | Y                 |                      |             |               |
| va_form | 26-6681              | Y   | Y                 |                      |             |               |
| va_form | VA6298               | Y   | Y                 |                      |             |               |
| va_form | 26-0967              | Y   | Y                 |                      |             |               |
| va_form | 26-0967a             | Y   | Y                 |                      |             |               |
| va_form | VA10182              | Y   | Y                 |                      |             |               |
| va_form | 19633                | Y   | Y                 |                      |             |               |
| va_form | 10-10171             | Y   | Y                 |                      |             |               |
| va_form | 10-2649A             | Y   | Y                 |                      |             |               |
| va_form | 10-0003K-2           | Y   | Y                 |                      |             |               |
| va_form | 10-10163             | Y   | Y                 |                      |             |               |
| va_form | 21-0972              | Y   | Y                 |                      |             |               |
| va_form | 21-8951-2            | Y   | Y                 |                      |             |               |
| va_form | 21-0304              | Y   | Y                 |                      |             |               |
| va_form | 21-0307              | Y   | Y                 |                      |             |               |
| va_form | VA21                 | Y   | Y                 |                      |             |               |
| va_form | 10-0491              | Y   | Y                 |                      |             |               |
| va_form | 10-0491A             | Y   | Y                 |                      |             |               |
| va_form | 10-0491C             | Y   | Y                 |                      |             |               |
| va_form | 10-0491D             | Y   | Y                 |                      |             |               |
| va_form | 10-0491E             | Y   | Y                 |                      |             |               |
| va_form | 10-0491F             | Y   | Y                 |                      |             |               |
| va_form | 10-0491G             | Y   | Y                 |                      |             |               |
| va_form | 10-0491H             | Y   | Y                 |                      |             |               |
| va_form | 10-0491I             | Y   | Y                 |                      |             |               |
| va_form | 10-0491J             | Y   | Y                 |                      |             |               |
| va_form | 10-0491K             | Y   | Y                 |                      |             |               |
| va_form | 10-0491L             | Y   | Y                 |                      |             |               |
| va_form | 10-0491n             | Y   | Y                 |                      |             |               |
| va_form | 10-10164             | Y   | Y                 |                      |             |               |
| va_form | VA21a                | Y   | Y                 |                      |             |               |
| va_form | 10-0998              | Y   | Y                 |                      |             |               |
| va_form | 10-253               | Y   | Y                 |                      |             |               |
| va_form | 24-0296              | Y   |                   |                      |             |               |
| va_form | 24-0296a             | Y   |                   |                      |             |               |
| va_form | 10-0388-1            | Y   | Y                 |                      |             |               |
| va_form | 10-0388-13           | Y   | Y                 |                      |             |               |
| va_form | 10-0388-5            | Y   | Y                 |                      |             |               |
| va_form | 44472                | Y   | Y                 |                      |             |               |
| va_form | 26-8736              | Y   | Y                 |                      |             |               |
| va_form | 21-10210             | Y   | Y                 |                      |             |               |
| va_form | 27-2008              | Y   | Y                 |                      |             |               |
| va_form | 21-0538              | Y   | Y                 |                      |             |               |
| va_form | 26-8736a             | Y   | Y                 |                      |             |               |
| va_form | 20-10206             | Y   | Y                 |                      |             |               |
| va_form | 20-10208             | Y   | Y                 |                      |             |               |
| va_form | 26-0971              | Y   | Y                 |                      |             |               |
| va_form | VA40-0241            | Y   | Y                 |                      |             |               |
| va_form | 10-0379              | Y   | Y                 |                      |             |               |
| va_form | GSA-2580             | Y   |                   |                      |             |               |
| va_form | SF 252               | Y   |                   |                      |             |               |
| va_form | OF-8                 | Y   |                   |                      |             |               |
| va_form | VA4670               | Y   |                   |                      |             |               |
| va_form | SF-52                | Y   |                   |                      |             |               |
| va_form | SF52(ES)             | Y   |                   |                      |             |               |
| va_form | VA4667b              | Y   |                   |                      |             |               |
| va_form | VA4667c              | Y   |                   |                      |             |               |
| va_form | SF88                 | Y   |                   |                      |             |               |
| va_form | SF2819               | Y   |                   |                      |             |               |
| va_form | SF2810               | Y   |                   |                      |             |               |
| va_form | SF144                | Y   |                   |                      |             |               |
| va_form | GSA2972              | Y   |                   |                      |             |               |
| va_form | VA3215               | Y   |                   |                      |             |               |
| va_form | 26-1844              | Y   |                   |                      |             |               |
| va_form | SF-424               | Y   |                   |                      |             |               |
| va_form | VA0880a              | Y   |                   |                      |             |               |
| va_form | VA0880b              | Y   |                   |                      |             |               |
| va_form | SF2801               | Y   |                   |                      |             |               |
| va_form | VA0862               | Y   |                   |                      |             |               |
| va_form | VA0927a              | Y   |                   |                      |             |               |
| va_form | VA0927b              | Y   |                   |                      |             |               |
| va_form | VA0927c              | Y   |                   |                      |             |               |
| va_form | VA0927d              | Y   |                   |                      |             |               |
| va_form | VA0927e              | Y   |                   |                      |             |               |
| va_form | VA10002              | Y   |                   |                      |             |               |
| va_form | SF-1188              | Y   |                   |                      |             |               |
| va_form | SF39                 | Y   |                   |                      |             |               |
| va_form | SF-26                | Y   |                   |                      |             |               |
| va_form | SF3112               | Y   |                   |                      |             |               |
| va_form | SF2808               | Y   |                   |                      |             |               |
| va_form | SF-1152              | Y   |                   |                      |             |               |
| va_form | VA4637               | Y   |                   |                      |             |               |
| va_form | OF-306               | Y   |                   |                      |             |               |
| va_form | 10-0484              | Y   |                   |                      |             |               |
| va_form | SF-85                | Y   |                   |                      |             |               |
| va_form | SF-33                | Y   |                   |                      |             |               |
| va_form | SF 1442              | Y   |                   |                      |             |               |
| va_form | SF-1094              | Y   |                   |                      |             |               |
| va_form | SF-1094A             | Y   |                   |                      |             |               |
| va_form | VA646                | Y   |                   |                      |             |               |
| va_form | 10-0388-7            | Y   |                   |                      |             |               |
| va_form | SF180                | Y   |                   |                      |             |               |
| va_form | SF2809               | Y   |                   |                      |             |               |
| va_form | 21-0960C-5           | Y   |                   |                      |             |               |
| va_form | 21-0960C-8           | Y   |                   |                      |             |               |
| va_form | 21-0960C-9           | Y   |                   |                      |             |               |
| va_form | 21-0960G-1           | Y   |                   |                      |             |               |
| va_form | 21-0960G-2           | Y   |                   |                      |             |               |
| va_form | 21-0960G-3           | Y   |                   |                      |             |               |
| va_form | 21-0960G-4           | Y   |                   |                      |             |               |
| va_form | 21-0960G-5           | Y   |                   |                      |             |               |
| va_form | 21-0960G-6           | Y   |                   |                      |             |               |
| va_form | 21-0960G-7           | Y   |                   |                      |             |               |
| va_form | 21-0960G-8           | Y   |                   |                      |             |               |
| va_form | 21-0960H-2           | Y   |                   |                      |             |               |
| va_form | 21-0960K-1           | Y   |                   |                      |             |               |
| va_form | 21-0960K-2           | Y   |                   |                      |             |               |
| va_form | 21-0960L-2           | Y   |                   |                      |             |               |
| va_form | 21-0960M-11          | Y   |                   |                      |             |               |
| va_form | 21-0960N-1           | Y   |                   |                      |             |               |
| va_form | 10-0485              | Y   |                   |                      |             |               |
| va_form | 21-0960A-1           | Y   |                   |                      |             |               |
| va_form | 21-0960B-1           | Y   |                   |                      |             |               |
| va_form | 21-0960C-1           | Y   |                   |                      |             |               |
| va_form | 21-0960M-4           | Y   |                   |                      |             |               |
| va_form | 21-0960M-8           | Y   |                   |                      |             |               |
| va_form | 21-0960M-9           | Y   |                   |                      |             |               |
| va_form | VA8                  | Y   |                   |                      |             |               |
| va_form | OF 1164              | Y   |                   |                      |             |               |
| va_form | 21-0960M-12          | Y   |                   |                      |             |               |
| va_form | 21-0960M-14          | Y   |                   |                      |             |               |
| va_form | 21-0960M-3           | Y   |                   |                      |             |               |
| va_form | 21-0960M-6           | Y   |                   |                      |             |               |
| va_form | 21-0960M-7           | Y   |                   |                      |             |               |
| va_form | 21-0960A-2           | Y   |                   |                      |             |               |
| va_form | 21-0960A-3           | Y   |                   |                      |             |               |
| va_form | 21-0960A-4           | Y   |                   |                      |             |               |
| va_form | 18537                | Y   |                   |                      |             |               |
| va_form | 21-0960C-4           | Y   |                   |                      |             |               |
| va_form | 21-0960E-1           | Y   |                   |                      |             |               |
| va_form | 21-0960F-1           | Y   |                   |                      |             |               |
| va_form | 21-0960F-2           | Y   |                   |                      |             |               |
| va_form | 21-0960M-1           | Y   |                   |                      |             |               |
| va_form | 21-0960M-10          | Y   |                   |                      |             |               |
| va_form | 21-0960M-13          | Y   |                   |                      |             |               |
| va_form | 21-0960M-15          | Y   |                   |                      |             |               |
| va_form | 21-0960M-16          | Y   |                   |                      |             |               |
| va_form | 21-0960M-2           | Y   |                   |                      |             |               |
| va_form | 21-0960N-2           | Y   |                   |                      |             |               |
| va_form | GSA2957              | Y   |                   |                      |             |               |
| va_form | 21-0960B-2           | Y   |                   |                      |             |               |
| va_form | 21-0960C-10          | Y   |                   |                      |             |               |
| va_form | 21-0960C-2           | Y   |                   |                      |             |               |
| va_form | 21-0960I-1           | Y   |                   |                      |             |               |
| va_form | 21-0960I-6           | Y   |                   |                      |             |               |
| va_form | 21-0960J-1           | Y   |                   |                      |             |               |
| va_form | 21-0960J-2           | Y   |                   |                      |             |               |
| va_form | 21-0960J-3           | Y   |                   |                      |             |               |
| va_form | 21-0960P-1           | Y   |                   |                      |             |               |
| va_form | 21-0960P-2           | Y   |                   |                      |             |               |
| va_form | 10-10172             | Y   | Y                 |                      |             |               |
| va_form | 21-0960P-3           | Y   |                   |                      |             |               |
| va_form | 21-0958              | Y   |                   |                      |             |               |
| va_form | 21-0960C-11          | Y   |                   |                      |             |               |
| va_form | 21-0960C-3           | Y   |                   |                      |             |               |
| va_form | 21-0960C-6           | Y   |                   |                      |             |               |
| va_form | 21-0960C-7           | Y   |                   |                      |             |               |
| va_form | 21-0960D-1           | Y   |                   |                      |             |               |
| va_form | 21-0960E-2           | Y   |                   |                      |             |               |
| va_form | 21-0960E-3           | Y   |                   |                      |             |               |
| va_form | 21-0960H-1           | Y   |                   |                      |             |               |
| va_form | 21-0960I-2           | Y   |                   |                      |             |               |
| va_form | 21-0960I-3           | Y   |                   |                      |             |               |
| va_form | 21-0960I-4           | Y   |                   |                      |             |               |
| va_form | 21-0960I-5           | Y   |                   |                      |             |               |
| va_form | 21-0960J-4           | Y   |                   |                      |             |               |
| va_form | 21-0960L-1           | Y   |                   |                      |             |               |
| va_form | 21-0960N-3           | Y   |                   |                      |             |               |
| va_form | 21-0960N-4           | Y   |                   |                      |             |               |
| va_form | 21-0960Q-1           | Y   |                   |                      |             |               |
| va_form | 10-0137B             | Y   |                   |                      |             |               |
| va_form | 10-10EZ (pdf)        | Y   |                   |                      |             |               |
| va_form | SF-1199a             | Y   |                   |                      |             |               |
| va_form | VA40-10007           | Y   |                   |                      |             |               |
| va_form | 10-0539              | Y   |                   |                      |             |               |
| va_form | 10-0708              | Y   |                   |                      |             |               |
| va_form | 10-250               | Y   |                   |                      |             |               |
| va_form | 10-0464a             | Y   |                   |                      |             |               |

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
