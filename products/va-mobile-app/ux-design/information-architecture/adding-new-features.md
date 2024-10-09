

# Determining placement of new features within the VA Mobile App's navigation & Information Architecture

All features in the VA mobile app should have a <span style="text-decoration:underline;">primary placement within the app’s taxonomy</span>, even if there are multiple entry points for it at different locations within the app (example of secondary entry points: personalized home screen content, cross-references within other sections). A feature’s placement within the app’s navigation & taxonomy should take user mental models, business goals, and the feature type into account. This doc is intended to help teams decide where a new feature belongs in this app’s sitemap and navigation model. 


#### Questions to ask to determine the <span style="text-decoration:underline;">primary placement for a new feature</span> in the VA Mobile app:



**1. What *is* this thing?**
* A new app feature 
* A subtask or addition to an existing app feature 

**2. Is this feature or subtask already mapped in the current [VA Mobile app sitemap](https://www.figma.com/board/TEEgHdlibzCilCj4LviHVF/Sitemap%2FFlow-Diagram-2.0---%F0%9F%9A%A2-Shipped---VA-Mobile?node-id=0-1&t=Ju45QzaFd8sRGsPt-1) or the [VA Mobile App: High Level Sitemap (v1 + future state](https://app.mural.co/invitation/mural/adhoccorporateworkspace2583/1649276676117?sender=u28718b63c8993f515e0b2240&key=adec8103-8bf8-45bc-9acf-d3ab94016188))?**

The VA Mobile app sitemap was based on findings from [2 rounds of card sort research ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/ux-research/information-architecture)& takes business goals into account. It contains current and future features (and some subtasks), grouped into categories: Health, Benefits, Payments, Profile and a personalized Home (default) screen. 

* **Yes:** Use the placement indicated in the sitemap. 
* **No:** Continue to to question 3 

**3. Does this feature or subtask exist already in a VA website or app?** 
  * **Yes:** If not included in the future high level sitemap, where does this feature currently live? 
    * VA.gov 
    * MHV 
    * eBenefits 
    * Other
   * Where does it live in those contexts? 
     * Comparing that to the existing VA Mobile app’s IA, should it live in the same place on mobile? Why?
     * If not, where should it live? Why?
* **No:** continue to question 4 

**4. What are user mental models around this feature or subtask?**
*(Where do people expect to find this feature in the VA mobile app?)*
* Has generative research (like a card sort) been conducted to determine placement?
    * **Yes:** Use card sort findings + business priorities to determine feature  placement
    * **No:** Conduct a card sort if possible/applicable to determine where people expect to find the feature 

**5. Are there business priorities that might affect the placement of this feature or subtask?**
* Should the feature be included at a higher level of the app’s hierarchy due to business goals?  If yes, explain why.

**6. If it’s a feature, what type of feature is it (hierarchically speaking)?**
*(AKA, How to decide whether something is a global app feature or a category feature)*
* **Category features:** Features that are specific to a single category. 
     * **Where:** Their primary placement is within a category (Benefits, Health, Payments). Appears on the category landing screen, in the descendant navigation.
*  **Global features:** Features that apply to and/or need to be accessible from more than one category (ex: search, help, cart). 
     * **Where:** Their primary placement should be at a higher level in the app’s navigation hierarchy (ex: bottom navigation/tab bar or top navigation bar). Transition depends on placement: tab bar placement transition is top-level peer, top bar transition is subtask.
