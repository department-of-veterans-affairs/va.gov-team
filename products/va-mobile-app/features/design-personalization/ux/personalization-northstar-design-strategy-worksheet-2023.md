# VA Mobile app - Personalization: North Star - Design Strategy Worksheet
Aug 2023

*This worksheet was created from an amalgamation of sources ([Lean UX](https://www.oreilly.com/library/view/designing-for-product/9781491971451/ch05.html) and [others](http://others)) to help cross-functional teams to align and clearly frame problems and testable product hypotheses. It is ideally completed together by UX, Product Management, and User Research, and should act as the foundation for ideation sessions (it can also be used to gut-check projects that are in-process). It should be used in conjunction with (but completed prior to) a Product Requirements Brief, user stories, [Product Design Brief](https://docs.google.com/document/d/1nL34TAkeUJFThBWdnjpFEvJ3oKA8FkdYGXgLd9TLyfA/edit#heading=h.n8e3xxx5wfij:~:text=8-,VA%20Mobile%20app%3A%20Personalization%20%0BDesign%20Strategy%20Worksheet,-11)), etc. Questions? [holly.collier@adhocteam.us](mailto:holly.collier@adhocteam.us)* 

## Business + User Assumptions
*High level declarations of what we believe to be true.*


### User Assumptions

#### 1. Who is our user?
Our target users are Veterans with mobile devices who [have VA accounts & are actively using benefits like Health, Claims, and Education].

#### 2. Where does a personalized VA mobile app experience fit in their work or life?
A personalized VA mobile app helps Veterans to keep up with and manage their current interactions (and discover their possible future interactions) across the VA while on the go.

#### 3. What user problems will a personalized VA mobile app experience solve? 
* Veterans aren’t able to get a** quick overview of what VA is doing for them now** and aren’t **proactively informed that something is needed from them** in order to keep things moving<sub>1a,1b</sub>
* Veteran **expectations and understanding** of what they think they can do in the app are **limited and often inaccurate**.<sub>2</sub>
* The app **doesn’t currently demonstrate to Veterans how VA can support them as an individual**, whether it’s in their day-to-day or when something in their life changes (health, claims, moving, marriage, transitions, etc).<sub>3,4,4a</sub>

#### Supporting research (problems):

1. [Veterans want to understand their benefits and how to access them, what VA is doing & needs from them.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/discovery/research/personalization-research-review.md#veteran-behaviors--motivations-general---user-context) 
    1. It’s “all one VA” to the Veteran, the VA is siloed & doesn’t present a unified view of Veterans’ interactions with VA. [(Benefit planning, applications, and claims research, p64 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
    2. Veterans have to apply, follow-up, ask for things, keep track of things. [(Benefit planning, applications, and claims research, p79 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
2. [Veteran expectations of what they could do in the app was often inaccurate. ](https://docs.google.com/presentation/d/1bSW3zev7agnUY7HsFkDkuJL-OY0RFyGzUk3TcdeM6sc/edit#slide=id.g23801d2a107_0_64)
3. [The Flagship mobile app was one tool Veterans tried to use to manage through instability, transitions and crisis.](https://docs.google.com/presentation/d/1bSW3zev7agnUY7HsFkDkuJL-OY0RFyGzUk3TcdeM6sc/edit#slide=id.ge360b30891_0_17)
4. [Veterans want ongoing guidance after separating from service so they can continually learn about what benefits are available to them and how to apply on their own terms.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/discovery/research/personalization-research-review.md#understanding--staying-informed)
    3. Veterans are in need of support, guidance & connection from others at various times during their journey, and they don’t always know where to get help. [(VA Benefit planning, applications, and claims research, pp 37, 53, 74, 97 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)

#### 4. When and how is a personalized VA mobile app experience used? 
* When a Veteran has tasks and interactions in flight, it’s used to **check to make sure things are on track** and to **stay informed when VA needs something from them** in order to keep things moving.
* When **users are new to the app**, it’s used to **demonstrate the current and future value of the app** to that person. 
* When **something in a Veteran’s life changes** (health, claims, moving, marriage, transitions, etc), it’s used **as a tool/resource that can help them with the transition**.
* When service members have recently separated, it’s used to **acclimate new Veterans to VA benefits based on their individual context**.


#### 5. What benefits and features are important to a personalized VA mobile app experience?
* Gives Veterans a **high-level snapshot of their status** and **persistent overview of their current interactions** with VA so it’s quick and easy to see what VA is doing now.
* **Proactively notifies them when critical items need their attention** or important statuses change and **gives them the ability to act**.
* **Surfaces relevant content and tasks** that speak to a Veteran’s **individual context** so that Veterans feel known and **supported by VA right now and as their situation changes**.
* **Demonstrates the value** of the VA mobile app to Veterans **without requiring them to dig into each individual feature**.
* **Allows users to connect with others who know their case** (inside & outside the VA) **when they need support** & guidance navigating their benefits.
* Provides **access to the things/features the Veteran uses the most**.

#### 6. How should a personalized VA mobile app experience look/feel/behave?
* Feels **Veteran-first** (about the Veteran’s individual relationship with the VA) rather than VA-first.  [(VA Benefit planning, applications, and claims research, pp 85, 92 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
* Reduces complexity: **[Focus on primary tasks, free of distractions](https://design.va.gov/foundation/principles#simple) & provides just enough information** ([mitigate loss of selective attention in older users by limiting the amount of information on the screen](https://digitalscientists.com/blog/ux-design-for-seniors-5-tips/)),
* Is **accessible to Veterans of all abilities** ([Accessibility is core to all design decisions](https://design.va.gov/about/principles)). 
* **Feels reassuring**—it stays on top of things that are in-flight, and makes statuses visible, so Veterans know what is needed from them (or that nothing is needed). [(VA Benefit planning, applications, and claims research, pp ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)<span style="text-decoration:underline;">58, 61, [79 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)</span>
* Is **[actionable - doesn’t give Veterans options that aren’t actionable](https://design.va.gov/foundation/principles)**
* Is **respectful** - Speaks to them in a tone that is not creepy or too casual, **asks permission** to do things (send notifications, access camera or calendar)


### Business Assumptions

**1. We believe our users have a need to** be proactively made aware of & complete the interactions that are timely and relevant to their Veteran experience in a way that is frictionless, tailored to their experience, and does the hard work for them. 

**2. These needs can be solved with** a personalized approach to surfacing feature content in the VA mobile app. 

**3. Our initial users will be** existing users of the VA mobile app.

**4. The #1 value a user wants to get out of a personalized VA mobile app is a** clutter-free, unified view of all their VA interactions and tasks while minimizing content that isn’t specific to them.

**5. The user can also get these additional benefits:** ~~the ability to indicate what’s important to them~~, recommendations for new benefits and services based on their current interactions, the ability to connect with others who are familiar with their particular case, and removes the burden of having to remember important tasks (and when their attention is needed).

**6. We will acquire the majority of our users through** organic growth (future: cross-channel marketing?).

**7. Our primary competition in the market for VA services is** whatever tools or methods Veterans are using to keep track of these tasks now (web & mobile web versions of VA.gov, MyHealtheVet, eBenefits, other assorted VA apps). That said, we should hold ourselves to the higher bar set in terms of user/product experience by commercial apps.

**8. We will beat the competition by** meeting our users’ needs in a way that’s proactive and tailored to _their specific experience_ and that leverages native mobile-specific capabilities. 

**9. Our biggest product risks are that:** 
* We’re not sure if people will actually find value in a personalized or customizable experience, we’re not sure what people mean by “a unified view” of all their VA interactions (and how much information or customization is too much). 
* The gap between web and mobile widens to the point that it’s confusing for Veterans who engage with both. 
* We may not have the staffing to maintain the high level system of personalization, and the home screen becomes overgrown & a dumping ground over time without proper governance.

**10. We will solve these risks through**
* Conducting user research to understand what is valuable to Veterans & whether our concepts are useful to Veterans. 
* Collaborating with our partners at MHV, VA.gov & others to help ensure a cohesive experience across digital touchpoints.
* Create and document a framework and workflow for integrating new personalized content. Socialize it with feature teams. Add personalization conversation to feature kickoffs. Set success metrics for new content & pivot or remove if it's not effective.

**11. We will know we are successful when we see the following changes in user behavior:**
* Users interact with the bubbled-up personalized content (instead of navigating through the tab bar)
* An increase in conversion/task completion that can be traced back to personalized content
* App store reviews mention mention how the app “knows them” 
* Users return to the app repeatedly

**12. What other assumption do we have that, if proven false, will cause our project to fail?**
* Everyone will be able to sign into the app successfully
* Users will have consistent internet access allowing them to use the app & stay connected to APIs
* We can build the technical infrastructure to consistently deliver timely, personalized content in a unified view
    * *Much of our backend services are outside of our team’s control*
* PO sponsorship in the project will continue over the time it takes to build it


## Business Goals & Outcomes
**[Flagship Mobile App Strategy](https://docs.google.com/presentation/d/1j0rO2HvDwHDTzunG3judC1HXOiWfGNTXVciLAkurpRw/edit#slide=id.g1e78b87c057_0_159)**   
**Vision:** "Each Veteran is connected to the VA services that matter most to them, regardless of device, and without understanding the VA org chart.”
* **Objective 1:** Veterans will use authenticated services that are highly personalized and valuable.
* **Objective 3:** Increase active user base.

**[OCTO-DE Goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme)**
* **Goal 6:** Logged-in users have a personalized experience, with relevant and time-saving features.


### Outcomes (measurable): 
TBD
