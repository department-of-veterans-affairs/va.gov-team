# VA Mobile Comparative Analysis: Personalized App Screen

Nov 3, 2021

[Mural with all the screenshots](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1635174954768/d51d0c764558316db573c575c52869d23641ff5a?sender=u8b3dad1075e36fc8c0246487)


## Background & Goals

The VA mobile app launched with a home screen that displayed the same information and features for every user. [Initial beta testers provided feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/prototype-testing/testing-summary.md#a-customized-home-screen-is-highly-useful) that they would want to customize the home screen to include features that are important and useful to them. We undertook a comparative analysis of various native mobile apps to answer the following questions:

* How do these apps allow users to personalize a content screen?
* What features are utilized to allow users to personalize/edit content?
* What kind of personalized information do these apps display?
* What do these apps do well that we can apply to our context? What can we do better?

*Note: We utilized Mobbin to conduct the comparative analysis. The apps reviewed were on iOS.*


## Apps Reviewed

* GoodRx
* Meetup
* Evernote
* Headspace
* Asana
* Fabulous
* Otter
* Twitter
* Spotify 
* Apple Health


## Accessibility

We did not do an accessibility audit of the apps however, we did observe limited consideration for accessibility in some of the apps we reviewed.

In some sections, GoodRx and Evernote utilized a horizontal scroll that required users to swipe to display certain content. This kind of path-based gesture can be isolating for users with limited mobility. We did not have access to a wireless keyboard to test if keyboard keys could be utilized in lieu of swiping. 


## Features


### Common features

These are the features that were almost universal among the apps we reviewed:

* Relevant user information presented as cards
* The ability to save or favorite certain content that’s displayed in one place
* A section that displays recently accessed items 
* A “suggested” section that displays items or information that a user might be interested in based on their past activity


### Less common features

These features were less common among the apps we reviewed:

* The ability to add/remove/organize the content that’s displayed in one place from an edit screen
* The ability to add/remove/organize the content that’s displayed in one place inline
* A section that shows more detail about a certain content (such as a calendar)
* Search functionality that’s present in the same location as the personalized content


### How is content personalized for users? How was content made easier for users to access?

Since users want to see a personalized screen that provides more relevant and useful content to users, we wanted to see how certain apps choose to personalize that content. 

1. Showing relevant user information or updates—usually on the home screen—was a common pattern that we saw in multiple apps. 
    * The relevant content was usually in the form of a card that included the name of the content and details around the content (such as an order number or date).

<img src="https://user-images.githubusercontent.com/72415933/141175436-f04ed89c-6488-49f3-be96-1b1de59bfa1b.png" alt="Screenshots of the GoodRx, Meetup, Evernote, Fabulous, Otter, and Spotify apps that show relevant user information">

2. Showing more detailed information around a particular content was a less common pattern that we saw, but one that could potentially be useful. 
    * The detailed information was usually an expanded look into a particular content that was already displayed (such as a calendar that displays multiple events and not just the next event). 

<img src="https://user-images.githubusercontent.com/72415933/141175782-ceb80564-ff27-41c2-8f75-34b7d7a73194.png" alt="Screenshot of the Meetup app that shows a detailed look at a user's upcoming events" width="150">

3. Showing recently accessed items was a common pattern that we saw in multiple apps.
    * The “recently accessed” section showed a set number of recently accessed items and allowed users to quickly navigate to those items/areas.
    
<img src="https://user-images.githubusercontent.com/72415933/141181695-cfa519d0-41e7-4898-aedb-09d42eec19c8.png" alt="Screenshots of the Evernote, Headspace, Asana, and Spotify apps showing recently accessed items" width="600">

4. Showing a “suggested” section that displays items or information that a user might be interested in was a common pattern that we saw in multiple apps.
    * The suggested section was additional content or features a user might be interested in based on their past activity or provided information. In one case, Evernote, the suggested section was a call to action based on the core functionality of the app

<img src="https://user-images.githubusercontent.com/72415933/141182217-3b2d3120-f25c-46f5-99a2-ef709da41660.png" alt="Screenshots of the Evernote, Fabulous, Otter, and Spotify apps showing suggested content" width="600">

5. Having search functionality in the same place as personalized content was a less common pattern that we saw.
    * This was done by having a search icon button on the personalized content screen. Selecting this icon button will bring up a search overlay where users could search through items/areas in the app and navigate to them. 

<img src="https://user-images.githubusercontent.com/72415933/141182555-2ae02b07-e295-4d6f-b55d-c05186c39338.png" alt="Screenshot of the Headspace search screen" width="150">


### How do users customize the content that they see?

Since users might possibly want to be able to customize the kind of content that displays on their home screen, we wanted to see how certain apps choose to allow that customization. 

1. The ability to favorite or save certain content and then have that content consolidated in one place was a common pattern that we saw in multiple apps. 
    * This was usually done by allowing users to favorite/save content and then having a section for that content on a personalized screen—usually the home screen.

<img src="https://user-images.githubusercontent.com/72415933/141183013-95a217f4-8154-4f71-bf5b-9da7b4c59cab.png" alt="Screenshots of the GoodRx, Meetup, Headspace, Asana, and Apple Health apps showing favorited or saved content" width="750">

2. The ability to add/remove/organize the content that’s displayed on a personalized screen was a less common pattern that we saw, but one that could potentially be useful.
    * This was done by allowing users to select an edit button on the personalized screen that takes them to a customization screen. The screen allowed users to add, remove, or organize the content that was displayed on the personalized screen. 

<img src="https://user-images.githubusercontent.com/72415933/141183750-a98b4aa8-223e-4d17-9014-3f78de7fc87b.png" alt="Screenshot of the Evernote home screen customization screen" width="150">


## Takeaways

* All the apps were fairly standard in how they displayed relevant user information. However, few apps displayed a more inline or on-screen detailed view of the information. 
* Several apps allowed users to favorite or save individual content that was then consolidated on one screen—usually the home screen. 
* Several apps included a recent and/or suggestions section 
* Few apps included the search functionality in the personalized screen. The search function was typically another navigation screen in these apps. 
* Few apps allowed the ability to customize a personalized screen by allowing users to define the kind of content that was included and how that content would be arranged. 


## Recommended Features

Based on the analysis we did, we would recommend the following features for a personalized screen in the VA mobile app:

* Have relevant content on the personalized screen that provides users with meaningful information.
* Provide users a way to select the kind of content they see on their personalized screen.
    * Either by allowing them to favorite the content they want to display on their personalized screen or by allowing them to edit the personalized screen by adding, removing, or rearranging content.  
* Provide users with a “recent” section on the personalized screen so that they can navigate back to previously accessed content.

We also recommend the following considerations:

* Consider including a “suggestions” section on the personalized screen that could provide users with information or features they may be interested in.
* If users are able to favorite features, explore the need of including a search function on the personalized screen to facilitate navigation. 

*Note: These features do not take into account any research findings from the My VA team.*
