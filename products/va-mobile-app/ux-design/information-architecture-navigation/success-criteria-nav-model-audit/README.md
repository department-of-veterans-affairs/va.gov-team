# Navigation Model Exploration Audit

## Choosing a Mobile Navigation Direction
<p align="center">
<img width="600" alt="Mobile navigation decision diamond" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-design/information-architecture-navigation/success-criteria-nav-model-audit/mobile%20navigation%20decision%20diamonds.png"></center>
</p>


We will use the following criteria to systematically audit our navigation design explorations and narrow options down to the direction/s we intend to move forward with.


### DRAFT Criteria for Evaluating VA Mobile App Navigation Model UI

#### Business Goals

1. Navigation model is **extensible & future proof**
    - There is someplace for new features or top level categories to live without reworking core navigation (ex: leave an empty space in the global navigation)
2. Navigation model ensures that the **default landing screen provides space for dynamic personalization**--both personalized content (such as prescription & appointment reminders, new messages) and personalized tools (such as quick access to tools the veteran uses)?
   - Navigation model supports cross-references between stacks (ex: personalized home screen content that links to a screen within another section)*
3. Navigation model ensures that the **default landing screen provides** **space for featured content or tools**
4. **Core navigation is the same for every Veteran, on both iOS & Android platforms** (acquisition: apps are shared grassroots style & Veterans help each other)*

    _*also a technical & platform consideration_



#### Veteran Mental Models/Needs

5. Navigation model **matches Veteran mental model buckets and site map**
6. Navigation model is **accessible** (including cognitive disabilities, assistive technology, ESL, etc)
   - Allows Veterans to **parse info quickly** (less is more)
   - **Places high traffic items in an easy to reach location/** (thumb zone)
   - Uses a **clear, consistent & well-known navigation pattern,** so focus is on tasks & content, not on figuring out how to navigate the app
   - **Makes it clear where the Veteran is,** even when several levels down a stack* (ex: clear back button labels)

   _*also a technical/platform consideration_



#### Platform Considerations

7. Navigation model **adheres to native mobile platform guidelines & best practices for both iOS & Android**
   - Supports **efficient navigation to all content and tools**—easy and simple paths in and out
   - **Default/initial screen (Home) is easily accessible from any other screen** within a few taps


#### Technical Feasibility

8. Navigation model is **feasible within React Native** 
9. Navigation model **doesn’t negatively impact responsiveness/speed**


### Inputs 

- [Mobile Redesign - Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design/redesign-initiative-brief.md)
- [VA Mobile App: Information Architecture & Navigation - High Level Project Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-design/information-architecture-navigation/High%20Level%20Project%20Summary.md)
- [VA Mobile Comparative Analysis: Navigation UI Patterns - 2022](https://docs.google.com/presentation/d/1RHVh32V_ou0OGeuwpsA4naKRSfd_cst5UERsvSAVTk0/edit#slide=id.p1)
- [Navigation Design Workshop (Mural)](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1648667549883/2f4416cd2a5b9bddce0e2ecc0f078d4f7218a2fe?sender=uff1791dd79ec763420518644)
- [Comparative Feature Analysis Summary - 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/summary.md)



