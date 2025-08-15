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
| **How these metrics can inform decision making** | To understand and improve experience for Veterans accessing disability ratings  |
| **Unhelpful metrics** | - Time on screen |

</details>

<details>
<summary><h3>Veteran status</h3></summary> 
 
|      | Veteran status |
|--------------------|-------------|
| **User goal**      | *"I need proof of my Veteran/military status."* |
| **What should we measure?** | Accurate military status <br> *"I can readily provide proof of my military status.”* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Letters</h3></summary> 
 
|      | VA benefits letters |
|--------------------|-------------|
| **User goal**      | *"I want to have convenient access to a digital version of (x) so that I am not worried about loss or fraud."* |
| **What should we measure?** | Convenient access to VA benefit letters<br> * “I can conveniently provide digital proof of (x).”* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Appointments</h3></summary> 
 
|      | Appointments |
|--------------------|-------------|
| **User goal**      | *"I want to view my appointment(s) to take care of a health concern."* |
| **What should we measure?** | Useful appointment details<br> *“I know when and where my appointment is."* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Rx refill</h3></summary> 
 
|      | Rx refill |
|--------------------|-------------|
| **User goal**      | *"I need to refill my prescription."* |
| **What should we measure?** | Ease of Prescription Refills <br> *“It was easy to get my prescription refilled.”* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Secure messaging</h3></summary> 
 
|      | Secure messaging |
|--------------------|-------------|
| **User goal**      | *"I want to securely message my provider."* |
| **What should we measure?** | Ease of secure messaging + timely provider response <br> *“I understood what I needed to do next to manage my whole health.”* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Medical records</h3></summary> 
 
|      | Medical records |
|--------------------|-------------|
| **User goal**      | *"I want to view my medical records, labs, and test results."* |
| **What should we measure?** | Accurate, up-to-date medical records <br> *“My recent labs and medical records are accessible and up-to-date.”"* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Travel pay</h3></summary> 
 
|      | Travel pay |
|--------------------|-------------|
| **User goal**      | *"I want to file for beneficiary travel reimbursement after my appointment."* |
| **What should we measure?** | Ease of access and BT claims filing <br> *“It was clear where to file for travel pay via the app. Filing was easy."* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Claim status</h3></summary> 
 
|      | Claim status |
|--------------------|-------------|
| **User goal**      | *"I want to track claim status."* |
| **What should we measure?** | Accurate, easy to understand claim status <br> *“I know the status of my claim.”* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Claim letters</h3></summary> 
 
|      | Claim letters |
|--------------------|-------------|
| **User goal**      | *"I want to understand claims decisions/review claim letters."* |
| **What should we measure?** | Convenient access to claim decision letters <br> *“I can easily access claims letters and review why claim decisions were made.”* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Submit evidence</h3></summary> 
 
|      | Submit evidence |
|--------------------|-------------|
| **User goal**      | *"I need to submit evidence related to my claim."* |
| **What should we measure?** | Smooth photo or document upload <br> *“I can easily upload photos and documents to my claim.”* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Payment</h3></summary> 
 
|      | Payment |
|--------------------|-------------|
| **User goal**      | *"I want to understand and manage payments."* |
| **What should we measure?** | TBD <br> *“TBD.”* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Profile</h3></summary> 
 
|      | Profile |
|--------------------|-------------|
| **User goal**      | *"I want to manage my personal information related to my VA health benefits."* |
| **What should we measure?** | TBD <br> *“TBD.”* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Crisis support</h3></summary> 
 
|      | Crisis support|
|--------------------|-------------|
| **User goal**      | *"I'm in crisis and need urgent support."* |
| **What should we measure?** | TBD <br> *“TBD.”* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

<details>
<summary><h3>Navigation</h3></summary> 
 
|      | Navigation |
|--------------------|-------------|
| **User goal**      | *"I want to navigate to X easily from the home screen."* |
| **What should we measure?** | TBD <br> *“TBD.”* |
| **Important metrics to track**| -TBD<br>-TBD<br>-TBD<br> |
| **How these metrics can inform decision making** | TBD |
| **Unhelpful metrics** | -TBD<br>-TBD<br>-TBD<br> |

</details>

## Platform metrics

**Platform metrics** center around the performance, stability, and operational health of the underlying platform or system that delivers the experience. They are **system-centered** and measured from the technical perspective. 
- Reflect uptime, speed, scalability, and reliability
- Usually quantitative and diagnostic

### How should we define "the overall health" of the Mobile Platform? 
*"I want an application that is fast, stable, and accurately supports my needs as a Veteran."* 

Overall platform health can be measured by the platform's speed, availability, reliability, consistency, overall user satisfaction, adoption, and retention. Each table below defines each measurement factor and provides helpful metrics to track and how they can inform decision-making.

<details>
<summary><h3>Speed</h3></summary>
 
|**Speed** |   |
|--------------|-------------|
| **Definition** | TBD |
| **Helpful metrics** | -TBD<br>-TBD<br>-TBD<br> |
| **How it informs decision-making** | TBD |

</details>

<details>
<summary><h3>Availability</h3></summary>

|**Availability** |   |
|--------------|-------------|
| **Definition** | TBD |
| **Helpful metrics** | -TBD<br>-TBD<br>-TBD<br> |
| **How it informs decision-making** | TBD |

</details>

<details>
<summary><h3>Reliability</h3></summary>
 
|**Reliability** |   |
|--------------|-------------|
| **Definition** | TBD |
| **Helpful metrics** | -TBD<br>-TBD<br>-TBD<br> |
| **How it informs decision-making** | TBD |
</details>

<details>
<summary><h3>Consistency</h3></summary>
 
|**Consistency** |   |
|--------------|-------------|
| **Definition** | TBD |
| **Helpful metrics** | -TBD<br>-TBD<br>-TBD<br> |
| **How it informs decision-making** | TBD |
</details>

<details>
<summary><h3>User satisfaction</h3></summary>
 
|**User Satisfaction** |   |
|--------------|-------------|
| **Definition** | Measures users’ perception of the app’s value, usability, and overall experience based on direct and indirect feedback. |
| **Helpful metrics** | CSAT<br>App Store/Google Play star ratings<br>In-app survey results (scale rating)<br>Sentiment analysis from qualitative/open feedback |
| **How it informs decision-making** | Helps identify pain points, feature satisfaction, and areas for improvement. Guides prioritization of usability fixes and informs communication or design changes. |
</details>

<details>
<summary><h3>Adoption</h3></summary>
 
|**Adoption** |   |
|--------------|-------------|
| **Definition** | TBD |
| **Helpful metrics** | -TBD<br>-TBD<br>-TBD<br> |
| **How it informs decision-making** | TBD |
</details>

<details>
<summary><h3>Retention</h3></summary>
 
|**Retention** |   |
|--------------|-------------|
| **Definition** | TBD |
| **Helpful metrics** | -TBD<br>-TBD<br>-TBD<br> |
| **How it informs decision-making** | TBD |
</details>

### Unhelpful platform metrics
| **Metric**  | **Why this is unhelpful**  |
|--------------|-------------|
| TBD | TBD |
| TBD | TBD |


