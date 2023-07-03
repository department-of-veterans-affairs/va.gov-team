# Sprint 0: Defining active users and log in issues

[Link to Epic]

## Problem Statement

### Current Experience ###

* Currently, we have been using Google Analytics (GA) definition of an active user, which counts any user logging any app event with the app in the foreground of their device. This will include people who experience a log-in failure and get no further. If we rely on this definition, we will be overcounting users.
* It also appears that our event tracking for log-in success is not triggered when a user logs in with biometrics. If investigation shows this to be true, relying on on app events for log-in success will be under counting.
* Some supporting data may live in our API call logs or those from the SIS team; Greta is currently getting up to speed on Datadog and what's possible there.
* [VA Mobile Docs Auth Diagrams](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/Architecture/Auth%20Diagrams/) is the best diagram of what we're trying to understand around this problem area and does not include what app events/pages are involved or specific API calls.
* Our documentation also lacks updates for SIS (only covers IAM).

This all affects our ability to accurate count users who are actually encountering log in issues as well as a reliable definition of an engaged user to evaluate specific beahviors against. 

### Current Measure of Scope of the Issue ###
Based on the figures below, it is estimated that our current log-in tracking in the app (not the API logs) is missing about a third of all successful log-ins. In terms of more context on the scope fails, that cannot be addressed without completing some of the steps outlined in this step 0.

**Users with log-in event tracking in app**
* 478.5k users had log-in start events (vama_login_start) tracked by the app
  * 372.7k users had log-in success events (vama_login_success)  tracked by the app --> 77.9% of log-in start total above
  * 15.7k users had log-in fail events (vama_login_fail)  tracked by the app --> 77.9% of log-in start total above
* **90.1k users with log-in start logged but without success or fail logged**

**Users with screen views tracked in app:**
* 680.8k users viewed at least one screen in the app (i.e. opened the app)
  * This could include unintentionally opening the app.
* 656.4k users viewed the Login screen --> 137% of the total users with log-in start events
  * 521.5k advanced to view the Sync screen
  * 501.4k viewed the Home screen --> 134% of the total users with log-in success events
    * This is where we are theorizing fixing the tracking of biometrics should bring the event tracking count of users in alignment with the page viewing count of users.

### Desired Outcomes ###
1. We can accurately measure log-in success and fails, as well as precise points of failures parsed by log-in type.
  1. Failure patterns can be acted upon directly by the team or by reporting to responsible upstream teams.
2. We have a documented and consistent definition of folks utilizing the app that becomes the starting point of all post-log-in user behavior funnels.

## Assumptions and Level of Confidence

1. Current documentation of log-in/authorization flows is not sufficient to solve these problems. [high] 
  1. Mapping the log-in/authorization flows alongside the data they produce will uncover gaps that need to be filled. [high] 
2. Different log-in methods have different levels of log-in failure. [high]
3. Proportion metrics will shift significantly whne we move away from the GA definition of active user. [medium]

## Risks

* Improved log-in fails might not uncover Mobile App team actionalbe problems.
  * but we can still relay any issues with underlying dependancies to the respective teams.


## Business Goals
* How would this benefit VA?
  * More meaningful measurement across the board when we say X% of users leveraged ___ feature.
  * Better user experience if we can resolve underlying log-in problems would lead to more users getting more done through the app.

* Which OCTO and Program goals does this tie to?
  * Objective 1 Veterans will use authenticated services that are highly personalized and valuable. 
    * Login is essential to this and measuring utilization of authenticated services relies upon solidd defintion of the active user base.
  * Objective 2 100% of eligible Veterans can use health apartment “rooms” most applicable on mobile. 
    * Login is essential to accessing these features.
  * Objective 3 Increase active user base. 
    * Login fails may deter users.
  * Objective 4 Inform and guide other VA teams. 
    * May allow us to identify dependancy issues that other teams could addrss further improving the OCTO ecosystem.

## Roadmap

**V1**

 * Complete log-in user + data flow documented in Mural for both standard/biometric logins and initial/subsequent logins
 * Identify gaps in data and add additional tracking if needed/possible
 * Start using Home screen views as proxy for logged-in users until a precise definition of active/engaged user is established.
  
**V2 and beyond**
* Use new definition as underlying to all metrics.
* Once sufficient data is gathered, calculate the number and percent of users experiencing log in fails by reason/point in the log-in process.
* Create a dashboard for monitoring log-in issues and update all other dashboards to reflect final definition of active users.

## Technical Approach

* Collaboratively create a Mural dashboard where we create a centralized data, BE + FE engineering, and design documentation of the possible flows through log-in/authentication.
* Identify any gaps in those flows where additional event tracking needs to be added.
  ** Engineering implementation on this should be very low lift additon of tracking events.
* Documenting the user definition and current state in all dashboards and implementing it in all dashboard calcuations.

## Measuring success 

* Ontime completion of steps barring priority shifts.
* Number of action items identified by log-in fails data once surfaced.


## Stakeholders

* SIS team will likely provide support in orienting Greta to their Datadog logs.

## Open Questions

* What do we need to learn before moving forward?

## Important Links
* [VA Mobile Docs Auth Diagrams](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/Architecture/Auth%20Diagrams/)
* [Mural](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1683549939459/7c483ce1fab59d45a89cb420d42d0e0294289b23?sender=u955e947bb617e3eae45a5638)
