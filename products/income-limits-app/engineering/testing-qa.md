# QA Artifact for Income Limits app
MVP launching Q3 2023

## Overview of app and QA risks
The Income Limits app is a relatively simple app from a testing perspective:
- Not authenticated
- Uses design system components
- Simple API performs lookup based on inputs: year, zip code, - and number of dependents

Tables are exact copies of those of our source-of-truth system, the Veteran Enrollment System (VES).

### API complexity: low
The API takes 3 inputs and performs a lookup. If more than one value is retrieved for a particular county, it returns the highest one.

The API returns three values which are leveraged directly by the front-end product:
- Pension threshold
- National Means Test (NMT) threshold
- Geographic Means Test (GMT) threshold

The API does simple calculations based on values from database tables: 
- NMT and Pension thresholds – For >1 dependent, the API uses a per-dependent value to calculate
- GMT – if there is more than one row in the table for a given county, the API picks the highest value. For >7 dependents, it uses a per-dependent amount to calculate GMT.

Calculations are documented in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1683232214853/cfc6da5007d8f99ee0bc83e261e118e7074ffa85?sender=uebde62ceb342c6477fb09406) and github.

### React application complexity: low
There is only one piece of conditional logic, what is referred to in this document as the “non-standard case” (aka Jonesboro case). 

GMT stands for Geographic Means Test threshold, a cost of living number set by HUD per U.S. county and looked up in our API by zip code. The GMT is meant to account for how the cost of living affects a Veteran's ability to pay for health care.
NMT is National Means Test, a single number across the country.

In most of the country, the GMT is higher than the NMT. In this typical case, there are 5 accordions on the Results screen. One of them covers different VA copay expectations in the range between the two numbers. 

However, in a few rural locations like Jonesboro, AR (where our designer lives: zip 72041), the numbers are flipped, and GMT < NMT. In those cases we don’t use GMT at all in the Results screen and we use NMT+10% for calculating the top range/accordion. The easily verifiable impact is that there are only 4 accordions in this case.







