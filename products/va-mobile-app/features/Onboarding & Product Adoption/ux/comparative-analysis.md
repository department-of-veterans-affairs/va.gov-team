# VA Mobile App - Comparative Analysis: Onboarding

December 2024

Brea Blackwelder ([brea.blackwelder@adhocteam.us](mailto:brea.blackwelder@adhocteam.us)), VA Mobile UX Team

## Background & Goals
The VA Flagship mobile app was designed to help Veterans who are actively engaged with VA health and benefits services [keep track of their tasks and interactions across VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/617e9bb0b489b21eab4145eb2e78af2d4e9de53d/products/va-mobile-app/product/archive/2021/Product-Outline.md#L4). 

Quantitative data analysis indicates that users who initially download the app do not actively use the app over time, and qualitative research has indicated that [Veteran expectations and understanding of what they think they can do in the mobile app are limited and often inaccurate](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/ux/post-launch-discovery/2023-07-mobile-app-retention/Research%20Findings.md). While Veterans expect to use the app for features that are currently offered, they do not use it for additional features that they are not authorized to use and do not have time to go through the app’s functionality to discover everything that _is_ available to them.

The team believes that the mobile app’s current onboarding approach may be contributing to this lack of understanding and engagement:
* The **app’s store listing** is not optimized to attract downloads by communicating the app’s value proposition & benefits to potential users.
  * The elements visible at list level in the store (The subtitle/tagline and the first 1-3 images) don’t effectively summarize the app's purpose or communicate the app’s value proposition.
  * Once on the listing page, the rest of the imagery is not used effectively to illustrate the full value of the app (for example, it doesn’t mention key features/benefits like dark mode, push notifications, etc.).
* At this point, **in-app onboarding** is limited to a few screens displayed during a Veteran’s **first time use** of the app. These screens include: consent to use key capabilities (biometrics and push notifications) and screens (in a carousel format) that list the app’s features (by category) in a series of lengthy, bulleted lists.
  * Non-sighted users of the app have reported that these onboarding lists are overwhelming and too much information to process when they're simply trying to get logged in.
  * Additionally, 30% of users skip the onboarding screens and those who do not skip are likely not fully understanding the app’s benefits.
* The user experience, content, and strategy for onboarding users to the VA mobile app **across touchpoints** (from discovery and download  to first run and login) **has not been considered holistically**, and its primary message repeats a bulleted list of the app’s features rather than demonstrating value.
* After the initial onboarding screens, there is no further assistance or **guidance to help users take their first meaningful actions** within the app, leading to a gap in user engagement.

To help develop a point of view around how the VA mobile app should structure our end-to-end onboarding journey and content strategy, we want to better understand the current landscape of patterns and best practices related to end-to-end onboarding journeys by collecting examples from other apps (including but limited to apps with similar feature sets) that deal with onboarding existing customers to a new digital touchpoint (as opposed to initially enrolling users with a lengthy new account setup) and think beyond a feature list “first run”. We also want to assess the accessibility of various user interface (UI) mechanisms used.

### Current Experience
The app‘s current core onboarding journey includes:
* [iOS App store](https://apps.apple.com/us/app/va-health-and-benefits/id1559609596) and [Google Play](https://play.google.com/store/apps/details?id=gov.va.mobileapp&hl=en_US) store pages where the app can be downloaded
* A “first run” experience in the app consisting of a landing screen, login, biometrics and push notifications opt-in screens, and a 4-card onboarding carousel that primarily lists many (but not all) of the app’s features by category.
* There are several VA websites that mention the VA mobile app and direct users to the App & Play stores, including a robust presence in the [VA App Store](https://mobile.va.gov/app/va-health-and-benefits).
* It’s also possible to share a link to the app with a friend (via text/SMS) from within the app.

### We want to answer the following questions in order to identify best practices that can be applied to the VA mobile app.
* **How do apps approach the end-to-end onboarding journey?**
  * Which touchpoints (ex: discovery entry points, App/Play store, in-app first run, communications) do apps leverage for their onboarding experience?
    * What role do each of the touchpoints play in the user onboarding experience?
  * Do apps coordinate their content (and value proposition) across digital touchpoints?
  * What role, if any, does personalization play in the context of onboarding?
* **How do apps approach their first-run experience?**
  * What types of UI mechanisms are used (ex: carousel, scrolling, coach marks, etc)?
    * How accessible are the mechanisms used?
  * What functionality is included in the first-run flow?
  * What is the focus of the content (specific to app’s where account set up isn’t needed)?
* **How do apps approach continuous and contextual onboarding?**
  * What types of UI mechanisms are used (ex: banners, coach marks, etc)?
    * How accessible are the mechanisms used?
* **How do apps help users take their first meaningful actions within the app? Where/when does that happen?**

We will use the team’s devices and Mobbin to collect examples. The apps reviewed will primarily be on iOS, but will cross-reference with Android versions to identify platform differences.


## Apps Reviewed (9)
Apps marked with an asterisk(*) share similar task structures as the VA mobile app.
* Insomnia Coach (VA)
* Concussion Coach (VA)
* MyChart *
* NPR
* Airbnb
* Healow *
* Slack
* MyFitnessPal
* Firefox

## Findings

| App Name | End-to-end | First-run | Continuous | First actions |
|---|---|---|---|---|
| Insomnia Coach (VA) | Touchpoints:<br>Content coordination:<br>Personalization: | UI Mechanism(s) used:<br>Accessibility:<br>Functionality:<br>Content focus: | UI Mechanism(s) used:<br>Accessibility: | First actions:<br>Where/when: |
| Concussion Coach (VA) | **Touchpoints:**<br>**Content coordination:**<br>**Personalization:** | **UI Mechanism(s) used:**<br>**Accessibility:**<br>**Functionality:**<br>**Content focus:** | **UI Mechanism(s) used:**<br>**Accessibility:** | **First actions:**<br>**Where/when:** |
| MyChart | **Touchpoints:**<br>**Content coordination:**<br>**Personalization:** | **UI Mechanism(s) used:**<br>**Accessibility:**<br>**Functionality:**<br>**Content focus:** | **UI Mechanism(s) used:**<br>**Accessibility:** | **First actions:**<br>**Where/when:** |
| NPR | **Touchpoints:** App store / Play store, In-app first-use<br>**Content coordination:** Content is inconsistent between app stores<br>**Personalization:** No app-specific personalization. Onboarding focuses on personalizing your listening experience. | **UI Mechanism(s) used:** Carousel<br>**Accessibility:** Yes, but no ability to go back and change previous selections.<br>**Functionality:** Sign in / create account, personalize / customize your listening experience<br>**Content focus:** Each screen focuses on a specific task with short bits of copy | **UI Mechanism(s) used:** Banners <br>**Accessibility:** No concerns. Appears to be accessible. | **First actions:** Yes. Prompts to "start listening"<br>**Where/when:** Home screen after completing onboarding |
| Airbnb | **Touchpoints:**<br>**Content coordination:**<br>**Personalization:** | **UI Mechanism(s) used:**<br>**Accessibility:**<br>**Functionality:**<br>**Content focus:** | **UI Mechanism(s) used:**<br>**Accessibility:** | **First actions:**<br>**Where/when:** |
| Healow | **Touchpoints:** App store / Play store, In-app first-use<br>**Content coordination:** Content varies in the app stores, but with similar messaging.<br>**Personalization:** No | **UI Mechanism(s) used:** Tooltips, hotspots, screen overlay, carousel<br>**Accessibility:** Inaccessible. Screentakeover with contrast issues. Blind users will not know where the arrows are pointing.<br>**Functionality:** Sign in (while testing, create account was problematic and I was unable to finish account creation using the app)<br>**Content focus:** Instructional approach (you can do this here and that there). Each screen focuses on a different area | **UI Mechanism(s) used: Tooltips, notification alert (red dot), but no announcements for updates / new features**<br>**Accessibility:** Inaccessible. Notification alerts do appear on areas with changes / updates, but there is no explanation or information elevated when you tap into these areas.  | **First actions:** No (I was not prompted to do anything after onboarding)<br>**Where/when:** N/A |
| Slack | **Touchpoints:** App store / Play store, In-app first-use, Emails / Ads / Marketing<br>**Content coordination:** Yes<br>**Personalization:** No | **UI Mechanism(s) used:** Carousel<br>**Accessibility:** Overall accessible, but you only have the ability to move forward and cannot move backwards.<br>**Functionality:** Sign in / create account<br>**Content focus:** Each screen focuses on a specific feature (or value prop), task, etc. | **UI Mechanism(s) used:** Tooltips, banners, and full panels with information on new feature(s)<br>**Accessibility:** Yes. Panels detail new features with buttons to close or learn more. Tooltips are not pointing to anything specific and provide instructions. | **First actions:** Yes. "Create a workspace" if you have not already joined one, tooltips with helpful information, etc.<br>**Where/when:** Throughout the app during your first run  |
| MyFitnessPal | **Touchpoints:** App store / Play store, In-app first-use, Emails / Ads / Marketing<br>**Content coordination:** Yes<br>**Personalization:** No app-specific personalization. Onboarding focuses on personalizing your nutrion / health plan. | **UI Mechanism(s) used:** Welcome screen + interactive / meta (teaching you how to use the app by personalizing / setting up your account)<br>**Accessibility:** Not fully accessible. Very long onboarding process and can only move forward during onboarding (cannot fix a mistake on a previous screen)<br>**Functionality:** Account / health plan customization, sign in / create account <br>**Content focus:** Each screen is focused on gathering information to customize your account / health plan / experience | **UI Mechanism(s) used:** Coach marks<br>**Accessibility:** Not accessible for blind users who cannot visually see where the coachmark is pointing / located | **First actions:** Yes. "Log your most recent meal"<br>**Where/when:** On the home screen after completing customization / onboarding |
| Firefox | **Touchpoints:** App store / Play store, In-app first-use, Emails / Ads / Marketing<br>**Content coordination:** Yes<br>**Personalization:** Yes – themes (dark/light) and toolbar placement | **UI Mechanism(s) used:** Carousel<br>**Accessibility:** Carousel does allow swiping, but also has buttons to navigate forward. QR code to login is not accessible, but there is an alternative.<br>**Functionality:** Sign in / sync account, notifications, personalization<br>**Content focus:** Explanatory / instructional-focused approach | **UI Mechanism(s) used:** N/A. There is a "What's new" area in the menu that opens the website in the browser with the release notes.<br>**Accessibility:** Yes, but does not alert the user and relies on the user to discover updates / changes. | **First actions:** No prompts / direction unless you have signed in and synced your account. After setup, you are taken directly to the "home" area to browse. If you have signed in and synced, there is a tooltip that appears to prompt you to "pick up where you left off" on your other device.<br>**Where/when:** Tooltip appears on the "home" screen after you agree to sync your account, bookmarks, etc. |

### How do apps approach the end-to-end onboarding journey?

### How do apps approach their first-run experience?

#### Accessibility Findings

### How do apps approach continuous and contextual onboarding?

#### Accessibility Findings

### How do apps help users take their first meaningful actions within the app? Where/when does that happen?

## Recommendations
