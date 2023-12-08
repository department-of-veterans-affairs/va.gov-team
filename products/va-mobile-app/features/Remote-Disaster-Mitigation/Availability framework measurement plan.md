Last updated Oct. 24, 2023

## **Overview**

The [problem statement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/Remote-Disaster-Mitigation/Remote-Disaster-Mitigation.md) for Availability Framework (AF) defines its purpose is to provide messaging in the case of critical errors “**so that the user will not have a bad user experience**.” This implies at least three hypotheses to measure for AF:
* Knowing that a problem is happening and that it is being worked on is a better experience than not knowing and encountering the problem.
* Knowing where else a Veteran can go to complete a task that is blocked by a critical error is a better experience than having to find that information on their own outside the app.
* Knowing when and how the Veteran can resolve the critical error by returning to the screen where the message was posted on a previous visit is a better user experience than not being informed.

Across these hypotheses two primary categories of information are referenced that cannot be directly measured in app analytics: 1) user knowledge and 2) user experience or satisfaction. We do not have baselines around these areas for the current state of when users encounter critical errors.

For these reasons, **proxies will be used to measure actions that are justified indicators that the information was understood and that the user’s experience was better than it would have been without the intervention**. We will also measure overall function, utilization, and resolution. Depending on the nature of the critical error being addressed, how and what comparisons we will be able to make will vary.

**No dashboard will be built for this feature.** Unlike our other app analytics, we are not in an ongoing monitoring phase with AF that would require a dashboard. Additionally, no data will be collected until it is actually used to message users. When it is used to message to users, the situation and context of what type of error it is addressing and where it occurs in the app will affect the exact analysis. 

## **Metrics & Measures**

The following tables describes the minimum success and monitoring measures and metrics for AF. Depending on the exact scenario in which it is used, some modification of the overall plan below may be necessary or a helpful supplement. In the following sections, the rationale and technical description of the calculations are provided in more detail. Monitoring metrics will not include a target.

### **Success metrics**
<table>
  <tr>
   <td><strong>Metric</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Direct or proxy</strong>
   </td>
   <td><strong>Definition</strong>
   </td>
   <td><strong>Target</strong>
   </td>
  </tr>
  <tr>
   <td>Message view rate
   </td>
   <td>Function
   </td>
   <td>Direct
   </td>
   <td>What percentage of views of the app screen on a version with AF see the message when it is on?
   </td>
   <td>100%
   </td>
  </tr>
  <tr>
   <td>Resolution rate
   </td>
   <td>Resolution
   </td>
   <td>Proxy
   </td>
   <td>Overall and by OS, what percent of users who saw the mitigation message resolve the issue via update within X days of an update being available?
   </td>
   <td>100%
   </td>
  </tr>
  <tr>
   <td>Directly attributed resolution rate
   </td>
   <td>Resolution
   </td>
   <td>Proxy
   </td>
   <td>Overall and by OS, what percent of users who see the mitigation followup message with the update now button complete the update by clicking it?
   </td>
   <td>>= Encourage Update success rate in the same period
   </td>
  </tr>
  <tr>
   <td>Retention longevity
   </td>
   <td>Knowledge & experience
   </td>
   <td>Proxy
   </td>
   <td>Segmented by whether or not they saw the mitigation message, what percentage of users who viewed the part of the app with a critical error continued to use the app in the next X days?
   </td>
   <td>>= retention longevity for unaffected user cohort (if available)
   </td>
  </tr>
  <tr>
   <td>Pre/post screen view ratio
   </td>
   <td>Knowledge & experience
   </td>
   <td>Proxy
   </td>
   <td>On average, what is the ratio between how often users visit the screen 1) X days post-resolution being available and 2) X days before the critical error existed?
   </td>
   <td>1 or greater
   </td>
  </tr>
</table>

### **Monitoring metrics**


<table>
  <tr>
   <td><strong>Metric</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Direct or proxy</strong>
   </td>
   <td><strong>Definition</strong>
   </td>
  </tr>
  <tr>
   <td>Pre-resolution screen view rates
   </td>
   <td>Utilization
   </td>
   <td>Proxy
   </td>
   <td>How often did users visit the screen while the availability message was in place but no update available?
   </td>
  </tr>
  <tr>
   <td>Pre-resolution screen views relationship to updates
   </td>
   <td>Knowledge & experience
   </td>
   <td>Proxy
   </td>
   <td>What relationship, if any, is there between the number of views of the screen while no resolution was available and the user successfully updating and update velocity?
   </td>
  </tr>
  <tr>
   <td>Retention density
   </td>
   <td>Resolution
   </td>
   <td>Proxy
   </td>
   <td>Segmented by whether or not they saw the AF message, how much do users interact with the app on average before, during, and after the critical error that lead to AF being used?
   </td>
  </tr>
</table>



## **Metrics & Measures explained in-depth by type**
### **Function: is this thing on?**
#### Message view rate

**Question**: What percentage of views of the app screen on a version with availability framework see the message when it is on?

**Calculation:**
* **Numerator**: Distinct instances of `vama_af_shown` on the screen
* **Denominator**: Distinct views of the screen on any version where the AF is set to display

**Success**: 100%
* Any user who is on a version where the availability framework is in place and who visits the screen it applies to should see the message.
* If this figure is below 100%, that would indicate something about the logic to present the message to users was not working and should be investigated.

### **Utilization: how much do users interact?**
#### Pre-resolution view rate vs. resolution

**Question**: Does a higher number of views of the screen while no resolution was available positively or negatively correlate with the user successfully updating? With update speed?

**Calculation**
* Comparing resolution rate with the average instances of `vama_af_shown` per user weighted by total number of days the app was opened by the user

**Why monitor:** Depending on the nature and location of the error, Veterans may return to the screen multiple times while an availability message is up but no resolution is available. How often users re-visit while the availability message is up but no update is available may correlate with how likely they are to resolve when the update is available. **The relationship between these factors could indicate a need to explore messaging efficacy and alternative passive communication options.**


### **Resolution: did the user get the fix?**

Veterans will resolve the issues the availability messages alert them to by updating their app version when a new app version is available that addresses it. The availability message will prompt users to update once that is available and include a button they can click to launch the update process. However, **not all users will update via the AF button.** Some will update via auto-updates, some via Encourage Update (EU), and others manually. These prompts the availability messages will provide are similar to the EU messages. The success rate for EU–the number of users updating via EU divided by the number of users shown EU–was 66% in September 2023.

The utilization of EU is extremely different between iOS and Android. Analysis in Q3 showed that between April 25-June 30, 2023, **97.3% of Android updates occurred via EU; on iOS, it was less than 0.1%.**

In the case of errors that users can immediately take action to address, a high resolution rate can indicate that the error messages are helpful and that users are able to understand and fix the problem. **For the critical errors that AF addresses, however, there is a time delay between when the user will know there is an issue and when they will be able to do something to resolve the issue.** Additionally, many users leverage auto-updates so they may be updated without any active step on their part and those updates would not necessarily reflect anything about their experience or satisfaction. Therefore, **the overall resolution rate is a measure of success for getting users past the error but _not_ necessarily indicative of the availability framework tool itself**. 

Alternatively, **directly attributed resolution rate **is a proxy for measuring whether knowing when and how the Veteran can resolve the critical error by returning to the screen where the message was posted on a previous visit is a better user experience than not being informed. However, it might not always be an ideal time for the user to complete the update when they see the message with the update option. Due to the similarity to EU, we can set a benchmark for timeliness and completion of updates based on the rates for EU in the same period. **Directly attributed resolution rate is a stronger proxy for the Veteran having an improved experience** due to the availability message and for the Veteran having the knowledge to be able to resolve the issue when the solution is available.


#### Resolution rate
**Question**: Overall and by OS, what percent of users who saw the mitigation message resolve the issue via update within X days of an update is available? (where X = the median number of days between views of that part of the app when it had no critical error. If this is not available, look at 30, 60, & 90 days.)

**Calculation**
* **Numerator**: distinct users with `vama_af_shown` and updated to the fix version
* **Denominator**: distinct users who logged `vama_af_shown`

**Success:** 100%

#### Directly attributed resolution rate
**Question**: Overall and by OS, what percent of users who see the mitigation followup message with the update now button complete the update by clicking it?
**Calculation**
* Numerator: distinct users with vama_af_updated_success
* Denominator: distinct users who logged vama_af_shown with af_status = ‘closed’
**Success:** Percentage greater than or equal to Encourage Update success rate in the same period

### **Knowledge & experience: Do they understand? Is it a better interaction?**

For user knowledge and experience, there are two strong direct measurement approaches: 1) User testing/research sessions and 2) In-app surveying. In-app surveying is not currently possible. Research is the only way to know **_before_** an actual critical issue occurs where we attempt to use this feature how well the feature communicates with users and how it affects user experience and sentiment.

App store reviews and Reddit direct reports of Veteran experience with AF when it is used should not consider these for metrics of success. They are best used to provide direction towards more robust investigation of analytics or other qualitative approaches that can be more developed in their findings.

**Retention is the proxy we will use for knowledge and experience.** Bad user experiences may lead Veterans to use the app less or stop using it overall. Retention measures are a proxy for user experience but must also account for other factors impacting retention.


#### Retention longevity

**Question:** Segmented by whether or not they saw the mitigation message, what percentage of users who viewed the part of the app with a critical error continued to use the app in the next X days?
* We haven’t measured retention impact from these kinds of issues before. Past problems could be analyzed to see if the hypothesis is true that these errors impact long-term retention.
* Depending on the specific issue, analysis will attempt to control for other known influences or spikes in other issues (ex. login issues.)

**Calculation:**
* **Numerator**: distinct users who logged vama_af_shown and were viewed the affected screen within X days
* **Denominator**: distinct users who logged vama_af_shown

**Success:** >= retention longevity for unaffected user cohort (if available)


#### Retention density

**Question:** Segmented by whether or not they saw the AF message, how much do users interact with the app overall and the screen with AF message on average before, during, and after the critical issue?
* Situational context for the critical error will be used to determine what timeframe is analyzed (i.e. how many days before/after the blocked period?)

**Calculation:** 
* Distinct visits per user who sees the AF message per active day for 1) opening the app and 2) viewing the screen affected by the AF message 

**Why monitor:** If the critical error blocked a core part of what a Veteran uses the app for, the frequency of their use may decrease. Alternatively, others might end up checking the app repeatedly waiting for updates. Since the only way to know when they can use the app again for the issue blocked by the error is to look in the app again, **this could drive up engagement for some users and might actually be a sign of a negative experience**. 


#### Pre/post screen view ratio

**Question:** On average, what is the ratio between how often users visit the screen 1) X days post-resolution being available and 2) X days before the critical error existed?

**Calculation:** Average of the following per user excluding users who do not resolve within the timeframe
* **Numerator**: Total number of screen views post-resolution
* **Denominator**: Total number of screen views pre-critical error

**Success:** 1 or greater
* Ideally, Veteran interaction with the app is not negatively impacted over the long term due to temporary critical errors. This can be assessed by measuring how often users were visiting the screen before the error occurred and after the resolution is available.
* The hypothesis is that users who see the availability message will return to use the screen at least as often as they did before the critical error occurred. As the exact reasons for the amount of Veteran utilization of a given screen may change over time, this is not a direct measure of appropriate or ideal utilization. In some cases, we may be able to compare to a pool of users without the message (on older versions).
