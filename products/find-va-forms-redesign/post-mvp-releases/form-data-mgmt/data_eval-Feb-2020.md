# Feb 2021 VA Form Data Evaluation

## Purpose
This evaluation was performed to get a current status on the number and types of forms currently available via the Find a VA Form product.  A secondary purpose was to identify data inconsistencies and issues that could generate errors or unexpected behavior. 

## Data Source
Marci McGuire (Find a VA Form Product Manager) performed this evaluation on 2/25/2021.  The data referenced in this evaluation was retrieved by Zach Morel (FE Engineer) via the **Lighthouse API** on Feb 24, 2021.  This data source combines data from the **VA Forms database** and forms data stored in the **Drupal CMS**.

## Contents
- [Form Counts](#form-counts)


- [Form VA.gov Feature Matrix](#form-vagov-feature-matrix)

    
-  [Data Issues](#data-issues)
    - [Invalid PDF links](#invalid-pdf-links)
    - [Problematic PDF links](#Problematic-PDF-links) (note - these links may work on browsers that are more "forgiving", but not on others)
    - [PDF URLs missing .pdf file extension](#PDF-URLs-missing-pdf-file-extension)
    - [Valid PDF links flagged as invalid](#Valid-PDF-links-flagged-as-invalid)
    - [Forms with Tool URL but no Tool Intro](#forms-with-tool-url-but-no-tool-intro)
    - [Inconsistent form name examples](#Inconsistent-form-name-examples)
    - [Inconsistent PDF link examples](#Inconsistent-PDF-link-examples)
    - [Forms with questionable dates](#Forms-with-questionable-dates)

## Form Counts
With the exception of **Deleted forms**, below values reflect _active_ form records.

 - Active records as of 2/24/2021: **573**
 - Forms with any type of Detail Page: **446** (as determined by the presence of a value in the **Details URL** field)
 - Forms with custom detail page: **43** (as determined by the presence of a value in **Form Usage** field)
 - Forms with Online Tools: **29** (as determined by the presence of a value in the **Tool URL** field)
 - Forms with related Forms: **35**
 - Forms with Alert information: ** ** (note - we are currently determining origin of this information)
 - Deleted forms as of 2/24/2021: **13** (note - this is a _logical_ delete in the Lighthouse API - form record is still present, but contains a date value in the _Deleted At_ field.

## Form VA.gov Feature Matrix
Active records only

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

### Invalid PDF links
Confirmed that these active form records have PDF links that currently return a 404 (Not Found) error.

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



### Problematic PDF links

These links may work on browsers that are more "forgiving", but not on others due to presence of:
 - ASCII characters -- ex _%20_
 - Special characters -- ex: $ ( ) ? #
 - Overall length of file name


| type    | Name                 | PDF Link                                                                                                                                                           |
|---------|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| va_form | 16711                | https://www.va.gov/vaforms/medical/pdf/VHA%20Form%2010-5345%20Fill-revision.pdf                                                                                    |
| va_form | 19633                | https://www.va.gov/vaforms/medical/pdf/Cert%2010-2553%20Certificate%20of%20Residency_Blank%20Template.pdf                                                          |
| va_form | 44472                | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-3203%20Fill.pdf                                                                                              |
| va_form | 10-0003k             | https://www.va.gov/vaforms/medical/pdf/EISP%20Application%200003K%20.2019.pdf                                                                                      |
| va_form | 10-0003K-2           | https://www.va.gov/vaforms/medical/pdf/EISP%20Agreement.0003K-2%20-%209-26-2019%20updated.pdf                                                                      |
| va_form | 10-0137              | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-0137%20FILL.pdf                                                                                              |
| va_form | 10-0137 (espanol)    | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-0137espanol(1).pdf                                                                                           |
| va_form | 10-0137B             | https://www.va.gov/vaforms/medical/pdf/10-0137B%20current%20version.pdf                                                                                            |
| va_form | 10-0383              | https://www.va.gov/vaforms/medical/pdf/vha-10-0383-fill%20(102014).pdf                                                                                             |
| va_form | 10-0388              | https://www.va.gov/vaforms/medical/pdf/10-0388%25cover.pdf                                                                                                         |
| va_form | 10-0388-1            | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-0388-1%20Documents%20and%20Information%20Requred%20for%20State%20Home%20Construction%20and%20Acquisition.pdf |
| va_form | 10-0388-13           | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-0388-13_%20Acquisition%20and%20Grants.pdf                                                                    |
| va_form | 10-0388-5            | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-0388-5%20Additional%20Document%20and%20Information%20Acquisition%20Grants%20Application.pdf                  |
| va_form | 10-0464a             | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-0464a.pdf                                                                                                    |
| va_form | 10-0491              | https://www.va.gov/vaforms/medical/pdf/vha-10-0491-fill%20(Academic%20Verification).pdf                                                                            |
| va_form | 10-0491A             | https://www.va.gov/vaforms/medical/pdf/vha-10-0491a-fill%20(Application%20Addendum)%20(002).pdf                                                                    |
| va_form | 10-0491C             | https://www.va.gov/vaforms/medical/pdf/vha-10-0491c-fill%20(Annual%20Deferment).pdf                                                                                |
| va_form | 10-0491D             | https://www.va.gov/vaforms/medical/pdf/vha-10-0491d-fill%20(Education%20Program%20Completion).pdf                                                                  |
| va_form | 10-0491E             | https://www.va.gov/vaforms/medical/pdf/vha-10-0491e-fill%20(Evaluation%20and%20Recommendation).pdf                                                                 |
| va_form | 10-0491F             | https://www.va.gov/vaforms/medical/pdf/vha-10-0491f-fill%20(HPSP%20Agreement).pdf                                                                                  |
| va_form | 10-0491G             | https://www.va.gov/vaforms/medical/pdf/vha-10-0491g-fill%20(Application).pdf                                                                                       |
| va_form | 10-0491H             | https://www.va.gov/vaforms/medical/pdf/vha-10-0491h-fill%20(Notice%20of%20Approaching%20Graduation).pdf                                                            |
| va_form | 10-0491I             | https://www.va.gov/vaforms/medical/pdf/vha-10-0491i-fill%20(Notice%20of%20Change).pdf                                                                              |
| va_form | 10-0491J             | https://www.va.gov/vaforms/medical/pdf/vha-10-0491j-fill%20(Deferment).pdf                                                                                         |
| va_form | 10-0491K             | https://www.va.gov/vaforms/medical/pdf/vha-10-0491k-fill%20(Offer%20Response).pdf                                                                                  |
| va_form | 10-0491L             | https://www.va.gov/vaforms/medical/pdf/vha-10-0491L-fill%20(VIOMPSP%20Agreement).pdf                                                                               |
| va_form | 10-0491n             | https://www.va.gov/vaforms/medical/pdf/vha-10-0491n-fill%20(VHVMAESP%20Agreement).pdf                                                                              |
| va_form | 10-0539              | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-0539%20FILL.pdf                                                                                              |
| va_form | 10-0708              | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-0708%20Employees%20Records%20Clearance%20-%20Revised.pdf                                                     |
| va_form | 10-0998              | https://www.va.gov/vaforms/medical/pdf/10-0998%20online%20corrected.pdf                                                                                            |
| va_form | 10-10152             | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-10152-fill.pdf                                                                                               |
| va_form | 10-10154             | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-10154.pdf                                                                                                    |
| va_form | 10-10171             | https://www.va.gov/vaforms/medical/pdf/vha%2010-10171-fill.pdf                                                                                                     |
| va_form | 10-10172             | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-10172-1.pdf                                                                                                  |
| va_form | 10-10EC              | https://www.va.gov/vaforms/medical/pdf/10-10EC%20Fill%202017.pdf                                                                                                   |
| va_form | 10-250               | https://www.va.gov/vaforms/medical/pdf/VA%2010-250%20Fillable%20(002).pdf                                                                                          |
| va_form | 10-252               | https://www.va.gov/vaforms/medical/pdf/10-252%20Authorization%20To%20Release%20Protected%20Health%20Information%20To%20State%20Local%20Public%20Authorities.pdf    |
| va_form | 10-253               | https://www.va.gov/vaforms/medical/pdf/VHA%20Form%20253%20Ecclesiastical%20Endorsement%20for%20Veterans%20Affairs%20Chaplaincy%20Fill.pdf                          |
| va_form | 10-2649A             | https://www.va.gov/vaforms/medical/pdf/10-2649A%20fill.pdf                                                                                                         |
| va_form | 10-2649B             | https://www.va.gov/vaforms/medical/pdf/10-2649B%20Final.pdf                                                                                                        |
| va_form | 10-5345a             | https://www.va.gov/vaforms/medical/pdf/VHA%20Form%2010-5345a%20Fill-revision.pdf                                                                                   |
| va_form | 10-7959C             | https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-7959c.pdf                                                                                                    |
| va_form | 10-7959f-1           | https://www.va.gov/vaforms/medical/pdf/vha-10-7959f-1%20-fill_012317.pdf                                                                                           |
| va_form | 21-0960C-1           | https://www.vba.va.gov/pubs/forms/VA%20Form%2021-0960C-1.pdf                                                                                                       |
| va_form | 21P-0510(Spanish)    | https://www.vba.va.gov/pubs/forms/VBA-21P-0510(Spanish)-ARE.pdf                                                                                                    |
| va_form | 21P-0512s-1(Spanish) | https://www.vba.va.gov/pubs/forms/VBA-21P-0512s-1(Spanish)-ARE.pdf                                                                                                 |
| va_form | 21P-0513-1(Spanish)  | https://www.vba.va.gov/pubs/forms/VBA-21P-0513-1(Spanish)-ARE.pdf                                                                                                  |
| va_form | 21P-0514-1(Spanish)  | https://www.vba.va.gov/pubs/forms/VBA-21P-0514-1(Spanish)-Are.pdf                                                                                                  |
| va_form | 21P-0516-1 (Spanish) | https://www.vba.va.gov/pubs/forms/VBA-21P-0516-1(Spanish)-ARE.pdf                                                                                                  |
| va_form | 21P-0517-1(Spanish)  | https://www.vba.va.gov/pubs/forms/VBA-21P-0517-1(Spanish)-ARE.pdf                                                                                                  |
| va_form | 21P-0518-1(Spanish)  | https://www.vba.va.gov/pubs/forms/VBA-21P-0518-1(Spanish)-ARE.pdf                                                                                                  |
| va_form | 21P-0519C-1(Spanish) | https://www.vba.va.gov/pubs/forms/VBA-21P-0519C-1(Spanish)-ARE.pdf                                                                                                 |
| va_form | 21P-0519S-1(Spanish) | https://www.vba.va.gov/pubs/forms/VBA-21P-0519S-1(Spanish)-ARE.pdf                                                                                                 |
| va_form | FL-10-90             | https://www.va.gov/vaforms/medical/pdf/FL%2010-90-fill.pdf                                                                                                         |
| va_form | OF-8                 | https://www.gsa.gov/cdnstatic/OF8-85.pdf?forceDownload=1                                                                                                           |
| va_form | SF39                 | https://www.gsa.gov/cdnstatic/SF%2039.pdf?forceDownload=1                                                                                                          |
| va_form | SF-424               | https://www.grants.gov/web/grants/forms/sf-424-family.html#sortby=1                                                                                                |
| va_form | VA2346b              | https://www.va.gov/vaforms/va/pdf/VA2346b%20(electronic).pdf                                                                                                       |
| va_form | VA4637               | https://www.va.gov/vaforms/va/pdf/VA4637(ES).pdf                                                                                                                   |

### PDF URLs missing _.pdf_ file extension

| type    | Name     | PDF Link                                                                          |
|---------|----------|-----------------------------------------------------------------------------------|
| va_form | GSA-2580 | https://www.gsa.gov/portal/forms/download/114574                                  |
| va_form | GSA2957  | https://www.gsa.gov/portal/forms/download/114662                                  |
| va_form | GSA2972  | https://www.gsa.gov/portal/forms/download/114666                                  |
| va_form | OF 1164  | https://www.gsa.gov/portal/forms/download/150834                                  |
| va_form | SF 1442  | https://www.gsa.gov/portal/forms/download/115898                                  |
| va_form | SF 252   | https://www.gsa.gov/portal/forms/download/115990                                  |
| va_form | SF-1094  | https://www.gsa.gov/forms-library/united-states-tax-exemption-form                |
| va_form | SF-1094A | https://www.gsa.gov/forms-library/tax-exemption-accountability-record             |
| va_form | SF180    | https://www.archives.gov/veterans/military-service-records/standard-form-180.html |
| va_form | SF-26    | https://www.gsa.gov/portal/forms/download/116014                                  |
| va_form | SF-33    | https://www.gsa.gov/portal/forms/download/116254                                  |
| va_form | SF-424   | https://www.grants.gov/web/grants/forms/sf-424-family.html#sortby=1               |
| va_form | SF88     | https://www.gsa.gov/portal/forms/download/116402                                  |

### Valid PDF links flagged as invalid

Believe URLs are evaluated and flagged in CMS 

| type    | Name          | PDF Link                                                    | Valid PDF |
|---------|---------------|-------------------------------------------------------------|-----------|
| va_form | 10-10EZ (pdf) | https://www.va.gov/vaforms/medical/pdf/10-10EZ-fillable.pdf | FALSE     |
| va_form | VA40-10007    | https://www.va.gov/vaforms/va/pdf/VA40-10007.pdf            | FALSE

### Forms with Tool URL but no Tool Intro

| type    | Name    | Url                                                         |
|---------|---------|-------------------------------------------------------------|
| va_form | 28764   | https://www.va.gov/vaforms/medical/pdf/vha-10-2478-fill.pdf |
| va_form | 29-1546 | https://www.vba.va.gov/pubs/forms/VBA-29-1546-ARE.pdf       |
| va_form | 29-4364 | https://www.vba.va.gov/pubs/forms/VBA-29-4364-ARE.pdf       |
| va_form | 28-1900 | https://www.vba.va.gov/pubs/forms/VBA-28-1900-ARE.pdf       |


### Inconsistent form name examples
Not intended as an exhaustive list, but rather a representation of the signficant variety of form names observed.  Of specific concern is the lack of consistency in the use of:
 - Inclusion/exclusion of the department abbreviation in the name (9 vs. VA9)
 -  Hyphens (OF 1164 vs. OF-306)
 - Spaces (VA Form 22-8979)
 - Capital vs. lower-case letters ( 10-0137A vs. FL-10-341a)
 - Spanish-language indicators (esp vs. Spanish vs. ES)
 - Form names appended with additional numbers that may indicate a version or series (VA40-0895-10)
 - Inclusion/exclusion of _VA_ or _Form_ in the name (VA Form 22-897, VA0120, VA40-0241)

It is important to note that these names directly impact our ability to successfully match a user's search term to a form in our system.  These variations can also result in multiple versions of the same form being listed under different names (ex - 9 and VA9)

| type    | Name              |
|---------|-------------------|
| va_form | 9                 |
| va_form | 10-0003k          |
| va_form | 10-0003K-2        |
| va_form | 10-0094e          |
| va_form | 10-0137A          |
| va_form | 10-0388-10        |
| va_form | 10-10EZ (esp)     |
| va_form | 10-10EZ (pdf)     |
| va_form | 21P-0510(Spanish) |
| va_form | 21P-0512s-1       |
| va_form | 21P-0512V-1       |
| va_form | FL-10-341a        |
| va_form | GSA-2580          |
| va_form | OF 1164           |
| va_form | OF-306            |
| va_form | SF 252            |
| va_form | SF-1094           |
| va_form | SF144             |
| va_form | SF52(ES)          |
| va_form | VA Form 22-8979   |
| va_form | VA0120            |
| va_form | VA40-0241         |
| va_form | VA40-0895-10      |
| va_form | VA9               |

### Inconsistent PDF link examples

Not intended as an exhaustive list, but rather a representation of the signficant variety of PDF names and URL formats observed.  It is important to note that the presence of certain characters (parentheses, ASCII characters) or download/sort parameters in the URL may prevent links from opening in some browsers/PDF viewers.

### Forms with questionable dates

Form dates that warrant further scrutiny due to missing/dubious dates

#### Missing _First Issued On_ date

| type    | Name          |
|---------|---------------|
| va_form | VA40-10007    |
| va_form | 10-0137B      |
| va_form | 10-10EZ (pdf) |
| va_form | 21-0960C-11   |
| va_form | 21-0960C-3    |
| va_form | 21-0960C-6    |
| va_form | 21-0960C-7    |
| va_form | 21-0960D-1    |
| va_form | 21-0960E-2    |
| va_form | 21-0960E-3    |
| va_form | 21-0960H-1    |
| va_form | 21-0960I-2    |
| va_form | 21-0960I-3    |
| va_form | 21-0960I-4    |
| va_form | 21-0960I-5    |
| va_form | 21-0960J-4    |
| va_form | 21-0960L-1    |
| va_form | 21-0960N-3    |
| va_form | 21-0960N-4    |
| va_form | 21-0960Q-1    |
| va_form | 21-0958       |
| va_form | 21-0960B-2    |
| va_form | 21-0960C-10   |
| va_form | 21-0960C-2    |
| va_form | 21-0960I-1    |
| va_form | 21-0960I-6    |
| va_form | 21-0960J-1    |
| va_form | 21-0960J-2    |
| va_form | 21-0960J-3    |
| va_form | 21-0960P-1    |
| va_form | 21-0960P-2    |
| va_form | 21-0960P-3    |
| va_form | 21-0960A-2    |
| va_form | 21-0960A-3    |
| va_form | 21-0960A-4    |
| va_form | 21-0960C-4    |
| va_form | 21-0960E-1    |
| va_form | 21-0960F-1    |
| va_form | 21-0960F-2    |
| va_form | 21-0960M-1    |
| va_form | 21-0960M-10   |
| va_form | 21-0960M-13   |
| va_form | 21-0960M-15   |
| va_form | 21-0960M-16   |
| va_form | 21-0960M-2    |
| va_form | 21-0960N-2    |
| va_form | 21-0960M-12   |
| va_form | 21-0960M-14   |
| va_form | 21-0960M-3    |
| va_form | 21-0960M-6    |
| va_form | 21-0960M-7    |
| va_form | VA8           |
| va_form | 21-0960A-1    |
| va_form | 21-0960B-1    |
| va_form | 21-0960C-1    |
| va_form | 21-0960M-4    |
| va_form | 21-0960M-8    |
| va_form | 21-0960M-9    |
| va_form | 10-0485       |
| va_form | 21-0960C-5    |
| va_form | 21-0960C-8    |
| va_form | 21-0960C-9    |
| va_form | 21-0960G-1    |
| va_form | 21-0960G-2    |
| va_form | 21-0960G-3    |
| va_form | 21-0960G-4    |
| va_form | 21-0960G-5    |
| va_form | 21-0960G-6    |
| va_form | 21-0960G-7    |
| va_form | 21-0960G-8    |
| va_form | 21-0960H-2    |
| va_form | 21-0960K-1    |
| va_form | 21-0960K-2    |
| va_form | 21-0960L-2    |
| va_form | 21-0960M-11   |
| va_form | 21-0960N-1    |
| va_form | VA646         |
| va_form | 10-0484       |
| va_form | VA4637        |
| va_form | VA10002       |
| va_form | VA0927a       |
| va_form | VA0927b       |
| va_form | VA0927c       |
| va_form | VA0927d       |
| va_form | VA0927e       |
| va_form | VA0862        |
| va_form | VA0880a       |
| va_form | VA0880b       |
| va_form | 26-1844       |
| va_form | VA3215        |
| va_form | VA4667c       |
| va_form | VA4667b       |
| va_form | VA4670        |


#### _First Issued On_ date > 10 years

| type    | Name       | First Issued On |
|---------|------------|-----------------|
| va_form | 10-6056A   | 7/1/1980        |
| va_form | 44478      | 6/1/1997        |
| va_form | 44479      | 7/1/1997        |
| va_form | FL-10-341a | 10/1/1998       |
| va_form | 10-2649A   | 10/1/1998       |
| va_form | 10-1086    | 3/4/1999        |
| va_form | 10-1313-4  | 4/22/1999       |
| va_form | 10-1313-10 | 4/22/1999       |
| va_form | 10-1313-11 | 4/22/1999       |
| va_form | 10-1313-3  | 4/22/1999       |
| va_form | 10-1313-1  | 4/22/1999       |
| va_form | 10-1313-2  | 4/22/1999       |
| va_form | 10-1313-5  | 4/22/1999       |
| va_form | 10-1313-7  | 4/26/1999       |
| va_form | 10-1313-8  | 4/26/1999       |
| va_form | 10-1313A   | 4/26/1999       |
| va_form | 10-1313-6  | 4/26/1999       |
| va_form | 10-1436    | 6/15/1999       |
| va_form | 44481      | 1/31/2000       |
| va_form | 10-0383    | 2/22/2000       |
| va_form | 10-1313-13 | 3/9/2000        |
| va_form | 26-1814    | 1/3/2002        |
| va_form | 26-8599    | 1/7/2002        |
| va_form | 26-8791    | 1/7/2002        |
| va_form | 26-8812    | 1/7/2002        |
| va_form | 10-0400a   | 8/6/2002        |
| va_form | 10-0400    | 8/6/2002        |
| va_form | 10-0398    | 9/10/2002       |
| va_form | 10-1314    | 10/18/2002      |
| va_form | FL-10-426  | 2/26/2003       |
| va_form | FL-10-90   | 2/26/2003       |
| va_form | 44472      | 4/16/2003       |
| va_form | 44475      | 5/1/2003        |
| va_form | 10-6001a   | 5/8/2003        |
| va_form | 10-10M     | 6/5/2003        |
| va_form | 10-0137    | 6/5/2003        |
| va_form | 10-1023    | 4/2/2004        |
| va_form | 10-7959D   | 9/15/2004       |
| va_form | 10-1170    | 9/15/2004       |
| va_form | 10-7959A   | 9/15/2004       |
| va_form | 10-7959E   | 9/15/2004       |
| va_form | 44476      | 9/15/2004       |
| va_form | 10-2850C   | 9/15/2004       |
| va_form | 10-7959C   | 9/15/2004       |
| va_form | 10-10d     | 9/17/2004       |
| va_form | 18537      | 10/14/2004      |
| va_form | 10-1223    | 10/29/2004      |
| va_form | 10-10EZR   | 11/1/2004       |
| va_form | 10-0094d   | 11/19/2004      |
| va_form | 10-0094e   | 11/19/2004      |
| va_form | 10-0094f   | 11/19/2004      |
| va_form | 10-0094g   | 11/19/2004      |
| va_form | 28764      | 11/24/2004      |
| va_form | 10-0144a   | 11/24/2004      |
| va_form | 10-0144    | 11/24/2004      |
| va_form | 10-0143    | 11/24/2004      |
| va_form | 10-0143a   | 11/24/2004      |
| va_form | 20363      | 11/29/2004      |
| va_form | 10-0408    | 12/3/2004       |
| va_form | 28764      | 12/17/2004      |
| va_form | 44480      | 12/17/2004      |
| va_form | 10-583     | 12/17/2004      |
| va_form | 24016      | 12/17/2004      |
| va_form | 10-0103    | 12/22/2004      |
| va_form | 10-1394    | 12/29/2004      |
| va_form | 10-1245C   | 12/29/2004      |
| va_form | 28764      | 12/29/2004      |
| va_form | 10-2850A   | 12/29/2004      |
| va_form | 10-0379    | 12/29/2004      |
| va_form | 10-0426    | 3/31/2005       |
| va_form | 10-5345a   | 5/6/2005        |
| va_form | 10-0388    | 9/7/2005        |
| va_form | 10-0388-10 | 9/7/2005        |
| va_form | 10-0388-12 | 9/7/2005        |
| va_form | 10-0388-14 | 9/7/2005        |
| va_form | 10-0388-2  | 9/7/2005        |
| va_form | 10-0388-3  | 9/7/2005        |
| va_form | 10-0388-8  | 9/7/2005        |
| va_form | 10-0388-4  | 9/7/2005        |
| va_form | 10-0388-6  | 9/7/2005        |
| va_form | 10-0388-7  | 9/7/2005        |
| va_form | 10-0388-9  | 9/7/2005        |
| va_form | 10-0388-1  | 9/7/2005        |
| va_form | 10-0388-13 | 9/7/2005        |
| va_form | 10-0388-5  | 9/7/2005        |
| va_form | 10-0376a   | 9/8/2005        |
| va_form | 10-0381    | 11/4/2005       |
| va_form | 10-0436    | 12/19/2005      |
| va_form | 10-0102    | 3/30/2006       |
| va_form | 10-0415    | 5/1/2006        |
| va_form | 10-2649B   | 10/1/2006       |
| va_form | 10-0445    | 11/30/2006      |
| va_form | 10-7959f-1 | 12/6/2006       |
| va_form | 10-7959f-2 | 12/6/2006       |
| va_form | 10-0137A   | 1/8/2007        |
| va_form | 10-0455    | 6/1/2007        |
| va_form | 10-0455a   | 6/1/2007        |
| va_form | 26-8827    | 8/22/2007       |
| va_form | 10-0430    | 9/1/2007        |
| va_form | 10-0459    | 1/1/2008        |
| va_form | 10-0462    | 5/5/2008        |
| va_form | 10-0408A   | 9/1/2008        |
| va_form | 10-10HS    | 10/1/2008       |
| va_form | 26-8629    | 10/22/2008      |
| va_form | 10-0460    | 2/28/2009       |
| va_form | 10-2850D   | 3/1/2009        |
| va_form | 10-0454    | 3/1/2009        |
| va_form | 22-8597    | 4/29/2009       |
| va_form | 10-0474    | 8/10/2009       |
| va_form | 21-8764    | 11/3/2009       |
| va_form | 10-10065   | 2/1/2010        |
| va_form | 20-572     | 6/4/2010        |
| va_form | 20-8800    | 6/4/2010        |
| va_form | 26-8730    | 8/19/2010       |

#### _Last Revised On_ date > 10 years

| type    | Name         | Last Revised On |
|---------|--------------|-----------------|
| va_form | GSA-2580     | 9/17/1970       |
| va_form | SF 252       | 10/17/1983      |
| va_form | OF-8         | 1/17/1985       |
| va_form | 10-1313-4    | 6/17/1990       |
| va_form | 26-421       | 11/17/1990      |
| va_form | VA4670       | 1/1/1991        |
| va_form | 26-8106      | 1/17/1991       |
| va_form | SF-52        | 7/17/1991       |
| va_form | SF52(ES)     | 7/17/1991       |
| va_form | VA4667b      | 3/1/1992        |
| va_form | 4676a        | 9/17/1992       |
| va_form | VA1100       | 10/17/1992      |
| va_form | VA4667c      | 12/1/1993       |
| va_form | VA2130       | 8/17/1994       |
| va_form | SF88         | 10/17/1994      |
| va_form | SF2819       | 5/17/1995       |
| va_form | SF2810       | 6/17/1995       |
| va_form | VA3288       | 10/11/1995      |
| va_form | SF144        | 10/17/1995      |
| va_form | 3288         | 10/17/1995      |
| va_form | 20-572       | 3/17/1996       |
| va_form | 26-0503      | 7/17/1996       |
| va_form | 26-8644      | 9/17/1996       |
| va_form | 44478        | 6/1/1997        |
| va_form | VA1107       | 6/17/1998       |
| va_form | 10-1313-10   | 4/22/1999       |
| va_form | 10-1313-11   | 4/22/1999       |
| va_form | 10-1313-3    | 4/22/1999       |
| va_form | 10-1313-7    | 4/26/1999       |
| va_form | 10-1313-8    | 4/26/1999       |
| va_form | 10-1313A     | 4/26/1999       |
| va_form | 10-1436      | 6/15/1999       |
| va_form | GSA2972      | 9/17/1999       |
| va_form | 44481        | 1/31/2000       |
| va_form | 26-1833      | 2/17/2000       |
| va_form | 28-0588      | 12/17/2000      |
| va_form | 20-8800      | 1/17/2001       |
| va_form | 26-8730      | 1/17/2001       |
| va_form | 26-8731a     | 1/17/2001       |
| va_form | 26-8731b     | 1/17/2001       |
| va_form | 26-8731c     | 1/17/2001       |
| va_form | 21-6898      | 12/17/2001      |
| va_form | 26-1814      | 1/3/2002        |
| va_form | 26-8599      | 1/7/2002        |
| va_form | 26-8791      | 1/7/2002        |
| va_form | 26-8812      | 1/7/2002        |
| va_form | VA2793       | 3/17/2002       |
| va_form | VA3215       | 5/1/2002        |
| va_form | 26-6807a     | 6/17/2002       |
| va_form | 26-8827      | 7/17/2002       |
| va_form | FL70-2       | 7/17/2002       |
| va_form | 10-0400a     | 8/6/2002        |
| va_form | 10-0398      | 9/10/2002       |
| va_form | 10-1314      | 10/18/2002      |
| va_form | 44475        | 3/17/2003       |
| va_form | 10-1023      | 4/2/2004        |
| va_form | 22-8597      | 7/17/2004       |
| va_form | 10-7959D     | 9/15/2004       |
| va_form | 29-380       | 10/17/2004      |
| va_form | 26-0551      | 10/17/2004      |
| va_form | 10-0094d     | 11/19/2004      |
| va_form | 10-0094e     | 11/19/2004      |
| va_form | 10-0094f     | 11/19/2004      |
| va_form | 10-0094g     | 11/19/2004      |
| va_form | FL-10-426    | 2/17/2005       |
| va_form | 10-0388      | 3/17/2005       |
| va_form | 29-0563      | 3/17/2005       |
| va_form | 26-1844      | 4/1/2005        |
| va_form | 29-0532-1    | 4/17/2005       |
| va_form | 26-1849      | 5/17/2005       |
| va_form | 10-0376a     | 7/17/2005       |
| va_form | 21-8767      | 8/17/2005       |
| va_form | 10-0408      | 9/17/2005       |
| va_form | 26-1859      | 9/17/2005       |
| va_form | SF-424       | 10/17/2005      |
| va_form | 10-0381      | 11/4/2005       |
| va_form | 10-1223      | 12/17/2005      |
| va_form | 10-0102      | 3/30/2006       |
| va_form | 10-0415      | 5/1/2006        |
| va_form | 26-8149      | 5/17/2006       |
| va_form | 20-8206      | 5/17/2006       |
| va_form | FL-10-341a   | 7/17/2006       |
| va_form | 28764        | 7/17/2006       |
| va_form | 10-0144a     | 7/17/2006       |
| va_form | 10-0144      | 9/17/2006       |
| va_form | 21-8760      | 9/17/2006       |
| va_form | 10-0445      | 11/30/2006      |
| va_form | VA0880a      | 12/1/2006       |
| va_form | VA0880b      | 12/1/2006       |
| va_form | 10-1313-1    | 12/17/2006      |
| va_form | 10-0455      | 6/1/2007        |
| va_form | 10-0455a     | 6/1/2007        |
| va_form | 28764        | 6/17/2007       |
| va_form | SF2801       | 6/17/2007       |
| va_form | 10-1170      | 7/17/2007       |
| va_form | VA0730b      | 7/17/2007       |
| va_form | 26-8641a     | 10/17/2007      |
| va_form | 10-0430      | 11/17/2007      |
| va_form | 26-8712      | 11/17/2007      |
| va_form | 10-0459      | 1/1/2008        |
| va_form | VA0862       | 1/1/2008        |
| va_form | 10-1394      | 1/17/2008       |
| va_form | 10-0460      | 2/17/2008       |
| va_form | 44480        | 3/17/2008       |
| va_form | 26-6363      | 4/17/2008       |
| va_form | FL1-28       | 8/17/2008       |
| va_form | FL1-28a      | 8/17/2008       |
| va_form | FL-10-90     | 9/17/2008       |
| va_form | 26-8629      | 10/17/2008      |
| va_form | 26-8630      | 10/17/2008      |
| va_form | 10-7959f-1   | 11/17/2008      |
| va_form | 10-7959f-2   | 11/17/2008      |
| va_form | 26-0286      | 11/17/2008      |
| va_form | 21-8764      | 5/17/2009       |
| va_form | 21-8764a     | 5/17/2009       |
| va_form | VA5655       | 6/11/2009       |
| va_form | 5655         | 6/17/2009       |
| va_form | 10-6056A     | 9/17/2009       |
| va_form | FL 4-437     | 3/17/2010       |
| va_form | 10-7959A     | 5/17/2010       |
| va_form | 10-7959E     | 5/17/2010       |
| va_form | VA40-4970    | 7/17/2010       |
| va_form | VA0904       | 7/17/2010       |
| va_form | VA2346a      | 7/17/2010       |
| va_form | VA40-0895-10 | 10/17/2010      |
| va_form | VA40-0895-12 | 10/17/2010      |
| va_form | VA40-0895-13 | 10/17/2010      |
| va_form | VA40-0895-16 | 10/17/2010      |
| va_form | VA40-0895-17 | 10/17/2010      |
| va_form | VA40-0895-2  | 10/17/2010      |
| va_form | VA40-0895-7  | 10/17/2010      |
| va_form | VA40-0895-8  | 10/17/2010      |
| va_form | VA40-0895-9  | 10/17/2010      |
| va_form | VA40-0895-11 | 10/17/2010      |
| va_form | VA40-0895-15 | 10/17/2010      |
| va_form | VA40-0895-3  | 10/17/2010      |
| va_form | VA40-0895-6  | 10/17/2010      |
| va_form | 29-0309      | 11/17/2010      |
| va_form | VA0927a      | 12/1/2010       |
| va_form | VA0927b      | 12/1/2010       |
| va_form | VA0927c      | 12/1/2010       |
| va_form | VA0927d      | 12/1/2010       |
| va_form | VA0927e      | 12/1/2010       |
| va_form | 10-0436      | 1/17/2011       |
| va_form | 10-0474      | 1/17/2011       |
| va_form | VA10002      | 2/1/2011        |

#### _First Issued On_ date more recent than _Last Revised On_ date
