# DRAFT: VA Mobile app: Personalization 2022 - Design Strategy Worksheet
May 2022

*This worksheet was created from an amalgamation of sources ([Lean UX](https://www.oreilly.com/library/view/designing-for-product/9781491971451/ch05.html) and [others](http://others)) to help cross-functional teams to align and clearly frame problems and testable product hypotheses. It is ideally completed together by UX, Product Management, and User Research, and should act as the foundation for ideation sessions (it can also be used to gut-check projects that are in-process). It should be used in conjunction with (but completed prior to) a Product Requirements Brief, user stories, [Product Design Brief](https://docs.google.com/document/d/1nL34TAkeUJFThBWdnjpFEvJ3oKA8FkdYGXgLd9TLyfA/edit#heading=h.n8e3xxx5wfij:~:text=8-,VA%20Mobile%20app%3A%20Personalization%20%0BDesign%20Strategy%20Worksheet,-11)), etc. Questions? [holly.collier@adhocteam.us](mailto:holly.collier@adhocteam.us)* 


# Part I


## Business + User Assumptions

*High level declarations of what we believe to be true.*


### User Assumptions*

#### 1. Who is our user?
Our target users are Veterans with mobile devices who [have VA accounts & are actively using benefits like Health, Claims, and Education](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Product-Outline.md) _(% of users who are actually using our app & fall under this category is unknown—this is an assumption that needs research)_.

#### 2. Where does a personalized VA mobile app experience fit in their work or life?
A personalized VA mobile app helps Veterans to keep up with and manage their current interactions (and discover their possible future interactions) while accessing benefits across the VA in a way that’s focused on supporting their individual experience, wherever they are in their sometimes confusing and frustrating Veteran journey.

#### 3. What user problems will a personalized VA mobile app experience solve? 

**Current:** 
* **User problems:**
     * It’s “all one VA” to the Veteran, but the VA is siloed & doesn’t <span style="text-decoration:underline;">present a unified view of their interaction with the VA. [(Benefit planning, applications, and claims research, p64 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)</span>
        * Veterans need quick access to key documents.
        * Veterans check the status of their benefits claims frequently and through multiple channels in the hope that they can find better or more up-to-date information. [Benefit planning, applications, and claims research - VCRD D5 Research Readout (Frog, March 2016) ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
        * Signing in to various VA websites is tedious and difficult.
* **Solution:** The VA app allows Veterans[ to review the status of current activities across VA departments and to have focused access to key tasks and documents without needing to sign in repeatedly. ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Product-Outline.md#desired-user-outcomes)

**Future:**
* **User problems:**
    * The VA system is fragmented, and the burden is currently on the Veteran to help themselves (and connect the dots between pieces of the system on their own). [Veteran health experience and patient portal research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/OCTO%20health%20research%20report%2022%20Mar%202021.pdf) (March 2021)
       * It’s “all one VA” to the Veteran, but the VA is siloed & doesn’t <span style="text-decoration:underline;">present a unified view of their interaction with the VA. [(Benefit planning, applications, and claims research, p64 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)</span>
            * Veterans have to apply, follow-up, ask for things, keep track of things. [(Benefit planning, applications, and claims research, p79 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
            * Veterans check the status of their benefits claims frequently and through multiple channels in the hope that they can find better or more up-to-date information. [Benefit planning, applications, and claims research - VCRD D5 Research Readout (Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
            * Veterans don’t necessarily know what benefits they are eligible for, and are potentially ashamed about accessing them or asking questions. [(VA Benefit planning, applications, and claims research, p 40 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
            * Veterans can feel like they’re in the dark when it comes to … **keeping up** with what’s happening (and needed from them) with accessing their benefits. [(VA Benefit planning, applications, and claims research, pp ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)<span style="text-decoration:underline;">58, 61, [79 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)</span>
            * Signing in to various VA websites is tedious and difficult.
            * Veterans need quick access to key documents.
        * The VA system is complex and confusing, and Veterans are in need of support throughout their journey.. [Veteran health experience and patient portal research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/OCTO%20health%20research%20report%2022%20Mar%202021.pdf) (March 2021 [Harvard-VA Executive Presentation - Meeting veterans where they are: their smartphones](https://docs.google.com/presentation/d/161RAuAzRjqx3qeS-w3O1rYMZSDh8QoTu/edit#slide=id.g8407c2ba46_0_473)
            * There is a lot of content and information involved in order to use VA services and benefits, and it requires a high cognitive load to find what’s actually relevant to the individual (40% of Veterans are disabled).
            * The current claims process makes Veterans feel vulnerable (which goes against their military conditioning) and like they’re not in control. [Logged-in homepage Past Research Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
            * Veterans are in need of support, guidance & connection from others at various times during their journey, and they don’t always know where to get help. [(VA Benefit planning, applications, and claims research, pp 37, 53, 74, 97 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
        * The Veteran journey varies a lot between individuals, but the current digital properties are for a general audience & not tailored to the individual.
            * VA knows a lot about a Veteran, doesn’t use the info wisely, asks the same questions over & over.[(Benefit planning, applications, and claims research, p79 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
            * VA doesn’t surface programs or benefits based on what they know about Veteran
            * The app’s current home screen is not tailored to the individual, and it may or may not reflect what’s actually important to the individual at this point in their life and Veteran journey.

#### 4. When and how is a personalized VA mobile app experience used? 
_These are assumptions - need research to back them up._

* The **primary** use of the personalized VA mobile app is to help Veterans stay on top of daily tasks & statuses from a variety of VA departments and quickly complete whatever related task is necessary, wherever they are (and without having to be in front of a desktop computer).   
* The **secondary** uses of the personalized VA mobile app is to help Veterans discover & investigate VA benefits that they might not yet be using, wherever they are (and without having to be in front of a desktop computer), and to connect with others to receive support and guidance in their Veteran journey. *Planting the seed   
* The **tertiary** use of the personalized VA mobile app is for a family member or caregiver to manage daily interactions with the VA on behalf of the Veteran.

#### 5. What benefits and features are important to a personalized VA mobile app experience?

A personalized VA mobile app will give Veterans the ability to manage their current actions (and discover their possible future interactions) across the VA. It should:



* Offer a **[high-level view of a Veterans’ current interactions with the VA (across multiple channels)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#participants-want-a-page-that-is-focused-on-current-information-specific-to-them-rather-than-generalized-information-for-all-veterans)**
* **Anticipate Veterans’ needs** & do the hard work for them by [surfacing content and/or proactively notifying them about tasks that are timely & relevant to their individual context](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#veterans-want-new-information-to-be-clear-to-them-when-they-log-in-and-expect-to-receive-new-information-through-multiple-channels)
* [Scale to support different phases of the Veteran lifecycle ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#the-logged-in-homepage-needs-to-scale-to-support-every-phase-of-the-veteran-lifecycle)
* Provide **easy** **access to the things they use the most**:[ records and documents](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#easy-access-to-documents-from-the-homepage-was-important-for-participants), [frequently accessed features](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#participants-are-primarily-interested-in-completing-healthcare-and-disability-related-tasks-such-as-messaging-ordering-medication-and-checking-claim-status)
* Be **accessible** **to Veterans of all abilities** ([Accessibility is core to all design decisions](https://design.va.gov/foundation/principles#usable-by-everyone)). 
* **[Allow users to discover VA benefits that they might not yet be using. ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#the-logged-in-homepage-needs-to-scale-to-support-every-phase-of-the-veteran-lifecycle)**
* **Allow users to connect with others who know their case** (inside & outside the VA) **when they need support** & guidance navigating their benefits. [(VA Benefit planning, applications, and claims research, pp 37, 53, 74, 97 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)

#### 6. How should a personalized VA mobile app experience look/feel/behave?



* Gives Veterans the feeling of **control and comfort** in their Veteran journey.  [(VA Benefit planning, applications, and claims research, pp ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)<span style="text-decoration:underline;">58, 61, [79 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)</span>
* ~~Gives Veterans a **sense of pride**~~
* Feels like it’s about **THEIR individual relationship with the VA** (rather than VA-first).  [(VA Benefit planning, applications, and claims research, pp 85, 92 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
* Puts **content over chrome**: [leverages navigation & IA that feels familiar and easy to traverse,](https://medium.com/@tomasslavicek/designing-a-mobile-interface-for-older-people-1c9b70fd645c#:~:text=to%20use.%20Basic-,navigation,-buttons%20(hardware%20or) so focus is on the content
* Reduces complexity: **[Focus on primary tasks, free of distractions](https://design.va.gov/foundation/principles#simple) & provides just enough information** ([mitigate loss of selective attention in older users by limiting the amount of information on the screen](https://digitalscientists.com/blog/ux-design-for-seniors-5-tips/)),
* **Is reassuring**—stays on top of things that are in-flight so they know what is needed from them & what to do next. [(VA Benefit planning, applications, and claims research, pp ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)<span style="text-decoration:underline;">58, 61, [79 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)</span>
* Is **[actionable - doesn’t give Veterans options that aren’t actionable](https://design.va.gov/foundation/principles)**
* Is **respectful** - Speaks to them in a tone that is not creepy or too casual, **asks permission** to do things (send notifications, access camera or calendar)


### Business Assumptions

**1. We believe our users have a need to** be proactively made aware of & complete the interactions that are timely and relevant to their Veteran experience in a way that is frictionless, tailored to their experience, and does the hard work for them. 

**2. These needs can be solved with** personalized content in the VA mobile app. 

**3. Our initial users will be** existing users of the VA mobile app.

**4. The #1 value a user wants to get out of a personalized VA mobile app is a** clutter-free, unified view of all their VA interactions and tasks while minimizing content that isn’t specific to them.

**5. The user can also get these additional benefits:** the ability to indicate what’s important to them, recommendations for new benefits and services based on their current interactions, the ability to connect with others who are familiar with their particular case, and removes the burden of having to remember important tasks (and when their attention is needed).

**6. We will acquire the majority of our users through** organic growth (future: cross-channel marketing?).

**7. Our primary competition in the market for VA services is** whatever tools or methods Veterans are using to keep track of these tasks now (web & mobile web versions of VA.gov, MyHealtheVet, eBenefits, other assorted VA apps). That said, we should hold ourselves to the higher bar set in terms of user/product experience by commercial apps.

**8. We will beat the competition by** meeting our users’ needs in a way that’s proactive and tailored to _their specific experience_ and that leverages native mobile-specific capabilities. 

**9. Our biggest product risk is that:** 
* We’re not sure if people will actually find value in a personalized or customizable experience, we’re not sure what people mean by “a unified view” of all their VA interactions (and how much information or customization is too much).  
* We may not be able to measure whether our work is successful/useful to Veterans.
* The gap between web and mobile widens to the point that it’s confusing for Veterans who engage with both. 
* We may not have the staffing to maintain the high level system of personalization, and the home screen becomes overgrown & a dumping ground over time without proper governance.

**10. We will solve this risk through**



* Conducting user research to understand what is valuable to Veterans & whether our concepts are useful to Veterans. 
* Setting up ways to measure our success: define quantitative & qualitative metrics (including longitudinal studies).
* Collaborating with our partners at MHV, VA.gov & others to help ensure a cohesive experience across digital touchpoints.
* Create and document a framework and workflow for integrating new personalized content. Socialize it with feature teams. Add personalization conversation to feature kickoffs.

**11. We will know we are successful when we see the following changes in user behavior:**



* Users interact with the bubbled-up personalized content (instead of navigating through the tab bar)
* An increase in conversion/task completion that can be traced back to personalized content
* App store reviews mention personalization positively
* Individual users engage with more app features over time
* Users return to the app repeatedly

**12. What other assumption do we have that, if proven false, will cause our project to fail?**

* Everyone will be able to sign into the app successfully
* Users will have consistent internet access allowing them to use the app
* We can build the technical infrastructure to consistently deliver timely, personalized content in a unified view
    * *Much of our backend services are outside of our team’s control*
* PO sponsorship in the project will continue over the time it takes to build it


## Business Goals & Outcomes


### [Business Goals:](https://docs.google.com/document/d/1jN-SZCvkgo82kOIQaoW24Pw9lDpki9DTmFv9UoE-fLA/edit)

#### Redesign/Personalization Goals

* TBD
* 

#### VA Goals

* [**OCTO-DE objectives**](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme) 
    * Increase the <span style="text-decoration:underline;">usage and throughput</span> of VA services
    * <span style="text-decoration:underline;">Decrease the time Veterans spend waitin</span>g for an outcome
    * <span style="text-decoration:underline;">Increase the quality and reliability</span> of VA services
* [**OCTO-DE goals**](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme) 
    * Veterans can <span style="text-decoration:underline;">manage their health services online</span>
    * Logged-in users can <span style="text-decoration:underline;">easily track applications, claims, or appeals online</span>
    * Logged-in users have a <span style="text-decoration:underline;">personalized experience, with relevant and time-saving features</span>


### Outcomes (measurable): 
* [DRAFT: VA Mobile App Personalization Product Brief - Measuring success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/product/Personalization-Product-Brief-2022.md#measuring-success)
* [DRAFT: Nav/Personalization OKRs](https://docs.google.com/document/d/1wrxPT2Ota4XirzsL4PgfUjsa1ScR47xRiLjNjG9iArE/edit) 



# Part II


## Problem Definition

_What problem are we solving & for who?_

> Format:
> _**[product or feature]** _was designed to_ **[user problem it’s intended to solve]** _for_ **[description of user who has the problem]**._
> 
> _We have observed that because **[user behavior/issue we’re observing in our research/metrics],** our **[product or feature]** is not successfully **[user problem it’s intended to solve]**_
> 
> _This is causing_ **[market outcome]_._**
> 
> _*Cite existing User Research (quant and/or qual) or outside sources to identify both the “who” and the issues/behaviors we’re observing, if possible (if not, mark as assumption)._




**The VA mobile app** _was designed to_ **give Veterans repeated, [focused access to key tasks and documents, and keep track of the status of current activities across VA departments without needing to sign in repeatedly](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Product-Outline.md#desired-user-outcomes)** _for_ **Veterans who are actively engaged with VA health and benefits services.**

We have observed that **research participants report downloading the app to see if it can help them (but then not using it regularly) and metrics indicate that users who  initially download the app do not actively use the app over time.** As a result, the **VA mobile app** _may not be not successfully_ **providing Veterans with a way to keep track of their activities across VA departments in a way that’s worth returning to.**

_This is causing_ **Veterans to use other channels for tracking their activities with VA _._**



## Hypothesis Statement  + Success Metrics/Market Outcomes

_**Hypothesis:** More granular descriptions of our assumptions that target areas of our product for experimentation._

_**Outcomes:** The signal we seek from the market to help us validate or invalidate our hypothesis. These are often quantitative, but can also be qualitative._

> _We believe that **[building this feature] [for these people]**_ _will achieve **[this user benefit]**._
> _We will know we’re **[right/wrong]** when we see the following feedback from the market:_**[qualitative feedback]_ and/or _[quantitative feedback]_ and/or _[key performance indicator]_._**  
> We believe that **[building this feature] [for these people]**_ _will achieve **[this user benefit]**._
> _We will know we’re **[right/wrong]** when we see the following feedback from the market:_**[qualitative feedback]_ and/or _[quantitative feedback]_ and/or _[key performance indicator]_._**

# Part III


## Ideation: How might we...?
> 
> _(Use HMWs combined with the Problem Definition and Hypothesis Statement as the prompt for an ideation session. Example: [Design Studio](https://www.nngroup.com/articles/facilitating-design-studio-workshop/))._


# Part IV


## Product & Design Iteration Framework 

_(Once you’ve got some ideas to explore, use the [Product & Design Iteration Framework](https://docs.google.com/document/d/17Stwi9E2wrTvwAh634dDQ3szfrcABPFf/edit#) to work iteratively & intentionally when planning product & feature roadmaps)_
