# Veteran Effort Score - Product Brief  

## Problem Alignment - Background, Problem Statement, Outcome, and Additional Context

### Background
The VA Health & Benefits mobile app debuted in July 2021, initially relying on industry-standard app store ratings and reviews to gauge user satisfaction and feedback. However, as time progressed, it became evident to the app team the value of implementing a targeted, in-app feedback tool that complements the existing user feedback mechanisms in place.

### Problem Statement
Currently, the mobile team's ability to assess the effort required for Veterans to use the app and receive benefits from the VA is limited in effectiveness. The existing methods do not provide continuous feedback at the feature level and, at times, they lack actionable specificity or only provide part of the story:
* **Task completion rate** - Task completion rate describes the rate at which Veterans complete a task once they have started. While we can identify which tasks have low completion rates, it is difficult to identify specific areas of improvement within those tasks
* **App Store ratings & reviews** - App Store ratings and reviews are useful but have several challenges. In general, users who have strong feelings about an app (positive or negative) are more likely to leave ratings and reviews, which may lead to a biased sample. They are also public, permanent, and don’t require the user to have downloaded the app. Additionally, users choose to provide feedback on features or items they choose, but there is no existing mechanism in place to gather targeted in-app feedback on specific features.
* **Interviews & user testing** - While interviews and user testing provide great qualitative feedback, they face three challenges. They are not quantifiable, making it difficult to track changes over time. In addition, Veteran feedback from interviews might elicit specific recommendations for improvements to the app but it is difficult to extrapolate the effectiveness of these Veteran-generated recommendations at scale. Finally, because they typically follow the launch of a new feature, they occur intermittently and are limited to a single area of the app

As a result, we are unable to effectively assess ease of use over time or illicit feedback on how to make the app easier to use

### Outcome - Hypothesis
Implementing a Customer Effort Score (CES) will enhance the Flagship mobile team's ability to quantitatively assess the effort required by Veterans to access benefits and services from the VA. This implementation will also establish a feedback mechanism to extract actionable insights for product improvement. With CES and the feedback mechanism, we aim to:
* Quantitatively measure the effort Veterans invest in using the app for VA benefits and services, considering both a holistic, full-app perspective and feature-level assessments.
* Obtain feedback from Veterans on the ease or difficulty of specific areas or features.
* Utilize Veterans' feedback to drive product improvements that enhance the overall user-friendliness of the app.

**What is the Customer Effort Score**
Customer Effort Score is a concise survey, strategically placed at the end of a key task and optimized for mobile. The survey asks users to respond to a 5-point scale question that measures the effort required to use the mobile app to complete the task. In the context of CES, the wording in the question focuses on the effort to complete the task as opposed to the satisfaction of the user’s experience.

**Why CES vs. other scores?**
Many metrics are typically used to assess the value that users derive from a product. We believe that Customer Effort Score (CES) should be used instead of Customer Satisfaction (CSAT) or Net Promoter Score (NPS) for several reason
* **Actionable Insights:** Customers are asked about the effort required to complete a task, providing clear and specific feedback on potential pain points in the Veteran journey. This allows us to pinpoint areas to reduce friction or frustration with a higher degree of precision. In addition, Satisfaction is an ambiguous concept, making it more difficult to make specific changes. Similarly, it’s difficult to identify specific product improvements that would result in improved peer-to-peer growth.
* **Task-Centric Measurement:** CES is task-centric, measuring the ease of completing specific transactions. This makes it particularly relevant for transactional products, like the Flagship mobile app, where Veterans often have clear goals, such as fulfilling a prescription.
* **CES as Leading Indicator for Satisfaction and Organic Growth:** We believe that reducing the effort it takes for Veterans to access benefits from VA will lead to increased satisfaction and improved peer-to-peer organic growth. As a result, CES should be focused on because it is more actionable, as described earlier.

### Assumptions & Risks
**Assumptions**
* **Actionable feedback** - We receive actionable feedback that can be used to decrease the effort it takes for Veterans to use the VAHB mobile app to manage their health and benefits.
* **Impact on satisfaction** - Improving CES results in increased Veteran satisfaction of the mobile app
* **Impact on promotion** - Improving CES results in Veterans organically telling other Veterans about the app

**Risks & Mitigation**
* **Feedback Bias** -Veterans may provide biased feedback based on a single positive or negative experience, leading to skewed CES scores
    * Mitigation - Encourage Veterans to provide feedback across various interactions and continuously monitor for patterns.
* **Perception Variability** -Veterans may have varying perceptions of what constitutes "effort," leading to inconsistent and subjective CES scores
    * Mitigation - Clearly define what "effort" means in the context of the CES survey and provide examples to guide Veterans in their assessments.
* **Overemphasis on Task-Related Effort:** - By focusing solely on task-related efforts, CES may not fully capture Veterans'  or overall sentiment, providing a limited view of the user experience.
    * Mitigation - Balance CES with other metrics and qualitative feedback mechanisms to ensure a holistic view of user satisfaction.
* **Response Rate Challenges** - Low response rates to CES surveys may result in a lack of representative data, especially if users who had extreme experiences are more likely to respond.
    * Mitigation - Optimize survey timing and use periodic sampling to mitigate response rate challenge

### Roadmap

**MVP - We can ask Veterans about the ease of using the app at specific points in their task flow and elicit written feedback**

**Phase 1 - Tool Selection**
* Define tool requirements
  * Minimal implementation costs such as VA approvals or engineering work
  * Quick, easy, and flexible implementation of surveys
  * Easy to interpret survey results 
* Identify and select the tool that fulfills the requirements


**Phase 2 - Survey Design & Instrumentation***
* Determine CES survey questions/format
  * Find questions that have already been approved
  * Define best practices in CES survey questions
* Begin PRA approval process
* Implement and test tool in mobile app

**Phase 3 - Implementation**
* Design flows & logic for survey appearance
    * Design includes question framing and when the questions are asked.
        * Note that we should ensure that CES and app store rating questions are not presented at the same time, inundating Veterans 
          * Use placeholder survey UI using the following:
            * “How easy was it to complete your task today?” [scale 1-5]
            * “Question TBD” [freeform field]
    * Decide where/how the entrypoint for collecting user feedback lives in the app
      * Dismissible, contextual intercept feedback survey request (including display logic)
      * Permanent place for collecting feedback (lower priority)
* Survey results are interpreted after two weeks and a baseline score is established

### Measures of Success
* **Response Rate** - Rate at which Veterans who are presented the survey, submit a response
