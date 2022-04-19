# Choosing a Mobile Navigation Direction

<img width="600" alt="Mobile navigation decision diamond" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-design/information-architecture-navigation/success-criteria-nav-model-audit/mobile%20navigation%20decision%20diamonds.png">



We will use the following criteria to systematically audit our navigation design explorations and narrow options down to the direction/s we intend to move forward with. Criteria below are color-coded to match the diagram above.


# DRAFT Criteria for Evaluating VA Mobile App Navigation Model UI

## Business Goals

1. Navigation model is **extensible & future proof**
    - There is someplace for new features or top level categories to live without reworking core navigation (ex: leave an empty space in the global navigation)
2. Navigation model ensures that the** default landing screen provides** **space for dynamic personalization**--both personalized content (such as prescription & appointment reminders, new messages) and personalized tools (such as quick access to tools the veteran uses)?
   - Navigation model supports cross-references between stacks (ex: personalized home screen content that links to a screen within another section)*
3. Navigation model ensures that the **default landing screen provides** **space for featured content or tools**
4. **Core navigation is the same for every Veteran, on both iOS & Android platforms** (acquisition: apps are shared grassroots style & Veterans help each other)*

    _*also a technical & platform consideration_



## Veteran Mental Models/Needs

5. Navigation model** supports Veteran mental model **buckets, taxonomy and site map**
6. Navigation model is **accessible** (including cognitive disabilities, assistive technology, ESL etc)
    - Allows Veterans to **parse info quickly** (less is more)
    - **High traffic items in an easy to reach location/** thumb zone.
    - Uses a **clear, consistent & well-known navigation pattern,** so focus is on tasks & content, not on figuring out how to navigate the app
    - Navigation model **makes it clear where the Veteran is,** even when several levels down a stack*
    - Provides **clear back button labels***

    _*also a technical/platform consideration_



## Platform (AKA device OS) Considerations

7. Navigation model **adheres to native mobile platform guidelines & best practices for both iOS & Android**
    - Navigation model supports **efficient navigation to all content and tools** —easy and simple paths in and out
    - **Default/initial screen (Home) is easily accessible from any other screen** within a few taps


## Technical Feasibility

8. Navigation model is **feasible within React Native** 
9. Navigation model **doesn’t negatively impact responsiveness/speed**

## Inputs 

[Mobile Redesign - Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design/redesign-initiative-brief.md)
[VA Mobile App: Information Architecture & Navigation - High Level Project Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-design/information-architecture-navigation/High%20Level%20Project%20Summary.md)
[VA Mobile Comparative Analysis: Navigation UI Patterns](https://docs.google.com/presentation/d/1RHVh32V_ou0OGeuwpsA4naKRSfd_cst5UERsvSAVTk0/edit#slide=id.p1)
Navigation Design workshop - 4/5/22.

## Definitions

**Navigation model: **the UI pattern used to access the paths to each user goal in the app** \
Global navigation: **navigation that appears on every screen (ex: drawer, tab bar); consists of a set of links that allow users to access the top-level categories of a site, and a link to the home screen(presented as the logo).** \
Subnavigation: **navigation that is local to a particular screen (ex: tabs, top bar icons); helps users access lower-level categories in the site’s information architecture** \
Platform = **device OS; iOS or Android** \
Native: **iOS or Android


