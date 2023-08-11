# My VA 2023 Notification Documentation Discovery 

**Office of the CTO - Digital Experience (OCTO-DE), Authenticated Experience, My VA**

Last updated: 8/9/2023

[Link to Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1691076804207/fa8da503c9c851bc0cad4586c8e742dbe99b8537?sender=ud5c82d652d231345efaf6060)

## Research Goals
The goal of this work was to start viewing the VA.gov notification landscape more holistically and to highlight opportunites for expanding on it.

This research supported this goal by:

* Documenting the different types of notifications/alerts that commonly power web products
* Documenting whether we are already utilizing those on VA.gov or not
* Doing discovery work to look into other popular design systems and how they utilize notifications and alerts.
* Identifying opportunities worth exploring for VA.gov found in this discovery research

## Types of notifications we're already using and may not need to expand upon

- System alerts
  - Purpose: To announce that a feature is down. The user didn't cause this alert and can't do anything to remedy it immediately.
  -  We use the [warning alert](https://design.va.gov/components/alert#warning-alert) in the VA Design System for these.
 
- General, non-personalized announcements
  - Purpose: To communicate things that can impact many users. Not personalized to the individual user.
  - We use the [banner](https://design.va.gov/components/banner/) in the VA design system for these.

## Types of notifications we're already using and may have an opportunity to expand upon

- Event-based notifications
  - Purpose: User feedback - Respond to an action a user has taken to draw their attention to something.
  - We use the [default alert](https://design.va.gov/components/alert#success-alert) and [slim alert](https://design.va.gov/components/alert#examples---slim-alert) in the VA design system for these.
  - **Opportunity:** These alerts can contain a link and we may be able to make better use of that feature of the component. For example, giving an option to "Undo" an action when technically feasible is a common pattern in these type of alerts that we're not currently using.
 
- Personalized indicators
  - Purpose: To specify the amount of unread/unseen things within a category; To draw attention to new, important content on a page that might otherwise be missed
  - We use the [tag](https://design.va.gov/components/tag) in the VA design system, as well as a dot that is not yet part of the design system.
  - <img width="205" alt="Screenshot 2023-08-11 at 11 52 19 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/97965610/4a7f037f-f580-4ac0-bf2d-248f5d597ec8">
<br>
  Tag used in mobile app to denote unread messages
  - <img width="370" alt="Screenshot 2023-08-11 at 11 52 30 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/97965610/c0c4a9db-47a8-4ecb-8c99-b2050bbf8c6c">
<br> 
  Dot used in new secure messaging portal on VA.gov to show that there are unread messages in a thread


## Types of notifications we're not using that we may want to explore

-

## Additional Insights

