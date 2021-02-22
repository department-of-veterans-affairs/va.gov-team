# Significant UX Decisions

Last updated: February 22, 2021 

_Decisions made Monday September 21 in alignment between Bridget, Ryan, Martha, Steve, Sophie unless otherwise noted_

# Background and goals
In discovery work beginning March 2020, we determined that Veterans desire a VA mobile app with authenticated features. Through tech and design discovery we decided on an MVP feature set. We are now designing the UX/UI for the MVP app, which will be built in React Native for iOS and Android. 

# Goal of this document
Document significant UX/UI decisions for the MVP and our rationale for making these decisions. 


----


# UI decisions

### We will use VA fonts (Source Sans and Bitter) and heavily leverage iOS and Android platform components. 
Because our scope is an MVP, we want to spend energy on features and login, not customizations. This led us to decide to use system fonts and heavily leverage platform components after exploring the following three design directions listed below:  

**Option 1**
- **Font:** Source Sans Pro and Bitter Bold
- **UI components:** Heavily use VA design library components

**Option 2 (what we're moving forward with):** 
- **Font:** Source Sans Pro and Bitter Bold
- **UI components:** Heavily use platform components, sparingly use VA design library components

**Option 3:** 
- **Font:** Heavily use system fonts with a tiny bit of Bitter bold included
- **UI components:** Heavily use platform components, sparingly use VA design library components

Our rationale for moving forward with **Option 3** is the following: 
1. From a front-end perspective, this decision allows us to launch an MVP as quickly as possible and focus on including more features rather than customizing the app UI. 
2. From a design perspective, this allows us to quickly design the UX/UI that feels like an MVP balance of **VA design** plus **platform design** without creating a mobile-specific version of the VA design library in a rushed, unofficial way. Eventually, we anticipate redesigning the app to look even more like VA (likely when we do a rewrite), however when we do that we would like to be able to meet the following criteria:
    - We have capacity and time to do the design explorations and decision-making needed to craft a meaningful and comprehensive VA mobile style guide. The mobile app team does not have the capacity to dedicate time to creating a mobile-specific style guide as part of our MVP timeline. 
    - The owners of the VA design system each and any other design stakeholders who would like to be involved with the review of mobile design have capacity to do so.


### We will integrate a few choice elements from the VA design library to help the app feel like VA. 
As noted in the above decision, we expect to use some components from the VA design library sparingly to help the app feel like the VA app. These components include:

1. **Profile Header:** The profile header lists a user's name and branch of the military. We anticipate using this on the Profile menu, Personal and Contact Information, Military Information, and Direct Deposit. We feel this is a good place to bring in an element users might find familiar from VA.gov to help communicate that when a user updated information within their profile from the VA mobile app, their information will also be updated on VA.gov. In usability testing, we found that users wanted more clarity between how the app and VA.gov would relate to each other. This UI design decision reinforces the relationship.  

2. **The Claim Status Tool 5 step subway map:** The Claim Status Tool timeline will help reinforce the relationship between the Claim Status Tool on VA.gov and the one within the app. Using this element in the app will ensure that across both properties we're relaying the exact same progress information to users, and we feel this decision will avoid creating confusion that could lead to more calls regarding claim status. We anticipate using this on all claim detail pages.

3. **Alerts**: Platform libraries do not have a great out of the box component for handling alert messages when we want a user to see important information on a page. We know that alerts are used heavily on VA.gov and that we will have content in our app that is presented to users as an alert on VA.gov. We want to have a component that will allow us to convery alert information in a screen without having to use a  modal, which is the primary alert pattern on mobile.

- _As more UI decisions are finalized, more components and rationale for including them in the MVP app may be added here._



### We will use a bottom bar navigation on both iOS and Android.
After discussions with teammates with Android development experience and reviewing the recent changes to the Material Design Library that move away from a navigation drawer and towards a bottom navigation bar ([source](https://material.io/design/navigation/understanding-navigation.html)), we feel using a bottom navigation bar across both platforms is the UI and navigation to move forward with for a few reasons: 
1. First, it is the direction Android is heading and as Android apps are updated more apps will transition to bottom bars. We want to look forwards and avoid having to redesign our Android navigation style soon in the future. 
2. Second, using the same navigation pattern across both platforms will limit our test cases to allow them to be the same across platforms, creating efficiencies in testing.  
3. Third, using the same navigation pattern will allow Veterans who may be sharing information about the app with other Veterans to communicate clearly about app features and functionality when they do so. This feels important to call out because we learned in early discovery research that a common source of information for Veterans is friends who are also Veterans, and we anticipate word of mouth being one of the most common ways that awareness about the app spreads. 
  - Additionally, we have concern about using a drawer that is not labelled clearly, because this breaks from the way the mobile VA.gov site handles navigation with a clear 'Menu' label rather than a hamburger icon. We did some secondary research into navigation usability and developed the following POV about why we feel a bottom navigation is a strong fit for our MVP across platforms:  
    - All of our navigation items sit at the same level and a bottom navigation provides easy access to all key features. A 2015 Nielsen Norman article suggests that using a bottom toolbar is appropriate and usable for a use case like ours (3-5 items). 
    - A bottom navigation generally affords higher discoverability of features than a hidden menu. A 2016 Nielsen Norman study found that when navigation is hidden, users are less likely to use it. Nielsen Norman defines hidden navigation as "main navigation links placed under an icon (such as the hamburger) or button and required an explicit user action to be displayed".
    - A toolbar clearly communicates to users where they are within the app and allows for quick switching between feature areas.
    - A toolbar is within the "thumb zone", allowing some users who are able to navigate the app with one hand. 
 
We anticipate redesigning the navigation post-MVP when the feature set expands. Eventually if the app expands to more areas (e.g. education, pension) and stays as one flagship app, the toolbar navigation will not fit. This will be necessary especially once our app branches out into more features and key features may not fit into a bottom navigation as they do with the MVP. 


### We will deliver a consistent UI across iOS and Android for MVP. This will help make the app more efficient to build and maintain. 
Apple's Human Interface Guidelines and Material Design each have different styling conventions that we have become aware of and taken into account during the UI design process. We are designing for iOS first, but have taken care to not focus too heavily on a UI that feels distinctly Apple and would need significant rework for Android. For MVP, we will follow an approach of making the app more efficient to build and maintain, meaning a fairly high level of consistency across Apple and iOS UI. We will lean into platform conventions for each (e.g. top navigation, bottom bar, pick lists) but not drastically change the rest of the UI to be different on each platform.

_Decision made 10/5_


-----


# Process decisions

### Create wireframes for iOS for initial hand-off to front-end, create Android wireframes as needed.
Using React Native allows us to build once and deploy across both patforms. Because we are leaning into system fonts and platform components, we will take the following approach: 
- Hand off iOS wireframes to the front-end development team 
- Work closely with the front-end development team to refine Android UI together, likely through regular Zoom sync and Slack conversations. At times, we anticipate creating Android-specific wireframes to help communicate the desired UI, however we likely be able to collaborate via conversations to achieve the desired design. 

This decision will give us process effencies, but by no means are we focusing on iOS with greater detail than Android. We will give both platforms the same level of design review and attention, we will simply frontload the iOS design and then turn focus to Android designs. 

### Create cross-device wireframes as needed. 
Similar to the previous decision, we will adjust UI designs for larger devices such as tablets as needed once the front-end work on screens has begun. We will be scaling the app up to tablet for the MVP and want to ensure it is usable, clear, and well designed, and anticipate achieving this via conversations and potentially device-speicifc wireframes as needed. 

### Use Sketch. 
We have found Sketch to be the quickest way to work with VA, iOS, and Android design elements. Additionally, it is DEPO's official tool. It would be nice to have multiple designers working in the same file at once and we see this as Figma's biggest plus. But for the time being we're using Sketch.

### We are erring on the side of less detailed design reviews to speed up launching the MVP. 
As a team, we decided to put an MVP lens on design review and err on the side of giving feedback at this point that feels critical. This will allow us to quickly get the UX work to front-end & meet the November soft/internal launch deadline, knowing we can come back and do more design explorations post-MVP.

_Decision made between Bridget, Martha, Ryan on 9/23_

-----

# Accessibility decisions

### Prioritize accessibility from the very start. 
We see a strong opportunity to consider mobile accessibility from the very start, and we see this as an important UX decision because our MVP target audience is highly likely to have a disability and benefit from strong accessibiltiy features. We want to meet users who use accessibility features on their mobile devices strongly right out of the gate.

We also want to use this project as an opportunity to document what we learn about building native mobile applications with strong accessibility features. 


----


# Content decisions

### We will include the Veterans Crisis line on the unauth homescreen and on the auth homescreen.
There has been some discussion about how prominent the Veterans Crisis Line should be. Our point of view is that although the Veterans Crisis Line overall sees less traffic than Claims and Health features on VA.gov, it should be accessible very easily in the event a user ever needs it. We propose doing this by including the VCL on the homescreens, not as a navigation item in the bottom toolbar due to space restrictions. 
