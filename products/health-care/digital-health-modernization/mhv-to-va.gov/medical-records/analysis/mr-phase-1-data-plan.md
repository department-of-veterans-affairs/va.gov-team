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

| **URL** | **DATADOG TAG NAME** | **Data Retention** | **Access** |
| --- | --- | --- | --- |
| medical-records | Accordion Collapse button | 30 Days | Explorer |
| medical-records | Accordion Expand button | 30 Days | Explorer |
| medical-records | Go back to MR on MHV | 15 Months | Dashboard |
| medical-records | Go back to MR on MHV - in FAQ | 15 Months | Dashboard |
| medical-records | Go to your allergies and reactions | 15 Months | Dashboard |
| medical-records | Go to your care summaries and notes | 15 Months | Dashboard |
| medical-records | Go to your health conditions | 15 Months | Dashboard |
| medical-records | Go to your lab and test results | 15 Months | Dashboard |
| medical-records | Go to your medical records settings | 15 Months | Dashboard |
| medical-records | Go to your vaccines | 15 Months | Dashboard |
| medical-records | Go to your vitals | 15 Months | Dashboard |
| medical-records | Go to download your medical records | 15 Months | Dashboard |
| medical-records | How can I tell my care team | 30 Days | Explorer |
| medical-records | Start a new message - FAQ How can | 30 Days | Explorer |
| medical-records | Start a new message - FAQ What if | 30 Days | Explorer |
| medical-records | VCL Button - FAQ | 30 Days | Explorer |
| medical-records | What if I have more questions | 30 Days | Explorer |
| medical-records | Where can I find health information | 30 Days | Explorer |
| medical-records | Will VA protect my PHI | 30 Days | Explorer |
| labs-and-tests | Lab and Test Results Detail Link | 15 Months | Dashboard |
| labs-and-tests | Download PDF of this Page option - L&TR | 15 Months | Dashboard |
| labs-and-tests | Download TXT of this Page option - L&TR | 15 Months | Dashboard |
| labs-and-tests | Need help understanding your results | 15 Months | Dashboard |
| labs-and-tests | Print Button - L&TR Detail | 15 Months | Dashboard |
| labs-and-tests | Print this Page option - L&TR | 15 Months | Dashboard |
| labs-and-tests | Request images on MHV | 30 Days | Explorer |
| labs-and-tests | Start a new message - L&TR Details info | 30 Days | Explorer |
| labs-and-tests | What to know before you print or download - L&TR Detail | 15 Months | Dashboard |
| allergies | Allergies Detail Link | 15 Months | Dashboard |
| allergies | Download PDF of this List option - Allergies | 15 Months | Dashboard |
| allergies | Download TXT of this List option - Allergies | 15 Months | Dashboard |
| allergies | Print Button - Allergies - List | 15 Months | Dashboard |
| allergies | Print this List option - Allergies | 15 Months | Dashboard |
| allergies | What to know before you print or download - Allergies | 15 Months | Dashboard |
| allergies | Download PDF of this Page option - Allergies | 15 Months | Dashboard |
| allergies | Download TXT of this Page option - Allergies | 15 Months | Dashboard |
| allergies | Print Button - Allergies Detail | 15 Months | Dashboard |
| allergies | Print this Page option - Allergies | 15 Months | Dashboard |
| allergies | What to know before you print or download - Allergies Detail | 15 Months | Dashboard |
| conditions | About the codes in some condition names | 15 Months | Dashboard |
| conditions | Health Conditions Detail Link | 15 Months | Dashboard |
| conditions | Download PDF of this Page option - Health Conditions | 15 Months | Dashboard |
| conditions | Download TXT of this Page option - Health Conditions | 15 Months | Dashboard |
| conditions | Print Button - Health Conditions Detail | 15 Months | Dashboard |
| conditions | Print this Page option - Health Conditions | 15 Months | Dashboard |
| conditions | What to know before you print or download - Health Conditions Detail | 30 Days | Explorer |
| settings | Close opt in modal | 15 Months | Dashboard |
| settings | Close opt out modal | 15 Months | Dashboard |
| settings | Go to your profile on MHV | 15 Months | Dashboard |
| settings | No, don't opt in | 15 Months | Dashboard |
| settings | No, don't opt out | 15 Months | Dashboard |
| settings | Opt in | 15 Months | Dashboard |
| settings | Opt out | 15 Months | Dashboard |
| settings | What your EHI includes | 30 Days | Explorer |
| settings | Yes, opt in | 15 Months | Dashboard |
| settings | Yes, opt out | 15 Months | Dashboard |
| summaries-and-notes | Care Summaries & Notes Detail Link | 15 Months | Dashboard |
| summaries-and-notes | Download PDF of this Page option - CS&N | 15 Months | Dashboard |
| summaries-and-notes | Download TXT of this Page option - CS&N | 15 Months | Dashboard |
| summaries-and-notes | Print Button - CS&N Detail | 30 Days |  Explorer     |
| summaries-and-notes | Print this Page option - CS&N | 15 Months | Dashboard |
| summaries-and-notes | What to know before you print or download - CS&N Detail | 30 Days | Explorer    |
| vaccines | Download PDF of this List option - Vaccines | 15 Months | Dashboard |
| vaccines | Download TXT of this List option - Vaccines | 15 Months | Dashboard |
| vaccines | Go to your allergy records - Vaccines | 15 Months | Dashboard |
| vaccines | Print Button - Vaccines - List | 30 Days |   Explorer  |
| vaccines | Print this List option - Vaccines | 15 Months | Dashboard |
| vaccines | Vaccines Detail Link | 15 Months | Dashboard |
| vaccines | What to know before you print or download - Vaccines | 30 Days | Explorer    |
| vaccines | Download PDF of this Page option - Vaccines | 15 Months | Dashboard |
| vaccines | Download TXT of this Page option - Vaccines | 15 Months | Dashboard |
| vaccines | Print Button -Vaccines Detail | 30 Days |   Explorer    |
| vaccines | Print this Page option - Vaccines | 15 Months | Dashboard |
| vaccines | What to know before you print or download - Vaccines Detail | 30 Days |  Explorer   |
| vitals | Blood Oxygen over time Link | 15 Months | Dashboard |
| vitals | Blood Pressure over time Link | 15 Months | Dashboard |
| vitals | Breathing Rate over time Link | 15 Months | Dashboard |
| vitals | Heart Rate over time Link | 15 Months | Dashboard |
| vitals | Temperature over time Link | 15 Months | Dashboard |
| vitals | Weight over time Link | 15 Months | Dashboard |
| vitals | Height over time Link | 15 Months | Dashboard |
| blood-oxygen-level-history | Download PDF of this List option - Blood Oxygen | 15 Months | Dashboard |
| blood-oxygen-level-history | Download TXT of this List option - Blood Oxygen | 15 Months | Dashboard |
| blood-oxygen-level-history | Print Button - Blood Oxygen | 30 Days |  Explorer     |
| blood-oxygen-level-history | Print this List option - Blood Oxygen | 15 Months | Dashboard |
| blood-oxygen-level-history | What to know before you print or download - Blood Oxygen | 30 Days | Explorer      |
| blood-pressure-history | Download PDF of this List option - Blood Pressure | 15 Months | Dashboard |
| blood-pressure-history | Download TXT of this List option - Blood Pressure | 15 Months | Dashboard |
| blood-pressure-history | Print Button - Blood Pressure | 30 Days |   Explorer    |
| blood-pressure-history | Print this List option - Blood Pressure | 15 Months | Dashboard |
| blood-pressure-history | What to know before you print or download - Blood Pressure | 30 Days |  Explorer     |
| breathing-rate-history | Download PDF of this List option - Breathing Rate | 15 Months | Dashboard |
| breathing-rate-history | Download TXT of this List option - Breathing Rate | 15 Months | Dashboard |
| breathing-rate-history | Print Button - Breathing Rate | 30 Days |  Explorer     |
| breathing-rate-history | Print this List option - Breathing Rate | 15 Months | Dashboard |
| breathing-rate-history | What to know before you print or download - Breathing Rate | 30 Days |  Explorer   |
| heart-rate-history | Download PDF of this List option - Heart Rate | 15 Months | Dashboard |
| heart-rate-history | Download TXT of this List option - Heart Rate | 15 Months | Dashboard |
| heart-rate-history | Print Button - Heart Rate | 30 Days |   Explorer    |
| heart-rate-history | Print this list option - Heart Rate | 15 Months | Dashboard |
| heart-rate-history | What to know before you print or download - Heart Rate | 30 Days |  Explorer     |
| height-history | Download PDF of this List option - Height | 15 Months | Dashboard |
| height-history | Download TXT of this Page option - Height | 15 Months | Dashboard |
| height-history | Print Button - Height | 30 Days |  Explorer     |
| height-history | Print this List option - Height | 15 Months | Dashboard |
| height-history | What to know before you print or download - Height | 30 Days |  Explorer     |
| temperature-history | Download PDF of this List option - Temperature | 15 Months | Dashboard |
| temperature-history | Download TXT of this List option - Temperature | 15 Months | Dashboard |
| temperature-history | Print Button - Temperature | 30 Days |    Explorer   |
| temperature-history | Print this List option - Temperature | 15 Months | Dashboard |
| temperature-history | What to know before you print or download - Temperature | 30 Days |   Explorer    |
| weight-history | Download PDF of this List option - Weight | 15 Months | Dashboard |
| weight-history | Download TXT of this Page option - Weight | 15 Months | Dashboard |
| weight-history | Print Button - Weight | 30 Days |   Explorer    |
| weight-history | Print this List option - Weight | 15 Months | Dashboard |
| weight-history | What to know before you print or download - Weight | 30 Days | Explorer |
| medical-records | Back - MR | 30 Days | Explorer |
| labs-and-tests | Back - LTR - List | 30 Days | Explorer |
| labs-and-tests | Back - LTR - Detail | 30 Days | Explorer |
| allergies | Back - Allergies - List | 30 Days | Explorer |
| allergies | Back - Allergies - Detail | 30 Days | Explorer |
| conditions | Back - HC - List | 30 Days | Explorer |
| conditions | Back - HC - Detail | 30 Days | Explorer |
| settings | Back - Settings | 30 Days | Explorer |
| summaries-and-notes | Back - CSN - List | 30 Days | Explorer |
| summaries-and-notes | Back - CSN - Detail | 30 Days | Explorer |
| vaccines | Back - Vax - List | 30 Days | Explorer |
| vaccines | Back - Vax - Detail | 30 Days | Explorer |
| vitals | Back - Vitals - List | 30 Days | Explorer |
| blood-oxygen-level-history | Back - Vitals - BO | 30 Days | Explorer |
| blood-pressure-history | Back - Vitals - BP | 30 Days | Explorer |
| breathing-rate-history | Back - Vitals - BR | 30 Days | Explorer |
| heart-rate-history | Back - Vitals - HR | 30 Days | Explorer |
| download | Select record and download | 30 Days | Explorer |
| download | Download Continuity of Care Document xml Link | 30 Days | Explorer |
| download | Self entered health information PDF link | 30 Days | Explorer |
| date-range | Date range option - Any | 30 Days | Explorer |
| date-range | Date range option - Last 3 months | 30 Days | Explorer |
| date-range | Date range option - Last 6 months | 30 Days | Explorer |
| date-range | Date range option - Last 12 months | 30 Days | Explorer |
| date-range | Date range option - Custom | 30 Days | Explorer |
| date-range | Date range - Back | 30 Days | Explorer |
| date-range | Date range - Continue | 30 Days | Explorer |
| record-type | Select All VA records - Record type | 15 Months | Dashboard |
| record-type | Lab and test results - Record type | 15 Months | Dashboard |
| record-type | Care summaries and notes - Record type | 15 Months | Dashboard |
| record-type | Vaccines - Record type | 15 Months | Dashboard |
| record-type | Allergies and reactions - Record type | 15 Months | Dashboard |
| record-type | Health conditions - Record type | 15 Months | Dashboard |
| record-type | Vitals - Record type | 15 Months | Dashboard |
| record-type | Medications - Record type | 15 Months | Dashboard |
| record-type | Upcoming VA appointments - Record type | 15 Months | Dashboard |
| record-type | Past VA appointments - Record type | 15 Months | Dashboard |
| record-type | VA demographics records - Record type | 15 Months | Dashboard |
| record-type | DOD military service information - Record type | 15 Months | Dashboard |
| record-type | Record type - Back - Record type | 30 Days | Explorer |
| record-type | Record type - Continue - Record type | 30 Days | Explorer |
| file-type | PDF - File type | 15 Months | Dashboard |
| file-type | Text file - File type | 15 Months | Dashboard |
| file-type | File type - Back - Record type | 30 Days | Explorer |
| file-type | File type - Continue - Record type | 30 Days | Explorer |
| labs-and-tests | Pagination - L&TR | 15 Months | Dashboard |
| summaries-and-notes | Pagination - CS&N | 15 Months | Dashboard |
| vaccines | Pagination - Vaccines | 15 Months | Dashboard |
| allergies | Pagination - Allergies | 15 Months | Dashboard |
| conditions | Pagination - Health Conditions | 15 Months | Dashboard |
| blood-pressure-history | Pagination - Blood Pressure | 15 Months | Dashboard |
| heart-rate-history | Pagination - Heart Rate | 15 Months | Dashboard |
| breathing-rate-history | Pagination - Breathing Rate | 15 Months | Dashboard |
| blood-oxygen-level-history | Pagination - Blood Oxygen | 15 Months | Dashboard |
| temperature-history | Pagination - Temperature | 15 Months | Dashboard |
| weight-history | Pagination - Weight | 15 Months | Dashboard |
| height-history | Pagination - Height | 15 Months | Dashboard |
| pain-severity-history | Pagination - Pain Severity | 15 Months | Dashboard |
| vitals | Pagination - Vitals | 15 Months | Dashboard |
| record-type | Past VA appointments - Record type | 15 Months | Dashboard |
| record-type | VA demographics records - Record type | 15 Months | Dashboard |
| record-type | DOD military service information - Record type | 15 Months | Dashboard |
| record-type | Record type - Back - Record type | 30 Days | Explorer |
| record-type | Record type - Continue - Record type | 30 Days | Explorer |
| file-type | PDF - File type | 15 Months | Dashboard |
| file-type | Text file - File type | 15 Months | Dashboard |
| file-type | File type - Back - Record type | 30 Days | Explorer |
| file-type | File type - Continue - Record type | 30 Days | Explorer |
| labs-and-tests | Pagination - L&TR | 15 Months | Dashboard |
| summaries-and-notes | Pagination - CS&N | 15 Months | Dashboard |
| vaccines | Pagination - Vaccines | 15 Months | Dashboard |
| allergies | Pagination - Allergies | 15 Months | Dashboard |
| conditions | Pagination - Health Conditions | 15 Months | Dashboard |
| blood-pressure-history | Pagination - Blood Pressure | 15 Months | Dashboard |
| heart-rate-history | Pagination - Heart Rate | 15 Months | Dashboard |
| breathing-rate-history | Pagination - Breathing Rate | 15 Months | Dashboard |
| blood-oxygen-level-history | Pagination - Blood Oxygen | 15 Months | Dashboard |
| temperature-history | Pagination - Temperature | 15 Months | Dashboard |
| weight-history | Pagination - Weight | 15 Months | Dashboard |
| height-history | Pagination - Height | 15 Months | Dashboard |
| pain-severity-history | Pagination - Pain Severity | 15 Months | Dashboard |
| vitals | Pagination - Vitals | 15 Months | Dashboard |
