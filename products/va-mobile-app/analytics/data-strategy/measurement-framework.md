# Defining the Most Important Metrics for the VAHB Mobile App

## What story are we trying to tell through the data?
The data can tell 2 stories: A story about the user’s experience **(experiential metrics)** and a story about the platform’s health **(platform metrics)**.

## Experiential metrics

**Experiential metrics** capture the quality of the user’s experience — how well the product helps people achieve their goals. They can provide insight into how users experience the app, including navigation patterns, common tasks, and points of friction. Experiential metrics can be measured through **user tasks** and **non-tasks**.

### User Tasks
**User Tasks** are goal-oriented actions that a user initiates with intent to complete a specific objective. Examples:
* Logging in 
* Sending a secure message
* Updating contact information
* Requesting a prescription refill
* Submit evidence

**Characteristics:**
* Requires user effort and decision-making
* Has a clear beginning and end
* Can typically be labeled as “completed” or “not completed”

We have organized user tasks by user flow. User tasks and associated metrics for 14 key flows are mapped in this [spreadsheet](URL).

### Non-tasks
**Non-tasks** are passive, informational, or exploratory interactions not necessarily tied to a concrete goal. Examples:
* Receiving a push notification
* Browsing the home screen
* Viewing disability rating
* Viewing claim status
* Viewing appointments

**Characteristics:**
* May not have a defined end state
* Doesn’t always result in a transaction or submission
* Often serves to inform, guide, or prompt future actions

Non-tasks have also been identified for each key user flow. Non-tasks and associated metrics for 14 key flows are mapped in this [spreadsheet](URL).

| Type | What to measure | Sample metrics | Notes | 
|--------------|-------------|--------------|-------------|
| **User Tasks** | Task success and efficiency | - Task completion rate<br>- Time on task<br>- Error rate<br>- Drop-off rate<br>- Retry attempts | Collect in-app analytics on key flows (e.g. Rx refill, viewing appointments).|
| **Non-tasks** | User engagement and awareness | - Views<br> - Click-through rate (CTR)<br>- Dwell time <br>- Notification open rate | Focus on passive or content-related interactions. Can serve as leading indicators of task initiation. |

<details>
<summary><h3>Login</h3></summary> 
 
|      | Accessing the App and Logging In |
|--------------------|-------------|
| **User goal**      | *"I need convenient access to view and manage my VA health benefits on-the-go."* |
| **What should we measure?** | Successful login, the first time<br> *"I was easily able to login the first time."* |
| **Important metrics to track**| - Login success rate<br> - Time to login<br> - Recovery rate<br>- Most common logout reasons (e.g. due to connectivity issues, app updates)<br>- Most common login failure reasons<br>- Active users<br>- New users<br>- Logins started event count<br>- Logins completed event count<br>- Login completed webview steps event count<br>- Logins canceled login event count<br>- Authenticated users<br>- Higher frequency reporting intervals than monthly (e.g. real-time data for login success or time to login)<br>- Qualitative trends in login issues from Feedback Hub channels<br>- Future: Login survey |
| **How these metrics can inform decision making** | Understand login points of friction and identify opportunities to make it easier for users to use the app |
| **Unhelpful metrics** |  |
</details>
<details>
<summary><h3>Disability rating</h3></summary> 
 
|      | Disability rating |
|--------------------|-------------|
| **User goal**      | *"I want to understand my disability rating."* |
| **What should we measure?** | Easy to understand disability rating <br> *“I understood my disability rating."* |
| **Important metrics to tracks**| - User engagement over time (actions on screen)<br>- Viewer counts<br>- Average daily viewers<br>- Views per user<br>- Viewers month-to-month<br>- Distribution/converion of users who access this task via different pathways (homepage vs tool bar)<br>- # of feature viewers/# of users<br>- Latency<br>- % of errors within X period of time<br>- Users report easy access and clear disability rating |
| **How these metrics can inform decision making** | Health metrics like latency & errors provide insight into whether users can reliably and quickly see their rating. Views, navigation paths, and satisfaction metrics tell us whether this feature is discoverable, useful, and trusted.  |
| **Unhelpful metrics** | - Time on screen |

</details>

<details>
<summary><h3>Veteran status</h3></summary> 
 
|      | Veteran status |
|--------------------|-------------|
| **User goal**      | *"I need proof of my Veteran/military status."* |
| **What should we measure?** | Accurate military status <br> *"I can readily provide proof of my military status.”* |
| **Important metrics to track**| - User engagement over time (actions on screen)<br>- Viewer counts<br>- Average daily viewers<br>- Views per user<br>- Viewers month-to-month<br>- Distribution/converion of users who access this task via different pathways (homepage vs tool bar)<br>- # of feature viewers/# of users<br>- Latency<br>- % of errors within X period of time<br>- Users report easy access and clear Veteran status |
| **How these metrics can inform decision making** | Collectively, these metrics show whether the Veteran status card is discoverable, reliable, and valuable in real-world use—helping product teams decide whether to prioritize performance and trust fixes, improve navigation and clarity, or expand feature integration (e.g., wallet apps) to better meet Veterans’ needs. |
| **Unhelpful metrics** | - Time on screen |

</details>

<details>
<summary><h3>Letters</h3></summary> 
 
|      | VA benefits letters |
|--------------------|-------------|
| **User goal**      | *"I want to have convenient access to a digital version of (x) so that I am not worried about loss or fraud."* |
| **What should we measure?** | Convenient access to VA benefit letters<br> * “I can conveniently provide digital proof of (x).”* |
| **Important metrics to track**| - Page views<br>- Most frequently accessed letters<br>- # feature viewers/# of users<br>- Latency<br>- % of errors within X period of time<br>- User report easy to view and download VA benefit letters |
| **How these metrics can inform decision making** | These metrics reveal whether the VA benefits letters performs reliably and delivers a clear, usable experience. They can inform decisions on which letters to prioritize (e.g. the most common letters users access), where to reduce errors or latency, and how to improve usability so Veterans can quickly access and download the documents they need. |
| **Unhelpful metrics** | |

</details>

<details>
<summary><h3>Appointments</h3></summary> 
 
|      | Appointments |
|--------------------|-------------|
| **User goal**      | *"I want to view my appointment(s) to take care of a health concern."* |
| **What should we measure?** | Useful appointment details<br> *“I know when and where my appointment is."* |
| **Important metrics to track**| - View appt details events<br>- Notification open/click-through rate<br>- % conversion from notification to completed appt<br>- Engagement time per active user<br>- Appointment cancel events<br>- # feature viewers/# of users<br>- Latency<br>- % of errors within X period of time<br>- CSAT |
| **How these metrics can inform decision making** | These metrics can inform or improve notification design, in-app usability, or performance to ensure Veterans can easily view, manage, and act on their appointments.  |
| **Unhelpful metrics** |  |

</details>

<details>
<summary><h3>Rx refill</h3></summary> 
 
|      | Rx refill |
|--------------------|-------------|
| **User goal**      | *"I need to refill my prescription."* |
| **What should we measure?** | Ease of Prescription Refills <br> *“It was easy to get my prescription refilled.”* |
| **Important metrics to track**| - Filter and tracking details<br>- Number of clicks to My VA Health (if can't fill script in app)<br>- Feedback from Rx survey<br>- # feature viewers/# of users<br>- Latency<br>- % of errors within X period of time |
| **How these metrics can inform decision making** | To identify pain points with Rx refill process and identify where to streamline navigation, reduce errors or latency |
| **Unhelpful metrics** | |

</details>

<details>
<summary><h3>Secure messaging</h3></summary> 
 
|      | Secure messaging |
|--------------------|-------------|
| **User goal**      | *"I want to securely message my provider."* |
| **What should we measure?** | Ease of secure messaging + timely provider response <br> *“I understood what I needed to do next to manage my whole health.”* |
| **Important metrics to track**| - Notification open/click-through rate<br>- % conversion from notification to viewed message<br>- Messages sent<br>- Latency<br>- % of errors within X period of time |
| **How these metrics can inform decision making** | To understand how users are viewing and sending secure messages and identify opportunities for improvement |
| **Unhelpful metrics** |  |

</details>

<details>
<summary><h3>Medical records</h3></summary> 
 
|      | Medical records |
|--------------------|-------------|
| **User goal**      | *"I want to view my medical records, labs, and test results."* |
| **What should we measure?** | Accurate, up-to-date medical records <br> *“My recent labs and medical records are accessible and up-to-date.”"* |
| **Important metrics to track**| - Medical records viewed<br>- # feature viewers/# of users<br>- Latency<br>- % of errors within X period of time |
| **How these metrics can inform decision making** | To understand and improve experience for Veterans viewing their medical records |
| **Unhelpful metrics** |  |

</details>

<details>
<summary><h3>Travel pay</h3></summary> 
 
|      | Travel pay |
|--------------------|-------------|
| **User goal**      | *"I want to file for beneficiary travel reimbursement after my appointment."* |
| **What should we measure?** | Ease of access and BT claims filing <br> *“It was clear where to file for travel pay via the app. Filing was easy."* |
| **Important metrics to track**| - Travel pay submitted<br>- % of travel pay going through mobile compared to other channels<br>- # feature viewers/# of users<br>- Latency<br>- % of errors within X period of time |
| **How these metrics can inform decision making** | To understand and improve how Veteran file for travel pay; to compare across different travel pay filing modalities |
| **Unhelpful metrics** | |

</details>

<details>
<summary><h3>Claim status</h3></summary> 
 
|      | Claim status |
|--------------------|-------------|
| **User goal**      | *"I want to track claim status."* |
| **What should we measure?** | Accurate, easy to understand claim status <br> *“I know the status of my claim.”* |
| **Important metrics to track**| - Click the NCC call center number<br>- Click links on the claim status screen<br>- Claim Details Open events<br>- Time spend viewing per active user<br>- Overall claims page views<br>- # feature viewers/# of users<br>- Latency<br>- % of errors within X period of time |
| **How these metrics can inform decision making** | To understand and improve experience for Veterans tracking their claim status |
| **Unhelpful metrics** |  |

</details>

<details>
<summary><h3>Claim letters</h3></summary> 
 
|      | Claim letters |
|--------------------|-------------|
| **User goal**      | *"I want to understand claims decisions/review claim letters."* |
| **What should we measure?** | Convenient access to claim decision letters <br> *“I can easily access claims letters and review why claim decisions were made.”* |
| **Important metrics to track**| - Claims history viewed<br>- Conversion funnel to claims decision<br>- Latency<br>- % of errors within X period of time |
| **How these metrics can inform decision making** | To understand and improve experience for Veterans understanding claim decisions/letters |
| **Unhelpful metrics** |  |

</details>

<details>
<summary><h3>Submit evidence</h3></summary> 
 
|      | Submit evidence |
|--------------------|-------------|
| **User goal**      | *"I need to submit evidence related to my claim."* |
| **What should we measure?** | Smooth photo or document upload <br> *“I can easily upload photos and documents to my claim.”* |
| **Important metrics to track**| -Drop-offs at the "Upload Files" screen<br>- # feature viewers/# of users<br>- Latency<br>- % of errors within X period of time |
| **How these metrics can inform decision making** | To understand and improve how Veterans submit evidence to claims |
| **Unhelpful metrics** |  |

</details>

<details>
<summary><h3>Payment</h3></summary> 
 
|      | Payment |
|--------------------|-------------|
| **User goal**      | *"I want to understand and manage payments."* |
| **What should we measure?** | Accurate, easy to understand payment information <br> *“I can easily understand payment history and my direct deposit information.”* |
| **Important metrics to track**| -Bank info add/update events<br>- Pathways to Payment history and Direct Deposit (home vs toolbar)<br>- #feature viewers/# of users<br>- Latency<br>- % of errors within X period of time |
| **How these metrics can inform decision making** | To understand and improve experience for a Veteran's payment history and management |
| **Unhelpful metrics** |  |

</details>

<details>
<summary><h3>Profile</h3></summary> 
 
|      | Profile |
|--------------------|-------------|
| **User goal**      | *"I want to manage my personal information related to my VA health benefits."* |
| **What should we measure?** | Accurate personal data <br> *“I can easily review and manage my personal information in my VA profile.”* |
| **Important metrics to track**| - Notificaiton opt-in rates<br>-Notification open rates<br>- CTR<br>- # feature viewers/# of users<br>- Latency<br>- % of errors within X period of time|
| **How these metrics can inform decision making** | To understand and improve experience for a Veteran's profile information |
| **Unhelpful metrics** |  |

</details>

<details>
<summary><h3>Crisis support</h3></summary> 
 
|      | Crisis support|
|--------------------|-------------|
| **User goal**      | *"I'm in crisis and need urgent support."* |
| **What should we measure?** | Clicks to Veteran Crisis Line <br> *“I received timely crisis support via the app.”* |
| **Important metrics to track**| - Clicks on red CTA<br>- Exits to Veterancrisisline.net<br>- # feature viewers/# of users<br>- Latency<br>- % of errors within X period of time |
| **How these metrics can inform decision making** | To understand and improve crisis support for Veterans using the app  |
| **Unhelpful metrics** | |

</details>

<details>
<summary><h3>Navigation</h3></summary> 
 
|      | Navigation |
|--------------------|-------------|
| **User goal**      | *"I want to navigate to X easily from the home screen."* |
| **What should we measure?** | Conversion rates from the app Homescreen to various parts of the app i.e. Health, Benefits, Payments, Profile, VA resources, location finder <br>Following path<br>- do they see it, <br>- if they see it do they tap,<br>- are they able to do a thing (view, task, etc.)   <br> *“I'm able to easily access the things I need from the home screen.”* |
| **Important metrics to track**| - Activity button click rate, basedon when button conditionally shown (repeat users ok)<br>- Home screen page load time<br>- Notification interactions, bringing users to home screen<br>- # feature viewers/# of users<br>- Latency<br>- % of errors within X period of time |
| **How these metrics can inform decision making** | Improve the overall navigation/wayfinding of useres form the app home screen |
| **Unhelpful metrics** |  |

</details>

## Platform metrics

**Platform metrics** center around the performance, stability, and operational health of the underlying platform or system that delivers the experience. These metrics are:
- **system-centered** and measured from the technical perspective, and usually quantitative and diagnostic
- Intended to capture **a pulse of how users feel about the overall app**. 

### How should we define "the overall health" of the Mobile Platform? 
*"I want an application that is fast, stable, and accurately supports my needs as a Veteran."* 

Overall platform health can be measured by the platform's speed, availability, reliability, consistency, overall user satisfaction, adoption, and retention. Each table below defines each measurement factor and provides helpful metrics to track and how they can inform decision-making.

<details>
<summary><h3>Speed</h3></summary>
 
|**Speed** |   |
|--------------|-------------|
| **Definition** | How quickly an app loads, responds to user input, and handles various tasks, data availability based on API |
| **Helpful metrics** | - Page load times<br>- API latency or down times<br>- % of errors within X period of time |
| **How it informs decision-making** | Understand how responsive the app is, to prioritize giving users a responsive experience.  |

</details>

<details>
<summary><h3>Availability</h3></summary>

|**Availability** |   |
|--------------|-------------|
| **Definition** | The extent to which the app is accessible and operational, working as expected and fulfilling user requests |
| **Helpful metrics** | - Application uptime<br>- Connectectivity/off-line usage<br>- Crash rate<br>- Access/stability in low-connectivity environments<br>- Qualitiative sentiment analysis of performance complaints<br>- Offline usage<br>- Error messaging |
| **How it informs decision-making** | Understand how often users are experiencing a working app, and what the app experience is for users in low-connectivity environments |

</details>

<details>
<summary><h3>Reliability</h3></summary>
 
|**Reliability** |   |
|--------------|-------------|
| **Definition** | How the app and the VA Mobile API performs its intended functions without failure |
| **Helpful metrics** | - Error rates from VA Mobile API middleware<br>- Error rates for experience APIs<br>- Change failure rate (CFR)<br>- Mean Time to Detect (MTTD)<br>- Mean Time to Repair (MTTR) |
| **How it informs decision-making** | Understand how the VA Mobile API and the platforms ability to identify associated data issues, to avoid impacts to the user experience and to collaborate closely with feature/experience teams to ensure a consistent experience.  |
</details>

<details>
<summary><h3>Consistency</h3></summary>
 
|**Consistency** |   |
|--------------|-------------|
| **Definition** | The app shows users the correct, up-to-date information that matches their expectations across other VA channels |
| **Helpful metrics** | - Data parity with web |
| **How it informs decision-making** | Ensuring the application matches va.gov functionality, as new features are added to the VAHB app |
</details>

<details>
<summary><h3>User satisfaction</h3></summary>
 
|**User Satisfaction** |   |
|--------------|-------------|
| **Definition** | Measures users’ perception of the app’s value, usability, and overall experience based on direct and indirect feedback. |
| **Helpful metrics** | - CSAT<br>- App Store/Google Play star ratings<br>- In-app survey results (scale rating)<br>- Sentiment analysis from qualitative/open feedback |
| **How it informs decision-making** | Helps identify pain points, feature satisfaction, and areas for improvement. Guides prioritization of usability fixes and informs communication or design changes. |
</details>

<details>
<summary><h3>Adoption</h3></summary>
 
|**Adoption** |   |
|--------------|-------------|
| **Definition** | New users onboarding to the app |
| **Helpful metrics** | - New app downloads<br>- User segmentation |
| **How it informs decision-making** | Understand the overall growth of the app in capturing new users |
</details>

<details>
<summary><h3>Retention</h3></summary>
 
|**Retention** |   |
|--------------|-------------|
| **Definition** | Users using the app over time |
| **Helpful metrics** | - Monthly active users by login source<br>- Churn rate (over month, year)<br>- Session length<br>- % of users updating app |
| **How it informs decision-making** | Understand the ability of the app to generate usage over time, and be a consistent solution to meeting the needs of Veterans. |
</details>

### Unhelpful platform metrics
| **Metric**  | **Why this is unhelpful**  |
|--------------|-------------|
| TBD | TBD |
| TBD | TBD |


