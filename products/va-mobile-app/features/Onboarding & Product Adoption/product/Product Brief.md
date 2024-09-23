# Onboarding & Product Adoption Product Brief
## Alignment - Problem & Desired Outcome

The VA Mobile App’s mission is to empower Veterans by providing fast, easy, and personalized access to popular VA health and benefits services. However, user retention and engagement have historically been low. Qualitative research revealed that many Veterans download the app with expectations that don’t align with its actual features. They often don’t use the app for services they are authorized for or don’t take the time to explore its functionality. This disconnect suggests that the app isn’t effectively conveying its value, leading to decreased adoption.

We believe that the personalized home screen has likely addressed several of these issues by guiding users toward relevant first actions. Evaluative research and early quantitative analysis suggest that Veterans better understand the value the app provides and are engaging with features at a higher rate.

However, the team believes the app’s onboarding process still contributes to gaps in user understanding and engagement. Several issues, largely due to gaps in best practices, have been identified as potential barriers to optimizing the user experience:
1. **Ineffective Acquisition Tracking**: The app doesn’t track where users are coming from, missing out on valuable data that could inform marketing and acquisition strategies.
2. **Lack of Insight into VA Marketing**: Related to ineffective acquisition tracking, we also don’t control or have total insight into VA’s marketing efforts about the app. To effectively communicate the app’s value, we need consistent messaging across all marketing channels
3. **Ineffective Adoption Tracking**: We are not tracking whether users who download the app are discovering and taking their first meaningful actions (a proxy for discovering value) based on their particular involvement with VA. Our hypothesis is that app user behavior differs based on which services they engage with at VA (ex: Claims only vs Health only vs both). We don’t measure behaviors by segment, and we don’t know what behaviors or actions correlate with adoption for each user segment, so we don’t know if we’re successfully leading users toward those first meaningful actions.
4. **App Store Optimization**: The app’s store listing is not optimized to attract downloads by communicating the app’s value proposition & benefits to potential users. Additionally, the app store listing isn’t accessible to all users (see Appendix 1 for current App Store metrics)
   * The elements visible at the list level in the store (the subtitle/tagline & first 1-3 screenshot images) don’t effectively summarize the app's purpose or communicate the app’s value proposition.
   * Once on the listing page, the imagery doesn’t effectively illustrate the app’s full value. For example, it doesn’t mention key features/benefits like dark mode or push notifications.
   * Screen readers for certain iOS versions are not reading out all of the text in the images (and the alt text isn’t being read consistently), so users may not be hearing the description text within screenshots at all—instead they’re hearing a readout of the app screens included in the image.
   * 
5. **Complex and Unreliable Sign-in Required Before First Run**: The app requires users to successfully sign in, offering four different sign-in options, each with varying failure rates, before they see anything in the app. Acting as more of a “brick wall” than a “front door”, the sign-in screen does not provide any context as to what the app can do for Veterans. Instead, it displays the VA Logo, sign-in button, Veterans Crisis Line, and Find a VA Location button. Context explaining what the app can do is displayed only after a user successfully signs in. While sign-in causes significant user experience issues and is outside our team’s scope, the complexity and unreliability of sign-in should inform the way we approach first-time-use onboarding strategies.
6. **Unengaging (and Overwhelming) Onboarding Process**: The current in-app onboarding experience is limited to a few screens displayed during a Veteran’s first-time use of the app that asks for consent to use key capabilities (biometrics & push) and list the app’s features by name in a series of lengthy, bulleted lists. These lists are regurgitations of the app store’s content and are not presented within the context of a feature. Non-sighted users of the app have reported that these onboarding lists were overwhelming and too much to process when they're just trying to get signed in. As a result, 30% of users skip the onboarding screens, and those who do not skip are likely not fully understanding the app’s benefits.
7. **Lack of Personalization**: The app does not offer customization options that implicitly communicate the app’s value and are critical to delivering the full value of the app (such as indicating which specific push notifications the user will receive or enabling accessibility features like haptics). Incorporating these features in onboarding may improve ease of use and could increase engagement in the app
8. **Limited Onboarding Guidance after First Run**: After the initial onboarding screens displayed during the user’s first visit after download, there are varying degrees of guidance to help users take their first meaningful actions within the app, which could lead to a gap in user engagement. The home screen’s activity section effectively leads users to first actions for Prescriptions, Appointments, Messages, and Claims, if they are available. If they are not, they see an “all caught up” empty state). However, users are not guided to other features in the app, and there isn’t guidance on how to guide users to new features that would not fit in the activity section. Finally, there is a “What’s new” pop-up, which is used to describe new functionality, but it is used rarely.


Current end-to-end onboarding experience (FigJam)

**Desired Outcome - Hypothesis**

By optimizing acquisition channels, improving the app store listing, and revamping the end-to-end onboarding process, we can increase user engagement, retention, and satisfaction.
We will know we’re right when we see:
   * Improved tracking of acquisition sources, leading to better-informed marketing strategies.
   * Increased app store conversion rates
   * Higher engagement with onboarding content 
   * An increase in user comprehension of the app’s features and their value.
   * An increase in user satisfaction with the app. Increased retention rates.

## Roadmap
Following is a full list of improvement areas, categorized by key stages of the user adoption journey. At the end, is a Product Adoption Phase 1 which pulls out specific solutions out from several areas in the adoption journey. These solutions are intended to be low-effort changes that address gaps in best practices. 

**1. Acquisition Channel Tracking**
* **Problem**: Ineffective tracking of acquisition sources prevents understanding where users are coming from.
* **Solution**:
    * Document and track all acquisition channels
    * Utilize dynamic links with UTM parameters in marketing campaigns to track user acquisition sources effectively. 
    * Explore utilization & effectiveness of the Share the app functionality on the settings screen 
    
* **What it gets us**: This will allow the team to better understand which campaigns and channels are driving app downloads, and subsequently utilize them more.	

**2. Value Proposition Definition**
* **Problem**: The app does not have a clear, consistent statement communicating the value of the app that is used across digital channels during onboarding (app store, in-app first-run experience, VA websites, promotions, etc.).
* **Solution**:
  * **Create a value proposition statement**: Identify common phrases, themes, and key words used by both our user base and VA marketing to define the app’s value proposition. Get insights from key stakeholders and gain alignment. Implement new value prop in current project and advocate for its use across channels moving forward.
  
* **What it gets us**: Helps us better communicate the value of the app, informs what we say in the app store listing, first run experience.

**3. App Store Optimization**
* **Problem**: The app store listing is not optimized, the tagline does not convey what the app does, and screenshot images fail to showcase the app's value effectively at both the list and product screen levels.
* **Solutions**:
  * **Revise App Store Listing**: Update the app’s subtitle/tagline to clearly describe its benefit to Veterans
  * **Improve Visual Assets**: Use images and videos to showcase the app's core features and value proposition. Highlight key functionalities, such as health care management, benefits management, and personalized notifications.
  * **Refine Keywords**: Assess and improve keywords list to improve SEO
Iterate based on Metrics - App store changes should be A/B tested 
What it gets us: Increases downloads of the app, and helps set user expectations about what the app can do for them, which contributes to adoption).

**4. In-App Pre Sign-in Experience**
* **Problem**: High sign-in failure rates prevent Veterans from getting into and using the app. In addition, there is no context provided before sign-in about the value the app provides.

* **Solutions**: Provide context on the value that the app provides before requiring sign-in
* **What it gets us**: Minor mitigation of the adverse effects of unreliable sign-in.

**5. A More Effective Introduction to the App During First Run**
* **Problem**: Current first-run onboarding screens are ineffective, with 30% of users skipping them, non-sighted users reporting feeling overwhelmed by the amount of content, and others likely not understanding the app's features.
* **Solutions**: 
  * **Reimagine initial onboarding screens**: Rethink the initial onboarding screens displayed during first run to focus on the app’s value rather than a feature list (relying on other channels for marketing) and keep text to a minimum.
* **What it gets us**: Helps set user expectations about what the app can do for them and removes friction between the Veteran and taking theirthe first meaningful actions in the app.
  
**6. Customizing the App During First Run** 
* **Problem**: Onboarding does not include customization options that implicitly communicate the app’s value and are critical to delivering the full value of the app, with no options for specific push notification opt-in, accessibility settings, or feature relevance based on individual needs.
* **Solution**: Allow users to customize settings: Include opt-in screens for specific push notifications and accessibility features, like haptics, to set users up for success.
* **What it gets us**: Helps set users up for success by tailoring the app to their specific needs.

**7. Adoption Tracking**
* **Problem:** Ineffective tracking of whether users who download the app are discovering and taking first meaningful action based on their particular involvement with VA. 
* **Solutions**:
  * Define user segments based on what services that they engage with at VA (ex: Claims only vs Health only vs both). 
  * Identify behaviors or actions that correlate with adoption for each user segment, measure behaviors by segment 
  * Measure if we’re successfully leading users towards those first meaningful actions.
* **What it gets us**: Allows us to understand if the things we are doing are effectively leading to adoption for various user types.

**8. Continuous Onboarding**
* **Problem**: The app lacks any guidance after the first run to help users take valuable first actions that maintain user engagement and increase understanding over time.
* **Solution**:
  * **Continuous Onboarding**: Implement continuous onboarding mechanisms, such as banners or tips, to guide users through new features or draw attention to updates. These should be based on important actions identified in 2. Adoption Tracking
* **What it gets us**: Contributes to adoption.

### Phase 1 
**Value Proposition Definition**
* Deliverables
  * App's value proposition is defined in a statement
  *  * Reasoning
     * A clear, consistent statement communicating the value of the app does not exist and can be used across all digital channels during onboarding (app store, in-app first-run experience, VA websites, promotions, etc.).

**App Store Optimization**
* Deliverables
  * App store listing tagline conveys app's value
  * Visual assets are improved to better convey app's value
  * Keywords list is modified to improve SEO
* Reasoning
  * We are not following best practices, so it is likely that we can improve conversion from impression to download with minimal effort. Specifically, effort is lower than other improvement areas because app store changes do not require engineering, QA, or robust UI/UX design. 
  
**Improve In-App Pre Sign-in Experience**
* Deliverables
  * App's value is communicated before users are required to sign-in 
* Reasoning
  * Sign-in is one of the most reported problem areas in the app due to Veterans not being able to get signed into the app. Informing them of the value of the app before requiring sign-in is an onboarding best practice and its importance is particularly salient for Veterans who do not get signed in the first time they arrive at the app, and could provide an incentive for Veterans to persevere through sign-in problems and reduce churn. 
 
**Reimagine First-run Onboarding Screens**
* Deliverables
  * Simplify first-run onboarding screens, focusing on the app’s value and setting users up for success in their first use of the app
  * Explore adding customization options that implicitly communicate the app’s value and are critical to delivering the full value of the app
* Reasoning
    * The onboarding screens contain clear gaps from onboarding best practices. There are multiple screens, each of which are lists of features that are unlikely to better set up Veterans for success in the app. As a result, we are overwhelming some users and increasing the friction between Veterans and getting started with the app. 
    
**Measure Product Adoption**
* Deliverables
  * Determine how to measure product adoption then build queries (see note) to establish baseline and measure impact
* Reasoning
  * To determine whether our improvements are successful, we must be able to measure product adoption.
* Note
  * This is largely a modification of existing queries used to assess retention. For instance, we may assess whether users with prescriptions ready for refill, who refill a prescription within the first two weeks of opening the app, return at a higher rate. 


## Measuring success
* **Veteran comprehension and satisfaction**: Veteran's understanding and satisfaction of the app's features increase and are measured through UX research, in-app surveys, and app store feedback.
* **First-run engagement**: Veteran engagement with features on their first run increases as a result of improved onboarding.
* **User adoption and retention**: Long-term engagement is increased as a result of improved onboarding as measured through app usage data.
* **Retention density**: Increase the number of times that users return over an x week period (likely first 2 weeks or first month) 
* **Onboarding conversion funnel**: Improve conversion from sign-in screen to first onboarding screen, conversion from sign-in to home screen
* **Failed sign-in return rate**: Improve return rate for users who did not get signed-in
Push notification opt-in rate: Improve or maintain the rate at which users opt-in to receive push notifications

## Assumptions and Risks
**Assumptions**
* Defining and communicating the app’s value proposition and using that value proposition as a key component to converting Veterans from initial discovery to downloading the app will lead to higher user adoption.
* Improving the end-to-end onboarding experience will lead to users being more engaged with the app.
* Effective tracking of acquisition channels will provide actionable insights for marketing and acquisition strategies.

**Risks & Mitigation** 
* The onboarding process may become too complex or overwhelming.
  * **Mitigation**: Continuously monitor user engagement during onboarding and simplify the process if necessary.
* Users may not engage with personalized content as expected.
   * **Mitigation**: Conduct A/B testing to determine the most effective personalization strategies and refine them based on user feedback.

**Appendix**
1. **Apple App Store Metrics**
* Definitions
  * Impressions - # of users who saw the VAHB app icon in the app store
  * Impression Conversion - % of users who saw the VAHB app icon then downloaded the app
  * Product Page View - # of users who viewed the VAHB product page 
  * Product Page Conversion = % of users who saw the VAHB product page then downloaded the app
* Metrics (average by month for Jan 204 - Aug 2024)
  * Impressions - 386,859
  * Impression Conversion - 13.7%
  * Product Page Views - 154,995
  * Product Page Conversion - 34.0%

