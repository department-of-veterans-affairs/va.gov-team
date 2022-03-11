# VA Mobile Comparative Analysis: Navigation UI Patterns

March 11, 2022

[Mural with all the screenshots](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1645116475554/b9c0cc05f453a16c5a4a2f444fbbdd544693d892?sender=u98217f9fb71c48553bdb7841)

## Background & Goals

The VA Mobile app was designed to allow Veterans to more easily complete key transactions across VA Health and Benefits services.

As the app grows in its feature set, the VA Mobile App team needs a better understanding of how Veterans would navigate benefits and health services within the mobile app. We want to ensure that the structure and organization of the app makes sense and can accommodate the new features we have identified as of interest on our roadmap. To determine this, the UX team conducted a comparative analysis to answer the following questions:
* What are the current trends and best practices in terms of navigation for mobile apps dealing with similar data needs?
* Are there navigation pattern differences between market sectors (health vs insurance vs travel, etc)?
* How are apps treating child pages, especially those that are accessible from multiple navigation stacks?
    * Are they using descendant navigation and modality? Why?
* How are apps treating subtasks?
* Do apps' navigation models tend to differ between platforms?
* What do these apps do well that we can apply to our context? What can we do better (for example, in regards to a11y)?

We used Mobbin as well as designers' devices to conduct the comparative analysis. The apps reviewed were primarily on iOS, but we cross-referenced the Google Play store to identify navigation differences between platforms.

_Note: This work is part of the [VA Mobile App: Information Architecture & Navigation Project](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-design/information-architecture-navigation/High%20Level%20Project%20Summary.md)_

_Addresses [#2541](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/2541) and [#2666](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/2666)_

## Apps Reviewed (27)

The comparative analysis included (but was not limited to) app examples that share similar features and/or functionalities with the VA mobile app (ex: robust user/account data, with an emphasis on omnichannel). We also included apps for some of the sites focused on in the [Logged-in Homepage Redesign: Comparative Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/comparative-analysis.md) conducted by the MyVA team. These apps are marked with an asterisk. 

**Pharmacy/Health**
* Walgreens
* GoodRx
* One Medical
* My Chart
* Withings Health Mate
* Apple Health

**Government**
* USPS
* TSA
* VA Rx Refill

**Travel**
* Southwest
* Delta Airlines*
* United 
* American Airlines

**Financial** 
* Bank of America*
* Chase*
* Fidelity*
* USAA*

**Insurance**
* Sydney Health
* State Farm*
* Liberty Mutual

**Retail**
* Walmart (May/June 2021; February 2022)
* H-E-B
* Apple App Store

**Other**
* iOS Settings
* GET (High Ed & Hospital ID Card Management)
* Airtable

## Accessibility

We did not do an accessibility audit of the apps from a navigation standpoint. However, we did note when certain navigation patterns could have accessibility implications (ex. FAB). 


## Summary of Findings

### What are the current trends and best practices in terms of navigation for mobile apps dealing with similar data needs?
1. Having a bottom navigation bar or tab bar as the primary navigation pattern was common in almost all of the apps we reviewed. 
    1. In fact, we noticed that some apps that used different primary navigation in the past recently transitioned to a bottom navigation/tab bar. Examples: Chase and Walmart.
2. A top navigation bar is used as a secondary navigation element in a lot of apps for two purposes:
    2. For global actions (the action is present on all parent-level category screens) such as Chat, Search, Cart, or Settings
    3. For contextual actions (the action is present on a single category landing screen, including Home) such as Profile or Settings 
3. For apps with lots of data, tabs are used within parent or child screens to filter and break down data. 
4. For more task-based apps, the home screen provides status at a glance and easy navigation access to items that require attention.

### Are there navigation pattern differences between market sectors (health vs insurance vs financial vs travel, etc)
* Tab bar/bottom navigation is prevalent across all market sectors we looked at, although what appears in it (categories vs top tasks) varies. 
    * For all sectors, the number of top-level categories within the tab bar/bottom navigation ranges from 3-5. In the case of 3 top-level categories, this is only seen in Apple Health which uses one of the categories as a sort of hub to house all of the health categories in the app.
    * Depth of navigation levels varies by the amount of information the app contains. Retail, health, travel, and other (Airtable and iOS settings) apps that contain a robust catalog of content or require multiple steps tend to have 3-4 navigation levels in order to break up content and reduce cognitive load. More simple task-based apps such as financial and government apps tend to have 1-3 navigation levels. 
* Launchpad/hub navigation was used only by the government apps we looked at—they are simple, task-based apps with destinations that fit entirely on the home screen.
* No apps exclusively used search for navigation—all of them treated it as supplemental to a hierarchical navigation structure.
* Non-traditional navigation patterns for primary navigation were rare and were not used _at all_ in banking, insurance, and government (where clarity and trust are essential). In the rare examples we saw, the departure from traditional patterns was:
    * Atypical navigation drawer/launchpad/navigation bar -  MyChart
    * Navigation drawer/hamburger menu - Walmart (May/June 2021) & Southwest
    * A contextual drawer that slides up from the bottom - American Airlines
  
**There are several different secondary navigation patterns between market sectors:**
1. Personalized home screens:
    1. Travel, retail, banking, insurance, and some health apps featured a personalized home screen, providing details on upcoming flights, orders or current account balances (and easy navigation to those screens). 
2. Customizable home screens:
    2. A few financial, health, and government apps allow users to customize the home screen by ‘favoriting’ specific data (Health or Airports) or by selecting quick actions that should be displayed on the home screen. 
3. Search:
    3. Overall, search is used as a way to locate records or products rather than serving as a global navigation function (as is common on websites). 
    4. Retail apps included an exposed search bar on home and restrict results to products. 
    5. Other market sector apps such as financial and health (as well as the health/pharmacy sections of retail apps) feature search on section landing/list  screens and restrict search to a specific data type (finding an app to download, locating a receipt or charge, or finding a doctor).
4. Tabs: 
    6. Almost all apps used tabs as secondary navigation within child or parent screens to filter or break down content (seen most often in retail and travel sectors). 
5. Hamburger/drawer menus & more menus:
    7. Health, financial, government, insurance, travel, and other apps use hamburger and more menus as a secondary navigation element within bottom or top navigation bars as a catch-all category (settings, resources, privacy policy, profile, or wallet) for less-used features or actions that do not warrant their own parent screen or do not fit within other established categories. 
    8. One health app also used a variation of the hamburger and more menus called ‘browse’ that is a hub style category that contains all of the health categories in the app. 
6. A floating action button (FAB): 
    9. Retail apps such as H-E-B use a FAB on all product related pages to provide access to the cart screen. 

### How are apps treating child screens, especially those that are accessible from multiple navigation stacks? Are they using descendant navigation and modality? Why?

In almost all the apps, navigation to child screens is descendant and a back button is used to ascend the navigation stack. It’s interesting to note that labels for back buttons are used in varying degrees. However, we recommend the VA Mobile app using back buttons that are clearly labeled for accessibility reasons. 

An interesting interaction pattern that we noticed was that while apps are displaying the bottom navigation/tab bar on category screens and section landing/list screens, most apps are dropping the tab bar once a user reaches the detail page level. This treatment could have certain accessibility concerns for users who use screen readers or users with cognitive disabilities. 

We also observed a trend of apps treating child screens that can be accessed from multiple navigation stacks modally. We believe the reason for this is to allow screens several levels down in the IA to be accessed from multiple locations (ex: a prescription detail living within the pharmacy section but also showing up as a module on the home screen when ready for pickup) without back stack implications. 


### How are apps treating subtasks?

Most apps we reviewed handled subtasks modally (as opposed to being displayed within the descendant navigation). When a subtask is triggered from a parent or child screen, a modal comes up from the bottom of the screen. On iOS, the modal does not cover the entire screen and there is some UI indication of the screen behind the modal. On Android, the modal covers the entire screen. Within the modal, users can navigate to the next screen, usually laterally (but sometimes hierarchically). When the modal is open, bottom or top navigation bars do not appear since modals open on top of other screens and are not part of the navigation stack. Clear indicators in the form of cancel or done buttons are used to exit the modal flow and return to the page from which they were triggered. 

With some apps in the comparative analysis, modals opened on top of other modals (ex. Airtable, H-E-B). This goes against Apple’s Human Interface Guidelines and Google’s Material Design best practices and is not something that we recommend for the VA Mobile App. 

Apps also treated some global tasks modally (example: barcode scanners, notifications, chat, cart). We believe that this is because these tasks don’t have a categorical parent within the IA and need to be accessible from many locations within the app.


### Do apps' navigation models tend to differ between platforms?

Examining the treatment of an app’s navigation model on iOS and Android revealed that there isn’t much difference between primary navigation models between platforms at this point. Apps tend to use the same navigation patterns across platforms and in the rare cases that they do differ, a navigation drawer is used on Android versions. Based on the trend we’ve noted of apps transitioning to a bottom navigation/tab bar, these rare differences may not persist for long. 


### What do these apps do well that we can apply to our context?

These suggestion come from the [VA Mobile App - Navigation Model Comparative Analysis: Group Synthesis](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1645819940087/9d4fa5c9527756f1140b052f5f66b1785fd79a5a?sender=u98217f9fb71c48553bdb7841).

* The use of a tab bar which is a well known navigation pattern that users are familiar with and wont have to learn
* Having a contextual home screen to provide easy navigation to items that are relevant and require a user’s attention
* The use of modality to focus subtasks and for screens that can be access from multiple places
* Navigation to global features is handled by a top bar or FAB to highlight that these screens are not part of the navigation stack 
* Including descriptive labels for back buttons that clearly communicate the previous screen
* Having a simple navigation that is easy to follow and doesn’t leave users confused as to where they are or where to navigate to access a feature or action
* Primary navigation is task/action based to provide easy access to what user’s want to accomplish (or what the app want’s users to accomplish)
* Top tasks have a contextual home screen placement and also a permanent place in the navigation to provide easy access to these tasks


### What do these apps struggle with that we can do better (for example, in regards to a11y)?

* Modals are treated inconsistently in terms of screen transition (some push up from the bottom, some push in from the side)
* Icons are not used in meaningful ways to provide clarity, often lack labels, and screens are sometimes overloaded in terms of the number of icons
* In some cases, many menu choices are presented to the user all at once rather than segmented thoughtfully into smaller groups (cognitive load issue)
* The position and presence of global navigation is occasionally not consistent 
* Modals sometimes open on top of other modals 
* Specific-to-me information is buried a few screens down and not easily accessible
* Duplicating content or access to features without adding anything new or cross-referencing
* Back buttons are not clearly labeled to set expectations around where the user will go if they tap


## Recommendations

Based on the analysis we did, we would recommend the following for the VA Mobile App:
* Use a clear well-known navigation pattern so that users do not have to work to understand how to navigate the app.
* Use modals to present subtasks to help users focus on the task being performed.
* Use appropriate screen transitions (slide left & right for forward & backward movement within a lateral flow or up & down a hierarchy; slide up & slide down when opening a modal task)) to establish relationships between screens and a sense of place within the app.
* Consider incorporating secondary navigation patterns to aid navigation within complex parent screens or with providing access to global/contextual features (top bar actions). 
* Maintain primary navigation access throughout the hierarchy (category landing, section landing/list, as well as within child screens) so that users have an understanding of where they are in the app. 
* Provide clear back button labels to reinforce a sense of place within the app and to set expectations about where they will return. 
* Consider providing a home screen that surfaces top tasks and/or items that require a users attention. 
