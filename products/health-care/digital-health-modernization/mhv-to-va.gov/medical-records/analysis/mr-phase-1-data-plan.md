# **Medical Records on VA.gov Phase 1 Data Plan**

Using Datadog and Google Analytics, we will track performance, user engagement, and functionality to ensure seamless user experience and identify potential issues post-launch. This will be complemented by the Veteran feedback collected via the Medallia/VSignals CSAT intercept and feedback surveys to provide deeper insights into their experience.

## **Engagement:**

- **Proportion of users who click on any link on medical record pages**
- **Captured via Datadog**

## **Task completion:**

- **Proportion of users who report “yes” to the question “Were you able to complete your task?” in Medallia/VSignals CSAT intercept survey**

## **Customer satisfaction:**

- **Proportion of users who respond with “Very good” or “Somewhat good” to the question “Please rate your experience with this site today” in Medallia/ VSignals CSAT intercept survey**

## **Datadog Metrics:**

### We will be measuring usage of each domain by:

- Monitoring:
  - Page views
  - Average time spent
  - Top actions
- Tracking clicks on:
  - The domain action link on the landing page
  - Record detail links
  - Print and download of both pages and lists
  - Pagination

### We will be measuring usage of Download Medical Records by:

- Monitoring:
  - Page views
  - Average time spent
  - Top actions
- Tracking clicks on:
  - The Download action link on the landing page
  - Download report button
  - File type radio buttons
  - Record type

### We will be measuring usage of Settings by:

- Monitoring:
  - Page views
  - Average time spent
  - Top actions
- Tracking clicks on:
  - The Settings action link on the landing page
  - Yes, opt in and Yes, opt out buttons
  - Go to your profile view on MHV link

## **Google Analytics:**

We will use path explorations to view Veterans’ paths within and out of Medical Records.

## **Medallia Feedback:**

### We will collect, analyze, and synthesize Medallia data from:

- Intercept Surveys
- Feedback Surveys
- Helpdesk Tier II & III reports

### **Datadog interaction tagging**

| **URL** | **DATADOG TAG NAME** | **Data Retention** | **Access** | **Recorded Action** |
| --- | --- | --- | --- | --- |
| medical-records | Accordion Collapse button | 30 Days | Explorer |     |
| medical-records | Accordion Expand button | 30 Days | Explorer |     |
| medical-records | Go back to MR on MHV | 15 Months | Dashboard | Link Click ("Go back to MHV to download") |
| medical-records | Go back to MR on MHV - in FAQ | 15 Months | Dashboard | Link Click |
| medical-records | Go to your allergies and reactions | 15 Months | Dashboard | Link Click |
| medical-records | Go to your care summaries and notes | 15 Months | Dashboard | Link Click |
| medical-records | Go to your health conditions | 15 Months | Dashboard | Link Click |
| medical-records | Go to your lab and test results | 15 Months | Dashboard | Link Click |
| medical-records | Go to your medical records settings | 15 Months | Dashboard | Link Click |
| medical-records | Go to your vaccines | 15 Months | Dashboard | Link Click |
| medical-records | Go to your vitals | 15 Months | Dashboard | Link Click |
| medical-records | Go to download your medical records | 15 Months | Dashboard | Link Click |
| medical-records | How can I tell my care team | 30 Days | Explorer |     |
| medical-records | Start a new message - FAQ How can | 30 Days | Explorer |     |
| medical-records | Start a new message - FAQ What if | 30 Days | Explorer |     |
| medical-records | VCL Button - FAQ | 30 Days | Explorer |     |
| medical-records | What if I have more questions | 30 Days | Explorer |     |
| medical-records | Where can I find health information | 30 Days | Explorer |     |
| medical-records | Will VA protect my PHI | 30 Days | Explorer |     |
| labs-and-tests | Lab and Test Results Detail Link | 15 Months | Dashboard | Link Click |
| labs-and-tests | Download PDF of this Page option - L&TR | 15 Months | Dashboard | Button Click |
| labs-and-tests | Download TXT of this Page option - L&TR | 15 Months | Dashboard | Button Click |
| labs-and-tests | Need help understanding your results | 15 Months | Dashboard | va-alert-expandable (?) |
| labs-and-tests | Print Button - L&TR Detail | 15 Months | Dashboard | Button Click |
| labs-and-tests | Print this Page option - L&TR | 15 Months | Dashboard | Button Click |
| labs-and-tests | Request images on MHV | 30 Days | Explorer |     |
| labs-and-tests | Start a new message - L&TR Details info | 30 Days | Explorer |     |
| labs-and-tests | What to know before you print or download - L&TR Detail | 15 Months | Dashboard | va-additional-info (?) |
| allergies | Allergies Detail Link | 15 Months | Dashboard | Link Click |
| allergies | Download PDF of this List option - Allergies | 15 Months | Dashboard | Button Click |
| allergies | Download TXT of this List option - Allergies | 15 Months | Dashboard | Button Click |
| allergies | Print Button - Allergies - List | 15 Months | Dashboard | Button Click |
| allergies | Print this List option - Allergies | 15 Months | Dashboard | Button Click |
| allergies | What to know before you print or download - Allergies | 15 Months | Dashboard | va-additional-info (?) |
| allergies | Download PDF of this Page option - Allergies | 15 Months | Dashboard | Button Click |
| allergies | Download TXT of this Page option - Allergies | 15 Months | Dashboard | Button Click |
| allergies | Print Button - Allergies Detail | 15 Months | Dashboard | Button Click |
| allergies | Print this Page option - Allergies | 15 Months | Dashboard | Button Click |
| allergies | What to know before you print or download - Allergies Detail | 15 Months | Dashboard | va-additional-info (?) |
| conditions | About the codes in some condition names | 15 Months | Dashboard | va-additional-info (?) |
| conditions | Health Conditions Detail Link | 15 Months | Dashboard | Link Click |
| conditions | Download PDF of this Page option - Health Conditions | 15 Months | Dashboard | Button Click |
| conditions | Download TXT of this Page option - Health Conditions | 15 Months | Dashboard | Button Click |
| conditions | Print Button - Health Conditions Detail | 15 Months | Dashboard | Button Click |
| conditions | Print this Page option - Health Conditions | 15 Months | Dashboard | Button Click |
| conditions | What to know before you print or download - Health Conditions Detail | 30 Days | Explorer | va-additional-info (?) |
| settings | Close opt in modal | 15 Months | Dashboard | onCloseEvent |
| settings | Close opt out modal | 15 Months | Dashboard | onCloseEvent |
| settings | Go to your profile on MHV | 15 Months | Dashboard | a (?) |
| settings | No, don't opt in | 15 Months | Dashboard | Button Click ("Don't opt in") |
| settings | No, don't opt out | 15 Months | Dashboard | Button Click ("Don't opt out") |
| settings | Opt in | 15 Months | Dashboard | Button Click - Might conflict |
| settings | Opt out | 15 Months | Dashboard | Button Click - Might conflict |
| settings | What your EHI includes | 30 Days | Explorer |     |
| settings | Yes, opt in | 15 Months | Dashboard | Button Click ("Opt in") - Might conflict |
| settings | Yes, opt out | 15 Months | Dashboard | Button Click ("Opt out") - Might conflict |
| summaries-and-notes | Care Summaries & Notes Detail Link | 15 Months | Dashboard | Link Click |
| summaries-and-notes | Download PDF of this Page option - CS&N | 15 Months | Dashboard | Button Click |
| summaries-and-notes | Download TXT of this Page option - CS&N | 15 Months | Dashboard | Button Click |
| summaries-and-notes | Print Button - CS&N Detail | 30 Days |     | Button Click |
| summaries-and-notes | Print this Page option - CS&N | 15 Months | Dashboard | Button Click |
| summaries-and-notes | What to know before you print or download - CS&N Detail | 30 Days |     | va-additional-info (?) |
| vaccines | Download PDF of this List option - Vaccines | 15 Months | Dashboard | Button Click |
| vaccines | Download TXT of this List option - Vaccines | 15 Months | Dashboard | Button Click |
| vaccines | Go to your allergy records - Vaccines | 15 Months | Dashboard | Link Click |
| vaccines | Print Button - Vaccines - List | 30 Days |     | Button Click |
| vaccines | Print this List option - Vaccines | 15 Months | Dashboard | Button Click |
| vaccines | Vaccines Detail Link | 15 Months | Dashboard | Link Click |
| vaccines | What to know before you print or download - Vaccines | 30 Days |     | va-additional-info (?) |
| vaccines | Download PDF of this Page option - Vaccines | 15 Months | Dashboard | Button Click |
| vaccines | Download TXT of this Page option - Vaccines | 15 Months | Dashboard | Button Click |
| vaccines | Print Button -Vaccines Detail | 30 Days |     | Button Click |
| vaccines | Print this Page option - Vaccines | 15 Months | Dashboard | Button Click |
| vaccines | What to know before you print or download - Vaccines Detail | 30 Days |     | va-additional-info (?) |
| vitals | Blood Oxygen over time Link | 15 Months | Dashboard | Link Click |
| vitals | Blood Pressure over time Link | 15 Months | Dashboard | Link Click |
| vitals | Breathing Rate over time Link | 15 Months | Dashboard | Link Click |
| vitals | Heart Rate over time Link | 15 Months | Dashboard | Link Click |
| vitals | Temperature over time Link | 15 Months | Dashboard | Link Click |
| vitals | Weight over time Link | 15 Months | Dashboard | Link Click |
| vitals | Height over time Link | 15 Months | Dashboard | Link Click |
| blood-oxygen-level-history | Download PDF of this List option - Blood Oxygen | 15 Months | Dashboard | Button Click |
| blood-oxygen-level-history | Download TXT of this List option - Blood Oxygen | 15 Months | Dashboard | Button Click |
| blood-oxygen-level-history | Print Button - Blood Oxygen | 30 Days |     | Button Click |
| blood-oxygen-level-history | Print this List option - Blood Oxygen | 15 Months | Dashboard | Button Click |
| blood-oxygen-level-history | What to know before you print or download - Blood Oxygen | 30 Days |     | va-additional-info (?) |
| blood-pressure-history | Download PDF of this List option - Blood Pressure | 15 Months | Dashboard | Button Click |
| blood-pressure-history | Download TXT of this List option - Blood Pressure | 15 Months | Dashboard | Button Click |
| blood-pressure-history | Print Button - Blood Pressure | 30 Days |     | Button Click |
| blood-pressure-history | Print this List option - Blood Pressure | 15 Months | Dashboard | Button Click |
| blood-pressure-history | What to know before you print or download - Blood Pressure | 30 Days |     | va-additional-info (?) |
| breathing-rate-history | Download PDF of this List option - Breathing Rate | 15 Months | Dashboard | Button Click |
| breathing-rate-history | Download TXT of this List option - Breathing Rate | 15 Months | Dashboard | Button Click |
| breathing-rate-history | Print Button - Breathing Rate | 30 Days |     | Button Click |
| breathing-rate-history | Print this List option - Breathing Rate | 15 Months | Dashboard | Button Click |
| breathing-rate-history | What to know before you print or download - Breathing Rate | 30 Days |     | va-additional-info (?) |
| heart-rate-history | Download PDF of this List option - Heart Rate | 15 Months | Dashboard | Button Click |
| heart-rate-history | Download TXT of this List option - Heart Rate | 15 Months | Dashboard | Button Click |
| heart-rate-history | Print Button - Heart Rate | 30 Days |     | Button Click |
| heart-rate-history | Print this list option - Heart Rate | 15 Months | Dashboard | Button Click |
| heart-rate-history | What to know before you print or download - Heart Rate | 30 Days |     | va-additional-info (?) |
| height-history | Download PDF of this List option - Height | 15 Months | Dashboard | Button Click |
| height-history | Download TXT of this Page option - Height | 15 Months | Dashboard | Button Click |
| height-history | Print Button - Height | 30 Days |     | Button Click |
| height-history | Print this List option - Height | 15 Months | Dashboard | Button Click |
| height-history | What to know before you print or download - Height | 30 Days |     | va-additional-info (?) |
| temperature-history | Download PDF of this List option - Temperature | 15 Months | Dashboard | Button Click |
| temperature-history | Download TXT of this List option - Temperature | 15 Months | Dashboard | Button Click |
| temperature-history | Print Button - Temperature | 30 Days |     | Button Click |
| temperature-history | Print this List option - Temperature | 15 Months | Dashboard | Button Click |
| temperature-history | What to know before you print or download - Temperature | 30 Days |     | va-additional-info (?) |
| weight-history | Download PDF of this List option - Weight | 15 Months | Dashboard | Button Click |
| weight-history | Download TXT of this Page option - Weight | 15 Months | Dashboard | Button Click |
| weight-history | Print Button - Weight | 30 Days |     | Button Click |
| weight-history | Print this List option - Weight | 15 Months | Dashboard | Button Click |
| weight-history | What to know before you print or download - Weight | 30 Days | Explorer | va-additional-info (?) |
| medical-records | Back - MR | 30 Days | Explorer | Link Click or onRouteChange |
| labs-and-tests | Back - LTR - List | 30 Days | Explorer | Link Click or onRouteChange |
| labs-and-tests | Back - LTR - Detail | 30 Days | Explorer | Link Click or onRouteChange |
| allergies | Back - Allergies - List | 30 Days | Explorer | Link Click or onRouteChange |
| allergies | Back - Allergies - Detail | 30 Days | Explorer | Link Click or onRouteChange |
| conditions | Back - HC - List | 30 Days | Explorer | Link Click or onRouteChange |
| conditions | Back - HC - Detail | 30 Days | Explorer | Link Click or onRouteChange |
| settings | Back - Settings | 30 Days | Explorer | Link Click or onRouteChange |
| summaries-and-notes | Back - CSN - List | 30 Days | Explorer | Link Click or onRouteChange |
| summaries-and-notes | Back - CSN - Detail | 30 Days | Explorer | Link Click or onRouteChange |
| vaccines | Back - Vax - List | 30 Days | Explorer | Link Click or onRouteChange |
| vaccines | Back - Vax - Detail | 30 Days | Explorer | Link Click or onRouteChange |
| vitals | Back - Vitals - List | 30 Days | Explorer | Link Click or onRouteChange |
| blood-oxygen-level-history | Back - Vitals - BO | 30 Days | Explorer | Link Click or onRouteChange |
| blood-pressure-history | Back - Vitals - BP | 30 Days | Explorer | Link Click or onRouteChange |
| breathing-rate-history | Back - Vitals - BR | 30 Days | Explorer | Link Click or onRouteChange |
| heart-rate-history | Back - Vitals - HR | 30 Days | Explorer | Link Click or onRouteChange |
| download | Select record and download | 30 Days | Explorer | Link Click ("Select records and download") |
| download | Download Continuity of Care Document xml Link | 30 Days | Explorer |     |
| download | Self entered health information PDF link | 30 Days | Explorer |     |
| date-range | Date range option - Any | 30 Days | Explorer |     |
| date-range | Date range option - Last 3 months | 30 Days | Explorer |     |
| date-range | Date range option - Last 6 months | 30 Days | Explorer |     |
| date-range | Date range option - Last 12 months | 30 Days | Explorer |     |
| date-range | Date range option - Custom | 30 Days | Explorer |     |
| date-range | Date range - Back | 30 Days | Explorer |     |
| date-range | Date range - Continue | 30 Days | Explorer |     |
| record-type | Select All VA records - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | Lab and test results - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | Care summaries and notes - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | Vaccines - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | Allergies and reactions - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | Health conditions - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | Vitals - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | Medications - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | Upcoming VA appointments - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | Past VA appointments - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | VA demographics records - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | DOD military service information - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | Record type - Back - Record type | 30 Days | Explorer |     |
| record-type | Record type - Continue - Record type | 30 Days | Explorer |     |
| file-type | PDF - File type | 15 Months | Dashboard | Radio Button checked or unchecked |
| file-type | Text file - File type | 15 Months | Dashboard | Radio Button checked or unchecked |
| file-type | File type - Back - Record type | 30 Days | Explorer |     |
| file-type | File type - Continue - Record type | 30 Days | Explorer |     |
| labs-and-tests | Pagination - L&TR | 15 Months | Dashboard | Pagination Note |
| summaries-and-notes | Pagination - CS&N | 15 Months | Dashboard | Pagination Note |
| vaccines | Pagination - Vaccines | 15 Months | Dashboard | Pagination Note |
| allergies | Pagination - Allergies | 15 Months | Dashboard | Pagination Note |
| conditions | Pagination - Health Conditions | 15 Months | Dashboard | Pagination Note |
| blood-pressure-history | Pagination - Blood Pressure | 15 Months | Dashboard | Pagination Note |
| heart-rate-history | Pagination - Heart Rate | 15 Months | Dashboard | Pagination Note |
| breathing-rate-history | Pagination - Breathing Rate | 15 Months | Dashboard | Pagination Note |
| blood-oxygen-level-history | Pagination - Blood Oxygen | 15 Months | Dashboard | Pagination Note |
| temperature-history | Pagination - Temperature | 15 Months | Dashboard | Pagination Note |
| weight-history | Pagination - Weight | 15 Months | Dashboard | Pagination Note |
| height-history | Pagination - Height | 15 Months | Dashboard | Pagination Note |
| pain-severity-history | Pagination - Pain Severity | 15 Months | Dashboard | Pagination Note |
| vitals | Pagination - Vitals | 15 Months | Dashboard | Pagination Note |
| record-type | Past VA appointments - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | VA demographics records - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | DOD military service information - Record type | 15 Months | Dashboard | Checkbox checked or unchecked |
| record-type | Record type - Back - Record type | 30 Days | Explorer |     |
| record-type | Record type - Continue - Record type | 30 Days | Explorer |     |
| file-type | PDF - File type | 15 Months | Dashboard | Radio Button checked or unchecked |
| file-type | Text file - File type | 15 Months | Dashboard | Radio Button checked or unchecked |
| file-type | File type - Back - Record type | 30 Days | Explorer |     |
| file-type | File type - Continue - Record type | 30 Days | Explorer |     |
| labs-and-tests | Pagination - L&TR | 15 Months | Dashboard | Pagination Note |
| summaries-and-notes | Pagination - CS&N | 15 Months | Dashboard | Pagination Note |
| vaccines | Pagination - Vaccines | 15 Months | Dashboard | Pagination Note |
| allergies | Pagination - Allergies | 15 Months | Dashboard | Pagination Note |
| conditions | Pagination - Health Conditions | 15 Months | Dashboard | Pagination Note |
| blood-pressure-history | Pagination - Blood Pressure | 15 Months | Dashboard | Pagination Note |
| heart-rate-history | Pagination - Heart Rate | 15 Months | Dashboard | Pagination Note |
| breathing-rate-history | Pagination - Breathing Rate | 15 Months | Dashboard | Pagination Note |
| blood-oxygen-level-history | Pagination - Blood Oxygen | 15 Months | Dashboard | Pagination Note |
| temperature-history | Pagination - Temperature | 15 Months | Dashboard | Pagination Note |
| weight-history | Pagination - Weight | 15 Months | Dashboard | Pagination Note |
| height-history | Pagination - Height | 15 Months | Dashboard | Pagination Note |
| pain-severity-history | Pagination - Pain Severity | 15 Months | Dashboard | Pagination Note |
| vitals | Pagination - Vitals | 15 Months | Dashboard | Pagination Note |
