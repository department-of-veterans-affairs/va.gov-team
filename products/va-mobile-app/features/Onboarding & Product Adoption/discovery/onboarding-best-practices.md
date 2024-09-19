

# VA Mobile App - Discovery/Desk Research: Mobile App User Journeys & Onboarding: Best Practices

August 8, 2024  
Holly Collier  

## Mobile App User Journeys
An app user’s onboarding journey starts with discovery and download from the app store and extends through to the point where they achieve their primary goal or complete a specific task within the app.  
* **_In-app onboarding is one point in that longer onboarding user journey._**
* Map the whole journey —to i<span style="text-decoration:underline;">dentify pain points</span> & <span style="text-decoration:underline;">plan/craft a relevant experience</span>.

### Stages of the Journey to plan for (and their goals):
   * **Discovery & Download:**  
_Education stage_
        * Goal: Get potential users to download 
            * Optimize App Store listing to help w discovery & communicate the app’s value proposition & benefits (not just a list of features) - ([see source notes for details](https://docs.google.com/document/d/17yJHjjjyHH7OS7PdbauTf--yf6NOv0_yfNjUiFB-6so/edit#heading=h.hdra4e50b0pj))
    
            * **Present promotional screens on the app store page**, as that is where users will explore new apps and compare features (not during in-app onboarding).
            * [Improving the quantity and quality of user reviews](https://onesignal.com/blog/strategies-to-increase-app-reviews-and-improve-ratings/) can inspire trust and encourage new users to download your app.
    * **First run/Onboarding:** (more on this in 
[separate section](#heading=h.et6ql782pxtm))
_Education stage_ 
        * Goal: Convert users into regular users by demonstrating how the app fulfills their needs & set them up for success
        * Details on how to do this in the In-App onboarding section
* **Engagement:**
    * Goal: Keep users coming back & getting value out of the app
    * Simple UI & navigation encourages users to explore further and stay longer. Users should be able to use your app effectively with minimal effort or instruction. 
    * Use user data to tailor content and features to segments
    * Use push notifications to keep users coming back
 * **Retention:**
    * Goal: Turn first-time users into regular users
    * Continue to offer new features, bug fixes & updates to retain new users.
    * Make it easy to recommend & share the app with others
* Think through & plan this the journey for each of your different user segments—tailor it for each segment.



## In-App Onboarding

### Overview
* **Purpose of onboarding:** Introduces users to an app, aiming to help them start using it effectively. It is part of a broader user journey from app store discovery to taking a key retention action.
* **Goals of onboarding:**
  * **Introduce the app’s core action** & spark the “ah-ha” moment as quickly as possible. 
  * Make sure users understand the app’s **value proposition** (ideally by taking the core action)
     * People don't buy products; they buy better versions of themselves. When you're trying to win users, are you listing the attributes of the flower or describing how awesome it is to throw fireballs?
  * **Set users up for success** in your app—grant user permissions essential to the app’s use (like location sharing or push notifications). Postpone non-essential setup flows or customization steps (instead, provide reasonable defaults).


### Onboarding Types
#### Self select/customization (“Get me started”)  
* Short onboarding: Present a series of short choices to make their app experience more meaningful (customization and personalization), implicitly learning about the app’s UI
* **Use when** customization is needed, setup is required, or consent is necessary  (ex: Asking how a user wishes to be notified by the app during onboarding will have a meaningful impact on the user experience). Don’t ask for preferences that can be garnered from normal usage.
* **Avoid When:** Announcing new features or major UI changes.
* **Best practices:**
    * Keep choices meaningful, noticeable, and limited to one screen.
    * Avoid visual-design customization, such as selecting a color scheme (if people haven't used the app, they don’t know if/how they want to change it to help them). Save it for later.
    * Content customization is ok (their name, location, etc) - it can create a relevant experience

#### Quickstart
* Users directly enter the app’s UI, with minimal initial onboarding. (other than sign in and setup). Users learn their way around an app by using it on their own.
* **Use When:** Your app doesn’t need to be “set up” and uses standard user interface (UI) practices that users can figure out without any help. **When you know what action leads to increased engagement** (in the first session) or increased retention (in the first seven days).
* **Avoid When:** Introducing new challenges or benefits.
* **Best Practices:** Provide immediate tasks (Quickly get started with the core functionality of the app), optional learning opportunities, and focus on key actions.

#### Top user benefits (“Show me why”)
* Highlight the app’s main benefits (up to 3—including your app’s “toothbrush features” – these are features you see your users using once or twice daily) through a screen or carousel. Doesn’t explain how to use the app.
* **Use When:** Announcing new benefits or major changes.
* **Avoid When:** The app’s benefits are familiar or unchanged.
* **Best Practices:** 
    * Focus on essential benefits and avoid combining with other onboarding types.
    * Benefits should position the app as relevant and personal during a moment that matters, rather than give instructions or describe features.
    * Simplify the visuals to the essentials needed to convey a concept.
    * Don’t show app UI if users haven't experienced it yet. Show the user benefit first. You may display education about the specific UI in a later context.

#### Instructions/Progressive (“Show me how”) 
* A guided tour through the app—quickly gets the user to your app’s main user screen and then tells them how it works as they explore the different app areas, features, or functions
* **Use When:** You have hidden functionalities, hidden gestures, intricate workflows, or multiple sections in your app.; significantly reduces the users’ cognitive load while offering education in context 
* **Avoid when:** An app uses standard user interface (UI) practices that users can figure out without any help
* **Best Practices:** 
    * Use Tooltips, hotspots, overlays, pop ups, and slick animations to educate users about the functions 
    * Teach through interactivity:  provide an interactive onboarding experience where people can safely test an action, discover a feature, or try out a game mechanic.


### Onboarding Best Practices
* **Include in-app onboarding only if necessary! (skip onboarding whenever possible)**
    * Keep onboarding as simple as possible. For most mobile apps, this means putting users directly into the interface.
    * Not all mobile apps require extensive in-app onboarding programs, though all apps should include some form of “welcome”
    * If you include it, keep it short & fun. If you try to teach too much, people can feel overwhelmed and may be less likely to remember what they learned.
* **When do you need onboarding?**
    * You need a user’s information (ex: to create an account) to get them started.
    * The application functionality is highly tailored to the user’s context and preferences.
    * Important app features or workflows are fairly unique to the app, and perhaps differ from standard UI patterns or are new and unfamiliar. 
    * Your users overlook the main features of your app because you provide a large number of features
* **Spark the “aha-moment” as early as possible**. (moment when users understands the value proposition)
    * Write a clear & concise value proposition 
    * Front-load it with user value and delay signup/signin.
    * Ensure onboarding guides users toward meaningful actions, not just UI understanding.
    * Give the option to explore resources & info without overwhelming in onboarding
    * Use interactive tooltips to explain core features (if needed)
* **Your app’s first screen should not be a signup/login**
    * Your app's first screen = a storefront: It should make new users feel welcome and make them want to come inside, not scare them off with too many questions before they've even crossed the threshold.
    * Demonstrate your app's value rather than forcing new users to input their data or immediately sign in/up for an account
    * Ask for as little as possible before you’ve proven your app to be of worth or had the user make some sort of ‘investment’
    * Certain apps also depend on account creation (ex: financial institutions). However, they still don’t have to do registration first!
        * Ex: Acorn - First screen has a signup CTA, but it's located at the bottom of the screen; the users' attention is drawn instead to a series of animations that reiterate the app's value proposition and remind them what they can do with the Acorns app and why they downloaded it in the first place. 
* **Integrate setup and permission requests into onboarding**, explaining their benefits clearly (this is strategic).
    * Tie access to value: Users sign up to do something specific. Let them know that you're only asking for access to help them achieve their goals.
    * Communicating why you need the access directs the user's attention to what you need from them to deliver value, building trust. Focusing on the benefit reminds them they signed up to receive that value, building motivation
* **Build flexibility into your onboarding flow to support different user types**
    * Instead of single first run experience, target users based on where they are in their journey to ensure your messages are genuinely relevant and helpful
        * **Purpose-Driven Users:** Seek to quickly access core features. Onboarding should help them achieve their goals efficiently.
        * **Window-Shoppers:** have more curiosity, but less certainty. They may be less aware of what they’re looking for. May need a broader tour of the app’s features.
    * Provide flexibility: create options for users to skip ahead in a tutorial or jump straight to the core action.
* **Think beyond first run:**
    * Onboarding should blend seamlessly with the app’s core experience (coach marks, tooltip tours, and intro videos hijack your user’s attention and pull it away from their natural sense of self-direction.
    * Onboarding should continue to support users beyond the initial interaction, addressing ongoing needs.


### Onboarding UI mechanisms
* **Deck of cards** (Use with **Top user benefits style onboarding)**
A series of interstitial screens that appear when the user opens the app, explaining its purpose and features. 
    * **Pros**
        * Reinforce the value proposition of the app & core loop. Show off some benefits they weren’t aware of.
    * **Cons**
        * Makes the interface appear more complicated than it actually is, too much content can make them overwhelming, and strains user’s [memory](https://www.nngroup.com/articles/working-memory-external-memory/). 
        * It’s easy for users to skip through instructions and ignore them (or forget them).
* **Tooltips** (Use with **Instructions/Progressive** onboarding) 
Overlays or callouts that appear in certain parts of the user workflow, containing helpful hints about less intuitive features. 
    * **Pros**
        * Integrated, only appear when you want the user to see them, so you can introduce more complex functions at the appropriate time. 
        * Good for introducing unfamiliar icons, features, and concepts without taking up permanent space
    * **Cons**
        * Not accessible to screenreaders
        * Can be overwhelming if there are too many tooltips 
* **[Instructional overlays and coach marks](https://www.nngroup.com/articles/mobile-instructional-overlay/)** (Use w **Instructions/Progressive** onboarding) 
Used to show users where some core functionalities are located within the UI and what those elements do. Nice to have, not need to have. 
    * **Pros:**
        * Contextual, pairs well when it accompanies a user trying to complete a task for the first time, provides extra nuggets of information as the user progresses.
    * **Cons:**
        * Can be overwhelming if there are too many
* **Interactive tutorials** (Use with **Instructions/Progressive** onboarding) 
Hands-on walkthroughs that guide users through the key features and functions of the app, allowing them to learn new actions as they go. 
    * **_For complicated apps & workflows_**
    * Enable users to learn by doing (ideally in a low-stakes environment).


## Sources:

**Mobile App User Journeys**
* [UXCam: App User Journey: Mapping from Download to Daily Use](https://uxcam.com/blog/app-user-journey/)
* [OneSignal: What are the user journey stages for mobile apps?](https://onesignal.com/blog/understanding-the-mobile-app-user-journey/)
* [Google Play Apps & Games: An introduction to the user journey for mobile apps](https://medium.com/googleplaydev/app-user-journey-draft-d4e5bdf253ee)

**App Store Listing**
* [Apple Developer - Creating Your Product Page - App Store](https://developer.apple.com/app-store/product-page/)

**In-App Onboarding**
* [Onboarding - Material Design](https://m2.material.io/design/communication/onboarding.html#usage) 
* [Onboarding | Apple Developer Documentation](https://developer.apple.com/design/human-interface-guidelines/onboarding) 
* [Google Play Apps & Games: The user journey: onboarding](https://medium.com/googleplaydev/the-user-journey-onboarding-and-activation-be5ebdfc0354)
* [NNG: - Mobile-App Onboarding: An Analysis of Components and Techniques](https://www.nngroup.com/articles/mobile-app-onboarding/) 
* [9 Key Lessons from Samuel Hullick’s‘The Elements of User onboarding’](https://uxcam.com/blog/9-key-lessons-from-the-elements-of-user-onboarding/)
* [User Onboarding | A frequently-updated compendium of web app first-run experiences](https://www.useronboard.com/training/)
* [UserTesting: Guide To User Onboarding Techniques For Mobile Apps](https://www.usertesting.com/blog/user-onboarding-techniques-for-mobile-apps)
* [Usability Geek - First-Time Use: How To Reduce The Initial Friction Of App Usage](https://usabilitygeek.com/first-time-use-how-to-reduce-initial-friction-of-app-usage/)
* [Appcues Blog: Gradual engagement: Why your mobile app's first screen should not be a signup](https://www.appcues.com/blog/gradual-engagement-mobile-app-first-screen)  
* [UXCam - How not to lose users during app onboarding (Part 1)](https://uxcam.com/blog/app-onboarding-part1/) & [(Part 2)](https://uxcam.com/blog/ways-to-app-onboard/) 
* [Intercom: Complete guide to onboarding customers for long-term success](https://www.intercom.com/blog/onboarding-guide/) 
* [Pendo Blog - Mobile App Onboarding: Definition, Best Practices, Examples](https://www.pendo.io/pendo-blog/how-to-create-in-app-onboarding-to-delight-your-mobile-users/) 
* [Adapty.io - Mobile app onboarding: How-to, best practices, and examples](https://adapty.io/blog/mobile-app-onboarding/) 
