# VA Mobile Research Roundup: Personalized App Screen

Nov 3, 2021

## Background & Goals

The VA mobile app launched with a home screen that displayed the same information and features for every user. [Initial beta testers provided feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/prototype-testing/testing-summary.md#a-customized-home-screen-is-highly-useful) that they would want to customize their experience to include features that are important and useful to them. We looked into the research done by the My VA team around personalized content to answer the following questions:

* What personalized content do users want to see? What do they not want to see?
* Would users want to select the content displayed on their personalized screen?
* Does the content that users want to see change or vary depending on circumstances?


## Summary of Key Findings

My VA deals with the VA.gov site and "provides Veterans with a direct route to their most critical tasks and updates based on their unique circumstances at the VA."

When conducting [a study to redesign the logged-in homepage for VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#participants-want-a-page-that-is-focused-on-current-information-specific-to-them-rather-than-generalized-information-for-all-veterans), users provided feedback that they expected to see more relevant content instead of generalized tasks that may or may not apply to them. When building the My VA MVP product, the team took this into consideration and devised a study to determine what users expected to see or do on a personalized screen. From these findings, they created initial designs to address personalization. 


### Findings

1. [Veterans know what they are looking for](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#people-want-a-task-based-logged-in-homepage-tailored-to-them) and expect their homepage to easily provide them with actionable information or tasks.
    * During a My VA study, a participant’s ideal login page:
        * Gave them access to their most important tasks in one place.
        * Provided them with important updates.
        * Guided them to benefit information and recommendations.
        * Minimized content that wasn't specific to them.

2. [Most Veterans are typically interested in healthcare and disability tasks or information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#:~:text=for%20all%20Veterans.-,Participants%20are%20primarily%20interested%20in%20completing%20healthcare%20and%20disability%20related%20tasks%20such%20as%20messaging%2C%20ordering%20medication%2C%20and%20checking%20claim%20status.,-For%20those%20interested). However, there are [some Veterans that are interested in education benefits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#:~:text=For%20those%20interested%20in%20education%20benefits%2C%20GI%20Bill%20balance%20and%20payment%20information%20was%20important.).
    * This brings up the consideration that perhaps content in the personalized screen could be customizable so that users could place the features most currently relevant to them and switch them out once those features are no longer relevant (i.e. they are no longer interested in education benefits because they are no longer in school).

3. **Veterans want [easy access to documents and records](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#records-and-documents-are-a-focus-for-veterans)** since they are frequently downloading and looking for documents such as VA benefit letters, certificate of eligibility, or DD214. 
    * The My VA team noted the possibility of exploring whether or not creating a centralized space for records and documents would be an impactful improvement for Veterans. Since the Mobile App does provide a centralized space for records and documents, we wonder if we are already solving this problem. 

4. [Veterans are interested in learning about eligibility information and benefits that they may not already have](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#the-logged-in-homepage-needs-to-scale-to-support-every-phase-of-the-veteran-lifecycle). They are also interested in getting updates from the VA that could impact them—such as a new benefit that they may be eligible for.
    * The My VA team uncovered that an onboarding experience for separating service members could be beneficial in helping them navigate VA.gov. The Mobile App does include an onboarding experience, but perhaps we could consider providing benefit recommendations to separating service members that may not have any yet. 

5. Veterans that have seen the [blue sky prototype “found the content, sidebar navigation, recommendations, and local information to be helpful, usable, and scannable”](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#the-existing-blue-sky-prototype-gets-a-lot-of-things-right). 
    * The prototype’s content, prioritization, and broad UI makeup align with what we observed in our comparative analysis. However, by its nature of being a website, it is able to fit more information and action items in a single view than would be possible on mobile. We will have to consider alternate ways to display content appropriate for a mobile app screen.

6. [Some Veterans expect to complete tasks on the personalized page instead of being directed to a separate page.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#veterans-expect-a-mix-of-links-and-widgets-to-complete-tasks-from-their-homepage) Some of these tasks include checking claim statuses or refilling prescriptions. 
    * We must take into consideration that this feedback was for a website and users might not have the same expectations for a mobile app. However, we should explore whether or not this would be beneficial for Veterans in the mobile app and how this would be accomplished. 

7. [Veterans expect notifications and updates about their items to surface at the top of their personalized page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#veterans-want-new-information-to-be-clear-to-them-when-they-log-in-and-expect-to-receive-new-information-through-multiple-channels). 
     * When conducting this study, the My VA team found that Veterans actually expect notifications and updates to “come via a phone call, email, or physical mail, either because that's what they're used to, or because it's the easiest way to reach them”. Only when prompted to envision notifications within the website did they provide the above expectation.
        * In light of this, we must take into consideration that users might have different expectations for a mobile app. 
    
    * The My VA team also identified that [even though Veterans expect notifications and updates to surface at the top of the page, they did not have one consistent placement for them](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#:~:text=Veterans%20placed%20updates%20and%20notifications%20near%20the%20top%2C%20but%20there%20wasn%27t%20one%20consistent%20placement%20across%20the%20sessions). This encouraged the My VA team to consider testing “different approaches to notification placement, including a dedicated Notification center, alert-style banners at the top of the page, and notifications in-line with the item in question”. 
        * When conducting a [research study on alerts and action items](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/research/alerts-discovery-research-summary.md#things-veterans-mentioned-theyd-want-to-see-as-an-alert), the My VA team found that for a centralized alerts or notifications page:
            * Users want their alerts in reverse chronological order (most recent at the top)
            * Users want the ability to see old/expired alerts.
                * This was brought up as some Veterans were concerned about missing alerts if they do not go on VA.gov often. This may not be a concern since the Mobile App will incorporate push notifications. 
            * Most users want to be able to visually differentiate between read and unread alerts. 4 out of 8 participants expected anything that is time-sensitive and expired to 'disappear' altogether (e.g. an appointment that has passed).
            * 5 out of 8 users mentioned perceiving the categories of alerts would be helpful (like on the homepage of VA.gov or on My VA). 3 out of 8 mentioned wanting the ability to customize what alerts they see on their alerts page. This included the ability to filter alerts by category or date
        
        * For an alerts section on My VA (personalized page), the team found that:
            * Users expect there to be information about their alerts on My VA, in addition to a separate alerts page.
        
        * Things Veterans mentioned wanting as notifications:
            * Annual amount of disability compensation
            * Appointments
            * Benefits that Veterans are entitled to
            * Claims and appeals information
            * Covid-19 updates
            * Debt payments
            * Education payments
            * Home loan information (lenders, local APRs, loan status)
            * Messages
            * Physician referral approvals
            * Prescriptions
            * Timeline on appeals
            * Updates from the VA
            * Veteran organizations available to join
       
       * From this research, we should consider exploring different ways to present notifications and updates to users.


## Initial Designs

### Blue sky prototype

<img src="https://user-images.githubusercontent.com/72415933/141191336-ed0679b7-9117-457f-bcc9-fb6806fd2545.png" alt="Screenshot of the Blue sky prototype designs for the vets.gov site" width="500">


### My VA 2.0 - Web (Current MVP implementation)

<img src="https://user-images.githubusercontent.com/72415933/141191809-9aef2ce0-6646-46a3-834a-939fb09827e2.png" alt="Screenshot of the current designs for the My VA webpage" width="500">


### My VA 2.0 - Mobile (Current MVP implementation)

<img src="https://user-images.githubusercontent.com/72415933/141192027-e445203a-917d-4c63-b01a-204b68d3a1d2.jpeg" alt="Screenshot of the current designs for the My VA mobile site" height="500">


### Previous design explorations by the Mobile App team

<img src="https://user-images.githubusercontent.com/72415933/141192863-c3c8fa09-d7a8-4e80-8358-6f59455697a2.png" alt="Screenshot of the previous home screen design explorations for the VA mobile app" width="400">


## Takeaways

* Veterans want a personalized screen that shows them relevant information that they can take action on. Especially healthcare and disability-related tasks. 
* Features vary in importance to Veterans depending on their circumstances or life stage and they expect their personalized screen to reflect that. 
* Veterans want to be informed about benefits and eligibility that they may not have or know about.
* When it comes to notifications and updates on the My VA webpage, Veterans expect to see them at the top of the page. However, Veteran expectations regarding notifications and updates on the VA Mobile App have not been tested. 

*Note: The current implementation of My VA is the MVP version that includes what users thought to be the most important information:*

* Claims information
* Health care information
* Benefit information

The My VA team is currently working on:

* An onsite notifications hub
* Education benefit information
* Payment information


## Recommended Features 

Based on the review we did of the My VA team research around personalized content, we would recommend the following features for a personalized screen in the VA mobile app:

* On the personalized screen, only include content and information that is specific to the user.
* Provide users a way to select the content or features they want on their personalized screen.
    * If this is not possible, at minimum include claims and healthcare content and tasks. 

We also recommend the following considerations:

* Explore if it is valuable for Veterans to be able to act on information from the personalized screen.
    * If so, explore how this could be done
* Explore Veteran expectations for notifications and updates on the VA mobile app
* Veterans expressed a desire for getting eligibility and benefits recommendations, consider exploring how best we could offer this in the Mobile App. 


## Moving Forward

The comparative analysis and review of the My VA team research yielded similar recommendations. This gives us strong building blocks for establishing personalized content for the VA Mobile App. 

Next steps:

* Hold a meeting with team members and stakeholders to brainstorm ideas
* Create several lo-fi design iterations
* Meet with development to review lo-fi iterations and discuss technical limitations
* Conduct a usability test of a selected lo-fi iteration with Veterans
* Synthesize data from the usability test 
* Go through an iteration cycle of hi-fi designs
