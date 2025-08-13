# Defining the Most Important Metrics for the VAHB Mobile App

## What story are we trying to tell through the data?
The data can tell 2 stories: A story about the user’s experience **(experiential metrics)** and a story about the platform’s health **(platform metrics)**.

## Experiential metrics

**Experiential metrics** capture the quality of the user’s experience — how well the product helps people achieve their goals, how easy it is to use. They can provide insight into how users experience the app, including navigation patterns, common tasks, and points of friction. Experiential metrics can be measured through **user tasks** and **non-tasks**.

### User Tasks
**User Tasks** are goal-oriented actions that a user initiates with intent to complete a specific objective. Examples:
* Logging in 
* Sending a secure message
* Updating contact information
* Requesting a prescription refill

**Characteristics:**
* Requires user effort and decision-making
* Has a clear beginning and end
* Can typically be labeled as “completed” or “not completed”

We have organized user tasks by user flow. User tasks and associated metrics for 14 key flows are mapped in this [spreadsheet](URL).

### Non-tasks
**Non-tasks** are passive, informational, or exploratory interactions not necessarily tied to a concrete goal. Examples:
* Viewing a push notification
* Browsing the home screen
* Viewing disability rating
* Viewing claim status 

**Characteristics:**
* May not have a defined end state
* Doesn’t always result in a transaction or submission
* Often serves to inform, guide, or prompt future actions

Non-tasks have also been identified for each key user flow. Non-tasks and associated metrics for 14 key flows are mapped in this [spreadsheet](URL).

| Type | What to measure | Metrics | Notes | 
|--------------|-------------|--------------|-------------|
| **User Tasks** | Task success and efficiency | - Task completion rate<br>- Time on task<br>- Error rate<br>- Drop-off rate<br>- Retry attempts | Collect in-app analytics on key flows (e.g. Rx refill, viewing appointments).|
| **Non-tasks** | User engagement and awareness | - Views<br> - Click-through rate (CTR)<br>- Dwell time <br>- Notification open rate | Focus on passive or content-related interactions. Can serve as leading indicators of task initiation. |

<details>
<summary><h3>Login</h3></summary> **this is an optional table**
 
|      | Accessing the App and Logging In |
|--------------------|-------------|
| **User goal**      | *"I need convenient access to view and manage my VA health benefits on-the-go."* |
| **What should we measure?** | Successful login, the first time<br> *"I was easily able to login the first time."* |
| **Helpful metrics**| - Login success rate<br> - Time to login<br> - Recovery rate<br>- Most common logout reasons (e.g. due to connectivity issues, app updates)<br>- Most common login failure reasons<br>- Active users<br>- New users<br>- Logins started event count<br>- Logins completed event count<br>- Login completed webview steps event count<br>- Logins canceled login event count<br>- Authenticated users<br>- Higher frequency reporting intervals than monthly (e.g. real-time data for login success or time to login)<br>- Qualitative trends in login issues from Feedback Hub channels<br>- Future: Login survey |
| **Unhelpful metrics** | - Measuring login success on a monthly basis. Consider higher frequency reporting intervals than monthly (e.g. weekly for login success or time to login) |

</details>

### Unhelpful experiential metrics
| **Metric**  | **Why this is unhelpful**  |
|--------------|-------------|
| TBD | TBD |
| TBD | TBD |

## Platform metrics

**Platform metrics** center around the performance, stability, and operational health of the underlying platform or system that delivers the experience. They are **system-centered** and measured from the technical perspective. 
- Reflect uptime, speed, scalability, and reliability
- Usually quantitative and diagnostic

### How should we define "the overall health" of the Mobile Platform? 
*"I want an application that is fast, stable, and accurately supports my needs as a Veteran."* 

Overall platform health can be measured by the platform's speed, availability, reliability, consistency, overall user satisfaction, adoption, and retention. Each table below define each measurement factor and provides helpful metrics to track and how they can inform decision-making.

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


