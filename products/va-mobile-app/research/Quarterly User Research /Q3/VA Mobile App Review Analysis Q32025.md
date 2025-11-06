# VA Mobile App Review Analysis
Q3 App Review & Feedback

## Analysis Motivation & Approach 
**Why we conducted this review**

To gain insights into Veterans’ experiences with the VA Mobile App by analyzing App Store and Google Play reviews as well as responses to two in-app surveys, the RX Intercept Survey and the Give Feedback survey. These reviews help us identify what’s working well and uncover areas where the experience can be improved.

**What we wanted to learn**
What aspects of the app are Veterans satisfied with?
What significant pain points do Veterans experience?
What are the areas of improvement based on these reviews?

**What are we hoping to achieve?**
Identify areas of opportunities to improve Veteran experience.
Identify and prioritize friction points that may inform future iterations.

**What data did we look into?**
App Store and Google Play reviews from June-September 2025.
Google Analytics Report from June-September 2025.
Give Feedback Survey responses from June-September 2025.
RX Intercept Survey responses from June-September 2025.

### FY 25 OCTO goals supported
1. Improve satisfaction with our web and mobile products by 5 points.
2. We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction.

### Methodology
1. [Affinity mapping in Figjam](https://www.figma.com/board/4UyDWmxQ0ZAiOQzkhw7UyN/Service-Design-Exploration?node-id=639-1933&p=f&t=QotowCnJsgyDwK0z-0) feedback analyzed previously during monthly anaylsis review
2. [Collaborative Ai analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Quarterly%20User%20Research%20/Q3/Analysis_Workflow.md) with Github Copilot verified by individual assessment and data confirmation

## Learnings from Q3 2025

### Key Findings
1. Veterans continue to review The Mobile App highly with satisfaction overall. 
- Users often share short, generalized impressions of the app in reviews with positive ratings. These sentiments most notably mentioned improved access, ease of use and convenience.

2. Sign in continues to be the most reported pain point for app users.
Sign in problems are the most frequently reported issues in mobile app reviews or surveys. Sign in loops where the user is repeatedly taken back through the sign in process are commonly reported from Android users and across a wide range of dates. Other issues include biometric failures, MFA challenges, failure to retain credentials when ‘remember me’ is active, and an overall dislike of the process.

3. Android users leave significantly more reviews in app stores compared to iOS users.
Although there were more than double iOS users (1,561,867)of the VHB app than Android users (766,342) in the 3rd quarter, the app received more than triple the number of app store reviews from Android users (1199) compared to  iOS users (303) in Q3. 

### Positive Sentiment Analysis
eterans who gave the app a positive rating (4 or 5 stars) praise the app as valuable because of its simplicity and ease of use. Noting sentiment of “delight” or “excitement” over how easy the app is to use. Some Veterans note that it improves their access and streamlines their personal healthcare management. 

The reviews from July through September 2025 shows that the following features are most often praised:
1. Appointments
2. Prescriptions
3. Messaging

> “I was hesitant to get the app because I didn't know how it would work, period but it is phenomenal, very user friendly for the challenged like me.” - Veteran

<br>

> “This app has changed my life if I can't get to my doctor I can let them know what is going on with me without having to go thru hurdles I remember when my nurse a long time ago was asking me if I had this app and I'm like no that is stupid well I was wrong this app is amazing.” - Veteran

<br>

> “I was impressed! ( That's VERY unusual for a govt site!) This was my first time using it and once I tried each section, found it was straight forward. This did not have the ambiguity that many VA sites have had. This is a very good, concise and easy site to use! "10 out of 10" is my rating! Common sense layout...not much room for error!” - Veteran

<br>

### Negative Sentiment Analysis
Veterans who rated the app 3-stars or less often shared common pain points. The most significant numbers of pain points received were in the following categories: 

- Sign in Issues (142 instances): Veterans struggle with the sign in process, citing issues with ID.me, two-factor authentication, and general difficulty remembering passwords. Other notable issues include reported looping, biometric failure, and being logged out.
- Limited content details in appointments (116 instances): Users often report a desire for more detailed information reflected in their appointments that are needed to help them prepare, and arrive at the correct location.
- Inability to locate travel pay (38 instances): With the newer release and marketing for the travel pay feature in the app, users reported difficulty finding it at all expecting to see it uniquely identified instead of within existing appointments.
- Ability to message needed providers: A change in list options made it difficult for Veterans to send messages to their desired medical team or recipients. Some users mention frustration when trying to locate the messaging area within the app altogether.

> “ID me website has a checkmark to remember me on this device. Yet it does not work. Ex. I use the app, take a break for 5 minutes, then have to repeat the whole process all over. It’s unnecessary.” - Veteran

<br>

> “All of my appointments do not tell me what my appointments are for. I see many doctors and I never can tell who I am suppose to see. I get location of appointment but that is not enough for me to discern what it’s for. Can you please fix that. Thanks.” - Veteran

<br>

> “The latest version of the app says a travel claim can be completed within the app, but in the health section, I do not see anywhere to submit a travel claim.” - Veteran

<br>

### Key Opportunities of Improvement

#### Sign in issues

**Veteran motivation**
When I need to access my VA health and benefits, I want to log in to the app quickly and reliably so I can manage my care without frustration.

**Veteran challenges**
- Identity verification requirements
- Password requirements
- Passcode delays
- Being logged out
- Inability to authenticate
- Looping problems
- Weak signal/connection
- Inability to stay logged in or remembered on device

**Veteran requirements**
- Be able to reduce the time it takes to login to the app
- Single access point or passcode
- Remain logged in, unless I log out
- Remain logged in, even after the app is updated
- Remember device option to work as expected
- Be able to login to the app even in low signal areas without waiting for security codes

**Metrics to track**
1. Authentication Success Rate: Percentage of attempted logins resulting in successful authentication.

2. Sign in Failure Rates: Percentage of failed logins, broken down by cause

3. Biometric Authentication Usage & Failure Rates: Number of biometric login attempts, success/failure rates.

**Suggestions/Next Steps**
1. Root Cause Analysis
*Work is already in progress
 Identify root cause of  reported issues via case analysis. 
 
- Sign in survey from sign in screen
- Call center case analysis


#### Limited appointment detail

**Veteran motivation**
When managing my appointments with VA health and benefits , I want the app to consistently provide all related and needed information to help me prepare for my appointment.

**Veteran challenges**
- Lack of needed information
- Inability to prepare for appointment
- Inability to arrive at specific location
- Inability to review associated appointment records
- Inaccurate appointment information reflected in app
- Inaccurate time zone reflect in app


**Veteran requirements**
- Reasons for visit
- Details on the provider
- Details on VA facility location or department
- Type of appointment (virtual vs. in-person)
- Calendar integration
- Need for telehealth phone number
- Accurate preparation information
- After appointment notes or summary

**Metrics to track**
1. Appointment Issue Rate: Monitor reported appointment issue rates for peaks, sources, and trends. Look for potential correlations, and trends. Including
 - Location
 - VA vs. Community Care
 - Appointment type
 - Dates/Times

**Suggestions/Next Steps**
1. Data Analysis
Analyze appointment data  (including community care and VA appointments across various regions) against both VA.gov and VHB app for inconsistencies and/or gaps.

2. Integration Assessment
Analyze data mapping from source systems to appointment system for formatting issues, mapping gaps, or missing data.



#### Submit for travel pay

**Veteran motivation**
When filing a mileage reimbursement with VA health and benefits, I want to submit travel pay for all of my eligible appointments

**Veteran challenges**
- Locating travel pay in the app
- Submitting travel pay requests for all needed appointments
- Adjusting travel pay mileage
- Submitting all related travel pay reimbursement requests (for all various expenses incurred above and beyond mileage)
- Tracking travel pay reimbursement
- Updating reimbursement method or bank account


**Veteran requirements**
- Identify a travel pay area in the app
- Be directed to travel pay from the homescreen
- Submit travel pay for all of my eligible VA appointments
- Submit travel pay for all my eligible community care appointments
- Track my travel pay reimbursement payment
- Update my direct deposit account

**Metrics to track**
1. Travel Pay Submission Completion Rate: 
Percentage of initiated travel pay requests that are successfully submitted through the app

2. Travel Pay Click Rate:
Number of clicks on travel pay links from appointment details

3. User Path Flow from Travel Pay Links:
Observe user paths from appointment travel pay links to identify areas where users may drop off.

**Suggestions/Next Steps**
1. Task-based Tree Testing: Present users with the app’s navigation in isolation (no UI) and ask where they would go to find Travel Pay.

- Reveals navigation labeling, hierarchy, or categorization problems.
- Identifies user mental model for categorization.



#### Ability to message needed providers

**Veteran motivation**
When I need to send a message to my provider, I want to see my provider as an option in my recipients list

**Veteran requirements**
- Easily identify the message center in app
- Be connected to all of my associated clinics
- Find all of my providers in my recipients list
- Search for medical centers and/or providers that are not reflected on my list
- Receive a timely response from my message
- Forward messages between providers
- Manage my messages through folders, and deletion.






