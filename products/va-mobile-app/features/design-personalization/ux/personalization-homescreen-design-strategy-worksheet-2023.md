# VA Mobile app: Personalized Home Screen Design Strategy Worksheet
August 2023

_This worksheet was created from an amalgamation of sources ([Lean UX](https://www.oreilly.com/library/view/designing-for-product/9781491971451/ch05.html) and [others](http://others)) to help cross-functional teams to align and clearly frame problems and testable product hypotheses. It is ideally completed together by UX, Product Management, and User Research, and should act as the foundation for ideation sessions (it can also be used to gut-check projects that are in-process). It should be used in conjunction with a Product Brief, user stories, etc. Questions? [holly.collier@adhocteam.us](mailto:holly.collier@adhocteam.us)_

This work is part of the [VA Mobile App - Personalization project](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/features/design-personalization).


# Part I


## Business + User Assumptions

_High level declarations of what we believe to be true._


### User Assumptions

**1. Who is our user?** Our target users are Veterans with mobile devices who [have VA accounts and are actively using benefits like Health, Claims, and Education](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Product-Outline.md)

**2. Where does the personalized VA mobile app home screen fit into their life?** 
The personalized VA mobile app home screen helps users to keep up with and manage their current interactions across VA and helps new users to get acclimated to the VA mobile app.

**3. What user problems will the personalized VA mobile app home screen solve?**

  * Veterans download the VA mobile app because they are looking for a better/easier way to manage their interactions with VA, but they don’t have a way in the app to get a **quick overview of what VA is doing for them now or that something is needed from them** in order to keep things moving.<sub>1a,1b</sub>
  * Veteran **expectations and understanding** of what they think they can do in the VA mobile app are **limited and often inaccurate** (they want something to help them, and to know if the app is that thing).<sub>2</sub>

**Supporting research (problems):**

1. [Veterans want to understand their benefits and how to access them, what VA is doing & needs from them.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/discovery/research/personalization-research-review.md#veteran-behaviors--motivations-general---user-context) 
    1. It’s “all one VA” to the Veteran, the VA is siloed & doesn’t present a unified view of Veterans’ interactions with VA. [(Benefit planning, applications, and claims research, p64 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
    2. Veterans have to apply, follow-up, ask for things, keep track of things. [(Benefit planning, applications, and claims research, p79 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
2. [Veteran expectations of what they could do in the app was often inaccurate. ](https://docs.google.com/presentation/d/1bSW3zev7agnUY7HsFkDkuJL-OY0RFyGzUk3TcdeM6sc/edit#slide=id.g23801d2a107_0_64)

**4. When and how is the personalized VA mobile app home screen used?**

* When a Veteran has tasks and interactions in flight, the VA mobile app home screen can be used to **check to make sure things are on track** and to **stay informed when VA needs something from them** in order to keep things moving.
* When **users are new to the app**, it’s used to **help them understand the potential current and future value of the app** to that person. 

**5. What benefits and features are important to a personalized VA mobile app home screen?**

A personalized VA mobile app home screen should:



* Give Veterans a **high-level snapshot of their status** and a **persistent overview of their current interactions** across VA—so it’s quick and easy to see what VA is doing now and so that when there _isn’t_ a recent status update or action to take, users can explicitly confirm that there’s no action to take.
* Be **task-based** and emphasize information that is **[actionable](https://design.va.gov/about/principles)**, allowing users to **quickly see what needs to be done, act on it, and get on with their day.**
* **Demonstrate the value** of the VA mobile app to Veterans **without requiring them to dig** into each individual feature.

**6. How should a personalized VA mobile app home screen look/feel/behave?**



* It feels **tailored to them** (about the Veteran’s individual relationship with the VA) and _Veteran-first_ rather than VA-first. 
* It is **streamlined** to avoid information overload: It reduces complexity by **[focusing users on primary tasks, free of distractions](https://design.va.gov/about/principles), and provides just enough information**([mitigate loss of selective attention in older users by limiting the amount of information on the screen](https://digitalscientists.com/blog/ux-design-for-seniors-5-tips/)).
* It is **accessible** **to Veterans of all abilities** ([Accessibility is core to all design decisions](https://design.va.gov/about/principles)). 
* **It feels reassuring**—[it lets Veterans know what is needed from them (or that nothing is needed)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016).
* It is **respectful** - It speaks to them in a tone that is not creepy or too casual, and **asks permission** to do things (send notifications, access camera or calendar).
* It feels **personalized even when there are no updates** to display.


### Business Assumptions

**1. We believe our users have a need to** keep track of their interactions across VA and be made aware of related critical actions, without having to seek out when their attention is needed.

**2. These needs can be solved with** a personalized approach to surfacing user data and feature content on the home screen in the VA mobile app. 

**3. Our initial users will be** existing users of the VA mobile app.

**4. The #1 value a user wants to get out of a personalized VA mobile app home screen is** to quickly understand the status of all their VA interactions and know if something has changed or is needed from them.

**5. The user can also get these additional benefits:**


* Understanding the value of the app quickly when they’re new to it.
* Removal the burden of having to remember important tasks (and seek out when their attention is needed).

**6. We will acquire the majority of our users through** organic growth (future: cross-channel marketing?).

**7. Our primary competition in the market for VA services are** whatever tools or methods Veterans are using to keep track of these tasks now (web & mobile web versions of VA.gov, MyHealtheVet, eBenefits, other assorted VA apps). That said, we should hold ourselves to the higher bar set in terms of user/product experience by commercial apps.

**8. We will beat the competition by** meeting our users’ needs in a way that’s proactive and tailored to _their specific experience_ and that leverages native mobile-specific capabilities. 

**9. Our biggest product risk is that:** 

* We’re not sure if a personalized home screen is the best way to help users keep up with their VA interactions and tasks
* We’re not sure which pieces of personalized information will be most valuable for users to see on the home screen.
* Displaying personalized information from too many APIs in one place might cause app performance to suffer.
* The home screen becomes overgrown & a dumping ground over time without proper guidelines and governance.

**10. We will solve this risk through**

* Conducting user research to understand what is valuable to Veterans & whether our concepts are useful to Veterans. 
* Engineering spikes to understand limitations and design that takes those limitations into account to provide the best experience despite them.
* Create and document a framework and workflow for integrating new personalized content. Socialize it with feature teams. Add personalization conversation to feature kickoffs.

**12. We will know we are successful when we see the following changes in user behavior:**


* Users interact with the bubbled-up personalized content (instead of navigating to features  through the tab bar).
* We see a decrease in checking the app everyday? (reassured?)
* A possible increase in conversion/task completion that can be traced back to personalized content (depends on feature).
* Participants in future qualitative studies express sentiment that the app “knows them.” 
* Users return to the app repeatedly.

**13. What other assumption do we have that, if proven false, will cause our project to fail?**


* Everyone will be able to sign in successfully.
* Users will have consistent internet access allowing them to use the app & stay connected to APIs.
* We can build the technical infrastructure to consistently deliver timely, personalized content in a unified view.
    * Our APIs display data in a way that fails gracefully (one error doesn’t destroy the whole experience).
    * Much of our backend services are outside of our team’s control
* That PO sponsorship in the project will continue over the time it takes to build it.


## Business Goals & Outcomes

**[Flagship Mobile App Strategy](https://docs.google.com/presentation/d/1j0rO2HvDwHDTzunG3judC1HXOiWfGNTXVciLAkurpRw/edit#slide=id.g1e78b87c057_0_159)**

**Vision:** "Each Veteran is connected to the VA services that matter most to them, regardless of device, and without understanding the VA org chart.”



* **Objective 1:** Veterans will use authenticated services that are highly personalized and valuable.
* **Objective 3:** Increase active user base.

**[OCTO-DE Goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme)**



* **Goal 6:** Logged-in users have a personalized experience, with relevant and time-saving features.


### Outcomes (measurable)
1. Veteran **comprehension** of what the app can do 1) in general and 2) for them in their current circumstances.
2. Veteran **satisfaction** with the amount (time & tasks) they are completing in the app.
3. Veterans’ **perceived current and future value** of the app. 
4. Personalized home screen’s impact on **task completion**.
5. Personalized home screen’s impact on **longevity with the app.**
6. **Engagement with personalized content** on the home screen.

See [VA Mobile App - Personalized Home Screen - Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/product/Personalized_homescreen-Product-Brief-2023.md) for details


# Part II


## Problem Definition

_What problem are we solving & for who?_

The **VA Flagship mobile app** was [designed to help Veterans who are actively engaged with VA health and benefits services to keep track of their tasks and interactions across VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Product-Outline.md#desired-user-outcomes). We have observed that research participants report that **they download the app to see if it can help them (but then don’t use it regularly)** and metrics indicate that **users who initially download the app do not actively use the app over time**. As a result, the VA mobile app may not be successfully **providing Veterans with a way to keep track of their activities across VA in a way that’s worth returning to**. 

Up to this point, the app has used a one-size-fits-all approach to the home screen that limits its perceived value to Veterans. In particular:



* Veterans don’t have a way to get a **quick overview of what VA is doing for them now or that something is needed from them** in order to keep things moving.
* Veteran **expectations and understanding** of what they think they can do in the mobile app are **limited and often inaccurate** (they want something to help them, and to know if the app is that thing).

We believe that these problems are making it more difficult for Veterans to realize how the app can help them which is resulting in **decreased user retention.**


## Hypothesis Statement  + Success Metrics/Market Outcomes

We believe that **bringing personalized content to the VA mobile app’s home screen to new and current app users** will **help users to keep up with and manage their current interactions across VA** and **find value in the app that they aren’t discovering now.**

We will know we’re **right** when we see:


* An increase in user **comprehension of the app’s feature set.**
* An increase in **perceived current and future user value of the VA mobile app.**
* An increase in **user retention.**
