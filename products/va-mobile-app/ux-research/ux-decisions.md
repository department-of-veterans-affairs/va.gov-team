# UX decisions

August 17, 2020

# Background and goals
Since March 2020, our team has undertaken three research studies to help define the MVP feature set of the VA mobile app. As we move from research into the MVP build, there are decisions we would like to make in partnership with VA, and based on conversations with other VFS teams. The goal of this document is to outine the major UX decisions that we are in the process of making as of August 17, 2020. We want to clarify what these decisions are so we can work together on them with stakeholders. 



## 1. We think we should use a bottom toolbar and we have designed a navigation UI   
We also considered a hamburger menu following the same pattern as VA.gov (titled 'Menu' rather than using an icon). However, because of the relatively small feature set in the MVP and user familiarity with toolbars within apps, we think a toolbar is the best option for launch. Here is some supporting research we did to make this recommendation: 

- **Toolbar navigation**
  - **Pro:** For the MVP features we have, a toolbar is a good fit. All of our navigation items sit at the same level and we can easily use 5 items to provide access to all key features. A 2015 Nielsen Norman article suggests that using a bottom toolbar is appropriate and usable for a use case like ours. 
  - **Pro:** A toolbar is in line with native mobile app conventions and will aid in higher discoverability of features than a hidden menu.
  - **Pro:** A toolbar clearly communicates to users where they are within the app and allows for quick switching between feature areas.
  - **Pro:** A toolbar is within the "thumb zone", allowing some users who are able to navigate the app with one hand. 
  - **Con:** Eventually if the app expands to more areas (e.g. education, pension) and stays as one flag ship app, the toolbar navigation will not fit. 

- **Hamburger menu navigation**
  - **Pro:** A hamburger menu fits a larger amount of navigation items than a toolbar
  - **Con:** A 2016 Nielsen Norman study found that when navigation is hidden, users are less likely to use navigation. Nielsen Norman defines hidden navigation as "main navigation links placed under an icon (such as the hamburger) or button and required an explicit user action to be displayed". 
  - **Con:** Additionally, NN research found that hamburger menus are a better UX choice for browse mostly sites, not sites where the user needs to compelte tasks. This is not our MVP use case.
  
  
After determining a toolbar feels right for us, we created a working IA that includes all features included in the living roadmap and a navigation UI. The main toolbar items from left to right are:
  - Home
  - Claims
  - Health
  - Veterans Crisis Line
  - Profile
  
Additionally, a Settings navigation item would be accessible from the Profile and Home screens and would house the utility functions of the app (managing touch ID, help, app sharing, sign out). 

There has been some discussion about how prominent the Veterans Crisis Line should be. Our point of view is that although the Veterans Crisis Line overall sees less traffic than Claims and Health features on VA.gov, it should be accessible very easily in the event a user ever needs it, and thus belong in the main toolbar. We welcome other points of view and collaboration on this. 

**What are our next steps?**
- We will usability test the high-fi app with Veterans and make IA/navigation adjustments as needed





## 2. Can we can include any more features in the MVP outside what is currently on the living roadmap?
We have had conversations with SMEs at VA and are continuing to talk to teams working on other features that we are including (Claim Status Tool redesign, Logged In homepage redesign). As part of talking to these teams, we are open to learning that there are other "low hanging fruit" features that are highly valuable to Veterans, fit within the MVP purpose of our app, and are technically feasible. One example of this may be direct deposit and payment information. 

**What are our next steps?**
- Continue conversations with VFS teams working on VA.gov to learn from their research, expand our roadmap as we see fit





## 3. Should we use Sketch or Figma? 
We have been using Sketch to build the high-fi prototype. We have found Sketch to be the quickest way to work with VA, iOS, and Android design elements. Additionally, it is DEPO's official tool. It would be nice to have multiple designers working in the same file at once and we see this as Figma's biggest plus.

**What are our next steps?**
- Make a final decision between Ad Hoc and DEPO stakeholders

